'use strict';

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
  var originalStyleSet = (0, _reactFilm.createBasicStyleSet)({
    cursor: null,
    flipperBoxWidth: 40,
    flipperSize: 40,
    scrollBarHeight: 6,
    scrollBarMargin: 2
  });
  var flipper = (0, _glamor.css)({
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
  });
  var leftFlipper = (0, _glamor.css)(originalStyleSet.leftFlipper, flipper);
  var rightFlipper = (0, _glamor.css)(originalStyleSet.rightFlipper, flipper);
  var carousel = (0, _glamor.css)(originalStyleSet.carousel, {
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
  }); // This is not CSS, but options to create style set for react-film

  return _objectSpread({}, originalStyleSet, {
    carousel: carousel,
    leftFlipper: leftFlipper,
    rightFlipper: rightFlipper
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCIsInBhZGRpbmdSZWd1bGFyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciIsIm9yaWdpbmFsU3R5bGVTZXQiLCJjdXJzb3IiLCJmbGlwcGVyQm94V2lkdGgiLCJmbGlwcGVyU2l6ZSIsInNjcm9sbEJhckhlaWdodCIsInNjcm9sbEJhck1hcmdpbiIsImZsaXBwZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdEZsaXBwZXIiLCJyaWdodEZsaXBwZXIiLCJjYXJvdXNlbCIsInRyYW5zaXRpb25EZWxheSIsImxlZnQiLCJyaWdodCIsInNjcm9sbGJhcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSw4QkFBVCxPQVVaO0FBQUE7O0FBQUEsTUFUREMsY0FTQyxRQVREQSxjQVNDO0FBQUEsTUFSREMsaUNBUUMsUUFSREEsaUNBUUM7QUFBQSxNQVBEQywyQ0FPQyxRQVBEQSwyQ0FPQztBQUFBLE1BTkRDLHdDQU1DLFFBTkRBLHdDQU1DO0FBQUEsTUFMREMsd0NBS0MsUUFMREEsd0NBS0M7QUFBQSxNQUpEQyw0QkFJQyxRQUpEQSw0QkFJQztBQUFBLE1BSERDLHNDQUdDLFFBSERBLHNDQUdDO0FBQUEsTUFGREMsbUNBRUMsUUFGREEsbUNBRUM7QUFBQSxNQUREQyxtQ0FDQyxRQUREQSxtQ0FDQztBQUNELE1BQU1DLGdCQUFnQixHQUFHLG9DQUFvQjtBQUMzQ0MsSUFBQUEsTUFBTSxFQUFFLElBRG1DO0FBRTNDQyxJQUFBQSxlQUFlLEVBQUUsRUFGMEI7QUFHM0NDLElBQUFBLFdBQVcsRUFBRSxFQUg4QjtBQUkzQ0MsSUFBQUEsZUFBZSxFQUFFLENBSjBCO0FBSzNDQyxJQUFBQSxlQUFlLEVBQUU7QUFMMEIsR0FBcEIsQ0FBekI7QUFRQSxNQUFNQyxPQUFPLEdBQUcsaUJBQUk7QUFDbEIsNEJBQXdCO0FBQ3RCQyxNQUFBQSxVQUFVLEVBQUVmLGlDQURVO0FBRXRCZ0IsTUFBQUEsS0FBSyxFQUFFWiw0QkFGZTtBQUd0QmEsTUFBQUEsT0FBTyxFQUFFO0FBSGEsS0FETjtBQU9sQixxQ0FBaUM7QUFDL0JDLE1BQUFBLGVBQWUsRUFBRWpCLDJDQURjO0FBRS9CZSxNQUFBQSxLQUFLLEVBQUVYO0FBRndCLEtBUGY7QUFZbEIsa0NBQThCO0FBQzVCYSxNQUFBQSxlQUFlLEVBQUVoQix3Q0FEVztBQUU1QmMsTUFBQUEsS0FBSyxFQUFFVjtBQUZxQixLQVpaO0FBaUJsQixrQ0FBOEI7QUFDNUJZLE1BQUFBLGVBQWUsRUFBRWYsd0NBRFc7QUFFNUJhLE1BQUFBLEtBQUssRUFBRVQ7QUFGcUI7QUFqQlosR0FBSixDQUFoQjtBQXVCQSxNQUFNWSxXQUFXLEdBQUcsaUJBQUlYLGdCQUFnQixDQUFDVyxXQUFyQixFQUFrQ0wsT0FBbEMsQ0FBcEI7QUFDQSxNQUFNTSxZQUFZLEdBQUcsaUJBQUlaLGdCQUFnQixDQUFDWSxZQUFyQixFQUFtQ04sT0FBbkMsQ0FBckI7QUFDQSxNQUFNTyxRQUFRLEdBQUcsaUJBQUliLGdCQUFnQixDQUFDYSxRQUFyQixFQUErQjtBQUM5QyxpR0FDU0YsV0FBVyxHQUFHLEVBRHZCLCtCQUM4Q0MsWUFBWSxHQUFHLEVBRDdELG9CQUNpRjtBQUM3RUUsTUFBQUEsZUFBZSxFQUFFO0FBRDRELEtBRGpGLGlEQUlTSCxXQUFXLEdBQUcsRUFKdkIsb0JBSTJDO0FBQUVJLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBSjNDLGlEQUtTSCxZQUFZLEdBQUcsRUFMeEIsb0JBSzRDO0FBQUVJLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBTDVDLG1CQUQ4QztBQVM5QyxlQUFXO0FBQ1RDLE1BQUFBLGNBQWMsRUFBRSxNQURQO0FBR1QscUJBQWU7QUFDYix5QkFBaUI7QUFDZkMsVUFBQUEsV0FBVyxFQUFFM0IsY0FBYyxHQUFHO0FBRGYsU0FESjtBQUtiLHdCQUFnQjtBQUNkNEIsVUFBQUEsWUFBWSxFQUFFNUIsY0FBYyxHQUFHO0FBRGpCO0FBTEg7QUFITjtBQVRtQyxHQUEvQixDQUFqQixDQWxDQyxDQTBERDs7QUFDQSwyQkFDS1MsZ0JBREw7QUFHRWEsSUFBQUEsUUFBUSxFQUFSQSxRQUhGO0FBSUVGLElBQUFBLFdBQVcsRUFBWEEsV0FKRjtBQUtFQyxJQUFBQSxZQUFZLEVBQVpBO0FBTEY7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiBcIm9mZlwiICovXG5cbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgeyBjcmVhdGVCYXNpY1N0eWxlU2V0IH0gZnJvbSAncmVhY3QtZmlsbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCh7XG4gIHBhZGRpbmdSZWd1bGFyLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRGlzYWJsZWQsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uSG92ZXIsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3IsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1cyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXJcbn0pIHtcbiAgY29uc3Qgb3JpZ2luYWxTdHlsZVNldCA9IGNyZWF0ZUJhc2ljU3R5bGVTZXQoe1xuICAgIGN1cnNvcjogbnVsbCxcbiAgICBmbGlwcGVyQm94V2lkdGg6IDQwLFxuICAgIGZsaXBwZXJTaXplOiA0MCxcbiAgICBzY3JvbGxCYXJIZWlnaHQ6IDYsXG4gICAgc2Nyb2xsQmFyTWFyZ2luOiAyXG4gIH0pO1xuXG4gIGNvbnN0IGZsaXBwZXIgPSBjc3Moe1xuICAgICcmID4gZGl2LnNsaWRlciA+IGRpdic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZCxcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yLFxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG5cbiAgICAnJjpkaXNhYmxlZCA+IGRpdi5zbGlkZXIgPiBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRGlzYWJsZWQsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRGlzYWJsZWRcbiAgICB9LFxuXG4gICAgJyY6Zm9jdXMgPiBkaXYuc2xpZGVyID4gZGl2Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzXG4gICAgfSxcblxuICAgICcmOmhvdmVyID4gZGl2LnNsaWRlciA+IGRpdic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcixcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlclxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdEZsaXBwZXIgPSBjc3Mob3JpZ2luYWxTdHlsZVNldC5sZWZ0RmxpcHBlciwgZmxpcHBlcik7XG4gIGNvbnN0IHJpZ2h0RmxpcHBlciA9IGNzcyhvcmlnaW5hbFN0eWxlU2V0LnJpZ2h0RmxpcHBlciwgZmxpcHBlcik7XG4gIGNvbnN0IGNhcm91c2VsID0gY3NzKG9yaWdpbmFsU3R5bGVTZXQuY2Fyb3VzZWwsIHtcbiAgICAnJjpob3ZlciwgJi5zY3JvbGxpbmcnOiB7XG4gICAgICBbYCYgLiR7bGVmdEZsaXBwZXIgKyAnJ30gPiBkaXYuc2xpZGVyLCAmIC4ke3JpZ2h0RmxpcHBlciArICcnfSA+IGRpdi5zbGlkZXJgXToge1xuICAgICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcydcbiAgICAgIH0sXG4gICAgICBbYCYgLiR7bGVmdEZsaXBwZXIgKyAnJ30gPiBkaXYuc2xpZGVyYF06IHsgbGVmdDogMCB9LFxuICAgICAgW2AmIC4ke3JpZ2h0RmxpcHBlciArICcnfSA+IGRpdi5zbGlkZXJgXTogeyByaWdodDogMCB9XG4gICAgfSxcblxuICAgICcmID4gZGl2Jzoge1xuICAgICAgc2Nyb2xsYmFyV2lkdGg6ICdub25lJyxcblxuICAgICAgJyYgPiB1bCA+IGxpJzoge1xuICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1JlZ3VsYXIgLyAyXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSZWd1bGFyIC8gMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBUaGlzIGlzIG5vdCBDU1MsIGJ1dCBvcHRpb25zIHRvIGNyZWF0ZSBzdHlsZSBzZXQgZm9yIHJlYWN0LWZpbG1cbiAgcmV0dXJuIHtcbiAgICAuLi5vcmlnaW5hbFN0eWxlU2V0LFxuXG4gICAgY2Fyb3VzZWwsXG4gICAgbGVmdEZsaXBwZXIsXG4gICAgcmlnaHRGbGlwcGVyXG4gIH07XG59XG4iXX0=
