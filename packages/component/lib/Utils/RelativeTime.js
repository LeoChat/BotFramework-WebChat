'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _Timer = _interopRequireDefault(require('./Timer'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useLocalizeDate = _interopRequireDefault(require('../hooks/useLocalizeDate'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// This function calculates the next absolute time that the timer should be fired based on the origin (original time received), interval, and current time.
// If the origin is t=260, and we are currently at t=1000, nextTimer must return t=60260.
// If the origin is t=260, and we are currently at t=60260 (exact landing), we must return t=120260, not t=60260.
// This is for fixing bug #2103: https://github.com/microsoft/BotFramework-WebChat/issues/2103.
var TIMER_INTERVAL = 60000;

function nextTimer(origin) {
  var time = new Date(origin).getTime();
  var now = Date.now();
  return time > now ? time : now + TIMER_INTERVAL - ((now - time) % TIMER_INTERVAL);
}

var RelativeTime = function RelativeTime(_ref) {
  var value = _ref.value;
  var localizedAbsoluteTime = (0, _useLocalize.default)('SentAt') + (0, _useLocalizeDate.default)(value);
  var text = (0, _useLocalize.default)('X minutes ago', value);

  var _useState = (0, _react.useState)(nextTimer(value)),
    _useState2 = _slicedToArray(_useState, 2),
    timer = _useState2[0],
    setTimer = _useState2[1];

  var handleInterval = (0, _react.useCallback)(
    function() {
      setTimer(nextTimer(value));
    },
    [setTimer, value]
  );
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: localizedAbsoluteTime
    }),
    _react.default.createElement(
      'span',
      {
        'aria-hidden': true
      },
      text
    ),
    _react.default.createElement(_Timer.default, {
      at: timer,
      onInterval: handleInterval
    })
  );
};

