'use strict';

var cov_tmcm1uoca = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/OAuthCardAttachment.js';
  var hash = 'dbfbb84b0105cc1a698ed6c500e496ce0220026a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/OAuthCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 8,
          column: 33
        }
      },
      '1': {
        start: {
          line: 10,
          column: 28
        },
        end: {
          line: 25,
          column: 1
        }
      },
      '2': {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 42
        }
      },
      '3': {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 22,
          column: 44
        }
      },
      '4': {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      '5': {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 74
        }
      },
      '6': {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 40
        }
      },
      '7': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 56
        }
      },
      '8': {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 26
        }
      },
      '9': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 107
        }
      },
      '10': {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 35,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 10,
            column: 28
          },
          end: {
            line: 10,
            column: 29
          }
        },
        loc: {
          start: {
            line: 10,
            column: 105
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 10
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 13,
            column: 28
          },
          end: {
            line: 13,
            column: 29
          }
        },
        loc: {
          start: {
            line: 13,
            column: 34
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 82
          },
          end: {
            line: 10,
            column: 98
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 10,
              column: 96
            },
            end: {
              line: 10,
              column: 98
            }
          }
        ],
        line: 10
      },
      '1': {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 21,
              column: 5
            }
          },
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 21,
              column: 5
            }
          }
        ],
        line: 14
      },
      '2': {
        loc: {
          start: {
            line: 18,
            column: 26
          },
          end: {
            line: 18,
            column: 39
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 18,
              column: 26
            },
            end: {
              line: 18,
              column: 33
            }
          },
          {
            start: {
              line: 18,
              column: 37
            },
            end: {
              line: 18,
              column: 39
            }
          }
        ],
        line: 18
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
      '9': 0,
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'dbfbb84b0105cc1a698ed6c500e496ce0220026a'
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

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _AdaptiveCardBuilder = _interopRequireDefault(require('./AdaptiveCardBuilder'));

var _AdaptiveCardRenderer = _interopRequireDefault(require('./AdaptiveCardRenderer'));

var _ref = (cov_tmcm1uoca.s[0]++, _botframeworkWebchatComponent.hooks),
  useStyleOptions = _ref.useStyleOptions;

cov_tmcm1uoca.s[1]++;

var OAuthCardAttachment = function OAuthCardAttachment(_ref2) {
  var adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    adaptiveCards = _ref2.adaptiveCards,
    _ref2$attachment = _ref2.attachment;
  _ref2$attachment = _ref2$attachment === void 0 ? (cov_tmcm1uoca.b[0][0]++, {}) : _ref2$attachment;
  var content = _ref2$attachment.content;
  cov_tmcm1uoca.f[0]++;

  var _ref3 = (cov_tmcm1uoca.s[2]++, useStyleOptions()),
    _ref4 = (0, _slicedToArray2.default)(_ref3, 1),
    styleOptions = _ref4[0];

  var builtCard =
    (cov_tmcm1uoca.s[3]++,
    (0, _react.useMemo)(
      function() {
        cov_tmcm1uoca.f[1]++;
        cov_tmcm1uoca.s[4]++;

        if (content) {
          cov_tmcm1uoca.b[1][0]++;
          var builder = (cov_tmcm1uoca.s[5]++, new _AdaptiveCardBuilder.default(adaptiveCards, styleOptions));
          cov_tmcm1uoca.s[6]++;
          builder.addCommonHeaders(content);
          cov_tmcm1uoca.s[7]++;
          builder.addButtons(((cov_tmcm1uoca.b[2][0]++, content) || (cov_tmcm1uoca.b[2][1]++, {})).buttons, true);
          cov_tmcm1uoca.s[8]++;
          return builder.card;
        } else {
          cov_tmcm1uoca.b[1][1]++;
        }
      },
      [adaptiveCards, content, styleOptions]
    ));
  cov_tmcm1uoca.s[9]++;
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    adaptiveCardHostConfig: adaptiveCardHostConfig
  });
};

