'use strict';

var cov_sbfy1rs0q = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/language.js';
  var hash = '2fe822bccf1d7c914d2a16c8e6e27beeb08c1e86';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/language.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 29
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
          column: 31
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
        name: 'language',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 32
          }
        },
        loc: {
          start: {
            line: 5,
            column: 75
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
            column: 33
          },
          end: {
            line: 5,
            column: 54
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 41
            },
            end: {
              line: 5,
              column: 54
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
    hash: '2fe822bccf1d7c914d2a16c8e6e27beeb08c1e86'
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
exports['default'] = language;

var _setLanguage = require('../actions/setLanguage');

var DEFAULT_STATE = (cov_sbfy1rs0q.s[0]++, 'en-US');

function language() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_sbfy1rs0q.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_sbfy1rs0q.f[0]++;
  cov_sbfy1rs0q.s[1]++;

  switch (type) {
    case _setLanguage.SET_LANGUAGE:
      cov_sbfy1rs0q.b[1][0]++;
      cov_sbfy1rs0q.s[2]++;
      state = payload.language;
      cov_sbfy1rs0q.s[3]++;
      break;

    default:
      cov_sbfy1rs0q.b[1][1]++;
      cov_sbfy1rs0q.s[4]++;
      break;
  }

  cov_sbfy1rs0q.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX1NUQVRFIiwibGFuZ3VhZ2UiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX0xBTkdVQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsMEJBQUcsT0FBSCxDQUFuQjs7QUFFZSxTQUFTQyxRQUFULEdBQTREO0FBQUEsTUFBMUNDLEtBQTBDLGlHQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBO0FBQUE7O0FBQ3pFLFVBQVFBLElBQVI7QUFDRSxTQUFLQyx5QkFBTDtBQUFBO0FBQUE7QUFDRUgsTUFBQUEsS0FBSyxHQUFHQyxPQUFPLENBQUNGLFFBQWhCO0FBREY7QUFFRTs7QUFFRjtBQUFBO0FBQUE7QUFDRTtBQU5KOztBQUR5RTtBQVV6RSxTQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfTEFOR1VBR0UgfSBmcm9tICcuLi9hY3Rpb25zL3NldExhbmd1YWdlJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9ICdlbi1VUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhbmd1YWdlKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfTEFOR1VBR0U6XG4gICAgICBzdGF0ZSA9IHBheWxvYWQubGFuZ3VhZ2U7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
