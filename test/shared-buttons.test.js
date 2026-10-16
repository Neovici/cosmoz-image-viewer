import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { spy } from 'sinon';
import { renderNavButtons } from '../lib/render-viewer';

suite('viewer navigation controls', () => {
	test('keeps disabled navigation inert and advances through the shared control', async () => {
		const previousImage = spy(),
			nextImage = spy();
		const root = await fixture(
			html`<div>
				${renderNavButtons({
					hasNav: true,
					first: true,
					last: false,
					previousImage,
					nextImage,
				})}
			</div>`,
		);
		await nextFrame();
		root.querySelector('[name="prev"]').click();
		expect(previousImage.called).to.be.false;
		root.querySelector('[name="next"]').click();
		expect(nextImage.calledOnce).to.be.true;
	});
});
