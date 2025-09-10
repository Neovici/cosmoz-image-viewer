import { html } from 'lit-html';
import '../cosmoz-image-viewer.js';

export default {
	title: 'Pan Zoom',
	component: 'haunted-pan-zoom',
};
const Template = ({ disabled, height, zoomStiffness, panStiffness }) => html`
	<haunted-pan-zoom
		src="stories/images/a_size.png"
		style="${height};"
		?disabled=${disabled}
		.zoomStiffness=${zoomStiffness}
		.panStiffness=${panStiffness}
	>
	</haunted-pan-zoom>
`;

export const PanZoom = Template.bind({});
PanZoom.args = {
	disabled: false,
	height: 'height: 70vh;',
	zoomStiffness: 0.3,
	panStiffness: 1,
};
