import { PolymerElement } from '@polymer/polymer/polymer-element';
import { NullZipArchive } from '@neovici/nullxlsx';

import template from './cosmoz-image-viewer-basic.html.js';

export class CosmozImageViewerBasic extends PolymerElement {
	static get template() {
		return template;
	}

	static get is() {
		return 'cosmoz-image-viewer-basic';
	}

	static get properties() {
		return {
			currentImageIndex: {
				type: Number,
				value: 0,
				observer(index) {
					if (index > this.images.length - 1) {
						// eslint-disable-next-line no-console
						console.warn('Image index does not exist!');
						return;
					}
					this._changeCurrentImage(this.images[index]);
					this._setDisplay('error', false);
					this._updateNavState();
				}
			},
			images: {
				type: Array,
				value() {
					return [];
				},
				observer(images) {
					this.currentImageIndex = 0;
					this._setDisplay('actions', images.length > 0, 'flex');
					this._setNavVisibility(images.length > 1);
				}
			},
			currentImage: {
				type: String,
				notify: true,
				computed: '_computeCurrentImage(currentImageIndex, images)'
			},
			downloadFileName: {
				type: String,
				value: 'archive'
			}
		};
	}

	_computeCurrentImage(index, array) {
		if (!array) {
			return;
		}
		return array[index];
	}

	_onImageLoad() {
		this._setDisplay('loading', false);
	}

	_onImageError() {
		this._setDisplay('error', true);
	}

	get isLoading() {
		return this._isLoading;
	}

	set isLoading(loading) {
		this._isLoading = true;
		this._setDisplay('loading', loading);
	}

	// get currentImageIndex() {
	// 	return this._currentImageIndex;
	// }

	// set currentImageIndex(index) {
	// 	if (index > this.images.length - 1) {
	// 		console.warn('Image index does not exist!');
	// 		return;
	// 	}
	// 	this._currentImageIndex = index;
	// 	this._changeCurrentImage(this.images[index]);
	// 	this._setDisplay('error', false);
	// 	this._updateNavState();
	// }

	// set images(images) {
	// 	this._images = images;
	// 	this.currentImageIndex = 0;
	// 	this._setDisplay('actions', images.length > 0, 'flex');
	// 	this._setNavVisibility(images.length > 1);
	// }

	// get images() {
	// 	return this._images;
	// }

	setImages(images, currentImageIndex = 0) {
		this.images = images;
		this.currentImageIndex = currentImageIndex;
	}

	next() {
		if (this.currentImageIndex === this.images.length - 1) {
			return;
		}
		this.currentImageIndex++;
	}

	prev() {
		if (this.currentImageIndex === 0) {
			return;
		}
		this.currentImageIndex--;
	}

	downloadImages() {
		if (!Array.isArray(this.images)) {
			return;
		}
		this.createZipFromUrls(this.images).then(zip => this.downloadZip(zip));
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

				for (const { url, data } of responses) {
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

	printPage() {
		this.$.printContainer.innerHTML = '';

		const imgs = this.images.map(imageUrl => {
			const i = document.createElement('img');
			i.src = imageUrl;
			i.classList.add('print-image');
			this.$.printContainer.appendChild(i);
			return i;
		});
		this._printIfLoaded(imgs).then(() => {
			this.$.printContainer.innerHTML = '';
		});
	}

	_printIfLoaded(imgs) {
		return new Promise(resolve => {
			setTimeout(() => {
				if (!imgs.every(i => i.complete)) {
					this._printIfLoaded(imgs);
					return;
				}
				print();
				resolve();
			}, 100);
		});
	}

	_changeCurrentImage(url) {
		this.isLoading = true;
		// this.$.image.src = url;
	}

	_setDisplay(element, visible = false, trueStyle = 'block', falseStyle = 'none') {
		if (!element || !this.$[element]) {
			return;
		}
		this.$[element].style.display = visible ? trueStyle : falseStyle;
	}

	_setNavVisibility(visible) {
		this.$.navs.hidden = !visible;
	}

	_updateNavState() {
		if (this.currentImageIndex === 0) {
			this.$.prevImg.setAttribute('disabled', true);
		} else {
			this.$.prevImg.removeAttribute('disabled');
		}
		if (this.currentImageIndex + 1 === this.images.length) {
			this.$.nextImg.setAttribute('disabled', true);
		} else {
			this.$.nextImg.removeAttribute('disabled');
		}
		this.$.pageNumber.innerHTML = `${this.currentImageIndex + 1} / ${this.images.length}`;
	}
}
window.customElements.define(CosmozImageViewerBasic.is, CosmozImageViewerBasic);
/**
<template id="externalWindow" preserve-content="">
	<script>
		(() => {
			class CIV {
			}
			window.ciw = new CIV();
			if (window.ciw.elements.image == null) {
				console.error('#image not found, run in wrong context?', window.ciw.elements.image, this, window);
				return;
			}
			window.dispatchEvent(new Event('ready', { bubbles: true }));
		})();
	</script>
</template>
*/
