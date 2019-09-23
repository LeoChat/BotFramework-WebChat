'use strict';

var cov_1k1d81dp2x = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/suggestedActions.js';
  var hash = '518fe39cfd965cab459e5b67f83df61c8c1b9b3a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/suggestedActions.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 24
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      '2': {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 60
        }
      },
      '3': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
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
          column: 28
        }
      },
      '5': {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 12
        }
      },
      '6': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 12
        }
      },
      '7': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'suggestedActions',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 40
          }
        },
        loc: {
          start: {
            line: 6,
            column: 88
          },
          end: {
            line: 19,
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
            column: 41
          },
          end: {
            line: 6,
            column: 62
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 6,
              column: 49
            },
            end: {
              line: 6,
              column: 62
            }
          }
        ],
        line: 6
      },
      '1': {
        loc: {
          start: {
            line: 6,
            column: 66
          },
          end: {
            line: 6,
            column: 78
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 6,
              column: 76
            },
            end: {
              line: 6,
              column: 78
            }
          }
        ],
        line: 6
      },
      '2': {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 16,
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
              line: 10,
              column: 12
            }
          },
          {
            start: {
              line: 11,
              column: 4
            },
            end: {
              line: 13,
              column: 12
            }
          },
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 15,
              column: 12
            }
          }
        ],
        line: 7
      },
      '3': {
        loc: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 9,
              column: 28
            },
            end: {
              line: 9,
              column: 52
            }
          },
          {
            start: {
              line: 9,
              column: 56
            },
            end: {
              line: 9,
              column: 58
            }
          }
        ],
        line: 9
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
      '7': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0, 0, 0],
      '3': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '518fe39cfd965cab459e5b67f83df61c8c1b9b3a'
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
exports['default'] = suggestedActions;

var _clearSuggestedActions = require('../actions/clearSuggestedActions');

var _setSuggestedActions = require('../actions/setSuggestedActions');

var DEFAULT_STATE = (cov_1k1d81dp2x.s[0]++, []);

function suggestedActions() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1k1d81dp2x.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    _ref$payload = _ref.payload,
    payload = _ref$payload === void 0 ? (cov_1k1d81dp2x.b[1][0]++, {}) : _ref$payload,
    type = _ref.type;

  cov_1k1d81dp2x.f[0]++;
  cov_1k1d81dp2x.s[1]++;

  switch (type) {
    case _setSuggestedActions.SET_SUGGESTED_ACTIONS:
      cov_1k1d81dp2x.b[2][0]++;
      cov_1k1d81dp2x.s[2]++;
      state = [].slice.call((cov_1k1d81dp2x.b[3][0]++, payload.suggestedActions) || (cov_1k1d81dp2x.b[3][1]++, []));
      cov_1k1d81dp2x.s[3]++;
      break;

    case _clearSuggestedActions.CLEAR_SUGGESTED_ACTIONS:
      cov_1k1d81dp2x.b[2][1]++;
      cov_1k1d81dp2x.s[4]++;
      state = DEFAULT_STATE;
      cov_1k1d81dp2x.s[5]++;
      break;

    default:
      cov_1k1d81dp2x.b[2][2]++;
      cov_1k1d81dp2x.s[6]++;
      break;
  }

  cov_1k1d81dp2x.s[7]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zdWdnZXN0ZWRBY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJzdWdnZXN0ZWRBY3Rpb25zIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIlNFVF9TVUdHRVNURURfQUNUSU9OUyIsInNsaWNlIiwiY2FsbCIsIkNMRUFSX1NVR0dFU1RFRF9BQ1RJT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLGFBQWEsMkJBQUcsRUFBSCxDQUFuQjs7QUFFZSxTQUFTQyxnQkFBVCxHQUF5RTtBQUFBLE1BQS9DQyxLQUErQyxrR0FBdkNGLGFBQXVDOztBQUFBO0FBQUEsMEJBQXRCRyxPQUFzQjtBQUFBLE1BQXRCQSxPQUFzQix3REFBWixFQUFZO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBO0FBQUE7O0FBQ3RGLFVBQVFBLElBQVI7QUFDRSxTQUFLQywwQ0FBTDtBQUFBO0FBQUE7QUFDRUgsTUFBQUEsS0FBSyxHQUFHLEdBQUdJLEtBQUgsQ0FBU0MsSUFBVCxDQUFjLDJCQUFBSixPQUFPLENBQUNGLGdCQUFSLGdDQUE0QixFQUE1QixDQUFkLENBQVI7QUFERjtBQUVFOztBQUNGLFNBQUtPLDhDQUFMO0FBQUE7QUFBQTtBQUNFTixNQUFBQSxLQUFLLEdBQUdGLGFBQVI7QUFERjtBQUVFOztBQUNGO0FBQUE7QUFBQTtBQUNFO0FBUko7O0FBRHNGO0FBWXRGLFNBQU9FLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENMRUFSX1NVR0dFU1RFRF9BQ1RJT05TIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhclN1Z2dlc3RlZEFjdGlvbnMnO1xuaW1wb3J0IHsgU0VUX1NVR0dFU1RFRF9BQ1RJT05TIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRTdWdnZXN0ZWRBY3Rpb25zJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWdnZXN0ZWRBY3Rpb25zKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkID0ge30sIHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9TVUdHRVNURURfQUNUSU9OUzpcbiAgICAgIHN0YXRlID0gW10uc2xpY2UuY2FsbChwYXlsb2FkLnN1Z2dlc3RlZEFjdGlvbnMgfHwgW10pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEVBUl9TVUdHRVNURURfQUNUSU9OUzpcbiAgICAgIHN0YXRlID0gREVGQVVMVF9TVEFURTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
