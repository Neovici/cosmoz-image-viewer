/* eslint-disable import/group-exports */
import { html } from 'lit-html';
import '../cosmoz-image-viewer.js';
import { images } from './data.js';

export default {
	title: 'Cosmoz Image Viewer',
	component: 'cosmoz-image-viewer',
};

export const Basic = () => html`
	<cosmoz-image-viewer
		show-detach
		show-fullscreen
		show-page-number
		show-nav
		loop
		.images=${images}
	></cosmoz-image-viewer>
`;

export const Issue21 = () => {
	const images1 = [
			'stories/images/stockholm.jpg',
			'stories/images/strasbourg.jpg',
		],
		images2 = ['stories/images/cosmos1.jpg', 'stories/images/cosmos2.jpg'];
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
