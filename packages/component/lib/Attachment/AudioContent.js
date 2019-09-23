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

var AudioContent = function AudioContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src,
    styleSet = _ref.styleSet;
  return _react.default.createElement('audio', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: styleSet.audioContent,
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
  src: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    audioContent: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(AudioContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImxvb3AiLCJwb3N0ZXIiLCJzcmMiLCJzdHlsZVNldCIsImF1ZGlvQ29udGVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsTUFBUUMsUUFBUixRQUFRQSxRQUFSO0FBQUEsTUFBa0JDLElBQWxCLFFBQWtCQSxJQUFsQjtBQUFBLE1BQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQSxNQUFnQ0MsR0FBaEMsUUFBZ0NBLEdBQWhDO0FBQUEsTUFBcUNDLFFBQXJDLFFBQXFDQSxRQUFyQztBQUFBLFNBQ25CO0FBQ0Usa0JBQVlMLEdBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLElBQUEsU0FBUyxFQUFFSSxRQUFRLENBQUNDLFlBSHRCO0FBSUUsSUFBQSxRQUFRLEVBQUUsSUFKWjtBQUtFLElBQUEsSUFBSSxFQUFFSixJQUxSO0FBTUUsSUFBQSxNQUFNLEVBQUVDLE1BTlY7QUFPRSxJQUFBLEdBQUcsRUFBRUM7QUFQUCxJQURtQjtBQUFBLENBQXJCOztBQVlBTCxZQUFZLENBQUNRLFlBQWIsR0FBNEI7QUFDMUJQLEVBQUFBLEdBQUcsRUFBRSxFQURxQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLEtBRmdCO0FBRzFCQyxFQUFBQSxJQUFJLEVBQUUsS0FIb0I7QUFJMUJDLEVBQUFBLE1BQU0sRUFBRTtBQUprQixDQUE1QjtBQU9BSixZQUFZLENBQUNTLFNBQWIsR0FBeUI7QUFDdkJSLEVBQUFBLEdBQUcsRUFBRVMsbUJBQVVDLE1BRFE7QUFFdkJULEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVFLElBRkc7QUFHdkJULEVBQUFBLElBQUksRUFBRU8sbUJBQVVFLElBSE87QUFJdkJSLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVDLE1BSks7QUFLdkJOLEVBQUFBLEdBQUcsRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJFLFVBTEM7QUFNdkJQLEVBQUFBLFFBQVEsRUFBRUksbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDeEJQLElBQUFBLFlBQVksRUFBRUcsbUJBQVVLLEdBQVYsQ0FBY0Y7QUFESixHQUFoQixFQUVQQTtBQVJvQixDQUF6Qjs7ZUFXZSwrQkFBaUI7QUFBQSxNQUFHUCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFqQixFQUFtRE4sWUFBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgQXVkaW9Db250ZW50ID0gKHsgYWx0LCBhdXRvUGxheSwgbG9vcCwgcG9zdGVyLCBzcmMsIHN0eWxlU2V0IH0pID0+IChcbiAgPGF1ZGlvXG4gICAgYXJpYS1sYWJlbD17YWx0fVxuICAgIGF1dG9QbGF5PXthdXRvUGxheX1cbiAgICBjbGFzc05hbWU9e3N0eWxlU2V0LmF1ZGlvQ29udGVudH1cbiAgICBjb250cm9scz17dHJ1ZX1cbiAgICBsb29wPXtsb29wfVxuICAgIHBvc3Rlcj17cG9zdGVyfVxuICAgIHNyYz17c3JjfVxuICAvPlxuKTtcblxuQXVkaW9Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgYXV0b1BsYXk6IGZhbHNlLFxuICBsb29wOiBmYWxzZSxcbiAgcG9zdGVyOiAnJ1xufTtcblxuQXVkaW9Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sLFxuICBwb3N0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdWRpb0NvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShBdWRpb0NvbnRlbnQpO1xuIl19
