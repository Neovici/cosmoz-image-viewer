import { x } from './directive-helpers-DTirirN5.js';
import './cosmoz-image-viewer-CNWp8KHt.js';

const images = [
  "stockholm.jpg",
  "this-is-a-loading-error.jpg",
  () => "a_size.png",
  () => new Promise(
    (resolve) => setTimeout(() => resolve("strasbourg.jpg"), 500)
  )
];

var cosmozImageViewer_stories = {
  title: "Cosmoz Image Viewer",
  component: "cosmoz-image-viewer"
};
const Basic = ({
  showDetach,
  showFullscreen,
  showPageNumber,
  showNav,
  loop,
  showZoom,
  detachedShowZoom
}) => x`
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
		.images=${["cosmos1.jpg", "cosmos2.jpg"]}
	></cosmoz-image-viewer>
`;
Basic.args = {
  showDetach: true,
  showFullscreen: true,
  showPageNumber: true,
  showNav: true,
  loop: true,
  showZoom: false,
  detachedShowZoom: false
};
const Issue21 = () => {
  const images1 = ["stockholm.jpg", "strasbourg.jpg"], images2 = ["cosmos1.jpg", "cosmos2.jpg"];
  return x`
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
    const ciw = e.target.previousElementSibling, newImages = ciw.images === images1 ? images2 : images1;
    ciw.images = newImages;
    return false;
  }}
		>
			Switch images
		</button>
	`;
};
const __namedExportsOrder = ["Basic", "Issue21"];

export { Basic, Issue21, __namedExportsOrder, cosmozImageViewer_stories as default };
