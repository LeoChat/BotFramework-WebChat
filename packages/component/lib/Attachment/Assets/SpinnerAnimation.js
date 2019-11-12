'use strict';

var cov_752ghyxau = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/Assets/SpinnerAnimation.js';
  var hash = '068896a483a35cbc7db024a58215e624438c089c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/Assets/SpinnerAnimation.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 25
        },
        end: {
          line: 9,
          column: 1
        }
      },
      '1': {
        start: {
          line: 6,
          column: 59
        },
        end: {
          line: 6,
          column: 72
        }
      },
      '2': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 54
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 5,
            column: 26
          }
        },
        loc: {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '068896a483a35cbc7db024a58215e624438c089c'
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

var _react = _interopRequireDefault(require('react'));

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

cov_752ghyxau.s[0]++;

var SpinnerAnimation = function SpinnerAnimation() {
  cov_752ghyxau.f[0]++;

  var _ref = (cov_752ghyxau.s[1]++, (0, _useStyleSet.default)()),
    _ref2 = _slicedToArray(_ref, 1),
    spinnerAnimationStyleSet = _ref2[0].spinnerAnimation;

  cov_752ghyxau.s[2]++;
  return _react.default.createElement('div', {
    className: spinnerAnimationStyleSet
  });
};

var _default = SpinnerAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0Fzc2V0cy9TcGlubmVyQW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbIlNwaW5uZXJBbmltYXRpb24iLCJzcGlubmVyQW5pbWF0aW9uU3R5bGVTZXQiLCJzcGlubmVyQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsb0NBQzRCLDJCQUQ1QjtBQUFBO0FBQUEsTUFDRkMsd0JBREUsWUFDcEJDLGdCQURvQjs7QUFBQTtBQUc3QixTQUFPO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLElBQVA7QUFDRCxDQUpEOztlQU1lRCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi8uLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IFNwaW5uZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt7IHNwaW5uZXJBbmltYXRpb246IHNwaW5uZXJBbmltYXRpb25TdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzcGlubmVyQW5pbWF0aW9uU3R5bGVTZXR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lckFuaW1hdGlvbjtcbiJdfQ==
