import { perform } from '@neovici/cfg/web/perform.js';
import { aTimeout, assert, fixtureSync, html } from '@open-wc/testing';
import '../lib/haunted-pan-zoom.js';
import { assertFuzzyMatch } from './helpers';

const status = (el, status) =>
		new Promise((resolve) =>
			el.addEventListener(
				'status-changed',
				({ detail: { value } }) => value === status && resolve(),
			),
		),
	loaded = (el) => status(el, 'loaded'),
	error = (el) => status(el, 'error'),
	scroll = (el, dir) => {
		const rect = el.getBoundingClientRect();
		el.shadowRoot.querySelector('.container').dispatchEvent(
			new WheelEvent('wheel', {
				deltaY: dir,
				clientX: rect.left + rect.width / 2,
				clientY: rect.top + rect.height / 2,
			}),
		);
	},
	scrollDown = (el) => scroll(el, 1),
	scrollUp = (el) => scroll(el, -1);

suite('haunted-pan-zoom', () => {
	let el;

	setup(async () => {
		el = fixtureSync(html`
			<haunted-pan-zoom
				style="width: 200px; height: 200px;"
				src="/stories/images/cosmos1.jpg"
				zoom-stiffness="1"
			></haunted-pan-zoom>
		`);
		await loaded(el);
		await aTimeout();
	});

	test('displays the image centered', () => {
		const img = el.shadowRoot.querySelector('img');
		assert.include(img.src, '/stories/images/cosmos1.jpg');
		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 51.75,
			left: 8,
			width: 200,
			height: 112.5,
		});
	});

	test('handles errors', async () => {
		el.src = 'missing.jpg';

		await error(el);
		const img = el.shadowRoot.querySelector('img');
		assert.notExists(img);
	});

	test('changing src changes the image and centers it', async () => {
		el.src = '/stories/images/cosmos2.jpg';

		await loaded(el);

		const img = el.shadowRoot.querySelector('img');
		assert.include(img.src, '/stories/images/cosmos2.jpg');
		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 8,
			left: 8,
			width: 200,
			height: 200,
		});
	});

	test('handles scroll events', async () => {
		const img = el.shadowRoot.querySelector('img');

		scrollUp(el);
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 6.75,
			left: -72,
			width: 359,
			height: 201.94,
		});

		scrollDown(el);
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 51.75,
			left: 8,
			width: 200,
			height: 112.5,
		});
	});

	test('handles mouse panning', async () => {
		const img = el.shadowRoot.querySelector('img');

		// At zoom 1: image is 200x112.5 in a 200x200 container.
		// X bounds are [0,0] (image fills width), Y bounds are [-43.75, 43.75].
		// Drag down by 20px: X pan clamped to 0, Y pan of 20 is within bounds.
		await perform(async ({ page }) => {
			await page.mouse.move(100, 100);
			await page.mouse.down();
			await page.mouse.move(120, 120);
			await page.mouse.up();
		});
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 71.75,
			left: 8,
			width: 200,
			height: 112.5,
		});

		// Drag up by 60px from center: Y pan = 20 + (-60) = -40, within bounds.
		await perform(async ({ page }) => {
			await page.mouse.move(100, 120);
			await page.mouse.down();
			await page.mouse.move(100, 60);
			await page.mouse.up();
		});
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 11.75,
			left: 8,
			width: 200,
			height: 112.5,
		});
	});
});
