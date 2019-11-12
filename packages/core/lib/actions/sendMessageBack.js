'use strict';

var cov_24dvhpglr0 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/sendMessageBack.js';
  var hash = '8f570cf7133cc68cb8aa49c352928e18f63aecd5';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/sendMessageBack.js',
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
        name: 'sendMessageback',
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
            column: 66
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
    hash: '8f570cf7133cc68cb8aa49c352928e18f63aecd5'
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
exports['default'] = sendMessageback;
exports.SEND_MESSAGE_BACK = void 0;
var SEND_MESSAGE_BACK = (cov_24dvhpglr0.s[0]++, 'WEB_CHAT/SEND_MESSAGE_BACK');
exports.SEND_MESSAGE_BACK = SEND_MESSAGE_BACK;

function sendMessageback(value, text, displayText) {
  cov_24dvhpglr0.f[0]++;
  cov_24dvhpglr0.s[1]++;
  return {
    type: SEND_MESSAGE_BACK,
    payload: {
      displayText: displayText,
      text: text,
      value: value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NlbmRNZXNzYWdlQmFjay5qcyJdLCJuYW1lcyI6WyJTRU5EX01FU1NBR0VfQkFDSyIsInNlbmRNZXNzYWdlYmFjayIsInZhbHVlIiwidGV4dCIsImRpc3BsYXlUZXh0IiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWlCLDJCQUFHLDRCQUFILENBQXZCOzs7QUFFZSxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0MsSUFBaEMsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7QUFBQTtBQUNoRSxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUwsaUJBREQ7QUFFTE0sSUFBQUEsT0FBTyxFQUFFO0FBQUVGLE1BQUFBLFdBQVcsRUFBWEEsV0FBRjtBQUFlRCxNQUFBQSxJQUFJLEVBQUpBLElBQWY7QUFBcUJELE1BQUFBLEtBQUssRUFBTEE7QUFBckI7QUFGSixHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTRU5EX01FU1NBR0VfQkFDSyA9ICdXRUJfQ0hBVC9TRU5EX01FU1NBR0VfQkFDSyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlYmFjayh2YWx1ZSwgdGV4dCwgZGlzcGxheVRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRU5EX01FU1NBR0VfQkFDSyxcbiAgICBwYXlsb2FkOiB7IGRpc3BsYXlUZXh0LCB0ZXh0LCB2YWx1ZSB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFNFTkRfTUVTU0FHRV9CQUNLIH07XG4iXX0=
