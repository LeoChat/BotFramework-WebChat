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

var HTMLVideoContent = function HTMLVideoContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    videoContentStyleSet = _useStyleSet2[0].videoContent;

  return _react.default.createElement('video', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: videoContentStyleSet,
    controls: true,
    loop: loop,
    poster: poster,
    src: src
  });
};

HTMLVideoContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false,
  poster: ''
};
HTMLVideoContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  poster: _propTypes.default.string,
  src: _propTypes.default.string.isRequired
};
var _default = HTMLVideoContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0hUTUxWaWRlb0NvbnRlbnQuanMiXSwibmFtZXMiOlsiSFRNTFZpZGVvQ29udGVudCIsImFsdCIsImF1dG9QbGF5IiwibG9vcCIsInBvc3RlciIsInNyYyIsInZpZGVvQ29udGVudFN0eWxlU2V0IiwidmlkZW9Db250ZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUEwQztBQUFBLE1BQXZDQyxHQUF1QyxRQUF2Q0EsR0FBdUM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQUEscUJBQ2hCLDRCQURnQjtBQUFBO0FBQUEsTUFDMUNDLG9CQUQwQyxvQkFDeERDLFlBRHdEOztBQUdqRSxTQUNFO0FBQ0Usa0JBQVlOLEdBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLElBQUEsU0FBUyxFQUFFSSxvQkFIYjtBQUlFLElBQUEsUUFBUSxFQUFFLElBSlo7QUFLRSxJQUFBLElBQUksRUFBRUgsSUFMUjtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxHQUFHLEVBQUVDO0FBUFAsSUFERjtBQVdELENBZEQ7O0FBZ0JBTCxnQkFBZ0IsQ0FBQ1EsWUFBakIsR0FBZ0M7QUFDOUJQLEVBQUFBLEdBQUcsRUFBRSxFQUR5QjtBQUU5QkMsRUFBQUEsUUFBUSxFQUFFLEtBRm9CO0FBRzlCQyxFQUFBQSxJQUFJLEVBQUUsS0FId0I7QUFJOUJDLEVBQUFBLE1BQU0sRUFBRTtBQUpzQixDQUFoQztBQU9BSixnQkFBZ0IsQ0FBQ1MsU0FBakIsR0FBNkI7QUFDM0JSLEVBQUFBLEdBQUcsRUFBRVMsbUJBQVVDLE1BRFk7QUFFM0JULEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVFLElBRk87QUFHM0JULEVBQUFBLElBQUksRUFBRU8sbUJBQVVFLElBSFc7QUFJM0JSLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVDLE1BSlM7QUFLM0JOLEVBQUFBLEdBQUcsRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJFO0FBTEssQ0FBN0I7ZUFRZWIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgSFRNTFZpZGVvQ29udGVudCA9ICh7IGFsdCwgYXV0b1BsYXksIGxvb3AsIHBvc3Rlciwgc3JjIH0pID0+IHtcbiAgY29uc3QgW3sgdmlkZW9Db250ZW50OiB2aWRlb0NvbnRlbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dmlkZW9cbiAgICAgIGFyaWEtbGFiZWw9e2FsdH1cbiAgICAgIGF1dG9QbGF5PXthdXRvUGxheX1cbiAgICAgIGNsYXNzTmFtZT17dmlkZW9Db250ZW50U3R5bGVTZXR9XG4gICAgICBjb250cm9scz17dHJ1ZX1cbiAgICAgIGxvb3A9e2xvb3B9XG4gICAgICBwb3N0ZXI9e3Bvc3Rlcn1cbiAgICAgIHNyYz17c3JjfVxuICAgIC8+XG4gICk7XG59O1xuXG5IVE1MVmlkZW9Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgYXV0b1BsYXk6IGZhbHNlLFxuICBsb29wOiBmYWxzZSxcbiAgcG9zdGVyOiAnJ1xufTtcblxuSFRNTFZpZGVvQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBsb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgcG9zdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFZpZGVvQ29udGVudDtcbiJdfQ==
