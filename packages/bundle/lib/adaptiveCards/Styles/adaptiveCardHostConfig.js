'use strict';

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
        : _botframeworkWebchatComponent.defaultStyleOptions,
    accent = _ref.accent,
    bubbleTextColor = _ref.bubbleTextColor,
    cardEmphasisBackgroundColor = _ref.cardEmphasisBackgroundColor,
    primaryFont = _ref.primaryFont,
    subtle = _ref.subtle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9hZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRTdHlsZU9wdGlvbnMiLCJhY2NlbnQiLCJidWJibGVUZXh0Q29sb3IiLCJjYXJkRW1waGFzaXNCYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5Rm9udCIsInN1YnRsZSIsImNvbnRhaW5lclN0eWxlcyIsImRlZmF1bHQiLCJmb3JlZ3JvdW5kQ29sb3JzIiwiZW1waGFzaXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdXBwb3J0c0ludGVyYWN0aXZpdHkiLCJmb250RmFtaWx5IiwiaW1hZ2VTaXplcyIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJhY3Rpb25zIiwiYWN0aW9uQWxpZ25tZW50IiwiYWN0aW9uc09yaWVudGF0aW9uIiwiYnV0dG9uU3BhY2luZyIsIm1heEFjdGlvbnMiLCJzaG93Q2FyZCIsImFjdGlvbk1vZGUiLCJpbmxpbmVUb3BNYXJnaW4iLCJzcGFjaW5nIiwiYWRhcHRpdmVDYXJkIiwiYWxsb3dDdXN0b21TdHlsZSIsImltYWdlU2V0IiwiaW1hZ2VTaXplIiwibWF4SW1hZ2VIZWlnaHQiLCJmYWN0U2V0IiwidGl0bGUiLCJjb2xvciIsInNpemUiLCJpc1N1YnRsZSIsIndlaWdodCIsIndyYXAiLCJtYXhXaWR0aCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7ZUFFZTtBQUFBLGlGQU1YQSxpREFOVztBQUFBLE1BQ2JDLE1BRGEsUUFDYkEsTUFEYTtBQUFBLE1BRWJDLGVBRmEsUUFFYkEsZUFGYTtBQUFBLE1BR2JDLDJCQUhhLFFBR2JBLDJCQUhhO0FBQUEsTUFJYkMsV0FKYSxRQUliQSxXQUphO0FBQUEsTUFLYkMsTUFMYSxRQUtiQSxNQUxhOztBQUFBLFNBTWM7QUFDM0JDLElBQUFBLGVBQWUsRUFBRTtBQUNmQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsZ0JBQWdCLEVBQUU7QUFDaEJELFVBQUFBLE9BQU8sRUFBRTtBQUNQQSxZQUFBQSxPQUFPLEVBQUVMLGVBREY7QUFFUEcsWUFBQUEsTUFBTSxFQUFOQTtBQUZPLFdBRE87QUFLaEJKLFVBQUFBLE1BQU0sRUFBRTtBQUNOTSxZQUFBQSxPQUFPLEVBQUVOLE1BREg7QUFFTkksWUFBQUEsTUFBTSxFQUFFSjtBQUZGO0FBTFE7QUFEWCxPQURNO0FBYWZRLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxlQUFlLEVBQUVQLDJCQURUO0FBRVJJLFFBQUFBLE9BQU8sRUFBRTtBQUNQQSxVQUFBQSxPQUFPLEVBQUVMLGVBREY7QUFFUEcsVUFBQUEsTUFBTSxFQUFOQTtBQUZPO0FBRkQ7QUFiSyxLQURVO0FBc0IzQk0sSUFBQUEscUJBQXFCLEVBQUUsSUF0Qkk7QUF1QjNCQyxJQUFBQSxVQUFVLEVBQUVSLFdBdkJlO0FBd0IzQlMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLE1BQUFBLEtBQUssRUFBRSxFQURHO0FBRVZDLE1BQUFBLE1BQU0sRUFBRSxFQUZFO0FBR1ZDLE1BQUFBLEtBQUssRUFBRTtBQUhHLEtBeEJlO0FBNkIzQkMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGVBQWUsRUFBRSxTQURWO0FBRVBDLE1BQUFBLGtCQUFrQixFQUFFLFVBRmI7QUFHUEMsTUFBQUEsYUFBYSxFQUFFLENBSFI7QUFJUEMsTUFBQUEsVUFBVSxFQUFFLEdBSkw7QUFLUEMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLFVBQVUsRUFBRSxRQURKO0FBRVJDLFFBQUFBLGVBQWUsRUFBRTtBQUZULE9BTEg7QUFTUEMsTUFBQUEsT0FBTyxFQUFFO0FBVEYsS0E3QmtCO0FBd0MzQkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1pDLE1BQUFBLGdCQUFnQixFQUFFO0FBRE4sS0F4Q2E7QUEyQzNCQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkMsTUFBQUEsU0FBUyxFQUFFLFFBREg7QUFFUkMsTUFBQUEsY0FBYyxFQUFFO0FBRlIsS0EzQ2lCO0FBK0MzQkMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxLQUFLLEVBQUUsU0FERjtBQUVMQyxRQUFBQSxJQUFJLEVBQUUsU0FGRDtBQUdMQyxRQUFBQSxRQUFRLEVBQUUsS0FITDtBQUlMQyxRQUFBQSxNQUFNLEVBQUUsUUFKSDtBQUtMQyxRQUFBQSxJQUFJLEVBQUUsSUFMRDtBQU1MQyxRQUFBQSxRQUFRLEVBQUU7QUFOTCxPQURBO0FBU1BDLE1BQUFBLEtBQUssRUFBRTtBQUNMTixRQUFBQSxLQUFLLEVBQUUsU0FERjtBQUVMQyxRQUFBQSxJQUFJLEVBQUUsU0FGRDtBQUdMQyxRQUFBQSxRQUFRLEVBQUUsS0FITDtBQUlMQyxRQUFBQSxNQUFNLEVBQUUsU0FKSDtBQUtMQyxRQUFBQSxJQUFJLEVBQUU7QUFMRCxPQVRBO0FBZ0JQWixNQUFBQSxPQUFPLEVBQUU7QUFoQkY7QUEvQ2tCLEdBTmQ7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdFN0eWxlT3B0aW9ucyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG4vLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hZGFwdGl2ZS1jYXJkcy9yZW5kZXJpbmctY2FyZHMvaG9zdC1jb25maWdcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgYWNjZW50LFxuICBidWJibGVUZXh0Q29sb3IsXG4gIGNhcmRFbXBoYXNpc0JhY2tncm91bmRDb2xvcixcbiAgcHJpbWFyeUZvbnQsXG4gIHN1YnRsZVxufSA9IGRlZmF1bHRTdHlsZU9wdGlvbnMpID0+ICh7XG4gIGNvbnRhaW5lclN0eWxlczoge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGZvcmVncm91bmRDb2xvcnM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlZmF1bHQ6IGJ1YmJsZVRleHRDb2xvcixcbiAgICAgICAgICBzdWJ0bGVcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZW50OiB7XG4gICAgICAgICAgZGVmYXVsdDogYWNjZW50LFxuICAgICAgICAgIHN1YnRsZTogYWNjZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGVtcGhhc2lzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNhcmRFbXBoYXNpc0JhY2tncm91bmRDb2xvcixcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZGVmYXVsdDogYnViYmxlVGV4dENvbG9yLFxuICAgICAgICBzdWJ0bGVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHN1cHBvcnRzSW50ZXJhY3Rpdml0eTogdHJ1ZSxcbiAgZm9udEZhbWlseTogcHJpbWFyeUZvbnQsXG4gIGltYWdlU2l6ZXM6IHtcbiAgICBzbWFsbDogNDAsXG4gICAgbWVkaXVtOiA4MCxcbiAgICBsYXJnZTogMTYwXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBhY3Rpb25BbGlnbm1lbnQ6ICdzdHJldGNoJyxcbiAgICBhY3Rpb25zT3JpZW50YXRpb246ICd2ZXJ0aWNhbCcsXG4gICAgYnV0dG9uU3BhY2luZzogOCxcbiAgICBtYXhBY3Rpb25zOiAxMDAsXG4gICAgc2hvd0NhcmQ6IHtcbiAgICAgIGFjdGlvbk1vZGU6ICdpbmxpbmUnLFxuICAgICAgaW5saW5lVG9wTWFyZ2luOiA4XG4gICAgfSxcbiAgICBzcGFjaW5nOiAnZGVmYXVsdCdcbiAgfSxcbiAgYWRhcHRpdmVDYXJkOiB7XG4gICAgYWxsb3dDdXN0b21TdHlsZTogZmFsc2VcbiAgfSxcbiAgaW1hZ2VTZXQ6IHtcbiAgICBpbWFnZVNpemU6ICdtZWRpdW0nLFxuICAgIG1heEltYWdlSGVpZ2h0OiAxMDBcbiAgfSxcbiAgZmFjdFNldDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBjb2xvcjogJ2RlZmF1bHQnLFxuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgaXNTdWJ0bGU6IGZhbHNlLFxuICAgICAgd2VpZ2h0OiAnYm9sZGVyJyxcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBtYXhXaWR0aDogMTUwXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgY29sb3I6ICdkZWZhdWx0JyxcbiAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgIGlzU3VidGxlOiBmYWxzZSxcbiAgICAgIHdlaWdodDogJ2RlZmF1bHQnLFxuICAgICAgd3JhcDogdHJ1ZVxuICAgIH0sXG4gICAgc3BhY2luZzogOFxuICB9XG59KTtcbiJdfQ==
