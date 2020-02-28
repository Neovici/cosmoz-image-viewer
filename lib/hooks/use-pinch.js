import {
	useEffect, useCallback, useReducer
} from 'haunted';
import {
	pinchReducer, initState, PINCHING
} from '../reducers/pinch';

const getDistance = (ev1, ev2) => Math.hypot(ev2.pageX - ev1.pageX, ev2.pageY - ev1.pageY),

	/**
	 * Tracks the amount a user pinched the document.
	 *
	 * Tracking is started by calling the `start` function.
	 *
	 * @return {Array} [status: string, delta: number, start: function]
	 */
	usePinch = () => {
		const [state, dispatch] = useReducer(pinchReducer, initState),

			// TODO: handle variable number of touches a la use-touch-pan
			start = useCallback(ev => {
				if (ev.touches.length < 2) {
					return;
				}

				dispatch({
					type: 'start',
					initialDistance: getDistance(...ev.touches)
				});
			}, [dispatch]),

			pinch = useCallback(ev => {
				dispatch({
					type: 'pinch',
					distance: getDistance(...ev.touches)
				});
			}, [dispatch]),

			stop = useCallback(ev => {
				if (ev.touches.length > 2) {
					return;
				}

				dispatch({ type: 'stop' });
			}, [dispatch]);

		useEffect(() => {
			if (state.status !== PINCHING) {
				return;
			}
			const opts = { passive: true };

			document.addEventListener('touchmove', pinch, opts);
			document.addEventListener('touchend', stop, opts);
			return () => {
				document.removeEventListener('touchmove', pinch, opts);
				document.removeEventListener('touchend', stop, opts);
			};
		}, [state.status, stop, pinch]);

		return [state.status, state.delta, start];
	};

export {
	usePinch, PINCHING
};
