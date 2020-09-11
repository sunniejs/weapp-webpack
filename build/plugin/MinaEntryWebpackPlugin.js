const path = require('path')
// const fs = require('fs-extra')
// const {urlToRequest} = require('loader-utils')
// const {parseComponent} = require('vue-template-compiler')
const SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin')
const MultiEntryPlugin = require('webpack/lib/MultiEntryPlugin')

function basename(fullpath) {
  return path.basename(fullpath, path.extname(fullpath))
}

function addEntry(context, item, name) {
  if (Array.isArray(item)) {
    return new MultiEntryPlugin(context, item, name)
  }
  return new SingleEntryPlugin(context, item, name)
}

function getConfigAsync(file) {
  return fs.readFile(file).then(buffer => {
    let blocks = parseComponent(buffer.toString()).customBlocks
    let matched = blocks.find(block => block.type === 'config')
    if (!matched) {
      return {}
    }
    return JSON.parse(matched.content)
  })
}

function getItemsFromConfig(config) {
  if (config && Array.isArray(config.pages)) {
    return config.pages.map(page => `${page}.mina`)
  }
  return []
}

function getItems(context, entry) {
  return Promise.resolve(path.resolve(context, entry))
    .then(getConfigAsync)
    .then(getItemsFromConfig)
    .then(entries => {
      if (entries.length === 0) {
        return urlToRequest(entry)
      }
      return Promise.all([Promise.resolve(entry), ...entries.map(entry => getItems(context, entry))])
    })
}
module.exports = class MinaEntryWebpackPlugin {
  constructor(options = {}) {
    this.map =
      options.map ||
      function (entry) {
        return entry
      }
  }

  rewrite(compiler, done) {
    try {
      let {context, entry} = compiler.options

      // assume the latest file in array is the app.mina
      if (Array.isArray(entry)) {
        entry = entry[entry.length - 1]
      }

      getItems(context, entry).forEach(({isModule, request, fullpath}) => {
        let url = path
          .relative(context, fullpath)
          // replace '..' to '_'
          .replace(/\.\./g, '_')
          // replace 'node_modules' to '_node_modules_'
          .replace(/node_modules([\/\\])/g, '_node_modules_$1')
        console.log(url)
        let name = replaceExt(urlToRequest(url), '.js')
        addEntry(context, this.map(ensurePosix(request)), ensurePosix(name)).apply(compiler)
      })
    } catch (error) {
      if (typeof done === 'function') {
        console.error(error)
        return done()
      }
      throw error
    }

    if (typeof done === 'function') {
      done()
    }

    return true
  }

  apply(compiler) {
    compiler.hooks.entryOption.tap('MinaEntryPlugin', () => this.rewrite(compiler))
    compiler.hooks.watchRun.tap('MinaEntryPlugin', (compiler, done) => this.rewrite(compiler, done))
  }
}
