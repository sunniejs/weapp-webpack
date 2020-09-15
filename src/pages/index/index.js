import {toast} from '@/utils/util.js'
import config from '@/config/index.js'
Page({
    data: {
        endDate: '2019/12/22 16:00:00'
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
