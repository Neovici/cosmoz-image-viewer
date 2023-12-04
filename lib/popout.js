import { html, render } from 'lit-html';
import { _ } from '@neovici/cosmoz-i18next';

const toFeatures = (obj) =>
	Object.entries(obj)
		.map(([key, value]) => key + '=' + value)
		.join(',');

export const popout = ({
	images,
	index,
	syncImageIndex,
	title,
	loop,
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
				.currentImageIndex=${index}
				@current-image-index-changed=${syncImageIndex}
				show-nav
				show-zoom
				show-close
				?loop=${loop}
				@close=${() => pout.close()}
			></cosmoz-image-viewer>`,
		pout.document.body,
	);
	pout.onClose?.();
	onDetach();
	pout.onClose = onClose;
	pout.addEventListener('beforeunload', onClose);
	pout.document.title = title ?? _('Cosmoz image viewer');
};
