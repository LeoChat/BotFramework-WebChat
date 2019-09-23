'use strict';

var cov_1x7fe3wbvx = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/BasicFilm.js';
  var hash = 'ef11c4d016889282e52b0281b370c5cc625a3457';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/BasicFilm.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 30
        }
      },
      '1': {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 12,
          column: 2
        }
      },
      '2': {
        start: {
          line: 14,
          column: 31
        },
        end: {
          line: 17,
          column: 2
        }
      },
      '3': {
        start: {
          line: 19,
          column: 51
        },
        end: {
          line: 19,
          column: 63
        }
      },
      '4': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 32,
          column: 13
        }
      },
      '5': {
        start: {
          line: 31,
          column: 30
        },
        end: {
          line: 31,
          column: 33
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 32
          },
          end: {
            line: 19,
            column: 33
          }
        },
        loc: {
          start: {
            line: 19,
            column: 51
          },
          end: {
            line: 19,
            column: 63
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 19,
            column: 66
          },
          end: {
            line: 19,
            column: 67
          }
        },
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 32,
            column: 13
          }
        },
        line: 20
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 31,
            column: 25
          }
        },
        loc: {
          start: {
            line: 31,
            column: 30
          },
          end: {
            line: 31,
            column: 33
          }
        },
        line: 31
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 31,
            column: 5
          },
          end: {
            line: 31,
            column: 41
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 31,
              column: 5
            },
            end: {
              line: 31,
              column: 13
            }
          },
          {
            start: {
              line: 31,
              column: 17
            },
            end: {
              line: 31,
              column: 41
            }
          }
        ],
        line: 31
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
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'ef11c4d016889282e52b0281b370c5cc625a3457'
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

var _react = _interopRequireDefault(require('react'));

var _glamor = require('glamor');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _reactFilm = require('react-film');

