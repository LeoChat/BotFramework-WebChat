'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

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

var AudioContent = function AudioContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    audioContentStyleSet = _useStyleSet2[0].audioContent;

  return _react.default.createElement('audio', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: audioContentStyleSet,
    controls: true,
    loop: loop,
    poster: poster,
    src: src
  });
};

AudioContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false,
  poster: ''
};
AudioContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  poster: _propTypes.default.string,
  src: _propTypes.default.string.isRequired
};
var _default = AudioContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImxvb3AiLCJwb3N0ZXIiLCJzcmMiLCJhdWRpb0NvbnRlbnRTdHlsZVNldCIsImF1ZGlvQ29udGVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTBDO0FBQUEsTUFBdkNDLEdBQXVDLFFBQXZDQSxHQUF1QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTs7QUFBQSxxQkFDWiw0QkFEWTtBQUFBO0FBQUEsTUFDdENDLG9CQURzQyxvQkFDcERDLFlBRG9EOztBQUc3RCxTQUNFO0FBQ0Usa0JBQVlOLEdBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLElBQUEsU0FBUyxFQUFFSSxvQkFIYjtBQUlFLElBQUEsUUFBUSxFQUFFLElBSlo7QUFLRSxJQUFBLElBQUksRUFBRUgsSUFMUjtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxHQUFHLEVBQUVDO0FBUFAsSUFERjtBQVdELENBZEQ7O0FBZ0JBTCxZQUFZLENBQUNRLFlBQWIsR0FBNEI7QUFDMUJQLEVBQUFBLEdBQUcsRUFBRSxFQURxQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLEtBRmdCO0FBRzFCQyxFQUFBQSxJQUFJLEVBQUUsS0FIb0I7QUFJMUJDLEVBQUFBLE1BQU0sRUFBRTtBQUprQixDQUE1QjtBQU9BSixZQUFZLENBQUNTLFNBQWIsR0FBeUI7QUFDdkJSLEVBQUFBLEdBQUcsRUFBRVMsbUJBQVVDLE1BRFE7QUFFdkJULEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVFLElBRkc7QUFHdkJULEVBQUFBLElBQUksRUFBRU8sbUJBQVVFLElBSE87QUFJdkJSLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVDLE1BSks7QUFLdkJOLEVBQUFBLEdBQUcsRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJFO0FBTEMsQ0FBekI7ZUFRZWIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBBdWRpb0NvbnRlbnQgPSAoeyBhbHQsIGF1dG9QbGF5LCBsb29wLCBwb3N0ZXIsIHNyYyB9KSA9PiB7XG4gIGNvbnN0IFt7IGF1ZGlvQ29udGVudDogYXVkaW9Db250ZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGF1ZGlvXG4gICAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgICBhdXRvUGxheT17YXV0b1BsYXl9XG4gICAgICBjbGFzc05hbWU9e2F1ZGlvQ29udGVudFN0eWxlU2V0fVxuICAgICAgY29udHJvbHM9e3RydWV9XG4gICAgICBsb29wPXtsb29wfVxuICAgICAgcG9zdGVyPXtwb3N0ZXJ9XG4gICAgICBzcmM9e3NyY31cbiAgICAvPlxuICApO1xufTtcblxuQXVkaW9Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgYXV0b1BsYXk6IGZhbHNlLFxuICBsb29wOiBmYWxzZSxcbiAgcG9zdGVyOiAnJ1xufTtcblxuQXVkaW9Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sLFxuICBwb3N0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb0NvbnRlbnQ7XG4iXX0=
