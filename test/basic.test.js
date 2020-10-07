import {
	assert, fixture, html, aTimeout
} from '@open-wc/testing';

import '../cosmoz-image-viewer.js';

import sinon from 'sinon';

const cosmozImageViewerFixture = html`<cosmoz-image-viewer show-zoom></cosmoz-image-viewer>`;

sinon.assert.expose(chai.assert, { prefix: '' });

// eslint-disable-next-line max-lines-per-function
suite('cosmoz-image-viewer', () => {
	let imageViewer;

	setup(async () => {
		imageViewer = await fixture(cosmozImageViewerFixture);
		imageViewer.images = [
			'/base/stories/images/stockholm.jpg',
			'/base/stories/images/strasbourg.jpg',
			'/base/stories/images/cosmos1.jpg'
		];
		await aTimeout();
	});

	test('nextImage updates selected', async () => {
		assert.equal(imageViewer.selectedImageNumber, 1);
		imageViewer.nextImage();
		await aTimeout(50);
		assert.equal(imageViewer.selectedImageNumber, 2);
	});

	test('previousImage updates selected', async () => {
		imageViewer.nextImage();
		assert.equal(imageViewer.selectedImageNumber, 2);
		imageViewer.nextImage();
		assert.equal(imageViewer.selectedImageNumber, 3);
		imageViewer.previousImage();
		await aTimeout(50);
		assert.equal(imageViewer.selectedImageNumber, 2);
	});

	test('currentImage is updated', () => {
		assert.equal(imageViewer.currentImage, '/base/stories/images/stockholm.jpg');
		imageViewer.nextImage();
		assert.equal(imageViewer.currentImage, '/base/stories/images/strasbourg.jpg');
	});

	test('_computeCurrentImage does not update currentImage if no images', () => {
		assert.equal(imageViewer.currentImage, '/base/stories/images/stockholm.jpg');
		imageViewer._computeCurrentImage(2, null);
		assert.equal(imageViewer.currentImage, '/base/stories/images/stockholm.jpg');
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
		const blob = await imageViewer.downloadPdf(imageViewer._resolvedImages);
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

	test('_selectedItemChanged handles undefined', () => {
		const selected = imageViewer.selectedItem;
		imageViewer._selectedItemChanged();
		assert.isDefined(imageViewer.selectedItem);
		assert.equal(selected, imageViewer.selectedItem);
	});

	test('_imageListChanged sets _resolvedImages if no images', () => {
		assert.equal(imageViewer._resolvedImages.length, 3);
		imageViewer.images = [];
		assert.equal(imageViewer._resolvedImages.length, 0);
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
	const errorDiv = () => imageViewer.carousel.selectedItem.querySelector('.error'),
		displayNone = element => element.offsetParent === null || element.getAttribute('hidden') === 'true';

	setup(async () => {
		imageViewer = await fixture(cosmozImageViewerFixture);
		imageViewer.images = [
			'xyz.jpg',
			'/base/stories/images/stockholm.jpg',
			'/base/stories/images/strasbourg.jpg'
		];
		await aTimeout();
	});

	test('error is shown', async () => {
		imageViewer.currentImageIndex = 0;
		const errEl = errorDiv();
		await aTimeout(500);
		assert.equal(displayNone(errEl), false);
	});

	test('error is hidden if next image loaded successfully', async () => {
		imageViewer.currentImageIndex = 0;
		imageViewer.currentImageIndex = 1;
		const errEl = errorDiv();
		await aTimeout(500);
		assert.equal(displayNone(errEl), true);
	});
});

suite('cosmoz-image-viewer-overlay', () => {
	let overlay;

	setup(async () => {
		overlay = await fixture(html`<cosmoz-image-viewer-overlay></cosmoz-image-viewer-overlay>`);
		overlay.images = [
			'/base/stories/images/stockholm.jpg',
			'/base/stories/images/strasbourg.jpg',
			'/base/stories/images/cosmos1.jpg'
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
