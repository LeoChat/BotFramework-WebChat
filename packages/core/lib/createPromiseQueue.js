'use strict';

var cov_2i0jjorpz2 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/createPromiseQueue.js';
  var hash = '0ff6351e72ad066fd7ed1b9c653a439af8fefdb9';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/createPromiseQueue.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 5,
          column: 18
        }
      },
      '1': {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 16,
          column: 3
        }
      },
      '2': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      '3': {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 9,
          column: 34
        }
      },
      '4': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 22
        }
      },
      '5': {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 21
        }
      },
      '6': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 24
        }
      },
      '7': {
        start: {
          line: 18,
          column: 16
        },
        end: {
          line: 19,
          column: 103
        }
      },
      '8': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 103
        }
      },
      '9': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 24,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createPromiseQueue',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 42
          }
        },
        loc: {
          start: {
            line: 3,
            column: 45
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 7,
            column: 16
          }
        },
        loc: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 7
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 17
          }
        },
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 103
          }
        },
        line: 19
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 8,
              column: 4
            },
            end: {
              line: 15,
              column: 5
            }
          },
          {
            start: {
              line: 8,
              column: 4
            },
            end: {
              line: 15,
              column: 5
            }
          }
        ],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 103
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 19
            },
            end: {
              line: 19,
              column: 49
            }
          },
          {
            start: {
              line: 19,
              column: 52
            },
            end: {
              line: 19,
              column: 103
            }
          }
        ],
        line: 19
      },
      '2': {
        loc: {
          start: {
            line: 19,
            column: 53
          },
          end: {
            line: 19,
            column: 94
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 53
            },
            end: {
              line: 19,
              column: 61
            }
          },
          {
            start: {
              line: 19,
              column: 66
            },
            end: {
              line: 19,
              column: 93
            }
          }
        ],
        line: 19
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '0ff6351e72ad066fd7ed1b9c653a439af8fefdb9'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createPromiseQueue;

var _createDeferred = _interopRequireDefault(require('./createDeferred'));

function createPromiseQueue() {
  cov_2i0jjorpz2.f[0]++;
  var deferred;
  var queue = (cov_2i0jjorpz2.s[0]++, []);
  cov_2i0jjorpz2.s[1]++;

  var push = function push(value) {
    cov_2i0jjorpz2.f[1]++;
    cov_2i0jjorpz2.s[2]++;

    if (deferred) {
      cov_2i0jjorpz2.b[0][0]++;

      var _ref = (cov_2i0jjorpz2.s[3]++, deferred),
        resolve = _ref.resolve;

      cov_2i0jjorpz2.s[4]++;
      deferred = null;
      cov_2i0jjorpz2.s[5]++;
      resolve(value);
    } else {
      cov_2i0jjorpz2.b[0][1]++;
      cov_2i0jjorpz2.s[6]++;
      queue.push(value);
    }
  };

  cov_2i0jjorpz2.s[7]++;

  var shift = function shift() {
    cov_2i0jjorpz2.f[2]++;
    cov_2i0jjorpz2.s[8]++;
    return queue.length
      ? (cov_2i0jjorpz2.b[1][0]++, Promise.resolve(queue.shift()))
      : (cov_2i0jjorpz2.b[1][1]++,
        (
          (cov_2i0jjorpz2.b[2][0]++, deferred) ||
          (cov_2i0jjorpz2.b[2][1]++, (deferred = (0, _createDeferred['default'])()))
        ).promise);
  };

  cov_2i0jjorpz2.s[9]++;
  return {
    push: push,
    shift: shift
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVQcm9taXNlUXVldWUuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvbWlzZVF1ZXVlIiwiZGVmZXJyZWQiLCJxdWV1ZSIsInB1c2giLCJ2YWx1ZSIsInJlc29sdmUiLCJzaGlmdCIsImxlbmd0aCIsIlByb21pc2UiLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxrQkFBVCxHQUE4QjtBQUFBO0FBQzNDLE1BQUlDLFFBQUo7QUFDQSxNQUFNQyxLQUFLLDJCQUFHLEVBQUgsQ0FBWDtBQUYyQzs7QUFJM0MsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsS0FBSyxFQUFJO0FBQUE7QUFBQTs7QUFDcEIsUUFBSUgsUUFBSixFQUFjO0FBQUE7O0FBQUEseUNBQ1FBLFFBRFI7QUFBQSxVQUNKSSxPQURJLFFBQ0pBLE9BREk7O0FBQUE7QUFHWkosTUFBQUEsUUFBUSxHQUFHLElBQVg7QUFIWTtBQUlaSSxNQUFBQSxPQUFPLENBQUNELEtBQUQsQ0FBUDtBQUNELEtBTEQsTUFLTztBQUFBO0FBQUE7QUFDTEYsTUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVg7QUFDRDtBQUNGLEdBVEQ7O0FBSjJDOztBQWUzQyxNQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUNaO0FBQUE7QUFBQTtBQUFBLFdBQUFKLEtBQUssQ0FBQ0ssTUFBTiw4QkFBZUMsT0FBTyxDQUFDSCxPQUFSLENBQWdCSCxLQUFLLENBQUNJLEtBQU4sRUFBaEIsQ0FBZiwrQkFBZ0QsQ0FBQywyQkFBQUwsUUFBUSxnQ0FBS0EsUUFBUSxHQUFHLGlDQUFoQixDQUFULEVBQTRDUSxPQUE1RjtBQUFtRyxHQURyRzs7QUFmMkM7QUFrQjNDLFNBQU87QUFDTE4sSUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUxHLElBQUFBLEtBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRGVmZXJyZWQgZnJvbSAnLi9jcmVhdGVEZWZlcnJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb21pc2VRdWV1ZSgpIHtcbiAgbGV0IGRlZmVycmVkO1xuICBjb25zdCBxdWV1ZSA9IFtdO1xuXG4gIGNvbnN0IHB1c2ggPSB2YWx1ZSA9PiB7XG4gICAgaWYgKGRlZmVycmVkKSB7XG4gICAgICBjb25zdCB7IHJlc29sdmUgfSA9IGRlZmVycmVkO1xuXG4gICAgICBkZWZlcnJlZCA9IG51bGw7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVldWUucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNoaWZ0ID0gKCkgPT5cbiAgICBxdWV1ZS5sZW5ndGggPyBQcm9taXNlLnJlc29sdmUocXVldWUuc2hpZnQoKSkgOiAoZGVmZXJyZWQgfHwgKGRlZmVycmVkID0gY3JlYXRlRGVmZXJyZWQoKSkpLnByb21pc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwdXNoLFxuICAgIHNoaWZ0XG4gIH07XG59XG4iXX0=
