'use strict';

var cov_1629q2kxqi = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setDictateState.js';
  var hash = 'af1e71611368a58c9a67c1514482c85c72e503c3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setDictateState.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 26
        },
        end: {
          line: 1,
          column: 54
        }
      },
      '1': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 7,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'setDictateState',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 39
          }
        },
        loc: {
          start: {
            line: 3,
            column: 54
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'af1e71611368a58c9a67c1514482c85c72e503c3'
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
exports['default'] = setDictateState;
exports.SET_DICTATE_STATE = void 0;
var SET_DICTATE_STATE = (cov_1629q2kxqi.s[0]++, 'WEB_CHAT/SET_DICTATE_STATE');
exports.SET_DICTATE_STATE = SET_DICTATE_STATE;

function setDictateState(dictateState) {
  cov_1629q2kxqi.f[0]++;
  cov_1629q2kxqi.s[1]++;
  return {
    type: SET_DICTATE_STATE,
    payload: {
      dictateState: dictateState
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldERpY3RhdGVTdGF0ZS5qcyJdLCJuYW1lcyI6WyJTRVRfRElDVEFURV9TVEFURSIsInNldERpY3RhdGVTdGF0ZSIsImRpY3RhdGVTdGF0ZSIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGlCQUFpQiwyQkFBRyw0QkFBSCxDQUF2Qjs7O0FBRWUsU0FBU0MsZUFBVCxDQUF5QkMsWUFBekIsRUFBdUM7QUFBQTtBQUFBO0FBQ3BELFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFSCxpQkFERDtBQUVMSSxJQUFBQSxPQUFPLEVBQUU7QUFBRUYsTUFBQUEsWUFBWSxFQUFaQTtBQUFGO0FBRkosR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU0VUX0RJQ1RBVEVfU1RBVEUgPSAnV0VCX0NIQVQvU0VUX0RJQ1RBVEVfU1RBVEUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXREaWN0YXRlU3RhdGUoZGljdGF0ZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0RJQ1RBVEVfU1RBVEUsXG4gICAgcGF5bG9hZDogeyBkaWN0YXRlU3RhdGUgfVxuICB9O1xufVxuXG5leHBvcnQgeyBTRVRfRElDVEFURV9TVEFURSB9O1xuIl19
