'use strict';

var cov_joo2xcwcs = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/CommonCard.js';
  var hash = 'f48af82eb34423907dcb2d79acb421b5f19c521b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/CommonCard.js',
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
          column: 19
        },
        end: {
          line: 30,
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
          line: 21,
          column: 44
        }
      },
      '4': {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 20,
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
          column: 33
        }
      },
      '7': {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 26
        }
      },
      '8': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 29,
          column: 4
        }
      },
      '9': {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 40,
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
            column: 19
          },
          end: {
            line: 10,
            column: 20
          }
        },
        loc: {
          start: {
            line: 10,
            column: 91
          },
          end: {
            line: 30,
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
            line: 21,
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
            line: 14,
            column: 4
          },
          end: {
            line: 20,
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
              line: 20,
              column: 5
            }
          },
          {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 20,
              column: 5
            }
          }
        ],
        line: 14
      },
      '1': {
        loc: {
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 39
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 27,
              column: 17
            },
            end: {
              line: 27,
              column: 24
            }
          },
          {
            start: {
              line: 27,
              column: 28
            },
            end: {
              line: 27,
              column: 39
            }
          }
        ],
        line: 27
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
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'f48af82eb34423907dcb2d79acb421b5f19c521b'
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

var _ref = (cov_joo2xcwcs.s[0]++, _botframeworkWebchatComponent.hooks),
  useStyleOptions = _ref.useStyleOptions;

cov_joo2xcwcs.s[1]++;

var CommonCard = function CommonCard(_ref2) {
  var adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    adaptiveCards = _ref2.adaptiveCards,
    content = _ref2.attachment.content;
  cov_joo2xcwcs.f[0]++;

  var _ref3 = (cov_joo2xcwcs.s[2]++, useStyleOptions()),
    _ref4 = (0, _slicedToArray2.default)(_ref3, 1),
    styleOptions = _ref4[0];

  var builtCard =
    (cov_joo2xcwcs.s[3]++,
    (0, _react.useMemo)(
      function() {
        cov_joo2xcwcs.f[1]++;
        cov_joo2xcwcs.s[4]++;

        if (content) {
          cov_joo2xcwcs.b[0][0]++;
          var builder = (cov_joo2xcwcs.s[5]++, new _AdaptiveCardBuilder.default(adaptiveCards, styleOptions));
          cov_joo2xcwcs.s[6]++;
          builder.addCommon(content);
          cov_joo2xcwcs.s[7]++;
          return builder.card;
        } else {
          cov_joo2xcwcs.b[0][1]++;
        }
      },
      [adaptiveCards, content, styleOptions]
    ));
  cov_joo2xcwcs.s[8]++;
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    adaptiveCardHostConfig: adaptiveCardHostConfig,
    tapAction: (cov_joo2xcwcs.b[1][0]++, content) && (cov_joo2xcwcs.b[1][1]++, content.tap)
  });
};

