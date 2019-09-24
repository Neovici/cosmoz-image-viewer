import { useEffect, useCallback, useReducer } from 'haunted';
import { center } from '../utils';
import { panReducer, initState, DRAGGING } from '../reducers/touch-pan';

const centerFromEvent = ev => center(Array.from(ev.touches).map(t => [t.pageX, t.pageY])),

	/**
 * Tracks touch movements on the document.
 *
 * Tracking is initialized by calling the start function and stops when touching ends.
 *
 * @return {Array} [status:string, deltaX: number, deltaY: number, timestamp: number, start: function]
 */
	useTouchPan = () => {
		const [state, dispatch] = useReducer(panReducer, initState),

			start = useCallback(ev => {
				if (ev.touches.length > 1) {
					return;
				}

				const [x, y] = centerFromEvent(ev);
				dispatch({ type: 'start', x, y, timestamp: ev.timeStamp });
			}, [dispatch]),

			onTouchMove = useCallback(ev => {
				const [x, y] = centerFromEvent(ev);
				dispatch({ type: 'drag', x, y, timestamp: ev.timeStamp });
			}, [dispatch]),

			onTouchEnd = useCallback(ev => {
				if (ev.touches.length === 0) {
					dispatch({ type: 'stop' });
					return;
				}

				const [x, y] = centerFromEvent(ev);
				dispatch({ type: 'one-little-finger', x, y });
			}, [dispatch]),

			onTouchStart = useCallback(ev => {
				const [x, y] = centerFromEvent(ev);
				dispatch({ type: 'one-little-finger', x, y });
			}, [dispatch]);

		useEffect(() => {
			if (state.status !== DRAGGING) {
				return;
			}

			document.addEventListener('touchstart', onTouchStart, {passive: true});
			document.addEventListener('touchmove', onTouchMove, {passive: true});
			document.addEventListener('touchend', onTouchEnd, {passive: true});
			return () => {
				document.removeEventListener('touchstart', onTouchStart, {passive: true});
				document.removeEventListener('touchmove', onTouchMove, {passive: true});
				document.removeEventListener('touchend', onTouchEnd, {passive: true});
			};
		}, [state.status, onTouchStart, onTouchMove, onTouchEnd]);

		return [state.status, state.deltaX, state.deltaY, state.timestamp, start];
	};

export { useTouchPan, DRAGGING };
