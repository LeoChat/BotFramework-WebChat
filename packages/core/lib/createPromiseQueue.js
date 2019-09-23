'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createPromiseQueue;

var _createDeferred = _interopRequireDefault(require('./createDeferred'));

function createPromiseQueue() {
  var deferred;
  var queue = [];

  var push = function push(value) {
    if (deferred) {
      var _deferred = deferred,
        resolve = _deferred.resolve;
      deferred = null;
      resolve(value);
    } else {
      queue.push(value);
    }
  };

  var shift = function shift() {
    return queue.length
      ? Promise.resolve(queue.shift())
      : (deferred || (deferred = (0, _createDeferred['default'])())).promise;
  };

  return {
    push: push,
    shift: shift
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVQcm9taXNlUXVldWUuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvbWlzZVF1ZXVlIiwiZGVmZXJyZWQiLCJxdWV1ZSIsInB1c2giLCJ2YWx1ZSIsInJlc29sdmUiLCJzaGlmdCIsImxlbmd0aCIsIlByb21pc2UiLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxrQkFBVCxHQUE4QjtBQUMzQyxNQUFJQyxRQUFKO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsS0FBSyxFQUFJO0FBQ3BCLFFBQUlILFFBQUosRUFBYztBQUFBLHNCQUNRQSxRQURSO0FBQUEsVUFDSkksT0FESSxhQUNKQSxPQURJO0FBR1pKLE1BQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBRCxDQUFQO0FBQ0QsS0FMRCxNQUtPO0FBQ0xGLE1BQUFBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYO0FBQ0Q7QUFDRixHQVREOztBQVdBLE1BQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FDWkosS0FBSyxDQUFDSyxNQUFOLEdBQWVDLE9BQU8sQ0FBQ0gsT0FBUixDQUFnQkgsS0FBSyxDQUFDSSxLQUFOLEVBQWhCLENBQWYsR0FBZ0QsQ0FBQ0wsUUFBUSxLQUFLQSxRQUFRLEdBQUcsaUNBQWhCLENBQVQsRUFBNENRLE9BRGhGO0FBQUEsR0FBZDs7QUFHQSxTQUFPO0FBQ0xOLElBQUFBLElBQUksRUFBSkEsSUFESztBQUVMRyxJQUFBQSxLQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZURlZmVycmVkIGZyb20gJy4vY3JlYXRlRGVmZXJyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9taXNlUXVldWUoKSB7XG4gIGxldCBkZWZlcnJlZDtcbiAgY29uc3QgcXVldWUgPSBbXTtcblxuICBjb25zdCBwdXNoID0gdmFsdWUgPT4ge1xuICAgIGlmIChkZWZlcnJlZCkge1xuICAgICAgY29uc3QgeyByZXNvbHZlIH0gPSBkZWZlcnJlZDtcblxuICAgICAgZGVmZXJyZWQgPSBudWxsO1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXVlLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaGlmdCA9ICgpID0+XG4gICAgcXVldWUubGVuZ3RoID8gUHJvbWlzZS5yZXNvbHZlKHF1ZXVlLnNoaWZ0KCkpIDogKGRlZmVycmVkIHx8IChkZWZlcnJlZCA9IGNyZWF0ZURlZmVycmVkKCkpKS5wcm9taXNlO1xuXG4gIHJldHVybiB7XG4gICAgcHVzaCxcbiAgICBzaGlmdFxuICB9O1xufVxuIl19
