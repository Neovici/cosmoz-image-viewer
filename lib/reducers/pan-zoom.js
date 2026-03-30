import {
	getBounded, getFitScale, getCoverScale, calculateBounds
} from '../utils';

const EMPTY = 'empty',
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',

	initState = {
		status: EMPTY,
		iw: 100,
		ih: 100,
		cw: 100,
		ch: 100,
		zoom: 1,
		panX: 0,
		panY: 0,
	},

	maxZoomPixelRatio = 1.1,

	maxZoomLevelByPixelRatio = fitScale => maxZoomPixelRatio / fitScale,
	maxZoomLevelByCoverage = coverScale => 2 * coverScale,

	getMaxZoom = (iw, ih, cw, ch) => {
		const fitScale = getFitScale(iw, ih, cw, ch),
			coverScale = getCoverScale(iw * fitScale, ih * fitScale, cw, ch);
		return Math.max(maxZoomLevelByPixelRatio(fitScale), maxZoomLevelByCoverage(coverScale));
	},

	getBoundedZoom = (zoom, iw, ih, cw, ch) =>
		getBounded(zoom, 1, getMaxZoom(iw, ih, cw, ch)),

	OVERSHOOT = 0.2,

	/**
	 * Adjust pan so the point under the origin stays fixed after a zoom change.
	 * Origin is in container-center-relative coordinates.
	 */
	adjustPanForZoom = (state, newZoom, originX, originY) => {
		if (originX == null || originY == null) return { panX: state.panX, panY: state.panY };
		const ratio = newZoom / state.zoom;
		return {
			panX: originX - (originX - state.panX) * ratio,
			panY: originY - (originY - state.panY) * ratio,
		};
	},

	clampPan = (state) => {
		const bounds = calculateBounds(state.iw, state.ih, state.cw, state.ch, state.zoom);
		return {
			...state,
			panX: getBounded(state.panX, bounds.x[0], bounds.x[1]),
			panY: getBounded(state.panY, bounds.y[0], bounds.y[1]),
		};
	},

	emptyReducer = (state, action) => {
		switch (action.type) {
		case 'load':
			return {
				...state,
				status: LOADING
			};
		default:
			return state;
		}
	},

	loadingReducer = (state, action) => {
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
	},

	loadedReducer = (state, action) => {
		switch (action.type) {
		case 'load':
			return {
				...state,
				status: LOADING,
				panX: 0,
				panY: 0,
			};
		case 'zoom': {
			const newZoom = getBoundedZoom(
				action.zoom,
				state.iw, state.ih, state.cw, state.ch
			);
			const pan = adjustPanForZoom(state, newZoom, action.originX, action.originY);
			return clampPan({ ...state, zoom: newZoom, ...pan });
		}
		case 'zoomBy': {
			const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
			const newZoom = action.bounded
				? getBounded(state.zoom + action.delta, 1, maxZoom)
				: getBounded(state.zoom + action.delta, 1 - OVERSHOOT, maxZoom * (1 + OVERSHOOT));
			const pan = adjustPanForZoom(state, newZoom, action.originX, action.originY);
			return { ...state, zoom: newZoom, ...pan };
		}
		case 'pan':
			return {
				...state,
				panX: state.panX + action.dx,
				panY: state.panY + action.dy,
			};
		case 'panEnd':
			return clampPan(state);
		default:
			return state;
		}
	},

	errorReducer = (state, action) => {
		switch (action.type) {
		case 'load':
			return {
				...state,
				status: LOADING
			};
		default:
			return state;
		}
	},

	panZoomReducer = (state, action) => {
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
