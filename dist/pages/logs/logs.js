;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages\\logs\\logs"],{

/***/ "./pages/logs/logs.js":
/*!****************************!*\
  !*** ./pages/logs/logs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//logs.js
var util = __webpack_require__(/*! ../../utils/util.js */ "./utils/util.js");

Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log));
      })
    });
  }
});

/***/ }),

/***/ "./utils/util.js":
/*!***********************!*\
  !*** ./utils/util.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

module.exports = {
  formatTime: formatTime
};

/***/ })

},[["./pages/logs/logs.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlBhZ2UiLCJkYXRhIiwibG9ncyIsIm9uTG9hZCIsInNldERhdGEiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwibWFwIiwibG9nIiwiZm9ybWF0VGltZSIsIkRhdGUiLCJkYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsImZvcm1hdE51bWJlciIsImpvaW4iLCJuIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFwQjs7QUFFQUMsSUFBSSxDQUFDO0FBQ0hDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUU7QUFERixHQURIO0FBSUhDLFFBQU0sRUFBRSxrQkFBWTtBQUNsQixTQUFLQyxPQUFMLENBQWE7QUFDWEYsVUFBSSxFQUFFLENBQUNHLEVBQUUsQ0FBQ0MsY0FBSCxDQUFrQixNQUFsQixLQUE2QixFQUE5QixFQUFrQ0MsR0FBbEMsQ0FBc0MsVUFBQUMsR0FBRyxFQUFJO0FBQ2pELGVBQU9WLElBQUksQ0FBQ1csVUFBTCxDQUFnQixJQUFJQyxJQUFKLENBQVNGLEdBQVQsQ0FBaEIsQ0FBUDtBQUNELE9BRks7QUFESyxLQUFiO0FBS0Q7QUFWRSxDQUFELENBQUosQzs7Ozs7Ozs7Ozs7QUNIQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBRSxJQUFJLEVBQUk7QUFDekIsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLFdBQUwsRUFBYjtBQUNBLE1BQU1DLEtBQUssR0FBR0gsSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQWhDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHTCxJQUFJLENBQUNNLE9BQUwsRUFBWjtBQUNBLE1BQU1DLElBQUksR0FBR1AsSUFBSSxDQUFDUSxRQUFMLEVBQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdULElBQUksQ0FBQ1UsVUFBTCxFQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWCxJQUFJLENBQUNZLFVBQUwsRUFBZjtBQUVBLFNBQU8sQ0FBQ1gsSUFBRCxFQUFPRSxLQUFQLEVBQWNFLEdBQWQsRUFBbUJULEdBQW5CLENBQXVCaUIsWUFBdkIsRUFBcUNDLElBQXJDLENBQTBDLEdBQTFDLElBQWlELEdBQWpELEdBQXVELENBQUNQLElBQUQsRUFBT0UsTUFBUCxFQUFlRSxNQUFmLEVBQXVCZixHQUF2QixDQUEyQmlCLFlBQTNCLEVBQXlDQyxJQUF6QyxDQUE4QyxHQUE5QyxDQUE5RDtBQUNELENBVEQ7O0FBV0EsSUFBTUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUUsQ0FBQyxFQUFJO0FBQ3hCQSxHQUFDLEdBQUdBLENBQUMsQ0FBQ0MsUUFBRixFQUFKO0FBQ0EsU0FBT0QsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQSxDQUFQLEdBQVcsTUFBTUEsQ0FBeEI7QUFDRCxDQUhEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnBCLFlBQVUsRUFBRUE7QUFERyxDQUFqQixDIiwiZmlsZSI6InBhZ2VzXFxsb2dzXFxsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2dzLmpzXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsLmpzJylcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGxvZ3M6IFtdXHJcbiAgfSxcclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAobG9nID0+IHtcclxuICAgICAgICByZXR1cm4gdXRpbC5mb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIiwiY29uc3QgZm9ybWF0VGltZSA9IGRhdGUgPT4ge1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcclxuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignLycpICsgJyAnICsgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6JylcclxufVxyXG5cclxuY29uc3QgZm9ybWF0TnVtYmVyID0gbiA9PiB7XHJcbiAgbiA9IG4udG9TdHJpbmcoKVxyXG4gIHJldHVybiBuWzFdID8gbiA6ICcwJyArIG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZm9ybWF0VGltZTogZm9ybWF0VGltZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=