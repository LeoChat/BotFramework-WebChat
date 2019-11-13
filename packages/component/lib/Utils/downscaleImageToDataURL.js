'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = downscaleImageToDataURL;

var _downscaleImageToDataURLUsingBrowser = _interopRequireDefault(require('./downscaleImageToDataURLUsingBrowser'));

var _downscaleImageToDataURLUsingWorker = _interopRequireWildcard(require('./downscaleImageToDataURLUsingWorker'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function downscaleImageToDataURL(blob, maxWidth, maxHeight, type, quality) {
  if ((0, _downscaleImageToDataURLUsingWorker.checkSupport)()) {
    return (0, _downscaleImageToDataURLUsingWorker.default)(blob, maxWidth, maxHeight, type, quality);
  }

  return (0, _downscaleImageToDataURLUsingBrowser.default)(blob, maxWidth, maxHeight, type, quality);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTC5qcyJdLCJuYW1lcyI6WyJkb3duc2NhbGVJbWFnZVRvRGF0YVVSTCIsImJsb2IiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInR5cGUiLCJxdWFsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBSWUsU0FBU0EsdUJBQVQsQ0FBaUNDLElBQWpDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsRUFBNERDLElBQTVELEVBQWtFQyxPQUFsRSxFQUEyRTtBQUN4RixNQUFJLHVEQUFKLEVBQXFCO0FBQ25CLFdBQU8saURBQW1DSixJQUFuQyxFQUF5Q0MsUUFBekMsRUFBbURDLFNBQW5ELEVBQThEQyxJQUE5RCxFQUFvRUMsT0FBcEUsQ0FBUDtBQUNEOztBQUVELFNBQU8sa0RBQW9DSixJQUFwQyxFQUEwQ0MsUUFBMUMsRUFBb0RDLFNBQXBELEVBQStEQyxJQUEvRCxFQUFxRUMsT0FBckUsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdCcm93c2VyIGZyb20gJy4vZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ0Jyb3dzZXInO1xuaW1wb3J0IGRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdXb3JrZXIsIHtcbiAgY2hlY2tTdXBwb3J0IGFzIHN1cHBvcnRXb3JrZXJcbn0gZnJvbSAnLi9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkwoYmxvYiwgbWF4V2lkdGgsIG1heEhlaWdodCwgdHlwZSwgcXVhbGl0eSkge1xuICBpZiAoc3VwcG9ydFdvcmtlcigpKSB7XG4gICAgcmV0dXJuIGRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdXb3JrZXIoYmxvYiwgbWF4V2lkdGgsIG1heEhlaWdodCwgdHlwZSwgcXVhbGl0eSk7XG4gIH1cblxuICByZXR1cm4gZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ0Jyb3dzZXIoYmxvYiwgbWF4V2lkdGgsIG1heEhlaWdodCwgdHlwZSwgcXVhbGl0eSk7XG59XG4iXX0=
