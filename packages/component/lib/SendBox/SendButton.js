'use strict';

var cov_fhctufkzl = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/SendButton.js';
  var hash = '6c1907b2663fa23fa163362e3df949513e3e5fc8';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/SendButton.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 18,
          column: 3
        }
      },
      '1': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      '2': {
        start: {
          line: 11,
          column: 59
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '3': {
        start: {
          line: 20,
          column: 19
        },
        end: {
          line: 24,
          column: 1
        }
      },
      '4': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 15
        }
      },
      '5': {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 29,
          column: 2
        }
      },
      '6': {
        start: {
          line: 31,
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
            line: 18,
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
            column: 59
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 11
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 20,
            column: 19
          },
          end: {
            line: 20,
            column: 20
          }
        },
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 15
          }
        },
        line: 21
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
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '6c1907b2663fa23fa163362e3df949513e3e5fc8'
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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _SendIcon = _interopRequireDefault(require('./Assets/SendIcon'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_fhctufkzl.s[0]++;

var connectSendButton = function connectSendButton() {
  cov_fhctufkzl.f[0]++;
  cov_fhctufkzl.s[1]++;

  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var direction = _ref.direction,
          disabled = _ref.disabled,
          language = _ref.language,
          submitSendBox = _ref.submitSendBox;
        cov_fhctufkzl.f[1]++;
        cov_fhctufkzl.s[2]++;
        return {
          direction: direction,
          disabled: disabled,
          language: language,
          submitSendBox: submitSendBox
        };
      }
    ].concat(selectors)
  );
};

exports.connectSendButton = connectSendButton;
cov_fhctufkzl.s[3]++;

var SendButton = function SendButton(_ref2) {
  var direction = _ref2.direction,
    disabled = _ref2.disabled,
    language = _ref2.language,
    submitSendBox = _ref2.submitSendBox;
  cov_fhctufkzl.f[2]++;
  cov_fhctufkzl.s[4]++;
  return _react.default.createElement(
    _IconButton.default,
    {
      alt: (0, _Localize.localize)('Send', language),
      direction: direction,
      disabled: disabled,
      onClick: submitSendBox
    },
    _react.default.createElement(_SendIcon.default, null)
  );
};

cov_fhctufkzl.s[5]++;
SendButton.defaultProps = {
  direction: 'ltr',
  disabled: false
};
cov_fhctufkzl.s[6]++;
SendButton.propTypes = {
  direction: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  submitSendBox: _propTypes.default.func.isRequired
};

var _default = connectSendButton()(SendButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1NlbmRCdXR0b24uanMiXSwibmFtZXMiOlsiY29ubmVjdFNlbmRCdXR0b24iLCJzZWxlY3RvcnMiLCJkaXJlY3Rpb24iLCJkaXNhYmxlZCIsImxhbmd1YWdlIiwic3VibWl0U2VuZEJveCIsIlNlbmRCdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FDeEI7QUFBQTtBQUFBOztBQUFBLG9DQUQ0QkMsU0FDNUI7QUFENEJBLElBQUFBLFNBQzVCO0FBQUE7O0FBQUEsa0RBQ0UsZ0JBQXVEO0FBQUEsUUFBcERDLFNBQW9ELFFBQXBEQSxTQUFvRDtBQUFBLFFBQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSxRQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsUUFBckJDLGFBQXFCLFFBQXJCQSxhQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUNyREgsTUFBQUEsU0FBUyxFQUFUQSxTQURxRDtBQUVyREMsTUFBQUEsUUFBUSxFQUFSQSxRQUZxRDtBQUdyREMsTUFBQUEsUUFBUSxFQUFSQSxRQUhxRDtBQUlyREMsTUFBQUEsYUFBYSxFQUFiQTtBQUpxRDtBQUt0RCxHQU5ILFNBT0tKLFNBUEw7QUFRQyxDQVRIOzs7OztBQVdBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQ2pCO0FBQUEsTUFEb0JKLFNBQ3BCLFNBRG9CQSxTQUNwQjtBQUFBLE1BRCtCQyxRQUMvQixTQUQrQkEsUUFDL0I7QUFBQSxNQUR5Q0MsUUFDekMsU0FEeUNBLFFBQ3pDO0FBQUEsTUFEbURDLGFBQ25ELFNBRG1EQSxhQUNuRDtBQUFBO0FBQUE7QUFBQSxzQ0FBQyxtQkFBRDtBQUFZLElBQUEsR0FBRyxFQUFFLHdCQUFTLE1BQVQsRUFBaUJELFFBQWpCLENBQWpCO0FBQTZDLElBQUEsU0FBUyxFQUFFRixTQUF4RDtBQUFtRSxJQUFBLFFBQVEsRUFBRUMsUUFBN0U7QUFBdUYsSUFBQSxPQUFPLEVBQUVFO0FBQWhHLEtBQ0UsNkJBQUMsaUJBQUQsT0FERjtBQUVhLENBSGY7OztBQU1BQyxVQUFVLENBQUNDLFlBQVgsR0FBMEI7QUFDeEJMLEVBQUFBLFNBQVMsRUFBRSxLQURhO0FBRXhCQyxFQUFBQSxRQUFRLEVBQUU7QUFGYyxDQUExQjs7QUFLQUcsVUFBVSxDQUFDRSxTQUFYLEdBQXVCO0FBQ3JCTixFQUFBQSxTQUFTLEVBQUVPLG1CQUFVQyxNQURBO0FBRXJCUCxFQUFBQSxRQUFRLEVBQUVNLG1CQUFVRSxJQUZDO0FBR3JCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVQyxNQUFWLENBQWlCRSxVQUhOO0FBSXJCUCxFQUFBQSxhQUFhLEVBQUVJLG1CQUFVSSxJQUFWLENBQWVEO0FBSlQsQ0FBdkI7O2VBT2VaLGlCQUFpQixHQUFHTSxVQUFILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJy4vQXNzZXRzL1NlbmRJY29uJztcblxuY29uc3QgY29ubmVjdFNlbmRCdXR0b24gPSAoLi4uc2VsZWN0b3JzKSA9PlxuICBjb25uZWN0VG9XZWJDaGF0KFxuICAgICh7IGRpcmVjdGlvbiwgZGlzYWJsZWQsIGxhbmd1YWdlLCBzdWJtaXRTZW5kQm94IH0pID0+ICh7XG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3VibWl0U2VuZEJveFxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTZW5kQnV0dG9uID0gKHsgZGlyZWN0aW9uLCBkaXNhYmxlZCwgbGFuZ3VhZ2UsIHN1Ym1pdFNlbmRCb3ggfSkgPT4gKFxuICA8SWNvbkJ1dHRvbiBhbHQ9e2xvY2FsaXplKCdTZW5kJywgbGFuZ3VhZ2UpfSBkaXJlY3Rpb249e2RpcmVjdGlvbn0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtzdWJtaXRTZW5kQm94fT5cbiAgICA8U2VuZEljb24gLz5cbiAgPC9JY29uQnV0dG9uPlxuKTtcblxuU2VuZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpcmVjdGlvbjogJ2x0cicsXG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxuU2VuZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdWJtaXRTZW5kQm94OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U2VuZEJ1dHRvbigpKFNlbmRCdXR0b24pO1xuXG5leHBvcnQgeyBjb25uZWN0U2VuZEJ1dHRvbiB9O1xuIl19
