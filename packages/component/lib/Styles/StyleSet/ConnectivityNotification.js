'use strict';

var cov_jxuulq9p4 = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ConnectivityNotification.js';
  var hash = 'ad484e26ec884301cf44d6d6d9946214277d59e3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ConnectivityNotification.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
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
        name: 'ConnectivityNotification',
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
            line: 20,
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
    hash: 'ad484e26ec884301cf44d6d6d9946214277d59e3'
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
exports.default = ConnectivityNotification;

function ConnectivityNotification(_ref) {
  var connectivityMarginLeftRight = _ref.connectivityMarginLeftRight,
    connectivityMarginTopBottom = _ref.connectivityMarginTopBottom,
    connectivityTextSize = _ref.connectivityTextSize,
    notificationText = _ref.notificationText,
    primaryFont = _ref.primaryFont;
  cov_jxuulq9p4.f[0]++;
  cov_jxuulq9p4.s[0]++;
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
    marginTop: connectivityMarginTopBottom
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQ29ubmVjdGl2aXR5Tm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkNvbm5lY3Rpdml0eU5vdGlmaWNhdGlvbiIsImNvbm5lY3Rpdml0eU1hcmdpbkxlZnRSaWdodCIsImNvbm5lY3Rpdml0eU1hcmdpblRvcEJvdHRvbSIsImNvbm5lY3Rpdml0eVRleHRTaXplIiwibm90aWZpY2F0aW9uVGV4dCIsInByaW1hcnlGb250IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0Esd0JBQVQsT0FNWjtBQUFBLE1BTERDLDJCQUtDLFFBTERBLDJCQUtDO0FBQUEsTUFKREMsMkJBSUMsUUFKREEsMkJBSUM7QUFBQSxNQUhEQyxvQkFHQyxRQUhEQSxvQkFHQztBQUFBLE1BRkRDLGdCQUVDLFFBRkRBLGdCQUVDO0FBQUEsTUFEREMsV0FDQyxRQUREQSxXQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFFBRFA7QUFFTEMsSUFBQUEsS0FBSyxFQUFFSCxnQkFGRjtBQUdMO0FBQ0FJLElBQUFBLE9BQU8sRUFBRSxNQUpKO0FBS0xDLElBQUFBLFVBQVUsRUFBRUosV0FMUDtBQU1MSyxJQUFBQSxRQUFRLEVBQUVQLG9CQU5MO0FBT0xRLElBQUFBLFlBQVksRUFBRVQsMkJBUFQ7QUFRTFUsSUFBQUEsVUFBVSxFQUFFWCwyQkFSUDtBQVNMWSxJQUFBQSxXQUFXLEVBQUVaLDJCQVRSO0FBVUxhLElBQUFBLFNBQVMsRUFBRVo7QUFWTixHQUFQO0FBWUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uZWN0aXZpdHlOb3RpZmljYXRpb24oe1xuICBjb25uZWN0aXZpdHlNYXJnaW5MZWZ0UmlnaHQsXG4gIGNvbm5lY3Rpdml0eU1hcmdpblRvcEJvdHRvbSxcbiAgY29ubmVjdGl2aXR5VGV4dFNpemUsXG4gIG5vdGlmaWNhdGlvblRleHQsXG4gIHByaW1hcnlGb250XG59KSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgY29sb3I6IG5vdGlmaWNhdGlvblRleHQsXG4gICAgLy8gVE9ETzogW1AyXSBXZSBzaG91bGQgbm90IHNldCBcImRpc3BsYXlcIiBpbiBzdHlsZVNldCwgdGhpcyB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIGJyZWFrIHRoZSBsYXlvdXQgZm9yIG5vIGdvb2QgcmVhc29ucy5cbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG4gICAgZm9udFNpemU6IGNvbm5lY3Rpdml0eVRleHRTaXplLFxuICAgIG1hcmdpbkJvdHRvbTogY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tLFxuICAgIG1hcmdpbkxlZnQ6IGNvbm5lY3Rpdml0eU1hcmdpbkxlZnRSaWdodCxcbiAgICBtYXJnaW5SaWdodDogY29ubmVjdGl2aXR5TWFyZ2luTGVmdFJpZ2h0LFxuICAgIG1hcmdpblRvcDogY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tXG4gIH07XG59XG4iXX0=
