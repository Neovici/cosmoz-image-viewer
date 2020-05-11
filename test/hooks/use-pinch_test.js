/* global host */
import {
	component, html
} from 'haunted';
import {
	attach, cycle, makeMultiTouchEvent
} from '../helpers';
import { usePinch } from '../../lib/hooks/use-pinch';

const text = () => host.firstChild.shadowRoot.textContent;

describe('use-pinch', () => {
	it('works', async () => {
		const tag = 'use-pinch',

			App = () => {
				const [isPinching, delta, start] = usePinch();
				return html`<span @touchstart=${start}>${isPinching}, ${delta}</span>`;
			};

		customElements.define(tag, component(App));

		const teardown = attach(tag);
		await cycle();
		expect(text()).to.equal('false, 0', 'no touching');

		const target = host.firstChild.shadowRoot.firstElementChild;

		makeMultiTouchEvent('touchstart', [{
			x: 10,
			y: 10
		}], target);
		await cycle();
		expect(text()).to.equal('false, 0', 'touch with one finger');

		makeMultiTouchEvent('touchstart', [{
			x: 10,
			y: 10
		}, {
			x: 50,
			y: 50
		}], target);
		await cycle();
		expect(text()).to.equal('true, 0', 'touch with second finger');

		makeMultiTouchEvent('touchmove', [{
			x: 10,
			y: 10
		}, {
			x: 100,
			y: 100
		}], document);
		await cycle();
		expect(text()).to.equal('true, 70.71067811865476', 'move second finger');

		makeMultiTouchEvent('touchend', [{
			x: 10,
			y: 10
		}], document);
		await cycle();
		expect(text()).to.equal('false, 0', 'raise one finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 20
		}], document);
		await cycle();
		expect(text()).to.equal('false, 0', 'move the finger');

		makeMultiTouchEvent('touchstart', [{
			x: 20,
			y: 20
		}, {
			x: 20,
			y: 30
		}], target);
		await cycle();
		expect(text()).to.equal('true, 0', 'touch with second finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 10
		}, {
			x: 20,
			y: 30
		}], document);
		await cycle();
		expect(text()).to.equal('true, 10', 'move first finger');

		makeMultiTouchEvent('touchend', [{
			x: 20,
			y: 30
		}], document);
		await cycle();
		expect(text()).to.equal('false, 0', 'raise first finger');

		makeMultiTouchEvent('touchend', [], document);
		await cycle();
		expect(text()).to.equal('false, 0', 'raise second finger');

		teardown();
	});
});
