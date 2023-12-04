import '@neovici/cosmoz-slider';
import '@polymer/iron-icons';
import '@polymer/paper-icon-button';
import './lib/haunted-pan-zoom';

import { _ } from '@neovici/cosmoz-i18next';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { component, html } from 'haunted';
import { when } from 'lit-html/directives/when.js';
import { style } from './cosmoz-image-viewer.style';
import { useCosmozImageViewer } from './lib/hooks/use-cosmoz-image-viewer';
import { nothing } from 'lit-html';

const getZoomIcon = (zoomed) => (zoomed ? 'icons:zoom-out' : 'icons:zoom-in');

const shouldShow = (show, imagesLen, imgsMinLen = 1) => {
	return show ? imagesLen >= imgsMinLen : false;
};

const toggleZoom = (e) => {
	const el = e.target.getRootNode().querySelector('haunted-pan-zoom');

	if (el.zoom > 1) {
		return el.zoomTo(1);
	}
	el.zoomTo(1.5);
};

const renderCosmozImageViewer = ({
	host,
	isZoomed,
	currentSlide,
	nextImage,
	previousImage,
	total,
	currentImageIndex,
	selectedImageNumber,
	syncImageIndex,
	onDownloadPdf,
	isFullscreen,
	openFullscreen,
	closeFullscreen,
	onPrintPdf,
	detach,
	detached,
}) =>
	detached
		? nothing
		: html`
				<style>
					${style}
				</style>

				${when(
					shouldShow(host.showPageNumber, total),
					() =>
						html` <div class="nav counter">
							${selectedImageNumber}/${total}
						</div>`,
				)}

				<div class="actions layout horizontal center">
					${when(
						shouldShow(host.showNav, total, 2),
						() => html`
							<paper-icon-button
								class="nav"
								icon="icons:arrow-back"
								@click=${previousImage}
							></paper-icon-button>
							<paper-icon-button
								class="nav"
								icon="icons:arrow-forward"
								@click="${nextImage}"
							></paper-icon-button>
						`,
					)}
					<div class="flex"></div>
					${when(
						shouldShow(host.showZoom, total),
						() =>
							html`<paper-icon-button
								class="nav"
								@click="${toggleZoom}"
								icon="${getZoomIcon(isZoomed)}"
								title="${_('Zoom image')}"
							></paper-icon-button>`,
					)}
					${when(
						shouldShow(host.showDetach, total),
						() =>
							html` <paper-icon-button
								class="nav"
								@click="${detach}"
								icon="launch"
								title="${_('Detach image to separate window')}"
							></paper-icon-button>`,
					)}
					<paper-icon-button
						class="nav"
						@click="${onDownloadPdf}"
						icon="icons:file-download"
						title="${_('Download images')}"
					></paper-icon-button>
					<paper-icon-button
						class="nav"
						@click="${onPrintPdf}"
						icon="icons:print"
						title="${_('Print images')}"
					></paper-icon-button>
					${when(
						shouldShow(host.showFullscreen, total),
						() =>
							html` <paper-icon-button
								class="nav"
								@click="${openFullscreen}"
								icon="icons:fullscreen"
								title="${_('Fullscreen image')}"
							></paper-icon-button>`,
					)}
					${when(
						shouldShow(host.showClose, total),
						() =>
							html` <paper-icon-button
								class="nav"
								@click="${() => host.dispatchEvent(new CustomEvent('close'))}"
								icon="icons:close"
								title="${_('Close fullscreen')}"
							></paper-icon-button>`,
					)}
				</div>

				<div id="imageContainer">
					${when(total === 0, () => html`<p>${_('No image loaded.')}</p>`)}
					<cosmoz-slider id="slider" .slide="${currentSlide}"></cosmoz-slider>
				</div>

				${when(isFullscreen, () =>
					portal(
						html`<cosmoz-image-viewer
							fullscreen
							.images="${host.images}"
							show-nav
							show-zoom
							show-close
							@close=${closeFullscreen}
							.currentImageIndex=${currentImageIndex}
							@current-image-index-changed=${syncImageIndex}
							?show-detach=${host.showDetach}
							?loop=${host.loop}
						></cosmoz-image-viewer>`,
					),
				)}
		  `;

const CosmozImageViewer = (host) =>
	renderCosmozImageViewer(useCosmozImageViewer(host));

customElements.define(
	'cosmoz-image-viewer',
	component(CosmozImageViewer, {
		observedAttributes: [
			'download-file-name',
			'show-close',
			'show-detach',
			'show-fullscreen',
			'show-nav',
			'show-page-number',
			'show-zoom',
			'loop',
			'title',
		],
	}),
);
