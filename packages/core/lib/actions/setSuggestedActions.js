'use strict';

var cov_2qkg2wnt25 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/setSuggestedActions.js';
  var hash = 'ed0d12db6e598d22d1025b816b4c388d4ead2ed6';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/setSuggestedActions.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 20
        },
        end: {
          line: 1,
          column: 22
        }
      },
      '1': {
        start: {
          line: 3,
          column: 30
        },
        end: {
          line: 3,
          column: 62
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'setSuggestedActions',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 43
          }
        },
        loc: {
          start: {
            line: 5,
            column: 76
          },
          end: {
            line: 10,
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
            column: 44
          },
          end: {
            line: 5,
            column: 74
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 5,
              column: 63
            },
            end: {
              line: 5,
              column: 74
            }
          }
        ],
        line: 5
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'ed0d12db6e598d22d1025b816b4c388d4ead2ed6'
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
exports['default'] = setSuggestedActions;
exports.SET_SUGGESTED_ACTIONS = void 0;
var EMPTY_ARRAY = (cov_2qkg2wnt25.s[0]++, []);
var SET_SUGGESTED_ACTIONS = (cov_2qkg2wnt25.s[1]++, 'WEB_CHAT/SET_SUGGESTED_ACTIONS');
exports.SET_SUGGESTED_ACTIONS = SET_SUGGESTED_ACTIONS;

function setSuggestedActions() {
  var suggestedActions =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2qkg2wnt25.b[0][0]++, EMPTY_ARRAY);
  cov_2qkg2wnt25.f[0]++;
  cov_2qkg2wnt25.s[2]++;
  return {
    type: SET_SUGGESTED_ACTIONS,
    payload: {
      suggestedActions: suggestedActions
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldFN1Z2dlc3RlZEFjdGlvbnMuanMiXSwibmFtZXMiOlsiRU1QVFlfQVJSQVkiLCJTRVRfU1VHR0VTVEVEX0FDVElPTlMiLCJzZXRTdWdnZXN0ZWRBY3Rpb25zIiwic3VnZ2VzdGVkQWN0aW9ucyIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVywyQkFBRyxFQUFILENBQWpCO0FBRUEsSUFBTUMscUJBQXFCLDJCQUFHLGdDQUFILENBQTNCOzs7QUFFZSxTQUFTQyxtQkFBVCxHQUE2RDtBQUFBLE1BQWhDQyxnQkFBZ0Msa0dBQWJILFdBQWE7QUFBQTtBQUFBO0FBQzFFLFNBQU87QUFDTEksSUFBQUEsSUFBSSxFQUFFSCxxQkFERDtBQUVMSSxJQUFBQSxPQUFPLEVBQUU7QUFBRUYsTUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUFGO0FBRkosR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRU1QVFlfQVJSQVkgPSBbXTtcblxuY29uc3QgU0VUX1NVR0dFU1RFRF9BQ1RJT05TID0gJ1dFQl9DSEFUL1NFVF9TVUdHRVNURURfQUNUSU9OUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN1Z2dlc3RlZEFjdGlvbnMoc3VnZ2VzdGVkQWN0aW9ucyA9IEVNUFRZX0FSUkFZKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1NVR0dFU1RFRF9BQ1RJT05TLFxuICAgIHBheWxvYWQ6IHsgc3VnZ2VzdGVkQWN0aW9ucyB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFNFVF9TVUdHRVNURURfQUNUSU9OUyB9O1xuIl19
