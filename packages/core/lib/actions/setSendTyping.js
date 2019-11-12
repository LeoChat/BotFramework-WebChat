'use strict';

var cov_t5tq51zs3 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setSendTyping.js';
  var hash = 'd9485fd608ed0e23dbb630fc0d185f6d3a5364f5';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setSendTyping.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 24
        },
        end: {
          line: 2,
          column: 50
        }
      },
      '1': {
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
        name: 'setSendTyping',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 37
          }
        },
        loc: {
          start: {
            line: 4,
            column: 45
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 4
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
    hash: 'd9485fd608ed0e23dbb630fc0d185f6d3a5364f5'
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
exports['default'] = setSendTyping;
exports.SET_SEND_TYPING = void 0;
// TODO: [P3] Take this deprecation code out when releasing on or after 2020 January 13
var SET_SEND_TYPING = (cov_t5tq51zs3.s[0]++, 'WEB_CHAT/SET_SEND_TYPING');
exports.SET_SEND_TYPING = SET_SEND_TYPING;

function setSendTyping(value) {
  cov_t5tq51zs3.f[0]++;
  cov_t5tq51zs3.s[1]++;
  // Deprecation notes added to reducer
  return {
    type: SET_SEND_TYPING,
    payload: {
      sendTyping: !!value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldFNlbmRUeXBpbmcuanMiXSwibmFtZXMiOlsiU0VUX1NFTkRfVFlQSU5HIiwic2V0U2VuZFR5cGluZyIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJzZW5kVHlwaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsZUFBZSwwQkFBRywwQkFBSCxDQUFyQjs7O0FBRWUsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTtBQUFBO0FBQzNDO0FBQ0EsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVILGVBREQ7QUFFTEksSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLFVBQVUsRUFBRSxDQUFDLENBQUNIO0FBQWhCO0FBRkosR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogW1AzXSBUYWtlIHRoaXMgZGVwcmVjYXRpb24gY29kZSBvdXQgd2hlbiByZWxlYXNpbmcgb24gb3IgYWZ0ZXIgMjAyMCBKYW51YXJ5IDEzXG5jb25zdCBTRVRfU0VORF9UWVBJTkcgPSAnV0VCX0NIQVQvU0VUX1NFTkRfVFlQSU5HJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2VuZFR5cGluZyh2YWx1ZSkge1xuICAvLyBEZXByZWNhdGlvbiBub3RlcyBhZGRlZCB0byByZWR1Y2VyXG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1NFTkRfVFlQSU5HLFxuICAgIHBheWxvYWQ6IHsgc2VuZFR5cGluZzogISF2YWx1ZSB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFNFVF9TRU5EX1RZUElORyB9O1xuIl19
