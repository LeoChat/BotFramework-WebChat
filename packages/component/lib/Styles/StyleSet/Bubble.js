'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createBubbleStyle;

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

/* eslint no-magic-numbers: ["error", { "ignore": [0, 1, 2] }] */
function isPositive(value) {
  return 1 / value >= 0;
}

function createBubbleStyle(_ref) {
  var bubbleBackground = _ref.bubbleBackground,
    bubbleBorderColor = _ref.bubbleBorderColor,
    bubbleBorderRadius = _ref.bubbleBorderRadius,
    bubbleBorderStyle = _ref.bubbleBorderStyle,
    bubbleBorderWidth = _ref.bubbleBorderWidth,
    bubbleFromUserBackground = _ref.bubbleFromUserBackground,
    bubbleFromUserBorderColor = _ref.bubbleFromUserBorderColor,
    bubbleFromUserBorderRadius = _ref.bubbleFromUserBorderRadius,
    bubbleFromUserBorderStyle = _ref.bubbleFromUserBorderStyle,
    bubbleFromUserBorderWidth = _ref.bubbleFromUserBorderWidth,
    bubbleFromUserNubOffset = _ref.bubbleFromUserNubOffset,
    bubbleFromUserNubSize = _ref.bubbleFromUserNubSize,
    bubbleFromUserTextColor = _ref.bubbleFromUserTextColor,
    bubbleMinHeight = _ref.bubbleMinHeight,
    bubbleNubOffset = _ref.bubbleNubOffset,
    bubbleNubSize = _ref.bubbleNubSize,
    bubbleTextColor = _ref.bubbleTextColor,
    messageActivityWordBreak = _ref.messageActivityWordBreak,
    paddingRegular = _ref.paddingRegular;
  var botNubUpSideDown = !isPositive(bubbleNubOffset);
  var userNubUpSideDown = !isPositive(bubbleFromUserNubOffset);
  var botNubCornerRadius = Math.min(bubbleBorderRadius, Math.abs(bubbleNubOffset));
  var userNubCornerRadius = Math.min(bubbleFromUserBorderRadius, Math.abs(bubbleFromUserNubOffset));
  return {
    '& > .webchat__bubble__content': {
      wordBreak: messageActivityWordBreak
    },
    '& > .webchat__bubble__nub': {
      overflow: 'hidden',
      // This style is for IE11 because it don't respect SVG viewport
      position: 'absolute'
    },
    '&:not(.from-user)': {
      '&.webchat__bubble_has_nub': {
        '& > .webchat__bubble__content': bubbleNubSize
          ? {
              marginLeft: paddingRegular
            }
          : {}
      },
      '& > .webchat__bubble__content': {
        background: bubbleBackground,
        borderColor: bubbleBorderColor,
        borderRadius: bubbleBorderRadius,
        borderStyle: bubbleBorderStyle,
        borderWidth: bubbleBorderWidth,
        color: bubbleTextColor,
        minHeight: bubbleMinHeight - bubbleBorderWidth * 2
      },
      '&.webchat__bubble_has_nub > .webchat__bubble__content': _objectSpread(
        {},
        bubbleNubSize && botNubUpSideDown
          ? {
              borderBottomLeftRadius: botNubCornerRadius
            }
          : {},
        {},
        bubbleNubSize && !botNubUpSideDown
          ? {
              borderTopLeftRadius: botNubCornerRadius
            }
          : {}
      ),
      '& > .webchat__bubble__nub': {
        bottom: isPositive(bubbleNubOffset) ? undefined : -bubbleNubOffset,
        height: bubbleNubSize,
        left: bubbleBorderWidth - bubbleNubSize + paddingRegular,
        top: isPositive(bubbleNubOffset) ? bubbleNubOffset : undefined,
        width: bubbleNubSize,
        '& > g > path': {
          fill: bubbleBackground,
          stroke: bubbleBorderColor,
          strokeWidth: bubbleBorderWidth
        }
      }
    },
    '&.from-user': {
      '&.webchat__bubble_has_nub': {
        '& > .webchat__bubble__content': bubbleNubSize
          ? {
              marginRight: paddingRegular
            }
          : {}
      },
      '& > .webchat__bubble__content': {
        background: bubbleFromUserBackground,
        borderColor: bubbleFromUserBorderColor,
        borderRadius: bubbleFromUserBorderRadius,
        borderStyle: bubbleFromUserBorderStyle,
        borderWidth: bubbleFromUserBorderWidth,
        color: bubbleFromUserTextColor,
        minHeight: bubbleMinHeight - bubbleFromUserBorderWidth * 2
      },
      '&.webchat__bubble_has_nub > .webchat__bubble__content': _objectSpread(
        {},
        bubbleFromUserNubSize && userNubUpSideDown
          ? {
              borderBottomRightRadius: userNubCornerRadius
            }
          : {},
        {},
        bubbleFromUserNubSize && !userNubUpSideDown
          ? {
              borderTopRightRadius: userNubCornerRadius
            }
          : {}
      ),
      '& > .webchat__bubble__nub': {
        height: bubbleFromUserNubSize,
        right: bubbleFromUserBorderWidth - bubbleFromUserNubSize + paddingRegular,
        bottom: isPositive(bubbleFromUserNubOffset) ? undefined : -bubbleFromUserNubOffset,
        top: isPositive(bubbleFromUserNubOffset) ? bubbleFromUserNubOffset : undefined,
        width: bubbleFromUserNubSize,
        '& > g > path': {
          fill: bubbleFromUserBackground,
          stroke: bubbleFromUserBorderColor,
          strokeWidth: bubbleFromUserBorderWidth
        }
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQnViYmxlLmpzIl0sIm5hbWVzIjpbImlzUG9zaXRpdmUiLCJ2YWx1ZSIsImNyZWF0ZUJ1YmJsZVN0eWxlIiwiYnViYmxlQmFja2dyb3VuZCIsImJ1YmJsZUJvcmRlckNvbG9yIiwiYnViYmxlQm9yZGVyUmFkaXVzIiwiYnViYmxlQm9yZGVyU3R5bGUiLCJidWJibGVCb3JkZXJXaWR0aCIsImJ1YmJsZUZyb21Vc2VyQmFja2dyb3VuZCIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyQ29sb3IiLCJidWJibGVGcm9tVXNlckJvcmRlclJhZGl1cyIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyU3R5bGUiLCJidWJibGVGcm9tVXNlckJvcmRlcldpZHRoIiwiYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQiLCJidWJibGVGcm9tVXNlck51YlNpemUiLCJidWJibGVGcm9tVXNlclRleHRDb2xvciIsImJ1YmJsZU1pbkhlaWdodCIsImJ1YmJsZU51Yk9mZnNldCIsImJ1YmJsZU51YlNpemUiLCJidWJibGVUZXh0Q29sb3IiLCJtZXNzYWdlQWN0aXZpdHlXb3JkQnJlYWsiLCJwYWRkaW5nUmVndWxhciIsImJvdE51YlVwU2lkZURvd24iLCJ1c2VyTnViVXBTaWRlRG93biIsImJvdE51YkNvcm5lclJhZGl1cyIsIk1hdGgiLCJtaW4iLCJhYnMiLCJ1c2VyTnViQ29ybmVyUmFkaXVzIiwid29yZEJyZWFrIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwiY29sb3IiLCJtaW5IZWlnaHQiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvdHRvbSIsInVuZGVmaW5lZCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixTQUFPLElBQUlBLEtBQUosSUFBYSxDQUFwQjtBQUNEOztBQUVjLFNBQVNDLGlCQUFULE9Bb0JaO0FBQUEsTUFuQkRDLGdCQW1CQyxRQW5CREEsZ0JBbUJDO0FBQUEsTUFsQkRDLGlCQWtCQyxRQWxCREEsaUJBa0JDO0FBQUEsTUFqQkRDLGtCQWlCQyxRQWpCREEsa0JBaUJDO0FBQUEsTUFoQkRDLGlCQWdCQyxRQWhCREEsaUJBZ0JDO0FBQUEsTUFmREMsaUJBZUMsUUFmREEsaUJBZUM7QUFBQSxNQWREQyx3QkFjQyxRQWREQSx3QkFjQztBQUFBLE1BYkRDLHlCQWFDLFFBYkRBLHlCQWFDO0FBQUEsTUFaREMsMEJBWUMsUUFaREEsMEJBWUM7QUFBQSxNQVhEQyx5QkFXQyxRQVhEQSx5QkFXQztBQUFBLE1BVkRDLHlCQVVDLFFBVkRBLHlCQVVDO0FBQUEsTUFUREMsdUJBU0MsUUFUREEsdUJBU0M7QUFBQSxNQVJEQyxxQkFRQyxRQVJEQSxxQkFRQztBQUFBLE1BUERDLHVCQU9DLFFBUERBLHVCQU9DO0FBQUEsTUFOREMsZUFNQyxRQU5EQSxlQU1DO0FBQUEsTUFMREMsZUFLQyxRQUxEQSxlQUtDO0FBQUEsTUFKREMsYUFJQyxRQUpEQSxhQUlDO0FBQUEsTUFIREMsZUFHQyxRQUhEQSxlQUdDO0FBQUEsTUFGREMsd0JBRUMsUUFGREEsd0JBRUM7QUFBQSxNQUREQyxjQUNDLFFBRERBLGNBQ0M7QUFDRCxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDdEIsVUFBVSxDQUFDaUIsZUFBRCxDQUFwQztBQUNBLE1BQU1NLGlCQUFpQixHQUFHLENBQUN2QixVQUFVLENBQUNhLHVCQUFELENBQXJDO0FBRUEsTUFBTVcsa0JBQWtCLEdBQUdDLElB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QXhCLE9BQTlDLEdBQThGLEVBSHBHLENBZmE7QUFxQmIsbUNBQTZCO0FBQzNCZ0IsUUFBQUEsTUFBTSxFQUFFOUIscUJBRG1CO0FBRTNCd0MsUUFBQUEsS0FBSyxFQUFFMUMseUJBQXlCLEdBQUdFLHFCQUE1QixHQUFvRE8sY0FGaEM7QUFHM0JxQixRQUFBQSxNQUFNLEVBQUUxQyxVQUFVLENBQUNhLHVCQUFELENBQVYsR0FBc0M4QixTQUF0QyxHQUFrRCxDQUFDOUIsdUJBSGhDO0FBSTNCaUMsUUFBQUEsR0FBRyxFQUFFOUMsVUFBVSxDQUFDYSx1QkFBRCxDQUFWLEdBQXNDQSx1QkFBdEMsR0FBZ0U4QixTQUoxQztBQUszQkksUUFBQUEsS0FBSyxFQUFFakMscUJBTG9CO0FBTzNCLHdCQUFnQjtBQUNka0MsVUFBQUEsSUFBSSxFQUFFeEMsd0JBRFE7QUFFZHlDLFVBQUFBLE1BQU0sRUFBRXhDLHlCQUZNO0FBR2R5QyxVQUFBQSxXQUFXLEVBQUV0QztBQUhDO0FBUFc7QUFyQmhCO0FBOUNWLEdBQVA7QUFrRkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMCwgMSwgMl0gfV0gKi9cblxuZnVuY3Rpb24gaXNQb3NpdGl2ZSh2YWx1ZSkge1xuICByZXR1cm4gMSAvIHZhbHVlID49IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJ1YmJsZVN0eWxlKHtcbiAgYnViYmxlQmFja2dyb3VuZCxcbiAgYnViYmxlQm9yZGVyQ29sb3IsXG4gIGJ1YmJsZUJvcmRlclJhZGl1cyxcbiAgYnViYmxlQm9yZGVyU3R5bGUsXG4gIGJ1YmJsZUJvcmRlcldpZHRoLFxuICBidWJibGVGcm9tVXNlckJhY2tncm91bmQsXG4gIGJ1YmJsZUZyb21Vc2VyQm9yZGVyQ29sb3IsXG4gIGJ1YmJsZUZyb21Vc2VyQm9yZGVyUmFkaXVzLFxuICBidWJibGVGcm9tVXNlckJvcmRlclN0eWxlLFxuICBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoLFxuICBidWJibGVGcm9tVXNlck51Yk9mZnNldCxcbiAgYnViYmxlRnJvbVVzZXJOdWJTaXplLFxuICBidWJibGVGcm9tVXNlclRleHRDb2xvcixcbiAgYnViYmxlTWluSGVpZ2h0LFxuICBidWJibGVOdWJPZmZzZXQsXG4gIGJ1YmJsZU51YlNpemUsXG4gIGJ1YmJsZVRleHRDb2xvcixcbiAgbWVzc2FnZUFjdGl2aXR5V29yZEJyZWFrLFxuICBwYWRkaW5nUmVndWxhclxufSkge1xuICBjb25zdCBib3ROdWJVcFNpZGVEb3duID0gIWlzUG9zaXRpdmUoYnViYmxlTnViT2Zmc2V0KTtcbiAgY29uc3QgdXNlck51YlVwU2lkZURvd24gPSAhaXNQb3NpdGl2ZShidWJibGVGcm9tVXNlck51Yk9mZnNldCk7XG5cbiAgY29uc3QgYm90TnViQ29ybmVyUmFkaXVzID0gTWF0aC5taW4oYnViYmxlQm9yZGVyUmFkaXVzLCBNYXRoLmFicyhidWJibGVOdWJPZmZzZXQpKTtcbiAgY29uc3QgdXNlck51YkNvcm5lclJhZGl1cyA9IE1hdGgubWluKGJ1YmJsZUZyb21Vc2VyQm9yZGVyUmFkaXVzLCBNYXRoLmFicyhidWJibGVGcm9tVXNlck51Yk9mZnNldCkpO1xuXG4gIHJldHVybiB7XG4gICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgd29yZEJyZWFrOiBtZXNzYWdlQWN0aXZpdHlXb3JkQnJlYWtcbiAgICB9LFxuXG4gICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19udWInOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsIC8vIFRoaXMgc3R5bGUgaXMgZm9yIElFMTEgYmVjYXVzZSBpdCBkb24ndCByZXNwZWN0IFNWRyB2aWV3cG9ydFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuXG4gICAgJyY6bm90KC5mcm9tLXVzZXIpJzoge1xuICAgICAgJyYud2ViY2hhdF9fYnViYmxlX2hhc19udWInOiB7XG4gICAgICAgICcmID4gLndlYmNoYXRfX2J1YmJsZV9fY29udGVudCc6IGJ1YmJsZU51YlNpemUgPyB7IG1hcmdpbkxlZnQ6IHBhZGRpbmdSZWd1bGFyIH0gOiB7fVxuICAgICAgfSxcblxuICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBidWJibGVCYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXJDb2xvcjogYnViYmxlQm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlclJhZGl1czogYnViYmxlQm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJTdHlsZTogYnViYmxlQm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcldpZHRoOiBidWJibGVCb3JkZXJXaWR0aCxcbiAgICAgICAgY29sb3I6IGJ1YmJsZVRleHRDb2xvcixcbiAgICAgICAgbWluSGVpZ2h0OiBidWJibGVNaW5IZWlnaHQgLSBidWJibGVCb3JkZXJXaWR0aCAqIDJcbiAgICAgIH0sXG5cbiAgICAgICcmLndlYmNoYXRfX2J1YmJsZV9oYXNfbnViID4gLndlYmNoYXRfX2J1YmJsZV9fY29udGVudCc6IHtcbiAgICAgICAgLy8gSGlkZSBib3JkZXIgcmFkaXVzIGlmIHRoZXJlIGlzIGEgbnViIG9uIHRoZSB0b3AvYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICAgIC4uLihidWJibGVOdWJTaXplICYmIGJvdE51YlVwU2lkZURvd24gPyB7IGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvdE51YkNvcm5lclJhZGl1cyB9IDoge30pLFxuICAgICAgICAuLi4oYnViYmxlTnViU2l6ZSAmJiAhYm90TnViVXBTaWRlRG93biA/IHsgYm9yZGVyVG9wTGVmdFJhZGl1czogYm90TnViQ29ybmVyUmFkaXVzIH0gOiB7fSlcbiAgICAgIH0sXG5cbiAgICAgICcmID4gLndlYmNoYXRfX2J1YmJsZV9fbnViJzoge1xuICAgICAgICBib3R0b206IGlzUG9zaXRpdmUoYnViYmxlTnViT2Zmc2V0KSA/IHVuZGVmaW5lZCA6IC1idWJibGVOdWJPZmZzZXQsXG4gICAgICAgIGhlaWdodDogYnViYmxlTnViU2l6ZSxcbiAgICAgICAgbGVmdDogYnViYmxlQm9yZGVyV2lkdGggLSBidWJibGVOdWJTaXplICsgcGFkZGluZ1JlZ3VsYXIsXG4gICAgICAgIHRvcDogaXNQb3NpdGl2ZShidWJibGVOdWJPZmZzZXQpID8gYnViYmxlTnViT2Zmc2V0IDogdW5kZWZpbmVkLFxuICAgICAgICB3aWR0aDogYnViYmxlTnViU2l6ZSxcblxuICAgICAgICAnJiA+IGcgPiBwYXRoJzoge1xuICAgICAgICAgIGZpbGw6IGJ1YmJsZUJhY2tncm91bmQsXG4gICAgICAgICAgc3Ryb2tlOiBidWJibGVCb3JkZXJDb2xvcixcbiAgICAgICAgICBzdHJva2VXaWR0aDogYnViYmxlQm9yZGVyV2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnJi5mcm9tLXVzZXInOiB7XG4gICAgICAnJi53ZWJjaGF0X19idWJibGVfaGFzX251Yic6IHtcbiAgICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50JzogYnViYmxlTnViU2l6ZSA/IHsgbWFyZ2luUmlnaHQ6IHBhZGRpbmdSZWd1bGFyIH0gOiB7fVxuICAgICAgfSxcblxuICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBidWJibGVGcm9tVXNlckJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlckNvbG9yOiBidWJibGVGcm9tVXNlckJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJTdHlsZTogYnViYmxlRnJvbVVzZXJCb3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyV2lkdGgsXG4gICAgICAgIGNvbG9yOiBidWJibGVGcm9tVXNlclRleHRDb2xvcixcbiAgICAgICAgbWluSGVpZ2h0OiBidWJibGVNaW5IZWlnaHQgLSBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoICogMlxuICAgICAgfSxcblxuICAgICAgJyYud2ViY2hhdF9fYnViYmxlX2hhc19udWIgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgICAvLyBIaWRlIGJvcmRlciByYWRpdXMgaWYgdGhlcmUgaXMgYSBudWIgb24gdGhlIHRvcC9ib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICAgIC4uLihidWJibGVGcm9tVXNlck51YlNpemUgJiYgdXNlck51YlVwU2lkZURvd24gPyB7IGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiB1c2VyTnViQ29ybmVyUmFkaXVzIH0gOiB7fSksXG4gICAgICAgIC4uLihidWJibGVGcm9tVXNlck51YlNpemUgJiYgIXVzZXJOdWJVcFNpZGVEb3duID8geyBib3JkZXJUb3BSaWdodFJhZGl1czogdXNlck51YkNvcm5lclJhZGl1cyB9IDoge30pXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC53ZWJjaGF0X19idWJibGVfX251Yic6IHtcbiAgICAgICAgaGVpZ2h0OiBidWJibGVGcm9tVXNlck51YlNpemUsXG4gICAgICAgIHJpZ2h0OiBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoIC0gYnViYmxlRnJvbVVzZXJOdWJTaXplICsgcGFkZGluZ1JlZ3VsYXIsXG4gICAgICAgIGJvdHRvbTogaXNQb3NpdGl2ZShidWJibGVGcm9tVXNlck51Yk9mZnNldCkgPyB1bmRlZmluZWQgOiAtYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQsXG4gICAgICAgIHRvcDogaXNQb3NpdGl2ZShidWJibGVGcm9tVXNlck51Yk9mZnNldCkgPyBidWJibGVGcm9tVXNlck51Yk9mZnNldCA6IHVuZGVmaW5lZCxcbiAgICAgICAgd2lkdGg6IGJ1YmJsZUZyb21Vc2VyTnViU2l6ZSxcblxuICAgICAgICAnJiA+IGcgPiBwYXRoJzoge1xuICAgICAgICAgIGZpbGw6IGJ1YmJsZUZyb21Vc2VyQmFja2dyb3VuZCxcbiAgICAgICAgICBzdHJva2U6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyQ29sb3IsXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyV2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
