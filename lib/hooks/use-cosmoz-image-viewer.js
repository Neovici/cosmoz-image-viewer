import { useSlideList } from '@neovici/cosmoz-slider';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useEffect, useState } from 'haunted';
import { html } from 'lit-html';
import { download } from '../pdf';
import { popout, hasWindow } from '../popout';
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
	renderImage = ({ showZoom, image, isZoomed, _onZoomChanged }) =>
		showZoom
			? html`<haunted-pan-zoom
					class="image-zoom"
					.src=${image}
					?disabled=${!isZoomed}
					@zoom-changed=${_onZoomChanged}
					@status-changed=${onStatusChanged}
			  ></haunted-pan-zoom>`
			: html`<img
					class="image"
					.src=${image}
					style="width:100%"
					@error=${onImageError}
			  />`,
	render = (opts) =>
		html`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${opts.image}</div>
			</div>
			${renderImage(opts)}
		</div>`,
	useCosmozImageViewer = (host) => {
		const {
				images,
				showZoom,
				title,
				downloadFileName = 'archive',
				loop,
				detachedShowZoom,
			} = host,
			[isZoomed, setIsZoomed] = useState(false),
			_onZoomChanged = (ev) => setIsZoomed(ev.detail.value > 1),
			{ slide, next, prev, goto, index } = useSlideList(images, {
				initial: images[host.currentImageIndex],
				render: (image) =>
					render({ image, showZoom, isZoomed, _onZoomChanged }),
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
						index,
						title,
						loop,
						syncImageIndex,
						detachedShowZoom,
						onDetach: () => setDetached(true),
						onClose: () => setDetached(false),
					}),
				[images, index, title, loop],
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
			total: images.length,
			currentImageIndex: index,
			selectedImageNumber: index + 1,
			syncImageIndex,
			onDownloadPdf: () => download(images, downloadFileName, true),

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
