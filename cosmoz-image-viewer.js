/*global document, Polymer, Cosmoz, window */
(function () {

	'use strict';
	const globals = {
		window: null,
		windowOpener: null
	};
	let imageOverlay;

	Polymer({
		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TemplateHelperBehavior,
			Cosmoz.TranslatableBehavior
		],

		is: 'cosmoz-image-viewer',

		properties: {
			/**
			 * The url of the currenly selected image.
			 */
			currentImage: {
				type: String,
				notify: true,
				computed: '_computeCurrentImage(currentImageIndex, images)',
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
				observer: '_detachedChanged'
			},
			/**
			 * The images array.
			 */
			images: {
				type: Array,
				value() {
					return [];
				},
				observer: '_imageListChanged'
			},
			/**
			 * The percent the view should scroll down after the image got loaded.
			 */
			scrollPercent: {
				type: Number,
				notify: true
			},

			sizing: {
				type: String
			},
			/**
			 * If true, the currently selected image is fully loaded.
			 */
			imageLoaded: {
				type: Boolean,
				value: false
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
			},
			/**
			 * The url resolved images array.
			 */
			_resolvedImages: {
				type: Array,
			},

			_imageContainerHeight: {
				type: Number
			},

			_scroller: {
				type: Object
			}
		},
		listeners: {
			'iron-resize': '_onResize'
		},
		observers: [
			'_scrollToPercent(imageLoaded, scrollPercent, _imageContainerHeight)'
		],

		/** ELEMENT LIFECYCLE */

		ready() {
			this.set('_scroller', this.$.imageContainer);
			this._dblClickListner = this.zoomToggle.bind(this);
		},

		attached() {
			this.addEventListener('dblclick', this._dblClickListner);
		},

		detached() {
			this.removeEventListener('dblclick', this._dblClickListner);
			this.cancelDebouncer('updateScrollPercent');
			this.cancelDebouncer('elementHeight');
			this.cancelDebouncer('setResolvedImages');
		},

		/** PUBLIC */

		get imageOverlay() {
			return imageOverlay;
		},

		get carousel() {
			return this.$$('#carousel');
		},
		/**
		 * Triggers the slide to the next image.
		 * @returns {undefined}
		 */
		nextImage() {
			this.carousel.next();
		},
		/**
		 * Triggers the slide to the previous image.
		 * @returns {undefined}
		 */
		previousImage() {
			this.carousel.prev();
		},

		_createImageOverlay() {
			const dialog = document.createElement('cosmoz-image-viewer-overlay');
			dialog.id = 'cosmoz-image-viewer-overlay';
			dialog.noCancelOnOutsideClick = true;
			dialog.loop = this.loop;
			dialog.showDetach = this.showDetach;
			document.body.appendChild(dialog);
			imageOverlay = dialog;
			return dialog;
		},

		/**
		 * Opens the fullscreen overlay.
		 * @returns {undefined}
		 */
		openFullscreen() {
			const dialog = imageOverlay || this._createImageOverlay();
			dialog.images = this.images;
			dialog.currentImageIndex = this.currentImageIndex;
			dialog.open();
		},
		/**
		 * Closes the detached window.
		 * @returns {undefined}
		 */
		attach() {
			this._setIsDetached(false);
			if (globals.window) {
				globals.window.close();
			}
		},
		/**
		 * Opens a detached window.
		 * @returns {Object} detached window object
		 */
		detach() {
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
		},

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
		},

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
		},

		_detachToExistingWindow() {
			globals.window.document.title = this._detachedWindowTitle;
			globals.window.ciw.setImages(this._resolvedImages, this.currentImageIndex);
			globals.window.focus();
			return globals.window;
		},

		get hasWindow() {
			return globals.window != null && !globals.window.closed && globals.window.ciw;
		},

		syncState() {
			if (!this.isDetached && this.hasWindow) {
				this.detach();
			}
		},

		downloadZip(zip) {
			const a = document.body.appendChild(zip.createDownloadLink());
			a.click();
			document.body.removeChild(a);
		},

		createZipFromUrls(fileUrls) {
			const fetches = fileUrls.map(url =>
				fetch(url)
					.then(response => response.arrayBuffer())
					.then(data => ({data, url}))
			);

			return Promise
				.all(fetches)
				.then(responses => {
					const filenames = [],
						zip = new NullZipArchive(this.downloadFileName, false);

					for (const {url, data} of responses) {
						let filename = url.replace(/^.*[\\/]/, '');
						const filenameParts = filename.split('.'),
							sameFilenames = filenames.filter(f => f === filenameParts[0]);

						if (sameFilenames.length > 0) {
							filename = `${filenameParts[0]} (${sameFilenames.length + 1}).${filenameParts[1]}`;
						}

						zip.addFileFromUint8Array(filename, new Uint8Array(data));
						filenames.push(filenameParts[0]);

						if (fileUrls.length === zip.a.length) {
							zip.generate();
							return zip;
						}
					}
				});
		},
		/**
		 * Toggles between initial zoom level and 1.5x initial zoom level.
		 * @returns {undefined}
		 */
		zoomToggle() {
			const el = this.carousel.selectedItem.querySelector('img-pan-zoom');
			if (!el.viewer) {
				return;
			}
			if (this.isZoomed) {
				el.resetZoom();
				return;
			}

			el.viewer.viewport.zoomTo(1.5);
		},

		/** ELEMENT BEHAVIOR */

		_computeDetachedWindowFeaturesString(featues = {}) {
			return Object.keys(featues)
				.map(key => key + '=' + featues[key])
				.join(',');
		},

		_computeShowActions(show, imagesLen, height, imgsMinLen = 1) {
			const heightOk = height ? height > 100 : true;
			return show ? imagesLen >= imgsMinLen && heightOk : false;
		},

		_onImageError(e) {
			const errorContainer = e.currentTarget.parentElement.querySelector('.error');
			if (e.detail.value) {
				errorContainer.removeAttribute('hidden');
				return;
			}

			errorContainer.setAttribute('hidden', true);

			if (!e.currentTarget.dataset.src) {
				return;
			}
			errorContainer.querySelector('.desc').innerHTML =  e.currentTarget.dataset.src;

		},

		_getErrorClass(showZoom) {
			return showZoom ? 'pan' : '';
		},

		_getImgPanZoomSrc(image, showZoom) {
			return showZoom ? image : null;
		},

		_selectedItemChanged(selectedItem) {
			if (!selectedItem) {
				return;
			}
			const imgPanZoom = selectedItem.querySelector('img-pan-zoom');

			this._initImgPanZoomInstance(imgPanZoom);
			this.imageLoaded = imgPanZoom.loaded;
		},

		_getZoomIcon(zoomed) {
			return zoomed ? 'icons:zoom-out' : 'icons:zoom-in';
		},

		_getTitle(title1, title2) {
			return title1 || title2;
		},

		_isZoomed(viewer, zoom) {
			if (viewer === null){
				return;
			}
			const initialZoomLevel = viewer.viewport.getHomeZoom();
			return zoom > initialZoomLevel * 1.05;
		},

		_initImgPanZoomInstance(imgPanZoom) {
			if (!this.showZoom) {
				return;
			}

			const zoomHandler = e => {
				this.isZoomed = this._isZoomed(imgPanZoom.viewer, e.zoom);
				// If the zoom level is near to the initial zoom level
				// set pointerEvents = 'none' in order to enable swiping to the next image.
				// From here on, zooming or the "zoom mode" can only be activated from an outsite action like
				// a) double click on the cosmoz-image-viewer instance which triggers zoomToggle() or
				// b) a click on a zoom button which triggers zoomToggle()
				// and triggers in this handler to set pointerEvents = 'all' again.
				if (this.isZoomed) {
					imgPanZoom.style.pointerEvents = 'all';
					return;
				}
				imgPanZoom.style.pointerEvents = 'none';
			};
			// The viewer of imgPanZoom needs some time to be initialized.
			setTimeout(() => {
				if (!imgPanZoom.viewer) {
					// viewer not ready, try again
					this._initImgPanZoomInstance(imgPanZoom);
					return;
				}

				if (imgPanZoom.viewer.getHandler('zoom')) {
					return;
				}
				imgPanZoom.viewer.addHandler('zoom', zoomHandler);
			}, 50);

		},

		_computeCurrentImage(index, array) {
			if (!array) {
				return;
			}
			return array[index];
		},

		_computeSelectedImageNumber(index, total) {
			if (!total) {
				return 0;
			}
			return index + 1;
		},

		_onResize() {
			this.set('_imageContainerHeight', this._scroller.scrollHeight);
			this.debounce('elementHeight', () => this._elementHeight = this.offsetHeight, 50);
		},

		_detachedChanged(value) {
			this.hidden = value;
			this.notifyResize();
		},

		_imageListChanged(images) {
			this.currentImageIndex = 0;
			/**
			 * _resolvedImages = []
			 * Solves: when changing the images property to a new array of images,
			 * the displayed images might not be updated if the new array has the same size as the previous one.
			 * See https://github.com/Neovici/cosmoz-image-viewer/issues/21
			 */
			this.set('_resolvedImages', []);
			Polymer.dom.addDebouncer(this.debounce('setResolvedImages', () => {
				if (!images) {
					this.set('_resolvedImages', images);
					return;
				}
				this.set('_resolvedImages', images.map(i => this.resolveUrl(i)));
			}));
		},

		_close() {
			this.fire('close-tapped');
		},

		_imageLoadedChanged(e) {
			const imgPanZoom = e.currentTarget,
				div = imgPanZoom.parentNode;

			if (Array.from(div.classList).indexOf('selected') > -1) {
				this.imageLoaded = imgPanZoom.loaded;
			}

		},

		_scrollHandler() {
			this.debounce('updateScrollPercent', () => {
				const top = this._scroller.scrollTop,
					height = this._imageContainerHeight,
					percent = Math.round(top / height * 100);
				if (percent !== this.scrollPercent) {
					this.set('scrollPercent', percent);
				}
			}, 100);
		},

		_scrollToPercent(loaded, percent, height) {
			if (!loaded || !this._scroller) {
				return;
			}
			const topPx = height * (percent / 100);

			this._scroller.scrollTop = topPx;
		},
	});
}());
