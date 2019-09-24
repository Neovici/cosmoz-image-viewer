const INIT = 'init',
	PINCHING = 'pinching',

	initState = { status: INIT, lastDistance: 0, delta: 0 },

	pinchReducer = (state, action) => {
		switch (state.status) {

		case INIT:
			switch (action.type) {
			case 'start':
				return {
					...state,
					status: PINCHING,
					lastDistance: action.initialDistance,
					delta: 0
				};
			}
			break;

		case PINCHING:
			switch (action.type) {
			case 'stop':
				return initState;
			case 'pinch':
				return {
					...state,
					delta: action.distance - state.lastDistance,
					lastDistance: action.distance
				};
			}
		}

		return state;
	};

export { pinchReducer, initState, INIT, PINCHING };
