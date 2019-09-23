'use strict';

var cov_znb314a7c = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/ScrollToEndButton.js';
  var hash = '7539ba4188cd01e321c0ad8e3024c71fbd566fbc';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/ScrollToEndButton.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 26
        },
        end: {
          line: 14,
          column: 1
        }
      },
      '1': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 13,
          column: 11
        }
      },
      '2': {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 18,
          column: 2
        }
      },
      '3': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      '4': {
        start: {
          line: 28,
          column: 42
        },
        end: {
          line: 30,
          column: 1
        }
      },
      '5': {
        start: {
          line: 28,
          column: 91
        },
        end: {
          line: 28,
          column: 116
        }
      },
      '6': {
        start: {
          line: 32,
          column: 35
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '7': {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 35,
          column: 40
        }
      },
      '8': {
        start: {
          line: 34,
          column: 21
        },
        end: {
          line: 34,
          column: 80
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 10,
            column: 27
          }
        },
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 13,
            column: 11
          }
        },
        line: 11
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 59
          },
          end: {
            line: 28,
            column: 60
          }
        },
        loc: {
          start: {
            line: 28,
            column: 91
          },
          end: {
            line: 28,
            column: 116
          }
        },
        line: 28
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 32,
            column: 35
          },
          end: {
            line: 32,
            column: 36
          }
        },
        loc: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 35,
            column: 40
          }
        },
        line: 33
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 34,
            column: 5
          },
          end: {
            line: 34,
            column: 6
          }
        },
        loc: {
          start: {
            line: 34,
            column: 21
          },
          end: {
            line: 34,
            column: 80
          }
        },
        line: 34
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 34,
            column: 21
          },
          end: {
            line: 34,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 34,
              column: 21
            },
            end: {
              line: 34,
              column: 28
            }
          },
          {
            start: {
              line: 34,
              column: 32
            },
            end: {
              line: 34,
              column: 80
            }
          }
        ],
        line: 34
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '7539ba4188cd01e321c0ad8e3024c71fbd566fbc'
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

var _reactScrollToBottom = require('react-scroll-to-bottom');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _Localize = _interopRequireDefault(require('../Localization/Localize'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_znb314a7c.s[0]++;

var ScrollToEndButton = function ScrollToEndButton(_ref) {
  var className = _ref.className,
    scrollToEnd = _ref.scrollToEnd,
    styleSet = _ref.styleSet;
  cov_znb314a7c.f[0]++;
  cov_znb314a7c.s[1]++;
  return _react.default.createElement(
    'button',
    {
      className: (0, _classnames.default)(styleSet.scrollToEndButton + '', className + ''),
      onClick: scrollToEnd,
      type: 'button'
    },
    _react.default.createElement(_Localize.default, {
      text: 'New messages'
    })
  );
};

cov_znb314a7c.s[2]++;
ScrollToEndButton.defaultProps = {
  className: ''
};
cov_znb314a7c.s[3]++;
ScrollToEndButton.propTypes = {
  className: _propTypes.default.string,
  scrollToEnd: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    scrollToEndButton: _propTypes.default.any.isRequired
  }).isRequired
};
var WebChatConnectedScrollToEndButton =
  (cov_znb314a7c.s[4]++,
  (0, _connectToWebChat.default)(function(_ref2) {
    var scrollToEnd = _ref2.scrollToEnd,
      styleSet = _ref2.styleSet;
    cov_znb314a7c.f[1]++;
    cov_znb314a7c.s[5]++;
    return {
      scrollToEnd: scrollToEnd,
      styleSet: styleSet
    };
  })(ScrollToEndButton));
cov_znb314a7c.s[6]++;

var ConnectedScrollToEndButton = function ConnectedScrollToEndButton(props) {
  cov_znb314a7c.f[2]++;
  cov_znb314a7c.s[7]++;
  return _react.default.createElement(_reactScrollToBottom.StateContext.Consumer, null, function(_ref3) {
    var sticky = _ref3.sticky;
    cov_znb314a7c.f[3]++;
    cov_znb314a7c.s[8]++;
    return (
      (cov_znb314a7c.b[0][0]++, !sticky) &&
      (cov_znb314a7c.b[0][1]++, _react.default.createElement(WebChatConnectedScrollToEndButton, props))
    );
  });
};

var _default = ConnectedScrollToEndButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TY3JvbGxUb0VuZEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJTY3JvbGxUb0VuZEJ1dHRvbiIsImNsYXNzTmFtZSIsInNjcm9sbFRvRW5kIiwic3R5bGVTZXQiLCJzY3JvbGxUb0VuZEJ1dHRvbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhbnkiLCJXZWJDaGF0Q29ubmVjdGVkU2Nyb2xsVG9FbmRCdXR0b24iLCJDb25uZWN0ZWRTY3JvbGxUb0VuZEJ1dHRvbiIsInByb3BzIiwic3RpY2t5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FDeEI7QUFBQSxNQUQyQkMsU0FDM0IsUUFEMkJBLFNBQzNCO0FBQUEsTUFEc0NDLFdBQ3RDLFFBRHNDQSxXQUN0QztBQUFBLE1BRG1EQyxRQUNuRCxRQURtREEsUUFDbkQ7QUFBQTtBQUFBO0FBQUE7QUFBUSxJQUFBLFNBQVMsRUFBRSx5QkFBV0EsUUFBUSxDQUFDQyxpQkFBVCxHQUE2QixFQUF4QyxFQUE0Q0gsU0FBUyxHQUFHLEVBQXhELENBQW5CO0FBQWdGLElBQUEsT0FBTyxFQUFFQyxXQUF6RjtBQUFzRyxJQUFBLElBQUksRUFBQztBQUEzRyxLQUNFLDZCQUFDLGlCQUFEO0FBQVUsSUFBQSxJQUFJLEVBQUM7QUFBZixJQURGO0FBRVMsQ0FIWDs7O0FBTUFGLGlCQUFpQixDQUFDSyxZQUFsQixHQUFpQztBQUMvQkosRUFBQUEsU0FBUyxFQUFFO0FBRG9CLENBQWpDOztBQUlBRCxpQkFBaUIsQ0FBQ00sU0FBbEIsR0FBOEI7QUFDNUJMLEVBQUFBLFNBQVMsRUFBRU0sbUJBQVVDLE1BRE87QUFFNUJOLEVBQUFBLFdBQVcsRUFBRUssbUJBQVVFLElBQVYsQ0FBZUMsVUFGQTtBQUc1QlAsRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUksS0FBVixDQUFnQjtBQUN4QlAsSUFBQUEsaUJBQWlCLEVBQUVHLG1CQUFVSyxHQUFWLENBQWNGO0FBRFQsR0FBaEIsRUFFUEE7QUFMeUIsQ0FBOUI7QUFRQSxJQUFNRyxpQ0FBaUMsMEJBQUcsK0JBQWlCLGlCQUFnQztBQUFBLE1BQTdCWCxXQUE2QixTQUE3QkEsV0FBNkI7QUFBQSxNQUFoQkMsUUFBZ0IsU0FBaEJBLFFBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUVELElBQUFBLFdBQVcsRUFBWEEsV0FBRjtBQUFlQyxJQUFBQSxRQUFRLEVBQVJBO0FBQWY7QUFBeUIsQ0FBMUUsRUFDeENILGlCQUR3QyxDQUFILENBQXZDOzs7QUFJQSxJQUFNYywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUFDLEtBQUssRUFDdEM7QUFBQTtBQUFBO0FBQUEsc0NBQUMsaUNBQUQsQ0FBNEIsUUFBNUIsUUFDRyxpQkFBZ0I7QUFBQSxRQUFiQyxNQUFhLFNBQWJBLE1BQWE7QUFBQTtBQUFBO0FBQUEsc0NBQUNBLE1BQUQsK0JBQVcsNkJBQUMsaUNBQUQsRUFBdUNELEtBQXZDLENBQVg7QUFBMkQsR0FEOUU7QUFFc0MsQ0FIeEM7O2VBTWVELDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVDb250ZXh0IGFzIFNjcm9sbFRvQm90dG9tU3RhdGVDb250ZXh0IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXRvLWJvdHRvbSc7XG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IExvY2FsaXplIGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5cbmNvbnN0IFNjcm9sbFRvRW5kQnV0dG9uID0gKHsgY2xhc3NOYW1lLCBzY3JvbGxUb0VuZCwgc3R5bGVTZXQgfSkgPT4gKFxuICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5zY3JvbGxUb0VuZEJ1dHRvbiArICcnLCBjbGFzc05hbWUgKyAnJyl9IG9uQ2xpY2s9e3Njcm9sbFRvRW5kfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgPExvY2FsaXplIHRleHQ9XCJOZXcgbWVzc2FnZXNcIiAvPlxuICA8L2J1dHRvbj5cbik7XG5cblNjcm9sbFRvRW5kQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuU2Nyb2xsVG9FbmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNjcm9sbFRvRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzY3JvbGxUb0VuZEJ1dHRvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IFdlYkNoYXRDb25uZWN0ZWRTY3JvbGxUb0VuZEJ1dHRvbiA9IGNvbm5lY3RUb1dlYkNoYXQoKHsgc2Nyb2xsVG9FbmQsIHN0eWxlU2V0IH0pID0+ICh7IHNjcm9sbFRvRW5kLCBzdHlsZVNldCB9KSkoXG4gIFNjcm9sbFRvRW5kQnV0dG9uXG4pO1xuXG5jb25zdCBDb25uZWN0ZWRTY3JvbGxUb0VuZEJ1dHRvbiA9IHByb3BzID0+IChcbiAgPFNjcm9sbFRvQm90dG9tU3RhdGVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyBzdGlja3kgfSkgPT4gIXN0aWNreSAmJiA8V2ViQ2hhdENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uIHsuLi5wcm9wc30gLz59XG4gIDwvU2Nyb2xsVG9Cb3R0b21TdGF0ZUNvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWRTY3JvbGxUb0VuZEJ1dHRvbjtcbiJdfQ==
