## webpack 工程化小程序

>   组件引用，请使用相对当前页面位置
>   首次加载全局安装gulp
>   如果使用vscode ts文件在typings配置的的小程序api仍然报错，在ts右下角调整ts文件库的版本。

## 项目结构


### 小程序文件结构src
```
├─ components		组件
├─ css				样式
├─ js				js脚本
├─ utils			工具类脚本
├─ wxs			   	存放wxs脚本（小程序的一套脚本语言）
├─ pages		    小程序页面
├─ service			数据请求
├─ resources	    静态资源 
app.js                              
app.wxss            
app.json
```

### 目录
1. src -- 写<del>bug</del>代码的目录
2. serve -- 微信开发者工具添加项目的项目地址
3. dist -- 构建后的发布代码
4. .tmp -- 一个隐藏目录，作为构建时使用的临时目录



### 构建命令
1. npm run dev     // 编译开发环境
2. npm run serve   // TODO:[待定] 编译开发环境并自动检测文件变更并实时编译，此功能需先在微信开发者工具设置中打开“保存自动编译小程序”设置
3. npm run build   // 构建正式环境，构建在项目根目录下的dist文件夹
4. npm run add:page -- /user/home [--title=页面标题] [--creator=创建人]  // 创建一个小程序空页面，页面放在src/pages/user/home
5. npm run add:component -- /ui/dialog [--creator=创建人]               // 创建一个小程序空组件，组件放在src/components/ui/dialog


ps: tsconfig.json 中的types 和 typeRoots 配置目前还没有引入node_module的默认@/type 避免编辑器检查重复declare报错