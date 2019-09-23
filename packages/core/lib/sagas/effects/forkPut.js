'use strict';

var cov_1xv1a0v8bg = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/effects/forkPut.js';
  var hash = 'c74060c0765f9202eaf35e48ebe84dda94b7126c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/effects/forkPut.js',
    statementMap: {
      '0': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      '1': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      '2': {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 24
        }
      }
    },
    fnMap: {
      '0': {
        name: 'forkPutEffect',
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 37
          }
        },
        loc: {
          start: {
            line: 13,
            column: 50
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 13
      },
      '1': {
        name: 'forkPut',
        decl: {
          start: {
            line: 14,
            column: 24
          },
          end: {
            line: 14,
            column: 31
          }
        },
        loc: {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c74060c0765f9202eaf35e48ebe84dda94b7126c'
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
exports['default'] = forkPutEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

// In redux-saga, if we call the following effects in order, we might miss the take('C').
// 1. take('A')
// 2. put({ type: 'B' })
// 3. take('C')
// We need to modify step 2 to:
// 2. fork(function* () { yield put({ type: 'B' }) })
// This is a helper function for this purpose.
function forkPutEffect() {
  for (var _len = arguments.length, actions = new Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  cov_1xv1a0v8bg.f[0]++;
  cov_1xv1a0v8bg.s[0]++;
  return (0, _effects.fork)(
    /*#__PURE__*/
    _regenerator['default'].mark(function forkPut() {
      var _i, _actions, action;

      return _regenerator['default'].wrap(function forkPut$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              cov_1xv1a0v8bg.f[1]++;
              cov_1xv1a0v8bg.s[1]++;
              (_i = 0), (_actions = actions);

            case 3:
              if (!(_i < _actions.length)) {
                _context.next = 11;
                break;
              }

              action = _actions[_i];
              cov_1xv1a0v8bg.s[2]++;
              _context.next = 8;
              return (0, _effects.put)(action);

            case 8:
              _i++;
              _context.next = 3;
              break;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, forkPut);
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2ZvcmtQdXQuanMiXSwibmFtZXMiOlsiZm9ya1B1dEVmZmVjdCIsImFjdGlvbnMiLCJmb3JrUHV0IiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGFBQVQsR0FBbUM7QUFBQSxvQ0FBVEMsT0FBUztBQUFUQSxJQUFBQSxPQUFTO0FBQUE7O0FBQUE7QUFBQTtBQUNoRCxTQUFPO0FBQUE7QUFBQSwrQkFBSyxTQUFVQyxPQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ1dELE9BRFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQ0UsWUFBQUEsTUFERDtBQUFBO0FBQUE7QUFFUixtQkFBTSxrQkFBSUEsTUFBSixDQUFOOztBQUZRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVRCxPQUFWO0FBQUEsR0FBTCxFQUFQO0FBS0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JrLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG4vLyBJbiByZWR1eC1zYWdhLCBpZiB3ZSBjYWxsIHRoZSBmb2xsb3dpbmcgZWZmZWN0cyBpbiBvcmRlciwgd2UgbWlnaHQgbWlzcyB0aGUgdGFrZSgnQycpLlxuLy8gMS4gdGFrZSgnQScpXG4vLyAyLiBwdXQoeyB0eXBlOiAnQicgfSlcbi8vIDMuIHRha2UoJ0MnKVxuXG4vLyBXZSBuZWVkIHRvIG1vZGlmeSBzdGVwIDIgdG86XG4vLyAyLiBmb3JrKGZ1bmN0aW9uKiAoKSB7IHlpZWxkIHB1dCh7IHR5cGU6ICdCJyB9KSB9KVxuXG4vLyBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIGZvciB0aGlzIHB1cnBvc2UuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcmtQdXRFZmZlY3QoLi4uYWN0aW9ucykge1xuICByZXR1cm4gZm9yayhmdW5jdGlvbiogZm9ya1B1dCgpIHtcbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgICB5aWVsZCBwdXQoYWN0aW9uKTtcbiAgICB9XG4gIH0pO1xufVxuIl19
