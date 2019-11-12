'use strict';

var cov_r9x24gsbt = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Activity/CarouselLayout.js';
  var hash = 'ec6b4cf73f71f718b91f75e0d2644e424bd11c43';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Activity/CarouselLayout.js',
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
          line: 54,
          column: 1
        }
      },
      '2': {
        start: {
          line: 17,
          column: 57
        },
        end: {
          line: 17,
          column: 70
        }
      },
      '3': {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 39
        }
      },
      '4': {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 41
        }
      },
      '5': {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 60
        }
      },
      '6': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 53,
          column: 4
        }
      },
      '7': {
        start: {
          line: 27,
          column: 10
        },
        end: {
          line: 49,
          column: 16
        }
      },
      '8': {
        start: {
          line: 56,
          column: 0
        },
        end: {
          line: 59,
          column: 2
        }
      },
      '9': {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 65,
          column: 2
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
            column: 71
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 16
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 26,
            column: 9
          },
          end: {
            line: 26,
            column: 10
          }
        },
        loc: {
          start: {
            line: 27,
            column: 10
          },
          end: {
            line: 49,
            column: 16
          }
        },
        line: 27
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 31,
            column: 13
          },
          end: {
            line: 48,
            column: 13
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 31,
              column: 13
            },
            end: {
              line: 31,
              column: 38
            }
          },
          {
            start: {
              line: 32,
              column: 14
            },
            end: {
              line: 47,
              column: 31
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
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'ec6b4cf73f71f718b91f75e0d2644e424bd11c43'
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

var _CarouselFilmStrip = _interopRequireDefault(require('./CarouselFilmStrip'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

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

var ROOT_CSS =
  (cov_r9x24gsbt.s[0]++,
  (0, _glamor.css)({
    overflow: 'hidden',
    position: 'relative'
  }));
cov_r9x24gsbt.s[1]++;

var CarouselLayout = function CarouselLayout(_ref) {
  var activity = _ref.activity,
    children = _ref.children,
    timestampClassName = _ref.timestampClassName;
  cov_r9x24gsbt.f[0]++;

  var _ref2 = (cov_r9x24gsbt.s[2]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    carouselFlipperStyleSet = _ref3[0].carouselFlipper;

  var leftLabel = (cov_r9x24gsbt.s[3]++, (0, _useLocalize.default)('Left'));
  var rightLabel = (cov_r9x24gsbt.s[4]++, (0, _useLocalize.default)('Right'));
  var filmStyleSet =
    (cov_r9x24gsbt.s[5]++,
    (0, _reactFilm.createBasicStyleSet)({
      cursor: null
    }));
  cov_r9x24gsbt.s[6]++;
  return _react.default.createElement(
    _reactFilm.Composer,
    {
      numItems: _react.default.Children.count(children)
    },
    _react.default.createElement(_reactFilm.Context.Consumer, null, function(_ref4) {
      var scrollBarWidth = _ref4.scrollBarWidth;
      cov_r9x24gsbt.f[1]++;
      cov_r9x24gsbt.s[7]++;
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
        (cov_r9x24gsbt.b[0][0]++, scrollBarWidth !== '100%') &&
          (cov_r9x24gsbt.b[0][1]++,
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(
              _reactFilm.Flipper,
              {
                'aria-label': leftLabel,
                className: (0, _classnames.default)(carouselFlipperStyleSet + '', filmStyleSet.leftFlipper + ''),
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
                'aria-label': rightLabel,
                className: (0, _classnames.default)(carouselFlipperStyleSet + '', filmStyleSet.rightFlipper + ''),
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

cov_r9x24gsbt.s[8]++;
CarouselLayout.defaultProps = {
  children: undefined,
  timestampClassName: ''
};
cov_r9x24gsbt.s[9]++;
CarouselLayout.propTypes = {
  activity: _propTypes.default.any.isRequired,
  children: _propTypes.default.any,
  timestampClassName: _propTypes.default.string
};
var _default = CarouselLayout;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9DYXJvdXNlbExheW91dC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJDYXJvdXNlbExheW91dCIsImFjdGl2aXR5IiwiY2hpbGRyZW4iLCJ0aW1lc3RhbXBDbGFzc05hbWUiLCJjYXJvdXNlbEZsaXBwZXJTdHlsZVNldCIsImNhcm91c2VsRmxpcHBlciIsImxlZnRMYWJlbCIsInJpZ2h0TGFiZWwiLCJmaWxtU3R5bGVTZXQiLCJjdXJzb3IiLCJSZWFjdCIsIkNoaWxkcmVuIiwiY291bnQiLCJzY3JvbGxCYXJXaWR0aCIsImNhcm91c2VsIiwibGVmdEZsaXBwZXIiLCJyaWdodEZsaXBwZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsMEJBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRSxRQURTO0FBRW5CQyxFQUFBQSxRQUFRLEVBQUU7QUFGUyxDQUFKLENBQUgsQ0FBZDs7O0FBS0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCO0FBQUE7O0FBQUEscUNBQ2QsMkJBRGM7QUFBQTtBQUFBLE1BQzNDQyx1QkFEMkMsWUFDNURDLGVBRDREOztBQUVyRSxNQUFNQyxTQUFTLDBCQUFHLDBCQUFZLE1BQVosQ0FBSCxDQUFmO0FBQ0EsTUFBTUMsVUFBVSwwQkFBRywwQkFBWSxPQUFaLENBQUgsQ0FBaEI7QUFFQSxNQUFNQyxZQUFZLDBCQUFHLG9DQUFvQjtBQUFFQyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFwQixDQUFILENBQWxCO0FBTHFFO0FBT3JFLFNBQ0UsNkJBQUMsbUJBQUQ7QUFBVSxJQUFBLFFBQVEsRUFBRUMsZUFBTUMsUUFBTixDQUFlQyxLQUFmLENBQXFCVixRQUFyQjtBQUFwQixLQUNFLDZCQUFDLGtCQUFELENBQWEsUUFBYixRQUNHLGlCQUNDO0FBQUEsUUFERVcsY0FDRixTQURFQSxjQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUssTUFBQSxTQUFTLEVBQUUseUJBQVdoQixRQUFRLEdBQUcsRUFBdEIsRUFBMEJXLFlBQVksQ0FBQ00sUUFBYixHQUF3QixFQUFsRDtBQUFoQixPQUNFLDZCQUFDLDBCQUFEO0FBQW1CLE1BQUEsUUFBUSxFQUFFYixRQUE3QjtBQUF1QyxNQUFBLGtCQUFrQixFQUFFRTtBQUEzRCxPQUNHRCxRQURILENBREYsRUFJRywwQkFBQVcsY0FBYyxLQUFLLE1BQW5CLCtCQUNDLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMsa0JBQUQ7QUFDRSxvQkFBWVAsU0FEZDtBQUVFLE1BQUEsU0FBUyxFQUFFLHlCQUFXRix1QkFBdUIsR0FBRyxFQUFyQyxFQUF5Q0ksWUFBWSxDQUFDTyxXQUFiLEdBQTJCLEVBQXBFLENBRmI7QUFHRSxNQUFBLElBQUksRUFBQztBQUhQLE9BS0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQXlCLEdBQXpCLENBTEYsQ0FERixFQVFFLDZCQUFDLGtCQUFEO0FBQ0Usb0JBQVlSLFVBRGQ7QUFFRSxNQUFBLFNBQVMsRUFBRSx5QkFBV0gsdUJBQXVCLEdBQUcsRUFBckMsRUFBeUNJLFlBQVksQ0FBQ1EsWUFBYixHQUE0QixFQUFyRSxDQUZiO0FBR0UsTUFBQSxJQUFJLEVBQUM7QUFIUCxPQUtFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUF5QixHQUF6QixDQUxGLENBUkYsQ0FERCxDQUpIO0FBc0JNLEdBeEJWLENBREYsQ0FERjtBQStCRCxDQXRDRDs7O0FBd0NBaEIsY0FBYyxDQUFDaUIsWUFBZixHQUE4QjtBQUM1QmYsRUFBQUEsUUFBUSxFQUFFZ0IsU0FEa0I7QUFFNUJmLEVBQUFBLGtCQUFrQixFQUFFO0FBRlEsQ0FBOUI7O0FBS0FILGNBQWMsQ0FBQ21CLFNBQWYsR0FBMkI7QUFDekJsQixFQUFBQSxRQUFRLEVBQUVtQixtQkFBVUMsR0FBVixDQUFjQyxVQURDO0FBRXpCcEIsRUFBQUEsUUFBUSxFQUFFa0IsbUJBQVVDLEdBRks7QUFHekJsQixFQUFBQSxrQkFBa0IsRUFBRWlCLG1CQUFVRztBQUhMLENBQTNCO2VBTWV2QixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zZXIsIENvbnRleHQgYXMgRmlsbUNvbnRleHQsIGNyZWF0ZUJhc2ljU3R5bGVTZXQsIEZsaXBwZXIgfSBmcm9tICdyZWFjdC1maWxtJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2Fyb3VzZWxGaWxtU3RyaXAgZnJvbSAnLi9DYXJvdXNlbEZpbG1TdHJpcCc7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KTtcblxuY29uc3QgQ2Fyb3VzZWxMYXlvdXQgPSAoeyBhY3Rpdml0eSwgY2hpbGRyZW4sIHRpbWVzdGFtcENsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IFt7IGNhcm91c2VsRmxpcHBlcjogY2Fyb3VzZWxGbGlwcGVyU3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuICBjb25zdCBsZWZ0TGFiZWwgPSB1c2VMb2NhbGl6ZSgnTGVmdCcpO1xuICBjb25zdCByaWdodExhYmVsID0gdXNlTG9jYWxpemUoJ1JpZ2h0Jyk7XG5cbiAgY29uc3QgZmlsbVN0eWxlU2V0ID0gY3JlYXRlQmFzaWNTdHlsZVNldCh7IGN1cnNvcjogbnVsbCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb3NlciBudW1JdGVtcz17UmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pfT5cbiAgICAgIDxGaWxtQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IHNjcm9sbEJhcldpZHRoIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBmaWxtU3R5bGVTZXQuY2Fyb3VzZWwgKyAnJyl9PlxuICAgICAgICAgICAgPENhcm91c2VsRmlsbVN0cmlwIGFjdGl2aXR5PXthY3Rpdml0eX0gdGltZXN0YW1wQ2xhc3NOYW1lPXt0aW1lc3RhbXBDbGFzc05hbWV9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0Nhcm91c2VsRmlsbVN0cmlwPlxuICAgICAgICAgICAge3Njcm9sbEJhcldpZHRoICE9PSAnMTAwJScgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEZsaXBwZXJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xlZnRMYWJlbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjYXJvdXNlbEZsaXBwZXJTdHlsZVNldCArICcnLCBmaWxtU3R5bGVTZXQubGVmdEZsaXBwZXIgKyAnJyl9XG4gICAgICAgICAgICAgICAgICBtb2RlPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj57JzwnfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmxpcHBlcj5cbiAgICAgICAgICAgICAgICA8RmxpcHBlclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17cmlnaHRMYWJlbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjYXJvdXNlbEZsaXBwZXJTdHlsZVNldCArICcnLCBmaWxtU3R5bGVTZXQucmlnaHRGbGlwcGVyICsgJycpfVxuICAgICAgICAgICAgICAgICAgbW9kZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPnsnPid9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GbGlwcGVyPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRmlsbUNvbnRleHQuQ29uc3VtZXI+XG4gICAgPC9Db21wb3Nlcj5cbiAgKTtcbn07XG5cbkNhcm91c2VsTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiAnJ1xufTtcblxuQ2Fyb3VzZWxMYXlvdXQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbExheW91dDtcbiJdfQ==
