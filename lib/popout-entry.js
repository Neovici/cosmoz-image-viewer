export const url = import.meta.url;

import { html, render } from 'lit-html';
import '../cosmoz-image-viewer.js';

// Load design tokens CSS in the popup document.
// Dynamic import with CSS module assertion — degrades gracefully if the bundler
// or runtime doesn't support `with { type: 'css' }`.
try {
	const { default: tokens } = await import('@neovici/cosmoz-tokens', {
		with: { type: 'css' },
	});
	document.adoptedStyleSheets = [...document.adoptedStyleSheets, tokens];
} catch {
	// tokens not available — popup works without design tokens styling
}

const state = window.__popoutState;
if (state) {
	try {
		const { GlobalWorkerOptions } = await import('pdfjs-dist');
		if (state.pdfWorkerSrc) {
			GlobalWorkerOptions.workerSrc = state.pdfWorkerSrc;
		}
	} catch {
		// pdfjs-dist is an optional peer dependency
	}

	const renderViewer = (state) =>
		html`<cosmoz-image-viewer
			fullscreen
			.source="${state.source}"
			.currentFileIndex=${state.fileIndex}
			.currentImageIndex=${state.index}
			@current-image-index-changed=${(e) =>
				window.__popoutSync.imageIndex(e.detail.value)}
			@current-file-index-changed=${(e) =>
				window.__popoutSync.fileIndex(e.detail.value)}
			show-nav
			?show-zoom=${state.detachedShowZoom}
			show-close
			?loop=${state.loop}
			@close=${() => window.close()}
		></cosmoz-image-viewer>`;

	render(renderViewer(state), document.body);

	window.__popoutUpdate = (newState) => {
		Object.assign(state, newState);
		render(renderViewer(state), document.body);
	};

	window.__popoutReady?.();
}