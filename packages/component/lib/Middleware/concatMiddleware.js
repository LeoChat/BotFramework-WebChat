'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = concatMiddleware;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function concatMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function(options) {
    var setup = middlewares.reduce(function(setup, middleware) {
      return middleware ? [].concat(_toConsumableArray(setup), [middleware(options)]) : setup;
    }, []);
    return function(last) {
      var stack = setup.slice();

      var work = function work() {
        var next = stack.shift();
        return (next ? next(work) : last).apply(void 0, arguments);
      };

      return work;
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NaWRkbGV3YXJlL2NvbmNhdE1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiY29uY2F0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwib3B0aW9ucyIsInNldHVwIiwicmVkdWNlIiwibWlkZGxld2FyZSIsImxhc3QiLCJzdGFjayIsInNsaWNlIiwid29yayIsIm5leHQiLCJzaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsZ0JBQVQsR0FBMEM7QUFBQSxvQ0FBYkMsV0FBYTtBQUFiQSxJQUFBQSxXQUFhO0FBQUE7O0FBQ3ZELFNBQU8sVUFBQUMsT0FBTyxFQUFJO0FBQ2hCLFFBQU1DLEtBQUssR0FBR0YsV0FBVyxDQUFDRyxNQUFaLENBQW1CLFVBQUNELEtBQUQsRUFBUUUsVUFBUjtBQUFBLGFBQXdCQSxVQUFVLGdDQUFPRixLQUFQLElBQWNFLFVBQVUsQ0FBQ0gsT0FBRCxDQUF4QixLQUFxQ0MsS0FBdkU7QUFBQSxLQUFuQixFQUFrRyxFQUFsRyxDQUFkO0FBRUEsV0FBTyxVQUFBRyxJQUFJLEVBQUk7QUFDYixVQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssS0FBTixFQUFkOztBQUNBLFVBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQWE7QUFDeEIsWUFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLEtBQU4sRUFBYjtBQUVBLGVBQU8sQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJLENBQUNELElBQUQsQ0FBUCxHQUFnQkgsSUFBckIsMEJBQVA7QUFDRCxPQUpEOztBQU1BLGFBQU9HLElBQVA7QUFDRCxLQVREO0FBVUQsR0FiRDtBQWNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uY2F0TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykge1xuICByZXR1cm4gb3B0aW9ucyA9PiB7XG4gICAgY29uc3Qgc2V0dXAgPSBtaWRkbGV3YXJlcy5yZWR1Y2UoKHNldHVwLCBtaWRkbGV3YXJlKSA9PiAobWlkZGxld2FyZSA/IFsuLi5zZXR1cCwgbWlkZGxld2FyZShvcHRpb25zKV0gOiBzZXR1cCksIFtdKTtcblxuICAgIHJldHVybiBsYXN0ID0+IHtcbiAgICAgIGNvbnN0IHN0YWNrID0gc2V0dXAuc2xpY2UoKTtcbiAgICAgIGNvbnN0IHdvcmsgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gc3RhY2suc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gKG5leHQgPyBuZXh0KHdvcmspIDogbGFzdCkoLi4uYXJncyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gd29yaztcbiAgICB9O1xuICB9O1xufVxuIl19
