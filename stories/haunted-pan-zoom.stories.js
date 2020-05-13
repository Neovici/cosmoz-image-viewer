import { html } from 'lit-html';
import {
	withKnobs, boolean, number
} from '@open-wc/demoing-storybook';
import '../cosmoz-image-viewer.js';

const story = {
		title: 'Cosmoz Image Viewer',
		component: 'haunted-pan-zoom',
		decorators: [withKnobs]
	},
	haunted = () => {
		const disabled = boolean('Disabled', false),
			height = number('Height', 400),
			zoomStiffness = number('Zoom stiffness', 0.3),
			panStiffness = number('Pan stiffness', 1.0);
		return html`
            <haunted-pan-zoom src="stories/images/a_size.png"
                .disabled=${ disabled }
                style="height: ${ height }px;"
                .zoomStiffness=${ zoomStiffness }
                .panStiffness=${ panStiffness }>
            </haunted-pan-zoom>
        `;
	};

export {
	story as default,
	haunted
};
