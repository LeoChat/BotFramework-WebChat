'use strict';

var cov_1s0rdrqjy = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/YouTubeContent.js';
  var hash = 'ec6f9705e2b0cd911c5c75b4353535bd85797001';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/YouTubeContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 24,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 55
        },
        end: {
          line: 7,
          column: 68
        }
      },
      '2': {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 13,
          column: 15
        }
      },
      '3': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      },
      '4': {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 30,
          column: 2
        }
      },
      '5': {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 37,
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
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 61
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 14
          },
          end: {
            line: 10,
            column: 30
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 10,
              column: 25
            },
            end: {
              line: 10,
              column: 26
            }
          },
          {
            start: {
              line: 10,
              column: 29
            },
            end: {
              line: 10,
              column: 30
            }
          }
        ],
        line: 10
      },
      '1': {
        loc: {
          start: {
            line: 11,
            column: 10
          },
          end: {
            line: 11,
            column: 22
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 17
            },
            end: {
              line: 11,
              column: 18
            }
          },
          {
            start: {
              line: 11,
              column: 21
            },
            end: {
              line: 11,
              column: 22
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
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'ec6f9705e2b0cd911c5c75b4353535bd85797001'
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

cov_1s0rdrqjy.s[0]++;

var YouTubeContent = function YouTubeContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop;
  cov_1s0rdrqjy.f[0]++;

  var _ref2 = (cov_1s0rdrqjy.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    youTubeContentStyleSet = _ref3[0].youTubeContent;

  var search =
    (cov_1s0rdrqjy.s[2]++,
    new URLSearchParams({
      autoplay: autoPlay ? (cov_1s0rdrqjy.b[0][0]++, 1) : (cov_1s0rdrqjy.b[0][1]++, 0),
      loop: loop ? (cov_1s0rdrqjy.b[1][0]++, 1) : (cov_1s0rdrqjy.b[1][1]++, 0),
      modestbranding: 1
    }).toString());
  cov_1s0rdrqjy.s[3]++;
  return (
    // TODO: We should encodeURI the URL
    _react.default.createElement('iframe', {
      allowFullScreen: true,
      'aria-label': alt,
      className: youTubeContentStyleSet,
      src: 'https://youtube.com/embed/'.concat(embedID, '?').concat(search)
    })
  );
};

cov_1s0rdrqjy.s[4]++;
YouTubeContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false
};
cov_1s0rdrqjy.s[5]++;
YouTubeContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  embedID: _propTypes.default.string.isRequired,
  loop: _propTypes.default.bool
};
var _default = YouTubeContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1lvdVR1YmVDb250ZW50LmpzIl0sIm5hbWVzIjpbIllvdVR1YmVDb250ZW50IiwiYWx0IiwiYXV0b1BsYXkiLCJlbWJlZElEIiwibG9vcCIsInlvdVR1YmVDb250ZW50U3R5bGVTZXQiLCJ5b3VUdWJlQ29udGVudCIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImF1dG9wbGF5IiwibW9kZXN0YnJhbmRpbmciLCJ0b1N0cmluZyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBc0M7QUFBQSxNQUFuQ0MsR0FBbUMsUUFBbkNBLEdBQW1DO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQTs7QUFBQSxxQ0FDTiwyQkFETTtBQUFBO0FBQUEsTUFDbENDLHNCQURrQyxZQUNsREMsY0FEa0Q7O0FBRzNELE1BQU1DLE1BQU0sMEJBQUcsSUFBSUMsZUFBSixDQUFvQjtBQUNqQ0MsSUFBQUEsUUFBUSxFQUFFUCxRQUFRLDZCQUFHLENBQUgsOEJBQU8sQ0FBUCxDQURlO0FBRWpDRSxJQUFBQSxJQUFJLEVBQUVBLElBQUksNkJBQUcsQ0FBSCw4QkFBTyxDQUFQLENBRnVCO0FBR2pDTSxJQUFBQSxjQUFjLEVBQUU7QUFIaUIsR0FBcEIsRUFJWkMsUUFKWSxFQUFILENBQVo7QUFIMkQ7QUFTM0QsU0FDRTtBQUNBO0FBQ0UsTUFBQSxlQUFlLEVBQUUsSUFEbkI7QUFFRSxvQkFBWVYsR0FGZDtBQUdFLE1BQUEsU0FBUyxFQUFFSSxzQkFIYjtBQUlFLE1BQUEsR0FBRyxzQ0FBK0JGLE9BQS9CLGNBQTBDSSxNQUExQztBQUpMO0FBRkY7QUFTRCxDQWxCRDs7O0FBb0JBUCxjQUFjLENBQUNZLFlBQWYsR0FBOEI7QUFDNUJYLEVBQUFBLEdBQUcsRUFBRSxFQUR1QjtBQUU1QkMsRUFBQUEsUUFBUSxFQUFFLEtBRmtCO0FBRzVCRSxFQUFBQSxJQUFJLEVBQUU7QUFIc0IsQ0FBOUI7O0FBTUFKLGNBQWMsQ0FBQ2EsU0FBZixHQUEyQjtBQUN6QlosRUFBQUEsR0FBRyxFQUFFYSxtQkFBVUMsTUFEVTtBQUV6QmIsRUFBQUEsUUFBUSxFQUFFWSxtQkFBVUUsSUFGSztBQUd6QmIsRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUMsTUFBVixDQUFpQkUsVUFIRDtBQUl6QmIsRUFBQUEsSUFBSSxFQUFFVSxtQkFBVUU7QUFKUyxDQUEzQjtlQU9laEIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBZb3VUdWJlQ29udGVudCA9ICh7IGFsdCwgYXV0b1BsYXksIGVtYmVkSUQsIGxvb3AgfSkgPT4ge1xuICBjb25zdCBbeyB5b3VUdWJlQ29udGVudDogeW91VHViZUNvbnRlbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgYXV0b3BsYXk6IGF1dG9QbGF5ID8gMSA6IDAsXG4gICAgbG9vcDogbG9vcCA/IDEgOiAwLFxuICAgIG1vZGVzdGJyYW5kaW5nOiAxXG4gIH0pLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBUT0RPOiBXZSBzaG91bGQgZW5jb2RlVVJJIHRoZSBVUkxcbiAgICA8aWZyYW1lXG4gICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgICBjbGFzc05hbWU9e3lvdVR1YmVDb250ZW50U3R5bGVTZXR9XG4gICAgICBzcmM9e2BodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLyR7ZW1iZWRJRH0/JHtzZWFyY2h9YH1cbiAgICAvPlxuICApO1xufTtcblxuWW91VHViZUNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBhdXRvUGxheTogZmFsc2UsXG4gIGxvb3A6IGZhbHNlXG59O1xuXG5Zb3VUdWJlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBlbWJlZElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBZb3VUdWJlQ29udGVudDtcbiJdfQ==
