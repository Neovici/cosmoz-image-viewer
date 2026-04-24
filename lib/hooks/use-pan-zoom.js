import { useCallback, useEffect, useReducer, useRef } from '@pionjs/pion';
import {
	ERROR,
	PANNING,
	PINCHING,
	initState,
	panZoomReducer,
} from '../reducers/pan-zoom';
import { getFitScale } from '../utils';
import { useResize } from './use-resize';
import { useSpring } from './use-spring';

const getStyle = (opts, zoom, panX, panY) => {
		const { iw = 100, ih = 100, cw = 100, ch = 100 } = opts,
			fitScale = getFitScale(iw, ih, cw, ch),
			scale = fitScale * zoom;

		return {
			transform: [
				'translate(-50%, -50%)',
				`translate(${panX}px, ${panY}px)`,
				`scale(${scale})`,
			].join(' '),
		};
	},
	/**
	 * Convert a clientX/clientY position to container-center-relative coords.
	 */
	toOrigin = (clientX, clientY, containerRef) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) {
			return { originX: 0, originY: 0 };
		}
		return {
			originX: clientX - rect.left - rect.width / 2,
			originY: clientY - rect.top - rect.height / 2,
		};
	},
	/**
	 * Tracks zoom, pinch and pan interactions of an image inside of a container.
	 * Uses a state machine reducer with PointerEvent API for unified input handling.
	 *
	 * @param  {Number} [zoomStiffness=0.08] controls the speed of the snap-back animation
	 * @return {Object}                      the state, available transitions and css styles
	 */
	usePanZoom = (zoomStiffness = 0.08) => {
		const [state, dispatch] = useReducer(panZoomReducer, initState),
			containerRef = useRef(),
			touchStartRef = useRef(null),
			touchTimerRef = useRef(null);

		// --- Callbacks for image lifecycle ---
		const load = useCallback(() => dispatch({ type: 'load' }), [dispatch]),
			loaded = useCallback(
				(dimensions) => dispatch({ type: 'loaded', dimensions }),
				[dispatch],
			),
			error = useCallback(() => dispatch({ type: 'error' }), [dispatch]),
			zoomTo = useCallback(
				(zoom) => dispatch({ type: 'zoom', zoom }),
				[dispatch],
			);

		// --- Resize ---
		const onResize = useCallback(
			(rect) => rect && dispatch({ type: 'resize', rect }),
			[dispatch],
		);
		const resize = useCallback(
			() =>
				onResize(
					containerRef.current && containerRef.current.getBoundingClientRect(),
				),
			[onResize],
		);
		useResize(onResize, containerRef.current);

		// --- Image load ---
		const onImageLoad = useCallback(
			(event) =>
				loaded({
					iw: event.target.naturalWidth,
					ih: event.target.naturalHeight,
				}),
			[loaded],
		);

		// --- Pointer events (unified mouse + touch via PointerEvent API) ---
		const onPointerDown = useCallback(
			(ev) => {
				if (ev.pointerType === 'mouse' || ev.pointerType === 'pen') {
					const target = ev.composedPath()[0];
					const container = containerRef.current;
					if (
						target === container ||
						target === container?.querySelector('.transform-group')
					) {
						containerRef.current?.setPointerCapture(ev.pointerId);
						dispatch({
							type: 'pointerdown',
							id: ev.pointerId,
							x: ev.clientX,
							y: ev.clientY,
						});
					}
					return;
				}

				if (touchStartRef.current) {
					clearTimeout(touchTimerRef.current);
					touchTimerRef.current = null;
					containerRef.current?.setPointerCapture(touchStartRef.current.id);
					dispatch({
						type: 'pointerdown',
						id: touchStartRef.current.id,
						x: touchStartRef.current.x,
						y: touchStartRef.current.y,
					});
					touchStartRef.current = null;
					containerRef.current?.setPointerCapture(ev.pointerId);
					dispatch({
						type: 'pointerdown',
						id: ev.pointerId,
						x: ev.clientX,
						y: ev.clientY,
					});
					return;
				}

				touchStartRef.current = {
					id: ev.pointerId,
					x: ev.clientX,
					y: ev.clientY,
				};
				touchTimerRef.current = setTimeout(() => {
					touchTimerRef.current = null;
					touchStartRef.current = null;
				}, 200);
			},
			[dispatch],
		);

		const onPointerMove = useCallback(
			(ev) => {
				if (
					touchTimerRef.current != null &&
					touchStartRef.current?.id === ev.pointerId
				) {
					const start = touchStartRef.current;
					if (Math.hypot(ev.clientX - start.x, ev.clientY - start.y) > 10) {
						clearTimeout(touchTimerRef.current);
						touchTimerRef.current = null;
						containerRef.current?.setPointerCapture(start.id);
						dispatch({
							type: 'pointerdown',
							id: start.id,
							x: start.x,
							y: start.y,
						});
						touchStartRef.current = null;
					} else {
						return;
					}
				}

				const { originX, originY } = toOrigin(
					ev.clientX,
					ev.clientY,
					containerRef,
				);
				dispatch({
					type: 'pointermove',
					id: ev.pointerId,
					x: ev.clientX,
					y: ev.clientY,
					containerOriginX: originX,
					containerOriginY: originY,
				});
			},
			[dispatch],
		);

		const pinchOriginRef = useRef({ x: 0, y: 0 });

		// Track the last pinch midpoint for focal-point-adjusted zoom clamp on release
		useEffect(() => {
			if (state.interaction !== PINCHING) {
				return;
			}
			const ids = Object.keys(state.pointers);
			if (ids.length >= 2) {
				const a = state.pointers[ids[0]];
				const b = state.pointers[ids[1]];
				const midX = (a.x + b.x) / 2;
				const midY = (a.y + b.y) / 2;
				const { originX, originY } = toOrigin(midX, midY, containerRef);
				pinchOriginRef.current = { x: originX, y: originY };
			}
		}, [state.pointers, state.interaction]);

		const onPointerUp = useCallback(
			(ev) => {
				if (touchStartRef.current?.id === ev.pointerId) {
					clearTimeout(touchTimerRef.current);
					touchTimerRef.current = null;
					touchStartRef.current = null;
					return;
				}

				try {
					containerRef.current?.releasePointerCapture(ev.pointerId);
				} catch {
					/* ignore if not captured */
				}
				dispatch({
					type: 'pointerup',
					id: ev.pointerId,
					settleOriginX: pinchOriginRef.current.x,
					settleOriginY: pinchOriginRef.current.y,
				});
			},
			[dispatch],
		);

		// --- Wheel zoom ---
		const onWheel = useCallback(
			(event) => {
				event.preventDefault();
				const { originX, originY } = toOrigin(
					event.clientX,
					event.clientY,
					containerRef,
				);
				dispatch({
					type: 'wheel',
					delta: -Math.sign(event.deltaY) * 0.8,
					originX,
					originY,
				});
			},
			[dispatch],
		);

		// --- Spring animation ---
		// All three springs use the same stiffness to prevent focal-point drift.
		// During interaction: fast (0.8-0.9) to follow fingers.
		// When idle (including snap-back): slow (zoomStiffness) so zoom+pan
		// converge together at the same rate.
		const isPinching = state.interaction === PINCHING;
		const isInteracting =
			state.interaction === PANNING || state.interaction === PINCHING;

		let stiff = zoomStiffness;
		if (isPinching) {
			stiff = 0.8;
		} else if (isInteracting) {
			stiff = 0.9;
		}

		const springZoom = useSpring(state.zoom, stiff);
		const springX = useSpring(state.panX, stiff);
		const springY = useSpring(state.panY, stiff);

		return {
			...state,
			load,
			loaded,
			error,
			zoomTo,
			resize,
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onImageLoad,
			onWheel,
			containerRef,
			style: getStyle(state, springZoom, springX, springY),
		};
	};

export { ERROR, usePanZoom };
