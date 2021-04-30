const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "docs"),
		assetModuleFilename: "assets/[name].[contenthash][ext]",
		clean: true,
	},
	devtool: "eval-source-map",
	optimization: {
		moduleIds: "deterministic",
		minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
		runtimeChunk: { name: "manifest" },
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
		new BundleAnalyzerPlugin(),
		new GenerateSW({ clientsClaim: true, skipWaiting: true }),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},
});
