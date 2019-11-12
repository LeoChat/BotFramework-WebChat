'use strict';

var cov_23e949p09d = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextBox.js';
  var hash = 'f70378dc50f41631281f9197b2bfe10801ba0f2e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextBox.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 34,
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
            line: 8,
            column: 3
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 27,
            column: 15
          },
          end: {
            line: 27,
            column: 49
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 27,
              column: 15
            },
            end: {
              line: 27,
              column: 39
            }
          },
          {
            start: {
              line: 27,
              column: 43
            },
            end: {
              line: 27,
              column: 49
            }
          }
        ],
        line: 27
      },
      '1': {
        loc: {
          start: {
            line: 31,
            column: 15
          },
          end: {
            line: 31,
            column: 48
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 31,
              column: 15
            },
            end: {
              line: 31,
              column: 38
            }
          },
          {
            start: {
              line: 31,
              column: 42
            },
            end: {
              line: 31,
              column: 48
            }
          }
        ],
        line: 31
      }
    },
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'f70378dc50f41631281f9197b2bfe10801ba0f2e'
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
  var primaryFont = _ref.primaryFont,
    sendBoxBackground = _ref.sendBoxBackground,
    sendBoxDisabledTextColor = _ref.sendBoxDisabledTextColor,
    sendBoxPlaceholderColor = _ref.sendBoxPlaceholderColor,
    sendBoxTextColor = _ref.sendBoxTextColor,
    subtle = _ref.subtle;
  cov_23e949p09d.f[0]++;
  cov_23e949p09d.s[0]++;
  return {
    alignItems: 'center',
    fontFamily: primaryFont,
    '& > input': {
      backgroundColor: sendBoxBackground,
      border: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      height: '100%',
      outline: 0,
      padding: 0,
      '&:not(:disabled)': {
        color: sendBoxTextColor
      },
      '&:disabled': {
        color: (cov_23e949p09d.b[0][0]++, sendBoxDisabledTextColor) || (cov_23e949p09d.b[0][1]++, subtle)
      },
      '&::placeholder': {
        color: (cov_23e949p09d.b[1][0]++, sendBoxPlaceholderColor) || (cov_23e949p09d.b[1][1]++, subtle)
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveFRleHRCb3guanMiXSwibmFtZXMiOlsiY3JlYXRlU2VuZEJveFRleHRCb3hTdHlsZSIsInByaW1hcnlGb250Iiwic2VuZEJveEJhY2tncm91bmQiLCJzZW5kQm94RGlzYWJsZWRUZXh0Q29sb3IiLCJzZW5kQm94UGxhY2Vob2xkZXJDb2xvciIsInNlbmRCb3hUZXh0Q29sb3IiLCJzdWJ0bGUiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImZvbnRTaXplIiwiaGVpZ2h0Iiwib3V0bGluZSIsInBhZGRpbmciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLHlCQUFULE9BT1o7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxpQkFLQyxRQUxEQSxpQkFLQztBQUFBLE1BSkRDLHdCQUlDLFFBSkRBLHdCQUlDO0FBQUEsTUFIREMsdUJBR0MsUUFIREEsdUJBR0M7QUFBQSxNQUZEQyxnQkFFQyxRQUZEQSxnQkFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQztBQUFBO0FBQUE7QUFDRCxTQUFPO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxRQURQO0FBRUxDLElBQUFBLFVBQVUsRUFBRVAsV0FGUDtBQUlMLGlCQUFhO0FBQ1hRLE1BQUFBLGVBQWUsRUFBRVAsaUJBRE47QUFFWFEsTUFBQUEsTUFBTSxFQUFFLENBRkc7QUFHWEYsTUFBQUEsVUFBVSxFQUFFLFNBSEQ7QUFJWEcsTUFBQUEsUUFBUSxFQUFFLFNBSkM7QUFLWEMsTUFBQUEsTUFBTSxFQUFFLE1BTEc7QUFNWEMsTUFBQUEsT0FBTyxFQUFFLENBTkU7QUFPWEMsTUFBQUEsT0FBTyxFQUFFLENBUEU7QUFTWCwwQkFBb0I7QUFDbEJDLFFBQUFBLEtBQUssRUFBRVY7QUFEVyxPQVRUO0FBYVgsb0JBQWM7QUFDWlUsUUFBQUEsS0FBSyxFQUFFLDJCQUFBWix3QkFBd0IsZ0NBQUlHLE1BQUo7QUFEbkIsT0FiSDtBQWlCWCx3QkFBa0I7QUFDaEJTLFFBQUFBLEtBQUssRUFBRSwyQkFBQVgsdUJBQXVCLGdDQUFJRSxNQUFKO0FBRGQ7QUFqQlA7QUFKUixHQUFQO0FBMEJEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VuZEJveFRleHRCb3hTdHlsZSh7XG4gIHByaW1hcnlGb250LFxuICBzZW5kQm94QmFja2dyb3VuZCxcbiAgc2VuZEJveERpc2FibGVkVGV4dENvbG9yLFxuICBzZW5kQm94UGxhY2Vob2xkZXJDb2xvcixcbiAgc2VuZEJveFRleHRDb2xvcixcbiAgc3VidGxlXG59KSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG5cbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZW5kQm94QmFja2dyb3VuZCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuXG4gICAgICAnJjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgY29sb3I6IHNlbmRCb3hUZXh0Q29sb3JcbiAgICAgIH0sXG5cbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogc2VuZEJveERpc2FibGVkVGV4dENvbG9yIHx8IHN1YnRsZVxuICAgICAgfSxcblxuICAgICAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogc2VuZEJveFBsYWNlaG9sZGVyQ29sb3IgfHwgc3VidGxlXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
