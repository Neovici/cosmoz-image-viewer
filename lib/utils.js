/**
 * Calculates a value that fits in the given bounds.
 * @param  {Number} val the value
 * @param  {Number} min the low bound
 * @param  {Number} max the high bound
 * @return {Number}     the bounded value
 */
export const getBounded = (val, min, max) => Math.max(min, Math.min(max, val));

/**
 * Calculates the amount needed to scale an image so it fits inside a container.
 * @param  {Number} iw image width
 * @param  {Number} ih image height
 * @param  {Number} cw container width
 * @param  {Number} ch container height
 * @return {Number}    amount to scale
 */
export const getFitScale = (iw, ih, cw, ch) => cw / ch < iw / ih ? cw / iw : ch / ih;

/**
 * Calculates the amount needed to scale an image so it covers a container.
 * @param  {Number} iw image width
 * @param  {Number} ih image height
 * @param  {Number} cw container width
 * @param  {Number} ch container height
 * @return {Number}    amount to scale
 */
export const getCoverScale = (iw, ih, cw, ch) => cw / ch > iw / ih ? cw / iw : ch / ih;

/**
 * Given an array of [x,y] points, it calculates the center point of those points.
 * @param  {Array[]}  arr the points
 * @return {Number[]}     the center points [x, y]
 */
export const center = arr => {
	const sum = arr.reduce((acc, i) => [acc[0] + i[0], acc[1] + i[1]], [0, 0]);

	return sum.map(s => s / arr.length);
};

/**
 * Calculates the bounding area of an image inside a container, so that the
 * image cannot be dragged outside of the container area.
 *
 * @param  {Number} iw   image width
 * @param  {Number} ih   image height
 * @param  {Number} cw   container width
 * @param  {Number} ch   container height
 * @param  {Number} zoom zoom level
 * @return {Object}      the x and y bounds
 */
export const calculateBounds = (iw, ih, cw, ch, zoom) => {
	const fitScale = getFitScale(iw, ih, cw, ch),
		scale = fitScale * zoom,
		siw = iw * scale, // scaled image width
		sih = ih * scale, // scaled image height-
		minX = siw < cw ? (-cw + siw) / 2 : (cw - siw) / 2,
		maxX = siw < cw ? (cw - siw) / 2 : (-cw + siw) / 2,
		minY = sih < ch ? (-ch + sih) / 2 : (ch - sih) / 2,
		maxY = sih < ch ? (ch - sih) / 2 : (-ch + sih) / 2;
	return {x: [minX, maxX], y: [minY, maxY]};
};
