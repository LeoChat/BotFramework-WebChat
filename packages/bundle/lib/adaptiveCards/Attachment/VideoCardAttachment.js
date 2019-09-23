'use strict';

var cov_evr71hj67 = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/VideoCardAttachment.js';
  var hash = '3d534ea1bfa632fe3012d4e2cda8ec60e008a2bc';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/VideoCardAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 9,
          column: 35
        }
      },
      '1': {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 28,
          column: 1
        }
      },
      '2': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 27,
          column: 8
        }
      },
      '3': {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 23,
          column: 13
        }
      },
      '4': {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 51,
          column: 2
        }
      },
      '5': {
        start: {
          line: 53,
          column: 51
        },
        end: {
          line: 53,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 27,
            column: 8
          }
        },
        line: 18
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 20,
            column: 18
          }
        },
        loc: {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 23,
            column: 13
          }
        },
        line: 21
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 53,
            column: 32
          },
          end: {
            line: 53,
            column: 33
          }
        },
        loc: {
          start: {
            line: 53,
            column: 51
          },
          end: {
            line: 53,
            column: 63
          }
        },
        line: 53
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 15,
            column: 14
          },
          end: {
            line: 15,
            column: 98
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 15,
              column: 96
            },
            end: {
              line: 15,
              column: 98
            }
          }
        ],
        line: 15
      },
      '1': {
        loc: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 91
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 15,
              column: 89
            },
            end: {
              line: 15,
              column: 91
            }
          }
        ],
        line: 15
      },
      '2': {
        loc: {
          start: {
            line: 15,
            column: 62
          },
          end: {
            line: 15,
            column: 84
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 15,
              column: 82
            },
            end: {
              line: 15,
              column: 84
            }
          }
        ],
        line: 15
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '3d534ea1bfa632fe3012d4e2cda8ec60e008a2bc'
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

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

var _ref = (cov_evr71hj67.s[0]++, _botframeworkWebchatComponent.Components),
  VideoContent = _ref.VideoContent;

cov_evr71hj67.s[1]++;

