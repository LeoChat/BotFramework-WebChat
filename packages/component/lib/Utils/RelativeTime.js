'use strict';

var cov_1u42i5redz = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/RelativeTime.js';
  var hash = 'b335d52f27c8ee360673f003ba1bd7a4b64f0f98';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/RelativeTime.js',
    statementMap: {
      '0': {
        start: {
          line: 14,
          column: 23
        },
        end: {
          line: 14,
          column: 28
        }
      },
      '1': {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 41
        }
      },
      '2': {
        start: {
          line: 18,
          column: 14
        },
        end: {
          line: 18,
          column: 24
        }
      },
      '3': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 84
        }
      },
      '4': {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 40,
          column: 1
        }
      },
      '5': {
        start: {
          line: 24,
          column: 32
        },
        end: {
          line: 24,
          column: 78
        }
      },
      '6': {
        start: {
          line: 26,
          column: 15
        },
        end: {
          line: 26,
          column: 50
        }
      },
      '7': {
        start: {
          line: 27,
          column: 28
        },
        end: {
          line: 27,
          column: 54
        }
      },
      '8': {
        start: {
          line: 29,
          column: 25
        },
        end: {
          line: 31,
          column: 23
        }
      },
      '9': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 31
        }
      },
      '10': {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      },
      '11': {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 44,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: 'nextTimer',
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 18
          }
        },
        loc: {
          start: {
            line: 16,
            column: 27
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 16
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 23,
            column: 22
          }
        },
        loc: {
          start: {
            line: 23,
            column: 36
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 29,
            column: 37
          },
          end: {
            line: 29,
            column: 38
          }
        },
        loc: {
          start: {
            line: 29,
            column: 43
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 83
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 20,
              column: 22
            },
            end: {
              line: 20,
              column: 26
            }
          },
          {
            start: {
              line: 20,
              column: 29
            },
            end: {
              line: 20,
              column: 83
            }
          }
        ],
        line: 20
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b335d52f27c8ee360673f003ba1bd7a4b64f0f98'
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
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _Timer = _interopRequireDefault(require('./Timer'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useLocalizeDate = _interopRequireDefault(require('../hooks/useLocalizeDate'));

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// This function calculates the next absolute time that the timer should be fired based on the origin (original time received), interval, and current time.
// If the origin is t=260, and we are currently at t=1000, nextTimer must return t=60260.
// If the origin is t=260, and we are currently at t=60260 (exact landing), we must return t=120260, not t=60260.
// This is for fixing bug #2103: https://github.com/microsoft/BotFramework-WebChat/issues/2103.
var TIMER_INTERVAL = (cov_1u42i5redz.s[0]++, 60000);

function nextTimer(origin) {
  cov_1u42i5redz.f[0]++;
  var time = (cov_1u42i5redz.s[1]++, new Date(origin).getTime());
  var now = (cov_1u42i5redz.s[2]++, Date.now());
  cov_1u42i5redz.s[3]++;
  return time > now
    ? (cov_1u42i5redz.b[0][0]++, time)
    : (cov_1u42i5redz.b[0][1]++, now + TIMER_INTERVAL - ((now - time) % TIMER_INTERVAL));
}

cov_1u42i5redz.s[4]++;

var RelativeTime = function RelativeTime(_ref) {
  var value = _ref.value;
  cov_1u42i5redz.f[1]++;
  var localizedAbsoluteTime =
    (cov_1u42i5redz.s[5]++, (0, _useLocalize.default)('SentAt') + (0, _useLocalizeDate.default)(value));
  var text = (cov_1u42i5redz.s[6]++, (0, _useLocalize.default)('X minutes ago', value));

  var _ref2 = (cov_1u42i5redz.s[7]++, (0, _react.useState)(nextTimer(value))),
    _ref3 = _slicedToArray(_ref2, 2),
    timer = _ref3[0],
    setTimer = _ref3[1];

  var handleInterval =
    (cov_1u42i5redz.s[8]++,
    (0, _react.useCallback)(
      function() {
        cov_1u42i5redz.f[2]++;
        cov_1u42i5redz.s[9]++;
        setTimer(nextTimer(value));
      },
      [setTimer, value]
    ));
  cov_1u42i5redz.s[10]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: localizedAbsoluteTime
    }),
    _react.default.createElement(
      'span',
      {
        'aria-hidden': true
      },
      text
    ),
    _react.default.createElement(_Timer.default, {
      at: timer,
      onInterval: handleInterval
    })
  );
};

