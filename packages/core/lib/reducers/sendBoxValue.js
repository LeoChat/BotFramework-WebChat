'use strict';

var cov_1i04enkcqu = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/sendBoxValue.js';
  var hash = '25eb55be099fbd7d2fcd2da037b6d85c4d7ca247';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/sendBoxValue.js',
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
          column: 27
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
        name: 'sendBoxValue',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 36
          }
        },
        loc: {
          start: {
            line: 5,
            column: 79
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
            column: 37
          },
          end: {
            line: 5,
            column: 58
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 45
            },
            end: {
              line: 5,
              column: 58
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
    hash: '25eb55be099fbd7d2fcd2da037b6d85c4d7ca247'
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
exports['default'] = sendBoxValue;

var _setSendBox = require('../actions/setSendBox');

var DEFAULT_STATE = (cov_1i04enkcqu.s[0]++, '');

function sendBoxValue() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1i04enkcqu.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_1i04enkcqu.f[0]++;
  cov_1i04enkcqu.s[1]++;

  switch (type) {
    case _setSendBox.SET_SEND_BOX:
      cov_1i04enkcqu.b[1][0]++;
      cov_1i04enkcqu.s[2]++;
      state = payload.text;
      cov_1i04enkcqu.s[3]++;
      break;

    default:
      cov_1i04enkcqu.b[1][1]++;
      cov_1i04enkcqu.s[4]++;
      break;
  }

  cov_1i04enkcqu.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZW5kQm94VmFsdWUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsInNlbmRCb3hWYWx1ZSIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfU0VORF9CT1giLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsMkJBQUcsRUFBSCxDQUFuQjs7QUFFZSxTQUFTQyxZQUFULEdBQWdFO0FBQUEsTUFBMUNDLEtBQTBDLGtHQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBO0FBQUE7O0FBQzdFLFVBQVFBLElBQVI7QUFDRSxTQUFLQyx3QkFBTDtBQUFBO0FBQUE7QUFDRUgsTUFBQUEsS0FBSyxHQUFHQyxPQUFPLENBQUNHLElBQWhCO0FBREY7QUFFRTs7QUFFRjtBQUFBO0FBQUE7QUFDRTtBQU5KOztBQUQ2RTtBQVU3RSxTQUFPSixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfU0VORF9CT1ggfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRCb3gnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0gJyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRCb3hWYWx1ZShzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1NFTkRfQk9YOlxuICAgICAgc3RhdGUgPSBwYXlsb2FkLnRleHQ7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
