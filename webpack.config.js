const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: "virtual",
        filename: 'bundle.js',
    },
    devServer: {
        port:8080,
        contentBase:"www"
    }
};