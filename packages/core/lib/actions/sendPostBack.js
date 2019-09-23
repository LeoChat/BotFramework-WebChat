'use strict';

var cov_k55kx26jc = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/sendPostBack.js';
  var hash = '22f8159e2e04356205bb7e3f36b4f99206d8c8dd';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/sendPostBack.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 23
        },
        end: {
          line: 1,
          column: 48
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
        name: 'sendPostback',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 36
          }
        },
        loc: {
          start: {
            line: 3,
            column: 44
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
    hash: '22f8159e2e04356205bb7e3f36b4f99206d8c8dd'
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
exports['default'] = sendPostback;
exports.SEND_POST_BACK = void 0;
var SEND_POST_BACK = (cov_k55kx26jc.s[0]++, 'WEB_CHAT/SEND_POST_BACK');
exports.SEND_POST_BACK = SEND_POST_BACK;

function sendPostback(value) {
  cov_k55kx26jc.f[0]++;
  cov_k55kx26jc.s[1]++;
  return {
    type: SEND_POST_BACK,
    payload: {
      value: value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NlbmRQb3N0QmFjay5qcyJdLCJuYW1lcyI6WyJTRU5EX1BPU1RfQkFDSyIsInNlbmRQb3N0YmFjayIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYywwQkFBRyx5QkFBSCxDQUFwQjs7O0FBRWUsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTtBQUFBO0FBQzFDLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFSCxjQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRTtBQUFFRixNQUFBQSxLQUFLLEVBQUxBO0FBQUY7QUFGSixHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTRU5EX1BPU1RfQkFDSyA9ICdXRUJfQ0hBVC9TRU5EX1BPU1RfQkFDSyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRQb3N0YmFjayh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFTkRfUE9TVF9CQUNLLFxuICAgIHBheWxvYWQ6IHsgdmFsdWUgfVxuICB9O1xufVxuXG5leHBvcnQgeyBTRU5EX1BPU1RfQkFDSyB9O1xuIl19
