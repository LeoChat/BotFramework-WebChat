'use strict';

var cov_p9yac33ue = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/blobToArrayBuffer.js';
  var hash = '2a94caa330d8e6d6b9e8ae451fbc087b579e652a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/blobToArrayBuffer.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 8,
          column: 5
        }
      },
      '1': {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 3,
          column: 35
        }
      },
      '2': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 81
        }
      },
      '3': {
        start: {
          line: 5,
          column: 45
        },
        end: {
          line: 5,
          column: 80
        }
      },
      '4': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 52
        }
      },
      '5': {
        start: {
          line: 6,
          column: 29
        },
        end: {
          line: 6,
          column: 51
        }
      },
      '6': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 35
        }
      }
    },
    fnMap: {
      '0': {
        name: 'blobToArrayBuffer',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 41
          }
        },
        loc: {
          start: {
            line: 1,
            column: 48
          },
          end: {
            line: 9,
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
            line: 8,
            column: 3
          }
        },
        line: 2
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 5,
            column: 22
          }
        },
        loc: {
          start: {
            line: 5,
            column: 45
          },
          end: {
            line: 5,
            column: 80
          }
        },
        line: 5
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 29
          },
          end: {
            line: 6,
            column: 51
          }
        },
        line: 6
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 5,
            column: 52
          },
          end: {
            line: 5,
            column: 79
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 5,
              column: 52
            },
            end: {
              line: 5,
              column: 57
            }
          },
          {
            start: {
              line: 5,
              column: 61
            },
            end: {
              line: 5,
              column: 79
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
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '2a94caa330d8e6d6b9e8ae451fbc087b579e652a'
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
exports.default = blobToArrayBuffer;

function blobToArrayBuffer(file) {
  cov_p9yac33ue.f[0]++;
  cov_p9yac33ue.s[0]++;
  return new Promise(function(resolve, reject) {
    cov_p9yac33ue.f[1]++;
    var reader = (cov_p9yac33ue.s[1]++, new FileReader());
    cov_p9yac33ue.s[2]++;

    reader.onerror = function(_ref) {
      var error = _ref.error,
        message = _ref.message;
      cov_p9yac33ue.f[2]++;
      cov_p9yac33ue.s[3]++;
      return reject((cov_p9yac33ue.b[0][0]++, error) || (cov_p9yac33ue.b[0][1]++, new Error(message)));
    };

    cov_p9yac33ue.s[4]++;

    reader.onloadend = function() {
      cov_p9yac33ue.f[3]++;
      cov_p9yac33ue.s[5]++;
      return resolve(reader.result);
    };

    cov_p9yac33ue.s[6]++;
    reader.readAsArrayBuffer(file);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9ibG9iVG9BcnJheUJ1ZmZlci5qcyJdLCJuYW1lcyI6WyJibG9iVG9BcnJheUJ1ZmZlciIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNBcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQUE7QUFBQTtBQUM5QyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFBQTtBQUN0QyxRQUFNQyxNQUFNLDBCQUFHLElBQUlDLFVBQUosRUFBSCxDQUFaO0FBRHNDOztBQUd0Q0QsSUFBQUEsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLGdCQUF3QjtBQUFBLFVBQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxVQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQTtBQUFBO0FBQUEsYUFBQUwsTUFBTSxDQUFDLDBCQUFBSSxLQUFLLCtCQUFJLElBQUlFLEtBQUosQ0FBVUQsT0FBVixDQUFKLENBQU4sQ0FBTjtBQUFtQyxLQUE1RTs7QUFIc0M7O0FBSXRDSixJQUFBQSxNQUFNLENBQUNNLFNBQVAsR0FBbUIsWUFBTTtBQUFBO0FBQUE7QUFBQSxhQUFBUixPQUFPLENBQUNFLE1BQU0sQ0FBQ08sTUFBUixDQUFQO0FBQXNCLEtBQS9DOztBQUpzQztBQUt0Q1AsSUFBQUEsTUFBTSxDQUFDUSxpQkFBUCxDQUF5QlosSUFBekI7QUFDRCxHQU5NLENBQVA7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2JUb0FycmF5QnVmZmVyKGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoeyBlcnJvciwgbWVzc2FnZSB9KSA9PiByZWplY3QoZXJyb3IgfHwgbmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH0pO1xufVxuIl19
