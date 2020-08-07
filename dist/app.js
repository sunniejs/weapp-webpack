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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwib25MYXVuY2giLCJsb2dzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInVuc2hpZnQiLCJEYXRlIiwibm93Iiwic2V0U3RvcmFnZVN5bmMiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJJbmZvUmVhZHlDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQUEsR0FBRyxDQUFDO0FBQ0ZDLFVBQVEsRUFBRSxvQkFBWTtBQUFBOztBQUNwQjtBQUNBLFFBQUlDLElBQUksR0FBR0MsRUFBRSxDQUFDQyxjQUFILENBQWtCLE1BQWxCLEtBQTZCLEVBQXhDO0FBQ0FGLFFBQUksQ0FBQ0csT0FBTCxDQUFhQyxJQUFJLENBQUNDLEdBQUwsRUFBYjtBQUNBSixNQUFFLENBQUNLLGNBQUgsQ0FBa0IsTUFBbEIsRUFBMEJOLElBQTFCLEVBSm9CLENBTXBCOztBQUNBQyxNQUFFLENBQUNNLEtBQUgsQ0FBUztBQUNQQyxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSSxDQUNkO0FBQ0Q7QUFITSxLQUFULEVBUG9CLENBWXBCOztBQUNBUixNQUFFLENBQUNTLFVBQUgsQ0FBYztBQUNaRixhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNkLFlBQUlBLEdBQUcsQ0FBQ0UsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNyQztBQUNBVixZQUFFLENBQUNXLFdBQUgsQ0FBZTtBQUNiSixtQkFBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUk7QUFDZDtBQUNBLG1CQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCTCxHQUFHLENBQUNLLFFBQS9CLENBRmMsQ0FJZDtBQUNBOztBQUNBLGtCQUFJLEtBQUksQ0FBQ0MscUJBQVQsRUFBZ0M7QUFDOUIscUJBQUksQ0FBQ0EscUJBQUwsQ0FBMkJOLEdBQTNCO0FBQ0Q7QUFDRjtBQVZZLFdBQWY7QUFZRDtBQUNGO0FBakJXLEtBQWQ7QUFtQkQsR0FqQ0M7QUFrQ0ZJLFlBQVUsRUFBRTtBQUNWQyxZQUFRLEVBQUU7QUFEQTtBQWxDVixDQUFELENBQUgsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC5qc1xyXG5BcHAoe1xyXG4gIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcclxuICAgIHZhciBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxyXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXHJcblxyXG4gICAgLy8g55m75b2VXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcclxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuXHJcbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdsb2JhbERhdGE6IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=