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
	// optional peer dependency provided by the consumer
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

const releasePage = (page, canvas) => {
	canvas.width = canvas.height = 0;
	page.cleanup();
};

const renderPage = async (pdfDocument, pageIndex, signal) => {
	signal?.throwIfAborted();
	const page = await pdfDocument.getPage(pageIndex + 1);
	signal?.throwIfAborted();
	const viewport = page.getViewport({ scale: 1 }),
		scale = Math.max(800, globalThis.innerWidth ?? 800) / viewport.width,
		scaledViewport = page.getViewport({ scale }),
		canvas = document.createElement('canvas'),
		context = canvas.getContext('2d');
	canvas.width = Math.floor(scaledViewport.width);
	canvas.height = Math.floor(scaledViewport.height);
	const task = page.render({
		canvasContext: context,
		viewport: scaledViewport,
		intent: 'print',
	});
	const cancel = () => task.cancel();
	signal?.addEventListener('abort', cancel, { once: true });
	try {
		await task.promise;
		signal?.throwIfAborted();
		return canvas.toDataURL();
	} finally {
		signal?.removeEventListener('abort', cancel);
		releasePage(page, canvas);
	}
};

/**
 * Load a PDF document and return an object with the page count
 * and a function to render individual pages to data URLs.
 *
 * @param {string} url - The URL of the PDF document
 * @param {object} [options] - Options passed to pdfjs getDocument
 * @param {AbortSignal} [signal] - Aborting destroys the loading task and document.
 * @returns {Promise<{ numPages: number, getPageDataUrl: (index: number, signal?: AbortSignal) => Promise<string>, destroy: () => Promise<void> }>}
 */
export const loadPdf = async (url, options = {}, signal) => {
	signal?.throwIfAborted();
	const pdfjsLib = await getPdfjs();
	signal?.throwIfAborted();
	const task = pdfjsLib.getDocument({ url, ...options });
	let disposal;
	let onAbort = null;
	const destroy = () => {
		signal?.removeEventListener('abort', onAbort);
		return (disposal ??= task.destroy());
	};
	onAbort = async () => {
		try {
			await destroy();
		} catch {
			// Load and render promises report cancellation to their callers.
		}
	};
	signal?.addEventListener('abort', onAbort, { once: true });
	try {
		const pdfDocument = await task.promise;
		signal?.throwIfAborted();
		return {
			numPages: pdfDocument.numPages,
			getPageDataUrl: (index, renderSignal) =>
				renderPage(pdfDocument, index, renderSignal),
			destroy,
		};
	} catch (error) {
		await destroy();
		throw error;
	}
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

/**
 * Load a PDF and return an array of thunks (functions), one per page.
 * Each thunk renders the page to a data URL only when called, enabling
 * lazy per-page rendering driven by the viewer's existing invoke/until
 * infrastructure.
 *
 * @param {string} url - The URL of the PDF document
 * @param {object} [options] - Options passed to pdfjs getDocument
 * @param {AbortSignal} [signal] - Aborting releases the document and cancels loading/rendering.
 * @returns {Promise<Array<(signal?: AbortSignal) => Promise<string>>>} Array of thunks
 */
export const loadPdfThunks = async (url, options = {}, signal) => {
	const { numPages, getPageDataUrl } = await loadPdf(url, options, signal);
	return Array.from(
		{ length: numPages },
		(_, i) => (renderSignal) => getPageDataUrl(i, renderSignal),
	);
};
