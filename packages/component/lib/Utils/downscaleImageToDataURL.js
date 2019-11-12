'use strict';

var cov_2q4rrkp0fe = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/downscaleImageToDataURL.js';
  var hash = 'abdaf7e332f0bfa1b3eca9ff220694130355bccb';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/downscaleImageToDataURL.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 9,
          column: 3
        }
      },
      '1': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 88
        }
      },
      '2': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 87
        }
      }
    },
    fnMap: {
      '0': {
        name: 'downscaleImageToDataURL',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 47
          }
        },
        loc: {
          start: {
            line: 6,
            column: 90
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          },
          {
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          }
        ],
        line: 7
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'abdaf7e332f0bfa1b3eca9ff220694130355bccb'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

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
  cov_2q4rrkp0fe.f[0]++;
  cov_2q4rrkp0fe.s[0]++;

  if ((0, _downscaleImageToDataURLUsingWorker.checkSupport)()) {
    cov_2q4rrkp0fe.b[0][0]++;
    cov_2q4rrkp0fe.s[1]++;
    return (0, _downscaleImageToDataURLUsingWorker.default)(blob, maxWidth, maxHeight, type, quality);
  } else {
    cov_2q4rrkp0fe.b[0][1]++;
  }

  cov_2q4rrkp0fe.s[2]++;
  return (0, _downscaleImageToDataURLUsingBrowser.default)(blob, maxWidth, maxHeight, type, quality);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTC5qcyJdLCJuYW1lcyI6WyJkb3duc2NhbGVJbWFnZVRvRGF0YVVSTCIsImJsb2IiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInR5cGUiLCJxdWFsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBSWUsU0FBU0EsdUJBQVQsQ0FBaUNDLElBQWpDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsRUFBNERDLElBQTVELEVBQWtFQyxPQUFsRSxFQUEyRTtBQUFBO0FBQUE7O0FBQ3hGLE1BQUksdURBQUosRUFBcUI7QUFBQTtBQUFBO0FBQ25CLFdBQU8saURBQW1DSixJQUFuQyxFQUF5Q0MsUUFBekMsRUFBbURDLFNBQW5ELEVBQThEQyxJQUE5RCxFQUFvRUMsT0FBcEUsQ0FBUDtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQUR3RjtBQUt4RixTQUFPLGtEQUFvQ0osSUFBcEMsRUFBMENDLFFBQTFDLEVBQW9EQyxTQUFwRCxFQUErREMsSUFBL0QsRUFBcUVDLE9BQXJFLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nQnJvd3NlciBmcm9tICcuL2Rvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdCcm93c2VyJztcbmltcG9ydCBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyLCB7XG4gIGNoZWNrU3VwcG9ydCBhcyBzdXBwb3J0V29ya2VyXG59IGZyb20gJy4vZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ1dvcmtlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvd25zY2FsZUltYWdlVG9EYXRhVVJMKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpIHtcbiAgaWYgKHN1cHBvcnRXb3JrZXIoKSkge1xuICAgIHJldHVybiBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpO1xuICB9XG5cbiAgcmV0dXJuIGRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdCcm93c2VyKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpO1xufVxuIl19
