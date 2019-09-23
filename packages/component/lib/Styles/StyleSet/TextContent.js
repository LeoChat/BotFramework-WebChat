'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createTextContentStyle;

/* eslint no-magic-numbers: "off" */
function createTextContentStyle(_ref) {
  var bubbleMinHeight = _ref.bubbleMinHeight,
    primaryFont = _ref.primaryFont,
    paddingRegular = _ref.paddingRegular;
  return {
    fontFamily: primaryFont,
    margin: 0,
    minHeight: bubbleMinHeight - paddingRegular * 2,
    padding: paddingRegular,
    '& > :first-child': {
      marginTop: 0
    },
    '& > :last-child': {
      marginBottom: 0
    },
    '&.markdown': {
      '& img': {
        maxWidth: '100%'
      },
      '& pre': {
        overflow: 'hidden'
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvVGV4dENvbnRlbnQuanMiXSwibmFtZXMiOlsiY3JlYXRlVGV4dENvbnRlbnRTdHlsZSIsImJ1YmJsZU1pbkhlaWdodCIsInByaW1hcnlGb250IiwicGFkZGluZ1JlZ3VsYXIiLCJmb250RmFtaWx5IiwibWFyZ2luIiwibWluSGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1heFdpZHRoIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLHNCQUFULE9BQWtGO0FBQUEsTUFBaERDLGVBQWdELFFBQWhEQSxlQUFnRDtBQUFBLE1BQS9CQyxXQUErQixRQUEvQkEsV0FBK0I7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQy9GLFNBQU87QUFDTEMsSUFBQUEsVUFBVSxFQUFFRixXQURQO0FBRUxHLElBQUFBLE1BQU0sRUFBRSxDQUZIO0FBR0xDLElBQUFBLFNBQVMsRUFBRUwsZUFBZSxHQUFHRSxjQUFjLEdBQUcsQ0FIekM7QUFJTEksSUFBQUEsT0FBTyxFQUFFSixjQUpKO0FBTUwsd0JBQW9CO0FBQ2xCSyxNQUFBQSxTQUFTLEVBQUU7QUFETyxLQU5mO0FBVUwsdUJBQW1CO0FBQ2pCQyxNQUFBQSxZQUFZLEVBQUU7QUFERyxLQVZkO0FBY0wsa0JBQWM7QUFDWixlQUFTO0FBQ1BDLFFBQUFBLFFBQVEsRUFBRTtBQURILE9BREc7QUFLWixlQUFTO0FBQ1BDLFFBQUFBLFFBQVEsRUFBRTtBQURIO0FBTEc7QUFkVCxHQUFQO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFwib2ZmXCIgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGV4dENvbnRlbnRTdHlsZSh7IGJ1YmJsZU1pbkhlaWdodCwgcHJpbWFyeUZvbnQsIHBhZGRpbmdSZWd1bGFyIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udCxcbiAgICBtYXJnaW46IDAsXG4gICAgbWluSGVpZ2h0OiBidWJibGVNaW5IZWlnaHQgLSBwYWRkaW5nUmVndWxhciAqIDIsXG4gICAgcGFkZGluZzogcGFkZGluZ1JlZ3VsYXIsXG5cbiAgICAnJiA+IDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblRvcDogMFxuICAgIH0sXG5cbiAgICAnJiA+IDpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcmLm1hcmtkb3duJzoge1xuICAgICAgJyYgaW1nJzoge1xuICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICB9LFxuXG4gICAgICAnJiBwcmUnOiB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
