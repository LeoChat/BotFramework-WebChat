'use strict';

var cov_10l7edu6xr = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/sendEvent.js';
  var hash = 'a3d0f15bdeab1add9cea0e39b2277a7d1648d749';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/sendEvent.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 1,
          column: 40
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
        name: 'sendEvent',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 47
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
    hash: 'a3d0f15bdeab1add9cea0e39b2277a7d1648d749'
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
exports['default'] = sendEvent;
exports.SEND_EVENT = void 0;
var SEND_EVENT = (cov_10l7edu6xr.s[0]++, 'WEB_CHAT/SEND_EVENT');
exports.SEND_EVENT = SEND_EVENT;

function sendEvent(name, value) {
  cov_10l7edu6xr.f[0]++;
  cov_10l7edu6xr.s[1]++;
  return {
    type: SEND_EVENT,
    payload: {
      name: name,
      value: value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NlbmRFdmVudC5qcyJdLCJuYW1lcyI6WyJTRU5EX0VWRU5UIiwic2VuZEV2ZW50IiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSwyQkFBRyxxQkFBSCxDQUFoQjs7O0FBRWUsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQUE7QUFBQTtBQUM3QyxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUosVUFERDtBQUVMSyxJQUFBQSxPQUFPLEVBQUU7QUFBRUgsTUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFDLE1BQUFBLEtBQUssRUFBTEE7QUFBUjtBQUZKLEdBQVA7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNFTkRfRVZFTlQgPSAnV0VCX0NIQVQvU0VORF9FVkVOVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRFdmVudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFTkRfRVZFTlQsXG4gICAgcGF5bG9hZDogeyBuYW1lLCB2YWx1ZSB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFNFTkRfRVZFTlQgfTtcbiJdfQ==
