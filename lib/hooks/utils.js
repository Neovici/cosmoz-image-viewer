export const getBounded = (val, min, max) => Math.max(min, Math.min(max, val));

export const getFitScale = (iw, ih, cw, ch) => cw / ch < iw / ih ? cw / iw : ch / ih;

export const center = arr => {
	const sum = arr.reduce((acc, i) => [acc[0] + i[0], acc[1] + i[1]], [0, 0]);

	return sum.map(s => s / arr.length);
};
