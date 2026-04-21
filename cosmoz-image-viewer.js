import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-slider';
import '@neovici/cosmoz-utils/elements/cz-spinner';
import './lib/haunted-pan-zoom';

import { _ } from '@neovici/cosmoz-i18next';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { component, html, lift } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { style } from './cosmoz-image-viewer.style';
import { useCosmozImageViewer } from './lib/hooks/use-cosmoz-image-viewer';
import { close as closeIcon } from './lib/icons/close';
import { fileDownload } from './lib/icons/file-download';
import { fullscreen } from './lib/icons/fullscreen';
import { launch } from './lib/icons/launch';
import { leftArrow } from './lib/icons/left-arrow';
import { magnifierMinus } from './lib/icons/magnifier-minus';
import { magnifierPlus } from './lib/icons/magnifier-plus';
import { printFile } from './lib/icons/print-file';
import { rightArrow } from './lib/icons/right-arrow';

const getZoomIcon = (zoomed) => (zoomed ? magnifierMinus : magnifierPlus);

const shouldShow = (show, imagesLen, imgsMinLen = 1) => {
	return show ? imagesLen >= imgsMinLen : false;
};

const renderCosmozImageViewer = ({
	host,
	isZoomed,
	toggleZoom,
	currentSlide,
	nextImage,
	previousImage,
	total,
	navTotal,
	first,
	last,
	currentImageIndex,
	selectedImageNumber,
	onDownloadPdf,
	isFullscreen,
	openFullscreen,
	closeFullscreen,
	onPrintPdf,
	detach,
	detached,
	syncDetachedState,
	setFileIndex,
	setImageIndex,
	loading,
	error,
	contentError,
	files,
	selectedIndex,
	value,
	onSelect,
}) => html`
	<style>
		${style}
	</style>

	${detached
		? nothing
		: html`
				${when(
					loading,
					() =>
						html`<div class="loading">
							<cz-spinner></cz-spinner>
						</div>`,
				)}
				${when(
					error,
					() =>
						html`<div class="error">
							<h2>${_('Failed to load files.')}</h2>
							<div class="desc">${error?.message ?? error}</div>
						</div>`,
				)}
				${when(
					!loading && !error,
					() => html`
						${when(
							shouldShow(host.showPageNumber, total),
							() =>
								html` <div class="counter">
									${selectedImageNumber}/${total}
								</div>`,
						)}

						<div class="actions">
							${when(
								shouldShow(host.showNav, navTotal, 2),
								() => html`
									<button
										class="nav"
										name="prev"
										?disabled=${first}
										@click=${previousImage}
									>
										${leftArrow}
									</button>
									<button
										class="nav"
										name="next"
										?disabled=${last}
										@click=${nextImage}
									>
										${rightArrow}
									</button>
								`,
							)}
							${when(
								files.length > 1,
								() =>
									html`<cosmoz-autocomplete
										text-property="title"
										limit="1"
										.min=${1}
										show-single
										preserve-order
										.source=${files}
										.value=${value}
										@value=${onSelect}
									></cosmoz-autocomplete>`,
							)}
							<span style="flex:auto"></span>
							${when(
								shouldShow(host.showZoom, total),
								() =>
									html`<button
										class="nav"
										@click=${(e) =>
											e.target
												.getRootNode()
												.querySelector('haunted-pan-zoom')
												.zoomTo(toggleZoom())}
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
										@click="${() =>
											host.dispatchEvent(new CustomEvent('close'))}"
										title="${_('Close fullscreen')}"
									>
										${closeIcon}
									</button>`,
							)}
						</div>

						${when(
							contentError,
							() => html`<p class="error">${_('Failed to load PDF.')}</p>`,
							() =>
								when(total === 0, () => html`<p>${_('No image loaded.')}</p>`),
						)}
						<cosmoz-slider id="slider" .slide="${currentSlide}"></cosmoz-slider>
					`,
				)}
			`}
	${when(isFullscreen, () =>
		portal(
			html`<cosmoz-image-viewer
				fullscreen
				.source=${files}
				.currentFileIndex=${selectedIndex}
				.currentImageIndex=${currentImageIndex}
				@current-file-index-changed=${lift(setFileIndex)}
				@current-image-index-changed=${lift(setImageIndex)}
				@detached-changed=${syncDetachedState}
				show-nav
				show-zoom
				show-close
				@close=${closeFullscreen}
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
			'source',
			'download-file-name',
			'pdf',
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