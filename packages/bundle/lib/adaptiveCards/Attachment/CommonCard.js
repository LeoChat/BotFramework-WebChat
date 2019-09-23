'use strict';

var cov_17ey82xsk0 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/CommonCard.js';
  var hash = 'fd36cca2b9bca35d720b61b8858af886fd18e90d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/CommonCard.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 26,
          column: 1
        }
      },
      '1': {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 17,
          column: 39
        }
      },
      '2': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '3': {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 69
        }
      },
      '4': {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 33
        }
      },
      '5': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 26
        }
      },
      '6': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 25,
          column: 4
        }
      },
      '7': {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 37,
          column: 2
        }
      },
      '8': {
        start: {
          line: 39,
          column: 51
        },
        end: {
          line: 39,
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
            column: 19
          },
          end: {
            line: 8,
            column: 20
          }
        },
        loc: {
          start: {
            line: 8,
            column: 114
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 29
          }
        },
        loc: {
          start: {
            line: 9,
            column: 34
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 9
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 39,
            column: 32
          },
          end: {
            line: 39,
            column: 33
          }
        },
        loc: {
          start: {
            line: 39,
            column: 51
          },
          end: {
            line: 39,
            column: 63
          }
        },
        line: 39
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 10,
              column: 4
            },
            end: {
              line: 16,
              column: 5
            }
          },
          {
            start: {
              line: 10,
              column: 4
            },
            end: {
              line: 16,
              column: 5
            }
          }
        ],
        line: 10
      },
      '1': {
        loc: {
          start: {
            line: 23,
            column: 17
          },
          end: {
            line: 23,
            column: 39
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 23,
              column: 17
            },
            end: {
              line: 23,
              column: 24
            }
          },
          {
            start: {
              line: 23,
              column: 28
            },
            end: {
              line: 23,
              column: 39
            }
          }
        ],
        line: 23
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
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'fd36cca2b9bca35d720b61b8858af886fd18e90d'
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

cov_17ey82xsk0.s[0]++;

var CommonCard = function CommonCard(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    content = _ref.attachment.content,
    options = _ref.styleSet.options;
  cov_17ey82xsk0.f[0]++;
  var builtCard =
    (cov_17ey82xsk0.s[1]++,
    (0, _react.useMemo)(
      function() {
        cov_17ey82xsk0.f[1]++;
        cov_17ey82xsk0.s[2]++;

        if (content) {
          cov_17ey82xsk0.b[0][0]++;
          var builder = (cov_17ey82xsk0.s[3]++, new _AdaptiveCardBuilder.default(adaptiveCards, options));
          cov_17ey82xsk0.s[4]++;
          builder.addCommon(content);
          cov_17ey82xsk0.s[5]++;
          return builder.card;
        } else {
          cov_17ey82xsk0.b[0][1]++;
        }
      },
      [adaptiveCards, content, options]
    ));
  cov_17ey82xsk0.s[6]++;
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    adaptiveCardHostConfig: adaptiveCardHostConfig,
    tapAction: (cov_17ey82xsk0.b[1][0]++, content) && (cov_17ey82xsk0.b[1][1]++, content.tap)
  });
};

