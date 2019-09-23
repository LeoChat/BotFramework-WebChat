'use strict';

var cov_1uxgd1qezw = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/DownloadAttachment.js';
  var hash = '240f28c9a33921ad2ee7d980ffdaa9375d0df804';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/DownloadAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 31,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createDownloadAttachmentStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 53
          }
        },
        loc: {
          start: {
            line: 1,
            column: 112
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '240f28c9a33921ad2ee7d980ffdaa9375d0df804'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createDownloadAttachmentStyle;

function createDownloadAttachmentStyle(_ref) {
  var accent = _ref.accent,
    bubbleTextColor = _ref.bubbleTextColor,
    paddingRegular = _ref.paddingRegular,
    primaryFont = _ref.primaryFont;
  cov_1uxgd1qezw.f[0]++;
  cov_1uxgd1qezw.s[0]++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvRG93bmxvYWRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbImNyZWF0ZURvd25sb2FkQXR0YWNobWVudFN0eWxlIiwiYWNjZW50IiwiYnViYmxlVGV4dENvbG9yIiwicGFkZGluZ1JlZ3VsYXIiLCJwcmltYXJ5Rm9udCIsImZvbnRGYW1pbHkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJkaXNwbGF5IiwicGFkZGluZyIsInRleHREZWNvcmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsIm1hcmdpbkxlZnQiLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSw2QkFBVCxPQUFpRztBQUFBLE1BQXhEQyxNQUF3RCxRQUF4REEsTUFBd0Q7QUFBQSxNQUFoREMsZUFBZ0QsUUFBaERBLGVBQWdEO0FBQUEsTUFBL0JDLGNBQStCLFFBQS9CQSxjQUErQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUFBO0FBQUE7QUFDOUcsU0FBTztBQUNMQyxJQUFBQSxVQUFVLEVBQUVELFdBRFA7QUFHTCxhQUFTO0FBQ1BFLE1BQUFBLFVBQVUsRUFBRSxRQURMO0FBRVBDLE1BQUFBLEtBQUssRUFBRUwsZUFGQTtBQUdQO0FBQ0FNLE1BQUFBLE9BQU8sRUFBRSxNQUpGO0FBS1BDLE1BQUFBLE9BQU8sRUFBRU4sY0FMRjtBQU1QTyxNQUFBQSxjQUFjLEVBQUUsTUFOVDtBQVFQLGlCQUFXO0FBQ1RDLFFBQUFBLGVBQWUsRUFBRTtBQURSLE9BUko7QUFZUCxtQkFBYTtBQUNYQyxRQUFBQSxJQUFJLEVBQUVYLE1BREs7QUFFWFksUUFBQUEsVUFBVSxFQUFFVixjQUZEO0FBR1hNLFFBQUFBLE9BQU8sRUFBRU47QUFIRSxPQVpOO0FBa0JQLHNCQUFnQjtBQUNkVyxRQUFBQSxJQUFJLEVBQUUsQ0FEUTtBQUdkLHFCQUFhO0FBQ1hQLFVBQUFBLEtBQUssRUFBRU47QUFESTtBQUhDO0FBbEJUO0FBSEosR0FBUDtBQThCRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkQXR0YWNobWVudFN0eWxlKHsgYWNjZW50LCBidWJibGVUZXh0Q29sb3IsIHBhZGRpbmdSZWd1bGFyLCBwcmltYXJ5Rm9udCB9KSB7XG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG5cbiAgICAnJiA+IGEnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiBidWJibGVUZXh0Q29sb3IsXG4gICAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwiZGlzcGxheVwiIGluIHN0eWxlU2V0LCB0aGlzIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gYnJlYWsgdGhlIGxheW91dCBmb3Igbm8gZ29vZCByZWFzb25zLlxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcGFkZGluZzogcGFkZGluZ1JlZ3VsYXIsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMSknXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC5pY29uJzoge1xuICAgICAgICBmaWxsOiBhY2NlbnQsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhZGRpbmdSZWd1bGFyLFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nUmVndWxhclxuICAgICAgfSxcblxuICAgICAgJyYgPiAuZGV0YWlscyc6IHtcbiAgICAgICAgZmxleDogMSxcblxuICAgICAgICAnJiA+IC5uYW1lJzoge1xuICAgICAgICAgIGNvbG9yOiBhY2NlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
