import { getBounded, getFitScale, getCoverScale, calculateBounds } from '../utils';

const EMPTY = 'empty',
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',

	IDLE = 'idle',
	PANNING = 'panning',
	PINCHING = 'pinching',

	maxZoomPixelRatio = 1.1,

	maxZoomLevelByPixelRatio = (fitScale) => maxZoomPixelRatio / fitScale,
	maxZoomLevelByCoverage = (coverScale) => 2 * coverScale,

	getMaxZoom = (iw, ih, cw, ch) => {
		const fitScale = getFitScale(iw, ih, cw, ch),
			coverScale = getCoverScale(iw * fitScale, ih * fitScale, cw, ch);
		return Math.max(
			maxZoomLevelByPixelRatio(fitScale),
			maxZoomLevelByCoverage(coverScale),
		);
	},

	initState = {
		status: EMPTY,
		interaction: IDLE,
		iw: 100,
		ih: 100,
		cw: 100,
		ch: 100,
		zoom: 1,
		panX: 0,
		panY: 0,
		pointers: {},
	},

	removePointer = (pointers, id) => {
		const result = { ...pointers };
		delete result[id];
		return result;
	},

	/**
	 * Get the midpoint and distance between two pointers.
	 */
	getPinchData = (pointers) => {
		const ids = Object.keys(pointers);
		if (ids.length < 2) {
			return null;
		}
		const a = pointers[ids[0]],
			b = pointers[ids[1]];
		return {
			midX: (a.x + b.x) / 2,
			midY: (a.y + b.y) / 2,
			distance: Math.hypot(b.x - a.x, b.y - a.y),
		};
	},

	clampPan = (state) => {
		const bounds = calculateBounds(
			state.iw,
			state.ih,
			state.cw,
			state.ch,
			state.zoom,
		);
		return {
			...state,
			panX: getBounded(state.panX, bounds.x[0], bounds.x[1]),
			panY: getBounded(state.panY, bounds.y[0], bounds.y[1]),
		};
	},

	/**
	 * Apply rubber-band resistance past a boundary.
	 * Inside bounds: follows exactly. Past bounds: each additional unit
	 * only moves by 1/factor — the further past, the more it resists.
	 */
	rubberBand = (value, min, max, factor = 2) => {
		if (value < min) {
			return min - (min - value) / factor;
		}
		if (value > max) {
			return max + (value - max) / factor;
		}
		return value;
	},

	rubberBandPan = (state) => {
		const bounds = calculateBounds(
			state.iw,
			state.ih,
			state.cw,
			state.ch,
			state.zoom,
		);
		return {
			...state,
			panX: rubberBand(state.panX, bounds.x[0], bounds.x[1]),
			panY: rubberBand(state.panY, bounds.y[0], bounds.y[1]),
		};
	},

	/**
	 * Apply a combined pan + zoom gesture delta using the focal-point-preserving
	 * matrix formula. originX/originY are relative to the container center.
	 */
	applyGesture = (state, { dPanX = 0, dPanY = 0, scaleDiff = 1, originX = 0, originY = 0 }) => {
		const newZoom = state.zoom * scaleDiff;
		return {
			...state,
			zoom: newZoom,
			panX: dPanX + originX + (state.panX - originX) * scaleDiff,
			panY: dPanY + originY + (state.panY - originY) * scaleDiff,
		};
	},

	/**
	 * Clamp zoom to bounded range and adjust pan to preserve the focal point.
	 */
	clampZoomWithPan = (state, originX, originY) => {
		const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
		const targetZoom = getBounded(state.zoom, 1, maxZoom);
		if (targetZoom === state.zoom) {
			return state;
		}
		const ratio = targetZoom / state.zoom;
		return {
			...state,
			zoom: targetZoom,
			panX: originX + (state.panX - originX) * ratio,
			panY: originY + (state.panY - originY) * ratio,
		};
	},

	// --- Status-based sub-reducers ---

	emptyReducer = (state, action) => {
		switch (action.type) {
		case 'load':
			return { ...state, status: LOADING };
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
				...action.dimensions,
				panX: 0,
				panY: 0,
				zoom: 1,
			};
		case 'error':
			return { ...state, status: ERROR };
		default:
			return state;
		}
	},

	errorReducer = (state, action) => {
		switch (action.type) {
		case 'load':
			return { ...state, status: LOADING };
		default:
			return state;
		}
	},

	// --- Interaction sub-reducers (only active in LOADED status) ---

	idleReducer = (state, action) => {
		switch (action.type) {
		case 'pointerdown':
			return {
				...state,
				interaction: PANNING,
				pointers: {
					...state.pointers,
					[action.id]: { x: action.x, y: action.y },
				},
			};
		default:
			return state;
		}
	},

	panningReducer = (state, action) => {
		switch (action.type) {
		case 'pointerdown': {
			const pointers = {
				...state.pointers,
				[action.id]: { x: action.x, y: action.y },
			};
			return { ...state, interaction: PINCHING, pointers };
		}
		case 'pointermove': {
			const prev = state.pointers[action.id];
			if (!prev) {
				return state;
			}
			const dPanX = action.x - prev.x;
			const dPanY = action.y - prev.y;
			return rubberBandPan({
				...state,
				panX: state.panX + dPanX,
				panY: state.panY + dPanY,
				pointers: {
					...state.pointers,
					[action.id]: { x: action.x, y: action.y },
				},
			});
		}
		case 'pointerup': {
			const remaining = removePointer(state.pointers, action.id);
			if (Object.keys(remaining).length === 0) {
				// Clamp zoom (may be in overshoot from interrupted pinch)
				// and pan, then go idle
				const clamped = clampZoomWithPan(
					{ ...state, pointers: remaining },
					action.settleOriginX ?? 0,
					action.settleOriginY ?? 0,
				);
				return clampPan({ ...clamped, interaction: IDLE });
			}
			return { ...state, pointers: remaining };
		}
		default:
			return state;
		}
	},

	pinchingReducer = (state, action) => {
		switch (action.type) {
		case 'pointermove': {
			const prev = state.pointers[action.id];
			if (!prev) {
				return state;
			}
			const oldPinch = getPinchData(state.pointers);
			const newPointers = {
				...state.pointers,
				[action.id]: { x: action.x, y: action.y },
			};
			const newPinch = getPinchData(newPointers);
			if (!oldPinch || !newPinch) {
				return { ...state, pointers: newPointers };
			}

			const scaleDiff = oldPinch.distance
				? newPinch.distance / oldPinch.distance
				: 1;
			const dPanX = newPinch.midX - oldPinch.midX;
			const dPanY = newPinch.midY - oldPinch.midY;

			// Compute midpoint origin from pointer origin:
			// midOrigin = containerOrigin + (midPoint - pointerPoint)
			const midOriginX = action.containerOriginX + (newPinch.midX - action.x);
			const midOriginY = action.containerOriginY + (newPinch.midY - action.y);

			// Apply gesture with midpoint as focal point
			const result = applyGesture(
				{ ...state, pointers: newPointers },
				{
					dPanX,
					dPanY,
					scaleDiff,
					originX: midOriginX,
					originY: midOriginY,
				},
			);

			// Rubber-band zoom first, then derive pan from rubber-banded zoom
			const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
			const rubberBandedZoom = rubberBand(result.zoom, 1, maxZoom);
			const zoomRatio = rubberBandedZoom / result.zoom;
			const derivedPanX = midOriginX + (result.panX - midOriginX) * zoomRatio;
			const derivedPanY = midOriginY + (result.panY - midOriginY) * zoomRatio;

			// Also rubber-band pan (using the rubber-banded zoom for bounds)
			const withRubberBandedPan = rubberBandPan({
				...result,
				zoom: rubberBandedZoom,
				panX: derivedPanX,
				panY: derivedPanY,
			});

			return withRubberBandedPan;
		}
		case 'pointerup': {
			const remaining = removePointer(state.pointers, action.id);

			if (Object.keys(remaining).length <= 1) {
				// Pinch ended: clamp zoom with focal-point pan adjustment, clamp pan
				const clamped = clampPan(
					clampZoomWithPan(
						{ ...state, pointers: remaining },
						action.settleOriginX ?? 0,
						action.settleOriginY ?? 0,
					),
				);
				if (Object.keys(remaining).length === 1) {
					return { ...clamped, interaction: PANNING };
				}
				return { ...clamped, interaction: IDLE };
			}
			return { ...state, pointers: remaining };
		}
		default:
			return state;
		}
	},

	/**
	 * Handle interaction actions for LOADED status.
	 */
	interactionReducer = (state, action) => {
		switch (state.interaction) {
		case IDLE:
			return idleReducer(state, action);
		case PANNING:
			return panningReducer(state, action);
		case PINCHING:
			return pinchingReducer(state, action);
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
				interaction: IDLE,
				panX: 0,
				panY: 0,
				zoom: 1,
				pointers: {},
			};
		case 'zoom': {
			const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
			const newZoom = getBounded(action.zoom, 1, maxZoom);
			return clampPan({ ...state, zoom: newZoom });
		}
		case 'wheel': {
			const { delta, originX, originY } = action;
			const scaleDiff = 1 + delta;
			const result = applyGesture(state, {
				scaleDiff,
				originX,
				originY,
			});
			return clampPan(clampZoomWithPan(result, originX, originY));
		}
		case 'pointerdown':
		case 'pointermove':
		case 'pointerup':
			return interactionReducer(state, action);
		default:
			return state;
		}
	},

	panZoomReducer = (state, action) => {
		if (action.type === 'resize') {
			return clampPan({
				...state,
				cw: action.rect.width,
				ch: action.rect.height,
			});
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
	ERROR,
	IDLE,
	PANNING,
	PINCHING,
};
