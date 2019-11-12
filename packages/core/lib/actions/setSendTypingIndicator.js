'use strict';

var cov_11ceukhgyc = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setSendTypingIndicator.js';
  var hash = '1ba8cae3ccfaf6bc0a1e322595b37a126cf5f57a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setSendTypingIndicator.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 34
        },
        end: {
          line: 1,
          column: 70
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
        name: 'setSendTypingIndicator',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 46
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
    hash: '1ba8cae3ccfaf6bc0a1e322595b37a126cf5f57a'
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
exports['default'] = setSendTypingIndicator;
exports.SET_SEND_TYPING_INDICATOR = void 0;
var SET_SEND_TYPING_INDICATOR = (cov_11ceukhgyc.s[0]++, 'WEB_CHAT/SET_SEND_TYPING_INDICATOR');
exports.SET_SEND_TYPING_INDICATOR = SET_SEND_TYPING_INDICATOR;

function setSendTypingIndicator(value) {
  cov_11ceukhgyc.f[0]++;
  cov_11ceukhgyc.s[1]++;
  return {
    type: SET_SEND_TYPING_INDICATOR,
    payload: {
      sendTypingIndicator: !!value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldFNlbmRUeXBpbmdJbmRpY2F0b3IuanMiXSwibmFtZXMiOlsiU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiIsInNldFNlbmRUeXBpbmdJbmRpY2F0b3IiLCJ2YWx1ZSIsInR5cGUiLCJwYXlsb2FkIiwic2VuZFR5cGluZ0luZGljYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSx5QkFBeUIsMkJBQUcsb0NBQUgsQ0FBL0I7OztBQUVlLFNBQVNDLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUFBO0FBQUE7QUFDcEQsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVILHlCQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxtQkFBbUIsRUFBRSxDQUFDLENBQUNIO0FBQXpCO0FBRkosR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiA9ICdXRUJfQ0hBVC9TRVRfU0VORF9UWVBJTkdfSU5ESUNBVE9SJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2VuZFR5cGluZ0luZGljYXRvcih2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TRU5EX1RZUElOR19JTkRJQ0FUT1IsXG4gICAgcGF5bG9hZDogeyBzZW5kVHlwaW5nSW5kaWNhdG9yOiAhIXZhbHVlIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiB9O1xuIl19
