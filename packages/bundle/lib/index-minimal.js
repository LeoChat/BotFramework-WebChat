'use strict';

var cov_27r64vva6p = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/index-minimal.ts';
  var hash = '05ed9194d7d35836969fba8f4a49f99a070a0887';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/index-minimal.ts',
    statementMap: {
      '0': {
        start: {
          line: 19,
          column: 22
        },
        end: {
          line: 19,
          column: 64
        }
      },
      '1': {
        start: {
          line: 21,
          column: 32
        },
        end: {
          line: 27,
          column: 1
        }
      },
      '2': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 25,
          column: 6
        }
      },
      '3': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 91
        }
      },
      '4': {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 56,
          column: 2
        }
      },
      '5': {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 22
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 32
          },
          end: {
            line: 21,
            column: 33
          }
        },
        loc: {
          start: {
            line: 21,
            column: 43
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 22,
              column: 2
            },
            end: {
              line: 22,
              column: 18
            }
          },
          {
            start: {
              line: 23,
              column: 4
            },
            end: {
              line: 25,
              column: 5
            }
          }
        ],
        line: 22
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
    hash: '05ed9194d7d35836969fba8f4a49f99a070a0887'
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
Object.defineProperty(exports, 'hooks', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.hooks;
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

var renderWebChat = (cov_27r64vva6p.s[0]++, _renderWebChat.default.bind(null, _botframeworkWebchatComponent.default));
exports.renderWebChat = renderWebChat;
cov_27r64vva6p.s[1]++;

var createDirectLine = function createDirectLine(options) {
  cov_27r64vva6p.f[0]++;
  cov_27r64vva6p.s[2]++;
  (cov_27r64vva6p.b[0][0]++, options.botAgent) &&
    (cov_27r64vva6p.b[0][1]++,
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    ));
  cov_27r64vva6p.s[3]++;
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_botframeworkWebchatCore.version, ' (Minimal)')
    })
  );
};

