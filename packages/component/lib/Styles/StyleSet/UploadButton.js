'use strict';

var cov_20nlfp5eic = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/UploadButton.js';
  var hash = '6a646dd036ca58cf880189fce14ce806048e21ab';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/UploadButton.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createUploadButtonStyle',
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
            line: 7,
            column: 3
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 13,
            column: 12
          },
          end: {
            line: 13,
            column: 40
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 13,
              column: 12
            },
            end: {
              line: 13,
              column: 30
            }
          },
          {
            start: {
              line: 13,
              column: 34
            },
            end: {
              line: 13,
              column: 40
            }
          }
        ],
        line: 13
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
    hash: '6a646dd036ca58cf880189fce14ce806048e21ab'
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
exports.default = createUploadButtonStyle;

function createUploadButtonStyle(_ref) {
  var sendBoxButtonColor = _ref.sendBoxButtonColor,
    sendBoxButtonColorOnFocus = _ref.sendBoxButtonColorOnFocus,
    sendBoxButtonColorOnHover = _ref.sendBoxButtonColorOnHover,
    sendBoxHeight = _ref.sendBoxHeight,
    subtle = _ref.subtle;
  cov_20nlfp5eic.f[0]++;
  cov_20nlfp5eic.s[0]++;
  return {
    // We use the sendBoxHeight, so the button looks square
    width: sendBoxHeight,
    '& > .icon > svg': {
      fill: (cov_20nlfp5eic.b[0][0]++, sendBoxButtonColor) || (cov_20nlfp5eic.b[0][1]++, subtle)
    },
    '& > input:hover + .icon > svg': {
      fill: sendBoxButtonColorOnHover
    },
    '& > input:focus + .icon > svg': {
      fill: sendBoxButtonColorOnFocus
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvVXBsb2FkQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVVwbG9hZEJ1dHRvblN0eWxlIiwic2VuZEJveEJ1dHRvbkNvbG9yIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJzZW5kQm94SGVpZ2h0Iiwic3VidGxlIiwid2lkdGgiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSx1QkFBVCxPQU1aO0FBQUEsTUFMREMsa0JBS0MsUUFMREEsa0JBS0M7QUFBQSxNQUpEQyx5QkFJQyxRQUpEQSx5QkFJQztBQUFBLE1BSERDLHlCQUdDLFFBSERBLHlCQUdDO0FBQUEsTUFGREMsYUFFQyxRQUZEQSxhQUVDO0FBQUEsTUFEREMsTUFDQyxRQUREQSxNQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTDtBQUNBQyxJQUFBQSxLQUFLLEVBQUVGLGFBRkY7QUFJTCx1QkFBbUI7QUFDakJHLE1BQUFBLElBQUksRUFBRSwyQkFBQU4sa0JBQWtCLGdDQUFJSSxNQUFKO0FBRFAsS0FKZDtBQVFMLHFDQUFpQztBQUMvQkUsTUFBQUEsSUFBSSxFQUFFSjtBQUR5QixLQVI1QjtBQVlMLHFDQUFpQztBQUMvQkksTUFBQUEsSUFBSSxFQUFFTDtBQUR5QjtBQVo1QixHQUFQO0FBZ0JEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVXBsb2FkQnV0dG9uU3R5bGUoe1xuICBzZW5kQm94QnV0dG9uQ29sb3IsXG4gIHNlbmRCb3hCdXR0b25Db2xvck9uRm9jdXMsXG4gIHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIsXG4gIHNlbmRCb3hIZWlnaHQsXG4gIHN1YnRsZVxufSkge1xuICByZXR1cm4ge1xuICAgIC8vIFdlIHVzZSB0aGUgc2VuZEJveEhlaWdodCwgc28gdGhlIGJ1dHRvbiBsb29rcyBzcXVhcmVcbiAgICB3aWR0aDogc2VuZEJveEhlaWdodCxcblxuICAgICcmID4gLmljb24gPiBzdmcnOiB7XG4gICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3IgfHwgc3VidGxlXG4gICAgfSxcblxuICAgICcmID4gaW5wdXQ6aG92ZXIgKyAuaWNvbiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXJcbiAgICB9LFxuXG4gICAgJyYgPiBpbnB1dDpmb2N1cyArIC5pY29uID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1c1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
