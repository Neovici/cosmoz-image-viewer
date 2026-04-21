import { _ } from '@neovici/cosmoz-i18next';

let entryUrl;
const getEntryUrl = async () =>
	(entryUrl ??= (await import('./popout-entry.js')).url);

const toFeatures = (obj) =>
	Object.entries(obj)
		.map(([key, value]) => key + '=' + value)
		.join(',');

let poutRef = null;

export const hasWindow = () => poutRef != null && !poutRef.closed;

const openPopupHtml = (
	pout,
	{ entryUrl, state, sync, title, onDetach, onClose },
) => {
	pout.__popoutState = state;
	pout.__popoutSync = sync;
	pout.__popoutReady = onDetach;
	pout._onClose = onClose;

	const doc = pout.document;
	doc.open();
	doc.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${title ?? _('Cosmoz image viewer')}</title>
</head>
<body>
	<script type="module" src="${entryUrl}"></script>
</body>
</html>`);
	doc.close();

	poutRef = pout;
	pout.addEventListener('beforeunload', () => pout._onClose?.());
	pout.addEventListener('beforeunload', () => (poutRef = null));
};

export const popout = async ({
	source,
	fileIndex,
	index,
	syncImageIndex,
	syncFileIndex,
	title,
	loop,
	detachedShowZoom,
	onDetach,
	onClose,
}) => {
	const pout = window.open(
		undefined,
		'czimgviewer',
		toFeatures({
			height: 700,
			width: 800,
		}),
	);

	const pdfWorkerSrc =
		globalThis['pdfjs-dist/build/pdf']?.GlobalWorkerOptions?.workerSrc ??
		globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc;

	const state = {
		source,
		fileIndex,
		index,
		detachedShowZoom,
		loop,
		title,
		pdfWorkerSrc,
	};
	const sync = {
		imageIndex: (value) => syncImageIndex({ detail: { value } }),
		fileIndex: (value) => syncFileIndex({ detail: { value } }),
	};

	if (hasWindow() && pout.__popoutUpdate) {
		pout._onClose?.();
		pout.__popoutUpdate(state);
		pout.__popoutSync = sync;
		pout._onClose = onClose;
		onDetach();
		return;
	}

	const entryUrl = await getEntryUrl();
	openPopupHtml(pout, { entryUrl, state, sync, title, onDetach, onClose });
};