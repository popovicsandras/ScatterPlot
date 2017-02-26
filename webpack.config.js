var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/client/client.jsx'],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'client.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: "babel-loader" }
        ]
    },
    devtool: "source-map"
};