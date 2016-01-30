var webpack = require('webpack'),
    path = require('path'),
    SimpleHTMLPlugin = require('./src/devTools/SimpleHTMLPlugin');

module.exports = {
    entry: {
        app: './src/index.jsx',
        vendors: ['react']
    },
    output: {
        path: './dist/js',
        publicPath: '/',
        filename: 'app.[chunkhash].js'
    },


    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js'),
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new SimpleHTMLPlugin()
    ]
};
