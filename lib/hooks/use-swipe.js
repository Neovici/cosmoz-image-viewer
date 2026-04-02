import { useEffect, useRef } from '@pionjs/pion';

const SWIPE_THRESHOLD = 50, // minimum px horizontal movement
	TIME_LIMIT = 300; // max ms for a swipe gesture

/**
 * Hook to detect horizontal swipe gestures on a host element.
 * Calls onSwipeLeft (swipe ←, next) or onSwipeRight (swipe →, prev)
 * when a single-finger swipe exceeds the threshold within the time limit.
 *
 * @param {HTMLElement} host
 * @param {{ onSwipeLeft: () => void, onSwipeRight: () => void, enabled: boolean }} opts
 */
export const useSwipe = (host, { onSwipeLeft, onSwipeRight, enabled }) => {
	const startRef = useRef(null);

	useEffect(() => {
		if (!enabled) return;

		const onTouchStart = (e) => {
			if (e.touches.length !== 1) return;
			const touch = e.touches[0];
			startRef.current = {
				x: touch.clientX,
				y: touch.clientY,
				t: Date.now(),
			};
		};

		const onTouchEnd = (e) => {
			if (!startRef.current) return;
			const touch = e.changedTouches[0];
			const dx = touch.clientX - startRef.current.x;
			const dy = touch.clientY - startRef.current.y;
			const dt = Date.now() - startRef.current.t;
			startRef.current = null;

			if (dt > TIME_LIMIT) return;
			if (Math.abs(dx) < SWIPE_THRESHOLD) return;
			if (Math.abs(dx) < Math.abs(dy)) return;

			if (dx < 0) onSwipeLeft?.();
			else onSwipeRight?.();
		};

		host.addEventListener('touchstart', onTouchStart, { passive: true });
		host.addEventListener('touchend', onTouchEnd, { passive: true });

		return () => {
			host.removeEventListener('touchstart', onTouchStart);
			host.removeEventListener('touchend', onTouchEnd);
		};
	}, [host, onSwipeLeft, onSwipeRight, enabled]);
};
