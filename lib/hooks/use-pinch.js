import { useEffect, useCallback, useReducer } from 'haunted';
import { noop } from './utils';

export const INIT = 'init';
export const PINCHING = 'pinching';

const initState = {	status: INIT, lastDistance: 0, delta: 0 };

const pinchReducer = (state, action) => {
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

export const usePinch = () => {
	if (!window.TouchEvent) {
		return [0, noop];
	}

	const [state, dispatch] = useReducer(pinchReducer, initState);

	// TODO: handle variable number of touches a la use-touch-pan
	const start = useCallback(ev => {
		if (ev.touches.length < 2) {
			return;
		}

		const [{pageX: x1, pageY: y1}, {pageX: x2, pageY: y2}] = ev.touches;

		dispatch({ type: 'start', initialDistance: Math.hypot(x2 - x1, y2 - y1)});
	}, [dispatch]);

	const pinch = useCallback(ev => {
		if (ev.touches.length < 2) {
			return;
		}

		const [{pageX: x1, pageY: y1}, {pageX: x2, pageY: y2}] = ev.touches;

		dispatch({ type: 'pinch', distance: Math.hypot(x2 - x1, y2 - y1)});
	}, [dispatch]);

	const stop = useCallback(ev => {
		if (ev.touches.length > 0) {
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
