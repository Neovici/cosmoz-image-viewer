export default {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: [{ from: '../stories/images', to: 'stories/images' }],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	addons: ['@storybook/addon-docs'],
	docs: {
		autodocs: 'tag',
	},
};
