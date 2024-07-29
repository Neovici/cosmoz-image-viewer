/* eslint-disable import/group-exports */
import { html } from 'lit-html';
import '../cosmoz-image-viewer.js';
import { images } from './data.js';

export default {
	title: 'Cosmoz Image Viewer',
	component: 'cosmoz-image-viewer',
};

export const Basic = ({
	showDetach,
	showFullscreen,
	showPageNumber,
	showNav,
	loop,
	showZoom,
	detachedShowZoom,
}) => html`
	<cosmoz-image-viewer
		?show-detach=${showDetach}
		?show-fullscreen=${showFullscreen}
		?show-page-number=${showPageNumber}
		?show-nav=${showNav}
		?loop=${loop}
		?show-zoom=${showZoom}
		?detached-show-zoom=${detachedShowZoom}
		.images=${images}
	></cosmoz-image-viewer>

	<cosmoz-image-viewer
		?show-detach=${showDetach}
		?show-fullscreen=${showFullscreen}
		?show-page-number=${showPageNumber}
		?show-nav=${showNav}
		?loop=${loop}
		?show-zoom=${showZoom}
		?detached-show-zoom=${detachedShowZoom}
		.images=${[
			'cosmos1.jpg',
			'cosmos2.jpg',
		]}
	></cosmoz-image-viewer>
`;

Basic.args = {
	showDetach: true,
	showFullscreen: true,
	showPageNumber: true,
	showNav: true,
	loop: true,
	showZoom: false,
	detachedShowZoom: false,
};

export const Issue21 = () => {
	const images1 = [
			'stockholm.jpg',
			'strasbourg.jpg',
		],
		images2 = [
			'cosmos1.jpg',
			'cosmos2.jpg',
		];
	return html`
		<cosmoz-image-viewer
			show-detach
			show-fullscreen
			show-page-number
			show-nav
			loop
			.images=${images1}
		></cosmoz-image-viewer>
		<button
			@click=${(e) => {
				const ciw = e.target.previousElementSibling,
					newImages = ciw.images === images1 ? images2 : images1;
				ciw.images = newImages;
				return false;
			}}
		>
			Switch images
		</button>
	`;
};