var VideoCardAttachment = function VideoCardAttachment(_ref2) {
  var adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    adaptiveCards = _ref2.adaptiveCards,
    attachment = _ref2.attachment,
    _ref2$attachment = _ref2.attachment;
  _ref2$attachment = _ref2$attachment === void 0 ? (cov_evr71hj67.b[0][0]++, {}) : _ref2$attachment;
  var _ref2$attachment$cont = _ref2$attachment.content;
  _ref2$attachment$cont = _ref2$attachment$cont === void 0 ? (cov_evr71hj67.b[1][0]++, {}) : _ref2$attachment$cont;
  var media = _ref2$attachment$cont.media,
    autostart = _ref2$attachment$cont.autostart,
    autoloop = _ref2$attachment$cont.autoloop,
    _ref2$attachment$cont2 = _ref2$attachment$cont.image;
  _ref2$attachment$cont2 = _ref2$attachment$cont2 === void 0 ? (cov_evr71hj67.b[2][0]++, {}) : _ref2$attachment$cont2;
  var imageURL = _ref2$attachment$cont2.url,
    styleSet = _ref2.styleSet;
  cov_evr71hj67.f[0]++;
  cov_evr71hj67.s[2]++;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.audioCardAttachment
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref3, index) {
        var url = _ref3.url;
        cov_evr71hj67.f[1]++;
        cov_evr71hj67.s[3]++;
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

cov_evr71hj67.s[4]++;
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
  }).isRequired,
  styleSet: _propTypes.default.shape({
    audioCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref4) {
  var styleSet = _ref4.styleSet;
  cov_evr71hj67.f[2]++;
  cov_evr71hj67.s[5]++;
  return {
    styleSet: styleSet
  };
})(VideoCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwiVmlkZW9Db250ZW50IiwiVmlkZW9DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJtZWRpYSIsImF1dG9zdGFydCIsImF1dG9sb29wIiwiaW1hZ2UiLCJpbWFnZVVSTCIsInVybCIsInN0eWxlU2V0IiwiYXVkaW9DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYm9vbCIsInN0cmluZyIsImFycmF5T2YiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O2tDQUV5QkEsd0M7SUFBakJDLFksUUFBQUEsWTs7OztBQUVSLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsUUFPMUI7QUFBQSxNQU5BQyxzQkFNQSxTQU5BQSxzQkFNQTtBQUFBLE1BTEFDLGFBS0EsU0FMQUEsYUFLQTtBQUFBLE1BSkFDLFVBSUEsU0FKQUEsVUFJQTtBQUFBLCtCQUhBQSxVQUdBO0FBQUEsNkVBSDhGLEVBRzlGO0FBQUEsK0NBSGNDLE9BR2Q7QUFBQSx1RkFIdUYsRUFHdkY7QUFBQSxNQUh5QkMsS0FHekIseUJBSHlCQSxLQUd6QjtBQUFBLE1BSGdDQyxTQUdoQyx5QkFIZ0NBLFNBR2hDO0FBQUEsTUFIMkNDLFFBRzNDLHlCQUgyQ0EsUUFHM0M7QUFBQSxxREFIcURDLEtBR3JEO0FBQUEseUZBSGdGLEVBR2hGO0FBQUEsTUFIbUVDLFFBR25FLDBCQUg4REMsR0FHOUQ7QUFBQSxNQUZBQyxRQUVBLFNBRkFBLFFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBSyxJQUFBLFNBQVMsRUFBRUEsUUFBUSxDQUFDQztBQUF6QixLQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHUCxLQUFLLENBQUNRLEdBQU4sQ0FBVSxpQkFBVUMsS0FBVixFQUNUO0FBQUEsUUFEWUosR0FDWixTQURZQSxHQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUksTUFBQSxHQUFHLEVBQUVJO0FBQVQsT0FDRSw2QkFBQyxZQUFEO0FBQWMsTUFBQSxRQUFRLEVBQUVSLFNBQXhCO0FBQW1DLE1BQUEsSUFBSSxFQUFFQyxRQUF6QztBQUFtRCxNQUFBLE1BQU0sRUFBRUUsUUFBM0Q7QUFBcUUsTUFBQSxHQUFHLEVBQUVDO0FBQTFFLE1BREY7QUFFSyxHQUhOLENBREgsQ0FERixFQVFFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxzQkFBc0IsRUFBRVQsc0JBQXBDO0FBQTRELElBQUEsYUFBYSxFQUFFQyxhQUEzRTtBQUEwRixJQUFBLFVBQVUsRUFBRUM7QUFBdEcsSUFSRjtBQVNNLENBaEJSOzs7QUFtQkFILG1CQUFtQixDQUFDZSxTQUFwQixHQUFnQztBQUM5QmQsRUFBQUEsc0JBQXNCLEVBQUVlLG1CQUFVQyxHQUFWLENBQWNDLFVBRFI7QUFFOUJoQixFQUFBQSxhQUFhLEVBQUVjLG1CQUFVQyxHQUFWLENBQWNDLFVBRkM7QUFHOUJmLEVBQUFBLFVBQVUsRUFBRWEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJmLElBQUFBLE9BQU8sRUFBRVksbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJaLE1BQUFBLFFBQVEsRUFBRVMsbUJBQVVJLElBREc7QUFFdkJkLE1BQUFBLFNBQVMsRUFBRVUsbUJBQVVJLElBRkU7QUFHdkJaLE1BQUFBLEtBQUssRUFBRVEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDckJULFFBQUFBLEdBQUcsRUFBRU0sbUJBQVVLO0FBRE0sT0FBaEIsQ0FIZ0I7QUFNdkJoQixNQUFBQSxLQUFLLEVBQUVXLG1CQUFVTSxPQUFWLENBQ0xOLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RULFFBQUFBLEdBQUcsRUFBRU0sbUJBQVVLO0FBREQsT0FBaEIsQ0FESztBQU5nQixLQUFoQjtBQURpQixHQUFoQixFQWFUSCxVQWhCMkI7QUFpQjlCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCUCxJQUFBQSxtQkFBbUIsRUFBRUksbUJBQVVDLEdBQVYsQ0FBY0MsVUFEWDtBQUV4QkssSUFBQUEsT0FBTyxFQUFFUCxtQkFBVUMsR0FBVixDQUFjQztBQUZDLEdBQWhCLEVBR1BBO0FBcEIyQixDQUFoQzs7ZUF1QmUsb0RBQWlCLGlCQUFtQjtBQUFBLE1BQWhCUCxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURYLG1CQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgY29ubmVjdFRvV2ViQ2hhdCB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgQ29tbW9uQ2FyZCBmcm9tICcuL0NvbW1vbkNhcmQnO1xuXG5jb25zdCB7IFZpZGVvQ29udGVudCB9ID0gQ29tcG9uZW50cztcblxuY29uc3QgVmlkZW9DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHsgY29udGVudDogeyBtZWRpYSwgYXV0b3N0YXJ0LCBhdXRvbG9vcCwgaW1hZ2U6IHsgdXJsOiBpbWFnZVVSTCB9ID0ge30gfSA9IHt9IH0gPSB7fSxcbiAgc3R5bGVTZXRcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlU2V0LmF1ZGlvQ2FyZEF0dGFjaG1lbnR9PlxuICAgIDx1bCBjbGFzc05hbWU9XCJtZWRpYS1saXN0XCI+XG4gICAgICB7bWVkaWEubWFwKCh7IHVybCB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgPFZpZGVvQ29udGVudCBhdXRvUGxheT17YXV0b3N0YXJ0fSBsb29wPXthdXRvbG9vcH0gcG9zdGVyPXtpbWFnZVVSTH0gc3JjPXt1cmx9IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxDb21tb25DYXJkIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9IGFkYXB0aXZlQ2FyZHM9e2FkYXB0aXZlQ2FyZHN9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gIDwvZGl2PlxuKTtcblxuVmlkZW9DYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhdXRvbG9vcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBhdXRvc3RhcnQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaW1hZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSksXG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXVkaW9DYXJkQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShWaWRlb0NhcmRBdHRhY2htZW50KTtcbiJdfQ==
