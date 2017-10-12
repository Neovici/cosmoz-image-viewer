/*global document, Polymer, Cosmoz, window, PhotoSwipe, PhotoSwipeUI_Default */
(function () {

	'use strict';

	Polymer({
		behaviors: [
			Cosmoz.TemplateHelperBehavior,
			Cosmoz.TranslatableBehavior
		],
		is: 'cosmoz-image-viewer',
		properties: {
			images: {
				type: Array,
				observer: '_imagesChanged'
			},

			photoSwipe: {
				type: Object
			},

			options: {
				type: Object,
				value() {
					return {
						barsSize: {top: 0, bottom: 'auto'},
						shareEl: false,
						closeEl: false,
						escKey: false,
						pinchToClose: false
					};
				}
			}
		},

		_initPhotoSwipe(images) {
			if (this.photoSwipe) {
				this.photoSwipe.destroy();
			}
			var pswpElement = this.shadowRoot.querySelectorAll('.pswp')[0],
				items = images.map(i => {
					if (typeof i === 'string') {
						return {
							src: i,
							w: 1105,
							h: 1562
						};
					}
					return i;
				});

			this.photoSwipe = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, this.options);
			this.photoSwipe.init();

			this.photoSwipe.listen('resize', () => {
				// Update size after fullscreen exit
				this.async(()=> {
					this.photoSwipe.updateSize(true);
				}, 50);
			});
		},

		_imagesChanged(images) {
			if ((!images || images.length === 0) && this.photoSwipe) {
				this.photoSwipe.destroy();
				return;
			}
			this._initPhotoSwipe(images);
		}
	});
}());
