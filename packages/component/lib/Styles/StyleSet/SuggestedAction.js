'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createSuggestedActionStyle;

/* eslint no-magic-numbers: "off" */
function createSuggestedActionStyle(_ref) {
  var paddingRegular = _ref.paddingRegular,
    paddingWide = _ref.paddingWide,
    primaryFont = _ref.primaryFont,
    suggestedActionBackground = _ref.suggestedActionBackground,
    suggestedActionBorder = _ref.suggestedActionBorder,
    suggestedActionBorderRadius = _ref.suggestedActionBorderRadius,
    suggestedActionImageHeight = _ref.suggestedActionImageHeight,
    suggestedActionTextColor = _ref.suggestedActionTextColor,
    suggestedActionDisabledBackground = _ref.suggestedActionDisabledBackground,
    suggestedActionDisabledBorder = _ref.suggestedActionDisabledBorder,
    suggestedActionDisabledTextColor = _ref.suggestedActionDisabledTextColor,
    suggestedActionHeight = _ref.suggestedActionHeight;
  return {
    paddingBottom: paddingRegular,
    paddingLeft: paddingRegular / 2,
    paddingRight: paddingRegular / 2,
    paddingTop: paddingRegular,
    '& > button': {
      alignItems: 'center',
      borderRadius: suggestedActionBorderRadius,
      fontFamily: primaryFont,
      fontSize: 'inherit',
      height: suggestedActionHeight,
      paddingLeft: paddingWide,
      paddingRight: paddingWide,
      '&:disabled': {
        background: suggestedActionDisabledBackground,
        border: suggestedActionDisabledBorder,
        color: suggestedActionDisabledTextColor
      },
      '&:not(:disabled)': {
        background: suggestedActionBackground,
        border: suggestedActionBorder,
        color: suggestedActionTextColor
      },
      '& > img': {
        height: suggestedActionImageHeight,
        paddingRight: paddingRegular
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3VnZ2VzdGVkQWN0aW9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN1Z2dlc3RlZEFjdGlvblN0eWxlIiwicGFkZGluZ1JlZ3VsYXIiLCJwYWRkaW5nV2lkZSIsInByaW1hcnlGb250Iiwic3VnZ2VzdGVkQWN0aW9uQmFja2dyb3VuZCIsInN1Z2dlc3RlZEFjdGlvbkJvcmRlciIsInN1Z2dlc3RlZEFjdGlvbkJvcmRlclJhZGl1cyIsInN1Z2dlc3RlZEFjdGlvbkltYWdlSGVpZ2h0Iiwic3VnZ2VzdGVkQWN0aW9uVGV4dENvbG9yIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCYWNrZ3JvdW5kIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCb3JkZXIiLCJzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZFRleHRDb2xvciIsInN1Z2dlc3RlZEFjdGlvbkhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdUb3AiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSwwQkFBVCxPQWFaO0FBQUEsTUFaREMsY0FZQyxRQVpEQSxjQVlDO0FBQUEsTUFYREMsV0FXQyxRQVhEQSxXQVdDO0FBQUEsTUFWREMsV0FVQyxRQVZEQSxXQVVDO0FBQUEsTUFUREMseUJBU0MsUUFUREEseUJBU0M7QUFBQSxNQVJEQyxxQkFRQyxRQVJEQSxxQkFRQztBQUFBLE1BUERDLDJCQU9DLFFBUERBLDJCQU9DO0FBQUEsTUFOREMsMEJBTUMsUUFOREEsMEJBTUM7QUFBQSxNQUxEQyx3QkFLQyxRQUxEQSx3QkFLQztBQUFBLE1BSkRDLGlDQUlDLFFBSkRBLGlDQUlDO0FBQUEsTUFIREMsNkJBR0MsUUFIREEsNkJBR0M7QUFBQSxNQUZEQyxnQ0FFQyxRQUZEQSxnQ0FFQztBQUFBLE1BRERDLHFCQUNDLFFBRERBLHFCQUNDO0FBQ0QsU0FBTztBQUNMQyxJQUFBQSxhQUFhLEVBQUVaLGNBRFY7QUFFTGEsSUFBQUEsV0FBVyxFQUFFYixjQUFjLEdBQUcsQ0FGekI7QUFHTGMsSUFBQUEsWUFBWSxFQUFFZCxjQUFjLEdBQUcsQ0FIMUI7QUFJTGUsSUFBQUEsVUFBVSxFQUFFZixjQUpQO0FBTUwsa0JBQWM7QUFDWmdCLE1BQUFBLFVBQVUsRUFBRSxRQURBO0FBRVpDLE1BQUFBLFlBQVksRUFBRVosMkJBRkY7QUFHWmEsTUFBQUEsVUFBVSxFQUFFaEIsV0FIQTtBQUlaaUIsTUFBQUEsUUFBUSxFQUFFLFNBSkU7QUFLWkMsTUFBQUEsTUFBTSxFQUFFVCxxQkFMSTtBQU1aRSxNQUFBQSxXQUFXLEVBQUVaLFdBTkQ7QUFPWmEsTUFBQUEsWUFBWSxFQUFFYixXQVBGO0FBU1osb0JBQWM7QUFDWm9CLFFBQUFBLFVBQVUsRUFBRWIsaUNBREE7QUFFWmMsUUFBQUEsTUFBTSxFQUFFYiw2QkFGSTtBQUdaYyxRQUFBQSxLQUFLLEVBQUViO0FBSEssT0FURjtBQWVaLDBCQUFvQjtBQUNsQlcsUUFBQUEsVUFBVSxFQUFFbEIseUJBRE07QUFFbEJtQixRQUFBQSxNQUFNLEVBQUVsQixxQkFGVTtBQUdsQm1CLFFBQUFBLEtBQUssRUFBRWhCO0FBSFcsT0FmUjtBQXFCWixpQkFBVztBQUNUYSxRQUFBQSxNQUFNLEVBQUVkLDBCQURDO0FBRVRRLFFBQUFBLFlBQVksRUFBRWQ7QUFGTDtBQXJCQztBQU5ULEdBQVA7QUFpQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogXCJvZmZcIiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdWdnZXN0ZWRBY3Rpb25TdHlsZSh7XG4gIHBhZGRpbmdSZWd1bGFyLFxuICBwYWRkaW5nV2lkZSxcbiAgcHJpbWFyeUZvbnQsXG4gIHN1Z2dlc3RlZEFjdGlvbkJhY2tncm91bmQsXG4gIHN1Z2dlc3RlZEFjdGlvbkJvcmRlcixcbiAgc3VnZ2VzdGVkQWN0aW9uQm9yZGVyUmFkaXVzLFxuICBzdWdnZXN0ZWRBY3Rpb25JbWFnZUhlaWdodCxcbiAgc3VnZ2VzdGVkQWN0aW9uVGV4dENvbG9yLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJhY2tncm91bmQsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZFRleHRDb2xvcixcbiAgc3VnZ2VzdGVkQWN0aW9uSGVpZ2h0XG59KSB7XG4gIHJldHVybiB7XG4gICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ1JlZ3VsYXIsXG4gICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdSZWd1bGFyIC8gMixcbiAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSZWd1bGFyIC8gMixcbiAgICBwYWRkaW5nVG9wOiBwYWRkaW5nUmVndWxhcixcblxuICAgICcmID4gYnV0dG9uJzoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6IHN1Z2dlc3RlZEFjdGlvbkJvcmRlclJhZGl1cyxcbiAgICAgIGZvbnRGYW1pbHk6IHByaW1hcnlGb250LFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIGhlaWdodDogc3VnZ2VzdGVkQWN0aW9uSGVpZ2h0LFxuICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdXaWRlLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nV2lkZSxcblxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlcixcbiAgICAgICAgY29sb3I6IHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkVGV4dENvbG9yXG4gICAgICB9LFxuXG4gICAgICAnJjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogc3VnZ2VzdGVkQWN0aW9uQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBzdWdnZXN0ZWRBY3Rpb25Cb3JkZXIsXG4gICAgICAgIGNvbG9yOiBzdWdnZXN0ZWRBY3Rpb25UZXh0Q29sb3JcbiAgICAgIH0sXG5cbiAgICAgICcmID4gaW1nJzoge1xuICAgICAgICBoZWlnaHQ6IHN1Z2dlc3RlZEFjdGlvbkltYWdlSGVpZ2h0LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
