'use strict';

var cov_v9spd60dk = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/RelativeTime.js';
  var hash = 'e03d28bf30eb5693995a573e7d9fa65a779bd9d9';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/RelativeTime.js',
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
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 52
        }
      },
      '5': {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 45,
          column: 1
        }
      },
      '6': {
        start: {
          line: 28,
          column: 26
        },
        end: {
          line: 28,
          column: 60
        }
      },
      '7': {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 29,
          column: 54
        }
      },
      '8': {
        start: {
          line: 31,
          column: 32
        },
        end: {
          line: 31,
          column: 95
        }
      },
      '9': {
        start: {
          line: 33,
          column: 25
        },
        end: {
          line: 36,
          column: 23
        }
      },
      '10': {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 38
        }
      },
      '11': {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 31
        }
      },
      '12': {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 44,
          column: 4
        }
      },
      '13': {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 50,
          column: 2
        }
      },
      '14': {
        start: {
          line: 52,
          column: 51
        },
        end: {
          line: 52,
          column: 63
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
        name: 'getText',
        decl: {
          start: {
            line: 23,
            column: 9
          },
          end: {
            line: 23,
            column: 16
          }
        },
        loc: {
          start: {
            line: 23,
            column: 34
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 27,
            column: 22
          }
        },
        loc: {
          start: {
            line: 27,
            column: 46
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 27
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 33,
            column: 37
          },
          end: {
            line: 33,
            column: 38
          }
        },
        loc: {
          start: {
            line: 33,
            column: 43
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 33
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 52,
            column: 32
          },
          end: {
            line: 52,
            column: 33
          }
        },
        loc: {
          start: {
            line: 52,
            column: 51
          },
          end: {
            line: 52,
            column: 63
          }
        },
        line: 52
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
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e03d28bf30eb5693995a573e7d9fa65a779bd9d9'
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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _Timer = _interopRequireDefault(require('./Timer'));

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
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
var TIMER_INTERVAL = (cov_v9spd60dk.s[0]++, 60000);

function nextTimer(origin) {
  cov_v9spd60dk.f[0]++;
  var time = (cov_v9spd60dk.s[1]++, new Date(origin).getTime());
  var now = (cov_v9spd60dk.s[2]++, Date.now());
  cov_v9spd60dk.s[3]++;
  return time > now
    ? (cov_v9spd60dk.b[0][0]++, time)
    : (cov_v9spd60dk.b[0][1]++, now + TIMER_INTERVAL - ((now - time) % TIMER_INTERVAL));
}

function getText(language, value) {
  cov_v9spd60dk.f[1]++;
  cov_v9spd60dk.s[4]++;
  return (0, _Localize.localize)('X minutes ago', language, value);
}

cov_v9spd60dk.s[5]++;

var RelativeTime = function RelativeTime(_ref) {
  var language = _ref.language,
    value = _ref.value;
  cov_v9spd60dk.f[2]++;

  var _ref2 = (cov_v9spd60dk.s[6]++, (0, _react.useState)(getText(language, value))),
    _ref3 = _slicedToArray(_ref2, 2),
    text = _ref3[0],
    setText = _ref3[1];

  var _ref4 = (cov_v9spd60dk.s[7]++, (0, _react.useState)(nextTimer(value))),
    _ref5 = _slicedToArray(_ref4, 2),
    timer = _ref5[0],
    setTimer = _ref5[1];

  var localizedAbsoluteTime =
    (cov_v9spd60dk.s[8]++,
    (0, _Localize.localize)('SentAt', language) + (0, _Localize.getLocaleString)(value, language));
  var handleInterval =
    (cov_v9spd60dk.s[9]++,
    (0, _react.useCallback)(
      function() {
        cov_v9spd60dk.f[3]++;
        cov_v9spd60dk.s[10]++;
        setText(getText(language, value));
        cov_v9spd60dk.s[11]++;
        setTimer(nextTimer(value));
      },
      [language, value]
    ));
  cov_v9spd60dk.s[12]++;
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

cov_v9spd60dk.s[13]++;
RelativeTime.propTypes = {
  language: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref6) {
  var language = _ref6.language;
  cov_v9spd60dk.f[4]++;
  cov_v9spd60dk.s[14]++;
  return {
    language: language
  };
})(RelativeTime);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9SZWxhdGl2ZVRpbWUuanMiXSwibmFtZXMiOlsiVElNRVJfSU5URVJWQUwiLCJuZXh0VGltZXIiLCJvcmlnaW4iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJnZXRUZXh0IiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsIlJlbGF0aXZlVGltZSIsInRleHQiLCJzZXRUZXh0IiwidGltZXIiLCJzZXRUaW1lciIsImxvY2FsaXplZEFic29sdXRlVGltZSIsImhhbmRsZUludGVydmFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsMEJBQUcsS0FBSCxDQUFwQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUFBO0FBQ3pCLE1BQU1DLElBQUksMEJBQUcsSUFBSUMsSUFBSixDQUFTRixNQUFULEVBQWlCRyxPQUFqQixFQUFILENBQVY7QUFDQSxNQUFNQyxHQUFHLDBCQUFHRixJQUFJLENBQUNFLEdBQUwsRUFBSCxDQUFUO0FBRnlCO0FBSXpCLFNBQU9ILElBQUksR0FBR0csR0FBUCw2QkFBYUgsSUFBYiw4QkFBb0JHLEdBQUcsR0FBR04sY0FBTixHQUF3QixDQUFDTSxHQUFHLEdBQUdILElBQVAsSUFBZUgsY0FBM0QsQ0FBUDtBQUNEOztBQUVELFNBQVNPLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxLQUEzQixFQUFrQztBQUFBO0FBQUE7QUFDaEMsU0FBTyx3QkFBUyxlQUFULEVBQTBCRCxRQUExQixFQUFvQ0MsS0FBcEMsQ0FBUDtBQUNEOzs7O0FBRUQsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBeUI7QUFBQSxNQUF0QkYsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQUE7O0FBQUEscUNBQ3BCLHFCQUFTRixPQUFPLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxDQUFoQixDQURvQjtBQUFBO0FBQUEsTUFDckNFLElBRHFDO0FBQUEsTUFDL0JDLE9BRCtCOztBQUFBLHFDQUVsQixxQkFBU1gsU0FBUyxDQUFDUSxLQUFELENBQWxCLENBRmtCO0FBQUE7QUFBQSxNQUVyQ0ksS0FGcUM7QUFBQSxNQUU5QkMsUUFGOEI7O0FBSTVDLE1BQU1DLHFCQUFxQiwwQkFBRyx3QkFBUyxRQUFULEVBQW1CUCxRQUFuQixJQUErQiwrQkFBZ0JDLEtBQWhCLEVBQXVCRCxRQUF2QixDQUFsQyxDQUEzQjtBQUVBLE1BQU1RLGNBQWMsMEJBQUcsd0JBQVksWUFBTTtBQUFBO0FBQUE7QUFDdkNKLElBQUFBLE9BQU8sQ0FBQ0wsT0FBTyxDQUFDQyxRQUFELEVBQVdDLEtBQVgsQ0FBUixDQUFQO0FBRHVDO0FBRXZDSyxJQUFBQSxRQUFRLENBQUNiLFNBQVMsQ0FBQ1EsS0FBRCxDQUFWLENBQVI7QUFDRCxHQUhzQixFQUdwQixDQUFDRCxRQUFELEVBQVdDLEtBQVgsQ0FIb0IsQ0FBSCxDQUFwQjtBQU40QztBQVc1QyxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVNO0FBQXhCLElBREYsRUFFRTtBQUFNLG1CQUFhO0FBQW5CLEtBQTBCSixJQUExQixDQUZGLEVBR0UsNkJBQUMsY0FBRDtBQUFPLElBQUEsRUFBRSxFQUFFRSxLQUFYO0FBQWtCLElBQUEsVUFBVSxFQUFFRztBQUE5QixJQUhGLENBREY7QUFPRCxDQWxCRDs7O0FBb0JBTixZQUFZLENBQUNPLFNBQWIsR0FBeUI7QUFDdkJULEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFdkJYLEVBQUFBLEtBQUssRUFBRVMsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBRkQsQ0FBekI7O2VBS2UsK0JBQWlCLGlCQUFtQjtBQUFBLE1BQWhCWixRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURFLFlBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0TG9jYWxlU3RyaW5nLCBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIG5leHQgYWJzb2x1dGUgdGltZSB0aGF0IHRoZSB0aW1lciBzaG91bGQgYmUgZmlyZWQgYmFzZWQgb24gdGhlIG9yaWdpbiAob3JpZ2luYWwgdGltZSByZWNlaXZlZCksIGludGVydmFsLCBhbmQgY3VycmVudCB0aW1lLlxuLy8gSWYgdGhlIG9yaWdpbiBpcyB0PTI2MCwgYW5kIHdlIGFyZSBjdXJyZW50bHkgYXQgdD0xMDAwLCBuZXh0VGltZXIgbXVzdCByZXR1cm4gdD02MDI2MC5cbi8vIElmIHRoZSBvcmlnaW4gaXMgdD0yNjAsIGFuZCB3ZSBhcmUgY3VycmVudGx5IGF0IHQ9NjAyNjAgKGV4YWN0IGxhbmRpbmcpLCB3ZSBtdXN0IHJldHVybiB0PTEyMDI2MCwgbm90IHQ9NjAyNjAuXG4vLyBUaGlzIGlzIGZvciBmaXhpbmcgYnVnICMyMTAzOiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTAzLlxuXG5jb25zdCBUSU1FUl9JTlRFUlZBTCA9IDYwMDAwO1xuXG5mdW5jdGlvbiBuZXh0VGltZXIob3JpZ2luKSB7XG4gIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShvcmlnaW4pLmdldFRpbWUoKTtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gdGltZSA+IG5vdyA/IHRpbWUgOiBub3cgKyBUSU1FUl9JTlRFUlZBTCAtICgobm93IC0gdGltZSkgJSBUSU1FUl9JTlRFUlZBTCk7XG59XG5cbmZ1bmN0aW9uIGdldFRleHQobGFuZ3VhZ2UsIHZhbHVlKSB7XG4gIHJldHVybiBsb2NhbGl6ZSgnWCBtaW51dGVzIGFnbycsIGxhbmd1YWdlLCB2YWx1ZSk7XG59XG5cbmNvbnN0IFJlbGF0aXZlVGltZSA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKGdldFRleHQobGFuZ3VhZ2UsIHZhbHVlKSk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobmV4dFRpbWVyKHZhbHVlKSk7XG5cbiAgY29uc3QgbG9jYWxpemVkQWJzb2x1dGVUaW1lID0gbG9jYWxpemUoJ1NlbnRBdCcsIGxhbmd1YWdlKSArIGdldExvY2FsZVN0cmluZyh2YWx1ZSwgbGFuZ3VhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZUludGVydmFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRleHQoZ2V0VGV4dChsYW5ndWFnZSwgdmFsdWUpKTtcbiAgICBzZXRUaW1lcihuZXh0VGltZXIodmFsdWUpKTtcbiAgfSwgW2xhbmd1YWdlLCB2YWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemVkQWJzb2x1dGVUaW1lfSAvPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9Pnt0ZXh0fTwvc3Bhbj5cbiAgICAgIDxUaW1lciBhdD17dGltZXJ9IG9uSW50ZXJ2YWw9e2hhbmRsZUludGVydmFsfSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5SZWxhdGl2ZVRpbWUucHJvcFR5cGVzID0ge1xuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlIH0pID0+ICh7IGxhbmd1YWdlIH0pKShSZWxhdGl2ZVRpbWUpO1xuIl19
