const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extact-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpack = require('./webpack.base.conf');


const terserPlugin = new TerserPlugin({
  sourceMap: false,
  cache: true,
  exclude: /\.mini.js$/,
})

const optimizeCssPlugin = new OptimizeCssPlugin({
  assetNameRegExp: /\.(le|sc|wx|c)ss$/,
  cssProcessorOptions: {
    safe: true,
    autoprefixer: {
      disable: true
    },
    mergeLonghand: false,
    discardComments: {
      removeAll: true
    }
  }
})

const webpackConfig = merge(baseWebpack, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [terserPlugin, optimizeCssPlugin]
  },




})

module.exports = webpackConfig