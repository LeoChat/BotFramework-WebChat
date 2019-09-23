'use strict';

var cov_stf6d1vy9 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/sendTypingIndicator.js';
  var hash = '894292c5da03ff441f1dca9e76c58caeefa2a249';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/sendTypingIndicator.js',
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
          line: 22,
          column: 3
        }
      },
      '2': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 12,
          column: 8
        }
      },
      '3': {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 33
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
          column: 6
        },
        end: {
          line: 17,
          column: 42
        }
      },
      '6': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 12
        }
      },
      '7': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 12
        }
      },
      '8': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'sendTypingIndicator',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 43
          }
        },
        loc: {
          start: {
            line: 6,
            column: 86
          },
          end: {
            line: 25,
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
            column: 44
          },
          end: {
            line: 6,
            column: 65
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 6,
              column: 52
            },
            end: {
              line: 6,
              column: 65
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
            line: 22,
            column: 3
          }
        },
        type: 'switch',
        locations: [
          {
            start: {
              line: 9,
              column: 4
            },
            end: {
              line: 14,
              column: 12
            }
          },
          {
            start: {
              line: 16,
              column: 4
            },
            end: {
              line: 18,
              column: 12
            }
          },
          {
            start: {
              line: 20,
              column: 4
            },
            end: {
              line: 21,
              column: 12
            }
          }
        ],
        line: 7
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
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '894292c5da03ff441f1dca9e76c58caeefa2a249'
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
exports['default'] = sendTypingIndicator;

var _setSendTyping = require('../actions/setSendTyping');

var _setSendTypingIndicator = require('../actions/setSendTypingIndicator');

var DEFAULT_STATE = (cov_stf6d1vy9.s[0]++, false);

function sendTypingIndicator() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_stf6d1vy9.b[0][0]++, DEFAULT_STATE);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_stf6d1vy9.f[0]++;
  cov_stf6d1vy9.s[1]++;

  switch (type) {
    // TODO: [P3] Take this deprecation code out when releasing on or after 2020 January 13
    case _setSendTyping.SET_SEND_TYPING:
      cov_stf6d1vy9.b[1][0]++;
      cov_stf6d1vy9.s[2]++;
      console.warn(
        'Web Chat: "sendTyping" has been renamed to "sendTypingIndicator". Please use "sendTypingIndicator" instead. This deprecation migration will be removed on or after January 13 2020.'
      );
      cov_stf6d1vy9.s[3]++;
      state = payload.sendTyping;
      cov_stf6d1vy9.s[4]++;
      break;

    case _setSendTypingIndicator.SET_SEND_TYPING_INDICATOR:
      cov_stf6d1vy9.b[1][1]++;
      cov_stf6d1vy9.s[5]++;
      state = payload.sendTypingIndicator;
      cov_stf6d1vy9.s[6]++;
      break;

    default:
      cov_stf6d1vy9.b[1][2]++;
      cov_stf6d1vy9.s[7]++;
      break;
  }

  cov_stf6d1vy9.s[8]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZW5kVHlwaW5nSW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJzZW5kVHlwaW5nSW5kaWNhdG9yIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIlNFVF9TRU5EX1RZUElORyIsImNvbnNvbGUiLCJ3YXJuIiwic2VuZFR5cGluZyIsIlNFVF9TRU5EX1RZUElOR19JTkRJQ0FUT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSwwQkFBRyxLQUFILENBQW5COztBQUVlLFNBQVNDLG1CQUFULEdBQXVFO0FBQUEsTUFBMUNDLEtBQTBDLGlHQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBO0FBQUE7O0FBQ3BGLFVBQVFBLElBQVI7QUFDRTtBQUNBLFNBQUtDLDhCQUFMO0FBQUE7QUFBQTtBQUNFQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FDRSxxTEFERjtBQURGO0FBSUVMLE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDSyxVQUFoQjtBQUpGO0FBS0U7O0FBRUYsU0FBS0MsaURBQUw7QUFBQTtBQUFBO0FBQ0VQLE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDRixtQkFBaEI7QUFERjtBQUVFOztBQUVGO0FBQUE7QUFBQTtBQUNFO0FBZEo7O0FBRG9GO0FBa0JwRixTQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfU0VORF9UWVBJTkcgfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRUeXBpbmcnO1xuaW1wb3J0IHsgU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiB9IGZyb20gJy4uL2FjdGlvbnMvc2V0U2VuZFR5cGluZ0luZGljYXRvcic7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VuZFR5cGluZ0luZGljYXRvcihzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIC8vIFRPRE86IFtQM10gVGFrZSB0aGlzIGRlcHJlY2F0aW9uIGNvZGUgb3V0IHdoZW4gcmVsZWFzaW5nIG9uIG9yIGFmdGVyIDIwMjAgSmFudWFyeSAxM1xuICAgIGNhc2UgU0VUX1NFTkRfVFlQSU5HOlxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnV2ViIENoYXQ6IFwic2VuZFR5cGluZ1wiIGhhcyBiZWVuIHJlbmFtZWQgdG8gXCJzZW5kVHlwaW5nSW5kaWNhdG9yXCIuIFBsZWFzZSB1c2UgXCJzZW5kVHlwaW5nSW5kaWNhdG9yXCIgaW5zdGVhZC4gVGhpcyBkZXByZWNhdGlvbiBtaWdyYXRpb24gd2lsbCBiZSByZW1vdmVkIG9uIG9yIGFmdGVyIEphbnVhcnkgMTMgMjAyMC4nXG4gICAgICApO1xuICAgICAgc3RhdGUgPSBwYXlsb2FkLnNlbmRUeXBpbmc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUjpcbiAgICAgIHN0YXRlID0gcGF5bG9hZC5zZW5kVHlwaW5nSW5kaWNhdG9yO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
