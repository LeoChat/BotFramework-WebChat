'use strict';

var cov_2kpv11yzz8 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/SendButton.js';
  var hash = 'cfe42ea6a0abe421a54e116dcd9faeb05d23a381';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/SendButton.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 17,
          column: 3
        }
      },
      '1': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      '2': {
        start: {
          line: 11,
          column: 48
        },
        end: {
          line: 15,
          column: 5
        }
      },
      '3': {
        start: {
          line: 19,
          column: 19
        },
        end: {
          line: 27,
          column: 1
        }
      },
      '4': {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 20,
          column: 37
        }
      },
      '5': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      '6': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 31,
          column: 2
        }
      },
      '7': {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 36,
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
            column: 26
          },
          end: {
            line: 9,
            column: 27
          }
        },
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 10
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 48
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 11
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 19,
            column: 19
          },
          end: {
            line: 19,
            column: 20
          }
        },
        loc: {
          start: {
            line: 19,
            column: 52
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'cfe42ea6a0abe421a54e116dcd9faeb05d23a381'
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
exports.connectSendButton = exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _SendIcon = _interopRequireDefault(require('./Assets/SendIcon'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_2kpv11yzz8.s[0]++;

var connectSendButton = function connectSendButton() {
  cov_2kpv11yzz8.f[0]++;
  cov_2kpv11yzz8.s[1]++;

  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var disabled = _ref.disabled,
          language = _ref.language,
          submitSendBox = _ref.submitSendBox;
        cov_2kpv11yzz8.f[1]++;
        cov_2kpv11yzz8.s[2]++;
        return {
          disabled: disabled,
          language: language,
          submitSendBox: submitSendBox
        };
      }
    ].concat(selectors)
  );
};

exports.connectSendButton = connectSendButton;
cov_2kpv11yzz8.s[3]++;

var SendButton = function SendButton(_ref2) {
  var disabled = _ref2.disabled,
    submitSendBox = _ref2.submitSendBox;
  cov_2kpv11yzz8.f[2]++;
  var altText = (cov_2kpv11yzz8.s[4]++, (0, _useLocalize.default)('Send'));
  cov_2kpv11yzz8.s[5]++;
  return _react.default.createElement(
    _IconButton.default,
    {
      alt: altText,
      disabled: disabled,
      onClick: submitSendBox
    },
    _react.default.createElement(_SendIcon.default, null)
  );
};

cov_2kpv11yzz8.s[6]++;
SendButton.defaultProps = {
  disabled: false
};
cov_2kpv11yzz8.s[7]++;
SendButton.propTypes = {
  disabled: _propTypes.default.bool,
  submitSendBox: _propTypes.default.func.isRequired
};

var _default = connectSendButton()(SendButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1NlbmRCdXR0b24uanMiXSwibmFtZXMiOlsiY29ubmVjdFNlbmRCdXR0b24iLCJzZWxlY3RvcnMiLCJkaXNhYmxlZCIsImxhbmd1YWdlIiwic3VibWl0U2VuZEJveCIsIlNlbmRCdXR0b24iLCJhbHRUZXh0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FDeEI7QUFBQTtBQUFBOztBQUFBLG9DQUQ0QkMsU0FDNUI7QUFENEJBLElBQUFBLFNBQzVCO0FBQUE7O0FBQUEsa0RBQ0UsZ0JBQTRDO0FBQUEsUUFBekNDLFFBQXlDLFFBQXpDQSxRQUF5QztBQUFBLFFBQS9CQyxRQUErQixRQUEvQkEsUUFBK0I7QUFBQSxRQUFyQkMsYUFBcUIsUUFBckJBLGFBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQzFDRixNQUFBQSxRQUFRLEVBQVJBLFFBRDBDO0FBRTFDQyxNQUFBQSxRQUFRLEVBQVJBLFFBRjBDO0FBRzFDQyxNQUFBQSxhQUFhLEVBQWJBO0FBSDBDO0FBSTNDLEdBTEgsU0FNS0gsU0FOTDtBQU9DLENBUkg7Ozs7O0FBVUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBaUM7QUFBQSxNQUE5QkgsUUFBOEIsU0FBOUJBLFFBQThCO0FBQUEsTUFBcEJFLGFBQW9CLFNBQXBCQSxhQUFvQjtBQUFBO0FBQ2xELE1BQU1FLE9BQU8sMkJBQUcsMEJBQVksTUFBWixDQUFILENBQWI7QUFEa0Q7QUFHbEQsU0FDRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsR0FBRyxFQUFFQSxPQUFqQjtBQUEwQixJQUFBLFFBQVEsRUFBRUosUUFBcEM7QUFBOEMsSUFBQSxPQUFPLEVBQUVFO0FBQXZELEtBQ0UsNkJBQUMsaUJBQUQsT0FERixDQURGO0FBS0QsQ0FSRDs7O0FBVUFDLFVBQVUsQ0FBQ0UsWUFBWCxHQUEwQjtBQUN4QkwsRUFBQUEsUUFBUSxFQUFFO0FBRGMsQ0FBMUI7O0FBSUFHLFVBQVUsQ0FBQ0csU0FBWCxHQUF1QjtBQUNyQk4sRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUMsSUFEQztBQUVyQk4sRUFBQUEsYUFBYSxFQUFFSyxtQkFBVUUsSUFBVixDQUFlQztBQUZULENBQXZCOztlQUtlWixpQkFBaUIsR0FBR0ssVUFBSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi9JY29uQnV0dG9uJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tICcuL0Fzc2V0cy9TZW5kSWNvbic7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuXG5jb25zdCBjb25uZWN0U2VuZEJ1dHRvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgZGlzYWJsZWQsIGxhbmd1YWdlLCBzdWJtaXRTZW5kQm94IH0pID0+ICh7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3VibWl0U2VuZEJveFxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTZW5kQnV0dG9uID0gKHsgZGlzYWJsZWQsIHN1Ym1pdFNlbmRCb3ggfSkgPT4ge1xuICBjb25zdCBhbHRUZXh0ID0gdXNlTG9jYWxpemUoJ1NlbmQnKTtcblxuICByZXR1cm4gKFxuICAgIDxJY29uQnV0dG9uIGFsdD17YWx0VGV4dH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtzdWJtaXRTZW5kQm94fT5cbiAgICAgIDxTZW5kSWNvbiAvPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgKTtcbn07XG5cblNlbmRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblNlbmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Ym1pdFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTZW5kQnV0dG9uKCkoU2VuZEJ1dHRvbik7XG5cbmV4cG9ydCB7IGNvbm5lY3RTZW5kQnV0dG9uIH07XG4iXX0=
