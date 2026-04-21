const empty = [];

/**
 * Convert old API (images/pdf props) to new source-based API.
 * Supports backwards compatibility for tests and existing usage.
 */
export const toSource = ({ source, images, pdf, pdfOptions }) => {
	if (source != null) {
		return source;
	}
	if (images != null || pdf != null) {
		return [
			{
				images: images ?? empty,
				pdf,
				pdfOptions,
			},
		];
	}
	return empty;
};