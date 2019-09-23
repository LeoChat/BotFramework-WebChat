'use strict';

var cov_2l251sqs6k = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/SignInCardAttachment.js';
  var hash = 'c49e32bfd285904ec79a949fd5ae641a60ca33ab';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/SignInCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 11,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 8
        }
      },
      '2': {
        start: {
          line: 13,
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
          column: 51
        },
        end: {
          line: 23,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 30
          }
        },
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 8
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 32
          },
          end: {
            line: 23,
            column: 33
          }
        },
        loc: {
          start: {
            line: 23,
            column: 51
          },
          end: {
            line: 23,
            column: 63
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c49e32bfd285904ec79a949fd5ae641a60ca33ab'
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

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

cov_2l251sqs6k.s[0]++;

var SignInCardAttachment = function SignInCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    attachment = _ref.attachment,
    styleSet = _ref.styleSet;
  cov_2l251sqs6k.f[0]++;
  cov_2l251sqs6k.s[1]++;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.animationCardAttachment
    },
    _react.default.createElement(_CommonCard.default, {
      adaptiveCardHostConfig: adaptiveCardHostConfig,
      adaptiveCards: adaptiveCards,
      attachment: attachment
    })
  );
};

cov_2l251sqs6k.s[2]++;
SignInCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.any.isRequired,
  styleSet: _propTypes.default.shape({
    animationCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_2l251sqs6k.f[1]++;
  cov_2l251sqs6k.s[3]++;
  return {
    styleSet: styleSet
  };
})(SignInCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvU2lnbkluQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiU2lnbkluQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJzdHlsZVNldCIsImFuaW1hdGlvbkNhcmRBdHRhY2htZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLE9BQzNCO0FBQUEsTUFEOEJDLHNCQUM5QixRQUQ4QkEsc0JBQzlCO0FBQUEsTUFEc0RDLGFBQ3RELFFBRHNEQSxhQUN0RDtBQUFBLE1BRHFFQyxVQUNyRSxRQURxRUEsVUFDckU7QUFBQSxNQURpRkMsUUFDakYsUUFEaUZBLFFBQ2pGO0FBQUE7QUFBQTtBQUFBO0FBQUssSUFBQSxTQUFTLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsc0JBQXNCLEVBQUVKLHNCQUFwQztBQUE0RCxJQUFBLGFBQWEsRUFBRUMsYUFBM0U7QUFBMEYsSUFBQSxVQUFVLEVBQUVDO0FBQXRHLElBREY7QUFFTSxDQUhSOzs7QUFNQUgsb0JBQW9CLENBQUNNLFNBQXJCLEdBQWlDO0FBQy9CTCxFQUFBQSxzQkFBc0IsRUFBRU0sbUJBQVVDLEdBQVYsQ0FBY0MsVUFEUDtBQUUvQlAsRUFBQUEsYUFBYSxFQUFFSyxtQkFBVUMsR0FBVixDQUFjQyxVQUZFO0FBRy9CTixFQUFBQSxVQUFVLEVBQUVJLG1CQUFVQyxHQUFWLENBQWNDLFVBSEs7QUFJL0JMLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDeEJMLElBQUFBLHVCQUF1QixFQUFFRSxtQkFBVUMsR0FBVixDQUFjQyxVQURmO0FBRXhCRSxJQUFBQSxPQUFPLEVBQUVKLG1CQUFVQyxHQUFWLENBQWNDO0FBRkMsR0FBaEIsRUFHUEE7QUFQNEIsQ0FBakM7O2VBVWUsb0RBQWlCLGlCQUFtQjtBQUFBLE1BQWhCTCxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURKLG9CQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvV2ViQ2hhdCB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcblxuY29uc3QgU2lnbkluQ2FyZEF0dGFjaG1lbnQgPSAoeyBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLCBhZGFwdGl2ZUNhcmRzLCBhdHRhY2htZW50LCBzdHlsZVNldCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5hbmltYXRpb25DYXJkQXR0YWNobWVudH0+XG4gICAgPENvbW1vbkNhcmQgYWRhcHRpdmVDYXJkSG9zdENvbmZpZz17YWRhcHRpdmVDYXJkSG9zdENvbmZpZ30gYWRhcHRpdmVDYXJkcz17YWRhcHRpdmVDYXJkc30gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgPC9kaXY+XG4pO1xuXG5TaWduSW5DYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFuaW1hdGlvbkNhcmRBdHRhY2htZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFNpZ25JbkNhcmRBdHRhY2htZW50KTtcbiJdfQ==
