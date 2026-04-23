import { html } from 'lit-html';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import '../cosmoz-image-viewer.js';
import {
	failingSource,
	lazySource,
	multipleFiles,
	pdfFile,
	singleFile,
} from './data.js';

GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).href;

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
		.source=${singleFile}
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

export const MultiFile = ({
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
		.source=${multipleFiles}
	></cosmoz-image-viewer>
`;

MultiFile.args = {
	showDetach: true,
	showFullscreen: true,
	showPageNumber: true,
	showNav: true,
	loop: true,
	showZoom: false,
	detachedShowZoom: false,
};

export const Pdf = ({
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
		.source=${pdfFile}
	></cosmoz-image-viewer>
`;

Pdf.args = {
	showDetach: true,
	showFullscreen: true,
	showPageNumber: true,
	showNav: true,
	loop: true,
	showZoom: false,
	detachedShowZoom: false,
};

export const Loading = () => html`
	<cosmoz-image-viewer
		show-detach
		show-fullscreen
		show-page-number
		show-nav
		loop
		.source=${lazySource}
	></cosmoz-image-viewer>
`;

export const Error = () => html`
	<cosmoz-image-viewer
		show-detach
		show-fullscreen
		show-page-number
		show-nav
		loop
		.source=${failingSource}
	></cosmoz-image-viewer>
`;

export const Issue21 = () => {
	const source1 = [
			{
				title: 'Set 1',
				images: [
					'stories/images/stockholm.jpg',
					'stories/images/strasbourg.jpg',
				],
			},
		],
		source2 = [
			{
				title: 'Set 2',
				images: [
					'stories/images/cosmos1.jpg',
					'stories/images/cosmos2.jpg',
				],
			},
		];
	return html`
		<cosmoz-image-viewer
			show-detach
			show-fullscreen
			show-page-number
			show-nav
			loop
			.source=${source1}
		></cosmoz-image-viewer>
		<button
			@click=${(e) => {
				const ciw = e.target.previousElementSibling,
					newSource = ciw.source === source1 ? source2 : source1;
				ciw.source = newSource;
				return false;
			}}
		>
			Switch source
		</button>
	`;
};