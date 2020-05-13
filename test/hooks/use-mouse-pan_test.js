import {
	component, html
} from 'haunted';
import { useMousePan } from '../../lib/hooks/use-mouse-pan';
import {
	expect, fixture, aTimeout
} from '@open-wc/testing';
import { makeMouseEvent } from '@polymer/iron-test-helpers/mock-interactions.js';

suite('use-mouse-pan', () => {
	suiteSetup(() => {
		const App = () => {
			const [status, deltaX, deltaY, , start] = useMousePan();
			return html`<span @touchstart=${start}>${status}, ${deltaX}, ${deltaY}</span>`;
		};
		customElements.define('use-mouse-pan', component(App));
	});

	let element;
	const text = () => element.shadowRoot.textContent;
	setup(async () => {
		element = await fixture(html`<use-mouse-pan></use-mouse-pan>`);
	});

	test('it', async () => {
		expect(text()).to.equal('init, 0, 0');
		console.log(element.shadowRoot.firstElementChild);

		makeMouseEvent('mousedown', {
			x: 10,
			y: 10
		}, element.shadowRoot.firstElementChild);
		await aTimeout(100);
		expect(text()).to.equal('dragging, 0, 0');

		makeMouseEvent('mousemove', {
			x: 10,
			y: 20
		}, document);
		await aTimeout();
		expect(text()).to.equal('dragging, 0, 10');

		makeMouseEvent('mousemove', {
			x: 20,
			y: 40
		}, document);
		await aTimeout();
		expect(text()).to.equal('dragging, 10, 20');

		makeMouseEvent('mouseup', {}, document);
		await aTimeout();
		expect(text()).to.equal('init, 0, 0');
	});
});
