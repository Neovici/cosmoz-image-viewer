import '../cosmoz-image-viewer.js';

import { GlobalWorkerOptions } from 'pdfjs-dist';
import { perform } from '@neovici/cfg/web/perform.js';
import { fixture, html } from '@open-wc/testing';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

// Polyfill Map.prototype.getOrInsertComputed for older Chromium versions
// that don't yet support this TC39 Stage 4 proposal (required by pdfjs-dist v5).
if (!Map.prototype.getOrInsertComputed) {
	Map.prototype.getOrInsertComputed = function (key, callbackFn) {
		if (this.has(key)) {
			return this.get(key);
		}
		const value = callbackFn(key);
		this.set(key, value);
		return value;
	};
}

GlobalWorkerOptions.workerSrc = new URL(
	'../node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
	window.location.href,
).href;

const pdfUrl = absolute('/stories/images/sample.pdf');

suite('cosmoz-image-viewer pdf', () => {
	suiteSetup(ignoreResizeLoopError);

	test('renders PDF pages as images', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				.pdf=${pdfUrl}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// first PDF page should render as a data URL image
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });

			// navigate to next page and verify it renders too
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			// wait for slide transition to settle (old slide removed from DOM)
			await expect(
				page.locator('cosmoz-image-viewer img'),
			).toHaveCount(1, { timeout: 15000 });
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });
		});
	});

	test('renders PDF pages in detached popup', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				show-detach
				.pdf=${pdfUrl}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// wait for the first page to render before detaching
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });

			// detach to popup
			await page.locator('cosmoz-image-viewer').hover();
			const popupPromise = page.waitForEvent('popup');
			await page
				.locator('button[title="Detach image to separate window"]')
				.click();
			const popup = await popupPromise;

			// PDF page should be visible in the popup as a data URL image
			await expect(
				popup.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });

			// the main window viewer should be hidden (detached)
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).not.toBeVisible();

			// close the popup
			await popup.close({ runBeforeUnload: true });

			// the main viewer should be visible again after popup closes
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });
		});
	});
});
