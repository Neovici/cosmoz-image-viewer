import '@neovici/cosmoz-utils/elements/cz-spinner';

import { useSlideList } from '@neovici/cosmoz-slider';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useEffect, useMemo, useState } from 'haunted';
import { html, nothing } from 'lit-html';
import { download } from '../pdf';
import { popout, hasWindow } from '../popout';
import { print } from '../print';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';
import { invoke } from '@neovici/cosmoz-utils/function';
import { memoize } from '@neovici/cosmoz-utils/memoize';

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
	renderImage = ({ src$, showZoom, isZoomed, _onZoomChanged }) => {
		const src = guard(src$, () => until(src$));

		return [
			showZoom
				? html`<haunted-pan-zoom
						class="image-zoom"
						.src=${src}
						?disabled=${!isZoomed}
						@zoom-changed=${_onZoomChanged}
						@status-changed=${onStatusChanged}
				  ></haunted-pan-zoom>`
				: html`<img
						class="image"
						.src=${src}
						style="width:100%"
						@error=${onImageError}
				  />`,
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
			_invoke = useMemo(
				() => memoize((image) => Promise.resolve(invoke(image))),
				[],
			),
			{ slide, next, prev, goto, index, first, last } = useSlideList(images, {
				loop,
				initial: images?.[host.currentImageIndex],
				render: (image) =>
					render({
						src$: _invoke(image),
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
			first,
			last,
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
