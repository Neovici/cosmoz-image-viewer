import { useEffect, useCallback, useReducer } from 'haunted';
import { pinchReducer, initState, PINCHING } from '../reducers/pinch';

/**
 * Tracks the amount a user pinched the document.
 *
 * Tracking is started by calling the `start` function.
 *
 * @return {Array} [status: string, delta: number, start: function]
 */
const usePinch = () => {
	const [state, dispatch] = useReducer(pinchReducer, initState),

		// TODO: handle variable number of touches a la use-touch-pan
		start = useCallback(ev => {
			if (ev.touches.length < 2) {
				return;
			}

			const [{pageX: x1, pageY: y1}, {pageX: x2, pageY: y2}] = ev.touches;

			dispatch({ type: 'start', initialDistance: Math.hypot(x2 - x1, y2 - y1)});
		}, [dispatch]),

		pinch = useCallback(ev => {
			const [{pageX: x1, pageY: y1}, {pageX: x2, pageY: y2}] = ev.touches;

			dispatch({ type: 'pinch', distance: Math.hypot(x2 - x1, y2 - y1)});
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

		document.addEventListener('touchmove', pinch, {passive: true});
		document.addEventListener('touchend', stop, {passive: true});
		return () => {
			document.removeEventListener('touchmove', pinch, {passive: true});
			document.removeEventListener('touchend', stop, {passive: true});
		};
	}, [state.status, stop, pinch]);

	return [state.status, state.delta, start];
};

export { usePinch, PINCHING };
