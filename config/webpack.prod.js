/* eslint-disable @typescript-eslint/typedef */
const {merge} = require("webpack-merge");
const path = require("path");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common");

const prodConfig = {
	mode: "production",

	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "[name].js",
	},

	plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(commonConfig, prodConfig);
