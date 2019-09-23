'use strict';

var cov_192l0a8f5a = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextArea.js';
  var hash = '99f859b6e31f2636655b2883e5e536e7a2f73193';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextArea.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 58,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createSendBoxTextAreaStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 50
          }
        },
        loc: {
          start: {
            line: 8,
            column: 3
          },
          end: {
            line: 59,
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
    hash: '99f859b6e31f2636655b2883e5e536e7a2f73193'
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
exports.default = createSendBoxTextAreaStyle;

function createSendBoxTextAreaStyle(_ref) {
  var paddingRegular = _ref.paddingRegular,
    primaryFont = _ref.primaryFont,
    sendBoxBackground = _ref.sendBoxBackground,
    sendBoxMaxHeight = _ref.sendBoxMaxHeight,
    sendBoxPlaceholderColor = _ref.sendBoxPlaceholderColor,
    sendBoxTextColor = _ref.sendBoxTextColor;
  cov_192l0a8f5a.f[0]++;
  cov_192l0a8f5a.s[0]++;
  return {
    alignItems: 'center',
    fontFamily: primaryFont,
    paddingBottom: paddingRegular,
    paddingLeft: paddingRegular,
    paddingRight: paddingRegular,
    paddingTop: paddingRegular,
    '& > div': {
      color: sendBoxTextColor,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      height: '100%',
      maxHeight: sendBoxMaxHeight,
      position: 'relative',
      width: 'inherit',
      '& > div': {
        color: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        height: '100%',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
        width: 'inherit',
        wordBreak: 'break-word'
      },
      '& > textarea': {
        backgroundColor: sendBoxBackground,
        border: 0,
        color: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        height: '100%',
        left: 0,
        outline: 'none',
        padding: 0,
        position: 'absolute',
        resize: 'none',
        top: 0,
        width: '100%',
        wordBreak: 'break-word',
        '&::placeholder': {
          color: sendBoxPlaceholderColor
        }
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveFRleHRBcmVhLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbmRCb3hUZXh0QXJlYVN0eWxlIiwicGFkZGluZ1JlZ3VsYXIiLCJwcmltYXJ5Rm9udCIsInNlbmRCb3hCYWNrZ3JvdW5kIiwic2VuZEJveE1heEhlaWdodCIsInNlbmRCb3hQbGFjZWhvbGRlckNvbG9yIiwic2VuZEJveFRleHRDb2xvciIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsImNvbG9yIiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIiwib3ZlcmZsb3dZIiwid2hpdGVTcGFjZSIsIndvcmRCcmVhayIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImxlZnQiLCJvdXRsaW5lIiwicGFkZGluZyIsInJlc2l6ZSIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsMEJBQVQsT0FPWjtBQUFBLE1BTkRDLGNBTUMsUUFOREEsY0FNQztBQUFBLE1BTERDLFdBS0MsUUFMREEsV0FLQztBQUFBLE1BSkRDLGlCQUlDLFFBSkRBLGlCQUlDO0FBQUEsTUFIREMsZ0JBR0MsUUFIREEsZ0JBR0M7QUFBQSxNQUZEQyx1QkFFQyxRQUZEQSx1QkFFQztBQUFBLE1BRERDLGdCQUNDLFFBRERBLGdCQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFFBRFA7QUFFTEMsSUFBQUEsVUFBVSxFQUFFTixXQUZQO0FBR0xPLElBQUFBLGFBQWEsRUFBRVIsY0FIVjtBQUlMUyxJQUFBQSxXQUFXLEVBQUVULGNBSlI7QUFLTFUsSUFBQUEsWUFBWSxFQUFFVixjQUxUO0FBTUxXLElBQUFBLFVBQVUsRUFBRVgsY0FOUDtBQVFMLGVBQVc7QUFDVFksTUFBQUEsS0FBSyxFQUFFUCxnQkFERTtBQUVURSxNQUFBQSxVQUFVLEVBQUUsU0FGSDtBQUdUTSxNQUFBQSxRQUFRLEVBQUUsU0FIRDtBQUlUQyxNQUFBQSxNQUFNLEVBQUUsTUFKQztBQUtUQyxNQUFBQSxTQUFTLEVBQUVaLGdCQUxGO0FBTVRhLE1BQUFBLFFBQVEsRUFBRSxVQU5EO0FBT1RDLE1BQUFBLEtBQUssRUFBRSxTQVBFO0FBU1QsaUJBQVc7QUFDVEwsUUFBQUEsS0FBSyxFQUFFLFNBREU7QUFFVEwsUUFBQUEsVUFBVSxFQUFFLFNBRkg7QUFHVE0sUUFBQUEsUUFBUSxFQUFFLFNBSEQ7QUFJVEMsUUFBQUEsTUFBTSxFQUFFLE1BSkM7QUFLVEksUUFBQUEsU0FBUyxFQUFFLE1BTEY7QUFNVEMsUUFBQUEsVUFBVSxFQUFFLFVBTkg7QUFPVEYsUUFBQUEsS0FBSyxFQUFFLFNBUEU7QUFRVEcsUUFBQUEsU0FBUyxFQUFFO0FBUkYsT0FURjtBQW9CVCxzQkFBZ0I7QUFDZEMsUUFBQUEsZUFBZSxFQUFFbkIsaUJBREg7QUFFZG9CLFFBQUFBLE1BQU0sRUFBRSxDQUZNO0FBR2RWLFFBQUFBLEtBQUssRUFBRSxTQUhPO0FBSWRMLFFBQUFBLFVBQVUsRUFBRSxTQUpFO0FBS2RNLFFBQUFBLFFBQVEsRUFBRSxTQUxJO0FBTWRDLFFBQUFBLE1BQU0sRUFBRSxNQU5NO0FBT2RTLFFBQUFBLElBQUksRUFBRSxDQVBRO0FBUWRDLFFBQUFBLE9BQU8sRUFBRSxNQVJLO0FBU2RDLFFBQUFBLE9BQU8sRUFBRSxDQVRLO0FBVWRULFFBQUFBLFFBQVEsRUFBRSxVQVZJO0FBV2RVLFFBQUFBLE1BQU0sRUFBRSxNQVhNO0FBWWRDLFFBQUFBLEdBQUcsRUFBRSxDQVpTO0FBYWRWLFFBQUFBLEtBQUssRUFBRSxNQWJPO0FBY2RHLFFBQUFBLFNBQVMsRUFBRSxZQWRHO0FBZ0JkLDBCQUFrQjtBQUNoQlIsVUFBQUEsS0FBSyxFQUFFUjtBQURTO0FBaEJKO0FBcEJQO0FBUk4sR0FBUDtBQWtERCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNlbmRCb3hUZXh0QXJlYVN0eWxlKHtcbiAgcGFkZGluZ1JlZ3VsYXIsXG4gIHByaW1hcnlGb250LFxuICBzZW5kQm94QmFja2dyb3VuZCxcbiAgc2VuZEJveE1heEhlaWdodCxcbiAgc2VuZEJveFBsYWNlaG9sZGVyQ29sb3IsXG4gIHNlbmRCb3hUZXh0Q29sb3Jcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udCxcbiAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nUmVndWxhcixcbiAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1JlZ3VsYXIsXG4gICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmVndWxhcixcbiAgICBwYWRkaW5nVG9wOiBwYWRkaW5nUmVndWxhcixcblxuICAgICcmID4gZGl2Jzoge1xuICAgICAgY29sb3I6IHNlbmRCb3hUZXh0Q29sb3IsXG4gICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhIZWlnaHQ6IHNlbmRCb3hNYXhIZWlnaHQsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG5cbiAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCdcbiAgICAgIH0sXG5cbiAgICAgICcmID4gdGV4dGFyZWEnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VuZEJveEJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG5cbiAgICAgICAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgIGNvbG9yOiBzZW5kQm94UGxhY2Vob2xkZXJDb2xvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
