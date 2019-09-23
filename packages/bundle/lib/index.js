'use strict';

var cov_wjvizh7lv = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/index.ts';
  var hash = '1f5d737c1d50e934cd4ed5c3dc406f710dc49cde';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/index.ts',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 64
        }
      },
      '1': {
        start: {
          line: 18,
          column: 32
        },
        end: {
          line: 24,
          column: 1
        }
      },
      '2': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 22,
          column: 6
        }
      },
      '3': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 88
        }
      },
      '4': {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 45,
          column: 2
        }
      },
      '5': {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 47,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 33
          }
        },
        loc: {
          start: {
            line: 18,
            column: 43
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 19,
              column: 18
            }
          },
          {
            start: {
              line: 20,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          }
        ],
        line: 19
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
    hash: '1f5d737c1d50e934cd4ed5c3dc406f710dc49cde'
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
var _exportNames = {
  createDirectLine: true,
  renderWebChat: true,
  createCognitiveServicesBingSpeechPonyfillFactory: true,
  createCognitiveServicesSpeechServicesPonyfillFactory: true,
  createStyleSet: true,
  renderMarkdown: true
};
Object.defineProperty(exports, 'createCognitiveServicesBingSpeechPonyfillFactory', {
  enumerable: true,
  get: function get() {
    return _createCognitiveServicesBingSpeechPonyfillFactory.default;
  }
});
Object.defineProperty(exports, 'createCognitiveServicesSpeechServicesPonyfillFactory', {
  enumerable: true,
  get: function get() {
    return _createCognitiveServicesSpeechServicesPonyfillFactory.default;
  }
});
Object.defineProperty(exports, 'createStyleSet', {
  enumerable: true,
  get: function get() {
    return _createStyleSetWithAdaptiveCards.default;
  }
});
Object.defineProperty(exports, 'renderMarkdown', {
  enumerable: true,
  get: function get() {
    return _renderMarkdown.default;
  }
});
exports.renderWebChat = exports.default = exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _indexMinimal = require('./index-minimal');

Object.keys(_indexMinimal).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexMinimal[key];
    }
  });
});

var _addVersion = _interopRequireDefault(require('./addVersion'));

var _renderWebChat = _interopRequireDefault(require('./renderWebChat'));

var _createCognitiveServicesBingSpeechPonyfillFactory = _interopRequireDefault(
  require('./createCognitiveServicesBingSpeechPonyfillFactory')
);

var _createCognitiveServicesSpeechServicesPonyfillFactory = _interopRequireDefault(
  require('./createCognitiveServicesSpeechServicesPonyfillFactory')
);

var _createStyleSetWithAdaptiveCards = _interopRequireDefault(
  require('./adaptiveCards/Styles/createStyleSetWithAdaptiveCards')
);

var _createDirectLine = _interopRequireDefault(require('./createDirectLine'));

var _FullReactWebChat = _interopRequireDefault(require('./FullReactWebChat'));

var _renderMarkdown = _interopRequireDefault(require('./renderMarkdown'));

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

var renderWebChat = (cov_wjvizh7lv.s[0]++, _renderWebChat.default.bind(null, _FullReactWebChat.default));
exports.renderWebChat = renderWebChat;
cov_wjvizh7lv.s[1]++;

var createDirectLine = function createDirectLine(options) {
  cov_wjvizh7lv.f[0]++;
  cov_wjvizh7lv.s[2]++;
  (cov_wjvizh7lv.b[0][0]++, options.botAgent) &&
    (cov_wjvizh7lv.b[0][1]++,
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    ));
  cov_wjvizh7lv.s[3]++;
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_indexMinimal.version, ' (Full)')
    })
  );
};

