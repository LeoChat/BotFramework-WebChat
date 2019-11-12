'use strict';

var cov_1xdj4ekccl = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/defaultStyleOptions.js';
  var hash = 'c5c8f6b4b131337ba215dfad4c6ad19cd5d75d1d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Styles/defaultStyleOptions.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 51
        }
      },
      '1': {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 4,
          column: 38
        }
      },
      '2': {
        start: {
          line: 7,
          column: 23
        },
        end: {
          line: 7,
          column: 32
        }
      },
      '3': {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 32
        }
      },
      '4': {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 26
        }
      },
      '5': {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 153,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: 'fontFamily',
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 19
          }
        },
        loc: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 4,
            column: 20
          }
        },
        loc: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 4,
            column: 38
          }
        },
        line: 4
      }
    },
    branchMap: {},
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
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c5c8f6b4b131337ba215dfad4c6ad19cd5d75d1d'
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

/* eslint no-magic-numbers: "off" */
function fontFamily(fonts) {
  cov_1xdj4ekccl.f[0]++;
  cov_1xdj4ekccl.s[0]++;
  return fonts
    .map(function(font) {
      cov_1xdj4ekccl.f[1]++;
      cov_1xdj4ekccl.s[1]++;
      return "'".concat(font, "'");
    })
    .join(', ');
}

var DEFAULT_ACCENT = (cov_1xdj4ekccl.s[2]++, '#0063B1');
var DEFAULT_SUBTLE = (cov_1xdj4ekccl.s[3]++, '#767676'); // With contrast 4.5:1 to white

