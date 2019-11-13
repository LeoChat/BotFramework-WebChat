'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createDebounce;

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

var DEFAULT_DEBOUNCE_INTERVAL = 1000;

function setTimeoutOrSync(fn, ms) {
  if (ms > 0) {
    return setTimeout(fn, ms);
  }

  fn();
}

function createDebounce(fn) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_DEBOUNCE_INTERVAL;
  var scheduled;
  var lastCall = 0;
  var nextArguments;
  return function debounce() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    nextArguments = args;

    if (!scheduled) {
      scheduled = setTimeoutOrSync(function() {
        lastCall = Date.now();
        fn.apply(void 0, _toConsumableArray(nextArguments));
        scheduled = null;
      }, lastCall + ms - Date.now());
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kZWJvdW5jZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0RFQk9VTkNFX0lOVEVSVkFMIiwic2V0VGltZW91dE9yU3luYyIsImZuIiwibXMiLCJzZXRUaW1lb3V0IiwiY3JlYXRlRGVib3VuY2UiLCJzY2hlZHVsZWQiLCJsYXN0Q2FsbCIsIm5leHRBcmd1bWVudHMiLCJkZWJvdW5jZSIsImFyZ3MiLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSx5QkFBeUIsR0FBRyxJQUFsQzs7QUFFQSxTQUFTQyxnQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEJDLEVBQTlCLEVBQWtDO0FBQ2hDLE1BQUlBLEVBQUUsR0FBRyxDQUFULEVBQVk7QUFDVixXQUFPQyxVQUFVLENBQUNGLEVBQUQsRUFBS0MsRUFBTCxDQUFqQjtBQUNEOztBQUVERCxFQUFBQSxFQUFFO0FBQ0g7O0FBRWMsU0FBU0csY0FBVCxDQUF3QkgsRUFBeEIsRUFBNEQ7QUFBQSxNQUFoQ0MsRUFBZ0MsdUVBQTNCSCx5QkFBMkI7QUFDekUsTUFBSU0sU0FBSjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsTUFBSUMsYUFBSjtBQUVBLFNBQU8sU0FBU0MsUUFBVCxHQUEyQjtBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLE1BQUFBLElBQU07QUFBQTs7QUFDaENGLElBQUFBLGFBQWEsR0FBR0UsSUFBaEI7O0FBRUEsUUFBSSxDQUFDSixTQUFMLEVBQWdCO0FBQ2RBLE1BQUFBLFNBQVMsR0FBR0wsZ0JBQWdCLENBQUMsWUFBTTtBQUNqQ00sUUFBQUEsUUFBUSxHQUFHSSxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBVixRQUFBQSxFQUFFLE1BQUYsNEJBQU1NLGFBQU47QUFDQUYsUUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDRCxPQUoyQixFQUl6QkMsUUFBUSxHQUFHSixFQUFYLEdBQWdCUSxJQUFJLENBQUNDLEdBQUwsRUFKUyxDQUE1QjtBQUtEO0FBQ0YsR0FWRDtBQVdEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9ERUJPVU5DRV9JTlRFUlZBTCA9IDEwMDA7XG5cbmZ1bmN0aW9uIHNldFRpbWVvdXRPclN5bmMoZm4sIG1zKSB7XG4gIGlmIChtcyA+IDApIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmbiwgbXMpO1xuICB9XG5cbiAgZm4oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVib3VuY2UoZm4sIG1zID0gREVGQVVMVF9ERUJPVU5DRV9JTlRFUlZBTCkge1xuICBsZXQgc2NoZWR1bGVkO1xuICBsZXQgbGFzdENhbGwgPSAwO1xuICBsZXQgbmV4dEFyZ3VtZW50cztcblxuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2UoLi4uYXJncykge1xuICAgIG5leHRBcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHNldFRpbWVvdXRPclN5bmMoKCkgPT4ge1xuICAgICAgICBsYXN0Q2FsbCA9IERhdGUubm93KCk7XG4gICAgICAgIGZuKC4uLm5leHRBcmd1bWVudHMpO1xuICAgICAgICBzY2hlZHVsZWQgPSBudWxsO1xuICAgICAgfSwgbGFzdENhbGwgKyBtcyAtIERhdGUubm93KCkpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
