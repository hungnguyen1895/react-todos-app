
var webpack = require('webpack');
var path = require('path');
		
//devtool: 'inline-source-map': give us the line of the error

module.exports = {
	devtool: 'inline-source-map',	
	entry: [
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://127.0.0.1:8080/',

		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};