import { useState } from 'haunted';

const
	INIT = 'init',
	PINCHING = 'pinching',
	initState = {
		status: INIT,
		lastDistance: 0,
		delta: 0
	},

	pinchReducer = () => {
		const [state, setState] = useState(initState),
			isPinching = state.status === PINCHING;

		return {
			state,
			isPinching,

			start(distance = 0) {
				if (state.status !== INIT) {
					return;
				}
				setState({
					status: PINCHING,
					lastDistance: distance,
					delta: 0
				});
			},

			stop() {
				if (!isPinching) {
					return;
				}
				setState(initState);
			},

			pinch(distance) {
				if (!isPinching) {
					return;
				}
				setState({
					status: PINCHING,
					lastDistance: distance,
					delta: distance - state.lastDistance
				});
			}
		};
	};

export {
	pinchReducer
};
