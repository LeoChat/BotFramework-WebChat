'use strict';

var cov_1q9a9prnud = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/IconButton.js';
  var hash = '6f5e6a80b42fad8a19a642b5d888605d3ecd71dc';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/IconButton.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 53
        },
        end: {
          line: 8,
          column: 66
        }
      },
      '2': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      '3': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 29,
          column: 2
        }
      },
      '4': {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 37,
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
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 72
          },
          end: {
            line: 21,
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
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '6f5e6a80b42fad8a19a642b5d888605d3ecd71dc'
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

cov_1q9a9prnud.s[0]++;

var IconButton = function IconButton(_ref) {
  var alt = _ref.alt,
    children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    onClick = _ref.onClick;
  cov_1q9a9prnud.f[0]++;

  var _ref2 = (cov_1q9a9prnud.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    sendBoxButtonStyleSet = _ref3[0].sendBoxButton;

  cov_1q9a9prnud.s[2]++;
  return _react.default.createElement(
    'button',
    {
      className: (0, _classnames.default)(sendBoxButtonStyleSet + '', className + ''),
      disabled: disabled,
      onClick: onClick,
      title: alt,
      type: 'button'
    },
    children
  );
};

cov_1q9a9prnud.s[3]++;
IconButton.defaultProps = {
  alt: '',
  children: undefined,
  className: '',
  disabled: false,
  onClick: undefined
};
cov_1q9a9prnud.s[4]++;
IconButton.propTypes = {
  alt: _propTypes.default.string,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = IconButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ljb25CdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsImFsdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwic2VuZEJveEJ1dHRvblN0eWxlU2V0Iiwic2VuZEJveEJ1dHRvbiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXFEO0FBQUEsTUFBbERDLEdBQWtELFFBQWxEQSxHQUFrRDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUFBOztBQUFBLHNDQUNuQiwyQkFEbUI7QUFBQTtBQUFBLE1BQzlDQyxxQkFEOEMsWUFDN0RDLGFBRDZEOztBQUFBO0FBR3RFLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSx5QkFBV0QscUJBQXFCLEdBQUcsRUFBbkMsRUFBdUNILFNBQVMsR0FBRyxFQUFuRCxDQURiO0FBRUUsSUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxJQUFBLE9BQU8sRUFBRUMsT0FIWDtBQUlFLElBQUEsS0FBSyxFQUFFSixHQUpUO0FBS0UsSUFBQSxJQUFJLEVBQUM7QUFMUCxLQU9HQyxRQVBILENBREY7QUFXRCxDQWREOzs7QUFnQkFGLFVBQVUsQ0FBQ1EsWUFBWCxHQUEwQjtBQUN4QlAsRUFBQUEsR0FBRyxFQUFFLEVBRG1CO0FBRXhCQyxFQUFBQSxRQUFRLEVBQUVPLFNBRmM7QUFHeEJOLEVBQUFBLFNBQVMsRUFBRSxFQUhhO0FBSXhCQyxFQUFBQSxRQUFRLEVBQUUsS0FKYztBQUt4QkMsRUFBQUEsT0FBTyxFQUFFSTtBQUxlLENBQTFCOztBQVFBVCxVQUFVLENBQUNVLFNBQVgsR0FBdUI7QUFDckJULEVBQUFBLEdBQUcsRUFBRVUsbUJBQVVDLE1BRE07QUFFckJWLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVFLEdBRkM7QUFHckJWLEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVDLE1BSEE7QUFJckJSLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVHLElBSkM7QUFLckJULEVBQUFBLE9BQU8sRUFBRU0sbUJBQVVJO0FBTEUsQ0FBdkI7ZUFRZWYsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IEljb25CdXR0b24gPSAoeyBhbHQsIGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgW3sgc2VuZEJveEJ1dHRvbjogc2VuZEJveEJ1dHRvblN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzZW5kQm94QnV0dG9uU3R5bGVTZXQgKyAnJywgY2xhc3NOYW1lICsgJycpfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHRpdGxlPXthbHR9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5JY29uQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNsaWNrOiB1bmRlZmluZWRcbn07XG5cbkljb25CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b247XG4iXX0=
