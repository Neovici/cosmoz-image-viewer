import {
	hook, Hook
} from '@pionjs/pion';

/**
 * Returns the host element's dispatchEvent function.
 * @return {Function} the dispatchEvent function
 */
export const useDispatchEvent = hook(class extends Hook {
	constructor(id, el) {
		super(id, el);
		this.dispatchEvent = (...args) => {
			el.host.dispatchEvent.apply(el.host, args);
		};
	}

	update() {
		return this.dispatchEvent;
	}
});
