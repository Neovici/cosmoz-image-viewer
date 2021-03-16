import '../cosmoz-image-viewer.js';
import {
	assert, fixture, html
} from '@open-wc/testing';

import sinon from 'sinon';

sinon.assert.expose(chai.assert, { prefix: '' });

const createImageViewer = async () => {
	const el = await fixture(html`<cosmoz-image-viewer show-zoom></cosmoz-image-viewer>`);

	el.images = [
		'/stories/images/stockholm.jpg',
		'/stories/images/strasbourg.jpg',
		'/stories/images/cosmos1.jpg'
	];

	return el;
};

suite('cosmoz-image-viewer', () => {
	let imageViewer;

	setup(async function () {
		imageViewer = await createImageViewer();

		const w = imageViewer.detach();
		if (w == null) {
			/* eslint-disable-next-line no-console */
			console.warn('Only gets tested without popup blocker');
			/* eslint-disable-next-line no-invalid-this */
			this.skip();
		}
		w.close();
	});

	teardown(() => {
		imageViewer.window?.close();
	});

	test('detaching works', () => {
		const w = imageViewer.detach();
		assert.isNotNull(w);
	});

	test('detaching to existing window works', () => {
		const w = imageViewer.detach(),
			w2 = imageViewer.detach();
		assert.isNotNull(w);
		assert.deepEqual(w, w2);
	});

	test('shared detaching works', async () => {
		const imageViewer2 = await createImageViewer(),
			w = imageViewer.detach(),
			w2 = imageViewer2.detach();
		assert.isNotNull(w);
		assert.deepEqual(w, w2);
	});

	test('detach from fullscreen works', () => {
		assert.isFalse(imageViewer.hidden);
		assert.isFalse(imageViewer.hasWindow);

		imageViewer.openFullscreen();
		assert.isFalse(imageViewer.hasWindow);

		const ov = document.querySelector('cosmoz-image-viewer-overlay');

		ov.shadowRoot.querySelector('cosmoz-image-viewer').detach();
		assert.isTrue(imageViewer.hasWindow);
		assert.isTrue(imageViewer.hidden);
	});
});
