'use strict';

var cov_1tprtwwrct = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/VideoCardAttachment.js';
  var hash = '876cac4f9ca5b633d60fc579ccb468a5252667e5';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/VideoCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 29
        }
      },
      '1': {
        start: {
          line: 10,
          column: 25
        },
        end: {
          line: 10,
          column: 35
        }
      },
      '2': {
        start: {
          line: 12,
          column: 28
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '3': {
        start: {
          line: 18,
          column: 65
        },
        end: {
          line: 18,
          column: 78
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
          line: 55,
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
            column: 28
          },
          end: {
            line: 12,
            column: 29
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
            column: 98
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 96
            },
            end: {
              line: 16,
              column: 98
            }
          }
        ],
        line: 16
      },
      '1': {
        loc: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 16,
            column: 91
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 89
            },
            end: {
              line: 16,
              column: 91
            }
          }
        ],
        line: 16
      },
      '2': {
        loc: {
          start: {
            line: 16,
            column: 62
          },
          end: {
            line: 16,
            column: 84
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 82
            },
            end: {
              line: 16,
              column: 84
            }
          }
        ],
        line: 16
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
      '2': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '876cac4f9ca5b633d60fc579ccb468a5252667e5'
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

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

var _ref = (cov_1tprtwwrct.s[0]++, _botframeworkWebchatComponent.hooks),
  useStyleSet = _ref.useStyleSet;

var _ref2 = (cov_1tprtwwrct.s[1]++, _botframeworkWebchatComponent.Components),
  VideoContent = _ref2.VideoContent;

cov_1tprtwwrct.s[2]++;

