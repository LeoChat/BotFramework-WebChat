'use strict';

var cov_m1q1z0hw = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SuggestedActionsStyleSet.js';
  var hash = '8c0acd6a4498bfee8804d95bfe78189aa8f78d41';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SuggestedActionsStyleSet.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 27
        },
        end: {
          line: 23,
          column: 4
        }
      },
      '1': {
        start: {
          line: 25,
          column: 18
        },
        end: {
          line: 46,
          column: 4
        }
      },
      '2': {
        start: {
          line: 48,
          column: 22
        },
        end: {
          line: 48,
          column: 64
        }
      },
      '3': {
        start: {
          line: 49,
          column: 23
        },
        end: {
          line: 49,
          column: 66
        }
      },
      '4': {
        start: {
          line: 50,
          column: 19
        },
        end: {
          line: 72,
          column: 4
        }
      },
      '5': {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 81,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createSuggestedActionsStyleSet',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 54
          }
        },
        loc: {
          start: {
            line: 16,
            column: 3
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 39,
            column: 13
          },
          end: {
            line: 39,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 39,
              column: 13
            },
            end: {
              line: 39,
              column: 48
            }
          },
          {
            start: {
              line: 39,
              column: 52
            },
            end: {
              line: 39,
              column: 80
            }
          }
        ],
        line: 39
      },
      '1': {
        loc: {
          start: {
            line: 44,
            column: 13
          },
          end: {
            line: 44,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 44,
              column: 13
            },
            end: {
              line: 44,
              column: 48
            }
          },
          {
            start: {
              line: 44,
              column: 52
            },
            end: {
              line: 44,
              column: 80
            }
          }
        ],
        line: 44
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '8c0acd6a4498bfee8804d95bfe78189aa8f78d41'
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
exports.default = createSuggestedActionsStyleSet;

var _glamor = require('glamor');

var _reactFilm = require('react-film');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

