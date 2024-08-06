export const images = [
	'stockholm.jpg',
	'this-is-a-loading-error.jpg',
	() => 'a_size.png',
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve('strasbourg.jpg'), 500),
		),
];
