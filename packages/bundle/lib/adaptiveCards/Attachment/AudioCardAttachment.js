'use strict';

var cov_2nco3652ul = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AudioCardAttachment.js';
  var hash = '577f6aa9caf691e326dc685e7ee27c33e422cc2a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AudioCardAttachment.js',
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
          column: 28
        },
        end: {
          line: 38,
          column: 1
        }
      },
      '3': {
        start: {
          line: 20,
          column: 65
        },
        end: {
          line: 20,
          column: 78
        }
      },
      '4': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 37,
          column: 4
        }
      },
      '5': {
        start: {
          line: 26,
          column: 10
        },
        end: {
          line: 28,
          column: 15
        }
      },
      '6': {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 57,
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
            line: 19,
            column: 6
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 25,
            column: 19
          },
          end: {
            line: 25,
            column: 20
          }
        },
        loc: {
          start: {
            line: 26,
            column: 10
          },
          end: {
            line: 28,
            column: 15
          }
        },
        line: 26
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
            line: 18,
            column: 8
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 18,
              column: 6
            },
            end: {
              line: 18,
              column: 8
            }
          }
        ],
        line: 16
      },
      '1': {
        loc: {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 105
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 103
            },
            end: {
              line: 17,
              column: 105
            }
          }
        ],
        line: 17
      },
      '2': {
        loc: {
          start: {
            line: 17,
            column: 15
          },
          end: {
            line: 17,
            column: 32
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 27
            },
            end: {
              line: 17,
              column: 32
            }
          }
        ],
        line: 17
      },
      '3': {
        loc: {
          start: {
            line: 17,
            column: 34
          },
          end: {
            line: 17,
            column: 50
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 45
            },
            end: {
              line: 17,
              column: 50
            }
          }
        ],
        line: 17
      },
      '4': {
        loc: {
          start: {
            line: 17,
            column: 59
          },
          end: {
            line: 17,
            column: 86
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 84
            },
            end: {
              line: 17,
              column: 86
            }
          }
        ],
        line: 17
      },
      '5': {
        loc: {
          start: {
            line: 17,
            column: 66
          },
          end: {
            line: 17,
            column: 79
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 77
            },
            end: {
              line: 17,
              column: 79
            }
          }
        ],
        line: 17
      },
      '6': {
        loc: {
          start: {
            line: 17,
            column: 88
          },
          end: {
            line: 17,
            column: 98
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 96
            },
            end: {
              line: 17,
              column: 98
            }
          }
        ],
        line: 17
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
      '3': [0],
      '4': [0],
      '5': [0],
      '6': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '577f6aa9caf691e326dc685e7ee27c33e422cc2a'
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

var _ref = (cov_2nco3652ul.s[0]++, _botframeworkWebchatComponent.Components),
  AudioContent = _ref.AudioContent;

var _ref2 = (cov_2nco3652ul.s[1]++, _botframeworkWebchatComponent.hooks),
  useStyleSet = _ref2.useStyleSet;

cov_2nco3652ul.s[2]++;

