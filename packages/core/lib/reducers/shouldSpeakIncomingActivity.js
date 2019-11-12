'use strict';

var cov_1pxnvu21yf = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/shouldSpeakIncomingActivity.js';
  var hash = 'ff12db29405a6789509af6d1ed7d226706378e8b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/shouldSpeakIncomingActivity.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      '1': {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 19
        }
      },
      '2': {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 12
        }
      },
      '3': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 20
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
          column: 6
        },
        end: {
          line: 15,
          column: 12
        }
      },
      '6': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 49
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 37
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 4,
              column: 32
            },
            end: {
              line: 4,
              column: 37
            }
          }
        ],
        line: 4
      },
      '1': {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        type: 'switch',
        locations: [
          {
            start: {
              line: 6,
              column: 4
            },
            end: {
              line: 8,
              column: 12
            }
          },
          {
            start: {
              line: 10,
              column: 4
            },
            end: {
              line: 12,
              column: 12
            }
          },
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 15,
              column: 12
            }
          }
        ],
        line: 5
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'ff12db29405a6789509af6d1ed7d226706378e8b'
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
exports['default'] = _default;

var _startSpeakingActivity = require('../../lib/actions/startSpeakingActivity');

var _stopSpeakingActivity = require('../../lib/actions/stopSpeakingActivity');

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1pxnvu21yf.b[0][0]++, false);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type;

  cov_1pxnvu21yf.f[0]++;
  cov_1pxnvu21yf.s[0]++;

  switch (type) {
    case _startSpeakingActivity.START_SPEAKING_ACTIVITY:
      cov_1pxnvu21yf.b[1][0]++;
      cov_1pxnvu21yf.s[1]++;
      state = true;
      cov_1pxnvu21yf.s[2]++;
      break;

    case _stopSpeakingActivity.STOP_SPEAKING_ACTIVITY:
      cov_1pxnvu21yf.b[1][1]++;
      cov_1pxnvu21yf.s[3]++;
      state = false;
      cov_1pxnvu21yf.s[4]++;
      break;

    default:
      cov_1pxnvu21yf.b[1][2]++;
      cov_1pxnvu21yf.s[5]++;
      break;
  }

  cov_1pxnvu21yf.s[6]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zaG91bGRTcGVha0luY29taW5nQWN0aXZpdHkuanMiXSwibmFtZXMiOlsic3RhdGUiLCJ0eXBlIiwiU1RBUlRfU1BFQUtJTkdfQUNUSVZJVFkiLCJTVE9QX1NQRUFLSU5HX0FDVElWSVRZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRWUsb0JBQWtDO0FBQUEsTUFBekJBLEtBQXlCLGtHQUFqQixLQUFpQjs7QUFBQTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQTtBQUFBOztBQUMvQyxVQUFRQSxJQUFSO0FBQ0UsU0FBS0MsOENBQUw7QUFBQTtBQUFBO0FBQ0VGLE1BQUFBLEtBQUssR0FBRyxJQUFSO0FBREY7QUFFRTs7QUFFRixTQUFLRyw0Q0FBTDtBQUFBO0FBQUE7QUFDRUgsTUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFERjtBQUVFOztBQUVGO0FBQUE7QUFBQTtBQUNFO0FBVko7O0FBRCtDO0FBYy9DLFNBQU9BLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNUQVJUX1NQRUFLSU5HX0FDVElWSVRZIH0gZnJvbSAnLi4vLi4vbGliL2FjdGlvbnMvc3RhcnRTcGVha2luZ0FjdGl2aXR5JztcbmltcG9ydCB7IFNUT1BfU1BFQUtJTkdfQUNUSVZJVFkgfSBmcm9tICcuLi8uLi9saWIvYWN0aW9ucy9zdG9wU3BlYWtpbmdBY3Rpdml0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gZmFsc2UsIHsgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU1RBUlRfU1BFQUtJTkdfQUNUSVZJVFk6XG4gICAgICBzdGF0ZSA9IHRydWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU1RPUF9TUEVBS0lOR19BQ1RJVklUWTpcbiAgICAgIHN0YXRlID0gZmFsc2U7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