var PADDING_REGULAR = (cov_1xdj4ekccl.s[4]++, 10);
var DEFAULT_OPTIONS =
  (cov_1xdj4ekccl.s[5]++,
  {
    // Color and paddings
    accent: DEFAULT_ACCENT,
    backgroundColor: 'White',
    cardEmphasisBackgroundColor: '#F0F0F0',
    paddingRegular: PADDING_REGULAR,
    paddingWide: PADDING_REGULAR * 2,
    subtle: DEFAULT_SUBTLE,
    // Word break
    messageActivityWordBreak: 'break-word',
    // 'normal' || 'break-all' || 'break-word' || 'keep-all'
    // Fonts
    fontSizeSmall: '80%',
    monospaceFont: fontFamily(['Consolas', 'Courier New', 'monospace']),
    primaryFont: fontFamily(['Calibri', 'Helvetica Neue', 'Arial', 'sans-serif']),
    // Avatar
    avatarSize: 40,
    botAvatarBackgroundColor: undefined,
    // defaults to accent color
    botAvatarImage: '',
    botAvatarInitials: '',
    userAvatarBackgroundColor: undefined,
    // defaults to accent color
    userAvatarImage: '',
    userAvatarInitials: '',
    // Bubble
    // TODO: Should we make a bubbleFromBot*
    bubbleBackground: 'White',
    bubbleBorderColor: '#E6E6E6',
    bubbleBorderRadius: 2,
    bubbleBorderStyle: 'solid',
    bubbleBorderWidth: 1,
    bubbleFromUserBackground: 'White',
    bubbleFromUserBorderColor: '#E6E6E6',
    bubbleFromUserBorderRadius: 2,
    bubbleFromUserBorderStyle: 'solid',
    bubbleFromUserBorderWidth: 1,
    bubbleFromUserNubOffset: 'bottom',
    bubbleFromUserNubSize: 0,
    bubbleFromUserTextColor: 'Black',
    bubbleImageHeight: 240,
    bubbleMaxWidth: 480,
    // screen width = 600px
    bubbleMinHeight: 40,
    bubbleMinWidth: 250,
    // min screen width = 300px, Edge requires 372px (https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13621468/)
    bubbleNubOffset: 'bottom',
    bubbleNubSize: 0,
    bubbleTextColor: 'Black',
    // Markdown
    markdownRespectCRLF: true,
    // Rich Cards
    richCardWrapTitle: false,
    // Applies to subtitles as well
    // Root
    rootHeight: '100%',
    rootWidth: '100%',
    // Scroll to end button
    hideScrollToEndButton: false,
    // Send box
    hideSendBox: false,
    hideUploadButton: false,
    microphoneButtonColorOnDictate: '#F33',
    sendBoxBackground: 'White',
    sendBoxButtonColor: undefined,
    // defaults to subtle
    sendBoxButtonColorOnDisabled: '#CCC',
    sendBoxButtonColorOnFocus: '#333',
    sendBoxButtonColorOnHover: '#333',
    sendBoxDisabledTextColor: undefined,
    // defaults to subtle
    sendBoxHeight: 40,
    sendBoxMaxHeight: 200,
    sendBoxTextColor: 'Black',
    // TODO: We should deprecate this because there isn't an easy way to make the width of the send box, narrower than the transcript
    sendBoxBorderBottom: '',
    sendBoxBorderLeft: '',
    sendBoxBorderRight: '',
    sendBoxBorderTop: 'solid 1px #E6E6E6',
    sendBoxPlaceholderColor: undefined,
    // defaults to subtle
    sendBoxTextWrap: false,
    // Visually show spoken text
    showSpokenText: false,
    // Suggested actions
    suggestedActionBackground: 'White',
    suggestedActionBorder: undefined,
    // split into 3, null
    suggestedActionBorderColor: undefined,
    // defaults to accent
    suggestedActionBorderStyle: 'solid',
    suggestedActionBorderWidth: 2,
    suggestedActionBorderRadius: 0,
    suggestedActionImageHeight: 20,
    suggestedActionTextColor: null,
    suggestedActionDisabledBackground: undefined,
    // defaults to suggestedActionBackground
    suggestedActionDisabledBorder: null,
    suggestedActionDisabledBorderColor: '#E6E6E6',
    suggestedActionDisabledBorderStyle: 'solid',
    suggestedActionDisabledBorderWidth: 2,
    suggestedActionDisabledTextColor: undefined,
    // defaults to subtle
    suggestedActionHeight: 40,
    // Timestamp
    timestampColor: undefined,
    // defaults to subtle
    timestampFormat: 'relative',
    // 'absolute'
    // Transcript overlay buttons (e.g. carousel and suggested action flippers, scroll to bottom, etc.)
    transcriptOverlayButtonBackground: 'rgba(0, 0, 0, .6)',
    transcriptOverlayButtonBackgroundOnFocus: 'rgba(0, 0, 0, .8)',
    transcriptOverlayButtonBackgroundOnHover: 'rgba(0, 0, 0, .8)',
    transcriptOverlayButtonColor: 'White',
    transcriptOverlayButtonColorOnFocus: undefined,
    // defaults to transcriptOverlayButtonColor
    transcriptOverlayButtonColorOnHover: undefined,
    // defaults to transcriptOverlayButtonColor
    // Video
    videoHeight: 270,
    // based on bubbleMaxWidth, 480 / 16 * 9 = 270
    // Connectivity UI
    connectivityIconPadding: PADDING_REGULAR * 1.2,
    connectivityMarginLeftRight: PADDING_REGULAR * 1.4,
    connectivityMarginTopBottom: PADDING_REGULAR * 0.8,
    connectivityTextSize: '75%',
    failedConnectivity: '#C50F1F',
    slowConnectivity: '#EAA300',
    notificationText: '#5E5E5E',
    typingAnimationBackgroundImage: null,
    typingAnimationDuration: 5000,
    typingAnimationHeight: 20,
    typingAnimationWidth: 64,
    spinnerAnimationBackgroundImage: null,
    spinnerAnimationHeight: 16,
    spinnerAnimationWidth: 16,
    spinnerAnimationPaddingRight: 12,
    enableUploadThumbnail: true,
    uploadThumbnailContentType: 'image/jpeg',
    uploadThumbnailHeight: 360,
    uploadThumbnailQuality: 0.6,
    uploadThumbnailWidth: 720
  });
