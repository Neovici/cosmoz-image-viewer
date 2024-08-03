/** @type { import('@storybook/web-components-vite').StorybookConfig } */
export default {
	stories: ['../stories/**/*.stories.{js,ts,mdx}'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	framework: '@storybook/web-components-vite',
	staticDirs: ['../stories/images'],
};
