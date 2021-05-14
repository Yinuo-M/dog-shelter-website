const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		common: "./common.js",
		home: "./index.js",
		list: "./pages/list/list.js",
		profile: "./pages/profile/profile.js",
		form: "./pages/form/form.js",
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
			chunks: ["common", "home"],
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
		new HTMLWebpackPlugin({
			template: "./pages/form/form.html",
			chunks: ["common", "form"],
			filename: "form.html",
		}),
	],
};
