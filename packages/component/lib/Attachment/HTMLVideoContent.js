'use strict';

var cov_225e204fqy = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/HTMLVideoContent.js';
  var hash = '4a7433adfdb8382226719b480c34313904fcfc39';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/HTMLVideoContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 16,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      '2': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      '3': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 34,
          column: 2
        }
      },
      '4': {
        start: {
          line: 36,
          column: 51
        },
        end: {
          line: 36,
          column: 63
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
            line: 7,
            column: 2
          },
          end: {
            line: 15,
            column: 4
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 36,
            column: 33
          }
        },
        loc: {
          start: {
            line: 36,
            column: 51
          },
          end: {
            line: 36,
            column: 63
          }
        },
        line: 36
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
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '4a7433adfdb8382226719b480c34313904fcfc39'
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

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_225e204fqy.s[0]++;

var HTMLVideoContent = function HTMLVideoContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src,
    styleSet = _ref.styleSet;
  cov_225e204fqy.f[0]++;
  cov_225e204fqy.s[1]++;
  return _react.default.createElement('video', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: styleSet.videoContent,
    controls: true,
    loop: loop,
    poster: poster,
    src: src
  });
};

cov_225e204fqy.s[2]++;
HTMLVideoContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false,
  poster: ''
};
cov_225e204fqy.s[3]++;
HTMLVideoContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  poster: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    videoContent: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_225e204fqy.f[1]++;
  cov_225e204fqy.s[4]++;
  return {
    styleSet: styleSet
  };
})(HTMLVideoContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0hUTUxWaWRlb0NvbnRlbnQuanMiXSwibmFtZXMiOlsiSFRNTFZpZGVvQ29udGVudCIsImFsdCIsImF1dG9QbGF5IiwibG9vcCIsInBvc3RlciIsInNyYyIsInN0eWxlU2V0IiwidmlkZW9Db250ZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FDdkI7QUFBQSxNQUQwQkMsR0FDMUIsUUFEMEJBLEdBQzFCO0FBQUEsTUFEK0JDLFFBQy9CLFFBRCtCQSxRQUMvQjtBQUFBLE1BRHlDQyxJQUN6QyxRQUR5Q0EsSUFDekM7QUFBQSxNQUQrQ0MsTUFDL0MsUUFEK0NBLE1BQy9DO0FBQUEsTUFEdURDLEdBQ3ZELFFBRHVEQSxHQUN2RDtBQUFBLE1BRDREQyxRQUM1RCxRQUQ0REEsUUFDNUQ7QUFBQTtBQUFBO0FBQUE7QUFDRSxrQkFBWUwsR0FEZDtBQUVFLElBQUEsUUFBUSxFQUFFQyxRQUZaO0FBR0UsSUFBQSxTQUFTLEVBQUVJLFFBQVEsQ0FBQ0MsWUFIdEI7QUFJRSxJQUFBLFFBQVEsRUFBRSxJQUpaO0FBS0UsSUFBQSxJQUFJLEVBQUVKLElBTFI7QUFNRSxJQUFBLE1BQU0sRUFBRUMsTUFOVjtBQU9FLElBQUEsR0FBRyxFQUFFQztBQVBQO0FBUUUsQ0FUSjs7O0FBWUFMLGdCQUFnQixDQUFDUSxZQUFqQixHQUFnQztBQUM5QlAsRUFBQUEsR0FBRyxFQUFFLEVBRHlCO0FBRTlCQyxFQUFBQSxRQUFRLEVBQUUsS0FGb0I7QUFHOUJDLEVBQUFBLElBQUksRUFBRSxLQUh3QjtBQUk5QkMsRUFBQUEsTUFBTSxFQUFFO0FBSnNCLENBQWhDOztBQU9BSixnQkFBZ0IsQ0FBQ1MsU0FBakIsR0FBNkI7QUFDM0JSLEVBQUFBLEdBQUcsRUFBRVMsbUJBQVVDLE1BRFk7QUFFM0JULEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVFLElBRk87QUFHM0JULEVBQUFBLElBQUksRUFBRU8sbUJBQVVFLElBSFc7QUFJM0JSLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVDLE1BSlM7QUFLM0JOLEVBQUFBLEdBQUcsRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJFLFVBTEs7QUFNM0JQLEVBQUFBLFFBQVEsRUFBRUksbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDeEJQLElBQUFBLFlBQVksRUFBRUcsbUJBQVVLLEdBQVYsQ0FBY0Y7QUFESixHQUFoQixFQUVQQTtBQVJ3QixDQUE3Qjs7ZUFXZSwrQkFBaUIsaUJBQW1CO0FBQUEsTUFBaEJQLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBWSxDQUFoRCxFQUFtRE4sZ0JBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IEhUTUxWaWRlb0NvbnRlbnQgPSAoeyBhbHQsIGF1dG9QbGF5LCBsb29wLCBwb3N0ZXIsIHNyYywgc3R5bGVTZXQgfSkgPT4gKFxuICA8dmlkZW9cbiAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgYXV0b1BsYXk9e2F1dG9QbGF5fVxuICAgIGNsYXNzTmFtZT17c3R5bGVTZXQudmlkZW9Db250ZW50fVxuICAgIGNvbnRyb2xzPXt0cnVlfVxuICAgIGxvb3A9e2xvb3B9XG4gICAgcG9zdGVyPXtwb3N0ZXJ9XG4gICAgc3JjPXtzcmN9XG4gIC8+XG4pO1xuXG5IVE1MVmlkZW9Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgYXV0b1BsYXk6IGZhbHNlLFxuICBsb29wOiBmYWxzZSxcbiAgcG9zdGVyOiAnJ1xufTtcblxuSFRNTFZpZGVvQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1BsYXk6IFByb3BUeXBlcy5ib29sLFxuICBsb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgcG9zdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdmlkZW9Db250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoSFRNTFZpZGVvQ29udGVudCk7XG4iXX0=
