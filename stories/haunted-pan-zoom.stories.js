import { html } from 'lit-html';
import '../cosmoz-image-viewer.js';

export default {
	title: 'Pan Zoom',
	component: 'haunted-pan-zoom',
};
const Template = ({ disabled, height, zoomStiffness, panStiffness }) => html`
	<haunted-pan-zoom
		src="a_size.png"
		style="height: ${height}px;"
		?disabled=${disabled}
		.zoomStiffness=${zoomStiffness}
		.panStiffness=${panStiffness}
	>
	</haunted-pan-zoom>
`;

export const PanZoom = Template.bind({});
PanZoom.args = {
	disabled: false,
	height: 400,
	zoomStiffness: 0.3,
	panStiffness: 1,
};
