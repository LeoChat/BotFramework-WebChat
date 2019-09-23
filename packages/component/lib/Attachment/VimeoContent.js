'use strict';

var cov_81vbfjk75 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/VimeoContent.js';
  var hash = 'eb0655f08401b66e82fd1ba39c24fb3f0ab23a7a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/VimeoContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 23,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 14,
          column: 15
        }
      },
      '2': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 22,
          column: 4
        }
      },
      '3': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 29,
          column: 2
        }
      },
      '4': {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 39,
          column: 2
        }
      },
      '5': {
        start: {
          line: 41,
          column: 51
        },
        end: {
          line: 41,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 22
          }
        },
        loc: {
          start: {
            line: 6,
            column: 69
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 6
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 41,
            column: 32
          },
          end: {
            line: 41,
            column: 33
          }
        },
        loc: {
          start: {
            line: 41,
            column: 51
          },
          end: {
            line: 41,
            column: 63
          }
        },
        line: 41
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 14
          },
          end: {
            line: 8,
            column: 30
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 8,
              column: 25
            },
            end: {
              line: 8,
              column: 26
            }
          },
          {
            start: {
              line: 8,
              column: 29
            },
            end: {
              line: 8,
              column: 30
            }
          }
        ],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 11,
            column: 10
          },
          end: {
            line: 11,
            column: 22
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 17
            },
            end: {
              line: 11,
              column: 18
            }
          },
          {
            start: {
              line: 11,
              column: 21
            },
            end: {
              line: 11,
              column: 22
            }
          }
        ],
        line: 11
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'eb0655f08401b66e82fd1ba39c24fb3f0ab23a7a'
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
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_81vbfjk75.s[0]++;

var VimeoContent = function VimeoContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop,
    styleSet = _ref.styleSet;
  cov_81vbfjk75.f[0]++;
  var search =
    (cov_81vbfjk75.s[1]++,
    new URLSearchParams({
      autoplay: autoPlay ? (cov_81vbfjk75.b[0][0]++, 1) : (cov_81vbfjk75.b[0][1]++, 0),
      badge: 0,
      byline: 0,
      loop: loop ? (cov_81vbfjk75.b[1][0]++, 1) : (cov_81vbfjk75.b[1][1]++, 0),
      portrait: 0,
      title: 0
    }).toString());
  cov_81vbfjk75.s[2]++;
  return _react.default.createElement('iframe', {
    'aria-label': alt,
    className: styleSet.vimeoContent,
    src: 'https://player.vimeo.com/video/'.concat(encodeURI(embedID), '?').concat(search)
  });
};

cov_81vbfjk75.s[3]++;
VimeoContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false
};
cov_81vbfjk75.s[4]++;
VimeoContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  embedID: _propTypes.default.string.isRequired,
  loop: _propTypes.default.bool,
  styleSet: _propTypes.default.shape({
    vimeoContent: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_81vbfjk75.f[1]++;
  cov_81vbfjk75.s[5]++;
  return {
    styleSet: styleSet
  };
})(VimeoContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpbWVvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJWaW1lb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImVtYmVkSUQiLCJsb29wIiwic3R5bGVTZXQiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJhdXRvcGxheSIsImJhZGdlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJ0aXRsZSIsInRvU3RyaW5nIiwidmltZW9Db250ZW50IiwiZW5jb2RlVVJJIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdEO0FBQUEsTUFBN0NDLEdBQTZDLFFBQTdDQSxHQUE2QztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7QUFBQSxNQUE5QkMsT0FBOEIsUUFBOUJBLE9BQThCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBO0FBQ25FLE1BQU1DLE1BQU0sMEJBQUcsSUFBSUMsZUFBSixDQUFvQjtBQUNqQ0MsSUFBQUEsUUFBUSxFQUFFTixRQUFRLDZCQUFHLENBQUgsOEJBQU8sQ0FBUCxDQURlO0FBRWpDTyxJQUFBQSxLQUFLLEVBQUUsQ0FGMEI7QUFHakNDLElBQUFBLE1BQU0sRUFBRSxDQUh5QjtBQUlqQ04sSUFBQUEsSUFBSSxFQUFFQSxJQUFJLDZCQUFHLENBQUgsOEJBQU8sQ0FBUCxDQUp1QjtBQUtqQ08sSUFBQUEsUUFBUSxFQUFFLENBTHVCO0FBTWpDQyxJQUFBQSxLQUFLLEVBQUU7QUFOMEIsR0FBcEIsRUFPWkMsUUFQWSxFQUFILENBQVo7QUFEbUU7QUFVbkUsU0FDRTtBQUNFLGtCQUFZWixHQURkO0FBRUUsSUFBQSxTQUFTLEVBQUVJLFFBQVEsQ0FBQ1MsWUFGdEI7QUFHRSxJQUFBLEdBQUcsMkNBQW9DQyxTQUFTLENBQUNaLE9BQUQsQ0FBN0MsY0FBMERHLE1BQTFEO0FBSEwsSUFERjtBQU9ELENBakJEOzs7QUFtQkFOLFlBQVksQ0FBQ2dCLFlBQWIsR0FBNEI7QUFDMUJmLEVBQUFBLEdBQUcsRUFBRSxFQURxQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLEtBRmdCO0FBRzFCRSxFQUFBQSxJQUFJLEVBQUU7QUFIb0IsQ0FBNUI7O0FBTUFKLFlBQVksQ0FBQ2lCLFNBQWIsR0FBeUI7QUFDdkJoQixFQUFBQSxHQUFHLEVBQUVpQixtQkFBVUMsTUFEUTtBQUV2QmpCLEVBQUFBLFFBQVEsRUFBRWdCLG1CQUFVRSxJQUZHO0FBR3ZCakIsRUFBQUEsT0FBTyxFQUFFZSxtQkFBVUMsTUFBVixDQUFpQkUsVUFISDtBQUl2QmpCLEVBQUFBLElBQUksRUFBRWMsbUJBQVVFLElBSk87QUFLdkJmLEVBQUFBLFFBQVEsRUFBRWEsbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDeEJSLElBQUFBLFlBQVksRUFBRUksbUJBQVVLLEdBQVYsQ0FBY0Y7QUFESixHQUFoQixFQUVQQTtBQVBvQixDQUF6Qjs7ZUFVZSwrQkFBaUIsaUJBQW1CO0FBQUEsTUFBaEJoQixRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURMLFlBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IFZpbWVvQ29udGVudCA9ICh7IGFsdCwgYXV0b1BsYXksIGVtYmVkSUQsIGxvb3AsIHN0eWxlU2V0IH0pID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgYXV0b3BsYXk6IGF1dG9QbGF5ID8gMSA6IDAsXG4gICAgYmFkZ2U6IDAsXG4gICAgYnlsaW5lOiAwLFxuICAgIGxvb3A6IGxvb3AgPyAxIDogMCxcbiAgICBwb3J0cmFpdDogMCxcbiAgICB0aXRsZTogMFxuICB9KS50b1N0cmluZygpO1xuXG4gIHJldHVybiAoXG4gICAgPGlmcmFtZVxuICAgICAgYXJpYS1sYWJlbD17YWx0fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZVNldC52aW1lb0NvbnRlbnR9XG4gICAgICBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtlbmNvZGVVUkkoZW1iZWRJRCl9PyR7c2VhcmNofWB9XG4gICAgLz5cbiAgKTtcbn07XG5cblZpbWVvQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgbG9vcDogZmFsc2Vcbn07XG5cblZpbWVvQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBlbWJlZElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB2aW1lb0NvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShWaW1lb0NvbnRlbnQpO1xuIl19
