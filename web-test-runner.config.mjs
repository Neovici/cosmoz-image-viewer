import config from '@neovici/cfg/web/test-runner.mjs';

export default {
	...config,
	concurrency: 1,
	testFramework: {
		...config.testFramework,
		config: {
			...config.testFramework?.config,
			timeout: 30000,
		},
	},
};