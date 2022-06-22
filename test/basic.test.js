import {
	assert, fixture, html, aTimeout, nextFrame
} from '@open-wc/testing';

import '../cosmoz-image-viewer.js';

import sinon from 'sinon';

const cosmozImageViewerFixture = html`<cosmoz-image-viewer show-zoom></cosmoz-image-viewer>`;

sinon.assert.expose(assert, { prefix: '' });

// eslint-disable-next-line max-lines-per-function
suite('cosmoz-image-viewer', () => {
	let imageViewer;

	setup(async () => {
		imageViewer = await fixture(cosmozImageViewerFixture);
		imageViewer.images = [
			'/stories/images/stockholm.jpg',
			'/stories/images/strasbourg.jpg',
			'/stories/images/cosmos1.jpg'
		];
		await nextFrame();
	});

	test('nextImage updates selected', async () => {
		assert.equal(imageViewer.selectedImageNumber, 1);
		imageViewer.nextImage();
		await nextFrame();
		assert.equal(imageViewer.selectedImageNumber, 2);
	});

	test('previousImage updates selected', async () => {
		imageViewer.nextImage();

		await nextFrame();
		assert.equal(imageViewer.selectedImageNumber, 2);

		imageViewer.nextImage();

		await nextFrame();
		assert.equal(imageViewer.selectedImageNumber, 3);

		imageViewer.previousImage();
		await nextFrame();

		assert.equal(imageViewer.selectedImageNumber, 2);
	});

	test('openFullScreen creates dialog', () => {
		imageViewer.openFullscreen();
		const dialog = imageViewer.imageOverlay;
		assert.isDefined(dialog, 'Expected openFullscreen to create dialog if it was undefined');
		assert.equal(dialog.tagName, 'COSMOZ-IMAGE-VIEWER-OVERLAY');
		assert.isFunction(dialog.open, 'Expected openFullscreen to create dialog and dilog.open to be a function');
		assert.isTrue(dialog.opened);
		assert.equal(dialog.id, 'cosmoz-image-viewer-overlay');
		assert.equal(dialog.images.length, 3);
		assert.equal(dialog.images, imageViewer.images);
	});

	test('pdf creation works', async () => {
		const blob = await imageViewer.downloadPdf(imageViewer.images);
		assert.isAbove(blob.size, 10000);
	});

	test('_close fires event close-tapped', () => {
		let called = false;
		imageViewer.addEventListener('close-tapped', () => {
			called = true;
		});
		imageViewer._close();
		assert.isTrue(called);
	});
});

suite('cosmoz-image-viewer-no-images', () => {
	let imageViewer;

	setup(async () => {
		imageViewer = await fixture(cosmozImageViewerFixture);
		Object.assign(imageViewer, {
			images: [],
			showZoom: true,
			showNav: true,
			showFullscreen: true,
			showDetach: true
		});
	});

	test('action items are hidden', () => {
		assert.equal(imageViewer._showNav, false);
		assert.equal(imageViewer._showZoom, false);
		assert.equal(imageViewer._showFullscreen, false);
		assert.equal(imageViewer._showDetach, false);
	});

	test('no image info is shown', () => {
		assert.equal(imageViewer._hideNoImageInfo, false);
	});
});

suite('cosmoz-image-viewer-loading-error', () => {
	let imageViewer;
	const errorDiv = () => imageViewer.$.slider.querySelector('.error'),
		displayNone = element => element.offsetParent === null || element.getAttribute('hidden') === 'true';

	setup(async () => {
		imageViewer = await fixture(cosmozImageViewerFixture);
		imageViewer.images = [
			'xyz.jpg',
			'/stories/images/stockholm.jpg',
			'/stories/images/strasbourg.jpg'
		];
		await nextFrame();
	});

	test('error is shown', async () => {
		const errEl = errorDiv();
		await aTimeout(500);
		assert.equal(displayNone(errEl), false);
	});

	test('error is hidden if next image loaded successfully', async () => {
		imageViewer.nextImage();
		await nextFrame();
		await aTimeout(500);
		const errEl = errorDiv();
		assert.equal(displayNone(errEl), true);
	});
});

suite('cosmoz-image-viewer-overlay', () => {
	let overlay;

	setup(async () => {
		overlay = await fixture(html`<cosmoz-image-viewer-overlay></cosmoz-image-viewer-overlay>`);
		overlay.images = [
			'/stories/images/stockholm.jpg',
			'/stories/images/strasbourg.jpg',
			'/stories/images/cosmos1.jpg'
		];
	});

	test('_trackHandler does not call close if detail state is not end', () => {
		const event = new CustomEvent('testEvent', {
				detail: {
					dy: 1000
				}
			}),
			spyClose = sinon.spy(overlay, 'close');
		overlay._trackHandler(event);
		assert.notCalled(spyClose);
	});
	test('_trackHandler does call close', () => {
		const event = new CustomEvent('testEvent', {
				detail: {
					state: 'end',
					dy: 1000
				}
			}),
			spyClose = sinon.spy(overlay, 'close');

		overlay._trackHandler(event);
		assert.calledOnce(spyClose);
	});

});
