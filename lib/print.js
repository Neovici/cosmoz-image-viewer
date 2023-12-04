import { html, render } from 'lit-html';

const waitFor = (condition) =>
	new Promise((resolve) => {
		const t = setInterval(() => {
			if (condition()) {
				resolve();
				clearInterval(t);
			}
		}, 100);
	});

export const print = ({ images }) => {
	const pout = window.open(undefined, 'czimgviewerprint');
	render(
		html`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}</style
			>${images.map((src) => html`<img src="${src}" />`)}`,
		pout.document.body,
	);

	waitFor(() =>
		Array.from(pout.document.querySelectorAll('img')).every(
			(img) => img.complete,
		),
	)
		.then(() => pout.print())
		.then(() => pout.close());
};
