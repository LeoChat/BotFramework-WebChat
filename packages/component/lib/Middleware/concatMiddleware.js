'use strict';

var cov_54j0dtr14 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Middleware/concatMiddleware.js';
  var hash = '6284653a8e8af384207f89205a73e1d701a22b5f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Middleware/concatMiddleware.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      '1': {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 119
        }
      },
      '2': {
        start: {
          line: 3,
          column: 61
        },
        end: {
          line: 3,
          column: 113
        }
      },
      '3': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 14,
          column: 6
        }
      },
      '4': {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 33
        }
      },
      '5': {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 11,
          column: 7
        }
      },
      '6': {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 34
        }
      },
      '7': {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 51
        }
      },
      '8': {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 18
        }
      }
    },
    fnMap: {
      '0': {
        name: 'concatMiddleware',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 40
          }
        },
        loc: {
          start: {
            line: 1,
            column: 57
          },
          end: {
            line: 16,
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
            column: 9
          },
          end: {
            line: 2,
            column: 10
          }
        },
        loc: {
          start: {
            line: 2,
            column: 20
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 2
      },
      '2': {
        name: '(anonymous_2)',
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
            column: 61
          },
          end: {
            line: 3,
            column: 113
          }
        },
        line: 3
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 5,
            column: 11
          },
          end: {
            line: 5,
            column: 12
          }
        },
        loc: {
          start: {
            line: 5,
            column: 19
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 5
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 32
          },
          end: {
            line: 11,
            column: 7
          }
        },
        line: 7
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 3,
            column: 61
          },
          end: {
            line: 3,
            column: 113
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 3,
              column: 74
            },
            end: {
              line: 3,
              column: 105
            }
          },
          {
            start: {
              line: 3,
              column: 108
            },
            end: {
              line: 3,
              column: 113
            }
          }
        ],
        line: 3
      },
      '1': {
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 10,
            column: 40
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 10,
              column: 23
            },
            end: {
              line: 10,
              column: 33
            }
          },
          {
            start: {
              line: 10,
              column: 36
            },
            end: {
              line: 10,
              column: 40
            }
          }
        ],
        line: 10
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
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '6284653a8e8af384207f89205a73e1d701a22b5f'
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
exports.default = concatMiddleware;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function concatMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  cov_54j0dtr14.f[0]++;
  cov_54j0dtr14.s[0]++;
  return function(options) {
    cov_54j0dtr14.f[1]++;
    var setup =
      (cov_54j0dtr14.s[1]++,
      middlewares.reduce(function(setup, middleware) {
        cov_54j0dtr14.f[2]++;
        cov_54j0dtr14.s[2]++;
        return middleware
          ? (cov_54j0dtr14.b[0][0]++, [].concat(_toConsumableArray(setup), [middleware(options)]))
          : (cov_54j0dtr14.b[0][1]++, setup);
      }, []));
    cov_54j0dtr14.s[3]++;
    return function(last) {
      cov_54j0dtr14.f[3]++;
      var stack = (cov_54j0dtr14.s[4]++, setup.slice());
      cov_54j0dtr14.s[5]++;

      var work = function work() {
        cov_54j0dtr14.f[4]++;
        var next = (cov_54j0dtr14.s[6]++, stack.shift());
        cov_54j0dtr14.s[7]++;
        return (next ? (cov_54j0dtr14.b[1][0]++, next(work)) : (cov_54j0dtr14.b[1][1]++, last)).apply(
          void 0,
          arguments
        );
      };

      cov_54j0dtr14.s[8]++;
      return work;
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NaWRkbGV3YXJlL2NvbmNhdE1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiY29uY2F0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwib3B0aW9ucyIsInNldHVwIiwicmVkdWNlIiwibWlkZGxld2FyZSIsImxhc3QiLCJzdGFjayIsInNsaWNlIiwid29yayIsIm5leHQiLCJzaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxnQkFBVCxHQUEwQztBQUFBLG9DQUFiQyxXQUFhO0FBQWJBLElBQUFBLFdBQWE7QUFBQTs7QUFBQTtBQUFBO0FBQ3ZELFNBQU8sVUFBQUMsT0FBTyxFQUFJO0FBQUE7QUFDaEIsUUFBTUMsS0FBSywwQkFBR0YsV0FBVyxDQUFDRyxNQUFaLENBQW1CLFVBQUNELEtBQUQsRUFBUUUsVUFBUixFQUF3QjtBQUFBO0FBQUE7QUFBQSxhQUFBQSxVQUFVLDBEQUFPRixLQUFQLElBQWNFLFVBQVUsQ0FBQ0gsT0FBRCxDQUF4QixnQ0FBcUNDLEtBQXJDLENBQVY7QUFBb0QsS0FBL0YsRUFBa0csRUFBbEcsQ0FBSCxDQUFYO0FBRGdCO0FBR2hCLFdBQU8sVUFBQUcsSUFBSSxFQUFJO0FBQUE7QUFDYixVQUFNQyxLQUFLLDBCQUFHSixLQUFLLENBQUNLLEtBQU4sRUFBSCxDQUFYO0FBRGE7O0FBRWIsVUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBYTtBQUFBO0FBQ3hCLFlBQU1DLElBQUksMEJBQUdILEtBQUssQ0FBQ0ksS0FBTixFQUFILENBQVY7QUFEd0I7QUFHeEIsZUFBTyxDQUFDRCxJQUFJLDZCQUFHQSxJQUFJLENBQUNELElBQUQsQ0FBUCw4QkFBZ0JILElBQWhCLENBQUwsMEJBQVA7QUFDRCxPQUpEOztBQUZhO0FBUWIsYUFBT0csSUFBUDtBQUNELEtBVEQ7QUFVRCxHQWJEO0FBY0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXRNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSB7XG4gIHJldHVybiBvcHRpb25zID0+IHtcbiAgICBjb25zdCBzZXR1cCA9IG1pZGRsZXdhcmVzLnJlZHVjZSgoc2V0dXAsIG1pZGRsZXdhcmUpID0+IChtaWRkbGV3YXJlID8gWy4uLnNldHVwLCBtaWRkbGV3YXJlKG9wdGlvbnMpXSA6IHNldHVwKSwgW10pO1xuXG4gICAgcmV0dXJuIGxhc3QgPT4ge1xuICAgICAgY29uc3Qgc3RhY2sgPSBzZXR1cC5zbGljZSgpO1xuICAgICAgY29uc3Qgd29yayA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBzdGFjay5zaGlmdCgpO1xuXG4gICAgICAgIHJldHVybiAobmV4dCA/IG5leHQod29yaykgOiBsYXN0KSguLi5hcmdzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB3b3JrO1xuICAgIH07XG4gIH07XG59XG4iXX0=
