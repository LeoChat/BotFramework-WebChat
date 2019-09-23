'use strict';

var cov_jq70q2ekm = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/connect.js';
  var hash = 'cf47e9e76d35cbbeea73262b85544d8d497167a2';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/connect.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 1,
          column: 37
        }
      },
      '1': {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 2,
          column: 48
        }
      },
      '2': {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 3,
          column: 50
        }
      },
      '3': {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 44
        }
      },
      '4': {
        start: {
          line: 5,
          column: 25
        },
        end: {
          line: 5,
          column: 46
        }
      },
      '5': {
        start: {
          line: 6,
          column: 30
        },
        end: {
          line: 6,
          column: 56
        }
      },
      '6': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 16,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'connect',
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 31
          }
        },
        loc: {
          start: {
            line: 8,
            column: 66
          },
          end: {
            line: 17,
            column: 1
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
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'cf47e9e76d35cbbeea73262b85544d8d497167a2'
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
exports['default'] = connect;
exports.CONNECT_STILL_PENDING = exports.CONNECT_REJECTED = exports.CONNECT_PENDING = exports.CONNECT_FULFILLING = exports.CONNECT_FULFILLED = exports.CONNECT = void 0;
var CONNECT = (cov_jq70q2ekm.s[0]++, 'DIRECT_LINE/CONNECT');
exports.CONNECT = CONNECT;
var CONNECT_FULFILLED = (cov_jq70q2ekm.s[1]++, ''.concat(CONNECT, '_FULFILLED'));
exports.CONNECT_FULFILLED = CONNECT_FULFILLED;
var CONNECT_FULFILLING = (cov_jq70q2ekm.s[2]++, ''.concat(CONNECT, '_FULFILLING'));
exports.CONNECT_FULFILLING = CONNECT_FULFILLING;
var CONNECT_PENDING = (cov_jq70q2ekm.s[3]++, ''.concat(CONNECT, '_PENDING'));
exports.CONNECT_PENDING = CONNECT_PENDING;
var CONNECT_REJECTED = (cov_jq70q2ekm.s[4]++, ''.concat(CONNECT, '_REJECTED'));
exports.CONNECT_REJECTED = CONNECT_REJECTED;
var CONNECT_STILL_PENDING = (cov_jq70q2ekm.s[5]++, ''.concat(CONNECT, '_STILL_PENDING'));
exports.CONNECT_STILL_PENDING = CONNECT_STILL_PENDING;

function connect(_ref) {
  var directLine = _ref.directLine,
    userID = _ref.userID,
    username = _ref.username;
  cov_jq70q2ekm.f[0]++;
  cov_jq70q2ekm.s[6]++;
  return {
    type: CONNECT,
    payload: {
      directLine: directLine,
      userID: userID,
      username: username
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2Nvbm5lY3QuanMiXSwibmFtZXMiOlsiQ09OTkVDVCIsIkNPTk5FQ1RfRlVMRklMTEVEIiwiQ09OTkVDVF9GVUxGSUxMSU5HIiwiQ09OTkVDVF9QRU5ESU5HIiwiQ09OTkVDVF9SRUpFQ1RFRCIsIkNPTk5FQ1RfU1RJTExfUEVORElORyIsImNvbm5lY3QiLCJkaXJlY3RMaW5lIiwidXNlcklEIiwidXNlcm5hbWUiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTywwQkFBRyxxQkFBSCxDQUFiOztBQUNBLElBQU1DLGlCQUFpQixvQ0FBTUQsT0FBTixnQkFBdkI7O0FBQ0EsSUFBTUUsa0JBQWtCLG9DQUFNRixPQUFOLGlCQUF4Qjs7QUFDQSxJQUFNRyxlQUFlLG9DQUFNSCxPQUFOLGNBQXJCOztBQUNBLElBQU1JLGdCQUFnQixvQ0FBTUosT0FBTixlQUF0Qjs7QUFDQSxJQUFNSyxxQkFBcUIsb0NBQU1MLE9BQU4sb0JBQTNCOzs7QUFFZSxTQUFTTSxPQUFULE9BQW1EO0FBQUEsTUFBaENDLFVBQWdDLFFBQWhDQSxVQUFnQztBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFBQTtBQUFBO0FBQ2hFLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFVixPQUREO0FBRUxXLElBQUFBLE9BQU8sRUFBRTtBQUNQSixNQUFBQSxVQUFVLEVBQVZBLFVBRE87QUFFUEMsTUFBQUEsTUFBTSxFQUFOQSxNQUZPO0FBR1BDLE1BQUFBLFFBQVEsRUFBUkE7QUFITztBQUZKLEdBQVA7QUFRRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTk5FQ1QgPSAnRElSRUNUX0xJTkUvQ09OTkVDVCc7XG5jb25zdCBDT05ORUNUX0ZVTEZJTExFRCA9IGAke0NPTk5FQ1R9X0ZVTEZJTExFRGA7XG5jb25zdCBDT05ORUNUX0ZVTEZJTExJTkcgPSBgJHtDT05ORUNUfV9GVUxGSUxMSU5HYDtcbmNvbnN0IENPTk5FQ1RfUEVORElORyA9IGAke0NPTk5FQ1R9X1BFTkRJTkdgO1xuY29uc3QgQ09OTkVDVF9SRUpFQ1RFRCA9IGAke0NPTk5FQ1R9X1JFSkVDVEVEYDtcbmNvbnN0IENPTk5FQ1RfU1RJTExfUEVORElORyA9IGAke0NPTk5FQ1R9X1NUSUxMX1BFTkRJTkdgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0KHsgZGlyZWN0TGluZSwgdXNlcklELCB1c2VybmFtZSB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09OTkVDVCxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBkaXJlY3RMaW5lLFxuICAgICAgdXNlcklELFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IENPTk5FQ1QsIENPTk5FQ1RfRlVMRklMTEVELCBDT05ORUNUX0ZVTEZJTExJTkcsIENPTk5FQ1RfUEVORElORywgQ09OTkVDVF9SRUpFQ1RFRCwgQ09OTkVDVF9TVElMTF9QRU5ESU5HIH07XG4iXX0=
