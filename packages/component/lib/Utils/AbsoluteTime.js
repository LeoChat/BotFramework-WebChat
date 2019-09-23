'use strict';

var cov_2qi892iqcc = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/AbsoluteTime.js';
  var hash = '1402163c75d5475638b42428e2f3a8240dd96e32';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/AbsoluteTime.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 17,
          column: 1
        }
      },
      '1': {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 56
        }
      },
      '2': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 16,
          column: 4
        }
      },
      '3': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 22,
          column: 2
        }
      },
      '4': {
        start: {
          line: 24,
          column: 51
        },
        end: {
          line: 24,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 21
          },
          end: {
            line: 8,
            column: 22
          }
        },
        loc: {
          start: {
            line: 8,
            column: 46
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 24,
            column: 33
          }
        },
        loc: {
          start: {
            line: 24,
            column: 51
          },
          end: {
            line: 24,
            column: 63
          }
        },
        line: 24
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
    hash: '1402163c75d5475638b42428e2f3a8240dd96e32'
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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_2qi892iqcc.s[0]++;

var AbsoluteTime = function AbsoluteTime(_ref) {
  var language = _ref.language,
    value = _ref.value;
  cov_2qi892iqcc.f[0]++;
  var localizedTime = (cov_2qi892iqcc.s[1]++, (0, _Localize.getLocaleString)(value, language));
  cov_2qi892iqcc.s[2]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: (0, _Localize.localize)('SentAt', language) + localizedTime
    }),
    _react.default.createElement(
      'span',
      {
        'aria-hidden': true
      },
      localizedTime
    )
  );
};

cov_2qi892iqcc.s[3]++;
AbsoluteTime.propTypes = {
  language: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language;
  cov_2qi892iqcc.f[1]++;
  cov_2qi892iqcc.s[4]++;
  return {
    language: language
  };
})(AbsoluteTime);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9BYnNvbHV0ZVRpbWUuanMiXSwibmFtZXMiOlsiQWJzb2x1dGVUaW1lIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsImxvY2FsaXplZFRpbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQUE7QUFDNUMsTUFBTUMsYUFBYSwyQkFBRywrQkFBZ0JELEtBQWhCLEVBQXVCRCxRQUF2QixDQUFILENBQW5CO0FBRDRDO0FBRzVDLFNBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRSx3QkFBUyxRQUFULEVBQW1CQSxRQUFuQixJQUErQkU7QUFBdkQsSUFERixFQUVFO0FBQU0sbUJBQWE7QUFBbkIsS0FBMEJBLGFBQTFCLENBRkYsQ0FERjtBQU1ELENBVEQ7OztBQVdBSCxZQUFZLENBQUNJLFNBQWIsR0FBeUI7QUFDdkJILEVBQUFBLFFBQVEsRUFBRUksbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFdkJMLEVBQUFBLEtBQUssRUFBRUcsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBRkQsQ0FBekI7O2VBS2UsK0JBQWlCLGlCQUFtQjtBQUFBLE1BQWhCTixRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURELFlBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0TG9jYWxlU3RyaW5nLCBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuXG5jb25zdCBBYnNvbHV0ZVRpbWUgPSAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xuICBjb25zdCBsb2NhbGl6ZWRUaW1lID0gZ2V0TG9jYWxlU3RyaW5nKHZhbHVlLCBsYW5ndWFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtsb2NhbGl6ZSgnU2VudEF0JywgbGFuZ3VhZ2UpICsgbG9jYWxpemVkVGltZX0gLz5cbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXt0cnVlfT57bG9jYWxpemVkVGltZX08L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbkFic29sdXRlVGltZS5wcm9wVHlwZXMgPSB7XG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgbGFuZ3VhZ2UgfSkgPT4gKHsgbGFuZ3VhZ2UgfSkpKEFic29sdXRlVGltZSk7XG4iXX0=
