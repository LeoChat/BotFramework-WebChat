'use strict';

var cov_e6ch5ru3n = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/whileConnected.js';
  var hash = 'dc90f2217a47c820f3141c9165b30938ac2bf8b6';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/effects/whileConnected.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 21,
          column: 5
        }
      },
      '1': {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      '2': {
        start: {
          line: 13,
          column: 10
        },
        end: {
          line: 13,
          column: 64
        }
      },
      '3': {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 14,
          column: 67
        }
      },
      '4': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 58
        }
      },
      '5': {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 25
        }
      }
    },
    fnMap: {
      '0': {
        name: 'whileConnectedEffect',
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 44
          }
        },
        loc: {
          start: {
            line: 7,
            column: 49
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: 'whileConnected',
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 38
          }
        },
        loc: {
          start: {
            line: 8,
            column: 41
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'dc90f2217a47c820f3141c9165b30938ac2bf8b6'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = whileConnectedEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _connect = require('../../actions/connect');

var _disconnect = require('../../actions/disconnect');

var _reconnect = require('../../actions/reconnect');

function whileConnectedEffect(fn) {
  cov_e6ch5ru3n.f[0]++;
  cov_e6ch5ru3n.s[0]++;
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function whileConnected() {
      var _ref, _ref$meta, userID, username, directLine, task;

      return _regenerator['default'].wrap(function whileConnected$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              cov_e6ch5ru3n.f[1]++;
              cov_e6ch5ru3n.s[1]++;

            case 2:
              cov_e6ch5ru3n.s[2]++;
              _context.next = 5;
              return (0, _effects.take)([_connect.CONNECT_FULFILLING, _reconnect.RECONNECT_FULFILLING]);

            case 5:
              _ref = _context.sent;
              _ref$meta = _ref.meta;
              userID = _ref$meta.userID;
              username = _ref$meta.username;
              directLine = _ref.payload.directLine;
              cov_e6ch5ru3n.s[3]++;
              _context.next = 13;
              return (0, _effects.fork)(fn, {
                directLine: directLine,
                userID: userID,
                username: username
              });

            case 13:
              task = _context.sent;
              cov_e6ch5ru3n.s[4]++;
              _context.next = 17;
              return (0, _effects.take)([_disconnect.DISCONNECT_PENDING, _reconnect.RECONNECT_PENDING]);

            case 17:
              cov_e6ch5ru3n.s[5]++;
              _context.next = 20;
              return (0, _effects.cancel)(task);

            case 20:
              _context.next = 2;
              break;

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, whileConnected);
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL3doaWxlQ29ubmVjdGVkLmpzIl0sIm5hbWVzIjpbIndoaWxlQ29ubmVjdGVkRWZmZWN0IiwiZm4iLCJ3aGlsZUNvbm5lY3RlZCIsIkNPTk5FQ1RfRlVMRklMTElORyIsIlJFQ09OTkVDVF9GVUxGSUxMSU5HIiwibWV0YSIsInVzZXJJRCIsInVzZXJuYW1lIiwiZGlyZWN0TGluZSIsInBheWxvYWQiLCJ0YXNrIiwiRElTQ09OTkVDVF9QRU5ESU5HIiwiUkVDT05ORUNUX1BFTkRJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVlLFNBQVNBLG9CQUFULENBQThCQyxFQUE5QixFQUFrQztBQUFBO0FBQUE7QUFDL0MsU0FBTztBQUFBO0FBQUEsK0JBQUssU0FBVUMsY0FBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLSixtQkFBTSxtQkFBSyxDQUFDQywyQkFBRCxFQUFxQkMsK0JBQXJCLENBQUwsQ0FBTjs7QUFMSTtBQUFBO0FBQUEsNkJBR05DLElBSE07QUFHRUMsWUFBQUEsTUFIRixhQUdFQSxNQUhGO0FBR1VDLFlBQUFBLFFBSFYsYUFHVUEsUUFIVjtBQUlLQyxZQUFBQSxVQUpMLFFBSU5DLE9BSk0sQ0FJS0QsVUFKTDtBQUFBO0FBQUE7QUFNSyxtQkFBTSxtQkFBS1AsRUFBTCxFQUFTO0FBQUVPLGNBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjRixjQUFBQSxNQUFNLEVBQU5BLE1BQWQ7QUFBc0JDLGNBQUFBLFFBQVEsRUFBUkE7QUFBdEIsYUFBVCxDQUFOOztBQU5MO0FBTUZHLFlBQUFBLElBTkU7QUFBQTtBQUFBO0FBVVIsbUJBQU0sbUJBQUssQ0FBQ0MsOEJBQUQsRUFBcUJDLDRCQUFyQixDQUFMLENBQU47O0FBVlE7QUFBQTtBQUFBO0FBV1IsbUJBQU0scUJBQU9GLElBQVAsQ0FBTjs7QUFYUTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVVSLGNBQVY7QUFBQSxHQUFMLEVBQVA7QUFjRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGwsIGNhbmNlbCwgZm9yaywgdGFrZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB7IENPTk5FQ1RfRlVMRklMTElORyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29ubmVjdCc7XG5pbXBvcnQgeyBESVNDT05ORUNUX1BFTkRJTkcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2Nvbm5lY3QnO1xuaW1wb3J0IHsgUkVDT05ORUNUX1BFTkRJTkcsIFJFQ09OTkVDVF9GVUxGSUxMSU5HIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZWNvbm5lY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aGlsZUNvbm5lY3RlZEVmZmVjdChmbikge1xuICByZXR1cm4gY2FsbChmdW5jdGlvbiogd2hpbGVDb25uZWN0ZWQoKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRhOiB7IHVzZXJJRCwgdXNlcm5hbWUgfSxcbiAgICAgICAgcGF5bG9hZDogeyBkaXJlY3RMaW5lIH1cbiAgICAgIH0gPSB5aWVsZCB0YWtlKFtDT05ORUNUX0ZVTEZJTExJTkcsIFJFQ09OTkVDVF9GVUxGSUxMSU5HXSk7XG4gICAgICBjb25zdCB0YXNrID0geWllbGQgZm9yayhmbiwgeyBkaXJlY3RMaW5lLCB1c2VySUQsIHVzZXJuYW1lIH0pO1xuXG4gICAgICAvLyBXaGVuIHdlIHJlY2VpdmUgRElTQ09OTkVDVF9QRU5ESU5HIG9yIFJFQ09OTkVDVF9QRU5ESU5HLCB0aGUgRGlyZWN0IExpbmUgY29ubmVjdGlvbiBpcyBjdXJyZW50bHkgYnVzeSBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXG4gICAgICB5aWVsZCB0YWtlKFtESVNDT05ORUNUX1BFTkRJTkcsIFJFQ09OTkVDVF9QRU5ESU5HXSk7XG4gICAgICB5aWVsZCBjYW5jZWwodGFzayk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
