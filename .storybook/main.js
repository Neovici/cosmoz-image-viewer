import rollupCommonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.{js,ts,mdx}'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
	framework: {
		name: '@storybook/web-components-vite',
	},
	docs: {
		autodocs: true,
	},
	core: {
		disableTelemetry: true,
	},
	/* Try to make the build parse TS files */
	async rollupFinal(config) {
		// add extra configuration for rollup
		// e.g. a new plugin
		config.plugins.push(rollupCommonjs({}));
		config.plugins.push(esbuild({}));

		return config;
	},
	staticDirs: ['../stories/images'],
};

export default config;
