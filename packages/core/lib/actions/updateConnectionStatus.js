'use strict';

var cov_2q6d8l06fx = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/updateConnectionStatus.js';
  var hash = '92d6f2143066c75f5e8f51ae7733df8b841edc6e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/updateConnectionStatus.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 33
        },
        end: {
          line: 1,
          column: 71
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
        name: 'updateConnectionStatus',
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
            column: 65
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
    hash: '92d6f2143066c75f5e8f51ae7733df8b841edc6e'
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
exports['default'] = updateConnectionStatus;
exports.UPDATE_CONNECTION_STATUS = void 0;
var UPDATE_CONNECTION_STATUS = (cov_2q6d8l06fx.s[0]++, 'DIRECT_LINE/UPDATE_CONNECTION_STATUS');
exports.UPDATE_CONNECTION_STATUS = UPDATE_CONNECTION_STATUS;

function updateConnectionStatus(connectionStatus) {
  cov_2q6d8l06fx.f[0]++;
  cov_2q6d8l06fx.s[1]++;
  return {
    type: UPDATE_CONNECTION_STATUS,
    payload: {
      connectionStatus: connectionStatus
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VwZGF0ZUNvbm5lY3Rpb25TdGF0dXMuanMiXSwibmFtZXMiOlsiVVBEQVRFX0NPTk5FQ1RJT05fU1RBVFVTIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3Rpb25TdGF0dXMiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSx3QkFBd0IsMkJBQUcsc0NBQUgsQ0FBOUI7OztBQUVlLFNBQVNDLHNCQUFULENBQWdDQyxnQkFBaEMsRUFBa0Q7QUFBQTtBQUFBO0FBQy9ELFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFSCx3QkFERDtBQUVMSSxJQUFBQSxPQUFPLEVBQUU7QUFBRUYsTUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUFGO0FBRkosR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVVBEQVRFX0NPTk5FQ1RJT05fU1RBVFVTID0gJ0RJUkVDVF9MSU5FL1VQREFURV9DT05ORUNUSU9OX1NUQVRVUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMoY29ubmVjdGlvblN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9DT05ORUNUSU9OX1NUQVRVUyxcbiAgICBwYXlsb2FkOiB7IGNvbm5lY3Rpb25TdGF0dXMgfVxuICB9O1xufVxuXG5leHBvcnQgeyBVUERBVEVfQ09OTkVDVElPTl9TVEFUVVMgfTtcbiJdfQ==
