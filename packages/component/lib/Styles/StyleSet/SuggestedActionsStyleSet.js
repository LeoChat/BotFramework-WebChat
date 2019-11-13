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
      color: transcriptOverlayButtonColorOnFocus || transcriptOverlayButtonColor
    },
    '&:hover > div.slider > div': {
      backgroundColor: transcriptOverlayButtonBackgroundOnHover,
      color: transcriptOverlayButtonColorOnHover || transcriptOverlayButtonColor
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCIsInBhZGRpbmdSZWd1bGFyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlciIsIm9yaWdpbmFsU3R5bGVTZXQiLCJjdXJzb3IiLCJmbGlwcGVyQm94V2lkdGgiLCJmbGlwcGVyU2l6ZSIsInNjcm9sbEJhckhlaWdodCIsInNjcm9sbEJhck1hcmdpbiIsImZsaXBwZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdEZsaXBwZXIiLCJyaWdodEZsaXBwZXIiLCJjYXJvdXNlbCIsInRyYW5zaXRpb25EZWxheSIsImxlZnQiLCJyaWdodCIsInNjcm9sbGJhcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSw4QkFBVCxPQVVaO0FBQUE7O0FBQUEsTUFUREMsY0FTQyxRQVREQSxjQVNDO0FBQUEsTUFSREMsaUNBUUMsUUFSREEsaUNBUUM7QUFBQSxNQVBEQywyQ0FPQyxRQVBEQSwyQ0FPQztBQUFBLE1BTkRDLHdDQU1DLFFBTkRBLHdDQU1DO0FBQUEsTUFMREMsd0NBS0MsUUFMREEsd0NBS0M7QUFBQSxNQUpEQyw0QkFJQyxRQUpEQSw0QkFJQztBQUFBLE1BSERDLHNDQUdDLFFBSERBLHNDQUdDO0FBQUEsTUFGREMsbUNBRUMsUUFGREEsbUNBRUM7QUFBQSxNQUREQyxtQ0FDQyxRQUREQSxtQ0FDQztBQUNELE1BQU1DLGdCQUFnQixHQUFHLG9DQUFvQjtBQUMzQ0MsSUFBQUEsTUFBTSxFQUFFLElBRG1DO0FBRTNDQyxJQUFBQSxlQUFlLEVBQUUsRUFGMEI7QUFHM0NDLElBQUFBLFdBQVcsRUFBRSxFQUg4QjtBQUkzQ0MsSUFBQUEsZUFBZSxFQUFFLENBSjBCO0FBSzNDQyxJQUFBQSxlQUFlLEVBQUU7QUFMMEIsR0FBcEIsQ0FBekI7QUFRQSxNQUFNQyxPQUFPLEdBQUcsaUJBQUk7QUFDbEIsNEJBQXdCO0FBQ3RCQyxNQUFBQSxVQUFVLEVBQUVmLGlDQURVO0FBRXRCZ0IsTUFBQUEsS0FBSyxFQUFFWiw0QkFGZTtBQUd0QmEsTUFBQUEsT0FBTyxFQUFFO0FBSGEsS0FETjtBQU9sQixxQ0FBaUM7QUFDL0JDLE1BQUFBLGVBQWUsRUFBRWpCLDJDQURjO0FBRS9CZSxNQUFBQSxLQUFLLEVBQUVYO0FBRndCLEtBUGY7QUFZbEIsa0NBQThCO0FBQzVCYSxNQUFBQSxlQUFlLEVBQUVoQix3Q0FEVztBQUU1QmMsTUFBQUEsS0FBSyxFQUFFVixtQ0FBbUMsSUFBSUY7QUFGbEIsS0FaWjtBQWlCbEIsa0NBQThCO0FBQzVCYyxNQUFBQSxlQUFlLEVBQUVmLHdDQURXO0FBRTVCYSxNQUFBQSxLQUFLLEVBQUVULG1DQUFtQyxJQUFJSDtBQUZsQjtBQWpCWixHQUFKLENBQWhCO0FBdUJBLE1BQU1lLFdBQVcsR0FBRyxpQkFBSVgsZ0JBQWdCLENBQUNXLFdBQXJCLEVBQWtDTCxPQUFsQyxDQUFwQjtBQUNBLE1BQU1NLFlBQVksR0FBRyxpQkFBSVosZ0JBQWdCLENBQUNZLFlBQXJCLEVBQW1DTixPQUFuQyxDQUFyQjtBQUNBLE1BQU1PLFFBQVEsR0FBRyxpQkFBSWIsZ0JBQWdCLENBQUNhLFFBQXJCLEVBQStCO0FBQzlDLGlHQUNTRixXQUFXLEdBQUcsRUFEdkIsK0JBQzhDQyxZQUFZLEdBQUcsRUFEN0Qsb0JBQ2lGO0FBQzdFRSxNQUFBQSxlQUFlLEVBQUU7QUFENEQsS0FEakYsaURBSVNILFdBQVcsR0FBRyxFQUp2QixvQkFJMkM7QUFBRUksTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FKM0MsaURBS1NILFlBQVksR0FBRyxFQUx4QixvQkFLNEM7QUFBRUksTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FMNUMsbUJBRDhDO0FBUzlDLGVBQVc7QUFDVEMsTUFBQUEsY0FBYyxFQUFFLE1BRFA7QUFHVCxxQkFBZTtBQUNiLHlCQUFpQjtBQUNmQyxVQUFBQSxXQUFXLEVBQUUzQixjQUFjLEdBQUc7QUFEZixTQURKO0FBS2Isd0JBQWdCO0FBQ2Q0QixVQUFBQSxZQUFZLEVBQUU1QixjQUFjLEdBQUc7QUFEakI7QUFMSDtBQUhOO0FBVG1DLEdBQS9CLENBQWpCLENBbENDLENBMEREOztBQUNBLDJCQUNLUyxnQkFETDtBQUdFYSxJQUFBQSxRQUFRLEVBQVJBLFFBSEY7QUFJRUYsSUFBQUEsV0FBVyxFQUFYQSxXQUpGO0FBS0VDLElBQUFBLFlBQVksRUFBWkE7QUFMRjtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCB7IGNyZWF0ZUJhc2ljU3R5bGVTZXQgfSBmcm9tICdyZWFjdC1maWxtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0KHtcbiAgcGFkZGluZ1JlZ3VsYXIsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZCxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1cyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcixcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRGlzYWJsZWQsXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlclxufSkge1xuICBjb25zdCBvcmlnaW5hbFN0eWxlU2V0ID0gY3JlYXRlQmFzaWNTdHlsZVNldCh7XG4gICAgY3Vyc29yOiBudWxsLFxuICAgIGZsaXBwZXJCb3hXaWR0aDogNDAsXG4gICAgZmxpcHBlclNpemU6IDQwLFxuICAgIHNjcm9sbEJhckhlaWdodDogNixcbiAgICBzY3JvbGxCYXJNYXJnaW46IDJcbiAgfSk7XG5cbiAgY29uc3QgZmxpcHBlciA9IGNzcyh7XG4gICAgJyYgPiBkaXYuc2xpZGVyID4gZGl2Jzoge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kLFxuICAgICAgY29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3IsXG4gICAgICBvdXRsaW5lOiAwXG4gICAgfSxcblxuICAgICcmOmRpc2FibGVkID4gZGl2LnNsaWRlciA+IGRpdic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25EaXNhYmxlZCxcbiAgICAgIGNvbG9yOiB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25EaXNhYmxlZFxuICAgIH0sXG5cbiAgICAnJjpmb2N1cyA+IGRpdi5zbGlkZXIgPiBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXMgfHwgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvclxuICAgIH0sXG5cbiAgICAnJjpob3ZlciA+IGRpdi5zbGlkZXIgPiBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uSG92ZXIsXG4gICAgICBjb2xvcjogdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXIgfHwgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvclxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdEZsaXBwZXIgPSBjc3Mob3JpZ2luYWxTdHlsZVNldC5sZWZ0RmxpcHBlciwgZmxpcHBlcik7XG4gIGNvbnN0IHJpZ2h0RmxpcHBlciA9IGNzcyhvcmlnaW5hbFN0eWxlU2V0LnJpZ2h0RmxpcHBlciwgZmxpcHBlcik7XG4gIGNvbnN0IGNhcm91c2VsID0gY3NzKG9yaWdpbmFsU3R5bGVTZXQuY2Fyb3VzZWwsIHtcbiAgICAnJjpob3ZlciwgJi5zY3JvbGxpbmcnOiB7XG4gICAgICBbYCYgLiR7bGVmdEZsaXBwZXIgKyAnJ30gPiBkaXYuc2xpZGVyLCAmIC4ke3JpZ2h0RmxpcHBlciArICcnfSA+IGRpdi5zbGlkZXJgXToge1xuICAgICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcydcbiAgICAgIH0sXG4gICAgICBbYCYgLiR7bGVmdEZsaXBwZXIgKyAnJ30gPiBkaXYuc2xpZGVyYF06IHsgbGVmdDogMCB9LFxuICAgICAgW2AmIC4ke3JpZ2h0RmxpcHBlciArICcnfSA+IGRpdi5zbGlkZXJgXTogeyByaWdodDogMCB9XG4gICAgfSxcblxuICAgICcmID4gZGl2Jzoge1xuICAgICAgc2Nyb2xsYmFyV2lkdGg6ICdub25lJyxcblxuICAgICAgJyYgPiB1bCA+IGxpJzoge1xuICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1JlZ3VsYXIgLyAyXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSZWd1bGFyIC8gMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBUaGlzIGlzIG5vdCBDU1MsIGJ1dCBvcHRpb25zIHRvIGNyZWF0ZSBzdHlsZSBzZXQgZm9yIHJlYWN0LWZpbG1cbiAgcmV0dXJuIHtcbiAgICAuLi5vcmlnaW5hbFN0eWxlU2V0LFxuXG4gICAgY2Fyb3VzZWwsXG4gICAgbGVmdEZsaXBwZXIsXG4gICAgcmlnaHRGbGlwcGVyXG4gIH07XG59XG4iXX0=
