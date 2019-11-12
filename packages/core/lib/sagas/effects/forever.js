'use strict';

var cov_1a3pcuj9ca = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/forever.js';
  var hash = '89a98cc042f0ce21bb99ae931fe784f5314a3642';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/forever.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 3,
          column: 45
        }
      },
      '1': {
        start: {
          line: 3,
          column: 43
        },
        end: {
          line: 3,
          column: 44
        }
      },
      '2': {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 41
        }
      },
      '3': {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 4,
          column: 41
        }
      },
      '4': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 26
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 3,
            column: 38
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 3,
            column: 44
          }
        },
        line: 3
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 4,
            column: 20
          }
        },
        loc: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 41
          }
        },
        line: 4
      },
      '2': {
        name: 'foreverEffect',
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 37
          }
        },
        loc: {
          start: {
            line: 7,
            column: 40
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '89a98cc042f0ce21bb99ae931fe784f5314a3642'
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
exports['default'] = foreverEffect;

var _effects = require('redux-saga/effects');

var promiseSingleton =
  (cov_1a3pcuj9ca.s[0]++,
  new Promise(function() {
    cov_1a3pcuj9ca.f[0]++;
    cov_1a3pcuj9ca.s[1]++;
    return 0;
  }));
cov_1a3pcuj9ca.s[2]++;

var getPromise = function getPromise() {
  cov_1a3pcuj9ca.f[1]++;
  cov_1a3pcuj9ca.s[3]++;
  return promiseSingleton;
}; // This function helps improve our coding pattern on redux-saga

function foreverEffect() {
  cov_1a3pcuj9ca.f[2]++;
  cov_1a3pcuj9ca.s[4]++;
  return (0, _effects.call)(getPromise);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2ZvcmV2ZXIuanMiXSwibmFtZXMiOlsicHJvbWlzZVNpbmdsZXRvbiIsIlByb21pc2UiLCJnZXRQcm9taXNlIiwiZm9yZXZlckVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGdCQUFnQiwyQkFBRyxJQUFJQyxPQUFKLENBQVksWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFDLENBQW5CLENBQUgsQ0FBdEI7OztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU1GO0FBQUFBO0FBQUFBO0FBQUFBLFNBQUFBLGdCQUFnQjtBQUFBLENBQXpDLEMsQ0FFQTs7O0FBQ2UsU0FBU0csYUFBVCxHQUF5QjtBQUFBO0FBQUE7QUFDdEMsU0FBTyxtQkFBS0QsVUFBTCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuY29uc3QgcHJvbWlzZVNpbmdsZXRvbiA9IG5ldyBQcm9taXNlKCgpID0+IDApO1xuY29uc3QgZ2V0UHJvbWlzZSA9ICgpID0+IHByb21pc2VTaW5nbGV0b247XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGVscHMgaW1wcm92ZSBvdXIgY29kaW5nIHBhdHRlcm4gb24gcmVkdXgtc2FnYVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9yZXZlckVmZmVjdCgpIHtcbiAgcmV0dXJuIGNhbGwoZ2V0UHJvbWlzZSk7XG59XG4iXX0=
