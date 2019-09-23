'use strict';

var cov_1092m3q220 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/Flipper.js';
  var hash = '260171703857d352093ca86877722646baf9fdea';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/Flipper.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 60,
          column: 2
        }
      },
      '1': {
        start: {
          line: 62,
          column: 23
        },
        end: {
          line: 68,
          column: 3
        }
      },
      '2': {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 68,
          column: 3
        }
      },
      '3': {
        start: {
          line: 64,
          column: 24
        },
        end: {
          line: 66,
          column: 5
        }
      },
      '4': {
        start: {
          line: 70,
          column: 49
        },
        end: {
          line: 70,
          column: 61
        }
      },
      '5': {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 82,
          column: 21
        }
      },
      '6': {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 80,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 62,
            column: 23
          },
          end: {
            line: 62,
            column: 24
          }
        },
        loc: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 63
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        loc: {
          start: {
            line: 64,
            column: 24
          },
          end: {
            line: 66,
            column: 5
          }
        },
        line: 64
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 70,
            column: 30
          },
          end: {
            line: 70,
            column: 31
          }
        },
        loc: {
          start: {
            line: 70,
            column: 49
          },
          end: {
            line: 70,
            column: 61
          }
        },
        line: 70
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 70,
            column: 64
          },
          end: {
            line: 70,
            column: 65
          }
        },
        loc: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 82,
            column: 21
          }
        },
        line: 71
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 72,
            column: 5
          },
          end: {
            line: 72,
            column: 6
          }
        },
        loc: {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 80,
            column: 15
          }
        },
        line: 73
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 81
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 76,
              column: 35
            },
            end: {
              line: 76,
              column: 56
            }
          },
          {
            start: {
              line: 76,
              column: 59
            },
            end: {
              line: 76,
              column: 81
            }
          }
        ],
        line: 76
      },
      '1': {
        loc: {
          start: {
            line: 79,
            column: 9
          },
          end: {
            line: 79,
            column: 57
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 79,
              column: 27
            },
            end: {
              line: 79,
              column: 40
            }
          },
          {
            start: {
              line: 79,
              column: 43
            },
            end: {
              line: 79,
              column: 57
            }
          }
        ],
        line: 79
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
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '260171703857d352093ca86877722646baf9fdea'
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
exports.connectFlipper = exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactFilm = require('react-film');

var _ArrowRight = _interopRequireDefault(require('./Assets/ArrowRight'));

var _ArrowLeft = _interopRequireDefault(require('./Assets/ArrowLeft'));

var _glamor = require('glamor');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FLIPPER_CSS =
  (cov_1092m3q220.s[0]++,
  (0, _glamor.css)({
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#dcdcdc',
    borderRadius: 30,
    marginTop: -50,
    border: '1px solid #dcdcdc',
    opacity: 0.1,
    boxShadow: '1px 1px 1px 0 rgba(155,155,155, 0.3)',
    overflow: 'hidden',
    fontSize: 17,
    padding: 3,
    cursor: 'pointer',
    '& svg path': {
      fill: '#454545'
    },
    '&:focus, &:hover': {
      outline: 0,
      border: '1px solid #bcbcbc',
      opacity: 0.9,
      boxShadow: '1px 1px 1px 0 rgba(155,155,155, 0.3)'
    },
    '&:active': {
      outline: 0,
      border: 0,
      opacity: 0.9
    },
    '&.right.ltr': {
      right: 0
    },
    '&.left.ltr': {
      left: 0
    },
    '&.rtl': {
      transform: 'scaleX(-1)',
      filter: 'FlipH'
    },
    '&.right.rtl': {
      left: 0
    },
    '&.left.rtl': {
      right: 0
    }
  }));
cov_1092m3q220.s[1]++;

var connectFlipper = function connectFlipper() {
  cov_1092m3q220.f[0]++;
  cov_1092m3q220.s[2]++;

  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var direction = _ref.direction;
        cov_1092m3q220.f[1]++;
        cov_1092m3q220.s[3]++;
        return {
          direction: direction
        };
      }
    ].concat(selectors)
  );
};

exports.connectFlipper = connectFlipper;

