/* global jsPDF */
import 'jspdf';

export const fit = (rect, bounds) => {
	const rectRatio = rect.width / rect.height,
		boundsRatio = bounds.width / bounds.height;

	return rectRatio > boundsRatio
		? {
			width: bounds.width,
			height: rect.height * (bounds.width / rect.width)
		}
		: {
			width: rect.height * (bounds.width / rect.width),
			height: bounds.height
		};
};

export const create = async (urls, credentials) => {
	const options = {
			credentials: credentials ? 'include' : 'omit'
		},
		responses = (await Promise.all(urls.map(
			async url => {
				const response = await fetch(url, options);
				return response.ok
					? {
						url,
						data: new Uint8Array(await response.arrayBuffer())
					}
					: undefined;
			}
		))).filter(Boolean),
		pdf = new jsPDF(); // eslint-disable-line new-cap

	responses.forEach(({
		url, data
	}, i) => {
		const
			padding = 2, //in mm
			{ internal: { pageSize }} = pdf,
			{
				width, height
			} = fit(pdf.getImageProperties(data), {
				width: pageSize.getWidth() - padding * 2,
				height: pageSize.getHeight() - padding * 2
			});
		if (i > 0) {
			pdf.addPage();
		}
		pdf.addImage(data, url.split('.').pop().toUpperCase(), padding, padding, width, height);

	});
	return pdf.output('blob');
};

export const downloadBlob = (blob, filename) => {
	const url = URL.createObjectURL(blob),
		a = document.body.appendChild(document.createElement('a'));
	a.href = url;
	a.download = `${filename}.pdf`;
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
};

export const download = async (urls, filename, credentials) => {
	const blob = await create(urls, credentials);
	await downloadBlob(blob, filename);
	return blob;
};