const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: {
        main: path.resolve(__dirname + '../../src/main.js'),
    }, // 入口
    output: {
        path: path.resolve(__dirname + '../../dist'),
        filename: 'js/[name]-[chunkHash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试打包工具',
            filename: 'index.html',
            path: path.resolve(__dirname + '../../index.html'),
            inject: 'head',
            chunks: ['main'],
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        })
    ],
    module: {
        rules: [
            {
                test: '/\.js/',
                include: '/src/',
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: '/\.html/',
                loader: 'html-loader',
            },
            {
                test: '/\.css/',
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
            },
        ]
    }
}

