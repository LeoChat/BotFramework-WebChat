'use strict';

var cov_jv82sdnqu = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AudioCardAttachment.js';
  var hash = '3d99efd3484f192e5af09df958f5ac0f16db23a0';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AudioCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 17,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'AudioCardAttachment',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 43
          }
        },
        loc: {
          start: {
            line: 5,
            column: 64
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 5
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
    hash: '3d99efd3484f192e5af09df958f5ac0f16db23a0'
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
exports.default = AudioCardAttachment;

// TODO: [P4] We are moving attachments related to Adaptive Cards out of "component"
//       Later, we will rewrite these attachments without Adaptive Cards
//       We are leaving the CSS here as-is for now
function AudioCardAttachment(_ref) {
  var paddingRegular = _ref.paddingRegular;
  cov_jv82sdnqu.f[0]++;
  cov_jv82sdnqu.s[0]++;
  return {
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    flexDirection: 'column',
    '& > ul.media-list': {
      // TODO: [P2] We should not set "listStyleType" in styleSet, the user have no good reasons to change this.
      listStyleType: 'none',
      margin: paddingRegular,
      padding: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BdWRpb0NhcmRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbIkF1ZGlvQ2FyZEF0dGFjaG1lbnQiLCJwYWRkaW5nUmVndWxhciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLG1CQUFULE9BQWlEO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUFBO0FBQUE7QUFDOUQsU0FBTztBQUNMO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxNQUZKO0FBR0xDLElBQUFBLGFBQWEsRUFBRSxRQUhWO0FBS0wseUJBQXFCO0FBQ25CO0FBQ0FDLE1BQUFBLGFBQWEsRUFBRSxNQUZJO0FBR25CQyxNQUFBQSxNQUFNLEVBQUVKLGNBSFc7QUFJbkJLLE1BQUFBLE9BQU8sRUFBRTtBQUpVO0FBTGhCLEdBQVA7QUFZRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFtQNF0gV2UgYXJlIG1vdmluZyBhdHRhY2htZW50cyByZWxhdGVkIHRvIEFkYXB0aXZlIENhcmRzIG91dCBvZiBcImNvbXBvbmVudFwiXG4vLyAgICAgICBMYXRlciwgd2Ugd2lsbCByZXdyaXRlIHRoZXNlIGF0dGFjaG1lbnRzIHdpdGhvdXQgQWRhcHRpdmUgQ2FyZHNcbi8vICAgICAgIFdlIGFyZSBsZWF2aW5nIHRoZSBDU1MgaGVyZSBhcy1pcyBmb3Igbm93XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvQ2FyZEF0dGFjaG1lbnQoeyBwYWRkaW5nUmVndWxhciB9KSB7XG4gIHJldHVybiB7XG4gICAgLy8gVE9ETzogW1AyXSBXZSBzaG91bGQgbm90IHNldCBcImRpc3BsYXlcIiBpbiBzdHlsZVNldCwgdGhpcyB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIGJyZWFrIHRoZSBsYXlvdXQgZm9yIG5vIGdvb2QgcmVhc29ucy5cbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cbiAgICAnJiA+IHVsLm1lZGlhLWxpc3QnOiB7XG4gICAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwibGlzdFN0eWxlVHlwZVwiIGluIHN0eWxlU2V0LCB0aGUgdXNlciBoYXZlIG5vIGdvb2QgcmVhc29ucyB0byBjaGFuZ2UgdGhpcy5cbiAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICAgIG1hcmdpbjogcGFkZGluZ1JlZ3VsYXIsXG4gICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICB9O1xufVxuIl19
