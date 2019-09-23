'use strict';

var cov_1dkr20rqvq = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Localization/getLocaleString.js';
  var hash = 'ed05b7909754afb72eb395302a4622fb4a13baec';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Localization/getLocaleString.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 30
        }
      },
      '1': {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 11,
          column: 3
        }
      },
      '2': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 17,
          column: 18
        }
      },
      '3': {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '4': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 79
        }
      },
      '5': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 21,
          column: 18
        }
      },
      '6': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 54
        }
      },
      '7': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: 'getLocaleString',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 39
          }
        },
        loc: {
          start: {
            line: 3,
            column: 57
          },
          end: {
            line: 26,
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
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 16,
              column: 5
            }
          },
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 16,
              column: 5
            }
          }
        ],
        line: 14
      },
      '1': {
        loc: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 78
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 15,
              column: 13
            },
            end: {
              line: 15,
              column: 19
            }
          },
          {
            start: {
              line: 15,
              column: 23
            },
            end: {
              line: 15,
              column: 78
            }
          }
        ],
        line: 15
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'ed05b7909754afb72eb395302a4622fb4a13baec'
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
exports.default = getLocaleString;

/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
function getLocaleString(value, language) {
  cov_1dkr20rqvq.f[0]++;
  var date = (cov_1dkr20rqvq.s[0]++, new Date(value));
  var options =
    (cov_1dkr20rqvq.s[1]++,
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'long'
    });
  cov_1dkr20rqvq.s[2]++;

  try {
    cov_1dkr20rqvq.s[3]++;

    if (window.Intl) {
      cov_1dkr20rqvq.b[0][0]++;
      cov_1dkr20rqvq.s[4]++;
      return (
        (cov_1dkr20rqvq.b[1][0]++, !!date) &&
        (cov_1dkr20rqvq.b[1][1]++, new Intl.DateTimeFormat(language, options).format(date))
      );
    } else {
      cov_1dkr20rqvq.b[0][1]++;
    }
  } catch (err) {}

  cov_1dkr20rqvq.s[5]++;

  try {
    cov_1dkr20rqvq.s[6]++;
    return date.toLocaleDateString(language, options);
  } catch (err) {} // Fallback to en-US if failed, for example, invalid language code would throw exception

  cov_1dkr20rqvq.s[7]++;
  return date.toLocaleDateString('en-US', options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vZ2V0TG9jYWxlU3RyaW5nLmpzIl0sIm5hbWVzIjpbImdldExvY2FsZVN0cmluZyIsInZhbHVlIiwibGFuZ3VhZ2UiLCJkYXRlIiwiRGF0ZSIsIm9wdGlvbnMiLCJkYXkiLCJob3VyIiwiaG91cjEyIiwibWludXRlIiwibW9udGgiLCJ3aW5kb3ciLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJlcnIiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQUE7QUFDdkQsTUFBTUMsSUFBSSwyQkFBRyxJQUFJQyxJQUFKLENBQVNILEtBQVQsQ0FBSCxDQUFWO0FBQ0EsTUFBTUksT0FBTywyQkFBRztBQUNkQyxJQUFBQSxHQUFHLEVBQUUsU0FEUztBQUVkQyxJQUFBQSxJQUFJLEVBQUUsU0FGUTtBQUdkQyxJQUFBQSxNQUFNLEVBQUUsS0FITTtBQUlkQyxJQUFBQSxNQUFNLEVBQUUsU0FKTTtBQUtkQyxJQUFBQSxLQUFLLEVBQUU7QUFMTyxHQUFILENBQWI7QUFGdUQ7O0FBVXZELE1BQUk7QUFBQTs7QUFDRixRQUFJQyxNQUFNLENBQUNDLElBQVgsRUFBaUI7QUFBQTtBQUFBO0FBQ2YsYUFBTyw0QkFBQyxDQUFDVCxJQUFGLGdDQUFVLElBQUlTLElBQUksQ0FBQ0MsY0FBVCxDQUF3QlgsUUFBeEIsRUFBa0NHLE9BQWxDLEVBQTJDUyxNQUEzQyxDQUFrRFgsSUFBbEQsQ0FBVixDQUFQO0FBQ0QsS0FGRDtBQUFBO0FBQUE7QUFHRCxHQUpELENBSUUsT0FBT1ksR0FBUCxFQUFZLENBQUU7O0FBZHVDOztBQWdCdkQsTUFBSTtBQUFBO0FBQ0YsV0FBT1osSUFBSSxDQUFDYSxrQkFBTCxDQUF3QmQsUUFBeEIsRUFBa0NHLE9BQWxDLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT1UsR0FBUCxFQUFZLENBQUUsQ0FsQnVDLENBb0J2RDs7O0FBcEJ1RDtBQXNCdkQsU0FBT1osSUFBSSxDQUFDYSxrQkFBTCxDQUF3QixPQUF4QixFQUFpQ1gsT0FBakMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLWVtcHR5OiBbXCJlcnJvclwiLCB7IFwiYWxsb3dFbXB0eUNhdGNoXCI6IHRydWUgfV0gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TG9jYWxlU3RyaW5nKHZhbHVlLCBsYW5ndWFnZSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGRheTogJzItZGlnaXQnLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIG1vbnRoOiAnbG9uZydcbiAgfTtcblxuICB0cnkge1xuICAgIGlmICh3aW5kb3cuSW50bCkge1xuICAgICAgcmV0dXJuICEhZGF0ZSAmJiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsYW5ndWFnZSwgb3B0aW9ucykuZm9ybWF0KGRhdGUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxhbmd1YWdlLCBvcHRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIC8vIEZhbGxiYWNrIHRvIGVuLVVTIGlmIGZhaWxlZCwgZm9yIGV4YW1wbGUsIGludmFsaWQgbGFuZ3VhZ2UgY29kZSB3b3VsZCB0aHJvdyBleGNlcHRpb25cblxuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XG59XG4iXX0=