var _default = DEFAULT_OPTIONS;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdHlsZXMvZGVmYXVsdFN0eWxlT3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJmb250RmFtaWx5IiwiZm9udHMiLCJtYXAiLCJmb250Iiwiam9pbiIsIkRFRkFVTFRfQUNDRU5UIiwiREVGQVVMVF9TVUJUTEUiLCJQQURESU5HX1JFR1VMQVIiLCJERUZBVUxUX09QVElPTlMiLCJhY2NlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkRW1waGFzaXNCYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nUmVndWxhciIsInBhZGRpbmdXaWRlIiwic3VidGxlIiwibWVzc2FnZUFjdGl2aXR5V29yZEJyZWFrIiwiZm9udFNpemVTbWFsbCIsIm1vbm9zcGFjZUZvbnQiLCJwcmltYXJ5Rm9udCIsImF2YXRhclNpemUiLCJib3RBdmF0YXJCYWNrZ3JvdW5kQ29sb3IiLCJ1bmRlZmluZWQiLCJib3RBdmF0YXJJbWFnZSIsImJvdEF2YXRhckluaXRpYWxzIiwidXNlckF2YXRhckJhY2tncm91bmRDb2xvciIsInVzZXJBdmF0YXJJbWFnZSIsInVzZXJBdmF0YXJJbml0aWFscyIsImJ1YmJsZUJhY2tncm91bmQiLCJidWJibGVCb3JkZXJDb2xvciIsImJ1YmJsZUJvcmRlclJhZGl1cyIsImJ1YmJsZUJvcmRlclN0eWxlIiwiYnViYmxlQm9yZGVyV2lkdGgiLCJidWJibGVGcm9tVXNlckJhY2tncm91bmQiLCJidWJibGVGcm9tVXNlckJvcmRlckNvbG9yIiwiYnViYmxlRnJvbVVzZXJCb3JkZXJSYWRpdXMiLCJidWJibGVGcm9tVXNlckJvcmRlclN0eWxlIiwiYnViYmxlRnJvbVVzZXJCb3JkZXJXaWR0aCIsImJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0IiwiYnViYmxlRnJvbVVzZXJOdWJTaXplIiwiYnViYmxlRnJvbVVzZXJUZXh0Q29sb3IiLCJidWJibGVJbWFnZUhlaWdodCIsImJ1YmJsZU1heFdpZHRoIiwiYnViYmxlTWluSGVpZ2h0IiwiYnViYmxlTWluV2lkdGgiLCJidWJibGVOdWJPZmZzZXQiLCJidWJibGVOdWJTaXplIiwiYnViYmxlVGV4dENvbG9yIiwibWFya2Rvd25SZXNwZWN0Q1JMRiIsInJpY2hDYXJkV3JhcFRpdGxlIiwicm9vdEhlaWdodCIsInJvb3RXaWR0aCIsImhpZGVTY3JvbGxUb0VuZEJ1dHRvbiIsImhpZGVTZW5kQm94IiwiaGlkZVVwbG9hZEJ1dHRvbiIsIm1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZSIsInNlbmRCb3hCYWNrZ3JvdW5kIiwic2VuZEJveEJ1dHRvbkNvbG9yIiwic2VuZEJveEJ1dHRvbkNvbG9yT25EaXNhYmxlZCIsInNlbmRCb3hCdXR0b25Db2xvck9uRm9jdXMiLCJzZW5kQm94QnV0dG9uQ29sb3JPbkhvdmVyIiwic2VuZEJveERpc2FibGVkVGV4dENvbG9yIiwic2VuZEJveEhlaWdodCIsInNlbmRCb3hNYXhIZWlnaHQiLCJzZW5kQm94VGV4dENvbG9yIiwic2VuZEJveEJvcmRlckJvdHRvbSIsInNlbmRCb3hCb3JkZXJMZWZ0Iiwic2VuZEJveEJvcmRlclJpZ2h0Iiwic2VuZEJveEJvcmRlclRvcCIsInNlbmRCb3hQbGFjZWhvbGRlckNvbG9yIiwic2VuZEJveFRleHRXcmFwIiwic2hvd1Nwb2tlblRleHQiLCJzdWdnZXN0ZWRBY3Rpb25CYWNrZ3JvdW5kIiwic3VnZ2VzdGVkQWN0aW9uQm9yZGVyIiwic3VnZ2VzdGVkQWN0aW9uQm9yZGVyQ29sb3IiLCJzdWdnZXN0ZWRBY3Rpb25Cb3JkZXJTdHlsZSIsInN1Z2dlc3RlZEFjdGlvbkJvcmRlcldpZHRoIiwic3VnZ2VzdGVkQWN0aW9uQm9yZGVyUmFkaXVzIiwic3VnZ2VzdGVkQWN0aW9uSW1hZ2VIZWlnaHQiLCJzdWdnZXN0ZWRBY3Rpb25UZXh0Q29sb3IiLCJzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJhY2tncm91bmQiLCJzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlciIsInN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyQ29sb3IiLCJzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlclN0eWxlIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCb3JkZXJXaWR0aCIsInN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkVGV4dENvbG9yIiwic3VnZ2VzdGVkQWN0aW9uSGVpZ2h0IiwidGltZXN0YW1wQ29sb3IiLCJ0aW1lc3RhbXBGb3JtYXQiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmQiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3IiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1cyIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkhvdmVyIiwidmlkZW9IZWlnaHQiLCJjb25uZWN0aXZpdHlJY29uUGFkZGluZyIsImNvbm5lY3Rpdml0eU1hcmdpbkxlZnRSaWdodCIsImNvbm5lY3Rpdml0eU1hcmdpblRvcEJvdHRvbSIsImNvbm5lY3Rpdml0eVRleHRTaXplIiwiZmFpbGVkQ29ubmVjdGl2aXR5Iiwic2xvd0Nvbm5lY3Rpdml0eSIsIm5vdGlmaWNhdGlvblRleHQiLCJ0eXBpbmdBbmltYXRpb25CYWNrZ3JvdW5kSW1hZ2UiLCJ0eXBpbmdBbmltYXRpb25EdXJhdGlvbiIsInR5cGluZ0FuaW1hdGlvbkhlaWdodCIsInR5cGluZ0FuaW1hdGlvbldpZHRoIiwic3Bpbm5lckFuaW1hdGlvbkJhY2tncm91bmRJbWFnZSIsInNwaW5uZXJBbmltYXRpb25IZWlnaHQiLCJzcGlubmVyQW5pbWF0aW9uV2lkdGgiLCJzcGlubmVyQW5pbWF0aW9uUGFkZGluZ1JpZ2h0IiwiZW5hYmxlVXBsb2FkVGh1bWJuYWlsIiwidXBsb2FkVGh1bWJuYWlsQ29udGVudFR5cGUiLCJ1cGxvYWRUaHVtYm5haWxIZWlnaHQiLCJ1cGxvYWRUaHVtYm5haWxRdWFsaXR5IiwidXBsb2Fk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QUUxRixlQUFlLEdBQUcsR0F6SHpCO0FBMEh0QjJGLEVBQUFBLG9CQUFvQixFQUFFLEtBMUhBO0FBMkh0QkMsRUFBQUEsa0JBQWtCLEVBQUUsU0EzSEU7QUE0SHRCQyxFQUFBQSxnQkFBZ0IsRUFBRSxTQTVISTtBQTZIdEJDLEVBQUFBLGdCQUFnQixFQUFFLFNBN0hJO0FBK0h0QkMsRUFBQUEsOEJBQThCLEVBQUUsSUEvSFY7QUFnSXRCQyxFQUFBQSx1QkFBdUIsRUFBRSxJQWhJSDtBQWlJdEJDLEVBQUFBLHFCQUFxQixFQUFFLEVBaklEO0FBa0l0QkMsRUFBQUEsb0JBQW9CLEVBQUUsRUFsSUE7QUFvSXRCQyxFQUFBQSwrQkFBK0IsRUFBRSxJQXBJWDtBQXFJdEJDLEVBQUFBLHNCQUFzQixFQUFFLEVBcklGO0FBc0l0QkMsRUFBQUEscUJBQXFCLEVBQUUsRUF0SUQ7QUF1SXRCQyxFQUFBQSw0QkFBNEIsRUFBRSxFQXZJUjtBQXlJdEJDLEVBQUFBLHFCQUFxQixFQUFFLElBeklEO0FBMEl0QkMsRUFBQUEsMEJBQTBCLEVBQUUsWUExSU47QUEySXRCQyxFQUFBQSxxQkFBcUIsRUFBRSxHQTNJRDtBQTRJdEJDLEVBQUFBLHNCQUFzQixFQUFFLEdBNUlGO0FBNkl0QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUE3SUEsQ0FBSCxDQUFyQjtlQWdKZTFHLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogXCJvZmZcIiAqL1xuXG5mdW5jdGlvbiBmb250RmFtaWx5KGZvbnRzKSB7XG4gIHJldHVybiBmb250cy5tYXAoZm9udCA9PiBgJyR7Zm9udH0nYCkuam9pbignLCAnKTtcbn1cblxuY29uc3QgREVGQVVMVF9BQ0NFTlQgPSAnIzAwNjNCMSc7XG5jb25zdCBERUZBVUxUX1NVQlRMRSA9ICcjNzY3Njc2JzsgLy8gV2l0aCBjb250cmFzdCA0LjU6MSB0byB3aGl0ZVxuY29uc3QgUEFERElOR19SRUdVTEFSID0gMTA7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgLy8gQ29sb3IgYW5kIHBhZGRpbmdzXG4gIGFjY2VudDogREVGQVVMVF9BQ0NFTlQsXG4gIGJhY2tncm91bmRDb2xvcjogJ1doaXRlJyxcbiAgY2FyZEVtcGhhc2lzQmFja2dyb3VuZENvbG9yOiAnI0YwRjBGMCcsXG4gIHBhZGRpbmdSZWd1bGFyOiBQQURESU5HX1JFR1VMQVIsXG4gIHBhZGRpbmdXaWRlOiBQQURESU5HX1JFR1VMQVIgKiAyLFxuICBzdWJ0bGU6IERFRkFVTFRfU1VCVExFLFxuXG4gIC8vIFdvcmQgYnJlYWtcbiAgbWVzc2FnZUFjdGl2aXR5V29yZEJyZWFrOiAnYnJlYWstd29yZCcsIC8vICdub3JtYWwnIHx8ICdicmVhay1hbGwnIHx8ICdicmVhay13b3JkJyB8fCAna2VlcC1hbGwnXG5cbiAgLy8gRm9udHNcbiAgZm9udFNpemVTbWFsbDogJzgwJScsXG4gIG1vbm9zcGFjZUZvbnQ6IGZvbnRGYW1pbHkoWydDb25zb2xhcycsICdDb3VyaWVyIE5ldycsICdtb25vc3BhY2UnXSksXG4gIHByaW1hcnlGb250OiBmb250RmFtaWx5KFsnQ2FsaWJyaScsICdIZWx2ZXRpY2EgTmV1ZScsICdBcmlhbCcsICdzYW5zLXNlcmlmJ10pLFxuXG4gIC8vIEF2YXRhclxuICBhdmF0YXJTaXplOiA0MCxcbiAgYm90QXZhdGFyQmFja2dyb3VuZENvbG9yOiB1bmRlZmluZWQsIC8vIGRlZmF1bHRzIHRvIGFjY2VudCBjb2xvclxuICBib3RBdmF0YXJJbWFnZTogJycsXG4gIGJvdEF2YXRhckluaXRpYWxzOiAnJyxcbiAgdXNlckF2YXRhckJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkLCAvLyBkZWZhdWx0cyB0byBhY2NlbnQgY29sb3JcbiAgdXNlckF2YXRhckltYWdlOiAnJyxcbiAgdXNlckF2YXRhckluaXRpYWxzOiAnJyxcblxuICAvLyBCdWJibGVcbiAgLy8gVE9ETzogU2hvdWxkIHdlIG1ha2UgYSBidWJibGVGcm9tQm90KlxuICBidWJibGVCYWNrZ3JvdW5kOiAnV2hpdGUnLFxuICBidWJibGVCb3JkZXJDb2xvcjogJyNFNkU2RTYnLFxuICBidWJibGVCb3JkZXJSYWRpdXM6IDIsXG4gIGJ1YmJsZUJvcmRlclN0eWxlOiAnc29saWQnLFxuICBidWJibGVCb3JkZXJXaWR0aDogMSxcbiAgYnViYmxlRnJvbVVzZXJCYWNrZ3JvdW5kOiAnV2hpdGUnLFxuICBidWJibGVGcm9tVXNlckJvcmRlckNvbG9yOiAnI0U2RTZFNicsXG4gIGJ1YmJsZUZyb21Vc2VyQm9yZGVyUmFkaXVzOiAyLFxuICBidWJibGVGcm9tVXNlckJvcmRlclN0eWxlOiAnc29saWQnLFxuICBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoOiAxLFxuICBidWJibGVGcm9tVXNlck51Yk9mZnNldDogJ2JvdHRvbScsXG4gIGJ1YmJsZUZyb21Vc2VyTnViU2l6ZTogMCxcbiAgYnViYmxlRnJvbVVzZXJUZXh0Q29sb3I6ICdCbGFjaycsXG4gIGJ1YmJsZUltYWdlSGVpZ2h0OiAyNDAsXG4gIGJ1YmJsZU1heFdpZHRoOiA0ODAsIC8vIHNjcmVlbiB3aWR0aCA9IDYwMHB4XG4gIGJ1YmJsZU1pbkhlaWdodDogNDAsXG4gIGJ1YmJsZU1pbldpZHRoOiAyNTAsIC8vIG1pbiBzY3JlZW4gd2lkdGggPSAzMDBweCwgRWRnZSByZXF1aXJlcyAzNzJweCAoaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTM2MjE0NjgvKVxuICBidWJibGVOdWJPZmZzZXQ6ICdib3R0b20nLFxuICBidWJibGVOdWJTaXplOiAwLFxuICBidWJibGVUZXh0Q29sb3I6ICdCbGFjaycsXG5cbiAgLy8gTWFya2Rvd25cbiAgbWFya2Rvd25SZXNwZWN0Q1JMRjogdHJ1ZSxcblxuICAvLyBSaWNoIENhcmRzXG4gIHJpY2hDYXJkV3JhcFRpdGxlOiBmYWxzZSwgLy8gQXBwbGllcyB0byBzdWJ0aXRsZXMgYXMgd2VsbFxuXG4gIC8vIFJvb3RcbiAgcm9vdEhlaWdodDogJzEwMCUnLFxuICByb290V2lkdGg6ICcxMDAlJyxcblxuICAvLyBTY3JvbGwgdG8gZW5kIGJ1dHRvblxuICBoaWRlU2Nyb2xsVG9FbmRCdXR0b246IGZhbHNlLFxuXG4gIC8vIFNlbmQgYm94XG4gIGhpZGVTZW5kQm94OiBmYWxzZSxcbiAgaGlkZVVwbG9hZEJ1dHRvbjogZmFsc2UsXG4gIG1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZTogJyNGMzMnLFxuICBzZW5kQm94QmFja2dyb3VuZDogJ1doaXRlJyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsIC8vIGRlZmF1bHRzIHRvIHN1YnRsZVxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkOiAnI0NDQycsXG4gIHNlbmRCb3hCdXR0b25Db2xvck9uRm9jdXM6ICcjMzMzJyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Ib3ZlcjogJyMzMzMnLFxuICBzZW5kQm94RGlzYWJsZWRUZXh0Q29sb3I6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdHMgdG8gc3VidGxlXG4gIHNlbmRCb3hIZWlnaHQ6IDQwLFxuICBzZW5kQm94TWF4SGVpZ2h0OiAyMDAsXG4gIHNlbmRCb3hUZXh0Q29sb3I6ICdCbGFjaycsXG4gIC8vIFRPRE86IFdlIHNob3VsZCBkZXByZWNhdGUgdGhpcyBiZWNhdXNlIHRoZXJlIGlzbid0IGFuIGVhc3kgd2F5IHRvIG1ha2UgdGhlIHdpZHRoIG9mIHRoZSBzZW5kIGJveCwgbmFycm93ZXIgdGhhbiB0aGUgdHJhbnNjcmlwdFxuICBzZW5kQm94Qm9yZGVyQm90dG9tOiAnJyxcbiAgc2VuZEJveEJvcmRlckxlZnQ6ICcnLFxuICBzZW5kQm94Qm9yZGVyUmlnaHQ6ICcnLFxuICBzZW5kQm94Qm9yZGVyVG9wOiAnc29saWQgMXB4ICNFNkU2RTYnLFxuICBzZW5kQm94UGxhY2Vob2xkZXJDb2xvcjogdW5kZWZpbmVkLCAvLyBkZWZhdWx0cyB0byBzdWJ0bGVcbiAgc2VuZEJveFRleHRXcmFwOiBmYWxzZSxcblxuICAvLyBWaXN1YWxseSBzaG93IHNwb2tlbiB0ZXh0XG4gIHNob3dTcG9rZW5UZXh0OiBmYWxzZSxcblxuICAvLyBTdWdnZXN0ZWQgYWN0aW9uc1xuICBzdWdnZXN0ZWRBY3Rpb25CYWNrZ3JvdW5kOiAnV2hpdGUnLFxuICBzdWdnZXN0ZWRBY3Rpb25Cb3JkZXI6IHVuZGVmaW5lZCwgLy8gc3BsaXQgaW50byAzLCBudWxsXG4gIHN1Z2dlc3RlZEFjdGlvbkJvcmRlckNvbG9yOiB1bmRlZmluZWQsIC8vIGRlZmF1bHRzIHRvIGFjY2VudFxuICBzdWdnZXN0ZWRBY3Rpb25Cb3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgc3VnZ2VzdGVkQWN0aW9uQm9yZGVyV2lkdGg6IDIsXG4gIHN1Z2dlc3RlZEFjdGlvbkJvcmRlclJhZGl1czogMCxcbiAgc3VnZ2VzdGVkQWN0aW9uSW1hZ2VIZWlnaHQ6IDIwLFxuICBzdWdnZXN0ZWRBY3Rpb25UZXh0Q29sb3I6IG51bGwsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQmFja2dyb3VuZDogdW5kZWZpbmVkLCAvLyBkZWZhdWx0cyB0byBzdWdnZXN0ZWRBY3Rpb25CYWNrZ3JvdW5kXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyOiBudWxsLFxuICBzdWdnZXN0ZWRBY3Rpb25EaXNhYmxlZEJvcmRlckNvbG9yOiAnI0U2RTZFNicsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyV2lkdGg6IDIsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkVGV4dENvbG9yOiB1bmRlZmluZWQsIC8vIGRlZmF1bHRzIHRvIHN1YnRsZVxuICBzdWdnZXN0ZWRBY3Rpb25IZWlnaHQ6IDQwLFxuXG4gIC8vIFRpbWVzdGFtcFxuICB0aW1lc3RhbXBDb2xvcjogdW5kZWZpbmVkLCAvLyBkZWZhdWx0cyB0byBzdWJ0bGVcbiAgdGltZXN0YW1wRm9ybWF0OiAncmVsYXRpdmUnLCAvLyAnYWJzb2x1dGUnXG5cbiAgLy8gVHJhbnNjcmlwdCBvdmVybGF5IGJ1dHRvbnMgKGUuZy4gY2Fyb3VzZWwgYW5kIHN1Z2dlc3RlZCBhY3Rpb24gZmxpcHBlcnMsIHNjcm9sbCB0byBib3R0b20sIGV0Yy4pXG4gIHRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgLjYpJyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Gb2N1czogJ3JnYmEoMCwgMCwgMCwgLjgpJyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kT25Ib3ZlcjogJ3JnYmEoMCwgMCwgMCwgLjgpJyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvcjogJ1doaXRlJyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uRm9jdXM6IHVuZGVmaW5lZCwgLy8gZGVmYXVsdHMgdG8gdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvclxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Ib3ZlcjogdW5kZWZpbmVkLCAvLyBkZWZhdWx0cyB0byB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yXG5cbiAgLy8gVmlkZW9cbiAgdmlkZW9IZWlnaHQ6IDI3MCwgLy8gYmFzZWQgb24gYnViYmxlTWF4V2lkdGgsIDQ4MCAvIDE2ICogOSA9IDI3MFxuXG4gIC8vIENvbm5lY3Rpdml0eSBVSVxuICBjb25uZWN0aXZpdHlJY29uUGFkZGluZzogUEFERElOR19SRUdVTEFSICogMS4yLFxuICBjb25uZWN0aXZpdHlNYXJnaW5MZWZ0UmlnaHQ6IFBBRERJTkdfUkVHVUxBUiAqIDEuNCxcbiAgY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tOiBQQURESU5HX1JFR1VMQVIgKiAwLjgsXG4gIGNvbm5lY3Rpdml0eVRleHRTaXplOiAnNzUlJyxcbiAgZmFpbGVkQ29ubmVjdGl2aXR5OiAnI0M1MEYxRicsXG4gIHNsb3dDb25uZWN0aXZpdHk6ICcjRUFBMzAwJyxcbiAgbm90aWZpY2F0aW9uVGV4dDogJyM1RTVFNUUnLFxuXG4gIHR5cGluZ0FuaW1hdGlvbkJhY2tncm91bmRJbWFnZTogbnVsbCxcbiAgdHlwaW5nQW5pbWF0aW9uRHVyYXRpb246IDUwMDAsXG4gIHR5cGluZ0FuaW1hdGlvbkhlaWdodDogMjAsXG4gIHR5cGluZ0FuaW1hdGlvbldpZHRoOiA2NCxcblxuICBzcGlubmVyQW5pbWF0aW9uQmFja2dyb3VuZEltYWdlOiBudWxsLFxuICBzcGlubmVyQW5pbWF0aW9uSGVpZ2h0OiAxNixcbiAgc3Bpbm5lckFuaW1hdGlvbldpZHRoOiAxNixcbiAgc3Bpbm5lckFuaW1hdGlvblBhZGRpbmdSaWdodDogMTIsXG5cbiAgZW5hYmxlVXBsb2FkVGh1bWJuYWlsOiB0cnVlLFxuICB1cGxvYWRUaHVtYm5haWxDb250ZW50VHlwZTogJ2ltYWdlL2pwZWcnLFxuICB1cGxvYWRUaHVtYm5haWxIZWlnaHQ6IDM2MCxcbiAgdXBsb2FkVGh1bWJuYWlsUXVhbGl0eTogMC42LFxuICB1cGxvYWRUaHVtYm5haWxXaWR0aDogNzIwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBERUZBVUxUX09QVElPTlM7XG4iXX0=