exports.createDirectLine = createDirectLine;
var _default = _FullReactWebChat.default;
exports.default = _default;
cov_wjvizh7lv.s[4]++;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  createCognitiveServicesBingSpeechPonyfillFactory: _createCognitiveServicesBingSpeechPonyfillFactory.default,
  createCognitiveServicesSpeechServicesPonyfillFactory: _createCognitiveServicesSpeechServicesPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createStyleSet: _createStyleSetWithAdaptiveCards.default,
  ReactWebChat: _FullReactWebChat.default,
  renderMarkdown: _renderMarkdown.default,
  renderWebChat: renderWebChat
});
cov_wjvizh7lv.s[5]++;
(0, _addVersion.default)('full');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJyZW5kZXJXZWJDaGF0IiwiY29yZVJlbmRlcldlYkNoYXQiLCJiaW5kIiwiUmVhY3RXZWJDaGF0IiwiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwidmVyc2lvbiIsIndpbmRvdyIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnkiLCJjcmVhdGVTdHlsZVNldCIsInJlbmRlck1hcmtkb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsMEJBQUdDLHVCQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJDLHlCQUE3QixDQUFILENBQW5COzs7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFBQTtBQUFBO0FBQ3pDLDRCQUFBQSxPQUFPLENBQUNDLFFBQVIsK0JBQ0VDLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLHFKQURGLENBREY7QUFEeUM7QUFLekMsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxxQkFBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O2VBUVFOLHlCOzs7QUFVZk8sTUFBTSxDQUFDLFNBQUQsQ0FBTixxQkFDS0EsTUFBTSxDQUFDLFNBQUQsQ0FEWDtBQUVFQyxFQUFBQSxnREFBZ0QsRUFBaERBLHlEQUZGO0FBR0VDLEVBQUFBLG9EQUFvRCxFQUFwREEsNkRBSEY7QUFJRVIsRUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFKRjtBQUtFUyxFQUFBQSxjQUFjLEVBQWRBLHdDQUxGO0FBTUVWLEVBQUFBLFlBQVksRUFBWkEseUJBTkY7QUFPRVcsRUFBQUEsY0FBYyxFQUFkQSx1QkFQRjtBQVFFZCxFQUFBQSxhQUFhLEVBQWJBO0FBUkY7O0FBV0EseUJBQVcsTUFBWCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xuLy8gd2luZG93WydXZWJDaGF0J10gaXMgcmVxdWlyZWQgZm9yIFR5cGVTY3JpcHRcblxuZXhwb3J0ICogZnJvbSAnLi9pbmRleC1taW5pbWFsJztcblxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4vaW5kZXgtbWluaW1hbCc7XG5pbXBvcnQgYWRkVmVyc2lvbiBmcm9tICcuL2FkZFZlcnNpb24nO1xuaW1wb3J0IGNvcmVSZW5kZXJXZWJDaGF0IGZyb20gJy4vcmVuZGVyV2ViQ2hhdCc7XG5pbXBvcnQgY3JlYXRlQ29nbml0aXZlU2VydmljZXNCaW5nU3BlZWNoUG9ueWZpbGxGYWN0b3J5IGZyb20gJy4vY3JlYXRlQ29nbml0aXZlU2VydmljZXNCaW5nU3BlZWNoUG9ueWZpbGxGYWN0b3J5JztcbmltcG9ydCBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5IGZyb20gJy4vY3JlYXRlQ29nbml0aXZlU2VydmljZXNTcGVlY2hTZXJ2aWNlc1BvbnlmaWxsRmFjdG9yeSc7XG5pbXBvcnQgY3JlYXRlU3R5bGVTZXQgZnJvbSAnLi9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9jcmVhdGVTdHlsZVNldFdpdGhBZGFwdGl2ZUNhcmRzJztcbmltcG9ydCBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSBmcm9tICcuL2NyZWF0ZURpcmVjdExpbmUnO1xuaW1wb3J0IFJlYWN0V2ViQ2hhdCBmcm9tICcuL0Z1bGxSZWFjdFdlYkNoYXQnO1xuaW1wb3J0IHJlbmRlck1hcmtkb3duIGZyb20gJy4vcmVuZGVyTWFya2Rvd24nO1xuXG5jb25zdCByZW5kZXJXZWJDaGF0ID0gY29yZVJlbmRlcldlYkNoYXQuYmluZChudWxsLCBSZWFjdFdlYkNoYXQpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0TGluZSA9IG9wdGlvbnMgPT4ge1xuICBvcHRpb25zLmJvdEFnZW50ICYmXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBEZXZlbG9wZXJzIGFyZSBub3QgY3VycmVudGx5IGFsbG93ZWQgdG8gc2V0IGJvdEFnZW50LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9pc3N1ZXMvMjExOSBmb3IgbW9yZSBkZXRhaWxzLidcbiAgICApO1xuICByZXR1cm4gZGVmYXVsdENyZWF0ZURpcmVjdExpbmUoeyAuLi5vcHRpb25zLCBib3RBZ2VudDogYFdlYkNoYXQvJHt2ZXJzaW9ufSAoRnVsbClgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RXZWJDaGF0O1xuXG5leHBvcnQge1xuICBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc0JpbmdTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZVN0eWxlU2V0LFxuICByZW5kZXJNYXJrZG93bixcbiAgcmVuZGVyV2ViQ2hhdFxufTtcblxud2luZG93WydXZWJDaGF0J10gPSB7XG4gIC4uLndpbmRvd1snV2ViQ2hhdCddLFxuICBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc0JpbmdTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZURpcmVjdExpbmUsXG4gIGNyZWF0ZVN0eWxlU2V0LFxuICBSZWFjdFdlYkNoYXQsXG4gIHJlbmRlck1hcmtkb3duLFxuICByZW5kZXJXZWJDaGF0XG59O1xuXG5hZGRWZXJzaW9uKCdmdWxsJyk7XG4iXX0=
