import { hook, Hook, useMemo } from 'haunted';

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
