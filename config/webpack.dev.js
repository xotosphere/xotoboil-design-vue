/* eslint-disable @typescript-eslint/typedef */

const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const path = require("path");

const devConfig = {
	entry: path.resolve(process.cwd(), "src/index.ts"),

	mode: "development",

	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html",
		},
		liveReload: true,
	},
};

module.exports = merge(commonConfig, devConfig);
