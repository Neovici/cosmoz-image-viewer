import { useEffect } from 'haunted';
import { pinchReducer } from '../reducers/pinch';

const getDistance = (ev1, ev2) => Math.hypot(ev2.pageX - ev1.pageX, ev2.pageY - ev1.pageY);

/**
 * Tracks the amount a user pinched the document.
 *
 * Tracking is started by calling the `start` function.
 *
 * @return {Array} [isPinching: boolean, delta: number, start: function]
 */
export const usePinch = () => {
	const pincher = pinchReducer(),

		// TODO: handle variable number of touches a la use-touch-pan
		start = ev => {
			if (ev.touches.length < 2) {
				return;
			}

			pincher.start(getDistance(...ev.touches));
		},

		pinch = ev => pincher.pinch(getDistance(...ev.touches)),

		stop = ev => {
			if (ev.touches.length > 2) {
				return;
			}

			pincher.stop();
		};

	useEffect(() => {
		if (!pincher.isPinching) {
			return;
		}
		const opts = { passive: true };

		document.addEventListener('touchmove', pinch, opts);
		document.addEventListener('touchend', stop, opts);
		return () => {
			document.removeEventListener('touchmove', pinch, opts);
			document.removeEventListener('touchend', stop, opts);
		};
	}, [pincher.isPinching, stop, pinch]);

	return [pincher.isPinching, pincher.state.delta, start];
};
