'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('./ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('./hooks/useLocalize'));

var _useStyleSet3 = _interopRequireDefault(require('./hooks/useStyleSet'));

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

var ErrorBox = function ErrorBox(_ref) {
  var children = _ref.children,
    message = _ref.message;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    errorBoxStyleSet = _useStyleSet2[0].errorBox;

  var errorMessageText = (0, _useLocalize.default)('ErrorMessage');
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

ErrorBox.defaultProps = {
  children: undefined,
  message: ''
};
ErrorBox.propTypes = {
  children: _propTypes.default.any,
  message: _propTypes.default.string
};
var _default = ErrorBox;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckJveC5qcyJdLCJuYW1lcyI6WyJFcnJvckJveCIsImNoaWxkcmVuIiwibWVzc2FnZSIsImVycm9yQm94U3R5bGVTZXQiLCJlcnJvckJveCIsImVycm9yTWVzc2FnZVRleHQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMkI7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLHFCQUNELDRCQURDO0FBQUE7QUFBQSxNQUN2QkMsZ0JBRHVCLG9CQUNqQ0MsUUFEaUM7O0FBRTFDLE1BQU1DLGdCQUFnQixHQUFHLDBCQUFZLGNBQVosQ0FBekI7QUFFQSxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVBO0FBQXhCLElBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFFRjtBQUFoQixLQUNFLDBDQUFNRCxPQUFOLENBREYsRUFFRSwwQ0FBTUQsUUFBTixDQUZGLENBRkYsQ0FERjtBQVNELENBYkQ7O0FBZUFELFFBQVEsQ0FBQ00sWUFBVCxHQUF3QjtBQUN0QkwsRUFBQUEsUUFBUSxFQUFFTSxTQURZO0FBRXRCTCxFQUFBQSxPQUFPLEVBQUU7QUFGYSxDQUF4QjtBQUtBRixRQUFRLENBQUNRLFNBQVQsR0FBcUI7QUFDbkJQLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVDLEdBREQ7QUFFbkJSLEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVFO0FBRkEsQ0FBckI7ZUFLZVgsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBFcnJvckJveCA9ICh7IGNoaWxkcmVuLCBtZXNzYWdlIH0pID0+IHtcbiAgY29uc3QgW3sgZXJyb3JCb3g6IGVycm9yQm94U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuICBjb25zdCBlcnJvck1lc3NhZ2VUZXh0ID0gdXNlTG9jYWxpemUoJ0Vycm9yTWVzc2FnZScpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17ZXJyb3JNZXNzYWdlVGV4dH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvckJveFN0eWxlU2V0fT5cbiAgICAgICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuRXJyb3JCb3guZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBtZXNzYWdlOiAnJ1xufTtcblxuRXJyb3JCb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3g7XG4iXX0=
