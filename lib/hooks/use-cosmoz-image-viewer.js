import { useSlideList } from '@neovici/cosmoz-slider';
import { useState } from 'haunted';
import { html } from 'lit-html';

const onImageError = e => {
		if (!e.currentTarget.parentElement) {
			return;
		}

		const errorContainer =
			e.currentTarget.parentElement.querySelector('.error');
		errorContainer.removeAttribute('hidden');
		e.currentTarget.setAttribute('hidden', true);
	},
	onStatusChanged = ev => ev.detail.value === 'error' && onImageError(ev),
	renderImage = ({ showZoom, image, isZoomed, _onZoomChanged }) =>
		showZoom
			? html`<haunted-pan-zoom
					class="image-zoom"
					.src=${ image }
					?disabled=${ !isZoomed }
					@zoom-changed=${ _onZoomChanged }
					@status-changed=${ onStatusChanged }
			  ></haunted-pan-zoom>`
			: html`<img
					class="image"
					.src=${ image }
					style="width:100%"
					@error=${ onImageError }
			  />`,
	render = opts => html`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${ opts.image }</div>
		</div>
		${ renderImage(opts) }
	</div>`,
	useCosmozImageViewer = host => {
		const { images, showZoom } = host,
			[isZoomed, setIsZoomed] = useState(false),
			_onZoomChanged = ev => setIsZoomed(ev.detail.value > 1),
			{ slide, next, prev, goto, index } = useSlideList(images, {
				initial: images[host.currentImageIndex],
				render: image =>
					render({ image, showZoom, isZoomed, _onZoomChanged })
			});

		return {
			isZoomed,
			currentSlide: slide,
			nextImage: next,
			previousImage: prev,
			total: images.length,
			currentImageIndex: index,
			selectedImageNumber: index + 1,
			_syncImageIndex: event => goto(event.detail.value)
		};
	};

export { useCosmozImageViewer };
