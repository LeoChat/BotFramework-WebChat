'use strict';

var cov_2h97przrax = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBox.js';
  var hash = '394d6bee0546024b1b784e0e82d0959161e1551b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBox.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
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
        name: 'createSendBoxStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 42
          }
        },
        loc: {
          start: {
            line: 8,
            column: 3
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 8
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
    hash: '394d6bee0546024b1b784e0e82d0959161e1551b'
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
exports.default = createSendBoxStyle;

function createSendBoxStyle(_ref) {
  var sendBoxBackground = _ref.sendBoxBackground,
    sendBoxHeight = _ref.sendBoxHeight,
    sendBoxBorderBottom = _ref.sendBoxBorderBottom,
    sendBoxBorderLeft = _ref.sendBoxBorderLeft,
    sendBoxBorderRight = _ref.sendBoxBorderRight,
    sendBoxBorderTop = _ref.sendBoxBorderTop;
  cov_2h97przrax.f[0]++;
  cov_2h97przrax.s[0]++;
  return {
    '& > .main': {
      alignItems: 'stretch',
      backgroundColor: sendBoxBackground,
      borderBottom: sendBoxBorderBottom,
      borderLeft: sendBoxBorderLeft,
      borderRight: sendBoxBorderRight,
      borderTop: sendBoxBorderTop,
      minHeight: sendBoxHeight
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTZW5kQm94U3R5bGUiLCJzZW5kQm94QmFja2dyb3VuZCIsInNlbmRCb3hIZWlnaHQiLCJzZW5kQm94Qm9yZGVyQm90dG9tIiwic2VuZEJveEJvcmRlckxlZnQiLCJzZW5kQm94Qm9yZGVyUmlnaHQiLCJzZW5kQm94Qm9yZGVyVG9wIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsImJvcmRlclRvcCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0Esa0JBQVQsT0FPWjtBQUFBLE1BTkRDLGlCQU1DLFFBTkRBLGlCQU1DO0FBQUEsTUFMREMsYUFLQyxRQUxEQSxhQUtDO0FBQUEsTUFKREMsbUJBSUMsUUFKREEsbUJBSUM7QUFBQSxNQUhEQyxpQkFHQyxRQUhEQSxpQkFHQztBQUFBLE1BRkRDLGtCQUVDLFFBRkRBLGtCQUVDO0FBQUEsTUFEREMsZ0JBQ0MsUUFEREEsZ0JBQ0M7QUFBQTtBQUFBO0FBQ0QsU0FBTztBQUNMLGlCQUFhO0FBQ1hDLE1BQUFBLFVBQVUsRUFBRSxTQUREO0FBRVhDLE1BQUFBLGVBQWUsRUFBRVAsaUJBRk47QUFHWFEsTUFBQUEsWUFBWSxFQUFFTixtQkFISDtBQUlYTyxNQUFBQSxVQUFVLEVBQUVOLGlCQUpEO0FBS1hPLE1BQUFBLFdBQVcsRUFBRU4sa0JBTEY7QUFNWE8sTUFBQUEsU0FBUyxFQUFFTixnQkFOQTtBQU9YTyxNQUFBQSxTQUFTLEVBQUVYO0FBUEE7QUFEUixHQUFQO0FBV0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZW5kQm94U3R5bGUoe1xuICBzZW5kQm94QmFja2dyb3VuZCxcbiAgc2VuZEJveEhlaWdodCxcbiAgc2VuZEJveEJvcmRlckJvdHRvbSxcbiAgc2VuZEJveEJvcmRlckxlZnQsXG4gIHNlbmRCb3hCb3JkZXJSaWdodCxcbiAgc2VuZEJveEJvcmRlclRvcFxufSkge1xuICByZXR1cm4ge1xuICAgICcmID4gLm1haW4nOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbmRCb3hCYWNrZ3JvdW5kLFxuICAgICAgYm9yZGVyQm90dG9tOiBzZW5kQm94Qm9yZGVyQm90dG9tLFxuICAgICAgYm9yZGVyTGVmdDogc2VuZEJveEJvcmRlckxlZnQsXG4gICAgICBib3JkZXJSaWdodDogc2VuZEJveEJvcmRlclJpZ2h0LFxuICAgICAgYm9yZGVyVG9wOiBzZW5kQm94Qm9yZGVyVG9wLFxuICAgICAgbWluSGVpZ2h0OiBzZW5kQm94SGVpZ2h0XG4gICAgfVxuICB9O1xufVxuIl19
