import '@neovici/cosmoz-utils/elements/cz-spinner';

import { html, nothing } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';

const onImageError = (e) => {
	if (!e.currentTarget.parentElement) {
		return;
	}

	const errorContainer = e.currentTarget.parentElement.querySelector('.error');
	errorContainer.removeAttribute('hidden');
	e.currentTarget.setAttribute('hidden', true);
};

const onStatusChanged = (ev) => ev.detail.value === 'error' && onImageError(ev);

export const renderImage = ({ src$, showZoom, isZoomed, index }) => {
	const src = guard(src$, () => until(src$));

	return [
		showZoom
			? html`<haunted-pan-zoom
					.src=${src}
					?disabled=${!isZoomed}
					@status-changed=${onStatusChanged}
				>
					${index != null
						? html`<slot name="overlay-page-${index}"></slot>`
						: nothing}
				</haunted-pan-zoom>`
			: html`<div class="image-container">
					<img .src=${src} @error=${onImageError} />
					${index != null
						? html`<slot name="overlay-page-${index}"></slot>`
						: nothing}
				</div>`,
		guard(src$, () =>
			until(
				src$.then(() => nothing),
				html`<cz-spinner></cz-spinner>`,
			),
		),
	];
};

export const renderSlide = (opts) =>
	html`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${opts.image}</div>
		</div>
		${renderImage(opts)}
	</div>`;