var AudioCardAttachment = function AudioCardAttachment(_ref3) {
  var adaptiveCardHostConfig = _ref3.adaptiveCardHostConfig,
    adaptiveCards = _ref3.adaptiveCards,
    attachment = _ref3.attachment,
    _ref3$attachment = _ref3.attachment;
  _ref3$attachment = _ref3$attachment === void 0 ? (cov_2nco3652ul.b[0][0]++, {}) : _ref3$attachment;
  var _ref3$attachment$cont = _ref3$attachment.content;
  _ref3$attachment$cont = _ref3$attachment$cont === void 0 ? (cov_2nco3652ul.b[1][0]++, {}) : _ref3$attachment$cont;
  var _ref3$attachment$cont2 = _ref3$attachment$cont.autostart,
    autostart = _ref3$attachment$cont2 === void 0 ? (cov_2nco3652ul.b[2][0]++, false) : _ref3$attachment$cont2,
    _ref3$attachment$cont3 = _ref3$attachment$cont.autoloop,
    autoloop = _ref3$attachment$cont3 === void 0 ? (cov_2nco3652ul.b[3][0]++, false) : _ref3$attachment$cont3,
    _ref3$attachment$cont4 = _ref3$attachment$cont.image;
  _ref3$attachment$cont4 = _ref3$attachment$cont4 === void 0 ? (cov_2nco3652ul.b[4][0]++, {}) : _ref3$attachment$cont4;
  var _ref3$attachment$cont5 = _ref3$attachment$cont4.url,
    imageURL = _ref3$attachment$cont5 === void 0 ? (cov_2nco3652ul.b[5][0]++, '') : _ref3$attachment$cont5,
    _ref3$attachment$cont6 = _ref3$attachment$cont.media,
    media = _ref3$attachment$cont6 === void 0 ? (cov_2nco3652ul.b[6][0]++, []) : _ref3$attachment$cont6;
  cov_2nco3652ul.f[0]++;

  var _ref4 = (cov_2nco3652ul.s[3]++, useStyleSet()),
    _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
    audioCardAttachmentStyleSet = _ref5[0].audioCardAttachment;

  cov_2nco3652ul.s[4]++;
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
        cov_2nco3652ul.f[1]++;
        cov_2nco3652ul.s[5]++;
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

cov_2nco3652ul.s[6]++;
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
  }).isRequired
};
var _default = AudioCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwiQXVkaW9Db250ZW50IiwiaG9va3MiLCJ1c2VTdHlsZVNldCIsIkF1ZGlvQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwiYXV0b3N0YXJ0IiwiYXV0b2xvb3AiLCJpbWFnZSIsInVybCIsImltYWdlVVJMIiwibWVkaWEiLCJhdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXQiLCJhdWRpb0NhcmRBdHRhY2htZW50IiwibWFwIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJib29sIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7bUNBRXlCQSx3QztJQUFqQkMsWSxRQUFBQSxZOztvQ0FDZ0JDLG1DO0lBQWhCQyxXLFNBQUFBLFc7Ozs7QUFFUixJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLFFBT3RCO0FBQUEsTUFOSkMsc0JBTUksU0FOSkEsc0JBTUk7QUFBQSxNQUxKQyxhQUtJLFNBTEpBLGFBS0k7QUFBQSxNQUpKQyxVQUlJLFNBSkpBLFVBSUk7QUFBQSwrQkFISkEsVUFHSTtBQUFBLDhFQURBLEVBQ0E7QUFBQSwrQ0FGRkMsT0FFRTtBQUFBLHdGQUZpRyxFQUVqRztBQUFBLHFEQUZTQyxTQUVUO0FBQUEsTUFGU0EsU0FFVCxrRUFGcUIsS0FFckI7QUFBQSxxREFGNEJDLFFBRTVCO0FBQUEsTUFGNEJBLFFBRTVCLGtFQUZ1QyxLQUV2QztBQUFBLHFEQUY4Q0MsS0FFOUM7QUFBQSwwRkFGOEUsRUFFOUU7QUFBQSxzREFGdURDLEdBRXZEO0FBQUEsTUFGNERDLFFBRTVELGtFQUZ1RSxFQUV2RTtBQUFBLHFEQUZrRkMsS0FFbEY7QUFBQSxNQUZrRkEsS0FFbEYsa0VBRjBGLEVBRTFGO0FBQUE7O0FBQUEsc0NBQzJEWCxXQUFXLEVBRHRFO0FBQUE7QUFBQSxNQUMwQlksMkJBRDFCLFlBQ0tDLG1CQURMOztBQUFBO0FBR0osU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRDtBQUFoQixLQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHRCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxpQkFBVUMsS0FBVixFQUNUO0FBQUEsUUFEWU4sR0FDWixTQURZQSxHQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUksTUFBQSxHQUFHLEVBQUVNO0FBQVQsT0FDRSw2QkFBQyxZQUFEO0FBQWMsTUFBQSxRQUFRLEVBQUVULFNBQXhCO0FBQW1DLE1BQUEsSUFBSSxFQUFFQyxRQUF6QztBQUFtRCxNQUFBLE1BQU0sRUFBRUcsUUFBM0Q7QUFBcUUsTUFBQSxHQUFHLEVBQUVEO0FBQTFFLE1BREY7QUFFSyxHQUhOLENBREgsQ0FERixFQVFFLDZCQUFDLG1CQUFEO0FBQ0UsSUFBQSxzQkFBc0IsRUFBRVAsc0JBRDFCO0FBRUUsSUFBQSxhQUFhLEVBQUVDLGFBRmpCO0FBR0UsSUFBQSxVQUFVLEVBQUVDO0FBSGQsSUFSRixDQURGO0FBZ0JELENBMUJEOzs7QUE0QkFILG1CQUFtQixDQUFDZSxTQUFwQixHQUFnQztBQUM5QmQsRUFBQUEsc0JBQXNCLEVBQUVlLG1CQUFVQyxHQUFWLENBQWNDLFVBRFI7QUFFOUJoQixFQUFBQSxhQUFhLEVBQUVjLG1CQUFVQyxHQUFWLENBQWNDLFVBRkM7QUFHOUJmLEVBQUFBLFVBQVUsRUFBRWEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJmLElBQUFBLE9BQU8sRUFBRVksbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJkLE1BQUFBLFNBQVMsRUFBRVcsbUJBQVVJLElBREU7QUFFdkJkLE1BQUFBLFFBQVEsRUFBRVUsbUJBQVVJLElBRkc7QUFHdkJiLE1BQUFBLEtBQUssRUFBRVMsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDckJYLFFBQUFBLEdBQUcsRUFBRVEsbUJBQVVLLE1BQVYsQ0FBaUJIO0FBREQsT0FBaEIsQ0FIZ0I7QUFNdkJSLE1BQUFBLEtBQUssRUFBRU0sbUJBQVVNLE9BQVYsQ0FDTE4sbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDZFgsUUFBQUEsR0FBRyxFQUFFUSxtQkFBVUssTUFBVixDQUFpQkg7QUFEUixPQUFoQixFQUVHQSxVQUhFLEVBSUxBO0FBVnFCLEtBQWhCO0FBRGlCLEdBQWhCLEVBYVRBO0FBaEIyQixDQUFoQztlQW1CZWxCLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBob29rcyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcblxuY29uc3QgeyBBdWRpb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5jb25zdCB7IHVzZVN0eWxlU2V0IH0gPSBob29rcztcblxuY29uc3QgQXVkaW9DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHtcbiAgICBjb250ZW50OiB7IGF1dG9zdGFydCA9IGZhbHNlLCBhdXRvbG9vcCA9IGZhbHNlLCBpbWFnZTogeyB1cmw6IGltYWdlVVJMID0gJycgfSA9IHt9LCBtZWRpYSA9IFtdIH0gPSB7fVxuICB9ID0ge31cbn0pID0+IHtcbiAgY29uc3QgW3sgYXVkaW9DYXJkQXR0YWNobWVudDogYXVkaW9DYXJkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXR9PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3RcIj5cbiAgICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8QXVkaW9Db250ZW50IGF1dG9QbGF5PXthdXRvc3RhcnR9IGxvb3A9e2F1dG9sb29wfSBwb3N0ZXI9e2ltYWdlVVJMfSBzcmM9e3VybH0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8Q29tbW9uQ2FyZFxuICAgICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgICBhZGFwdGl2ZUNhcmRzPXthZGFwdGl2ZUNhcmRzfVxuICAgICAgICBhdHRhY2htZW50PXthdHRhY2htZW50fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkF1ZGlvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGF1dG9sb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSksXG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICAgKS5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9DYXJkQXR0YWNobWVudDtcbiJdfQ==
