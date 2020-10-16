import {toast} from '@/utils/util.js'
import config from '@/config/index.js'
Page({
    data: {
        list: ['✅ 支持分包开发', '✅ 定义环境变量，配置多环境变量', '✅ wx.request 封装', '✅ scss 编译 wxss, 高效开发，提高可维护性']
    },
    onLoad() {
        toast('欢迎来到花花的世界')
    },
    /* 转发*/
    onShareAppMessage: function (ops) {
        return {
            title: 'sol-weapp营销组件',
            path: '/pages/index/index',
            imageUrl: 'https://imgs.solui.cn/weapp/qrcode.jpg'
        }
    }
})
