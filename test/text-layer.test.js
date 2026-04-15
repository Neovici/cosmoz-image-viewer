import '../cosmoz-image-viewer.js';

import { perform } from '@neovici/cfg/web/perform.js';
import { fixture, html } from '@open-wc/testing';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

const textLayers = [
	[
		{
			id: 'word-1',
			content: 'Selectable',
			top: 10,
			left: 10,
			width: 25,
			height: 8,
			viewBoxWidth: 100,
			viewBoxHeight: 30,
		},
	],
];

suite('cosmoz-image-viewer text layers', () => {
	suiteSetup(ignoreResizeLoopError);

	test('renders text layers in the main viewer and detached popup', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				show-detach
				.images=${[absolute('/stories/images/stockholm.jpg')]}
				.textLayers=${textLayers}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(page.locator('cosmoz-image-viewer svg.word')).toHaveCount(1);
			await expect(
				page.locator('cosmoz-image-viewer svg.word text'),
			).toContainText('Selectable');

			await page.locator('cosmoz-image-viewer').hover();
			const popupPromise = page.waitForEvent('popup');
			await page
				.locator('button[title="Detach image to separate window"]')
				.click();
			const popup = await popupPromise;

			await expect(popup.locator('cosmoz-image-viewer svg.word')).toHaveCount(
				1,
			);
			await expect(
				popup.locator('cosmoz-image-viewer svg.word text'),
			).toContainText('Selectable');
		});
	});
});
