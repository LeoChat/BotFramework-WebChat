'use strict';

var cov_1e4qsuupx5 = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/OAuthCardAttachment.js';
  var hash = 'c45c598f0aad4d9408d9f435415fcde3d4cd5ea5';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/OAuthCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 26,
          column: 1
        }
      },
      '1': {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 23,
          column: 39
        }
      },
      '2': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      '3': {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 69
        }
      },
      '4': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 40
        }
      },
      '5': {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 56
        }
      },
      '6': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 26
        }
      },
      '7': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 107
        }
      },
      '8': {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 39,
          column: 2
        }
      },
      '9': {
        start: {
          line: 41,
          column: 51
        },
        end: {
          line: 41,
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
            column: 28
          },
          end: {
            line: 8,
            column: 29
          }
        },
        loc: {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 13
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 14,
            column: 28
          },
          end: {
            line: 14,
            column: 29
          }
        },
        loc: {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 14
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 41,
            column: 32
          },
          end: {
            line: 41,
            column: 33
          }
        },
        loc: {
          start: {
            line: 41,
            column: 51
          },
          end: {
            line: 41,
            column: 63
          }
        },
        line: 41
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 11,
            column: 30
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 11,
              column: 28
            },
            end: {
              line: 11,
              column: 30
            }
          }
        ],
        line: 11
      },
      '1': {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 15,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          },
          {
            start: {
              line: 15,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          }
        ],
        line: 15
      },
      '2': {
        loc: {
          start: {
            line: 19,
            column: 26
          },
          end: {
            line: 19,
            column: 39
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 26
            },
            end: {
              line: 19,
              column: 33
            }
          },
          {
            start: {
              line: 19,
              column: 37
            },
            end: {
              line: 19,
              column: 39
            }
          }
        ],
        line: 19
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c45c598f0aad4d9408d9f435415fcde3d4cd5ea5'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _AdaptiveCardBuilder = _interopRequireDefault(require('./AdaptiveCardBuilder'));

var _AdaptiveCardRenderer = _interopRequireDefault(require('./AdaptiveCardRenderer'));

cov_1e4qsuupx5.s[0]++;

var OAuthCardAttachment = function OAuthCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? (cov_1e4qsuupx5.b[0][0]++, {}) : _ref$attachment;
  var content = _ref$attachment.content,
    options = _ref.styleSet.options;
  cov_1e4qsuupx5.f[0]++;
  var builtCard =
    (cov_1e4qsuupx5.s[1]++,
    (0, _react.useMemo)(
      function() {
        cov_1e4qsuupx5.f[1]++;
        cov_1e4qsuupx5.s[2]++;

        if (content) {
          cov_1e4qsuupx5.b[1][0]++;
          var builder = (cov_1e4qsuupx5.s[3]++, new _AdaptiveCardBuilder.default(adaptiveCards, options));
          cov_1e4qsuupx5.s[4]++;
          builder.addCommonHeaders(content);
          cov_1e4qsuupx5.s[5]++;
          builder.addButtons(((cov_1e4qsuupx5.b[2][0]++, content) || (cov_1e4qsuupx5.b[2][1]++, {})).buttons, true);
          cov_1e4qsuupx5.s[6]++;
          return builder.card;
        } else {
          cov_1e4qsuupx5.b[1][1]++;
        }
      },
      [adaptiveCards, content, options]
    ));
  cov_1e4qsuupx5.s[7]++;
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    adaptiveCardHostConfig: adaptiveCardHostConfig
  });
};

