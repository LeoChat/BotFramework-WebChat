'use strict';

var cov_19rb88vhhu = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/createDeferred.js';
  var hash = 'fcfe6e5e05849afdc3a47bf5eed2ea7e1a08a12d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/createDeferred.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 8,
          column: 4
        }
      },
      '1': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 27
        }
      },
      '2': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 29
        }
      },
      '3': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      '4': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 88
        }
      },
      '5': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 38
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createDeferred',
        decl: {
          start: {
            line: 2,
            column: 24
          },
          end: {
            line: 2,
            column: 38
          }
        },
        loc: {
          start: {
            line: 2,
            column: 41
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 2
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 5,
            column: 31
          }
        },
        loc: {
          start: {
            line: 5,
            column: 65
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 10,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          },
          {
            start: {
              line: 10,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          }
        ],
        line: 10
      },
      '1': {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 25
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 10,
              column: 6
            },
            end: {
              line: 10,
              column: 13
            }
          },
          {
            start: {
              line: 10,
              column: 17
            },
            end: {
              line: 10,
              column: 25
            }
          }
        ],
        line: 10
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
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'fcfe6e5e05849afdc3a47bf5eed2ea7e1a08a12d'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createDeferred;

// TODO: [P3] Move to p-defer
function createDeferred() {
  cov_19rb88vhhu.f[0]++;
  var reject, resolve;
  var promise =
    (cov_19rb88vhhu.s[0]++,
    new Promise(function(promiseResolve, promiseReject) {
      cov_19rb88vhhu.f[1]++;
      cov_19rb88vhhu.s[1]++;
      reject = promiseReject;
      cov_19rb88vhhu.s[2]++;
      resolve = promiseResolve;
    }));
  cov_19rb88vhhu.s[3]++;

  if ((cov_19rb88vhhu.b[1][0]++, !reject) || (cov_19rb88vhhu.b[1][1]++, !resolve)) {
    cov_19rb88vhhu.b[0][0]++;
    cov_19rb88vhhu.s[4]++;
    throw new Error('Promise is not a ES-compliant and do not run exector immediately');
  } else {
    cov_19rb88vhhu.b[0][1]++;
  }

  cov_19rb88vhhu.s[5]++;
  return {
    promise: promise,
    reject: reject,
    resolve: resolve
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEZWZlcnJlZC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVEZWZlcnJlZCIsInJlamVjdCIsInJlc29sdmUiLCJwcm9taXNlIiwiUHJvbWlzZSIsInByb21pc2VSZXNvbHZlIiwicHJvbWlzZVJlamVjdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTtBQUN2QyxNQUFJQyxNQUFKLEVBQVlDLE9BQVo7QUFFQSxNQUFNQyxPQUFPLDJCQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxjQUFELEVBQWlCQyxhQUFqQixFQUFtQztBQUFBO0FBQUE7QUFDN0RMLElBQUFBLE1BQU0sR0FBR0ssYUFBVDtBQUQ2RDtBQUU3REosSUFBQUEsT0FBTyxHQUFHRyxjQUFWO0FBQ0QsR0FIZSxDQUFILENBQWI7QUFIdUM7O0FBUXZDLE1BQUksNEJBQUNKLE1BQUQsZ0NBQVcsQ0FBQ0MsT0FBWixDQUFKLEVBQXlCO0FBQUE7QUFBQTtBQUN2QixVQUFNLElBQUlLLEtBQUosQ0FBVSxrRUFBVixDQUFOO0FBQ0QsR0FGRDtBQUFBO0FBQUE7O0FBUnVDO0FBWXZDLFNBQU87QUFBRUosSUFBQUEsT0FBTyxFQUFQQSxPQUFGO0FBQVdGLElBQUFBLE1BQU0sRUFBTkEsTUFBWDtBQUFtQkMsSUFBQUEsT0FBTyxFQUFQQTtBQUFuQixHQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiBbUDNdIE1vdmUgdG8gcC1kZWZlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmZXJyZWQoKSB7XG4gIGxldCByZWplY3QsIHJlc29sdmU7XG5cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdCkgPT4ge1xuICAgIHJlamVjdCA9IHByb21pc2VSZWplY3Q7XG4gICAgcmVzb2x2ZSA9IHByb21pc2VSZXNvbHZlO1xuICB9KTtcblxuICBpZiAoIXJlamVjdCB8fCAhcmVzb2x2ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvbWlzZSBpcyBub3QgYSBFUy1jb21wbGlhbnQgYW5kIGRvIG5vdCBydW4gZXhlY3RvciBpbW1lZGlhdGVseScpO1xuICB9XG5cbiAgcmV0dXJuIHsgcHJvbWlzZSwgcmVqZWN0LCByZXNvbHZlIH07XG59XG4iXX0=
