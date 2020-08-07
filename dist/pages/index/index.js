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
    motto: 'Hello World Sunnie',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJnZXRBcHAiLCJQYWdlIiwiZGF0YSIsIm1vdHRvIiwidXNlckluZm8iLCJoYXNVc2VySW5mbyIsImNhbklVc2UiLCJ3eCIsImJpbmRWaWV3VGFwIiwibmF2aWdhdGVUbyIsInVybCIsIm9uTG9hZCIsImdsb2JhbERhdGEiLCJzZXREYXRhIiwidXNlckluZm9SZWFkeUNhbGxiYWNrIiwicmVzIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLE1BQU0sRUFBbEI7QUFFQUMsSUFBSSxDQUFDO0FBQ0hDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsb0JBREg7QUFFSkMsWUFBUSxFQUFFLEVBRk47QUFHSkMsZUFBVyxFQUFFLEtBSFQ7QUFJSkMsV0FBTyxFQUFFQyxFQUFFLENBQUNELE9BQUgsQ0FBVyw4QkFBWDtBQUpMLEdBREg7QUFPSDtBQUNBRSxhQUFXLEVBQUUsdUJBQVk7QUFDdkJELE1BQUUsQ0FBQ0UsVUFBSCxDQUFjO0FBQ1pDLFNBQUcsRUFBRTtBQURPLEtBQWQ7QUFHRCxHQVpFO0FBYUhDLFFBQU0sRUFBRSxrQkFBWTtBQUFBOztBQUNsQixRQUFJWixHQUFHLENBQUNhLFVBQUosQ0FBZVIsUUFBbkIsRUFBNkI7QUFDM0IsV0FBS1MsT0FBTCxDQUFhO0FBQ1hULGdCQUFRLEVBQUVMLEdBQUcsQ0FBQ2EsVUFBSixDQUFlUixRQURkO0FBRVhDLG1CQUFXLEVBQUU7QUFGRixPQUFiO0FBSUQsS0FMRCxNQUtPLElBQUksS0FBS0gsSUFBTCxDQUFVSSxPQUFkLEVBQXVCO0FBQzVCO0FBQ0E7QUFDQVAsU0FBRyxDQUFDZSxxQkFBSixHQUE0QixVQUFBQyxHQUFHLEVBQUk7QUFDakMsYUFBSSxDQUFDRixPQUFMLENBQWE7QUFDWFQsa0JBQVEsRUFBRVcsR0FBRyxDQUFDWCxRQURIO0FBRVhDLHFCQUFXLEVBQUU7QUFGRixTQUFiO0FBSUQsT0FMRDtBQU1ELEtBVE0sTUFTQTtBQUNMO0FBQ0FFLFFBQUUsQ0FBQ1MsV0FBSCxDQUFlO0FBQ2JDLGVBQU8sRUFBRSxpQkFBQUYsR0FBRyxFQUFJO0FBQ2RoQixhQUFHLENBQUNhLFVBQUosQ0FBZVIsUUFBZixHQUEwQlcsR0FBRyxDQUFDWCxRQUE5Qjs7QUFDQSxlQUFJLENBQUNTLE9BQUwsQ0FBYTtBQUNYVCxvQkFBUSxFQUFFVyxHQUFHLENBQUNYLFFBREg7QUFFWEMsdUJBQVcsRUFBRTtBQUZGLFdBQWI7QUFJRDtBQVBZLE9BQWY7QUFTRDtBQUNGLEdBeENFO0FBeUNIVyxhQUFXLEVBQUUscUJBQVVFLENBQVYsRUFBYTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQW5CLE9BQUcsQ0FBQ2EsVUFBSixDQUFlUixRQUFmLEdBQTBCYyxDQUFDLENBQUNHLE1BQUYsQ0FBU2pCLFFBQW5DO0FBQ0EsU0FBS1MsT0FBTCxDQUFhO0FBQ1hULGNBQVEsRUFBRWMsQ0FBQyxDQUFDRyxNQUFGLENBQVNqQixRQURSO0FBRVhDLGlCQUFXLEVBQUU7QUFGRixLQUFiO0FBSUQ7QUFoREUsQ0FBRCxDQUFKLEMiLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAnSGVsbG8gV29ybGQgU3VubmllJyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKVxyXG4gIH0sXHJcbiAgLy/kuovku7blpITnkIblh73mlbBcclxuICBiaW5kVmlld1RhcDogZnVuY3Rpb24gKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRVc2VySW5mbzogZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==