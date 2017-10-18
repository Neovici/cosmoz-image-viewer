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
			currentImagePath: {
				type: String,
				computed: '_computeCurrentImagePath(currentImage)'
			},
			currentImage: {
				type: Object,
				observer: '_currentImageChanged'
			},
			currentImageIndex: {
				type: Number,
				computed: '_computeCurrentImageIndex(currentImage, images)'
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
			imageLoaded: {
				type: Boolean,
				value: false
			},
			images: {
				type: Array,
				observer: '_imageListChanged'
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
			_detachedWindow: {
				type: Object
			},
			_imageContainerHeight: {
				type: Number
			},
			_scroller: {
				type: Object
			},
			_pswp: {
				type: Object
			}
		},
		listeners: {
			'iron-resize': '_onResize'
		},
		observers: [
			'scrollToPercent(imageLoaded, scrollPercent, _imageContainerHeight)'
		],

		_computeCurrentImageIndex: function (item, array) {
			return array.indexOf(item);
		},

		_onResize: function () {
			this.set('_imageContainerHeight', this._scroller.scrollHeight);
		},

		_currentImageChanged: function () {
			this.set('imageLoaded', this.$.image.complete);
		},

		_computePage: function (index) {
			return index + 1;
		},

		_computeCurrentImagePath(currentImage) {
			return this.resolveUrl(currentImage);
		},

		_detachedChanged: function (value) {
			this.hidden = value;
		},

		_imageListChanged: function (newlist) {
			if (!newlist) {
				return;
			}
			this.set('currentImage', newlist[0]);
		},

		isFirst: function (item, array) {
			return array.indexOf(item) === 0;
		},

		isLast: function (item, array) {
			return array.indexOf(item) === array.length - 1;
		},

		nextImage: function () {
			this.set('currentImage', this.images[this.currentImageIndex + 1]);
		},

		previousImage: function () {
			this.set('currentImage', this.images[this.currentImageIndex - 1]);
		},

		onImageLoad: function () {
			// Give container time to reflow
			this.async(function () {
				this.set('imageLoaded', true);
			}.bind(this), 100);
		},

		attach: function () {
			this._detachedWindow.close();
		},

		detach: function () {
			var url = this.resolveUrl(this.currentImage),
				w = window.open(undefined, 'OCR', 'height=700,width=800'),
				wcUrl = this.resolveUrl('../webcomponentsjs/webcomponents-lite.js'),
				picUrl = this.resolveUrl('../paper-icon-button/paper-icon-button.html'),
				iiUrl = this.resolveUrl('../iron-icons/iron-icons.html'),
				polUrl = this.resolveUrl('../polymer/polymer.html'),
				swUrl = this.resolveUrl('cosmoz-swiper.html');

			w.document.write(`
				<html>
					<head>
						<title>Image Viewer Detached</title>
						<script src="${wcUrl}"></script> 
						<link rel="import" href="${swUrl}">
						<link rel="import" href="${picUrl}">
						<link rel="import" href="${iiUrl}">
						<link rel="import" href="${polUrl}">
						<style>
							body {
								background: black;
							}
						</style>
					</head>
					<body>
						<cosmoz-swiper id="sw"></cosmoz-swiper>
						<script>
							(function () {
								var sw = document.querySelector('#sw'),
									event = new Event('loaded');
								event.detail = sw;
								this.dispatchEvent(event);
							})();
						</script>
					</body>
				</html>
			`);
			w.document.title = this._('Cosmoz Image Viewer');
			w.addEventListener('loaded', (e) => {
				var imgs = [
						'demo/images/stockholm.jpg',
						'demo/images/strasbourg.jpg',
						'demo/images/stockholm.jpg',
						'demo/images/strasbourg.jpg'
					],
					swiper = e.detail;
				swiper.images = imgs.map(i => this.resolveUrl(i));
				swiper.startIndex = this.currentImageIndex;
				swiper.init();
			});
			w.addEventListener('beforeunload', function () {
				this._setIsDetached(false);
				this.notifyResize();
			}.bind(this));
			this._setIsDetached(true);
			this._detachedWindow = w;
			this.notifyResize();
		},

		modalImageViewer: function (element, items, index) {

			// FIXME: PR for Photoswipe to detect if hash URL has '?' ?
			if (window.location.hash.indexOf('?') === -1) {
				window.history.replaceState(null, null, window.location.hash + '?');
			}

			new PhotoSwipe(element, PhotoSwipeUI_Default, items, {
				index: index || 0, // start at first slide
				history: true, // disables unique URL for each slide.
				preLoad: [1, 3], // Preloads one image before current image and three after.,
				closeOnScroll: false,
				loadingIndicatorDelay: 0,
				hideAnimationDuration: 0,
				showAnimationDuration: 0,
				showHideOpacity: false,
				shareEl: false
			}).init();
		},

		ready: function () {
			this.set('_scroller', this.$.imageContainer);
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
			if (!loaded) {
				return;
			}
			var topPx = height * (percent / 100);

			this._scroller.scrollTop = topPx;
		},

		showInvoiceImage: function () {
			var items = [];
			this.images.forEach(function (image) {
				items.push({
					src: this._computeCurrentImagePath(image),
					w: 1105,
					h: 1562
				});
			}, this);
			this.modalImageViewer(this._pswp, items, this.currentImageIndex);
		}
	});
}());
