import '../cosmoz-image-viewer.js';

import { perform } from '@neovici/cfg/web/perform.js';
import { fixture, html } from '@open-wc/testing';
import { absolute, ignoreResizeLoopError } from './helpers/index.js';

suite('cosmoz-image-viewer source', () => {
	suiteSetup(ignoreResizeLoopError);

	test('shows loading spinner for async source', async () => {
		let resolve;
		const source = () =>
			new Promise((r) => {
				resolve = r;
			});

		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				.source=${source}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// spinner should be visible while loading
			await expect(page.locator('cz-spinner')).toBeVisible();

			// no images should be visible
			await expect(page.locator('img')).toHaveCount(0);
		});

		// resolve the source
		resolve([
			{
				title: 'Loaded',
				images: [
					'/stories/images/stockholm.jpg',
					'/stories/images/strasbourg.jpg',
				].map(absolute),
			},
		]);

		await perform(async ({ page, expect }) => {
			// spinner should disappear
			await expect(page.locator('.loading-overlay')).not.toBeVisible();

			// image should be visible
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('shows error state for rejected async source', async () => {
		const source = () =>
			Promise.reject(new Error('Test network error'));

		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				.source=${source}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			await expect(
				page.locator('"Failed to load attachments."'),
			).toBeVisible();

			await expect(
				page.locator('"Test network error"'),
			).toBeVisible();
		});
	});

	test('shows dropdown when multiple attachments', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				.source=${[
					{
						title: 'Stockholm photos',
						images: [
							'/stories/images/stockholm.jpg',
							'/stories/images/strasbourg.jpg',
						].map(absolute),
					},
					{
						title: 'Cosmos photos',
						images: [
							'/stories/images/cosmos1.jpg',
							'/stories/images/cosmos2.jpg',
						].map(absolute),
					},
				]}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// hover to reveal toolbar
			await page.locator('cosmoz-image-viewer').hover();

			// dropdown should be visible
			await expect(
				page.locator('cosmoz-autocomplete'),
			).toBeVisible();

			// first attachment images should be visible
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('does not show dropdown for single attachment', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				.source=${[
					{
						title: 'Only one',
						images: [
							'/stories/images/stockholm.jpg',
						].map(absolute),
					},
				]}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// dropdown should not exist
			await expect(
				page.locator('cosmoz-autocomplete'),
			).toHaveCount(0);

			// image should be visible
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('sync source renders immediately without loading', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				.source=${[
					{
						title: 'Test',
						images: [
							'/stories/images/stockholm.jpg',
						].map(absolute),
					},
				]}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// no loading overlay
			await expect(page.locator('.loading-overlay')).toHaveCount(0);

			// image should be visible
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});
});
