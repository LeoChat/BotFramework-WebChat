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

var ErrorNotificationIcon = function ErrorNotificationIcon(_ref) {
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
      d:
        'M6.5,13C2.9,13,0,10.1,0,6.5S2.9,0,6.5,0S13,2.9,13,6.5S10.1,13,6.5,13z M6.1,3.5v4.3h0.9V3.5H6.1z M6.1,8.7v0.9h0.9V8.7H6.1z',
      fillRule: 'evenodd'
    })
  );
};

ErrorNotificationIcon.defaultProps = {
  className: '',
  size: 1
};
ErrorNotificationIcon.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.number
};
var _default = ErrorNotificationIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0Fzc2V0cy9FcnJvck5vdGlmaWNhdGlvbkljb24uanMiXSwibmFtZXMiOlsiSUNPTl9TSVpFX0ZBQ1RPUiIsIkVycm9yTm90aWZpY2F0aW9uSWNvbiIsImNsYXNzTmFtZSIsInNpemUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFjQyxJQUFkLFFBQWNBLElBQWQ7QUFBQSxTQUM1QjtBQUNFLElBQUEsR0FBRyxFQUFDLEVBRE47QUFFRSxJQUFBLFNBQVMsRUFBRUQsU0FGYjtBQUdFLElBQUEsTUFBTSxFQUFFRixnQkFBZ0IsR0FBR0csSUFIN0I7QUFJRSxJQUFBLE9BQU8sRUFBQyxlQUpWO0FBS0UsSUFBQSxLQUFLLEVBQUVILGdCQUFnQixHQUFHRztBQUw1QixLQU9FO0FBQ0UsSUFBQSxDQUFDLEVBQUMsMkhBREo7QUFFRSxJQUFBLFFBQVEsRUFBQztBQUZYLElBUEYsQ0FENEI7QUFBQSxDQUE5Qjs7QUFlQUYscUJBQXFCLENBQUNHLFlBQXRCLEdBQXFDO0FBQ25DRixFQUFBQSxTQUFTLEVBQUUsRUFEd0I7QUFFbkNDLEVBQUFBLElBQUksRUFBRTtBQUY2QixDQUFyQztBQUtBRixxQkFBcUIsQ0FBQ0ksU0FBdEIsR0FBa0M7QUFDaENILEVBQUFBLFNBQVMsRUFBRUksbUJBQVVDLE1BRFc7QUFFaENKLEVBQUFBLElBQUksRUFBRUcsbUJBQVVFO0FBRmdCLENBQWxDO2VBS2VQLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IElDT05fU0laRV9GQUNUT1IgPSAxNjtcblxuY29uc3QgRXJyb3JOb3RpZmljYXRpb25JY29uID0gKHsgY2xhc3NOYW1lLCBzaXplIH0pID0+IChcbiAgPHN2Z1xuICAgIGFsdD1cIlwiXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgaGVpZ2h0PXtJQ09OX1NJWkVfRkFDVE9SICogc2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDEzLjEgMTMuMVwiXG4gICAgd2lkdGg9e0lDT05fU0laRV9GQUNUT1IgKiBzaXplfVxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNi41LDEzQzIuOSwxMywwLDEwLjEsMCw2LjVTMi45LDAsNi41LDBTMTMsMi45LDEzLDYuNVMxMC4xLDEzLDYuNSwxM3ogTTYuMSwzLjV2NC4zaDAuOVYzLjVINi4xeiBNNi4xLDguN3YwLjloMC45VjguN0g2LjF6XCJcbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5FcnJvck5vdGlmaWNhdGlvbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzaXplOiAxXG59O1xuXG5FcnJvck5vdGlmaWNhdGlvbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTm90aWZpY2F0aW9uSWNvbjtcbiJdfQ==
