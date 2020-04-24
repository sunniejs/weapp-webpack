const { resolve } = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 编译的时候清除
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinaWebpackPlugin = require('./plugin/MinaWebpackPlugin')
const MinaRuntimePlugin = require('./plugin/MinaRuntimePlugin')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
const debuggable = process.env.BUILD_TYPE !== 'release'
module.exports = {
    context: resolve('src'),
    entry: './app.js',
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        globalObject: 'wx',
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                include: /src/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            useRelativePath: true,
                            name: '[path][name].wxss',
                            context: resolve('src'),
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [resolve('src', 'styles'), resolve('src')],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new CopyWebpackPlugin([
            {
                from: '**/*',
                to: './',
                ignore: ['**/*.js', '**/*.scss'],
            },
        ]),
        new MinaWebpackPlugin({
            scriptExtensions: ['.js'],
            assetExtensions: ['.scss'],
        }),
        new MinaRuntimePlugin(),
        new LodashWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'development',
            BUILD_TYPE: JSON.stringify(process.env.BUILD_TYPE) || 'debug',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
            minChunks: 2,
            minSize: 0,
        },
        runtimeChunk: {
            name: 'runtime',
        },
    },
    mode: debuggable ? 'none' : 'production',
    devtool: debuggable ? 'inline-source-map' : 'source-map',
}
