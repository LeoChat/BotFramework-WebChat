'use strict';

var cov_mjkjspdwa = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/sendTimeout.js';
  var hash = '931cb3f0f247bf6937a8b8e3575513cba7987f82';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/sendTimeout.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 27
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
          column: 34
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
        name: 'sendTimeout',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 35
          }
        },
        loc: {
          start: {
            line: 5,
            column: 78
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
            column: 36
          },
          end: {
            line: 5,
            column: 57
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 44
            },
            end: {
              line: 5,
              column: 57
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
    hash: '931cb3f0f247bf6937a8b8e3575513cba7987f82'
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
exports['default'] = sendTimeout;

var _setSendTimeout = require('../actions/setSendTimeout');

var DEFAULT_STATE = (cov_mjkjspdwa.s[0]++, 20000);

function sendTimeout() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_mjkjspdwa.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_mjkjspdwa.f[0]++;
  cov_mjkjspdwa.s[1]++;

  switch (type) {
    case _setSendTimeout.SET_SEND_TIMEOUT:
      cov_mjkjspdwa.b[1][0]++;
      cov_mjkjspdwa.s[2]++;
      state = payload.sendTimeout;
      cov_mjkjspdwa.s[3]++;
      break;

    default:
      cov_mjkjspdwa.b[1][1]++;
      cov_mjkjspdwa.s[4]++;
      break;
  }

  cov_mjkjspdwa.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZW5kVGltZW91dC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX1NUQVRFIiwic2VuZFRpbWVvdXQiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX1NFTkRfVElNRU9VVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLDBCQUFHLEtBQUgsQ0FBbkI7O0FBRWUsU0FBU0MsV0FBVCxHQUErRDtBQUFBLE1BQTFDQyxLQUEwQyxpR0FBbENGLGFBQWtDOztBQUFBO0FBQUEsTUFBakJHLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQTtBQUFBOztBQUM1RSxVQUFRQSxJQUFSO0FBQ0UsU0FBS0MsZ0NBQUw7QUFBQTtBQUFBO0FBQ0VILE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDRixXQUFoQjtBQURGO0FBRUU7O0FBRUY7QUFBQTtBQUFBO0FBQ0U7QUFOSjs7QUFENEU7QUFVNUUsU0FBT0MsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1NFTkRfVElNRU9VVCB9IGZyb20gJy4uL2FjdGlvbnMvc2V0U2VuZFRpbWVvdXQnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0gMjAwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRUaW1lb3V0KHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfU0VORF9USU1FT1VUOlxuICAgICAgc3RhdGUgPSBwYXlsb2FkLnNlbmRUaW1lb3V0O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
