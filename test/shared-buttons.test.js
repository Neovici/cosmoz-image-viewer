import { perform } from '@neovici/cfg/web/perform.js';
import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { component } from '@pionjs/pion';
import { spy } from 'sinon';
import { styleSheet } from '../cosmoz-image-viewer.style';
import { renderNavButtons } from '../lib/render-viewer';

customElements.define(
	'viewer-hover-fixture',
	component(
		() => renderNavButtons({ hasNav: true }),
		{ styleSheets: [styleSheet] },
	),
);

suite('viewer navigation controls', () => {
	test('reveals controls only while the viewer is hovered', async () => {
		await fixture(html`<viewer-hover-fixture></viewer-hover-fixture>`);
		await perform(async ({ page, expect }) => {
			const viewer = page.locator('viewer-hover-fixture');
			const next = viewer.locator('cosmoz-button[name="next"] button');
			await page.mouse.move(0, 0);
			await expect(next).toBeHidden();
			await viewer.hover();
			await expect(next).toBeVisible();
			await page.mouse.move(0, 0);
			await expect(next).toBeHidden();
		});
	});

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