cov_1u42i5redz.s[11]++;
RelativeTime.propTypes = {
  value: _propTypes.default.string.isRequired
};
var _default = RelativeTime;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9SZWxhdGl2ZVRpbWUuanMiXSwibmFtZXMiOlsiVElNRVJfSU5URVJWQUwiLCJuZXh0VGltZXIiLCJvcmlnaW4iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJSZWxhdGl2ZVRpbWUiLCJ2YWx1ZSIsImxvY2FsaXplZEFic29sdXRlVGltZSIsInRleHQiLCJ0aW1lciIsInNldFRpbWVyIiwiaGFuZGxlSW50ZXJ2YWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYywyQkFBRyxLQUFILENBQXBCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQUE7QUFDekIsTUFBTUMsSUFBSSwyQkFBRyxJQUFJQyxJQUFKLENBQVNGLE1BQVQsRUFBaUJHLE9BQWpCLEVBQUgsQ0FBVjtBQUNBLE1BQU1DLEdBQUcsMkJBQUdGLElBQUksQ0FBQ0UsR0FBTCxFQUFILENBQVQ7QUFGeUI7QUFJekIsU0FBT0gsSUFBSSxHQUFHRyxHQUFQLDhCQUFhSCxJQUFiLCtCQUFvQkcsR0FBRyxHQUFHTixjQUFOLEdBQXdCLENBQUNNLEdBQUcsR0FBR0gsSUFBUCxJQUFlSCxjQUEzRCxDQUFQO0FBQ0Q7Ozs7QUFFRCxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQUE7QUFDbEMsTUFBTUMscUJBQXFCLDJCQUFHLDBCQUFZLFFBQVosSUFBd0IsOEJBQWdCRCxLQUFoQixDQUEzQixDQUEzQjtBQUVBLE1BQU1FLElBQUksMkJBQUcsMEJBQVksZUFBWixFQUE2QkYsS0FBN0IsQ0FBSCxDQUFWOztBQUhrQyxzQ0FJUixxQkFBU1AsU0FBUyxDQUFDTyxLQUFELENBQWxCLENBSlE7QUFBQTtBQUFBLE1BSTNCRyxLQUoyQjtBQUFBLE1BSXBCQyxRQUpvQjs7QUFNbEMsTUFBTUMsY0FBYywyQkFBRyx3QkFBWSxZQUFNO0FBQUE7QUFBQTtBQUN2Q0QsSUFBQUEsUUFBUSxDQUFDWCxTQUFTLENBQUNPLEtBQUQsQ0FBVixDQUFSO0FBQ0QsR0FGc0IsRUFFcEIsQ0FBQ0ksUUFBRCxFQUFXSixLQUFYLENBRm9CLENBQUgsQ0FBcEI7QUFOa0M7QUFVbEMsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQztBQUF4QixJQURGLEVBRUU7QUFBTSxtQkFBYTtBQUFuQixLQUEwQkMsSUFBMUIsQ0FGRixFQUdFLDZCQUFDLGNBQUQ7QUFBTyxJQUFBLEVBQUUsRUFBRUMsS0FBWDtBQUFrQixJQUFBLFVBQVUsRUFBRUU7QUFBOUIsSUFIRixDQURGO0FBT0QsQ0FqQkQ7OztBQW1CQU4sWUFBWSxDQUFDTyxTQUFiLEdBQXlCO0FBQ3ZCTixFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQztBQURELENBQXpCO2VBSWVWLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZUxvY2FsaXplRGF0ZSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGl6ZURhdGUnO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIG5leHQgYWJzb2x1dGUgdGltZSB0aGF0IHRoZSB0aW1lciBzaG91bGQgYmUgZmlyZWQgYmFzZWQgb24gdGhlIG9yaWdpbiAob3JpZ2luYWwgdGltZSByZWNlaXZlZCksIGludGVydmFsLCBhbmQgY3VycmVudCB0aW1lLlxuLy8gSWYgdGhlIG9yaWdpbiBpcyB0PTI2MCwgYW5kIHdlIGFyZSBjdXJyZW50bHkgYXQgdD0xMDAwLCBuZXh0VGltZXIgbXVzdCByZXR1cm4gdD02MDI2MC5cbi8vIElmIHRoZSBvcmlnaW4gaXMgdD0yNjAsIGFuZCB3ZSBhcmUgY3VycmVudGx5IGF0IHQ9NjAyNjAgKGV4YWN0IGxhbmRpbmcpLCB3ZSBtdXN0IHJldHVybiB0PTEyMDI2MCwgbm90IHQ9NjAyNjAuXG4vLyBUaGlzIGlzIGZvciBmaXhpbmcgYnVnICMyMTAzOiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTAzLlxuXG5jb25zdCBUSU1FUl9JTlRFUlZBTCA9IDYwMDAwO1xuXG5mdW5jdGlvbiBuZXh0VGltZXIob3JpZ2luKSB7XG4gIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShvcmlnaW4pLmdldFRpbWUoKTtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gdGltZSA+IG5vdyA/IHRpbWUgOiBub3cgKyBUSU1FUl9JTlRFUlZBTCAtICgobm93IC0gdGltZSkgJSBUSU1FUl9JTlRFUlZBTCk7XG59XG5cbmNvbnN0IFJlbGF0aXZlVGltZSA9ICh7IHZhbHVlIH0pID0+IHtcbiAgY29uc3QgbG9jYWxpemVkQWJzb2x1dGVUaW1lID0gdXNlTG9jYWxpemUoJ1NlbnRBdCcpICsgdXNlTG9jYWxpemVEYXRlKHZhbHVlKTtcblxuICBjb25zdCB0ZXh0ID0gdXNlTG9jYWxpemUoJ1ggbWludXRlcyBhZ28nLCB2YWx1ZSk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobmV4dFRpbWVyKHZhbHVlKSk7XG5cbiAgY29uc3QgaGFuZGxlSW50ZXJ2YWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VGltZXIobmV4dFRpbWVyKHZhbHVlKSk7XG4gIH0sIFtzZXRUaW1lciwgdmFsdWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2xvY2FsaXplZEFic29sdXRlVGltZX0gLz5cbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXt0cnVlfT57dGV4dH08L3NwYW4+XG4gICAgICA8VGltZXIgYXQ9e3RpbWVyfSBvbkludGVydmFsPXtoYW5kbGVJbnRlcnZhbH0gLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuUmVsYXRpdmVUaW1lLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsYXRpdmVUaW1lO1xuIl19
