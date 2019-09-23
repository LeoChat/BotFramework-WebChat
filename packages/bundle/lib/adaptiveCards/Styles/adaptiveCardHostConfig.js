'use strict';

var cov_2d8zavifk = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/adaptiveCardHostConfig.js';
  var hash = '2c3ca831a9b8b547f861ac3e8c77745c265fdd43';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/adaptiveCards/Styles/adaptiveCardHostConfig.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 75,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 10,
            column: 29
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 4,
            column: 16
          },
          end: {
            line: 10,
            column: 23
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 10,
              column: 4
            },
            end: {
              line: 10,
              column: 23
            }
          }
        ],
        line: 4
      }
    },
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '2c3ca831a9b8b547f861ac3e8c77745c265fdd43'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _botframeworkWebchatComponent = require('botframework-webchat-component');

// https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config
var _default = function _default() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : (cov_2d8zavifk.b[0][0]++, _botframeworkWebchatComponent.defaultStyleOptions),
    accent = _ref.accent,
    bubbleTextColor = _ref.bubbleTextColor,
    cardEmphasisBackgroundColor = _ref.cardEmphasisBackgroundColor,
    primaryFont = _ref.primaryFont,
    subtle = _ref.subtle;

  cov_2d8zavifk.f[0]++;
  cov_2d8zavifk.s[0]++;
  return {
    containerStyles: {
      default: {
        foregroundColors: {
          default: {
            default: bubbleTextColor,
            subtle: subtle
          },
          accent: {
            default: accent,
            subtle: accent
          }
        }
      },
      emphasis: {
        backgroundColor: cardEmphasisBackgroundColor,
        default: {
          default: bubbleTextColor,
          subtle: subtle
        }
      }
    },
    supportsInteractivity: true,
    fontFamily: primaryFont,
    imageSizes: {
      small: 40,
      medium: 80,
      large: 160
    },
    actions: {
      actionAlignment: 'stretch',
      actionsOrientation: 'vertical',
      buttonSpacing: 8,
      maxActions: 100,
      showCard: {
        actionMode: 'inline',
        inlineTopMargin: 8
      },
      spacing: 'default'
    },
    adaptiveCard: {
      allowCustomStyle: false
    },
    imageSet: {
      imageSize: 'medium',
      maxImageHeight: 100
    },
    factSet: {
      title: {
        color: 'default',
        size: 'default',
        isSubtle: false,
        weight: 'bolder',
        wrap: true,
        maxWidth: 150
      },
      value: {
        color: 'default',
        size: 'default',
        isSubtle: false,
        weight: 'default',
        wrap: true
      },
      spacing: 8
    }
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9hZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRTdHlsZU9wdGlvbnMiLCJhY2NlbnQiLCJidWJibGVUZXh0Q29sb3IiLCJjYXJkRW1waGFzaXNCYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5Rm9udCIsInN1YnRsZSIsImNvbnRhaW5lclN0eWxlcyIsImRlZmF1bHQiLCJmb3JlZ3JvdW5kQ29sb3JzIiwiZW1waGFzaXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdXBwb3J0c0ludGVyYWN0aXZpdHkiLCJmb250RmFtaWx5IiwiaW1hZ2VTaXplcyIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJhY3Rpb25zIiwiYWN0aW9uQWxpZ25tZW50IiwiYWN0aW9uc09yaWVudGF0aW9uIiwiYnV0dG9uU3BhY2luZyIsIm1heEFjdGlvbnMiLCJzaG93Q2FyZCIsImFjdGlvbk1vZGUiLCJpbmxpbmVUb3BNYXJnaW4iLCJzcGFjaW5nIiwiYWRhcHRpdmVDYXJkIiwiYWxsb3dDdXN0b21TdHlsZSIsImltYWdlU2V0IiwiaW1hZ2VTaXplIiwibWF4SW1hZ2VIZWlnaHQiLCJmYWN0U2V0IiwidGl0bGUiLCJjb2xvciIsInNpemUiLCJpc1N1YnRsZSIsIndlaWdodCIsIndyYXAiLCJtYXhXaWR0aCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtlQUVlLG9CQU1jO0FBQUEsMkdBQXpCQSxpREFBeUI7QUFBQSxNQUwzQkMsTUFLMkIsUUFMM0JBLE1BSzJCO0FBQUEsTUFKM0JDLGVBSTJCLFFBSjNCQSxlQUkyQjtBQUFBLE1BSDNCQywyQkFHMkIsUUFIM0JBLDJCQUcyQjtBQUFBLE1BRjNCQyxXQUUyQixRQUYzQkEsV0FFMkI7QUFBQSxNQUQzQkMsTUFDMkIsUUFEM0JBLE1BQzJCOztBQUFBO0FBQUE7QUFBQTtBQUMzQkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2ZDLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkQsVUFBQUEsT0FBTyxFQUFFO0FBQ1BBLFlBQUFBLE9BQU8sRUFBRUwsZUFERjtBQUVQRyxZQUFBQSxNQUFNLEVBQU5BO0FBRk8sV0FETztBQUtoQkosVUFBQUEsTUFBTSxFQUFFO0FBQ05NLFlBQUFBLE9BQU8sRUFBRU4sTUFESDtBQUVOSSxZQUFBQSxNQUFNLEVBQUVKO0FBRkY7QUFMUTtBQURYLE9BRE07QUFhZlEsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLGVBQWUsRUFBRVAsMkJBRFQ7QUFFUkksUUFBQUEsT0FBTyxFQUFFO0FBQ1BBLFVBQUFBLE9BQU8sRUFBRUwsZUFERjtBQUVQRyxVQUFBQSxNQUFNLEVBQU5BO0FBRk87QUFGRDtBQWJLLEtBRFU7QUFzQjNCTSxJQUFBQSxxQkFBcUIsRUFBRSxJQXRCSTtBQXVCM0JDLElBQUFBLFVBQVUsRUFBRVIsV0F2QmU7QUF3QjNCUyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsS0FBSyxFQUFFLEVBREc7QUFFVkMsTUFBQUEsTUFBTSxFQUFFLEVBRkU7QUFHVkMsTUFBQUEsS0FBSyxFQUFFO0FBSEcsS0F4QmU7QUE2QjNCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsZUFBZSxFQUFFLFNBRFY7QUFFUEMsTUFBQUEsa0JBQWtCLEVBQUUsVUFGYjtBQUdQQyxNQUFBQSxhQUFhLEVBQUUsQ0FIUjtBQUlQQyxNQUFBQSxVQUFVLEVBQUUsR0FKTDtBQUtQQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkMsUUFBQUEsVUFBVSxFQUFFLFFBREo7QUFFUkMsUUFBQUEsZUFBZSxFQUFFO0FBRlQsT0FMSDtBQVNQQyxNQUFBQSxPQUFPLEVBQUU7QUFURixLQTdCa0I7QUF3QzNCQyxJQUFBQSxZQUFZLEVBQUU7QUFDWkMsTUFBQUEsZ0JBQWdCLEVBQUU7QUFETixLQXhDYTtBQTJDM0JDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxTQUFTLEVBQUUsUUFESDtBQUVSQyxNQUFBQSxjQUFjLEVBQUU7QUFGUixLQTNDaUI7QUErQzNCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLEtBQUssRUFBRSxTQURGO0FBRUxDLFFBQUFBLElBQUksRUFBRSxTQUZEO0FBR0xDLFFBQUFBLFFBQVEsRUFBRSxLQUhMO0FBSUxDLFFBQUFBLE1BQU0sRUFBRSxRQUpIO0FBS0xDLFFBQUFBLElBQUksRUFBRSxJQUxEO0FBTUxDLFFBQUFBLFFBQVEsRUFBRTtBQU5MLE9BREE7QUFTUEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFFBQUFBLEtBQUssRUFBRSxTQURGO0FBRUxDLFFBQUFBLElBQUksRUFBRSxTQUZEO0FBR0xDLFFBQUFBLFFBQVEsRUFBRSxLQUhMO0FBSUxDLFFBQUFBLE1BQU0sRUFBRSxTQUpIO0FBS0xDLFFBQUFBLElBQUksRUFBRTtBQUxELE9BVEE7QUFnQlBaLE1BQUFBLE9BQU8sRUFBRTtBQWhCRjtBQS9Da0I7QUFpRTVCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0U3R5bGVPcHRpb25zIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50Jztcbi8vIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FkYXB0aXZlLWNhcmRzL3JlbmRlcmluZy1jYXJkcy9ob3N0LWNvbmZpZ1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBhY2NlbnQsXG4gIGJ1YmJsZVRleHRDb2xvcixcbiAgY2FyZEVtcGhhc2lzQmFja2dyb3VuZENvbG9yLFxuICBwcmltYXJ5Rm9udCxcbiAgc3VidGxlXG59ID0gZGVmYXVsdFN0eWxlT3B0aW9ucykgPT4gKHtcbiAgY29udGFpbmVyU3R5bGVzOiB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgZm9yZWdyb3VuZENvbG9yczoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVmYXVsdDogYnViYmxlVGV4dENvbG9yLFxuICAgICAgICAgIHN1YnRsZVxuICAgICAgICB9LFxuICAgICAgICBhY2NlbnQ6IHtcbiAgICAgICAgICBkZWZhdWx0OiBhY2NlbnQsXG4gICAgICAgICAgc3VidGxlOiBhY2NlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1waGFzaXM6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY2FyZEVtcGhhc2lzQmFja2dyb3VuZENvbG9yLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBkZWZhdWx0OiBidWJibGVUZXh0Q29sb3IsXG4gICAgICAgIHN1YnRsZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc3VwcG9ydHNJbnRlcmFjdGl2aXR5OiB0cnVlLFxuICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udCxcbiAgaW1hZ2VTaXplczoge1xuICAgIHNtYWxsOiA0MCxcbiAgICBtZWRpdW06IDgwLFxuICAgIGxhcmdlOiAxNjBcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGFjdGlvbkFsaWdubWVudDogJ3N0cmV0Y2gnLFxuICAgIGFjdGlvbnNPcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBidXR0b25TcGFjaW5nOiA4LFxuICAgIG1heEFjdGlvbnM6IDEwMCxcbiAgICBzaG93Q2FyZDoge1xuICAgICAgYWN0aW9uTW9kZTogJ2lubGluZScsXG4gICAgICBpbmxpbmVUb3BNYXJnaW46IDhcbiAgICB9LFxuICAgIHNwYWNpbmc6ICdkZWZhdWx0J1xuICB9LFxuICBhZGFwdGl2ZUNhcmQ6IHtcbiAgICBhbGxvd0N1c3RvbVN0eWxlOiBmYWxzZVxuICB9LFxuICBpbWFnZVNldDoge1xuICAgIGltYWdlU2l6ZTogJ21lZGl1bScsXG4gICAgbWF4SW1hZ2VIZWlnaHQ6IDEwMFxuICB9LFxuICBmYWN0U2V0OiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICBpc1N1YnRsZTogZmFsc2UsXG4gICAgICB3ZWlnaHQ6ICdib2xkZXInLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIG1heFdpZHRoOiAxNTBcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICBjb2xvcjogJ2RlZmF1bHQnLFxuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgaXNTdWJ0bGU6IGZhbHNlLFxuICAgICAgd2VpZ2h0OiAnZGVmYXVsdCcsXG4gICAgICB3cmFwOiB0cnVlXG4gICAgfSxcbiAgICBzcGFjaW5nOiA4XG4gIH1cbn0pO1xuIl19