function createSuggestedActionsStyleSet(_ref) {
  var _hoverScrolling;

  var paddingRegular = _ref.paddingRegular,
    transcriptOverlayButtonBackground = _ref.transcriptOverlayButtonBackground,
    transcriptOverlayButtonBackgroundOnDisabled = _ref.transcriptOverlayButtonBackgroundOnDisabled,
    transcriptOverlayButtonBackgroundOnFocus = _ref.transcriptOverlayButtonBackgroundOnFocus,
    transcriptOverlayButtonBackgroundOnHover = _ref.transcriptOverlayButtonBackgroundOnHover,
    transcriptOverlayButtonColor = _ref.transcriptOverlayButtonColor,
    transcriptOverlayButtonColorOnDisabled = _ref.transcriptOverlayButtonColorOnDisabled,
    transcriptOverlayButtonColorOnFocus = _ref.transcriptOverlayButtonColorOnFocus,
    transcriptOverlayButtonColorOnHover = _ref.transcriptOverlayButtonColorOnHover;
  cov_m1q1z0hw.f[0]++;
  var originalStyleSet =
    (cov_m1q1z0hw.s[0]++,
    (0, _reactFilm.createBasicStyleSet)({
      cursor: null,
      flipperBoxWidth: 40,
      flipperSize: 40,
      scrollBarHeight: 6,
      scrollBarMargin: 2
    }));
  var flipper =
    (cov_m1q1z0hw.s[1]++,
    (0, _glamor.css)({
      '& > div.slider > div': {
        background: transcriptOverlayButtonBackground,
        color: transcriptOverlayButtonColor,
        outline: 0
      },
      '&:disabled > div.slider > div': {
        backgroundColor: transcriptOverlayButtonBackgroundOnDisabled,
        color: transcriptOverlayButtonColorOnDisabled
      },
      '&:focus > div.slider > div': {
        backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
        color:
          (cov_m1q1z0hw.b[0][0]++, transcriptOverlayButtonColorOnFocus) ||
          (cov_m1q1z0hw.b[0][1]++, transcriptOverlayButtonColor)
      },
      '&:hover > div.slider > div': {
        backgroundColor: transcriptOverlayButtonBackgroundOnHover,
        color:
          (cov_m1q1z0hw.b[1][0]++, transcriptOverlayButtonColorOnHover) ||
          (cov_m1q1z0hw.b[1][1]++, transcriptOverlayButtonColor)
      }
    }));
  var leftFlipper = (cov_m1q1z0hw.s[2]++, (0, _glamor.css)(originalStyleSet.leftFlipper, flipper));
  var rightFlipper = (cov_m1q1z0hw.s[3]++, (0, _glamor.css)(originalStyleSet.rightFlipper, flipper));
  var carousel =
    (cov_m1q1z0hw.s[4]++,
    (0, _glamor.css)(originalStyleSet.carousel, {
      '&:hover, &.scrolling':
        ((_hoverScrolling = {}),
        _defineProperty(
          _hoverScrolling,
          '& .'.concat(leftFlipper + '', ' > div.slider, & .').concat(rightFlipper + '', ' > div.slider'),
          {
            transitionDelay: '0s'
          }
        ),
        _defineProperty(_hoverScrolling, '& .'.concat(leftFlipper + '', ' > div.slider'), {
          left: 0
        }),
        _defineProperty(_hoverScrolling, '& .'.concat(rightFlipper + '', ' > div.slider'), {
          right: 0
        }),
        _hoverScrolling),
      '& > div': {
        scrollbarWidth: 'none',
        '& > ul > li': {
          '&:first-child': {
            paddingLeft: paddingRegular / 2
          },
          '&:last-child': {
            paddingRight: paddingRegular / 2
          }
        }
      }
    })); // This is not CSS, but options to create style set for react-film

  cov_m1q1z0hw.s[5]++;
  return _objectSpread({}, originalStyleSet, {
    carousel: carousel,
    leftFlipper: leftFlipper,
    rightFlipper: rightFlipper
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCIsInBhZGRpbmdSZWd1bGFyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciIsIm9yaWdpbmFsU3R5bGVTZXQiLCJjdXJzb3IiLCJmbGlwcGVyQm94V2lkdGgiLCJmbGlwcGVyU2l6ZSIsInNjcm9sbEJhckhlaWdodCIsInNjcm9sbEJhck1hcmdpbiIsImZsaXBwZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdEZsaXBwZXIiLCJyaWdodEZsaXBwZXIiLCJjYXJvdXNlbCIsInRyYW5zaXRpb25EZWxheSIsImxlZnQiLCJyaWdodCIsInNjcm9sbGJhcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsOEJBQVQsT0FVWjtBQUFBOztBQUFBLE1BVERDLGNBU0MsUUFUREEsY0FTQztBQUFBLE1BUkRDLGlDQVFDLFFBUkRBLGlDQVFDO0FBQUEsTUFQREMsMkNBT0MsUUFQREEsMkNBT0M7QUFBQSxNQU5EQyx3Q0FNQyxRQU5EQSx3Q0FNQztBQUFBLE1BTERDLHdDQUtDLFFBTERBLHdDQUtDO0FBQUEsTUFKREMsNEJBSUMsUUFKREEsNEJBSUM7QUFBQSxNQUhEQyxzQ0FHQyxRQUhEQSxzQ0FHQztBQUFBLE1BRkRDLG1DQUVDLFFBRkRBLG1DQUVDO0FBQUEsTUFEREMsbUNBQ0MsUUFEREEsbUNBQ0M7QUFBQTtBQUNELE1BQU1DLGdCQUFnQix5QkFBRyxvQ0FBb0I7QUFDM0NDLElBQUFBLE1BQU0sRUFBRSxJQURtQztBQUUzQ0MsSUFBQUEsZUFBZSxFQUFFLEVBRjBCO0FBRzNDQyxJQUFBQSxXQUFXLEVBQUUsRUFIOEI7QUFJM0NDLElBQUFBLGVBQWUsRUFBRSxDQUowQjtBQUszQ0MsSUFBQUEsZUFBZSxFQUFFO0FBTDBCLEdBQXBCLENBQUgsQ0FBdEI7QUFRQSxNQUFNQyxPQUFPLHlCQUFHLGlCQUFJO0FBQ2xCLDRCQUF3QjtBQUN0QkMsTUFBQUEsVUFBVSxFQUFFZixpQ0FEVTtBQUV0QmdCLE1BQUFBLEtBQUssRUFBRVosNEJBRmU7QUFHdEJhLE1BQUFBLE9BQU8sRUFBRTtBQUhhLEtBRE47QUFPbEIscUNBQWlDO0FBQy9CQyxNQUFBQSxlQUFlLEVBQUVqQiwyQ0FEYztBQUUvQmUsTUFBQUEsS0FBSyxFQUFFWDtBQUZ3QixLQVBmO0FBWWxCLGtDQUE4QjtBQUM1QmEsTUFBQUEsZUFBZSxFQUFFaEIsd0NBRFc7QUFFNUJjLE1BQUFBLEtBQUssRUFBRSx5QkFBQVYsbUNBQW1DLDhCQUFJRiw0QkFBSjtBQUZkLEtBWlo7QUFpQmxCLGtDQUE4QjtBQUM1QmMsTUFBQUEsZUFBZSxFQUFFZix3Q0FEVztBQUU1QmEsTUFBQUEsS0FBSyxFQUFFLHlCQUFBVCxtQ0FBbUMsOEJBQUlILDRCQUFKO0FBRmQ7QUFqQlosR0FBSixDQUFILENBQWI7QUF1QkEsTUFBTWUsV0FBVyx5QkFBRyxpQkFBSVgsZ0JBQWdCLENBQUNXLFdBQXJCLEVBQWtDTCxPQUFsQyxDQUFILENBQWpCO0FBQ0EsTUFBTU0sWUFBWSx5QkFBRyxpQkFBSVosZ0JBQWdCLENBQUNZLFlBQXJCLEVBQW1DTixPQUFuQyxDQUFILENBQWxCO0FBQ0EsTUFBTU8sUUFBUSx5QkFBRyxpQkFBSWIsZ0JBQWdCLENBQUNhLFFBQXJCLEVBQStCO0FBQzlDLGlHQUNTRixXQUFXLEdBQUcsRUFEdkIsK0JBQzhDQyxZQUFZLEdBQUcsRUFEN0Qsb0JBQ2lGO0FBQzdFRSxNQUFBQSxlQUFlLEVBQUU7QUFENEQsS0FEakYsaURBSVNILFdBQVcsR0FBRyxFQUp2QixvQkFJMkM7QUFBRUksTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FKM0MsaURBS1NILFlBQVksR0FBRyxFQUx4QixvQkFLNEM7QUFBRUksTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FMNUMsbUJBRDhDO0FBUzlDLGVBQVc7QUFDVEMsTUFBQUEsY0FBYyxFQUFFLE1BRFA7QUFHVCxxQkFBZTtBQUNiLHlCQUFpQjtBQUNmQyxVQUFBQSxXQUFXLEVBQUUzQixjQUFjLEdBQUc7QUFEZixTQURKO0FBS2Isd0JBQWdCO0FBQ2Q0QixVQUFBQSxZQUFZLEVBQUU1QixjQUFjLEdBQUc7QUFEakI7QUFMSDtBQUhOO0FBVG1DLEdBQS9CLENBQUgsQ0FBZCxDQWxDQyxDQTBERDs7QUExREM7QUEyREQsMkJBQ0tTLGdCQURMO0FBR0VhLElBQUFBLFFBQVEsRUFBUkEsUUFIRjtBQUlFRixJQUFBQSxXQUFXLEVBQVhBLFdBSkY7QUFLRUMsSUFBQUEsWUFBWSxFQUFaQTtBQUxGO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IHsgY3JlYXRlQmFzaWNTdHlsZVNldCB9IGZyb20gJ3JlYWN0LWZpbG0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdWdnZXN0ZWRBY3Rpb25zU3R5bGVTZXQoe1xuICBwYWRkaW5nUmVndWxhcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkRpc2FibGVkLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25EaXNhYmxlZCxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkhvdmVyXG59KSB7XG4gIGNvbnN0IG9yaWdpbmFsU3R5bGVTZXQgPSBjcmVhdGVCYXNpY1N0eWxlU2V0KHtcbiAgICBjdXJzb3I6IG51bGwsXG4gICAgZmxpcHBlckJveFdpZHRoOiA0MCxcbiAgICBmbGlwcGVyU2l6ZTogNDAsXG4gICAgc2Nyb2xsQmFySGVpZ2h0OiA2LFxuICAgIHNjcm9sbEJhck1hcmdpbjogMlxuICB9KTtcblxuICBjb25zdCBmbGlwcGVyID0gY3NzKHtcbiAgICAnJiA+IGRpdi5zbGlkZXIgPiBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcixcbiAgICAgIG91dGxpbmU6IDBcbiAgICB9LFxuXG4gICAgJyY6ZGlzYWJsZWQgPiBkaXYuc2xpZGVyID4gZGl2Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkRpc2FibGVkLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkXG4gICAgfSxcblxuICAgICcmOmZvY3VzID4gZGl2LnNsaWRlciA+IGRpdic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1cyxcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1cyB8fCB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yXG4gICAgfSxcblxuICAgICcmOmhvdmVyID4gZGl2LnNsaWRlciA+IGRpdic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcixcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciB8fCB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0RmxpcHBlciA9IGNzcyhvcmlnaW5hbFN0eWxlU2V0LmxlZnRGbGlwcGVyLCBmbGlwcGVyKTtcbiAgY29uc3QgcmlnaHRGbGlwcGVyID0gY3NzKG9yaWdpbmFsU3R5bGVTZXQucmlnaHRGbGlwcGVyLCBmbGlwcGVyKTtcbiAgY29uc3QgY2Fyb3VzZWwgPSBjc3Mob3JpZ2luYWxTdHlsZVNldC5jYXJvdXNlbCwge1xuICAgICcmOmhvdmVyLCAmLnNjcm9sbGluZyc6IHtcbiAgICAgIFtgJiAuJHtsZWZ0RmxpcHBlciArICcnfSA+IGRpdi5zbGlkZXIsICYgLiR7cmlnaHRGbGlwcGVyICsgJyd9ID4gZGl2LnNsaWRlcmBdOiB7XG4gICAgICAgIHRyYW5zaXRpb25EZWxheTogJzBzJ1xuICAgICAgfSxcbiAgICAgIFtgJiAuJHtsZWZ0RmxpcHBlciArICcnfSA+IGRpdi5zbGlkZXJgXTogeyBsZWZ0OiAwIH0sXG4gICAgICBbYCYgLiR7cmlnaHRGbGlwcGVyICsgJyd9ID4gZGl2LnNsaWRlcmBdOiB7IHJpZ2h0OiAwIH1cbiAgICB9LFxuXG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICBzY3JvbGxiYXJXaWR0aDogJ25vbmUnLFxuXG4gICAgICAnJiA+IHVsID4gbGknOiB7XG4gICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nUmVndWxhciAvIDJcbiAgICAgICAgfSxcblxuICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ1JlZ3VsYXIgLyAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRoaXMgaXMgbm90IENTUywgYnV0IG9wdGlvbnMgdG8gY3JlYXRlIHN0eWxlIHNldCBmb3IgcmVhY3QtZmlsbVxuICByZXR1cm4ge1xuICAgIC4uLm9yaWdpbmFsU3R5bGVTZXQsXG5cbiAgICBjYXJvdXNlbCxcbiAgICBsZWZ0RmxpcHBlcixcbiAgICByaWdodEZsaXBwZXJcbiAgfTtcbn1cbiJdfQ==
