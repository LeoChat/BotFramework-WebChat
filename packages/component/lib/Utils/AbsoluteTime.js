'use strict';

var cov_11m81xrzni = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/AbsoluteTime.js';
  var hash = 'cc2c51731ad1fc89946af0525de11aea10111908';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/AbsoluteTime.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 21
        },
        end: {
          line: 19,
          column: 1
        }
      },
      '1': {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 46
        }
      },
      '2': {
        start: {
          line: 11,
          column: 15
        },
        end: {
          line: 11,
          column: 52
        }
      },
      '3': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      '4': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 9
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
    hash: 'cc2c51731ad1fc89946af0525de11aea10111908'
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

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useLocalizeDate = _interopRequireDefault(require('../hooks/useLocalizeDate'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_11m81xrzni.s[0]++;

var AbsoluteTime = function AbsoluteTime(_ref) {
  var value = _ref.value;
  cov_11m81xrzni.f[0]++;
  var localizedTime = (cov_11m81xrzni.s[1]++, (0, _useLocalizeDate.default)(value));
  var text = (cov_11m81xrzni.s[2]++, (0, _useLocalize.default)('SentAt') + localizedTime);
  cov_11m81xrzni.s[3]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: text
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

cov_11m81xrzni.s[4]++;
AbsoluteTime.propTypes = {
  value: _propTypes.default.string.isRequired
};
var _default = AbsoluteTime;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9BYnNvbHV0ZVRpbWUuanMiXSwibmFtZXMiOlsiQWJzb2x1dGVUaW1lIiwidmFsdWUiLCJsb2NhbGl6ZWRUaW1lIiwidGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFBQTtBQUNsQyxNQUFNQyxhQUFhLDJCQUFHLDhCQUFnQkQsS0FBaEIsQ0FBSCxDQUFuQjtBQUNBLE1BQU1FLElBQUksMkJBQUcsMEJBQVksUUFBWixJQUF3QkQsYUFBM0IsQ0FBVjtBQUZrQztBQUlsQyxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDO0FBQXhCLElBREYsRUFFRTtBQUFNLG1CQUFhO0FBQW5CLEtBQTBCRCxhQUExQixDQUZGLENBREY7QUFNRCxDQVZEOzs7QUFZQUYsWUFBWSxDQUFDSSxTQUFiLEdBQXlCO0FBQ3ZCSCxFQUFBQSxLQUFLLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQztBQURELENBQXpCO2VBSWVQLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5cbmltcG9ydCB1c2VMb2NhbGl6ZSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGl6ZSc7XG5pbXBvcnQgdXNlTG9jYWxpemVEYXRlIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplRGF0ZSc7XG5cbmNvbnN0IEFic29sdXRlVGltZSA9ICh7IHZhbHVlIH0pID0+IHtcbiAgY29uc3QgbG9jYWxpemVkVGltZSA9IHVzZUxvY2FsaXplRGF0ZSh2YWx1ZSk7XG4gIGNvbnN0IHRleHQgPSB1c2VMb2NhbGl6ZSgnU2VudEF0JykgKyBsb2NhbGl6ZWRUaW1lO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17dGV4dH0gLz5cbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXt0cnVlfT57bG9jYWxpemVkVGltZX08L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbkFic29sdXRlVGltZS5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFic29sdXRlVGltZTtcbiJdfQ==