cov_17ey82xsk0.s[7]++;
CommonCard.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      tap: _propTypes.default.any
    }).isRequired
  }).isRequired,
  styleSet: _propTypes.default.any.isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_17ey82xsk0.f[2]++;
  cov_17ey82xsk0.s[8]++;
  return {
    styleSet: styleSet
  };
})(CommonCard);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQ29tbW9uQ2FyZC5qcyJdLCJuYW1lcyI6WyJDb21tb25DYXJkIiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHMiLCJjb250ZW50IiwiYXR0YWNobWVudCIsIm9wdGlvbnMiLCJzdHlsZVNldCIsImJ1aWx0Q2FyZCIsImJ1aWxkZXIiLCJBZGFwdGl2ZUNhcmRCdWlsZGVyIiwiYWRkQ29tbW9uIiwiY2FyZCIsInRhcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQStGO0FBQUEsTUFBNUZDLHNCQUE0RixRQUE1RkEsc0JBQTRGO0FBQUEsTUFBcEVDLGFBQW9FLFFBQXBFQSxhQUFvRTtBQUFBLE1BQXZDQyxPQUF1QyxRQUFyREMsVUFBcUQsQ0FBdkNELE9BQXVDO0FBQUEsTUFBaEJFLE9BQWdCLFFBQTVCQyxRQUE0QixDQUFoQkQsT0FBZ0I7QUFBQTtBQUNoSCxNQUFNRSxTQUFTLDJCQUFHLG9CQUFRLFlBQU07QUFBQTtBQUFBOztBQUM5QixRQUFJSixPQUFKLEVBQWE7QUFBQTtBQUNYLFVBQU1LLE9BQU8sMkJBQUcsSUFBSUMsNEJBQUosQ0FBd0JQLGFBQXhCLEVBQXVDRyxPQUF2QyxDQUFILENBQWI7QUFEVztBQUdYRyxNQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JQLE9BQWxCO0FBSFc7QUFLWCxhQUFPSyxPQUFPLENBQUNHLElBQWY7QUFDRCxLQU5EO0FBQUE7QUFBQTtBQU9ELEdBUmlCLEVBUWYsQ0FBQ1QsYUFBRCxFQUFnQkMsT0FBaEIsRUFBeUJFLE9BQXpCLENBUmUsQ0FBSCxDQUFmO0FBRGdIO0FBV2hILFNBQ0UsNkJBQUMsNkJBQUQ7QUFDRSxJQUFBLFlBQVksRUFBRUUsU0FEaEI7QUFFRSxJQUFBLHNCQUFzQixFQUFFTixzQkFGMUI7QUFHRSxJQUFBLFNBQVMsRUFBRSwyQkFBQUUsT0FBTyxnQ0FBSUEsT0FBTyxDQUFDUyxHQUFaO0FBSHBCLElBREY7QUFPRCxDQWxCRDs7O0FBb0JBWixVQUFVLENBQUNhLFNBQVgsR0FBdUI7QUFDckJaLEVBQUFBLHNCQUFzQixFQUFFYSxtQkFBVUMsR0FBVixDQUFjQyxVQURqQjtBQUVyQmQsRUFBQUEsYUFBYSxFQUFFWSxtQkFBVUMsR0FBVixDQUFjQyxVQUZSO0FBR3JCWixFQUFBQSxVQUFVLEVBQUVVLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCZCxJQUFBQSxPQUFPLEVBQUVXLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCTCxNQUFBQSxHQUFHLEVBQUVFLG1CQUFVQztBQURRLEtBQWhCLEVBRU5DO0FBSHVCLEdBQWhCLEVBSVRBLFVBUGtCO0FBUXJCVixFQUFBQSxRQUFRLEVBQUVRLG1CQUFVQyxHQUFWLENBQWNDO0FBUkgsQ0FBdkI7O2VBV2Usb0RBQWlCLGlCQUFtQjtBQUFBLE1BQWhCVixRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbUROLFVBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbm5lY3RUb1dlYkNoYXQgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IEFkYXB0aXZlQ2FyZEJ1aWxkZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRCdWlsZGVyJztcbmltcG9ydCBBZGFwdGl2ZUNhcmRSZW5kZXJlciBmcm9tICcuL0FkYXB0aXZlQ2FyZFJlbmRlcmVyJztcblxuY29uc3QgQ29tbW9uQ2FyZCA9ICh7IGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsIGFkYXB0aXZlQ2FyZHMsIGF0dGFjaG1lbnQ6IHsgY29udGVudCB9LCBzdHlsZVNldDogeyBvcHRpb25zIH0gfSkgPT4ge1xuICBjb25zdCBidWlsdENhcmQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgY29uc3QgYnVpbGRlciA9IG5ldyBBZGFwdGl2ZUNhcmRCdWlsZGVyKGFkYXB0aXZlQ2FyZHMsIG9wdGlvbnMpO1xuXG4gICAgICBidWlsZGVyLmFkZENvbW1vbihjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGJ1aWxkZXIuY2FyZDtcbiAgICB9XG4gIH0sIFthZGFwdGl2ZUNhcmRzLCBjb250ZW50LCBvcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWRhcHRpdmVDYXJkUmVuZGVyZXJcbiAgICAgIGFkYXB0aXZlQ2FyZD17YnVpbHRDYXJkfVxuICAgICAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZz17YWRhcHRpdmVDYXJkSG9zdENvbmZpZ31cbiAgICAgIHRhcEFjdGlvbj17Y29udGVudCAmJiBjb250ZW50LnRhcH1cbiAgICAvPlxuICApO1xufTtcblxuQ29tbW9uQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0YXA6IFByb3BUeXBlcy5hbnlcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKENvbW1vbkNhcmQpO1xuIl19
