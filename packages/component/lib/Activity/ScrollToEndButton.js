'use strict';

var cov_2ig7zqjk91 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Activity/ScrollToEndButton.js';
  var hash = 'b080a2dca3e3caddf1cd5ea2c9eff1db07a26844';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Activity/ScrollToEndButton.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 26
        },
        end: {
          line: 19,
          column: 1
        }
      },
      '1': {
        start: {
          line: 12,
          column: 61
        },
        end: {
          line: 12,
          column: 74
        }
      },
      '2': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      '3': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      '4': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 31,
          column: 2
        }
      },
      '5': {
        start: {
          line: 33,
          column: 42
        },
        end: {
          line: 33,
          column: 117
        }
      },
      '6': {
        start: {
          line: 33,
          column: 81
        },
        end: {
          line: 33,
          column: 96
        }
      },
      '7': {
        start: {
          line: 35,
          column: 35
        },
        end: {
          line: 39,
          column: 1
        }
      },
      '8': {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 38,
          column: 40
        }
      },
      '9': {
        start: {
          line: 37,
          column: 21
        },
        end: {
          line: 37,
          column: 80
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 11,
            column: 26
          },
          end: {
            line: 11,
            column: 27
          }
        },
        loc: {
          start: {
            line: 11,
            column: 58
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 11
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 33,
            column: 59
          },
          end: {
            line: 33,
            column: 60
          }
        },
        loc: {
          start: {
            line: 33,
            column: 81
          },
          end: {
            line: 33,
            column: 96
          }
        },
        line: 33
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 35,
            column: 35
          },
          end: {
            line: 35,
            column: 36
          }
        },
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 38,
            column: 40
          }
        },
        line: 36
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 37,
            column: 5
          },
          end: {
            line: 37,
            column: 6
          }
        },
        loc: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 80
          }
        },
        line: 37
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 37,
              column: 21
            },
            end: {
              line: 37,
              column: 28
            }
          },
          {
            start: {
              line: 37,
              column: 32
            },
            end: {
              line: 37,
              column: 80
            }
          }
        ],
        line: 37
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
      '8': 0,
      '9': 0
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
    hash: 'b080a2dca3e3caddf1cd5ea2c9eff1db07a26844'
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

