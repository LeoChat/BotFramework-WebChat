'use strict';

var cov_wjujszkzl = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SuggestedAction.js';
  var hash = '400e949e736059e1db0ad9ded76fb5b564441deb';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SuggestedAction.js',
    statementMap: {
      '0': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 59,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createSuggestedActionStyle',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 50
          }
        },
        loc: {
          start: {
            line: 22,
            column: 3
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 39,
            column: 20
          },
          end: {
            line: 39,
            column: 82
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 39,
              column: 20
            },
            end: {
              line: 39,
              column: 53
            }
          },
          {
            start: {
              line: 39,
              column: 57
            },
            end: {
              line: 39,
              column: 82
            }
          }
        ],
        line: 39
      },
      '1': {
        loc: {
          start: {
            line: 43,
            column: 15
          },
          end: {
            line: 43,
            column: 57
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 43,
              column: 15
            },
            end: {
              line: 43,
              column: 47
            }
          },
          {
            start: {
              line: 43,
              column: 51
            },
            end: {
              line: 43,
              column: 57
            }
          }
        ],
        line: 43
      },
      '2': {
        loc: {
          start: {
            line: 48,
            column: 21
          },
          end: {
            line: 48,
            column: 57
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 48,
              column: 21
            },
            end: {
              line: 48,
              column: 47
            }
          },
          {
            start: {
              line: 48,
              column: 51
            },
            end: {
              line: 48,
              column: 57
            }
          }
        ],
        line: 48
      },
      '3': {
        loc: {
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 51,
            column: 49
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 51,
              column: 15
            },
            end: {
              line: 51,
              column: 39
            }
          },
          {
            start: {
              line: 51,
              column: 43
            },
            end: {
              line: 51,
              column: 49
            }
          }
        ],
        line: 51
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
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '400e949e736059e1db0ad9ded76fb5b564441deb'
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
exports.default = createSuggestedActionStyle;

