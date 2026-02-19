import { _ } from '@neovici/cosmoz-i18next';
import { html, render } from 'lit-html';

const toFeatures = (obj) =>
	Object.entries(obj)
		.map(([key, value]) => key + '=' + value)
		.join(',');

export let hasWindow = false;

export const popout = ({
	images,
	pdf,
	pdfOptions,
	index,
	syncImageIndex,
	title,
	loop,
	detachedShowZoom,
	onDetach,
	onClose,
}) => {
	const pout = window.open(
		undefined,
		'czimgviewer',
		toFeatures({
			height: 700,
			width: 800,
		}),
	);
	render(
		html`<style>
				html {
					background: #000;
				}
			</style>
			<cosmoz-image-viewer
				fullscreen
				.images="${images}"
				.pdf="${pdf}"
				.pdfOptions="${pdfOptions}"
				.currentImageIndex=${index}
				@current-image-index-changed=${syncImageIndex}
				show-nav
				?show-zoom=${detachedShowZoom}
				show-close
				?loop=${loop}
				@close=${() => pout.close()}
			></cosmoz-image-viewer>`,
		pout.document.body,
	);
	pout._onClose?.();
	onDetach();
	hasWindow = true;
	pout._onClose = onClose;
	pout.addEventListener('beforeunload', onClose);
	pout.addEventListener('beforeunload', () => (hasWindow = false));
	pout.document.title = title ?? _('Cosmoz image viewer');
};
