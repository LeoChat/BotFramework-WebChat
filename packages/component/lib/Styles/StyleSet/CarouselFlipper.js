'use strict';

var cov_1m2gl562lv = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/CarouselFlipper.js';
  var hash = 'b0f076b43d146a82fbb92266714af450f2fb089c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/CarouselFlipper.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 32,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'CarouselFlipper',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 39
          }
        },
        loc: {
          start: {
            line: 10,
            column: 3
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 25,
            column: 13
          },
          end: {
            line: 25,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 25,
              column: 13
            },
            end: {
              line: 25,
              column: 48
            }
          },
          {
            start: {
              line: 25,
              column: 52
            },
            end: {
              line: 25,
              column: 80
            }
          }
        ],
        line: 25
      },
      '1': {
        loc: {
          start: {
            line: 30,
            column: 13
          },
          end: {
            line: 30,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 30,
              column: 13
            },
            end: {
              line: 30,
              column: 48
            }
          },
          {
            start: {
              line: 30,
              column: 52
            },
            end: {
              line: 30,
              column: 80
            }
          }
        ],
        line: 30
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
    hash: 'b0f076b43d146a82fbb92266714af450f2fb089c'
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
exports.default = CarouselFlipper;

function CarouselFlipper(_ref) {
  var transcriptOverlayButtonBackground = _ref.transcriptOverlayButtonBackground,
    transcriptOverlayButtonBackgroundOnDisabled = _ref.transcriptOverlayButtonBackgroundOnDisabled,
    transcriptOverlayButtonBackgroundOnFocus = _ref.transcriptOverlayButtonBackgroundOnFocus,
    transcriptOverlayButtonBackgroundOnHover = _ref.transcriptOverlayButtonBackgroundOnHover,
    transcriptOverlayButtonColor = _ref.transcriptOverlayButtonColor,
    transcriptOverlayButtonColorOnDisabled = _ref.transcriptOverlayButtonColorOnDisabled,
    transcriptOverlayButtonColorOnFocus = _ref.transcriptOverlayButtonColorOnFocus,
    transcriptOverlayButtonColorOnHover = _ref.transcriptOverlayButtonColorOnHover;
  cov_1m2gl562lv.f[0]++;
  cov_1m2gl562lv.s[0]++;
  return {
    '& > div.slider > div.button': {
      backgroundColor: transcriptOverlayButtonBackground,
      color: transcriptOverlayButtonColor,
      outline: 0
    },
    '&:disabled > div.slider > div.button': {
      backgroundColor: transcriptOverlayButtonBackgroundOnDisabled,
      color: transcriptOverlayButtonColorOnDisabled
    },
    '&:focus > div.slider > div.button': {
      backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
      color:
        (cov_1m2gl562lv.b[0][0]++, transcriptOverlayButtonColorOnFocus) ||
        (cov_1m2gl562lv.b[0][1]++, transcriptOverlayButtonColor)
    },
    '&:hover > div.slider > div.button': {
      backgroundColor: transcriptOverlayButtonBackgroundOnHover,
      color:
        (cov_1m2gl562lv.b[1][0]++, transcriptOverlayButtonColorOnHover) ||
        (cov_1m2gl562lv.b[1][1]++, transcriptOverlayButtonColor)
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQ2Fyb3VzZWxGbGlwcGVyLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsRmxpcHBlciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRGlzYWJsZWQiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3IiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25EaXNhYmxlZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm91dGxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxlQUFULE9BU1o7QUFBQSxNQVJEQyxpQ0FRQyxRQVJEQSxpQ0FRQztBQUFBLE1BUERDLDJDQU9DLFFBUERBLDJDQU9DO0FBQUEsTUFOREMsd0NBTUMsUUFOREEsd0NBTUM7QUFBQSxNQUxEQyx3Q0FLQyxRQUxEQSx3Q0FLQztBQUFBLE1BSkRDLDRCQUlDLFFBSkRBLDRCQUlDO0FBQUEsTUFIREMsc0NBR0MsUUFIREEsc0NBR0M7QUFBQSxNQUZEQyxtQ0FFQyxRQUZEQSxtQ0FFQztBQUFBLE1BRERDLG1DQUNDLFFBRERBLG1DQUNDO0FBQUE7QUFBQTtBQUNELFNBQU87QUFDTCxtQ0FBK0I7QUFDN0JDLE1BQUFBLGVBQWUsRUFBRVIsaUNBRFk7QUFFN0JTLE1BQUFBLEtBQUssRUFBRUwsNEJBRnNCO0FBRzdCTSxNQUFBQSxPQUFPLEVBQUU7QUFIb0IsS0FEMUI7QUFPTCw0Q0FBd0M7QUFDdENGLE1BQUFBLGVBQWUsRUFBRVAsMkNBRHFCO0FBRXRDUSxNQUFBQSxLQUFLLEVBQUVKO0FBRitCLEtBUG5DO0FBWUwseUNBQXFDO0FBQ25DRyxNQUFBQSxlQUFlLEVBQUVOLHdDQURrQjtBQUVuQ08sTUFBQUEsS0FBSyxFQUFFLDJCQUFBSCxtQ0FBbUMsZ0NBQUlGLDRCQUFKO0FBRlAsS0FaaEM7QUFpQkwseUNBQXFDO0FBQ25DSSxNQUFBQSxlQUFlLEVBQUVMLHdDQURrQjtBQUVuQ00sTUFBQUEsS0FBSyxFQUFFLDJCQUFBRixtQ0FBbUMsZ0NBQUlILDRCQUFKO0FBRlA7QUFqQmhDLEdBQVA7QUFzQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbEZsaXBwZXIoe1xuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRGlzYWJsZWQsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uSG92ZXIsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3IsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1cyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXJcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICAnJiA+IGRpdi5zbGlkZXIgPiBkaXYuYnV0dG9uJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcixcbiAgICAgIG91dGxpbmU6IDBcbiAgICB9LFxuXG4gICAgJyY6ZGlzYWJsZWQgPiBkaXYuc2xpZGVyID4gZGl2LmJ1dHRvbic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCxcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25EaXNhYmxlZFxuICAgIH0sXG5cbiAgICAnJjpmb2N1cyA+IGRpdi5zbGlkZXIgPiBkaXYuYnV0dG9uJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzIHx8IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JcbiAgICB9LFxuXG4gICAgJyY6aG92ZXIgPiBkaXYuc2xpZGVyID4gZGl2LmJ1dHRvbic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcixcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciB8fCB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yXG4gICAgfVxuICB9O1xufVxuIl19
