import { useReducer, useCallback } from 'haunted';

export const INIT = 0;
export const PREPARING = 1;
export const ANIMATING = 2;

const carouselReducer = (state, action) => {
	switch (state.status) {
	case INIT:
		switch (action.type) {
		case 'next':
			return {
				...state,
				status: PREPARING,
				inIndex: state.current + 1
			};
		}
		break;
	case PREPARING:
		switch (action.type) {
		case 'animate':
			return {
				...state,
				status: ANIMATING
			};
		}
		break;
	case ANIMATING:
		switch (action.type) {
		case 'next':
			return {
				...state,
				status: PREPARING,
				current: state.inIndex,
				inIndex: state.inIndex + 1
			};
		case 'done':
			return {
				...state,
				status: INIT,
				current: state.inIndex
			};
		}
		break;
	}
	return state;
};

const initState = {
	status: INIT,
	current: 0
};

export const useCarousel = () => {
	const [state, dispatch] = useReducer(carouselReducer, initState);

	const next = useCallback(() => {
		dispatch({type: 'next'});
		window.requestAnimationFrame(() => dispatch({type: 'animate'}));
	}, [dispatch]);

	const animationDone = useCallback(() => dispatch({type: 'done'}), [dispatch]);

	return {
		...state,
		next,
		animationDone
	};
};
