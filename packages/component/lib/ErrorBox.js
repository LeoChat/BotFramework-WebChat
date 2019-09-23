'use strict';

var cov_12yxsqz0zo = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/ErrorBox.js';
  var hash = '2c7e3b0fc4354221a9b97de17ad006dbbc23921d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/ErrorBox.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 16,
          column: 1
        }
      },
      '1': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 15,
          column: 19
        }
      },
      '2': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 21,
          column: 2
        }
      },
      '3': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 30,
          column: 2
        }
      },
      '4': {
        start: {
          line: 32,
          column: 61
        },
        end: {
          line: 32,
          column: 83
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 8,
            column: 18
          }
        },
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 15,
            column: 19
          }
        },
        line: 9
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 32,
            column: 32
          },
          end: {
            line: 32,
            column: 33
          }
        },
        loc: {
          start: {
            line: 32,
            column: 61
          },
          end: {
            line: 32,
            column: 83
          }
        },
        line: 32
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
    hash: '2c7e3b0fc4354221a9b97de17ad006dbbc23921d'
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

var _Localize = require('./Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('./ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_12yxsqz0zo.s[0]++;

var ErrorBox = function ErrorBox(_ref) {
  var children = _ref.children,
    language = _ref.language,
    message = _ref.message,
    styleSet = _ref.styleSet;
  cov_12yxsqz0zo.f[0]++;
  cov_12yxsqz0zo.s[1]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: (0, _Localize.localize)('ErrorMessage', language)
    }),
    _react.default.createElement(
      'div',
      {
        className: styleSet.errorBox
      },
      _react.default.createElement('div', null, message),
      _react.default.createElement('div', null, children)
    )
  );
};

cov_12yxsqz0zo.s[2]++;
ErrorBox.defaultProps = {
  children: undefined,
  message: ''
};
cov_12yxsqz0zo.s[3]++;
ErrorBox.propTypes = {
  children: _propTypes.default.any,
  language: _propTypes.default.string.isRequired,
  message: _propTypes.default.string,
  styleSet: _propTypes.default.shape({
    errorBox: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language,
    styleSet = _ref2.styleSet;
  cov_12yxsqz0zo.f[1]++;
  cov_12yxsqz0zo.s[4]++;
  return {
    language: language,
    styleSet: styleSet
  };
})(ErrorBox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckJveC5qcyJdLCJuYW1lcyI6WyJFcnJvckJveCIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJtZXNzYWdlIiwic3R5bGVTZXQiLCJlcnJvckJveCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQ2Y7QUFBQSxNQURrQkMsUUFDbEIsUUFEa0JBLFFBQ2xCO0FBQUEsTUFENEJDLFFBQzVCLFFBRDRCQSxRQUM1QjtBQUFBLE1BRHNDQyxPQUN0QyxRQURzQ0EsT0FDdEM7QUFBQSxNQUQrQ0MsUUFDL0MsUUFEK0NBLFFBQy9DO0FBQUE7QUFBQTtBQUFBLHNDQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUUsd0JBQVMsY0FBVCxFQUF5QkYsUUFBekI7QUFBeEIsSUFERixFQUVFO0FBQUssSUFBQSxTQUFTLEVBQUVFLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRSwwQ0FBTUYsT0FBTixDQURGLEVBRUUsMENBQU1GLFFBQU4sQ0FGRixDQUZGO0FBTWlCLENBUG5COzs7QUFVQUQsUUFBUSxDQUFDTSxZQUFULEdBQXdCO0FBQ3RCTCxFQUFBQSxRQUFRLEVBQUVNLFNBRFk7QUFFdEJKLEVBQUFBLE9BQU8sRUFBRTtBQUZhLENBQXhCOztBQUtBSCxRQUFRLENBQUNRLFNBQVQsR0FBcUI7QUFDbkJQLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVDLEdBREQ7QUFFbkJSLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVFLE1BQVYsQ0FBaUJDLFVBRlI7QUFHbkJULEVBQUFBLE9BQU8sRUFBRU0sbUJBQVVFLE1BSEE7QUFJbkJQLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDeEJSLElBQUFBLFFBQVEsRUFBRUksbUJBQVVDLEdBQVYsQ0FBY0U7QUFEQSxHQUFoQixFQUVQQTtBQU5nQixDQUFyQjs7ZUFTZSwrQkFBaUIsaUJBQTZCO0FBQUEsTUFBMUJWLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCRSxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUYsSUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlFLElBQUFBLFFBQVEsRUFBUkE7QUFBWjtBQUFzQixDQUFwRSxFQUF1RUosUUFBdkUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuL1NjcmVlblJlYWRlclRleHQnO1xuXG5jb25zdCBFcnJvckJveCA9ICh7IGNoaWxkcmVuLCBsYW5ndWFnZSwgbWVzc2FnZSwgc3R5bGVTZXQgfSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemUoJ0Vycm9yTWVzc2FnZScsIGxhbmd1YWdlKX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVTZXQuZXJyb3JCb3h9PlxuICAgICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuRXJyb3JCb3guZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBtZXNzYWdlOiAnJ1xufTtcblxuRXJyb3JCb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZXJyb3JCb3g6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSA9PiAoeyBsYW5ndWFnZSwgc3R5bGVTZXQgfSkpKEVycm9yQm94KTtcbiJdfQ==
