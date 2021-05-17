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
			template: "./pages/profile/Aki-profile.html",
			chunks: ["common", "profile"],
			filename: "Aki-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Sophie-profile.html",
			chunks: ["common", "profile"],
			filename: "Sophie-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Albert-profile.html",
			chunks: ["common", "profile"],
			filename: "Albert-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Caramel-profile.html",
			chunks: ["common", "profile"],
			filename: "Caramel-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Max-profile.html",
			chunks: ["common", "profile"],
			filename: "Max-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Udon-profile.html",
			chunks: ["common", "profile"],
			filename: "Udon-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Kay-profile.html",
			chunks: ["common", "profile"],
			filename: "Kay-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Laurel-profile.html",
			chunks: ["common", "profile"],
			filename: "Laurel-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Anna-profile.html",
			chunks: ["common", "profile"],
			filename: "Anna-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Victor-profile.html",
			chunks: ["common", "profile"],
			filename: "Victor-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Doug-profile.html",
			chunks: ["common", "profile"],
			filename: "Doug-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Brandon-profile.html",
			chunks: ["common", "profile"],
			filename: "Brandon-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Mia-profile.html",
			chunks: ["common", "profile"],
			filename: "Mia-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/profile/Iona-profile.html",
			chunks: ["common", "profile"],
			filename: "Iona-profile.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/form/form.html",
			chunks: ["common", "form"],
			filename: "form.html",
		}),
	],
};
