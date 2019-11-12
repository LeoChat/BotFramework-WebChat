'use strict';

var cov_2o4h36msdz = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxButton.js';
  var hash = '6649522e2cb7682a020903cd40573ca31aceb45e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxButton.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 41,
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
            line: 8,
            column: 3
          },
          end: {
            line: 42,
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
            line: 30,
            column: 12
          },
          end: {
            line: 30,
            column: 40
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 30,
              column: 12
            },
            end: {
              line: 30,
              column: 30
            }
          },
          {
            start: {
              line: 30,
              column: 34
            },
            end: {
              line: 30,
              column: 40
            }
          }
        ],
        line: 30
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
    hash: '6649522e2cb7682a020903cd40573ca31aceb45e'
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
    sendBoxHeight = _ref.sendBoxHeight,
    subtle = _ref.subtle;
  cov_2o4h36msdz.f[0]++;
  cov_2o4h36msdz.s[0]++;
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
      fill: (cov_2o4h36msdz.b[0][0]++, sendBoxButtonColor) || (cov_2o4h36msdz.b[0][1]++, subtle)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTZW5kQm94QnV0dG9uU3R5bGUiLCJzZW5kQm94QnV0dG9uQ29sb3IiLCJzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJzZW5kQm94SGVpZ2h0Iiwic3VidGxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiaGVpZ2h0Iiwib3V0bGluZSIsInBhZGRpbmciLCJ3aWR0aCIsImZpbGwiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLHdCQUFULE9BT1o7QUFBQSxNQU5EQyxrQkFNQyxRQU5EQSxrQkFNQztBQUFBLE1BTERDLDRCQUtDLFFBTERBLDRCQUtDO0FBQUEsTUFKREMseUJBSUMsUUFKREEseUJBSUM7QUFBQSxNQUhEQyx5QkFHQyxRQUhEQSx5QkFHQztBQUFBLE1BRkRDLGFBRUMsUUFGREEsYUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQztBQUFBO0FBQUE7QUFDRCxTQUFPO0FBQ0xDLElBQUFBLGVBQWUsRUFBRSxhQURaO0FBRUxDLElBQUFBLE1BQU0sRUFBRSxDQUZIO0FBR0xDLElBQUFBLE1BQU0sRUFBRSxNQUhIO0FBSUxDLElBQUFBLE9BQU8sRUFBRSxDQUpKO0FBS0xDLElBQUFBLE9BQU8sRUFBRSxDQUxKO0FBT0w7QUFDQUMsSUFBQUEsS0FBSyxFQUFFUCxhQVJGO0FBVUwsd0JBQW9CO0FBQ2xCLHFCQUFlO0FBQ2JRLFFBQUFBLElBQUksRUFBRVY7QUFETyxPQURHO0FBS2xCLHFCQUFlO0FBQ2JVLFFBQUFBLElBQUksRUFBRVQ7QUFETztBQUxHLEtBVmY7QUFvQkwsYUFBUztBQUNQUyxNQUFBQSxJQUFJLEVBQUUsMkJBQUFaLGtCQUFrQixnQ0FBSUssTUFBSjtBQURqQixLQXBCSjtBQXdCTCxzQkFBa0I7QUFDaEJPLE1BQUFBLElBQUksRUFBRVg7QUFEVSxLQXhCYjtBQTRCTCxpQkFBYTtBQUNYWSxNQUFBQSxTQUFTLEVBQUUsWUFEQTtBQUVYQyxNQUFBQSxNQUFNLEVBQUU7QUFGRztBQTVCUixHQUFQO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VuZEJveEJ1dHRvblN0eWxlKHtcbiAgc2VuZEJveEJ1dHRvbkNvbG9yLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkZvY3VzLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkhvdmVyLFxuICBzZW5kQm94SGVpZ2h0LFxuICBzdWJ0bGVcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdUcmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAwLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgcGFkZGluZzogMCxcblxuICAgIC8vIFdlIHVzZSB0aGUgc2VuZEJveEhlaWdodCwgc28gdGhlIGJ1dHRvbiBsb29rcyBzcXVhcmVcbiAgICB3aWR0aDogc2VuZEJveEhlaWdodCxcblxuICAgICcmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgJyY6Zm9jdXMgc3ZnJzoge1xuICAgICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3JPbkZvY3VzXG4gICAgICB9LFxuXG4gICAgICAnJjpob3ZlciBzdmcnOiB7XG4gICAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJyYgc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yIHx8IHN1YnRsZVxuICAgIH0sXG5cbiAgICAnJjpkaXNhYmxlZCBzdmcnOiB7XG4gICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkXG4gICAgfSxcblxuICAgICcmLmJ0bi1ydGwnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoLTEpJyxcbiAgICAgIGZpbHRlcjogJ0ZsaXBIJ1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
