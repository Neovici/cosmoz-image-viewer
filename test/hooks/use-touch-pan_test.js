/* global host */
import { component, html } from 'haunted';
import { attach, cycle, makeMultiTouchEvent } from '../helpers';
import { useTouchPan } from '../../lib/hooks/use-touch-pan';

const text = () => host.firstChild.shadowRoot.textContent;

describe('use-touch-pan', () => {
	it('works', async () => {
		const tag = 'use-touch-pan';

		const App = () => {
			const [status, deltaX, deltaY, , start] = useTouchPan();
			return html`<span @touchstart=${start}>${status}, ${deltaX}, ${deltaY}</span>`;
		};

		customElements.define(tag, component(App));

		const teardown = attach(tag);
		await cycle();
		expect(text()).to.equal('init, 0, 0');

		const target = host.firstChild.shadowRoot.firstElementChild;

		makeMultiTouchEvent('touchstart', [{x: 10, y: 10}], target);
		await cycle();
		expect(text()).to.equal('dragging, 0, 0', 'touch with one finger');

		makeMultiTouchEvent('touchmove', [{x: 20, y: 10}], document);
		await cycle();
		expect(text()).to.equal('dragging, 10, 0', 'move the finger');

		makeMultiTouchEvent('touchend', [], document);
		await cycle();
		expect(text()).to.equal('init, 0, 0', 'raise the finger');

		// multi fingers

		makeMultiTouchEvent('touchstart', [{x: 10, y: 10}], target);
		await cycle();
		expect(text()).to.equal('dragging, 0, 0', 'touch with one finger');

		makeMultiTouchEvent('touchmove', [{x: 20, y: 10}], document);
		await cycle();
		expect(text()).to.equal('dragging, 10, 0', 'move the finger');

		makeMultiTouchEvent('touchstart', [{x: 20, y: 10}, {x: 20, y: 30}], document);
		await cycle();
		expect(text()).to.equal('dragging, 10, 0', 'touch with another finger');

		makeMultiTouchEvent('touchmove', [{x: 20, y: 10}, {x: 20, y: 10}], document);
		await cycle();
		expect(text()).to.equal('dragging, 0, -10', 'move the second finger');

		makeMultiTouchEvent('touchend', [{x: 20, y: 10}], document);
		await cycle();
		expect(text()).to.equal('dragging, 0, -10', 'raise one finger');

		makeMultiTouchEvent('touchmove', [{x: 20, y: 20}], document);
		await cycle();
		expect(text()).to.equal('dragging, 0, 10', 'move the finger');

		makeMultiTouchEvent('touchend', [], document);
		await cycle();
		expect(text()).to.equal('init, 0, 0', 'raise the finger');

		teardown();
	});
});
