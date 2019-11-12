'use strict';

var cov_51l0ix9kv = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/selectors/combineSelectors.js';
  var hash = '22d65fea2dda51a0e8b8fbda64b64a4353d39ef7';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/selectors/combineSelectors.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 107
        }
      },
      '2': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 106
        }
      },
      '3': {
        start: {
          line: 3,
          column: 66
        },
        end: {
          line: 3,
          column: 101
        }
      },
      '4': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 7,
          column: 116
        }
      },
      '5': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 115
        }
      },
      '6': {
        start: {
          line: 7,
          column: 59
        },
        end: {
          line: 7,
          column: 109
        }
      }
    },
    fnMap: {
      '0': {
        name: 'combineSelectors',
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
            column: 52
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 3,
            column: 11
          },
          end: {
            line: 3,
            column: 12
          }
        },
        loc: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 106
          }
        },
        line: 3
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
            column: 66
          },
          end: {
            line: 3,
            column: 101
          }
        },
        line: 3
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 6,
            column: 10
          }
        },
        loc: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 115
          }
        },
        line: 7
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 7,
            column: 34
          },
          end: {
            line: 7,
            column: 35
          }
        },
        loc: {
          start: {
            line: 7,
            column: 59
          },
          end: {
            line: 7,
            column: 109
          }
        },
        line: 7
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 2,
              column: 2
            },
            end: {
              line: 4,
              column: 3
            }
          },
          {
            start: {
              line: 2,
              column: 2
            },
            end: {
              line: 4,
              column: 3
            }
          }
        ],
        line: 2
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
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '22d65fea2dda51a0e8b8fbda64b64a4353d39ef7'
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
exports['default'] = combineSelectors;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        (0, _defineProperty2['default'])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function combineSelectors(selectors) {
  cov_51l0ix9kv.f[0]++;
  cov_51l0ix9kv.s[0]++;

  if (Array.isArray(selectors)) {
    cov_51l0ix9kv.b[0][0]++;
    cov_51l0ix9kv.s[1]++;
    return function(state) {
      cov_51l0ix9kv.f[1]++;
      cov_51l0ix9kv.s[2]++;
      return selectors.reduce(function(combinedState, selector) {
        cov_51l0ix9kv.f[2]++;
        cov_51l0ix9kv.s[3]++;
        return [].concat((0, _toConsumableArray2['default'])(combinedState), [selector(state)]);
      }, []);
    };
  } else {
    cov_51l0ix9kv.b[0][1]++;
  }

  cov_51l0ix9kv.s[4]++;
  return function(state) {
    cov_51l0ix9kv.f[3]++;
    cov_51l0ix9kv.s[5]++;
    return Object.keys(selectors).reduce(function(combinedState, key) {
      cov_51l0ix9kv.f[4]++;
      cov_51l0ix9kv.s[6]++;
      return _objectSpread({}, combinedState, (0, _defineProperty2['default'])({}, key, selectors[key](state)));
    }, {});
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3RvcnMvY29tYmluZVNlbGVjdG9ycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiQXJyYXkiLCJpc0FycmF5Iiwic3RhdGUiLCJyZWR1Y2UiLCJjb21iaW5lZFN0YXRlIiwic2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLGdCQUFULENBQTBCQyxTQUExQixFQUFxQztBQUFBO0FBQUE7O0FBQ2xELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixTQUFkLENBQUosRUFBOEI7QUFBQTtBQUFBO0FBQzVCLFdBQU8sVUFBQUcsS0FBSyxFQUFJO0FBQUE7QUFBQTtBQUFBLGFBQUFILFNBQVMsQ0FBQ0ksTUFBVixDQUFpQixVQUFDQyxhQUFELEVBQWdCQyxRQUFoQixFQUE2QjtBQUFBO0FBQUE7QUFBQSw2REFBSUQsYUFBSixJQUFtQkMsUUFBUSxDQUFDSCxLQUFELENBQTNCO0FBQW1DLE9BQWpGLEVBQW1GLEVBQW5GO0FBQXNGLEtBQXRHO0FBQ0QsR0FGRDtBQUFBO0FBQUE7O0FBRGtEO0FBS2xELFNBQU8sVUFBQUEsS0FBSyxFQUNWO0FBQUE7QUFBQTtBQUFBLFdBQUFJLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixTQUFaLEVBQXVCSSxNQUF2QixDQUE4QixVQUFDQyxhQUFELEVBQWdCSSxHQUFoQixFQUF5QjtBQUFBO0FBQUE7QUFBQSwrQkFBS0osYUFBTCx1Q0FBcUJJLEdBQXJCLEVBQTJCVCxTQUFTLENBQUNTLEdBQUQsQ0FBVCxDQUFlTixLQUFmLENBQTNCO0FBQWtELEtBQXpHLEVBQTRHLEVBQTVHO0FBQStHLEdBRGpIO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcnMpKSB7XG4gICAgcmV0dXJuIHN0YXRlID0+IHNlbGVjdG9ycy5yZWR1Y2UoKGNvbWJpbmVkU3RhdGUsIHNlbGVjdG9yKSA9PiBbLi4uY29tYmluZWRTdGF0ZSwgc2VsZWN0b3Ioc3RhdGUpXSwgW10pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlID0+XG4gICAgT2JqZWN0LmtleXMoc2VsZWN0b3JzKS5yZWR1Y2UoKGNvbWJpbmVkU3RhdGUsIGtleSkgPT4gKHsgLi4uY29tYmluZWRTdGF0ZSwgW2tleV06IHNlbGVjdG9yc1trZXldKHN0YXRlKSB9KSwge30pO1xufVxuIl19
