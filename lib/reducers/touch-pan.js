const INIT = 'init',
	DRAGGING = 'dragging',

	initState = {
		status: INIT,
		deltaX: 0,
		deltaY: 0,
		lastX: 0,
		lastY: 0,
		timestamp: 0
	},

	panReducer = (state, action) => {
		switch (state.status) {

		case INIT:
			switch (action.type) {
			case 'start':
				return {
					...state,
					status: DRAGGING,
					lastX: action.x,
					lastY: action.y,
					timestamp: action.timestamp
				};
			}
			break;

		case DRAGGING:
			switch (action.type) {
			case 'stop':
				return {
					...state,
					status: INIT,
					deltaX: 0,
					deltaY: 0,
					timestamp: 0
				};
			case 'drag':
				return {
					...state,
					deltaX: action.x - state.lastX,
					deltaY: action.y - state.lastY,
					lastX: action.x,
					lastY: action.y,
					timestamp: action.timestamp
				};
			case 'one-little-finger':
				return {
					...state,
					lastX: action.x,
					lastY: action.y
				};
			}
		}

		return state;
	};

export {
	panReducer, initState, INIT, DRAGGING
};
