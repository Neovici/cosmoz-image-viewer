import { _ } from '@neovici/cosmoz-i18next';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { html, lift } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';

import { close as closeIcon } from './icons/close';
import { fileDownload } from './icons/file-download';
import { fullscreen } from './icons/fullscreen';
import { launch } from './icons/launch';
import { leftArrow } from './icons/left-arrow';
import { magnifierMinus } from './icons/magnifier-minus';
import { magnifierPlus } from './icons/magnifier-plus';
import { printFile } from './icons/print-file';
import { rightArrow } from './icons/right-arrow';

const getZoomIcon = (zoomed) => (zoomed ? magnifierMinus : magnifierPlus);

export const renderLoading = () =>
	html`<div class="loading"><cz-spinner></cz-spinner></div>`;

export const renderError = (error) =>
	html`<div class="error">
		<h2>${_('Failed to load files.')}</h2>
		<div class="desc">${error?.message ?? error}</div>
	</div>`;

export const renderCounter = (selectedImageNumber, total) =>
	html`<div class="counter">${selectedImageNumber}/${total}</div>`;

export const renderNavButtons = ({
	hasNav,
	first,
	last,
	previousImage,
	nextImage,
}) =>
	when(
		hasNav,
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
	);

export const renderFileDropdown = ({ files, value, onSelect }) =>
	when(
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
	);

export const renderZoomButton = ({ showZoom, total, isZoomed, toggleZoom }) =>
	when(
		showZoom && total,
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
	);

export const renderDetachButton = ({ showDetach, total, detach }) =>
	when(
		showDetach && total,
		() =>
			html`<button
				class="nav"
				@click=${detach}
				title="${_('Detach image to separate window')}"
			>
				${launch}
			</button>`,
	);

export const renderDownloadButton = ({ total, onDownloadPdf }) =>
	when(
		total,
		() =>
			html`<button
				class="nav"
				@click=${onDownloadPdf}
				title="${_('Download images')}"
			>
				${fileDownload}
			</button>`,
	);

export const renderPrintButton = ({ total, onPrintPdf }) =>
	when(
		total,
		() =>
			html`<button
				class="nav"
				@click=${onPrintPdf}
				title="${_('Print images')}"
			>
				${printFile}
			</button>`,
	);

export const renderFullscreenButton = ({ showFullscreen, total, openFullscreen }) =>
	when(
		showFullscreen && total,
		() =>
			html`<button
				class="nav"
				@click=${openFullscreen}
				title="${_('Fullscreen image')}"
			>
				${fullscreen}
			</button>`,
	);

export const renderCloseButton = ({ showClose, total, host }) =>
	when(
		showClose && total,
		() =>
			html`<button
				class="nav"
				@click=${() => host.dispatchEvent(new CustomEvent('close'))}
				title="${_('Close fullscreen')}"
			>
				${closeIcon}
			</button>`,
	);

export const renderActions = (props) =>
	html`<div class="actions">
		${[
			renderNavButtons(props),
			renderFileDropdown(props),
			html`<span style="flex:auto"></span>`,
			renderZoomButton(props),
			renderDetachButton(props),
			renderDownloadButton(props),
			renderPrintButton(props),
			renderFullscreenButton(props),
			renderCloseButton(props),
		]}
	</div>`;

export const renderContentError = (contentError, total) =>
	when(
		contentError,
		() => html`<p class="error">${_('Failed to load PDF.')}</p>`,
		() => when(!total, () => html`<p>${_('No image loaded.')}</p>`),
	);

export const renderMain = (props) =>
	when(
		!props.loading && !props.error,
		() => html`
			${when(
				props.showPageNumber && props.total,
				() => renderCounter(props.selectedImageNumber, props.total),
			)}
			${renderActions(props)}
			${renderContentError(props.contentError, props.total)}
			<cosmoz-slider id="slider" .slide=${props.currentSlide}></cosmoz-slider>
		`,
	);

export const renderFullscreenViewer = ({
	files,
	selectedIndex,
	currentImageIndex,
	setFileIndex,
	setImageIndex,
	syncDetachedState,
	closeFullscreen,
	host,
}) =>
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
	);

export const renderCosmozImageViewer = (props) => [
	when(!props.detached, () => [
		when(props.loading, renderLoading),
		when(props.error, () => renderError(props.error)),
		renderMain(props),
	]),
	when(props.isFullscreen, () => renderFullscreenViewer(props)),
];