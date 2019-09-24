/* global host, MockInteractions */
import { component, html } from 'haunted';
import { attach, cycle } from '../helpers';
import { useMousePan } from '../../lib/hooks/use-mouse-pan';

const text = () => host.firstChild.shadowRoot.textContent;

describe('use-mouse-pan', () => {
	it('works', async () => {
		const tag = 'use-mouse-pan',

			App = () => {
				const [status, deltaX, deltaY, , start] = useMousePan();
				return html`<span @mousedown=${start}>${status}, ${deltaX}, ${deltaY}</span>`;
			};

		customElements.define(tag, component(App));

		const teardown = attach(tag);
		await cycle();
		expect(text()).to.equal('init, 0, 0');

		MockInteractions.makeMouseEvent('mousedown', {x: 10, y: 10}, host.firstChild.shadowRoot.firstElementChild);
		await cycle();
		expect(text()).to.equal('dragging, 0, 0');

		MockInteractions.makeMouseEvent('mousemove', {x: 10, y: 20}, document);
		await cycle();
		expect(text()).to.equal('dragging, 0, 10');

		MockInteractions.makeMouseEvent('mousemove', {x: 20, y: 40}, document);
		await cycle();
		expect(text()).to.equal('dragging, 10, 20');

		MockInteractions.makeMouseEvent('mouseup', {}, document);
		await cycle();
		expect(text()).to.equal('init, 0, 0');

		teardown();
	});
});
