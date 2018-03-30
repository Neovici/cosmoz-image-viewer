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
				reflectToAttribute: true
			},
			/**
			* If true, clicking on next when the last image is selected,
			* will show the first image again.
			*/
			loop: {
				type: Boolean,
				value: false
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

			Array.from(Polymer.dom(this.root).querySelectorAll('img-pan-zoom'))
				.forEach((img)=> img && img.viewer && img.destroy());
		},

		/** PUBLIC */

		/**
		 * Triggers the slide to the next image.
		 * @returns {undefined}
		 */
		nextImage() {
			this.$.carousel.next();
		},
		/**
		 * Triggers the slide to the previous image.
		 * @returns {undefined}
		 */
		previousImage() {
			this.$.carousel.prev();
		},

		_createImageOverlay() {
			let dialog = document.createElement('cosmoz-image-viewer-overlay');
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
			let dialog = imageOverlay || this._createImageOverlay();
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
		 * @returns {undefined}
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
				globals.window.document.title = this._detachedWindowTitle;
				globals.window.setImages(this._resolvedImages, this.currentImageIndex);
				globals.window.focus();
				return;
			}

			const w = globals.window = window.open(undefined, this.detachedWindowName, this._detachedWindowFeaturesString);

			w.document.write(this._getDetachedContent());
			w.document.close();
			w.document.title = this._detachedWindowTitle;


			w.addEventListener('ready', e => {
				e.currentTarget.setImages(this._resolvedImages, this.currentImageIndex);
			});

			w.addEventListener('beforeunload', () => {
				globals.windowOpener._setIsDetached(false);
				globals.windowOpener = null;
				globals.window = null;
			});
		},
		get hasWindow() {
			return globals.window != null && !globals.window.closed;
		},
		syncState() {
			if (!this.isDetached && this.hasWindow) {
				this.detach();
			}
		},
		/**
		 * Toggles between initial zoom level and 1.5x initial zoom level.
		 * @returns {undefined}
		 */
		zoomToggle() {
			const el = this.$.carousel.selectedItem.querySelector('img-pan-zoom');
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
		/* eslint-disable no-useless-escape */

		_getDetachedContent() {
			return `
			<html>
				<head>
					<title>Image Viewer Detached</title>
					<style>
						html,
						body {
							margin: 0;
						}

						body: {
							overflow: visible;
						}

						#image {
							overflow-y: auto;
							width: 100%;
						}

						.actions {
							position: fixed;
							left: 0;
							top: 0;
							background-color: rgba(0, 0, 0, 0.6);
							width: 100%;
							height: 64px;
							opacity: 0.1;
							display: flex;
							align-items: center;
							-webkit-transition: opacity .25s ease-in-out;
							-moz-transition: opacity .25s ease-in-out;
							-ms-transition: opacity .25s ease-in-out;
							-o-transition: opacity .25s ease-in-out;
							transition: opacity .25s ease-in-out;
							transition-delay: 0s;
						}

						.actions:hover {
							opacity: 1;
							transition-delay: 0s;
						}

						.fa {
							color: #fff;
							font-size: 1.2em;
							cursor: pointer;
						}

						.btn {
							font-size: 2em;
						}

						.space {
							width: 100%;
							text-align: center:
						}

						.action-box {
							padding: 0 48px;
							display: -ms-flexbox;
							display: -webkit-flex;
							display: flex;
							-ms-flex-direction: row;
							-webkit-flex-direction: row;
							flex-direction: row;
						}
						.action-box > * {
							padding-right: 24px;
						}

						.icon-btn {
							position: inline-block;
							width: 40px;
							height: 40px;
							border-radius: 20px;
							background-color: rgba(0, 0, 0, 0.44);
							padding: 8px;
							outline: none;
							cursor: pointer;
							box-sizing: border-box !important;
							margin: 6px;
						}

						.icon-only, .icon-btn {
							color: rgba(255, 255, 255, 0.87);
						}

						.icon-only {
							width: 24px;
							height: 24px;
							cursor: pointer;
						}

						.icon {
							pointer-events: none;
							display: block;
							width: 100%;
							height: 100%;
							fill: currentColor;
						}

						[hidden] {
							display: none;
						}

						@media print {
							.hide-on-print {
								display: none;
							}
							.print-image {
								display: block;
								page-break-inside: avoid;
								page-break-after: always;
								max-height: 100%;
								width: 100%;
							}
						}
					</style>
				</head>
				<body>
					<img id="image" class="hide-on-print">
					<div id="printContainer"></div>
					<div class="actions hide-on-print">
						<div class="action-box">
							<div class="icon-btn nav" onclick="prev()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
								</svg>
							</div>
							<div class="icon-btn nav" onclick="next()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
								</svg>
							</div>
						</div>
						<span class="space"></span>
						<div class="action-box">
							<div class="icon-only" onclick="downloadImages()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
								</svg>
							</div>
							<div class="icon-only" onclick="printPage()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
								</svg>
							</div>
						</div>
					</div>
					<script>
						/*eslint no-unused-vars: 0*/
						let img,
							images,
							currentImageIndex = 0;

						const next = () => {
								if (currentImageIndex === images.length - 1) {
									return;
								}
								currentImageIndex++;
								img.src = images[currentImageIndex];
							},
							prev = () => {
								if (currentImageIndex === 0) {
									return;
								}
								currentImageIndex--;
								img.src = images[currentImageIndex];
							},

							downloadImages = () => {
								if (!images) {
									return;
								}
								const dl = document.createElement('a');

								images.forEach(imageUrl => {
									dl.download = imageUrl.replace(/^.*[\\\/]/, '');
									dl.href = imageUrl;
									dl.click();
								})
							},

							printPage = () => {
								const printContainer = document.querySelector('#printContainer');
								let imgs;

								printContainer.innerHTML = '';

								imgs = images.map(imageUrl => {
									const i = document.createElement('img');
									i.src = imageUrl;
									i.classList.add('print-image');
									printContainer.appendChild(i);
									return i;
								});

								_printIfLoaded(imgs).then(() => {
									printContainer.innerHTML = '';
								});
							},
							_printIfLoaded = imgs => {
								return new Promise((resolve, reject) => {
									setTimeout(() => {
										if (!imgs.every(i => i.complete)) {
											_printIfLoaded(imgs);
											return;
										}
										print();
										resolve();
									}, 100);
								});
							};
						window.onload = () => {
							img = document.querySelector('#image');
							window.dispatchEvent(new Event('ready', { bubbles: true }));
						};
						window.setImages = (array, startIndex = 0) => {
							const imageUrl = array[startIndex],
								actions = document.querySelector('.actions'),
								navs = document.querySelectorAll('.nav');
							images = array;
							img.src = imageUrl;

							// hide/show actions
							actions.hidden = images.length === 0 ? true : false;
							navs.forEach(n => n.hidden = images.length > 1 ? false : true);
						};
					</script>
				</body>
			</html>
			`;
		}
		/* eslint-enable no-useless-escape */
	});
}());
