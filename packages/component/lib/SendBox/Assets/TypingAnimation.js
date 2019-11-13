'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('../../ScreenReaderText'));

var _useStyleSet3 = _interopRequireDefault(require('../../hooks/useStyleSet'));

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

var TypingAnimation = function TypingAnimation(_ref) {
  var ariaLabel = _ref['aria-label'];

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    typingAnimationStyleSet = _useStyleSet2[0].typingAnimation;

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

TypingAnimation.propTypes = {
  'aria-label': _propTypes.default.string.isRequired
};
var _default = TypingAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZW5kQm94L0Fzc2V0cy9UeXBpbmdBbmltYXRpb24uanMiXSwibmFtZXMiOlsiVHlwaW5nQW5pbWF0aW9uIiwiYXJpYUxhYmVsIiwidHlwaW5nQW5pbWF0aW9uU3R5bGVTZXQiLCJ0eXBpbmdBbmltYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBaUM7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBOUIsWUFBOEI7O0FBQUEscUJBQ0EsNEJBREE7QUFBQTtBQUFBLE1BQzdCQyx1QkFENkIsb0JBQzlDQyxlQUQ4Qzs7QUFHdkQsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFRjtBQUF4QixJQURGLEVBRUU7QUFBSyxtQkFBYSxJQUFsQjtBQUF3QixJQUFBLFNBQVMsRUFBRUM7QUFBbkMsSUFGRixDQURGO0FBTUQsQ0FURDs7QUFXQUYsZUFBZSxDQUFDSSxTQUFoQixHQUE0QjtBQUMxQixnQkFBY0MsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBREwsQ0FBNUI7ZUFJZVAsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi8uLi9TY3JlZW5SZWFkZXJUZXh0JztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi8uLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IFR5cGluZ0FuaW1hdGlvbiA9ICh7ICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsIH0pID0+IHtcbiAgY29uc3QgW3sgdHlwaW5nQW5pbWF0aW9uOiB0eXBpbmdBbmltYXRpb25TdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXthcmlhTGFiZWx9IC8+XG4gICAgICA8ZGl2IGFyaWEtaGlkZGVuPXt0cnVlfSBjbGFzc05hbWU9e3R5cGluZ0FuaW1hdGlvblN0eWxlU2V0fSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5UeXBpbmdBbmltYXRpb24ucHJvcFR5cGVzID0ge1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwaW5nQW5pbWF0aW9uO1xuIl19
