const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[name][ext]",
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
});
