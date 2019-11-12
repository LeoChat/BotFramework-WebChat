'use strict';

var cov_13486k4fgi = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas.js';
  var hash = 'be8ea1f1b8e3cae084aa627dac7cbeaa389e6abe';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 54
        }
      },
      '1': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 41
        }
      },
      '2': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 26
        }
      },
      '3': {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 39
        }
      },
      '4': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 52
        }
      },
      '5': {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 35
        }
      },
      '6': {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 53
        }
      },
      '7': {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 31
        }
      },
      '8': {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 42
        }
      },
      '9': {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 42
        }
      },
      '10': {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 48
        }
      },
      '11': {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 44
        }
      },
      '12': {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 45
        }
      },
      '13': {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 50
        }
      },
      '14': {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 75
        }
      },
      '15': {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 46
        }
      },
      '16': {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 43,
          column: 51
        }
      },
      '17': {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 42
        }
      },
      '18': {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 46
        }
      },
      '19': {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 32
        }
      }
    },
    fnMap: {
      '0': {
        name: 'sagas',
        decl: {
          start: {
            line: 24,
            column: 25
          },
          end: {
            line: 24,
            column: 30
          }
        },
        loc: {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'be8ea1f1b8e3cae084aa627dac7cbeaa389e6abe'
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
exports['default'] = sagas;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _clearSuggestedActionsOnPostActivitySaga = _interopRequireDefault(
  require('./sagas/clearSuggestedActionsOnPostActivitySaga')
);

var _connectionStatusUpdateSaga = _interopRequireDefault(require('./sagas/connectionStatusUpdateSaga'));

var _connectSaga = _interopRequireDefault(require('./sagas/connectSaga'));

var _detectSlowConnectionSaga = _interopRequireDefault(require('./sagas/detectSlowConnectionSaga'));

var _emitTypingIndicatorToPostActivitySaga = _interopRequireDefault(
  require('./sagas/emitTypingIndicatorToPostActivitySaga')
);

var _incomingActivitySaga = _interopRequireDefault(require('./sagas/incomingActivitySaga'));

var _markAllAsSpokenOnStopSpeakActivitySaga = _interopRequireDefault(
  require('./sagas/markAllAsSpokenOnStopSpeakActivitySaga')
);

var _postActivitySaga = _interopRequireDefault(require('./sagas/postActivitySaga'));

var _sendEventToPostActivitySaga = _interopRequireDefault(require('./sagas/sendEventToPostActivitySaga'));

var _sendFilesToPostActivitySaga = _interopRequireDefault(require('./sagas/sendFilesToPostActivitySaga'));

var _sendMessageBackToPostActivitySaga = _interopRequireDefault(require('./sagas/sendMessageBackToPostActivitySaga'));

var _sendMessageToPostActivitySaga = _interopRequireDefault(require('./sagas/sendMessageToPostActivitySaga'));

var _sendPostBackToPostActivitySaga = _interopRequireDefault(require('./sagas/sendPostBackToPostActivitySaga'));

var _sendTypingIndicatorOnSetSendBoxSaga = _interopRequireDefault(
  require('./sagas/sendTypingIndicatorOnSetSendBoxSaga')
);

var _speakActivityAndStartDictateOnIncomingActivityFromOthersSaga = _interopRequireDefault(
  require('./sagas/speakActivityAndStartDictateOnIncomingActivityFromOthersSaga')
);

var _startDictateOnSpeakCompleteSaga = _interopRequireDefault(require('./sagas/startDictateOnSpeakCompleteSaga'));

var _startSpeakActivityOnPostActivitySaga = _interopRequireDefault(
  require('./sagas/startSpeakActivityOnPostActivitySaga')
);

var _stopDictateOnCardActionSaga = _interopRequireDefault(require('./sagas/stopDictateOnCardActionSaga'));

var _stopSpeakingActivityOnInputSaga = _interopRequireDefault(require('./sagas/stopSpeakingActivityOnInputSaga'));

var _submitSendBoxSaga = _interopRequireDefault(require('./sagas/submitSendBoxSaga'));

var _marked =
  /*#__PURE__*/
  _regenerator['default'].mark(sagas);

function sagas() {
  return _regenerator['default'].wrap(function sagas$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          cov_13486k4fgi.f[0]++;
          cov_13486k4fgi.s[0]++;
          _context.next = 4;
          return (0, _effects.fork)(_clearSuggestedActionsOnPostActivitySaga['default']);

        case 4:
          cov_13486k4fgi.s[1]++;
          _context.next = 7;
          return (0, _effects.fork)(_connectionStatusUpdateSaga['default']);

        case 7:
          cov_13486k4fgi.s[2]++;
          _context.next = 10;
          return (0, _effects.fork)(_connectSaga['default']);

        case 10:
          cov_13486k4fgi.s[3]++;
          _context.next = 13;
          return (0, _effects.fork)(_detectSlowConnectionSaga['default']);

        case 13:
          cov_13486k4fgi.s[4]++;
          _context.next = 16;
          return (0, _effects.fork)(_emitTypingIndicatorToPostActivitySaga['default']);

        case 16:
          cov_13486k4fgi.s[5]++;
          _context.next = 19;
          return (0, _effects.fork)(_incomingActivitySaga['default']);

        case 19:
          cov_13486k4fgi.s[6]++;
          _context.next = 22;
          return (0, _effects.fork)(_markAllAsSpokenOnStopSpeakActivitySaga['default']);

        case 22:
          cov_13486k4fgi.s[7]++;
          _context.next = 25;
          return (0, _effects.fork)(_postActivitySaga['default']);

        case 25:
          cov_13486k4fgi.s[8]++;
          _context.next = 28;
          return (0, _effects.fork)(_sendEventToPostActivitySaga['default']);

        case 28:
          cov_13486k4fgi.s[9]++;
          _context.next = 31;
          return (0, _effects.fork)(_sendFilesToPostActivitySaga['default']);

        case 31:
          cov_13486k4fgi.s[10]++;
          _context.next = 34;
          return (0, _effects.fork)(_sendMessageBackToPostActivitySaga['default']);

        case 34:
          cov_13486k4fgi.s[11]++;
          _context.next = 37;
          return (0, _effects.fork)(_sendMessageToPostActivitySaga['default']);

        case 37:
          cov_13486k4fgi.s[12]++;
          _context.next = 40;
          return (0, _effects.fork)(_sendPostBackToPostActivitySaga['default']);

        case 40:
          cov_13486k4fgi.s[13]++;
          _context.next = 43;
          return (0, _effects.fork)(_sendTypingIndicatorOnSetSendBoxSaga['default']);

        case 43:
          cov_13486k4fgi.s[14]++;
          _context.next = 46;
          return (0, _effects.fork)(_speakActivityAndStartDictateOnIncomingActivityFromOthersSaga['default']);

        case 46:
          cov_13486k4fgi.s[15]++;
          _context.next = 49;
          return (0, _effects.fork)(_startDictateOnSpeakCompleteSaga['default']);

        case 49:
          cov_13486k4fgi.s[16]++;
          _context.next = 52;
          return (0, _effects.fork)(_startSpeakActivityOnPostActivitySaga['default']);

        case 52:
          cov_13486k4fgi.s[17]++;
          _context.next = 55;
          return (0, _effects.fork)(_stopDictateOnCardActionSaga['default']);

        case 55:
          cov_13486k4fgi.s[18]++;
          _context.next = 58;
          return (0, _effects.fork)(_stopSpeakingActivityOnInputSaga['default']);

        case 58:
          cov_13486k4fgi.s[19]++;
          _context.next = 61;
          return (0, _effects.fork)(_submitSendBoxSaga['default']);

        case 61:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYWdhcy5qcyJdLCJuYW1lcyI6WyJzYWdhcyIsImNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSIsImNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhIiwiY29ubmVjdFNhZ2EiLCJkZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EiLCJlbWl0VHlwaW5nSW5kaWNhdG9yVG9Qb3N0QWN0aXZpdHlTYWdhIiwiaW5jb21pbmdBY3Rpdml0eVNhZ2EiLCJtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSIsInBvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRUeXBpbmdJbmRpY2F0b3JPblNldFNlbmRCb3hTYWdhIiwic3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnNTYWdhIiwic3RhcnREaWN0YXRlT25TcGVha0NvbXBsZXRlU2FnYSIsInN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5U2FnYSIsInN0b3BEaWN0YXRlT25DYXJkQWN0aW9uU2FnYSIsInN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EiLCJzdWJtaXRTZW5kQm94U2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRXlCQSxLOztBQUFWLFNBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdiLGlCQUFNLG1CQUFLQyxtREFBTCxDQUFOOztBQUhhO0FBQUE7QUFBQTtBQUliLGlCQUFNLG1CQUFLQyxzQ0FBTCxDQUFOOztBQUphO0FBQUE7QUFBQTtBQUtiLGlCQUFNLG1CQUFLQyx1QkFBTCxDQUFOOztBQUxhO0FBQUE7QUFBQTtBQU1iLGlCQUFNLG1CQUFLQyxvQ0FBTCxDQUFOOztBQU5hO0FBQUE7QUFBQTtBQU9iLGlCQUFNLG1CQUFLQyxpREFBTCxDQUFOOztBQVBhO0FBQUE7QUFBQTtBQVFiLGlCQUFNLG1CQUFLQyxnQ0FBTCxDQUFOOztBQVJhO0FBQUE7QUFBQTtBQVNiLGlCQUFNLG1CQUFLQyxrREFBTCxDQUFOOztBQVRhO0FBQUE7QUFBQTtBQVViLGlCQUFNLG1CQUFLQyw0QkFBTCxDQUFOOztBQVZhO0FBQUE7QUFBQTtBQVdiLGlCQUFNLG1CQUFLQyx1Q0FBTCxDQUFOOztBQVhhO0FBQUE7QUFBQTtBQVliLGlCQUFNLG1CQUFLQyx1Q0FBTCxDQUFOOztBQVphO0FBQUE7QUFBQTtBQWFiLGlCQUFNLG1CQUFLQyw2Q0FBTCxDQUFOOztBQWJhO0FBQUE7QUFBQTtBQWNiLGlCQUFNLG1CQUFLQyx5Q0FBTCxDQUFOOztBQWRhO0FBQUE7QUFBQTtBQWViLGlCQUFNLG1CQUFLQywwQ0FBTCxDQUFOOztBQWZhO0FBQUE7QUFBQTtBQWdCYixpQkFBTSxtQkFBS0MsK0NBQUwsQ0FBTjs7QUFoQmE7QUFBQTtBQUFBO0FBaUJiLGlCQUFNLG1CQUFLQyx3RUFBTCxDQUFOOztBQWpCYTtBQUFBO0FBQUE7QUFrQmIsaUJBQU0sbUJBQUtDLDJDQUFMLENBQU47O0FBbEJhO0FBQUE7QUFBQTtBQW1CYixpQkFBTSxtQkFBS0MsZ0RBQUwsQ0FBTjs7QUFuQmE7QUFBQTtBQUFBO0FBb0JiLGlCQUFNLG1CQUFLQyx1Q0FBTCxDQUFOOztBQXBCYTtBQUFBO0FBQUE7QUFxQmIsaUJBQU0sbUJBQUtDLDJDQUFMLENBQU47O0FBckJhO0FBQUE7QUFBQTtBQXNCYixpQkFBTSxtQkFBS0MsNkJBQUwsQ0FBTjs7QUF0QmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IGNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL2NsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgY29ubmVjdGlvblN0YXR1c1VwZGF0ZVNhZ2EgZnJvbSAnLi9zYWdhcy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlU2FnYSc7XG5pbXBvcnQgY29ubmVjdFNhZ2EgZnJvbSAnLi9zYWdhcy9jb25uZWN0U2FnYSc7XG5pbXBvcnQgZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhIGZyb20gJy4vc2FnYXMvZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhJztcbmltcG9ydCBlbWl0VHlwaW5nSW5kaWNhdG9yVG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvZW1pdFR5cGluZ0luZGljYXRvclRvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgaW5jb21pbmdBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9pbmNvbWluZ0FjdGl2aXR5U2FnYSc7XG5pbXBvcnQgbWFya0FsbEFzU3Bva2VuT25TdG9wU3BlYWtBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9tYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSc7XG5pbXBvcnQgcG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL3Bvc3RBY3Rpdml0eVNhZ2EnO1xuaW1wb3J0IHNlbmRFdmVudFRvUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL3NlbmRFdmVudFRvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9zZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EnO1xuaW1wb3J0IHNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc2VuZE1lc3NhZ2VUb1Bvc3RBY3Rpdml0eVNhZ2EnO1xuaW1wb3J0IHNlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL3NlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveFNhZ2EgZnJvbSAnLi9zYWdhcy9zZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYSc7XG5pbXBvcnQgc3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnNTYWdhIGZyb20gJy4vc2FnYXMvc3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnNTYWdhJztcbmltcG9ydCBzdGFydERpY3RhdGVPblNwZWFrQ29tcGxldGVTYWdhIGZyb20gJy4vc2FnYXMvc3RhcnREaWN0YXRlT25TcGVha0NvbXBsZXRlU2FnYSc7XG5pbXBvcnQgc3RhcnRTcGVha0FjdGl2aXR5T25Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc3RhcnRTcGVha0FjdGl2aXR5T25Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EgZnJvbSAnLi9zYWdhcy9zdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EnO1xuaW1wb3J0IHN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EgZnJvbSAnLi9zYWdhcy9zdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXRTYWdhJztcbmltcG9ydCBzdWJtaXRTZW5kQm94U2FnYSBmcm9tICcuL3NhZ2FzL3N1Ym1pdFNlbmRCb3hTYWdhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNhZ2FzKCkge1xuICAvLyBUT0RPOiBbUDJdIFNpbmNlIGZvcmsoKSBzaWxlbnRseSBjYXRjaGVzIGFsbCBleGNlcHRpb25zLCB3ZSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gY29uc29sZS5lcnJvciB0aGVtIG91dC5cblxuICB5aWVsZCBmb3JrKGNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoY29ubmVjdGlvblN0YXR1c1VwZGF0ZVNhZ2EpO1xuICB5aWVsZCBmb3JrKGNvbm5lY3RTYWdhKTtcbiAgeWllbGQgZm9yayhkZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EpO1xuICB5aWVsZCBmb3JrKGVtaXRUeXBpbmdJbmRpY2F0b3JUb1Bvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKGluY29taW5nQWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsocG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHNlbmRNZXNzYWdlQmFja1RvUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc2VuZE1lc3NhZ2VUb1Bvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHNlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveFNhZ2EpO1xuICB5aWVsZCBmb3JrKHNwZWFrQWN0aXZpdHlBbmRTdGFydERpY3RhdGVPbkluY29taW5nQWN0aXZpdHlGcm9tT3RoZXJzU2FnYSk7XG4gIHlpZWxkIGZvcmsoc3RhcnREaWN0YXRlT25TcGVha0NvbXBsZXRlU2FnYSk7XG4gIHlpZWxkIGZvcmsoc3RhcnRTcGVha0FjdGl2aXR5T25Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EpO1xuICB5aWVsZCBmb3JrKHN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EpO1xuICB5aWVsZCBmb3JrKHN1Ym1pdFNlbmRCb3hTYWdhKTtcbn1cbiJdfQ==
