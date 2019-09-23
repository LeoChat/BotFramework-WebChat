'use strict';

var cov_xwxx55xfo = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/SayAlt.js';
  var hash = 'f383634ab7b2caa96c7038392fbb586b24766b24';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Activity/SayAlt.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 9,
          column: 2
        }
      },
      '1': {
        start: {
          line: 11,
          column: 15
        },
        end: {
          line: 11,
          column: 80
        }
      },
      '2': {
        start: {
          line: 11,
          column: 30
        },
        end: {
          line: 11,
          column: 80
        }
      },
      '3': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      '4': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 16
          }
        },
        loc: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 80
          }
        },
        line: 11
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 30
            },
            end: {
              line: 11,
              column: 37
            }
          },
          {
            start: {
              line: 11,
              column: 41
            },
            end: {
              line: 11,
              column: 80
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
      '4': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'f383634ab7b2caa96c7038392fbb586b24766b24'
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

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// TODO: [P3] Although this is for development purpose, prettify it
var ROOT_CSS =
  (cov_xwxx55xfo.s[0]++,
  (0, _glamor.css)({
    color: 'Red',
    margin: 0
  }));
cov_xwxx55xfo.s[1]++;

var SayAlt = function SayAlt(_ref) {
  var speak = _ref.speak;
  cov_xwxx55xfo.f[0]++;
  cov_xwxx55xfo.s[2]++;
  return (
    (cov_xwxx55xfo.b[0][0]++, !!speak) &&
    (cov_xwxx55xfo.b[0][1]++,
    _react.default.createElement(
      'pre',
      {
        className: ROOT_CSS
      },
      speak
    ))
  );
};

cov_xwxx55xfo.s[3]++;
SayAlt.defaultProps = {
  speak: ''
};
cov_xwxx55xfo.s[4]++;
SayAlt.propTypes = {
  speak: _propTypes.default.string
};
var _default = SayAlt;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TYXlBbHQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJjb2xvciIsIm1hcmdpbiIsIlNheUFsdCIsInNwZWFrIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxRQUFRLDBCQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxLQUFLLEVBQUUsS0FEWTtBQUVuQkMsRUFBQUEsTUFBTSxFQUFFO0FBRlcsQ0FBSixDQUFILENBQWQ7OztBQUtBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFBQTtBQUFBO0FBQUEsb0NBQUMsQ0FBQ0EsS0FBRiwrQkFBVztBQUFLLElBQUEsU0FBUyxFQUFFSjtBQUFoQixLQUEyQkksS0FBM0IsQ0FBWDtBQUFrRCxDQUFoRjs7O0FBRUFELE1BQU0sQ0FBQ0UsWUFBUCxHQUFzQjtBQUNwQkQsRUFBQUEsS0FBSyxFQUFFO0FBRGEsQ0FBdEI7O0FBSUFELE1BQU0sQ0FBQ0csU0FBUCxHQUFtQjtBQUNqQkYsRUFBQUEsS0FBSyxFQUFFRyxtQkFBVUM7QUFEQSxDQUFuQjtlQUllTCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBUT0RPOiBbUDNdIEFsdGhvdWdoIHRoaXMgaXMgZm9yIGRldmVsb3BtZW50IHB1cnBvc2UsIHByZXR0aWZ5IGl0XG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGNvbG9yOiAnUmVkJyxcbiAgbWFyZ2luOiAwXG59KTtcblxuY29uc3QgU2F5QWx0ID0gKHsgc3BlYWsgfSkgPT4gISFzcGVhayAmJiA8cHJlIGNsYXNzTmFtZT17Uk9PVF9DU1N9PntzcGVha308L3ByZT47XG5cblNheUFsdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNwZWFrOiAnJ1xufTtcblxuU2F5QWx0LnByb3BUeXBlcyA9IHtcbiAgc3BlYWs6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNheUFsdDtcbiJdfQ==
