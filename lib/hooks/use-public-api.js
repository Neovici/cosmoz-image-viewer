import { hook, Hook, useMemo } from 'haunted';

export const usePublicAPI = hook(class extends Hook {
	constructor(id, el) {
		super(id, el);
		this.host = el.host;
	}

	update(fn, values) {
		return useMemo(() => {
			Object.assign(this.host, fn());
		}, values);
	}
});
