const path = require("path");

module.exports = {
	stories: ["../src/stories/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|ts)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "storybook-addon-sass-postcss",
			options: {
				sassLoaderOptions: {
					implementation: require("sass"),
				},
				rule: {
					test: /\.(scss|sass)$/i,
				},
			},
		},
	],
	framework: "@storybook/vue3",
	core: {
		builder: "@storybook/builder-webpack5",
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "../src/"),
		};

		config.module.rules = config.module.rules.filter((rule) => !rule.test || !rule.test.source.includes("png"));

		config.module.rules.push({test: /\.(png|jpe?g|gif|webp)(\?.*)?$/, loader: "url-loader", options: {limit: Infinity, esModule: false}});
		return config;
	},
	staticDirs: ["../public"],
};
