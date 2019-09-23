'use strict';

var cov_16okmlhvpv = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/Assets/SpinnerAnimation.js';
  var hash = '562044118b2cf2c396a9192f94fd28ac13c5a15a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/Assets/SpinnerAnimation.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 88
        }
      },
      '1': {
        start: {
          line: 6,
          column: 43
        },
        end: {
          line: 6,
          column: 88
        }
      },
      '2': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 12,
          column: 2
        }
      },
      '3': {
        start: {
          line: 14,
          column: 34
        },
        end: {
          line: 14,
          column: 102
        }
      },
      '4': {
        start: {
          line: 14,
          column: 70
        },
        end: {
          line: 14,
          column: 82
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 6,
            column: 26
          }
        },
        loc: {
          start: {
            line: 6,
            column: 43
          },
          end: {
            line: 6,
            column: 88
          }
        },
        line: 6
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 14,
            column: 51
          },
          end: {
            line: 14,
            column: 52
          }
        },
        loc: {
          start: {
            line: 14,
            column: 70
          },
          end: {
            line: 14,
            column: 82
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '562044118b2cf2c396a9192f94fd28ac13c5a15a'
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

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_16okmlhvpv.s[0]++;

var SpinnerAnimation = function SpinnerAnimation(_ref) {
  var styleSet = _ref.styleSet;
  cov_16okmlhvpv.f[0]++;
  cov_16okmlhvpv.s[1]++;
  return _react.default.createElement('div', {
    className: styleSet.spinnerAnimation
  });
};

cov_16okmlhvpv.s[2]++;
SpinnerAnimation.propTypes = {
  styleSet: _propTypes.default.shape({
    spinnerAnimation: _propTypes.default.any.isRequired
  }).isRequired
};
var ConnectedSpinnerAnimation =
  (cov_16okmlhvpv.s[3]++,
  (0, _connectToWebChat.default)(function(_ref2) {
    var styleSet = _ref2.styleSet;
    cov_16okmlhvpv.f[1]++;
    cov_16okmlhvpv.s[4]++;
    return {
      styleSet: styleSet
    };
  })(SpinnerAnimation));
var _default = ConnectedSpinnerAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0Fzc2V0cy9TcGlubmVyQW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbIlNwaW5uZXJBbmltYXRpb24iLCJzdHlsZVNldCIsInNwaW5uZXJBbmltYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFueSIsImlzUmVxdWlyZWQiLCJDb25uZWN0ZWRTcGlubmVyQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFLLElBQUEsU0FBUyxFQUFFQSxRQUFRLENBQUNDO0FBQXpCO0FBQTZDLENBQXhGOzs7QUFFQUYsZ0JBQWdCLENBQUNHLFNBQWpCLEdBQTZCO0FBQzNCRixFQUFBQSxRQUFRLEVBQUVHLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCSCxJQUFBQSxnQkFBZ0IsRUFBRUUsbUJBQVVFLEdBQVYsQ0FBY0M7QUFEUixHQUFoQixFQUVQQTtBQUh3QixDQUE3QjtBQU1BLElBQU1DLHlCQUF5QiwyQkFBRywrQkFBaUIsaUJBQW1CO0FBQUEsTUFBaEJQLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBWSxDQUFoRCxFQUFtREQsZ0JBQW5ELENBQUgsQ0FBL0I7ZUFFZVEseUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IFNwaW5uZXJBbmltYXRpb24gPSAoeyBzdHlsZVNldCB9KSA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVTZXQuc3Bpbm5lckFuaW1hdGlvbn0gLz47XG5cblNwaW5uZXJBbmltYXRpb24ucHJvcFR5cGVzID0ge1xuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzcGlubmVyQW5pbWF0aW9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgQ29ubmVjdGVkU3Bpbm5lckFuaW1hdGlvbiA9IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFNwaW5uZXJBbmltYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWRTcGlubmVyQW5pbWF0aW9uO1xuIl19
