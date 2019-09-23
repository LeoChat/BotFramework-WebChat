'use strict';

var cov_2a06tdp0ue = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/direction.js';
  var hash = '203bdd96ba202726e2ace396e80c4297a9f171e3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/direction.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 27
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      '2': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 67
        }
      },
      '3': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 12
        }
      },
      '4': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 12
        }
      },
      '5': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 16
          }
        },
        loc: {
          start: {
            line: 6,
            column: 58
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 37
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 6,
              column: 32
            },
            end: {
              line: 6,
              column: 37
            }
          }
        ],
        line: 6
      },
      '1': {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: 'switch',
        locations: [
          {
            start: {
              line: 8,
              column: 4
            },
            end: {
              line: 11,
              column: 12
            }
          },
          {
            start: {
              line: 13,
              column: 4
            },
            end: {
              line: 14,
              column: 12
            }
          }
        ],
        line: 7
      },
      '2': {
        loc: {
          start: {
            line: 10,
            column: 14
          },
          end: {
            line: 10,
            column: 66
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 10,
              column: 53
            },
            end: {
              line: 10,
              column: 58
            }
          },
          {
            start: {
              line: 10,
              column: 61
            },
            end: {
              line: 10,
              column: 66
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
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '203bdd96ba202726e2ace396e80c4297a9f171e3'
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
exports['default'] = _default;

var _setLanguage = require('../actions/setLanguage');

// eslint-disable-next-line no-unused-vars
var DEFAULT_STATE = (cov_2a06tdp0ue.s[0]++, 'ltr');

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2a06tdp0ue.b[0][0]++, 'ltr');

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_2a06tdp0ue.f[0]++;
  cov_2a06tdp0ue.s[1]++;

  switch (type) {
    case _setLanguage.SET_LANGUAGE:
      cov_2a06tdp0ue.b[1][0]++;
      cov_2a06tdp0ue.s[2]++;
      // eslint-disable-next-line require-unicode-regexp
      state = /^he(-IL)?$/i.test(payload.language)
        ? (cov_2a06tdp0ue.b[2][0]++, 'rtl')
        : (cov_2a06tdp0ue.b[2][1]++, 'ltr');
      cov_2a06tdp0ue.s[3]++;
      break;

    default:
      cov_2a06tdp0ue.b[1][1]++;
      cov_2a06tdp0ue.s[4]++;
      break;
  }

  cov_2a06tdp0ue.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9kaXJlY3Rpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfTEFOR1VBR0UiLCJ0ZXN0IiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0EsSUFBTUEsYUFBYSwyQkFBRyxLQUFILENBQW5COztBQUVlLG9CQUEyQztBQUFBLE1BQWxDQyxLQUFrQyxrR0FBMUIsS0FBMEI7O0FBQUE7QUFBQSxNQUFqQkMsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBO0FBQUE7O0FBQ3hELFVBQVFBLElBQVI7QUFDRSxTQUFLQyx5QkFBTDtBQUFBO0FBQUE7QUFDRTtBQUNBSCxNQUFBQSxLQUFLLEdBQUcsY0FBY0ksSUFBZCxDQUFtQkgsT0FBTyxDQUFDSSxRQUEzQiwrQkFBdUMsS0FBdkMsK0JBQStDLEtBQS9DLENBQVI7QUFGRjtBQUdFOztBQUVGO0FBQUE7QUFBQTtBQUNFO0FBUEo7O0FBRHdEO0FBV3hELFNBQU9MLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9MQU5HVUFHRSB9IGZyb20gJy4uL2FjdGlvbnMvc2V0TGFuZ3VhZ2UnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IERFRkFVTFRfU1RBVEUgPSAnbHRyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSAnbHRyJywgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfTEFOR1VBR0U6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS11bmljb2RlLXJlZ2V4cFxuICAgICAgc3RhdGUgPSAvXmhlKC1JTCk/JC9pLnRlc3QocGF5bG9hZC5sYW5ndWFnZSkgPyAncnRsJyA6ICdsdHInO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
