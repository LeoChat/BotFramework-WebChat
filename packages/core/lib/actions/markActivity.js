'use strict';

var cov_6h5wyotmy = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/markActivity.js';
  var hash = '45fc728e31c29c7b27083fb6518456810de9059f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/markActivity.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 22
        },
        end: {
          line: 1,
          column: 46
        }
      },
      '1': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'markActivity',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 36
          }
        },
        loc: {
          start: {
            line: 3,
            column: 70
          },
          end: {
            line: 12,
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
    hash: '45fc728e31c29c7b27083fb6518456810de9059f'
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
exports['default'] = markActivity;
exports.MARK_ACTIVITY = void 0;
var MARK_ACTIVITY = (cov_6h5wyotmy.s[0]++, 'WEB_CHAT/MARK_ACTIVITY');
exports.MARK_ACTIVITY = MARK_ACTIVITY;

function markActivity(_ref, name, value) {
  var activityID = _ref.id;
  cov_6h5wyotmy.f[0]++;
  cov_6h5wyotmy.s[1]++;
  return {
    type: MARK_ACTIVITY,
    payload: {
      activityID: activityID,
      name: name,
      value: value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21hcmtBY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJNQVJLX0FDVElWSVRZIiwibWFya0FjdGl2aXR5IiwibmFtZSIsInZhbHVlIiwiYWN0aXZpdHlJRCIsImlkIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSwwQkFBRyx3QkFBSCxDQUFuQjs7O0FBRWUsU0FBU0MsWUFBVCxPQUEwQ0MsSUFBMUMsRUFBZ0RDLEtBQWhELEVBQXVEO0FBQUEsTUFBM0JDLFVBQTJCLFFBQS9CQyxFQUErQjtBQUFBO0FBQUE7QUFDcEUsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVOLGFBREQ7QUFFTE8sSUFBQUEsT0FBTyxFQUFFO0FBQ1BILE1BQUFBLFVBQVUsRUFBVkEsVUFETztBQUVQRixNQUFBQSxJQUFJLEVBQUpBLElBRk87QUFHUEMsTUFBQUEsS0FBSyxFQUFMQTtBQUhPO0FBRkosR0FBUDtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTUFSS19BQ1RJVklUWSA9ICdXRUJfQ0hBVC9NQVJLX0FDVElWSVRZJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFya0FjdGl2aXR5KHsgaWQ6IGFjdGl2aXR5SUQgfSwgbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBNQVJLX0FDVElWSVRZLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGFjdGl2aXR5SUQsXG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IE1BUktfQUNUSVZJVFkgfTtcbiJdfQ==
