var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src/client/'),
    entry: { 
        'app': ['babel-polyfill', './scripts/client.jsx'],
        'app-dependencies': ['react', 'react-dom']
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "app-dependencies", minChunks: Infinity }),
        new HtmlWebpackPlugin({ template: 'index.html', inject: false })
    ],
    devtool: "source-map"
};