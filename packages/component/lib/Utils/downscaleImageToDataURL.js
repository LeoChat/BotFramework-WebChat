'use strict';

var cov_2j6fdqjy4n = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/downscaleImageToDataURL.js';
  var hash = '022abe416af8bb0791b089ca2da2d0d9ce73c12c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/downscaleImageToDataURL.js',
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
    hash: '022abe416af8bb0791b089ca2da2d0d9ce73c12c'
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
  cov_2j6fdqjy4n.f[0]++;
  cov_2j6fdqjy4n.s[0]++;

  if ((0, _downscaleImageToDataURLUsingWorker.checkSupport)()) {
    cov_2j6fdqjy4n.b[0][0]++;
    cov_2j6fdqjy4n.s[1]++;
    return (0, _downscaleImageToDataURLUsingWorker.default)(blob, maxWidth, maxHeight, type, quality);
  } else {
    cov_2j6fdqjy4n.b[0][1]++;
  }

  cov_2j6fdqjy4n.s[2]++;
  return (0, _downscaleImageToDataURLUsingBrowser.default)(blob, maxWidth, maxHeight, type, quality);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTC5qcyJdLCJuYW1lcyI6WyJkb3duc2NhbGVJbWFnZVRvRGF0YVVSTCIsImJsb2IiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInR5cGUiLCJxdWFsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUllLFNBQVNBLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELEVBQTREQyxJQUE1RCxFQUFrRUMsT0FBbEUsRUFBMkU7QUFBQTtBQUFBOztBQUN4RixNQUFJLHVEQUFKLEVBQXFCO0FBQUE7QUFBQTtBQUNuQixXQUFPLGlEQUFtQ0osSUFBbkMsRUFBeUNDLFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4REMsSUFBOUQsRUFBb0VDLE9BQXBFLENBQVA7QUFDRCxHQUZEO0FBQUE7QUFBQTs7QUFEd0Y7QUFLeEYsU0FBTyxrREFBb0NKLElBQXBDLEVBQTBDQyxRQUExQyxFQUFvREMsU0FBcEQsRUFBK0RDLElBQS9ELEVBQXFFQyxPQUFyRSxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ0Jyb3dzZXIgZnJvbSAnLi9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nQnJvd3Nlcic7XG5pbXBvcnQgZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ1dvcmtlciwge1xuICBjaGVja1N1cHBvcnQgYXMgc3VwcG9ydFdvcmtlclxufSBmcm9tICcuL2Rvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdXb3JrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTChibG9iLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCB0eXBlLCBxdWFsaXR5KSB7XG4gIGlmIChzdXBwb3J0V29ya2VyKCkpIHtcbiAgICByZXR1cm4gZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ1dvcmtlcihibG9iLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCB0eXBlLCBxdWFsaXR5KTtcbiAgfVxuXG4gIHJldHVybiBkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nQnJvd3NlcihibG9iLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCB0eXBlLCBxdWFsaXR5KTtcbn1cbiJdfQ==