var _default = connectFlipper(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_1092m3q220.f[2]++;
  cov_1092m3q220.s[4]++;
  return {
    styleSet: styleSet
  };
})(function(_ref3) {
  var direction = _ref3.direction,
    mode = _ref3.mode;
  cov_1092m3q220.f[3]++;
  cov_1092m3q220.s[5]++;
  return _react.default.createElement(_reactFilm.Context.Consumer, null, function(context) {
    cov_1092m3q220.f[4]++;
    cov_1092m3q220.s[6]++;
    return _react.default.createElement(
      'button',
      {
        className: [FLIPPER_CSS, direction, mode].join(' '),
        'data-direction': mode,
        onClick:
          mode === 'left'
            ? (cov_1092m3q220.b[0][0]++, context.scrollOneLeft)
            : (cov_1092m3q220.b[0][1]++, context.scrollOneRight),
        type: 'button'
      },
      mode === 'left'
        ? (cov_1092m3q220.b[1][0]++, _react.default.createElement(_ArrowLeft.default, null))
        : (cov_1092m3q220.b[1][1]++, _react.default.createElement(_ArrowRight.default, null))
    );
  });
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ZsaXBwZXIuanMiXSwibmFtZXMiOlsiRkxJUFBFUl9DU1MiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwiYm9yZGVyIiwib3BhY2l0eSIsImJveFNoYWRvdyIsIm92ZXJmbG93IiwiZm9udFNpemUiLCJwYWRkaW5nIiwiY3Vyc29yIiwiZmlsbCIsIm91dGxpbmUiLCJyaWdodCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiLCJjb25uZWN0RmxpcHBlciIsInNlbGVjdG9ycyIsImRpcmVjdGlvbiIsInN0eWxlU2V0IiwibW9kZSIsImNvbnRleHQiLCJqb2luIiwic2Nyb2xsT25lTGVmdCIsInNjcm9sbE9uZVJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTUEsV0FBVywyQkFBRyxpQkFBSTtBQUN0QkMsRUFBQUEsUUFBUSxFQUFFLFVBRFk7QUFFdEJDLEVBQUFBLGVBQWUsRUFBRSxhQUZLO0FBR3RCQyxFQUFBQSxLQUFLLEVBQUUsU0FIZTtBQUl0QkMsRUFBQUEsWUFBWSxFQUFFLEVBSlE7QUFLdEJDLEVBQUFBLFNBQVMsRUFBRSxDQUFDLEVBTFU7QUFNdEJDLEVBQUFBLE1BQU0sRUFBRSxtQkFOYztBQU90QkMsRUFBQUEsT0FBTyxFQUFFLEdBUGE7QUFRdEJDLEVBQUFBLFNBQVMsRUFBRSxzQ0FSVztBQVN0QkMsRUFBQUEsUUFBUSxFQUFFLFFBVFk7QUFVdEJDLEVBQUFBLFFBQVEsRUFBRSxFQVZZO0FBV3RCQyxFQUFBQSxPQUFPLEVBQUUsQ0FYYTtBQVl0QkMsRUFBQUEsTUFBTSxFQUFFLFNBWmM7QUFjdEIsZ0JBQWM7QUFDWkMsSUFBQUEsSUFBSSxFQUFFO0FBRE0sR0FkUTtBQWtCdEIsc0JBQW9CO0FBQ2xCQyxJQUFBQSxPQUFPLEVBQUUsQ0FEUztBQUVsQlIsSUFBQUEsTUFBTSxFQUFFLG1CQUZVO0FBR2xCQyxJQUFBQSxPQUFPLEVBQUUsR0FIUztBQUlsQkMsSUFBQUEsU0FBUyxFQUFFO0FBSk8sR0FsQkU7QUF5QnRCLGNBQVk7QUFDVk0sSUFBQUEsT0FBTyxFQUFFLENBREM7QUFFVlIsSUFBQUEsTUFBTSxFQUFFLENBRkU7QUFHVkMsSUFBQUEsT0FBTyxFQUFFO0FBSEMsR0F6QlU7QUErQnRCLGlCQUFlO0FBQ2JRLElBQUFBLEtBQUssRUFBRTtBQURNLEdBL0JPO0FBbUN0QixnQkFBYztBQUNaQyxJQUFBQSxJQUFJLEVBQUU7QUFETSxHQW5DUTtBQXVDdEIsV0FBUztBQUNQQyxJQUFBQSxTQUFTLEVBQUUsWUFESjtBQUVQQyxJQUFBQSxNQUFNLEVBQUU7QUFGRCxHQXZDYTtBQTRDdEIsaUJBQWU7QUFDYkYsSUFBQUEsSUFBSSxFQUFFO0FBRE8sR0E1Q087QUFnRHRCLGdCQUFjO0FBQ1pELElBQUFBLEtBQUssRUFBRTtBQURLO0FBaERRLENBQUosQ0FBSCxDQUFqQjs7O0FBcURBLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FDckI7QUFBQTtBQUFBOztBQUFBLG9DQUR5QkMsU0FDekI7QUFEeUJBLElBQUFBLFNBQ3pCO0FBQUE7O0FBQUEsa0RBQ0UsZ0JBQW9CO0FBQUEsUUFBakJDLFNBQWlCLFFBQWpCQSxTQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUNsQkEsTUFBQUEsU0FBUyxFQUFUQTtBQURrQjtBQUVuQixHQUhILFNBSUtELFNBSkw7QUFLQyxDQU5IOzs7O2VBUWVELGNBQWMsQ0FBQyxpQkFBbUI7QUFBQSxNQUFoQkcsUUFBZ0IsU0FBaEJBLFFBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUFZLENBQWhDLENBQWQsQ0FBaUQsaUJBQzlEO0FBQUEsTUFEaUVELFNBQ2pFLFNBRGlFQSxTQUNqRTtBQUFBLE1BRDRFRSxJQUM1RSxTQUQ0RUEsSUFDNUU7QUFBQTtBQUFBO0FBQUEsc0NBQUMsa0JBQUQsQ0FBUyxRQUFULFFBQ0csVUFBQUMsT0FBTyxFQUNOO0FBQUE7QUFBQTtBQUFBO0FBQ0UsTUFBQSxTQUFTLEVBQUUsQ0FBQ3hCLFdBQUQsRUFBY3FCLFNBQWQsRUFBeUJFLElBQXpCLEVBQStCRSxJQUEvQixDQUFvQyxHQUFwQyxDQURiO0FBRUUsd0JBQWdCRixJQUZsQjtBQUdFLE1BQUEsT0FBTyxFQUFFQSxJQUFJLEtBQUssTUFBVCw4QkFBa0JDLE9BQU8sQ0FBQ0UsYUFBMUIsK0JBQTBDRixPQUFPLENBQUNHLGNBQWxELENBSFg7QUFJRSxNQUFBLElBQUksRUFBQztBQUpQLE9BTUdKLElBQUksS0FBSyxNQUFULDhCQUFrQiw2QkFBQyxrQkFBRCxPQUFsQiwrQkFBa0MsNkJBQUMsbUJBQUQsT0FBbEMsQ0FOSDtBQU9TLEdBVGI7QUFXbUIsQ0FaTixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdyZWFjdC1maWxtJztcbmltcG9ydCBBcnJvd1JpZ2h0IGZyb20gJy4vQXNzZXRzL0Fycm93UmlnaHQnO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tICcuL0Fzc2V0cy9BcnJvd0xlZnQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IEZMSVBQRVJfQ1NTID0gY3NzKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6ICcjZGNkY2RjJyxcbiAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgbWFyZ2luVG9wOiAtNTAsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZGNkY2RjJyxcbiAgb3BhY2l0eTogMC4xLFxuICBib3hTaGFkb3c6ICcxcHggMXB4IDFweCAwIHJnYmEoMTU1LDE1NSwxNTUsIDAuMyknLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGZvbnRTaXplOiAxNyxcbiAgcGFkZGluZzogMyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG5cbiAgJyYgc3ZnIHBhdGgnOiB7XG4gICAgZmlsbDogJyM0NTQ1NDUnXG4gIH0sXG5cbiAgJyY6Zm9jdXMsICY6aG92ZXInOiB7XG4gICAgb3V0bGluZTogMCxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2JjYmNiYycsXG4gICAgb3BhY2l0eTogMC45LFxuICAgIGJveFNoYWRvdzogJzFweCAxcHggMXB4IDAgcmdiYSgxNTUsMTU1LDE1NSwgMC4zKSdcbiAgfSxcblxuICAnJjphY3RpdmUnOiB7XG4gICAgb3V0bGluZTogMCxcbiAgICBib3JkZXI6IDAsXG4gICAgb3BhY2l0eTogMC45XG4gIH0sXG5cbiAgJyYucmlnaHQubHRyJzoge1xuICAgIHJpZ2h0OiAwXG4gIH0sXG5cbiAgJyYubGVmdC5sdHInOiB7XG4gICAgbGVmdDogMFxuICB9LFxuXG4gICcmLnJ0bCc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoLTEpJyxcbiAgICBmaWx0ZXI6ICdGbGlwSCdcbiAgfSxcblxuICAnJi5yaWdodC5ydGwnOiB7XG4gICAgbGVmdDogMFxuICB9LFxuXG4gICcmLmxlZnQucnRsJzoge1xuICAgIHJpZ2h0OiAwXG4gIH1cbn0pO1xuXG5jb25zdCBjb25uZWN0RmxpcHBlciA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgZGlyZWN0aW9uIH0pID0+ICh7XG4gICAgICBkaXJlY3Rpb25cbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdEZsaXBwZXIoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKCh7IGRpcmVjdGlvbiwgbW9kZSB9KSA9PiAoXG4gIDxDb250ZXh0LkNvbnN1bWVyPlxuICAgIHtjb250ZXh0ID0+IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtbRkxJUFBFUl9DU1MsIGRpcmVjdGlvbiwgbW9kZV0uam9pbignICcpfVxuICAgICAgICBkYXRhLWRpcmVjdGlvbj17bW9kZX1cbiAgICAgICAgb25DbGljaz17bW9kZSA9PT0gJ2xlZnQnID8gY29udGV4dC5zY3JvbGxPbmVMZWZ0IDogY29udGV4dC5zY3JvbGxPbmVSaWdodH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIHttb2RlID09PSAnbGVmdCcgPyA8QXJyb3dMZWZ0IC8+IDogPEFycm93UmlnaHQgLz59XG4gICAgICA8L2J1dHRvbj5cbiAgICApfVxuICA8L0NvbnRleHQuQ29uc3VtZXI+XG4pKTtcblxuZXhwb3J0IHsgY29ubmVjdEZsaXBwZXIgfTtcbiJdfQ==
