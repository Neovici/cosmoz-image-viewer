import {
	useMemo, useCallback, useReducer, useEffect, useRef
} from '@pionjs/pion';
import { useSpring } from './use-spring';
import { useMousePan, DRAGGING } from './use-mouse-pan';
import { useTouchPan, DRAGGING as TOUCH_DRAGGING } from './use-touch-pan';
import { useResize } from './use-resize';
import { getFitScale } from '../utils';
import {
	usePinch, PINCHING
} from './use-pinch';
import {
	panZoomReducer, initState, ERROR
} from '../reducers/pan-zoom';

const getStyle = (opts, zoom, panX, panY) => {
		const {
				iw = 100,
				ih = 100,
				cw = 100,
				ch = 100
			} = opts,
			fitScale = getFitScale(iw, ih, cw, ch),
			scale = fitScale * zoom;

		return {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: [
				'translate(-50%, -50%)',
				`translate(${ panX }px, ${ panY }px)`,
				`scale(${ scale })`
			].join(' ')
		};
	},

	/**
	 * Converts page coordinates to container-center-relative coordinates.
	 */
	toContainerOrigin = (pageX, pageY, containerRef) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return {};
		return {
			originX: pageX - rect.left - rect.width / 2,
			originY: pageY - rect.top - rect.height / 2,
		};
	},

	/**
	 * Tracks zoom, pinch and pan interactions of an image inside of a container.
	 * @param  {Number} [panStiffness=0.3]   controls the speed of the pan animation
	 * @param  {Number} [zoomStiffness=0.08] controls the speed of the zoom animation
	 * @return {Object}                      the state, available transitions and css styles
	 */
	usePanZoom = (panStiffness = 0.3, zoomStiffness = 0.08) => {
		const [state, dispatch] = useReducer(panZoomReducer, initState),

			load = useCallback(() => dispatch({ type: 'load' }), [dispatch]),
			loaded = useCallback(dimensions => dispatch({
				type: 'loaded',
				dimensions
			}), [dispatch]),
			error = useCallback(() => dispatch({ type: 'error' }), [dispatch]),
			zoomBy = useCallback((delta, bounded = true, originX, originY) => dispatch({
				type: 'zoomBy',
				delta,
				bounded,
				originX,
				originY,
			}), [dispatch]),
			zoomTo = useCallback(zoom => dispatch({
				type: 'zoom',
				zoom
			}), [dispatch]),

			containerRef = useRef(),
			onResize = useCallback(rect => rect && dispatch({
				type: 'resize',
				rect
			}), [dispatch]),
			resize = useCallback(() => onResize(containerRef.current && containerRef.current.getBoundingClientRect()), [onResize, containerRef]);

		useResize(onResize, containerRef.current);

		const onImageLoad = useCallback(event => loaded({
				iw: event.target.naturalWidth,
				ih: event.target.naturalHeight
			}), [loaded]),

			// --- Wheel zoom: zoom toward pointer ---
			onWheel = useCallback(event => {
				event.preventDefault();
				const { originX, originY } = toContainerOrigin(
					event.clientX, event.clientY, containerRef,
				);
				zoomBy(-Math.sign(event.deltaY) * 0.8, true, originX, originY);
			}, [zoomBy, containerRef]),

			// --- Pinch zoom: zoom toward finger center ---
			[pinchStatus, pinchDelta, startPinch, pinchCenterX, pinchCenterY] = usePinch(),
			pinching = pinchStatus === PINCHING;

		useEffect(() => {
			if (pinchDelta === 0) return;
			const { originX, originY } = toContainerOrigin(
				pinchCenterX, pinchCenterY, containerRef,
			);
			zoomBy(pinchDelta * 0.01 * state.zoom, false, originX, originY);
		}, [pinchDelta, zoomBy]);
		useEffect(() => !pinching && zoomBy(0), [pinching, zoomBy]);

		// --- Pan: mouse and touch deltas go through the reducer ---
		const [mouseStatus, mouseDX, mouseDY, mouseTS, startMousePan] = useMousePan(),
			[touchStatus, touchDX, touchDY, touchTS, startTouchPan] = useTouchPan(),
			panning = mouseStatus === DRAGGING || touchStatus === TOUCH_DRAGGING;

		// Accumulate mouse pan deltas
		useMemo(() => {
			if (mouseDX !== 0 || mouseDY !== 0) dispatch({ type: 'pan', dx: mouseDX, dy: mouseDY });
		}, [mouseTS]);

		// Accumulate touch pan deltas
		useMemo(() => {
			if (touchDX !== 0 || touchDY !== 0) dispatch({ type: 'pan', dx: touchDX, dy: touchDY });
		}, [touchTS]);

		// Clamp pan to bounds when interaction stops
		useEffect(() => {
			if (!panning) dispatch({ type: 'panEnd' });
		}, [panning]);

		const springX = useSpring(state.panX, panning ? 0.9 : panStiffness),
			springY = useSpring(state.panY, panning ? 0.9 : panStiffness),
			springZoom = useSpring(state.zoom, pinching ? 0.8 : zoomStiffness);

		return {
			...state,

			load,
			loaded,
			error,
			zoomBy,
			zoomTo,
			resize,
			startMousePan,
			startTouchPan,
			startPinch,

			onImageLoad,
			onWheel,

			containerRef,

			style: getStyle(state, springZoom, springX, springY)
		};
	};


export {
	usePanZoom, ERROR
};
