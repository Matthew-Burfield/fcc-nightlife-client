const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: path.join(__dirname, '/src/index.html'),
	filename: process.env.NODE_ENV === 'production' ? '200.html' : 'index.html',
	inject: 'body',
})

const DefinePluginConfig = new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('production'),
})

const SourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin()

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
	beautify: false,
	mangle: {
		screw_ie8: true,
	},
	compress: {
		screw_ie8: true,
	},
	comments: false,
})

module.exports = {
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		historyApiFallback: true,
		host: 'localhost',
		hot: true,
		port: '3000',
	},
	entry: ['react-hot-loader/patch', path.join(__dirname, '/src/index.jsx')],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'url-loader',
				options: {
					limit: 10000,
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		filename: 'index.js',
		path: path.join(__dirname, '/build'),
	},
	plugins: dev
		? [
				HTMLWebpackPluginConfig,
				SourceMapDevToolPlugin,
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin(),
			]
		: [HTMLWebpackPluginConfig, DefinePluginConfig, UglifyJsPluginConfig],
}
