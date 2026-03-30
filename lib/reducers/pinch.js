const INIT = 'init',
	PINCHING = 'pinching',

	initState = {
		status: INIT,
		lastDistance: 0,
		delta: 0,
		centerX: 0,
		centerY: 0,
	},

	pinchReducer = (state, action) => {
		switch (state.status) {

		case INIT:
			switch (action.type) {
			case 'start':
				return {
					...state,
					status: PINCHING,
					lastDistance: action.initialDistance,
					delta: 0,
					centerX: action.centerX,
					centerY: action.centerY,
				};
			}
			break;

		case PINCHING:
			switch (action.type) {
			case 'stop':
				return { ...initState, centerX: state.centerX, centerY: state.centerY };
			case 'pinch':
				return {
					...state,
					delta: action.distance - state.lastDistance,
					lastDistance: action.distance,
					centerX: action.centerX,
					centerY: action.centerY,
				};
			}
		}

		return state;
	};

export {
	pinchReducer, initState, INIT, PINCHING
};
