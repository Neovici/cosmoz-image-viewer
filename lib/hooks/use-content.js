import { useEffect, useState } from '@pionjs/pion';

const empty = [];

/**
 * Load content (images or PDF pages) for a file.
 * Returns { images, loading } with unified loading state.
 *
 * @param {object|undefined} file - The file object
 * @param {string} file.pdf - Optional PDF URL
 * @param {object} file.pdfOptions - Optional PDF.js options
 * @param {Array} file.images - Optional array of image URLs
 * @returns {{ images: Array, loading: boolean }}
 */
export const useContent = (file) => {
	const [content, setContent] = useState({
		images: empty,
		loading: false,
		error: undefined,
	});

	useEffect(() => {
		if (!file) {
			setContent({ images: empty, loading: false, error: undefined });
			return;
		}

		const pdfUrl = file.pdf;
		const rawImages = file.images ?? empty;

		if (!pdfUrl) {
			setContent({ images: rawImages, loading: false, error: undefined });
			return;
		}

		setContent({ images: empty, loading: true, error: undefined });

		let cancelled = false;

		import('../pdf-loader')
			.then(({ loadPdfThunks }) => loadPdfThunks(pdfUrl, file.pdfOptions))
			.then((thunks) => {
				if (cancelled) return;
				setContent({ images: thunks, loading: false, error: undefined });
			})
			.catch((err) => {
				if (cancelled) return;
				setContent({ images: empty, loading: false, error: err });
			});

		return () => {
			cancelled = true;
		};
	}, [file]);

	return content;
};