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

var VimeoContent = function VimeoContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    vimeoContentStyleSet = _useStyleSet2[0].vimeoContent;

  var search = new URLSearchParams({
    autoplay: autoPlay ? 1 : 0,
    badge: 0,
    byline: 0,
    loop: loop ? 1 : 0,
    portrait: 0,
    title: 0
  }).toString();
  return _react.default.createElement('iframe', {
    allowFullScreen: true,
    'aria-label': alt,
    className: vimeoContentStyleSet,
    src: 'https://player.vimeo.com/video/'.concat(encodeURI(embedID), '?').concat(search)
  });
};

VimeoContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false
};
VimeoContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  embedID: _propTypes.default.string.isRequired,
  loop: _propTypes.default.bool
};
var _default = VimeoContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpbWVvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJWaW1lb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImVtYmVkSUQiLCJsb29wIiwidmltZW9Db250ZW50U3R5bGVTZXQiLCJ2aW1lb0NvbnRlbnQiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJhdXRvcGxheSIsImJhZGdlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJ0aXRsZSIsInRvU3RyaW5nIiwiZW5jb2RlVVJJIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0M7QUFBQSxNQUFuQ0MsR0FBbUMsUUFBbkNBLEdBQW1DO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEscUJBQ1IsNEJBRFE7QUFBQTtBQUFBLE1BQ2xDQyxvQkFEa0Msb0JBQ2hEQyxZQURnRDs7QUFHekQsTUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQUosQ0FBb0I7QUFDakNDLElBQUFBLFFBQVEsRUFBRVAsUUFBUSxHQUFHLENBQUgsR0FBTyxDQURRO0FBRWpDUSxJQUFBQSxLQUFLLEVBQUUsQ0FGMEI7QUFHakNDLElBQUFBLE1BQU0sRUFBRSxDQUh5QjtBQUlqQ1AsSUFBQUEsSUFBSSxFQUFFQSxJQUFJLEdBQUcsQ0FBSCxHQUFPLENBSmdCO0FBS2pDUSxJQUFBQSxRQUFRLEVBQUUsQ0FMdUI7QUFNakNDLElBQUFBLEtBQUssRUFBRTtBQU4wQixHQUFwQixFQU9aQyxRQVBZLEVBQWY7QUFTQSxTQUNFO0FBQ0UsSUFBQSxlQUFlLEVBQUUsSUFEbkI7QUFFRSxrQkFBWWIsR0FGZDtBQUdFLElBQUEsU0FBUyxFQUFFSSxvQkFIYjtBQUlFLElBQUEsR0FBRywyQ0FBb0NVLFNBQVMsQ0FBQ1osT0FBRCxDQUE3QyxjQUEwREksTUFBMUQ7QUFKTCxJQURGO0FBUUQsQ0FwQkQ7O0FBc0JBUCxZQUFZLENBQUNnQixZQUFiLEdBQTRCO0FBQzFCZixFQUFBQSxHQUFHLEVBQUUsRUFEcUI7QUFFMUJDLEVBQUFBLFFBQVEsRUFBRSxLQUZnQjtBQUcxQkUsRUFBQUEsSUFBSSxFQUFFO0FBSG9CLENBQTVCO0FBTUFKLFlBQVksQ0FBQ2lCLFNBQWIsR0FBeUI7QUFDdkJoQixFQUFBQSxHQUFHLEVBQUVpQixtQkFBVUMsTUFEUTtBQUV2QmpCLEVBQUFBLFFBQVEsRUFBRWdCLG1CQUFVRSxJQUZHO0FBR3ZCakIsRUFBQUEsT0FBTyxFQUFFZSxtQkFBVUMsTUFBVixDQUFpQkUsVUFISDtBQUl2QmpCLEVBQUFBLElBQUksRUFBRWMsbUJBQVVFO0FBSk8sQ0FBekI7ZUFPZXBCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgVmltZW9Db250ZW50ID0gKHsgYWx0LCBhdXRvUGxheSwgZW1iZWRJRCwgbG9vcCB9KSA9PiB7XG4gIGNvbnN0IFt7IHZpbWVvQ29udGVudDogdmltZW9Db250ZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIGF1dG9wbGF5OiBhdXRvUGxheSA/IDEgOiAwLFxuICAgIGJhZGdlOiAwLFxuICAgIGJ5bGluZTogMCxcbiAgICBsb29wOiBsb29wID8gMSA6IDAsXG4gICAgcG9ydHJhaXQ6IDAsXG4gICAgdGl0bGU6IDBcbiAgfSkudG9TdHJpbmcoKTtcblxuICByZXR1cm4gKFxuICAgIDxpZnJhbWVcbiAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX1cbiAgICAgIGFyaWEtbGFiZWw9e2FsdH1cbiAgICAgIGNsYXNzTmFtZT17dmltZW9Db250ZW50U3R5bGVTZXR9XG4gICAgICBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtlbmNvZGVVUkkoZW1iZWRJRCl9PyR7c2VhcmNofWB9XG4gICAgLz5cbiAgKTtcbn07XG5cblZpbWVvQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgbG9vcDogZmFsc2Vcbn07XG5cblZpbWVvQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBlbWJlZElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaW1lb0NvbnRlbnQ7XG4iXX0=
