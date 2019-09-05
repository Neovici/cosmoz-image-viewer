import { getBounded, getFitScale, getCoverScale } from '../utils';

const EMPTY = 'empty';
const LOADING = 'loading';
const LOADED = 'loaded';
const ERROR = 'error';

const initState = {
	status: EMPTY,
	iw: 100,
	ih: 100,
	cw: 100,
	ch: 100,
	zoom: 1
};

const maxZoomPixelRatio = 1.1;

const maxZoomLevelByPixelRatio = fitScale => maxZoomPixelRatio / fitScale;
const maxZoomLevelByCoverage = coverScale => 2 * coverScale;

const getBoundedZoom = (zoom, iw, ih, cw, ch) => {
	// how much to scale the image so it fits in the container
	const fitScale = getFitScale(iw, ih, cw, ch);

	// how much to scale the *scaled-to-fit* image so it covers the container
	const coverScale = getCoverScale(iw * fitScale, ih * fitScale, cw, ch);

	// zoom until the image is displayed at 110% it's natural size or it covers half of the container
	const maxZoom = Math.max(maxZoomLevelByPixelRatio(fitScale), maxZoomLevelByCoverage(coverScale));
	return getBounded(zoom, 1, maxZoom);
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
				state.iw, state.ih, state.cw, state.ch
			)
		};
	case 'zoomBy':
		return {
			...state,
			zoom: action.bounded
				? getBoundedZoom(
					state.zoom + action.delta,
					state.iw, state.ih, state.cw, state.ch
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


export {
	panZoomReducer,
	initState,
	EMPTY,
	LOADING,
	LOADED,
	ERROR
};
