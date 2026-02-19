/**
 * PDF loading utility for cosmoz-image-viewer.
 *
 * Uses pdfjs-dist (provided by the consumer as a peer dependency) to load
 * a PDF document and render its pages to data URLs that can be displayed
 * as regular images.
 *
 * The consumer is responsible for configuring the pdfjs worker
 * (GlobalWorkerOptions.workerSrc) before using the pdf feature.
 */

const getPdfjs = async () => {
	// eslint-disable-next-line import/no-unresolved -- optional peer dependency provided by the consumer
	await import('pdfjs-dist');
	const pdfjsLib = globalThis['pdfjs-dist/build/pdf'] ?? globalThis['pdfjsLib'];
	if (!pdfjsLib) {
		throw new Error(
			'cosmoz-image-viewer: pdfjs-dist is required for PDF support. ' +
				'Install it as a dependency and configure the worker.',
		);
	}
	return pdfjsLib;
};

const renderPage = async (pdfDocument, pageIndex) => {
	const page = await pdfDocument.getPage(pageIndex + 1),
		viewport = page.getViewport({ scale: 1 }),
		scale = Math.max(800, globalThis.innerWidth ?? 800) / viewport.width,
		scaledViewport = page.getViewport({ scale }),
		canvas = document.createElement('canvas'),
		context = canvas.getContext('2d');

	canvas.width = Math.floor(scaledViewport.width);
	canvas.height = Math.floor(scaledViewport.height);

	await page.render({
		canvasContext: context,
		viewport: scaledViewport,
	}).promise;

	return canvas.toDataURL();
};

/**
 * Load a PDF document and return an object with the page count
 * and a function to render individual pages to data URLs.
 *
 * @param {string} url - The URL of the PDF document
 * @param {object} [options] - Options passed to pdfjs getDocument
 * @returns {Promise<{ numPages: number, getPageDataUrl: (index: number) => Promise<string> }>}
 */
export const loadPdf = async (url, options = {}) => {
	const pdfjsLib = await getPdfjs(),
		pdfDocument = await pdfjsLib.getDocument({ url, ...options }).promise;

	return {
		numPages: pdfDocument.numPages,
		getPageDataUrl: (index) => renderPage(pdfDocument, index),
	};
};

/**
 * Load a PDF and return an array of data URL promises, one per page.
 * The first page starts rendering immediately; remaining pages are
 * returned as lazy promises so the viewer can show the first page fast.
 *
 * @param {string} url - The URL of the PDF document
 * @param {object} [options] - Options passed to pdfjs getDocument
 * @returns {Promise<string[]>} Array of data URL promises
 */
export const loadPdfPages = async (url, options = {}) => {
	const { numPages, getPageDataUrl } = await loadPdf(url, options);
	return Array.from({ length: numPages }, (_, i) => getPageDataUrl(i));
};
