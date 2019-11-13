'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _TypingAnimation = _interopRequireDefault(require('./Assets/TypingAnimation'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useStyleOptions3 = _interopRequireDefault(require('../hooks/useStyleOptions'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

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

var TypingIndicator = function TypingIndicator(_ref) {
  var lastTypingAt = _ref.lastTypingAt;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    typingAnimationDuration = _useStyleOptions2[0].typingAnimationDuration;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    typingIndicator = _useStyleSet2[0].typingIndicator;

  var animationAriaLabel = (0, _useLocalize.default)('TypingIndicator');

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showTyping = _useState2[0],
    setShowTyping = _useState2[1];

  (0, _react.useEffect)(
    function() {
      var timeout;
      var last = Math.max(Object.values(lastTypingAt));
      var typingAnimationTimeRemaining = typingAnimationDuration - Date.now() + last;

      if (last && typingAnimationTimeRemaining > 0) {
        setShowTyping(true);
        timeout = setTimeout(function() {
          return setShowTyping(false);
        }, typingAnimationTimeRemaining);
      } else {
        setShowTyping(false);
      }

      return function() {
        return clearTimeout(timeout);
      };
    },
    [lastTypingAt, typingAnimationDuration]
  );
  return (
    showTyping &&
    _react.default.createElement(
      'div',
      {
        className: typingIndicator
      },
      _react.default.createElement(_TypingAnimation.default, {
        'aria-label': animationAriaLabel
      })
    )
  );
};

