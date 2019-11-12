'use strict';

var cov_28xsmy0yph = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/sendMessageBackToPostActivitySaga.js';
  var hash = '0e66e6b4fa92456c219b501bd8c0dbb28fd5c630';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/sendMessageBackToPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      '1': {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 20,
          column: 6
        }
      },
      '2': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 66
        }
      },
      '3': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 54
        }
      }
    },
    fnMap: {
      '0': {
        name: 'postActivityWithMessageBack',
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 37
          }
        },
        loc: {
          start: {
            line: 7,
            column: 81
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: 'sendMessageBackToPostActivity',
        decl: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 39
          }
        },
        loc: {
          start: {
            line: 24,
            column: 42
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      },
      '2': {
        name: 'sendMessageBackToPostActivitySaga',
        decl: {
          start: {
            line: 28,
            column: 25
          },
          end: {
            line: 28,
            column: 58
          }
        },
        loc: {
          start: {
            line: 28,
            column: 61
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 28
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 8,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          },
          {
            start: {
              line: 8,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          }
        ],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 8,
            column: 19
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 8,
              column: 6
            },
            end: {
              line: 8,
              column: 10
            }
          },
          {
            start: {
              line: 8,
              column: 14
            },
            end: {
              line: 8,
              column: 19
            }
          }
        ],
        line: 8
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '0e66e6b4fa92456c219b501bd8c0dbb28fd5c630'
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
exports['default'] = sendMessageBackToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendMessageBack = require('../actions/sendMessageBack');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithMessageBack),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageBackToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageBackToPostActivitySaga);

function postActivityWithMessageBack(_ref) {
  var _ref$payload, displayText, text, value;

  return _regenerator['default'].wrap(function postActivityWithMessageBack$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_ref$payload = _ref.payload),
            (displayText = _ref$payload.displayText),
            (text = _ref$payload.text),
            (value = _ref$payload.value);
          cov_28xsmy0yph.f[0]++;
          cov_28xsmy0yph.s[0]++;

          if (!((cov_28xsmy0yph.b[1][0]++, text) || (cov_28xsmy0yph.b[1][1]++, value))) {
            _context.next = 10;
            break;
          }

          cov_28xsmy0yph.b[0][0]++;
          cov_28xsmy0yph.s[1]++;
          _context.next = 8;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              channelData: {
                messageBack: {
                  displayText: displayText
                }
              },
              text: text,
              type: 'message',
              value: value
            })
          );

        case 8:
          _context.next = 11;
          break;

        case 10:
          cov_28xsmy0yph.b[0][1]++;

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendMessageBackToPostActivity() {
  return _regenerator['default'].wrap(function sendMessageBackToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_28xsmy0yph.f[1]++;
          cov_28xsmy0yph.s[2]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(_sendMessageBack.SEND_MESSAGE_BACK, postActivityWithMessageBack);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendMessageBackToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendMessageBackToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_28xsmy0yph.f[2]++;
          cov_28xsmy0yph.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(sendMessageBackToPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aE1lc3NhZ2VCYWNrIiwic2VuZE1lc3NhZ2VCYWNrVG9Qb3N0QWN0aXZpdHkiLCJzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJwYXlsb2FkIiwiZGlzcGxheVRleHQiLCJ0ZXh0IiwidmFsdWUiLCJjaGFubmVsRGF0YSIsIm1lc3NhZ2VCYWNrIiwidHlwZSIsIlNFTkRfTUVTU0FHRV9CQUNLIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLDJCOzs7NkJBaUJBQyw2Qjs7OzZCQUllQyxpQzs7QUFyQnpCLFNBQVVGLDJCQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBd0NHLE9BQXhDLEVBQW1EQyxXQUFuRCxnQkFBbURBLFdBQW5ELEVBQWdFQyxJQUFoRSxnQkFBZ0VBLElBQWhFLEVBQXNFQyxLQUF0RSxnQkFBc0VBLEtBQXRFO0FBQUE7QUFBQTs7QUFBQSxnQkFDTSwyQkFBQUQsSUFBSSxnQ0FBSUMsS0FBSixDQURWO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUVJLGlCQUFNLGtCQUNKLDhCQUFhO0FBQ1hDLFlBQUFBLFdBQVcsRUFBRTtBQUNYQyxjQUFBQSxXQUFXLEVBQUU7QUFDWEosZ0JBQUFBLFdBQVcsRUFBWEE7QUFEVztBQURGLGFBREY7QUFNWEMsWUFBQUEsSUFBSSxFQUFKQSxJQU5XO0FBT1hJLFlBQUFBLElBQUksRUFBRSxTQVBLO0FBUVhILFlBQUFBLEtBQUssRUFBTEE7QUFSVyxXQUFiLENBREksQ0FBTjs7QUFGSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQkEsU0FBVUwsNkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVUyxrQ0FBVixFQUE2QlYsMkJBQTdCLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsaUNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCw2QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRU5EX01FU1NBR0VfQkFDSyB9IGZyb20gJy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2VCYWNrJztcbmltcG9ydCBwb3N0QWN0aXZpdHkgZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBwb3N0QWN0aXZpdHlXaXRoTWVzc2FnZUJhY2soeyBwYXlsb2FkOiB7IGRpc3BsYXlUZXh0LCB0ZXh0LCB2YWx1ZSB9IH0pIHtcbiAgaWYgKHRleHQgfHwgdmFsdWUpIHtcbiAgICB5aWVsZCBwdXQoXG4gICAgICBwb3N0QWN0aXZpdHkoe1xuICAgICAgICBjaGFubmVsRGF0YToge1xuICAgICAgICAgIG1lc3NhZ2VCYWNrOiB7XG4gICAgICAgICAgICBkaXNwbGF5VGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNFTkRfTUVTU0FHRV9CQUNLLCBwb3N0QWN0aXZpdHlXaXRoTWVzc2FnZUJhY2spO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc2VuZE1lc3NhZ2VCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eSk7XG59XG4iXX0=
