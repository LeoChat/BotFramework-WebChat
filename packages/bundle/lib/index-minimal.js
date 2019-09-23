'use strict';

var cov_20ohgxv1ug = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/index-minimal.ts';
  var hash = '7512c1d722c9ca87767ddc6e2ea96f6744f588e8';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/index-minimal.ts',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 22
        },
        end: {
          line: 18,
          column: 64
        }
      },
      '1': {
        start: {
          line: 20,
          column: 32
        },
        end: {
          line: 26,
          column: 1
        }
      },
      '2': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 24,
          column: 6
        }
      },
      '3': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 91
        }
      },
      '4': {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 53,
          column: 2
        }
      },
      '5': {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 55,
          column: 22
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 20,
            column: 32
          },
          end: {
            line: 20,
            column: 33
          }
        },
        loc: {
          start: {
            line: 20,
            column: 43
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 21,
              column: 2
            },
            end: {
              line: 21,
              column: 18
            }
          },
          {
            start: {
              line: 22,
              column: 4
            },
            end: {
              line: 24,
              column: 5
            }
          }
        ],
        line: 21
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '7512c1d722c9ca87767ddc6e2ea96f6744f588e8'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'Constants', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.Constants;
  }
});
Object.defineProperty(exports, 'createStore', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.createStore;
  }
});
Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.version;
  }
});
Object.defineProperty(exports, 'Components', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.Components;
  }
});
Object.defineProperty(exports, 'concatMiddleware', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.concatMiddleware;
  }
});
Object.defineProperty(exports, 'connectToWebChat', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.connectToWebChat;
  }
});
Object.defineProperty(exports, 'createStyleSet', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.createStyleSet;
  }
});
Object.defineProperty(exports, 'createBrowserWebSpeechPonyfillFactory', {
  enumerable: true,
  get: function get() {
    return _createBrowserWebSpeechPonyfillFactory.default;
  }
});
exports.renderWebChat = exports.default = exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _botframeworkWebchatComponent = _interopRequireWildcard(require('botframework-webchat-component'));

var _addVersion = _interopRequireDefault(require('./addVersion'));

var _renderWebChat = _interopRequireDefault(require('./renderWebChat'));

var _createBrowserWebSpeechPonyfillFactory = _interopRequireDefault(require('./createBrowserWebSpeechPonyfillFactory'));

var _createDirectLine = _interopRequireDefault(require('./createDirectLine'));

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

var renderWebChat = (cov_20ohgxv1ug.s[0]++, _renderWebChat.default.bind(null, _botframeworkWebchatComponent.default));
exports.renderWebChat = renderWebChat;
cov_20ohgxv1ug.s[1]++;

var createDirectLine = function createDirectLine(options) {
  cov_20ohgxv1ug.f[0]++;
  cov_20ohgxv1ug.s[2]++;
  (cov_20ohgxv1ug.b[0][0]++, options.botAgent) &&
    (cov_20ohgxv1ug.b[0][1]++,
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    ));
  cov_20ohgxv1ug.s[3]++;
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_botframeworkWebchatCore.version, ' (Minimal)')
    })
  );
};

