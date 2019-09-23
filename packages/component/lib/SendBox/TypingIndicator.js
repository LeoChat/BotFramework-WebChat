'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _TypingAnimation = _interopRequireDefault(require('./Assets/TypingAnimation'));

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

var TypingIndicator = function TypingIndicator(_ref) {
  var language = _ref.language,
    lastTypingAt = _ref.lastTypingAt,
    _ref$styleSet = _ref.styleSet,
    typingAnimationDuration = _ref$styleSet.options.typingAnimationDuration,
    typingIndicator = _ref$styleSet.typingIndicator;

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
        'aria-label': (0, _Localize.localize)('TypingIndicator', language)
      })
    )
  );
};

TypingIndicator.propTypes = {
  language: _propTypes.default.string.isRequired,
  lastTypingAt: _propTypes.default.any.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      typingAnimationDuration: _propTypes.default.number
    }).isRequired,
    typingIndicator: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var lastTypingAt = _ref2.lastTypingAt,
    language = _ref2.language,
    styleSet = _ref2.styleSet;
  return {
    lastTypingAt: lastTypingAt,
    language: language,
    styleSet: styleSet
  };
})(TypingIndicator);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1R5cGluZ0luZGljYXRvci5qcyJdLCJuYW1lcyI6WyJUeXBpbmdJbmRpY2F0b3IiLCJsYW5ndWFnZSIsImxhc3RUeXBpbmdBdCIsInN0eWxlU2V0IiwidHlwaW5nQW5pbWF0aW9uRHVyYXRpb24iLCJvcHRpb25zIiwidHlwaW5nSW5kaWNhdG9yIiwic2hvd1R5cGluZyIsInNldFNob3dUeXBpbmciLCJ0aW1lb3V0IiwibGFzdCIsIk1hdGgiLCJtYXgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0eXBpbmdBbmltYXRpb25UaW1lUmVtYWluaW5nIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYW55Iiwic2hhcGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BT2xCO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsWUFLSSxRQUxKQSxZQUtJO0FBQUEsMkJBSkpDLFFBSUk7QUFBQSxNQUhTQyx1QkFHVCxpQkFIRkMsT0FHRSxDQUhTRCx1QkFHVDtBQUFBLE1BRkZFLGVBRUUsaUJBRkZBLGVBRUU7O0FBQUEsa0JBQ2dDLHFCQUFTLEtBQVQsQ0FEaEM7QUFBQTtBQUFBLE1BQ0dDLFVBREg7QUFBQSxNQUNlQyxhQURmOztBQUdKLHdCQUFVLFlBQU07QUFDZCxRQUFJQyxPQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBTSxDQUFDQyxNQUFQLENBQWNaLFlBQWQsQ0FBVCxDQUFiO0FBQ0EsUUFBTWEsNEJBQTRCLEdBQUdYLHVCQUF1QixHQUFHWSxJQUFJLENBQUNDLEdBQUwsRUFBMUIsR0FBdUNQLElBQTVFOztBQUVBLFFBQUlBLElBQUksSUFBSUssNEJBQTRCLEdBQUcsQ0FBM0MsRUFBOEM7QUFDNUNQLE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUMsTUFBQUEsT0FBTyxHQUFHUyxVQUFVLENBQUM7QUFBQSxlQUFNVixhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLE9BQUQsRUFBNkJPLDRCQUE3QixDQUFwQjtBQUNELEtBSEQsTUFHTztBQUNMUCxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7O0FBRUQsV0FBTztBQUFBLGFBQU1XLFlBQVksQ0FBQ1YsT0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQWJELEVBYUcsQ0FBQ1AsWUFBRCxFQUFlRSx1QkFBZixDQWJIO0FBZUEsU0FDRUcsVUFBVSxJQUNSO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0UsNkJBQUMsd0JBQUQ7QUFBaUIsa0JBQVksd0JBQVMsaUJBQVQsRUFBNEJMLFFBQTVCO0FBQTdCLElBREYsQ0FGSjtBQU9ELENBaENEOztBQWtDQUQsZUFBZSxDQUFDb0IsU0FBaEIsR0FBNEI7QUFDMUJuQixFQUFBQSxRQUFRLEVBQUVvQixtQkFBVUMsTUFBVixDQUFpQkMsVUFERDtBQUUxQnJCLEVBQUFBLFlBQVksRUFBRW1CLG1CQUFVRyxHQUFWLENBQWNELFVBRkY7QUFHMUJwQixFQUFBQSxRQUFRLEVBQUVrQixtQkFBVUksS0FBVixDQUFnQjtBQUN4QnBCLElBQUFBLE9BQU8sRUFBRWdCLG1CQUFVSSxLQUFWLENBQWdCO0FBQ3ZCckIsTUFBQUEsdUJBQXVCLEVBQUVpQixtQkFBVUs7QUFEWixLQUFoQixFQUVOSCxVQUhxQjtBQUl4QmpCLElBQUFBLGVBQWUsRUFBRWUsbUJBQVVHLEdBQVYsQ0FBY0Q7QUFKUCxHQUFoQixFQUtQQTtBQVJ1QixDQUE1Qjs7ZUFXZSwrQkFBaUI7QUFBQSxNQUFHckIsWUFBSCxTQUFHQSxZQUFIO0FBQUEsTUFBaUJELFFBQWpCLFNBQWlCQSxRQUFqQjtBQUFBLE1BQTJCRSxRQUEzQixTQUEyQkEsUUFBM0I7QUFBQSxTQUEyQztBQUFFRCxJQUFBQSxZQUFZLEVBQVpBLFlBQUY7QUFBZ0JELElBQUFBLFFBQVEsRUFBUkEsUUFBaEI7QUFBMEJFLElBQUFBLFFBQVEsRUFBUkE7QUFBMUIsR0FBM0M7QUFBQSxDQUFqQixFQUNiSCxlQURhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnLi4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFR5cGluZ0FuaW1hdGlvbiBmcm9tICcuL0Fzc2V0cy9UeXBpbmdBbmltYXRpb24nO1xuXG5jb25zdCBUeXBpbmdJbmRpY2F0b3IgPSAoe1xuICBsYW5ndWFnZSxcbiAgbGFzdFR5cGluZ0F0LFxuICBzdHlsZVNldDoge1xuICAgIG9wdGlvbnM6IHsgdHlwaW5nQW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICB0eXBpbmdJbmRpY2F0b3JcbiAgfVxufSkgPT4ge1xuICBjb25zdCBbc2hvd1R5cGluZywgc2V0U2hvd1R5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dDtcbiAgICBjb25zdCBsYXN0ID0gTWF0aC5tYXgoT2JqZWN0LnZhbHVlcyhsYXN0VHlwaW5nQXQpKTtcbiAgICBjb25zdCB0eXBpbmdBbmltYXRpb25UaW1lUmVtYWluaW5nID0gdHlwaW5nQW5pbWF0aW9uRHVyYXRpb24gLSBEYXRlLm5vdygpICsgbGFzdDtcblxuICAgIGlmIChsYXN0ICYmIHR5cGluZ0FuaW1hdGlvblRpbWVSZW1haW5pbmcgPiAwKSB7XG4gICAgICBzZXRTaG93VHlwaW5nKHRydWUpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1R5cGluZyhmYWxzZSksIHR5cGluZ0FuaW1hdGlvblRpbWVSZW1haW5pbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaG93VHlwaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LCBbbGFzdFR5cGluZ0F0LCB0eXBpbmdBbmltYXRpb25EdXJhdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgc2hvd1R5cGluZyAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwaW5nSW5kaWNhdG9yfT5cbiAgICAgICAgPFR5cGluZ0FuaW1hdGlvbiBhcmlhLWxhYmVsPXtsb2NhbGl6ZSgnVHlwaW5nSW5kaWNhdG9yJywgbGFuZ3VhZ2UpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICApO1xufTtcblxuVHlwaW5nSW5kaWNhdG9yLnByb3BUeXBlcyA9IHtcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFzdFR5cGluZ0F0OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0eXBpbmdBbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgdHlwaW5nSW5kaWNhdG9yOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBsYXN0VHlwaW5nQXQsIGxhbmd1YWdlLCBzdHlsZVNldCB9KSA9PiAoeyBsYXN0VHlwaW5nQXQsIGxhbmd1YWdlLCBzdHlsZVNldCB9KSkoXG4gIFR5cGluZ0luZGljYXRvclxuKTtcbiJdfQ==
