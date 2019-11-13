'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createDownloadAttachmentStyle;

function createDownloadAttachmentStyle(_ref) {
  var accent = _ref.accent,
    bubbleTextColor = _ref.bubbleTextColor,
    paddingRegular = _ref.paddingRegular,
    primaryFont = _ref.primaryFont;
  return {
    fontFamily: primaryFont,
    '& > a': {
      alignItems: 'center',
      color: bubbleTextColor,
      // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
      display: 'flex',
      padding: paddingRegular,
      textDecoration: 'none',
      '&:focus': {
        backgroundColor: 'rgba(0, 0, 0, .1)'
      },
      '& > .icon': {
        fill: accent,
        marginLeft: paddingRegular,
        padding: paddingRegular
      },
      '& > .details': {
        flex: 1,
        '& > .name': {
          color: accent
        }
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvRG93bmxvYWRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbImNyZWF0ZURvd25sb2FkQXR0YWNobWVudFN0eWxlIiwiYWNjZW50IiwiYnViYmxlVGV4dENvbG9yIiwicGFkZGluZ1JlZ3VsYXIiLCJwcmltYXJ5Rm9udCIsImZvbnRGYW1pbHkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJkaXNwbGF5IiwicGFkZGluZyIsInRleHREZWNvcmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsIm1hcmdpbkxlZnQiLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsNkJBQVQsT0FBaUc7QUFBQSxNQUF4REMsTUFBd0QsUUFBeERBLE1BQXdEO0FBQUEsTUFBaERDLGVBQWdELFFBQWhEQSxlQUFnRDtBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFDOUcsU0FBTztBQUNMQyxJQUFBQSxVQUFVLEVBQUVELFdBRFA7QUFHTCxhQUFTO0FBQ1BFLE1BQUFBLFVBQVUsRUFBRSxRQURMO0FBRVBDLE1BQUFBLEtBQUssRUFBRUwsZUFGQTtBQUdQO0FBQ0FNLE1BQUFBLE9BQU8sRUFBRSxNQUpGO0FBS1BDLE1BQUFBLE9BQU8sRUFBRU4sY0FMRjtBQU1QTyxNQUFBQSxjQUFjLEVBQUUsTUFOVDtBQVFQLGlCQUFXO0FBQ1RDLFFBQUFBLGVBQWUsRUFBRTtBQURSLE9BUko7QUFZUCxtQkFBYTtBQUNYQyxRQUFBQSxJQUFJLEVBQUVYLE1BREs7QUFFWFksUUFBQUEsVUFBVSxFQUFFVixjQUZEO0FBR1hNLFFBQUFBLE9BQU8sRUFBRU47QUFIRSxPQVpOO0FBa0JQLHNCQUFnQjtBQUNkVyxRQUFBQSxJQUFJLEVBQUUsQ0FEUTtBQUdkLHFCQUFhO0FBQ1hQLFVBQUFBLEtBQUssRUFBRU47QUFESTtBQUhDO0FBbEJUO0FBSEosR0FBUDtBQThCRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkQXR0YWNobWVudFN0eWxlKHsgYWNjZW50LCBidWJibGVUZXh0Q29sb3IsIHBhZGRpbmdSZWd1bGFyLCBwcmltYXJ5Rm9udCB9KSB7XG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG5cbiAgICAnJiA+IGEnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiBidWJibGVUZXh0Q29sb3IsXG4gICAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwiZGlzcGxheVwiIGluIHN0eWxlU2V0LCB0aGlzIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gYnJlYWsgdGhlIGxheW91dCBmb3Igbm8gZ29vZCByZWFzb25zLlxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcGFkZGluZzogcGFkZGluZ1JlZ3VsYXIsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMSknXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC5pY29uJzoge1xuICAgICAgICBmaWxsOiBhY2NlbnQsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhZGRpbmdSZWd1bGFyLFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nUmVndWxhclxuICAgICAgfSxcblxuICAgICAgJyYgPiAuZGV0YWlscyc6IHtcbiAgICAgICAgZmxleDogMSxcblxuICAgICAgICAnJiA+IC5uYW1lJzoge1xuICAgICAgICAgIGNvbG9yOiBhY2NlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
