import { useEffect, useState } from '@pionjs/pion';

const empty = [];

/**
 * Load content (images or PDF pages) for an attachment.
 * Returns { images, loading } with unified loading state.
 *
 * @param {object|undefined} attachment - The attachment object
 * @param {string} attachment.pdf - Optional PDF URL
 * @param {object} attachment.pdfOptions - Optional PDF.js options
 * @param {Array} attachment.images - Optional array of image URLs
 * @returns {{ images: Array, loading: boolean }}
 */
export const useContent = (attachment) => {
	const [content, setContent] = useState({
		images: empty,
		loading: false,
		error: undefined,
	});

	useEffect(() => {
		if (!attachment) {
			setContent({ images: empty, loading: false, error: undefined });
			return;
		}

		const pdfUrl = attachment.pdf;
		const rawImages = attachment.images ?? empty;

		if (!pdfUrl) {
			setContent({ images: rawImages, loading: false, error: undefined });
			return;
		}

		setContent({ images: empty, loading: true, error: undefined });

		let cancelled = false;

		import('../pdf-loader')
			.then(({ loadPdfThunks }) => loadPdfThunks(pdfUrl, attachment.pdfOptions))
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
	}, [attachment]);

	return content;
};
