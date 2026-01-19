import { assert } from '@open-wc/testing';

export const HAS_NEW_TOUCH = (() => {
		try {
			return Boolean(new TouchEvent('x'));
		} catch {
			/**/
		}
		return false;
	})(),
	makeTouches = (xyList, node) => {
		let id = 0;

		return xyList.map((xy) => {
			const touchInit = {
				identifier: id++,
				target: node,
				pageX: xy.x,
				pageY: xy.y,
			};

			return HAS_NEW_TOUCH ? new window.Touch(touchInit) : touchInit;
		});
	},
	makeMultiTouchEvent = (type, xyList, node) => {
		const touches = makeTouches(xyList, node),
			touchEventInit = {
				touches,
				targetTouches: touches,
				changedTouches: touches,
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
				composed: true,
			});
			// eslint-disable-next-line guard-for-in
			for (const property in touchEventInit) {
				event[property] = touchEventInit[property];
			}
		}

		node.dispatchEvent(event);
	},
	assertFuzzyMatch = (obj, targetObj) => {
		assert.isFalse(
			Object.entries(targetObj).some(
				([key, value]) => Math.abs(obj[key] - value) >= 2,
			),
			`fuzzyMatch ${JSON.stringify(obj)} does not match ${JSON.stringify(
				targetObj,
			)}`,
		);
	},
	ignoreResizeLoopError = () => {
		const e = window.onerror;
		window.onerror = function (err) {
			if (
				err === 'ResizeObserver loop limit exceeded' ||
				err === 'ResizeObserver loop completed with undelivered notifications.'
			) {
				return true;
			}
			return e(...arguments);
		};
	},
	absolute = (a) => window.location.origin + a;
