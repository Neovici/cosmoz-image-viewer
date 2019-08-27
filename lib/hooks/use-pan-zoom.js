import { useMemo, useCallback, useReducer, useEffect } from 'haunted';
import { useSpring } from './use-spring';
import { usePan } from './use-pan';
import { useResize } from './use-resize';
import { getBounded, getFitScale } from './utils';
import { usePinch, PINCHING } from './use-pinch';

export const EMPTY = 'empty';
export const LOADING = 'loading';
export const LOADED = 'loaded';
export const ERROR = 'error';

const maxZoomPixelRatio = 1.1;

const maxZoomLevel = fitScale => maxZoomPixelRatio / fitScale;

const getBoundedZoom = (zoom, fitScale) =>
	getBounded(zoom, 1, maxZoomLevel(fitScale));

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

const emptyReducer = (state, action) => {
	switch (action.type) {
	case 'load':
		return {
			...state,
			status: LOADING
		};
	default:
		return state;
	}
};

const loadingReducer = (state, action) => {
	switch (action.type) {
	case 'loaded':
		return {
			...state,
			status: LOADED,
			...action.dimensions
		};
	case 'error':
		return {
			...state,
			status: ERROR
		};
	default:
		return state;
	}
};

const loadedReducer = (state, action) => {
	switch (action.type) {
	case 'load':
		return {
			...state,
			status: LOADING
		};
	case 'zoom':
		return {
			...state,
			zoom: getBoundedZoom(
				action.zoom,
				getFitScale(state.iw, state.ih, state.cw, state.ch)
			)
		};
	case 'zoomBy':
		return {
			...state,
			zoom: action.bounded
				? getBoundedZoom(
					state.zoom + action.delta,
					getFitScale(state.iw, state.ih, state.cw, state.ch)
				)
				: Math.max(0.2, state.zoom + action.delta)
		};
	default:
		return state;
	}
};

const errorReducer = (state, action) => {
	switch (action.type) {
	case 'load':
		return {
			...state,
			status: LOADING
		};
	default:
		return state;
	}
};

const panZoomReducer = (state, action) => {
	if (action.type === 'resize') {
		return {
			...state,
			cw: action.rect.width,
			ch: action.rect.height
		};
	}

	switch (state.status) {
	case EMPTY:
		return emptyReducer(state, action);

	case LOADING:
		return loadingReducer(state, action);

	case LOADED:
		return loadedReducer(state, action);

	case ERROR:
		return errorReducer(state, action);
	default:
		return state;
	}
};

const initState = {
	status: EMPTY,
	iw: 100,
	ih: 100,
	cw: 100,
	ch: 100,
	zoom: 1
};

const calculateBounds = ({iw, ih, cw, ch, zoom}) => {
	const fitScale = getFitScale(iw, ih, cw, ch),
		scale = fitScale * zoom,
		siw = iw * scale, // scaled image width
		sih = ih * scale, // scaled image height-
		minX = siw < cw ? (-cw + siw) / 2 : (cw - siw) / 2,
		maxX = siw < cw ? (cw - siw) / 2 : (-cw + siw) / 2,
		minY = sih < ch ? (-ch + sih) / 2 : (ch - sih) / 2,
		maxY = sih < ch ? (ch - sih) / 2 : (-ch + sih) / 2;
	return {x: [minX, maxX], y: [minY, maxY]};
};

// eslint-disable-next-line max-statements
export const usePanZoom = () => {
	const [state, dispatch] = useReducer(panZoomReducer, initState);

	const onResize = useCallback(rect => rect && dispatch({type: 'resize', rect}), [dispatch]);
	const containerRef = useResize(onResize);

	const load		= useCallback(() => dispatch({ type: 'load' }), [dispatch]);
	const loaded	= useCallback(dimensions => dispatch({ type: 'loaded', dimensions }), [dispatch]);
	const error		= useCallback(() => dispatch({type: 'error'}), [dispatch]);
	const zoomBy	= useCallback((delta, bounded = true) => dispatch({type: 'zoomBy', delta, bounded}), [dispatch]);
	const zoomTo	= useCallback(zoom => dispatch({type: 'zoom', zoom}), [dispatch]);
	const resize	= useCallback(() => onResize(containerRef.current && containerRef.current.getBoundingClientRect()), [onResize, containerRef]);

	const onImageLoad = useCallback(event => loaded({iw: event.target.naturalWidth, ih: event.target.naturalHeight }), [loaded]);
	const onWheel = useCallback(event => {
		event.preventDefault();
		zoomBy(-Math.sign(event.deltaY) * 0.8);
	}, [zoomBy, state.zoom]);

	const [pinchStatus, pinchDelta, startPinch] = usePinch();
	const pinching = pinchStatus === PINCHING;

	useEffect(() => pinchDelta !== 0 && zoomBy(pinchDelta * 0.01 * state.zoom, false), [pinchDelta, zoomBy]);
	useEffect(() => !pinching && zoomBy(0), [pinching, zoomBy]);

	const bounds = useMemo(() => calculateBounds(state), [state.iw, state.ih, state.cw, state.ch, state.zoom]);
	const [interacting, panX, panY, startMousePan, startTouchPan] = usePan(bounds);

	const springX = useSpring(panX, interacting ? 0.9 : 0.3);
	const springY = useSpring(panY, interacting ? 0.9 : 0.3);
	const springZoom = useSpring(state.zoom, pinching ? 0.8 : 0.08);

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