exports.createDirectLine = createDirectLine;
var _default = _botframeworkWebchatComponent.default;
exports.default = _default;
cov_27r64vva6p.s[4]++;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  concatMiddleware: _botframeworkWebchatComponent.concatMiddleware,
  connectToWebChat: _botframeworkWebchatComponent.connectToWebChat,
  Constants: _botframeworkWebchatCore.Constants,
  createBrowserWebSpeechPonyfillFactory: _createBrowserWebSpeechPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createStore: _botframeworkWebchatCore.createStore,
  createStyleSet: _botframeworkWebchatComponent.createStyleSet,
  hooks: _botframeworkWebchatComponent.hooks,
  ReactWebChat: _botframeworkWebchatComponent.default,
  renderWebChat: renderWebChat
});
cov_27r64vva6p.s[5]++;
(0, _addVersion.default)('minimal');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1taW5pbWFsLnRzIl0sIm5hbWVzIjpbInJlbmRlcldlYkNoYXQiLCJjb3JlUmVuZGVyV2ViQ2hhdCIsImJpbmQiLCJSZWFjdFdlYkNoYXQiLCJjcmVhdGVEaXJlY3RMaW5lIiwib3B0aW9ucyIsImJvdEFnZW50IiwiY29uc29sZSIsIndhcm4iLCJ2ZXJzaW9uIiwid2luZG93IiwiY29uY2F0TWlkZGxld2FyZSIsImNvbm5lY3RUb1dlYkNoYXQiLCJDb25zdGFudHMiLCJjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVTdHlsZVNldCIsImhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsMkJBQUdDLHVCQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJDLHFDQUE3QixDQUFILENBQW5COzs7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFBQTtBQUFBO0FBQ3pDLDZCQUFBQSxPQUFPLENBQUNDLFFBQVIsZ0NBQ0VDLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLHNMQURGLENBREY7QUFEeUM7QUFLekMsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxnQ0FBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O2VBUVFOLHFDOzs7QUFlZk8sTUFBTSxDQUFDLFNBQUQsQ0FBTixxQkFDS0EsTUFBTSxDQUFDLFNBQUQsQ0FEWDtBQUVFQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLDhDQUZGO0FBR0VDLEVBQUFBLGdCQUFnQixFQUFoQkEsOENBSEY7QUFJRUMsRUFBQUEsU0FBUyxFQUFUQSxrQ0FKRjtBQUtFQyxFQUFBQSxxQ0FBcUMsRUFBckNBLDhDQUxGO0FBTUVWLEVBQUFBLGdCQUFnQixFQUFoQkEsZ0JBTkY7QUFPRVcsRUFBQUEsV0FBVyxFQUFYQSxvQ0FQRjtBQVFFQyxFQUFBQSxjQUFjLEVBQWRBLDRDQVJGO0FBU0VDLEVBQUFBLEtBQUssRUFBTEEsbUNBVEY7QUFVRWQsRUFBQUEsWUFBWSxFQUFaQSxxQ0FWRjtBQVdFSCxFQUFBQSxhQUFhLEVBQWJBO0FBWEY7O0FBY0EseUJBQVcsU0FBWCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xuLy8gd2luZG93WydXZWJDaGF0J10gaXMgcmVxdWlyZWQgZm9yIFR5cGVTY3JpcHRcblxuaW1wb3J0IHsgQ29uc3RhbnRzLCBjcmVhdGVTdG9yZSwgdmVyc2lvbiB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuXG5pbXBvcnQgUmVhY3RXZWJDaGF0LCB7XG4gIENvbXBvbmVudHMsXG4gIGNvbmNhdE1pZGRsZXdhcmUsXG4gIGNvbm5lY3RUb1dlYkNoYXQsXG4gIGNyZWF0ZVN0eWxlU2V0LFxuICBob29rc1xufSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuXG5pbXBvcnQgYWRkVmVyc2lvbiBmcm9tICcuL2FkZFZlcnNpb24nO1xuaW1wb3J0IGNvcmVSZW5kZXJXZWJDaGF0IGZyb20gJy4vcmVuZGVyV2ViQ2hhdCc7XG5pbXBvcnQgY3JlYXRlQnJvd3NlcldlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSBmcm9tICcuL2NyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnknO1xuaW1wb3J0IGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lIGZyb20gJy4vY3JlYXRlRGlyZWN0TGluZSc7XG5cbmNvbnN0IHJlbmRlcldlYkNoYXQgPSBjb3JlUmVuZGVyV2ViQ2hhdC5iaW5kKG51bGwsIFJlYWN0V2ViQ2hhdCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3RMaW5lID0gb3B0aW9ucyA9PiB7XG4gIG9wdGlvbnMuYm90QWdlbnQgJiZcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnV2ViIENoYXQ6IERldmVsb3BlcnMgYXJlIG5vdCBjdXJyZW50bHkgYWxsb3dlZCB0byBzZXQgYm90QWdlbnQgaW4gdGhlIGNyZWF0ZURpcmVjdExpbmUgZnVuY3Rpb24uIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTE5IGZvciBtb3JlIGRldGFpbHMuJ1xuICAgICk7XG4gIHJldHVybiBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSh7IC4uLm9wdGlvbnMsIGJvdEFnZW50OiBgV2ViQ2hhdC8ke3ZlcnNpb259IChNaW5pbWFsKWAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFdlYkNoYXQ7XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudHMsXG4gIGNvbmNhdE1pZGRsZXdhcmUsXG4gIGNvbm5lY3RUb1dlYkNoYXQsXG4gIENvbnN0YW50cyxcbiAgY3JlYXRlQnJvd3NlcldlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSxcbiAgY3JlYXRlU3RvcmUsXG4gIGNyZWF0ZVN0eWxlU2V0LFxuICBob29rcyxcbiAgcmVuZGVyV2ViQ2hhdCxcbiAgdmVyc2lvblxufTtcblxud2luZG93WydXZWJDaGF0J10gPSB7XG4gIC4uLndpbmRvd1snV2ViQ2hhdCddLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZURpcmVjdExpbmUsXG4gIGNyZWF0ZVN0b3JlLFxuICBjcmVhdGVTdHlsZVNldCxcbiAgaG9va3MsXG4gIFJlYWN0V2ViQ2hhdCxcbiAgcmVuZGVyV2ViQ2hhdFxufTtcblxuYWRkVmVyc2lvbignbWluaW1hbCcpO1xuIl19
