var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.jsx'),
        vendors: ['react']
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'app.js'
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
