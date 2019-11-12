'use strict';

var cov_1lfyhdr1uh = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/WarningNotification.js';
  var hash = 'fbd10782f827b0eebba3f1c755d0d2c023a809f8';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/WarningNotification.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createWarningNotificationStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 54
          }
        },
        loc: {
          start: {
            line: 9,
            column: 3
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 9
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
    hash: 'fbd10782f827b0eebba3f1c755d0d2c023a809f8'
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
exports.default = createWarningNotificationStyle;

function createWarningNotificationStyle(_ref) {
  var connectivityIconPadding = _ref.connectivityIconPadding,
    connectivityMarginLeftRight = _ref.connectivityMarginLeftRight,
    connectivityMarginTopBottom = _ref.connectivityMarginTopBottom,
    connectivityTextSize = _ref.connectivityTextSize,
    primaryFont = _ref.primaryFont,
    slowConnectivity = _ref.slowConnectivity,
    notificationText = _ref.notificationText;
  cov_1lfyhdr1uh.f[0]++;
  cov_1lfyhdr1uh.s[0]++;
  return {
    alignItems: 'center',
    color: notificationText,
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    fontFamily: primaryFont,
    fontSize: connectivityTextSize,
    marginBottom: connectivityMarginTopBottom,
    marginLeft: connectivityMarginLeftRight,
    marginRight: connectivityMarginLeftRight,
    marginTop: connectivityMarginTopBottom,
    '& > svg': {
      fill: slowConnectivity,
      paddingRight: connectivityIconPadding
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvV2FybmluZ05vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVXYXJuaW5nTm90aWZpY2F0aW9uU3R5bGUiLCJjb25uZWN0aXZpdHlJY29uUGFkZGluZyIsImNvbm5lY3Rpdml0eU1hcmdpbkxlZnRSaWdodCIsImNvbm5lY3Rpdml0eU1hcmdpblRvcEJvdHRvbSIsImNvbm5lY3Rpdml0eVRleHRTaXplIiwicHJpbWFyeUZvbnQiLCJzbG93Q29ubmVjdGl2aXR5Iiwibm90aWZpY2F0aW9uVGV4dCIsImFsaWduSXRlbXMiLCJjb2xvciIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJmaWxsIiwicGFkZGluZ1JpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSw4QkFBVCxPQVFaO0FBQUEsTUFQREMsdUJBT0MsUUFQREEsdUJBT0M7QUFBQSxNQU5EQywyQkFNQyxRQU5EQSwyQkFNQztBQUFBLE1BTERDLDJCQUtDLFFBTERBLDJCQUtDO0FBQUEsTUFKREMsb0JBSUMsUUFKREEsb0JBSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSxNQUZEQyxnQkFFQyxRQUZEQSxnQkFFQztBQUFBLE1BRERDLGdCQUNDLFFBRERBLGdCQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFFBRFA7QUFFTEMsSUFBQUEsS0FBSyxFQUFFRixnQkFGRjtBQUdMO0FBQ0FHLElBQUFBLE9BQU8sRUFBRSxNQUpKO0FBS0xDLElBQUFBLFVBQVUsRUFBRU4sV0FMUDtBQU1MTyxJQUFBQSxRQUFRLEVBQUVSLG9CQU5MO0FBT0xTLElBQUFBLFlBQVksRUFBRVYsMkJBUFQ7QUFRTFcsSUFBQUEsVUFBVSxFQUFFWiwyQkFSUDtBQVNMYSxJQUFBQSxXQUFXLEVBQUViLDJCQVRSO0FBVUxjLElBQUFBLFNBQVMsRUFBRWIsMkJBVk47QUFZTCxlQUFXO0FBQ1RjLE1BQUFBLElBQUksRUFBRVgsZ0JBREc7QUFFVFksTUFBQUEsWUFBWSxFQUFFakI7QUFGTDtBQVpOLEdBQVA7QUFpQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXYXJuaW5nTm90aWZpY2F0aW9uU3R5bGUoe1xuICBjb25uZWN0aXZpdHlJY29uUGFkZGluZyxcbiAgY29ubmVjdGl2aXR5TWFyZ2luTGVmdFJpZ2h0LFxuICBjb25uZWN0aXZpdHlNYXJnaW5Ub3BCb3R0b20sXG4gIGNvbm5lY3Rpdml0eVRleHRTaXplLFxuICBwcmltYXJ5Rm9udCxcbiAgc2xvd0Nvbm5lY3Rpdml0eSxcbiAgbm90aWZpY2F0aW9uVGV4dFxufSkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGNvbG9yOiBub3RpZmljYXRpb25UZXh0LFxuICAgIC8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIG5vdCBzZXQgXCJkaXNwbGF5XCIgaW4gc3R5bGVTZXQsIHRoaXMgd2lsbCBhbGxvdyB0aGUgdXNlciB0byBicmVhayB0aGUgbGF5b3V0IGZvciBubyBnb29kIHJlYXNvbnMuXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZvbnRGYW1pbHk6IHByaW1hcnlGb250LFxuICAgIGZvbnRTaXplOiBjb25uZWN0aXZpdHlUZXh0U2l6ZSxcbiAgICBtYXJnaW5Cb3R0b206IGNvbm5lY3Rpdml0eU1hcmdpblRvcEJvdHRvbSxcbiAgICBtYXJnaW5MZWZ0OiBjb25uZWN0aXZpdHlNYXJnaW5MZWZ0UmlnaHQsXG4gICAgbWFyZ2luUmlnaHQ6IGNvbm5lY3Rpdml0eU1hcmdpbkxlZnRSaWdodCxcbiAgICBtYXJnaW5Ub3A6IGNvbm5lY3Rpdml0eU1hcmdpblRvcEJvdHRvbSxcblxuICAgICcmID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2xvd0Nvbm5lY3Rpdml0eSxcbiAgICAgIHBhZGRpbmdSaWdodDogY29ubmVjdGl2aXR5SWNvblBhZGRpbmdcbiAgICB9XG4gIH07XG59XG4iXX0=
