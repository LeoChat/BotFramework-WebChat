'use strict';

var cov_1322hmrbrc = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/MicrophoneButton.js';
  var hash = 'e10220656eb49a1614a170c0a70d84a040b52c1a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/MicrophoneButton.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
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
        name: 'createMicrophoneButtonStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 51
          }
        },
        loc: {
          start: {
            line: 1,
            column: 88
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e10220656eb49a1614a170c0a70d84a040b52c1a'
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
exports.default = createMicrophoneButtonStyle;

function createMicrophoneButtonStyle(_ref) {
  var microphoneButtonColorOnDictate = _ref.microphoneButtonColorOnDictate;
  cov_1322hmrbrc.f[0]++;
  cov_1322hmrbrc.s[0]++;
  return {
    // TODO: [P3] This path should not know anything about the DOM tree of <IconButton>
    '&.dictating > button': {
      '&, &:focus, &:hover': {
        '& svg': {
          fill: microphoneButtonColorOnDictate
        }
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvTWljcm9waG9uZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNaWNyb3Bob25lQnV0dG9uU3R5bGUiLCJtaWNyb3Bob25lQnV0dG9uQ29sb3JPbkRpY3RhdGUiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSwyQkFBVCxPQUF5RTtBQUFBLE1BQWxDQyw4QkFBa0MsUUFBbENBLDhCQUFrQztBQUFBO0FBQUE7QUFDdEYsU0FBTztBQUNMO0FBQ0EsNEJBQXdCO0FBQ3RCLDZCQUF1QjtBQUNyQixpQkFBUztBQUNQQyxVQUFBQSxJQUFJLEVBQUVEO0FBREM7QUFEWTtBQUREO0FBRm5CLEdBQVA7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1pY3JvcGhvbmVCdXR0b25TdHlsZSh7IG1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZSB9KSB7XG4gIHJldHVybiB7XG4gICAgLy8gVE9ETzogW1AzXSBUaGlzIHBhdGggc2hvdWxkIG5vdCBrbm93IGFueXRoaW5nIGFib3V0IHRoZSBET00gdHJlZSBvZiA8SWNvbkJ1dHRvbj5cbiAgICAnJi5kaWN0YXRpbmcgPiBidXR0b24nOiB7XG4gICAgICAnJiwgJjpmb2N1cywgJjpob3Zlcic6IHtcbiAgICAgICAgJyYgc3ZnJzoge1xuICAgICAgICAgIGZpbGw6IG1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
