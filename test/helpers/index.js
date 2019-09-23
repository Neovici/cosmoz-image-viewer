/* global host */

export const attach = element => {
	const el = document.createElement(element);
	host.appendChild(el);
	return () => host.removeChild(el);
};

export const mount = str => {
	const template = document.createElement('template');
	template.innerHTML = str;
	host.appendChild(template.content.cloneNode(true));
	return () => {
		host.innerHTML = '';
	};
};

export { mount as insert };

export const afterMutations = () => {
	return new Promise(resolve => {
		const mo = new MutationObserver(() => {
			mo.disconnect();
			resolve();
		});
		mo.observe(host, { childList: true, subtree: true });
	});
};

export const later = (fn = Function.prototype) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(fn());
		}, 80);
	});
};

export const cycle = () => {
	return new Promise(resolve => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					resolve();
				});
			});
		});
	});
};

const HAS_NEW_TOUCH = (() => {
	let has = false;
	try {
		has = Boolean(new TouchEvent('x'));
	} catch (_) { /**/ }
	return has;
})();


const makeTouches = (xyList, node) => {
	let id = 0;

	return xyList.map(xy => {
		const touchInit =
        {identifier: id++, target: node, pageX: xy.x, pageY: xy.y};

		return HAS_NEW_TOUCH ? new window.Touch(touchInit) : touchInit;
	});
};

export const makeMultiTouchEvent = (type, xyList, node) => {
	const touches = makeTouches(xyList, node);
	const touchEventInit = {
		touches,
		targetTouches: touches,
		changedTouches: touches
	};
	let event;

	if (HAS_NEW_TOUCH) {
		touchEventInit.bubbles = true;
		touchEventInit.cancelable = true;
		event = new TouchEvent(type, touchEventInit);
	} else {
		event = new CustomEvent(type, {
			bubbles: true,
			cancelable: true,
			// Allow event to go outside a ShadowRoot.
			composed: true
		});
		// eslint-disable-next-line guard-for-in
		for (const property in touchEventInit) {
			event[property] = touchEventInit[property];
		}
	}

	node.dispatchEvent(event);
};

export const assertFuzzyMatch = (obj, targetObj) => {
	assert.isFalse(
		Object.entries(targetObj)
			.some(([key, value]) => Math.abs(obj[key] - value) >= 2),
		`fuzzyMatch ${JSON.stringify(obj)} does not match ${JSON.stringify(targetObj)}`
	);
};