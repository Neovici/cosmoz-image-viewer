export const images = [
	'stories/images/stockholm.jpg',
	'this-is-a-loading-error.jpg',
	() => 'stories/images/a_size.png',
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve('stories/images/strasbourg.jpg'), 500),
		),
];
