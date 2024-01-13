import {
	component, html
} from '@pionjs/pion';
import { useMousePan } from '../../lib/hooks/use-mouse-pan';
import {
	expect, fixture, aTimeout
} from '@open-wc/testing';

suite('use-mouse-pan', () => {
	suiteSetup(() => {
		const App = () => {
			const [status, deltaX, deltaY, , start] = useMousePan();
			return html`<span @mousedown=${ start }>${ status }, ${ deltaX }, ${ deltaY }</span>`;
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
		const evOpts = {
			bubbles: true,
			cancelable: true,
			composed: true
		};

		element.shadowRoot.firstElementChild.dispatchEvent(new MouseEvent('mousedown', {
			clientX: 10,
			clientY: 10,
			...evOpts
		}));
		await aTimeout(100);
		expect(text()).to.equal('dragging, 0, 0');

		document.dispatchEvent(new MouseEvent('mousemove', {
			clientX: 10,
			clientY: 20,
			...evOpts
		}));
		await aTimeout();
		expect(text()).to.equal('dragging, 0, 10');

		document.dispatchEvent(new MouseEvent('mousemove', {
			clientX: 20,
			clientY: 40,
			...evOpts
		}));
		await aTimeout();
		expect(text()).to.equal('dragging, 10, 20');

		document.dispatchEvent(new MouseEvent('mouseup', evOpts));

		await aTimeout();
		expect(text()).to.equal('init, 0, 0');
	});
});
