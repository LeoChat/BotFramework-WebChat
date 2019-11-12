'use strict';

var cov_1v8ddbwfn5 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/incomingActivity.js';
  var hash = 'd1d0f307114a26be209b8e8245a34fe661a2c0fe';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/actions/incomingActivity.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 26
        },
        end: {
          line: 1,
          column: 57
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
        name: 'incomingActivity',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 40
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
    hash: 'd1d0f307114a26be209b8e8245a34fe661a2c0fe'
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
exports['default'] = incomingActivity;
exports.INCOMING_ACTIVITY = void 0;
var INCOMING_ACTIVITY = (cov_1v8ddbwfn5.s[0]++, 'DIRECT_LINE/INCOMING_ACTIVITY');
exports.INCOMING_ACTIVITY = INCOMING_ACTIVITY;

function incomingActivity(activity) {
  cov_1v8ddbwfn5.f[0]++;
  cov_1v8ddbwfn5.s[1]++;
  return {
    type: INCOMING_ACTIVITY,
    payload: {
      activity: activity
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2luY29taW5nQWN0aXZpdHkuanMiXSwibmFtZXMiOlsiSU5DT01JTkdfQUNUSVZJVFkiLCJpbmNvbWluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsMkJBQUcsK0JBQUgsQ0FBdkI7OztBQUVlLFNBQVNDLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztBQUFBO0FBQUE7QUFDakQsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVILGlCQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRTtBQUFFRixNQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFGSixHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTkNPTUlOR19BQ1RJVklUWSA9ICdESVJFQ1RfTElORS9JTkNPTUlOR19BQ1RJVklUWSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluY29taW5nQWN0aXZpdHkoYWN0aXZpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJTkNPTUlOR19BQ1RJVklUWSxcbiAgICBwYXlsb2FkOiB7IGFjdGl2aXR5IH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfTtcbiJdfQ==
