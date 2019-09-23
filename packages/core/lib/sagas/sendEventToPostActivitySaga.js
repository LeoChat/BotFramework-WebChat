'use strict';

var cov_7qerkx5nk = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/sendEventToPostActivitySaga.js';
  var hash = 'e39f7fe10218e400916df7d4720392d3449b62e6';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/sendEventToPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      '1': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 101
        }
      },
      '2': {
        start: {
          line: 18,
          column: 41
        },
        end: {
          line: 18,
          column: 76
        }
      },
      '3': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: 'postActivityWithEvent',
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 31
          }
        },
        loc: {
          start: {
            line: 7,
            column: 62
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: 'sendEventToPostActivity',
        decl: {
          start: {
            line: 17,
            column: 10
          },
          end: {
            line: 17,
            column: 33
          }
        },
        loc: {
          start: {
            line: 17,
            column: 36
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 19
          }
        },
        loc: {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 18,
            column: 76
          }
        },
        line: 18
      },
      '3': {
        name: 'sendEventToPostActivitySaga',
        decl: {
          start: {
            line: 21,
            column: 25
          },
          end: {
            line: 21,
            column: 52
          }
        },
        loc: {
          start: {
            line: 21,
            column: 55
          },
          end: {
            line: 23,
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
            line: 18,
            column: 41
          },
          end: {
            line: 18,
            column: 76
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 18,
              column: 41
            },
            end: {
              line: 18,
              column: 60
            }
          },
          {
            start: {
              line: 18,
              column: 64
            },
            end: {
              line: 18,
              column: 76
            }
          }
        ],
        line: 18
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
    hash: 'e39f7fe10218e400916df7d4720392d3449b62e6'
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
exports['default'] = sendEventToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendEvent = require('../actions/sendEvent');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithEvent),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendEventToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendEventToPostActivitySaga);

function postActivityWithEvent(_ref) {
  var _ref$payload, name, value;

  return _regenerator['default'].wrap(function postActivityWithEvent$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_ref$payload = _ref.payload), (name = _ref$payload.name), (value = _ref$payload.value);
          cov_7qerkx5nk.f[0]++;
          cov_7qerkx5nk.s[0]++;
          _context.next = 5;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              name: name,
              type: 'event',
              value: value
            })
          );

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendEventToPostActivity() {
  return _regenerator['default'].wrap(function sendEventToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_7qerkx5nk.f[1]++;
          cov_7qerkx5nk.s[1]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(function(_ref2) {
            var payload = _ref2.payload,
              type = _ref2.type;
            cov_7qerkx5nk.f[2]++;
            cov_7qerkx5nk.s[2]++;
            return (cov_7qerkx5nk.b[0][0]++, type === _sendEvent.SEND_EVENT) && (cov_7qerkx5nk.b[0][1]++, payload.name);
          }, postActivityWithEvent);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendEventToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendEventToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_7qerkx5nk.f[3]++;
          cov_7qerkx5nk.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(sendEventToPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aEV2ZW50Iiwic2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHkiLCJzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJwYXlsb2FkIiwibmFtZSIsInZhbHVlIiwidHlwZSIsIlNFTkRfRVZFTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEscUI7Ozs2QkFVQUMsdUI7Ozs2QkFJZUMsMkI7O0FBZHpCLFNBQVVGLHFCQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBa0NHLE9BQWxDLEVBQTZDQyxJQUE3QyxnQkFBNkNBLElBQTdDLEVBQW1EQyxLQUFuRCxnQkFBbURBLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sa0JBQ0osOEJBQWE7QUFDWEQsWUFBQUEsSUFBSSxFQUFKQSxJQURXO0FBRVhFLFlBQUFBLElBQUksRUFBRSxPQUZLO0FBR1hELFlBQUFBLEtBQUssRUFBTEE7QUFIVyxXQUFiLENBREksQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQSxTQUFVSix1QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sd0JBQVUsaUJBQXVCO0FBQUEsZ0JBQXBCRSxPQUFvQixTQUFwQkEsT0FBb0I7QUFBQSxnQkFBWEcsSUFBVyxTQUFYQSxJQUFXO0FBQUE7QUFBQTtBQUFBLDZDQUFBQSxJQUFJLEtBQUtDLHFCQUFULCtCQUF1QkosT0FBTyxDQUFDQyxJQUEvQjtBQUFtQyxXQUFwRSxFQUFzRUoscUJBQXRFLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsMkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCx1QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRU5EX0VWRU5UIH0gZnJvbSAnLi4vYWN0aW9ucy9zZW5kRXZlbnQnO1xuaW1wb3J0IHBvc3RBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHBvc3RBY3Rpdml0eVdpdGhFdmVudCh7IHBheWxvYWQ6IHsgbmFtZSwgdmFsdWUgfSB9KSB7XG4gIHlpZWxkIHB1dChcbiAgICBwb3N0QWN0aXZpdHkoe1xuICAgICAgbmFtZSxcbiAgICAgIHR5cGU6ICdldmVudCcsXG4gICAgICB2YWx1ZVxuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gU0VORF9FVkVOVCAmJiBwYXlsb2FkLm5hbWUsIHBvc3RBY3Rpdml0eVdpdGhFdmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHNlbmRFdmVudFRvUG9zdEFjdGl2aXR5KTtcbn1cbiJdfQ==
