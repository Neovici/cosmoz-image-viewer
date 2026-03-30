import {
	useEffect, useCallback, useReducer
} from '@pionjs/pion';
import {
	pinchReducer, initState, PINCHING
} from '../reducers/pinch';

const getDistance = (ev1, ev2) => Math.hypot(ev2.pageX - ev1.pageX, ev2.pageY - ev1.pageY),
	getCenter = (ev1, ev2) => [(ev1.pageX + ev2.pageX) / 2, (ev1.pageY + ev2.pageY) / 2],

	/**
	 * Tracks the amount a user pinched the document.
	 *
	 * Tracking is started by calling the `start` function.
	 *
	 * @return {Array} [status, delta, start, centerX, centerY]
	 */
	usePinch = () => {
		const [state, dispatch] = useReducer(pinchReducer, initState),

			// TODO: handle variable number of touches a la use-touch-pan
			start = useCallback(ev => {
				if (ev.touches.length < 2) {
					return;
				}

				const [centerX, centerY] = getCenter(ev.touches[0], ev.touches[1]);
				dispatch({
					type: 'start',
					initialDistance: getDistance(ev.touches[0], ev.touches[1]),
					centerX,
					centerY,
				});
			}, [dispatch]),

			pinch = useCallback(ev => {
				if (ev.touches.length < 2) {
					return;
				}
				const [centerX, centerY] = getCenter(ev.touches[0], ev.touches[1]);
				dispatch({
					type: 'pinch',
					distance: getDistance(ev.touches[0], ev.touches[1]),
					centerX,
					centerY,
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

		return [state.status, state.delta, start, state.centerX, state.centerY];
	};

export {
	usePinch, PINCHING
};
