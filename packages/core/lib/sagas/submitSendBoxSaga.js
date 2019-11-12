'use strict';

var cov_2ijh3tjkmj = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/submitSendBoxSaga.js';
  var hash = '46fcb133b560b5e8133440576c60f1e45e9e1d40';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/submitSendBoxSaga.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 17,
          column: 5
        }
      },
      '1': {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 59
        }
      },
      '2': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '3': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 58
        }
      },
      '4': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 32
        }
      },
      '5': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 38
        }
      }
    },
    fnMap: {
      '0': {
        name: 'submitSendBox',
        decl: {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 9,
            column: 23
          }
        },
        loc: {
          start: {
            line: 9,
            column: 26
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 9
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 35
          },
          end: {
            line: 10,
            column: 36
          }
        },
        loc: {
          start: {
            line: 10,
            column: 70
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: 'submitSendBoxSaga',
        decl: {
          start: {
            line: 20,
            column: 25
          },
          end: {
            line: 20,
            column: 42
          }
        },
        loc: {
          start: {
            line: 20,
            column: 45
          },
          end: {
            line: 22,
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
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 13,
              column: 4
            },
            end: {
              line: 16,
              column: 5
            }
          },
          {
            start: {
              line: 13,
              column: 4
            },
            end: {
              line: 16,
              column: 5
            }
          }
        ],
        line: 13
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
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '46fcb133b560b5e8133440576c60f1e45e9e1d40'
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
exports['default'] = submitSendBoxSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _submitSendBox = require('../actions/submitSendBox');

var _sendBoxValue = _interopRequireDefault(require('../selectors/sendBoxValue'));

var _sendMessage = _interopRequireDefault(require('../actions/sendMessage'));

var _setSendBox = _interopRequireDefault(require('../actions/setSendBox'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(submitSendBox),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(submitSendBoxSaga);

function submitSendBox() {
  return _regenerator['default'].wrap(function submitSendBox$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_2ijh3tjkmj.f[0]++;
          cov_2ijh3tjkmj.s[0]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(
            _submitSendBox.SUBMIT_SEND_BOX,
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee(_ref) {
              var method, sendBoxValue;
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      method = _ref.payload.method;
                      cov_2ijh3tjkmj.f[1]++;
                      cov_2ijh3tjkmj.s[1]++;
                      _context.next = 5;
                      return (0, _effects.select)(_sendBoxValue['default']);

                    case 5:
                      sendBoxValue = _context.sent;
                      cov_2ijh3tjkmj.s[2]++;

                      if (!sendBoxValue) {
                        _context.next = 17;
                        break;
                      }

                      cov_2ijh3tjkmj.b[0][0]++;
                      cov_2ijh3tjkmj.s[3]++;
                      _context.next = 12;
                      return (0, _effects.put)((0, _sendMessage['default'])(sendBoxValue.trim(), method));

                    case 12:
                      cov_2ijh3tjkmj.s[4]++;
                      _context.next = 15;
                      return (0, _effects.put)((0, _setSendBox['default'])(''));

                    case 15:
                      _context.next = 18;
                      break;

                    case 17:
                      cov_2ijh3tjkmj.b[0][1]++;

                    case 18:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function submitSendBoxSaga() {
  return _regenerator['default'].wrap(function submitSendBoxSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_2ijh3tjkmj.f[2]++;
          cov_2ijh3tjkmj.s[5]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(submitSendBox);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdWJtaXRTZW5kQm94U2FnYS5qcyJdLCJuYW1lcyI6WyJzdWJtaXRTZW5kQm94Iiwic3VibWl0U2VuZEJveFNhZ2EiLCJTVUJNSVRfU0VORF9CT1giLCJtZXRob2QiLCJwYXlsb2FkIiwic2VuZEJveFZhbHVlU2VsZWN0b3IiLCJzZW5kQm94VmFsdWUiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLGE7Ozs2QkFXZUMsaUI7O0FBWHpCLFNBQVVELGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVRSw4QkFBVjtBQUFBO0FBQUEsdUNBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QkMsb0JBQUFBLE1BQXZCLFFBQVlDLE9BQVosQ0FBdUJELE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQ1YsMkJBQU0scUJBQU9FLHdCQUFQLENBQU47O0FBRFU7QUFDekJDLG9CQUFBQSxZQUR5QjtBQUFBOztBQUFBLHlCQUczQkEsWUFIMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSTdCLDJCQUFNLGtCQUFJLDZCQUFZQSxZQUFZLENBQUNDLElBQWIsRUFBWixFQUFpQ0osTUFBakMsQ0FBSixDQUFOOztBQUo2QjtBQUFBO0FBQUE7QUFLN0IsMkJBQU0sa0JBQUksNEJBQVcsRUFBWCxDQUFKLENBQU47O0FBTDZCO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTNCLEVBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2UsU0FBVUYsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCxhQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHNlbGVjdCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgU1VCTUlUX1NFTkRfQk9YIH0gZnJvbSAnLi4vYWN0aW9ucy9zdWJtaXRTZW5kQm94JztcbmltcG9ydCBzZW5kQm94VmFsdWVTZWxlY3RvciBmcm9tICcuLi9zZWxlY3RvcnMvc2VuZEJveFZhbHVlJztcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tICcuLi9hY3Rpb25zL3NlbmRNZXNzYWdlJztcbmltcG9ydCBzZXRTZW5kQm94IGZyb20gJy4uL2FjdGlvbnMvc2V0U2VuZEJveCc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHN1Ym1pdFNlbmRCb3goKSB7XG4gIHlpZWxkIHRha2VFdmVyeShTVUJNSVRfU0VORF9CT1gsIGZ1bmN0aW9uKih7IHBheWxvYWQ6IHsgbWV0aG9kIH0gfSkge1xuICAgIGNvbnN0IHNlbmRCb3hWYWx1ZSA9IHlpZWxkIHNlbGVjdChzZW5kQm94VmFsdWVTZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VuZEJveFZhbHVlKSB7XG4gICAgICB5aWVsZCBwdXQoc2VuZE1lc3NhZ2Uoc2VuZEJveFZhbHVlLnRyaW0oKSwgbWV0aG9kKSk7XG4gICAgICB5aWVsZCBwdXQoc2V0U2VuZEJveCgnJykpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzdWJtaXRTZW5kQm94U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc3VibWl0U2VuZEJveCk7XG59XG4iXX0=
