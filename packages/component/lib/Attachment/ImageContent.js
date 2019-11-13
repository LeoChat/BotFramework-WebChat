'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CroppedImage = _interopRequireDefault(require('../Utils/CroppedImage'));

var _useStyleOptions3 = _interopRequireDefault(require('../hooks/useStyleOptions'));

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

var ImageContent = function ImageContent(_ref) {
  var alt = _ref.alt,
    src = _ref.src;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    bubbleImageHeight = _useStyleOptions2[0].bubbleImageHeight;

  return _react.default.createElement(_CroppedImage.default, {
    alt: alt,
    height: bubbleImageHeight,
    src: src,
    width: '100%'
  });
};

ImageContent.defaultProps = {
  alt: ''
};
ImageContent.propTypes = {
  alt: _propTypes.default.string,
  src: _propTypes.default.string.isRequired
};
var _default = ImageContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQ29udGVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNvbnRlbnQiLCJhbHQiLCJzcmMiLCJidWJibGVJbWFnZUhlaWdodCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQSxNQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQUEseUJBQ0wsZ0NBREs7QUFBQTtBQUFBLE1BQzVCQyxpQkFENEIsd0JBQzVCQSxpQkFENEI7O0FBR3JDLFNBQU8sNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEdBQUcsRUFBRUYsR0FBbkI7QUFBd0IsSUFBQSxNQUFNLEVBQUVFLGlCQUFoQztBQUFtRCxJQUFBLEdBQUcsRUFBRUQsR0FBeEQ7QUFBNkQsSUFBQSxLQUFLLEVBQUM7QUFBbkUsSUFBUDtBQUNELENBSkQ7O0FBTUFGLFlBQVksQ0FBQ0ksWUFBYixHQUE0QjtBQUMxQkgsRUFBQUEsR0FBRyxFQUFFO0FBRHFCLENBQTVCO0FBSUFELFlBQVksQ0FBQ0ssU0FBYixHQUF5QjtBQUN2QkosRUFBQUEsR0FBRyxFQUFFSyxtQkFBVUMsTUFEUTtBQUV2QkwsRUFBQUEsR0FBRyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkM7QUFGQyxDQUF6QjtlQUtlUixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDcm9wcGVkSW1hZ2UgZnJvbSAnLi4vVXRpbHMvQ3JvcHBlZEltYWdlJztcblxuaW1wb3J0IHVzZVN0eWxlT3B0aW9ucyBmcm9tICcuLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuXG5jb25zdCBJbWFnZUNvbnRlbnQgPSAoeyBhbHQsIHNyYyB9KSA9PiB7XG4gIGNvbnN0IFt7IGJ1YmJsZUltYWdlSGVpZ2h0IH1dID0gdXNlU3R5bGVPcHRpb25zKCk7XG5cbiAgcmV0dXJuIDxDcm9wcGVkSW1hZ2UgYWx0PXthbHR9IGhlaWdodD17YnViYmxlSW1hZ2VIZWlnaHR9IHNyYz17c3JjfSB3aWR0aD1cIjEwMCVcIiAvPjtcbn07XG5cbkltYWdlQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJydcbn07XG5cbkltYWdlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udGVudDtcbiJdfQ==
