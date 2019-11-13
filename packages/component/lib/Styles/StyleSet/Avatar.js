'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createAvatarStyle;

function createAvatarStyle(_ref) {
  var accent = _ref.accent,
    avatarSize = _ref.avatarSize,
    botAvatarBackgroundColor = _ref.botAvatarBackgroundColor,
    primaryFont = _ref.primaryFont,
    userAvatarBackgroundColor = _ref.userAvatarBackgroundColor;
  return {
    alignItems: 'center',
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
    '&.from-user': {
      backgroundColor: userAvatarBackgroundColor || accent
    },
    '&:not(.from-user)': {
      backgroundColor: botAvatarBackgroundColor || accent
    },
    '& > .image': {
      left: 0,
      position: 'absolute',
      top: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUF2YXRhclN0eWxlIiwiYWNjZW50IiwiYXZhdGFyU2l6ZSIsImJvdEF2YXRhckJhY2tncm91bmRDb2xvciIsInByaW1hcnlGb250IiwidXNlckF2YXRhckJhY2tncm91bmRDb2xvciIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwid2lkdGgiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdCIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLGlCQUFULE9BTVo7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyx3QkFHQyxRQUhEQSx3QkFHQztBQUFBLE1BRkRDLFdBRUMsUUFGREEsV0FFQztBQUFBLE1BRERDLHlCQUNDLFFBRERBLHlCQUNDO0FBQ0QsU0FBTztBQUNMQyxJQUFBQSxVQUFVLEVBQUUsUUFEUDtBQUVMQyxJQUFBQSxZQUFZLEVBQUUsS0FGVDtBQUdMQyxJQUFBQSxLQUFLLEVBQUUsT0FIRjtBQUlMO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxNQUxKO0FBTUxDLElBQUFBLFVBQVUsRUFBRU4sV0FOUDtBQU9MTyxJQUFBQSxNQUFNLEVBQUVULFVBUEg7QUFRTFUsSUFBQUEsY0FBYyxFQUFFLFFBUlg7QUFTTEMsSUFBQUEsUUFBUSxFQUFFLFFBVEw7QUFVTEMsSUFBQUEsUUFBUSxFQUFFLFVBVkw7QUFXTEMsSUFBQUEsS0FBSyxFQUFFYixVQVhGO0FBWUxjLElBQUFBLE1BQU0sRUFBRSwwQkFaSDtBQWFMQyxJQUFBQSxVQUFVLEVBQUUsd0JBYlA7QUFlTCxtQkFBZTtBQUNiQyxNQUFBQSxlQUFlLEVBQUViLHlCQUF5QixJQUFJSjtBQURqQyxLQWZWO0FBbUJMLHlCQUFxQjtBQUNuQmlCLE1BQUFBLGVBQWUsRUFBRWYsd0JBQXdCLElBQUlGO0FBRDFCLEtBbkJoQjtBQXVCTCxrQkFBYztBQUNaa0IsTUFBQUEsSUFBSSxFQUFFLENBRE07QUFFWkwsTUFBQUEsUUFBUSxFQUFFLFVBRkU7QUFHWk0sTUFBQUEsR0FBRyxFQUFFO0FBSE87QUF2QlQsR0FBUDtBQTZCRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF2YXRhclN0eWxlKHtcbiAgYWNjZW50LFxuICBhdmF0YXJTaXplLFxuICBib3RBdmF0YXJCYWNrZ3JvdW5kQ29sb3IsXG4gIHByaW1hcnlGb250LFxuICB1c2VyQXZhdGFyQmFja2dyb3VuZENvbG9yXG59KSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBjb2xvcjogJ1doaXRlJyxcbiAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwiZGlzcGxheVwiIGluIHN0eWxlU2V0LCB0aGlzIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gYnJlYWsgdGhlIGxheW91dCBmb3Igbm8gZ29vZCByZWFzb25zLlxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udCxcbiAgICBoZWlnaHQ6IGF2YXRhclNpemUsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogYXZhdGFyU2l6ZSxcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwuMiknLFxuICAgIHRyYW5zaXRpb246ICdib3JkZXIgLjNzIGVhc2UtaW4tb3V0JyxcblxuICAgICcmLmZyb20tdXNlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdXNlckF2YXRhckJhY2tncm91bmRDb2xvciB8fCBhY2NlbnRcbiAgICB9LFxuXG4gICAgJyY6bm90KC5mcm9tLXVzZXIpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBib3RBdmF0YXJCYWNrZ3JvdW5kQ29sb3IgfHwgYWNjZW50XG4gICAgfSxcblxuICAgICcmID4gLmltYWdlJzoge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwXG4gICAgfVxuICB9O1xufVxuIl19
