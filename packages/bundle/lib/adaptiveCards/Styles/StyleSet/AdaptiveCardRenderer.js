'use strict';

var cov_cksbgavmu = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AdaptiveCardRenderer.js';
  var hash = 'a4ff8c13a89d17981dbf3cac0bb024b8a1dc6bc6';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AdaptiveCardRenderer.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 19,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 1,
            column: 15
          },
          end: {
            line: 1,
            column: 16
          }
        },
        loc: {
          start: {
            line: 1,
            column: 65
          },
          end: {
            line: 20,
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
    hash: 'a4ff8c13a89d17981dbf3cac0bb024b8a1dc6bc6'
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
exports.default = _default;

function _default(_ref) {
  var accent = _ref.accent,
    paddingRegular = _ref.paddingRegular,
    primaryFont = _ref.primaryFont;
  cov_cksbgavmu.f[0]++;
  cov_cksbgavmu.s[0]++;
  return {
    '& .ac-pushButton': {
      backgroundColor: 'White',
      borderStyle: 'solid',
      borderWidth: 1,
      color: accent,
      fontWeight: 600,
      padding: paddingRegular
    },
    '& .ac-multichoiceInput': {
      padding: paddingRegular
    },
    '& .ac-input, & .ac-inlineActionButton, & .ac-quickActionButton': {
      fontFamily: primaryFont
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BZGFwdGl2ZUNhcmRSZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJhY2NlbnQiLCJwYWRkaW5nUmVndWxhciIsInByaW1hcnlGb250IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsImNvbG9yIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJmb250RmFtaWx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSx3QkFBa0Q7QUFBQSxNQUF2Q0EsTUFBdUMsUUFBdkNBLE1BQXVDO0FBQUEsTUFBL0JDLGNBQStCLFFBQS9CQSxjQUErQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUFBO0FBQUE7QUFDL0QsU0FBTztBQUNMLHdCQUFvQjtBQUNsQkMsTUFBQUEsZUFBZSxFQUFFLE9BREM7QUFFbEJDLE1BQUFBLFdBQVcsRUFBRSxPQUZLO0FBR2xCQyxNQUFBQSxXQUFXLEVBQUUsQ0FISztBQUlsQkMsTUFBQUEsS0FBSyxFQUFFTixNQUpXO0FBS2xCTyxNQUFBQSxVQUFVLEVBQUUsR0FMTTtBQU1sQkMsTUFBQUEsT0FBTyxFQUFFUDtBQU5TLEtBRGY7QUFVTCw4QkFBMEI7QUFDeEJPLE1BQUFBLE9BQU8sRUFBRVA7QUFEZSxLQVZyQjtBQWNMLHNFQUFrRTtBQUNoRVEsTUFBQUEsVUFBVSxFQUFFUDtBQURvRDtBQWQ3RCxHQUFQO0FBa0JEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBhY2NlbnQsIHBhZGRpbmdSZWd1bGFyLCBwcmltYXJ5Rm9udCB9KSB7XG4gIHJldHVybiB7XG4gICAgJyYgLmFjLXB1c2hCdXR0b24nOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdXaGl0ZScsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgY29sb3I6IGFjY2VudCxcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdSZWd1bGFyXG4gICAgfSxcblxuICAgICcmIC5hYy1tdWx0aWNob2ljZUlucHV0Jzoge1xuICAgICAgcGFkZGluZzogcGFkZGluZ1JlZ3VsYXJcbiAgICB9LFxuXG4gICAgJyYgLmFjLWlucHV0LCAmIC5hYy1pbmxpbmVBY3Rpb25CdXR0b24sICYgLmFjLXF1aWNrQWN0aW9uQnV0dG9uJzoge1xuICAgICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnRcbiAgICB9XG4gIH07XG59XG4iXX0=
