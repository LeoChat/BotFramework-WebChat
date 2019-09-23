'use strict';

var cov_2je12mixst = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ScrollToEndButton.js';
  var hash = '45100753f9ccb58bc64bda2df46d919565ef9014';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/ScrollToEndButton.js',
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
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '45100753f9ccb58bc64bda2df46d919565ef9014'
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
  cov_2je12mixst.f[0]++;
  cov_2je12mixst.s[0]++;
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
      color: transcriptOverlayButtonColorOnHover
    },
    '&:focus': {
      backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
      color: transcriptOverlayButtonColorOnFocus
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2Nyb2xsVG9FbmRCdXR0b24uanMiXSwibmFtZXMiOlsiY3JlYXRlU2Nyb2xsVG9FbmRCdXR0b25TdHlsZSIsInBhZGRpbmdSZWd1bGFyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1cyIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uSG92ZXIiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciIsImJvcmRlcldpZHRoIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvdHRvbSIsImNvbG9yIiwicGFkZGluZyIsInBvc2l0aW9uIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLDRCQUFULE9BUVo7QUFBQSxNQVBEQyxjQU9DLFFBUERBLGNBT0M7QUFBQSxNQU5EQyxpQ0FNQyxRQU5EQSxpQ0FNQztBQUFBLE1BTERDLHdDQUtDLFFBTERBLHdDQUtDO0FBQUEsTUFKREMsd0NBSUMsUUFKREEsd0NBSUM7QUFBQSxNQUhEQyw0QkFHQyxRQUhEQSw0QkFHQztBQUFBLE1BRkRDLG1DQUVDLFFBRkRBLG1DQUVDO0FBQUEsTUFEREMsbUNBQ0MsUUFEREEsbUNBQ0M7QUFBQTtBQUFBO0FBQ0QsU0FBTztBQUNMO0FBQ0EscURBQWlEO0FBQy9DQyxNQUFBQSxXQUFXLEVBQUUsU0FEa0M7QUFFL0NDLE1BQUFBLE9BQU8sRUFBRTtBQUZzQyxLQUY1QztBQU9MQyxJQUFBQSxlQUFlLEVBQUVSLGlDQVBaO0FBUUxTLElBQUFBLFlBQVksRUFBRVYsY0FSVDtBQVNMTyxJQUFBQSxXQUFXLEVBQUUsQ0FUUjtBQVVMSSxJQUFBQSxNQUFNLEVBQUUsQ0FWSDtBQVdMQyxJQUFBQSxLQUFLLEVBQUVSLDRCQVhGO0FBWUxJLElBQUFBLE9BQU8sRUFBRSxDQVpKO0FBYUxLLElBQUFBLE9BQU8sRUFBRWIsY0FiSjtBQWNMYyxJQUFBQSxRQUFRLEVBQUUsVUFkTDtBQWVMQyxJQUFBQSxLQUFLLEVBQUUsRUFmRjtBQWlCTCxlQUFXO0FBQ1ROLE1BQUFBLGVBQWUsRUFBRU4sd0NBRFI7QUFFVFMsTUFBQUEsS0FBSyxFQUFFTjtBQUZFLEtBakJOO0FBc0JMLGVBQVc7QUFDVEcsTUFBQUEsZUFBZSxFQUFFUCx3Q0FEUjtBQUVUVSxNQUFBQSxLQUFLLEVBQUVQO0FBRkU7QUF0Qk4sR0FBUDtBQTJCRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNjcm9sbFRvRW5kQnV0dG9uU3R5bGUoe1xuICBwYWRkaW5nUmVndWxhcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1cyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXJcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBUT0RPOiBbUDNdIENhbiB3ZSBub3QgdG8gdW5zZXQgYm9yZGVyV2lkdGggYW5kIG91dGxpbmUgZWFybGllcj9cbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpJzoge1xuICAgICAgYm9yZGVyV2lkdGg6ICdpbml0aWFsJyxcbiAgICAgIG91dGxpbmU6ICdpbml0aWFsJ1xuICAgIH0sXG5cbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZCxcbiAgICBib3JkZXJSYWRpdXM6IHBhZGRpbmdSZWd1bGFyLFxuICAgIGJvcmRlcldpZHRoOiAwLFxuICAgIGJvdHRvbTogNSxcbiAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcixcbiAgICBvdXRsaW5lOiAwLFxuICAgIHBhZGRpbmc6IHBhZGRpbmdSZWd1bGFyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAyMCxcblxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkhvdmVyXG4gICAgfSxcblxuICAgICcmOmZvY3VzJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzXG4gICAgfVxuICB9O1xufVxuIl19
