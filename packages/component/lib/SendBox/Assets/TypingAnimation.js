'use strict';

var cov_2pdp9lz0d4 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/Assets/TypingAnimation.js';
  var hash = '88f69f712735d883398c7cffab9fd18fcc6e8a3e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/Assets/TypingAnimation.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 12,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 11,
          column: 19
        }
      },
      '2': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      },
      '3': {
        start: {
          line: 21,
          column: 33
        },
        end: {
          line: 21,
          column: 100
        }
      },
      '4': {
        start: {
          line: 21,
          column: 69
        },
        end: {
          line: 21,
          column: 81
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 25
          }
        },
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 11,
            column: 19
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 50
          },
          end: {
            line: 21,
            column: 51
          }
        },
        loc: {
          start: {
            line: 21,
            column: 69
          },
          end: {
            line: 21,
            column: 81
          }
        },
        line: 21
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
    hash: '88f69f712735d883398c7cffab9fd18fcc6e8a3e'
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

var _ScreenReaderText = _interopRequireDefault(require('../../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_2pdp9lz0d4.s[0]++;

var TypingAnimation = function TypingAnimation(_ref) {
  var ariaLabel = _ref['aria-label'],
    styleSet = _ref.styleSet;
  cov_2pdp9lz0d4.f[0]++;
  cov_2pdp9lz0d4.s[1]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: ariaLabel
    }),
    _react.default.createElement('div', {
      'aria-hidden': true,
      className: styleSet.typingAnimation
    })
  );
};

cov_2pdp9lz0d4.s[2]++;
TypingAnimation.propTypes = {
  'aria-label': _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    typingAnimation: _propTypes.default.any.isRequired
  }).isRequired
};
var ConnectedTypingAnimation =
  (cov_2pdp9lz0d4.s[3]++,
  (0, _connectToWebChat.default)(function(_ref2) {
    var styleSet = _ref2.styleSet;
    cov_2pdp9lz0d4.f[1]++;
    cov_2pdp9lz0d4.s[4]++;
    return {
      styleSet: styleSet
    };
  })(TypingAnimation));
var _default = ConnectedTypingAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZW5kQm94L0Fzc2V0cy9UeXBpbmdBbmltYXRpb24uanMiXSwibmFtZXMiOlsiVHlwaW5nQW5pbWF0aW9uIiwiYXJpYUxhYmVsIiwic3R5bGVTZXQiLCJ0eXBpbmdBbmltYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhbnkiLCJDb25uZWN0ZWRUeXBpbmdBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQ3RCO0FBQUEsTUFEdUNDLFNBQ3ZDLFFBRHlCLFlBQ3pCO0FBQUEsTUFEa0RDLFFBQ2xELFFBRGtEQSxRQUNsRDtBQUFBO0FBQUE7QUFBQSxzQ0FBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFRDtBQUF4QixJQURGLEVBRUU7QUFBSyxtQkFBYSxJQUFsQjtBQUF3QixJQUFBLFNBQVMsRUFBRUMsUUFBUSxDQUFDQztBQUE1QyxJQUZGO0FBR2lCLENBSm5COzs7QUFPQUgsZUFBZSxDQUFDSSxTQUFoQixHQUE0QjtBQUMxQixnQkFBY0MsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREw7QUFFMUJMLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDeEJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQVVJLEdBQVYsQ0FBY0Y7QUFEUCxHQUFoQixFQUVQQTtBQUp1QixDQUE1QjtBQU9BLElBQU1HLHdCQUF3QiwyQkFBRywrQkFBaUIsaUJBQW1CO0FBQUEsTUFBaEJSLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBWSxDQUFoRCxFQUFtREYsZUFBbkQsQ0FBSCxDQUE5QjtlQUVlVSx3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi8uLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uLy4uL1NjcmVlblJlYWRlclRleHQnO1xuXG5jb25zdCBUeXBpbmdBbmltYXRpb24gPSAoeyAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCwgc3R5bGVTZXQgfSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17YXJpYUxhYmVsfSAvPlxuICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17c3R5bGVTZXQudHlwaW5nQW5pbWF0aW9ufSAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuVHlwaW5nQW5pbWF0aW9uLnByb3BUeXBlcyA9IHtcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHR5cGluZ0FuaW1hdGlvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IENvbm5lY3RlZFR5cGluZ0FuaW1hdGlvbiA9IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFR5cGluZ0FuaW1hdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZFR5cGluZ0FuaW1hdGlvbjtcbiJdfQ==
