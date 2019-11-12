'use strict';

var cov_1x147gxkzg = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/forkPut.js';
  var hash = '28b4bbc8ed5033f78b1313e7832f5b66b84f13c5';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/forkPut.js',
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
    hash: '28b4bbc8ed5033f78b1313e7832f5b66b84f13c5'
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

  cov_1x147gxkzg.f[0]++;
  cov_1x147gxkzg.s[0]++;
  return (0, _effects.fork)(
    /*#__PURE__*/
    _regenerator['default'].mark(function forkPut() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, action;

      return _regenerator['default'].wrap(
        function forkPut$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                cov_1x147gxkzg.f[1]++;
                cov_1x147gxkzg.s[1]++;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = actions[Symbol.iterator]();

              case 7:
                if ((_iteratorNormalCompletion = (_step = _iterator.next()).done)) {
                  _context.next = 15;
                  break;
                }

                action = _step.value;
                cov_1x147gxkzg.s[2]++;
                _context.next = 12;
                return (0, _effects.put)(action);

              case 12:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 15:
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 21:
                _context.prev = 21;
                _context.prev = 22;

                if (!_iteratorNormalCompletion && _iterator['return'] != null) {
                  _iterator['return']();
                }

              case 24:
                _context.prev = 24;

                if (!_didIteratorError) {
                  _context.next = 27;
                  break;
                }

                throw _iteratorError;

              case 27:
                return _context.finish(24);

              case 28:
                return _context.finish(21);

              case 29:
              case 'end':
                return _context.stop();
            }
          }
        },
        forkPut,
        null,
        [[5, 17, 21, 29], [22, , 24, 28]]
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2ZvcmtQdXQuanMiXSwibmFtZXMiOlsiZm9ya1B1dEVmZmVjdCIsImFjdGlvbnMiLCJmb3JrUHV0IiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGFBQVQsR0FBbUM7QUFBQSxvQ0FBVEMsT0FBUztBQUFUQSxJQUFBQSxPQUFTO0FBQUE7O0FBQUE7QUFBQTtBQUNoRCxTQUFPO0FBQUE7QUFBQSwrQkFBSyxTQUFVQyxPQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDV0QsT0FEWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNDRSxZQUFBQSxNQUREO0FBQUE7QUFBQTtBQUVSLG1CQUFNLGtCQUFJQSxNQUFKLENBQU47O0FBRlE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVUQsT0FBVjtBQUFBLEdBQUwsRUFBUDtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yaywgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuLy8gSW4gcmVkdXgtc2FnYSwgaWYgd2UgY2FsbCB0aGUgZm9sbG93aW5nIGVmZmVjdHMgaW4gb3JkZXIsIHdlIG1pZ2h0IG1pc3MgdGhlIHRha2UoJ0MnKS5cbi8vIDEuIHRha2UoJ0EnKVxuLy8gMi4gcHV0KHsgdHlwZTogJ0InIH0pXG4vLyAzLiB0YWtlKCdDJylcblxuLy8gV2UgbmVlZCB0byBtb2RpZnkgc3RlcCAyIHRvOlxuLy8gMi4gZm9yayhmdW5jdGlvbiogKCkgeyB5aWVsZCBwdXQoeyB0eXBlOiAnQicgfSkgfSlcblxuLy8gVGhpcyBpcyBhIGhlbHBlciBmdW5jdGlvbiBmb3IgdGhpcyBwdXJwb3NlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JrUHV0RWZmZWN0KC4uLmFjdGlvbnMpIHtcbiAgcmV0dXJuIGZvcmsoZnVuY3Rpb24qIGZvcmtQdXQoKSB7XG4gICAgZm9yIChjb25zdCBhY3Rpb24gb2YgYWN0aW9ucykge1xuICAgICAgeWllbGQgcHV0KGFjdGlvbik7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
