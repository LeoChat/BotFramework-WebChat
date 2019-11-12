'use strict';

var cov_1dsm14fieq = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/submitSendBox.js';
  var hash = '2b9f5d70965cabd64674b91ec3aa69b8cd79f31f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/submitSendBox.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 1,
          column: 50
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
        name: 'submitSendBox',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 37
          }
        },
        loc: {
          start: {
            line: 3,
            column: 59
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 3,
            column: 38
          },
          end: {
            line: 3,
            column: 57
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 3,
              column: 47
            },
            end: {
              line: 3,
              column: 57
            }
          }
        ],
        line: 3
      }
    },
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '2b9f5d70965cabd64674b91ec3aa69b8cd79f31f'
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
exports['default'] = submitSendBox;
exports.SUBMIT_SEND_BOX = void 0;
var SUBMIT_SEND_BOX = (cov_1dsm14fieq.s[0]++, 'WEB_CHAT/SUBMIT_SEND_BOX');
exports.SUBMIT_SEND_BOX = SUBMIT_SEND_BOX;

function submitSendBox() {
  var method =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1dsm14fieq.b[0][0]++, 'keyboard');
  cov_1dsm14fieq.f[0]++;
  cov_1dsm14fieq.s[1]++;
  return {
    type: SUBMIT_SEND_BOX,
    payload: {
      method: method
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3N1Ym1pdFNlbmRCb3guanMiXSwibmFtZXMiOlsiU1VCTUlUX1NFTkRfQk9YIiwic3VibWl0U2VuZEJveCIsIm1ldGhvZCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWUsMkJBQUcsMEJBQUgsQ0FBckI7OztBQUVlLFNBQVNDLGFBQVQsR0FBNEM7QUFBQSxNQUFyQkMsTUFBcUIsa0dBQVosVUFBWTtBQUFBO0FBQUE7QUFDekQsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVILGVBREQ7QUFFTEksSUFBQUEsT0FBTyxFQUFFO0FBQUVGLE1BQUFBLE1BQU0sRUFBTkE7QUFBRjtBQUZKLEdBQVA7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNVQk1JVF9TRU5EX0JPWCA9ICdXRUJfQ0hBVC9TVUJNSVRfU0VORF9CT1gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJtaXRTZW5kQm94KG1ldGhvZCA9ICdrZXlib2FyZCcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTVUJNSVRfU0VORF9CT1gsXG4gICAgcGF5bG9hZDogeyBtZXRob2QgfVxuICB9O1xufVxuXG5leHBvcnQgeyBTVUJNSVRfU0VORF9CT1ggfTtcbiJdfQ==
