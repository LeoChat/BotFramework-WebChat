'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createUploadButtonStyle;

function createUploadButtonStyle(_ref) {
  var sendBoxButtonColor = _ref.sendBoxButtonColor,
    sendBoxButtonColorOnFocus = _ref.sendBoxButtonColorOnFocus,
    sendBoxButtonColorOnHover = _ref.sendBoxButtonColorOnHover;
  return {
    // We use the sendBoxHeight, so the button looks square
    width: 40,
    paddingLeft: 10,
    paddingRight: 10,
    '& > .icon > svg': {
      fill: sendBoxButtonColor
    },
    '& > input:hover + .icon > svg': {
      fill: sendBoxButtonColorOnHover
    },
    '& > input:focus + .icon > svg': {
      fill: sendBoxButtonColorOnFocus
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvVXBsb2FkQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVVwbG9hZEJ1dHRvblN0eWxlIiwic2VuZEJveEJ1dHRvbkNvbG9yIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJ3aWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLHVCQUFULE9BSVo7QUFBQSxNQUhEQyxrQkFHQyxRQUhEQSxrQkFHQztBQUFBLE1BRkRDLHlCQUVDLFFBRkRBLHlCQUVDO0FBQUEsTUFEREMseUJBQ0MsUUFEREEseUJBQ0M7QUFDRCxTQUFPO0FBQ0w7QUFDQUMsSUFBQUEsS0FBSyxFQUFFLEVBRkY7QUFHTEMsSUFBQUEsV0FBVyxFQUFFLEVBSFI7QUFJTEMsSUFBQUEsWUFBWSxFQUFFLEVBSlQ7QUFNTCx1QkFBbUI7QUFDakJDLE1BQUFBLElBQUksRUFBRU47QUFEVyxLQU5kO0FBVUwscUNBQWlDO0FBQy9CTSxNQUFBQSxJQUFJLEVBQUVKO0FBRHlCLEtBVjVCO0FBY0wscUNBQWlDO0FBQy9CSSxNQUFBQSxJQUFJLEVBQUVMO0FBRHlCO0FBZDVCLEdBQVA7QUFrQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVVcGxvYWRCdXR0b25TdHlsZSh7XG4gIHNlbmRCb3hCdXR0b25Db2xvcixcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Ib3ZlclxufSkge1xuICByZXR1cm4ge1xuICAgIC8vIFdlIHVzZSB0aGUgc2VuZEJveEhlaWdodCwgc28gdGhlIGJ1dHRvbiBsb29rcyBzcXVhcmVcbiAgICB3aWR0aDogNDAsXG4gICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgIHBhZGRpbmdSaWdodDogMTAsXG5cbiAgICAnJiA+IC5pY29uID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yXG4gICAgfSxcblxuICAgICcmID4gaW5wdXQ6aG92ZXIgKyAuaWNvbiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXJcbiAgICB9LFxuXG4gICAgJyYgPiBpbnB1dDpmb2N1cyArIC5pY29uID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1c1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
