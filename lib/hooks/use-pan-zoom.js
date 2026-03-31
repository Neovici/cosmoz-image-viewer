import { useMemo, useCallback, useReducer, useRef } from '@pionjs/pion';
import { useSpring } from './use-spring';
import { useResize } from './use-resize';
import { getFitScale } from '../utils';
import {
	panZoomReducer,
	initState,
	ERROR,
	PINCHING,
	SETTLING,
	PANNING,
} from '../reducers/pan-zoom';

const getStyle = (opts, zoom, panX, panY) => {
		const { iw = 100, ih = 100, cw = 100, ch = 100 } = opts,
			fitScale = getFitScale(iw, ih, cw, ch),
			scale = fitScale * zoom;

		return {
			position: 'absolute',
			top: '50%',
			left: '50%',
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
	 * @param  {Number} [panStiffness=0.3]   controls the speed of the pan animation
	 * @param  {Number} [zoomStiffness=0.08] controls the speed of the zoom animation
	 * @return {Object}                      the state, available transitions and css styles
	 */
	usePanZoom = (panStiffness = 0.3, zoomStiffness = 0.08) => {
		const [state, dispatch] = useReducer(panZoomReducer, initState),
			containerRef = useRef();

		// --- Callbacks for image lifecycle ---
		const load = useCallback(() => dispatch({ type: 'load' }), [dispatch]),
			loaded = useCallback(
				(dimensions) => dispatch({ type: 'loaded', dimensions }),
				[dispatch],
			),
			error = useCallback(
				() => dispatch({ type: 'error' }),
				[dispatch],
			),
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
					containerRef.current &&
						containerRef.current.getBoundingClientRect(),
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
		const springZoomRef = useRef(1);

		const onPointerDown = useCallback(
			(ev) => {
				containerRef.current?.setPointerCapture(ev.pointerId);
				dispatch({
					type: 'pointerdown',
					id: ev.pointerId,
					x: ev.clientX,
					y: ev.clientY,
					currentZoom: springZoomRef.current,
				});
			},
			[dispatch],
		);

		const onPointerMove = useCallback(
			(ev) => {
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

		// Track the last pinch midpoint for settle origin
		useMemo(() => {
			if (state.interaction !== PINCHING) {
				return;
			}
			const ids = Object.keys(state.pointers);
			if (ids.length >= 2) {
				const a = state.pointers[ids[0]];
				const b = state.pointers[ids[1]];
				const midX = (a.x + b.x) / 2;
				const midY = (a.y + b.y) / 2;
				const { originX, originY } = toOrigin(
					midX,
					midY,
					containerRef,
				);
				pinchOriginRef.current = { x: originX, y: originY };
			}
		}, [state.pointers, state.interaction]);

		const onPointerUp = useCallback(
			(ev) => {
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
		const isSettling = state.interaction === SETTLING;
		const isPinching = state.interaction === PINCHING;
		const isPanning =
			state.interaction === PANNING ||
			state.interaction === PINCHING;

		// Zoom spring: during pinch track fast, during settle animate to target
		const zoomTarget = isSettling ? state.settleTargetZoom : state.zoom;
		const zoomStiff = isPinching ? 0.8 : zoomStiffness;
		const springZoom = useSpring(zoomTarget, zoomStiff);
		springZoomRef.current = springZoom;

		// Pan: during settling, derive from zoom spring to preserve focal point
		let visualPanX = state.panX;
		let visualPanY = state.panY;
		if (isSettling && state.settleStartZoom !== 0) {
			const ratio = springZoom / state.settleStartZoom;
			visualPanX =
				state.settleOriginX +
				(state.settleStartPanX - state.settleOriginX) * ratio;
			visualPanY =
				state.settleOriginY +
				(state.settleStartPanY - state.settleOriginY) * ratio;
		}

		// Pan springs: instant during settling (derived), fast during interaction, normal otherwise
		let panStiff = panStiffness;
		if (isSettling) {
			panStiff = 1;
		} else if (isPanning) {
			panStiff = 0.9;
		}
		const springX = useSpring(visualPanX, panStiff);
		const springY = useSpring(visualPanY, panStiff);

		// Detect when settling zoom spring has converged
		if (isSettling && Math.abs(springZoom - state.settleTargetZoom) < 0.001) {
			dispatch({ type: 'settled' });
		}

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

export { usePanZoom, ERROR };
