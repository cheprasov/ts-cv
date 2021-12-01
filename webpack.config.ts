import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        'app.js': './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: '[name]',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            // '/SRC': path.resolve(__dirname, 'src/'),
        },
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
                exclude: [/node_modules/, /\.test\./i],
            },
        ],
    },
    optimization: {
        minimize: true,
        moduleIds: 'deterministic',
        innerGraph: true,
        concatenateModules: true
    },
};

export default config;