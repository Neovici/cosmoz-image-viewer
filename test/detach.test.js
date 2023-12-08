import '../cosmoz-image-viewer.js';

import { perform } from '@neovici/cfg/web/perform.js';
import { fixture, html } from '@open-wc/testing';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

suite('cosmoz-image-viewer detach', () => {
	suiteSetup(ignoreResizeLoopError);

	test('can detach to separate window', async () => {
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

		await perform(async ({ page, expect }) => {
			// detach to popup
			await page.locator('cosmoz-image-viewer').hover();
			const popupPromise = page.waitForEvent('popup');
			await page
				.locator('button[title="Detach image to separate window"]')
				.click();
			const popup = await popupPromise;

			// the viewer is visible only in the popup
			await expect(popup.locator('cosmoz-image-viewer')).toBeVisible();
			await expect(
				popup.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).not.toBeVisible();

			// you can navigate the images in the popup
			await popup.locator('cosmoz-image-viewer').hover();
			await popup.locator('button[name="next"]').click();
			await expect(
				popup.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();

			// you can close the popp
			await popup.close({ runBeforeUnload: true });

			// the main instance is synchronized to the popup
			await expect(
				page.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();
		});
	});

	test('shared detach functionality', async () => {
		await fixture(
			html`<cosmoz-image-viewer
					id="first"
					show-zoom
					show-nav
					show-fullscreen
					show-page-number
					show-detach
					.images=${[
						'/stories/images/stockholm.jpg',
						'/stories/images/strasbourg.jpg',
					].map(absolute)}
				></cosmoz-image-viewer>
				<cosmoz-image-viewer
					id="second"
					show-zoom
					show-nav
					show-fullscreen
					show-page-number
					show-detach
					.images=${[
						'/stories/images/cosmos1.jpg',
						'/stories/images/cosmos2.jpg',
					].map(absolute)}
				></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// detach to popup
			await page.locator('#first').hover();
			const popupPromise = page.waitForEvent('popup');
			await page
				.locator('#first button[title="Detach image to separate window"]')
				.click();
			const popup = await popupPromise;

			// the viewer is visible only in the popup
			await expect(popup.locator('cosmoz-image-viewer')).toBeVisible();
			await expect(
				popup.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
			await expect(
				page.locator('#first img[src$="/stories/images/stockholm.jpg"]'),
			).not.toBeVisible();

			// the other viewer is not affected
			await expect(
				page.locator('#second img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();

			// the detach popup is shared by all instances
			await page.locator('#second').hover();
			await page
				.locator('#second button[title="Detach image to separate window"]')
				.click();
			await expect(
				popup.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();
			await expect(
				page.locator('#first img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
			await expect(
				page.locator('#second img[src$="/stories/images/cosmos1.jpg"]'),
			).not.toBeVisible();

			// you can navigate the popup slideshow
			await popup.locator('cosmoz-image-viewer').hover();
			await popup.locator('button[name="next"]').click();
			await expect(
				popup.locator('img[src$="/stories/images/cosmos2.jpg"]'),
			).toBeVisible();

			// you can close the popup
			await popup.locator('cosmoz-image-viewer').hover();
			await popup.close({ runBeforeUnload: true });

			// the slideshow state is synced to the original instance, independently
			await expect(
				page.locator('#first img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
			await expect(
				page.locator('#second img[src$="/stories/images/cosmos2.jpg"]'),
			).toBeVisible();
		});
	});

	test('detach from fullscreen works', async () => {
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

		await perform(async ({ page, expect }) => {
			// go fullscreen
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[title="Fullscreen image"]').click();

			await expect(page.locator('cosmoz-image-viewer')).toHaveCount(2);
			await expect(
				page.locator('[fullscreen] img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			// detach to popup
			await page.locator('[fullscreen]').hover();
			const popupPromise = page.waitForEvent('popup');
			await page
				.locator('[fullscreen] button[title="Detach image to separate window"]')
				.click();
			const popup = await popupPromise;

			// expect to see the image in the popup
			await expect(
				popup.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			// expect to not see the image in the page
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).not.toBeVisible();

			// close the popup
			await popup.close({ runBeforeUnload: true });

			// expect to see the image in fullscreen mode
			await expect(
				page
					.locator('cosmoz-image-viewer[fullscreen]')
					.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			// exit fullscreen
			await page.locator('cosmoz-image-viewer[fullscreen]').hover();
			await page.locator('button[title="Close fullscreen"]').click();

			// expect to see the image in normal mode
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});
});

suite('syncState', () => {
	let el;
	setup(async () => {
		el = await fixture(
			html`<cosmoz-image-viewer
					id="first"
					show-zoom
					show-nav
					show-fullscreen
					show-page-number
					show-detach
					.images=${[
						'/stories/images/stockholm.jpg',
						'/stories/images/strasbourg.jpg',
					]}
				></cosmoz-image-viewer>
				<cosmoz-image-viewer
					id="second"
					show-zoom
					show-nav
					show-fullscreen
					show-page-number
					show-detach
					.images=${[
						'/stories/images/cosmos1.jpg',
						'/stories/images/cosmos2.jpg',
					]}
				></cosmoz-image-viewer>`,
		);
	});

	test.only('syncState only opens the detached window if already detached', async () => {
		el.syncState();
		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});

		await perform(async ({ page }) => {
			await page.locator('#first').hover();
			await page
				.locator('#first button[title="Detach image to separate window"]')
				.click();
		});

		el.syncState();

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).not.toBeVisible();
			await expect(
				page.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();
		});

		el.nextElementSibling.syncState();

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
			await expect(
				page.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).not.toBeVisible();
		});
	});
});