cov_1e4qsuupx5.s[8]++;
OAuthCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      buttons: _propTypes.default.array
    }).isRequired
  }).isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_1e4qsuupx5.f[2]++;
  cov_1e4qsuupx5.s[9]++;
  return {
    styleSet: styleSet
  };
})(OAuthCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvT0F1dGhDYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJPQXV0aENhcmRBdHRhY2htZW50IiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHMiLCJhdHRhY2htZW50IiwiY29udGVudCIsIm9wdGlvbnMiLCJzdHlsZVNldCIsImJ1aWx0Q2FyZCIsImJ1aWxkZXIiLCJBZGFwdGl2ZUNhcmRCdWlsZGVyIiwiYWRkQ29tbW9uSGVhZGVycyIsImFkZEJ1dHRvbnMiLCJidXR0b25zIiwiY2FyZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUt0QjtBQUFBLE1BSkpDLHNCQUlJLFFBSkpBLHNCQUlJO0FBQUEsTUFISkMsYUFHSSxRQUhKQSxhQUdJO0FBQUEsNkJBRkpDLFVBRUk7QUFBQSw0RUFGc0IsRUFFdEI7QUFBQSxNQUZVQyxPQUVWLG1CQUZVQSxPQUVWO0FBQUEsTUFEUUMsT0FDUixRQURKQyxRQUNJLENBRFFELE9BQ1I7QUFBQTtBQUNKLE1BQU1FLFNBQVMsMkJBQUcsb0JBQVEsWUFBTTtBQUFBO0FBQUE7O0FBQzlCLFFBQUlILE9BQUosRUFBYTtBQUFBO0FBQ1gsVUFBTUksT0FBTywyQkFBRyxJQUFJQyw0QkFBSixDQUF3QlAsYUFBeEIsRUFBdUNHLE9BQXZDLENBQUgsQ0FBYjtBQURXO0FBR1hHLE1BQUFBLE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUJOLE9BQXpCO0FBSFc7QUFJWEksTUFBQUEsT0FBTyxDQUFDRyxVQUFSLENBQW1CLENBQUMsMkJBQUFQLE9BQU8sZ0NBQUksRUFBSixDQUFSLEVBQWdCUSxPQUFuQyxFQUE0QyxJQUE1QztBQUpXO0FBTVgsYUFBT0osT0FBTyxDQUFDSyxJQUFmO0FBQ0QsS0FQRDtBQUFBO0FBQUE7QUFRRCxHQVRpQixFQVNmLENBQUNYLGFBQUQsRUFBZ0JFLE9BQWhCLEVBQXlCQyxPQUF6QixDQVRlLENBQUgsQ0FBZjtBQURJO0FBWUosU0FBTyw2QkFBQyw2QkFBRDtBQUFzQixJQUFBLFlBQVksRUFBRUUsU0FBcEM7QUFBK0MsSUFBQSxzQkFBc0IsRUFBRU47QUFBdkUsSUFBUDtBQUNELENBbEJEOzs7QUFvQkFELG1CQUFtQixDQUFDYyxTQUFwQixHQUFnQztBQUM5QmIsRUFBQUEsc0JBQXNCLEVBQUVjLG1CQUFVQyxHQUFWLENBQWNDLFVBRFI7QUFFOUJmLEVBQUFBLGFBQWEsRUFBRWEsbUJBQVVDLEdBQVYsQ0FBY0MsVUFGQztBQUc5QmQsRUFBQUEsVUFBVSxFQUFFWSxtQkFBVUcsS0FBVixDQUFnQjtBQUMxQmQsSUFBQUEsT0FBTyxFQUFFVyxtQkFBVUcsS0FBVixDQUFnQjtBQUN2Qk4sTUFBQUEsT0FBTyxFQUFFRyxtQkFBVUk7QUFESSxLQUFoQixFQUVORjtBQUh1QixHQUFoQixFQUlUQSxVQVAyQjtBQVE5QlgsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUcsS0FBVixDQUFnQjtBQUN4QmIsSUFBQUEsT0FBTyxFQUFFVSxtQkFBVUMsR0FBVixDQUFjQztBQURDLEdBQWhCLEVBRVBBO0FBVjJCLENBQWhDOztlQWFlLG9EQUFpQixpQkFBbUI7QUFBQSxNQUFoQlgsUUFBZ0IsU0FBaEJBLFFBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUFZLENBQWhELEVBQW1ETixtQkFBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29ubmVjdFRvV2ViQ2hhdCB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgQWRhcHRpdmVDYXJkQnVpbGRlciBmcm9tICcuL0FkYXB0aXZlQ2FyZEJ1aWxkZXInO1xuaW1wb3J0IEFkYXB0aXZlQ2FyZFJlbmRlcmVyIGZyb20gJy4vQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xuXG5jb25zdCBPQXV0aENhcmRBdHRhY2htZW50ID0gKHtcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZyxcbiAgYWRhcHRpdmVDYXJkcyxcbiAgYXR0YWNobWVudDogeyBjb250ZW50IH0gPSB7fSxcbiAgc3R5bGVTZXQ6IHsgb3B0aW9ucyB9XG59KSA9PiB7XG4gIGNvbnN0IGJ1aWx0Q2FyZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjb25zdCBidWlsZGVyID0gbmV3IEFkYXB0aXZlQ2FyZEJ1aWxkZXIoYWRhcHRpdmVDYXJkcywgb3B0aW9ucyk7XG5cbiAgICAgIGJ1aWxkZXIuYWRkQ29tbW9uSGVhZGVycyhjb250ZW50KTtcbiAgICAgIGJ1aWxkZXIuYWRkQnV0dG9ucygoY29udGVudCB8fCB7fSkuYnV0dG9ucywgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiBidWlsZGVyLmNhcmQ7XG4gICAgfVxuICB9LCBbYWRhcHRpdmVDYXJkcywgY29udGVudCwgb3B0aW9uc10pO1xuXG4gIHJldHVybiA8QWRhcHRpdmVDYXJkUmVuZGVyZXIgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9IGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9IC8+O1xufTtcblxuT0F1dGhDYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShPQXV0aENhcmRBdHRhY2htZW50KTtcbiJdfQ==
