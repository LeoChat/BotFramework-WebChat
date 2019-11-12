'use strict';

var cov_24yy4yrmhf = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/dictateInterims.js';
  var hash = '6f81d94d59a00959ee8058777d51bf07545e8376';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/dictateInterims.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 24
        }
      },
      '1': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      '2': {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 38
        }
      },
      '3': {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 12
        }
      },
      '4': {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 12
        }
      },
      '5': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'dictateInterims',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 39
          }
        },
        loc: {
          start: {
            line: 5,
            column: 82
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 5,
            column: 40
          },
          end: {
            line: 5,
            column: 61
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 48
            },
            end: {
              line: 5,
              column: 61
            }
          }
        ],
        line: 5
      },
      '1': {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: 'switch',
        locations: [
          {
            start: {
              line: 7,
              column: 4
            },
            end: {
              line: 9,
              column: 12
            }
          },
          {
            start: {
              line: 11,
              column: 4
            },
            end: {
              line: 12,
              column: 12
            }
          }
        ],
        line: 6
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
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '6f81d94d59a00959ee8058777d51bf07545e8376'
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
exports['default'] = dictateInterims;

var _setDictateInterims = require('../actions/setDictateInterims');

var DEFAULT_STATE = (cov_24yy4yrmhf.s[0]++, []);

function dictateInterims() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_24yy4yrmhf.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_24yy4yrmhf.f[0]++;
  cov_24yy4yrmhf.s[1]++;

  switch (type) {
    case _setDictateInterims.SET_DICTATE_INTERIMS:
      cov_24yy4yrmhf.b[1][0]++;
      cov_24yy4yrmhf.s[2]++;
      state = payload.dictateInterims;
      cov_24yy4yrmhf.s[3]++;
      break;

    default:
      cov_24yy4yrmhf.b[1][1]++;
      cov_24yy4yrmhf.s[4]++;
      break;
  }

  cov_24yy4yrmhf.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9kaWN0YXRlSW50ZXJpbXMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsImRpY3RhdGVJbnRlcmltcyIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfRElDVEFURV9JTlRFUklNUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLDJCQUFHLEVBQUgsQ0FBbkI7O0FBRWUsU0FBU0MsZUFBVCxHQUFtRTtBQUFBLE1BQTFDQyxLQUEwQyxrR0FBbENGLGFBQWtDOztBQUFBO0FBQUEsTUFBakJHLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQTtBQUFBOztBQUNoRixVQUFRQSxJQUFSO0FBQ0UsU0FBS0Msd0NBQUw7QUFBQTtBQUFBO0FBQ0VILE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDRixlQUFoQjtBQURGO0FBRUU7O0FBRUY7QUFBQTtBQUFBO0FBQ0U7QUFOSjs7QUFEZ0Y7QUFVaEYsU0FBT0MsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX0RJQ1RBVEVfSU5URVJJTVMgfSBmcm9tICcuLi9hY3Rpb25zL3NldERpY3RhdGVJbnRlcmltcyc7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGljdGF0ZUludGVyaW1zKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfRElDVEFURV9JTlRFUklNUzpcbiAgICAgIHN0YXRlID0gcGF5bG9hZC5kaWN0YXRlSW50ZXJpbXM7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
