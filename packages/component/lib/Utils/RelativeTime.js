'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _Timer = _interopRequireDefault(require('./Timer'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
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

function getText(language, value) {
  return (0, _Localize.localize)('X minutes ago', language, value);
}

var RelativeTime = function RelativeTime(_ref) {
  var language = _ref.language,
    value = _ref.value;

  var _useState = (0, _react.useState)(getText(language, value)),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];

  var _useState3 = (0, _react.useState)(nextTimer(value)),
    _useState4 = _slicedToArray(_useState3, 2),
    timer = _useState4[0],
    setTimer = _useState4[1];

  var localizedAbsoluteTime =
    (0, _Localize.localize)('SentAt', language) + (0, _Localize.getLocaleString)(value, language);
  var handleInterval = (0, _react.useCallback)(
    function() {
      setText(getText(language, value));
      setTimer(nextTimer(value));
    },
    [language, value]
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
  language: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language;
  return {
    language: language
  };
})(RelativeTime);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9SZWxhdGl2ZVRpbWUuanMiXSwibmFtZXMiOlsiVElNRVJfSU5URVJWQUwiLCJuZXh0VGltZXIiLCJvcmlnaW4iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJnZXRUZXh0IiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsIlJlbGF0aXZlVGltZSIsInRleHQiLCJzZXRUZXh0IiwidGltZXIiLCJzZXRUaW1lciIsImxvY2FsaXplZEFic29sdXRlVGltZSIsImhhbmRsZUludGVydmFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHLEtBQXZCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3pCLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNGLE1BQVQsRUFBaUJHLE9BQWpCLEVBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBTCxFQUFaO0FBRUEsU0FBT0gsSUFBSSxHQUFHRyxHQUFQLEdBQWFILElBQWIsR0FBb0JHLEdBQUcsR0FBR04sY0FBTixHQUF3QixDQUFDTSxHQUFHLEdBQUdILElBQVAsSUFBZUgsY0FBbEU7QUFDRDs7QUFFRCxTQUFTTyxPQUFULENBQWlCQyxRQUFqQixFQUEyQkMsS0FBM0IsRUFBa0M7QUFDaEMsU0FBTyx3QkFBUyxlQUFULEVBQTBCRCxRQUExQixFQUFvQ0MsS0FBcEMsQ0FBUDtBQUNEOztBQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXlCO0FBQUEsTUFBdEJGLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDcEIscUJBQVNGLE9BQU8sQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLENBQWhCLENBRG9CO0FBQUE7QUFBQSxNQUNyQ0UsSUFEcUM7QUFBQSxNQUMvQkMsT0FEK0I7O0FBQUEsbUJBRWxCLHFCQUFTWCxTQUFTLENBQUNRLEtBQUQsQ0FBbEIsQ0FGa0I7QUFBQTtBQUFBLE1BRXJDSSxLQUZxQztBQUFBLE1BRTlCQyxRQUY4Qjs7QUFJNUMsTUFBTUMscUJBQXFCLEdBQUcsd0JBQVMsUUFBVCxFQUFtQlAsUUFBbkIsSUFBK0IsK0JBQWdCQyxLQUFoQixFQUF1QkQsUUFBdkIsQ0FBN0Q7QUFFQSxNQUFNUSxjQUFjLEdBQUcsd0JBQVksWUFBTTtBQUN2Q0osSUFBQUEsT0FBTyxDQUFDTCxPQUFPLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxDQUFSLENBQVA7QUFDQUssSUFBQUEsUUFBUSxDQUFDYixTQUFTLENBQUNRLEtBQUQsQ0FBVixDQUFSO0FBQ0QsR0FIc0IsRUFHcEIsQ0FBQ0QsUUFBRCxFQUFXQyxLQUFYLENBSG9CLENBQXZCO0FBS0EsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFTTtBQUF4QixJQURGLEVBRUU7QUFBTSxtQkFBYTtBQUFuQixLQUEwQkosSUFBMUIsQ0FGRixFQUdFLDZCQUFDLGNBQUQ7QUFBTyxJQUFBLEVBQUUsRUFBRUUsS0FBWDtBQUFrQixJQUFBLFVBQVUsRUFBRUc7QUFBOUIsSUFIRixDQURGO0FBT0QsQ0FsQkQ7O0FBb0JBTixZQUFZLENBQUNPLFNBQWIsR0FBeUI7QUFDdkJULEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFdkJYLEVBQUFBLEtBQUssRUFBRVMsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBRkQsQ0FBekI7O2VBS2UsK0JBQWlCO0FBQUEsTUFBR1osUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBakIsRUFBbURFLFlBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0TG9jYWxlU3RyaW5nLCBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIG5leHQgYWJzb2x1dGUgdGltZSB0aGF0IHRoZSB0aW1lciBzaG91bGQgYmUgZmlyZWQgYmFzZWQgb24gdGhlIG9yaWdpbiAob3JpZ2luYWwgdGltZSByZWNlaXZlZCksIGludGVydmFsLCBhbmQgY3VycmVudCB0aW1lLlxuLy8gSWYgdGhlIG9yaWdpbiBpcyB0PTI2MCwgYW5kIHdlIGFyZSBjdXJyZW50bHkgYXQgdD0xMDAwLCBuZXh0VGltZXIgbXVzdCByZXR1cm4gdD02MDI2MC5cbi8vIElmIHRoZSBvcmlnaW4gaXMgdD0yNjAsIGFuZCB3ZSBhcmUgY3VycmVudGx5IGF0IHQ9NjAyNjAgKGV4YWN0IGxhbmRpbmcpLCB3ZSBtdXN0IHJldHVybiB0PTEyMDI2MCwgbm90IHQ9NjAyNjAuXG4vLyBUaGlzIGlzIGZvciBmaXhpbmcgYnVnICMyMTAzOiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTAzLlxuXG5jb25zdCBUSU1FUl9JTlRFUlZBTCA9IDYwMDAwO1xuXG5mdW5jdGlvbiBuZXh0VGltZXIob3JpZ2luKSB7XG4gIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShvcmlnaW4pLmdldFRpbWUoKTtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gdGltZSA+IG5vdyA/IHRpbWUgOiBub3cgKyBUSU1FUl9JTlRFUlZBTCAtICgobm93IC0gdGltZSkgJSBUSU1FUl9JTlRFUlZBTCk7XG59XG5cbmZ1bmN0aW9uIGdldFRleHQobGFuZ3VhZ2UsIHZhbHVlKSB7XG4gIHJldHVybiBsb2NhbGl6ZSgnWCBtaW51dGVzIGFnbycsIGxhbmd1YWdlLCB2YWx1ZSk7XG59XG5cbmNvbnN0IFJlbGF0aXZlVGltZSA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKGdldFRleHQobGFuZ3VhZ2UsIHZhbHVlKSk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobmV4dFRpbWVyKHZhbHVlKSk7XG5cbiAgY29uc3QgbG9jYWxpemVkQWJzb2x1dGVUaW1lID0gbG9jYWxpemUoJ1NlbnRBdCcsIGxhbmd1YWdlKSArIGdldExvY2FsZVN0cmluZyh2YWx1ZSwgbGFuZ3VhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZUludGVydmFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRleHQoZ2V0VGV4dChsYW5ndWFnZSwgdmFsdWUpKTtcbiAgICBzZXRUaW1lcihuZXh0VGltZXIodmFsdWUpKTtcbiAgfSwgW2xhbmd1YWdlLCB2YWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemVkQWJzb2x1dGVUaW1lfSAvPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9Pnt0ZXh0fTwvc3Bhbj5cbiAgICAgIDxUaW1lciBhdD17dGltZXJ9IG9uSW50ZXJ2YWw9e2hhbmRsZUludGVydmFsfSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5SZWxhdGl2ZVRpbWUucHJvcFR5cGVzID0ge1xuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlIH0pID0+ICh7IGxhbmd1YWdlIH0pKShSZWxhdGl2ZVRpbWUpO1xuIl19
