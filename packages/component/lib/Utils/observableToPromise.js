'use strict';

var cov_1ns0gtktf2 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/observableToPromise.js';
  var hash = '5168dc1ff58b74afcbab160aa478691aff53c957';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/observableToPromise.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '1': {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 15,
          column: 5
        }
      },
      '2': {
        start: {
          line: 5,
          column: 8
        },
        end: {
          line: 5,
          column: 27
        }
      },
      '3': {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 56
        }
      },
      '4': {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 9,
          column: 51
        }
      },
      '5': {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 22
        }
      },
      '6': {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 56
        }
      },
      '7': {
        start: {
          line: 13,
          column: 25
        },
        end: {
          line: 13,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: 'observableToPromise',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 43
          }
        },
        loc: {
          start: {
            line: 1,
            column: 56
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 2,
            column: 22
          }
        },
        loc: {
          start: {
            line: 2,
            column: 42
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 2
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 7
          }
        },
        loc: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 10,
            column: 7
          }
        },
        line: 4
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 9,
            column: 19
          },
          end: {
            line: 9,
            column: 20
          }
        },
        loc: {
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 9,
            column: 51
          }
        },
        line: 9
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        },
        loc: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 14,
            column: 7
          }
        },
        line: 11
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 13,
            column: 19
          },
          end: {
            line: 13,
            column: 20
          }
        },
        loc: {
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 13,
            column: 51
          }
        },
        line: 13
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
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '5168dc1ff58b74afcbab160aa478691aff53c957'
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
exports.default = observableToPromise;

function observableToPromise(observable) {
  cov_1ns0gtktf2.f[0]++;
  cov_1ns0gtktf2.s[0]++;
  return new Promise(function(resolve, reject) {
    cov_1ns0gtktf2.f[1]++;
    var subscription =
      (cov_1ns0gtktf2.s[1]++,
      observable.subscribe(
        function(sessionId) {
          cov_1ns0gtktf2.f[2]++;
          cov_1ns0gtktf2.s[2]++;
          resolve(sessionId); // HACK: Sometimes, the call complete asynchronously and we cannot unsubscribe
          //       Need to wait some short time here to make sure the subscription variable has setup

          cov_1ns0gtktf2.s[3]++;
          setTimeout(function() {
            cov_1ns0gtktf2.f[3]++;
            cov_1ns0gtktf2.s[4]++;
            return subscription.unsubscribe();
          }, 0);
        },
        function(error) {
          cov_1ns0gtktf2.f[4]++;
          cov_1ns0gtktf2.s[5]++;
          reject(error);
          cov_1ns0gtktf2.s[6]++;
          setTimeout(function() {
            cov_1ns0gtktf2.f[5]++;
            cov_1ns0gtktf2.s[7]++;
            return subscription.unsubscribe();
          }, 0);
        }
      ));
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9vYnNlcnZhYmxlVG9Qcm9taXNlLmpzIl0sIm5hbWVzIjpbIm9ic2VydmFibGVUb1Byb21pc2UiLCJvYnNlcnZhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJzZXNzaW9uSWQiLCJzZXRUaW1lb3V0IiwidW5zdWJzY3JpYmUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLG1CQUFULENBQTZCQyxVQUE3QixFQUF5QztBQUFBO0FBQUE7QUFDdEQsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQUE7QUFDdEMsUUFBTUMsWUFBWSwyQkFBR0osVUFBVSxDQUFDSyxTQUFYLENBQ25CLFVBQUFDLFNBQVMsRUFBSTtBQUFBO0FBQUE7QUFDWEosTUFBQUEsT0FBTyxDQUFDSSxTQUFELENBQVAsQ0FEVyxDQUdYO0FBQ0E7O0FBSlc7QUFLWEMsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFBQTtBQUFBO0FBQUEsZUFBQUgsWUFBWSxDQUFDSSxXQUFiO0FBQTBCLE9BQWpDLEVBQW1DLENBQW5DLENBQVY7QUFDRCxLQVBrQixFQVFuQixVQUFBQyxLQUFLLEVBQUk7QUFBQTtBQUFBO0FBQ1BOLE1BQUFBLE1BQU0sQ0FBQ00sS0FBRCxDQUFOO0FBRE87QUFFUEYsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFBQTtBQUFBO0FBQUEsZUFBQUgsWUFBWSxDQUFDSSxXQUFiO0FBQTBCLE9BQWpDLEVBQW1DLENBQW5DLENBQVY7QUFDRCxLQVhrQixDQUFILENBQWxCO0FBYUQsR0FkTSxDQUFQO0FBZUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYnNlcnZhYmxlVG9Qcm9taXNlKG9ic2VydmFibGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZShcbiAgICAgIHNlc3Npb25JZCA9PiB7XG4gICAgICAgIHJlc29sdmUoc2Vzc2lvbklkKTtcblxuICAgICAgICAvLyBIQUNLOiBTb21ldGltZXMsIHRoZSBjYWxsIGNvbXBsZXRlIGFzeW5jaHJvbm91c2x5IGFuZCB3ZSBjYW5ub3QgdW5zdWJzY3JpYmVcbiAgICAgICAgLy8gICAgICAgTmVlZCB0byB3YWl0IHNvbWUgc2hvcnQgdGltZSBoZXJlIHRvIG1ha2Ugc3VyZSB0aGUgc3Vic2NyaXB0aW9uIHZhcmlhYmxlIGhhcyBzZXR1cFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpLCAwKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCksIDApO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufVxuIl19
