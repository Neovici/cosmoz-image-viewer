import { html } from 'lit-html';
import {
	withKnobs, withWebComponentsKnobs, button
} from '@open-wc/demoing-storybook';
import '../cosmoz-image-viewer.js';
import { images } from './data.js';

const story = {
		title: 'Cosmoz Image Viewer',
		component: 'cosmoz-image-viewer',
		decorators: [withKnobs, withWebComponentsKnobs]
	},
	basic = () => html`
		<cosmoz-image-viewer
			.images="${ images }"
			show-detach
			show-fullscreen
			show-page-number
			show-nav
			loop
		></cosmoz-image-viewer>	
	`,
	issue21 = () => {
		const
			images1 = [
				'stories/images/stockholm.jpg',
				'stories/images/strasbourg.jpg'
			],
			images2 = [
				'stories/images/cosmos1.jpg',
				'stories/images/cosmos2.jpg'
			];

		button('Switch images', () => {
			const ciw = document.querySelector(story.component),
				newImages = ciw.images === images1 ? images2 : images1;
			ciw.images = newImages;
			return false;
		});

		return html`
			<cosmoz-image-viewer
				.images=${ images1 }
				show-detach
				show-fullscreen
				show-page-number
				show-nav
				loop 
			></cosmoz-image-viewer>
		`;
	};

export {
	story as default,
	basic,
	issue21
};
