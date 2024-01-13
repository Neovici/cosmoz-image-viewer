import { useEffect } from '@pionjs/pion';

/**
 * Reacts to size changes of an element.
 * @param  {Function}    onResize function to call when the element is resized
 * @param  {HTMLElement} el       a DOM element
 * @return {void}
 */
export const useResize = (onResize, el) => {
	if (!('ResizeObserver' in window)) {
		return;
	}

	// set up a new observer whenever the element or the callback changes
	useEffect(() => {
		// do nothing if the element is missing
		if (el == null) {
			return;
		}

		// set up the observer
		const observer = new ResizeObserver(([{ contentRect }]) => onResize(contentRect));
		observer.observe(el);

		// trigger an initial resize so the size is updated when the referenced element changes
		onResize(el.getBoundingClientRect());

		// clean up the observer
		return () => observer.unobserve(el);
	}, [onResize, el]);
};
