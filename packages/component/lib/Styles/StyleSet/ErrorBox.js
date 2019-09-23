'use strict';

var cov_z9h2wwu5g = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ErrorBox.js';
  var hash = 'aead737c98681d3b6fe3c5e1f36e2302302ab9a6';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ErrorBox.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 36,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createErrorBoxStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 43
          }
        },
        loc: {
          start: {
            line: 1,
            column: 76
          },
          end: {
            line: 37,
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
    hash: 'aead737c98681d3b6fe3c5e1f36e2302302ab9a6'
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
exports.default = createErrorBoxStyle;

function createErrorBoxStyle(_ref) {
  var monospaceFont = _ref.monospaceFont,
    primaryFont = _ref.primaryFont;
  cov_z9h2wwu5g.f[0]++;
  cov_z9h2wwu5g.s[0]++;
  return {
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    flexDirection: 'column',
    fontFamily: primaryFont,
    margin: 0,
    minHeight: 20,
    maxHeight: 200,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    '& > :first-child': {
      backgroundColor: '#EF0000',
      color: 'White',
      padding: '5px 10px'
    },
    '& > :last-child': {
      borderColor: '#EF0000',
      borderStyle: 'dashed',
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderTopWidth: 0,
      margin: 0,
      overflowY: 'auto',
      padding: 10,
      '& > pre': {
        fontFamily: monospaceFont,
        fontSize: '60%',
        margin: 0
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvRXJyb3JCb3guanMiXSwibmFtZXMiOlsiY3JlYXRlRXJyb3JCb3hTdHlsZSIsIm1vbm9zcGFjZUZvbnQiLCJwcmltYXJ5Rm9udCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZm9udEZhbWlseSIsIm1hcmdpbiIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTdHlsZSIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLG1CQUFULE9BQTZEO0FBQUEsTUFBOUJDLGFBQThCLFFBQTlCQSxhQUE4QjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUFBO0FBQUE7QUFDMUUsU0FBTztBQUNMO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxNQUZKO0FBR0xDLElBQUFBLGFBQWEsRUFBRSxRQUhWO0FBSUxDLElBQUFBLFVBQVUsRUFBRUgsV0FKUDtBQUtMSSxJQUFBQSxNQUFNLEVBQUUsQ0FMSDtBQU1MQyxJQUFBQSxTQUFTLEVBQUUsRUFOTjtBQU9MQyxJQUFBQSxTQUFTLEVBQUUsR0FQTjtBQVFMQyxJQUFBQSxTQUFTLEVBQUUsTUFSTjtBQVNMQyxJQUFBQSx1QkFBdUIsRUFBRSxPQVRwQjtBQVdMLHdCQUFvQjtBQUNsQkMsTUFBQUEsZUFBZSxFQUFFLFNBREM7QUFFbEJDLE1BQUFBLEtBQUssRUFBRSxPQUZXO0FBR2xCQyxNQUFBQSxPQUFPLEVBQUU7QUFIUyxLQVhmO0FBaUJMLHVCQUFtQjtBQUNqQkMsTUFBQUEsV0FBVyxFQUFFLFNBREk7QUFFakJDLE1BQUFBLFdBQVcsRUFBRSxRQUZJO0FBR2pCQyxNQUFBQSxpQkFBaUIsRUFBRSxDQUhGO0FBSWpCQyxNQUFBQSxlQUFlLEVBQUUsQ0FKQTtBQUtqQkMsTUFBQUEsZ0JBQWdCLEVBQUUsQ0FMRDtBQU1qQkMsTUFBQUEsY0FBYyxFQUFFLENBTkM7QUFPakJiLE1BQUFBLE1BQU0sRUFBRSxDQVBTO0FBUWpCRyxNQUFBQSxTQUFTLEVBQUUsTUFSTTtBQVNqQkksTUFBQUEsT0FBTyxFQUFFLEVBVFE7QUFXakIsaUJBQVc7QUFDVFIsUUFBQUEsVUFBVSxFQUFFSixhQURIO0FBRVRtQixRQUFBQSxRQUFRLEVBQUUsS0FGRDtBQUdUZCxRQUFBQSxNQUFNLEVBQUU7QUFIQztBQVhNO0FBakJkLEdBQVA7QUFtQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFcnJvckJveFN0eWxlKHsgbW9ub3NwYWNlRm9udCwgcHJpbWFyeUZvbnQgfSkge1xuICByZXR1cm4ge1xuICAgIC8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIG5vdCBzZXQgXCJkaXNwbGF5XCIgaW4gc3R5bGVTZXQsIHRoaXMgd2lsbCBhbGxvdyB0aGUgdXNlciB0byBicmVhayB0aGUgbGF5b3V0IGZvciBubyBnb29kIHJlYXNvbnMuXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGZvbnRGYW1pbHk6IHByaW1hcnlGb250LFxuICAgIG1hcmdpbjogMCxcbiAgICBtaW5IZWlnaHQ6IDIwLFxuICAgIG1heEhlaWdodDogMjAwLFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuXG4gICAgJyYgPiA6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUYwMDAwJyxcbiAgICAgIGNvbG9yOiAnV2hpdGUnLFxuICAgICAgcGFkZGluZzogJzVweCAxMHB4J1xuICAgIH0sXG5cbiAgICAnJiA+IDpsYXN0LWNoaWxkJzoge1xuICAgICAgYm9yZGVyQ29sb3I6ICcjRUYwMDAwJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnZGFzaGVkJyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAyLFxuICAgICAgYm9yZGVyTGVmdFdpZHRoOiAyLFxuICAgICAgYm9yZGVyUmlnaHRXaWR0aDogMixcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwYWRkaW5nOiAxMCxcblxuICAgICAgJyYgPiBwcmUnOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IG1vbm9zcGFjZUZvbnQsXG4gICAgICAgIGZvbnRTaXplOiAnNjAlJyxcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
