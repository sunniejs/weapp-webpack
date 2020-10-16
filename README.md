## webpack 构建小程序

小程序 webpack 工作流，用 webpack 构建小程序，支持小程序分包，ES6, 多环境配置，scss 开发，引入全局样式，设置 css 变量

项目还在完善中,高频更新。。

## 待办

-   api 模块
-   开发文档
-   request 封装
-   基础类封装
-   基础 css 添加
-   demo 完善

### 启动项目

```bash

 git clone https://github.com/sunniejs/weapp-webpack.git

cd weapp-webpack

 npm install

npm run dev
```

使用微信开发者工具打开 weapp-webpack 文件预览效果

<span id="top">目录</span>

-   ✅ 支持分包开发
-   [✅ 分环境打包小程序 ](#env)
-   [✅ 定义环境变量，配置多环境变量 ](#rem)
-   [✅ Sass 全局样式](#sass)
-   [✅ 配置 alias 别名](#alias)
-   [✅ 生产代码压缩，压缩小程序包体积 ](#vuex)
-   [√ Vue-router](#router)
-   [√ Axios 封装及接口管理](#axios)
-   [√ Webpack 4 vue.config.js 基础配置](#base)
-   [√ 配置 proxy 跨域](#proxy)
-   [√ 配置 打包分析](#bundle)
-   [√ 配置 externals 引入 cdn 资源 ](#externals)
-   [√ 去掉 console.log ](#console)
-   [√ splitChunks 单独打包第三方模块](#chunks)
-   [√ 添加 IE 兼容 ](#ie)
-   [√ Eslint+Pettier 统一开发规范 ](#pettier)

✅ wx.request 封装  
✅ 配置 alias 别名  
✅

### <span id="env">✅ 配置多环境变量 </span>

小程序可以通过命令启动，在 `src/config` 下设置不同环境下的变量。

**注意：** 如果你需要根据环境打包不同的小程序，需要在根目录下`project.{env}.config.json`对应环境的小程序配置文件，启动项目会会读取对应的配置文件，如果你只有一个小程序，就不需要这三个文件
了`project.development.config.json` , `project.staging.config.json` , `project.production.config.json` 。

`package.json` 里的 `scripts` 配置 `serve` `stage` `build`

-   通过 `npm run serve` 启动本地 , 执行 `development`
-   通过 `npm run stage` 打包测试 , 执行 `staging`
-   通过 `npm run build` 打包正式 , 执行 `production`

```javascript

"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --config build/webpack.dev.conf.js --watch --inline --progress",
    "stage": "cross-env NODE_ENV=staging webpack --config build/webpack.staging.conf.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.conf.js -p && gulp minify"
}
```

变量我们统一在 `src/config/env.{NODE_ENV}.js` 里进行管理，拿本地环境文件 `env.development.js` 举例，用户可以根据需求修改

```javascript
// 本地环境配置
module.exports = {
    baseUrl: 'http://localhost:9018', // 项目地址
    baseApi: 'https://test.xxx.com/api' // 本地api请求地址
}
```

公共的变量在 config/index.js 下添加, 不用添加三遍，比如`app_title` , `app_version`

```javascript
const merge = require('webpack-merge')
const config = require(`./env.${process.env.NODE_ENV}`)
const weappConfig = merge(config, {
    app_title: 'webpack 小程序',
    app_version: '1.0.0'
})
module.exports = weappConfig
```

生产使用 gulp 对代码进行压缩

### 文件结构

```
├──build	            	         # webpack构建小程序源码
├──dist		                         # 构建后代码
├──src                               # 小程序代码
│   ├── api		                     # 数据请求
│   ├── assets		               	 # 静态资源
│   │   ├── index.scss               # 全局通用样式
│   │   ├── mixin.scss               # 全局mixin
│   │   └── variables.scss           # 全局变量
│   ├── components		             # 组件
│   ├── config		                 # 多环境配置文件
│   ├── subPack			             # 分包
│   ├── pages			             # 小程序页面
│   ├── utils			             # 工具类脚本
│   │   ├── filter.wxs               # wxs脚本
│   │   └── utils.js                 # 工具类
│   ├──app.js
│   ├──app.wxss
│   ├──app.json


```

[▲ 回顶部](#top)

### <span id="sass">✅ Sass 全局样式</span>

scss 编译 wxss, 高效开发，提高可维护性  
首先 你可能会遇到 `node-sass` 安装不成功，别放弃多试几次！！！

**实现可以在项目中使用`sass`**

`weapp-webpack/build/webpack.base.conf.js` 通过 `loader-file` 和`sass-loader` ,将`scss`, `css` ,`wxss` 编译成`wxss`文件。

```javascript
         {
                test: /\.(sc|c|wx)ss$/,
                include: /src/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            useRelativePath: true,
                            name: '[path][name].wxss',
                            context: resolve('src')
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                            @import "assets/css/index.scss";
                             $IMG_CDN: "https://imgs.solui.cn/";
                            `,
                            sassOptions: {
                                includePaths: [resolve('src', 'styles'), resolve('src')]
                            }
                        }
                    }
                ]
            }

```

**实现使用公共样式**

通过`additionalData`引入公共样式，不用在每个文件中引用样式。

```javascript

additionalData: `@import "assets/css/index.scss";`,

```

可以直接在 `scss` 文件里引入 `sass` 变量

```scss
page {
    background: $background-color;
}
```

**全部设置 CDN 变量**

在 css 样式中通过变量引入 CDN 图片链接，设置 \$IMG_CDN:`"https://imgs.solui.cn/weapp/";` ，在`css`引入`$IMG_CDN` 。

```css
.logo {
    width: 200rpx;
    height: 200rpx;
    background: url($IMG_CDN + 'logo.png') center / contain no-repeat;
}
```

[▲ 回顶部](#top)

### <span id="alias">✅ 配置 alias 别名 </span>

可以在 js 中轻松引入文件，拜托路径点点点的烦恼。使用 '@/utils/util.js' 引入，你也可以配置其他的 `alias` 哦

配置

```javascript
// 配置  webpack.base.conf.js

module.exports = {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
}

// 使用 index.js

import {toast} from '@/utils/util.js'
```

[▲ 回顶部](#top)

# 关于我

获取更多技术相关文章，关注公众号”前端女塾“，回复前端，即可加入”前端仙女群“。

![logo](https://imgs.solui.cn/wx/640.gif ':size=262x224')

如果对你有帮助送我一颗小星星（づ￣ 3 ￣）づ ╭❤ ～

```

```
