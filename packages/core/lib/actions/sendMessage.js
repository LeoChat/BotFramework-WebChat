'use strict';

var cov_2aqpt20etn = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/sendMessage.js';
  var hash = '9297e05cd370f4c55523b52660c698c0183740d1';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/sendMessage.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 21
        },
        end: {
          line: 1,
          column: 44
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
        name: 'sendMessage',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 35
          }
        },
        loc: {
          start: {
            line: 3,
            column: 50
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
    hash: '9297e05cd370f4c55523b52660c698c0183740d1'
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
exports['default'] = sendMessage;
exports.SEND_MESSAGE = void 0;
var SEND_MESSAGE = (cov_2aqpt20etn.s[0]++, 'WEB_CHAT/SEND_MESSAGE');
exports.SEND_MESSAGE = SEND_MESSAGE;

function sendMessage(text, method) {
  cov_2aqpt20etn.f[0]++;
  cov_2aqpt20etn.s[1]++;
  return {
    type: SEND_MESSAGE,
    payload: {
      method: method,
      text: text
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NlbmRNZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlNFTkRfTUVTU0FHRSIsInNlbmRNZXNzYWdlIiwidGV4dCIsIm1ldGhvZCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksMkJBQUcsdUJBQUgsQ0FBbEI7OztBQUVlLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxNQUEzQixFQUFtQztBQUFBO0FBQUE7QUFDaEQsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVKLFlBREQ7QUFFTEssSUFBQUEsT0FBTyxFQUFFO0FBQUVGLE1BQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVRCxNQUFBQSxJQUFJLEVBQUpBO0FBQVY7QUFGSixHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTRU5EX01FU1NBR0UgPSAnV0VCX0NIQVQvU0VORF9NRVNTQUdFJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UodGV4dCwgbWV0aG9kKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VORF9NRVNTQUdFLFxuICAgIHBheWxvYWQ6IHsgbWV0aG9kLCB0ZXh0IH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgU0VORF9NRVNTQUdFIH07XG4iXX0=
