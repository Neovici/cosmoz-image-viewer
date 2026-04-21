import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-slider';
import '@neovici/cosmoz-utils/elements/cz-spinner';
import './lib/haunted-pan-zoom';

import { component } from '@pionjs/pion';
import { styleSheet } from './cosmoz-image-viewer.style';
import { useCosmozImageViewer } from './lib/hooks/use-cosmoz-image-viewer';
import { renderCosmozImageViewer } from './lib/render-viewer';

const CosmozImageViewer = (host) =>
	renderCosmozImageViewer(useCosmozImageViewer(host));

customElements.define(
	'cosmoz-image-viewer',
	component(CosmozImageViewer, {
		observedAttributes: [
			'download-file-name',
			'pdf',
			'show-close',
			'show-detach',
			'show-fullscreen',
			'show-nav',
			'show-page-number',
			'show-zoom',
			'detached-show-zoom',
			'loop',
			'title',
		],
		styleSheets: [styleSheet],
	}),
);