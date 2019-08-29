import { useEffect, useCallback, useReducer } from 'haunted';
import { center } from './utils';

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
		case 'one-little-finger':
			return {
				...state,
				lastX: action.x,
				lastY: action.y
			};
		}
	}

	return state;
};

const initState = {	status: INIT, deltaX: 0, deltaY: 0, lastX: 0, lastY: 0, timeStamp: 0 };

const centerFromEvent = ev => center(Array.from(ev.touches).map(t => [t.pageX, t.pageY]));

export const useTouchPan = () => {
	const [state, dispatch] = useReducer(panReducer, initState);

	const start = useCallback(ev => {
		if (ev.touches.length > 1) {
			return;
		}

		const [x, y] = centerFromEvent(ev);
		dispatch({ type: 'start', x, y, timeStamp: ev.timeStamp });
	}, [dispatch]);

	const onTouchMove = useCallback(ev => {
		const [x, y] = centerFromEvent(ev);
		dispatch({ type: 'drag', x, y, timeStamp: ev.timeStamp });
	}, [dispatch]);

	const onTouchEnd = useCallback(ev => {
		if (ev.touches.length === 0) {
			dispatch({ type: 'stop' });
			return;
		}

		const [x, y] = centerFromEvent(ev);
		dispatch({ type: 'one-little-finger', x, y });
	}, [dispatch]);

	const onTouchStart = useCallback(ev => {
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

	return [state.status, state.deltaX, state.deltaY, state.timeStamp, start];
};
