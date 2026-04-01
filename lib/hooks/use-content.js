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
	const [content, setContent] = useState({ images: empty, loading: false });

	useEffect(() => {
		if (!attachment) {
			setContent({ images: empty, loading: false });
			return;
		}

		const pdfUrl = attachment.pdf;
		const rawImages = attachment.images ?? empty;

		// No PDF, images are already resolved
		if (!pdfUrl) {
			setContent({ images: rawImages, loading: false });
			return;
		}

		// PDF loading - set loading first
		setContent({ images: empty, loading: true });

		let cancelled = false;

		import('../pdf-loader')
			.then(({ loadPdfThunks }) => loadPdfThunks(pdfUrl, attachment.pdfOptions))
			.then((thunks) => {
				if (cancelled) return;
				setContent({ images: thunks, loading: false });
			})
			.catch(() => {
				if (cancelled) return;
				setContent({ images: empty, loading: false });
			});

		return () => {
			cancelled = true;
		};
	}, [attachment]);

	return content;
};