import { html } from 'lit-html';
import '../cosmoz-image-viewer.js';

export default {
	title: 'Pan Zoom',
	component: 'haunted-pan-zoom',
};
const Template = ({ disabled, height, zoomStiffness }) => html`
	<haunted-pan-zoom
		src="stories/images/a_size.png"
		style="${height};"
		?disabled=${disabled}
		.zoomStiffness=${zoomStiffness}
	>
	</haunted-pan-zoom>
`;

export const PanZoom = Template.bind({});
PanZoom.args = {
	disabled: false,
	height: 'height: 70vh;',
	zoomStiffness: 0.3,
};

export const PanZoomWithOverlay = ({ disabled, height, zoomStiffness }) => html`
	<haunted-pan-zoom
		src="stories/images/a_size.png"
		style="${height};"
		?disabled=${disabled}
		.zoomStiffness=${zoomStiffness}
	>
		<div style="color: white; font-size: 14px;">
			<div
				style="position: absolute; top: 15%; left: 15%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
			>
				Overlay text — select me! Drag to pan.
			</div>
		</div>
	</haunted-pan-zoom>
`;

PanZoomWithOverlay.args = {
	disabled: false,
	height: 'height: 70vh;',
	zoomStiffness: 0.3,
};
