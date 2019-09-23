'use strict';

var cov_1s30x36l4w = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/deleteActivity.js';
  var hash = '694ffda3afa4b85d4c607f1781679dc4b1b5b4e3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/deleteActivity.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 31
        },
        end: {
          line: 1,
          column: 60
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
        name: 'deleteActivity',
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
            column: 51
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
    hash: '694ffda3afa4b85d4c607f1781679dc4b1b5b4e3'
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
exports['default'] = deleteActivity;
exports.DELETE_ACTIVITY = void 0;
var DELETE_ACTIVITY = (cov_1s30x36l4w.s[0]++, 'DIRECT_LINE/DELETE_ACTIVITY');
exports.DELETE_ACTIVITY = DELETE_ACTIVITY;

function deleteActivity(activityID) {
  cov_1s30x36l4w.f[0]++;
  cov_1s30x36l4w.s[1]++;
  return {
    type: DELETE_ACTIVITY,
    payload: {
      activityID: activityID
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2RlbGV0ZUFjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIkRFTEVURV9BQ1RJVklUWSIsImRlbGV0ZUFjdGl2aXR5IiwiYWN0aXZpdHlJRCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGVBQWUsMkJBQUcsNkJBQUgsQ0FBckI7OztBQUVRLFNBQVNDLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DO0FBQUE7QUFBQTtBQUNqRCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUgsZUFERDtBQUVMSSxJQUFBQSxPQUFPLEVBQUU7QUFBRUYsTUFBQUEsVUFBVSxFQUFWQTtBQUFGO0FBRkosR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERFTEVURV9BQ1RJVklUWSA9ICdESVJFQ1RfTElORS9ERUxFVEVfQUNUSVZJVFknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVBY3Rpdml0eShhY3Rpdml0eUlEKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMRVRFX0FDVElWSVRZLFxuICAgIHBheWxvYWQ6IHsgYWN0aXZpdHlJRCB9XG4gIH07XG59XG4iXX0=
