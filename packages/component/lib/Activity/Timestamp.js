'use strict';

var cov_15jdukzx5g = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/Timestamp.js';
  var hash = '46c110ad575fe0a20236765e1466bf72268ab91e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/Timestamp.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 23,
          column: 1
        }
      },
      '1': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      '2': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 17
        }
      },
      '3': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 22,
          column: 4
        }
      },
      '4': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      },
      '5': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 37,
          column: 2
        }
      },
      '6': {
        start: {
          line: 39,
          column: 51
        },
        end: {
          line: 39,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 9,
            column: 19
          }
        },
        loc: {
          start: {
            line: 9,
            column: 72
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 9
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 39,
            column: 32
          },
          end: {
            line: 39,
            column: 33
          }
        },
        loc: {
          start: {
            line: 39,
            column: 51
          },
          end: {
            line: 39,
            column: 63
          }
        },
        line: 39
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 10,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          },
          {
            start: {
              line: 10,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          }
        ],
        line: 10
      },
      '1': {
        loc: {
          start: {
            line: 15,
            column: 58
          },
          end: {
            line: 15,
            column: 73
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 15,
              column: 58
            },
            end: {
              line: 15,
              column: 67
            }
          },
          {
            start: {
              line: 15,
              column: 71
            },
            end: {
              line: 15,
              column: 73
            }
          }
        ],
        line: 15
      },
      '2': {
        loc: {
          start: {
            line: 16,
            column: 7
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 17,
              column: 8
            },
            end: {
              line: 17,
              column: 42
            }
          },
          {
            start: {
              line: 19,
              column: 8
            },
            end: {
              line: 19,
              column: 42
            }
          }
        ],
        line: 16
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '46c110ad575fe0a20236765e1466bf72268ab91e'
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

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _RelativeTime = _interopRequireDefault(require('../Utils/RelativeTime'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_15jdukzx5g.s[0]++;

var Timestamp = function Timestamp(_ref) {
  var timestamp = _ref.activity.timestamp,
    className = _ref.className,
    styleSet = _ref.styleSet;
  cov_15jdukzx5g.f[0]++;
  cov_15jdukzx5g.s[1]++;

  if (!timestamp) {
    cov_15jdukzx5g.b[0][0]++;
    cov_15jdukzx5g.s[2]++;
    return false;
  } else {
    cov_15jdukzx5g.b[0][1]++;
  }

  cov_15jdukzx5g.s[3]++;
  return _react.default.createElement(
    'span',
    {
      className: (0, _classnames.default)(
        styleSet.timestamp + '',
        ((cov_15jdukzx5g.b[1][0]++, className) || (cov_15jdukzx5g.b[1][1]++, '')) + ''
      )
    },
    styleSet.options.timestampFormat === 'relative'
      ? (cov_15jdukzx5g.b[2][0]++,
        _react.default.createElement(_RelativeTime.default, {
          value: timestamp
        }))
      : (cov_15jdukzx5g.b[2][1]++,
        _react.default.createElement(_AbsoluteTime.default, {
          value: timestamp
        }))
  );
};

cov_15jdukzx5g.s[4]++;
Timestamp.defaultProps = {
  className: ''
};
cov_15jdukzx5g.s[5]++;
Timestamp.propTypes = {
  activity: _propTypes.default.shape({
    timestamp: _propTypes.default.string.isRequired
  }).isRequired,
  className: _propTypes.default.string,
  styleSet: _propTypes.default.shape({
    timestamp: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_15jdukzx5g.f[1]++;
  cov_15jdukzx5g.s[6]++;
  return {
    styleSet: styleSet
  };
})(Timestamp);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9UaW1lc3RhbXAuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wIiwidGltZXN0YW1wIiwiYWN0aXZpdHkiLCJjbGFzc05hbWUiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJ0aW1lc3RhbXBGb3JtYXQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFzRDtBQUFBLE1BQXZDQyxTQUF1QyxRQUFuREMsUUFBbUQsQ0FBdkNELFNBQXVDO0FBQUEsTUFBMUJFLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBO0FBQUE7O0FBQ3RFLE1BQUksQ0FBQ0gsU0FBTCxFQUFnQjtBQUFBO0FBQUE7QUFDZCxXQUFPLEtBQVA7QUFDRCxHQUZEO0FBQUE7QUFBQTs7QUFEc0U7QUFLdEUsU0FDRTtBQUFNLElBQUEsU0FBUyxFQUFFLHlCQUFXRyxRQUFRLENBQUNILFNBQVQsR0FBcUIsRUFBaEMsRUFBb0MsQ0FBQywyQkFBQUUsU0FBUyxnQ0FBSSxFQUFKLENBQVYsSUFBb0IsRUFBeEQ7QUFBakIsS0FDR0MsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxlQUFqQixLQUFxQyxVQUFyQyw4QkFDQyw2QkFBQyxxQkFBRDtBQUFjLElBQUEsS0FBSyxFQUFFTDtBQUFyQixJQURELCtCQUdDLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUVBO0FBQXJCLElBSEQsQ0FESCxDQURGO0FBU0QsQ0FkRDs7O0FBZ0JBRCxTQUFTLENBQUNPLFlBQVYsR0FBeUI7QUFDdkJKLEVBQUFBLFNBQVMsRUFBRTtBQURZLENBQXpCOztBQUlBSCxTQUFTLENBQUNRLFNBQVYsR0FBc0I7QUFDcEJOLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJULElBQUFBLFNBQVMsRUFBRVEsbUJBQVVFLE1BQVYsQ0FBaUJDO0FBREosR0FBaEIsRUFFUEEsVUFIaUI7QUFJcEJULEVBQUFBLFNBQVMsRUFBRU0sbUJBQVVFLE1BSkQ7QUFLcEJQLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJULElBQUFBLFNBQVMsRUFBRVEsbUJBQVVJLEdBQVYsQ0FBY0Q7QUFERCxHQUFoQixFQUVQQTtBQVBpQixDQUF0Qjs7ZUFVZSwrQkFBaUIsaUJBQW1CO0FBQUEsTUFBaEJSLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBWSxDQUFoRCxFQUFtREosU0FBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBYnNvbHV0ZVRpbWUgZnJvbSAnLi4vVXRpbHMvQWJzb2x1dGVUaW1lJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFJlbGF0aXZlVGltZSBmcm9tICcuLi9VdGlscy9SZWxhdGl2ZVRpbWUnO1xuXG5jb25zdCBUaW1lc3RhbXAgPSAoeyBhY3Rpdml0eTogeyB0aW1lc3RhbXAgfSwgY2xhc3NOYW1lLCBzdHlsZVNldCB9KSA9PiB7XG4gIGlmICghdGltZXN0YW1wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVTZXQudGltZXN0YW1wICsgJycsIChjbGFzc05hbWUgfHwgJycpICsgJycpfT5cbiAgICAgIHtzdHlsZVNldC5vcHRpb25zLnRpbWVzdGFtcEZvcm1hdCA9PT0gJ3JlbGF0aXZlJyA/IChcbiAgICAgICAgPFJlbGF0aXZlVGltZSB2YWx1ZT17dGltZXN0YW1wfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEFic29sdXRlVGltZSB2YWx1ZT17dGltZXN0YW1wfSAvPlxuICAgICAgKX1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5UaW1lc3RhbXAuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59O1xuXG5UaW1lc3RhbXAucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0aW1lc3RhbXA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRpbWVzdGFtcDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFRpbWVzdGFtcCk7XG4iXX0=
