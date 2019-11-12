'use strict';

var cov_2be69ds7xm = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/Avatar.js';
  var hash = '1a19c6fd8be14366766a0d588b26af5f065ebb73';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/Avatar.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
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
        name: 'createAvatarStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 41
          }
        },
        loc: {
          start: {
            line: 7,
            column: 3
          },
          end: {
            line: 37,
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
            line: 24,
            column: 23
          },
          end: {
            line: 24,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 24,
              column: 23
            },
            end: {
              line: 24,
              column: 48
            }
          },
          {
            start: {
              line: 24,
              column: 52
            },
            end: {
              line: 24,
              column: 58
            }
          }
        ],
        line: 24
      },
      '1': {
        loc: {
          start: {
            line: 28,
            column: 23
          },
          end: {
            line: 28,
            column: 57
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 28,
              column: 23
            },
            end: {
              line: 28,
              column: 47
            }
          },
          {
            start: {
              line: 28,
              column: 51
            },
            end: {
              line: 28,
              column: 57
            }
          }
        ],
        line: 28
      }
    },
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '1a19c6fd8be14366766a0d588b26af5f065ebb73'
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
exports.default = createAvatarStyle;

function createAvatarStyle(_ref) {
  var accent = _ref.accent,
    avatarSize = _ref.avatarSize,
    botAvatarBackgroundColor = _ref.botAvatarBackgroundColor,
    primaryFont = _ref.primaryFont,
    userAvatarBackgroundColor = _ref.userAvatarBackgroundColor;
  cov_2be69ds7xm.f[0]++;
  cov_2be69ds7xm.s[0]++;
  return {
    alignItems: 'center',
    borderRadius: '50%',
    color: 'White',
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    fontFamily: primaryFont,
    height: avatarSize,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: avatarSize,
    border: '1px solid rgba(0,0,0,.2)',
    transition: 'border .3s ease-in-out',
    '&.from-user': {
      backgroundColor: (cov_2be69ds7xm.b[0][0]++, userAvatarBackgroundColor) || (cov_2be69ds7xm.b[0][1]++, accent)
    },
    '&:not(.from-user)': {
      backgroundColor: (cov_2be69ds7xm.b[1][0]++, botAvatarBackgroundColor) || (cov_2be69ds7xm.b[1][1]++, accent)
    },
    '& > .image': {
      left: 0,
      position: 'absolute',
      top: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUF2YXRhclN0eWxlIiwiYWNjZW50IiwiYXZhdGFyU2l6ZSIsImJvdEF2YXRhckJhY2tncm91bmRDb2xvciIsInByaW1hcnlGb250IiwidXNlckF2YXRhckJhY2tncm91bmRDb2xvciIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwid2lkdGgiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdCIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLGlCQUFULE9BTVo7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyx3QkFHQyxRQUhEQSx3QkFHQztBQUFBLE1BRkRDLFdBRUMsUUFGREEsV0FFQztBQUFBLE1BRERDLHlCQUNDLFFBRERBLHlCQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFFBRFA7QUFFTEMsSUFBQUEsWUFBWSxFQUFFLEtBRlQ7QUFHTEMsSUFBQUEsS0FBSyxFQUFFLE9BSEY7QUFJTDtBQUNBQyxJQUFBQSxPQUFPLEVBQUUsTUFMSjtBQU1MQyxJQUFBQSxVQUFVLEVBQUVOLFdBTlA7QUFPTE8sSUFBQUEsTUFBTSxFQUFFVCxVQVBIO0FBUUxVLElBQUFBLGNBQWMsRUFBRSxRQVJYO0FBU0xDLElBQUFBLFFBQVEsRUFBRSxRQVRMO0FBVUxDLElBQUFBLFFBQVEsRUFBRSxVQVZMO0FBV0xDLElBQUFBLEtBQUssRUFBRWIsVUFYRjtBQVlMYyxJQUFBQSxNQUFNLEVBQUUsMEJBWkg7QUFhTEMsSUFBQUEsVUFBVSxFQUFFLHdCQWJQO0FBZUwsbUJBQWU7QUFDYkMsTUFBQUEsZUFBZSxFQUFFLDJCQUFBYix5QkFBeUIsZ0NBQUlKLE1BQUo7QUFEN0IsS0FmVjtBQW1CTCx5QkFBcUI7QUFDbkJpQixNQUFBQSxlQUFlLEVBQUUsMkJBQUFmLHdCQUF3QixnQ0FBSUYsTUFBSjtBQUR0QixLQW5CaEI7QUF1Qkwsa0JBQWM7QUFDWmtCLE1BQUFBLElBQUksRUFBRSxDQURNO0FBRVpMLE1BQUFBLFFBQVEsRUFBRSxVQUZFO0FBR1pNLE1BQUFBLEdBQUcsRUFBRTtBQUhPO0FBdkJULEdBQVA7QUE2QkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBdmF0YXJTdHlsZSh7XG4gIGFjY2VudCxcbiAgYXZhdGFyU2l6ZSxcbiAgYm90QXZhdGFyQmFja2dyb3VuZENvbG9yLFxuICBwcmltYXJ5Rm9udCxcbiAgdXNlckF2YXRhckJhY2tncm91bmRDb2xvclxufSkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgY29sb3I6ICdXaGl0ZScsXG4gICAgLy8gVE9ETzogW1AyXSBXZSBzaG91bGQgbm90IHNldCBcImRpc3BsYXlcIiBpbiBzdHlsZVNldCwgdGhpcyB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIGJyZWFrIHRoZSBsYXlvdXQgZm9yIG5vIGdvb2QgcmVhc29ucy5cbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG4gICAgaGVpZ2h0OiBhdmF0YXJTaXplLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6IGF2YXRhclNpemUsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpJyxcbiAgICB0cmFuc2l0aW9uOiAnYm9yZGVyIC4zcyBlYXNlLWluLW91dCcsXG5cbiAgICAnJi5mcm9tLXVzZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHVzZXJBdmF0YXJCYWNrZ3JvdW5kQ29sb3IgfHwgYWNjZW50XG4gICAgfSxcblxuICAgICcmOm5vdCguZnJvbS11c2VyKSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYm90QXZhdGFyQmFja2dyb3VuZENvbG9yIHx8IGFjY2VudFxuICAgIH0sXG5cbiAgICAnJiA+IC5pbWFnZSc6IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMFxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
