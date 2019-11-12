'use strict';

var cov_2m255t3t4q = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/CarouselFilmStrip.js';
  var hash = 'e76cb83e661ea5cf2d136aaab1736f9f888ef86c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/CarouselFilmStrip.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'CarouselFilmStrip',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 41
          }
        },
        loc: {
          start: {
            line: 3,
            column: 94
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 3
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
    hash: 'e76cb83e661ea5cf2d136aaab1736f9f888ef86c'
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
exports.default = CarouselFilmStrip;

/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */
function CarouselFilmStrip(_ref) {
  var bubbleMaxWidth = _ref.bubbleMaxWidth,
    bubbleMinWidth = _ref.bubbleMinWidth,
    paddingRegular = _ref.paddingRegular;
  cov_2m255t3t4q.f[0]++;
  cov_2m255t3t4q.s[0]++;
  return {
    // Browser quirks: Firefox has no way to hide scrollbar and while keeping it in function
    // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
    '@supports (-moz-appearance: none)': {
      marginBottom: -17
    },
    paddingLeft: paddingRegular,
    '&.webchat__carousel_indented_content > .content': {
      marginLeft: paddingRegular
    },
    '& > .content': {
      paddingRight: paddingRegular,
      '& > ul': {
        '&:not(:first-child)': {
          marginTop: paddingRegular
        },
        '& > li': {
          maxWidth: bubbleMaxWidth,
          minWidth: bubbleMinWidth,
          '&:not(:last-child)': {
            marginRight: paddingRegular
          }
        }
      },
      '& > .webchat__carousel__item_indented': {
        marginLeft: paddingRegular
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvQ2Fyb3VzZWxGaWxtU3RyaXAuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxGaWxtU3RyaXAiLCJidWJibGVNYXhXaWR0aCIsImJ1YmJsZU1pbldpZHRoIiwicGFkZGluZ1JlZ3VsYXIiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nTGVmdCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsaUJBQVQsT0FBK0U7QUFBQSxNQUFsREMsY0FBa0QsUUFBbERBLGNBQWtEO0FBQUEsTUFBbENDLGNBQWtDLFFBQWxDQSxjQUFrQztBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7QUFBQTtBQUFBO0FBQzVGLFNBQU87QUFDTDtBQUNBO0FBQ0EseUNBQXFDO0FBQ25DQyxNQUFBQSxZQUFZLEVBQUUsQ0FBQztBQURvQixLQUhoQztBQU9MQyxJQUFBQSxXQUFXLEVBQUVGLGNBUFI7QUFTTCx1REFBbUQ7QUFDakRHLE1BQUFBLFVBQVUsRUFBRUg7QUFEcUMsS0FUOUM7QUFhTCxvQkFBZ0I7QUFDZEksTUFBQUEsWUFBWSxFQUFFSixjQURBO0FBR2QsZ0JBQVU7QUFDUiwrQkFBdUI7QUFDckJLLFVBQUFBLFNBQVMsRUFBRUw7QUFEVSxTQURmO0FBS1Isa0JBQVU7QUFDUk0sVUFBQUEsUUFBUSxFQUFFUixjQURGO0FBRVJTLFVBQUFBLFFBQVEsRUFBRVIsY0FGRjtBQUlSLGdDQUFzQjtBQUNwQlMsWUFBQUEsV0FBVyxFQUFFUjtBQURPO0FBSmQ7QUFMRixPQUhJO0FBa0JkLCtDQUF5QztBQUN2Q0csUUFBQUEsVUFBVSxFQUFFSDtBQUQyQjtBQWxCM0I7QUFiWCxHQUFQO0FBb0NEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzJdIH1dICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsRmlsbVN0cmlwKHsgYnViYmxlTWF4V2lkdGgsIGJ1YmJsZU1pbldpZHRoLCBwYWRkaW5nUmVndWxhciB9KSB7XG4gIHJldHVybiB7XG4gICAgLy8gQnJvd3NlciBxdWlya3M6IEZpcmVmb3ggaGFzIG5vIHdheSB0byBoaWRlIHNjcm9sbGJhciBhbmQgd2hpbGUga2VlcGluZyBpdCBpbiBmdW5jdGlvblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyZmxvd1xuICAgICdAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSknOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IC0xN1xuICAgIH0sXG5cbiAgICBwYWRkaW5nTGVmdDogcGFkZGluZ1JlZ3VsYXIsXG5cbiAgICAnJi53ZWJjaGF0X19jYXJvdXNlbF9pbmRlbnRlZF9jb250ZW50ID4gLmNvbnRlbnQnOiB7XG4gICAgICBtYXJnaW5MZWZ0OiBwYWRkaW5nUmVndWxhclxuICAgIH0sXG5cbiAgICAnJiA+IC5jb250ZW50Jzoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmVndWxhcixcblxuICAgICAgJyYgPiB1bCc6IHtcbiAgICAgICAgJyY6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICAgICAgbWFyZ2luVG9wOiBwYWRkaW5nUmVndWxhclxuICAgICAgICB9LFxuXG4gICAgICAgICcmID4gbGknOiB7XG4gICAgICAgICAgbWF4V2lkdGg6IGJ1YmJsZU1heFdpZHRoLFxuICAgICAgICAgIG1pbldpZHRoOiBidWJibGVNaW5XaWR0aCxcblxuICAgICAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodDogcGFkZGluZ1JlZ3VsYXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICcmID4gLndlYmNoYXRfX2Nhcm91c2VsX19pdGVtX2luZGVudGVkJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiBwYWRkaW5nUmVndWxhclxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
