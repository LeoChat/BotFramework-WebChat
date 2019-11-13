'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useLocalizeDate = _interopRequireDefault(require('../hooks/useLocalizeDate'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AbsoluteTime = function AbsoluteTime(_ref) {
  var value = _ref.value;
  var localizedTime = (0, _useLocalizeDate.default)(value);
  var text = (0, _useLocalize.default)('SentAt') + localizedTime;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: text
    }),
    _react.default.createElement(
      'span',
      {
        'aria-hidden': true
      },
      localizedTime
    )
  );
};

AbsoluteTime.propTypes = {
  value: _propTypes.default.string.isRequired
};
var _default = AbsoluteTime;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9BYnNvbHV0ZVRpbWUuanMiXSwibmFtZXMiOlsiQWJzb2x1dGVUaW1lIiwidmFsdWUiLCJsb2NhbGl6ZWRUaW1lIiwidGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbEMsTUFBTUMsYUFBYSxHQUFHLDhCQUFnQkQsS0FBaEIsQ0FBdEI7QUFDQSxNQUFNRSxJQUFJLEdBQUcsMEJBQVksUUFBWixJQUF3QkQsYUFBckM7QUFFQSxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDO0FBQXhCLElBREYsRUFFRTtBQUFNLG1CQUFhO0FBQW5CLEtBQTBCRCxhQUExQixDQUZGLENBREY7QUFNRCxDQVZEOztBQVlBRixZQUFZLENBQUNJLFNBQWIsR0FBeUI7QUFDdkJILEVBQUFBLEtBQUssRUFBRUksbUJBQVVDLE1BQVYsQ0FBaUJDO0FBREQsQ0FBekI7ZUFJZVAsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcblxuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VMb2NhbGl6ZURhdGUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemVEYXRlJztcblxuY29uc3QgQWJzb2x1dGVUaW1lID0gKHsgdmFsdWUgfSkgPT4ge1xuICBjb25zdCBsb2NhbGl6ZWRUaW1lID0gdXNlTG9jYWxpemVEYXRlKHZhbHVlKTtcbiAgY29uc3QgdGV4dCA9IHVzZUxvY2FsaXplKCdTZW50QXQnKSArIGxvY2FsaXplZFRpbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9Pntsb2NhbGl6ZWRUaW1lfTwvc3Bhbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuQWJzb2x1dGVUaW1lLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJzb2x1dGVUaW1lO1xuIl19
