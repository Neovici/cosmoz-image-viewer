import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	{
		ignores: ['coverage/', 'storybook-static/', 'dist/'],
	},
	...cfg,
	{
		rules: {
			'max-lines-per-function': 0,
		},
	},
];
