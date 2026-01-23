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
		const options = { credentials: credentials ? 'include' : 'omit' },
			[{ jsPDF }, ...responses$] = await Promise.all([
				import('jspdf/dist/jspdf.es.js'),
				...urls.map(async (_url) => {
					const url = await Promise.resolve(invoke(_url));
					const response = await fetch(url, options);
					return response.ok
						? {
								url,
								data: new Uint8Array(await response.arrayBuffer()),
						  }
						: undefined;
				}),
			]),
			responses = responses$.filter(Boolean);

		if (responses.length < 1) {
			return;
		}

		const pdf = new jsPDF(); // eslint-disable-line new-cap

		responses.filter(Boolean).forEach(({ url, data }, i) => {
			const padding = 2, //in mm
				{
					internal: { pageSize },
				} = pdf,
				{ width, height } = fit(pdf.getImageProperties(data), {
					width: pageSize.getWidth() - padding * 2,
					height: pageSize.getHeight() - padding * 2,
				});
			if (i > 0) {
				pdf.addPage();
			}
			pdf.addImage(
				data,
				url.split('.').pop().toUpperCase(),
				padding,
				padding,
				width,
				height,
			);
		});
		return pdf.output('blob');
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
	};
