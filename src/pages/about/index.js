Page({
    data: {},
    /* 转发*/
    onShareAppMessage: function (ops) {
        return {
            title: ' Weapp Webpack',
            path: '/pages/index/index'
        }
    }
})
