'use strict';

var cov_ulqii9h4v = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AudioCardAttachment.js';
  var hash = '24e88749720a8be696959ebebaebd1f14773a85c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AudioCardAttachment.js',
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
          line: 30,
          column: 1
        }
      },
      '2': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 29,
          column: 8
        }
      },
      '3': {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 25,
          column: 13
        }
      },
      '4': {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 53,
          column: 2
        }
      },
      '5': {
        start: {
          line: 55,
          column: 51
        },
        end: {
          line: 55,
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
            line: 20,
            column: 2
          },
          end: {
            line: 29,
            column: 8
          }
        },
        line: 20
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 22,
            column: 17
          },
          end: {
            line: 22,
            column: 18
          }
        },
        loc: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 25,
            column: 13
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 55,
            column: 32
          },
          end: {
            line: 55,
            column: 33
          }
        },
        loc: {
          start: {
            line: 55,
            column: 51
          },
          end: {
            line: 55,
            column: 63
          }
        },
        line: 55
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
            line: 17,
            column: 8
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 6
            },
            end: {
              line: 17,
              column: 8
            }
          }
        ],
        line: 15
      },
      '1': {
        loc: {
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 105
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 103
            },
            end: {
              line: 16,
              column: 105
            }
          }
        ],
        line: 16
      },
      '2': {
        loc: {
          start: {
            line: 16,
            column: 15
          },
          end: {
            line: 16,
            column: 32
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 27
            },
            end: {
              line: 16,
              column: 32
            }
          }
        ],
        line: 16
      },
      '3': {
        loc: {
          start: {
            line: 16,
            column: 34
          },
          end: {
            line: 16,
            column: 50
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 45
            },
            end: {
              line: 16,
              column: 50
            }
          }
        ],
        line: 16
      },
      '4': {
        loc: {
          start: {
            line: 16,
            column: 59
          },
          end: {
            line: 16,
            column: 86
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 84
            },
            end: {
              line: 16,
              column: 86
            }
          }
        ],
        line: 16
      },
      '5': {
        loc: {
          start: {
            line: 16,
            column: 66
          },
          end: {
            line: 16,
            column: 79
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 16,
              column: 77
            },
            end: {
              line: 16,
              column: 79
            }
          }
        ],
        line: 16
      },
      '6': {
        loc: {
          start: {
            line: 16,
            column: 88
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
      '2': [0],
      '3': [0],
      '4': [0],
      '5': [0],
      '6': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '24e88749720a8be696959ebebaebd1f14773a85c'
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

var _ref = (cov_ulqii9h4v.s[0]++, _botframeworkWebchatComponent.Components),
  AudioContent = _ref.AudioContent;

cov_ulqii9h4v.s[1]++;

var AudioCardAttachment = function AudioCardAttachment(_ref2) {
  var adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    adaptiveCards = _ref2.adaptiveCards,
    attachment = _ref2.attachment,
    _ref2$attachment = _ref2.attachment;
  _ref2$attachment = _ref2$attachment === void 0 ? (cov_ulqii9h4v.b[0][0]++, {}) : _ref2$attachment;
  var _ref2$attachment$cont = _ref2$attachment.content;
  _ref2$attachment$cont = _ref2$attachment$cont === void 0 ? (cov_ulqii9h4v.b[1][0]++, {}) : _ref2$attachment$cont;
  var _ref2$attachment$cont2 = _ref2$attachment$cont.autostart,
    autostart = _ref2$attachment$cont2 === void 0 ? (cov_ulqii9h4v.b[2][0]++, false) : _ref2$attachment$cont2,
    _ref2$attachment$cont3 = _ref2$attachment$cont.autoloop,
    autoloop = _ref2$attachment$cont3 === void 0 ? (cov_ulqii9h4v.b[3][0]++, false) : _ref2$attachment$cont3,
    _ref2$attachment$cont4 = _ref2$attachment$cont.image;
  _ref2$attachment$cont4 = _ref2$attachment$cont4 === void 0 ? (cov_ulqii9h4v.b[4][0]++, {}) : _ref2$attachment$cont4;
  var _ref2$attachment$cont5 = _ref2$attachment$cont4.url,
    imageURL = _ref2$attachment$cont5 === void 0 ? (cov_ulqii9h4v.b[5][0]++, '') : _ref2$attachment$cont5,
    _ref2$attachment$cont6 = _ref2$attachment$cont.media,
    media = _ref2$attachment$cont6 === void 0 ? (cov_ulqii9h4v.b[6][0]++, []) : _ref2$attachment$cont6,
    styleSet = _ref2.styleSet;
  cov_ulqii9h4v.f[0]++;
  cov_ulqii9h4v.s[2]++;
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
        cov_ulqii9h4v.f[1]++;
        cov_ulqii9h4v.s[3]++;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          _react.default.createElement(AudioContent, {
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

cov_ulqii9h4v.s[4]++;
AudioCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autostart: _propTypes.default.bool,
      autoloop: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string.isRequired
      }),
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          url: _propTypes.default.string.isRequired
        }).isRequired
      ).isRequired
    })
  }).isRequired,
  styleSet: _propTypes.default.shape({
    audioCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref4) {
  var styleSet = _ref4.styleSet;
  cov_ulqii9h4v.f[2]++;
  cov_ulqii9h4v.s[5]++;
  return {
    styleSet: styleSet
  };
})(AudioCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwiQXVkaW9Db250ZW50IiwiQXVkaW9DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJhdXRvc3RhcnQiLCJhdXRvbG9vcCIsImltYWdlIiwidXJsIiwiaW1hZ2VVUkwiLCJtZWRpYSIsInN0eWxlU2V0IiwiYXVkaW9DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYm9vbCIsInN0cmluZyIsImFycmF5T2YiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztrQ0FFeUJBLHdDO0lBQWpCQyxZLFFBQUFBLFk7Ozs7QUFFUixJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLFFBUzFCO0FBQUEsTUFSQUMsc0JBUUEsU0FSQUEsc0JBUUE7QUFBQSxNQVBBQyxhQU9BLFNBUEFBLGFBT0E7QUFBQSxNQU5BQyxVQU1BLFNBTkFBLFVBTUE7QUFBQSwrQkFMQUEsVUFLQTtBQUFBLDZFQUhJLEVBR0o7QUFBQSwrQ0FKRUMsT0FJRjtBQUFBLHVGQUpxRyxFQUlyRztBQUFBLHFEQUphQyxTQUliO0FBQUEsTUFKYUEsU0FJYixpRUFKeUIsS0FJekI7QUFBQSxxREFKZ0NDLFFBSWhDO0FBQUEsTUFKZ0NBLFFBSWhDLGlFQUoyQyxLQUkzQztBQUFBLHFEQUprREMsS0FJbEQ7QUFBQSx5RkFKa0YsRUFJbEY7QUFBQSxzREFKMkRDLEdBSTNEO0FBQUEsTUFKZ0VDLFFBSWhFLGlFQUoyRSxFQUkzRTtBQUFBLHFEQUpzRkMsS0FJdEY7QUFBQSxNQUpzRkEsS0FJdEYsaUVBSjhGLEVBSTlGO0FBQUEsTUFGQUMsUUFFQSxTQUZBQSxRQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUssSUFBQSxTQUFTLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsaUJBQVVDLEtBQVYsRUFDVDtBQUFBLFFBRFlOLEdBQ1osU0FEWUEsR0FDWjtBQUFBO0FBQUE7QUFBQTtBQUFJLE1BQUEsR0FBRyxFQUFFTTtBQUFULE9BQ0UsNkJBQUMsWUFBRDtBQUFjLE1BQUEsUUFBUSxFQUFFVCxTQUF4QjtBQUFtQyxNQUFBLElBQUksRUFBRUMsUUFBekM7QUFBbUQsTUFBQSxNQUFNLEVBQUVHLFFBQTNEO0FBQXFFLE1BQUEsR0FBRyxFQUFFRDtBQUExRSxNQURGO0FBRUssR0FITixDQURILENBREYsRUFRRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsc0JBQXNCLEVBQUVQLHNCQUFwQztBQUE0RCxJQUFBLGFBQWEsRUFBRUMsYUFBM0U7QUFBMEYsSUFBQSxVQUFVLEVBQUVDO0FBQXRHLElBUkY7QUFTTSxDQWxCUjs7O0FBcUJBSCxtQkFBbUIsQ0FBQ2UsU0FBcEIsR0FBZ0M7QUFDOUJkLEVBQUFBLHNCQUFzQixFQUFFZSxtQkFBVUMsR0FBVixDQUFjQyxVQURSO0FBRTlCaEIsRUFBQUEsYUFBYSxFQUFFYyxtQkFBVUMsR0FBVixDQUFjQyxVQUZDO0FBRzlCZixFQUFBQSxVQUFVLEVBQUVhLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCZixJQUFBQSxPQUFPLEVBQUVZLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCZCxNQUFBQSxTQUFTLEVBQUVXLG1CQUFVSSxJQURFO0FBRXZCZCxNQUFBQSxRQUFRLEVBQUVVLG1CQUFVSSxJQUZHO0FBR3ZCYixNQUFBQSxLQUFLLEVBQUVTLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3JCWCxRQUFBQSxHQUFHLEVBQUVRLG1CQUFVSyxNQUFWLENBQWlCSDtBQURELE9BQWhCLENBSGdCO0FBTXZCUixNQUFBQSxLQUFLLEVBQUVNLG1CQUFVTSxPQUFWLENBQ0xOLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RYLFFBQUFBLEdBQUcsRUFBRVEsbUJBQVVLLE1BQVYsQ0FBaUJIO0FBRFIsT0FBaEIsRUFFR0EsVUFIRSxFQUlMQTtBQVZxQixLQUFoQjtBQURpQixHQUFoQixFQWFUQSxVQWhCMkI7QUFpQjlCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCUCxJQUFBQSxtQkFBbUIsRUFBRUksbUJBQVVDLEdBQVYsQ0FBY0MsVUFEWDtBQUV4QkssSUFBQUEsT0FBTyxFQUFFUCxtQkFBVUMsR0FBVixDQUFjQztBQUZDLEdBQWhCLEVBR1BBO0FBcEIyQixDQUFoQzs7ZUF1QmUsb0RBQWlCLGlCQUFtQjtBQUFBLE1BQWhCUCxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURYLG1CQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBjb25uZWN0VG9XZWJDaGF0IH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29tbW9uQ2FyZCBmcm9tICcuL0NvbW1vbkNhcmQnO1xuXG5jb25zdCB7IEF1ZGlvQ29udGVudCB9ID0gQ29tcG9uZW50cztcblxuY29uc3QgQXVkaW9DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHtcbiAgICBjb250ZW50OiB7IGF1dG9zdGFydCA9IGZhbHNlLCBhdXRvbG9vcCA9IGZhbHNlLCBpbWFnZTogeyB1cmw6IGltYWdlVVJMID0gJycgfSA9IHt9LCBtZWRpYSA9IFtdIH0gPSB7fVxuICB9ID0ge30sXG4gIHN0eWxlU2V0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5hdWRpb0NhcmRBdHRhY2htZW50fT5cbiAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxuICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxBdWRpb0NvbnRlbnQgYXV0b1BsYXk9e2F1dG9zdGFydH0gbG9vcD17YXV0b2xvb3B9IHBvc3Rlcj17aW1hZ2VVUkx9IHNyYz17dXJsfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8Q29tbW9uQ2FyZCBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfSBhZGFwdGl2ZUNhcmRzPXthZGFwdGl2ZUNhcmRzfSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICA8L2Rpdj5cbik7XG5cbkF1ZGlvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGF1dG9sb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSksXG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICAgKS5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXVkaW9DYXJkQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShBdWRpb0NhcmRBdHRhY2htZW50KTtcbiJdfQ==
