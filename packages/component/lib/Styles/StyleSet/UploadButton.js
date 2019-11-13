'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createUploadButtonStyle;

function createUploadButtonStyle(_ref) {
  var sendBoxButtonColor = _ref.sendBoxButtonColor,
    sendBoxButtonColorOnFocus = _ref.sendBoxButtonColorOnFocus,
    sendBoxButtonColorOnHover = _ref.sendBoxButtonColorOnHover,
    sendBoxHeight = _ref.sendBoxHeight,
    subtle = _ref.subtle;
  return {
    // We use the sendBoxHeight, so the button looks square
    width: sendBoxHeight,
    '& > .icon > svg': {
      fill: sendBoxButtonColor || subtle
    },
    '& > input:hover + .icon > svg': {
      fill: sendBoxButtonColorOnHover
    },
    '& > input:focus + .icon > svg': {
      fill: sendBoxButtonColorOnFocus
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvVXBsb2FkQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVVwbG9hZEJ1dHRvblN0eWxlIiwic2VuZEJveEJ1dHRvbkNvbG9yIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJzZW5kQm94SGVpZ2h0Iiwic3VidGxlIiwid2lkdGgiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsdUJBQVQsT0FNWjtBQUFBLE1BTERDLGtCQUtDLFFBTERBLGtCQUtDO0FBQUEsTUFKREMseUJBSUMsUUFKREEseUJBSUM7QUFBQSxNQUhEQyx5QkFHQyxRQUhEQSx5QkFHQztBQUFBLE1BRkRDLGFBRUMsUUFGREEsYUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQztBQUNELFNBQU87QUFDTDtBQUNBQyxJQUFBQSxLQUFLLEVBQUVGLGFBRkY7QUFJTCx1QkFBbUI7QUFDakJHLE1BQUFBLElBQUksRUFBRU4sa0JBQWtCLElBQUlJO0FBRFgsS0FKZDtBQVFMLHFDQUFpQztBQUMvQkUsTUFBQUEsSUFBSSxFQUFFSjtBQUR5QixLQVI1QjtBQVlMLHFDQUFpQztBQUMvQkksTUFBQUEsSUFBSSxFQUFFTDtBQUR5QjtBQVo1QixHQUFQO0FBZ0JEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVXBsb2FkQnV0dG9uU3R5bGUoe1xuICBzZW5kQm94QnV0dG9uQ29sb3IsXG4gIHNlbmRCb3hCdXR0b25Db2xvck9uRm9jdXMsXG4gIHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIsXG4gIHNlbmRCb3hIZWlnaHQsXG4gIHN1YnRsZVxufSkge1xuICByZXR1cm4ge1xuICAgIC8vIFdlIHVzZSB0aGUgc2VuZEJveEhlaWdodCwgc28gdGhlIGJ1dHRvbiBsb29rcyBzcXVhcmVcbiAgICB3aWR0aDogc2VuZEJveEhlaWdodCxcblxuICAgICcmID4gLmljb24gPiBzdmcnOiB7XG4gICAgICBmaWxsOiBzZW5kQm94QnV0dG9uQ29sb3IgfHwgc3VidGxlXG4gICAgfSxcblxuICAgICcmID4gaW5wdXQ6aG92ZXIgKyAuaWNvbiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXJcbiAgICB9LFxuXG4gICAgJyYgPiBpbnB1dDpmb2N1cyArIC5pY29uID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1c1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
