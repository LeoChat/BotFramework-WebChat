'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

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

var IconButton = function IconButton(_ref) {
  var alt = _ref.alt,
    children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    onClick = _ref.onClick;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    sendBoxButtonStyleSet = _useStyleSet2[0].sendBoxButton;

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

IconButton.defaultProps = {
  alt: '',
  children: undefined,
  className: '',
  disabled: false,
  onClick: undefined
};
IconButton.propTypes = {
  alt: _propTypes.default.string,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = IconButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ljb25CdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsImFsdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwic2VuZEJveEJ1dHRvblN0eWxlU2V0Iiwic2VuZEJveEJ1dHRvbiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXFEO0FBQUEsTUFBbERDLEdBQWtELFFBQWxEQSxHQUFrRDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxxQkFDbkIsNEJBRG1CO0FBQUE7QUFBQSxNQUM5Q0MscUJBRDhDLG9CQUM3REMsYUFENkQ7O0FBR3RFLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSx5QkFBV0QscUJBQXFCLEdBQUcsRUFBbkMsRUFBdUNILFNBQVMsR0FBRyxFQUFuRCxDQURiO0FBRUUsSUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxJQUFBLE9BQU8sRUFBRUMsT0FIWDtBQUlFLElBQUEsS0FBSyxFQUFFSixHQUpUO0FBS0UsSUFBQSxJQUFJLEVBQUM7QUFMUCxLQU9HQyxRQVBILENBREY7QUFXRCxDQWREOztBQWdCQUYsVUFBVSxDQUFDUSxZQUFYLEdBQTBCO0FBQ3hCUCxFQUFBQSxHQUFHLEVBQUUsRUFEbUI7QUFFeEJDLEVBQUFBLFFBQVEsRUFBRU8sU0FGYztBQUd4Qk4sRUFBQUEsU0FBUyxFQUFFLEVBSGE7QUFJeEJDLEVBQUFBLFFBQVEsRUFBRSxLQUpjO0FBS3hCQyxFQUFBQSxPQUFPLEVBQUVJO0FBTGUsQ0FBMUI7QUFRQVQsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ3JCVCxFQUFBQSxHQUFHLEVBQUVVLG1CQUFVQyxNQURNO0FBRXJCVixFQUFBQSxRQUFRLEVBQUVTLG1CQUFVRSxHQUZDO0FBR3JCVixFQUFBQSxTQUFTLEVBQUVRLG1CQUFVQyxNQUhBO0FBSXJCUixFQUFBQSxRQUFRLEVBQUVPLG1CQUFVRyxJQUpDO0FBS3JCVCxFQUFBQSxPQUFPLEVBQUVNLG1CQUFVSTtBQUxFLENBQXZCO2VBUWVmLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBJY29uQnV0dG9uID0gKHsgYWx0LCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IFt7IHNlbmRCb3hCdXR0b246IHNlbmRCb3hCdXR0b25TdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc2VuZEJveEJ1dHRvblN0eWxlU2V0ICsgJycsIGNsYXNzTmFtZSArICcnKX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0aXRsZT17YWx0fVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuSWNvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DbGljazogdW5kZWZpbmVkXG59O1xuXG5JY29uQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uO1xuIl19
