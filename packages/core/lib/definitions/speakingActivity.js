'use strict';

var cov_9xc19ii3j = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/definitions/speakingActivity.js';
  var hash = '70eb57220d0bee0aa05965683b8c131e35f5d126';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/definitions/speakingActivity.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 60
        }
      }
    },
    fnMap: {
      '0': {
        name: 'speakingActivity',
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
            line: 5,
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
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 59
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 4,
              column: 9
            },
            end: {
              line: 4,
              column: 29
            }
          },
          {
            start: {
              line: 4,
              column: 33
            },
            end: {
              line: 4,
              column: 59
            }
          }
        ],
        line: 4
      }
    },
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '70eb57220d0bee0aa05965683b8c131e35f5d126'
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
exports['default'] = speakingActivity;

// If true, the activity is in the queue and needs to be spoken.
function speakingActivity(activity) {
  cov_9xc19ii3j.f[0]++;
  cov_9xc19ii3j.s[0]++;
  return (cov_9xc19ii3j.b[0][0]++, activity.channelData) && (cov_9xc19ii3j.b[0][1]++, activity.channelData.speak);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9ucy9zcGVha2luZ0FjdGl2aXR5LmpzIl0sIm5hbWVzIjpbInNwZWFraW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsImNoYW5uZWxEYXRhIiwic3BlYWsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsZ0JBQVQsQ0FBMEJDLFFBQTFCLEVBQW9DO0FBQUE7QUFBQTtBQUNqRCxTQUFPLDBCQUFBQSxRQUFRLENBQUNDLFdBQVQsK0JBQXdCRCxRQUFRLENBQUNDLFdBQVQsQ0FBcUJDLEtBQTdDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIElmIHRydWUsIHRoZSBhY3Rpdml0eSBpcyBpbiB0aGUgcXVldWUgYW5kIG5lZWRzIHRvIGJlIHNwb2tlbi5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BlYWtpbmdBY3Rpdml0eShhY3Rpdml0eSkge1xuICByZXR1cm4gYWN0aXZpdHkuY2hhbm5lbERhdGEgJiYgYWN0aXZpdHkuY2hhbm5lbERhdGEuc3BlYWs7XG59XG4iXX0=
