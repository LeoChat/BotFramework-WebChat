'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var YouTubeContent = function YouTubeContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop,
    styleSet = _ref.styleSet;
  var search = new URLSearchParams({
    autoplay: autoPlay ? 1 : 0,
    loop: loop ? 1 : 0,
    modestbranding: 1
  }).toString();
  return (
    // TODO: We should encodeURI the URL
    _react.default.createElement('iframe', {
      'aria-label': alt,
      className: styleSet.youTubeContent,
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
  loop: _propTypes.default.bool,
  styleSet: _propTypes.default.shape({
    youTubeContent: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(YouTubeContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1lvdVR1YmVDb250ZW50LmpzIl0sIm5hbWVzIjpbIllvdVR1YmVDb250ZW50IiwiYWx0IiwiYXV0b1BsYXkiLCJlbWJlZElEIiwibG9vcCIsInN0eWxlU2V0Iiwic2VhcmNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXV0b3BsYXkiLCJtb2Rlc3RicmFuZGluZyIsInRvU3RyaW5nIiwieW91VHViZUNvbnRlbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWdEO0FBQUEsTUFBN0NDLEdBQTZDLFFBQTdDQSxHQUE2QztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7QUFBQSxNQUE5QkMsT0FBOEIsUUFBOUJBLE9BQThCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNyRSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsZUFBSixDQUFvQjtBQUNqQ0MsSUFBQUEsUUFBUSxFQUFFTixRQUFRLEdBQUcsQ0FBSCxHQUFPLENBRFE7QUFFakNFLElBQUFBLElBQUksRUFBRUEsSUFBSSxHQUFHLENBQUgsR0FBTyxDQUZnQjtBQUdqQ0ssSUFBQUEsY0FBYyxFQUFFO0FBSGlCLEdBQXBCLEVBSVpDLFFBSlksRUFBZjtBQU1BLFNBQ0U7QUFDQTtBQUNFLG9CQUFZVCxHQURkO0FBRUUsTUFBQSxTQUFTLEVBQUVJLFFBQVEsQ0FBQ00sY0FGdEI7QUFHRSxNQUFBLEdBQUcsc0NBQStCUixPQUEvQixjQUEwQ0csTUFBMUM7QUFITDtBQUZGO0FBUUQsQ0FmRDs7QUFpQkFOLGNBQWMsQ0FBQ1ksWUFBZixHQUE4QjtBQUM1QlgsRUFBQUEsR0FBRyxFQUFFLEVBRHVCO0FBRTVCQyxFQUFBQSxRQUFRLEVBQUUsS0FGa0I7QUFHNUJFLEVBQUFBLElBQUksRUFBRTtBQUhzQixDQUE5QjtBQU1BSixjQUFjLENBQUNhLFNBQWYsR0FBMkI7QUFDekJaLEVBQUFBLEdBQUcsRUFBRWEsbUJBQVVDLE1BRFU7QUFFekJiLEVBQUFBLFFBQVEsRUFBRVksbUJBQVVFLElBRks7QUFHekJiLEVBQUFBLE9BQU8sRUFBRVcsbUJBQVVDLE1BQVYsQ0FBaUJFLFVBSEQ7QUFJekJiLEVBQUFBLElBQUksRUFBRVUsbUJBQVVFLElBSlM7QUFLekJYLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDeEJQLElBQUFBLGNBQWMsRUFBRUcsbUJBQVVLLEdBQVYsQ0FBY0Y7QUFETixHQUFoQixFQUVQQTtBQVBzQixDQUEzQjs7ZUFVZSwrQkFBaUI7QUFBQSxNQUFHWixRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFqQixFQUFtREwsY0FBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgWW91VHViZUNvbnRlbnQgPSAoeyBhbHQsIGF1dG9QbGF5LCBlbWJlZElELCBsb29wLCBzdHlsZVNldCB9KSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIGF1dG9wbGF5OiBhdXRvUGxheSA/IDEgOiAwLFxuICAgIGxvb3A6IGxvb3AgPyAxIDogMCxcbiAgICBtb2Rlc3RicmFuZGluZzogMVxuICB9KS50b1N0cmluZygpO1xuXG4gIHJldHVybiAoXG4gICAgLy8gVE9ETzogV2Ugc2hvdWxkIGVuY29kZVVSSSB0aGUgVVJMXG4gICAgPGlmcmFtZVxuICAgICAgYXJpYS1sYWJlbD17YWx0fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZVNldC55b3VUdWJlQ29udGVudH1cbiAgICAgIHNyYz17YGh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvJHtlbWJlZElEfT8ke3NlYXJjaH1gfVxuICAgIC8+XG4gICk7XG59O1xuXG5Zb3VUdWJlQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgbG9vcDogZmFsc2Vcbn07XG5cbllvdVR1YmVDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsXG4gIGVtYmVkSUQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbG9vcDogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHlvdVR1YmVDb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoWW91VHViZUNvbnRlbnQpO1xuIl19
