'use strict';

var cov_1u56kuj2eq = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioContent.js';
  var hash = '201ffbabe1c31a10ca1efbf9503cee0af857d57b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 20,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 51
        },
        end: {
          line: 7,
          column: 64
        }
      },
      '2': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 19,
          column: 4
        }
      },
      '3': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      },
      '4': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 35,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 22
          }
        },
        loc: {
          start: {
            line: 6,
            column: 63
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '201ffbabe1c31a10ca1efbf9503cee0af857d57b'
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

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

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

cov_1u56kuj2eq.s[0]++;

var AudioContent = function AudioContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src;
  cov_1u56kuj2eq.f[0]++;

  var _ref2 = (cov_1u56kuj2eq.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    audioContentStyleSet = _ref3[0].audioContent;

  cov_1u56kuj2eq.s[2]++;
  return _react.default.createElement('audio', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: audioContentStyleSet,
    controls: true,
    loop: loop,
    poster: poster,
    src: src
  });
};

cov_1u56kuj2eq.s[3]++;
AudioContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false,
  poster: ''
};
cov_1u56kuj2eq.s[4]++;
AudioContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  poster: _propTypes.default.string,
  src: _propTypes.default.string.isRequired
};
var _default = AudioContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImxvb3AiLCJwb3N0ZXIiLCJzcmMiLCJhdWRpb0NvbnRlbnRTdHlsZVNldCIsImF1ZGlvQ29udGVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTBDO0FBQUEsTUFBdkNDLEdBQXVDLFFBQXZDQSxHQUF1QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUFBOztBQUFBLHNDQUNaLDJCQURZO0FBQUE7QUFBQSxNQUN0Q0Msb0JBRHNDLFlBQ3BEQyxZQURvRDs7QUFBQTtBQUc3RCxTQUNFO0FBQ0Usa0JBQVlOLEdBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLElBQUEsU0FBUyxFQUFFSSxvQkFIYjtBQUlFLElBQUEsUUFBUSxFQUFFLElBSlo7QUFLRSxJQUFBLElBQUksRUFBRUgsSUFMUjtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxHQUFHLEVBQUVDO0FBUFAsSUFERjtBQVdELENBZEQ7OztBQWdCQUwsWUFBWSxDQUFDUSxZQUFiLEdBQTRCO0FBQzFCUCxFQUFBQSxHQUFHLEVBQUUsRUFEcUI7QUFFMUJDLEVBQUFBLFFBQVEsRUFBRSxLQUZnQjtBQUcxQkMsRUFBQUEsSUFBSSxFQUFFLEtBSG9CO0FBSTFCQyxFQUFBQSxNQUFNLEVBQUU7QUFKa0IsQ0FBNUI7O0FBT0FKLFlBQVksQ0FBQ1MsU0FBYixHQUF5QjtBQUN2QlIsRUFBQUEsR0FBRyxFQUFFUyxtQkFBVUMsTUFEUTtBQUV2QlQsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUUsSUFGRztBQUd2QlQsRUFBQUEsSUFBSSxFQUFFTyxtQkFBVUUsSUFITztBQUl2QlIsRUFBQUEsTUFBTSxFQUFFTSxtQkFBVUMsTUFKSztBQUt2Qk4sRUFBQUEsR0FBRyxFQUFFSyxtQkFBVUMsTUFBVixDQUFpQkU7QUFMQyxDQUF6QjtlQVFlYixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IEF1ZGlvQ29udGVudCA9ICh7IGFsdCwgYXV0b1BsYXksIGxvb3AsIHBvc3Rlciwgc3JjIH0pID0+IHtcbiAgY29uc3QgW3sgYXVkaW9Db250ZW50OiBhdWRpb0NvbnRlbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXVkaW9cbiAgICAgIGFyaWEtbGFiZWw9e2FsdH1cbiAgICAgIGF1dG9QbGF5PXthdXRvUGxheX1cbiAgICAgIGNsYXNzTmFtZT17YXVkaW9Db250ZW50U3R5bGVTZXR9XG4gICAgICBjb250cm9scz17dHJ1ZX1cbiAgICAgIGxvb3A9e2xvb3B9XG4gICAgICBwb3N0ZXI9e3Bvc3Rlcn1cbiAgICAgIHNyYz17c3JjfVxuICAgIC8+XG4gICk7XG59O1xuXG5BdWRpb0NvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBhdXRvUGxheTogZmFsc2UsXG4gIGxvb3A6IGZhbHNlLFxuICBwb3N0ZXI6ICcnXG59O1xuXG5BdWRpb0NvbnRlbnQucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF1dG9QbGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9vcDogUHJvcFR5cGVzLmJvb2wsXG4gIHBvc3RlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29udGVudDtcbiJdfQ==
