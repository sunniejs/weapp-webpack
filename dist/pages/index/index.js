;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages\\index\\index"],{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    var _this = this;

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = function (res) {
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: function success(res) {
          app.globalData.userInfo = res.userInfo;

          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function getUserInfo(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});

/***/ })

},[["./pages/index/index.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJnZXRBcHAiLCJQYWdlIiwiZGF0YSIsIm1vdHRvIiwidXNlckluZm8iLCJoYXNVc2VySW5mbyIsImNhbklVc2UiLCJ3eCIsImJpbmRWaWV3VGFwIiwibmF2aWdhdGVUbyIsInVybCIsIm9uTG9hZCIsImdsb2JhbERhdGEiLCJzZXREYXRhIiwidXNlckluZm9SZWFkeUNhbGxiYWNrIiwicmVzIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLE1BQU0sRUFBbEI7QUFFQUMsSUFBSSxDQUFDO0FBQ0hDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsYUFESDtBQUVKQyxZQUFRLEVBQUUsRUFGTjtBQUdKQyxlQUFXLEVBQUUsS0FIVDtBQUlKQyxXQUFPLEVBQUVDLEVBQUUsQ0FBQ0QsT0FBSCxDQUFXLDhCQUFYO0FBSkwsR0FESDtBQU9IO0FBQ0FFLGFBQVcsRUFBRSx1QkFBVztBQUN0QkQsTUFBRSxDQUFDRSxVQUFILENBQWM7QUFDWkMsU0FBRyxFQUFFO0FBRE8sS0FBZDtBQUdELEdBWkU7QUFhSEMsUUFBTSxFQUFFLGtCQUFZO0FBQUE7O0FBQ2xCLFFBQUlaLEdBQUcsQ0FBQ2EsVUFBSixDQUFlUixRQUFuQixFQUE2QjtBQUMzQixXQUFLUyxPQUFMLENBQWE7QUFDWFQsZ0JBQVEsRUFBRUwsR0FBRyxDQUFDYSxVQUFKLENBQWVSLFFBRGQ7QUFFWEMsbUJBQVcsRUFBRTtBQUZGLE9BQWI7QUFJRCxLQUxELE1BS08sSUFBSSxLQUFLSCxJQUFMLENBQVVJLE9BQWQsRUFBc0I7QUFDM0I7QUFDQTtBQUNBUCxTQUFHLENBQUNlLHFCQUFKLEdBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUNqQyxhQUFJLENBQUNGLE9BQUwsQ0FBYTtBQUNYVCxrQkFBUSxFQUFFVyxHQUFHLENBQUNYLFFBREg7QUFFWEMscUJBQVcsRUFBRTtBQUZGLFNBQWI7QUFJRCxPQUxEO0FBTUQsS0FUTSxNQVNBO0FBQ0w7QUFDQUUsUUFBRSxDQUFDUyxXQUFILENBQWU7QUFDYkMsZUFBTyxFQUFFLGlCQUFBRixHQUFHLEVBQUk7QUFDZGhCLGFBQUcsQ0FBQ2EsVUFBSixDQUFlUixRQUFmLEdBQTBCVyxHQUFHLENBQUNYLFFBQTlCOztBQUNBLGVBQUksQ0FBQ1MsT0FBTCxDQUFhO0FBQ1hULG9CQUFRLEVBQUVXLEdBQUcsQ0FBQ1gsUUFESDtBQUVYQyx1QkFBVyxFQUFFO0FBRkYsV0FBYjtBQUlEO0FBUFksT0FBZjtBQVNEO0FBQ0YsR0F4Q0U7QUF5Q0hXLGFBQVcsRUFBRSxxQkFBU0UsQ0FBVCxFQUFZO0FBQ3ZCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBbkIsT0FBRyxDQUFDYSxVQUFKLENBQWVSLFFBQWYsR0FBMEJjLENBQUMsQ0FBQ0csTUFBRixDQUFTakIsUUFBbkM7QUFDQSxTQUFLUyxPQUFMLENBQWE7QUFDWFQsY0FBUSxFQUFFYyxDQUFDLENBQUNHLE1BQUYsQ0FBU2pCLFFBRFI7QUFFWEMsaUJBQVcsRUFBRTtBQUZGLEtBQWI7QUFJRDtBQWhERSxDQUFELENBQUosQyIsImZpbGUiOiJwYWdlc1xcaW5kZXhcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5jb25zdCBhcHAgPSBnZXRBcHAoKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcclxuICB9LFxyXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgYmluZFZpZXdUYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSl7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdldFVzZXJJbmZvOiBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=