'use strict';

var cov_2bf7nqwcoh = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SuggestedActionsStyleSet.js';
  var hash = 'e23defd3d449bac7fb3a7e50432eba77c4d03b13';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/SuggestedActionsStyleSet.js',
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
    branchMap: {},
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
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e23defd3d449bac7fb3a7e50432eba77c4d03b13'
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
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
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
  cov_2bf7nqwcoh.f[0]++;
  var originalStyleSet =
    (cov_2bf7nqwcoh.s[0]++,
    (0, _reactFilm.createBasicStyleSet)({
      cursor: null,
      flipperBoxWidth: 40,
      flipperSize: 40,
      scrollBarHeight: 6,
      scrollBarMargin: 2
    }));
  var flipper =
    (cov_2bf7nqwcoh.s[1]++,
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
        color: transcriptOverlayButtonColorOnFocus
      },
      '&:hover > div.slider > div': {
        backgroundColor: transcriptOverlayButtonBackgroundOnHover,
        color: transcriptOverlayButtonColorOnHover
      }
    }));
  var leftFlipper = (cov_2bf7nqwcoh.s[2]++, (0, _glamor.css)(originalStyleSet.leftFlipper, flipper));
  var rightFlipper = (cov_2bf7nqwcoh.s[3]++, (0, _glamor.css)(originalStyleSet.rightFlipper, flipper));
  var carousel =
    (cov_2bf7nqwcoh.s[4]++,
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

  cov_2bf7nqwcoh.s[5]++;
  return _objectSpread({}, originalStyleSet, {
    carousel: carousel,
    leftFlipper: leftFlipper,
    rightFlipper: rightFlipper
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCIsInBhZGRpbmdSZWd1bGFyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciIsIm9yaWdpbmFsU3R5bGVTZXQiLCJjdXJzb3IiLCJmbGlwcGVyQm94V2lkdGgiLCJmbGlwcGVyU2l6ZSIsInNjcm9sbEJhckhlaWdodCIsInNjcm9sbEJhck1hcmdpbiIsImZsaXBwZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdEZsaXBwZXIiLCJyaWdodEZsaXBwZXIiLCJjYXJvdXNlbCIsInRyYW5zaXRpb25EZWxheSIsImxlZnQiLCJyaWdodCIsInNjcm9sbGJhcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSw4QkFBVCxPQVVaO0FBQUE7O0FBQUEsTUFUREMsY0FTQyxRQVREQSxjQVNDO0FBQUEsTUFSREMsaUNBUUMsUUFSREEsaUNBUUM7QUFBQSxNQVBEQywyQ0FPQyxRQVBEQSwyQ0FPQztBQUFBLE1BTkRDLHdDQU1DLFFBTkRBLHdDQU1DO0FBQUEsTUFMREMsd0NBS0MsUUFMREEsd0NBS0M7QUFBQSxNQUpEQyw0QkFJQyxRQUpEQSw0QkFJQztBQUFBLE1BSERDLHNDQUdDLFFBSERBLHNDQUdDO0FBQUEsTUFGREMsbUNBRUMsUUFGREEsbUNBRUM7QUFBQSxNQUREQyxtQ0FDQyxRQUREQSxtQ0FDQztBQUFBO0FBQ0QsTUFBTUMsZ0JBQWdCLDJCQUFHLG9DQUFvQjtBQUMzQ0MsSUFBQUEsTUFBTSxFQUFFLElBRG1DO0FBRTNDQyxJQUFBQSxlQUFlLEVBQUUsRUFGMEI7QUFHM0NDLElBQUFBLFdBQVcsRUFBRSxFQUg4QjtBQUkzQ0MsSUFBQUEsZUFBZSxFQUFFLENBSjBCO0FBSzNDQyxJQUFBQSxlQUFlLEVBQUU7QUFMMEIsR0FBcEIsQ0FBSCxDQUF0QjtBQVFBLE1BQU1DLE9BQU8sMkJBQUcsaUJBQUk7QUFDbEIsNEJBQXdCO0FBQ3RCQyxNQUFBQSxVQUFVLEVBQUVmLGlDQURVO0FBRXRCZ0IsTUFBQUEsS0FBSyxFQUFFWiw0QkFGZTtBQUd0QmEsTUFBQUEsT0FBTyxFQUFFO0FBSGEsS0FETjtBQU9sQixxQ0FBaUM7QUFDL0JDLE1BQUFBLGVBQWUsRUFBRWpCLDJDQURjO0FBRS9CZSxNQUFBQSxLQUFLLEVBQUVYO0FBRndCLEtBUGY7QUFZbEIsa0NBQThCO0FBQzVCYSxNQUFBQSxlQUFlLEVBQUVoQix3Q0FEVztBQUU1QmMsTUFBQUEsS0FBSyxFQUFFVjtBQUZxQixLQVpaO0FBaUJsQixrQ0FBOEI7QUFDNUJZLE1BQUFBLGVBQWUsRUFBRWYsd0NBRFc7QUFFNUJhLE1BQUFBLEtBQUssRUFBRVQ7QUFGcUI7QUFqQlosR0FBSixDQUFILENBQWI7QUF1QkEsTUFBTVksV0FBVywyQkFBRyxpQkFBSVgsZ0JBQWdCLENBQUNXLFdBQXJCLEVBQWtDTCxPQUFsQyxDQUFILENBQWpCO0FBQ0EsTUFBTU0sWUFBWSwyQkFBRyxpQkFBSVosZ0JBQWdCLENBQUNZLFlBQXJCLEVBQW1DTixPQUFuQyxDQUFILENBQWxCO0FBQ0EsTUFBTU8sUUFBUSwyQkFBRyxpQkFBSWIsZ0JBQWdCLENBQUNhLFFBQXJCLEVBQStCO0FBQzlDLGlHQUNTRixXQUFXLEdBQUcsRUFEdkIsK0JBQzhDQyxZQUFZLEdBQUcsRUFEN0Qsb0JBQ2lGO0FBQzdFRSxNQUFBQSxlQUFlLEVBQUU7QUFENEQsS0FEakYsaURBSVNILFdBQVcsR0FBRyxFQUp2QixvQkFJMkM7QUFBRUksTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FKM0MsaURBS1NILFlBQVksR0FBRyxFQUx4QixvQkFLNEM7QUFBRUksTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FMNUMsbUJBRDhDO0FBUzlDLGVBQVc7QUFDVEMsTUFBQUEsY0FBYyxFQUFFLE1BRFA7QUFHVCxxQkFBZTtBQUNiLHlCQUFpQjtBQUNmQyxVQUFBQSxXQUFXLEVBQUUzQixjQUFjLEdBQUc7QUFEZixTQURKO0FBS2Isd0JBQWdCO0FBQ2Q0QixVQUFBQSxZQUFZLEVBQUU1QixjQUFjLEdBQUc7QUFEakI7QUFMSDtBQUhOO0FBVG1DLEdBQS9CLENBQUgsQ0FBZCxDQWxDQyxDQTBERDs7QUExREM7QUEyREQsMkJBQ0tTLGdCQURMO0FBR0VhLElBQUFBLFFBQVEsRUFBUkEsUUFIRjtBQUlFRixJQUFBQSxXQUFXLEVBQVhBLFdBSkY7QUFLRUMsSUFBQUEsWUFBWSxFQUFaQTtBQUxGO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IHsgY3JlYXRlQmFzaWNTdHlsZVNldCB9IGZyb20gJ3JlYWN0LWZpbG0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdWdnZXN0ZWRBY3Rpb25zU3R5bGVTZXQoe1xuICBwYWRkaW5nUmVndWxhcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkRpc2FibGVkLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25EaXNhYmxlZCxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkhvdmVyXG59KSB7XG4gIGNvbnN0IG9yaWdpbmFsU3R5bGVTZXQgPSBjcmVhdGVCYXNpY1N0eWxlU2V0KHtcbiAgICBjdXJzb3I6IG51bGwsXG4gICAgZmxpcHBlckJveFdpZHRoOiA0MCxcbiAgICBmbGlwcGVyU2l6ZTogNDAsXG4gICAgc2Nyb2xsQmFySGVpZ2h0OiA2LFxuICAgIHNjcm9sbEJhck1hcmdpbjogMlxuICB9KTtcblxuICBjb25zdCBmbGlwcGVyID0gY3NzKHtcbiAgICAnJiA+IGRpdi5zbGlkZXIgPiBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcixcbiAgICAgIG91dGxpbmU6IDBcbiAgICB9LFxuXG4gICAgJyY6ZGlzYWJsZWQgPiBkaXYuc2xpZGVyID4gZGl2Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkRpc2FibGVkLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkXG4gICAgfSxcblxuICAgICcmOmZvY3VzID4gZGl2LnNsaWRlciA+IGRpdic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1cyxcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1c1xuICAgIH0sXG5cbiAgICAnJjpob3ZlciA+IGRpdi5zbGlkZXIgPiBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uSG92ZXIsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXJcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxlZnRGbGlwcGVyID0gY3NzKG9yaWdpbmFsU3R5bGVTZXQubGVmdEZsaXBwZXIsIGZsaXBwZXIpO1xuICBjb25zdCByaWdodEZsaXBwZXIgPSBjc3Mob3JpZ2luYWxTdHlsZVNldC5yaWdodEZsaXBwZXIsIGZsaXBwZXIpO1xuICBjb25zdCBjYXJvdXNlbCA9IGNzcyhvcmlnaW5hbFN0eWxlU2V0LmNhcm91c2VsLCB7XG4gICAgJyY6aG92ZXIsICYuc2Nyb2xsaW5nJzoge1xuICAgICAgW2AmIC4ke2xlZnRGbGlwcGVyICsgJyd9ID4gZGl2LnNsaWRlciwgJiAuJHtyaWdodEZsaXBwZXIgKyAnJ30gPiBkaXYuc2xpZGVyYF06IHtcbiAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnXG4gICAgICB9LFxuICAgICAgW2AmIC4ke2xlZnRGbGlwcGVyICsgJyd9ID4gZGl2LnNsaWRlcmBdOiB7IGxlZnQ6IDAgfSxcbiAgICAgIFtgJiAuJHtyaWdodEZsaXBwZXIgKyAnJ30gPiBkaXYuc2xpZGVyYF06IHsgcmlnaHQ6IDAgfVxuICAgIH0sXG5cbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIHNjcm9sbGJhcldpZHRoOiAnbm9uZScsXG5cbiAgICAgICcmID4gdWwgPiBsaSc6IHtcbiAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdSZWd1bGFyIC8gMlxuICAgICAgICB9LFxuXG4gICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmVndWxhciAvIDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gVGhpcyBpcyBub3QgQ1NTLCBidXQgb3B0aW9ucyB0byBjcmVhdGUgc3R5bGUgc2V0IGZvciByZWFjdC1maWxtXG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxTdHlsZVNldCxcblxuICAgIGNhcm91c2VsLFxuICAgIGxlZnRGbGlwcGVyLFxuICAgIHJpZ2h0RmxpcHBlclxuICB9O1xufVxuIl19