var _useStyleSet = _interopRequireDefault(require('../hooks/useStyleSet'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

cov_2ig7zqjk91.s[0]++;

var ScrollToEndButton = function ScrollToEndButton(_ref) {
  var className = _ref.className,
    scrollToEnd = _ref.scrollToEnd;
  cov_2ig7zqjk91.f[0]++;

  var _ref2 = (cov_2ig7zqjk91.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    scrollToEndButtonStyleSet = _ref3[0].scrollToEndButton;

  cov_2ig7zqjk91.s[2]++;
  return _react.default.createElement(
    'button',
    {
      className: (0, _classnames.default)(scrollToEndButtonStyleSet + '', className + ''),
      onClick: scrollToEnd,
      type: 'button'
    },
    _react.default.createElement(_Localize.default, {
      text: 'New messages'
    })
  );
};

cov_2ig7zqjk91.s[3]++;
ScrollToEndButton.defaultProps = {
  className: ''
};
cov_2ig7zqjk91.s[4]++;
ScrollToEndButton.propTypes = {
  className: _propTypes.default.string,
  scrollToEnd: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    scrollToEndButton: _propTypes.default.any.isRequired
  }).isRequired
};
var WebChatConnectedScrollToEndButton =
  (cov_2ig7zqjk91.s[5]++,
  (0, _connectToWebChat.default)(function(_ref4) {
    var scrollToEnd = _ref4.scrollToEnd;
    cov_2ig7zqjk91.f[1]++;
    cov_2ig7zqjk91.s[6]++;
    return {
      scrollToEnd: scrollToEnd
    };
  })(ScrollToEndButton));
cov_2ig7zqjk91.s[7]++;

var ConnectedScrollToEndButton = function ConnectedScrollToEndButton(props) {
  cov_2ig7zqjk91.f[2]++;
  cov_2ig7zqjk91.s[8]++;
  return _react.default.createElement(_reactScrollToBottom.StateContext.Consumer, null, function(_ref5) {
    var sticky = _ref5.sticky;
    cov_2ig7zqjk91.f[3]++;
    cov_2ig7zqjk91.s[9]++;
    return (
      (cov_2ig7zqjk91.b[0][0]++, !sticky) &&
      (cov_2ig7zqjk91.b[0][1]++, _react.default.createElement(WebChatConnectedScrollToEndButton, props))
    );
  });
};

var _default = ConnectedScrollToEndButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TY3JvbGxUb0VuZEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJTY3JvbGxUb0VuZEJ1dHRvbiIsImNsYXNzTmFtZSIsInNjcm9sbFRvRW5kIiwic2Nyb2xsVG9FbmRCdXR0b25TdHlsZVNldCIsInNjcm9sbFRvRW5kQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHlsZVNldCIsInNoYXBlIiwiYW55IiwiV2ViQ2hhdENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uIiwiQ29ubmVjdGVkU2Nyb2xsVG9FbmRCdXR0b24iLCJwcm9wcyIsInN0aWNreSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFnQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUE7O0FBQUEsc0NBQ0csMkJBREg7QUFBQTtBQUFBLE1BQzVCQyx5QkFENEIsWUFDL0NDLGlCQUQrQzs7QUFBQTtBQUd4RCxTQUNFO0FBQVEsSUFBQSxTQUFTLEVBQUUseUJBQVdELHlCQUF5QixHQUFHLEVBQXZDLEVBQTJDRixTQUFTLEdBQUcsRUFBdkQsQ0FBbkI7QUFBK0UsSUFBQSxPQUFPLEVBQUVDLFdBQXhGO0FBQXFHLElBQUEsSUFBSSxFQUFDO0FBQTFHLEtBQ0UsNkJBQUMsaUJBQUQ7QUFBVSxJQUFBLElBQUksRUFBQztBQUFmLElBREYsQ0FERjtBQUtELENBUkQ7OztBQVVBRixpQkFBaUIsQ0FBQ0ssWUFBbEIsR0FBaUM7QUFDL0JKLEVBQUFBLFNBQVMsRUFBRTtBQURvQixDQUFqQzs7QUFJQUQsaUJBQWlCLENBQUNNLFNBQWxCLEdBQThCO0FBQzVCTCxFQUFBQSxTQUFTLEVBQUVNLG1CQUFVQyxNQURPO0FBRTVCTixFQUFBQSxXQUFXLEVBQUVLLG1CQUFVRSxJQUFWLENBQWVDLFVBRkE7QUFHNUJDLEVBQUFBLFFBQVEsRUFBRUosbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDeEJSLElBQUFBLGlCQUFpQixFQUFFRyxtQkFBVU0sR0FBVixDQUFjSDtBQURULEdBQWhCLEVBRVBBO0FBTHlCLENBQTlCO0FBUUEsSUFBTUksaUNBQWlDLDJCQUFHLCtCQUFpQixpQkFBc0I7QUFBQSxNQUFuQlosV0FBbUIsU0FBbkJBLFdBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUVBLElBQUFBLFdBQVcsRUFBWEE7QUFBRjtBQUFlLENBQXRELEVBQXlERixpQkFBekQsQ0FBSCxDQUF2Qzs7O0FBRUEsSUFBTWUsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFBQyxLQUFLLEVBQ3RDO0FBQUE7QUFBQTtBQUFBLHNDQUFDLGlDQUFELENBQTRCLFFBQTVCLFFBQ0csaUJBQWdCO0FBQUEsUUFBYkMsTUFBYSxTQUFiQSxNQUFhO0FBQUE7QUFBQTtBQUFBLHVDQUFDQSxNQUFELGdDQUFXLDZCQUFDLGlDQUFELEVBQXVDRCxLQUF2QyxDQUFYO0FBQTJELEdBRDlFO0FBRXNDLENBSHhDOztlQU1lRCwwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlQ29udGV4dCBhcyBTY3JvbGxUb0JvdHRvbVN0YXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0LXNjcm9sbC10by1ib3R0b20nO1xuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBMb2NhbGl6ZSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgU2Nyb2xsVG9FbmRCdXR0b24gPSAoeyBjbGFzc05hbWUsIHNjcm9sbFRvRW5kIH0pID0+IHtcbiAgY29uc3QgW3sgc2Nyb2xsVG9FbmRCdXR0b246IHNjcm9sbFRvRW5kQnV0dG9uU3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc2Nyb2xsVG9FbmRCdXR0b25TdHlsZVNldCArICcnLCBjbGFzc05hbWUgKyAnJyl9IG9uQ2xpY2s9e3Njcm9sbFRvRW5kfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICA8TG9jYWxpemUgdGV4dD1cIk5ldyBtZXNzYWdlc1wiIC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5TY3JvbGxUb0VuZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn07XG5cblNjcm9sbFRvRW5kQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzY3JvbGxUb0VuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2Nyb2xsVG9FbmRCdXR0b246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBXZWJDaGF0Q29ubmVjdGVkU2Nyb2xsVG9FbmRCdXR0b24gPSBjb25uZWN0VG9XZWJDaGF0KCh7IHNjcm9sbFRvRW5kIH0pID0+ICh7IHNjcm9sbFRvRW5kIH0pKShTY3JvbGxUb0VuZEJ1dHRvbik7XG5cbmNvbnN0IENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uID0gcHJvcHMgPT4gKFxuICA8U2Nyb2xsVG9Cb3R0b21TdGF0ZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgeyh7IHN0aWNreSB9KSA9PiAhc3RpY2t5ICYmIDxXZWJDaGF0Q29ubmVjdGVkU2Nyb2xsVG9FbmRCdXR0b24gey4uLnByb3BzfSAvPn1cbiAgPC9TY3JvbGxUb0JvdHRvbVN0YXRlQ29udGV4dC5Db25zdW1lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uO1xuIl19
