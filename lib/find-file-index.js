/**
 * Find the next non-empty file index in a given direction.
 * @param {Array} files
 * @param {number} fromIndex - current file index
 * @param {number} direction - +1 or -1
 * @param {boolean} loop
 * @returns {number|null}
 */
export const findFileIndex = (files, fromIndex, direction, loop) => {
	const len = files.length;
	let i = 1;
	while (i <= len) {
		const idx = (fromIndex + i * direction + len) % len;
		if (!loop) {
			if (direction > 0 && idx <= fromIndex) return null;
			if (direction < 0 && idx >= fromIndex) return null;
		}
		const file = files[idx];
		if (file.images?.length || file.pdf) return idx;
		i++;
	}
	return null;
};