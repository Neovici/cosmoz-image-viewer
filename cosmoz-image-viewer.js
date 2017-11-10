/*global document, Polymer, Cosmoz, window, PhotoSwipe, PhotoSwipeUI_Default */
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
			currentImage: {
				type: Object,
				notify: true,
				computed: '_computeCurrentImage(currentImageIndex, images)',
			},
			currentImageIndex: {
				type: Number,
				notify: true,
				observer: '_currentImageIndexChanged'
			},
			/**
			 * Like currentImageIndex + 1; Starts at 1 instead of 0.
			 */
			selectedImageNumber: {
				type: Number,
				notify: true
			},
			currentPage: {
				type: Number,
				computed: '_computePage(currentImageIndex)'
			},
			isDetached: {
				type: Boolean,
				value: false,
				readOnly: true,
				notify: true,
				observer: '_detachedChanged'
			},
			images: {
				type: Array,
				observer: '_imageListChanged'
			},
			_resolvedImages: {
				type: Array,
				computed: '_computeResolvedImages(images)'
			},
			/**
			 * Disable button to detach image
			 */
			noDetach: {
				type: Boolean,
				value: false
			},
			scrollPercent: {
				type: Number,
				notify: true
			},
			src: {
				type: String,
				notify: true
			},
			/**
            * Show navigation next/prev buttons
            */
			nav: {
				type: Boolean,
				value: false
			},
			/**
			* Show navigation dots
			*/
			dots: {
				type: Boolean,
				value: false
			},
			/**
			* Loop through the images
			*/
			loop: {
				type: Boolean,
				value: false
			},
			/**
			* If true, open fullscreen overlay when click on image
			*/
			fullscreen: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			sizing: {
				type: String
			},
			imageLoaded: {
				type: Boolean,
				value: false
			},
			_imageContainerHeight: {
				type: Number
			},
			_scroller: {
				type: Object
			},
			_pswp: {
				type: Object
			},
			/**
			 * The selected slide in the carousel
			 */
			selectedItem: {
				type: Object,
				observer: '_selectedItemChanged'
			},

			zoom: {
				type: Boolean,
				value: false
			},

			full: {
				type: Boolean,
				value: false
			},

			isZoomed: {
				type: Boolean,
				value: false
			}
		},
		listeners: {
			'iron-resize': '_onResize'
		},
		observers: [
			'scrollToPercent(imageLoaded, scrollPercent, _imageContainerHeight)',
			'_selectedImageNumberChanged(selectedImageNumber, images)'
		],

		ready() {
			this.set('_scroller', this.$.imageContainer);
		},

		_selectedItemChanged(selectedItem) {
			if (!selectedItem) {
				return;
			}
			let imgPanZoom = selectedItem.querySelector('img-pan-zoom');

			this._initImgPanZoomInstance(imgPanZoom);
			this.imageLoaded = imgPanZoom.loaded;
		},

		_getZoomIcon(zoomed) {
			return zoomed ? 'icons:zoom-out' : 'icons:zoom-in';
		},

		_initImgPanZoomInstance(imgPanZoom) {
			if (!this.zoom) {
				return;
			}

			const zoomHandler = (e) => {
				let initial = imgPanZoom.viewer.viewport.getHomeZoom();
				if (initial >= e.zoom && initial * 1.05 > e.zoom) {
					this.isZoomed = false;
					imgPanZoom.style.pointerEvents = 'none';
					return;
				}
				this.isZoomed = true;
				imgPanZoom.style.pointerEvents = 'all';
			};

			setTimeout(() => {
				if (!imgPanZoom.viewer || imgPanZoom.viewer.getHandler('zoom')) {
					return;
				}
				imgPanZoom.viewer.addHandler('zoom', zoomHandler);
			}, 50);

		},

		_computeCurrentImage: function (index, array) {
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

		_selectedImageNumberChanged(imageNumber, images) {
			this.currentImageIndex = imageNumber - 1;

			if (!images || !Polymer.Element) {
				return;
			}
			// If nav buttons get deactivated, a tap of them opens
			// fullscreen photoSwipe on Polymer 2.
			// CSS --skeleton-carousel-nav-disabled ... doesn't work here.
			if (parseInt(imageNumber, 10) === this.images.length) {
				this.$$('skeleton-carousel').$.next.style.pointerEvents = 'all';
				return;
			}

			if (parseInt(imageNumber, 10) === 1) {
				this.$$('skeleton-carousel').$.prev.style.pointerEvents = 'all';
			}
		},

		_currentImageIndexChanged(index) {
			this.selectedImageNumber = index + 1;
		},

		_onResize: function () {
			this.set('_imageContainerHeight', this._scroller.scrollHeight);
		},

		_computePage: function (index) {
			return index + 1;
		},

		_detachedChanged: function (value) {
			this.hidden = value;
		},

		_imageListChanged: function (newlist) {
			if (!newlist) {
				return;
			}
			this.currentImageIndex = 0;
		},

		nextImage() {
			this.$.carousel.next();
		},

		previousImage() {
			this.$.carousel.prev();
		},

		openFullscreen() {
			var dialog = document.querySelector('#cosmoz-image-viewer-overlay');
			if (!dialog) {
				dialog = document.createElement('cosmoz-image-viewer-overlay');
				dialog.id = 'cosmoz-image-viewer-overlay';
				dialog.noCancelOnOutsideClick = true;
				document.body.appendChild(dialog);
			}
			dialog.images = this.images;
			dialog.currentImageIndex = this.currentImageIndex;
			dialog.open();
		},

		attach: function () {
			var sharedWindow = new Polymer.IronMeta({type: 'cosmoz-image-viewer', key: 'detachedWindow'}),
				sharedWindowInstance = sharedWindow.byKey('detachedWindow');

			if (sharedWindowInstance) {
				sharedWindowInstance.close();
			}
		},

		detach: function () {
			var sharedWindow = new Polymer.IronMeta({type: 'cosmoz-image-viewer', key: 'detachedWindow'}),
				sharedWindowInstance = sharedWindow.byKey('detachedWindow'),
				w;

			if (sharedWindowInstance) {
				window.open(undefined, 'OCR', 'height=700,width=800');
				sharedWindowInstance.setImages(this._resolvedImages, this.currentImageIndex);
				return;
			}

			w = window.open(undefined, 'OCR', 'height=700,width=800');
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

		modalImageViewer: function (element, items, index) {
			new PhotoSwipe(element, PhotoSwipeUI_Default, items, {
				index: index || 0, // start at first slide
				history: false, // disables unique URL for each slide.
				preLoad: [1, 3], // Preloads one image before current image and three after.,
				modal: true,
				closeOnScroll: false,
				loadingIndicatorDelay: 0,
				hideAnimationDuration: 0,
				showAnimationDuration: 0,
				showHideOpacity: false,
				shareEl: false
			}).init();
		},

		_imageLoadedChanged(e) {
			var imgPanZoom = e.currentTarget,
				div = imgPanZoom.parentNode;

			if (Array.from(div.classList).indexOf('selected') > -1) {
				this.imageLoaded = imgPanZoom.loaded;
			}

		},

		zoomToggle() {
			let el = this.$.carousel.selectedItem.querySelector('img-pan-zoom'),
				viewer = el.viewer;
			if (!viewer) {
				return;
			}
			if (this.isZoomed) {
				el.resetZoom();
				return;
			}

			viewer.viewport.zoomTo(1.5);
		},

		scrollHandler: function () {
			this.debounce('updateScrollPercent', function () {
				var top = this._scroller.scrollTop,
					height = this._imageContainerHeight,
					percent = Math.round(top / height * 100);
				if (percent !== this.scrollPercent) {
					this.set('scrollPercent', percent);
				}
			}.bind(this), 100);
		},

		scrollToPercent: function (loaded, percent, height) {
			if (!loaded || !this._scroller) {
				return;
			}
			var topPx = height * (percent / 100);

			this._scroller.scrollTop = topPx;
		},

		enterFullscreen() {
			var items = [];
			this.images.forEach(function (image) {
				items.push({
					src: this.resolveUrl(image),
					w: 1105,
					h: 1562
				});
			}, this);
			this.modalImageViewer(this._pswp, items, this.currentImageIndex);
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
					</style>
				</head>
				<body>
					<img id="image">
					<div class="actions">
						<div class="action-box">
							<div class="icon-btn" onclick="prev()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
								</svg>
							</div>
							<div class="icon-btn" onclick="next()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
								</svg>
							</div>
						</div>
						<span class="space"></span>
						<div class="action-box">
							<a id="download">
								<div class="icon-only">
									<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
										<g><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
									</svg>
								</div>
							</a>
							<div class="icon-only" onclick="printPage()">
								<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
									<g><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
								</svg>
							</div>
						</div>
					</div>
					<script>
						/*eslint no-unused-vars: 0*/
						var img,
							download,
							images,
							actions,
							currentImageIndex = 0;

						const load = () => {
								img = document.querySelector('#image');
								download = document.querySelector('#download');
								actions = document.querySelector('.actions');
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
							printPage = () => {
								actions.classList.add('hidden');
								print();
								actions.classList.remove('hidden');
							};
						window.onload = load;
						window.setImages = (array, startIndex = 0) => {
							let imageUrl = array[startIndex];
							console.log(array);
							images = array;
							img.src = imageUrl;
							download.download = imageUrl.replace(/^.*[\\\/]/, '');
							download.href = imageUrl;
						};
					</script>
				</body>
			</html>
			`;
		}
	});
}());
