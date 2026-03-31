import '../cosmoz-image-viewer.js';

import { perform } from '@neovici/cfg/web/perform.js';
import { fixture, html } from '@open-wc/testing';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

/**
 * Regression test for Linear issue FE-461:
 * "Detached invoice image window turns black when navigating"
 *
 * This test simulates the scenario where:
 * 1. A cosmoz-image-viewer is inside a cosmoz-slider
 * 2. User detaches the image to a popup window
 * 3. User navigates to next slide (old viewer unmounts, new viewer mounts)
 * 4. New viewer calls syncState() to reuse the detached window
 * 5. The popup should show the new image (NOT black)
 *
 * The bug was reported in cosmoz-frontend, where the slider's slide
 * transitions cause the old image-viewer to be removed from DOM before
 * the new one attaches and claims the detached window.
 */
suite('detached window slider navigation regression (FE-461)', () => {
	suiteSetup(ignoreResizeLoopError);

	test('detached window shows new image when viewer is replaced after unmount', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				id="slide-viewer-a"
				show-zoom
				show-nav
				show-fullscreen
				show-page-number
				show-detach
				.images=${['/stories/images/stockholm.jpg'].map(absolute)}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// Step 1: Detach first viewer to popup
			await page.locator('#slide-viewer-a').hover();
			const popupPromise = page.waitForEvent('popup');
			await page
				.locator(
					'#slide-viewer-a button[title="Detach image to separate window"]',
				)
				.click();
			const popup = await popupPromise;

			// Verify popup shows stockholm.jpg (image A)
			await expect(
				popup.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			// Step 2: Remove first viewer from DOM (simulating slider unmount)
			await page.evaluate(() => {
				document.querySelector('#slide-viewer-a')?.remove();
			});
		});

		// Step 3: Create second viewer with different image (simulating new slide)
		await fixture(
			html`<cosmoz-image-viewer
				id="slide-viewer-b"
				show-zoom
				show-nav
				show-fullscreen
				show-page-number
				show-detach
				.images=${['/stories/images/strasbourg.jpg'].map(absolute)}
			></cosmoz-image-viewer>`,
		);

		// Step 4 & 5: Verify popup updates via syncState()
		await perform(async ({ page, expect }) => {
			// Get reference to the popup (already open from previous detach)
			const [popup] = page
				.context()
				.pages()
				.filter((p) => p !== page);

			// Call syncState() on second viewer to claim the detached window
			await page
				.locator('#slide-viewer-b')
				.evaluate((node) => node.syncState());

			// Wait for the popup to update
			await page.waitForTimeout(500);

			// CRITICAL ASSERTION: Verify popup shows strasbourg.jpg (image B), NOT black
			// If this fails, it means the popup window didn't properly re-render
			// when the new viewer claimed it via syncState()
			await expect(
				popup.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();

			// Cleanup
			await popup.close({ runBeforeUnload: true });
		});
	});
});