/* eslint no-magic-numbers: "off" */
function createSuggestedActionStyle(_ref) {
  var accent = _ref.accent,
    paddingRegular = _ref.paddingRegular,
    paddingWide = _ref.paddingWide,
    primaryFont = _ref.primaryFont,
    suggestedActionBackground = _ref.suggestedActionBackground,
    suggestedActionBorderColor = _ref.suggestedActionBorderColor,
    suggestedActionBorderStyle = _ref.suggestedActionBorderStyle,
    suggestedActionBorderWidth = _ref.suggestedActionBorderWidth,
    suggestedActionBorderRadius = _ref.suggestedActionBorderRadius,
    suggestedActionImageHeight = _ref.suggestedActionImageHeight,
    suggestedActionTextColor = _ref.suggestedActionTextColor,
    suggestedActionDisabledBackground = _ref.suggestedActionDisabledBackground,
    suggestedActionDisabledBorderColor = _ref.suggestedActionDisabledBorderColor,
    suggestedActionDisabledBorderStyle = _ref.suggestedActionDisabledBorderStyle,
    suggestedActionDisabledBorderWidth = _ref.suggestedActionDisabledBorderWidth,
    suggestedActionDisabledTextColor = _ref.suggestedActionDisabledTextColor,
    suggestedActionHeight = _ref.suggestedActionHeight,
    subtle = _ref.subtle;
  cov_wjujszkzl.f[0]++;
  cov_wjujszkzl.s[0]++;
  return {
    paddingBottom: paddingRegular,
    paddingLeft: paddingRegular / 2,
    paddingRight: paddingRegular / 2,
    paddingTop: paddingRegular,
    '& > button': {
      alignItems: 'center',
      borderRadius: suggestedActionBorderRadius,
      fontFamily: primaryFont,
      fontSize: 'inherit',
      height: suggestedActionHeight,
      paddingLeft: paddingWide,
      paddingRight: paddingWide,
      '&:disabled': {
        background:
          (cov_wjujszkzl.b[0][0]++, suggestedActionDisabledBackground) ||
          (cov_wjujszkzl.b[0][1]++, suggestedActionBackground),
        borderColor: suggestedActionDisabledBorderColor,
        borderStyle: suggestedActionDisabledBorderStyle,
        borderWidth: suggestedActionDisabledBorderWidth,
        color: (cov_wjujszkzl.b[1][0]++, suggestedActionDisabledTextColor) || (cov_wjujszkzl.b[1][1]++, subtle)
      },
      '&:not(:disabled)': {
        background: suggestedActionBackground,
        borderColor: (cov_wjujszkzl.b[2][0]++, suggestedActionBorderColor) || (cov_wjujszkzl.b[2][1]++, accent),
        borderStyle: suggestedActionBorderStyle,
        borderWidth: suggestedActionBorderWidth,
        color: (cov_wjujszkzl.b[3][0]++, suggestedActionTextColor) || (cov_wjujszkzl.b[3][1]++, accent)
      },
      '& > img': {
        height: suggestedActionImageHeight,
        paddingRight: paddingRegular
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3VnZ2VzdGVkQWN0aW9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN1Z2dlc3RlZEFjdGlvblN0eWxlIiwiYWNjZW50IiwicGFkZGluZ1JlZ3VsYXIiLCJwYWRkaW5nV2lkZSIsInByaW1hcnlGb250Iiwic3VnZ2VzdGVkQWN0aW9uQmFja2dyb3VuZCIsInN1Z2dlc3RlZEFjdGlvbkJvcmRlckNvbG9yIiwic3VnZ2VzdGVkQWN0aW9uQm9yZGVyU3R5bGUiLCJzdWdnZXN0ZWRBY3Rpb25Cb3JkZXJXaWR0aCIsInN1Z2dlc3RlZEFjdGlvbkJvcmRlclJhZGl1cyIsInN1Z2dlc3RlZEFjdGlvbkltYWdlSGVpZ2h0Iiwic3VnZ2VzdGVkQWN0aW9uVGV4dENvbG9yIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCYWNrZ3JvdW5kIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCb3JkZXJDb2xvciIsInN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyU3R5bGUiLCJzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlcldpZHRoIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRUZXh0Q29sb3IiLCJzdWdnZXN0ZWRBY3Rpb25IZWlnaHQiLCJzdWJ0bGUiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSwwQkFBVCxPQW1CWjtBQUFBLE1BbEJEQyxNQWtCQyxRQWxCREEsTUFrQkM7QUFBQSxNQWpCREMsY0FpQkMsUUFqQkRBLGNBaUJDO0FBQUEsTUFoQkRDLFdBZ0JDLFFBaEJEQSxXQWdCQztBQUFBLE1BZkRDLFdBZUMsUUFmREEsV0FlQztBQUFBLE1BZERDLHlCQWNDLFFBZERBLHlCQWNDO0FBQUEsTUFiREMsMEJBYUMsUUFiREEsMEJBYUM7QUFBQSxNQVpEQywwQkFZQyxRQVpEQSwwQkFZQztBQUFBLE1BWERDLDBCQVdDLFFBWERBLDBCQVdDO0FBQUEsTUFWREMsMkJBVUMsUUFWREEsMkJBVUM7QUFBQSxNQVREQywwQkFTQyxRQVREQSwwQkFTQztBQUFBLE1BUkRDLHdCQVFDLFFBUkRBLHdCQVFDO0FBQUEsTUFQREMsaUNBT0MsUUFQREEsaUNBT0M7QUFBQSxNQU5EQyxrQ0FNQyxRQU5EQSxrQ0FNQztBQUFBLE1BTERDLGtDQUtDLFFBTERBLGtDQUtDO0FBQUEsTUFKREMsa0NBSUMsUUFKREEsa0NBSUM7QUFBQSxNQUhEQyxnQ0FHQyxRQUhEQSxnQ0FHQztBQUFBLE1BRkRDLHFCQUVDLFFBRkRBLHFCQUVDO0FBQUEsTUFEREMsTUFDQyxRQUREQSxNQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTEMsSUFBQUEsYUFBYSxFQUFFakIsY0FEVjtBQUVMa0IsSUFBQUEsV0FBVyxFQUFFbEIsY0FBYyxHQUFHLENBRnpCO0FBR0xtQixJQUFBQSxZQUFZLEVBQUVuQixjQUFjLEdBQUcsQ0FIMUI7QUFJTG9CLElBQUFBLFVBQVUsRUFBRXBCLGNBSlA7QUFNTCxrQkFBYztBQUNacUIsTUFBQUEsVUFBVSxFQUFFLFFBREE7QUFFWkMsTUFBQUEsWUFBWSxFQUFFZiwyQkFGRjtBQUdaZ0IsTUFBQUEsVUFBVSxFQUFFckIsV0FIQTtBQUlac0IsTUFBQUEsUUFBUSxFQUFFLFNBSkU7QUFLWkMsTUFBQUEsTUFBTSxFQUFFVixxQkFMSTtBQU1aRyxNQUFBQSxXQUFXLEVBQUVqQixXQU5EO0FBT1prQixNQUFBQSxZQUFZLEVBQUVsQixXQVBGO0FBU1osb0JBQWM7QUFDWnlCLFFBQUFBLFVBQVUsRUFBRSwwQkFBQWhCLGlDQUFpQywrQkFBSVAseUJBQUosQ0FEakM7QUFFWndCLFFBQUFBLFdBQVcsRUFBRWhCLGtDQUZEO0FBR1ppQixRQUFBQSxXQUFXLEVBQUVoQixrQ0FIRDtBQUlaaUIsUUFBQUEsV0FBVyxFQUFFaEIsa0NBSkQ7QUFLWmlCLFFBQUFBLEtBQUssRUFBRSwwQkFBQWhCLGdDQUFnQywrQkFBSUUsTUFBSjtBQUwzQixPQVRGO0FBaUJaLDBCQUFvQjtBQUNsQlUsUUFBQUEsVUFBVSxFQUFFdkIseUJBRE07QUFFbEJ3QixRQUFBQSxXQUFXLEVBQUUsMEJBQUF2QiwwQkFBMEIsK0JBQUlMLE1BQUosQ0FGckI7QUFHbEI2QixRQUFBQSxXQUFXLEVBQUV2QiwwQkFISztBQUlsQndCLFFBQUFBLFdBQVcsRUFBRXZCLDBCQUpLO0FBS2xCd0IsUUFBQUEsS0FBSyxFQUFFLDBCQUFBckIsd0JBQXdCLCtCQUFJVixNQUFKO0FBTGIsT0FqQlI7QUF5QlosaUJBQVc7QUFDVDBCLFFBQUFBLE1BQU0sRUFBRWpCLDBCQURDO0FBRVRXLFFBQUFBLFlBQVksRUFBRW5CO0FBRkw7QUF6QkM7QUFOVCxHQUFQO0FBcUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFwib2ZmXCIgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3VnZ2VzdGVkQWN0aW9uU3R5bGUoe1xuICBhY2NlbnQsXG4gIHBhZGRpbmdSZWd1bGFyLFxuICBwYWRkaW5nV2lkZSxcbiAgcHJpbWFyeUZvbnQsXG4gIHN1Z2dlc3RlZEFjdGlvbkJhY2tncm91bmQsXG4gIHN1Z2dlc3RlZEFjdGlvbkJvcmRlckNvbG9yLFxuICBzdWdnZXN0ZWRBY3Rpb25Cb3JkZXJTdHlsZSxcbiAgc3VnZ2VzdGVkQWN0aW9uQm9yZGVyV2lkdGgsXG4gIHN1Z2dlc3RlZEFjdGlvbkJvcmRlclJhZGl1cyxcbiAgc3VnZ2VzdGVkQWN0aW9uSW1hZ2VIZWlnaHQsXG4gIHN1Z2dlc3RlZEFjdGlvblRleHRDb2xvcixcbiAgc3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCYWNrZ3JvdW5kLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlckNvbG9yLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlclN0eWxlLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlcldpZHRoLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZFRleHRDb2xvcixcbiAgc3VnZ2VzdGVkQWN0aW9uSGVpZ2h0LFxuICBzdWJ0bGVcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nUmVndWxhcixcbiAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1JlZ3VsYXIgLyAyLFxuICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ1JlZ3VsYXIgLyAyLFxuICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdSZWd1bGFyLFxuXG4gICAgJyYgPiBidXR0b24nOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogc3VnZ2VzdGVkQWN0aW9uQm9yZGVyUmFkaXVzLFxuICAgICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiBzdWdnZXN0ZWRBY3Rpb25IZWlnaHQsXG4gICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1dpZGUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdXaWRlLFxuXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogc3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCYWNrZ3JvdW5kIHx8IHN1Z2dlc3RlZEFjdGlvbkJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJTdHlsZTogc3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCb3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyV2lkdGgsXG4gICAgICAgIGNvbG9yOiBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZFRleHRDb2xvciB8fCBzdWJ0bGVcbiAgICAgIH0sXG5cbiAgICAgICcmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBzdWdnZXN0ZWRBY3Rpb25CYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXJDb2xvcjogc3VnZ2VzdGVkQWN0aW9uQm9yZGVyQ29sb3IgfHwgYWNjZW50LFxuICAgICAgICBib3JkZXJTdHlsZTogc3VnZ2VzdGVkQWN0aW9uQm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcldpZHRoOiBzdWdnZXN0ZWRBY3Rpb25Cb3JkZXJXaWR0aCxcbiAgICAgICAgY29sb3I6IHN1Z2dlc3RlZEFjdGlvblRleHRDb2xvciB8fCBhY2NlbnRcbiAgICAgIH0sXG5cbiAgICAgICcmID4gaW1nJzoge1xuICAgICAgICBoZWlnaHQ6IHN1Z2dlc3RlZEFjdGlvbkltYWdlSGVpZ2h0LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
