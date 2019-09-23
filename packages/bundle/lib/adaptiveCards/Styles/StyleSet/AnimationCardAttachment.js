'use strict';

var cov_xu2nojn0q = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AnimationCardAttachment.js';
  var hash = '34ec397d40658be76b11c87eaed3f1acfd0cdcfc';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/StyleSet/AnimationCardAttachment.js',
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
        name: 'AnimationCardAttachment',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 47
          }
        },
        loc: {
          start: {
            line: 5,
            column: 50
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
    hash: '34ec397d40658be76b11c87eaed3f1acfd0cdcfc'
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
exports.default = AnimationCardAttachment;

// TODO: [P4] We are moving attachments related to Adaptive Cards out of "component"
//       Later, we will rewrite these attachments without Adaptive Cards
//       We are leaving the CSS here as-is for now
function AnimationCardAttachment() {
  cov_xu2nojn0q.f[0]++;
  cov_xu2nojn0q.s[0]++;
  return {
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    flexDirection: 'column',
    '& > ul.media-list': {
      // TODO: [P2] We should not set "listStyleType" in styleSet, the user have no good reasons to change this.
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BbmltYXRpb25DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25DYXJkQXR0YWNobWVudCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLHVCQUFULEdBQW1DO0FBQUE7QUFBQTtBQUNoRCxTQUFPO0FBQ0w7QUFDQUMsSUFBQUEsT0FBTyxFQUFFLE1BRko7QUFHTEMsSUFBQUEsYUFBYSxFQUFFLFFBSFY7QUFLTCx5QkFBcUI7QUFDbkI7QUFDQUMsTUFBQUEsYUFBYSxFQUFFLE1BRkk7QUFHbkJDLE1BQUFBLE1BQU0sRUFBRSxDQUhXO0FBSW5CQyxNQUFBQSxPQUFPLEVBQUU7QUFKVTtBQUxoQixHQUFQO0FBWUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiBbUDRdIFdlIGFyZSBtb3ZpbmcgYXR0YWNobWVudHMgcmVsYXRlZCB0byBBZGFwdGl2ZSBDYXJkcyBvdXQgb2YgXCJjb21wb25lbnRcIlxuLy8gICAgICAgTGF0ZXIsIHdlIHdpbGwgcmV3cml0ZSB0aGVzZSBhdHRhY2htZW50cyB3aXRob3V0IEFkYXB0aXZlIENhcmRzXG4vLyAgICAgICBXZSBhcmUgbGVhdmluZyB0aGUgQ1NTIGhlcmUgYXMtaXMgZm9yIG5vd1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRpb25DYXJkQXR0YWNobWVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwiZGlzcGxheVwiIGluIHN0eWxlU2V0LCB0aGlzIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gYnJlYWsgdGhlIGxheW91dCBmb3Igbm8gZ29vZCByZWFzb25zLlxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICcmID4gdWwubWVkaWEtbGlzdCc6IHtcbiAgICAgIC8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIG5vdCBzZXQgXCJsaXN0U3R5bGVUeXBlXCIgaW4gc3R5bGVTZXQsIHRoZSB1c2VyIGhhdmUgbm8gZ29vZCByZWFzb25zIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
