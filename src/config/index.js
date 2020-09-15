const merge = require('webpack-merge')
const config = require(`./env.${process.env.NODE_ENV}`)
const weappConfig = merge(config, {
    app_title: 'webpack 小程序',
    app_version: '1.0.0'
})
module.exports = weappConfig
