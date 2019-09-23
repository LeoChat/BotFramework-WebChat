'use strict';

var cov_2hjiwstjl = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxButton.js';
  var hash = '54e205a5cff263acfa7dda7605e794dc49f61d99';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxButton.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 40,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createSendBoxButtonStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 48
          }
        },
        loc: {
          start: {
            line: 7,
            column: 3
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 7
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
    hash: '54e205a5cff263acfa7dda7605e794dc49f61d99'
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
exports.default = createSendBoxButtonStyle;

function createSendBoxButtonStyle(_ref) {
  var sendBoxButtonColor = _ref.sendBoxButtonColor,
    sendBoxButtonColorOnDisabled = _ref.sendBoxButtonColorOnDisabled,
    sendBoxButtonColorOnFocus = _ref.sendBoxButtonColorOnFocus,
    sendBoxButtonColorOnHover = _ref.sendBoxButtonColorOnHover,
    sendBoxHeight = _ref.sendBoxHeight;
  cov_2hjiwstjl.f[0]++;
  cov_2hjiwstjl.s[0]++;
  return {
    backgroundColor: 'Transparent',
    border: 0,
    height: '100%',
    outline: 0,
    padding: 0,
    // We use the sendBoxHeight, so the button looks square
    width: sendBoxHeight,
    '&:not(:disabled)': {
      '&:focus svg': {
        fill: sendBoxButtonColorOnFocus
      },
      '&:hover svg': {
        fill: sendBoxButtonColorOnHover
      }
    },
    '& svg': {
      fill: sendBoxButtonColor
    },
    '&:disabled svg': {
      fill: sendBoxButtonColorOnDisabled
    },
    '&.btn-rtl': {
      transform: 'scaleX(-1)',
      filter: 'FlipH'
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTZW5kQm94QnV0dG9uU3R5bGUiLCJzZW5kQm94QnV0dG9uQ29sb3IiLCJzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJzZW5kQm94SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiaGVpZ2h0Iiwib3V0bGluZSIsInBhZGRpbmciLCJ3aWR0aCIsImZpbGwiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLHdCQUFULE9BTVo7QUFBQSxNQUxEQyxrQkFLQyxRQUxEQSxrQkFLQztBQUFBLE1BSkRDLDRCQUlDLFFBSkRBLDRCQUlDO0FBQUEsTUFIREMseUJBR0MsUUFIREEseUJBR0M7QUFBQSxNQUZEQyx5QkFFQyxRQUZEQSx5QkFFQztBQUFBLE1BRERDLGFBQ0MsUUFEREEsYUFDQztBQUFBO0FBQUE7QUFDRCxTQUFPO0FBQ0xDLElBQUFBLGVBQWUsRUFBRSxhQURaO0FBRUxDLElBQUFBLE1BQU0sRUFBRSxDQUZIO0FBR0xDLElBQUFBLE1BQU0sRUFBRSxNQUhIO0FBSUxDLElBQUFBLE9BQU8sRUFBRSxDQUpKO0FBS0xDLElBQUFBLE9BQU8sRUFBRSxDQUxKO0FBT0w7QUFDQUMsSUFBQUEsS0FBSyxFQUFFTixhQVJGO0FBVUwsd0JBQW9CO0FBQ2xCLHFCQUFlO0FBQ2JPLFFBQUFBLElBQUksRUFBRVQ7QUFETyxPQURHO0FBS2xCLHFCQUFlO0FBQ2JTLFFBQUFBLElBQUksRUFBRVI7QUFETztBQUxHLEtBVmY7QUFvQkwsYUFBUztBQUNQUSxNQUFBQSxJQUFJLEVBQUVYO0FBREMsS0FwQko7QUF3Qkwsc0JBQWtCO0FBQ2hCVyxNQUFBQSxJQUFJLEVBQUVWO0FBRFUsS0F4QmI7QUE0QkwsaUJBQWE7QUFDWFcsTUFBQUEsU0FBUyxFQUFFLFlBREE7QUFFWEMsTUFBQUEsTUFBTSxFQUFFO0FBRkc7QUE1QlIsR0FBUDtBQWlDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNlbmRCb3hCdXR0b25TdHlsZSh7XG4gIHNlbmRCb3hCdXR0b25Db2xvcixcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25EaXNhYmxlZCxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Ib3ZlcixcbiAgc2VuZEJveEhlaWdodFxufSkge1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ1RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiAwLFxuXG4gICAgLy8gV2UgdXNlIHRoZSBzZW5kQm94SGVpZ2h0LCBzbyB0aGUgYnV0dG9uIGxvb2tzIHNxdWFyZVxuICAgIHdpZHRoOiBzZW5kQm94SGVpZ2h0LFxuXG4gICAgJyY6bm90KDpkaXNhYmxlZCknOiB7XG4gICAgICAnJjpmb2N1cyBzdmcnOiB7XG4gICAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uRm9jdXNcbiAgICAgIH0sXG5cbiAgICAgICcmOmhvdmVyIHN2Zyc6IHtcbiAgICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yT25Ib3ZlclxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnJiBzdmcnOiB7XG4gICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3JcbiAgICB9LFxuXG4gICAgJyY6ZGlzYWJsZWQgc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yT25EaXNhYmxlZFxuICAgIH0sXG5cbiAgICAnJi5idG4tcnRsJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKC0xKScsXG4gICAgICBmaWx0ZXI6ICdGbGlwSCdcbiAgICB9XG4gIH07XG59XG4iXX0=
