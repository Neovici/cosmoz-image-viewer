/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.{js,ts,mdx}'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: true,
		defaultName: 'Docs',
	},
	staticDirs: ['../stories/images'],
	async viteFinal(config) {
		return config;
	},
};

export default config;
