'use strict';

var cov_17s1on1jls = (function() {
  var path =
    '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AnimationCardAttachment.js';
  var hash = 'f18e9f322c182b8b37498a6e8bab63ae7bb48b71';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AnimationCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 39
        },
        end: {
          line: 9,
          column: 49
        }
      },
      '1': {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 29
        }
      },
      '2': {
        start: {
          line: 12,
          column: 32
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '3': {
        start: {
          line: 18,
          column: 73
        },
        end: {
          line: 18,
          column: 86
        }
      },
      '4': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 35,
          column: 4
        }
      },
      '5': {
        start: {
          line: 24,
          column: 10
        },
        end: {
          line: 26,
          column: 15
        }
      },
      '6': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 51,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 12,
            column: 32
          },
          end: {
            line: 12,
            column: 33
          }
        },
        loc: {
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 19
          },
          end: {
            line: 23,
            column: 20
          }
        },
        loc: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 26,
            column: 15
          }
        },
        line: 24
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 14
          },
          end: {
            line: 16,
            column: 46
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 44
            },
            end: {
              line: 16,
              column: 46
            }
          }
        ],
        line: 16
      },
      '1': {
        loc: {
          start: {
            line: 16,
            column: 27
          },
          end: {
            line: 16,
            column: 37
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 35
            },
            end: {
              line: 16,
              column: 37
            }
          }
        ],
        line: 16
      },
      '2': {
        loc: {
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 23,
            column: 34
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 23,
              column: 32
            },
            end: {
              line: 23,
              column: 34
            }
          }
        ],
        line: 23
      },
      '3': {
        loc: {
          start: {
            line: 25,
            column: 13
          },
          end: {
            line: 25,
            column: 119
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 25,
              column: 36
            },
            end: {
              line: 25,
              column: 76
            }
          },
          {
            start: {
              line: 25,
              column: 79
            },
            end: {
              line: 25,
              column: 119
            }
          }
        ],
        line: 25
      }
    },
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
      '1': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0],
      '3': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'f18e9f322c182b8b37498a6e8bab63ae7bb48b71'
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

var _ref = (cov_17s1on1jls.s[0]++, _botframeworkWebchatComponent.Components),
  ImageContent = _ref.ImageContent,
  VideoContent = _ref.VideoContent;

var _ref2 = (cov_17s1on1jls.s[1]++, _botframeworkWebchatComponent.hooks),
  useStyleSet = _ref2.useStyleSet;

cov_17s1on1jls.s[2]++;

var AnimationCardAttachment = function AnimationCardAttachment(_ref3) {
  var adaptiveCardHostConfig = _ref3.adaptiveCardHostConfig,
    adaptiveCards = _ref3.adaptiveCards,
    attachment = _ref3.attachment,
    _ref3$attachment = _ref3.attachment;
  _ref3$attachment = _ref3$attachment === void 0 ? (cov_17s1on1jls.b[0][0]++, {}) : _ref3$attachment;
  var _ref3$attachment$cont = _ref3$attachment.content.media,
    media = _ref3$attachment$cont === void 0 ? (cov_17s1on1jls.b[1][0]++, []) : _ref3$attachment$cont;
  cov_17s1on1jls.f[0]++;

  var _ref4 = (cov_17s1on1jls.s[3]++, useStyleSet()),
    _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
    animationCardAttachmentStyleSet = _ref5[0].animationCardAttachment;

  cov_17s1on1jls.s[4]++;
  return _react.default.createElement(
    'div',
    {
      className: animationCardAttachmentStyleSet
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref6, index) {
        var _ref6$profile = _ref6.profile,
          profile = _ref6$profile === void 0 ? (cov_17s1on1jls.b[2][0]++, '') : _ref6$profile,
          url = _ref6.url;
        cov_17s1on1jls.f[1]++;
        cov_17s1on1jls.s[5]++;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          /\.gif$/i.test(url)
            ? (cov_17s1on1jls.b[3][0]++,
              _react.default.createElement(ImageContent, {
                alt: profile,
                src: url
              }))
            : (cov_17s1on1jls.b[3][1]++,
              _react.default.createElement(VideoContent, {
                alt: profile,
                src: url
              }))
        );
      })
    ),
    _react.default.createElement(_CommonCard.default, {
      adaptiveCardHostConfig: adaptiveCardHostConfig,
      adaptiveCards: adaptiveCards,
      attachment: attachment
    })
  );
};

cov_17s1on1jls.s[6]++;
AnimationCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          profile: _propTypes.default.string,
          url: _propTypes.default.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};
