'use strict';

var cov_1zjepemw3 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/utils/deleteKey.js';
  var hash = '7725ac1eca74a1c7c0f805b461e63ce76d867387';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/utils/deleteKey.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 3
        }
      },
      '1': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 15
        }
      },
      '2': {
        start: {
          line: 8,
          column: 41
        },
        end: {
          line: 8,
          column: 44
        }
      },
      '3': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 17
        }
      }
    },
    fnMap: {
      '0': {
        name: 'deleteKey',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 44
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 4,
              column: 2
            },
            end: {
              line: 6,
              column: 3
            }
          },
          {
            start: {
              line: 4,
              column: 2
            },
            end: {
              line: 6,
              column: 3
            }
          }
        ],
        line: 4
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '7725ac1eca74a1c7c0f805b461e63ce76d867387'
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
exports['default'] = deleteKey;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return (0, _typeof2['default'])(key) === 'symbol' ? key : String(key);
}

function _toPrimitive(input, hint) {
  if ((0, _typeof2['default'])(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if ((0, _typeof2['default'])(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^deleted$" }] */
function deleteKey(map, key) {
  cov_1zjepemw3.f[0]++;
  cov_1zjepemw3.s[0]++;

  if (!map) {
    cov_1zjepemw3.b[0][0]++;
    cov_1zjepemw3.s[1]++;
    return map;
  } else {
    cov_1zjepemw3.b[0][1]++;
  }

  var _ref = (cov_1zjepemw3.s[2]++, map),
    deleted = _ref[key],
    nextMap = (0, _objectWithoutProperties2['default'])(_ref, [key].map(_toPropertyKey));

  cov_1zjepemw3.s[3]++;
  return nextMap;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kZWxldGVLZXkuanMiXSwibmFtZXMiOlsiZGVsZXRlS2V5IiwibWFwIiwia2V5IiwiZGVsZXRlZCIsIm5leHRNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxHQUF4QixFQUE2QjtBQUFBO0FBQUE7O0FBQzFDLE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQUE7QUFBQTtBQUNSLFdBQU9BLEdBQVA7QUFDRCxHQUZEO0FBQUE7QUFBQTs7QUFEMEMsb0NBS0hBLEdBTEc7QUFBQSxNQUszQkUsT0FMMkIsUUFLakNELEdBTGlDO0FBQUEsTUFLZkUsT0FMZSxvREFLakNGLEdBTGlDOztBQUFBO0FBTzFDLFNBQU9FLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXmRlbGV0ZWQkXCIgfV0gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlS2V5KG1hcCwga2V5KSB7XG4gIGlmICghbWFwKSB7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIGNvbnN0IHsgW2tleV06IGRlbGV0ZWQsIC4uLm5leHRNYXAgfSA9IG1hcDtcblxuICByZXR1cm4gbmV4dE1hcDtcbn1cbiJdfQ==
