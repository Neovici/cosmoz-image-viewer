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
			await expect(page.locator('.loading')).not.toBeVisible();

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
				page.locator('"Failed to load files."'),
			).toBeVisible();

			await expect(
				page.locator('"Test network error"'),
			).toBeVisible();
		});
	});

	test('shows dropdown when multiple files', async () => {
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

			// first file images should be visible
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});

	test('does not show dropdown for single file', async () => {
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

	test('slides across files when pressing next at last image', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				loop
				.source=${[
					{
						title: 'Set A',
						images: ['/stories/images/stockholm.jpg'].map(
							absolute,
						),
					},
					{
						title: 'Set B',
						images: ['/stories/images/cosmos1.jpg'].map(absolute),
					},
				]}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// first file, first image
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();

			// next crosses to Set B
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();

			// wait for transition to complete (old slide removed)
			await expect(page.locator('.slide')).toHaveCount(1);
			await expect(
				page.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();

			// dropdown should show Set B
			await expect(
				page.locator('cosmoz-autocomplete'),
			).toContainText('Set B');
		});
	});

	test('slides backward across files, landing on last image', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				loop
				.source=${[
					{
						title: 'Set A',
						images: [
							'/stories/images/stockholm.jpg',
							'/stories/images/strasbourg.jpg',
						].map(absolute),
					},
					{
						title: 'Set B',
						images: ['/stories/images/cosmos1.jpg'].map(absolute),
					},
				]}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// navigate to Set B first (Set A has 2 images, skip both)
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(page.locator('.slide')).toHaveCount(1);

			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(page.locator('.slide')).toHaveCount(1);

			await expect(
				page.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();

			// prev crosses back to Set A, last image
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="prev"]').click();
			await expect(page.locator('.slide')).toHaveCount(1);

			await expect(
				page.locator('img[src$="/stories/images/strasbourg.jpg"]'),
			).toBeVisible();

			// dropdown should show Set A
			await expect(
				page.locator('cosmoz-autocomplete'),
			).toContainText('Set A');
		});
	});

	test('loop wraps from last file to first', async () => {
		await fixture(
			html`<cosmoz-image-viewer
				show-nav
				show-page-number
				loop
				.source=${[
					{
						title: 'Set A',
						images: ['/stories/images/stockholm.jpg'].map(
							absolute,
						),
					},
					{
						title: 'Set B',
						images: ['/stories/images/cosmos1.jpg'].map(absolute),
					},
				]}
			></cosmoz-image-viewer>`,
		);

		await perform(async ({ page, expect }) => {
			// navigate to Set B
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(page.locator('.slide')).toHaveCount(1);
			await expect(
				page.locator('img[src$="/stories/images/cosmos1.jpg"]'),
			).toBeVisible();

			// next wraps to Set A
			await page.locator('cosmoz-image-viewer').hover();
			await page.locator('button[name="next"]').click();
			await expect(page.locator('.slide')).toHaveCount(1);
			await expect(
				page.locator('img[src$="stockholm.jpg"]').first(),
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
			await expect(page.locator('.loading')).toHaveCount(0);

			// image should be visible
			await expect(
				page.locator('img[src$="/stories/images/stockholm.jpg"]'),
			).toBeVisible();
		});
	});
});