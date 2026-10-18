import { invoke } from '@neovici/cosmoz-utils/function';

export const fit = (rect, bounds) => {
		const rectRatio = rect.width / rect.height,
			boundsRatio = bounds.width / bounds.height;

		return rectRatio > boundsRatio
			? {
					width: bounds.width,
					height: rect.height * (bounds.width / rect.width),
				}
			: {
					width: rect.width * (bounds.height / rect.height),
					height: bounds.height,
				};
	},
	create = async (urls, credentials) => {
		const { jsPDF } = await import('jspdf/dist/jspdf.es.js');
		const pdf = new jsPDF({ compress: true }); // eslint-disable-line new-cap
		let count = 0;
		for (const source of urls) {
			const url = await invoke(source);
			const response = await fetch(url, {
				credentials: credentials ? 'include' : 'omit',
			});
			if (!response.ok) continue;
			const data = new Uint8Array(await response.arrayBuffer());
			const padding = 2;
			const { pageSize } = pdf.internal;
			const { width, height } = fit(pdf.getImageProperties(data), {
				width: pageSize.getWidth() - padding * 2,
				height: pageSize.getHeight() - padding * 2,
			});
			if (count > 0) pdf.addPage();
			pdf.addImage(
				data,
				url.split('.').pop().toUpperCase(),
				padding,
				padding,
				width,
				height,
			);
			count++;
		}
		return count > 0 ? pdf.output('blob') : undefined;
	},
	downloadBlob = (blob, filename) => {
		const url = URL.createObjectURL(blob),
			a = document.body.appendChild(document.createElement('a'));
		a.href = url;
		a.download = `${filename}.pdf`;
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	},
	download = async (urls, filename, credentials) => {
		const blob = await create(urls, credentials);
		if (blob) {
			downloadBlob(blob, filename);
			return blob;
		}
	},
	/**
	 * Download a PDF directly from a URL, without re-encoding.
	 * Used when the source is already a PDF (via the `pdf` property).
	 * @param {string} url - The PDF URL to download
	 * @param {string} filename - The download filename (without .pdf extension)
	 * @param {object} [options] - Options matching pdfjs getDocument format (httpHeaders, withCredentials)
	 */
	downloadUrl = async (url, filename, options = {}) => {
		const { httpHeaders, withCredentials = true } = options,
			response = await fetch(url, {
				credentials: withCredentials ? 'include' : 'omit',
				headers: httpHeaders,
			});
		if (!response.ok) return;
		const blob = await response.blob();
		downloadBlob(blob, filename);
		return blob;
	};
