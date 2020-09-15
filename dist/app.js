;require('./runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

//app.js
App({
  onLaunch: function onLaunch() {
    var _this = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs); // 登录

    wx.login({
      success: function success(res) {// 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }); // 获取用户信息

    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function success(res) {
              // 可以将 res 发送给后台解码出 unionId
              _this.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况

              if (_this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  globalData: {
    userInfo: null
  }
});

/***/ })

},[["./app.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwib25MYXVuY2giLCJsb2dzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInVuc2hpZnQiLCJEYXRlIiwibm93Iiwic2V0U3RvcmFnZVN5bmMiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJJbmZvUmVhZHlDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQUEsR0FBRyxDQUFDO0FBQ0ZDLFVBQVEsRUFBRSxvQkFBWTtBQUFBOztBQUNwQjtBQUNBLFFBQUlDLElBQUksR0FBR0MsRUFBRSxDQUFDQyxjQUFILENBQWtCLE1BQWxCLEtBQTZCLEVBQXhDO0FBQ0FGLFFBQUksQ0FBQ0csT0FBTCxDQUFhQyxJQUFJLENBQUNDLEdBQUwsRUFBYjtBQUNBSixNQUFFLENBQUNLLGNBQUgsQ0FBa0IsTUFBbEIsRUFBMEJOLElBQTFCLEVBSm9CLENBTXBCOztBQUNBQyxNQUFFLENBQUNNLEtBQUgsQ0FBUztBQUNQQyxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSSxDQUNkO0FBQ0Q7QUFITSxLQUFULEVBUG9CLENBWXBCOztBQUNBUixNQUFFLENBQUNTLFVBQUgsQ0FBYztBQUNaRixhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNkLFlBQUlBLEdBQUcsQ0FBQ0UsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNyQztBQUNBVixZQUFFLENBQUNXLFdBQUgsQ0FBZTtBQUNiSixtQkFBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUk7QUFDZDtBQUNBLG1CQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCTCxHQUFHLENBQUNLLFFBQS9CLENBRmMsQ0FJZDtBQUNBOztBQUNBLGtCQUFJLEtBQUksQ0FBQ0MscUJBQVQsRUFBZ0M7QUFDOUIscUJBQUksQ0FBQ0EscUJBQUwsQ0FBMkJOLEdBQTNCO0FBQ0Q7QUFDRjtBQVZZLFdBQWY7QUFZRDtBQUNGO0FBakJXLEtBQWQ7QUFtQkQsR0FqQ0M7QUFrQ0ZJLFlBQVUsRUFBRTtBQUNWQyxZQUFRLEVBQUU7QUFEQTtBQWxDVixDQUFELENBQUgsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC5qc1xuQXBwKHtcbiAgb25MYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICB2YXIgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfVxuICAgIH0pXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==