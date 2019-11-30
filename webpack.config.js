// eslint-disable-next-line
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    // { loader: path.resolve(__dirname, './scripts/minifycss.js') },
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default,
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
