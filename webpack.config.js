const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            "/SRC": path.resolve(__dirname, "src/"),
            "/CSS": path.resolve(__dirname, "src/css/"),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            }
        ]
    }
};
