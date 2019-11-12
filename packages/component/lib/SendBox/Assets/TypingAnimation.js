'use strict';

var cov_2535swtzwv = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/Assets/TypingAnimation.js';
  var hash = 'b4dd8f92fc816acca68e4b4ac456c26c03e72e71';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/Assets/TypingAnimation.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 16,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 57
        },
        end: {
          line: 8,
          column: 70
        }
      },
      '2': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      '3': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 20,
          column: 2
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
            line: 7,
            column: 57
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b4dd8f92fc816acca68e4b4ac456c26c03e72e71'
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

var _ScreenReaderText = _interopRequireDefault(require('../../ScreenReaderText'));

var _useStyleSet = _interopRequireDefault(require('../../hooks/useStyleSet'));

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

cov_2535swtzwv.s[0]++;

var TypingAnimation = function TypingAnimation(_ref) {
  var ariaLabel = _ref['aria-label'];
  cov_2535swtzwv.f[0]++;

  var _ref2 = (cov_2535swtzwv.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    typingAnimationStyleSet = _ref3[0].typingAnimation;

  cov_2535swtzwv.s[2]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: ariaLabel
    }),
    _react.default.createElement('div', {
      'aria-hidden': true,
      className: typingAnimationStyleSet
    })
  );
};

cov_2535swtzwv.s[3]++;
TypingAnimation.propTypes = {
  'aria-label': _propTypes.default.string.isRequired
};
var _default = TypingAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZW5kQm94L0Fzc2V0cy9UeXBpbmdBbmltYXRpb24uanMiXSwibmFtZXMiOlsiVHlwaW5nQW5pbWF0aW9uIiwiYXJpYUxhYmVsIiwidHlwaW5nQW5pbWF0aW9uU3R5bGVTZXQiLCJ0eXBpbmdBbmltYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWlDO0FBQUEsTUFBaEJDLFNBQWdCLFFBQTlCLFlBQThCO0FBQUE7O0FBQUEsc0NBQ0EsMkJBREE7QUFBQTtBQUFBLE1BQzdCQyx1QkFENkIsWUFDOUNDLGVBRDhDOztBQUFBO0FBR3ZELFNBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUY7QUFBeEIsSUFERixFQUVFO0FBQUssbUJBQWEsSUFBbEI7QUFBd0IsSUFBQSxTQUFTLEVBQUVDO0FBQW5DLElBRkYsQ0FERjtBQU1ELENBVEQ7OztBQVdBRixlQUFlLENBQUNJLFNBQWhCLEdBQTRCO0FBQzFCLGdCQUFjQyxtQkFBVUMsTUFBVixDQUFpQkM7QUFETCxDQUE1QjtlQUllUCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uLy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uLy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgVHlwaW5nQW5pbWF0aW9uID0gKHsgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwgfSkgPT4ge1xuICBjb25zdCBbeyB0eXBpbmdBbmltYXRpb246IHR5cGluZ0FuaW1hdGlvblN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2FyaWFMYWJlbH0gLz5cbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17dHlwaW5nQW5pbWF0aW9uU3R5bGVTZXR9IC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblR5cGluZ0FuaW1hdGlvbi5wcm9wVHlwZXMgPSB7XG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBpbmdBbmltYXRpb247XG4iXX0=
