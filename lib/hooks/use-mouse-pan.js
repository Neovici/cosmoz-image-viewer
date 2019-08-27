import { useEffect, useCallback, useReducer } from 'haunted';

export const INIT = 'init';
export const DRAGGING = 'dragging';

const panReducer = (state, action) => {
	switch (state.status) {

	case INIT:
		switch (action.type) {
		case 'start':
			return {
				...state,
				status: DRAGGING,
				lastX: action.x,
				lastY: action.y,
				timeStamp: action.timeStamp
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
				timeStamp: 0
			};
		case 'drag':
			return {
				...state,
				deltaX: action.x - state.lastX,
				deltaY: action.y - state.lastY,
				lastX: action.x,
				lastY: action.y,
				timeStamp: action.timeStamp
			};
		}
	}

	return state;
};

const initState = {	status: INIT, deltaX: 0, deltaY: 0, lastX: 0, lastY: 0, timeStamp: 0 };

export const useMousePan = () => {
	const [state, dispatch] = useReducer(panReducer, initState);

	const start = useCallback(ev => {
		ev.stopPropagation();
		dispatch({ type: 'start', x: ev.pageX, y: ev.pageY, timeStamp: ev.timeStamp });
	}, [dispatch]);
	const drag = useCallback(ev => dispatch({ type: 'drag', x: ev.pageX, y: ev.pageY, timeStamp: ev.timeStamp }), [dispatch]);
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

	return [state.status, state.deltaX, state.deltaY, state.timeStamp, start];
};
