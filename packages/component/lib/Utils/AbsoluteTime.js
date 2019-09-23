'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AbsoluteTime = function AbsoluteTime(_ref) {
  var language = _ref.language,
    value = _ref.value;
  var localizedTime = (0, _Localize.getLocaleString)(value, language);
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: (0, _Localize.localize)('SentAt', language) + localizedTime
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
  language: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language;
  return {
    language: language
  };
})(AbsoluteTime);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9BYnNvbHV0ZVRpbWUuanMiXSwibmFtZXMiOlsiQWJzb2x1dGVUaW1lIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsImxvY2FsaXplZFRpbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDNUMsTUFBTUMsYUFBYSxHQUFHLCtCQUFnQkQsS0FBaEIsRUFBdUJELFFBQXZCLENBQXRCO0FBRUEsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFLHdCQUFTLFFBQVQsRUFBbUJBLFFBQW5CLElBQStCRTtBQUF2RCxJQURGLEVBRUU7QUFBTSxtQkFBYTtBQUFuQixLQUEwQkEsYUFBMUIsQ0FGRixDQURGO0FBTUQsQ0FURDs7QUFXQUgsWUFBWSxDQUFDSSxTQUFiLEdBQXlCO0FBQ3ZCSCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQyxVQURKO0FBRXZCTCxFQUFBQSxLQUFLLEVBQUVHLG1CQUFVQyxNQUFWLENBQWlCQztBQUZELENBQXpCOztlQUtlLCtCQUFpQjtBQUFBLE1BQUdOLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ERCxZQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldExvY2FsZVN0cmluZywgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcblxuY29uc3QgQWJzb2x1dGVUaW1lID0gKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcbiAgY29uc3QgbG9jYWxpemVkVGltZSA9IGdldExvY2FsZVN0cmluZyh2YWx1ZSwgbGFuZ3VhZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemUoJ1NlbnRBdCcsIGxhbmd1YWdlKSArIGxvY2FsaXplZFRpbWV9IC8+XG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj17dHJ1ZX0+e2xvY2FsaXplZFRpbWV9PC9zcGFuPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5BYnNvbHV0ZVRpbWUucHJvcFR5cGVzID0ge1xuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlIH0pID0+ICh7IGxhbmd1YWdlIH0pKShBYnNvbHV0ZVRpbWUpO1xuIl19
