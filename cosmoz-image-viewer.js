/* eslint-disable max-lines, max-len */
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { translatable } from '@neovici/cosmoz-i18next';
import { download } from './lib/pdf';
import { template } from './cosmoz-image-viewer.html';
import { hauntedPolymer } from '@neovici/cosmoz-utils';
import { appendScriptsToWindow } from './lib/utils';
import { useCosmozImageViewer } from './lib/hooks/use-cosmoz-image-viewer';

const globals = {
	window: null,
	windowOpener: null
};

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
class CosmozImageViewer extends hauntedPolymer(useCosmozImageViewer)(translatable(PolymerElement)) {
	static get template() { // eslint-disable-line max-lines-per-function
		return template;
	}

	static get is() {
		return 'cosmoz-image-viewer';
	}

	static get properties() { // eslint-disable-line max-lines-per-function
		return {
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
			 * If true, the detached window is open.
			 */
			isDetached: {
				type: Boolean,
				value: false,
				readOnly: true,
				notify: true,
				observer: function (value) { // eslint-disable-line object-shorthand
					this.hidden = value;
				}
			},
			/**
			 * The images array.
			 */
			images: {
				type: Array,
				value() {
					return [];
				}
			},

			/**
			* If true, navigation next/prev buttons are visible.
			*/
			showNav: {
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

			_hideNoImageInfo: {
				type: Boolean,
				computed: '_computeShowActions("true", images.length)'
			},

			_showNav: {
				type: Boolean,
				computed: '_computeShowActions(showNav, images.length, 2)'
			},

			_showZoom: {
				type: Boolean,
				computed: '_computeShowActions(showZoom, images.length)'
			},

			_showDetach: {
				type: Boolean,
				computed: '_computeShowActions(showDetach, images.length)'
			},

			_showFullscreen: {
				type: Boolean,
				computed: '_computeShowActions(showFullscreen, images.length)'
			},

			_showPageNumber: {
				type: Boolean,
				computed: '_computeShowActions(showPageNumber, images.length)'
			}
		};
	}

	constructor() {
		super();
		this._onOverlayDetachIntent = this._onOverlayDetachIntent.bind(this);
		this._onOverlayClosed = this._onOverlayClosed.bind(this);
	}

	/** ELEMENT LIFECYCLE */

	ready() {
		super.ready();

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

		if (this.imageOverlay) {
			this._onOverlayClosed();
		}
	}

	/** PUBLIC */

	_createImageOverlay() {
		const dialog = document.createElement('cosmoz-image-viewer-overlay');
		dialog.id = 'cosmoz-image-viewer-overlay';
		dialog.noCancelOnOutsideClick = true;
		dialog.loop = this.loop;
		dialog.showDetach = this.showDetach;
		dialog.currentImageIndex = this.currentImageIndex;
		dialog.images = this.images;
		document.body.appendChild(dialog);
		return dialog;
	}

	/**
	 * Opens the fullscreen overlay.
	 * @returns {undefined}
	 */
	openFullscreen() {
		this.imageOverlay = this._createImageOverlay();
		this.imageOverlay.open();
		this._setupDialogEvents(true);
	}

	_setupDialogEvents(on) {
		const f = (on ? this.imageOverlay.addEventListener : this.imageOverlay.removeEventListener).bind(this.imageOverlay);
		f('current-image-index-changed', this._syncImageIndex);
		f('detach-intent', this._onOverlayDetachIntent);
		f('iron-overlay-closed', this._onOverlayClosed);
	}

	_onOverlayDetachIntent() {
		this.imageOverlay.close();
		this.detach();
	}

	_onOverlayClosed() {
		this._setupDialogEvents(false);
		this.imageOverlay.parentElement.removeChild(this.imageOverlay);
		this.imageOverlay = undefined;
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
		const detachPrevented = !this.dispatchEvent(new CustomEvent('will-detach', { cancelable: true }));
		if (detachPrevented) {
			return false;
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

	// eslint-disable-next-line max-statements
	_detachToNewWindow() {
		const
			w = globals.window = window.open(undefined, this.detachedWindowName, this._detachedWindowFeaturesString),
			windowTemplate = this.shadowRoot.querySelector('#externalWindow'),
			windowTemplateClone = windowTemplate.content.cloneNode(true),
			setImages = () => w.ciw.setImages(this.images, this.currentImageIndex);

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

		w.addEventListener('download', async ({ detail }) => await this.downloadPdf(detail));

		w.addEventListener('beforeunload', globals.windowBeforeUnloadHandler);

		if (this._shortCutPrint) {
			w.addEventListener('afterprint', async () => await this.attach());
		}

		if (w.ciw == null) {
			w.addEventListener('ready', () => setImages());
			appendScriptsToWindow(windowTemplateClone.childNodes, w);

		} else {
			setImages();
		}

		return w;
	}

	_detachToExistingWindow() {
		globals.window.document.title = this._detachedWindowTitle;
		globals.window.ciw.setImages(this.images, this.currentImageIndex);
		globals.window.focus();
		return globals.window;
	}

	get hasWindow() {
		return globals.window != null && !globals.window.closed && !!globals.window.ciw;
	}

	get window() {
		return globals.window;
	}

	syncState() {
		if (!this.isDetached && this.hasWindow) {
			this.detach();
		}
	}
	async onDownloadPdf() {
		await this.downloadPdf(this.images);
	}
	async downloadPdf(urls) {
		return await download(urls, this.downloadFileName, this.credentials);
	}
	async onPrintPdf() {
		this._shortCutPrint = true;
		await this.detach();
		await globals.window.ciw.printPage();
		this._shortCutPrint = false;
	}

	/**
	 * Toggles between initial zoom level and 1.5x initial zoom level.
	 * @returns {undefined}
	 */
	zoomToggle() {
		const el = this.$.slider.querySelector('haunted-pan-zoom');

		if (el.zoom > 1) {
			return el.zoomTo(1);
		}
		el.zoomTo(1.5);
	}

	/** ELEMENT BEHAVIOR */

	_computeDetachedWindowFeaturesString(featues = {}) {
		return Object.entries(featues)
			.map(([key, value]) => key + '=' + value)
			.join(',');
	}

	_computeShowActions(show, imagesLen, imgsMinLen = 1) {
		return show ? imagesLen >= imgsMinLen : false;
	}

	_getZoomIcon(zoomed) {
		return zoomed ? 'icons:zoom-out' : 'icons:zoom-in';
	}

	_getTitle(title1, title2) {
		return title1 || title2;
	}

	_close() {
		this.dispatchEvent(new CustomEvent('close-tapped'));
	}
}

customElements.define(CosmozImageViewer.is, CosmozImageViewer);
