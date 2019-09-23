'use strict';

var cov_eh2xuog4i = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ErrorNotification.js';
  var hash = '3f1c54081dc6f4ae479d37d40016a98b3e4d44f0';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ErrorNotification.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 25,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createErrorNotificationStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 52
          }
        },
        loc: {
          start: {
            line: 8,
            column: 3
          },
          end: {
            line: 26,
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
    hash: '3f1c54081dc6f4ae479d37d40016a98b3e4d44f0'
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
exports.default = createErrorNotificationStyle;

function createErrorNotificationStyle(_ref) {
  var connectivityIconPadding = _ref.connectivityIconPadding,
    connectivityMarginLeftRight = _ref.connectivityMarginLeftRight,
    connectivityMarginTopBottom = _ref.connectivityMarginTopBottom,
    connectivityTextSize = _ref.connectivityTextSize,
    failedConnectivity = _ref.failedConnectivity,
    primaryFont = _ref.primaryFont;
  cov_eh2xuog4i.f[0]++;
  cov_eh2xuog4i.s[0]++;
  return {
    alignItems: 'center',
    color: failedConnectivity,
    display: 'flex',
    fontFamily: primaryFont,
    fontSize: connectivityTextSize,
    fontWeight: 'bold',
    marginBottom: connectivityMarginTopBottom,
    marginLeft: connectivityMarginLeftRight,
    marginRight: connectivityMarginLeftRight,
    marginTop: connectivityMarginTopBottom,
    '& > svg': {
      fill: failedConnectivity,
      paddingRight: connectivityIconPadding
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvRXJyb3JOb3RpZmljYXRpb24uanMiXSwibmFtZXMiOlsiY3JlYXRlRXJyb3JOb3RpZmljYXRpb25TdHlsZSIsImNvbm5lY3Rpdml0eUljb25QYWRkaW5nIiwiY29ubmVjdGl2aXR5TWFyZ2luTGVmdFJpZ2h0IiwiY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tIiwiY29ubmVjdGl2aXR5VGV4dFNpemUiLCJmYWlsZWRDb25uZWN0aXZpdHkiLCJwcmltYXJ5Rm9udCIsImFsaWduSXRlbXMiLCJjb2xvciIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiZmlsbCIsInBhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsNEJBQVQsT0FPWjtBQUFBLE1BTkRDLHVCQU1DLFFBTkRBLHVCQU1DO0FBQUEsTUFMREMsMkJBS0MsUUFMREEsMkJBS0M7QUFBQSxNQUpEQywyQkFJQyxRQUpEQSwyQkFJQztBQUFBLE1BSERDLG9CQUdDLFFBSERBLG9CQUdDO0FBQUEsTUFGREMsa0JBRUMsUUFGREEsa0JBRUM7QUFBQSxNQUREQyxXQUNDLFFBRERBLFdBQ0M7QUFBQTtBQUFBO0FBQ0QsU0FBTztBQUNMQyxJQUFBQSxVQUFVLEVBQUUsUUFEUDtBQUVMQyxJQUFBQSxLQUFLLEVBQUVILGtCQUZGO0FBR0xJLElBQUFBLE9BQU8sRUFBRSxNQUhKO0FBSUxDLElBQUFBLFVBQVUsRUFBRUosV0FKUDtBQUtMSyxJQUFBQSxRQUFRLEVBQUVQLG9CQUxMO0FBTUxRLElBQUFBLFVBQVUsRUFBRSxNQU5QO0FBT0xDLElBQUFBLFlBQVksRUFBRVYsMkJBUFQ7QUFRTFcsSUFBQUEsVUFBVSxFQUFFWiwyQkFSUDtBQVNMYSxJQUFBQSxXQUFXLEVBQUViLDJCQVRSO0FBVUxjLElBQUFBLFNBQVMsRUFBRWIsMkJBVk47QUFZTCxlQUFXO0FBQ1RjLE1BQUFBLElBQUksRUFBRVosa0JBREc7QUFFVGEsTUFBQUEsWUFBWSxFQUFFakI7QUFGTDtBQVpOLEdBQVA7QUFpQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFcnJvck5vdGlmaWNhdGlvblN0eWxlKHtcbiAgY29ubmVjdGl2aXR5SWNvblBhZGRpbmcsXG4gIGNvbm5lY3Rpdml0eU1hcmdpbkxlZnRSaWdodCxcbiAgY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tLFxuICBjb25uZWN0aXZpdHlUZXh0U2l6ZSxcbiAgZmFpbGVkQ29ubmVjdGl2aXR5LFxuICBwcmltYXJ5Rm9udFxufSkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGNvbG9yOiBmYWlsZWRDb25uZWN0aXZpdHksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZvbnRGYW1pbHk6IHByaW1hcnlGb250LFxuICAgIGZvbnRTaXplOiBjb25uZWN0aXZpdHlUZXh0U2l6ZSxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgbWFyZ2luQm90dG9tOiBjb25uZWN0aXZpdHlNYXJnaW5Ub3BCb3R0b20sXG4gICAgbWFyZ2luTGVmdDogY29ubmVjdGl2aXR5TWFyZ2luTGVmdFJpZ2h0LFxuICAgIG1hcmdpblJpZ2h0OiBjb25uZWN0aXZpdHlNYXJnaW5MZWZ0UmlnaHQsXG4gICAgbWFyZ2luVG9wOiBjb25uZWN0aXZpdHlNYXJnaW5Ub3BCb3R0b20sXG5cbiAgICAnJiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IGZhaWxlZENvbm5lY3Rpdml0eSxcbiAgICAgIHBhZGRpbmdSaWdodDogY29ubmVjdGl2aXR5SWNvblBhZGRpbmdcbiAgICB9XG4gIH07XG59XG4iXX0=
