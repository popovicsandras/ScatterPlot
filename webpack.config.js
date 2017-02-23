var path = require('path');

module.exports = {
    entry: './src/client/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'client.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" }
        ]
    },
    devtool: "source-map"
};