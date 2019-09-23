'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SpinnerAnimation = function SpinnerAnimation(_ref) {
  var styleSet = _ref.styleSet;
  return _react.default.createElement('div', {
    className: styleSet.spinnerAnimation
  });
};

SpinnerAnimation.propTypes = {
  styleSet: _propTypes.default.shape({
    spinnerAnimation: _propTypes.default.any.isRequired
  }).isRequired
};
var ConnectedSpinnerAnimation = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(SpinnerAnimation);
var _default = ConnectedSpinnerAnimation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0Fzc2V0cy9TcGlubmVyQW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbIlNwaW5uZXJBbmltYXRpb24iLCJzdHlsZVNldCIsInNwaW5uZXJBbmltYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFueSIsImlzUmVxdWlyZWQiLCJDb25uZWN0ZWRTcGlubmVyQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBa0I7QUFBSyxJQUFBLFNBQVMsRUFBRUEsUUFBUSxDQUFDQztBQUF6QixJQUFsQjtBQUFBLENBQXpCOztBQUVBRixnQkFBZ0IsQ0FBQ0csU0FBakIsR0FBNkI7QUFDM0JGLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJILElBQUFBLGdCQUFnQixFQUFFRSxtQkFBVUUsR0FBVixDQUFjQztBQURSLEdBQWhCLEVBRVBBO0FBSHdCLENBQTdCO0FBTUEsSUFBTUMseUJBQXlCLEdBQUcsK0JBQWlCO0FBQUEsTUFBR1AsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBakIsRUFBbURELGdCQUFuRCxDQUFsQztlQUVlUSx5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi8uLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgU3Bpbm5lckFuaW1hdGlvbiA9ICh7IHN0eWxlU2V0IH0pID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5zcGlubmVyQW5pbWF0aW9ufSAvPjtcblxuU3Bpbm5lckFuaW1hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNwaW5uZXJBbmltYXRpb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBDb25uZWN0ZWRTcGlubmVyQW5pbWF0aW9uID0gY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoU3Bpbm5lckFuaW1hdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZFNwaW5uZXJBbmltYXRpb247XG4iXX0=
