export const images = [
	'stories/images/stockholm.jpg',
	'this-is-a-loading-error.jpg',
	() => 'stories/images/a_size.png',
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve('stories/images/strasbourg.jpg'), 500),
		),
];

export const singleFile = [
	{
		title: 'Stockholm photos',
		images,
	},
];

export const multipleFiles = [
	{
		title: 'Stockholm photos',
		images: [
			'stories/images/stockholm.jpg',
			'stories/images/strasbourg.jpg',
		],
	},
	{
		title: 'Cosmos photos',
		images: [
			'stories/images/cosmos1.jpg',
			'stories/images/cosmos2.jpg',
		],
	},
];

export const pdfFile = [
	{
		title: 'Sample PDF',
		pdf: 'stories/images/sample.pdf',
	},
];

export const lazySource = () =>
	new Promise((resolve) =>
		setTimeout(() => resolve(multipleFiles), 1500),
	);

export const failingSource = () =>
	new Promise((_, reject) =>
		setTimeout(() => reject(new Error('Network error')), 1000),
	);