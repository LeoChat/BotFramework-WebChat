'use strict';

var cov_7dbm9umkc = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/readyState.js';
  var hash = '2fbffc4c677bf15eed84539fb924d4462d47d9bc';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/readyState.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 23
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
          column: 39
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
        name: 'readyState',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 34
          }
        },
        loc: {
          start: {
            line: 5,
            column: 77
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
            column: 35
          },
          end: {
            line: 5,
            column: 56
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 43
            },
            end: {
              line: 5,
              column: 56
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
    hash: '2fbffc4c677bf15eed84539fb924d4462d47d9bc'
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
exports['default'] = readyState;

var _connectionStatusUpdate = require('../actions/connectionStatusUpdate');

var DEFAULT_STATE = (cov_7dbm9umkc.s[0]++, 0);

function readyState() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_7dbm9umkc.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_7dbm9umkc.f[0]++;
  cov_7dbm9umkc.s[1]++;

  switch (type) {
    case _connectionStatusUpdate.CONNECTION_STATUS_UPDATE:
      cov_7dbm9umkc.b[1][0]++;
      cov_7dbm9umkc.s[2]++;
      state = payload.connectionStatus;
      cov_7dbm9umkc.s[3]++;
      break;

    default:
      cov_7dbm9umkc.b[1][1]++;
      cov_7dbm9umkc.s[4]++;
      break;
  }

  cov_7dbm9umkc.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yZWFkeVN0YXRlLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJyZWFkeVN0YXRlIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIkNPTk5FQ1RJT05fU1RBVFVTX1VQREFURSIsImNvbm5lY3Rpb25TdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSwwQkFBRyxDQUFILENBQW5COztBQUVlLFNBQVNDLFVBQVQsR0FBOEQ7QUFBQSxNQUExQ0MsS0FBMEMsaUdBQWxDRixhQUFrQzs7QUFBQTtBQUFBLE1BQWpCRyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUE7QUFBQTs7QUFDM0UsVUFBUUEsSUFBUjtBQUNFLFNBQUtDLGdEQUFMO0FBQUE7QUFBQTtBQUNFSCxNQUFBQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0csZ0JBQWhCO0FBREY7QUFFRTs7QUFFRjtBQUFBO0FBQUE7QUFDRTtBQU5KOztBQUQyRTtBQVUzRSxTQUFPSixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT05ORUNUSU9OX1NUQVRVU19VUERBVEUgfSBmcm9tICcuLi9hY3Rpb25zL2Nvbm5lY3Rpb25TdGF0dXNVcGRhdGUnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZHlTdGF0ZShzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQ09OTkVDVElPTl9TVEFUVVNfVVBEQVRFOlxuICAgICAgc3RhdGUgPSBwYXlsb2FkLmNvbm5lY3Rpb25TdGF0dXM7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
