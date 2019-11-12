'use strict';

var cov_1eeldc0g5t = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/textFormatToContentType.js';
  var hash = 'b710c1f1eb65c79c4d3e65d87908c7d8cc0806f0';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/textFormatToContentType.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 11,
          column: 3
        }
      },
      '1': {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 26
        }
      },
      '2': {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 24
        }
      },
      '3': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 29
        }
      }
    },
    fnMap: {
      '0': {
        name: 'textFormatToContentType',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 47
          }
        },
        loc: {
          start: {
            line: 1,
            column: 60
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        type: 'switch',
        locations: [
          {
            start: {
              line: 3,
              column: 4
            },
            end: {
              line: 4,
              column: 26
            }
          },
          {
            start: {
              line: 6,
              column: 4
            },
            end: {
              line: 7,
              column: 24
            }
          },
          {
            start: {
              line: 9,
              column: 4
            },
            end: {
              line: 10,
              column: 29
            }
          }
        ],
        line: 2
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b710c1f1eb65c79c4d3e65d87908c7d8cc0806f0'
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
exports.default = textFormatToContentType;

function textFormatToContentType(textFormat) {
  cov_1eeldc0g5t.f[0]++;
  cov_1eeldc0g5t.s[0]++;

  switch (textFormat) {
    case 'plain':
      cov_1eeldc0g5t.b[0][0]++;
      cov_1eeldc0g5t.s[1]++;
      return 'text/plain';

    case 'xml':
      cov_1eeldc0g5t.b[0][1]++;
      cov_1eeldc0g5t.s[2]++;
      return 'text/xml';

    default:
      cov_1eeldc0g5t.b[0][2]++;
      cov_1eeldc0g5t.s[3]++;
      return 'text/markdown';
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy90ZXh0Rm9ybWF0VG9Db250ZW50VHlwZS5qcyJdLCJuYW1lcyI6WyJ0ZXh0Rm9ybWF0VG9Db250ZW50VHlwZSIsInRleHRGb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLHVCQUFULENBQWlDQyxVQUFqQyxFQUE2QztBQUFBO0FBQUE7O0FBQzFELFVBQVFBLFVBQVI7QUFDRSxTQUFLLE9BQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxZQUFQOztBQUVGLFNBQUssS0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLFVBQVA7O0FBRUY7QUFBQTtBQUFBO0FBQ0UsYUFBTyxlQUFQO0FBUko7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHRGb3JtYXRUb0NvbnRlbnRUeXBlKHRleHRGb3JtYXQpIHtcbiAgc3dpdGNoICh0ZXh0Rm9ybWF0KSB7XG4gICAgY2FzZSAncGxhaW4nOlxuICAgICAgcmV0dXJuICd0ZXh0L3BsYWluJztcblxuICAgIGNhc2UgJ3htbCc6XG4gICAgICByZXR1cm4gJ3RleHQveG1sJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3RleHQvbWFya2Rvd24nO1xuICB9XG59XG4iXX0=
