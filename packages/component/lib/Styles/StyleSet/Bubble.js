'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createBubbleStyle;

var _color = _interopRequireDefault(require('color'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

function acuteNubSVG() {
  var nubSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var backgroundColor = arguments.length > 1 ? arguments[1] : undefined;
  var color = arguments.length > 2 ? arguments[2] : undefined;
  var strokeWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var side = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'bot';
  var upSideDown = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var halfNubSize = nubSize / 2;
  var halfStrokeWidth = strokeWidth / 2;
  var horizontalTransform =
    side === 'bot' ? '' : 'translate('.concat(halfNubSize, ' 0) scale(-1 1) translate(').concat(-halfNubSize, ' 0)');
  var verticalTransform = upSideDown
    ? 'translate(0 '.concat(halfNubSize, ') scale(1 -1) translate(0 ').concat(-halfNubSize, ')')
    : '';
  var p1 = [nubSize, halfStrokeWidth].join(' ');
  var p2 = [strokeWidth, halfStrokeWidth].join(' ');
  var p3 = [nubSize + strokeWidth, nubSize + halfStrokeWidth].join(' ');
  return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '
    .concat(nubSize, ' ')
    .concat(nubSize, '"><g transform="')
    .concat(horizontalTransform, ' ')
    .concat(verticalTransform, '"><path d="M')
    .concat(p1, ' L')
    .concat(p2, ' L')
    .concat(p3, '" fill="')
    .concat(
      (0, _color.default)((backgroundColor || '').toLowerCase())
        .rgb()
        .string(),
      '" stroke="'
    )
    .concat(
      (0, _color.default)((color || '').toLowerCase())
        .rgb()
        .string(),
      '" stroke-width="'
    )
    .concat(strokeWidth, 'px" /></g></svg>');
}

function isPositive(value) {
  return 1 / value >= 0;
}

function svgToDataURI(svg) {
  return 'data:image/svg+xml;utf8,'.concat(svg.replace(/"/g, "'"));
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

  if (bubbleFromUserNubOffset === 'top') {
    bubbleFromUserNubOffset = 0;
  } else if (typeof bubbleFromUserNubOffset !== 'number') {
    bubbleFromUserNubOffset = -0;
  }

  if (bubbleNubOffset === 'top') {
    bubbleNubOffset = 0;
  } else if (typeof bubbleNubOffset !== 'number') {
    bubbleNubOffset = -0;
  }

  var botNubUpSideDown = !isPositive(bubbleNubOffset);
  var userNubUpSideDown = !isPositive(bubbleFromUserNubOffset);
  var botNubSVG = acuteNubSVG(
    bubbleNubSize,
    bubbleBackground,
    bubbleBorderColor,
    bubbleBorderWidth,
    'bot',
    botNubUpSideDown
  );
  var userNubSVG = acuteNubSVG(
    bubbleFromUserNubSize,
    bubbleFromUserBackground,
    bubbleFromUserBorderColor,
    bubbleFromUserBorderWidth,
    'user',
    userNubUpSideDown
  );
  var botNubCornerRadius = Math.min(bubbleBorderRadius, Math.abs(bubbleNubOffset));
  var userNubCornerRadius = Math.min(bubbleFromUserBorderRadius, Math.abs(bubbleFromUserNubOffset));
  return {
    '& > .webchat__bubble__content': {
      wordBreak: messageActivityWordBreak
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
        backgroundImage: 'url("'.concat(svgToDataURI(botNubSVG).replace(/"/g, "'"), '")'),
        bottom: isPositive(bubbleNubOffset) ? undefined : -bubbleNubOffset,
        height: bubbleNubSize,
        left: bubbleBorderWidth - bubbleNubSize + paddingRegular,
        top: isPositive(bubbleNubOffset) ? bubbleNubOffset : undefined,
        width: bubbleNubSize
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
        backgroundImage: 'url("'.concat(svgToDataURI(userNubSVG).replace(/"/g, "'"), '")'),
        height: bubbleFromUserNubSize,
        right: bubbleFromUserBorderWidth - bubbleFromUserNubSize + paddingRegular,
        bottom: isPositive(bubbleFromUserNubOffset) ? undefined : -bubbleFromUserNubOffset,
        top: isPositive(bubbleFromUserNubOffset) ? bubbleFromUserNubOffset : undefined,
        width: bubbleFromUserNubSize
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQnViYmxlLmpzIl0sIm5hbWVzIjpbImFjdXRlTnViU1ZHIiwibnViU2l6ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJzaWRlIiwidXBTaWRlRG93biIsImhhbGZOdWJTaXplIiwiaGFsZlN0cm9rZVdpZHRoIiwiaG9yaXpvbnRhbFRyYW5zZm9ybSIsInZlcnRpY2FsVHJhbnNmb3JtIiwicDEiLCJqb2luIiwicDIiLCJwMyIsInRvTG93ZXJDYXNlIiwicmdiIiwic3RyaW5nIiwiaXNQb3NpdGl2ZSIsInZhbHVlIiwic3ZnVG9EYXRhVVJJIiwic3ZnIiwicmVwbGFjZSIsImNyZWF0ZUJ1YmJsZVN0eWxlIiwiYnViYmxlQmFja2dyb3VuZCIsImJ1YmJsZUJvcmRlckNvbG9yIiwiYnViYmxlQm9yZGVyUmFkaXVzIiwiYnViYmxlQm9yZGVyU3R5bGUiLCJidWJibGVCb3JkZXJXaWR0aCIsImJ1YmJsZUZyb21Vc2VyQmFja2dyb3VuZCIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyQ29sb3IiLCJidWJibGVGcm9tVXNlckJvcmRlclJhZGl1cyIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyU3R5bGUiLCJidWJibGVGcm9tVXNlckJvcmRlcldpZHRoIiwiYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQiLCJidWJibGVGcm9tVXNlck51YlNpemUiLCJidWJibGVGcm9tVXNlclRleHRDb2xvciIsImJ1YmJsZU1pbkhlaWdodCIsImJ1YmJsZU51Yk9mZnNldCIsImJ1YmJsZU51YlNpemUiLCJidWJibGVUZXh0Q29sb3IiLCJtZXNzYWdlQWN0aXZpdHlXb3JkQnJlYWsiLCJwYWRkaW5nUmVndWxhciIsImJvdE51YlVwU2lkZURvd24iLCJ1c2VyTnViVXBTaWRlRG93biIsImJvdE51YlNWRyIsInVzZXJOdWJTVkciLCJib3ROdWJDb3JuZXJSYWRpdXMiLCJNYXRoIiwibWluIiwiYWJzIiwidXNlck51YkNvcm5lclJhZGl1cyIsIndvcmRCcmVhayIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwibWluSGVpZ2h0IiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3R0b20iLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxHQUE4RztBQUFBLE1BQXpGQyxPQUF5Rix1RUFBL0UsRUFBK0U7QUFBQSxNQUEzRUMsZUFBMkU7QUFBQSxNQUExREMsS0FBMEQ7QUFBQSxNQUFuREMsV0FBbUQsdUVBQXJDLENBQXFDO0FBQUEsTUFBbENDLElBQWtDLHVFQUEzQixLQUEyQjtBQUFBLE1BQXBCQyxVQUFvQix1RUFBUCxLQUFPO0FBQzVHLE1BQU1DLFdBQVcsR0FBR04sT0FBTyxHQUFHLENBQTlCO0FBQ0EsTUFBTU8sZUFBZSxHQUFHSixXQUFXLEdBQUcsQ0FBdEM7QUFDQSxNQUFNSyxtQkFBbUIsR0FDdkJKLElBQUksS0FBSyxLQUFULEdBQWlCLEVBQWpCLHVCQUFtQ0UsV0FBbkMsdUNBQTJFLENBQUNBLFdBQTVFLFFBREY7QUFFQSxNQUFNRyxpQkFBaUIsR0FBR0osVUFBVSx5QkFBa0JDLFdBQWxCLHVDQUEwRCxDQUFDQSxXQUEzRCxTQUE0RSxFQUFoSDtBQUVBLE1BQU1JLEVBQUUsR0FBRyxDQUFDVixPQUFELEVBQVVPLGVBQVYsRUFBMkJJLElBQTNCLENBQWdDLEdBQWhDLENBQVg7QUFDQSxNQUFNQyxFQUFFLEdBQUcsQ0FBQ1QsV0FBRCxFQUFjSSxlQUFkLEVBQStCSSxJQUEvQixDQUFvQyxHQUFw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Q0FBQzBCLFVBQUQsQ0FBWixDQUF5QnhCLE9BQXpCLENBQWlDLElBQWpDLEVBQXdDLEdBQXhDLENBQVYsUUFEWTtBQUUzQjJDLFFBQUFBLE1BQU0sRUFBRTlCLHFCQUZtQjtBQUczQnFDLFFBQUFBLEtBQUssRUFBRXZDLHlCQUF5QixHQUFHRSxxQkFBNUIsR0FBb0RPLGNBSGhDO0FBSTNCcUIsUUFBQUEsTUFBTSxFQUFFN0MsVUFBVSxDQUFDZ0IsdUJBQUQsQ0FBVixHQUFzQzhCLFNBQXRDLEdBQWtELENBQUM5Qix1QkFKaEM7QUFLM0JpQyxRQUFBQSxHQUFHLEVBQUVqRCxVQUFVLENBQUNnQix1QkFBRCxDQUFWLEdBQXNDQSx1QkFBdEMsR0FBZ0U4QixTQUwxQztBQU0zQkksUUFBQUEsS0FBSyxFQUFFakM7QUFOb0I7QUFyQmhCO0FBcENWLEdBQVA7QUFtRUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbLTEsIDAsIDEsIDIsIDEwXSB9XSAqL1xuXG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuXG5mdW5jdGlvbiBhY3V0ZU51YlNWRyhudWJTaXplID0gMTAsIGJhY2tncm91bmRDb2xvciwgY29sb3IsIHN0cm9rZVdpZHRoID0gMSwgc2lkZSA9ICdib3QnLCB1cFNpZGVEb3duID0gZmFsc2UpIHtcbiAgY29uc3QgaGFsZk51YlNpemUgPSBudWJTaXplIC8gMjtcbiAgY29uc3QgaGFsZlN0cm9rZVdpZHRoID0gc3Ryb2tlV2lkdGggLyAyO1xuICBjb25zdCBob3Jpem9udGFsVHJhbnNmb3JtID1cbiAgICBzaWRlID09PSAnYm90JyA/ICcnIDogYHRyYW5zbGF0ZSgke2hhbGZOdWJTaXplfSAwKSBzY2FsZSgtMSAxKSB0cmFuc2xhdGUoJHstaGFsZk51YlNpemV9IDApYDtcbiAgY29uc3QgdmVydGljYWxUcmFuc2Zvcm0gPSB1cFNpZGVEb3duID8gYHRyYW5zbGF0ZSgwICR7aGFsZk51YlNpemV9KSBzY2FsZSgxIC0xKSB0cmFuc2xhdGUoMCAkey1oYWxmTnViU2l6ZX0pYCA6ICcnO1xuXG4gIGNvbnN0IHAxID0gW251YlNpemUsIGhhbGZTdHJva2VXaWR0aF0uam9pbignICcpO1xuICBjb25zdCBwMiA9IFtzdHJva2VXaWR0aCwgaGFsZlN0cm9rZVdpZHRoXS5qb2luKCcgJyk7XG4gIGNvbnN0IHAzID0gW251YlNpemUgKyBzdHJva2VXaWR0aCwgbnViU2l6ZSArIGhhbGZTdHJva2VXaWR0aF0uam9pbignICcpO1xuXG4gIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgJHtudWJTaXplfSAke251YlNpemV9XCI+PGcgdHJhbnNmb3JtPVwiJHtob3Jpem9udGFsVHJhbnNmb3JtfSAke3ZlcnRpY2FsVHJhbnNmb3JtfVwiPjxwYXRoIGQ9XCJNJHtwMX0gTCR7cDJ9IEwke3AzfVwiIGZpbGw9XCIke0NvbG9yKFxuICAgIChiYWNrZ3JvdW5kQ29sb3IgfHwgJycpLnRvTG93ZXJDYXNlKClcbiAgKVxuICAgIC5yZ2IoKVxuICAgIC5zdHJpbmcoKX1cIiBzdHJva2U9XCIke0NvbG9yKChjb2xvciB8fCAnJykudG9Mb3dlckNhc2UoKSlcbiAgICAucmdiKClcbiAgICAuc3RyaW5nKCl9XCIgc3Ryb2tlLXdpZHRoPVwiJHtzdHJva2VXaWR0aH1weFwiIC8+PC9nPjwvc3ZnPmA7XG59XG5cbmZ1bmN0aW9uIGlzUG9zaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIDEgLyB2YWx1ZSA+PSAwO1xufVxuXG5mdW5jdGlvbiBzdmdUb0RhdGFVUkkoc3ZnKSB7XG4gIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJHtzdmcucmVwbGFjZSgvXCIvZ3UsIFwiJ1wiKX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCdWJibGVTdHlsZSh7XG4gIGJ1YmJsZUJhY2tncm91bmQsXG4gIGJ1YmJsZUJvcmRlckNvbG9yLFxuICBidWJibGVCb3JkZXJSYWRpdXMsXG4gIGJ1YmJsZUJvcmRlclN0eWxlLFxuICBidWJibGVCb3JkZXJXaWR0aCxcbiAgYnViYmxlRnJvbVVzZXJCYWNrZ3JvdW5kLFxuICBidWJibGVGcm9tVXNlckJvcmRlckNvbG9yLFxuICBidWJibGVGcm9tVXNlckJvcmRlclJhZGl1cyxcbiAgYnViYmxlRnJvbVVzZXJCb3JkZXJTdHlsZSxcbiAgYnViYmxlRnJvbVVzZXJCb3JkZXJXaWR0aCxcbiAgYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQsXG4gIGJ1YmJsZUZyb21Vc2VyTnViU2l6ZSxcbiAgYnViYmxlRnJvbVVzZXJUZXh0Q29sb3IsXG4gIGJ1YmJsZU1pbkhlaWdodCxcbiAgYnViYmxlTnViT2Zmc2V0LFxuICBidWJibGVOdWJTaXplLFxuICBidWJibGVUZXh0Q29sb3IsXG4gIG1lc3NhZ2VBY3Rpdml0eVdvcmRCcmVhayxcbiAgcGFkZGluZ1JlZ3VsYXJcbn0pIHtcbiAgaWYgKGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0ID09PSAndG9wJykge1xuICAgIGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0ID0gMDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQgIT09ICdudW1iZXInKSB7XG4gICAgYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQgPSAtMDtcbiAgfVxuXG4gIGlmIChidWJibGVOdWJPZmZzZXQgPT09ICd0b3AnKSB7XG4gICAgYnViYmxlTnViT2Zmc2V0ID0gMDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnViYmxlTnViT2Zmc2V0ICE9PSAnbnVtYmVyJykge1xuICAgIGJ1YmJsZU51Yk9mZnNldCA9IC0wO1xuICB9XG5cbiAgY29uc3QgYm90TnViVXBTaWRlRG93biA9ICFpc1Bvc2l0aXZlKGJ1YmJsZU51Yk9mZnNldCk7XG4gIGNvbnN0IHVzZXJOdWJVcFNpZGVEb3duID0gIWlzUG9zaXRpdmUoYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQpO1xuXG4gIGNvbnN0IGJvdE51YlNWRyA9IGFjdXRlTnViU1ZHKFxuICAgIGJ1YmJsZU51YlNpemUsXG4gICAgYnViYmxlQmFja2dyb3VuZCxcbiAgICBidWJibGVCb3JkZXJDb2xvcixcbiAgICBidWJibGVCb3JkZXJXaWR0aCxcbiAgICAnYm90JyxcbiAgICBib3ROdWJVcFNpZGVEb3duXG4gICk7XG4gIGNvbnN0IHVzZXJOdWJTVkcgPSBhY3V0ZU51YlNWRyhcbiAgICBidWJibGVGcm9tVXNlck51YlNpemUsXG4gICAgYnViYmxlRnJvbVVzZXJCYWNrZ3JvdW5kLFxuICAgIGJ1YmJsZUZyb21Vc2VyQm9yZGVyQ29sb3IsXG4gICAgYnViYmxlRnJvbVVzZXJCb3JkZXJXaWR0aCxcbiAgICAndXNlcicsXG4gICAgdXNlck51YlVwU2lkZURvd25cbiAgKTtcblxuICBjb25zdCBib3ROdWJDb3JuZXJSYWRpdXMgPSBNYXRoLm1pbihidWJibGVCb3JkZXJSYWRpdXMsIE1hdGguYWJzKGJ1YmJsZU51Yk9mZnNldCkpO1xuICBjb25zdCB1c2VyTnViQ29ybmVyUmFkaXVzID0gTWF0aC5taW4oYnViYmxlRnJvbVVzZXJCb3JkZXJSYWRpdXMsIE1hdGguYWJzKGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0KSk7XG5cbiAgcmV0dXJuIHtcbiAgICAnJiA+IC53ZWJjaGF0X19idWJibGVfX2NvbnRlbnQnOiB7XG4gICAgICB3b3JkQnJlYWs6IG1lc3NhZ2VBY3Rpdml0eVdvcmRCcmVha1xuICAgIH0sXG5cbiAgICAnJjpub3QoLmZyb20tdXNlciknOiB7XG4gICAgICAnJi53ZWJjaGF0X19idWJibGVfaGFzX251Yic6IHtcbiAgICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50JzogYnViYmxlTnViU2l6ZSA/IHsgbWFyZ2luTGVmdDogcGFkZGluZ1JlZ3VsYXIgfSA6IHt9XG4gICAgICB9LFxuXG4gICAgICAnJiA+IC53ZWJjaGF0X19idWJibGVfX2NvbnRlbnQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGJ1YmJsZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlckNvbG9yOiBidWJibGVCb3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBidWJibGVCb3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlclN0eWxlOiBidWJibGVCb3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IGJ1YmJsZUJvcmRlcldpZHRoLFxuICAgICAgICBjb2xvcjogYnViYmxlVGV4dENvbG9yLFxuICAgICAgICBtaW5IZWlnaHQ6IGJ1YmJsZU1pbkhlaWdodCAtIGJ1YmJsZUJvcmRlcldpZHRoICogMlxuICAgICAgfSxcblxuICAgICAgJyYud2ViY2hhdF9fYnViYmxlX2hhc19udWIgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgICAvLyBIaWRlIGJvcmRlciByYWRpdXMgaWYgdGhlcmUgaXMgYSBudWIgb24gdGhlIHRvcC9ib3R0b20gbGVmdCBjb3JuZXJcbiAgICAgICAgLi4uKGJ1YmJsZU51YlNpemUgJiYgYm90TnViVXBTaWRlRG93biA/IHsgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogYm90TnViQ29ybmVyUmFkaXVzIH0gOiB7fSksXG4gICAgICAgIC4uLihidWJibGVOdWJTaXplICYmICFib3ROdWJVcFNpZGVEb3duID8geyBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3ROdWJDb3JuZXJSYWRpdXMgfSA6IHt9KVxuICAgICAgfSxcblxuICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19udWInOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7c3ZnVG9EYXRhVVJJKGJvdE51YlNWRykucmVwbGFjZSgvXCIvZ3UsIFwiJ1wiKX1cIilgLFxuICAgICAgICBib3R0b206IGlzUG9zaXRpdmUoYnViYmxlTnViT2Zmc2V0KSA/IHVuZGVmaW5lZCA6IC1idWJibGVOdWJPZmZzZXQsXG4gICAgICAgIGhlaWdodDogYnViYmxlTnViU2l6ZSxcbiAgICAgICAgbGVmdDogYnViYmxlQm9yZGVyV2lkdGggLSBidWJibGVOdWJTaXplICsgcGFkZGluZ1JlZ3VsYXIsXG4gICAgICAgIHRvcDogaXNQb3NpdGl2ZShidWJibGVOdWJPZmZzZXQpID8gYnViYmxlTnViT2Zmc2V0IDogdW5kZWZpbmVkLFxuICAgICAgICB3aWR0aDogYnViYmxlTnViU2l6ZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnJi5mcm9tLXVzZXInOiB7XG4gICAgICAnJi53ZWJjaGF0X19idWJibGVfaGFzX251Yic6IHtcbiAgICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50JzogYnViYmxlTnViU2l6ZSA/IHsgbWFyZ2luUmlnaHQ6IHBhZGRpbmdSZWd1bGFyIH0gOiB7fVxuICAgICAgfSxcblxuICAgICAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBidWJibGVGcm9tVXNlckJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlckNvbG9yOiBidWJibGVGcm9tVXNlckJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJTdHlsZTogYnViYmxlRnJvbVVzZXJCb3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyV2lkdGgsXG4gICAgICAgIGNvbG9yOiBidWJibGVGcm9tVXNlclRleHRDb2xvcixcbiAgICAgICAgbWluSGVpZ2h0OiBidWJibGVNaW5IZWlnaHQgLSBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoICogMlxuICAgICAgfSxcblxuICAgICAgJyYud2ViY2hhdF9fYnViYmxlX2hhc19udWIgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgICAgICAvLyBIaWRlIGJvcmRlciByYWRpdXMgaWYgdGhlcmUgaXMgYSBudWIgb24gdGhlIHRvcC9ib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICAgIC4uLihidWJibGVGcm9tVXNlck51YlNpemUgJiYgdXNlck51YlVwU2lkZURvd24gPyB7IGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiB1c2VyTnViQ29ybmVyUmFkaXVzIH0gOiB7fSksXG4gICAgICAgIC4uLihidWJibGVGcm9tVXNlck51YlNpemUgJiYgIXVzZXJOdWJVcFNpZGVEb3duID8geyBib3JkZXJUb3BSaWdodFJhZGl1czogdXNlck51YkNvcm5lclJhZGl1cyB9IDoge30pXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC53ZWJjaGF0X19idWJibGVfX251Yic6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtzdmdUb0RhdGFVUkkodXNlck51YlNWRykucmVwbGFjZSgvXCIvZ3UsIFwiJ1wiKX1cIilgLFxuICAgICAgICBoZWlnaHQ6IGJ1YmJsZUZyb21Vc2VyTnViU2l6ZSxcbiAgICAgICAgcmlnaHQ6IGJ1YmJsZUZyb21Vc2VyQm9yZGVyV2lkdGggLSBidWJibGVGcm9tVXNlck51YlNpemUgKyBwYWRkaW5nUmVndWxhcixcbiAgICAgICAgYm90dG9tOiBpc1Bvc2l0aXZlKGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0KSA/IHVuZGVmaW5lZCA6IC1idWJibGVGcm9tVXNlck51Yk9mZnNldCxcbiAgICAgICAgdG9wOiBpc1Bvc2l0aXZlKGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0KSA/IGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0IDogdW5kZWZpbmVkLFxuICAgICAgICB3aWR0aDogYnViYmxlRnJvbVVzZXJOdWJTaXplXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
