import { hook, Hook } from 'haunted';

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
