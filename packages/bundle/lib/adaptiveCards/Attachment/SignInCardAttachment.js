'use strict';

var cov_197091z027 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/SignInCardAttachment.js';
  var hash = 'b256dd957fc06a1696913343abcfad65b88053c7';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/SignInCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 7,
          column: 29
        }
      },
      '1': {
        start: {
          line: 9,
          column: 29
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '2': {
        start: {
          line: 10,
          column: 73
        },
        end: {
          line: 10,
          column: 86
        }
      },
      '3': {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      '4': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 27,
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
            column: 29
          },
          end: {
            line: 9,
            column: 30
          }
        },
        loc: {
          start: {
            line: 9,
            column: 88
          },
          end: {
            line: 21,
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
    hash: 'b256dd957fc06a1696913343abcfad65b88053c7'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

var _ref = (cov_197091z027.s[0]++, _botframeworkWebchatComponent.hooks),
  useStyleSet = _ref.useStyleSet;

cov_197091z027.s[1]++;

var SignInCardAttachment = function SignInCardAttachment(_ref2) {
  var adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    adaptiveCards = _ref2.adaptiveCards,
    attachment = _ref2.attachment;
  cov_197091z027.f[0]++;

  var _ref3 = (cov_197091z027.s[2]++, useStyleSet()),
    _ref4 = (0, _slicedToArray2.default)(_ref3, 1),
    animationCardAttachmentStyleSet = _ref4[0].animationCardAttachment;

  cov_197091z027.s[3]++;
  return _react.default.createElement(
    'div',
    {
      className: animationCardAttachmentStyleSet
    },
    _react.default.createElement(_CommonCard.default, {
      adaptiveCardHostConfig: adaptiveCardHostConfig,
      adaptiveCards: adaptiveCards,
      attachment: attachment
    })
  );
};

cov_197091z027.s[4]++;
SignInCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.any.isRequired
};
var _default = SignInCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvU2lnbkluQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiaG9va3MiLCJ1c2VTdHlsZVNldCIsIlNpZ25JbkNhcmRBdHRhY2htZW50IiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHMiLCJhdHRhY2htZW50IiwiYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZVNldCIsImFuaW1hdGlvbkNhcmRBdHRhY2htZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O21DQUV3QkEsbUM7SUFBaEJDLFcsUUFBQUEsVzs7OztBQUVSLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsUUFBMkQ7QUFBQSxNQUF4REMsc0JBQXdELFNBQXhEQSxzQkFBd0Q7QUFBQSxNQUFoQ0MsYUFBZ0MsU0FBaENBLGFBQWdDO0FBQUEsTUFBakJDLFVBQWlCLFNBQWpCQSxVQUFpQjtBQUFBOztBQUFBLHNDQUNmSixXQUFXLEVBREk7QUFBQTtBQUFBLE1BQ3BESywrQkFEb0QsWUFDN0VDLHVCQUQ2RTs7QUFBQTtBQUd0RixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0UsNkJBQUMsbUJBQUQ7QUFDRSxJQUFBLHNCQUFzQixFQUFFSCxzQkFEMUI7QUFFRSxJQUFBLGFBQWEsRUFBRUMsYUFGakI7QUFHRSxJQUFBLFVBQVUsRUFBRUM7QUFIZCxJQURGLENBREY7QUFTRCxDQVpEOzs7QUFjQUgsb0JBQW9CLENBQUNNLFNBQXJCLEdBQWlDO0FBQy9CTCxFQUFBQSxzQkFBc0IsRUFBRU0sbUJBQVVDLEdBQVYsQ0FBY0MsVUFEUDtBQUUvQlAsRUFBQUEsYUFBYSxFQUFFSyxtQkFBVUMsR0FBVixDQUFjQyxVQUZFO0FBRy9CTixFQUFBQSxVQUFVLEVBQUVJLG1CQUFVQyxHQUFWLENBQWNDO0FBSEssQ0FBakM7ZUFNZVQsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcblxuY29uc3QgeyB1c2VTdHlsZVNldCB9ID0gaG9va3M7XG5cbmNvbnN0IFNpZ25JbkNhcmRBdHRhY2htZW50ID0gKHsgYWRhcHRpdmVDYXJkSG9zdENvbmZpZywgYWRhcHRpdmVDYXJkcywgYXR0YWNobWVudCB9KSA9PiB7XG4gIGNvbnN0IFt7IGFuaW1hdGlvbkNhcmRBdHRhY2htZW50OiBhbmltYXRpb25DYXJkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRpb25DYXJkQXR0YWNobWVudFN0eWxlU2V0fT5cbiAgICAgIDxDb21tb25DYXJkXG4gICAgICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9XG4gICAgICAgIGFkYXB0aXZlQ2FyZHM9e2FkYXB0aXZlQ2FyZHN9XG4gICAgICAgIGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2lnbkluQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5DYXJkQXR0YWNobWVudDtcbiJdfQ==
