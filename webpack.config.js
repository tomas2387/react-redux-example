var webpack = require('webpack'),
    SimpleHTMLPlugin = require('./src/devTools/SimpleHTMLPlugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/dist/js',
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
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
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new SimpleHTMLPlugin()
    ]
};
