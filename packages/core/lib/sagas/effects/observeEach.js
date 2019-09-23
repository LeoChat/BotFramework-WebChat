'use strict';

var cov_2yxiz814t = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/effects/observeEach.js';
  var hash = '1906a17742bcf382a072a0088a287a53264b7088';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/effects/observeEach.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 19,
          column: 5
        }
      },
      '1': {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 7,
          column: 38
        }
      },
      '2': {
        start: {
          line: 8,
          column: 25
        },
        end: {
          line: 8,
          column: 67
        }
      },
      '3': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      '4': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 15,
          column: 7
        }
      },
      '5': {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 12,
          column: 46
        }
      },
      '6': {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 33
        }
      },
      '7': {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 33
        }
      }
    },
    fnMap: {
      '0': {
        name: 'observeEachEffect',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 41
          }
        },
        loc: {
          start: {
            line: 5,
            column: 60
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: 'observeEach',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 35
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 6
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
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '1906a17742bcf382a072a0088a287a53264b7088'
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
exports['default'] = observeEachEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _createPromiseQueue = _interopRequireDefault(require('../../createPromiseQueue'));

function observeEachEffect(observable, saga) {
  cov_2yxiz814t.f[0]++;
  cov_2yxiz814t.s[0]++;
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function observeEach() {
      var queue, subscription, result;
      return _regenerator['default'].wrap(
        function observeEach$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                cov_2yxiz814t.f[1]++;
                queue = (cov_2yxiz814t.s[1]++, (0, _createPromiseQueue['default'])());
                subscription =
                  (cov_2yxiz814t.s[2]++,
                  observable.subscribe({
                    next: queue.push
                  }));
                cov_2yxiz814t.s[3]++;
                _context.prev = 4;
                cov_2yxiz814t.s[4]++;

              case 6:
                cov_2yxiz814t.s[5]++;
                _context.next = 9;
                return (0, _effects.call)(queue.shift);

              case 9:
                result = _context.sent;
                cov_2yxiz814t.s[6]++;
                _context.next = 13;
                return (0, _effects.call)(saga, result);

              case 13:
                _context.next = 6;
                break;

              case 15:
                _context.prev = 15;
                cov_2yxiz814t.s[7]++;
                subscription.unsubscribe();
                return _context.finish(15);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        },
        observeEach,
        null,
        [[4, , 15, 19]]
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL29ic2VydmVFYWNoLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVFYWNoRWZmZWN0Iiwib2JzZXJ2YWJsZSIsInNhZ2EiLCJvYnNlcnZlRWFjaCIsInF1ZXVlIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwibmV4dCIsInB1c2giLCJzaGlmdCIsInJlc3VsdCIsInVuc3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXVDQyxJQUF2QyxFQUE2QztBQUFBO0FBQUE7QUFDMUQsU0FBTztBQUFBO0FBQUEsK0JBQUssU0FBVUMsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKQyxZQUFBQSxLQURJLDBCQUNJLHFDQURKO0FBRUpDLFlBQUFBLFlBRkksMEJBRVdKLFVBQVUsQ0FBQ0ssU0FBWCxDQUFxQjtBQUFFQyxjQUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0k7QUFBZCxhQUFyQixDQUZYO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1TLG1CQUFNLG1CQUFLSixLQUFLLENBQUNLLEtBQVgsQ0FBTjs7QUFOVDtBQU1BQyxZQUFBQSxNQU5BO0FBQUE7QUFBQTtBQVFOLG1CQUFNLG1CQUFLUixJQUFMLEVBQVdRLE1BQVgsQ0FBTjs7QUFSTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1JMLFlBQUFBLFlBQVksQ0FBQ00sV0FBYjtBQVhROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVUixXQUFWO0FBQUEsR0FBTCxFQUFQO0FBY0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IGNyZWF0ZVByb21pc2VRdWV1ZSBmcm9tICcuLi8uLi9jcmVhdGVQcm9taXNlUXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYnNlcnZlRWFjaEVmZmVjdChvYnNlcnZhYmxlLCBzYWdhKSB7XG4gIHJldHVybiBjYWxsKGZ1bmN0aW9uKiBvYnNlcnZlRWFjaCgpIHtcbiAgICBjb25zdCBxdWV1ZSA9IGNyZWF0ZVByb21pc2VRdWV1ZSgpO1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHsgbmV4dDogcXVldWUucHVzaCB9KTtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocXVldWUuc2hpZnQpO1xuXG4gICAgICAgIHlpZWxkIGNhbGwoc2FnYSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
