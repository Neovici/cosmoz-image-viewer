import {
	component, html
} from 'haunted';
import {
	makeMultiTouchEvent
} from '../helpers';
import { usePinch } from '../../lib/hooks/use-pinch';
import {
	expect, fixture, aTimeout
} from '@open-wc/testing';

suite('use-pinch', () => {
	suiteSetup(() => {
		const App = () => {
			const [status, delta, start] = usePinch();
			return html`<span @touchstart=${ start }>${ status }, ${ delta }</span>`;
		};
		customElements.define('use-pinch', component(App));
	});

	let element;
	const text = () => element.shadowRoot.textContent;
	setup(async () => {
		element = await fixture(html`<use-pinch></use-pinch>`);
	});

	test('it', async () => {

		expect(text()).to.equal('init, 0', 'no touching');

		const target = element.shadowRoot.firstElementChild;

		makeMultiTouchEvent('touchstart', [{
			x: 10,
			y: 10
		}], target);
		await aTimeout();
		expect(text()).to.equal('init, 0', 'touch with one finger');

		makeMultiTouchEvent('touchstart', [{
			x: 10,
			y: 10
		}, {
			x: 50,
			y: 50
		}], target);
		await aTimeout();
		expect(text()).to.equal('pinching, 0', 'touch with second finger');

		makeMultiTouchEvent('touchmove', [{
			x: 10,
			y: 10
		}, {
			x: 100,
			y: 100
		}], document);
		await aTimeout();
		expect(text()).to.equal('pinching, 70.71067811865476', 'move second finger');

		makeMultiTouchEvent('touchend', [{
			x: 10,
			y: 10
		}], document);
		await aTimeout();
		expect(text()).to.equal('init, 0', 'raise one finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 20
		}], document);
		await aTimeout();
		expect(text()).to.equal('init, 0', 'move the finger');

		makeMultiTouchEvent('touchstart', [{
			x: 20,
			y: 20
		}, {
			x: 20,
			y: 30
		}], target);
		await aTimeout();
		expect(text()).to.equal('pinching, 0', 'touch with second finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 10
		}, {
			x: 20,
			y: 30
		}], document);
		await aTimeout();
		expect(text()).to.equal('pinching, 10', 'move first finger');

		makeMultiTouchEvent('touchend', [{
			x: 20,
			y: 30
		}], document);
		await aTimeout();
		expect(text()).to.equal('init, 0', 'raise first finger');

		makeMultiTouchEvent('touchend', [], document);
		await aTimeout();
		expect(text()).to.equal('init, 0', 'raise second finger');
	});
});
