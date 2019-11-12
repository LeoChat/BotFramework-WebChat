'use strict';

var cov_2etiqk0610 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Activity/Timestamp.js';
  var hash = '90e5aac65795044d78834bcbc7cef66cd2b7d1ff';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Activity/Timestamp.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 23,
          column: 1
        }
      },
      '1': {
        start: {
          line: 11,
          column: 32
        },
        end: {
          line: 11,
          column: 49
        }
      },
      '2': {
        start: {
          line: 12,
          column: 45
        },
        end: {
          line: 12,
          column: 58
        }
      },
      '3': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      '4': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 17
        }
      },
      '5': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 22,
          column: 4
        }
      },
      '6': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      },
      '7': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 34,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 10,
            column: 18
          },
          end: {
            line: 10,
            column: 19
          }
        },
        loc: {
          start: {
            line: 10,
            column: 62
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 14,
              column: 2
            },
            end: {
              line: 16,
              column: 3
            }
          },
          {
            start: {
              line: 14,
              column: 2
            },
            end: {
              line: 16,
              column: 3
            }
          }
        ],
        line: 14
      },
      '1': {
        loc: {
          start: {
            line: 19,
            column: 57
          },
          end: {
            line: 19,
            column: 72
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 57
            },
            end: {
              line: 19,
              column: 66
            }
          },
          {
            start: {
              line: 19,
              column: 70
            },
            end: {
              line: 19,
              column: 72
            }
          }
        ],
        line: 19
      },
      '2': {
        loc: {
          start: {
            line: 20,
            column: 7
          },
          end: {
            line: 20,
            column: 111
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 20,
              column: 40
            },
            end: {
              line: 20,
              column: 74
            }
          },
          {
            start: {
              line: 20,
              column: 77
            },
            end: {
              line: 20,
              column: 111
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
      '7': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '90e5aac65795044d78834bcbc7cef66cd2b7d1ff'
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

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AbsoluteTime = _interopRequireDefault(require('../Utils/AbsoluteTime'));

var _RelativeTime = _interopRequireDefault(require('../Utils/RelativeTime'));

var _useStyleOptions = _interopRequireDefault(require('../hooks/useStyleOptions'));

var _useStyleSet = _interopRequireDefault(require('../hooks/useStyleSet'));

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

cov_2etiqk0610.s[0]++;

var Timestamp = function Timestamp(_ref) {
  var timestamp = _ref.activity.timestamp,
    className = _ref.className;
  cov_2etiqk0610.f[0]++;

  var _ref2 = (cov_2etiqk0610.s[1]++, (0, _useStyleOptions.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    timestampFormat = _ref3[0].timestampFormat;

  var _ref4 = (cov_2etiqk0610.s[2]++, (0, _useStyleSet.default)()),
    _ref5 = _slicedToArray(_ref4, 1),
    timestampStyleSet = _ref5[0].timestamp;

  cov_2etiqk0610.s[3]++;

  if (!timestamp) {
    cov_2etiqk0610.b[0][0]++;
    cov_2etiqk0610.s[4]++;
    return false;
  } else {
    cov_2etiqk0610.b[0][1]++;
  }

  cov_2etiqk0610.s[5]++;
  return _react.default.createElement(
    'span',
    {
      className: (0, _classnames.default)(
        timestampStyleSet + '',
        ((cov_2etiqk0610.b[1][0]++, className) || (cov_2etiqk0610.b[1][1]++, '')) + ''
      )
    },
    timestampFormat === 'relative'
      ? (cov_2etiqk0610.b[2][0]++,
        _react.default.createElement(_RelativeTime.default, {
          value: timestamp
        }))
      : (cov_2etiqk0610.b[2][1]++,
        _react.default.createElement(_AbsoluteTime.default, {
          value: timestamp
        }))
  );
};

cov_2etiqk0610.s[6]++;
Timestamp.defaultProps = {
  className: ''
};
cov_2etiqk0610.s[7]++;
Timestamp.propTypes = {
  activity: _propTypes.default.shape({
    timestamp: _propTypes.default.string.isRequired
  }).isRequired,
  className: _propTypes.default.string
};
var _default = Timestamp;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9UaW1lc3RhbXAuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wIiwidGltZXN0YW1wIiwiYWN0aXZpdHkiLCJjbGFzc05hbWUiLCJ0aW1lc3RhbXBGb3JtYXQiLCJ0aW1lc3RhbXBTdHlsZVNldCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQXpDQyxRQUF5QyxDQUE3QkQsU0FBNkI7QUFBQSxNQUFoQkUsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQUE7O0FBQUEsc0NBQzlCLCtCQUQ4QjtBQUFBO0FBQUEsTUFDbkRDLGVBRG1ELFlBQ25EQSxlQURtRDs7QUFBQSxzQ0FFakIsMkJBRmlCO0FBQUE7QUFBQSxNQUV4Q0MsaUJBRndDLFlBRW5ESixTQUZtRDs7QUFBQTs7QUFJNUQsTUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQUE7QUFBQTtBQUNkLFdBQU8sS0FBUDtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQUo0RDtBQVE1RCxTQUNFO0FBQU0sSUFBQSxTQUFTLEVBQUUseUJBQVdJLGlCQUFpQixHQUFHLEVBQS9CLEVBQW1DLENBQUMsMkJBQUFGLFNBQVMsZ0NBQUksRUFBSixDQUFWLElBQW9CLEVBQXZEO0FBQWpCLEtBQ0dDLGVBQWUsS0FBSyxVQUFwQiw4QkFBaUMsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEtBQUssRUFBRUg7QUFBckIsSUFBakMsK0JBQXNFLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUVBO0FBQXJCLElBQXRFLENBREgsQ0FERjtBQUtELENBYkQ7OztBQWVBRCxTQUFTLENBQUNNLFlBQVYsR0FBeUI7QUFDdkJILEVBQUFBLFNBQVMsRUFBRTtBQURZLENBQXpCOztBQUlBSCxTQUFTLENBQUNPLFNBQVYsR0FBc0I7QUFDcEJMLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJSLElBQUFBLFNBQVMsRUFBRU8sbUJBQVVFLE1BQVYsQ0FBaUJDO0FBREosR0FBaEIsRUFFUEEsVUFIaUI7QUFJcEJSLEVBQUFBLFNBQVMsRUFBRUssbUJBQVVFO0FBSkQsQ0FBdEI7ZUFPZVYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBYnNvbHV0ZVRpbWUgZnJvbSAnLi4vVXRpbHMvQWJzb2x1dGVUaW1lJztcbmltcG9ydCBSZWxhdGl2ZVRpbWUgZnJvbSAnLi4vVXRpbHMvUmVsYXRpdmVUaW1lJztcbmltcG9ydCB1c2VTdHlsZU9wdGlvbnMgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVPcHRpb25zJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IFRpbWVzdGFtcCA9ICh7IGFjdGl2aXR5OiB7IHRpbWVzdGFtcCB9LCBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBbeyB0aW1lc3RhbXBGb3JtYXQgfV0gPSB1c2VTdHlsZU9wdGlvbnMoKTtcbiAgY29uc3QgW3sgdGltZXN0YW1wOiB0aW1lc3RhbXBTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgaWYgKCF0aW1lc3RhbXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh0aW1lc3RhbXBTdHlsZVNldCArICcnLCAoY2xhc3NOYW1lIHx8ICcnKSArICcnKX0+XG4gICAgICB7dGltZXN0YW1wRm9ybWF0ID09PSAncmVsYXRpdmUnID8gPFJlbGF0aXZlVGltZSB2YWx1ZT17dGltZXN0YW1wfSAvPiA6IDxBYnNvbHV0ZVRpbWUgdmFsdWU9e3RpbWVzdGFtcH0gLz59XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuVGltZXN0YW1wLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuVGltZXN0YW1wLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGltZXN0YW1wOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lc3RhbXA7XG4iXX0=