cov_joo2xcwcs.s[9]++;
CommonCard.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      tap: _propTypes.default.any
    }).isRequired
  }).isRequired
};
var _default = CommonCard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQ29tbW9uQ2FyZC5qcyJdLCJuYW1lcyI6WyJob29rcyIsInVzZVN0eWxlT3B0aW9ucyIsIkNvbW1vbkNhcmQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImNvbnRlbnQiLCJhdHRhY2htZW50Iiwic3R5bGVPcHRpb25zIiwiYnVpbHRDYXJkIiwiYnVpbGRlciIsIkFkYXB0aXZlQ2FyZEJ1aWxkZXIiLCJhZGRDb21tb24iLCJjYXJkIiwidGFwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztrQ0FFNEJBLG1DO0lBQXBCQyxlLFFBQUFBLGU7Ozs7QUFFUixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUF3RTtBQUFBLE1BQXJFQyxzQkFBcUUsU0FBckVBLHNCQUFxRTtBQUFBLE1BQTdDQyxhQUE2QyxTQUE3Q0EsYUFBNkM7QUFBQSxNQUFoQkMsT0FBZ0IsU0FBOUJDLFVBQThCLENBQWhCRCxPQUFnQjtBQUFBOztBQUFBLHFDQUNsRUosZUFBZSxFQURtRDtBQUFBO0FBQUEsTUFDbEZNLFlBRGtGOztBQUd6RixNQUFNQyxTQUFTLDBCQUFHLG9CQUFRLFlBQU07QUFBQTtBQUFBOztBQUM5QixRQUFJSCxPQUFKLEVBQWE7QUFBQTtBQUNYLFVBQU1JLE9BQU8sMEJBQUcsSUFBSUMsNEJBQUosQ0FBd0JOLGFBQXhCLEVBQXVDRyxZQUF2QyxDQUFILENBQWI7QUFEVztBQUdYRSxNQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JOLE9BQWxCO0FBSFc7QUFLWCxhQUFPSSxPQUFPLENBQUNHLElBQWY7QUFDRCxLQU5EO0FBQUE7QUFBQTtBQU9ELEdBUmlCLEVBUWYsQ0FBQ1IsYUFBRCxFQUFnQkMsT0FBaEIsRUFBeUJFLFlBQXpCLENBUmUsQ0FBSCxDQUFmO0FBSHlGO0FBYXpGLFNBQ0UsNkJBQUMsNkJBQUQ7QUFDRSxJQUFBLFlBQVksRUFBRUMsU0FEaEI7QUFFRSxJQUFBLHNCQUFzQixFQUFFTCxzQkFGMUI7QUFHRSxJQUFBLFNBQVMsRUFBRSwwQkFBQUUsT0FBTywrQkFBSUEsT0FBTyxDQUFDUSxHQUFaO0FBSHBCLElBREY7QUFPRCxDQXBCRDs7O0FBc0JBWCxVQUFVLENBQUNZLFNBQVgsR0FBdUI7QUFDckJYLEVBQUFBLHNCQUFzQixFQUFFWSxtQkFBVUMsR0FBVixDQUFjQyxVQURqQjtBQUVyQmIsRUFBQUEsYUFBYSxFQUFFVyxtQkFBVUMsR0FBVixDQUFjQyxVQUZSO0FBR3JCWCxFQUFBQSxVQUFVLEVBQUVTLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVVLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCTCxNQUFBQSxHQUFHLEVBQUVFLG1CQUFVQztBQURRLEtBQWhCLEVBRU5DO0FBSHVCLEdBQWhCLEVBSVRBO0FBUGtCLENBQXZCO2VBVWVmLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBBZGFwdGl2ZUNhcmRCdWlsZGVyIGZyb20gJy4vQWRhcHRpdmVDYXJkQnVpbGRlcic7XG5pbXBvcnQgQWRhcHRpdmVDYXJkUmVuZGVyZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRSZW5kZXJlcic7XG5cbmNvbnN0IHsgdXNlU3R5bGVPcHRpb25zIH0gPSBob29rcztcblxuY29uc3QgQ29tbW9uQ2FyZCA9ICh7IGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsIGFkYXB0aXZlQ2FyZHMsIGF0dGFjaG1lbnQ6IHsgY29udGVudCB9IH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT3B0aW9uc10gPSB1c2VTdHlsZU9wdGlvbnMoKTtcblxuICBjb25zdCBidWlsdENhcmQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgY29uc3QgYnVpbGRlciA9IG5ldyBBZGFwdGl2ZUNhcmRCdWlsZGVyKGFkYXB0aXZlQ2FyZHMsIHN0eWxlT3B0aW9ucyk7XG5cbiAgICAgIGJ1aWxkZXIuYWRkQ29tbW9uKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gYnVpbGRlci5jYXJkO1xuICAgIH1cbiAgfSwgW2FkYXB0aXZlQ2FyZHMsIGNvbnRlbnQsIHN0eWxlT3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFkYXB0aXZlQ2FyZFJlbmRlcmVyXG4gICAgICBhZGFwdGl2ZUNhcmQ9e2J1aWx0Q2FyZH1cbiAgICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9XG4gICAgICB0YXBBY3Rpb249e2NvbnRlbnQgJiYgY29udGVudC50YXB9XG4gICAgLz5cbiAgKTtcbn07XG5cbkNvbW1vbkNhcmQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdGFwOiBQcm9wVHlwZXMuYW55XG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tb25DYXJkO1xuIl19
