'use strict';

var cov_1dxgt7x9tp = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/ErrorBox.js';
  var hash = '2b6335f7e1d08cb595ab004206d8a39ee928d9cd';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/ErrorBox.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '1': {
        start: {
          line: 9,
          column: 43
        },
        end: {
          line: 9,
          column: 56
        }
      },
      '2': {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 10,
          column: 54
        }
      },
      '3': {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      '4': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      '5': {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 31,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 8,
            column: 18
          }
        },
        loc: {
          start: {
            line: 8,
            column: 44
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '2b6335f7e1d08cb595ab004206d8a39ee928d9cd'
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

var _ScreenReaderText = _interopRequireDefault(require('./ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('./hooks/useLocalize'));

var _useStyleSet = _interopRequireDefault(require('./hooks/useStyleSet'));

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

cov_1dxgt7x9tp.s[0]++;

var ErrorBox = function ErrorBox(_ref) {
  var children = _ref.children,
    message = _ref.message;
  cov_1dxgt7x9tp.f[0]++;

  var _ref2 = (cov_1dxgt7x9tp.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    errorBoxStyleSet = _ref3[0].errorBox;

  var errorMessageText = (cov_1dxgt7x9tp.s[2]++, (0, _useLocalize.default)('ErrorMessage'));
  cov_1dxgt7x9tp.s[3]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: errorMessageText
    }),
    _react.default.createElement(
      'div',
      {
        className: errorBoxStyleSet
      },
      _react.default.createElement('div', null, message),
      _react.default.createElement('div', null, children)
    )
  );
};

cov_1dxgt7x9tp.s[4]++;
ErrorBox.defaultProps = {
  children: undefined,
  message: ''
};
cov_1dxgt7x9tp.s[5]++;
ErrorBox.propTypes = {
  children: _propTypes.default.any,
  message: _propTypes.default.string
};
var _default = ErrorBox;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckJveC5qcyJdLCJuYW1lcyI6WyJFcnJvckJveCIsImNoaWxkcmVuIiwibWVzc2FnZSIsImVycm9yQm94U3R5bGVTZXQiLCJlcnJvckJveCIsImVycm9yTWVzc2FnZVRleHQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEyQjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQTs7QUFBQSxzQ0FDRCwyQkFEQztBQUFBO0FBQUEsTUFDdkJDLGdCQUR1QixZQUNqQ0MsUUFEaUM7O0FBRTFDLE1BQU1DLGdCQUFnQiwyQkFBRywwQkFBWSxjQUFaLENBQUgsQ0FBdEI7QUFGMEM7QUFJMUMsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQTtBQUF4QixJQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBRUY7QUFBaEIsS0FDRSwwQ0FBTUQsT0FBTixDQURGLEVBRUUsMENBQU1ELFFBQU4sQ0FGRixDQUZGLENBREY7QUFTRCxDQWJEOzs7QUFlQUQsUUFBUSxDQUFDTSxZQUFULEdBQXdCO0FBQ3RCTCxFQUFBQSxRQUFRLEVBQUVNLFNBRFk7QUFFdEJMLEVBQUFBLE9BQU8sRUFBRTtBQUZhLENBQXhCOztBQUtBRixRQUFRLENBQUNRLFNBQVQsR0FBcUI7QUFDbkJQLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVDLEdBREQ7QUFFbkJSLEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVFO0FBRkEsQ0FBckI7ZUFLZVgsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBFcnJvckJveCA9ICh7IGNoaWxkcmVuLCBtZXNzYWdlIH0pID0+IHtcbiAgY29uc3QgW3sgZXJyb3JCb3g6IGVycm9yQm94U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuICBjb25zdCBlcnJvck1lc3NhZ2VUZXh0ID0gdXNlTG9jYWxpemUoJ0Vycm9yTWVzc2FnZScpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17ZXJyb3JNZXNzYWdlVGV4dH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvckJveFN0eWxlU2V0fT5cbiAgICAgICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuRXJyb3JCb3guZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBtZXNzYWdlOiAnJ1xufTtcblxuRXJyb3JCb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3g7XG4iXX0=
