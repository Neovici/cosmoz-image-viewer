import { hook, Hook, useMemo } from 'haunted';

/**
 * Adds public methods and values to the host element.
 * @param {Function} fn     a function which returns a set.
 * @param {Array}    values re-run the function when this value changes.
 * @returns {void}
 */
export const usePublicAPI = hook(class extends Hook {
	constructor(id, el, fn) {
		super(id, el);
		this.host = el.host;
		Object.assign(this.host, fn());
	}

	update(fn, values) {
		return useMemo(() => {
			Object.assign(this.host, fn());
		}, values);
	}
});
