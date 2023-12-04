import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useCallback, useEffect, useReducer } from 'haunted';
import { DRAGGING, initState, panReducer } from '../reducers/mouse-pan.js';

/**
 * Tracks mouse movements on the document.
 *
 * Tracking is initialized by calling the start function and stops when the
 * mouse button is released.
 *
 * @return {Array} [status:string, deltaX: number, deltaY: number, timestamp: number, start: function]
 */
const useMousePan = () => {
	const host = useHost();
	const [state, dispatch] = useReducer(panReducer, initState),
		start = useCallback(
			(ev) => {
				ev.stopPropagation();
				dispatch({
					type: 'start',
					x: ev.pageX,
					y: ev.pageY,
					timestamp: ev.timeStamp,
				});
			},
			[dispatch],
		),
		drag = useCallback(
			(ev) =>
				dispatch({
					type: 'drag',
					x: ev.pageX,
					y: ev.pageY,
					timestamp: ev.timeStamp,
				}),
			[dispatch],
		),
		stop = useCallback(
			() =>
				dispatch({
					type: 'stop',
				}),
			[dispatch],
		);

	useEffect(() => {
		if (state.status !== DRAGGING) {
			return;
		}

		const opts = { passive: true };

		host.ownerDocument.addEventListener('mousemove', drag, opts);
		host.ownerDocument.addEventListener('mouseup', stop, opts);
		return () => {
			host.ownerDocument.removeEventListener('mousemove', drag, opts);
			host.ownerDocument.removeEventListener('mouseup', stop, opts);
		};
	}, [state.status, stop, drag]);

	return [state.status, state.deltaX, state.deltaY, state.timestamp, start];
};

export { DRAGGING, useMousePan };
