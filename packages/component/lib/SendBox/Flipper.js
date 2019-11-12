'use strict';

var cov_265h8xq6av = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/Flipper.js';
  var hash = '5615782f7721a03640fb7ef2e1a9dd1d5c1b21f0';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/Flipper.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 55,
          column: 2
        }
      },
      '1': {
        start: {
          line: 57,
          column: 23
        },
        end: {
          line: 63,
          column: 3
        }
      },
      '2': {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 63,
          column: 3
        }
      },
      '3': {
        start: {
          line: 59,
          column: 24
        },
        end: {
          line: 61,
          column: 5
        }
      },
      '4': {
        start: {
          line: 65,
          column: 49
        },
        end: {
          line: 65,
          column: 61
        }
      },
      '5': {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 77,
          column: 21
        }
      },
      '6': {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 75,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 57,
            column: 23
          },
          end: {
            line: 57,
            column: 24
          }
        },
        loc: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 58
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        loc: {
          start: {
            line: 59,
            column: 24
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 59
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 65,
            column: 30
          },
          end: {
            line: 65,
            column: 31
          }
        },
        loc: {
          start: {
            line: 65,
            column: 49
          },
          end: {
            line: 65,
            column: 61
          }
        },
        line: 65
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 65,
            column: 64
          },
          end: {
            line: 65,
            column: 65
          }
        },
        loc: {
          start: {
            line: 66,
            column: 2
          },
          end: {
            line: 77,
            column: 21
          }
        },
        line: 66
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 67,
            column: 5
          },
          end: {
            line: 67,
            column: 6
          }
        },
        loc: {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 75,
            column: 15
          }
        },
        line: 68
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 71,
            column: 17
          },
          end: {
            line: 71,
            column: 81
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 71,
              column: 35
            },
            end: {
              line: 71,
              column: 56
            }
          },
          {
            start: {
              line: 71,
              column: 59
            },
            end: {
              line: 71,
              column: 81
            }
          }
        ],
        line: 71
      },
      '1': {
        loc: {
          start: {
            line: 74,
            column: 9
          },
          end: {
            line: 74,
            column: 57
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 74,
              column: 27
            },
            end: {
              line: 74,
              column: 40
            }
          },
          {
            start: {
              line: 74,
              column: 43
            },
            end: {
              line: 74,
              column: 57
            }
          }
        ],
        line: 74
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
    hash: '5615782f7721a03640fb7ef2e1a9dd1d5c1b21f0'
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
  (cov_265h8xq6av.s[0]++,
  (0, _glamor.css)({
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#dcdcdc',
    marginTop: -45,
    opacity: 0.4,
    overflow: 'hidden',
    padding: 0,
    borderWidth: 0,
    cursor: 'pointer',
    '& svg path': {
      fill: '#454545'
    },
    '&:focus, &:hover': {
      outline: 0,
      opacity: 0.9
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
cov_265h8xq6av.s[1]++;

var connectFlipper = function connectFlipper() {
  cov_265h8xq6av.f[0]++;
  cov_265h8xq6av.s[2]++;

  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var direction = _ref.direction;
        cov_265h8xq6av.f[1]++;
        cov_265h8xq6av.s[3]++;
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
  cov_265h8xq6av.f[2]++;
  cov_265h8xq6av.s[4]++;
  return {
    styleSet: styleSet
  };
})(function(_ref3) {
  var direction = _ref3.direction,
    mode = _ref3.mode;
  cov_265h8xq6av.f[3]++;
  cov_265h8xq6av.s[5]++;
  return _react.default.createElement(_reactFilm.Context.Consumer, null, function(context) {
    cov_265h8xq6av.f[4]++;
    cov_265h8xq6av.s[6]++;
    return _react.default.createElement(
      'button',
      {
        className: [FLIPPER_CSS, direction, mode].join(' '),
        'data-direction': mode,
        onClick:
          mode === 'left'
            ? (cov_265h8xq6av.b[0][0]++, context.scrollOneLeft)
            : (cov_265h8xq6av.b[0][1]++, context.scrollOneRight),
        type: 'button'
      },
      mode === 'left'
        ? (cov_265h8xq6av.b[1][0]++, _react.default.createElement(_ArrowLeft.default, null))
        : (cov_265h8xq6av.b[1][1]++, _react.default.createElement(_ArrowRight.default, null))
    );
  });
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ZsaXBwZXIuanMiXSwibmFtZXMiOlsiRkxJUFBFUl9DU1MiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luVG9wIiwib3BhY2l0eSIsIm92ZXJmbG93IiwicGFkZGluZyIsImJvcmRlcldpZHRoIiwiY3Vyc29yIiwiZmlsbCIsIm91dGxpbmUiLCJib3JkZXIiLCJyaWdodCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiLCJjb25uZWN0RmxpcHBlciIsInNlbGVjdG9ycyIsImRpcmVjdGlvbiIsInN0eWxlU2V0IiwibW9kZSIsImNvbnRleHQiLCJqb2luIiwic2Nyb2xsT25lTGVmdCIsInNjcm9sbE9uZVJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTUEsV0FBVywyQkFBRyxpQkFBSTtBQUN0QkMsRUFBQUEsUUFBUSxFQUFFLFVBRFk7QUFFdEJDLEVBQUFBLGVBQWUsRUFBRSxhQUZLO0FBR3RCQyxFQUFBQSxLQUFLLEVBQUUsU0FIZTtBQUl0QkMsRUFBQUEsU0FBUyxFQUFFLENBQUMsRUFKVTtBQUt0QkMsRUFBQUEsT0FBTyxFQUFFLEdBTGE7QUFNdEJDLEVBQUFBLFFBQVEsRUFBRSxRQU5ZO0FBT3RCQyxFQUFBQSxPQUFPLEVBQUUsQ0FQYTtBQVF0QkMsRUFBQUEsV0FBVyxFQUFFLENBUlM7QUFTdEJDLEVBQUFBLE1BQU0sRUFBRSxTQVRjO0FBV3RCLGdCQUFjO0FBQ1pDLElBQUFBLElBQUksRUFBRTtBQURNLEdBWFE7QUFldEIsc0JBQW9CO0FBQ2xCQyxJQUFBQSxPQUFPLEVBQUUsQ0FEUztBQUVsQk4sSUFBQUEsT0FBTyxFQUFFO0FBRlMsR0FmRTtBQW9CdEIsY0FBWTtBQUNWTSxJQUFBQSxPQUFPLEVBQUUsQ0FEQztBQUVWQyxJQUFBQSxNQUFNLEVBQUUsQ0FGRTtBQUdWUCxJQUFBQSxPQUFPLEVBQUU7QUFIQyxHQXBCVTtBQTBCdEIsaUJBQWU7QUFDYlEsSUFBQUEsS0FBSyxFQUFFO0FBRE0sR0ExQk87QUE4QnRCLGdCQUFjO0FBQ1pDLElBQUFBLElBQUksRUFBRTtBQURNLEdBOUJRO0FBa0N0QixXQUFTO0FBQ1BDLElBQUFBLFNBQVMsRUFBRSxZQURKO0FBRVBDLElBQUFBLE1BQU0sRUFBRTtBQUZELEdBbENhO0FBdUN0QixpQkFBZTtBQUNiRixJQUFBQSxJQUFJLEVBQUU7QUFETyxHQXZDTztBQTJDdEIsZ0JBQWM7QUFDWkQsSUFBQUEsS0FBSyxFQUFFO0FBREs7QUEzQ1EsQ0FBSixDQUFILENBQWpCOzs7QUFnREEsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUNyQjtBQUFBO0FBQUE7O0FBQUEsb0NBRHlCQyxTQUN6QjtBQUR5QkEsSUFBQUEsU0FDekI7QUFBQTs7QUFBQSxrREFDRSxnQkFBb0I7QUFBQSxRQUFqQkMsU0FBaUIsUUFBakJBLFNBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQSxNQUFBQSxTQUFTLEVBQVRBO0FBRGtCO0FBRW5CLEdBSEgsU0FJS0QsU0FKTDtBQUtDLENBTkg7Ozs7ZUFRZUQsY0FBYyxDQUFDLGlCQUFtQjtBQUFBLE1BQWhCRyxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEMsQ0FBZCxDQUFpRCxpQkFDOUQ7QUFBQSxNQURpRUQsU0FDakUsU0FEaUVBLFNBQ2pFO0FBQUEsTUFENEVFLElBQzVFLFNBRDRFQSxJQUM1RTtBQUFBO0FBQUE7QUFBQSxzQ0FBQyxrQkFBRCxDQUFTLFFBQVQsUUFDRyxVQUFBQyxPQUFPLEVBQ047QUFBQTtBQUFBO0FBQUE7QUFDRSxNQUFBLFNBQVMsRUFBRSxDQUFDdEIsV0FBRCxFQUFjbUIsU0FBZCxFQUF5QkUsSUFBekIsRUFBK0JFLElBQS9CLENBQW9DLEdBQXBDLENBRGI7QUFFRSx3QkFBZ0JGLElBRmxCO0FBR0UsTUFBQSxPQUFPLEVBQUVBLElBQUksS0FBSyxNQUFULDhCQUFrQkMsT0FBTyxDQUFDRSxhQUExQiwrQkFBMENGLE9BQU8sQ0FBQ0csY0FBbEQsQ0FIWDtBQUlFLE1BQUEsSUFBSSxFQUFDO0FBSlAsT0FNR0osSUFBSSxLQUFLLE1BQVQsOEJBQWtCLDZCQUFDLGtCQUFELE9BQWxCLCtCQUFrQyw2QkFBQyxtQkFBRCxPQUFsQyxDQU5IO0FBT1MsR0FUYjtBQVdtQixDQVpOLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ3JlYWN0LWZpbG0nO1xuaW1wb3J0IEFycm93UmlnaHQgZnJvbSAnLi9Bc3NldHMvQXJyb3dSaWdodCc7XG5pbXBvcnQgQXJyb3dMZWZ0IGZyb20gJy4vQXNzZXRzL0Fycm93TGVmdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgRkxJUFBFUl9DU1MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyNkY2RjZGMnLFxuICBtYXJnaW5Ub3A6IC00NSxcbiAgb3BhY2l0eTogMC40LFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBhZGRpbmc6IDAsXG4gIGJvcmRlcldpZHRoOiAwLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcblxuICAnJiBzdmcgcGF0aCc6IHtcbiAgICBmaWxsOiAnIzQ1NDU0NSdcbiAgfSxcblxuICAnJjpmb2N1cywgJjpob3Zlcic6IHtcbiAgICBvdXRsaW5lOiAwLFxuICAgIG9wYWNpdHk6IDAuOVxuICB9LFxuXG4gICcmOmFjdGl2ZSc6IHtcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBvcGFjaXR5OiAwLjlcbiAgfSxcblxuICAnJi5yaWdodC5sdHInOiB7XG4gICAgcmlnaHQ6IDBcbiAgfSxcblxuICAnJi5sZWZ0Lmx0cic6IHtcbiAgICBsZWZ0OiAwXG4gIH0sXG5cbiAgJyYucnRsJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgtMSknLFxuICAgIGZpbHRlcjogJ0ZsaXBIJ1xuICB9LFxuXG4gICcmLnJpZ2h0LnJ0bCc6IHtcbiAgICBsZWZ0OiAwXG4gIH0sXG5cbiAgJyYubGVmdC5ydGwnOiB7XG4gICAgcmlnaHQ6IDBcbiAgfVxufSk7XG5cbmNvbnN0IGNvbm5lY3RGbGlwcGVyID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoeyBkaXJlY3Rpb24gfSkgPT4gKHtcbiAgICAgIGRpcmVjdGlvblxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RmxpcHBlcigoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoKHsgZGlyZWN0aW9uLCBtb2RlIH0pID0+IChcbiAgPENvbnRleHQuQ29uc3VtZXI+XG4gICAge2NvbnRleHQgPT4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1tGTElQUEVSX0NTUywgZGlyZWN0aW9uLCBtb2RlXS5qb2luKCcgJyl9XG4gICAgICAgIGRhdGEtZGlyZWN0aW9uPXttb2RlfVxuICAgICAgICBvbkNsaWNrPXttb2RlID09PSAnbGVmdCcgPyBjb250ZXh0LnNjcm9sbE9uZUxlZnQgOiBjb250ZXh0LnNjcm9sbE9uZVJpZ2h0fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAge21vZGUgPT09ICdsZWZ0JyA/IDxBcnJvd0xlZnQgLz4gOiA8QXJyb3dSaWdodCAvPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICl9XG4gIDwvQ29udGV4dC5Db25zdW1lcj5cbikpO1xuXG5leHBvcnQgeyBjb25uZWN0RmxpcHBlciB9O1xuIl19
