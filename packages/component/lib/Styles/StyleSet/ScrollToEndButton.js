'use strict';

var cov_gkka79ky0 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ScrollToEndButton.js';
  var hash = 'c9d144f933ab52f0d923968780a13553f070d1a5';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ScrollToEndButton.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
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
        name: 'createScrollToEndButtonStyle',
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
            line: 9,
            column: 3
          },
          end: {
            line: 37,
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
            line: 29,
            column: 13
          },
          end: {
            line: 29,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 29,
              column: 13
            },
            end: {
              line: 29,
              column: 48
            }
          },
          {
            start: {
              line: 29,
              column: 52
            },
            end: {
              line: 29,
              column: 80
            }
          }
        ],
        line: 29
      },
      '1': {
        loc: {
          start: {
            line: 34,
            column: 13
          },
          end: {
            line: 34,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 34,
              column: 13
            },
            end: {
              line: 34,
              column: 48
            }
          },
          {
            start: {
              line: 34,
              column: 52
            },
            end: {
              line: 34,
              column: 80
            }
          }
        ],
        line: 34
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
    hash: 'c9d144f933ab52f0d923968780a13553f070d1a5'
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
exports.default = createScrollToEndButtonStyle;

function createScrollToEndButtonStyle(_ref) {
  var paddingRegular = _ref.paddingRegular,
    transcriptOverlayButtonBackground = _ref.transcriptOverlayButtonBackground,
    transcriptOverlayButtonBackgroundOnFocus = _ref.transcriptOverlayButtonBackgroundOnFocus,
    transcriptOverlayButtonBackgroundOnHover = _ref.transcriptOverlayButtonBackgroundOnHover,
    transcriptOverlayButtonColor = _ref.transcriptOverlayButtonColor,
    transcriptOverlayButtonColorOnFocus = _ref.transcriptOverlayButtonColorOnFocus,
    transcriptOverlayButtonColorOnHover = _ref.transcriptOverlayButtonColorOnHover;
  cov_gkka79ky0.f[0]++;
  cov_gkka79ky0.s[0]++;
  return {
    // TODO: [P3] Can we not to unset borderWidth and outline earlier?
    '@media screen and (-ms-high-contrast: active)': {
      borderWidth: 'initial',
      outline: 'initial'
    },
    backgroundColor: transcriptOverlayButtonBackground,
    borderRadius: paddingRegular,
    borderWidth: 0,
    bottom: 5,
    color: transcriptOverlayButtonColor,
    outline: 0,
    padding: paddingRegular,
    position: 'absolute',
    right: 20,
    '&:hover': {
      backgroundColor: transcriptOverlayButtonBackgroundOnHover,
      color:
        (cov_gkka79ky0.b[0][0]++, transcriptOverlayButtonColorOnHover) ||
        (cov_gkka79ky0.b[0][1]++, transcriptOverlayButtonColor)
    },
    '&:focus': {
      backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
      color:
        (cov_gkka79ky0.b[1][0]++, transcriptOverlayButtonColorOnFocus) ||
        (cov_gkka79ky0.b[1][1]++, transcriptOverlayButtonColor)
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2Nyb2xsVG9FbmRCdXR0b24uanMiXSwibmFtZXMiOlsiY3JlYXRlU2Nyb2xsVG9FbmRCdXR0b25TdHlsZSIsInBhZGRpbmdSZWd1bGFyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1cyIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uSG92ZXIiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciIsImJvcmRlcldpZHRoIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvdHRvbSIsImNvbG9yIiwicGFkZGluZyIsInBvc2l0aW9uIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSw0QkFBVCxPQVFaO0FBQUEsTUFQREMsY0FPQyxRQVBEQSxjQU9DO0FBQUEsTUFOREMsaUNBTUMsUUFOREEsaUNBTUM7QUFBQSxNQUxEQyx3Q0FLQyxRQUxEQSx3Q0FLQztBQUFBLE1BSkRDLHdDQUlDLFFBSkRBLHdDQUlDO0FBQUEsTUFIREMsNEJBR0MsUUFIREEsNEJBR0M7QUFBQSxNQUZEQyxtQ0FFQyxRQUZEQSxtQ0FFQztBQUFBLE1BRERDLG1DQUNDLFFBRERBLG1DQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTDtBQUNBLHFEQUFpRDtBQUMvQ0MsTUFBQUEsV0FBVyxFQUFFLFNBRGtDO0FBRS9DQyxNQUFBQSxPQUFPLEVBQUU7QUFGc0MsS0FGNUM7QUFPTEMsSUFBQUEsZUFBZSxFQUFFUixpQ0FQWjtBQVFMUyxJQUFBQSxZQUFZLEVBQUVWLGNBUlQ7QUFTTE8sSUFBQUEsV0FBVyxFQUFFLENBVFI7QUFVTEksSUFBQUEsTUFBTSxFQUFFLENBVkg7QUFXTEMsSUFBQUEsS0FBSyxFQUFFUiw0QkFYRjtBQVlMSSxJQUFBQSxPQUFPLEVBQUUsQ0FaSjtBQWFMSyxJQUFBQSxPQUFPLEVBQUViLGNBYko7QUFjTGMsSUFBQUEsUUFBUSxFQUFFLFVBZEw7QUFlTEMsSUFBQUEsS0FBSyxFQUFFLEVBZkY7QUFpQkwsZUFBVztBQUNUTixNQUFBQSxlQUFlLEVBQUVOLHdDQURSO0FBRVRTLE1BQUFBLEtBQUssRUFBRSwwQkFBQU4sbUNBQW1DLCtCQUFJRiw0QkFBSjtBQUZqQyxLQWpCTjtBQXNCTCxlQUFXO0FBQ1RLLE1BQUFBLGVBQWUsRUFBRVAsd0NBRFI7QUFFVFUsTUFBQUEsS0FBSyxFQUFFLDBCQUFBUCxtQ0FBbUMsK0JBQUlELDRCQUFKO0FBRmpDO0FBdEJOLEdBQVA7QUEyQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTY3JvbGxUb0VuZEJ1dHRvblN0eWxlKHtcbiAgcGFkZGluZ1JlZ3VsYXIsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZCxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1cyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkhvdmVyXG59KSB7XG4gIHJldHVybiB7XG4gICAgLy8gVE9ETzogW1AzXSBDYW4gd2Ugbm90IHRvIHVuc2V0IGJvcmRlcldpZHRoIGFuZCBvdXRsaW5lIGVhcmxpZXI/XG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSc6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAnaW5pdGlhbCcsXG4gICAgICBvdXRsaW5lOiAnaW5pdGlhbCdcbiAgICB9LFxuXG4gICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQsXG4gICAgYm9yZGVyUmFkaXVzOiBwYWRkaW5nUmVndWxhcixcbiAgICBib3JkZXJXaWR0aDogMCxcbiAgICBib3R0b206IDUsXG4gICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3IsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiBwYWRkaW5nUmVndWxhcixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMjAsXG5cbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcixcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciB8fCB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yXG4gICAgfSxcblxuICAgICcmOmZvY3VzJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzIHx8IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JcbiAgICB9XG4gIH07XG59XG4iXX0=
