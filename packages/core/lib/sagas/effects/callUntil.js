'use strict';

var cov_exzrqrjzm = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/callUntil.js';
  var hash = 'a086091ffb02a0ca3f62a95c96007f0358e75196';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/callUntil.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 12,
          column: 5
        }
      },
      '1': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 11,
          column: 5
        }
      },
      '2': {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 44
        }
      },
      '3': {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 10,
          column: 7
        }
      },
      '4': {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 14
        }
      }
    },
    fnMap: {
      '0': {
        name: 'callUntilEffect',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 39
          }
        },
        loc: {
          start: {
            line: 3,
            column: 61
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: 'callUntil',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 33
          }
        },
        loc: {
          start: {
            line: 4,
            column: 36
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 4
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 10,
            column: 7
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 8,
              column: 6
            },
            end: {
              line: 10,
              column: 7
            }
          },
          {
            start: {
              line: 8,
              column: 6
            },
            end: {
              line: 10,
              column: 7
            }
          }
        ],
        line: 8
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'a086091ffb02a0ca3f62a95c96007f0358e75196'
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
exports['default'] = callUntilEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _effects = require('redux-saga/effects');

function callUntilEffect(fn, args, predicate) {
  cov_exzrqrjzm.f[0]++;
  cov_exzrqrjzm.s[0]++;
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function callUntil() {
      var result;
      return _regenerator['default'].wrap(function callUntil$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              cov_exzrqrjzm.f[1]++;
              cov_exzrqrjzm.s[1]++;

            case 2:
              cov_exzrqrjzm.s[2]++;
              _context.next = 5;
              return _effects.call.apply(void 0, [fn].concat((0, _toConsumableArray2['default'])(args)));

            case 5:
              result = _context.sent;
              cov_exzrqrjzm.s[3]++;

              if (!predicate(result)) {
                _context.next = 13;
                break;
              }

              cov_exzrqrjzm.b[0][0]++;
              cov_exzrqrjzm.s[4]++;
              return _context.abrupt('break', 16);

            case 13:
              cov_exzrqrjzm.b[0][1]++;

            case 14:
              _context.next = 2;
              break;

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, callUntil);
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2NhbGxVbnRpbC5qcyJdLCJuYW1lcyI6WyJjYWxsVW50aWxFZmZlY3QiLCJmbiIsImFyZ3MiLCJwcmVkaWNhdGUiLCJjYWxsVW50aWwiLCJjYWxsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxlQUFULENBQXlCQyxFQUF6QixFQUE2QkMsSUFBN0IsRUFBbUNDLFNBQW5DLEVBQThDO0FBQUE7QUFBQTtBQUMzRCxTQUFPO0FBQUE7QUFBQSwrQkFBSyxTQUFVQyxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBRU8sbUJBQU1DLDZCQUFLSixFQUFMLDZDQUFZQyxJQUFaLEdBQU47O0FBRlA7QUFFRkksWUFBQUEsTUFGRTtBQUFBOztBQUFBLGlCQUlKSCxTQUFTLENBQUNHLE1BQUQsQ0FKTDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVVGLFNBQVY7QUFBQSxHQUFMLEVBQVA7QUFTRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxsVW50aWxFZmZlY3QoZm4sIGFyZ3MsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gY2FsbChmdW5jdGlvbiogY2FsbFVudGlsKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm4sIC4uLmFyZ3MpO1xuXG4gICAgICBpZiAocHJlZGljYXRlKHJlc3VsdCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
