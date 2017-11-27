/*global document, Polymer, Cosmoz, window */
(function () {

	'use strict';

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
			* If true, clicking on next when the last image is selected,
			* will show the first image again.
			*/
			loop: {
				type: Boolean,
				value: false
			},

			// Private

			_hideNoImageInfo: {
				type: Boolean,
				computed: '_computeShowActions("true", images.length)'
			},

			_showNav: {
				type: Boolean,
				computed: '_computeShowNav(showNav, images.length)'
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
			},
			/**
			 * The url resolved images array.
			 */
			_resolvedImages: {
				type: Array,
				computed: '_computeResolvedImages(images)'
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
			this.addEventListener('dblclick', () => {
				this.zoomToggle();
			});
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
		/**
		 * Opens the fullscreen overlay.
		 * @returns {undefined}
		 */
		openFullscreen() {
			let dialog = document.querySelector('#cosmoz-image-viewer-overlay');
			if (!dialog) {
				dialog = document.createElement('cosmoz-image-viewer-overlay');
				dialog.id = 'cosmoz-image-viewer-overlay';
				dialog.noCancelOnOutsideClick = true;
				dialog.loop = this.loop;
				dialog.showDetach = this.showDetach;
				document.body.appendChild(dialog);
			}
			dialog.images = this.images;
			dialog.currentImageIndex = this.currentImageIndex;
			dialog.open();
		},
		/**
		 * Closes the detached window.
		 * @returns {undefined}
		 */
		attach() {
			const sharedWindow = new Polymer.IronMeta({type: 'cosmoz-image-viewer', key: 'detachedWindow'}),
				sharedWindowInstance = sharedWindow.byKey('detachedWindow');

			if (sharedWindowInstance) {
				sharedWindowInstance.close();
			}
		},
		/**
		 * Opens a detached window.
		 * @returns {undefined}
		 */
		detach() {
			const sharedWindow = new Polymer.IronMeta({type: 'cosmoz-image-viewer', key: 'detachedWindow'}),
				sharedWindowInstance = sharedWindow.byKey('detachedWindow');

			if (sharedWindowInstance) {
				window.open(undefined, 'OCR', 'height=700,width=800');
				sharedWindowInstance.setImages(this._resolvedImages, this.currentImageIndex);
				return;
			}

			let w = window.open(undefined, 'OCR', 'height=700,width=800');
			w.document.write(this._getDetachedContent());
			w.document.close();
			w.document.title = this._('Cosmoz Image Viewer');

			w.addEventListener('ready', (e) => {
				e.currentTarget.setImages(this._resolvedImages, this.currentImageIndex);
			});

			w.addEventListener('beforeunload', () => {
				this._setIsDetached(false);
				this.notifyResize();
				sharedWindow.value = undefined;
			});

			this._setIsDetached(true);
			sharedWindow.value = w;
			this.notifyResize();
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

		_computeShowNav(showNav, imagesLen) {
			return showNav ? imagesLen > 1 : false;
		},

		_computeShowActions(show, imagesLen) {
			return show ? imagesLen > 0 : false;
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

		_isZoomed(viewer, zoom) {
			const initialZoomLevel = viewer.viewport.getHomeZoom();
			return zoom > initialZoomLevel * 1.05;
		},

		_initImgPanZoomInstance(imgPanZoom) {
			if (!this.showZoom) {
				return;
			}

			const zoomHandler = (e) => {
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

		_computeResolvedImages(images) {
			if (!images) {
				return;
			}
			return images.map(i => this.resolveUrl(i));
		},

		_computeSelectedImageNumber(index, total) {
			if (!total) {
				return 0;
			}
			return index + 1;
		},

		_onResize() {
			this.set('_imageContainerHeight', this._scroller.scrollHeight);
		},

		_detachedChanged(value) {
			this.hidden = value;
		},

		_imageListChanged(newlist) {
			if (!newlist) {
				return;
			}
			this.currentImageIndex = 0;
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
							transition-delay: 5s;
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

						.hidden {
							display: none;
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
						}

						.icon {
							pointer-events: none;
							display: block;
							width: 100%;
							height: 100%;
							fill: currentColor;
						}

						.hidden {
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

						const load = () => {
								img = document.querySelector('#image');
								window.dispatchEvent(new Event('ready', { bubbles: true }));
							},
							next = () => {
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
							_printIfLoaded = (imgs) => {
								return new Promise((resolve, reject) => {
									setTimeout(() => {
										if (!imgs.every(i => i.complete)) {
											_printIfLoaded(imgs)
											return;
										}
										print();
										resolve();
									}, 100);
								});
							};
						window.onload = load;
						window.setImages = (array, startIndex = 0) => {
							const imageUrl = array[startIndex],
								actionsCl = document.querySelector('.actions').classList,
								navs = document.querySelectorAll('.nav');
							const imageUrl = array[startIndex];
							images = array;
							img.src = imageUrl;

							// hide/show actions
							images.length === 0 ? actionsCl.add('hidden') : actionsCl.remove('hidden');
							navs.forEach(n => images.length > 1 ? n.classList.remove('hidden') : n.classList.add('hidden'));
						};
					</script>
				</body>
			</html>
			`;
		}
	});
}());
