'use strict';

var cov_1it5szq7n3 = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AnimationCardAttachment.js';
  var hash = '5530ed317383ada291ad25936f86f75da2f9d416';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Attachment/AnimationCardAttachment.js',
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
          line: 11,
          column: 32
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
          line: 47,
          column: 2
        }
      },
      '5': {
        start: {
          line: 49,
          column: 51
        },
        end: {
          line: 49,
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
            column: 32
          },
          end: {
            line: 11,
            column: 33
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
            line: 49,
            column: 32
          },
          end: {
            line: 49,
            column: 33
          }
        },
        loc: {
          start: {
            line: 49,
            column: 51
          },
          end: {
            line: 49,
            column: 63
          }
        },
        line: 49
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
            column: 46
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 15,
              column: 44
            },
            end: {
              line: 15,
              column: 46
            }
          }
        ],
        line: 15
      },
      '1': {
        loc: {
          start: {
            line: 15,
            column: 27
          },
          end: {
            line: 15,
            column: 37
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 15,
              column: 35
            },
            end: {
              line: 15,
              column: 37
            }
          }
        ],
        line: 15
      },
      '2': {
        loc: {
          start: {
            line: 20,
            column: 20
          },
          end: {
            line: 20,
            column: 32
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 20,
              column: 30
            },
            end: {
              line: 20,
              column: 32
            }
          }
        ],
        line: 20
      },
      '3': {
        loc: {
          start: {
            line: 22,
            column: 11
          },
          end: {
            line: 22,
            column: 117
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 22,
              column: 34
            },
            end: {
              line: 22,
              column: 74
            }
          },
          {
            start: {
              line: 22,
              column: 77
            },
            end: {
              line: 22,
              column: 117
            }
          }
        ],
        line: 22
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
      '3': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '5530ed317383ada291ad25936f86f75da2f9d416'
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

var _ref = (cov_1it5szq7n3.s[0]++, _botframeworkWebchatComponent.Components),
  ImageContent = _ref.ImageContent,
  VideoContent = _ref.VideoContent;

cov_1it5szq7n3.s[1]++;

