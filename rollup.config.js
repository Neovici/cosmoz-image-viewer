/* eslint-env node */
import browserslist from 'browserslist';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const extensions = ['.js'];

export default {
	// define all views, along with the main init script, as entry points, so
	// code-splitting can generate the correct chunks
	input: 'lib/haunted-pan-zoom.js',
	treeshake: true,
	output: {
		dir: 'dist',
		format: 'esm',
		sourcemap: true
	},
	plugins: [
		// resolve bare import specifiers
		resolve({
			extensions,
			mainFields: ['module', 'jsnext:main', 'main']
		}),

		// run code through babel
		babel({
			extensions,
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				'@babel/plugin-syntax-import-meta',
				// rollup rewrites import.meta.url, but makes them point to the file location after bundling
				// we want the location before bundling
				'bundled-import-meta'
			].filter(_ => !!_),

			presets: [
				[
					'@babel/preset-env',
					{
						targets: browserslist([
							'last 2 Chrome major versions',
							'last 2 ChromeAndroid major versions',
							'last 2 Firefox major versions',
							'last 2 Safari major versions',
							'last 2 iOS major versions',
							'last 2 Edge major versions'
						]),
						useBuiltIns: false,
						modules: false
					}
				]
			]
		})
	]
};
