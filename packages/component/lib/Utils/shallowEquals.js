'use strict';

var cov_encp2az97 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/shallowEquals.js';
  var hash = '309242799368b231e2593f22a8c87be2e02fbde8';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/shallowEquals.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 16
        }
      },
      '2': {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 6,
          column: 30
        }
      },
      '3': {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 30
        }
      },
      '4': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 103
        }
      },
      '5': {
        start: {
          line: 9,
          column: 61
        },
        end: {
          line: 9,
          column: 101
        }
      }
    },
    fnMap: {
      '0': {
        name: 'shallowEquals',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 37
          }
        },
        loc: {
          start: {
            line: 1,
            column: 44
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 9,
            column: 54
          },
          end: {
            line: 9,
            column: 55
          }
        },
        loc: {
          start: {
            line: 9,
            column: 61
          },
          end: {
            line: 9,
            column: 101
          }
        },
        line: 9
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 2,
              column: 2
            },
            end: {
              line: 4,
              column: 3
            }
          },
          {
            start: {
              line: 2,
              column: 2
            },
            end: {
              line: 4,
              column: 3
            }
          }
        ],
        line: 2
      },
      '1': {
        loc: {
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 102
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 9,
              column: 9
            },
            end: {
              line: 9,
              column: 38
            }
          },
          {
            start: {
              line: 9,
              column: 42
            },
            end: {
              line: 9,
              column: 102
            }
          }
        ],
        line: 9
      },
      '2': {
        loc: {
          start: {
            line: 9,
            column: 61
          },
          end: {
            line: 9,
            column: 101
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 9,
              column: 61
            },
            end: {
              line: 9,
              column: 80
            }
          },
          {
            start: {
              line: 9,
              column: 84
            },
            end: {
              line: 9,
              column: 101
            }
          }
        ],
        line: 9
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
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '309242799368b231e2593f22a8c87be2e02fbde8'
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
exports.default = shallowEquals;

function shallowEquals(x, y) {
  cov_encp2az97.f[0]++;
  cov_encp2az97.s[0]++;

  if (x === y) {
    cov_encp2az97.b[0][0]++;
    cov_encp2az97.s[1]++;
    return true;
  } else {
    cov_encp2az97.b[0][1]++;
  }

  var xKeys = (cov_encp2az97.s[2]++, Object.keys(x));
  var yKeys = (cov_encp2az97.s[3]++, Object.keys(y));
  cov_encp2az97.s[4]++;
  return (
    (cov_encp2az97.b[1][0]++, xKeys.length === yKeys.length) &&
    (cov_encp2az97.b[1][1]++,
    xKeys.every(function(key) {
      cov_encp2az97.f[1]++;
      cov_encp2az97.s[5]++;
      return (cov_encp2az97.b[2][0]++, yKeys.includes(key)) && (cov_encp2az97.b[2][1]++, x[key] === y[key]);
    }))
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9zaGFsbG93RXF1YWxzLmpzIl0sIm5hbWVzIjpbInNoYWxsb3dFcXVhbHMiLCJ4IiwieSIsInhLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInlLZXlzIiwibGVuZ3RoIiwiZXZlcnkiLCJrZXkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUFBO0FBQUE7O0FBQzFDLE1BQUlELENBQUMsS0FBS0MsQ0FBVixFQUFhO0FBQUE7QUFBQTtBQUNYLFdBQU8sSUFBUDtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQUlBLE1BQU1DLEtBQUssMEJBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixDQUFaLENBQUgsQ0FBWDtBQUNBLE1BQU1LLEtBQUssMEJBQUdGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxDQUFaLENBQUgsQ0FBWDtBQU4wQztBQVExQyxTQUFPLDBCQUFBQyxLQUFLLENBQUNJLE1BQU4sS0FBaUJELEtBQUssQ0FBQ0MsTUFBdkIsK0JBQWlDSixLQUFLLENBQUNLLEtBQU4sQ0FBWSxVQUFBQyxHQUFHLEVBQUk7QUFBQTtBQUFBO0FBQUEscUNBQUFILEtBQUssQ0FBQ0ksUUFBTixDQUFlRCxHQUFmLGdDQUF1QlIsQ0FBQyxDQUFDUSxHQUFELENBQUQsS0FBV1AsQ0FBQyxDQUFDTyxHQUFELENBQW5DO0FBQXdDLEdBQTNELENBQWpDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbHMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgeEtleXMgPSBPYmplY3Qua2V5cyh4KTtcbiAgY29uc3QgeUtleXMgPSBPYmplY3Qua2V5cyh5KTtcblxuICByZXR1cm4geEtleXMubGVuZ3RoID09PSB5S2V5cy5sZW5ndGggJiYgeEtleXMuZXZlcnkoa2V5ID0+IHlLZXlzLmluY2x1ZGVzKGtleSkgJiYgeFtrZXldID09PSB5W2tleV0pO1xufVxuIl19
