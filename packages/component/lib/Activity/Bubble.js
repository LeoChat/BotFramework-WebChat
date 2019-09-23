'use strict';

var cov_1wjzr066tr = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/Bubble.js';
  var hash = 'c36356f369ef916844404905dc1014dde1a9962c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/Bubble.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 19,
          column: 2
        }
      },
      '1': {
        start: {
          line: 21,
          column: 15
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '2': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 35,
          column: 8
        }
      },
      '3': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 44,
          column: 2
        }
      },
      '4': {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 55,
          column: 2
        }
      },
      '5': {
        start: {
          line: 57,
          column: 51
        },
        end: {
          line: 57,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 16
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 35,
            column: 8
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 57,
            column: 32
          },
          end: {
            line: 57,
            column: 33
          }
        },
        loc: {
          start: {
            line: 57,
            column: 51
          },
          end: {
            line: 57,
            column: 63
          }
        },
        line: 57
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 26
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 28,
              column: 6
            },
            end: {
              line: 28,
              column: 20
            }
          },
          {
            start: {
              line: 28,
              column: 24
            },
            end: {
              line: 28,
              column: 26
            }
          }
        ],
        line: 28
      },
      '1': {
        loc: {
          start: {
            line: 32,
            column: 5
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 32,
              column: 5
            },
            end: {
              line: 32,
              column: 8
            }
          },
          {
            start: {
              line: 32,
              column: 12
            },
            end: {
              line: 32,
              column: 98
            }
          },
          {
            start: {
              line: 33,
              column: 6
            },
            end: {
              line: 33,
              column: 46
            }
          }
        ],
        line: 32
      },
      '2': {
        loc: {
          start: {
            line: 32,
            column: 15
          },
          end: {
            line: 32,
            column: 97
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 32,
              column: 26
            },
            end: {
              line: 32,
              column: 64
            }
          },
          {
            start: {
              line: 32,
              column: 67
            },
            end: {
              line: 32,
              column: 97
            }
          }
        ],
        line: 32
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
      '1': [0, 0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c36356f369ef916844404905dc1014dde1a9962c'
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

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS =
  (cov_1wjzr066tr.s[0]++,
  (0, _glamor.css)({
    position: 'relative',
    '& > .webchat__bubble__content': {
      // This is for hiding content outside of the bubble, for example, content outside of border radius
      overflow: 'hidden'
    },
    '& > .webchat__bubble__nub': {
      position: 'absolute'
    }
  }));
cov_1wjzr066tr.s[1]++;

var Bubble = function Bubble(_ref) {
  var ariaHidden = _ref['aria-hidden'],
    children = _ref.children,
    className = _ref.className,
    fromUser = _ref.fromUser,
    nub = _ref.nub,
    styleSet = _ref.styleSet;
  cov_1wjzr066tr.f[0]++;
  cov_1wjzr066tr.s[2]++;
  return _react.default.createElement(
    'div',
    {
      'aria-hidden': ariaHidden,
      className: (0, _classnames.default)(
        ROOT_CSS + '',
        styleSet.bubble + '',
        {
          'from-user': fromUser,
          webchat__bubble_has_nub: nub
        },
        (cov_1wjzr066tr.b[0][0]++, className + '') || (cov_1wjzr066tr.b[0][1]++, '')
      )
    },
    _react.default.createElement(
      'div',
      {
        className: 'webchat__bubble__content'
      },
      children
    ),
    (cov_1wjzr066tr.b[1][0]++, nub) &&
      (cov_1wjzr066tr.b[1][1]++,
      !!(fromUser
        ? (cov_1wjzr066tr.b[2][0]++, styleSet.options.bubbleFromUserNubSize)
        : (cov_1wjzr066tr.b[2][1]++, styleSet.options.bubbleNubSize))) &&
      (cov_1wjzr066tr.b[1][2]++,
      _react.default.createElement('div', {
        className: 'webchat__bubble__nub'
      }))
  );
};

cov_1wjzr066tr.s[3]++;
Bubble.defaultProps = {
  'aria-hidden': false,
  children: undefined,
  className: '',
  fromUser: false,
  nub: true
};
cov_1wjzr066tr.s[4]++;
Bubble.propTypes = {
  'aria-hidden': _propTypes.default.bool,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  fromUser: _propTypes.default.bool,
  nub: _propTypes.default.bool,
  styleSet: _propTypes.default.shape({
    bubble: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_1wjzr066tr.f[1]++;
  cov_1wjzr066tr.s[5]++;
  return {
    styleSet: styleSet
  };
})(Bubble);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9CdWJibGUuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiQnViYmxlIiwiYXJpYUhpZGRlbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZnJvbVVzZXIiLCJudWIiLCJzdHlsZVNldCIsImJ1YmJsZSIsIndlYmNoYXRfX2J1YmJsZV9oYXNfbnViIiwib3B0aW9ucyIsImJ1YmJsZUZyb21Vc2VyTnViU2l6ZSIsImJ1YmJsZU51YlNpemUiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiYW55Iiwic3RyaW5nIiwic2hhcGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxRQUFRLDJCQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxRQUFRLEVBQUUsVUFEUztBQUduQixtQ0FBaUM7QUFDL0I7QUFDQUMsSUFBQUEsUUFBUSxFQUFFO0FBRnFCLEdBSGQ7QUFRbkIsK0JBQTZCO0FBQzNCRCxJQUFBQSxRQUFRLEVBQUU7QUFEaUI7QUFSVixDQUFKLENBQUgsQ0FBZDs7O0FBYUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FDYjtBQUFBLE1BRCtCQyxVQUMvQixRQURnQixhQUNoQjtBQUFBLE1BRDJDQyxRQUMzQyxRQUQyQ0EsUUFDM0M7QUFBQSxNQURxREMsU0FDckQsUUFEcURBLFNBQ3JEO0FBQUEsTUFEZ0VDLFFBQ2hFLFFBRGdFQSxRQUNoRTtBQUFBLE1BRDBFQyxHQUMxRSxRQUQwRUEsR0FDMUU7QUFBQSxNQUQrRUMsUUFDL0UsUUFEK0VBLFFBQy9FO0FBQUE7QUFBQTtBQUFBO0FBQ0UsbUJBQWFMLFVBRGY7QUFFRSxJQUFBLFNBQVMsRUFBRSx5QkFDVEosUUFBUSxHQUFHLEVBREYsRUFFVFMsUUFBUSxDQUFDQyxNQUFULEdBQWtCLEVBRlQsRUFHVDtBQUFFLG1CQUFhSCxRQUFmO0FBQXlCSSxNQUFBQSx1QkFBdUIsRUFBRUg7QUFBbEQsS0FIUyxFQUlULDJCQUFBRixTQUFTLEdBQUcsRUFBWixnQ0FBa0IsRUFBbEIsQ0FKUztBQUZiLEtBU0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTJDRCxRQUEzQyxDQVRGLEVBVUcsMkJBQUFHLEdBQUcsZ0NBQUksQ0FBQyxFQUFFRCxRQUFRLDhCQUFHRSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLHFCQUFwQiwrQkFBNENKLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkUsYUFBN0QsQ0FBVixDQUFMLENBQUgsK0JBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREQsQ0FWSDtBQWFNLENBZFI7OztBQWlCQVgsTUFBTSxDQUFDWSxZQUFQLEdBQXNCO0FBQ3BCLGlCQUFlLEtBREs7QUFFcEJWLEVBQUFBLFFBQVEsRUFBRVcsU0FGVTtBQUdwQlYsRUFBQUEsU0FBUyxFQUFFLEVBSFM7QUFJcEJDLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCQyxFQUFBQSxHQUFHLEVBQUU7QUFMZSxDQUF0Qjs7QUFRQUwsTUFBTSxDQUFDYyxTQUFQLEdBQW1CO0FBQ2pCLGlCQUFlQyxtQkFBVUMsSUFEUjtBQUVqQmQsRUFBQUEsUUFBUSxFQUFFYSxtQkFBVUUsR0FGSDtBQUdqQmQsRUFBQUEsU0FBUyxFQUFFWSxtQkFBVUcsTUFISjtBQUlqQmQsRUFBQUEsUUFBUSxFQUFFVyxtQkFBVUMsSUFKSDtBQUtqQlgsRUFBQUEsR0FBRyxFQUFFVSxtQkFBVUMsSUFMRTtBQU1qQlYsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUksS0FBVixDQUFnQjtBQUN4QlosSUFBQUEsTUFBTSxFQUFFUSxtQkFBVUUsR0FBVixDQUFjRztBQURFLEdBQWhCLEVBRVBBO0FBUmMsQ0FBbkI7O2VBV2UsK0JBQWlCLGlCQUFtQjtBQUFBLE1BQWhCZCxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbUROLE1BQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19jb250ZW50Jzoge1xuICAgIC8vIFRoaXMgaXMgZm9yIGhpZGluZyBjb250ZW50IG91dHNpZGUgb2YgdGhlIGJ1YmJsZSwgZm9yIGV4YW1wbGUsIGNvbnRlbnQgb3V0c2lkZSBvZiBib3JkZXIgcmFkaXVzXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG5cbiAgJyYgPiAud2ViY2hhdF9fYnViYmxlX19udWInOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfVxufSk7XG5cbmNvbnN0IEJ1YmJsZSA9ICh7ICdhcmlhLWhpZGRlbic6IGFyaWFIaWRkZW4sIGNoaWxkcmVuLCBjbGFzc05hbWUsIGZyb21Vc2VyLCBudWIsIHN0eWxlU2V0IH0pID0+IChcbiAgPGRpdlxuICAgIGFyaWEtaGlkZGVuPXthcmlhSGlkZGVufVxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgIFJPT1RfQ1NTICsgJycsXG4gICAgICBzdHlsZVNldC5idWJibGUgKyAnJyxcbiAgICAgIHsgJ2Zyb20tdXNlcic6IGZyb21Vc2VyLCB3ZWJjaGF0X19idWJibGVfaGFzX251YjogbnViIH0sXG4gICAgICBjbGFzc05hbWUgKyAnJyB8fCAnJ1xuICAgICl9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYmNoYXRfX2J1YmJsZV9fY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICB7bnViICYmICEhKGZyb21Vc2VyID8gc3R5bGVTZXQub3B0aW9ucy5idWJibGVGcm9tVXNlck51YlNpemUgOiBzdHlsZVNldC5vcHRpb25zLmJ1YmJsZU51YlNpemUpICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2ViY2hhdF9fYnViYmxlX19udWJcIiAvPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuQnViYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgJ2FyaWEtaGlkZGVuJzogZmFsc2UsXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJycsXG4gIGZyb21Vc2VyOiBmYWxzZSxcbiAgbnViOiB0cnVlXG59O1xuXG5CdWJibGUucHJvcFR5cGVzID0ge1xuICAnYXJpYS1oaWRkZW4nOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbVVzZXI6IFByb3BUeXBlcy5ib29sLFxuICBudWI6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBidWJibGU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShCdWJibGUpO1xuIl19