cov_tmcm1uoca.s[10]++;
OAuthCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      buttons: _propTypes.default.array
    }).isRequired
  }).isRequired
};
var _default = OAuthCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvT0F1dGhDYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJob29rcyIsInVzZVN0eWxlT3B0aW9ucyIsIk9BdXRoQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJjb250ZW50Iiwic3R5bGVPcHRpb25zIiwiYnVpbHRDYXJkIiwiYnVpbGRlciIsIkFkYXB0aXZlQ2FyZEJ1aWxkZXIiLCJhZGRDb21tb25IZWFkZXJzIiwiYWRkQnV0dG9ucyIsImJ1dHRvbnMiLCJjYXJkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O2tDQUU0QkEsbUM7SUFBcEJDLGUsUUFBQUEsZTs7OztBQUVSLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsUUFBNkU7QUFBQSxNQUExRUMsc0JBQTBFLFNBQTFFQSxzQkFBMEU7QUFBQSxNQUFsREMsYUFBa0QsU0FBbERBLGFBQWtEO0FBQUEsK0JBQW5DQyxVQUFtQztBQUFBLDZFQUFULEVBQVM7QUFBQSxNQUFyQkMsT0FBcUIsb0JBQXJCQSxPQUFxQjtBQUFBOztBQUFBLHFDQUNoRkwsZUFBZSxFQURpRTtBQUFBO0FBQUEsTUFDaEdNLFlBRGdHOztBQUd2RyxNQUFNQyxTQUFTLDBCQUFHLG9CQUFRLFlBQU07QUFBQTtBQUFBOztBQUM5QixRQUFJRixPQUFKLEVBQWE7QUFBQTtBQUNYLFVBQU1HLE9BQU8sMEJBQUcsSUFBSUMsNEJBQUosQ0FBd0JOLGFBQXhCLEVBQXVDRyxZQUF2QyxDQUFILENBQWI7QUFEVztBQUdYRSxNQUFBQSxPQUFPLENBQUNFLGdCQUFSLENBQXlCTCxPQUF6QjtBQUhXO0FBSVhHLE1BQUFBLE9BQU8sQ0FBQ0csVUFBUixDQUFtQixDQUFDLDBCQUFBTixPQUFPLCtCQUFJLEVBQUosQ0FBUixFQUFnQk8sT0FBbkMsRUFBNEMsSUFBNUM7QUFKVztBQU1YLGFBQU9KLE9BQU8sQ0FBQ0ssSUFBZjtBQUNELEtBUEQ7QUFBQTtBQUFBO0FBUUQsR0FUaUIsRUFTZixDQUFDVixhQUFELEVBQWdCRSxPQUFoQixFQUF5QkMsWUFBekIsQ0FUZSxDQUFILENBQWY7QUFIdUc7QUFjdkcsU0FBTyw2QkFBQyw2QkFBRDtBQUFzQixJQUFBLFlBQVksRUFBRUMsU0FBcEM7QUFBK0MsSUFBQSxzQkFBc0IsRUFBRUw7QUFBdkUsSUFBUDtBQUNELENBZkQ7OztBQWlCQUQsbUJBQW1CLENBQUNhLFNBQXBCLEdBQWdDO0FBQzlCWixFQUFBQSxzQkFBc0IsRUFBRWEsbUJBQVVDLEdBQVYsQ0FBY0MsVUFEUjtBQUU5QmQsRUFBQUEsYUFBYSxFQUFFWSxtQkFBVUMsR0FBVixDQUFjQyxVQUZDO0FBRzlCYixFQUFBQSxVQUFVLEVBQUVXLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVVLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCTixNQUFBQSxPQUFPLEVBQUVHLG1CQUFVSTtBQURJLEtBQWhCLEVBRU5GO0FBSHVCLEdBQWhCLEVBSVRBO0FBUDJCLENBQWhDO2VBVWVoQixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IEFkYXB0aXZlQ2FyZEJ1aWxkZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRCdWlsZGVyJztcbmltcG9ydCBBZGFwdGl2ZUNhcmRSZW5kZXJlciBmcm9tICcuL0FkYXB0aXZlQ2FyZFJlbmRlcmVyJztcblxuY29uc3QgeyB1c2VTdHlsZU9wdGlvbnMgfSA9IGhvb2tzO1xuXG5jb25zdCBPQXV0aENhcmRBdHRhY2htZW50ID0gKHsgYWRhcHRpdmVDYXJkSG9zdENvbmZpZywgYWRhcHRpdmVDYXJkcywgYXR0YWNobWVudDogeyBjb250ZW50IH0gPSB7fSB9KSA9PiB7XG4gIGNvbnN0IFtzdHlsZU9wdGlvbnNdID0gdXNlU3R5bGVPcHRpb25zKCk7XG5cbiAgY29uc3QgYnVpbHRDYXJkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRhcHRpdmVDYXJkQnVpbGRlcihhZGFwdGl2ZUNhcmRzLCBzdHlsZU9wdGlvbnMpO1xuXG4gICAgICBidWlsZGVyLmFkZENvbW1vbkhlYWRlcnMoY29udGVudCk7XG4gICAgICBidWlsZGVyLmFkZEJ1dHRvbnMoKGNvbnRlbnQgfHwge30pLmJ1dHRvbnMsIHRydWUpO1xuXG4gICAgICByZXR1cm4gYnVpbGRlci5jYXJkO1xuICAgIH1cbiAgfSwgW2FkYXB0aXZlQ2FyZHMsIGNvbnRlbnQsIHN0eWxlT3B0aW9uc10pO1xuXG4gIHJldHVybiA8QWRhcHRpdmVDYXJkUmVuZGVyZXIgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9IGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9IC8+O1xufTtcblxuT0F1dGhDYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9BdXRoQ2FyZEF0dGFjaG1lbnQ7XG4iXX0=
