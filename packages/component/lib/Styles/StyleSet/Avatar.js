'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createAvatarStyle;

function createAvatarStyle(_ref) {
  var accent = _ref.accent,
    avatarSize = _ref.avatarSize,
    primaryFont = _ref.primaryFont;
  return {
    alignItems: 'center',
    backgroundColor: accent,
    borderRadius: '50%',
    color: 'White',
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    fontFamily: primaryFont,
    height: avatarSize,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: avatarSize,
    border: '1px solid rgba(0,0,0,.2)',
    transition: 'border .3s ease-in-out',
    '& > .image': {
      left: 0,
      position: 'absolute',
      top: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUF2YXRhclN0eWxlIiwiYWNjZW50IiwiYXZhdGFyU2l6ZSIsInByaW1hcnlGb250IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ3aWR0aCIsImJvcmRlciIsInRyYW5zaXRpb24iLCJsZWZ0IiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsaUJBQVQsT0FBZ0U7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUM3RSxTQUFPO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxRQURQO0FBRUxDLElBQUFBLGVBQWUsRUFBRUosTUFGWjtBQUdMSyxJQUFBQSxZQUFZLEVBQUUsS0FIVDtBQUlMQyxJQUFBQSxLQUFLLEVBQUUsT0FKRjtBQUtMO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxNQU5KO0FBT0xDLElBQUFBLFVBQVUsRUFBRU4sV0FQUDtBQVFMTyxJQUFBQSxNQUFNLEVBQUVSLFVBUkg7QUFTTFMsSUFBQUEsY0FBYyxFQUFFLFFBVFg7QUFVTEMsSUFBQUEsUUFBUSxFQUFFLFFBVkw7QUFXTEMsSUFBQUEsUUFBUSxFQUFFLFVBWEw7QUFZTEMsSUFBQUEsS0FBSyxFQUFFWixVQVpGO0FBYUxhLElBQUFBLE1BQU0sRUFBRSwwQkFiSDtBQWNMQyxJQUFBQSxVQUFVLEVBQUUsd0JBZFA7QUFnQkwsa0JBQWM7QUFDWkMsTUFBQUEsSUFBSSxFQUFFLENBRE07QUFFWkosTUFBQUEsUUFBUSxFQUFFLFVBRkU7QUFHWkssTUFBQUEsR0FBRyxFQUFFO0FBSE87QUFoQlQsR0FBUDtBQXNCRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF2YXRhclN0eWxlKHsgYWNjZW50LCBhdmF0YXJTaXplLCBwcmltYXJ5Rm9udCB9KSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBhY2NlbnQsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBjb2xvcjogJ1doaXRlJyxcbiAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwiZGlzcGxheVwiIGluIHN0eWxlU2V0LCB0aGlzIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gYnJlYWsgdGhlIGxheW91dCBmb3Igbm8gZ29vZCByZWFzb25zLlxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udCxcbiAgICBoZWlnaHQ6IGF2YXRhclNpemUsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogYXZhdGFyU2l6ZSxcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwuMiknLFxuICAgIHRyYW5zaXRpb246ICdib3JkZXIgLjNzIGVhc2UtaW4tb3V0JyxcblxuICAgICcmID4gLmltYWdlJzoge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwXG4gICAgfVxuICB9O1xufVxuIl19
