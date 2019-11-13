'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createSendBoxTextBoxStyle;

function createSendBoxTextBoxStyle(_ref) {
  var primaryFont = _ref.primaryFont,
    sendBoxBackground = _ref.sendBoxBackground,
    sendBoxDisabledTextColor = _ref.sendBoxDisabledTextColor,
    sendBoxPlaceholderColor = _ref.sendBoxPlaceholderColor,
    sendBoxTextColor = _ref.sendBoxTextColor,
    subtle = _ref.subtle;
  return {
    alignItems: 'center',
    fontFamily: primaryFont,
    '& > input': {
      backgroundColor: sendBoxBackground,
      border: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      height: '100%',
      outline: 0,
      padding: 0,
      '&:not(:disabled)': {
        color: sendBoxTextColor
      },
      '&:disabled': {
        color: sendBoxDisabledTextColor || subtle
      },
      '&::placeholder': {
        color: sendBoxPlaceholderColor || subtle
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveFRleHRCb3guanMiXSwibmFtZXMiOlsiY3JlYXRlU2VuZEJveFRleHRCb3hTdHlsZSIsInByaW1hcnlGb250Iiwic2VuZEJveEJhY2tncm91bmQiLCJzZW5kQm94RGlzYWJsZWRUZXh0Q29sb3IiLCJzZW5kQm94UGxhY2Vob2xkZXJDb2xvciIsInNlbmRCb3hUZXh0Q29sb3IiLCJzdWJ0bGUiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImZvbnRTaXplIiwiaGVpZ2h0Iiwib3V0bGluZSIsInBhZGRpbmciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLHlCQUFULE9BT1o7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxpQkFLQyxRQUxEQSxpQkFLQztBQUFBLE1BSkRDLHdCQUlDLFFBSkRBLHdCQUlDO0FBQUEsTUFIREMsdUJBR0MsUUFIREEsdUJBR0M7QUFBQSxNQUZEQyxnQkFFQyxRQUZEQSxnQkFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQztBQUNELFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFFBRFA7QUFFTEMsSUFBQUEsVUFBVSxFQUFFUCxXQUZQO0FBSUwsaUJBQWE7QUFDWFEsTUFBQUEsZUFBZSxFQUFFUCxpQkFETjtBQUVYUSxNQUFBQSxNQUFNLEVBQUUsQ0FGRztBQUdYRixNQUFBQSxVQUFVLEVBQUUsU0FIRDtBQUlYRyxNQUFBQSxRQUFRLEVBQUUsU0FKQztBQUtYQyxNQUFBQSxNQUFNLEVBQUUsTUFMRztBQU1YQyxNQUFBQSxPQUFPLEVBQUUsQ0FORTtBQU9YQyxNQUFBQSxPQUFPLEVBQUUsQ0FQRTtBQVNYLDBCQUFvQjtBQUNsQkMsUUFBQUEsS0FBSyxFQUFFVjtBQURXLE9BVFQ7QUFhWCxvQkFBYztBQUNaVSxRQUFBQSxLQUFLLEVBQUVaLHdCQUF3QixJQUFJRztBQUR2QixPQWJIO0FBaUJYLHdCQUFrQjtBQUNoQlMsUUFBQUEsS0FBSyxFQUFFWCx1QkFBdUIsSUFBSUU7QUFEbEI7QUFqQlA7QUFKUixHQUFQO0FBMEJEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VuZEJveFRleHRCb3hTdHlsZSh7XG4gIHByaW1hcnlGb250LFxuICBzZW5kQm94QmFja2dyb3VuZCxcbiAgc2VuZEJveERpc2FibGVkVGV4dENvbG9yLFxuICBzZW5kQm94UGxhY2Vob2xkZXJDb2xvcixcbiAgc2VuZEJveFRleHRDb2xvcixcbiAgc3VidGxlXG59KSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG5cbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZW5kQm94QmFja2dyb3VuZCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuXG4gICAgICAnJjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgY29sb3I6IHNlbmRCb3hUZXh0Q29sb3JcbiAgICAgIH0sXG5cbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogc2VuZEJveERpc2FibGVkVGV4dENvbG9yIHx8IHN1YnRsZVxuICAgICAgfSxcblxuICAgICAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogc2VuZEJveFBsYWNlaG9sZGVyQ29sb3IgfHwgc3VidGxlXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
