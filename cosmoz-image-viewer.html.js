/* eslint-disable max-lines */

import { html } from '@polymer/polymer/lib/utils/html-tag';

import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes';
import '@polymer/iron-icons';
import '@polymer/iron-image';
import '@polymer/paper-icon-button';
import '@fabricelements/skeleton-carousel';

import './cosmoz-image-viewer-overlay';
import './cosmoz-image-viewer-external';
import './lib/haunted-pan-zoom';

export const template = html`
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

<div id="imageContainer">
	<p hidden$="[[_hideNoImageInfo]]">[[ _('No image loaded.', t) ]]</p>
	<skeleton-carousel id="carousel" selected-item="{{selectedItem}}" dots="[[showDots]]" loop="[[loop]]" total="{{total}}" selected="{{currentImageIndex}}">
		<template is="dom-repeat" items="[[ _resolvedImages ]]" as="image">
			<div>
				<div hidden class="error">
					<h2>An error occurred while loading the image.</h2>
					<div class="desc">[[image]]</div>
				</div>
				<template is="dom-if" if="[[ _shouldLoad(currentImageIndex, index) ]]">
					<haunted-pan-zoom hidden$="[[ !showZoom ]]" class="image-zoom" src$="[[image]]"
						disabled$="[[ !isZoomed ]]"
						on-zoom-changed="_onZoomChanged"
						on-status-changed="_onStatusChanged">
					</haunted-pan-zoom>
					<iron-image hidden$="[[ showZoom ]]" prevent-load="[[ showZoom ]]" sizing="[[ sizing ]]"
						class="image" src$="[[ image ]]" on-error-changed="_onImageError">
					</iron-image>
				</template>
			</div>
		</template>
	</skeleton-carousel>
</div>

<cosmoz-image-viewer-external id="external">
	<cosmoz-image-viewer-basic images="[[_resolvedImages]]" download-file-name="[[downloadFileName]]"></cosmoz-image-viewer-basic>
</cosmoz-image-viewer-external>
`;
