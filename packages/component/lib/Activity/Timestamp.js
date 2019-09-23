'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AbsoluteTime = _interopRequireDefault(require('../Utils/AbsoluteTime'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _RelativeTime = _interopRequireDefault(require('../Utils/RelativeTime'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Timestamp = function Timestamp(_ref) {
  var timestamp = _ref.activity.timestamp,
    className = _ref.className,
    styleSet = _ref.styleSet;

  if (!timestamp) {
    return false;
  }

  return _react.default.createElement(
    'span',
    {
      className: (0, _classnames.default)(styleSet.timestamp + '', (className || '') + '')
    },
    styleSet.options.timestampFormat === 'relative'
      ? _react.default.createElement(_RelativeTime.default, {
          value: timestamp
        })
      : _react.default.createElement(_AbsoluteTime.default, {
          value: timestamp
        })
  );
};

Timestamp.defaultProps = {
  className: ''
};
Timestamp.propTypes = {
  activity: _propTypes.default.shape({
    timestamp: _propTypes.default.string.isRequired
  }).isRequired,
  className: _propTypes.default.string,
  styleSet: _propTypes.default.shape({
    timestamp: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(Timestamp);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9UaW1lc3RhbXAuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wIiwidGltZXN0YW1wIiwiYWN0aXZpdHkiLCJjbGFzc05hbWUiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJ0aW1lc3RhbXBGb3JtYXQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXNEO0FBQUEsTUFBdkNDLFNBQXVDLFFBQW5EQyxRQUFtRCxDQUF2Q0QsU0FBdUM7QUFBQSxNQUExQkUsU0FBMEIsUUFBMUJBLFNBQTBCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUN0RSxNQUFJLENBQUNILFNBQUwsRUFBZ0I7QUFDZCxXQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUNFO0FBQU0sSUFBQSxTQUFTLEVBQUUseUJBQVdHLFFBQVEsQ0FBQ0gsU0FBVCxHQUFxQixFQUFoQyxFQUFvQyxDQUFDRSxTQUFTLElBQUksRUFBZCxJQUFvQixFQUF4RDtBQUFqQixLQUNHQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLGVBQWpCLEtBQXFDLFVBQXJDLEdBQ0MsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEtBQUssRUFBRUw7QUFBckIsSUFERCxHQUdDLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUVBO0FBQXJCLElBSkosQ0FERjtBQVNELENBZEQ7O0FBZ0JBRCxTQUFTLENBQUNPLFlBQVYsR0FBeUI7QUFDdkJKLEVBQUFBLFNBQVMsRUFBRTtBQURZLENBQXpCO0FBSUFILFNBQVMsQ0FBQ1EsU0FBVixHQUFzQjtBQUNwQk4sRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QlQsSUFBQUEsU0FBUyxFQUFFUSxtQkFBVUUsTUFBVixDQUFpQkM7QUFESixHQUFoQixFQUVQQSxVQUhpQjtBQUlwQlQsRUFBQUEsU0FBUyxFQUFFTSxtQkFBVUUsTUFKRDtBQUtwQlAsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QlQsSUFBQUEsU0FBUyxFQUFFUSxtQkFBVUksR0FBVixDQUFjRDtBQURELEdBQWhCLEVBRVBBO0FBUGlCLENBQXRCOztlQVVlLCtCQUFpQjtBQUFBLE1BQUdSLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ESixTQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFic29sdXRlVGltZSBmcm9tICcuLi9VdGlscy9BYnNvbHV0ZVRpbWUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgUmVsYXRpdmVUaW1lIGZyb20gJy4uL1V0aWxzL1JlbGF0aXZlVGltZSc7XG5cbmNvbnN0IFRpbWVzdGFtcCA9ICh7IGFjdGl2aXR5OiB7IHRpbWVzdGFtcCB9LCBjbGFzc05hbWUsIHN0eWxlU2V0IH0pID0+IHtcbiAgaWYgKCF0aW1lc3RhbXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC50aW1lc3RhbXAgKyAnJywgKGNsYXNzTmFtZSB8fCAnJykgKyAnJyl9PlxuICAgICAge3N0eWxlU2V0Lm9wdGlvbnMudGltZXN0YW1wRm9ybWF0ID09PSAncmVsYXRpdmUnID8gKFxuICAgICAgICA8UmVsYXRpdmVUaW1lIHZhbHVlPXt0aW1lc3RhbXB9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8QWJzb2x1dGVUaW1lIHZhbHVlPXt0aW1lc3RhbXB9IC8+XG4gICAgICApfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cblRpbWVzdGFtcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn07XG5cblRpbWVzdGFtcC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRpbWVzdGFtcDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGltZXN0YW1wOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoVGltZXN0YW1wKTtcbiJdfQ==
