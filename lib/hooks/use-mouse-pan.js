import { useEffect, useCallback, useReducer } from 'haunted';
import { panReducer, initState, DRAGGING } from '../reducers/mouse-pan.js';

/**
 * Tracks mouse movements on the document.
 *
 * Tracking is initialized by calling the start function and stops when the
 * mouse button is released.
 *
 * @return {Array} [status:string, deltaX: number, deltaY: number, timestamp: number, start: function]
 */
const useMousePan = () => {
	const [state, dispatch] = useReducer(panReducer, initState);

	const start = useCallback(ev => {
		ev.stopPropagation();
		dispatch({ type: 'start', x: ev.pageX, y: ev.pageY, timestamp: ev.timeStamp });
	}, [dispatch]);
	const drag = useCallback(ev => dispatch({ type: 'drag', x: ev.pageX, y: ev.pageY, timestamp: ev.timeStamp }), [dispatch]);
	const stop = useCallback(() => dispatch({ type: 'stop' }), [dispatch]);

	useEffect(() => {
		if (state.status !== DRAGGING) {
			return;
		}

		document.addEventListener('mousemove', drag, {passive: true});
		document.addEventListener('mouseup', stop, {passive: true});
		return () => {
			document.removeEventListener('mousemove', drag, {passive: true});
			document.removeEventListener('mouseup', stop, {passive: true});
		};
	}, [state.status, stop, drag]);

	return [state.status, state.deltaX, state.deltaY, state.timestamp, start];
};

export { useMousePan, DRAGGING };
