import { useMemo, useCallback, useReducer, useEffect, useRef } from 'haunted';
import { useSpring } from './use-spring';
import { usePan } from './use-pan';
import { useResize } from './use-resize';
import { getFitScale, calculateBounds } from '../utils';
import { usePinch, PINCHING } from './use-pinch';
import { panZoomReducer, initState, ERROR } from '../reducers/pan-zoom';

const getStyle = ({iw = 100, ih = 100, cw = 100, ch = 100}, zoom, panX, panY) => {
	const fitScale = getFitScale(iw, ih, cw, ch),
		scale = fitScale * zoom;

	return {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [
			'translate(-50%, -50%)',
			`translate(${panX}px, ${panY}px)`,
			`scale(${scale})`
		].join(' ')
	};
};

/**
 * Tracks zoom, pinch and pan interactions of an image inside of a container.
 * @param  {Number} [panStiffness=0.3]   controls the speed of the pan animation
 * @param  {Number} [zoomStiffness=0.08] controls the speed of the zoom animation
 * @return {Object}                      the state, available transitions and css styles
 */
const usePanZoom = (panStiffness = 0.3, zoomStiffness = 0.08) => { // eslint-disable-line max-statements
	const [state, dispatch] = useReducer(panZoomReducer, initState);

	const load = useCallback(() => dispatch({ type: 'load' }), [dispatch]);
	const loaded = useCallback(dimensions => dispatch({ type: 'loaded', dimensions }), [dispatch]);
	const error = useCallback(() => dispatch({type: 'error'}), [dispatch]);
	const zoomBy = useCallback((delta, bounded = true) => dispatch({type: 'zoomBy', delta, bounded}), [dispatch]);
	const zoomTo = useCallback(zoom => dispatch({type: 'zoom', zoom}), [dispatch]);

	const containerRef = useRef();
	const onResize = useCallback(rect => rect && dispatch({type: 'resize', rect}), [dispatch]);
	const resize	= useCallback(() => onResize(containerRef.current && containerRef.current.getBoundingClientRect()), [onResize, containerRef]);
	useResize(onResize, containerRef.current);

	const onImageLoad = useCallback(event => loaded({iw: event.target.naturalWidth, ih: event.target.naturalHeight }), [loaded]);
	const onWheel = useCallback(event => {
		event.preventDefault();
		zoomBy(-Math.sign(event.deltaY) * 0.8);
	}, [zoomBy, state.zoom]);

	const [pinchStatus, pinchDelta, startPinch] = usePinch();
	const pinching = pinchStatus === PINCHING;

	useEffect(() => pinchDelta !== 0 && zoomBy(pinchDelta * 0.01 * state.zoom, false), [pinchDelta, zoomBy]);
	useEffect(() => !pinching && zoomBy(0), [pinching, zoomBy]);

	const bounds = useMemo(() => calculateBounds(state.iw, state.ih, state.cw, state.ch, state.zoom), [state.iw, state.ih, state.cw, state.ch, state.zoom]);
	const [interacting, panX, panY, startMousePan, startTouchPan] = usePan(bounds);

	const springX = useSpring(panX, interacting ? 0.9 : panStiffness);
	const springY = useSpring(panY, interacting ? 0.9 : panStiffness);
	const springZoom = useSpring(state.zoom, pinching ? 0.8 : zoomStiffness);

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


export { usePanZoom, ERROR };