exports.createDirectLine = createDirectLine;
var _default = _botframeworkWebchatComponent.default;
exports.default = _default;
cov_20ohgxv1ug.s[4]++;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  concatMiddleware: _botframeworkWebchatComponent.concatMiddleware,
  connectToWebChat: _botframeworkWebchatComponent.connectToWebChat,
  Constants: _botframeworkWebchatCore.Constants,
  createBrowserWebSpeechPonyfillFactory: _createBrowserWebSpeechPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createStore: _botframeworkWebchatCore.createStore,
  createStyleSet: _botframeworkWebchatComponent.createStyleSet,
  ReactWebChat: _botframeworkWebchatComponent.default,
  renderWebChat: renderWebChat
});
cov_20ohgxv1ug.s[5]++;
(0, _addVersion.default)('minimal');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1taW5pbWFsLnRzIl0sIm5hbWVzIjpbInJlbmRlcldlYkNoYXQiLCJjb3JlUmVuZGVyV2ViQ2hhdCIsImJpbmQiLCJSZWFjdFdlYkNoYXQiLCJjcmVhdGVEaXJlY3RMaW5lIiwib3B0aW9ucyIsImJvdEFnZW50IiwiY29uc29sZSIsIndhcm4iLCJ2ZXJzaW9uIiwid2luZG93IiwiY29uY2F0TWlkZGxld2FyZSIsImNvbm5lY3RUb1dlYkNoYXQiLCJDb25zdGFudHMiLCJjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVTdHlsZVNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUVBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLDJCQUFHQyx1QkFBa0JDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCQyxxQ0FBN0IsQ0FBSCxDQUFuQjs7OztBQUVPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsT0FBTyxFQUFJO0FBQUE7QUFBQTtBQUN6Qyw2QkFBQUEsT0FBTyxDQUFDQyxRQUFSLGdDQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxzTEFERixDQURGO0FBRHlDO0FBS3pDLFNBQU8saURBQTZCSCxPQUE3QjtBQUFzQ0MsSUFBQUEsUUFBUSxvQkFBYUcsZ0NBQWI7QUFBOUMsS0FBUDtBQUNELENBTk07OztlQVFRTixxQzs7O0FBY2ZPLE1BQU0sQ0FBQyxTQUFELENBQU4scUJBQ0tBLE1BQU0sQ0FBQyxTQUFELENBRFg7QUFFRUMsRUFBQUEsZ0JBQWdCLEVBQWhCQSw4Q0FGRjtBQUdFQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLDhDQUhGO0FBSUVDLEVBQUFBLFNBQVMsRUFBVEEsa0NBSkY7QUFLRUMsRUFBQUEscUNBQXFDLEVBQXJDQSw4Q0FMRjtBQU1FVixFQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQU5GO0FBT0VXLEVBQUFBLFdBQVcsRUFBWEEsb0NBUEY7QUFRRUMsRUFBQUEsY0FBYyxFQUFkQSw0Q0FSRjtBQVNFYixFQUFBQSxZQUFZLEVBQVpBLHFDQVRGO0FBVUVILEVBQUFBLGFBQWEsRUFBYkE7QUFWRjs7QUFhQSx5QkFBVyxTQUFYIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IGRvdC1ub3RhdGlvbjogW1wiZXJyb3JcIiwgeyBcImFsbG93UGF0dGVyblwiOiBcIl5XZWJDaGF0JFwiIH1dICovXG4vLyB3aW5kb3dbJ1dlYkNoYXQnXSBpcyByZXF1aXJlZCBmb3IgVHlwZVNjcmlwdFxuXG5pbXBvcnQgeyBDb25zdGFudHMsIGNyZWF0ZVN0b3JlLCB2ZXJzaW9uIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5cbmltcG9ydCBSZWFjdFdlYkNoYXQsIHtcbiAgQ29tcG9uZW50cyxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgY3JlYXRlU3R5bGVTZXRcbn0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcblxuaW1wb3J0IGFkZFZlcnNpb24gZnJvbSAnLi9hZGRWZXJzaW9uJztcbmltcG9ydCBjb3JlUmVuZGVyV2ViQ2hhdCBmcm9tICcuL3JlbmRlcldlYkNoYXQnO1xuaW1wb3J0IGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkgZnJvbSAnLi9jcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5JztcbmltcG9ydCBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSBmcm9tICcuL2NyZWF0ZURpcmVjdExpbmUnO1xuXG5jb25zdCByZW5kZXJXZWJDaGF0ID0gY29yZVJlbmRlcldlYkNoYXQuYmluZChudWxsLCBSZWFjdFdlYkNoYXQpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0TGluZSA9IG9wdGlvbnMgPT4ge1xuICBvcHRpb25zLmJvdEFnZW50ICYmXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBEZXZlbG9wZXJzIGFyZSBub3QgY3VycmVudGx5IGFsbG93ZWQgdG8gc2V0IGJvdEFnZW50IGluIHRoZSBjcmVhdGVEaXJlY3RMaW5lIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9pc3N1ZXMvMjExOSBmb3IgbW9yZSBkZXRhaWxzLidcbiAgICApO1xuICByZXR1cm4gZGVmYXVsdENyZWF0ZURpcmVjdExpbmUoeyAuLi5vcHRpb25zLCBib3RBZ2VudDogYFdlYkNoYXQvJHt2ZXJzaW9ufSAoTWluaW1hbClgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RXZWJDaGF0O1xuXG5leHBvcnQge1xuICBDb21wb25lbnRzLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZVN0b3JlLFxuICBjcmVhdGVTdHlsZVNldCxcbiAgcmVuZGVyV2ViQ2hhdCxcbiAgdmVyc2lvblxufTtcblxud2luZG93WydXZWJDaGF0J10gPSB7XG4gIC4uLndpbmRvd1snV2ViQ2hhdCddLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZURpcmVjdExpbmUsXG4gIGNyZWF0ZVN0b3JlLFxuICBjcmVhdGVTdHlsZVNldCxcbiAgUmVhY3RXZWJDaGF0LFxuICByZW5kZXJXZWJDaGF0XG59O1xuXG5hZGRWZXJzaW9uKCdtaW5pbWFsJyk7XG4iXX0=
