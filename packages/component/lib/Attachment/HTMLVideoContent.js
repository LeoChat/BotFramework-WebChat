'use strict';

var cov_16qyhsljtr = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/HTMLVideoContent.js';
  var hash = 'a146b3351e60353efa91880a788a1ed0f55fd0d3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/HTMLVideoContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 25
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
            column: 25
          },
          end: {
            line: 6,
            column: 26
          }
        },
        loc: {
          start: {
            line: 6,
            column: 67
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
    hash: 'a146b3351e60353efa91880a788a1ed0f55fd0d3'
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

cov_16qyhsljtr.s[0]++;

var HTMLVideoContent = function HTMLVideoContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src;
  cov_16qyhsljtr.f[0]++;

  var _ref2 = (cov_16qyhsljtr.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    videoContentStyleSet = _ref3[0].videoContent;

  cov_16qyhsljtr.s[2]++;
  return _react.default.createElement('video', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: videoContentStyleSet,
    controls: true,
    loop: loop,
    poster: poster,
    src: src
  });
};

cov_16qyhsljtr.s[3]++;
HTMLVideoContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false,
  poster: ''
};
cov_16qyhsljtr.s[4]++;
HTMLVideoContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  poster: _propTypes.default.string,
  src: _propTypes.default.string.isRequired
};
var _default = HTMLVideoContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0hUTUxWaWRlb0NvbnRlbnQuanMiXSwibmFtZXMiOlsiSFRNTFZpZGVvQ29udGVudCIsImFsdCIsImF1dG9QbGF5IiwibG9vcCIsInBvc3RlciIsInNyYyIsInZpZGVvQ29udGVudFN0eWxlU2V0IiwidmlkZW9Db250ZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUEwQztBQUFBLE1BQXZDQyxHQUF1QyxRQUF2Q0EsR0FBdUM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFBQTs7QUFBQSxzQ0FDaEIsMkJBRGdCO0FBQUE7QUFBQSxNQUMxQ0Msb0JBRDBDLFlBQ3hEQyxZQUR3RDs7QUFBQTtBQUdqRSxTQUNFO0FBQ0Usa0JBQVlOLEdBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLElBQUEsU0FBUyxFQUFFSSxvQkFIYjtBQUlFLElBQUEsUUFBUSxFQUFFLElBSlo7QUFLRSxJQUFBLElBQUksRUFBRUgsSUFMUjtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxHQUFHLEVBQUVDO0FBUFAsSUFERjtBQVdELENBZEQ7OztBQWdCQUwsZ0JBQWdCLENBQUNRLFlBQWpCLEdBQWdDO0FBQzlCUCxFQUFBQSxHQUFHLEVBQUUsRUFEeUI7QUFFOUJDLEVBQUFBLFFBQVEsRUFBRSxLQUZvQjtBQUc5QkMsRUFBQUEsSUFBSSxFQUFFLEtBSHdCO0FBSTlCQyxFQUFBQSxNQUFNLEVBQUU7QUFKc0IsQ0FBaEM7O0FBT0FKLGdCQUFnQixDQUFDUyxTQUFqQixHQUE2QjtBQUMzQlIsRUFBQUEsR0FBRyxFQUFFUyxtQkFBVUMsTUFEWTtBQUUzQlQsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUUsSUFGTztBQUczQlQsRUFBQUEsSUFBSSxFQUFFTyxtQkFBVUUsSUFIVztBQUkzQlIsRUFBQUEsTUFBTSxFQUFFTSxtQkFBVUMsTUFKUztBQUszQk4sRUFBQUEsR0FBRyxFQUFFSyxtQkFBVUMsTUFBVixDQUFpQkU7QUFMSyxDQUE3QjtlQVFlYixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBIVE1MVmlkZW9Db250ZW50ID0gKHsgYWx0LCBhdXRvUGxheSwgbG9vcCwgcG9zdGVyLCBzcmMgfSkgPT4ge1xuICBjb25zdCBbeyB2aWRlb0NvbnRlbnQ6IHZpZGVvQ29udGVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDx2aWRlb1xuICAgICAgYXJpYS1sYWJlbD17YWx0fVxuICAgICAgYXV0b1BsYXk9e2F1dG9QbGF5fVxuICAgICAgY2xhc3NOYW1lPXt2aWRlb0NvbnRlbnRTdHlsZVNldH1cbiAgICAgIGNvbnRyb2xzPXt0cnVlfVxuICAgICAgbG9vcD17bG9vcH1cbiAgICAgIHBvc3Rlcj17cG9zdGVyfVxuICAgICAgc3JjPXtzcmN9XG4gICAgLz5cbiAgKTtcbn07XG5cbkhUTUxWaWRlb0NvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBhdXRvUGxheTogZmFsc2UsXG4gIGxvb3A6IGZhbHNlLFxuICBwb3N0ZXI6ICcnXG59O1xuXG5IVE1MVmlkZW9Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sLFxuICBwb3N0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MVmlkZW9Db250ZW50O1xuIl19
