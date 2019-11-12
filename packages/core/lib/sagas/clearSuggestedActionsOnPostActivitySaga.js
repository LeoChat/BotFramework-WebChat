'use strict';

var cov_2roc1eqsda = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/clearSuggestedActionsOnPostActivitySaga.js';
  var hash = 'c7b8e2e206e8830e0982b292e8c7598b623f9639';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/clearSuggestedActionsOnPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 35
        }
      },
      '1': {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      '2': {
        start: {
          line: 13,
          column: 27
        },
        end: {
          line: 13,
          column: 96
        }
      },
      '3': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 60
        }
      }
    },
    fnMap: {
      '0': {
        name: 'clearSuggestedActions',
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
            column: 34
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: 'clearSuggestedActionsOnPostActivity',
        decl: {
          start: {
            line: 11,
            column: 10
          },
          end: {
            line: 11,
            column: 45
          }
        },
        loc: {
          start: {
            line: 11,
            column: 48
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 11
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 96
          }
        },
        line: 13
      },
      '3': {
        name: 'clearSuggestedActionsOnPostActivitySaga',
        decl: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 64
          }
        },
        loc: {
          start: {
            line: 18,
            column: 67
          },
          end: {
            line: 20,
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
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 13,
              column: 27
            },
            end: {
              line: 13,
              column: 57
            }
          },
          {
            start: {
              line: 13,
              column: 61
            },
            end: {
              line: 13,
              column: 96
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
    hash: 'c7b8e2e206e8830e0982b292e8c7598b623f9639'
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
exports['default'] = clearSuggestedActionsOnPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _setSuggestedActions = _interopRequireDefault(require('../actions/setSuggestedActions'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(clearSuggestedActions),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(clearSuggestedActionsOnPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(clearSuggestedActionsOnPostActivitySaga);

function clearSuggestedActions() {
  return _regenerator['default'].wrap(function clearSuggestedActions$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          cov_2roc1eqsda.f[0]++;
          cov_2roc1eqsda.s[0]++;
          _context.next = 4;
          return (0, _effects.put)((0, _setSuggestedActions['default'])());

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function clearSuggestedActionsOnPostActivity() {
  return _regenerator['default'].wrap(function clearSuggestedActionsOnPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_2roc1eqsda.f[1]++;
          cov_2roc1eqsda.s[1]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(function(_ref) {
            var payload = _ref.payload,
              type = _ref.type;
            cov_2roc1eqsda.f[2]++;
            cov_2roc1eqsda.s[2]++;
            return (
              (cov_2roc1eqsda.b[0][0]++, type === _postActivity.POST_ACTIVITY_PENDING) &&
              (cov_2roc1eqsda.b[0][1]++, payload.activity.type === 'message')
            );
          }, clearSuggestedActions);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function clearSuggestedActionsOnPostActivitySaga() {
  return _regenerator['default'].wrap(function clearSuggestedActionsOnPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_2roc1eqsda.f[3]++;
          cov_2roc1eqsda.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(clearSuggestedActionsOnPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jbGVhclN1Z2dlc3RlZEFjdGlvbnNPblBvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsiY2xlYXJTdWdnZXN0ZWRBY3Rpb25zIiwiY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHkiLCJjbGVhclN1Z2dlc3RlZEFjdGlvbnNPblBvc3RBY3Rpdml0eVNhZ2EiLCJwYXlsb2FkIiwidHlwZSIsIlBPU1RfQUNUSVZJVFlfUEVORElORyIsImFjdGl2aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLHFCOzs7NkJBSUFDLG1DOzs7NkJBT2VDLHVDOztBQVh6QixTQUFVRixxQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sa0JBQUksc0NBQUosQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVQyxtQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sd0JBQ0osZ0JBQXVCO0FBQUEsZ0JBQXBCRSxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxnQkFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUE7QUFBQTtBQUFBLDhDQUFBQSxJQUFJLEtBQUtDLG1DQUFULGdDQUFrQ0YsT0FBTyxDQUFDRyxRQUFSLENBQWlCRixJQUFqQixLQUEwQixTQUE1RDtBQUFxRSxXQUR4RixFQUVKSixxQkFGSSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lLFNBQVVFLHVDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSxnQ0FBZUQsbUNBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgUE9TVF9BQ1RJVklUWV9QRU5ESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHNldFN1Z2dlc3RlZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zZXRTdWdnZXN0ZWRBY3Rpb25zJztcbmltcG9ydCB3aGlsZUNvbm5lY3RlZCBmcm9tICcuL2VmZmVjdHMvd2hpbGVDb25uZWN0ZWQnO1xuXG5mdW5jdGlvbiogY2xlYXJTdWdnZXN0ZWRBY3Rpb25zKCkge1xuICB5aWVsZCBwdXQoc2V0U3VnZ2VzdGVkQWN0aW9ucygpKTtcbn1cblxuZnVuY3Rpb24qIGNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoXG4gICAgKHsgcGF5bG9hZCwgdHlwZSB9KSA9PiB0eXBlID09PSBQT1NUX0FDVElWSVRZX1BFTkRJTkcgJiYgcGF5bG9hZC5hY3Rpdml0eS50eXBlID09PSAnbWVzc2FnZScsXG4gICAgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjbGVhclN1Z2dlc3RlZEFjdGlvbnNPblBvc3RBY3Rpdml0eVNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKGNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5KTtcbn1cbiJdfQ==
