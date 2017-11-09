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
			_detachedWindowContent: {
				type: String
			},
			_detachedContentUrl: {
				type: String
			},

			zoom: {
				type: Boolean,
				value: false
			},

			full: {
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

		_viewerChanged(viewer) {
			// viewer.addHandler('zoom', (e) => {
			// 	if (!viewer.initialZoom) {
			// 		viewer.initialZoom = e.zoom;
			// 		return;
			// 	}
			// 	if (viewer.initialZoom === e.zoom) {
			// 		this.$$('#viewer').style.pointerEvents = 'none';
			// 		return;
			// 	}

			// 	this.$$('#viewer').style.pointerEvents = 'all';
			// });
		},

		ready() {
			this.set('_scroller', this.$.imageContainer);
			this._detachedContentUrl = this.resolveUrl('detached.html');
		},

		_selectedItemChanged(selectedItem) {
			if (!selectedItem) {
				return;
			}
			let imgPanZoom = selectedItem.querySelector('img-pan-zoom');

			this._initImgPanZoomInstance(imgPanZoom);
			this.imageLoaded = imgPanZoom.loaded;
		},

		_initImgPanZoomInstance(imgPanZoom) {
			if (!this.zoom) {
				return;
			}

			const zoomHandler = (e) => {
				let initial = imgPanZoom.viewer.viewport.getHomeZoom();
				if (initial >= e.zoom && initial * 1.05 > e.zoom) {
					imgPanZoom.style.pointerEvents = 'none';
					return;
				}
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
				dialog.withBackdrop = true;
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
				sharedWindowInstance.setImages(this.images.map(i => this.resolveUrl(i)), this.currentImageIndex);
				return;
			}

			w = window.open(undefined, 'OCR', 'height=700,width=800');
			w.document.write(this._detachedWindowContent);
			w.document.close();
			w.document.title = this._('Cosmoz Image Viewer');

			w.addEventListener('ready', (e) => {
				e.currentTarget.setImages(this.images.map(i => this.resolveUrl(i)), this.currentImageIndex);
			});

			w.addEventListener('beforeunload', () => {
				this._setIsDetached(false);
				this.notifyResize();
				sharedWindow.value = undefined;
			});

			// w.setImages(this.images.map(i => this.resolveUrl(i)));

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
			// this._initViewer(imgPanZoom);

		},

		// _initViewer(imgPanZoom) {
		// 	setTimeout(() => {
		// 		if (!imgPanZoom.viewer || imgPanZoom.viewer.getHandler('zoom')) {
		// 			return;
		// 		}
		// 		imgPanZoom.viewer.addHandler('zoom', (e) => {
		// 			if (imgPanZoom.initialZoom * 0.96 < e.zoom && imgPanZoom.initialZoom * 1.04 > e.zoom) {
		// 				imgPanZoom.style.pointerEvents = 'none';
		// 				return;
		// 			}
		// 			imgPanZoom.style.pointerEvents = 'all';
		// 		});
		// 	});
		// },

		zoomTo() {
			let el = this.$.carousel.selectedItem.querySelector('img-pan-zoom'),
				viewer = el.viewer;
			el.style.pointerEvents = 'all';
			viewer.viewport.zoomTo(2);
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
		}
	});
}());
