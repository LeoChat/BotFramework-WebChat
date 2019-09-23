'use strict';

var cov_2b81uph5x0 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/connectionStatusUpdate.js';
  var hash = '414173040aa92289f46d0e51fb4cbb40271ef28c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/connectionStatusUpdate.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 33
        },
        end: {
          line: 3,
          column: 71
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
        name: 'connectionStatusUpdate',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 46
          }
        },
        loc: {
          start: {
            line: 5,
            column: 65
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 5
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
    hash: '414173040aa92289f46d0e51fb4cbb40271ef28c'
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
exports['default'] = connectionStatusUpdate;
exports.CONNECTION_STATUS_UPDATE = void 0;
// TODO: [P3] We should obsolete this action in favor of DIRECT_LINE/UPDATE_CONNECTION_STATUS.
//       But today, both actions behave differently, this one only dispatch after connected and not dispatched when disconnected.
var CONNECTION_STATUS_UPDATE = (cov_2b81uph5x0.s[0]++, 'DIRECT_LINE/CONNECTION_STATUS_UPDATE');
exports.CONNECTION_STATUS_UPDATE = CONNECTION_STATUS_UPDATE;

function connectionStatusUpdate(connectionStatus) {
  cov_2b81uph5x0.f[0]++;
  cov_2b81uph5x0.s[1]++;
  return {
    type: CONNECTION_STATUS_UPDATE,
    payload: {
      connectionStatus: connectionStatus
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2Nvbm5lY3Rpb25TdGF0dXNVcGRhdGUuanMiXSwibmFtZXMiOlsiQ09OTkVDVElPTl9TVEFUVVNfVVBEQVRFIiwiY29ubmVjdGlvblN0YXR1c1VwZGF0ZSIsImNvbm5lY3Rpb25TdGF0dXMiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsd0JBQXdCLDJCQUFHLHNDQUFILENBQTlCOzs7QUFFZSxTQUFTQyxzQkFBVCxDQUFnQ0MsZ0JBQWhDLEVBQWtEO0FBQUE7QUFBQTtBQUMvRCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUgsd0JBREQ7QUFFTEksSUFBQUEsT0FBTyxFQUFFO0FBQUVGLE1BQUFBLGdCQUFnQixFQUFoQkE7QUFBRjtBQUZKLEdBQVA7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFtQM10gV2Ugc2hvdWxkIG9ic29sZXRlIHRoaXMgYWN0aW9uIGluIGZhdm9yIG9mIERJUkVDVF9MSU5FL1VQREFURV9DT05ORUNUSU9OX1NUQVRVUy5cbi8vICAgICAgIEJ1dCB0b2RheSwgYm90aCBhY3Rpb25zIGJlaGF2ZSBkaWZmZXJlbnRseSwgdGhpcyBvbmUgb25seSBkaXNwYXRjaCBhZnRlciBjb25uZWN0ZWQgYW5kIG5vdCBkaXNwYXRjaGVkIHdoZW4gZGlzY29ubmVjdGVkLlxuY29uc3QgQ09OTkVDVElPTl9TVEFUVVNfVVBEQVRFID0gJ0RJUkVDVF9MSU5FL0NPTk5FQ1RJT05fU1RBVFVTX1VQREFURSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3Rpb25TdGF0dXNVcGRhdGUoY29ubmVjdGlvblN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTk5FQ1RJT05fU1RBVFVTX1VQREFURSxcbiAgICBwYXlsb2FkOiB7IGNvbm5lY3Rpb25TdGF0dXMgfVxuICB9O1xufVxuXG5leHBvcnQgeyBDT05ORUNUSU9OX1NUQVRVU19VUERBVEUgfTtcbiJdfQ==
