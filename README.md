## webpack 构建小程序

小程序 webpack 工作流，用 webpack 构建小程序，支持小程序分包，ES6, 多环境配置，scss 开发

项目还在完善中,高频更新。。

待办

-   api 模块
-   开发文档
-   request 封装
-   基础类封装
-   基础 css 添加
-   demo 完善

## 支持

✅ 支持分包开发  
✅ 定义环境变量，配置多环境变量  
✅ 生产代码压缩，压缩小程序包体积  
✅ wx.request 封装  
✅ 配置 alias 别名  
✅ scss 编译 wxss, 高效开发，提高可维护性

## 开始使用

**通过 git clone 下载项目文件。**

```
 git clone https://github.com/sunniejs/weapp-webpack.git

```

**安装依赖**

```
cd weapp-webpack

 npm install
 // or
 yarn install
```

**本地启动项目**

```
npm run dev
// or
yarn run dev
```

使用微信开发者工具打开 weapp-webpack 文件预览效果

### 构建命令

1. npm run dev // 本地环境
2. npm run stage // 构建测试环境，构建在项目根目录下的 dist 文件夹
3. npm run build // 构建正式环境，构建在项目根目录下的 dist 文件夹

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

# 关于我

获取更多技术相关文章，关注公众号”前端女塾“，回复前端，即可加入”前端仙女群“。

![logo](https://imgs.solui.cn/wx/640.gif ':size=262x224')

如果对你有帮助送我一颗小星星（づ￣ 3 ￣）づ ╭❤ ～
