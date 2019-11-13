'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createSendBoxButtonStyle;

function createSendBoxButtonStyle(_ref) {
  var sendBoxButtonColor = _ref.sendBoxButtonColor,
    sendBoxButtonColorOnDisabled = _ref.sendBoxButtonColorOnDisabled,
    sendBoxButtonColorOnFocus = _ref.sendBoxButtonColorOnFocus,
    sendBoxButtonColorOnHover = _ref.sendBoxButtonColorOnHover,
    sendBoxHeight = _ref.sendBoxHeight,
    subtle = _ref.subtle;
  return {
    backgroundColor: 'Transparent',
    border: 0,
    height: '100%',
    outline: 0,
    padding: 0,
    // We use the sendBoxHeight, so the button looks square
    width: sendBoxHeight,
    '&:not(:disabled)': {
      '&:focus svg': {
        fill: sendBoxButtonColorOnFocus
      },
      '&:hover svg': {
        fill: sendBoxButtonColorOnHover
      }
    },
    '& svg': {
      fill: sendBoxButtonColor || subtle
    },
    '&:disabled svg': {
      fill: sendBoxButtonColorOnDisabled
    },
    '&.btn-rtl': {
      transform: 'scaleX(-1)',
      filter: 'FlipH'
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU2VuZEJveEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTZW5kQm94QnV0dG9uU3R5bGUiLCJzZW5kQm94QnV0dG9uQ29sb3IiLCJzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJzZW5kQm94SGVpZ2h0Iiwic3VidGxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiaGVpZ2h0Iiwib3V0bGluZSIsInBhZGRpbmciLCJ3aWR0aCIsImZpbGwiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSx3QkFBVCxPQU9aO0FBQUEsTUFOREMsa0JBTUMsUUFOREEsa0JBTUM7QUFBQSxNQUxEQyw0QkFLQyxRQUxEQSw0QkFLQztBQUFBLE1BSkRDLHlCQUlDLFFBSkRBLHlCQUlDO0FBQUEsTUFIREMseUJBR0MsUUFIREEseUJBR0M7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7QUFDRCxTQUFPO0FBQ0xDLElBQUFBLGVBQWUsRUFBRSxhQURaO0FBRUxDLElBQUFBLE1BQU0sRUFBRSxDQUZIO0FBR0xDLElBQUFBLE1BQU0sRUFBRSxNQUhIO0FBSUxDLElBQUFBLE9BQU8sRUFBRSxDQUpKO0FBS0xDLElBQUFBLE9BQU8sRUFBRSxDQUxKO0FBT0w7QUFDQUMsSUFBQUEsS0FBSyxFQUFFUCxhQVJGO0FBVUwsd0JBQW9CO0FBQ2xCLHFCQUFlO0FBQ2JRLFFBQUFBLElBQUksRUFBRVY7QUFETyxPQURHO0FBS2xCLHFCQUFlO0FBQ2JVLFFBQUFBLElBQUksRUFBRVQ7QUFETztBQUxHLEtBVmY7QUFvQkwsYUFBUztBQUNQUyxNQUFBQSxJQUFJLEVBQUVaLGtCQUFrQixJQUFJSztBQURyQixLQXBCSjtBQXdCTCxzQkFBa0I7QUFDaEJPLE1BQUFBLElBQUksRUFBRVg7QUFEVSxLQXhCYjtBQTRCTCxpQkFBYTtBQUNYWSxNQUFBQSxTQUFTLEVBQUUsWUFEQTtBQUVYQyxNQUFBQSxNQUFNLEVBQUU7QUFGRztBQTVCUixHQUFQO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VuZEJveEJ1dHRvblN0eWxlKHtcbiAgc2VuZEJveEJ1dHRvbkNvbG9yLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkZvY3VzLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkhvdmVyLFxuICBzZW5kQm94SGVpZ2h0LFxuICBzdWJ0bGVcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdUcmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAwLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgcGFkZGluZzogMCxcblxuICAgIC8vIFdlIHVzZSB0aGUgc2VuZEJveEhlaWdodCwgc28gdGhlIGJ1dHRvbiBsb29rcyBzcXVhcmVcbiAgICB3aWR0aDogc2VuZEJveEhlaWdodCxcblxuICAgICcmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgJyY6Zm9jdXMgc3ZnJzoge1xuICAgICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3JPbkZvY3VzXG4gICAgICB9LFxuXG4gICAgICAnJjpob3ZlciBzdmcnOiB7XG4gICAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJyYgc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yIHx8IHN1YnRsZVxuICAgIH0sXG5cbiAgICAnJjpkaXNhYmxlZCBzdmcnOiB7XG4gICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkXG4gICAgfSxcblxuICAgICcmLmJ0bi1ydGwnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoLTEpJyxcbiAgICAgIGZpbHRlcjogJ0ZsaXBIJ1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
