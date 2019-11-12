'use strict';

var cov_zic0j6vv5 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/disconnect.js';
  var hash = 'c59db7401e670e90d5993067148763bdd082fe4d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/disconnect.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 1,
          column: 43
        }
      },
      '1': {
        start: {
          line: 2,
          column: 27
        },
        end: {
          line: 2,
          column: 50
        }
      },
      '2': {
        start: {
          line: 3,
          column: 28
        },
        end: {
          line: 3,
          column: 52
        }
      },
      '3': {
        start: {
          line: 4,
          column: 29
        },
        end: {
          line: 4,
          column: 54
        }
      },
      '4': {
        start: {
          line: 7,
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
        name: 'disconnect',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 34
          }
        },
        loc: {
          start: {
            line: 6,
            column: 37
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c59db7401e670e90d5993067148763bdd082fe4d'
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
exports['default'] = disconnect;
exports.DISCONNECT_FULFILLED = exports.DISCONNECT_REJECTED = exports.DISCONNECT_PENDING = exports.DISCONNECT = void 0;
var DISCONNECT = (cov_zic0j6vv5.s[0]++, 'DIRECT_LINE/DISCONNECT');
exports.DISCONNECT = DISCONNECT;
var DISCONNECT_PENDING = (cov_zic0j6vv5.s[1]++, ''.concat(DISCONNECT, '_PENDING'));
exports.DISCONNECT_PENDING = DISCONNECT_PENDING;
var DISCONNECT_REJECTED = (cov_zic0j6vv5.s[2]++, ''.concat(DISCONNECT, '_REJECTED'));
exports.DISCONNECT_REJECTED = DISCONNECT_REJECTED;
var DISCONNECT_FULFILLED = (cov_zic0j6vv5.s[3]++, ''.concat(DISCONNECT, '_FULFILLED'));
exports.DISCONNECT_FULFILLED = DISCONNECT_FULFILLED;

function disconnect() {
  cov_zic0j6vv5.f[0]++;
  cov_zic0j6vv5.s[4]++;
  return {
    type: DISCONNECT
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2Rpc2Nvbm5lY3QuanMiXSwibmFtZXMiOlsiRElTQ09OTkVDVCIsIkRJU0NPTk5FQ1RfUEVORElORyIsIkRJU0NPTk5FQ1RfUkVKRUNURUQiLCJESVNDT05ORUNUX0ZVTEZJTExFRCIsImRpc2Nvbm5lY3QiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsMEJBQUcsd0JBQUgsQ0FBaEI7O0FBQ0EsSUFBTUMsa0JBQWtCLG9DQUFNRCxVQUFOLGNBQXhCOztBQUNBLElBQU1FLG1CQUFtQixvQ0FBTUYsVUFBTixlQUF6Qjs7QUFDQSxJQUFNRyxvQkFBb0Isb0NBQU1ILFVBQU4sZ0JBQTFCOzs7QUFFZSxTQUFTSSxVQUFULEdBQXNCO0FBQUE7QUFBQTtBQUNuQyxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUw7QUFERCxHQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBESVNDT05ORUNUID0gJ0RJUkVDVF9MSU5FL0RJU0NPTk5FQ1QnO1xuY29uc3QgRElTQ09OTkVDVF9QRU5ESU5HID0gYCR7RElTQ09OTkVDVH1fUEVORElOR2A7XG5jb25zdCBESVNDT05ORUNUX1JFSkVDVEVEID0gYCR7RElTQ09OTkVDVH1fUkVKRUNURURgO1xuY29uc3QgRElTQ09OTkVDVF9GVUxGSUxMRUQgPSBgJHtESVNDT05ORUNUfV9GVUxGSUxMRURgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IERJU0NPTk5FQ1RcbiAgfTtcbn1cblxuZXhwb3J0IHsgRElTQ09OTkVDVCwgRElTQ09OTkVDVF9QRU5ESU5HLCBESVNDT05ORUNUX1JFSkVDVEVELCBESVNDT05ORUNUX0ZVTEZJTExFRCB9O1xuIl19
