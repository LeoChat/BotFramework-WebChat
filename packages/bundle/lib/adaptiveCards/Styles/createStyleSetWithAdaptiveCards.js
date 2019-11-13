'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createStyleSet;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _AdaptiveCardRenderer = _interopRequireDefault(require('./StyleSet/AdaptiveCardRenderer'));

var _AnimationCardAttachment = _interopRequireDefault(require('./StyleSet/AnimationCardAttachment'));

var _AudioCardAttachment = _interopRequireDefault(require('./StyleSet/AudioCardAttachment'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

// TODO: [P4] We should add a notice for people who want to use "styleSet" instead of "styleOptions".
//       "styleSet" is actually CSS stylesheet and it is based on the DOM tree.
//       DOM tree may change from time to time, thus, maintaining "styleSet" becomes a constant effort.
function createStyleSet(options) {
  options = _objectSpread({}, _botframeworkWebchatComponent.defaultStyleOptions, {}, options);
  var basicStyleSet = (0, _botframeworkWebchatComponent.createStyleSet)(options); // Keep this list flat (no nested style) and serializable (no functions)

  return _objectSpread({}, basicStyleSet, {
    adaptiveCardRenderer: (0, _AdaptiveCardRenderer.default)(options),
    animationCardAttachment: (0, _AnimationCardAttachment.default)(options),
    audioCardAttachment: (0, _AudioCardAttachment.default)(options)
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9jcmVhdGVTdHlsZVNldFdpdGhBZGFwdGl2ZUNhcmRzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlU2V0Iiwib3B0aW9ucyIsImRlZmF1bHRTdHlsZU9wdGlvbnMiLCJiYXNpY1N0eWxlU2V0IiwiYWRhcHRpdmVDYXJkUmVuZGVyZXIiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudCIsImF1ZGlvQ2FyZEF0dGFjaG1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQzlDQSxFQUFBQSxPQUFPLHFCQUFRQyxpREFBUixNQUFnQ0QsT0FBaEMsQ0FBUDtBQUVBLE1BQU1FLGFBQWEsR0FBRyxrREFBb0JGLE9BQXBCLENBQXRCLENBSDhDLENBSzlDOztBQUVBLDJCQUNLRSxhQURMO0FBRUVDLElBQUFBLG9CQUFvQixFQUFFLG1DQUFnQ0gsT0FBaEMsQ0FGeEI7QUFHRUksSUFBQUEsdUJBQXVCLEVBQUUsc0NBQW1DSixPQUFuQyxDQUgzQjtBQUlFSyxJQUFBQSxtQkFBbUIsRUFBRSxrQ0FBK0JMLE9BQS9CO0FBSnZCO0FBTUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZVNldCBhcyBjcmVhdGVCYXNpY1N0eWxlU2V0LCBkZWZhdWx0U3R5bGVPcHRpb25zIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBjcmVhdGVBZGFwdGl2ZUNhcmRSZW5kZXJlclN0eWxlIGZyb20gJy4vU3R5bGVTZXQvQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xuaW1wb3J0IGNyZWF0ZUFuaW1hdGlvbkNhcmRBdHRhY2htZW50U3R5bGUgZnJvbSAnLi9TdHlsZVNldC9BbmltYXRpb25DYXJkQXR0YWNobWVudCc7XG5pbXBvcnQgY3JlYXRlQXVkaW9DYXJkQXR0YWNobWVudFN0eWxlIGZyb20gJy4vU3R5bGVTZXQvQXVkaW9DYXJkQXR0YWNobWVudCc7XG5cbi8vIFRPRE86IFtQNF0gV2Ugc2hvdWxkIGFkZCBhIG5vdGljZSBmb3IgcGVvcGxlIHdobyB3YW50IHRvIHVzZSBcInN0eWxlU2V0XCIgaW5zdGVhZCBvZiBcInN0eWxlT3B0aW9uc1wiLlxuLy8gICAgICAgXCJzdHlsZVNldFwiIGlzIGFjdHVhbGx5IENTUyBzdHlsZXNoZWV0IGFuZCBpdCBpcyBiYXNlZCBvbiB0aGUgRE9NIHRyZWUuXG4vLyAgICAgICBET00gdHJlZSBtYXkgY2hhbmdlIGZyb20gdGltZSB0byB0aW1lLCB0aHVzLCBtYWludGFpbmluZyBcInN0eWxlU2V0XCIgYmVjb21lcyBhIGNvbnN0YW50IGVmZm9ydC5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVTZXQob3B0aW9ucykge1xuICBvcHRpb25zID0geyAuLi5kZWZhdWx0U3R5bGVPcHRpb25zLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgYmFzaWNTdHlsZVNldCA9IGNyZWF0ZUJhc2ljU3R5bGVTZXQob3B0aW9ucyk7XG5cbiAgLy8gS2VlcCB0aGlzIGxpc3QgZmxhdCAobm8gbmVzdGVkIHN0eWxlKSBhbmQgc2VyaWFsaXphYmxlIChubyBmdW5jdGlvbnMpXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNpY1N0eWxlU2V0LFxuICAgIGFkYXB0aXZlQ2FyZFJlbmRlcmVyOiBjcmVhdGVBZGFwdGl2ZUNhcmRSZW5kZXJlclN0eWxlKG9wdGlvbnMpLFxuICAgIGFuaW1hdGlvbkNhcmRBdHRhY2htZW50OiBjcmVhdGVBbmltYXRpb25DYXJkQXR0YWNobWVudFN0eWxlKG9wdGlvbnMpLFxuICAgIGF1ZGlvQ2FyZEF0dGFjaG1lbnQ6IGNyZWF0ZUF1ZGlvQ2FyZEF0dGFjaG1lbnRTdHlsZShvcHRpb25zKVxuICB9O1xufVxuIl19
