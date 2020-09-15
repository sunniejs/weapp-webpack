/**
 * toast
 * @param {String} title 标题
 * @param {String} icon 图标
 * @param {Function}} 回调方法
 */
export const toast = (title, icon, fn) => {
    wx.showToast({
        title: title,
        icon: icon || 'none',
        duration: 2000,
        success: function () {
            fn && fn()
        }
    })
}
