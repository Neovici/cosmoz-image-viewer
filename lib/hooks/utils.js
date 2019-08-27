export const linearMap = (val, A, B, a, b) => (val - A) * (b - a) / (B - A) + a;

export const getBounded = (val, min, max) => Math.max(min, Math.min(max, val));

export const getFitScale = (iw = 100, ih = 100, cw = 1, ch = 1) => cw / ch < iw / ih ? cw / iw : ch / ih;

export const noop = () => {}; // eslint-disable-line no-empty-function

export const center = arr => {
	const sum = arr.reduce((acc, i) => [acc[0] + i[0], acc[1] + i[1]], [0, 0]);

	return sum.map(s => s / arr.length);
};