TypingIndicator.propTypes = {
  lastTypingAt: _propTypes.default.any.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var lastTypingAt = _ref2.lastTypingAt;
  return {
    lastTypingAt: lastTypingAt
  };
})(TypingIndicator);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1R5cGluZ0luZGljYXRvci5qcyJdLCJuYW1lcyI6WyJUeXBpbmdJbmRpY2F0b3IiLCJsYXN0VHlwaW5nQXQiLCJ0eXBpbmdBbmltYXRpb25EdXJhdGlvbiIsInR5cGluZ0luZGljYXRvciIsImFuaW1hdGlvbkFyaWFMYWJlbCIsInNob3dUeXBpbmciLCJzZXRTaG93VHlwaW5nIiwidGltZW91dCIsImxhc3QiLCJNYXRoIiwibWF4IiwiT2JqZWN0IiwidmFsdWVzIiwidHlwaW5nQW5pbWF0aW9uVGltZVJlbWFpbmluZyIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFzQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEseUJBQ04sZ0NBRE07QUFBQTtBQUFBLE1BQ25DQyx1QkFEbUMsd0JBQ25DQSx1QkFEbUM7O0FBQUEscUJBRWQsNEJBRmM7QUFBQTtBQUFBLE1BRW5DQyxlQUZtQyxvQkFFbkNBLGVBRm1DOztBQUc1QyxNQUFNQyxrQkFBa0IsR0FBRywwQkFBWSxpQkFBWixDQUEzQjs7QUFINEMsa0JBS1IscUJBQVMsS0FBVCxDQUxRO0FBQUE7QUFBQSxNQUtyQ0MsVUFMcUM7QUFBQSxNQUt6QkMsYUFMeUI7O0FBTzVDLHdCQUFVLFlBQU07QUFDZCxRQUFJQyxPQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBTSxDQUFDQyxNQUFQLENBQWNYLFlBQWQsQ0FBVCxDQUFiO0FBQ0EsUUFBTVksNEJBQTRCLEdBQUdYLHVCQUF1QixHQUFHWSxJQUFJLENBQUNDLEdBQUwsRUFBMUIsR0FBdUNQLElBQTVFOztBQUVBLFFBQUlBLElBQUksSUFBSUssNEJBQTRCLEdBQUcsQ0FBM0MsRUFBOEM7QUFDNUNQLE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUMsTUFBQUEsT0FBTyxHQUFHUyxVQUFVLENBQUM7QUFBQSxlQUFNVixhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLE9BQUQsRUFBNkJPLDRCQUE3QixDQUFwQjtBQUNELEtBSEQsTUFHTztBQUNMUCxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7O0FBRUQsV0FBTztBQUFBLGFBQU1XLFlBQVksQ0FBQ1YsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQWJELEVBYUcsQ0FBQ04sWUFBRCxFQUFlQyx1QkFBZixDQWJIO0FBZUEsU0FDRUcsVUFBVSxJQUNSO0FBQUssSUFBQSxTQUFTLEVBQUVGO0FBQWhCLEtBQ0UsNkJBQUMsd0JBQUQ7QUFBaUIsa0JBQVlDO0FBQTdCLElBREYsQ0FGSjtBQU9ELENBN0JEOztBQStCQUosZUFBZSxDQUFDa0IsU0FBaEIsR0FBNEI7QUFDMUJqQixFQUFBQSxZQUFZLEVBQUVrQixtQkFBVUMsR0FBVixDQUFjQztBQURGLENBQTVCOztlQUllLCtCQUFpQjtBQUFBLE1BQUdwQixZQUFILFNBQUdBLFlBQUg7QUFBQSxTQUF1QjtBQUFFQSxJQUFBQSxZQUFZLEVBQVpBO0FBQUYsR0FBdkI7QUFBQSxDQUFqQixFQUEyREQsZUFBM0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgVHlwaW5nQW5pbWF0aW9uIGZyb20gJy4vQXNzZXRzL1R5cGluZ0FuaW1hdGlvbic7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlT3B0aW9ucyBmcm9tICcuLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgVHlwaW5nSW5kaWNhdG9yID0gKHsgbGFzdFR5cGluZ0F0IH0pID0+IHtcbiAgY29uc3QgW3sgdHlwaW5nQW5pbWF0aW9uRHVyYXRpb24gfV0gPSB1c2VTdHlsZU9wdGlvbnMoKTtcbiAgY29uc3QgW3sgdHlwaW5nSW5kaWNhdG9yIH1dID0gdXNlU3R5bGVTZXQoKTtcbiAgY29uc3QgYW5pbWF0aW9uQXJpYUxhYmVsID0gdXNlTG9jYWxpemUoJ1R5cGluZ0luZGljYXRvcicpO1xuXG4gIGNvbnN0IFtzaG93VHlwaW5nLCBzZXRTaG93VHlwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0O1xuICAgIGNvbnN0IGxhc3QgPSBNYXRoLm1heChPYmplY3QudmFsdWVzKGxhc3RUeXBpbmdBdCkpO1xuICAgIGNvbnN0IHR5cGluZ0FuaW1hdGlvblRpbWVSZW1haW5pbmcgPSB0eXBpbmdBbmltYXRpb25EdXJhdGlvbiAtIERhdGUubm93KCkgKyBsYXN0O1xuXG4gICAgaWYgKGxhc3QgJiYgdHlwaW5nQW5pbWF0aW9uVGltZVJlbWFpbmluZyA+IDApIHtcbiAgICAgIHNldFNob3dUeXBpbmcodHJ1ZSk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VHlwaW5nKGZhbHNlKSwgdHlwaW5nQW5pbWF0aW9uVGltZVJlbWFpbmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNob3dUeXBpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH0sIFtsYXN0VHlwaW5nQXQsIHR5cGluZ0FuaW1hdGlvbkR1cmF0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICBzaG93VHlwaW5nICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBpbmdJbmRpY2F0b3J9PlxuICAgICAgICA8VHlwaW5nQW5pbWF0aW9uIGFyaWEtbGFiZWw9e2FuaW1hdGlvbkFyaWFMYWJlbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKTtcbn07XG5cblR5cGluZ0luZGljYXRvci5wcm9wVHlwZXMgPSB7XG4gIGxhc3RUeXBpbmdBdDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhc3RUeXBpbmdBdCB9KSA9PiAoeyBsYXN0VHlwaW5nQXQgfSkpKFR5cGluZ0luZGljYXRvcik7XG4iXX0=
