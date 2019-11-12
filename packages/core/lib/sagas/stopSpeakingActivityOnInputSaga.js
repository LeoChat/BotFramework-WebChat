'use strict';

var cov_2cnt39movw = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/stopSpeakingActivityOnInputSaga.js';
  var hash = 'f21d46289f87a5bbbf878e4b9e062ed957df524d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/stopSpeakingActivityOnInputSaga.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      '1': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 16,
          column: 105
        }
      },
      '2': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 40
        }
      },
      '3': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 52
        }
      }
    },
    fnMap: {
      '0': {
        name: 'stopSpeakingActivityOnInput',
        decl: {
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 8,
            column: 37
          }
        },
        loc: {
          start: {
            line: 8,
            column: 40
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 16,
            column: 105
          }
        },
        line: 11
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      },
      '3': {
        name: 'stopSpeakingActivityOnInputSaga',
        decl: {
          start: {
            line: 23,
            column: 25
          },
          end: {
            line: 23,
            column: 56
          }
        },
        loc: {
          start: {
            line: 23,
            column: 59
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 16,
            column: 105
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 7
            },
            end: {
              line: 11,
              column: 28
            }
          },
          {
            start: {
              line: 11,
              column: 32
            },
            end: {
              line: 11,
              column: 44
            }
          },
          {
            start: {
              line: 16,
              column: 7
            },
            end: {
              line: 16,
              column: 37
            }
          },
          {
            start: {
              line: 16,
              column: 41
            },
            end: {
              line: 16,
              column: 65
            }
          },
          {
            start: {
              line: 16,
              column: 69
            },
            end: {
              line: 16,
              column: 104
            }
          }
        ],
        line: 11
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
      '0': [0, 0, 0, 0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'f21d46289f87a5bbbf878e4b9e062ed957df524d'
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
exports['default'] = stopSpeakingActivityOnInputSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _setSendBox = require('../actions/setSendBox');

var _stopSpeakingActivity = _interopRequireDefault(require('../actions/stopSpeakingActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(stopSpeakingActivityOnInput),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(stopSpeakingActivityOnInputSaga);

function stopSpeakingActivityOnInput() {
  return _regenerator['default'].wrap(function stopSpeakingActivityOnInput$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_2cnt39movw.f[0]++;
          cov_2cnt39movw.s[0]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(
            function(_ref) {
              var meta = _ref.meta,
                payload = _ref.payload,
                type = _ref.type;
              cov_2cnt39movw.f[1]++;
              cov_2cnt39movw.s[1]++;
              return (
                ((cov_2cnt39movw.b[0][0]++, type === _setSendBox.SET_SEND_BOX) &&
                  (cov_2cnt39movw.b[0][1]++, payload.text)) || // We want to stop speaking activity when the user click on a card action
                // But currently there are no actions generated out of a card action
                // So, right now, we are using best-effort by listening to POST_ACTIVITY_PENDING with a "message" event
                // We filter out speech because we will call startSpeakingActivity() for POST_ACTIVITY_PENDING dispatched by speech
                ((cov_2cnt39movw.b[0][2]++, type === _postActivity.POST_ACTIVITY_PENDING) &&
                  (cov_2cnt39movw.b[0][3]++, meta.method !== 'speech') &&
                  (cov_2cnt39movw.b[0][4]++, payload.activity.type === 'message'))
              );
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee() {
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      cov_2cnt39movw.f[2]++;
                      cov_2cnt39movw.s[2]++;
                      _context.next = 4;
                      return (0, _effects.put)((0, _stopSpeakingActivity['default'])());

                    case 4:
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

function stopSpeakingActivityOnInputSaga() {
  return _regenerator['default'].wrap(function stopSpeakingActivityOnInputSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_2cnt39movw.f[3]++;
          cov_2cnt39movw.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(stopSpeakingActivityOnInput);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXRTYWdhLmpzIl0sIm5hbWVzIjpbInN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dCIsInN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EiLCJtZXRhIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfU0VORF9CT1giLCJ0ZXh0IiwiUE9TVF9BQ1RJVklUWV9QRU5ESU5HIiwibWV0aG9kIiwiYWN0aXZpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsMkI7Ozs2QkFlZUMsK0I7O0FBZnpCLFNBQVVELDJCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFDSixnQkFDRTtBQUFBLGdCQURDRSxJQUNELFFBRENBLElBQ0Q7QUFBQSxnQkFET0MsT0FDUCxRQURPQSxPQUNQO0FBQUEsZ0JBRGdCQyxJQUNoQixRQURnQkEsSUFDaEI7QUFBQTtBQUFBO0FBQUEsbUJBQUMsMkJBQUFBLElBQUksS0FBS0Msd0JBQVQsZ0NBQXlCRixPQUFPLENBQUNHLElBQWpDLENBQUQsSUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLHVDQUFBRixJQUFJLEtBQUtHLG1DQUFULGdDQUFrQ0wsSUFBSSxDQUFDTSxNQUFMLEtBQWdCLFFBQWxELGdDQUE4REwsT0FBTyxDQUFDTSxRQUFSLENBQWlCTCxJQUFqQixLQUEwQixTQUF4RixDQUxEO0FBS21HLFdBUGpHO0FBQUE7QUFBQSx1Q0FRSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsMkJBQU0sa0JBQUksdUNBQUosQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVJJLEVBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZWUsU0FBVUgsK0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCwyQkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBQT1NUX0FDVElWSVRZX1BFTkRJTkcgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgeyBTRVRfU0VORF9CT1ggfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRCb3gnO1xuaW1wb3J0IHN0b3BTcGVha2luZ0FjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvc3RvcFNwZWFraW5nQWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBzdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXQoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShcbiAgICAoeyBtZXRhLCBwYXlsb2FkLCB0eXBlIH0pID0+XG4gICAgICAodHlwZSA9PT0gU0VUX1NFTkRfQk9YICYmIHBheWxvYWQudGV4dCkgfHxcbiAgICAgIC8vIFdlIHdhbnQgdG8gc3RvcCBzcGVha2luZyBhY3Rpdml0eSB3aGVuIHRoZSB1c2VyIGNsaWNrIG9uIGEgY2FyZCBhY3Rpb25cbiAgICAgIC8vIEJ1dCBjdXJyZW50bHkgdGhlcmUgYXJlIG5vIGFjdGlvbnMgZ2VuZXJhdGVkIG91dCBvZiBhIGNhcmQgYWN0aW9uXG4gICAgICAvLyBTbywgcmlnaHQgbm93LCB3ZSBhcmUgdXNpbmcgYmVzdC1lZmZvcnQgYnkgbGlzdGVuaW5nIHRvIFBPU1RfQUNUSVZJVFlfUEVORElORyB3aXRoIGEgXCJtZXNzYWdlXCIgZXZlbnRcbiAgICAgIC8vIFdlIGZpbHRlciBvdXQgc3BlZWNoIGJlY2F1c2Ugd2Ugd2lsbCBjYWxsIHN0YXJ0U3BlYWtpbmdBY3Rpdml0eSgpIGZvciBQT1NUX0FDVElWSVRZX1BFTkRJTkcgZGlzcGF0Y2hlZCBieSBzcGVlY2hcbiAgICAgICh0eXBlID09PSBQT1NUX0FDVElWSVRZX1BFTkRJTkcgJiYgbWV0YS5tZXRob2QgIT09ICdzcGVlY2gnICYmIHBheWxvYWQuYWN0aXZpdHkudHlwZSA9PT0gJ21lc3NhZ2UnKSxcbiAgICBmdW5jdGlvbiooKSB7XG4gICAgICB5aWVsZCBwdXQoc3RvcFNwZWFraW5nQWN0aXZpdHkoKSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0KTtcbn1cbiJdfQ==
