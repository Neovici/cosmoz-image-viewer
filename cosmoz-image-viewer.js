/* eslint-disable max-lines, max-len */
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes';
import '@polymer/iron-icons';
import '@polymer/iron-image';
import '@polymer/paper-icon-button';
import '@fabricelements/skeleton-carousel';

import '@neovici/img-pan-zoom';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { addDebouncer } from '@polymer/polymer/lib/legacy/polymer.dom';

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { Template, mixin } from '@neovici/cosmoz-utils';
import { translatable } from '@neovici/cosmoz-i18next';

import { NullZipArchive } from '@neovici/nullxlsx';

import './cosmoz-image-viewer-overlay.js';

const globals = {
	window: null,
	windowOpener: null
};

let imageOverlay;

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
class CosmozImageViewer extends mixin(Template, translatable(mixinBehaviors([
	IronResizableBehavior
], PolymerElement))) {
	static get template() { // eslint-disable-line max-lines-per-function
		return html`
		<style include="iron-flex iron-flex-alignment">
			:host {
				display: block;
				position: relative;
				overflow: auto;
				@apply --layout-vertical;
			}

			/* For Polymer 2 */

			[hidden] {
				display: none !important;
			}

			#imageContainer {
				overflow-y: auto;
				will-change: transform;
			}

			.actions {
				position: absolute;
				left: 0;
				right: 0;
				margin: 12px;
			}

			.nav.counter {
				position: absolute;
				left: calc(50% - 32px);
				margin-top: 22px;
				width: 40px;
				padding: 4px 10px;
				border-radius: 30px;
				text-align: center;
				font-weight: 100;
				font-size: 1em;
			}

			.nav {
				z-index: +1;
				opacity: 0.5;
				color: rgba(255, 255, 255, 0.87);
				opacity: 1;
				background-color: rgba(0, 0, 0, 0.44);
				border-radius: 20px;
				margin: 3px;
			}

			#carousel {
				--skeleton-carousel-item-selected: {
					height: auto;
					text-align: center;
				};

				--skeleton-carousel-item: {
					height: 0;
					text-align: center;
				};

				--skeleton-carousel-nav: {
					background-color: rgba(0, 0, 0, 0.44);
					color: rgba(255, 255, 255, 0.87);
					top: 12px;
					position: absolute;
				};

				--skeleton-carousel-nav-disabled: {
					/* otherwise fullscreen gets triggerd on tap */
					pointer-events: all !important;
				};

				--skeleton-carousel-nav-next: {
					left: 56px;
				};

				--skeleton-carousel-nav-prev: {
					left: 12px;
				};

				--skeleton-carousel-controls: {
					padding: 0;
				}
			}

			.image {
				background-color: gray;
				pointer-events: none;
				--iron-image-width: 100%;
				--iron-image-height: auto;
				/* Needed to override Chrome 73+ handling of iron-image overflow hidden */
				overflow: visible;
				@apply --cosmoz-image-viewer-image;
			}

			.image-zoom {
				@apply --layout-flex-auto;
				display: flex;
				justify-content: center;
				background-color: black;
				pointer-events: none;
				height: 100vh;
				@apply --cosmoz-image-viewer-image-zoom;
			}

			.error {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: white;
					z-index: +1;
				@apply --cosmoz-image-viewer-error;
			}

			.error .desc {
				padding-top: 1em;
				opacity: 0.8;
				font-size: 0.8em;
			}
		</style>

		<div class="nav counter" hidden$="[[!_showPageNumber]]">
			[[selectedImageNumber]]/[[total]]
		</div>

		<div class="actions layout horizontal center">
			<paper-icon-button class="nav" hidden$="[[!_showNav]]" icon="icons:arrow-back" on-tap="previousImage">
			</paper-icon-button>
			<paper-icon-button class="nav" hidden$="[[!_showNav]]" icon="icons:arrow-forward" on-tap="nextImage">
			</paper-icon-button>
			<div class="flex"></div>
			<paper-icon-button class="nav" hidden$="[[!_showZoom]]" on-click="zoomToggle" icon="[[_getZoomIcon(isZoomed)]]" title="[[ _('Zoom image', t) ]]">
			</paper-icon-button>
			<paper-icon-button class="nav" hidden$="[[!_showDetach]]" on-click="detach" icon="launch" title="[[ _('Detach image to separate window', t) ]]">
			</paper-icon-button>
			<paper-icon-button class="nav" hidden$="[[!_showFullscreen]]" on-click="openFullscreen" icon="icons:fullscreen" title="[[ _('Fullscreen image', t) ]]">
			</paper-icon-button>
			<paper-icon-button class="nav" hidden$="[[!showClose]]" on-click="_close" icon="icons:close" title="[[ _('Close fullscreen', t) ]]">
			</paper-icon-button>
		</div>

		<div id="imageContainer" on-scroll="_scrollHandler">
			<p hidden$="[[_hideNoImageInfo]]">[[ _('No image loaded.', t) ]]</p>
			<skeleton-carousel id="carousel" selected-item="{{selectedItem}}" dots="[[showDots]]" loop="[[loop]]" total="{{total}}" selected="{{currentImageIndex}}">
				<template is="dom-repeat" items="[[_resolvedImages]]" as="image">
					<div>
						<div class="error">
							<h2>An error occurred while loading the image.</h2>
							<div class="desc">[[image]]</div>
						</div>
						<img-pan-zoom hidden$="[[ !showZoom ]]" class="image-zoom" data-src$="[[image]]"
							on-loaded-changed="_imageLoadedChanged" on-error-changed="_onImageError">
						</img-pan-zoom>
						<iron-image hidden$="[[ showZoom ]]" prevent-load="[[ showZoom ]]" sizing="[[ sizing ]]"
							class="image" data-src$="[[ image ]]" on-loaded-changed="_imageLoadedChanged" on-error-changed="_onImageError">
						</iron-image>
					</div>
				</template>
			</skeleton-carousel>
		</div>

		<template id="externalWindow" preserve-content="">
			<style>
				html,
				body {
					margin: 0;
					font-family: sans-serif;
				}
				body {
					overflow: visible;
				}
				#image {
					overflow-y: auto;
					width: 100%;
				}
				#actions {
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
					color: rgba(255, 255, 255, 0.87);
					z-index: 10;
				}
				#actions:hover {
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
				#pageNumber {
					width: 100%;
					text-align: center;
					font-size: 1.1em;
					letter-spacing: 0.2em;
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
				.icon-btn[disabled] {
					cursor: default;
					background-color: rgba(0, 0, 0, 0.2);
					color: rgba(255, 255, 255, 0.4);
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
						display: none !important;
					}
					.print-image {
						display: block;
						page-break-inside: avoid;
						page-break-after: always;
						max-height: 100%;
						width: 100%;
					}
				}
				.fullscreen {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					background-color:#eee;
					opacity: 0.7;
				}
				#error.fullscreen {
					display: none;
					opacity: 0.95;
				}
				.center-holder {
					position: absolute;
					left: 50%;
					top: 50%;
					margin-left: -40px;
					margin-top: -40px;
				}
				#error .center-holder {
					margin-left: -150px;
				}
				.center-content {
					width: 80px;
					height: 80px;
					position: relative;
				}
				#error .center-content {
					width: 300px;
					text-align: center;
				}
				.sk-circle .sk-child {
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
				}
				.sk-circle .sk-child:before {
					content: '';
					display: block;
					margin: 0 auto;
					width: 15%;
					height: 15%;
					background-color: rgb(95, 90, 146);
					border-radius: 100%;
					-webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
					animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
				}
				.sk-circle .sk-circle2 {
					-webkit-transform: rotate(30deg);
					-ms-transform: rotate(30deg);
					transform: rotate(30deg);
				}
				.sk-circle .sk-circle3 {
					-webkit-transform: rotate(60deg);
					-ms-transform: rotate(60deg);
					transform: rotate(60deg);
				}
				.sk-circle .sk-circle4 {
					-webkit-transform: rotate(90deg);
					-ms-transform: rotate(90deg);
					transform: rotate(90deg);
				}
				.sk-circle .sk-circle5 {
					-webkit-transform: rotate(120deg);
					-ms-transform: rotate(120deg);
					transform: rotate(120deg);
				}
				.sk-circle .sk-circle6 {
					-webkit-transform: rotate(150deg);
					-ms-transform: rotate(150deg);
					transform: rotate(150deg);
				}
				.sk-circle .sk-circle7 {
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
					transform: rotate(180deg);
				}
				.sk-circle .sk-circle8 {
					-webkit-transform: rotate(210deg);
					-ms-transform: rotate(210deg);
					transform: rotate(210deg);
				}
				.sk-circle .sk-circle9 {
					-webkit-transform: rotate(240deg);
					-ms-transform: rotate(240deg);
					transform: rotate(240deg);
				}
				.sk-circle .sk-circle10 {
					-webkit-transform: rotate(270deg);
					-ms-transform: rotate(270deg);
					transform: rotate(270deg);
				}
				.sk-circle .sk-circle11 {
					-webkit-transform: rotate(300deg);
					-ms-transform: rotate(300deg);
					transform: rotate(300deg);
				}
				.sk-circle .sk-circle12 {
					-webkit-transform: rotate(330deg);
					-ms-transform: rotate(330deg);
					transform: rotate(330deg);
				}
				.sk-circle .sk-circle2:before {
					-webkit-animation-delay: -1.1s;
					animation-delay: -1.1s;
				}
				.sk-circle .sk-circle3:before {
					-webkit-animation-delay: -1s;
					animation-delay: -1s;
				}
				.sk-circle .sk-circle4:before {
					-webkit-animation-delay: -0.9s;
					animation-delay: -0.9s;
				}
				.sk-circle .sk-circle5:before {
					-webkit-animation-delay: -0.8s;
					animation-delay: -0.8s;
				}
				.sk-circle .sk-circle6:before {
					-webkit-animation-delay: -0.7s;
					animation-delay: -0.7s;
				}
				.sk-circle .sk-circle7:before {
					-webkit-animation-delay: -0.6s;
					animation-delay: -0.6s;
				}
				.sk-circle .sk-circle8:before {
					-webkit-animation-delay: -0.5s;
					animation-delay: -0.5s;
				}
				.sk-circle .sk-circle9:before {
					-webkit-animation-delay: -0.4s;
					animation-delay: -0.4s;
				}
				.sk-circle .sk-circle10:before {
					-webkit-animation-delay: -0.3s;
					animation-delay: -0.3s;
				}
				.sk-circle .sk-circle11:before {
					-webkit-animation-delay: -0.2s;
					animation-delay: -0.2s;
				}
				.sk-circle .sk-circle12:before {
					-webkit-animation-delay: -0.1s;
					animation-delay: -0.1s;
				}
				@-webkit-keyframes sk-circleBounceDelay {
					0%,
					80%,
					100% {
						-webkit-transform: scale(0);
						transform: scale(0);
					}
					40% {
						-webkit-transform: scale(1);
						transform: scale(1);
					}
				}
				@keyframes sk-circleBounceDelay {
					0%,
					80%,
					100% {
						-webkit-transform: scale(0);
						transform: scale(0);
					}
					40% {
						-webkit-transform: scale(1);
						transform: scale(1);
					}
				}
			</style>

			<img id="image" class="hide-on-print">
			<div id="printContainer"></div>
			<div id="actions" class="hide-on-print">
				<div id="navs" class="action-box">
					<div id="prevImg" class="icon-btn nav" onclick="ciw.prev()">
						<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
							<g><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
						</svg>
					</div>
					<div id="nextImg" class="icon-btn nav" onclick="ciw.next()">
						<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
							<g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
						</svg>
					</div>
				</div>
				<span id="pageNumber"></span>
				<div class="action-box">
					<div class="icon-only" onclick="ciw.downloadImages()">
						<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
							<g><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
						</svg>
					</div>
					<div class="icon-only" onclick="ciw.printPage()">
						<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
							<g><path d="M19 8H5c-1.66 0-3 1.34-33v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
						</svg>
					</div>
				</div>
			</div>
			<div id="loading" class="fullscreen">
				<div class="center-holder">
					<div class="sk-circle center-content">
						<div class="sk-circle1 sk-child"></div>
						<div class="sk-circle2 sk-child"></div>
						<div class="sk-circle3 sk-child"></div>
						<div class="sk-circle4 sk-child"></div>
						<div class="sk-circle5 sk-child"></div>
						<div class="sk-circle6 sk-child"></div>
						<div class="sk-circle7 sk-child"></div>
						<div class="sk-circle8 sk-child"></div>
						<div class="sk-circle9 sk-child"></div>
						<div class="sk-circle10 sk-child"></div>
						<div class="sk-circle11 sk-child"></div>
						<div class="sk-circle12 sk-child"></div>
					</div>
				</div>
			</div>
			<div id="error" class="fullscreen">
				<div class="center-holder">
					<div class="center-content">
						<h2>An error occurred while loading the image.</h2>
					</div>
				</div>
			</div>
			<script>
				/*eslint-env browser*/
				(() => {
					class CIV {
						constructor() {
							this._currentImageIndex = 0;
							this.elements = [
								'image',
								'loading',
								'prevImg',
								'printContainer',
								'nextImg',
								'pageNumber',
								'actions',
								'navs',
								'error'
							].reduce((elements, id) => Object.assign(elements, { [id]: document.getElementById(id) }), {});
							if (this.elements.image == null) {
								return;
							}
							this.elements.image.onload = () => this._setDisplay('loading', false);
							this.elements.image.onerror = () => this._setDisplay('error', true);
						}

						get isLoading() {
							return this._isLoading;
						}

						set isLoading(loading) {
							this._isLoading = true;
							this._setDisplay('loading', loading);
						}

						get currentImageIndex() {
							return this._currentImageIndex;
						}

						set currentImageIndex(index) {
							if (index > this.images.length - 1) {
								console.warn('Image index does not exist!');
								return;
							}
							this._currentImageIndex = index;
							this._changeCurrentImage(this.images[index]);
							this._setDisplay('error', false);
							this._updateNavState();
						}

						set images(images) {
							this._images = images;
							this.currentImageIndex = 0;
							this._setDisplay('actions', images.length > 0, 'flex');
							this._setNavVisibility(images.length > 1);
						}

						get images() {
							return this._images;
						}

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
							window.dispatchEvent(new CustomEvent('download', { detail: this.images }));
						}

						printPage() {
							this.elements.printContainer.innerHTML = '';

							const imgs = this.images.map(imageUrl => {
								const i = document.createElement('img');
								i.src = imageUrl;
								i.classList.add('print-image');
								this.elements.printContainer.appendChild(i);
								return i;
							});
							this._printIfLoaded(imgs).then(() => this.elements.printContainer.innerHTML = '');
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
							this.elements.image.src = url;
						}

						_setDisplay(element, visible = false, trueStyle = 'block', falseStyle = 'none') {
							if (!element || !this.elements[element]) {
								return;
							}
							this.elements[element].style.display = visible ? trueStyle : falseStyle;
						}

						_setNavVisibility(visible) {
							this.elements.navs.hidden = !visible;
						}

						_updateNavState() {
							if (this.currentImageIndex === 0) {
								this.elements.prevImg.setAttribute('disabled', true);
							} else {
								this.elements.prevImg.removeAttribute('disabled');
							}
							if (this.currentImageIndex + 1 === this.images.length) {
								this.elements.nextImg.setAttribute('disabled', true);
							} else {
								this.elements.nextImg.removeAttribute('disabled');
							}
							this.elements.pageNumber.innerHTML = \`\${this.currentImageIndex + 1} / \${this.images.length}\`;
						}
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
`;
	}

	static get is() {
		return 'cosmoz-image-viewer';
	}

	static get properties() { // eslint-disable-line max-lines-per-function
		return {
			/**
			 * The url of the currenly selected image.
			 */
			currentImage: {
				type: String,
				notify: true,
				computed: '_computeCurrentImage(currentImageIndex, images)'
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
				observer: function (value) { // eslint-disable-line object-shorthand
					this.hidden = value;
					this.notifyResize();
				}
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
				type: Array
			},

			_imageContainerHeight: {
				type: Number
			},

			_scroller: {
				type: Object
			}
		};
	}

	static get observers() {
		return [
			'_scrollToPercent(imageLoaded, scrollPercent, _imageContainerHeight)'
		];
	}

	/** ELEMENT LIFECYCLE */

	ready() {
		super.ready();

		this.addEventListener('iron-resize', this._onResize);

		this.set('_scroller', this.$.imageContainer);

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

		this.cancelDebouncer('updateScrollPercent');
		this.cancelDebouncer('elementHeight');
		this.cancelDebouncer('setResolvedImages');
	}

	/** PUBLIC */

	get imageOverlay() {
		return imageOverlay;
	}

	get carousel() {
		return this.$$('#carousel');
	}
	/**
	 * Triggers the slide to the next image.
	 * @returns {undefined}
	 */
	nextImage() {
		this.carousel.next();
	}
	/**
	 * Triggers the slide to the previous image.
	 * @returns {undefined}
	 */
	previousImage() {
		this.carousel.prev();
	}

	_createImageOverlay() {
		const dialog = document.createElement('cosmoz-image-viewer-overlay');
		dialog.id = 'cosmoz-image-viewer-overlay';
		dialog.noCancelOnOutsideClick = true;
		dialog.loop = this.loop;
		dialog.showDetach = this.showDetach;
		document.body.appendChild(dialog);
		imageOverlay = dialog;
		return dialog;
	}

	/**
	 * Opens the fullscreen overlay.
	 * @returns {undefined}
	 */
	openFullscreen() {
		const dialog = imageOverlay || this._createImageOverlay();
		dialog.images = this.images;
		dialog.currentImageIndex = this.currentImageIndex;
		dialog.open();
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
	}

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
	}

	_detachToExistingWindow() {
		globals.window.document.title = this._detachedWindowTitle;
		globals.window.ciw.setImages(this._resolvedImages, this.currentImageIndex);
		globals.window.focus();
		return globals.window;
	}

	get hasWindow() {
		return globals.window != null && !globals.window.closed && globals.window.ciw;
	}

	syncState() {
		if (!this.isDetached && this.hasWindow) {
			this.detach();
		}
	}

	downloadZip(zip) {
		const a = document.body.appendChild(zip.createDownloadLink());
		a.click();
		document.body.removeChild(a);
	}

	createZipFromUrls(fileUrls) {
		const options = this.credentials ? { credentials: 'include' } : { credentials: 'omit' };
		const fetches = fileUrls.map(url =>
			fetch(url, options)
				.then(response => response.arrayBuffer())
				.then(data => ({data, url}))
		);

		return Promise
			.all(fetches)
			.then(responses => {
				const filenames = [],
					zip = new NullZipArchive(this.downloadFileName, false);

				for (const {url, data} of responses) {
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
	}

	/** ELEMENT BEHAVIOR */

	_computeDetachedWindowFeaturesString(featues = {}) {
		return Object.keys(featues)
			.map(key => key + '=' + featues[key])
			.join(',');
	}

	_computeShowActions(show, imagesLen, height, imgsMinLen = 1) {
		const heightOk = height ? height > 100 : true;
		return show ? imagesLen >= imgsMinLen && heightOk : false;
	}

	_onImageError(e) {
		const errorContainer = e.currentTarget.parentElement.querySelector('.error');
		if (e.detail.value) {
			errorContainer.removeAttribute('hidden');
			return;
		}
		errorContainer.setAttribute('hidden', true);
	}

	_selectedItemChanged(selectedItem) {
		if (!selectedItem) {
			return;
		}
		const imgPanZoom = selectedItem.querySelector('img-pan-zoom');

		this._initImgPanZoomInstance(imgPanZoom);
		this.imageLoaded = imgPanZoom.loaded;
	}


	_getZoomIcon(zoomed) {
		return zoomed ? 'icons:zoom-out' : 'icons:zoom-in';
	}

	_getTitle(title1, title2) {
		return title1 || title2;
	}

	_isZoomed(viewer, zoom) {
		if (viewer === null) {
			return;
		}
		const initialZoomLevel = viewer.viewport.getHomeZoom();
		return zoom > initialZoomLevel * 1.05;
	}

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

	}

	_computeCurrentImage(index, array) {
		if (!array) {
			return;
		}
		return array[index];
	}

	_computeSelectedImageNumber(index, total) {
		if (!total) {
			return 0;
		}
		return index + 1;
	}

	_onResize() {
		this.set('_imageContainerHeight', this._scroller.scrollHeight);
		this.debounce('elementHeight', () => {
			this._elementHeight = this.offsetHeight;
		}, 50);
	}

	_imageListChanged(images) {
		this.currentImageIndex = 0;
		/**
		 * _resolvedImages = []
		 * Solves: when changing the images property to a new array of images,
		 * the displayed images might not be updated if the new array has the same size as the previous one.
		 * See https://github.com/Neovici/cosmoz-image-viewer/issues/21
		 */
		this.set('_resolvedImages', []);
		addDebouncer(this.debounce('setResolvedImages', () => {
			if (!images) {
				this.set('_resolvedImages', images);
				return;
			}
			this.set('_resolvedImages', images.map(i => this.resolveUrl(i)));
		}));
	}

	_close() {
		this.fire('close-tapped');
	}

	_imageLoadedChanged(e) {
		const imgPanZoom = e.currentTarget,
			div = imgPanZoom.parentNode;

		if (Array.from(div.classList).indexOf('selected') > -1) {
			this.imageLoaded = imgPanZoom.loaded;
		}

	}

	_scrollHandler() {
		this.debounce('updateScrollPercent', () => {
			const top = this._scroller.scrollTop,
				height = this._imageContainerHeight,
				percent = Math.round(top / height * 100);
			if (percent !== this.scrollPercent) {
				this.set('scrollPercent', percent);
			}
		}, 100);
	}

	_scrollToPercent(loaded, percent, height) {
		if (!loaded || !this._scroller || !percent) {
			return;
		}
		const topPx = height * (percent / 100);

		this._scroller.scrollTop = topPx;
	}
}

customElements.define(CosmozImageViewer.is, CosmozImageViewer);
