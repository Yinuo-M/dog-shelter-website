const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		common: "./common.js",
		list: "./pages/list/list.js",
		profile: "./pages/profile/profile.js",
	},
	target: "web",
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{ test: /\.html$/, use: ["html-loader"] },
			{ test: /\.(jpe?g|gif|svg|png|ico)$/, type: "asset/resource" },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
			chunks: ["common"],
			filename: "index.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/list/list.html",
			chunks: ["common", "list"],
			filename: "list.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Andy-profile.html",
			chunks: ["common", "profile"],
			filename: "Andy-profile.html",
		}),
	],
};
