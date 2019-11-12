'use strict';

var cov_6cdisa5be = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/index-es5.ts';
  var hash = '4a12835d4a4de77144a3839e7838c9b47ac76a75';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/index-es5.ts',
    statementMap: {
      '0': {
        start: {
          line: 30,
          column: 32
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '1': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 34,
          column: 6
        }
      },
      '2': {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 87
        }
      },
      '3': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 41,
          column: 2
        }
      },
      '4': {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 43,
          column: 23
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 30,
            column: 32
          },
          end: {
            line: 30,
            column: 33
          }
        },
        loc: {
          start: {
            line: 30,
            column: 43
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 30
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 31,
              column: 2
            },
            end: {
              line: 31,
              column: 18
            }
          },
          {
            start: {
              line: 32,
              column: 4
            },
            end: {
              line: 34,
              column: 5
            }
          }
        ],
        line: 31
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
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '4a12835d4a4de77144a3839e7838c9b47ac76a75'
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
var _exportNames = {
  createDirectLine: true
};
exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

require('core-js/features/array/find-index');

require('core-js/features/array/find');

require('core-js/features/array/includes');

require('core-js/features/array/iterator');

require('core-js/features/dom-collections');

require('core-js/features/math/sign');

require('core-js/features/number/is-finite');

require('core-js/features/object/assign');

require('core-js/features/object/values');

require('core-js/features/promise');

require('core-js/features/promise/finally');

require('core-js/features/string/starts-with');

require('core-js/features/symbol');

require('url-search-params-polyfill');

require('whatwg-fetch');

var _indexMinimal = require('./index-minimal');

var _addVersion = _interopRequireDefault(require('./addVersion'));

var _createDirectLine = _interopRequireDefault(require('./createDirectLine'));

var _index = require('./index');

Object.keys(_index).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

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
        (0, _defineProperty2.default)(target, key, source[key]);
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

cov_6cdisa5be.s[0]++;

var createDirectLine = function createDirectLine(options) {
  cov_6cdisa5be.f[0]++;
  cov_6cdisa5be.s[1]++;
  (cov_6cdisa5be.b[0][0]++, options.botAgent) &&
    (cov_6cdisa5be.b[0][1]++,
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    ));
  cov_6cdisa5be.s[2]++;
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_indexMinimal.version, ' (ES5)')
    })
  );
};

exports.createDirectLine = createDirectLine;
cov_6cdisa5be.s[3]++;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  createDirectLine: createDirectLine
});
cov_6cdisa5be.s[4]++;
(0, _addVersion.default)('full-es5');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1lczUudHMiXSwibmFtZXMiOlsiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwidmVyc2lvbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFBQTtBQUFBO0FBQ3pDLDRCQUFBQSxPQUFPLENBQUNDLFFBQVIsK0JBQ0VDLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLHNMQURGLENBREY7QUFEeUM7QUFLekMsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxxQkFBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7OztBQVFQQyxNQUFNLENBQUMsU0FBRCxDQUFOLHFCQUNLQSxNQUFNLENBQUMsU0FBRCxDQURYO0FBRUVOLEVBQUFBLGdCQUFnQixFQUFoQkE7QUFGRjs7QUFLQSx5QkFBVyxVQUFYIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IGRvdC1ub3RhdGlvbjogW1wiZXJyb3JcIiwgeyBcImFsbG93UGF0dGVyblwiOiBcIl5XZWJDaGF0JFwiIH1dICovXG4vLyB3aW5kb3dbJ1dlYkNoYXQnXSBpcyByZXF1aXJlZCBmb3IgVHlwZVNjcmlwdFxuXG4vLyBQb2x5ZmlsbHMgZm9yIElFMTEgYW5kIG90aGVyIEVTNSBicm93c2Vyc1xuLy8gVG8gbWFpbnRhaW4gcXVhbGl0eSwgd2UgcHJlZmVyIHBvbHlmaWxscyB3aXRob3V0IGFkZGl0aXZlc1xuLy8gRm9yIGV4YW1wbGUsIHdlIHByZWZlciBQcm9taXNlIGltcGxlbWVudGF0aW9uIGZyb20gXCJjb3JlLWpzXCIgdGhhbiBcImJsdWViaXJkXCJcblxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2ZpbmQtaW5kZXgnO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2ZpbmQnO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2luY2x1ZGVzJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9pdGVyYXRvcic7XG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvZG9tLWNvbGxlY3Rpb25zJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9tYXRoL3NpZ24nO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL251bWJlci9pcy1maW5pdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC9hc3NpZ24nO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC92YWx1ZXMnO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UnO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UvZmluYWxseSc7XG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvc3RyaW5nL3N0YXJ0cy13aXRoJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9zeW1ib2wnO1xuXG5pbXBvcnQgJ3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsJztcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuL2luZGV4LW1pbmltYWwnO1xuaW1wb3J0IGFkZFZlcnNpb24gZnJvbSAnLi9hZGRWZXJzaW9uJztcbmltcG9ydCBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSBmcm9tICcuL2NyZWF0ZURpcmVjdExpbmUnO1xuXG5leHBvcnQgKiBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpcmVjdExpbmUgPSBvcHRpb25zID0+IHtcbiAgb3B0aW9ucy5ib3RBZ2VudCAmJlxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXZWIgQ2hhdDogRGV2ZWxvcGVycyBhcmUgbm90IGN1cnJlbnRseSBhbGxvd2VkIHRvIHNldCBib3RBZ2VudCBpbiB0aGUgY3JlYXRlRGlyZWN0TGluZSBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvQm90RnJhbWV3b3JrLVdlYkNoYXQvaXNzdWVzLzIxMTkgZm9yIG1vcmUgZGV0YWlscy4nXG4gICAgKTtcbiAgcmV0dXJuIGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lKHsgLi4ub3B0aW9ucywgYm90QWdlbnQ6IGBXZWJDaGF0LyR7dmVyc2lvbn0gKEVTNSlgIH0pO1xufTtcblxud2luZG93WydXZWJDaGF0J10gPSB7XG4gIC4uLndpbmRvd1snV2ViQ2hhdCddLFxuICBjcmVhdGVEaXJlY3RMaW5lXG59O1xuXG5hZGRWZXJzaW9uKCdmdWxsLWVzNScpO1xuIl19
