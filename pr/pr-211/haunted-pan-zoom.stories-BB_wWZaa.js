import { x } from './directive-helpers-DTirirN5.js';
import './cosmoz-image-viewer-CNWp8KHt.js';

var hauntedPanZoom_stories = {
  title: "Pan Zoom",
  component: "haunted-pan-zoom"
};
const Template = ({ disabled, height, zoomStiffness, panStiffness }) => x`
	<haunted-pan-zoom
		src="a_size.png"
		style="height: ${height}px;"
		?disabled=${disabled}
		.zoomStiffness=${zoomStiffness}
		.panStiffness=${panStiffness}
	>
	</haunted-pan-zoom>
`;
const PanZoom = Template.bind({});
PanZoom.args = {
  disabled: false,
  height: 400,
  zoomStiffness: 0.3,
  panStiffness: 1
};
const __namedExportsOrder = ["PanZoom"];

export { PanZoom, __namedExportsOrder, hauntedPanZoom_stories as default };
