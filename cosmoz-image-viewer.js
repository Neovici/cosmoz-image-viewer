import '@neovici/cosmoz-slider';
import './lib/haunted-pan-zoom';

import { _ } from '@neovici/cosmoz-i18next';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { component, html } from 'haunted';
import { nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { style } from './cosmoz-image-viewer.style';
import { useCosmozImageViewer } from './lib/hooks/use-cosmoz-image-viewer';
import { leftArrow } from './lib/icons/left-arrow';
import { rightArrow } from './lib/icons/right-arrow';
import { launch } from './lib/icons/launch';
import { fileDownload } from './lib/icons/file-download';
import { printFile } from './lib/icons/print-file';
import { magnifierPlus } from './lib/icons/magnifier-plus';
import { magnifierMinus } from './lib/icons/magnifier-minus';
import { fullscreen } from './lib/icons/fullscreen';
import { close as closeIcon } from './lib/icons/close';

const getZoomIcon = (zoomed) => (zoomed ? magnifierMinus : magnifierPlus);

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
	syncDetachedState,
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
							<button class="nav" name="prev" @click=${previousImage}>
								${leftArrow}
							</button>
							<button class="nav" name="next" @click=${nextImage}>
								${rightArrow}
							</button>
						`,
					)}
					<div class="flex"></div>
					${when(
						shouldShow(host.showZoom, total),
						() =>
							html`<button
								class="nav"
								@click="${toggleZoom}"
								title="${_('Zoom image')}"
							>
								${getZoomIcon(isZoomed)}
							</button>`,
					)}
					${when(
						shouldShow(host.showDetach, total),
						() =>
							html`<button
								class="nav"
								@click=${detach}
								title="${_('Detach image to separate window')}"
							>
								${launch}
							</button>`,
					)}
					${when(
						shouldShow(true, total),
						() =>
							html`<button
								class="nav"
								@click=${onDownloadPdf}
								title="${_('Download images')}"
							>
								${fileDownload}
							</button>`,
					)}
					${when(
						shouldShow(true, total),
						() =>
							html`<button
								class="nav"
								@click=${onPrintPdf}
								title="${_('Print images')}"
							>
								${printFile}
							</button>`,
					)}
					${when(
						shouldShow(host.showFullscreen, total),
						() =>
							html`<button
								class="nav"
								@click="${openFullscreen}"
								title="${_('Fullscreen image')}"
							>
								${fullscreen}
							</button>`,
					)}
					${when(
						shouldShow(host.showClose, total),
						() =>
							html` <button
								class="nav"
								@click="${() => host.dispatchEvent(new CustomEvent('close'))}"
								title="${_('Close fullscreen')}"
							>
								${closeIcon}
							</button>`,
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
							@detached-changed=${syncDetachedState}
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
			'detached-show-zoom',
			'loop',
			'title',
		],
	}),
);
