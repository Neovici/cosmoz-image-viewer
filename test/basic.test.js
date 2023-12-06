import '../cosmoz-image-viewer.js';

import { perform } from '@neovici/cfg/web/perform.js';
import { assert, fixture, html } from '@open-wc/testing';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

suite('cosmoz-image-viewer', () => {
	suiteSetup(ignoreResizeLoopError);
	setup(async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-zoom
				show-nav
				show-fullscreen
				show-page-number
				show-detach
				.images=${[
					'/stories/images/stockholm.jpg',
					'/stories/images/strasbourg.jpg',
					'/stories/images/cosmos1.jpg',
				].map(absolute)}
			></cosmoz-image-viewer>`,
		);
	});

	test('can move through images', async () => {
		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(
				page.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();

			await page.locator('button[name="next"]').click();
			await expect(
				page.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();

			// wait for the slider to finish the animation
			await expect(page.locator('img')).toHaveCount(1);

			await page.locator('button[name="prev"]').click();

			await expect(
				page.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();

			await page.locator('button[name="prev"]').click();
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('can open and close fullscreen', async () => {
		await perform(async ({ page, expect }) => {
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[title="Fullscreen image"]').click();

			await expect(page.locator('cosmoz-image-viewer')).toHaveCount(2);
			await expect(
				page
					.locator('cosmoz-image-viewer[fullscreen]')
					.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			await page.locator('button[title="Close fullscreen"]').click();
			await expect(page.locator('cosmoz-image-viewer')).toHaveCount(1);
		});
	});

	test('can create pdf', async () => {
		const filename = await perform(async ({ page }) => {
			const downloadPromise = page.waitForEvent('download');
			await page.locator('button[title="Download images"]').click();
			const download = await downloadPromise;
			return download.suggestedFilename();
		});

		assert.equal(filename, 'archive.pdf');
	});
});

suite('cosmoz-image-viewer with no images', () => {
	setup(async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-zoom
				show-nav
				show-fullscreen
				show-page-number
				show-detach
				.images=${[]}
			></cosmoz-image-viewer>`,
		);
	});

	test('action items are hidden', async () => {
		await perform(async ({ page, expect }) => {
			await page.locator('cosmoz-image-viewer').hover();
			await expect(page.locator('button[name="next"]')).not.toBeVisible();
			await expect(page.locator('button[name="prev"]')).not.toBeVisible();
			await expect(
				page.locator('button[title="Fullscreen image"]'),
			).not.toBeVisible();
			await expect(
				page.locator('button[title="Download images"]'),
			).not.toBeVisible();
			await expect(
				page.locator('button[title="Detach image to separate window"]'),
			).not.toBeVisible();
		});
	});
});

suite('cosmoz-image-viewer-loading-error', () => {
	setup(async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-zoom
				show-nav
				show-fullscreen
				show-page-number
				show-detach
				.images=${[
					'xyz.jpg',
					'/stories/images/stockholm.jpg',
					'/stories/images/strasbourg.jpg',
				].map(absolute)}
			></cosmoz-image-viewer>`,
		);
	});

	test('error is shown', async () => {
		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('"An error occurred while loading the image."'),
			).toBeVisible();

			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});
});