var _default = AnimationCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50cyIsIkltYWdlQ29udGVudCIsIlZpZGVvQ29udGVudCIsImhvb2tzIiwidXNlU3R5bGVTZXQiLCJBbmltYXRpb25DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJtZWRpYSIsImFuaW1hdGlvbkNhcmRBdHRhY2htZW50U3R5bGVTZXQiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvZmlsZSIsInVybCIsInRlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzttQ0FFdUNBLHdDO0lBQS9CQyxZLFFBQUFBLFk7SUFBY0MsWSxRQUFBQSxZOztvQ0FDRUMsbUM7SUFBaEJDLFcsU0FBQUEsVzs7OztBQUVSLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsUUFLMUI7QUFBQSxNQUpKQyxzQkFJSSxTQUpKQSxzQkFJSTtBQUFBLE1BSEpDLGFBR0ksU0FISkEsYUFHSTtBQUFBLE1BRkpDLFVBRUksU0FGSkEsVUFFSTtBQUFBLCtCQURKQSxVQUNJO0FBQUEsOEVBRHNDLEVBQ3RDO0FBQUEsK0NBRFVDLE9BQ1YsQ0FEcUJDLEtBQ3JCO0FBQUEsTUFEcUJBLEtBQ3JCLGlFQUQ2QixFQUM3QjtBQUFBOztBQUFBLHNDQUNtRU4sV0FBVyxFQUQ5RTtBQUFBO0FBQUEsTUFDOEJPLCtCQUQ5QixZQUNLQyx1QkFETDs7QUFBQTtBQUdKLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUQ7QUFBaEIsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0QsS0FBSyxDQUFDRyxHQUFOLENBQVUsaUJBQXdCQyxLQUF4QixFQUNUO0FBQUEsOEJBRFlDLE9BQ1o7QUFBQSxRQURZQSxPQUNaLHlEQURzQixFQUN0QjtBQUFBLFFBRDBCQyxHQUMxQixTQUQwQkEsR0FDMUI7QUFBQTtBQUFBO0FBQUE7QUFBSSxNQUFBLEdBQUcsRUFBRUY7QUFBVCxPQUNHLFVBQVdHLElBQVgsQ0FBZ0JELEdBQWhCLCtCQUF1Qiw2QkFBQyxZQUFEO0FBQWMsTUFBQSxHQUFHLEVBQUVELE9BQW5CO0FBQTRCLE1BQUEsR0FBRyxFQUFFQztBQUFqQyxNQUF2QiwrQkFBa0UsNkJBQUMsWUFBRDtBQUFjLE1BQUEsR0FBRyxFQUFFRCxPQUFuQjtBQUE0QixNQUFBLEdBQUcsRUFBRUM7QUFBakMsTUFBbEUsQ0FESDtBQUVLLEdBSE4sQ0FESCxDQURGLEVBUUUsNkJBQUMsbUJBQUQ7QUFDRSxJQUFBLHNCQUFzQixFQUFFVixzQkFEMUI7QUFFRSxJQUFBLGFBQWEsRUFBRUMsYUFGakI7QUFHRSxJQUFBLFVBQVUsRUFBRUM7QUFIZCxJQVJGLENBREY7QUFnQkQsQ0F4QkQ7OztBQTBCQUgsdUJBQXVCLENBQUNhLFNBQXhCLEdBQW9DO0FBQ2xDWixFQUFBQSxzQkFBc0IsRUFBRWEsbUJBQVVDLEdBQVYsQ0FBY0MsVUFESjtBQUVsQ2QsRUFBQUEsYUFBYSxFQUFFWSxtQkFBVUMsR0FBVixDQUFjQyxVQUZLO0FBR2xDYixFQUFBQSxVQUFVLEVBQUVXLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVVLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCWixNQUFBQSxLQUFLLEVBQUVTLG1CQUFVSSxPQUFWLENBQ0xKLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RQLFFBQUFBLE9BQU8sRUFBRUksbUJBQVVLLE1BREw7QUFFZFIsUUFBQUEsR0FBRyxFQUFFRyxtQkFBVUssTUFBVixDQUFpQkg7QUFGUixPQUFoQixDQURLLEVBS0xBO0FBTnFCLEtBQWhCLEVBT05BO0FBUnVCLEdBQWhCLEVBU1RBO0FBWitCLENBQXBDO2VBZWVoQix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50cywgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tb25DYXJkIGZyb20gJy4vQ29tbW9uQ2FyZCc7XG5cbmNvbnN0IHsgSW1hZ2VDb250ZW50LCBWaWRlb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5jb25zdCB7IHVzZVN0eWxlU2V0IH0gPSBob29rcztcblxuY29uc3QgQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQgPSAoe1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBhZGFwdGl2ZUNhcmRzLFxuICBhdHRhY2htZW50LFxuICBhdHRhY2htZW50OiB7IGNvbnRlbnQ6IHsgbWVkaWEgPSBbXSB9IH0gPSB7fVxufSkgPT4ge1xuICBjb25zdCBbeyBhbmltYXRpb25DYXJkQXR0YWNobWVudDogYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZVNldH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxuICAgICAgICB7bWVkaWEubWFwKCh7IHByb2ZpbGUgPSAnJywgdXJsIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgey9cXC5naWYkL2l1LnRlc3QodXJsKSA/IDxJbWFnZUNvbnRlbnQgYWx0PXtwcm9maWxlfSBzcmM9e3VybH0gLz4gOiA8VmlkZW9Db250ZW50IGFsdD17cHJvZmlsZX0gc3JjPXt1cmx9IC8+fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxDb21tb25DYXJkXG4gICAgICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9XG4gICAgICAgIGFkYXB0aXZlQ2FyZHM9e2FkYXB0aXZlQ2FyZHN9XG4gICAgICAgIGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHByb2ZpbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSlcbiAgICAgICkuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQ7XG4iXX0=
