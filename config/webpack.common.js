/* eslint-disable @typescript-eslint/typedef */
const {VueLoaderPlugin} = require("vue-loader");
const prefixer = require("postcss-prefix-selector");

module.exports = {
	resolve: {
		extensions: [".js", ".tsx", ".jsx", ".ts"],
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				loader: require.resolve("postcss-loader"),
				options: {
					postcssOptions: {
						plugins: [
							prefixer({
								prefix: "#single-spa-application\\:ui",
							}),
						],
					},
				},
			},
		],
	},

	plugins: [new VueLoaderPlugin()],

	output: {
		filename: "index.js",
		library: "@xotoboil-storybook-vue/ui",
		libraryTarget: "umd",
	},
	externals: {
		vue: "vue",
	},
};
