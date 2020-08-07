// plugin/WxRuntimePlugin.js
 
const path = require('path')
const ensurePosix = require('ensure-posix-path')
const { ConcatSource } = require('webpack-sources')
const requiredPath = require('required-path')

function isRuntimeExtracted(compilation) {
  return compilation.chunks.some(chunk => chunk.isOnlyInitial() && chunk.hasRuntime() && !chunk.hasEntryModule())
}

function script({ dependencies }) {
//   console.log('show dependencies round', dependencies)
  return ';' + dependencies.map(file => `require('${requiredPath(file)}');`).join('')
}

module.exports = class WxRuntimeWebpackPlugin {
  constructor(options = {}) {
    this.runtime = options.runtime || ''
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('WxRuntimePlugin', compilation => {
      for (let template of [compilation.mainTemplate, compilation.chunkTemplate]) {
        // 监听 template 的 renderWithEntry 事件
        template.hooks.renderWithEntry.tap('WxRuntimePlugin', (source, entry) => {
          if (!isRuntimeExtracted(compilation)) {
            throw new Error(
              [
                'Please reuse the runtime chunk to avoid duplicate loading of javascript files.',
                "Simple solution: set `optimization.runtimeChunk` to `{ name: 'runtime.js' }` .",
                'Detail of `optimization.runtimeChunk`: https://webpack.js.org/configuration/optimization/#optimization-runtimechunk .',
              ].join('\n'),
            )
          }

          // 如果不是入口 chunk，即不是通过 compilation.addEntry 添加的模块所生成的 chunk，就不要管它
          if (!entry.hasEntryModule()) {
            return source
          }

          let dependencies = []
          // 找到该入口 chunk 依赖的其它所有 chunk
          entry.groupsIterable.forEach(group => {
            group.chunks.forEach(chunk => {
              /**
               * assume output.filename is chunk.name here
               */
              let filename = ensurePosix(path.relative(path.dirname(entry.name), chunk.name))

              if (chunk === entry || ~dependencies.indexOf(filename)) {
                return
              }
              dependencies.push(filename)
            })
          })

          // 在源码前面拼接 runtime 以及公共代码依赖
          source = new ConcatSource(script({ dependencies }), source)
          return source
        })
      }
    })
  }
}
