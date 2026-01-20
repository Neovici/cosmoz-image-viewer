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
	{
		files: ['test/**/*.test.js'],
		rules: {
			'mocha/max-top-level-suites': 0,
		},
	},
	{
		files: ['lib/icons/**/*.js'],
		rules: {
			'max-len': 0,
		},
	},
];
