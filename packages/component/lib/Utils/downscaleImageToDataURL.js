'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = downscaleImageToDataURL;

var _downscaleImageToDataURLUsingBrowser = _interopRequireDefault(require('./downscaleImageToDataURLUsingBrowser'));

var _downscaleImageToDataURLUsingWorker = _interopRequireWildcard(require('./downscaleImageToDataURLUsingWorker'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTC5qcyJdLCJuYW1lcyI6WyJkb3duc2NhbGVJbWFnZVRvRGF0YVVSTCIsImJsb2IiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInR5cGUiLCJxdWFsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUllLFNBQVNBLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELEVBQTREQyxJQUE1RCxFQUFrRUMsT0FBbEUsRUFBMkU7QUFDeEYsTUFBSSx1REFBSixFQUFxQjtBQUNuQixXQUFPLGlEQUFtQ0osSUFBbkMsRUFBeUNDLFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4REMsSUFBOUQsRUFBb0VDLE9BQXBFLENBQVA7QUFDRDs7QUFFRCxTQUFPLGtEQUFvQ0osSUFBcEMsRUFBMENDLFFBQTFDLEVBQW9EQyxTQUFwRCxFQUErREMsSUFBL0QsRUFBcUVDLE9BQXJFLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nQnJvd3NlciBmcm9tICcuL2Rvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdCcm93c2VyJztcbmltcG9ydCBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyLCB7XG4gIGNoZWNrU3VwcG9ydCBhcyBzdXBwb3J0V29ya2VyXG59IGZyb20gJy4vZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ1dvcmtlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvd25zY2FsZUltYWdlVG9EYXRhVVJMKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpIHtcbiAgaWYgKHN1cHBvcnRXb3JrZXIoKSkge1xuICAgIHJldHVybiBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpO1xuICB9XG5cbiAgcmV0dXJuIGRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdCcm93c2VyKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpO1xufVxuIl19
