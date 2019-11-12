'use strict';

var cov_2kx9r83n53 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/observeOnce.js';
  var hash = '70a77c90ad97a9152c935f451606c607c7c531f4';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/observeOnce.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 17,
          column: 5
        }
      },
      '1': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '2': {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 13,
          column: 8
        }
      },
      '3': {
        start: {
          line: 10,
          column: 10
        },
        end: {
          line: 12,
          column: 12
        }
      },
      '4': {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 74
        }
      },
      '5': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 49
        }
      }
    },
    fnMap: {
      '0': {
        name: 'observeOnceEffect',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 41
          }
        },
        loc: {
          start: {
            line: 3,
            column: 54
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: 'observeOnce',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 35
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 4
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 9,
            column: 8
          },
          end: {
            line: 9,
            column: 9
          }
        },
        loc: {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 12,
            column: 12
          }
        },
        line: 10
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 10,
            column: 22
          },
          end: {
            line: 10,
            column: 23
          }
        },
        loc: {
          start: {
            line: 10,
            column: 43
          },
          end: {
            line: 12,
            column: 11
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 15,
            column: 48
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 15,
              column: 6
            },
            end: {
              line: 15,
              column: 18
            }
          },
          {
            start: {
              line: 15,
              column: 22
            },
            end: {
              line: 15,
              column: 48
            }
          }
        ],
        line: 15
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
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '70a77c90ad97a9152c935f451606c607c7c531f4'
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
exports['default'] = observeOnceEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

function observeOnceEffect(observable) {
  cov_2kx9r83n53.f[0]++;
  cov_2kx9r83n53.s[0]++;
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function observeOnce() {
      var subscription;
      return _regenerator['default'].wrap(
        function observeOnce$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                cov_2kx9r83n53.f[1]++;
                cov_2kx9r83n53.s[1]++;
                _context.prev = 2;
                cov_2kx9r83n53.s[2]++;
                _context.next = 6;
                return (0, _effects.call)(function() {
                  cov_2kx9r83n53.f[2]++;
                  cov_2kx9r83n53.s[3]++;
                  return new Promise(function(resolve, reject) {
                    cov_2kx9r83n53.f[3]++;
                    cov_2kx9r83n53.s[4]++;
                    subscription = observable.subscribe(resolve, reject, resolve);
                  });
                });

              case 6:
                return _context.abrupt('return', _context.sent);

              case 7:
                _context.prev = 7;
                cov_2kx9r83n53.s[5]++;
                (cov_2kx9r83n53.b[0][0]++, subscription) && (cov_2kx9r83n53.b[0][1]++, subscription.unsubscribe());
                return _context.finish(7);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        },
        observeOnce,
        null,
        [[2, , 7, 11]]
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL29ic2VydmVPbmNlLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVPbmNlRWZmZWN0Iiwib2JzZXJ2YWJsZSIsIm9ic2VydmVPbmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUM7QUFBQTtBQUFBO0FBQ3BELFNBQU87QUFBQTtBQUFBLCtCQUFLLFNBQVVDLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlELG1CQUFNLG1CQUNYLFlBQ0U7QUFBQTtBQUFBO0FBQUEseUJBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFBQTtBQUFBO0FBQy9CQyxnQkFBQUEsWUFBWSxHQUFHTCxVQUFVLENBQUNNLFNBQVgsQ0FBcUJILE9BQXJCLEVBQThCQyxNQUE5QixFQUFzQ0QsT0FBdEMsQ0FBZjtBQUNELGVBRkQ7QUFFRSxhQUpPLENBQU47O0FBSkM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXUix1Q0FBQUUsWUFBWSxnQ0FBSUEsWUFBWSxDQUFDRSxXQUFiLEVBQUosQ0FBWjtBQVhROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVTixXQUFWO0FBQUEsR0FBTCxFQUFQO0FBY0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JzZXJ2ZU9uY2VFZmZlY3Qob2JzZXJ2YWJsZSkge1xuICByZXR1cm4gY2FsbChmdW5jdGlvbiogb2JzZXJ2ZU9uY2UoKSB7XG4gICAgbGV0IHN1YnNjcmlwdGlvbjtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4geWllbGQgY2FsbChcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QsIHJlc29sdmUpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
