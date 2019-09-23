'use strict';

var cov_1lzu7prc42 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/referenceGrammarID.js';
  var hash = '22787ed71b2e26507ce8d9fa1ac9d204a7cd31d0';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/referenceGrammarID.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 26
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
          column: 49
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
        name: 'referenceGrammarID',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 42
          }
        },
        loc: {
          start: {
            line: 5,
            column: 85
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
            column: 43
          },
          end: {
            line: 5,
            column: 64
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 51
            },
            end: {
              line: 5,
              column: 64
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
      },
      '2': {
        loc: {
          start: {
            line: 8,
            column: 14
          },
          end: {
            line: 8,
            column: 48
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 8,
              column: 14
            },
            end: {
              line: 8,
              column: 40
            }
          },
          {
            start: {
              line: 8,
              column: 44
            },
            end: {
              line: 8,
              column: 48
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
    hash: '22787ed71b2e26507ce8d9fa1ac9d204a7cd31d0'
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
exports['default'] = referenceGrammarID;

var _setReferenceGrammarID = require('../actions/setReferenceGrammarID');

var DEFAULT_STATE = (cov_1lzu7prc42.s[0]++, null);

function referenceGrammarID() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1lzu7prc42.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_1lzu7prc42.f[0]++;
  cov_1lzu7prc42.s[1]++;

  switch (type) {
    case _setReferenceGrammarID.SET_REFERENCE_GRAMMAR_ID:
      cov_1lzu7prc42.b[1][0]++;
      cov_1lzu7prc42.s[2]++;
      state = (cov_1lzu7prc42.b[2][0]++, payload.referenceGrammarID) || (cov_1lzu7prc42.b[2][1]++, null);
      cov_1lzu7prc42.s[3]++;
      break;

    default:
      cov_1lzu7prc42.b[1][1]++;
      cov_1lzu7prc42.s[4]++;
      break;
  }

  cov_1lzu7prc42.s[5]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yZWZlcmVuY2VHcmFtbWFySUQuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsInJlZmVyZW5jZUdyYW1tYXJJRCIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfUkVGRVJFTkNFX0dSQU1NQVJfSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsMkJBQUcsSUFBSCxDQUFuQjs7QUFFZSxTQUFTQyxrQkFBVCxHQUFzRTtBQUFBLE1BQTFDQyxLQUEwQyxrR0FBbENGLGFBQWtDOztBQUFBO0FBQUEsTUFBakJHLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQTtBQUFBOztBQUNuRixVQUFRQSxJQUFSO0FBQ0UsU0FBS0MsK0NBQUw7QUFBQTtBQUFBO0FBQ0VILE1BQUFBLEtBQUssR0FBRywyQkFBQUMsT0FBTyxDQUFDRixrQkFBUixnQ0FBOEIsSUFBOUIsQ0FBUjtBQURGO0FBRUU7O0FBRUY7QUFBQTtBQUFBO0FBQ0U7QUFOSjs7QUFEbUY7QUFVbkYsU0FBT0MsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1JFRkVSRU5DRV9HUkFNTUFSX0lEIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRSZWZlcmVuY2VHcmFtbWFySUQnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVmZXJlbmNlR3JhbW1hcklEKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfUkVGRVJFTkNFX0dSQU1NQVJfSUQ6XG4gICAgICBzdGF0ZSA9IHBheWxvYWQucmVmZXJlbmNlR3JhbW1hcklEIHx8IG51bGw7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
