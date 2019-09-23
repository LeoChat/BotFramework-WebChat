'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TypingAnimation = function TypingAnimation(_ref) {
  var ariaLabel = _ref['aria-label'],
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: ariaLabel
    }),
    _react.default.createElement('div', {
      'aria-hidden': true,
      className: styleSet.typingAnimation
    })
  );
};

TypingAnimation.propTypes = {
  'aria-label': _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    typingAnimation: _propTypes.default.any.isRequired
  }).isRequired
};
var ConnectedTypingAnimation = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(TypingAnimation);
var _default = ConnectedTypingAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZW5kQm94L0Fzc2V0cy9UeXBpbmdBbmltYXRpb24uanMiXSwibmFtZXMiOlsiVHlwaW5nQW5pbWF0aW9uIiwiYXJpYUxhYmVsIiwic3R5bGVTZXQiLCJ0eXBpbmdBbmltYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhbnkiLCJDb25uZWN0ZWRUeXBpbmdBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFpQkMsU0FBakIsUUFBRyxZQUFIO0FBQUEsTUFBNEJDLFFBQTVCLFFBQTRCQSxRQUE1QjtBQUFBLFNBQ3RCLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVEO0FBQXhCLElBREYsRUFFRTtBQUFLLG1CQUFhLElBQWxCO0FBQXdCLElBQUEsU0FBUyxFQUFFQyxRQUFRLENBQUNDO0FBQTVDLElBRkYsQ0FEc0I7QUFBQSxDQUF4Qjs7QUFPQUgsZUFBZSxDQUFDSSxTQUFoQixHQUE0QjtBQUMxQixnQkFBY0MsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREw7QUFFMUJMLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDeEJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQVVJLEdBQVYsQ0FBY0Y7QUFEUCxHQUFoQixFQUVQQTtBQUp1QixDQUE1QjtBQU9BLElBQU1HLHdCQUF3QixHQUFHLCtCQUFpQjtBQUFBLE1BQUdSLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ERixlQUFuRCxDQUFqQztlQUVlVSx3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi8uLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uLy4uL1NjcmVlblJlYWRlclRleHQnO1xuXG5jb25zdCBUeXBpbmdBbmltYXRpb24gPSAoeyAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCwgc3R5bGVTZXQgfSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17YXJpYUxhYmVsfSAvPlxuICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17c3R5bGVTZXQudHlwaW5nQW5pbWF0aW9ufSAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuVHlwaW5nQW5pbWF0aW9uLnByb3BUeXBlcyA9IHtcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHR5cGluZ0FuaW1hdGlvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IENvbm5lY3RlZFR5cGluZ0FuaW1hdGlvbiA9IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFR5cGluZ0FuaW1hdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZFR5cGluZ0FuaW1hdGlvbjtcbiJdfQ==
