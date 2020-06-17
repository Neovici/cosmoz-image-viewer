
import {
	assertFuzzyMatch
} from './helpers';
import { makeMouseEvent } from '@polymer/iron-test-helpers/mock-interactions.js';
import '../lib/haunted-pan-zoom.js';
import {
	assert, fixtureSync, html, aTimeout
} from '@open-wc/testing';

const status = (el, status) => new Promise(resolve =>
		el.addEventListener('status-changed', (
			{ detail: { value }}) => value === status && resolve()
		)
	),
	loaded = el => status(el, 'loaded'),
	error = el => status(el, 'error'),

	scroll = (el, dir) => el.shadowRoot.querySelector('.container').dispatchEvent(new WheelEvent('wheel', { deltaY: dir })),
	scrollDown = el => scroll(el, 1),
	scrollUp = el => scroll(el, -1);

// eslint-disable-next-line max-lines-per-function
suite('haunted-pan-zoom', () => {
	let el;

	setup(async () => {
		el = await fixtureSync(html`
			<haunted-pan-zoom
				style="width: 200px; height: 200px;"
				src="/base/stories/images/cosmos1.jpg"
				zoom-stiffness="1"
				pan-stiffness="1"
			></haunted-pan-zoom>
		`);
		await loaded(el);
	});

	test('displays the image centered', () => {
		const img = el.shadowRoot.querySelector('img');
		assert.include(img.src, '/base/stories/images/cosmos1.jpg');
		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 43.75,
			left: 0,
			width: 200,
			height: 112.5
		});
	});

	test('handles errors', async () => {
		el.src = 'missing.jpg';

		await error(el);
		const img = el.shadowRoot.querySelector('img');
		assert.notExists(img);
	});

	test('changing src changes the image and centers it', async () => {
		el.src = '/base/stories/images/cosmos2.jpg';

		await loaded(el);

		const img = el.shadowRoot.querySelector('img');
		assert.include(img.src, '/base/stories/images/cosmos2.jpg');
		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 0,
			left: 0,
			width: 200,
			height: 200
		});
	});

	test('handles scroll events', async () => {
		const img = el.shadowRoot.querySelector('img');

		scrollUp(el);
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: -0.9,
			left: -79.5,
			width: 359,
			height: 201.94
		});

		scrollDown(el);
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 43.75,
			left: 0,
			width: 200,
			height: 112.5
		});
	});

	test('handles mouse panning', async () => {
		const img = el.shadowRoot.querySelector('img');

		makeMouseEvent('mousedown', {
			x: 10,
			y: 10
		}, img);
		await aTimeout();

		makeMouseEvent('mousemove', {
			x: 10,
			y: 20
		}, document);
		await aTimeout();

		makeMouseEvent('mouseup', {}, document);
		await aTimeout();

		assertFuzzyMatch(img.getBoundingClientRect(), {
			top: 53.75,
			left: 0,
			width: 200,
			height: 112.5
		});
	});
});