var AnimationCardAttachment = function AnimationCardAttachment(_ref2) {
  var adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    adaptiveCards = _ref2.adaptiveCards,
    attachment = _ref2.attachment,
    _ref2$attachment = _ref2.attachment;
  _ref2$attachment = _ref2$attachment === void 0 ? (cov_1it5szq7n3.b[0][0]++, {}) : _ref2$attachment;
  var _ref2$attachment$cont = _ref2$attachment.content.media,
    media = _ref2$attachment$cont === void 0 ? (cov_1it5szq7n3.b[1][0]++, []) : _ref2$attachment$cont,
    styleSet = _ref2.styleSet;
  cov_1it5szq7n3.f[0]++;
  cov_1it5szq7n3.s[2]++;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.animationCardAttachment
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref3, index) {
        var _ref3$profile = _ref3.profile,
          profile = _ref3$profile === void 0 ? (cov_1it5szq7n3.b[2][0]++, '') : _ref3$profile,
          url = _ref3.url;
        cov_1it5szq7n3.f[1]++;
        cov_1it5szq7n3.s[3]++;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          /\.gif$/i.test(url)
            ? (cov_1it5szq7n3.b[3][0]++,
              _react.default.createElement(ImageContent, {
                alt: profile,
                src: url
              }))
            : (cov_1it5szq7n3.b[3][1]++,
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

cov_1it5szq7n3.s[4]++;
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
  }).isRequired,
  styleSet: _propTypes.default.shape({
    animationCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref4) {
  var styleSet = _ref4.styleSet;
  cov_1it5szq7n3.f[2]++;
  cov_1it5szq7n3.s[5]++;
  return {
    styleSet: styleSet
  };
})(AnimationCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50cyIsIkltYWdlQ29udGVudCIsIlZpZGVvQ29udGVudCIsIkFuaW1hdGlvbkNhcmRBdHRhY2htZW50IiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHMiLCJhdHRhY2htZW50IiwiY29udGVudCIsIm1lZGlhIiwic3R5bGVTZXQiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvZmlsZSIsInVybCIsInRlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7bUNBRXVDQSx3QztJQUEvQkMsWSxRQUFBQSxZO0lBQWNDLFksUUFBQUEsWTs7OztBQUV0QixJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLFFBTzlCO0FBQUEsTUFOQUMsc0JBTUEsU0FOQUEsc0JBTUE7QUFBQSxNQUxBQyxhQUtBLFNBTEFBLGFBS0E7QUFBQSxNQUpBQyxVQUlBLFNBSkFBLFVBSUE7QUFBQSwrQkFIQUEsVUFHQTtBQUFBLDhFQUgwQyxFQUcxQztBQUFBLCtDQUhjQyxPQUdkLENBSHlCQyxLQUd6QjtBQUFBLE1BSHlCQSxLQUd6QixpRUFIaUMsRUFHakM7QUFBQSxNQUZBQyxRQUVBLFNBRkFBLFFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBSyxJQUFBLFNBQVMsRUFBRUEsUUFBUSxDQUFDQztBQUF6QixLQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxpQkFBd0JDLEtBQXhCLEVBQ1Q7QUFBQSw4QkFEWUMsT0FDWjtBQUFBLFFBRFlBLE9BQ1oseURBRHNCLEVBQ3RCO0FBQUEsUUFEMEJDLEdBQzFCLFNBRDBCQSxHQUMxQjtBQUFBO0FBQUE7QUFBQTtBQUFJLE1BQUEsR0FBRyxFQUFFRjtBQUFULE9BQ0csVUFBV0csSUFBWCxDQUFnQkQsR0FBaEIsK0JBQXVCLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEdBQUcsRUFBRUQsT0FBbkI7QUFBNEIsTUFBQSxHQUFHLEVBQUVDO0FBQWpDLE1BQXZCLCtCQUFrRSw2QkFBQyxZQUFEO0FBQWMsTUFBQSxHQUFHLEVBQUVELE9BQW5CO0FBQTRCLE1BQUEsR0FBRyxFQUFFQztBQUFqQyxNQUFsRSxDQURIO0FBRUssR0FITixDQURILENBREYsRUFRRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsc0JBQXNCLEVBQUVWLHNCQUFwQztBQUE0RCxJQUFBLGFBQWEsRUFBRUMsYUFBM0U7QUFBMEYsSUFBQSxVQUFVLEVBQUVDO0FBQXRHLElBUkY7QUFTTSxDQWhCUjs7O0FBbUJBSCx1QkFBdUIsQ0FBQ2EsU0FBeEIsR0FBb0M7QUFDbENaLEVBQUFBLHNCQUFzQixFQUFFYSxtQkFBVUMsR0FBVixDQUFjQyxVQURKO0FBRWxDZCxFQUFBQSxhQUFhLEVBQUVZLG1CQUFVQyxHQUFWLENBQWNDLFVBRks7QUFHbENiLEVBQUFBLFVBQVUsRUFBRVcsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJiLElBQUFBLE9BQU8sRUFBRVUsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJaLE1BQUFBLEtBQUssRUFBRVMsbUJBQVVJLE9BQVYsQ0FDTEosbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDZFAsUUFBQUEsT0FBTyxFQUFFSSxtQkFBVUssTUFETDtBQUVkUixRQUFBQSxHQUFHLEVBQUVHLG1CQUFVSyxNQUFWLENBQWlCSDtBQUZSLE9BQWhCLENBREssRUFLTEE7QUFOcUIsS0FBaEIsRUFPTkE7QUFSdUIsR0FBaEIsRUFTVEEsVUFaK0I7QUFhbENWLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDeEJWLElBQUFBLHVCQUF1QixFQUFFTyxtQkFBVUMsR0FBVixDQUFjQyxVQURmO0FBRXhCSSxJQUFBQSxPQUFPLEVBQUVOLG1CQUFVQyxHQUFWLENBQWNDO0FBRkMsR0FBaEIsRUFHUEE7QUFoQitCLENBQXBDOztlQW1CZSxvREFBaUIsaUJBQW1CO0FBQUEsTUFBaEJWLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBWSxDQUFoRCxFQUFtRE4sdUJBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXG5cbmltcG9ydCB7IENvbXBvbmVudHMsIGNvbm5lY3RUb1dlYkNoYXQgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tb25DYXJkIGZyb20gJy4vQ29tbW9uQ2FyZCc7XG5cbmNvbnN0IHsgSW1hZ2VDb250ZW50LCBWaWRlb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5cbmNvbnN0IEFuaW1hdGlvbkNhcmRBdHRhY2htZW50ID0gKHtcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZyxcbiAgYWRhcHRpdmVDYXJkcyxcbiAgYXR0YWNobWVudCxcbiAgYXR0YWNobWVudDogeyBjb250ZW50OiB7IG1lZGlhID0gW10gfSB9ID0ge30sXG4gIHN0eWxlU2V0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5hbmltYXRpb25DYXJkQXR0YWNobWVudH0+XG4gICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3RcIj5cbiAgICAgIHttZWRpYS5tYXAoKHsgcHJvZmlsZSA9ICcnLCB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIHsvXFwuZ2lmJC9pdS50ZXN0KHVybCkgPyA8SW1hZ2VDb250ZW50IGFsdD17cHJvZmlsZX0gc3JjPXt1cmx9IC8+IDogPFZpZGVvQ29udGVudCBhbHQ9e3Byb2ZpbGV9IHNyYz17dXJsfSAvPn1cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPENvbW1vbkNhcmQgYWRhcHRpdmVDYXJkSG9zdENvbmZpZz17YWRhcHRpdmVDYXJkSG9zdENvbmZpZ30gYWRhcHRpdmVDYXJkcz17YWRhcHRpdmVDYXJkc30gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgPC9kaXY+XG4pO1xuXG5BbmltYXRpb25DYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgcHJvZmlsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgICAgKS5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhbmltYXRpb25DYXJkQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShBbmltYXRpb25DYXJkQXR0YWNobWVudCk7XG4iXX0=
