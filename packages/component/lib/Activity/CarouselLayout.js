'use strict';

var cov_28ctcxjuo1 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/CarouselLayout.js';
  var hash = 'cb2cdf35e599401d8ac948fbb789c540f63d9508';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/CarouselLayout.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 17
        },
        end: {
          line: 14,
          column: 2
        }
      },
      '1': {
        start: {
          line: 16,
          column: 23
        },
        end: {
          line: 50,
          column: 1
        }
      },
      '2': {
        start: {
          line: 17,
          column: 23
        },
        end: {
          line: 17,
          column: 60
        }
      },
      '3': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 49,
          column: 4
        }
      },
      '4': {
        start: {
          line: 23,
          column: 10
        },
        end: {
          line: 45,
          column: 16
        }
      },
      '5': {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 55,
          column: 2
        }
      },
      '6': {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 65,
          column: 2
        }
      },
      '7': {
        start: {
          line: 67,
          column: 61
        },
        end: {
          line: 67,
          column: 83
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 24
          }
        },
        loc: {
          start: {
            line: 16,
            column: 91
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 16
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 10
          }
        },
        loc: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 45,
            column: 16
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 67,
            column: 32
          },
          end: {
            line: 67,
            column: 33
          }
        },
        loc: {
          start: {
            line: 67,
            column: 61
          },
          end: {
            line: 67,
            column: 83
          }
        },
        line: 67
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 44,
            column: 13
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 27,
              column: 13
            },
            end: {
              line: 27,
              column: 38
            }
          },
          {
            start: {
              line: 28,
              column: 14
            },
            end: {
              line: 43,
              column: 31
            }
          }
        ],
        line: 27
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
      '7': 0
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
    hash: 'cb2cdf35e599401d8ac948fbb789c540f63d9508'
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

var _reactFilm = require('react-film');

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _CarouselFilmStrip = _interopRequireDefault(require('./CarouselFilmStrip'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS =
  (cov_28ctcxjuo1.s[0]++,
  (0, _glamor.css)({
    overflow: 'hidden',
    position: 'relative'
  }));
cov_28ctcxjuo1.s[1]++;

var CarouselLayout = function CarouselLayout(_ref) {
  var activity = _ref.activity,
    children = _ref.children,
    language = _ref.language,
    styleSet = _ref.styleSet,
    timestampClassName = _ref.timestampClassName;
  cov_28ctcxjuo1.f[0]++;
  var filmStyleSet =
    (cov_28ctcxjuo1.s[2]++,
    (0, _reactFilm.createBasicStyleSet)({
      cursor: null
    }));
  cov_28ctcxjuo1.s[3]++;
  return _react.default.createElement(
    _reactFilm.Composer,
    {
      numItems: _react.default.Children.count(children)
    },
    _react.default.createElement(_reactFilm.Context.Consumer, null, function(_ref2) {
      var scrollBarWidth = _ref2.scrollBarWidth;
      cov_28ctcxjuo1.f[1]++;
      cov_28ctcxjuo1.s[4]++;
      return _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)(ROOT_CSS + '', filmStyleSet.carousel + '')
        },
        _react.default.createElement(
          _CarouselFilmStrip.default,
          {
            activity: activity,
            timestampClassName: timestampClassName
          },
          children
        ),
        (cov_28ctcxjuo1.b[0][0]++, scrollBarWidth !== '100%') &&
          (cov_28ctcxjuo1.b[0][1]++,
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(
              _reactFilm.Flipper,
              {
                'aria-label': (0, _Localize.localize)('Left', language),
                className: (0, _classnames.default)(styleSet.carouselFlipper + '', filmStyleSet.leftFlipper + ''),
                mode: 'left'
              },
              _react.default.createElement(
                'div',
                {
                  className: 'button'
                },
                '<'
              )
            ),
            _react.default.createElement(
              _reactFilm.Flipper,
              {
                'aria-label': (0, _Localize.localize)('Right', language),
                className: (0, _classnames.default)(styleSet.carouselFlipper + '', filmStyleSet.rightFlipper + ''),
                mode: 'right'
              },
              _react.default.createElement(
                'div',
                {
                  className: 'button'
                },
                '>'
              )
            )
          ))
      );
    })
  );
};

cov_28ctcxjuo1.s[5]++;
CarouselLayout.defaultProps = {
  children: undefined,
  timestampClassName: ''
};
cov_28ctcxjuo1.s[6]++;
CarouselLayout.propTypes = {
  activity: _propTypes.default.any.isRequired,
  children: _propTypes.default.any,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    carouselFlipper: _propTypes.default.any.isRequired
  }).isRequired,
  timestampClassName: _propTypes.default.string
};