var VideoCardAttachment = function VideoCardAttachment(_ref3) {
  var adaptiveCardHostConfig = _ref3.adaptiveCardHostConfig,
    adaptiveCards = _ref3.adaptiveCards,
    attachment = _ref3.attachment,
    _ref3$attachment = _ref3.attachment;
  _ref3$attachment = _ref3$attachment === void 0 ? (cov_1tprtwwrct.b[0][0]++, {}) : _ref3$attachment;
  var _ref3$attachment$cont = _ref3$attachment.content;
  _ref3$attachment$cont = _ref3$attachment$cont === void 0 ? (cov_1tprtwwrct.b[1][0]++, {}) : _ref3$attachment$cont;
  var media = _ref3$attachment$cont.media,
    autostart = _ref3$attachment$cont.autostart,
    autoloop = _ref3$attachment$cont.autoloop,
    _ref3$attachment$cont2 = _ref3$attachment$cont.image;
  _ref3$attachment$cont2 = _ref3$attachment$cont2 === void 0 ? (cov_1tprtwwrct.b[2][0]++, {}) : _ref3$attachment$cont2;
  var imageURL = _ref3$attachment$cont2.url;
  cov_1tprtwwrct.f[0]++;

  var _ref4 = (cov_1tprtwwrct.s[3]++, useStyleSet()),
    _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
    audioCardAttachmentStyleSet = _ref5[0].audioCardAttachment;

  cov_1tprtwwrct.s[4]++;
  return _react.default.createElement(
    'div',
    {
      className: audioCardAttachmentStyleSet
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref6, index) {
        var url = _ref6.url;
        cov_1tprtwwrct.f[1]++;
        cov_1tprtwwrct.s[5]++;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          _react.default.createElement(VideoContent, {
            autoPlay: autostart,
            loop: autoloop,
            poster: imageURL,
            src: url
          })
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

cov_1tprtwwrct.s[6]++;
VideoCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autoloop: _propTypes.default.bool,
      autostart: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string
      }),
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          url: _propTypes.default.string
        })
      )
    })
  }).isRequired
};
var _default = VideoCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJob29rcyIsInVzZVN0eWxlU2V0IiwiQ29tcG9uZW50cyIsIlZpZGVvQ29udGVudCIsIlZpZGVvQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwibWVkaWEiLCJhdXRvc3RhcnQiLCJhdXRvbG9vcCIsImltYWdlIiwiaW1hZ2VVUkwiLCJ1cmwiLCJhdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXQiLCJhdWRpb0NhcmRBdHRhY2htZW50IiwibWFwIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJib29sIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUNBOzttQ0FFd0JBLG1DO0lBQWhCQyxXLFFBQUFBLFc7O29DQUNpQkMsd0M7SUFBakJDLFksU0FBQUEsWTs7OztBQUVSLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsUUFLdEI7QUFBQSxNQUpKQyxzQkFJSSxTQUpKQSxzQkFJSTtBQUFBLE1BSEpDLGFBR0ksU0FISkEsYUFHSTtBQUFBLE1BRkpDLFVBRUksU0FGSkEsVUFFSTtBQUFBLCtCQURKQSxVQUNJO0FBQUEsOEVBRDBGLEVBQzFGO0FBQUEsK0NBRFVDLE9BQ1Y7QUFBQSx3RkFEbUYsRUFDbkY7QUFBQSxNQURxQkMsS0FDckIseUJBRHFCQSxLQUNyQjtBQUFBLE1BRDRCQyxTQUM1Qix5QkFENEJBLFNBQzVCO0FBQUEsTUFEdUNDLFFBQ3ZDLHlCQUR1Q0EsUUFDdkM7QUFBQSxxREFEaURDLEtBQ2pEO0FBQUEsMEZBRDRFLEVBQzVFO0FBQUEsTUFEK0RDLFFBQy9ELDBCQUQwREMsR0FDMUQ7QUFBQTs7QUFBQSxzQ0FDMkRiLFdBQVcsRUFEdEU7QUFBQTtBQUFBLE1BQzBCYywyQkFEMUIsWUFDS0MsbUJBREw7O0FBQUE7QUFHSixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dOLEtBQUssQ0FBQ1EsR0FBTixDQUFVLGlCQUFVQyxLQUFWLEVBQ1Q7QUFBQSxRQURZSixHQUNaLFNBRFlBLEdBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBSSxNQUFBLEdBQUcsRUFBRUk7QUFBVCxPQUNFLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLFFBQVEsRUFBRVIsU0FBeEI7QUFBbUMsTUFBQSxJQUFJLEVBQUVDLFFBQXpDO0FBQW1ELE1BQUEsTUFBTSxFQUFFRSxRQUEzRDtBQUFxRSxNQUFBLEdBQUcsRUFBRUM7QUFBMUUsTUFERjtBQUVLLEdBSE4sQ0FESCxDQURGLEVBUUUsNkJBQUMsbUJBQUQ7QUFDRSxJQUFBLHNCQUFzQixFQUFFVCxzQkFEMUI7QUFFRSxJQUFBLGFBQWEsRUFBRUMsYUFGakI7QUFHRSxJQUFBLFVBQVUsRUFBRUM7QUFIZCxJQVJGLENBREY7QUFnQkQsQ0F4QkQ7OztBQTBCQUgsbUJBQW1CLENBQUNlLFNBQXBCLEdBQWdDO0FBQzlCZCxFQUFBQSxzQkFBc0IsRUFBRWUsbUJBQVVDLEdBQVYsQ0FBY0MsVUFEUjtBQUU5QmhCLEVBQUFBLGFBQWEsRUFBRWMsbUJBQVVDLEdBQVYsQ0FBY0MsVUFGQztBQUc5QmYsRUFBQUEsVUFBVSxFQUFFYSxtQkFBVUcsS0FBVixDQUFnQjtBQUMxQmYsSUFBQUEsT0FBTyxFQUFFWSxtQkFBVUcsS0FBVixDQUFnQjtBQUN2QlosTUFBQUEsUUFBUSxFQUFFUyxtQkFBVUksSUFERztBQUV2QmQsTUFBQUEsU0FBUyxFQUFFVSxtQkFBVUksSUFGRTtBQUd2QlosTUFBQUEsS0FBSyxFQUFFUSxtQkFBVUcsS0FBVixDQUFnQjtBQUNyQlQsUUFBQUEsR0FBRyxFQUFFTSxtQkFBVUs7QUFETSxPQUFoQixDQUhnQjtBQU12QmhCLE1BQUFBLEtBQUssRUFBRVcsbUJBQVVNLE9BQVYsQ0FDTE4sbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDZFQsUUFBQUEsR0FBRyxFQUFFTSxtQkFBVUs7QUFERCxPQUFoQixDQURLO0FBTmdCLEtBQWhCO0FBRGlCLEdBQWhCLEVBYVRIO0FBaEIyQixDQUFoQztlQW1CZWxCLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcblxuY29uc3QgeyB1c2VTdHlsZVNldCB9ID0gaG9va3M7XG5jb25zdCB7IFZpZGVvQ29udGVudCB9ID0gQ29tcG9uZW50cztcblxuY29uc3QgVmlkZW9DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHsgY29udGVudDogeyBtZWRpYSwgYXV0b3N0YXJ0LCBhdXRvbG9vcCwgaW1hZ2U6IHsgdXJsOiBpbWFnZVVSTCB9ID0ge30gfSA9IHt9IH0gPSB7fVxufSkgPT4ge1xuICBjb25zdCBbeyBhdWRpb0NhcmRBdHRhY2htZW50OiBhdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2F1ZGlvQ2FyZEF0dGFjaG1lbnRTdHlsZVNldH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxuICAgICAgICB7bWVkaWEubWFwKCh7IHVybCB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxWaWRlb0NvbnRlbnQgYXV0b1BsYXk9e2F1dG9zdGFydH0gbG9vcD17YXV0b2xvb3B9IHBvc3Rlcj17aW1hZ2VVUkx9IHNyYz17dXJsfSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxDb21tb25DYXJkXG4gICAgICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9XG4gICAgICAgIGFkYXB0aXZlQ2FyZHM9e2FkYXB0aXZlQ2FyZHN9XG4gICAgICAgIGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVmlkZW9DYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhdXRvbG9vcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBhdXRvc3RhcnQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaW1hZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSksXG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9DYXJkQXR0YWNobWVudDtcbiJdfQ==
