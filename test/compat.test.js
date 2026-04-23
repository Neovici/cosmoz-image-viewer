import '../cosmoz-image-viewer.js';

import { perform } from '@neovici/cfg/web/perform.js';
import { fixture, html } from '@open-wc/testing';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

GlobalWorkerOptions.workerSrc = new URL(
	'../node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
	window.location.href,
).href;

const pdfUrl = absolute('/stories/images/sample.pdf');

suite('compat: .images prop', () => {
	suiteSetup(ignoreResizeLoopError);

	test('renders images', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				.images=${[
					'/stories/images/stockholm.jpg',
					'/stories/images/strasbourg.jpg',
				].map(absolute)}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('navigation works', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				.images=${[
					'/stories/images/stockholm.jpg',
					'/stories/images/strasbourg.jpg',
				].map(absolute)}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(
				page.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();

			// wait for slider animation to settle
			await expect(page.locator('img')).toHaveCount(1);

			await page.locator('button[name="prev"]').click();
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('empty array does not crash', async () => {
		await fixture(
			html`<cosmoz-image-viewer show-nav .images=${[]}></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(page.locator('cosmoz-image-viewer')).toBeVisible();
			await expect(page.locator('cosmoz-image-viewer img')).toHaveCount(0);
		});
	});

	test('no source or images does not crash', async () => {
		await fixture(html`<cosmoz-image-viewer show-nav></cosmoz-image-viewer>`);

		await perform(async ({ page, expect }) => {
			await expect(page.locator('cosmoz-image-viewer')).toBeVisible();
			await expect(page.locator('cosmoz-image-viewer img')).toHaveCount(0);
		});
	});
});

suite('compat: .pdf prop', () => {
	suiteSetup(ignoreResizeLoopError);

	test('renders PDF pages as images', async () => {
		await fixture(
			html`<cosmoz-image-viewer show-nav .pdf=${pdfUrl}></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });
		});
	});

	test('.images + .pdf renders PDF', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				.images=${['/stories/images/stockholm.jpg'].map(absolute)}
				.pdf=${pdfUrl}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('cosmoz-image-viewer img[src^="data:image/"]'),
			).toBeVisible({ timeout: 15000 });
		});
	});
});
