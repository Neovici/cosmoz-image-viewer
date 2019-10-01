/* eslint-disable max-lines, max-len */
import { PolymerElement } from '@polymer/polymer/polymer-element';

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { translatable } from '@neovici/cosmoz-i18next';

import { NullZipArchive } from '@neovici/nullxlsx';

import { template } from './cosmoz-image-viewer.html';

const globals = {
	window: null,
	windowOpener: null
};

let imageOverlay;

/**
`cosmoz-image-viewer` is an element for displaying images in a carousel while being able to detach the currently
selected image into another window, zooming and activating a fullscreen mode.

A user can enable the zoom mode by
a) clicking on the zoom button
b) double clicking on this element

The zoom mode (+ pan) gets disabled when the image is zoomed out (The initial zoom level is active.) again
so a user can swipe to the next image.

@group Cosmoz Elements
@element cosmoz-image-viewer
@demo demo/index.html
@appliesMixin translatable
*/
class CosmozImageViewer extends translatable(mixinBehaviors([
	IronResizableBehavior
], PolymerElement)) {
	static get template() { // eslint-disable-line max-lines-per-function
		return template;
	}

	static get is() {
		return 'cosmoz-image-viewer';
	}

	static get properties() { // eslint-disable-line max-lines-per-function
		return {
			/**
			 * The url of the currenly selected image.
			 */
			currentImage: {
				type: String,
				notify: true,
				computed: '_computeCurrentImage(currentImageIndex, images)'
			},
			/**
			 * The index in the images array of the currently selected image.
			 */
			currentImageIndex: {
				type: Number,
				notify: true
			},
			/**
			 * Unique name of browsing context for detached window
			 */
			detachedWindowName: {
				type: String,
				value: 'OCR'
			},
			/**
			 * Detached window features
			 * https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
			 */
			detachedWindowFeatures: {
				type: Object,
				value() {
					return {
						height: 700,
						width: 800
					};
				}
			},
			/**
			 * Detached window features in string format
			 */
			_detachedWindowFeaturesString: {
				type: String,
				computed: '_computeDetachedWindowFeaturesString(detachedWindowFeatures)'
			},
			/**
			 * Default title of detached window document,
			 * used if no title attribute/property is specified
			 */
			_defaultDetachedWindowTitle: {
				type: String,
				computed: '_("Cosmoz Image Viewer", t)'
			},
			/**
			 * Evaluated title of detached window document.
			 * Supplied title or default
			 */
			_detachedWindowTitle: {
				type: String,
				computed: '_getTitle(title, _defaultDetachedWindowTitle)'
			},
			/**
			 * Like currentImageIndex but starts at 1 instead of 0.
			 */
			selectedImageNumber: {
				type: Number,
				notify: true,
				computed: '_computeSelectedImageNumber(currentImageIndex, total)'
			},
			/**
			 * If true, the detached window is open.
			 */
			isDetached: {
				type: Boolean,
				value: false,
				readOnly: true,
				notify: true,
				observer: function (value) { // eslint-disable-line object-shorthand
					this.hidden = value;
					this.notifyResize();
				}
			},
			/**
			 * The images array.
			 */
			images: {
				type: Array,
				value() {
					return [];
				},
				observer: () => {
					this.currentImageIndex = 0;
				}
			},

			_resolvedImages: {
				type: Array,
				computed: '_resolveImages(images)'
			},

			sizing: {
				type: String
			},
			/**
			 * The selected slide in the carousel
			 */
			selectedItem: {
				type: Object,
				observer: '_selectedItemChanged'
			},
			/**
			 * If true, the current image is zoomed.
			 */
			isZoomed: {
				type: Boolean,
				value: false
			},
			/**
			* If true, navigation next/prev buttons are visible.
			*/
			showNav: {
				type: Boolean,
				value: false
			},
			/**
			* If true, pagination dots are visible.
			*/
			showDots: {
				type: Boolean,
				value: false
			},
			/**
			 * If true, a zoom button is visible.
			 */
			showZoom: {
				type: Boolean,
				value: false
			},
			/**
			 * If true, a fullscreen button is visible.
			 */
			showFullscreen: {
				type: Boolean,
				value: false
			},
			/**
			 * If true, a detach button is visible.
			 */
			showDetach: {
				type: Boolean,
				value: false
			},
			/**
			* If true, a close icon is visible. Useful if displayed as an overlay.
			*/
			showClose: {
				type: Boolean,
				value: false
			},
			/**
			* If true, the current page number (e.g. 2/5) is visible.
			*/
			showPageNumber: {
				type: Boolean,
				value: false
			},
			/**
			 * Title used as tooltip and detached window document title
			 */
			title: {
				type: String,
				reflectToAttribute: true,
				value: null
			},
			/**
			* If true, clicking on next when the last image is selected,
			* will show the first image again.
			*/
			loop: {
				type: Boolean,
				value: false
			},
			/**
			* If true, will add credentials to fetch call,
			* defaults to true
			*/
			credentials: {
				type: Boolean,
				value: true
			},
			/**
			* The filename of the zip archive when downloaded
			* in the detached window.
			*/
			downloadFileName: {
				type: String,
				value: 'archive'
			},

			// Private

			_elementHeight: {
				type: Number,
				value: 0
			},

			_hideNoImageInfo: {
				type: Boolean,
				computed: '_computeShowActions("true", images.length)'
			},

			_showNav: {
				type: Boolean,
				computed: '_computeShowActions(showNav, images.length, _elementHeight, 2)'
			},

			_showZoom: {
				type: Boolean,
				computed: '_computeShowActions(showZoom, images.length, _elementHeight)'
			},

			_showDetach: {
				type: Boolean,
				computed: '_computeShowActions(showDetach, images.length, _elementHeight)'
			},

			_showFullscreen: {
				type: Boolean,
				computed: '_computeShowActions(showFullscreen, images.length, _elementHeight)'
			},

			_showPageNumber: {
				type: Boolean,
				computed: '_computeShowActions(showPageNumber, images.length, _elementHeight)'
			}
		};
	}

	constructor() {
		super();
		this._onOverlayDetachIntentBound = this._onOverlayDetachIntent.bind(this);
		this._onOverlayClosedBound = this._onOverlayClosed.bind(this);
	}

	/** ELEMENT LIFECYCLE */

	ready() {
		super.ready();

		this.addEventListener('iron-resize', this._onResize);

		this._dblClickListner = () => {
			if (!this._showZoom) {
				return;
			}
			this.zoomToggle();
		};
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('dblclick', this._dblClickListner);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('dblclick', this._dblClickListner);

		if (imageOverlay) {
			this._cleanupOverlayEvents();
		}

		this.cancelDebouncer('elementHeight');
	}

	/** PUBLIC */

	get imageOverlay() {
		return imageOverlay;
	}

	get carousel() {
		return this.$$('#carousel');
	}

	/**
	 * Triggers the slide to the next image.
	 * @returns {undefined}
	 */
	nextImage() {
		this.carousel.next();
	}
	/**
	 * Triggers the slide to the previous image.
	 * @returns {undefined}
	 */
	previousImage() {
		this.carousel.prev();
	}

	_createImageOverlay() {
		const dialog = document.createElement('cosmoz-image-viewer-overlay');
		dialog.id = 'cosmoz-image-viewer-overlay';
		dialog.noCancelOnOutsideClick = true;
		dialog.loop = this.loop;
		dialog.showDetach = this.showDetach;
		document.body.appendChild(dialog);
		imageOverlay = dialog;
		return dialog;
	}

	/**
	 * Opens the fullscreen overlay.
	 * @returns {undefined}
	 */
	openFullscreen() {
		const dialog = imageOverlay || this._createImageOverlay();
		dialog.images = this.images;
		dialog.currentImageIndex = this.currentImageIndex;
		dialog.open();
		this._setupDialogEvents();
	}

	_setupDialogEvents() {
		imageOverlay.addEventListener('detach-intent', this._onOverlayDetachIntentBound);
		imageOverlay.addEventListener('iron-overlay-closed', this._onOverlayClosedBound);
	}

	_onOverlayDetachIntent() {
		imageOverlay.close();
		this.detach();
	}

	_onOverlayClosed() {
		this._cleanupOverlayEvents();
	}

	_cleanupOverlayEvents() {
		imageOverlay.removeEventListener('detach-intent', this._onOverlayDetachIntentBound);
		imageOverlay.removeEventListener('iron-overlay-closed', this._onOverlayClosedBound);
	}

	/**
	 * Closes the detached window.
	 * @returns {undefined}
	 */
	attach() {
		this._setIsDetached(false);
		if (globals.window) {
			globals.window.close();
		}
	}
	/**
	 * Opens a detached window.
	 * @returns {Object} detached window object
	 */
	detach() {
		const detachPrevented = !this.dispatchEvent(new CustomEvent('will-detach', {cancelable: true}));
		if (detachPrevented) {
			return;
		}

		this._setIsDetached(true);

		if (globals.windowOpener !== this) {
			if (globals.windowOpener != null) {
				globals.windowOpener._setIsDetached(false);
			}
			globals.windowOpener = this;
		}

		if (this.hasWindow) {
			return this._detachToExistingWindow();
		}

		return this._detachToNewWindow();
	}

	_detachToNewWindow() {
		const
			w = globals.window = window.open(undefined, this.detachedWindowName, this._detachedWindowFeaturesString),
			windowTemplate = this.$$('#externalWindow'),
			windowTemplateClone = windowTemplate.content.cloneNode(true),
			setImages = () => w.ciw.setImages(this._resolvedImages, this.currentImageIndex);

		if (w == null) {
			// if window.open() is blocked (popup blocked, not emited by native user triggered event)
			return w;
		}

		if (w.ciw != null) {
			// browser has been refreshed without closing external window, we will reuse an old window
			w.removeEventListener('beforeunload', globals.windowBeforeUnloadHandler);
		}

		globals.windowBeforeUnloadHandler = () => {
			if (globals.windowOpener !== null) {
				globals.windowOpener._setIsDetached(false);
			}
			globals.windowOpener = null;
			globals.window = null;
		};

		w.document.title = this._detachedWindowTitle;

		w.addEventListener('download', ({detail}) => this.createZipFromUrls(detail).then(zip => this.downloadZip(zip)));
		w.addEventListener('beforeunload', globals.windowBeforeUnloadHandler);

		if (w.ciw == null) {
			w.addEventListener('ready', () => setImages());
			this._appendScriptsToWindow(windowTemplateClone.childNodes, w);

		} else {
			setImages();
		}

		return w;
	}

	_appendScriptsToWindow(nodes, w) {
		Array.from(nodes)
			.forEach(node => {
				if (node.tagName === 'SCRIPT') {
					// Needed for Firefox
					// otherwise the script would not be evaluated
					const sc = document.createElement('script');
					sc.innerHTML = node.innerHTML;
					w.document.body.appendChild(sc);
					return;
				}
				w.document.body.appendChild(node);
			});
	}

	_detachToExistingWindow() {
		globals.window.document.title = this._detachedWindowTitle;
		globals.window.ciw.setImages(this._resolvedImages, this.currentImageIndex);
		globals.window.focus();
		return globals.window;
	}

	get hasWindow() {
		return globals.window != null && !globals.window.closed && globals.window.ciw;
	}

	syncState() {
		if (!this.isDetached && this.hasWindow) {
			this.detach();
		}
	}

	downloadZip(zip) {
		const a = document.body.appendChild(zip.createDownloadLink());
		a.click();
		document.body.removeChild(a);
	}

	createZipFromUrls(fileUrls) {
		const options = {
				credentials: this.credentials ? 'include' : 'omit'
			},
			fetches = fileUrls.map(url =>
				fetch(url, options)
					.then(response => response.arrayBuffer())
					.then(data => ({
						data,
						url
					}))
			);

		return Promise
			.all(fetches)
			.then(responses => {
				const filenames = [],
					zip = new NullZipArchive(this.downloadFileName, false);

				for (const {url, data} of responses) {
					let filename = url.replace(/^.*[\\/]/u, '');
					const filenameParts = filename.split('.'),
						sameFilenames = filenames.filter(f => f === filenameParts[0]);

					if (sameFilenames.length > 0) {
						filename = `${filenameParts[0]} (${sameFilenames.length + 1}).${filenameParts[1]}`;
					}

					zip.addFileFromUint8Array(filename, new Uint8Array(data));
					filenames.push(filenameParts[0]);

					if (fileUrls.length === zip.files.length) {
						zip.generate();
						return zip;
					}
				}
			});
	}
	/**
	 * Toggles between initial zoom level and 1.5x initial zoom level.
	 * @returns {undefined}
	 */
	zoomToggle() {
		const el = this.carousel.selectedItem.querySelector('haunted-pan-zoom');

		if (el.zoom > 1) {
			return el.zoomTo(1);
		}
		el.zoomTo(1.5);
	}

	/** ELEMENT BEHAVIOR */

	_computeDetachedWindowFeaturesString(featues = {}) {
		return Object.keys(featues)
			.map(key => key + '=' + featues[key])
			.join(',');
	}

	_computeShowActions(show, imagesLen, height, imgsMinLen = 1) {
		const heightOk = height ? height > 100 : true;
		return show ? imagesLen >= imgsMinLen && heightOk : false;
	}

	_onImageError(e) {
		if (!e.currentTarget.parentElement) {
			return;
		}

		const errorContainer = e.currentTarget.parentElement.querySelector('.error');
		if (e.detail.value) {
			errorContainer.removeAttribute('hidden');
			return;
		}
		errorContainer.setAttribute('hidden', true);
	}

	_selectedItemChanged(selectedItem) {
		if (!selectedItem) {
			return;
		}

		const panZoom = selectedItem.querySelector('haunted-pan-zoom');

		if (!panZoom) {
			return;
		}
		this.isZoomed = panZoom.zoom > 1;
		panZoom.resize(); // NOTE: to be removed when ResizeObserver is available
	}

	_getZoomIcon(zoomed) {
		return zoomed ? 'icons:zoom-out' : 'icons:zoom-in';
	}

	_getTitle(title1, title2) {
		return title1 || title2;
	}

	_computeCurrentImage(index, array) {
		if (!array) {
			return;
		}
		return array[index];
	}

	_computeSelectedImageNumber(index, total) {
		if (!total) {
			return 0;
		}
		return index + 1;
	}

	_onResize() {
		this.debounce('elementHeight', () => {
			this._elementHeight = this.offsetHeight;
		}, 50);
	}

	_close() {
		this.fire('close-tapped');
	}

	_resolveImages(images) {
		return images.map(i => this.resolveUrl(i));
	}

	_onZoomChanged(ev) {
		if (!ev.target.src.includes(this.currentImage)) {
			return;
		}

		if (ev.detail.value > 1) {
			this.isZoomed = true;
		} else {
			this.isZoomed = false;
		}
	}

	_onStatusChanged(ev) {
		if (ev.detail.value === 'error') {
			this._onImageError(ev);
		}
	}

	_shouldLoad(currentImageIndex, index) {
		/*
		 * Workaround for https://github.com/Neovici/cosmoz-image-viewer/issues/21
		 * Changing the images array updates the `data-src` attribute on the items,
		 * but if the new array has the same number of items, then the `data-src` is
		 * not set as `src`.
		 */
		return Math.abs(currentImageIndex - index) <= 1;
	}
}

customElements.define(CosmozImageViewer.is, CosmozImageViewer);