var _default = (0, _connectToWebChat.default)(function(_ref3) {
  var language = _ref3.language,
    styleSet = _ref3.styleSet;
  cov_28ctcxjuo1.f[2]++;
  cov_28ctcxjuo1.s[7]++;
  return {
    language: language,
    styleSet: styleSet
  };
})(CarouselLayout);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9DYXJvdXNlbExheW91dC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJDYXJvdXNlbExheW91dCIsImFjdGl2aXR5IiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsInN0eWxlU2V0IiwidGltZXN0YW1wQ2xhc3NOYW1lIiwiZmlsbVN0eWxlU2V0IiwiY3Vyc29yIiwiUmVhY3QiLCJDaGlsZHJlbiIsImNvdW50Iiwic2Nyb2xsQmFyV2lkdGgiLCJjYXJvdXNlbCIsImNhcm91c2VsRmxpcHBlciIsImxlZnRGbGlwcGVyIiwicmlnaHRGbGlwcGVyIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLDJCQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxRQUFRLEVBQUUsUUFEUztBQUVuQkMsRUFBQUEsUUFBUSxFQUFFO0FBRlMsQ0FBSixDQUFILENBQWQ7OztBQUtBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBb0U7QUFBQSxNQUFqRUMsUUFBaUUsUUFBakVBLFFBQWlFO0FBQUEsTUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCO0FBQUE7QUFDekYsTUFBTUMsWUFBWSwyQkFBRyxvQ0FBb0I7QUFBRUMsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FBcEIsQ0FBSCxDQUFsQjtBQUR5RjtBQUd6RixTQUNFLDZCQUFDLG1CQUFEO0FBQVUsSUFBQSxRQUFRLEVBQUVDLGVBQU1DLFFBQU4sQ0FBZUMsS0FBZixDQUFxQlIsUUFBckI7QUFBcEIsS0FDRSw2QkFBQyxrQkFBRCxDQUFhLFFBQWIsUUFDRyxpQkFDQztBQUFBLFFBREVTLGNBQ0YsU0FERUEsY0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFLLE1BQUEsU0FBUyxFQUFFLHlCQUFXZCxRQUFRLEdBQUcsRUFBdEIsRUFBMEJTLFlBQVksQ0FBQ00sUUFBYixHQUF3QixFQUFsRDtBQUFoQixPQUNFLDZCQUFDLDBCQUFEO0FBQW1CLE1BQUEsUUFBUSxFQUFFWCxRQUE3QjtBQUF1QyxNQUFBLGtCQUFrQixFQUFFSTtBQUEzRCxPQUNHSCxRQURILENBREYsRUFJRywyQkFBQVMsY0FBYyxLQUFLLE1BQW5CLGdDQUNDLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMsa0JBQUQ7QUFDRSxvQkFBWSx3QkFBUyxNQUFULEVBQWlCUixRQUFqQixDQURkO0FBRUUsTUFBQSxTQUFTLEVBQUUseUJBQVdDLFFBQVEsQ0FBQ1MsZUFBVCxHQUEyQixFQUF0QyxFQUEwQ1AsWUFBWSxDQUFDUSxXQUFiLEdBQTJCLEVBQXJFLENBRmI7QUFHRSxNQUFBLElBQUksRUFBQztBQUhQLE9BS0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQXlCLEdBQXpCLENBTEYsQ0FERixFQVFFLDZCQUFDLGtCQUFEO0FBQ0Usb0JBQVksd0JBQVMsT0FBVCxFQUFrQlgsUUFBbEIsQ0FEZDtBQUVFLE1BQUEsU0FBUyxFQUFFLHlCQUFXQyxRQUFRLENBQUNTLGVBQVQsR0FBMkIsRUFBdEMsRUFBMENQLFlBQVksQ0FBQ1MsWUFBYixHQUE0QixFQUF0RSxDQUZiO0FBR0UsTUFBQSxJQUFJLEVBQUM7QUFIUCxPQUtFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUF5QixHQUF6QixDQUxGLENBUkYsQ0FERCxDQUpIO0FBc0JNLEdBeEJWLENBREYsQ0FERjtBQStCRCxDQWxDRDs7O0FBb0NBZixjQUFjLENBQUNnQixZQUFmLEdBQThCO0FBQzVCZCxFQUFBQSxRQUFRLEVBQUVlLFNBRGtCO0FBRTVCWixFQUFBQSxrQkFBa0IsRUFBRTtBQUZRLENBQTlCOztBQUtBTCxjQUFjLENBQUNrQixTQUFmLEdBQTJCO0FBQ3pCakIsRUFBQUEsUUFBUSxFQUFFa0IsbUJBQVVDLEdBQVYsQ0FBY0MsVUFEQztBQUV6Qm5CLEVBQUFBLFFBQVEsRUFBRWlCLG1CQUFVQyxHQUZLO0FBR3pCakIsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVHLE1BQVYsQ0FBaUJELFVBSEY7QUFJekJqQixFQUFBQSxRQUFRLEVBQUVlLG1CQUFVSSxLQUFWLENBQWdCO0FBQ3hCVixJQUFBQSxlQUFlLEVBQUVNLG1CQUFVQyxHQUFWLENBQWNDO0FBRFAsR0FBaEIsRUFFUEEsVUFOc0I7QUFPekJoQixFQUFBQSxrQkFBa0IsRUFBRWMsbUJBQVVHO0FBUEwsQ0FBM0I7O2VBVWUsK0JBQWlCLGlCQUE2QjtBQUFBLE1BQTFCbkIsUUFBMEIsU0FBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFRCxJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsSUFBQUEsUUFBUSxFQUFSQTtBQUFaO0FBQXNCLENBQXBFLEVBQXVFSixjQUF2RSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zZXIsIENvbnRleHQgYXMgRmlsbUNvbnRleHQsIGNyZWF0ZUJhc2ljU3R5bGVTZXQsIEZsaXBwZXIgfSBmcm9tICdyZWFjdC1maWxtJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBDYXJvdXNlbEZpbG1TdHJpcCBmcm9tICcuL0Nhcm91c2VsRmlsbVN0cmlwJztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KTtcblxuY29uc3QgQ2Fyb3VzZWxMYXlvdXQgPSAoeyBhY3Rpdml0eSwgY2hpbGRyZW4sIGxhbmd1YWdlLCBzdHlsZVNldCwgdGltZXN0YW1wQ2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgZmlsbVN0eWxlU2V0ID0gY3JlYXRlQmFzaWNTdHlsZVNldCh7IGN1cnNvcjogbnVsbCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb3NlciBudW1JdGVtcz17UmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pfT5cbiAgICAgIDxGaWxtQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IHNjcm9sbEJhcldpZHRoIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBmaWxtU3R5bGVTZXQuY2Fyb3VzZWwgKyAnJyl9PlxuICAgICAgICAgICAgPENhcm91c2VsRmlsbVN0cmlwIGFjdGl2aXR5PXthY3Rpdml0eX0gdGltZXN0YW1wQ2xhc3NOYW1lPXt0aW1lc3RhbXBDbGFzc05hbWV9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0Nhcm91c2VsRmlsbVN0cmlwPlxuICAgICAgICAgICAge3Njcm9sbEJhcldpZHRoICE9PSAnMTAwJScgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEZsaXBwZXJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xvY2FsaXplKCdMZWZ0JywgbGFuZ3VhZ2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlU2V0LmNhcm91c2VsRmxpcHBlciArICcnLCBmaWxtU3R5bGVTZXQubGVmdEZsaXBwZXIgKyAnJyl9XG4gICAgICAgICAgICAgICAgICBtb2RlPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj57JzwnfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmxpcHBlcj5cbiAgICAgICAgICAgICAgICA8RmxpcHBlclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bG9jYWxpemUoJ1JpZ2h0JywgbGFuZ3VhZ2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlU2V0LmNhcm91c2VsRmxpcHBlciArICcnLCBmaWxtU3R5bGVTZXQucmlnaHRGbGlwcGVyICsgJycpfVxuICAgICAgICAgICAgICAgICAgbW9kZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPnsnPid9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GbGlwcGVyPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRmlsbUNvbnRleHQuQ29uc3VtZXI+XG4gICAgPC9Db21wb3Nlcj5cbiAgKTtcbn07XG5cbkNhcm91c2VsTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiAnJ1xufTtcblxuQ2Fyb3VzZWxMYXlvdXQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY2Fyb3VzZWxGbGlwcGVyOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSA9PiAoeyBsYW5ndWFnZSwgc3R5bGVTZXQgfSkpKENhcm91c2VsTGF5b3V0KTtcbiJdfQ==
