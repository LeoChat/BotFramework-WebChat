'use strict';

var cov_4pupwe9wf = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextBox.js';
  var hash = '5104fef92f66c9cc105689ab8ce402829a0a6588';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextBox.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 35,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createSendBoxTextBoxStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 49
          }
        },
        loc: {
          start: {
            line: 6,
            column: 3
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 6
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
    hash: '5104fef92f66c9cc105689ab8ce402829a0a6588'
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
exports.default = createSendBoxTextBoxStyle;

function createSendBoxTextBoxStyle(_ref) {
  var sendBoxTextBoxBorderColor = _ref.sendBoxTextBoxBorderColor,
    primaryFont = _ref.primaryFont,
    sendBoxPlaceholderColor = _ref.sendBoxPlaceholderColor,
    sendBoxTextColor = _ref.sendBoxTextColor;
  cov_4pupwe9wf.f[0]++;
  cov_4pupwe9wf.s[0]++;
  return {
    alignItems: 'center',
    fontFamily: primaryFont,
    '& > input': {
      border: '1px solid #cccccc',
      color: sendBoxTextColor,
      fontFamily: 'inherit',
      height: '35px',
      borderRadius: '18px',
      fontSize: '16px',
      outline: 0,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      margin: 0,
      transition: 'box-shadow 0.3s ease-in-out'
    },
    '&::placeholder': {
      color: sendBoxPlaceholderColor
    },
    '& > input:focus': {
      border: '1px solid ' + sendBoxTextBoxBorderColor,
      boxShadow: 'inset 0 0 3px 1px rgba(198, 198, 198, 0.5)'
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveFRleHRCb3guanMiXSwibmFtZXMiOlsiY3JlYXRlU2VuZEJveFRleHRCb3hTdHlsZSIsInNlbmRCb3hUZXh0Qm94Qm9yZGVyQ29sb3IiLCJwcmltYXJ5Rm9udCIsInNlbmRCb3hQbGFjZWhvbGRlckNvbG9yIiwic2VuZEJveFRleHRDb2xvciIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5IiwiYm9yZGVyIiwiY29sb3IiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EseUJBQVQsT0FLWjtBQUFBLE1BSkRDLHlCQUlDLFFBSkRBLHlCQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsdUJBRUMsUUFGREEsdUJBRUM7QUFBQSxNQUREQyxnQkFDQyxRQUREQSxnQkFDQztBQUFBO0FBQUE7QUFDRCxTQUFPO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxRQURQO0FBRUxDLElBQUFBLFVBQVUsRUFBRUosV0FGUDtBQUlMLGlCQUFhO0FBQ1hLLE1BQUFBLE1BQU0sRUFBRSxtQkFERztBQUVYQyxNQUFBQSxLQUFLLEVBQUVKLGdCQUZJO0FBR1hFLE1BQUFBLFVBQVUsRUFBRSxTQUhEO0FBSVhHLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hDLE1BQUFBLFlBQVksRUFBRSxNQUxIO0FBTVhDLE1BQUFBLFFBQVEsRUFBRSxNQU5DO0FBT1hDLE1BQUFBLE9BQU8sRUFBRSxDQVBFO0FBUVhDLE1BQUFBLGFBQWEsRUFBRSxDQVJKO0FBU1hDLE1BQUFBLFdBQVcsRUFBRSxFQVRGO0FBVVhDLE1BQUFBLFlBQVksRUFBRSxFQVZIO0FBV1hDLE1BQUFBLFVBQVUsRUFBRSxDQVhEO0FBWVhDLE1BQUFBLE1BQU0sRUFBRSxDQVpHO0FBYVhDLE1BQUFBLFVBQVUsRUFBRTtBQWJELEtBSlI7QUFvQkwsc0JBQWtCO0FBQ2hCVixNQUFBQSxLQUFLLEVBQUVMO0FBRFMsS0FwQmI7QUF3QkwsdUJBQW1CO0FBQ2pCSSxNQUFBQSxNQUFNLEVBQUUsZUFBZU4seUJBRE47QUFFakJrQixNQUFBQSxTQUFTLEVBQUU7QUFGTTtBQXhCZCxHQUFQO0FBNkJEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VuZEJveFRleHRCb3hTdHlsZSh7XG4gIHNlbmRCb3hUZXh0Qm94Qm9yZGVyQ29sb3IsXG4gIHByaW1hcnlGb250LFxuICBzZW5kQm94UGxhY2Vob2xkZXJDb2xvcixcbiAgc2VuZEJveFRleHRDb2xvclxufSkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvbnRGYW1pbHk6IHByaW1hcnlGb250LFxuXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjY2NjJyxcbiAgICAgIGNvbG9yOiBzZW5kQm94VGV4dENvbG9yLFxuICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiAnMzVweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxOHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgICB9LFxuXG4gICAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgY29sb3I6IHNlbmRCb3hQbGFjZWhvbGRlckNvbG9yXG4gICAgfSxcblxuICAgICcmID4gaW5wdXQ6Zm9jdXMnOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgJyArIHNlbmRCb3hUZXh0Qm94Qm9yZGVyQ29sb3IsXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgM3B4IDFweCByZ2JhKDE5OCwgMTk4LCAxOTgsIDAuNSknXG4gICAgfVxuICB9O1xufVxuIl19
