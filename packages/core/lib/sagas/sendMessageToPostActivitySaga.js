'use strict';

var cov_23fqt04vl7 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/sendMessageToPostActivitySaga.js';
  var hash = 'e1c46c8e6df6668b206ccd57c1796d5556790bc3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/sendMessageToPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 17,
          column: 4
        }
      },
      '1': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 105
        }
      },
      '2': {
        start: {
          line: 21,
          column: 41
        },
        end: {
          line: 21,
          column: 78
        }
      },
      '3': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 50
        }
      }
    },
    fnMap: {
      '0': {
        name: 'postActivityWithMessage',
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 33
          }
        },
        loc: {
          start: {
            line: 7,
            column: 65
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: 'sendMessageToPostActivity',
        decl: {
          start: {
            line: 20,
            column: 10
          },
          end: {
            line: 20,
            column: 35
          }
        },
        loc: {
          start: {
            line: 20,
            column: 38
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 20
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 19
          }
        },
        loc: {
          start: {
            line: 21,
            column: 41
          },
          end: {
            line: 21,
            column: 78
          }
        },
        line: 21
      },
      '3': {
        name: 'sendMessageToPostActivitySaga',
        decl: {
          start: {
            line: 24,
            column: 25
          },
          end: {
            line: 24,
            column: 54
          }
        },
        loc: {
          start: {
            line: 24,
            column: 57
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 41
          },
          end: {
            line: 21,
            column: 78
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 21,
              column: 41
            },
            end: {
              line: 21,
              column: 62
            }
          },
          {
            start: {
              line: 21,
              column: 66
            },
            end: {
              line: 21,
              column: 78
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
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e1c46c8e6df6668b206ccd57c1796d5556790bc3'
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
exports['default'] = sendMessageToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendMessage = require('../actions/sendMessage');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithMessage),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageToPostActivitySaga);

function postActivityWithMessage(_ref) {
  var _ref$payload, method, text;

  return _regenerator['default'].wrap(function postActivityWithMessage$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_ref$payload = _ref.payload), (method = _ref$payload.method), (text = _ref$payload.text);
          cov_23fqt04vl7.f[0]++;
          cov_23fqt04vl7.s[0]++;
          _context.next = 5;
          return (0, _effects.put)(
            (0, _postActivity['default'])(
              {
                text: text,
                textFormat: 'plain',
                type: 'message'
              },
              method
            )
          );

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendMessageToPostActivity() {
  return _regenerator['default'].wrap(function sendMessageToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_23fqt04vl7.f[1]++;
          cov_23fqt04vl7.s[1]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(function(_ref2) {
            var payload = _ref2.payload,
              type = _ref2.type;
            cov_23fqt04vl7.f[2]++;
            cov_23fqt04vl7.s[2]++;
            return (
              (cov_23fqt04vl7.b[0][0]++, type === _sendMessage.SEND_MESSAGE) && (cov_23fqt04vl7.b[0][1]++, payload.text)
            );
          }, postActivityWithMessage);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendMessageToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendMessageToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_23fqt04vl7.f[3]++;
          cov_23fqt04vl7.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(sendMessageToPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0QWN0aXZpdHlXaXRoTWVzc2FnZSIsInNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHkiLCJzZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSIsInBheWxvYWQiLCJtZXRob2QiLCJ0ZXh0IiwidGV4dEZvcm1hdCIsInR5cGUiLCJTRU5EX01FU1NBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsdUI7Ozs2QkFhQUMseUI7Ozs2QkFJZUMsNkI7O0FBakJ6QixTQUFVRix1QkFBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQW9DRyxPQUFwQyxFQUErQ0MsTUFBL0MsZ0JBQStDQSxNQUEvQyxFQUF1REMsSUFBdkQsZ0JBQXVEQSxJQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLGtCQUNKLDhCQUNFO0FBQ0VBLFlBQUFBLElBQUksRUFBSkEsSUFERjtBQUVFQyxZQUFBQSxVQUFVLEVBQUUsT0FGZDtBQUdFQyxZQUFBQSxJQUFJLEVBQUU7QUFIUixXQURGLEVBTUVILE1BTkYsQ0FESSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFBLFNBQVVILHlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFBVSxpQkFBdUI7QUFBQSxnQkFBcEJFLE9BQW9CLFNBQXBCQSxPQUFvQjtBQUFBLGdCQUFYSSxJQUFXLFNBQVhBLElBQVc7QUFBQTtBQUFBO0FBQUEsOENBQUFBLElBQUksS0FBS0MseUJBQVQsZ0NBQXlCTCxPQUFPLENBQUNFLElBQWpDO0FBQXFDLFdBQXRFLEVBQXdFTCx1QkFBeEUsQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSw2QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELHlCQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB7IFNFTkRfTUVTU0FHRSB9IGZyb20gJy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IHBvc3RBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHBvc3RBY3Rpdml0eVdpdGhNZXNzYWdlKHsgcGF5bG9hZDogeyBtZXRob2QsIHRleHQgfSB9KSB7XG4gIHlpZWxkIHB1dChcbiAgICBwb3N0QWN0aXZpdHkoXG4gICAgICB7XG4gICAgICAgIHRleHQsXG4gICAgICAgIHRleHRGb3JtYXQ6ICdwbGFpbicsXG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJ1xuICAgICAgfSxcbiAgICAgIG1ldGhvZFxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24qIHNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHkoKSB7XG4gIHlpZWxkIHRha2VFdmVyeSgoeyBwYXlsb2FkLCB0eXBlIH0pID0+IHR5cGUgPT09IFNFTkRfTUVTU0FHRSAmJiBwYXlsb2FkLnRleHQsIHBvc3RBY3Rpdml0eVdpdGhNZXNzYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHlTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5KTtcbn1cbiJdfQ==
