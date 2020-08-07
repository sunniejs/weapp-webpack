// plugin/MinaWebpackPlugin.js
const SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin')
const MultiEntryPlugin = require('webpack/lib/MultiEntryPlugin')
const path = require('path')
const fs = require('fs')
const replaceExt = require('replace-ext')

const assetsChunkName = '__assets_chunk_name__'

function itemToPlugin(context, item, name) {
  if (Array.isArray(item)) {
    return new MultiEntryPlugin(context, item, name)
  }
  return new SingleEntryPlugin(context, item, name)
}

function _inflateEntries(entries = [], dirname, entry) {
  const configFile = replaceExt(entry, '.json')
  const content = fs.readFileSync(configFile, 'utf8')
  const config = JSON.parse(content)

  ;['pages', 'usingComponents'].forEach(key => {
    const items = config[key]
    if (typeof items === 'object') {
      Object.values(items).forEach(item => inflateEntries(entries, dirname, item))
    }
  })
}

function inflateEntries(entries, dirname, entry) {
  entry = path.resolve(dirname, entry)
  if (entry != null && !entries.includes(entry)) {
    entries.push(entry)
    _inflateEntries(entries, path.dirname(entry), entry)
  }
}

function first(entry, extensions) {
  for (const ext of extensions) {
    const file = replaceExt(entry, ext)
    if (fs.existsSync(file)) {
      return file
    }
  }
  return null
}

function all(entry, extensions) {
  const items = []
  for (const ext of extensions) {
    const file = replaceExt(entry, ext)
    if (fs.existsSync(file)) {
      items.push(file)
    }
  }
  return items
}

class MinaWebpackPlugin {
  constructor(options = {}) {
    this.scriptExtensions = options.scriptExtensions || ['.ts', '.js']
    this.assetExtensions = options.assetExtensions || []
    this.entries = []
  }

  applyEntry(compiler, done) {
    const {context} = compiler.options

    this.entries
      .map(item => first(item, this.scriptExtensions))
      .map(item => path.relative(context, item))
      .forEach(item => itemToPlugin(context, './' + item, replaceExt(item, '')).apply(compiler))

    // 把所有的非 js 文件都合到同一个 entry 中，交给 MultiEntryPlugin 去处理
    const assets = this.entries.reduce((items, item) => [...items, ...all(item, this.assetExtensions)], []).map(item => './' + path.relative(context, item))
    itemToPlugin(context, assets, assetsChunkName).apply(compiler)

    if (done) {
      done()
    }
  }

  apply(compiler) {
    const {context, entry} = compiler.options

    inflateEntries(this.entries, context, entry)

    compiler.hooks.entryOption.tap('MinaWebpackPlugin', () => {
      this.applyEntry(compiler)
      return true
    })

    compiler.hooks.watchRun.tap('MinaWebpackPlugin', (compiler, done) => {
      this.applyEntry(compiler, done)
    })

    compiler.hooks.compilation.tap('MinaWebpackPlugin', compilation => {
      // beforeChunkAssets 事件在 compilation.createChunkAssets 方法之前被触发
      compilation.hooks.beforeChunkAssets.tap('MinaWebpackPlugin', () => {
        const assetsChunkIndex = compilation.chunks.findIndex(({name}) => name === assetsChunkName)
        if (assetsChunkIndex > -1) {
          // 移除该 chunk, 使之不会生成对应的 asset，也就不会输出文件
          // 如果没有这一步，最后会生成一个 __assets_chunk_name__.js 文件
          compilation.chunks.splice(assetsChunkIndex, 1)
        }
      })
    })
  }
}

module.exports = MinaWebpackPlugin