RelativeTime.propTypes = {
  value: _propTypes.default.string.isRequired
};
var _default = RelativeTime;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9SZWxhdGl2ZVRpbWUuanMiXSwibmFtZXMiOlsiVElNRVJfSU5URVJWQUwiLCJuZXh0VGltZXIiLCJvcmlnaW4iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJSZWxhdGl2ZVRpbWUiLCJ2YWx1ZSIsImxvY2FsaXplZEFic29sdXRlVGltZSIsInRleHQiLCJ0aW1lciIsInNldFRpbWVyIiwiaGFuZGxlSW50ZXJ2YWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxLQUF2Qjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN6QixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixNQUFULEVBQWlCRyxPQUFqQixFQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixJQUFJLENBQUNFLEdBQUwsRUFBWjtBQUVBLFNBQU9ILElBQUksR0FBR0csR0FBUCxHQUFhSCxJQUFiLEdBQW9CRyxHQUFHLEdBQUdOLGNBQU4sR0FBd0IsQ0FBQ00sR0FBRyxHQUFHSCxJQUFQLElBQWVILGNBQWxFO0FBQ0Q7O0FBRUQsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxNQUFNQyxxQkFBcUIsR0FBRywwQkFBWSxRQUFaLElBQXdCLDhCQUFnQkQsS0FBaEIsQ0FBdEQ7QUFFQSxNQUFNRSxJQUFJLEdBQUcsMEJBQVksZUFBWixFQUE2QkYsS0FBN0IsQ0FBYjs7QUFIa0Msa0JBSVIscUJBQVNQLFNBQVMsQ0FBQ08sS0FBRCxDQUFsQixDQUpRO0FBQUE7QUFBQSxNQUkzQkcsS0FKMkI7QUFBQSxNQUlwQkMsUUFKb0I7O0FBTWxDLE1BQU1DLGNBQWMsR0FBRyx3QkFBWSxZQUFNO0FBQ3ZDRCxJQUFBQSxRQUFRLENBQUNYLFNBQVMsQ0FBQ08sS0FBRCxDQUFWLENBQVI7QUFDRCxHQUZzQixFQUVwQixDQUFDSSxRQUFELEVBQVdKLEtBQVgsQ0FGb0IsQ0FBdkI7QUFJQSxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDO0FBQXhCLElBREYsRUFFRTtBQUFNLG1CQUFhO0FBQW5CLEtBQTBCQyxJQUExQixDQUZGLEVBR0UsNkJBQUMsY0FBRDtBQUFPLElBQUEsRUFBRSxFQUFFQyxLQUFYO0FBQWtCLElBQUEsVUFBVSxFQUFFRTtBQUE5QixJQUhGLENBREY7QUFPRCxDQWpCRDs7QUFtQkFOLFlBQVksQ0FBQ08sU0FBYixHQUF5QjtBQUN2Qk4sRUFBQUEsS0FBSyxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkM7QUFERCxDQUF6QjtlQUllVixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VMb2NhbGl6ZURhdGUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemVEYXRlJztcblxuLy8gVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBuZXh0IGFic29sdXRlIHRpbWUgdGhhdCB0aGUgdGltZXIgc2hvdWxkIGJlIGZpcmVkIGJhc2VkIG9uIHRoZSBvcmlnaW4gKG9yaWdpbmFsIHRpbWUgcmVjZWl2ZWQpLCBpbnRlcnZhbCwgYW5kIGN1cnJlbnQgdGltZS5cbi8vIElmIHRoZSBvcmlnaW4gaXMgdD0yNjAsIGFuZCB3ZSBhcmUgY3VycmVudGx5IGF0IHQ9MTAwMCwgbmV4dFRpbWVyIG11c3QgcmV0dXJuIHQ9NjAyNjAuXG4vLyBJZiB0aGUgb3JpZ2luIGlzIHQ9MjYwLCBhbmQgd2UgYXJlIGN1cnJlbnRseSBhdCB0PTYwMjYwIChleGFjdCBsYW5kaW5nKSwgd2UgbXVzdCByZXR1cm4gdD0xMjAyNjAsIG5vdCB0PTYwMjYwLlxuLy8gVGhpcyBpcyBmb3IgZml4aW5nIGJ1ZyAjMjEwMzogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9pc3N1ZXMvMjEwMy5cblxuY29uc3QgVElNRVJfSU5URVJWQUwgPSA2MDAwMDtcblxuZnVuY3Rpb24gbmV4dFRpbWVyKG9yaWdpbikge1xuICBjb25zdCB0aW1lID0gbmV3IERhdGUob3JpZ2luKS5nZXRUaW1lKCk7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgcmV0dXJuIHRpbWUgPiBub3cgPyB0aW1lIDogbm93ICsgVElNRVJfSU5URVJWQUwgLSAoKG5vdyAtIHRpbWUpICUgVElNRVJfSU5URVJWQUwpO1xufVxuXG5jb25zdCBSZWxhdGl2ZVRpbWUgPSAoeyB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IGxvY2FsaXplZEFic29sdXRlVGltZSA9IHVzZUxvY2FsaXplKCdTZW50QXQnKSArIHVzZUxvY2FsaXplRGF0ZSh2YWx1ZSk7XG5cbiAgY29uc3QgdGV4dCA9IHVzZUxvY2FsaXplKCdYIG1pbnV0ZXMgYWdvJywgdmFsdWUpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKG5leHRUaW1lcih2YWx1ZSkpO1xuXG4gIGNvbnN0IGhhbmRsZUludGVydmFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRpbWVyKG5leHRUaW1lcih2YWx1ZSkpO1xuICB9LCBbc2V0VGltZXIsIHZhbHVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtsb2NhbGl6ZWRBYnNvbHV0ZVRpbWV9IC8+XG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj17dHJ1ZX0+e3RleHR9PC9zcGFuPlxuICAgICAgPFRpbWVyIGF0PXt0aW1lcn0gb25JbnRlcnZhbD17aGFuZGxlSW50ZXJ2YWx9IC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblJlbGF0aXZlVGltZS5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aXZlVGltZTtcbiJdfQ==
