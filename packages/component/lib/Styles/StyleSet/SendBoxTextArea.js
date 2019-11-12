'use strict';

var cov_1fj1swkd0a = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextArea.js';
  var hash = 'ff6f5f3f3b61a6397adaa2aa217bacd0f72f76aa';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SendBoxTextArea.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
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
            line: 9,
            column: 3
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 55,
            column: 17
          },
          end: {
            line: 55,
            column: 50
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 55,
              column: 17
            },
            end: {
              line: 55,
              column: 40
            }
          },
          {
            start: {
              line: 55,
              column: 44
            },
            end: {
              line: 55,
              column: 50
            }
          }
        ],
        line: 55
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
    hash: 'ff6f5f3f3b61a6397adaa2aa217bacd0f72f76aa'
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
    sendBoxTextColor = _ref.sendBoxTextColor,
    subtle = _ref.subtle;
  cov_1fj1swkd0a.f[0]++;
  cov_1fj1swkd0a.s[0]++;
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
          color: (cov_1fj1swkd0a.b[0][0]++, sendBoxPlaceholderColor) || (cov_1fj1swkd0a.b[0][1]++, subtle)
        }
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveFRleHRBcmVhLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbmRCb3hUZXh0QXJlYVN0eWxlIiwicGFkZGluZ1JlZ3VsYXIiLCJwcmltYXJ5Rm9udCIsInNlbmRCb3hCYWNrZ3JvdW5kIiwic2VuZEJveE1heEhlaWdodCIsInNlbmRCb3hQbGFjZWhvbGRlckNvbG9yIiwic2VuZEJveFRleHRDb2xvciIsInN1YnRsZSIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsImNvbG9yIiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIiwib3ZlcmZsb3dZIiwid2hpdGVTcGFjZSIsIndvcmRCcmVhayIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImxlZnQiLCJvdXRsaW5lIiwicGFkZGluZyIsInJlc2l6ZSIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsMEJBQVQsT0FRWjtBQUFBLE1BUERDLGNBT0MsUUFQREEsY0FPQztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLGlCQUtDLFFBTERBLGlCQUtDO0FBQUEsTUFKREMsZ0JBSUMsUUFKREEsZ0JBSUM7QUFBQSxNQUhEQyx1QkFHQyxRQUhEQSx1QkFHQztBQUFBLE1BRkRDLGdCQUVDLFFBRkRBLGdCQUVDO0FBQUEsTUFEREMsTUFDQyxRQUREQSxNQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFFBRFA7QUFFTEMsSUFBQUEsVUFBVSxFQUFFUCxXQUZQO0FBR0xRLElBQUFBLGFBQWEsRUFBRVQsY0FIVjtBQUlMVSxJQUFBQSxXQUFXLEVBQUVWLGNBSlI7QUFLTFcsSUFBQUEsWUFBWSxFQUFFWCxjQUxUO0FBTUxZLElBQUFBLFVBQVUsRUFBRVosY0FOUDtBQVFMLGVBQVc7QUFDVGEsTUFBQUEsS0FBSyxFQUFFUixnQkFERTtBQUVURyxNQUFBQSxVQUFVLEVBQUUsU0FGSDtBQUdUTSxNQUFBQSxRQUFRLEVBQUUsU0FIRDtBQUlUQyxNQUFBQSxNQUFNLEVBQUUsTUFKQztBQUtUQyxNQUFBQSxTQUFTLEVBQUViLGdCQUxGO0FBTVRjLE1BQUFBLFFBQVEsRUFBRSxVQU5EO0FBT1RDLE1BQUFBLEtBQUssRUFBRSxTQVBFO0FBU1QsaUJBQVc7QUFDVEwsUUFBQUEsS0FBSyxFQUFFLFNBREU7QUFFVEwsUUFBQUEsVUFBVSxFQUFFLFNBRkg7QUFHVE0sUUFBQUEsUUFBUSxFQUFFLFNBSEQ7QUFJVEMsUUFBQUEsTUFBTSxFQUFFLE1BSkM7QUFLVEksUUFBQUEsU0FBUyxFQUFFLE1BTEY7QUFNVEMsUUFBQUEsVUFBVSxFQUFFLFVBTkg7QUFPVEYsUUFBQUEsS0FBSyxFQUFFLFNBUEU7QUFRVEcsUUFBQUEsU0FBUyxFQUFFO0FBUkYsT0FURjtBQW9CVCxzQkFBZ0I7QUFDZEMsUUFBQUEsZUFBZSxFQUFFcEIsaUJBREg7QUFFZHFCLFFBQUFBLE1BQU0sRUFBRSxDQUZNO0FBR2RWLFFBQUFBLEtBQUssRUFBRSxTQUhPO0FBSWRMLFFBQUFBLFVBQVUsRUFBRSxTQUpFO0FBS2RNLFFBQUFBLFFBQVEsRUFBRSxTQUxJO0FBTWRDLFFBQUFBLE1BQU0sRUFBRSxNQU5NO0FBT2RTLFFBQUFBLElBQUksRUFBRSxDQVBRO0FBUWRDLFFBQUFBLE9BQU8sRUFBRSxNQVJLO0FBU2RDLFFBQUFBLE9BQU8sRUFBRSxDQVRLO0FBVWRULFFBQUFBLFFBQVEsRUFBRSxVQVZJO0FBV2RVLFFBQUFBLE1BQU0sRUFBRSxNQVhNO0FBWWRDLFFBQUFBLEdBQUcsRUFBRSxDQVpTO0FBYWRWLFFBQUFBLEtBQUssRUFBRSxNQWJPO0FBY2RHLFFBQUFBLFNBQVMsRUFBRSxZQWRHO0FBZ0JkLDBCQUFrQjtBQUNoQlIsVUFBQUEsS0FBSyxFQUFFLDJCQUFBVCx1QkFBdUIsZ0NBQUlFLE1BQUo7QUFEZDtBQWhCSjtBQXBCUDtBQVJOLEdBQVA7QUFrREQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZW5kQm94VGV4dEFyZWFTdHlsZSh7XG4gIHBhZGRpbmdSZWd1bGFyLFxuICBwcmltYXJ5Rm9udCxcbiAgc2VuZEJveEJhY2tncm91bmQsXG4gIHNlbmRCb3hNYXhIZWlnaHQsXG4gIHNlbmRCb3hQbGFjZWhvbGRlckNvbG9yLFxuICBzZW5kQm94VGV4dENvbG9yLFxuICBzdWJ0bGVcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udCxcbiAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nUmVndWxhcixcbiAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1JlZ3VsYXIsXG4gICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmVndWxhcixcbiAgICBwYWRkaW5nVG9wOiBwYWRkaW5nUmVndWxhcixcblxuICAgICcmID4gZGl2Jzoge1xuICAgICAgY29sb3I6IHNlbmRCb3hUZXh0Q29sb3IsXG4gICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhIZWlnaHQ6IHNlbmRCb3hNYXhIZWlnaHQsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG5cbiAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCdcbiAgICAgIH0sXG5cbiAgICAgICcmID4gdGV4dGFyZWEnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VuZEJveEJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG5cbiAgICAgICAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgIGNvbG9yOiBzZW5kQm94UGxhY2Vob2xkZXJDb2xvciB8fCBzdWJ0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
