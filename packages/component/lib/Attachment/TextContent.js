'use strict';

var cov_4q5fon6gt = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/TextContent.js';
  var hash = '2c9bccbf15b9c127f79700aab33d62952a4f900c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/TextContent.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 31,
          column: 3
        }
      },
      '1': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      '2': {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 29,
          column: 23
        }
      },
      '3': {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 36,
          column: 2
        }
      },
      '4': {
        start: {
          line: 35,
          column: 26
        },
        end: {
          line: 35,
          column: 30
        }
      },
      '5': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 45,
          column: 2
        }
      },
      '6': {
        start: {
          line: 47,
          column: 67
        },
        end: {
          line: 47,
          column: 95
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 21
          }
        },
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 13
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 34
          }
        },
        loc: {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 29,
            column: 23
          }
        },
        line: 24
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 35,
            column: 18
          },
          end: {
            line: 35,
            column: 19
          }
        },
        loc: {
          start: {
            line: 35,
            column: 26
          },
          end: {
            line: 35,
            column: 30
          }
        },
        line: 35
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 47,
            column: 32
          },
          end: {
            line: 47,
            column: 33
          }
        },
        loc: {
          start: {
            line: 47,
            column: 67
          },
          end: {
            line: 47,
            column: 95
          }
        },
        line: 47
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 21,
              column: 21
            }
          },
          {
            start: {
              line: 23,
              column: 4
            },
            end: {
              line: 30,
              column: 6
            }
          }
        ],
        line: 13
      },
      '1': {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 51
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 13,
              column: 2
            },
            end: {
              line: 13,
              column: 33
            }
          },
          {
            start: {
              line: 13,
              column: 37
            },
            end: {
              line: 13,
              column: 51
            }
          }
        ],
        line: 13
      },
      '2': {
        loc: {
          start: {
            line: 19,
            column: 58
          },
          end: {
            line: 19,
            column: 68
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 58
            },
            end: {
              line: 19,
              column: 62
            }
          },
          {
            start: {
              line: 19,
              column: 66
            },
            end: {
              line: 19,
              column: 68
            }
          }
        ],
        line: 19
      },
      '3': {
        loc: {
          start: {
            line: 23,
            column: 5
          },
          end: {
            line: 23,
            column: 15
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 23,
              column: 5
            },
            end: {
              line: 23,
              column: 9
            }
          },
          {
            start: {
              line: 23,
              column: 13
            },
            end: {
              line: 23,
              column: 15
            }
          }
        ],
        line: 23
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '2c9bccbf15b9c127f79700aab33d62952a4f900c'
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

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_4q5fon6gt.s[0]++;

var TextContent = function TextContent(_ref) {
  var contentType = _ref.contentType,
    renderMarkdown = _ref.renderMarkdown,
    styleSet = _ref.styleSet,
    text = _ref.text;
  cov_4q5fon6gt.f[0]++;
  cov_4q5fon6gt.s[1]++;
  return (cov_4q5fon6gt.b[1][0]++, contentType === 'text/markdown') && (cov_4q5fon6gt.b[1][1]++, renderMarkdown)
    ? (cov_4q5fon6gt.b[0][0]++,
      _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: text
        }),
        _react.default.createElement('div', {
          'aria-hidden': true,
          className: (0, _classnames.default)('markdown', styleSet.textContent + ''),
          dangerouslySetInnerHTML: {
            __html: renderMarkdown((cov_4q5fon6gt.b[2][0]++, text) || (cov_4q5fon6gt.b[2][1]++, ''))
          }
        })
      ))
    : (cov_4q5fon6gt.b[0][1]++,
      ((cov_4q5fon6gt.b[3][0]++, text) || (cov_4q5fon6gt.b[3][1]++, '')).split('\n').map(function(line, index) {
        cov_4q5fon6gt.f[1]++;
        cov_4q5fon6gt.s[2]++;
        return _react.default.createElement(
          _react.default.Fragment,
          {
            key: index
          },
          _react.default.createElement(_ScreenReaderText.default, {
            text: text
          }),
          _react.default.createElement(
            'p',
            {
              'aria-hidden': true,
              className: (0, _classnames.default)('plain', styleSet.textContent + '')
            },
            line.trim()
          )
        );
      }));
};

