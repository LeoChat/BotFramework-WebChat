'use strict';

var cov_29pe7xtxy5 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setSendTimeout.js';
  var hash = '6fc09b5c87015b67e1f4a84999896c2d353a4db1';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/setSendTimeout.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 25
        },
        end: {
          line: 1,
          column: 52
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
        name: 'setSendTimeout',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 38
          }
        },
        loc: {
          start: {
            line: 3,
            column: 52
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
    hash: '6fc09b5c87015b67e1f4a84999896c2d353a4db1'
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
exports['default'] = setSendTimeout;
exports.SET_SEND_TIMEOUT = void 0;
var SET_SEND_TIMEOUT = (cov_29pe7xtxy5.s[0]++, 'WEB_CHAT/SET_SEND_TIMEOUT');
exports.SET_SEND_TIMEOUT = SET_SEND_TIMEOUT;

function setSendTimeout(sendTimeout) {
  cov_29pe7xtxy5.f[0]++;
  cov_29pe7xtxy5.s[1]++;
  return {
    type: SET_SEND_TIMEOUT,
    payload: {
      sendTimeout: sendTimeout
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldFNlbmRUaW1lb3V0LmpzIl0sIm5hbWVzIjpbIlNFVF9TRU5EX1RJTUVPVVQiLCJzZXRTZW5kVGltZW91dCIsInNlbmRUaW1lb3V0IiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCLDJCQUFHLDJCQUFILENBQXRCOzs7QUFFZSxTQUFTQyxjQUFULENBQXdCQyxXQUF4QixFQUFxQztBQUFBO0FBQUE7QUFDbEQsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVILGdCQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRTtBQUFFRixNQUFBQSxXQUFXLEVBQVhBO0FBQUY7QUFGSixHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTRVRfU0VORF9USU1FT1VUID0gJ1dFQl9DSEFUL1NFVF9TRU5EX1RJTUVPVVQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTZW5kVGltZW91dChzZW5kVGltZW91dCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TRU5EX1RJTUVPVVQsXG4gICAgcGF5bG9hZDogeyBzZW5kVGltZW91dCB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFNFVF9TRU5EX1RJTUVPVVQgfTtcbiJdfQ==
