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
				computed: 'resolveUrl(currentImage)'
			},
			currentImage: {
				type: Object,
				computed: '_computeCurrentImage(currentImageIndex, images)',
				observer: '_currentImageChanged'
			},
			currentImageIndex: {
				type: Number
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

		ready: function () {
			this.set('_scroller', this.$.imageContainer);
		},

		attached() {
			// Polymer.Gestures.addListener(this.$.imageContainer, 'track', e => this.trackHandler(e));
		},

		trackHandler(e) {
			var target = this.$.image,
				track = e.detail;
			switch (track.state) {
			case 'start':
				this.message = 'Tracking started!';
				this._trackStart(track, target);
				break;
			case 'track':
				this.message = 'Tracking in progress... ' +
			e.detail.x + ', ' + e.detail.y;
				this._trackMove(track, target);
				break;
			case 'end':
				this._trackEnd(track, target);
				if (e.detail.dy > 10) {
					// up swipe
				}

				if (e.detail.dy < -10) {
					// down swipe
				}

				if (e.detail.dx > 10) {
					// right swipe

				}

				if (e.detail.dx < -10) {
					// left swipe

				}
				this.message = 'Tracking ended!';
				break;
			}
			console.log(this.message);
			e.stopPropagation();
		},

		_trackStart: function (event, target) {
			// Save the width of the element, so that we don't trigger a style
			// recalc every time we need it.
			this._nodeWidth = target.offsetWidth;
			target.style.transition = 'none';
		  },

		  _trackEnd: function (event, target) {
			// The element is swiped away if it's moved halfway its total width.
			this._swipeComplete = Math.abs(event.dx) > this._nodeWidth / 2;
			this._direction = event.dx > 0;
			this._swipeEnd(target);
		  },

		  _trackMove: function (event, target) {
			this._animate(event.dx, target);
		  },

		_swipeEnd: function (target) {
			// Restore the original transition;
			target.style.transition = '300ms cubic-bezier(0.4, 0.0, 1, 1)';
			if (this._swipeComplete) {
			  // If the element is ready to be swiped away, then translate it to the full
			  // transparency distance.
			  var totalDistance = this._nodeWidth * this.widthRatio;
			  this._animate(this._direction ? totalDistance : -totalDistance, target);
			  this.async(() => {
				this._animate(this._direction ? -totalDistance : totalDistance, target);
				// this._animate(0, target);
				this._direction ? this.nextImage() : this.previousImage();
			  }, 500);

			} else {
			  this._animate(0, target);
			}
		  },

		_animate: function (x, target) {
			var direction = x > 0 ? 1 : -1;
			this.opacityRate = 0.2;
			this.widthRatio = 3;
			this.swipeStyle = '';

			// This is the total distance the animation will take place over.
			var totalDistance = this._nodeWidth * this.widthRatio;
			// Opacity distance overflow. `this._nodeWidth * this.opacityRate` is the
			// total distance the element needs to travel to become completely
			// transparent, and `x` is how much the element has already travelled.
			var opaqueDistance = Math.max(0, Math.abs(x) - this._nodeWidth * this.opacityRate);
			var opacity = Math.max(0, (totalDistance - opaqueDistance) / totalDistance);
			target.style.opacity = opacity;
			var translate,
				rotate;
			if (this.swipeStyle === 'horizontal') {
			  translate = 'translate3d(' + x + 'px,' + 0 + 'px,0)';
			  rotate = '';
			} else {  // Default is assumed to be `curve`.
			  // Assume the element will be completely transparent at 90 degrees, so
			  // figure out the rotation and vertical displacement needed to
			  // achieve that.
			  var y = totalDistance - Math.sqrt(totalDistance * totalDistance - opaqueDistance * opaqueDistance);
			  var deg = (1 - opacity) * direction * 90;
			  translate = 'translate3d(' + x + 'px,' + y + 'px,0)';
			  rotate = ' rotate(' + deg + 'deg)';
			}
			if (x === 0) {
				target.style.transition = 'none';
				target.style.transform = 'none';
				return;
			}
			this.transform(translate + rotate, target);
		},

		_computeCurrentImage: function (index, array) {
			return array[index];
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

		_detachedChanged: function (value) {
			this.hidden = value;
		},

		_imageListChanged: function (newlist) {
			if (!newlist) {
				return;
			}
			this.currentImageIndex = 0;
		},

		isFirst(index) {
			return index === 0 ? true : false;
		},

		isLast(index, array) {
			return array.length - 1 === index;
		},

		nextImage() {
			if (this.currentImageIndex + 1 === this.images.length) {
				return;
			}
			this.currentImageIndex += 1;
		},

		previousImage() {
			if (this.currentImageIndex === 0) {
				return;
			}
			this.currentImageIndex -= 1;
		},

		onImageLoad: function () {
			// Give container time to reflow
			this.async(function () {
				this.set('imageLoaded', true);
			}.bind(this), 100);
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
				detachedContentUrl = this.resolveUrl('detached.html'),
				swiper,
				rawFile,
				w;

			if (sharedWindowInstance) {
				window.open(undefined, 'OCR', 'height=700,width=800');
				swiper = sharedWindowInstance.document.querySelector('#sw');
				swiper.images = this.images.map(i => this.resolveUrl(i));
				swiper.startIndex = this.currentImageIndex;
				return;
			}

			w = window.open(undefined, 'OCR', 'height=700,width=800');

			rawFile = new XMLHttpRequest();
			rawFile.open('GET', detachedContentUrl, false);
			rawFile.onreadystatechange = () => {
				if (rawFile.readyState === 4) {
					if (rawFile.status === 200 || rawFile.status === 0) {
						w.document.open();
						w.document.write(rawFile.responseText);
						w.document.close();
					}
				}
			};
			rawFile.send(null);

			w.document.title = this._('Cosmoz Image Viewer');
			w.addEventListener('ready', (e) => {
				var swiper = e.detail;
				swiper.images = this.images.map(i => this.resolveUrl(i));
				swiper.startIndex = this.currentImageIndex;
				swiper.init();
			});
			w.addEventListener('beforeunload', function () {
				this._setIsDetached(false);
				this.notifyResize();
				sharedWindow.value = undefined;
			}.bind(this));
			this._setIsDetached(true);
			sharedWindow.value = w;
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
					src: this.resolveUrl(image),
					w: 1105,
					h: 1562
				});
			}, this);
			this.modalImageViewer(this._pswp, items, this.currentImageIndex);
		}
	});
}());
