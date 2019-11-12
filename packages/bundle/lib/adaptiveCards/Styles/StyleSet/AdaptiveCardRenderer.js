'use strict';

var cov_176286cbrt = (function() {
  var path =
    '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AdaptiveCardRenderer.js';
  var hash = '9a6729e8e3e770cdd3d5246b058a9fd293044566';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AdaptiveCardRenderer.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 20,
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
            line: 21,
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
    hash: '9a6729e8e3e770cdd3d5246b058a9fd293044566'
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
  cov_176286cbrt.f[0]++;
  cov_176286cbrt.s[0]++;
  return {
    '& .ac-pushButton': {
      appearance: 'none',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BZGFwdGl2ZUNhcmRSZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJhY2NlbnQiLCJwYWRkaW5nUmVndWxhciIsInByaW1hcnlGb250IiwiYXBwZWFyYW5jZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJwYWRkaW5nIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsd0JBQWtEO0FBQUEsTUFBdkNBLE1BQXVDLFFBQXZDQSxNQUF1QztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFBQTtBQUFBO0FBQy9ELFNBQU87QUFDTCx3QkFBb0I7QUFDbEJDLE1BQUFBLFVBQVUsRUFBRSxNQURNO0FBRWxCQyxNQUFBQSxlQUFlLEVBQUUsT0FGQztBQUdsQkMsTUFBQUEsV0FBVyxFQUFFLE9BSEs7QUFJbEJDLE1BQUFBLFdBQVcsRUFBRSxDQUpLO0FBS2xCQyxNQUFBQSxLQUFLLEVBQUVQLE1BTFc7QUFNbEJRLE1BQUFBLFVBQVUsRUFBRSxHQU5NO0FBT2xCQyxNQUFBQSxPQUFPLEVBQUVSO0FBUFMsS0FEZjtBQVdMLDhCQUEwQjtBQUN4QlEsTUFBQUEsT0FBTyxFQUFFUjtBQURlLEtBWHJCO0FBZUwsc0VBQWtFO0FBQ2hFUyxNQUFBQSxVQUFVLEVBQUVSO0FBRG9EO0FBZjdELEdBQVA7QUFtQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGFjY2VudCwgcGFkZGluZ1JlZ3VsYXIsIHByaW1hcnlGb250IH0pIHtcbiAgcmV0dXJuIHtcbiAgICAnJiAuYWMtcHVzaEJ1dHRvbic6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ1doaXRlJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICBjb2xvcjogYWNjZW50LFxuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgcGFkZGluZzogcGFkZGluZ1JlZ3VsYXJcbiAgICB9LFxuXG4gICAgJyYgLmFjLW11bHRpY2hvaWNlSW5wdXQnOiB7XG4gICAgICBwYWRkaW5nOiBwYWRkaW5nUmVndWxhclxuICAgIH0sXG5cbiAgICAnJiAuYWMtaW5wdXQsICYgLmFjLWlubGluZUFjdGlvbkJ1dHRvbiwgJiAuYWMtcXVpY2tBY3Rpb25CdXR0b24nOiB7XG4gICAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udFxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
