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

var YouTubeContent = function YouTubeContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    youTubeContentStyleSet = _useStyleSet2[0].youTubeContent;

  var search = new URLSearchParams({
    autoplay: autoPlay ? 1 : 0,
    loop: loop ? 1 : 0,
    modestbranding: 1
  }).toString();
  return (
    // TODO: We should encodeURI the URL
    _react.default.createElement('iframe', {
      allowFullScreen: true,
      'aria-label': alt,
      className: youTubeContentStyleSet,
      src: 'https://youtube.com/embed/'.concat(embedID, '?').concat(search)
    })
  );
};

YouTubeContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false
};
YouTubeContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  embedID: _propTypes.default.string.isRequired,
  loop: _propTypes.default.bool
};
var _default = YouTubeContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1lvdVR1YmVDb250ZW50LmpzIl0sIm5hbWVzIjpbIllvdVR1YmVDb250ZW50IiwiYWx0IiwiYXV0b1BsYXkiLCJlbWJlZElEIiwibG9vcCIsInlvdVR1YmVDb250ZW50U3R5bGVTZXQiLCJ5b3VUdWJlQ29udGVudCIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImF1dG9wbGF5IiwibW9kZXN0YnJhbmRpbmciLCJ0b1N0cmluZyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBc0M7QUFBQSxNQUFuQ0MsR0FBbUMsUUFBbkNBLEdBQW1DO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEscUJBQ04sNEJBRE07QUFBQTtBQUFBLE1BQ2xDQyxzQkFEa0Msb0JBQ2xEQyxjQURrRDs7QUFHM0QsTUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQUosQ0FBb0I7QUFDakNDLElBQUFBLFFBQVEsRUFBRVAsUUFBUSxHQUFHLENBQUgsR0FBTyxDQURRO0FBRWpDRSxJQUFBQSxJQUFJLEVBQUVBLElBQUksR0FBRyxDQUFILEdBQU8sQ0FGZ0I7QUFHakNNLElBQUFBLGNBQWMsRUFBRTtBQUhpQixHQUFwQixFQUlaQyxRQUpZLEVBQWY7QUFNQSxTQUNFO0FBQ0E7QUFDRSxNQUFBLGVBQWUsRUFBRSxJQURuQjtBQUVFLG9CQUFZVixHQUZkO0FBR0UsTUFBQSxTQUFTLEVBQUVJLHNCQUhiO0FBSUUsTUFBQSxHQUFHLHNDQUErQkYsT0FBL0IsY0FBMENJLE1BQTFDO0FBSkw7QUFGRjtBQVNELENBbEJEOztBQW9CQVAsY0FBYyxDQUFDWSxZQUFmLEdBQThCO0FBQzVCWCxFQUFBQSxHQUFHLEVBQUUsRUFEdUI7QUFFNUJDLEVBQUFBLFFBQVEsRUFBRSxLQUZrQjtBQUc1QkUsRUFBQUEsSUFBSSxFQUFFO0FBSHNCLENBQTlCO0FBTUFKLGNBQWMsQ0FBQ2EsU0FBZixHQUEyQjtBQUN6QlosRUFBQUEsR0FBRyxFQUFFYSxtQkFBVUMsTUFEVTtBQUV6QmIsRUFBQUEsUUFBUSxFQUFFWSxtQkFBVUUsSUFGSztBQUd6QmIsRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUMsTUFBVixDQUFpQkUsVUFIRDtBQUl6QmIsRUFBQUEsSUFBSSxFQUFFVSxtQkFBVUU7QUFKUyxDQUEzQjtlQU9laEIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBZb3VUdWJlQ29udGVudCA9ICh7IGFsdCwgYXV0b1BsYXksIGVtYmVkSUQsIGxvb3AgfSkgPT4ge1xuICBjb25zdCBbeyB5b3VUdWJlQ29udGVudDogeW91VHViZUNvbnRlbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgYXV0b3BsYXk6IGF1dG9QbGF5ID8gMSA6IDAsXG4gICAgbG9vcDogbG9vcCA/IDEgOiAwLFxuICAgIG1vZGVzdGJyYW5kaW5nOiAxXG4gIH0pLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBUT0RPOiBXZSBzaG91bGQgZW5jb2RlVVJJIHRoZSBVUkxcbiAgICA8aWZyYW1lXG4gICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgICBjbGFzc05hbWU9e3lvdVR1YmVDb250ZW50U3R5bGVTZXR9XG4gICAgICBzcmM9e2BodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLyR7ZW1iZWRJRH0/JHtzZWFyY2h9YH1cbiAgICAvPlxuICApO1xufTtcblxuWW91VHViZUNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBhdXRvUGxheTogZmFsc2UsXG4gIGxvb3A6IGZhbHNlXG59O1xuXG5Zb3VUdWJlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBlbWJlZElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBZb3VUdWJlQ29udGVudDtcbiJdfQ==
