const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, './src')
                ],
                test: /\.js$/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
