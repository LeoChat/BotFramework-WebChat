'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AbsoluteTime = _interopRequireDefault(require('../Utils/AbsoluteTime'));

var _RelativeTime = _interopRequireDefault(require('../Utils/RelativeTime'));

var _useStyleOptions3 = _interopRequireDefault(require('../hooks/useStyleOptions'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

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

var Timestamp = function Timestamp(_ref) {
  var timestamp = _ref.activity.timestamp,
    className = _ref.className;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    timestampFormat = _useStyleOptions2[0].timestampFormat;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    timestampStyleSet = _useStyleSet2[0].timestamp;

  if (!timestamp) {
    return false;
  }

  return _react.default.createElement(
    'span',
    {
      className: (0, _classnames.default)(timestampStyleSet + '', (className || '') + '')
    },
    timestampFormat === 'relative'
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
  className: _propTypes.default.string
};
var _default = Timestamp;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9UaW1lc3RhbXAuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wIiwidGltZXN0YW1wIiwiYWN0aXZpdHkiLCJjbGFzc05hbWUiLCJ0aW1lc3RhbXBGb3JtYXQiLCJ0aW1lc3RhbXBTdHlsZVNldCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE0QztBQUFBLE1BQTdCQyxTQUE2QixRQUF6Q0MsUUFBeUMsQ0FBN0JELFNBQTZCO0FBQUEsTUFBaEJFLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSx5QkFDOUIsZ0NBRDhCO0FBQUE7QUFBQSxNQUNuREMsZUFEbUQsd0JBQ25EQSxlQURtRDs7QUFBQSxxQkFFakIsNEJBRmlCO0FBQUE7QUFBQSxNQUV4Q0MsaUJBRndDLG9CQUVuREosU0FGbUQ7O0FBSTVELE1BQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQ0U7QUFBTSxJQUFBLFNBQVMsRUFBRSx5QkFBV0ksaUJBQWlCLEdBQUcsRUFBL0IsRUFBbUMsQ0FBQ0YsU0FBUyxJQUFJLEVBQWQsSUFBb0IsRUFBdkQ7QUFBakIsS0FDR0MsZUFBZSxLQUFLLFVBQXBCLEdBQWlDLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUVIO0FBQXJCLElBQWpDLEdBQXNFLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUVBO0FBQXJCLElBRHpFLENBREY7QUFLRCxDQWJEOztBQWVBRCxTQUFTLENBQUNNLFlBQVYsR0FBeUI7QUFDdkJILEVBQUFBLFNBQVMsRUFBRTtBQURZLENBQXpCO0FBSUFILFNBQVMsQ0FBQ08sU0FBVixHQUFzQjtBQUNwQkwsRUFBQUEsUUFBUSxFQUFFTSxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QlIsSUFBQUEsU0FBUyxFQUFFTyxtQkFBVUUsTUFBVixDQUFpQkM7QUFESixHQUFoQixFQUVQQSxVQUhpQjtBQUlwQlIsRUFBQUEsU0FBUyxFQUFFSyxtQkFBVUU7QUFKRCxDQUF0QjtlQU9lVixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFic29sdXRlVGltZSBmcm9tICcuLi9VdGlscy9BYnNvbHV0ZVRpbWUnO1xuaW1wb3J0IFJlbGF0aXZlVGltZSBmcm9tICcuLi9VdGlscy9SZWxhdGl2ZVRpbWUnO1xuaW1wb3J0IHVzZVN0eWxlT3B0aW9ucyBmcm9tICcuLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgVGltZXN0YW1wID0gKHsgYWN0aXZpdHk6IHsgdGltZXN0YW1wIH0sIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IFt7IHRpbWVzdGFtcEZvcm1hdCB9XSA9IHVzZVN0eWxlT3B0aW9ucygpO1xuICBjb25zdCBbeyB0aW1lc3RhbXA6IHRpbWVzdGFtcFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICBpZiAoIXRpbWVzdGFtcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRpbWVzdGFtcFN0eWxlU2V0ICsgJycsIChjbGFzc05hbWUgfHwgJycpICsgJycpfT5cbiAgICAgIHt0aW1lc3RhbXBGb3JtYXQgPT09ICdyZWxhdGl2ZScgPyA8UmVsYXRpdmVUaW1lIHZhbHVlPXt0aW1lc3RhbXB9IC8+IDogPEFic29sdXRlVGltZSB2YWx1ZT17dGltZXN0YW1wfSAvPn1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5UaW1lc3RhbXAuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59O1xuXG5UaW1lc3RhbXAucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0aW1lc3RhbXA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVzdGFtcDtcbiJdfQ==
