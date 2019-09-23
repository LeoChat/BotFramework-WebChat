'use strict';

var cov_1f1du2jggp = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/UploadButton.js';
  var hash = 'b1279e1fb182b3fb0efc1e21fe8fc6130ccaebcb';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Styles/StyleSet/UploadButton.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createUploadButtonStyle',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 47
          }
        },
        loc: {
          start: {
            line: 5,
            column: 3
          },
          end: {
            line: 24,
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
    hash: 'b1279e1fb182b3fb0efc1e21fe8fc6130ccaebcb'
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
exports.default = createUploadButtonStyle;

function createUploadButtonStyle(_ref) {
  var sendBoxButtonColor = _ref.sendBoxButtonColor,
    sendBoxButtonColorOnFocus = _ref.sendBoxButtonColorOnFocus,
    sendBoxButtonColorOnHover = _ref.sendBoxButtonColorOnHover;
  cov_1f1du2jggp.f[0]++;
  cov_1f1du2jggp.s[0]++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvVXBsb2FkQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVVwbG9hZEJ1dHRvblN0eWxlIiwic2VuZEJveEJ1dHRvbkNvbG9yIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJ3aWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsdUJBQVQsT0FJWjtBQUFBLE1BSERDLGtCQUdDLFFBSERBLGtCQUdDO0FBQUEsTUFGREMseUJBRUMsUUFGREEseUJBRUM7QUFBQSxNQUREQyx5QkFDQyxRQUREQSx5QkFDQztBQUFBO0FBQUE7QUFDRCxTQUFPO0FBQ0w7QUFDQUMsSUFBQUEsS0FBSyxFQUFFLEVBRkY7QUFHTEMsSUFBQUEsV0FBVyxFQUFFLEVBSFI7QUFJTEMsSUFBQUEsWUFBWSxFQUFFLEVBSlQ7QUFNTCx1QkFBbUI7QUFDakJDLE1BQUFBLElBQUksRUFBRU47QUFEVyxLQU5kO0FBVUwscUNBQWlDO0FBQy9CTSxNQUFBQSxJQUFJLEVBQUVKO0FBRHlCLEtBVjVCO0FBY0wscUNBQWlDO0FBQy9CSSxNQUFBQSxJQUFJLEVBQUVMO0FBRHlCO0FBZDVCLEdBQVA7QUFrQkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVVcGxvYWRCdXR0b25TdHlsZSh7XG4gIHNlbmRCb3hCdXR0b25Db2xvcixcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Ib3ZlclxufSkge1xuICByZXR1cm4ge1xuICAgIC8vIFdlIHVzZSB0aGUgc2VuZEJveEhlaWdodCwgc28gdGhlIGJ1dHRvbiBsb29rcyBzcXVhcmVcbiAgICB3aWR0aDogNDAsXG4gICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgIHBhZGRpbmdSaWdodDogMTAsXG5cbiAgICAnJiA+IC5pY29uID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yXG4gICAgfSxcblxuICAgICcmID4gaW5wdXQ6aG92ZXIgKyAuaWNvbiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IHNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXJcbiAgICB9LFxuXG4gICAgJyYgPiBpbnB1dDpmb2N1cyArIC5pY29uID4gc3ZnJzoge1xuICAgICAgZmlsbDogc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1c1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
