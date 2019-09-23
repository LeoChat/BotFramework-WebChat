'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ICON_SIZE_FACTOR = 16;

var WarningNotificationIcon = function WarningNotificationIcon(_ref) {
  var className = _ref.className,
    size = _ref.size;
  return _react.default.createElement(
    'svg',
    {
      alt: '',
      className: className,
      height: ICON_SIZE_FACTOR * size,
      viewBox: '0 0 13.1 13.1',
      width: ICON_SIZE_FACTOR * size
    },
    _react.default.createElement('path', {
      d: 'M13.1,13.1H0L6.6,0L13.1,13.1z M7,10.5H6.1v0.9H7V10.5z M7,9.7V5.2H6.1v4.4L7,9.7z',
      fillRule: 'evenodd'
    })
  );
};

WarningNotificationIcon.defaultProps = {
  className: '',
  size: 1
};
WarningNotificationIcon.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.number
};
var _default = WarningNotificationIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0Fzc2V0cy9XYXJuaW5nTm90aWZpY2F0aW9uSWNvbi5qcyJdLCJuYW1lcyI6WyJJQ09OX1NJWkVfRkFDVE9SIiwiV2FybmluZ05vdGlmaWNhdGlvbkljb24iLCJjbGFzc05hbWUiLCJzaXplIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsSUFBZCxRQUFjQSxJQUFkO0FBQUEsU0FDOUI7QUFDRSxJQUFBLEdBQUcsRUFBQyxFQUROO0FBRUUsSUFBQSxTQUFTLEVBQUVELFNBRmI7QUFHRSxJQUFBLE1BQU0sRUFBRUYsZ0JBQWdCLEdBQUdHLElBSDdCO0FBSUUsSUFBQSxPQUFPLEVBQUMsZUFKVjtBQUtFLElBQUEsS0FBSyxFQUFFSCxnQkFBZ0IsR0FBR0c7QUFMNUIsS0FPRTtBQUFNLElBQUEsQ0FBQyxFQUFDLGlGQUFSO0FBQTBGLElBQUEsUUFBUSxFQUFDO0FBQW5HLElBUEYsQ0FEOEI7QUFBQSxDQUFoQzs7QUFZQUYsdUJBQXVCLENBQUNHLFlBQXhCLEdBQXVDO0FBQ3JDRixFQUFBQSxTQUFTLEVBQUUsRUFEMEI7QUFFckNDLEVBQUFBLElBQUksRUFBRTtBQUYrQixDQUF2QztBQUtBRix1QkFBdUIsQ0FBQ0ksU0FBeEIsR0FBb0M7QUFDbENILEVBQUFBLFNBQVMsRUFBRUksbUJBQVVDLE1BRGE7QUFFbENKLEVBQUFBLElBQUksRUFBRUcsbUJBQVVFO0FBRmtCLENBQXBDO2VBS2VQLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IElDT05fU0laRV9GQUNUT1IgPSAxNjtcblxuY29uc3QgV2FybmluZ05vdGlmaWNhdGlvbkljb24gPSAoeyBjbGFzc05hbWUsIHNpemUgfSkgPT4gKFxuICA8c3ZnXG4gICAgYWx0PVwiXCJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICBoZWlnaHQ9e0lDT05fU0laRV9GQUNUT1IgKiBzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMTMuMSAxMy4xXCJcbiAgICB3aWR0aD17SUNPTl9TSVpFX0ZBQ1RPUiAqIHNpemV9XG4gID5cbiAgICA8cGF0aCBkPVwiTTEzLjEsMTMuMUgwTDYuNiwwTDEzLjEsMTMuMXogTTcsMTAuNUg2LjF2MC45SDdWMTAuNXogTTcsOS43VjUuMkg2LjF2NC40TDcsOS43elwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuV2FybmluZ05vdGlmaWNhdGlvbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzaXplOiAxXG59O1xuXG5XYXJuaW5nTm90aWZpY2F0aW9uSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FybmluZ05vdGlmaWNhdGlvbkljb247XG4iXX0=
