import {
	component, html
} from 'haunted';
import {
	makeMultiTouchEvent
} from '../helpers';
import { useTouchPan } from '../../lib/hooks/use-touch-pan';
import {
	expect, fixture, aTimeout
} from '@open-wc/testing';

suite('use-touch-pan', () => {
	suiteSetup(() => {
		const App = () => {
			const [status, deltaX, deltaY, , start] = useTouchPan();
			return html`<span @touchstart=${start}>${status}, ${deltaX}, ${deltaY}</span>`;
		};
		customElements.define('use-touch-pan', component(App));
	});

	let element;
	const text = () => element.shadowRoot.textContent;
	setup(async () => {
		element = await fixture(html`<use-touch-pan></use-touch-pan>`);
	});

	test('it', async () => {

		expect(text()).to.equal('init, 0, 0');

		const target = element.shadowRoot.firstElementChild;

		makeMultiTouchEvent('touchstart', [{
			x: 10,
			y: 10
		}], target);
		await aTimeout();
		expect(text()).to.equal('dragging, 0, 0', 'touch with one finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 10
		}], document);
		await aTimeout();
		expect(text()).to.equal('dragging, 10, 0', 'move the finger');

		makeMultiTouchEvent('touchend', [], document);
		await aTimeout();
		expect(text()).to.equal('init, 0, 0', 'raise the finger');

		// multi fingers

		makeMultiTouchEvent('touchstart', [{
			x: 10,
			y: 10
		}], target);
		await aTimeout();
		expect(text()).to.equal('dragging, 0, 0', 'touch with one finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 10
		}], document);
		await aTimeout();
		expect(text()).to.equal('dragging, 10, 0', 'move the finger');

		makeMultiTouchEvent('touchstart', [{
			x: 20,
			y: 10
		}, {
			x: 20,
			y: 30
		}], document);
		await aTimeout();
		expect(text()).to.equal('dragging, 10, 0', 'touch with another finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 10
		}, {
			x: 20,
			y: 10
		}], document);
		await aTimeout();
		expect(text()).to.equal('dragging, 0, -10', 'move the second finger');

		makeMultiTouchEvent('touchend', [{
			x: 20,
			y: 10
		}], document);
		await aTimeout();
		expect(text()).to.equal('dragging, 0, -10', 'raise one finger');

		makeMultiTouchEvent('touchmove', [{
			x: 20,
			y: 20
		}], document);
		await aTimeout();
		expect(text()).to.equal('dragging, 0, 10', 'move the finger');

		makeMultiTouchEvent('touchend', [], document);
		await aTimeout();
		expect(text()).to.equal('init, 0, 0', 'raise the finger');
	});
});
