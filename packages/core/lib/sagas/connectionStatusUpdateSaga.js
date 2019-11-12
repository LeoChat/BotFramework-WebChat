'use strict';

var cov_uuzblnbba = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/connectionStatusUpdateSaga.js';
  var hash = '4c6fe967a9690ccadd6205c6f22ae48d7554b7b8';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/connectionStatusUpdateSaga.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 12,
          column: 5
        }
      },
      '1': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 56
        }
      },
      '2': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 68
        }
      },
      '3': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: 'observeConnectionStatus',
        decl: {
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 8,
            column: 33
          }
        },
        loc: {
          start: {
            line: 8,
            column: 50
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: 'updateConnectionStatus',
        decl: {
          start: {
            line: 9,
            column: 60
          },
          end: {
            line: 9,
            column: 82
          }
        },
        loc: {
          start: {
            line: 9,
            column: 101
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 9
      },
      '2': {
        name: 'connectionStatusUpdateSaga',
        decl: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 51
          }
        },
        loc: {
          start: {
            line: 15,
            column: 54
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '4c6fe967a9690ccadd6205c6f22ae48d7554b7b8'
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
exports['default'] = connectionStatusUpdateSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _connectionStatusUpdate = _interopRequireDefault(require('../actions/connectionStatusUpdate'));

var _observeEach = _interopRequireDefault(require('./effects/observeEach'));

var _setReferenceGrammarID = _interopRequireDefault(require('../actions/setReferenceGrammarID'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(observeConnectionStatus),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(connectionStatusUpdateSaga);

function observeConnectionStatus(_ref) {
  var directLine;
  return _regenerator['default'].wrap(function observeConnectionStatus$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          directLine = _ref.directLine;
          cov_uuzblnbba.f[0]++;
          cov_uuzblnbba.s[0]++;
          _context2.next = 5;
          return (0, _observeEach['default'])(
            directLine.connectionStatus$,
            /*#__PURE__*/
            _regenerator['default'].mark(function updateConnectionStatus(connectionStatus) {
              return _regenerator['default'].wrap(function updateConnectionStatus$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      cov_uuzblnbba.f[1]++;
                      cov_uuzblnbba.s[1]++;
                      _context.next = 4;
                      return (0, _effects.put)((0, _connectionStatusUpdate['default'])(connectionStatus));

                    case 4:
                      cov_uuzblnbba.s[2]++;
                      _context.next = 7;
                      return (0, _effects.put)((0, _setReferenceGrammarID['default'])(directLine.referenceGrammarId));

                    case 7:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, updateConnectionStatus);
            })
          );

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function connectionStatusUpdateSaga() {
  return _regenerator['default'].wrap(function connectionStatusUpdateSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_uuzblnbba.f[2]++;
          cov_uuzblnbba.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(observeConnectionStatus);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlU2FnYS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhIiwiZGlyZWN0TGluZSIsImNvbm5lY3Rpb25TdGF0dXMkIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3Rpb25TdGF0dXMiLCJyZWZlcmVuY2VHcmFtbWFySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7OzZCQUVVQSx1Qjs7OzZCQU9lQywwQjs7QUFQekIsU0FBVUQsdUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DRSxVQUFBQSxVQUFwQyxRQUFvQ0EsVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSw2QkFBWUEsVUFBVSxDQUFDQyxpQkFBdkI7QUFBQTtBQUFBLHVDQUEwQyxTQUFVQyxzQkFBVixDQUFpQ0MsZ0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUMsMkJBQU0sa0JBQUksd0NBQXVCQSxnQkFBdkIsQ0FBSixDQUFOOztBQUQ4QztBQUFBO0FBQUE7QUFFOUMsMkJBQU0sa0JBQUksdUNBQXNCSCxVQUFVLENBQUNJLGtCQUFqQyxDQUFKLENBQU47O0FBRjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVRixzQkFBVjtBQUFBLFdBQTFDLEVBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2UsU0FBVUgsMEJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCx1QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IGNvbm5lY3Rpb25TdGF0dXNVcGRhdGUgZnJvbSAnLi4vYWN0aW9ucy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlJztcbmltcG9ydCBvYnNlcnZlRWFjaCBmcm9tICcuL2VmZmVjdHMvb2JzZXJ2ZUVhY2gnO1xuaW1wb3J0IHNldFJlZmVyZW5jZUdyYW1tYXJJRCBmcm9tICcuLi9hY3Rpb25zL3NldFJlZmVyZW5jZUdyYW1tYXJJRCc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIG9ic2VydmVDb25uZWN0aW9uU3RhdHVzKHsgZGlyZWN0TGluZSB9KSB7XG4gIHlpZWxkIG9ic2VydmVFYWNoKGRpcmVjdExpbmUuY29ubmVjdGlvblN0YXR1cyQsIGZ1bmN0aW9uKiB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKGNvbm5lY3Rpb25TdGF0dXMpIHtcbiAgICB5aWVsZCBwdXQoY29ubmVjdGlvblN0YXR1c1VwZGF0ZShjb25uZWN0aW9uU3RhdHVzKSk7XG4gICAgeWllbGQgcHV0KHNldFJlZmVyZW5jZUdyYW1tYXJJRChkaXJlY3RMaW5lLnJlZmVyZW5jZUdyYW1tYXJJZCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChvYnNlcnZlQ29ubmVjdGlvblN0YXR1cyk7XG59XG4iXX0=