cov_4q5fon6gt.s[3]++;
TextContent.defaultProps = {
  contentType: 'text/markdown',
  renderMarkdown: function renderMarkdown(text) {
    cov_4q5fon6gt.f[2]++;
    cov_4q5fon6gt.s[4]++;
    return text;
  }
};
cov_4q5fon6gt.s[5]++;
TextContent.propTypes = {
  contentType: _propTypes.default.string,
  renderMarkdown: _propTypes.default.func,
  styleSet: _propTypes.default.shape({
    textContent: _propTypes.default.any.isRequired
  }).isRequired,
  text: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var renderMarkdown = _ref2.renderMarkdown,
    styleSet = _ref2.styleSet;
  cov_4q5fon6gt.f[3]++;
  cov_4q5fon6gt.s[6]++;
  return {
    renderMarkdown: renderMarkdown,
    styleSet: styleSet
  };
})(TextContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1RleHRDb250ZW50LmpzIl0sIm5hbWVzIjpbIlRleHRDb250ZW50IiwiY29udGVudFR5cGUiLCJyZW5kZXJNYXJrZG93biIsInN0eWxlU2V0IiwidGV4dCIsInRleHRDb250ZW50IiwiX19odG1sIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiaW5kZXgiLCJ0cmltIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsInNoYXBlIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQ2xCO0FBQUEsTUFEcUJDLFdBQ3JCLFFBRHFCQSxXQUNyQjtBQUFBLE1BRGtDQyxjQUNsQyxRQURrQ0EsY0FDbEM7QUFBQSxNQURrREMsUUFDbEQsUUFEa0RBLFFBQ2xEO0FBQUEsTUFENERDLElBQzVELFFBRDREQSxJQUM1RDtBQUFBO0FBQUE7QUFBQSxtQ0FBQUgsV0FBVyxLQUFLLGVBQWhCLCtCQUFtQ0MsY0FBbkMsOEJBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUU7QUFBeEIsSUFERixFQUVFO0FBQ0UsbUJBQWEsSUFEZjtBQUVFLElBQUEsU0FBUyxFQUFFLHlCQUFXLFVBQVgsRUFBdUJELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QixFQUE5QyxDQUZiO0FBR0UsSUFBQSx1QkFBdUIsRUFBRTtBQUFFQyxNQUFBQSxNQUFNLEVBQUVKLGNBQWMsQ0FBQywwQkFBQUUsSUFBSSwrQkFBSSxFQUFKLENBQUw7QUFBeEI7QUFIM0IsSUFGRixDQURGLDhCQVVFLENBQUMsMEJBQUFBLElBQUksK0JBQUksRUFBSixDQUFMLEVBQWFHLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJDLEdBQXpCLENBQTZCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUMzQjtBQUFBO0FBQUE7QUFBQSx3Q0FBQyxjQUFELENBQU8sUUFBUDtBQUFnQixNQUFBLEdBQUcsRUFBRUE7QUFBckIsT0FDRSw2QkFBQyx5QkFBRDtBQUFrQixNQUFBLElBQUksRUFBRU47QUFBeEIsTUFERixFQUVFO0FBQUcscUJBQWEsSUFBaEI7QUFBc0IsTUFBQSxTQUFTLEVBQUUseUJBQVcsT0FBWCxFQUFvQkQsUUFBUSxDQUFDRSxXQUFULEdBQXVCLEVBQTNDO0FBQWpDLE9BQ0dJLElBQUksQ0FBQ0UsSUFBTCxFQURILENBRkY7QUFLaUIsR0FObkIsQ0FWRjtBQWtCQyxDQW5CSDs7O0FBcUJBWCxXQUFXLENBQUNZLFlBQVosR0FBMkI7QUFDekJYLEVBQUFBLFdBQVcsRUFBRSxlQURZO0FBRXpCQyxFQUFBQSxjQUFjLEVBQUUsd0JBQUFFLElBQUksRUFBSUE7QUFBQUE7QUFBQUE7QUFBQUEsV0FBQUEsSUFBSTtBQUFBO0FBRkgsQ0FBM0I7O0FBS0FKLFdBQVcsQ0FBQ2EsU0FBWixHQUF3QjtBQUN0QlosRUFBQUEsV0FBVyxFQUFFYSxtQkFBVUMsTUFERDtBQUV0QmIsRUFBQUEsY0FBYyxFQUFFWSxtQkFBVUUsSUFGSjtBQUd0QmIsRUFBQUEsUUFBUSxFQUFFVyxtQkFBVUcsS0FBVixDQUFnQjtBQUN4QlosSUFBQUEsV0FBVyxFQUFFUyxtQkFBVUksR0FBVixDQUFjQztBQURILEdBQWhCLEVBRVBBLFVBTG1CO0FBTXRCZixFQUFBQSxJQUFJLEVBQUVVLG1CQUFVQyxNQUFWLENBQWlCSTtBQU5ELENBQXhCOztlQVNlLCtCQUFpQixpQkFBbUM7QUFBQSxNQUFoQ2pCLGNBQWdDLFNBQWhDQSxjQUFnQztBQUFBLE1BQWhCQyxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUQsSUFBQUEsY0FBYyxFQUFkQSxjQUFGO0FBQWtCQyxJQUFBQSxRQUFRLEVBQVJBO0FBQWxCO0FBQTRCLENBQWhGLEVBQW1GSCxXQUFuRixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGNvbnRlbnQgcmVuZGVyZWQgaGVyZSBpcyBzYW5pdGl6ZWQuXG4vKiBlc2xpbnQgcmVhY3Qvbm8tZGFuZ2VyOiBcIm9mZlwiICovXG4vKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5cbmNvbnN0IFRleHRDb250ZW50ID0gKHsgY29udGVudFR5cGUsIHJlbmRlck1hcmtkb3duLCBzdHlsZVNldCwgdGV4dCB9KSA9PlxuICBjb250ZW50VHlwZSA9PT0gJ3RleHQvbWFya2Rvd24nICYmIHJlbmRlck1hcmtkb3duID8gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e3RleHR9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ21hcmtkb3duJywgc3R5bGVTZXQudGV4dENvbnRlbnQgKyAnJyl9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcmVuZGVyTWFya2Rvd24odGV4dCB8fCAnJykgfX1cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSA6IChcbiAgICAodGV4dCB8fCAnJykuc3BsaXQoJ1xcbicpLm1hcCgobGluZSwgaW5kZXgpID0+IChcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17dGV4dH0gLz5cbiAgICAgICAgPHAgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncGxhaW4nLCBzdHlsZVNldC50ZXh0Q29udGVudCArICcnKX0+XG4gICAgICAgICAge2xpbmUudHJpbSgpfVxuICAgICAgICA8L3A+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICkpXG4gICk7XG5cblRleHRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudFR5cGU6ICd0ZXh0L21hcmtkb3duJyxcbiAgcmVuZGVyTWFya2Rvd246IHRleHQgPT4gdGV4dFxufTtcblxuVGV4dENvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjb250ZW50VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVuZGVyTWFya2Rvd246IFByb3BUeXBlcy5mdW5jLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0ZXh0Q29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyByZW5kZXJNYXJrZG93biwgc3R5bGVTZXQgfSkgPT4gKHsgcmVuZGVyTWFya2Rvd24sIHN0eWxlU2V0IH0pKShUZXh0Q29udGVudCk7XG4iXX0=
