'use strict';

var cov_17nitryvrl = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/createStyleSetWithAdaptiveCards.js';
  var hash = 'b33d4d7ef3da00327dde06da8e7bbe17ccb9653b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/createStyleSetWithAdaptiveCards.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 51
        }
      },
      '1': {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 52
        }
      },
      '2': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 22,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createStyleSet',
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 38
          }
        },
        loc: {
          start: {
            line: 10,
            column: 48
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b33d4d7ef3da00327dde06da8e7bbe17ccb9653b'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

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
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
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
  cov_17nitryvrl.f[0]++;
  cov_17nitryvrl.s[0]++;
  options = _objectSpread({}, _botframeworkWebchatComponent.defaultStyleOptions, {}, options);
  var basicStyleSet = (cov_17nitryvrl.s[1]++, (0, _botframeworkWebchatComponent.createStyleSet)(options)); // Keep this list flat (no nested style) and serializable (no functions)

  cov_17nitryvrl.s[2]++;
  return _objectSpread({}, basicStyleSet, {
    adaptiveCardRenderer: (0, _AdaptiveCardRenderer.default)(options),
    animationCardAttachment: (0, _AnimationCardAttachment.default)(options),
    audioCardAttachment: (0, _AudioCardAttachment.default)(options)
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9jcmVhdGVTdHlsZVNldFdpdGhBZGFwdGl2ZUNhcmRzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlU2V0Iiwib3B0aW9ucyIsImRlZmF1bHRTdHlsZU9wdGlvbnMiLCJiYXNpY1N0eWxlU2V0IiwiYWRhcHRpdmVDYXJkUmVuZGVyZXIiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudCIsImF1ZGlvQ2FyZEF0dGFjaG1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQUE7QUFBQTtBQUM5Q0EsRUFBQUEsT0FBTyxxQkFBUUMsaURBQVIsTUFBZ0NELE9BQWhDLENBQVA7QUFFQSxNQUFNRSxhQUFhLDJCQUFHLGtEQUFvQkYsT0FBcEIsQ0FBSCxDQUFuQixDQUg4QyxDQUs5Qzs7QUFMOEM7QUFPOUMsMkJBQ0tFLGFBREw7QUFFRUMsSUFBQUEsb0JBQW9CLEVBQUUsbUNBQWdDSCxPQUFoQyxDQUZ4QjtBQUdFSSxJQUFBQSx1QkFBdUIsRUFBRSxzQ0FBbUNKLE9BQW5DLENBSDNCO0FBSUVLLElBQUFBLG1CQUFtQixFQUFFLGtDQUErQkwsT0FBL0I7QUFKdkI7QUFNRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlU2V0IGFzIGNyZWF0ZUJhc2ljU3R5bGVTZXQsIGRlZmF1bHRTdHlsZU9wdGlvbnMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZUFkYXB0aXZlQ2FyZFJlbmRlcmVyU3R5bGUgZnJvbSAnLi9TdHlsZVNldC9BZGFwdGl2ZUNhcmRSZW5kZXJlcic7XG5pbXBvcnQgY3JlYXRlQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZSBmcm9tICcuL1N0eWxlU2V0L0FuaW1hdGlvbkNhcmRBdHRhY2htZW50JztcbmltcG9ydCBjcmVhdGVBdWRpb0NhcmRBdHRhY2htZW50U3R5bGUgZnJvbSAnLi9TdHlsZVNldC9BdWRpb0NhcmRBdHRhY2htZW50JztcblxuLy8gVE9ETzogW1A0XSBXZSBzaG91bGQgYWRkIGEgbm90aWNlIGZvciBwZW9wbGUgd2hvIHdhbnQgdG8gdXNlIFwic3R5bGVTZXRcIiBpbnN0ZWFkIG9mIFwic3R5bGVPcHRpb25zXCIuXG4vLyAgICAgICBcInN0eWxlU2V0XCIgaXMgYWN0dWFsbHkgQ1NTIHN0eWxlc2hlZXQgYW5kIGl0IGlzIGJhc2VkIG9uIHRoZSBET00gdHJlZS5cbi8vICAgICAgIERPTSB0cmVlIG1heSBjaGFuZ2UgZnJvbSB0aW1lIHRvIHRpbWUsIHRodXMsIG1haW50YWluaW5nIFwic3R5bGVTZXRcIiBiZWNvbWVzIGEgY29uc3RhbnQgZWZmb3J0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZVNldChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSB7IC4uLmRlZmF1bHRTdHlsZU9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCBiYXNpY1N0eWxlU2V0ID0gY3JlYXRlQmFzaWNTdHlsZVNldChvcHRpb25zKTtcblxuICAvLyBLZWVwIHRoaXMgbGlzdCBmbGF0IChubyBuZXN0ZWQgc3R5bGUpIGFuZCBzZXJpYWxpemFibGUgKG5vIGZ1bmN0aW9ucylcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2ljU3R5bGVTZXQsXG4gICAgYWRhcHRpdmVDYXJkUmVuZGVyZXI6IGNyZWF0ZUFkYXB0aXZlQ2FyZFJlbmRlcmVyU3R5bGUob3B0aW9ucyksXG4gICAgYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQ6IGNyZWF0ZUFuaW1hdGlvbkNhcmRBdHRhY2htZW50U3R5bGUob3B0aW9ucyksXG4gICAgYXVkaW9DYXJkQXR0YWNobWVudDogY3JlYXRlQXVkaW9DYXJkQXR0YWNobWVudFN0eWxlKG9wdGlvbnMpXG4gIH07XG59XG4iXX0=