var _Flipper = _interopRequireDefault(require('./Flipper'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var BASIC_FILM_CSS = (cov_1x7fe3wbvx.s[0]++, (0, _glamor.css)({}));
var FILM_STRIP_CSS =
  (cov_1x7fe3wbvx.s[1]++,
  (0, _glamor.css)({
    marginLeft: 25,
    marginRight: 25
  }));
var FLIPPERS_CONTAINER_CSS =
  (cov_1x7fe3wbvx.s[2]++,
  (0, _glamor.css)({
    width: '100%',
    position: 'relative'
  }));

var _default = (0, _connectToWebChat.default)(function(_ref) {
  var styleSet = _ref.styleSet;
  cov_1x7fe3wbvx.f[0]++;
  cov_1x7fe3wbvx.s[3]++;
  return {
    styleSet: styleSet
  };
})(function(_ref2) {
  var children = _ref2.children,
    showDots = _ref2.showDots;
  cov_1x7fe3wbvx.f[1]++;
  cov_1x7fe3wbvx.s[4]++;
  return _react.default.createElement(
    _reactFilm.Composer,
    null,
    _react.default.createElement(
      'div',
      {
        className: BASIC_FILM_CSS
      },
      _react.default.createElement(
        'div',
        {
          className: FILM_STRIP_CSS
        },
        _react.default.createElement(_reactFilm.FilmStrip, null, children)
      ),
      _react.default.createElement(_reactFilm.ScrollBar, null),
      _react.default.createElement(
        'div',
        {
          className: FLIPPERS_CONTAINER_CSS
        },
        _react.default.createElement(_Flipper.default, {
          mode: 'left'
        }),
        _react.default.createElement(_Flipper.default, {
          mode: 'right'
        })
      )
    ),
    (cov_1x7fe3wbvx.b[0][0]++, showDots) &&
      (cov_1x7fe3wbvx.b[0][1]++,
      _react.default.createElement(_reactFilm.Dots, null, function() {
        cov_1x7fe3wbvx.f[2]++;
        cov_1x7fe3wbvx.s[5]++;
        return '.';
      }))
  );
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0Jhc2ljRmlsbS5qcyJdLCJuYW1lcyI6WyJCQVNJQ19GSUxNX0NTUyIsIkZJTE1fU1RSSVBfQ1NTIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiRkxJUFBFUlNfQ09OVEFJTkVSX0NTUyIsIndpZHRoIiwicG9zaXRpb24iLCJzdHlsZVNldCIsImNoaWxkcmVuIiwic2hvd0RvdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsY0FBYywyQkFBRyxpQkFBSSxFQUFKLENBQUgsQ0FBcEI7QUFDQSxJQUFNQyxjQUFjLDJCQUFHLGlCQUFJO0FBQ3pCQyxFQUFBQSxVQUFVLEVBQUUsRUFEYTtBQUV6QkMsRUFBQUEsV0FBVyxFQUFFO0FBRlksQ0FBSixDQUFILENBQXBCO0FBS0EsSUFBTUMsc0JBQXNCLDJCQUFHLGlCQUFJO0FBQ2pDQyxFQUFBQSxLQUFLLEVBQUUsTUFEMEI7QUFFakNDLEVBQUFBLFFBQVEsRUFBRTtBQUZ1QixDQUFKLENBQUgsQ0FBNUI7O2VBS2UsK0JBQWlCLGdCQUFtQjtBQUFBLE1BQWhCQyxRQUFnQixRQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbUQsaUJBQ2hFO0FBQUEsTUFEbUVDLFFBQ25FLFNBRG1FQSxRQUNuRTtBQUFBLE1BRDZFQyxRQUM3RSxTQUQ2RUEsUUFDN0U7QUFBQTtBQUFBO0FBQUEsc0NBQUMsbUJBQUQsUUFDRTtBQUFLLElBQUEsU0FBUyxFQUFFVDtBQUFoQixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVDO0FBQWhCLEtBQ0UsNkJBQUMsb0JBQUQsUUFBWU8sUUFBWixDQURGLENBREYsRUFJRSw2QkFBQyxvQkFBRCxPQUpGLEVBS0U7QUFBSyxJQUFBLFNBQVMsRUFBRUo7QUFBaEIsS0FDRSw2QkFBQyxnQkFBRDtBQUFTLElBQUEsSUFBSSxFQUFDO0FBQWQsSUFERixFQUVFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxJQUFJLEVBQUM7QUFBZCxJQUZGLENBTEYsQ0FERixFQVdHLDJCQUFBSyxRQUFRLGdDQUFJLDZCQUFDLGVBQUQsUUFBTyxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUcsR0FBaEIsQ0FBSixDQVhYO0FBWVcsQ0FiRSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IHsgQ29tcG9zZXIsIERvdHMsIEZpbG1TdHJpcCwgU2Nyb2xsQmFyIH0gZnJvbSAncmVhY3QtZmlsbSc7XG5pbXBvcnQgRmxpcHBlciBmcm9tICcuL0ZsaXBwZXInO1xuXG5jb25zdCBCQVNJQ19GSUxNX0NTUyA9IGNzcyh7fSk7XG5jb25zdCBGSUxNX1NUUklQX0NTUyA9IGNzcyh7XG4gIG1hcmdpbkxlZnQ6IDI1LFxuICBtYXJnaW5SaWdodDogMjVcbn0pO1xuXG5jb25zdCBGTElQUEVSU19DT05UQUlORVJfQ1NTID0gY3NzKHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKSgoeyBjaGlsZHJlbiwgc2hvd0RvdHMgfSkgPT4gKFxuICA8Q29tcG9zZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9e0JBU0lDX0ZJTE1fQ1NTfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGSUxNX1NUUklQX0NTU30+XG4gICAgICAgIDxGaWxtU3RyaXA+e2NoaWxkcmVufTwvRmlsbVN0cmlwPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2Nyb2xsQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17RkxJUFBFUlNfQ09OVEFJTkVSX0NTU30+XG4gICAgICAgIDxGbGlwcGVyIG1vZGU9XCJsZWZ0XCIgLz5cbiAgICAgICAgPEZsaXBwZXIgbW9kZT1cInJpZ2h0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHtzaG93RG90cyAmJiA8RG90cz57KCkgPT4gJy4nfTwvRG90cz59XG4gIDwvQ29tcG9zZXI+XG4pKTtcbiJdfQ==
