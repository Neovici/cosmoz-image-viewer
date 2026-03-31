import { getBounded, getFitScale, getCoverScale, calculateBounds } from '../utils';

const EMPTY = 'empty',
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',

	IDLE = 'idle',
	PANNING = 'panning',
	PINCHING = 'pinching',
	SETTLING = 'settling',

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

	OVERSHOOT = 0.2,

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
		// Pointer tracking: { [id]: { x, y } }
		pointers: {},
		// Settling data (for snap-back animation)
		settleStartZoom: 1,
		settleStartPanX: 0,
		settleStartPanY: 0,
		settleOriginX: 0,
		settleOriginY: 0,
		settleTargetZoom: 1,
	},

	pointerCount = (state) => Object.keys(state.pointers).length,

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

	clampZoom = (state, bounded) => {
		const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
		const min = bounded ? 1 : 1 - OVERSHOOT;
		const max = bounded ? maxZoom : maxZoom * (1 + OVERSHOOT);
		return {
			...state,
			zoom: getBounded(state.zoom, min, max),
		};
	},

	/**
	 * Compute the settle target and data for the snap-back animation.
	 */
	startSettle = (state, originX, originY) => {
		const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
		const targetZoom = getBounded(state.zoom, 1, maxZoom);
		return {
			...state,
			interaction: SETTLING,
			settleStartZoom: state.zoom,
			settleStartPanX: state.panX,
			settleStartPanY: state.panY,
			settleOriginX: originX,
			settleOriginY: originY,
			settleTargetZoom: targetZoom,
		};
	},

	zoomNeedsSnapBack = (state) => {
		const maxZoom = getMaxZoom(state.iw, state.ih, state.cw, state.ch);
		return state.zoom < 1 || state.zoom > maxZoom;
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
			// Second pointer → start pinching
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
			return {
				...state,
				panX: state.panX + dPanX,
				panY: state.panY + dPanY,
				pointers: {
					...state.pointers,
					[action.id]: { x: action.x, y: action.y },
				},
			};
		}
		case 'pointerup': {
			const remaining = removePointer(state.pointers, action.id);
			if (Object.keys(remaining).length === 0) {
				return clampPan({ ...state, interaction: IDLE, pointers: remaining });
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

			// Origin is the old midpoint relative to container center
			const result = applyGesture(
				{ ...state, pointers: newPointers },
				{
					dPanX,
					dPanY,
					scaleDiff,
					originX: action.containerOriginX,
					originY: action.containerOriginY,
				},
			);
			return clampZoom(result, false);
		}
		case 'pointerup': {
			const remaining = removePointer(state.pointers, action.id);
			const newState = { ...state, pointers: remaining };

			if (Object.keys(remaining).length <= 1) {
				// Pinch ended
				if (zoomNeedsSnapBack(newState)) {
					// Compute the origin from the last known pinch midpoint
					return startSettle(
						newState,
						action.settleOriginX ?? 0,
						action.settleOriginY ?? 0,
					);
				}
				// Zoom is within bounds
				if (Object.keys(remaining).length === 1) {
					return clampPan({ ...newState, interaction: PANNING });
				}
				return clampPan({ ...newState, interaction: IDLE });
			}
			return newState;
		}
		default:
			return state;
		}
	},

	settlingReducer = (state, action) => {
		switch (action.type) {
		case 'settled': {
			// Compute final pan from the settle data
			const ratio = state.settleTargetZoom / state.settleStartZoom;
			const panX =
				state.settleOriginX +
				(state.settleStartPanX - state.settleOriginX) * ratio;
			const panY =
				state.settleOriginY +
				(state.settleStartPanY - state.settleOriginY) * ratio;
			const settled = {
				...state,
				zoom: state.settleTargetZoom,
				panX,
				panY,
			};
			if (pointerCount(state) > 0) {
				return clampPan({ ...settled, interaction: PANNING });
			}
			return clampPan({ ...settled, interaction: IDLE });
		}
		case 'pointerup': {
			const remaining = removePointer(state.pointers, action.id);
			return { ...state, pointers: remaining };
		}
		case 'pointerdown': {
			// Ignore new pointers during settling
			return state;
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
		case SETTLING:
			return settlingReducer(state, action);
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
			return clampPan(clampZoom(result, true));
		}
		case 'pointerdown':
		case 'pointermove':
		case 'pointerup':
		case 'settled':
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
	SETTLING,
};
