import '@neovici/cosmoz-utils/elements/cz-spinner';

import { useSlideList } from '@neovici/cosmoz-slider';
import { invoke } from '@neovici/cosmoz-utils/function';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { memoize } from '@neovici/cosmoz-utils/memoize';
import { useCallback, useEffect, useMemo, useState } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';
import { download, downloadUrl } from '../pdf';
import { hasWindow, popout } from '../popout';
import { print } from '../print';

const onImageError = (e) => {
		if (!e.currentTarget.parentElement) {
			return;
		}

		const errorContainer =
			e.currentTarget.parentElement.querySelector('.error');
		errorContainer.removeAttribute('hidden');
		e.currentTarget.setAttribute('hidden', true);
	},
	onStatusChanged = (ev) => ev.detail.value === 'error' && onImageError(ev),
	textRegionToCss = ({ top, left, width, height }) =>
		[
			['top', top],
			['left', left],
			['width', width],
			['height', height],
		]
			.map(([prop, value]) => `${prop}: ${value}%`)
			.join(';'),
	renderTextRegion = (region) =>
		html`<svg
			class="word"
			style="position:absolute;${textRegionToCss(region)}"
			viewBox=${`0 0 ${region.viewBoxWidth} ${region.viewBoxHeight}`}
			preserveAspectRatio="none"
		>
			<text
				y="82%"
				textLength="100%"
				lengthAdjust="spacingAndGlyphs"
				font-size=${Math.max(region.viewBoxHeight * 0.85, 0.01)}
				style="fill: rgba(0, 0, 0, 0.01); user-select: text; -webkit-user-select: text;"
			>
				${region.content}
			</text>
		</svg>`,
	renderTextLayer = (textLayer = []) => {
		if (!textLayer.length) {
			return nothing;
		}

		return html`<div
			class="text-layer"
			style="position:absolute;inset:0;user-select:text;-webkit-user-select:text"
		>
			${textLayer.map(renderTextRegion)}
		</div>`;
	},
	renderImage = ({ src$, showZoom, isZoomed, _onZoomChanged, textLayer }) => {
		const src = guard(src$, () => until(src$));
		const overlay = renderTextLayer(textLayer);

		return [
			showZoom
				? html`<haunted-pan-zoom
						class="image-zoom"
						.src=${src}
						.overlay=${overlay}
						?disabled=${!isZoomed}
						@zoom-changed=${_onZoomChanged}
						@status-changed=${onStatusChanged}
					></haunted-pan-zoom>`
				: html`<div style="position:relative;width:100%;line-height:0;">
						<img
							class="image"
							.src=${src}
							style="width:100%"
							@error=${onImageError}
						/>
						${overlay}
					</div>`,
			guard(src$, () =>
				until(
					src$.then(() => nothing),
					html`<cz-spinner></cz-spinner>`,
				),
			),
		];
	},
	render = (opts) =>
		html`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${opts.image}</div>
			</div>
			${renderImage(opts)}
		</div>`,
	empty = [],
	/**
	 * Hook to load PDF page thunks when the `pdf` property is set.
	 * Returns an array of thunks (lazy page renderers) that the viewer's
	 * existing _invoke + until() infrastructure will call on demand,
	 * or the fallback `images` array while the PDF document is loading.
	 * @param {string|undefined} pdfUrl - The URL of the PDF to load
	 * @param {object} [pdfOptions] - Options passed to pdfjs getDocument (e.g. httpHeaders, withCredentials)
	 * @param {Array} images - The fallback images array (e.g. pre-rendered thumbnails)
	 * @returns {Array} Thunks from the PDF, pre-rendered images as fallback, or the original images array
	 */
	usePdfImages = (pdfUrl, pdfOptions, images) => {
		const [pdfImages, setPdfImages] = useState(empty),
			loadPdfRef = useMemo(
				() =>
					memoize((url) =>
						import('../pdf-loader').then(({ loadPdfThunks }) =>
							loadPdfThunks(url, pdfOptions),
						),
					),
				[pdfOptions],
			);

		useEffect(() => {
			if (!pdfUrl) {
				setPdfImages(empty);
				return;
			}

			let cancelled = false;

			loadPdfRef(pdfUrl).then((thunks) => {
				if (cancelled) return;
				setPdfImages(thunks);
			});

			return () => {
				cancelled = true;
			};
		}, [pdfUrl, loadPdfRef]);

		return pdfUrl ? pdfImages : images;
	},
	useCosmozImageViewer = (host) => {
		const {
				images: rawImages = empty,
				pdf: pdfUrl,
				pdfOptions,
				textLayers = empty,
				showZoom,
				title,
				downloadFileName = 'archive',
				loop,
				detachedShowZoom,
			} = host,
			images = usePdfImages(pdfUrl, pdfOptions, rawImages),
			slides = useMemo(
				() =>
					images.map((image, index) => ({
						image,
						textLayer: textLayers[index] ?? empty,
					})),
				[images, textLayers],
			),
			[isZoomed, setIsZoomed] = useState(false),
			_onZoomChanged = (ev) => setIsZoomed(ev.detail.value > 1),
			_invoke = useMemo(
				() => memoize((image) => Promise.resolve(invoke(image))),
				[],
			),
			{ slide, next, prev, goto, index, first, last } = useSlideList(slides, {
				loop,
				initial: slides?.[host.currentImageIndex],
				render: ({ image, textLayer }) =>
					render({
						src$: _invoke(image),
						textLayer,
						showZoom,
						isZoomed,
						_onZoomChanged,
					}),
			}),
			[isFullscreen, setIsFullscreen] = useState(false),
			openFullscreen = () => setIsFullscreen(true),
			closeFullscreen = () => setIsFullscreen(false),
			syncImageIndex = (event) => goto(event.detail.value),
			[detached, setDetached] = useState(false),
			detach = useCallback(
				() =>
					popout({
						images,
						textLayers,
						index,
						title,
						loop,
						syncImageIndex,
						detachedShowZoom,
						onDetach: () => setDetached(true),
						onClose: () => setDetached(false),
					}),
				[
					images,
					textLayers,
					index,
					title,
					loop,
					syncImageIndex,
					detachedShowZoom,
				],
			),
			syncState = useCallback(() => {
				if (!hasWindow) return;
				detach();
			}, [detach]),
			syncDetachedState = (ev) => setDetached(ev.detail.value);

		useNotifyProperty('currentImageIndex', index, [index]);

		useEffect(() => {
			host.toggleAttribute('hidden', detached);
		}, [detached]);
		useNotifyProperty('detached', detached, [detached]);
		useImperativeApi({ syncState }, [syncState]);

		return {
			host,
			isZoomed,
			currentSlide: slide,
			nextImage: next,
			previousImage: prev,
			first,
			last,
			total: images.length,
			currentImageIndex: index,
			selectedImageNumber: index + 1,
			syncImageIndex,
			onDownloadPdf: pdfUrl
				? () => downloadUrl(pdfUrl, downloadFileName, pdfOptions)
				: () => download(images, downloadFileName, true),

			isFullscreen,
			openFullscreen,
			closeFullscreen,

			onPrintPdf: () => print({ images }),
			detached,
			detach,
			syncDetachedState,
		};
	};

export { useCosmozImageViewer };
