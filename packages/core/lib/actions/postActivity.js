'use strict';

var cov_1w0z1ci36j = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/postActivity.js';
  var hash = '6cf5f70a75e856efed14ad103bcb861cb5c271f1';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/postActivity.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 22
        },
        end: {
          line: 1,
          column: 49
        }
      },
      '1': {
        start: {
          line: 2,
          column: 39
        },
        end: {
          line: 2,
          column: 67
        }
      },
      '2': {
        start: {
          line: 3,
          column: 37
        },
        end: {
          line: 3,
          column: 63
        }
      },
      '3': {
        start: {
          line: 4,
          column: 38
        },
        end: {
          line: 4,
          column: 65
        }
      },
      '4': {
        start: {
          line: 7,
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
        name: 'postActivity',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 36
          }
        },
        loc: {
          start: {
            line: 6,
            column: 68
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 47
          },
          end: {
            line: 6,
            column: 66
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 6,
              column: 56
            },
            end: {
              line: 6,
              column: 66
            }
          }
        ],
        line: 6
      }
    },
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
    b: {
      '0': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '6cf5f70a75e856efed14ad103bcb861cb5c271f1'
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
exports['default'] = postActivity;
exports.POST_ACTIVITY = exports.POST_ACTIVITY_REJECTED = exports.POST_ACTIVITY_PENDING = exports.POST_ACTIVITY_FULFILLED = void 0;
var POST_ACTIVITY = (cov_1w0z1ci36j.s[0]++, 'DIRECT_LINE/POST_ACTIVITY');
exports.POST_ACTIVITY = POST_ACTIVITY;
var POST_ACTIVITY_FULFILLED = (cov_1w0z1ci36j.s[1]++, ''.concat(POST_ACTIVITY, '_FULFILLED'));
exports.POST_ACTIVITY_FULFILLED = POST_ACTIVITY_FULFILLED;
var POST_ACTIVITY_PENDING = (cov_1w0z1ci36j.s[2]++, ''.concat(POST_ACTIVITY, '_PENDING'));
exports.POST_ACTIVITY_PENDING = POST_ACTIVITY_PENDING;
var POST_ACTIVITY_REJECTED = (cov_1w0z1ci36j.s[3]++, ''.concat(POST_ACTIVITY, '_REJECTED'));
exports.POST_ACTIVITY_REJECTED = POST_ACTIVITY_REJECTED;

function postActivity(activity) {
  var method =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1w0z1ci36j.b[0][0]++, 'keyboard');
  cov_1w0z1ci36j.f[0]++;
  cov_1w0z1ci36j.s[4]++;
  return {
    type: POST_ACTIVITY,
    meta: {
      method: method
    },
    payload: {
      activity: activity
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Bvc3RBY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJQT1NUX0FDVElWSVRZIiwiUE9TVF9BQ1RJVklUWV9GVUxGSUxMRUQiLCJQT1NUX0FDVElWSVRZX1BFTkRJTkciLCJQT1NUX0FDVElWSVRZX1JFSkVDVEVEIiwicG9zdEFjdGl2aXR5IiwiYWN0aXZpdHkiLCJtZXRob2QiLCJ0eXBlIiwibWV0YSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSwyQkFBRywyQkFBSCxDQUFuQjs7QUFDTyxJQUFNQyx1QkFBdUIscUNBQU1ELGFBQU4sZ0JBQTdCOztBQUNBLElBQU1FLHFCQUFxQixxQ0FBTUYsYUFBTixjQUEzQjs7QUFDQSxJQUFNRyxzQkFBc0IscUNBQU1ILGFBQU4sZUFBNUI7OztBQUVRLFNBQVNJLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQXFEO0FBQUEsTUFBckJDLE1BQXFCLGtHQUFaLFVBQVk7QUFBQTtBQUFBO0FBQ2xFLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFUCxhQUREO0FBRUxRLElBQUFBLElBQUksRUFBRTtBQUFFRixNQUFBQSxNQUFNLEVBQU5BO0FBQUYsS0FGRDtBQUdMRyxJQUFBQSxPQUFPLEVBQUU7QUFBRUosTUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBSEosR0FBUDtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUE9TVF9BQ1RJVklUWSA9ICdESVJFQ1RfTElORS9QT1NUX0FDVElWSVRZJztcbmV4cG9ydCBjb25zdCBQT1NUX0FDVElWSVRZX0ZVTEZJTExFRCA9IGAke1BPU1RfQUNUSVZJVFl9X0ZVTEZJTExFRGA7XG5leHBvcnQgY29uc3QgUE9TVF9BQ1RJVklUWV9QRU5ESU5HID0gYCR7UE9TVF9BQ1RJVklUWX1fUEVORElOR2A7XG5leHBvcnQgY29uc3QgUE9TVF9BQ1RJVklUWV9SRUpFQ1RFRCA9IGAke1BPU1RfQUNUSVZJVFl9X1JFSkVDVEVEYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zdEFjdGl2aXR5KGFjdGl2aXR5LCBtZXRob2QgPSAna2V5Ym9hcmQnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUE9TVF9BQ1RJVklUWSxcbiAgICBtZXRhOiB7IG1ldGhvZCB9LFxuICAgIHBheWxvYWQ6IHsgYWN0aXZpdHkgfVxuICB9O1xufVxuXG5leHBvcnQgeyBQT1NUX0FDVElWSVRZIH07XG4iXX0=
