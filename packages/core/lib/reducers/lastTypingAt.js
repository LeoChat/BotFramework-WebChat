'use strict';

var cov_28yefv5brm = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/lastTypingAt.js';
  var hash = '76ded044b2a02213b73eade9bf66cb2c52f3b1aa';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducers/lastTypingAt.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 24
        }
      },
      '1': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      '2': {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 15
        }
      },
      '3': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      '4': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 24,
          column: 7
        }
      },
      '5': {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 47
        }
      },
      '6': {
        start: {
          line: 20,
          column: 13
        },
        end: {
          line: 24,
          column: 7
        }
      },
      '7': {
        start: {
          line: 21,
          column: 45
        },
        end: {
          line: 21,
          column: 50
        }
      },
      '8': {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 26
        }
      },
      '9': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'lastTypingAt',
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 36
          }
        },
        loc: {
          start: {
            line: 8,
            column: 79
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 37
          },
          end: {
            line: 8,
            column: 58
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 8,
              column: 45
            },
            end: {
              line: 8,
              column: 58
            }
          }
        ],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 9,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          },
          {
            start: {
              line: 9,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          }
        ],
        line: 9
      },
      '2': {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 17,
              column: 4
            },
            end: {
              line: 25,
              column: 5
            }
          },
          {
            start: {
              line: 17,
              column: 4
            },
            end: {
              line: 25,
              column: 5
            }
          }
        ],
        line: 17
      },
      '3': {
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 18,
              column: 6
            },
            end: {
              line: 24,
              column: 7
            }
          },
          {
            start: {
              line: 18,
              column: 6
            },
            end: {
              line: 24,
              column: 7
            }
          }
        ],
        line: 18
      },
      '4': {
        loc: {
          start: {
            line: 20,
            column: 13
          },
          end: {
            line: 24,
            column: 7
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 20,
              column: 13
            },
            end: {
              line: 24,
              column: 7
            }
          },
          {
            start: {
              line: 20,
              column: 13
            },
            end: {
              line: 24,
              column: 7
            }
          }
        ],
        line: 20
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
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '76ded044b2a02213b73eade9bf66cb2c52f3b1aa'
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
exports['default'] = lastTypingAt;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _incomingActivity = require('../actions/incomingActivity');

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

var DEFAULT_STATE = (cov_28yefv5brm.s[0]++, {});

function lastTypingAt() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_28yefv5brm.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_28yefv5brm.f[0]++;
  cov_28yefv5brm.s[1]++;

  if (type === _incomingActivity.INCOMING_ACTIVITY) {
    cov_28yefv5brm.b[1][0]++;

    var _ref2 = (cov_28yefv5brm.s[2]++, payload),
      _ref2$activity = _ref2.activity,
      _ref2$activity$from = _ref2$activity.from,
      id = _ref2$activity$from.id,
      role = _ref2$activity$from.role,
      activityType = _ref2$activity.type;

    cov_28yefv5brm.s[3]++;

    if (role === 'bot') {
      cov_28yefv5brm.b[2][0]++;
      cov_28yefv5brm.s[4]++;

      if (activityType === 'typing') {
        cov_28yefv5brm.b[3][0]++;
        cov_28yefv5brm.s[5]++;
        state = _objectSpread({}, state, (0, _defineProperty2['default'])({}, id, Date.now()));
      } else {
        cov_28yefv5brm.b[3][1]++;
        cov_28yefv5brm.s[6]++;

        if (activityType === 'message') {
          cov_28yefv5brm.b[4][0]++;

          var _ref3 = (cov_28yefv5brm.s[7]++, state),
            last = _ref3[id],
            nextState = (0, _objectWithoutProperties2['default'])(_ref3, [id].map(_toPropertyKey));

          cov_28yefv5brm.s[8]++;
          state = nextState;
        } else {
          cov_28yefv5brm.b[4][1]++;
        }
      }
    } else {
      cov_28yefv5brm.b[2][1]++;
    }
  } else {
    cov_28yefv5brm.b[1][1]++;
  }

  cov_28yefv5brm.s[9]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sYXN0VHlwaW5nQXQuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsImxhc3RUeXBpbmdBdCIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJJTkNPTUlOR19BQ1RJVklUWSIsImFjdGl2aXR5IiwiZnJvbSIsImlkIiwicm9sZSIsImFjdGl2aXR5VHlwZSIsIkRhdGUiLCJub3ciLCJsYXN0IiwibmV4dFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsMkJBQUcsRUFBSCxDQUFuQjs7QUFFZSxTQUFTQyxZQUFULEdBQWdFO0FBQUEsTUFBMUNDLEtBQTBDLGtHQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBO0FBQUE7O0FBQzdFLE1BQUlBLElBQUksS0FBS0MsbUNBQWIsRUFBZ0M7QUFBQTs7QUFBQSx3Q0FNMUJGLE9BTjBCO0FBQUEsK0JBRTVCRyxRQUY0QjtBQUFBLDZDQUcxQkMsSUFIMEI7QUFBQSxRQUdsQkMsRUFIa0IsdUJBR2xCQSxFQUhrQjtBQUFBLFFBR2RDLElBSGMsdUJBR2RBLElBSGM7QUFBQSxRQUlwQkMsWUFKb0Isa0JBSTFCTixJQUowQjs7QUFBQTs7QUFROUIsUUFBSUssSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFBQTtBQUFBOztBQUNsQixVQUFJQyxZQUFZLEtBQUssUUFBckIsRUFBK0I7QUFBQTtBQUFBO0FBQzdCUixRQUFBQSxLQUFLLHFCQUFRQSxLQUFSLHVDQUFnQk0sRUFBaEIsRUFBcUJHLElBQUksQ0FBQ0MsR0FBTCxFQUFyQixFQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQUE7QUFBQTs7QUFBQSxZQUFJRixZQUFZLEtBQUssU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSw4Q0FDQVIsS0FEQTtBQUFBLGNBQ3ZCVyxJQUR1QixTQUM1QkwsRUFENEI7QUFBQSxjQUNkTSxTQURjLHFEQUM1Qk4sRUFENEI7O0FBQUE7QUFHckNOLFVBQUFBLEtBQUssR0FBR1ksU0FBUjtBQUNELFNBSk07QUFBQTtBQUFBO0FBSU47QUFDRixLQVJEO0FBQUE7QUFBQTtBQVNELEdBakJEO0FBQUE7QUFBQTs7QUFENkU7QUFvQjdFLFNBQU9aLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50IG5vLWNhc2UtZGVjbGFyYXRpb25zOiBcIm9mZlwiKi9cbi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiKi9cblxuaW1wb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhc3RUeXBpbmdBdChzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIGlmICh0eXBlID09PSBJTkNPTUlOR19BQ1RJVklUWSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2aXR5OiB7XG4gICAgICAgIGZyb206IHsgaWQsIHJvbGUgfSxcbiAgICAgICAgdHlwZTogYWN0aXZpdHlUeXBlXG4gICAgICB9XG4gICAgfSA9IHBheWxvYWQ7XG5cbiAgICBpZiAocm9sZSA9PT0gJ2JvdCcpIHtcbiAgICAgIGlmIChhY3Rpdml0eVR5cGUgPT09ICd0eXBpbmcnKSB7XG4gICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgW2lkXTogRGF0ZS5ub3coKSB9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpdml0eVR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgICBjb25zdCB7IFtpZF06IGxhc3QsIC4uLm5leHRTdGF0ZSB9ID0gc3RhdGU7XG5cbiAgICAgICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19
