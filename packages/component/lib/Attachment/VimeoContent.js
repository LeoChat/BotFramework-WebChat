'use strict';

var cov_2curnqu27e = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/VimeoContent.js';
  var hash = 'cb9d2a2dbd054944c7bd7c3fada7f9852751180f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/VimeoContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 26,
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
          column: 17
        },
        end: {
          line: 16,
          column: 15
        }
      },
      '3': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 25,
          column: 4
        }
      },
      '4': {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 32,
          column: 2
        }
      },
      '5': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 39,
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
            column: 59
          },
          end: {
            line: 26,
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
            line: 13,
            column: 10
          },
          end: {
            line: 13,
            column: 22
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 13,
              column: 17
            },
            end: {
              line: 13,
              column: 18
            }
          },
          {
            start: {
              line: 13,
              column: 21
            },
            end: {
              line: 13,
              column: 22
            }
          }
        ],
        line: 13
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
    hash: 'cb9d2a2dbd054944c7bd7c3fada7f9852751180f'
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

cov_2curnqu27e.s[0]++;

var VimeoContent = function VimeoContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop;
  cov_2curnqu27e.f[0]++;

  var _ref2 = (cov_2curnqu27e.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    vimeoContentStyleSet = _ref3[0].vimeoContent;

  var search =
    (cov_2curnqu27e.s[2]++,
    new URLSearchParams({
      autoplay: autoPlay ? (cov_2curnqu27e.b[0][0]++, 1) : (cov_2curnqu27e.b[0][1]++, 0),
      badge: 0,
      byline: 0,
      loop: loop ? (cov_2curnqu27e.b[1][0]++, 1) : (cov_2curnqu27e.b[1][1]++, 0),
      portrait: 0,
      title: 0
    }).toString());
  cov_2curnqu27e.s[3]++;
  return _react.default.createElement('iframe', {
    allowFullScreen: true,
    'aria-label': alt,
    className: vimeoContentStyleSet,
    src: 'https://player.vimeo.com/video/'.concat(encodeURI(embedID), '?').concat(search)
  });
};

cov_2curnqu27e.s[4]++;
VimeoContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false
};
cov_2curnqu27e.s[5]++;
VimeoContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  embedID: _propTypes.default.string.isRequired,
  loop: _propTypes.default.bool
};
var _default = VimeoContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpbWVvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJWaW1lb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImVtYmVkSUQiLCJsb29wIiwidmltZW9Db250ZW50U3R5bGVTZXQiLCJ2aW1lb0NvbnRlbnQiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJhdXRvcGxheSIsImJhZGdlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJ0aXRsZSIsInRvU3RyaW5nIiwiZW5jb2RlVVJJIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0M7QUFBQSxNQUFuQ0MsR0FBbUMsUUFBbkNBLEdBQW1DO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQTs7QUFBQSxzQ0FDUiwyQkFEUTtBQUFBO0FBQUEsTUFDbENDLG9CQURrQyxZQUNoREMsWUFEZ0Q7O0FBR3pELE1BQU1DLE1BQU0sMkJBQUcsSUFBSUMsZUFBSixDQUFvQjtBQUNqQ0MsSUFBQUEsUUFBUSxFQUFFUCxRQUFRLDhCQUFHLENBQUgsK0JBQU8sQ0FBUCxDQURlO0FBRWpDUSxJQUFBQSxLQUFLLEVBQUUsQ0FGMEI7QUFHakNDLElBQUFBLE1BQU0sRUFBRSxDQUh5QjtBQUlqQ1AsSUFBQUEsSUFBSSxFQUFFQSxJQUFJLDhCQUFHLENBQUgsK0JBQU8sQ0FBUCxDQUp1QjtBQUtqQ1EsSUFBQUEsUUFBUSxFQUFFLENBTHVCO0FBTWpDQyxJQUFBQSxLQUFLLEVBQUU7QUFOMEIsR0FBcEIsRUFPWkMsUUFQWSxFQUFILENBQVo7QUFIeUQ7QUFZekQsU0FDRTtBQUNFLElBQUEsZUFBZSxFQUFFLElBRG5CO0FBRUUsa0JBQVliLEdBRmQ7QUFHRSxJQUFBLFNBQVMsRUFBRUksb0JBSGI7QUFJRSxJQUFBLEdBQUcsMkNBQW9DVSxTQUFTLENBQUNaLE9BQUQsQ0FBN0MsY0FBMERJLE1BQTFEO0FBSkwsSUFERjtBQVFELENBcEJEOzs7QUFzQkFQLFlBQVksQ0FBQ2dCLFlBQWIsR0FBNEI7QUFDMUJmLEVBQUFBLEdBQUcsRUFBRSxFQURxQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLEtBRmdCO0FBRzFCRSxFQUFBQSxJQUFJLEVBQUU7QUFIb0IsQ0FBNUI7O0FBTUFKLFlBQVksQ0FBQ2lCLFNBQWIsR0FBeUI7QUFDdkJoQixFQUFBQSxHQUFHLEVBQUVpQixtQkFBVUMsTUFEUTtBQUV2QmpCLEVBQUFBLFFBQVEsRUFBRWdCLG1CQUFVRSxJQUZHO0FBR3ZCakIsRUFBQUEsT0FBTyxFQUFFZSxtQkFBVUMsTUFBVixDQUFpQkUsVUFISDtBQUl2QmpCLEVBQUFBLElBQUksRUFBRWMsbUJBQVVFO0FBSk8sQ0FBekI7ZUFPZXBCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgVmltZW9Db250ZW50ID0gKHsgYWx0LCBhdXRvUGxheSwgZW1iZWRJRCwgbG9vcCB9KSA9PiB7XG4gIGNvbnN0IFt7IHZpbWVvQ29udGVudDogdmltZW9Db250ZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIGF1dG9wbGF5OiBhdXRvUGxheSA/IDEgOiAwLFxuICAgIGJhZGdlOiAwLFxuICAgIGJ5bGluZTogMCxcbiAgICBsb29wOiBsb29wID8gMSA6IDAsXG4gICAgcG9ydHJhaXQ6IDAsXG4gICAgdGl0bGU6IDBcbiAgfSkudG9TdHJpbmcoKTtcblxuICByZXR1cm4gKFxuICAgIDxpZnJhbWVcbiAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX1cbiAgICAgIGFyaWEtbGFiZWw9e2FsdH1cbiAgICAgIGNsYXNzTmFtZT17dmltZW9Db250ZW50U3R5bGVTZXR9XG4gICAgICBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtlbmNvZGVVUkkoZW1iZWRJRCl9PyR7c2VhcmNofWB9XG4gICAgLz5cbiAgKTtcbn07XG5cblZpbWVvQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgbG9vcDogZmFsc2Vcbn07XG5cblZpbWVvQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBlbWJlZElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaW1lb0NvbnRlbnQ7XG4iXX0=
