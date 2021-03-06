'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ofType = exports.ofID = exports.of = exports['default'] = void 0;

var activities = function activities(_ref) {
  var activities = _ref.activities;
  return activities;
};

var of = function of(predicate) {
  return function(state) {
    return activities(state).filter(predicate);
  };
};

exports.of = of;

var ofID = function ofID(targetID) {
  return of(function(_ref2) {
    var id = _ref2.id;
    return id === targetID;
  });
};

exports.ofID = ofID;

var ofType = function ofType(targetType) {
  return of(function(_ref3) {
    var type = _ref3.type;
    return type === targetType;
  });
};

exports.ofType = ofType;
var _default = activities;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3RvcnMvYWN0aXZpdGllcy5qcyJdLCJuYW1lcyI6WyJhY3Rpdml0aWVzIiwib2YiLCJwcmVkaWNhdGUiLCJzdGF0ZSIsImZpbHRlciIsIm9mSUQiLCJ0YXJnZXRJRCIsImlkIiwib2ZUeXBlIiwidGFyZ2V0VHlwZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUc7QUFBQSxNQUFHQSxVQUFILFFBQUdBLFVBQUg7QUFBQSxTQUFvQkEsVUFBcEI7QUFBQSxDQUFuQjs7QUFFQSxJQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFBQyxTQUFTO0FBQUEsU0FBSSxVQUFBQyxLQUFLO0FBQUEsV0FBSUgsVUFBVSxDQUFDRyxLQUFELENBQVYsQ0FBa0JDLE1BQWxCLENBQXlCRixTQUF6QixDQUFKO0FBQUEsR0FBVDtBQUFBLENBQXBCOzs7O0FBQ0EsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsUUFBUTtBQUFBLFNBQUlMLEVBQUUsQ0FBQztBQUFBLFFBQUdNLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFdBQVlBLEVBQUUsS0FBS0QsUUFBbkI7QUFBQSxHQUFELENBQU47QUFBQSxDQUFyQjs7OztBQUNBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLFVBQVU7QUFBQSxTQUFJUixFQUFFLENBQUM7QUFBQSxRQUFHUyxJQUFILFNBQUdBLElBQUg7QUFBQSxXQUFjQSxJQUFJLEtBQUtELFVBQXZCO0FBQUEsR0FBRCxDQUFOO0FBQUEsQ0FBekI7OztlQUVlVCxVIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWN0aXZpdGllcyA9ICh7IGFjdGl2aXRpZXMgfSkgPT4gYWN0aXZpdGllcztcblxuY29uc3Qgb2YgPSBwcmVkaWNhdGUgPT4gc3RhdGUgPT4gYWN0aXZpdGllcyhzdGF0ZSkuZmlsdGVyKHByZWRpY2F0ZSk7XG5jb25zdCBvZklEID0gdGFyZ2V0SUQgPT4gb2YoKHsgaWQgfSkgPT4gaWQgPT09IHRhcmdldElEKTtcbmNvbnN0IG9mVHlwZSA9IHRhcmdldFR5cGUgPT4gb2YoKHsgdHlwZSB9KSA9PiB0eXBlID09PSB0YXJnZXRUeXBlKTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZpdGllcztcbmV4cG9ydCB7IG9mLCBvZklELCBvZlR5cGUgfTtcbiJdfQ==
