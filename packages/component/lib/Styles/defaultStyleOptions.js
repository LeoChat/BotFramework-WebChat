'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

/* eslint no-magic-numbers: "off" */
function fontFamily(fonts) {
  return fonts
    .map(function(font) {
      return "'".concat(font, "'");
    })
    .join(', ');
}

var DEFAULT_ACCENT = '#0063B1';
var DEFAULT_SUBTLE = '#767676'; // With contrast 4.5:1 to white

var PADDING_REGULAR = 10;
var DEFAULT_OPTIONS = {
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
  botAvatarImage: '',
  botAvatarInitials: '',
  userAvatarImage: '',
  userAvatarInitials: '',
  // Bubble
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
  sendBoxButtonColor: '#767676',
  sendBoxButtonColorOnDisabled: '#CCC',
  sendBoxButtonColorOnFocus: '#333',
  sendBoxButtonColorOnHover: '#333',
  sendBoxHeight: 40,
  sendBoxMaxHeight: 200,
  sendBoxTextColor: 'Black',
  sendBoxBorderBottom: '',
  sendBoxBorderLeft: '',
  sendBoxBorderRight: '',
  sendBoxBorderTop: 'solid 1px #E6E6E6',
  sendBoxPlaceholderColor: '#767676',
  sendBoxTextWrap: false,
  // Visually show spoken text
  showSpokenText: false,
  // Suggested actions
  suggestedActionBackground: 'White',
  suggestedActionBorder: 'solid 2px '.concat(DEFAULT_ACCENT),
  suggestedActionBorderRadius: 0,
  suggestedActionImageHeight: 20,
  suggestedActionTextColor: DEFAULT_ACCENT,
  suggestedActionDisabledBackground: 'White',
  suggestedActionDisabledBorder: 'solid 2px #E6E6E6',
  suggestedActionDisabledTextColor: DEFAULT_SUBTLE,
  suggestedActionHeight: 40,
  // Timestamp
  timestampColor: DEFAULT_SUBTLE,
  timestampFormat: 'relative',
  // 'absolute'
  // Transcript overlay buttons (e.g. carousel and suggested action flippers, scroll to bottom, etc.)
  transcriptOverlayButtonBackground: 'rgba(0, 0, 0, .6)',
  transcriptOverlayButtonBackgroundOnFocus: 'rgba(0, 0, 0, .8)',
  transcriptOverlayButtonBackgroundOnHover: 'rgba(0, 0, 0, .8)',
  transcriptOverlayButtonColor: 'White',
  transcriptOverlayButtonColorOnFocus: 'White',
  transcriptOverlayButtonColorOnHover: 'White',
  // Video
  videoHeight: 270,
  // based on bubbleMaxWidth, 480 / 16 * 9 = 270
  // Connectivity UI
  connectivityIconPadding: PADDING_REGULAR * 1.2,
  connectivityMarginLeftRight: PADDING_REGULAR * 1.4,
  connectivityMarginTopBottom: PADDING_REGULAR * 0.8,
  connectivityTextSize: 12,
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
};
var _default = DEFAULT_OPTIONS;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdHlsZXMvZGVmYXVsdFN0eWxlT3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJmb250RmFtaWx5IiwiZm9udHMiLCJtYXAiLCJmb250Iiwiam9pbiIsIkRFRkFVTFRfQUNDRU5UIiwiREVGQVVMVF9TVUJUTEUiLCJQQURESU5HX1JFR1VMQVIiLCJERUZBVUxUX09QVElPTlMiLCJhY2NlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkRW1waGFzaXNCYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nUmVndWxhciIsInBhZGRpbmdXaWRlIiwic3VidGxlIiwibWVzc2FnZUFjdGl2aXR5V29yZEJyZWFrIiwiZm9udFNpemVTbWFsbCIsIm1vbm9zcGFjZUZvbnQiLCJwcmltYXJ5Rm9udCIsImF2YXRhclNpemUiLCJib3RBdmF0YXJJbWFnZSIsImJvdEF2YXRhckluaXRpYWxzIiwidXNlckF2YXRhckltYWdlIiwidXNlckF2YXRhckluaXRpYWxzIiwiYnViYmxlQmFja2dyb3VuZCIsImJ1YmJsZUJvcmRlckNvbG9yIiwiYnViYmxlQm9yZGVyUmFkaXVzIiwiYnViYmxlQm9yZGVyU3R5bGUiLCJidWJibGVCb3JkZXJXaWR0aCIsImJ1YmJsZUZyb21Vc2VyQmFja2dyb3VuZCIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyQ29sb3IiLCJidWJibGVGcm9tVXNlckJvcmRlclJhZGl1cyIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyU3R5bGUiLCJidWJibGVGcm9tVXNlckJvcmRlcldpZHRoIiwiYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQiLCJidWJibGVGcm9tVXNlck51YlNpemUiLCJidWJibGVGcm9tVXNlclRleHRDb2xvciIsImJ1YmJsZUltYWdlSGVpZ2h0IiwiYnViYmxlTWF4V2lkdGgiLCJidWJibGVNaW5IZWlnaHQiLCJidWJibGVNaW5XaWR0aCIsImJ1YmJsZU51Yk9mZnNldCIsImJ1YmJsZU51YlNpemUiLCJidWJibGVUZXh0Q29sb3IiLCJtYXJrZG93blJlc3BlY3RDUkxGIiwicmljaENhcmRXcmFwVGl0bGUiLCJyb290SGVpZ2h0Iiwicm9vdFdpZHRoIiwiaGlkZVNjcm9sbFRvRW5kQnV0dG9uIiwiaGlkZVNlbmRCb3giLCJoaWRlVXBsb2FkQnV0dG9uIiwibWljcm9waG9uZUJ1dHRvbkNvbG9yT25EaWN0YXRlIiwic2VuZEJveEJhY2tncm91bmQiLCJzZW5kQm94QnV0dG9uQ29sb3IiLCJzZW5kQm94QnV0dG9uQ29sb3JPbkRpc2FibGVkIiwic2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1cyIsInNlbmRCb3hCdXR0b25Db2xvck9uSG92ZXIiLCJzZW5kQm94SGVpZ2h0Iiwic2VuZEJveE1heEhlaWdodCIsInNlbmRCb3hUZXh0Q29sb3IiLCJzZW5kQm94Qm9yZGVyQm90dG9tIiwic2VuZEJveEJvcmRlckxlZnQiLCJzZW5kQm94Qm9yZGVyUmlnaHQiLCJzZW5kQm94Qm9yZGVyVG9wIiwic2VuZEJveFBsYWNlaG9sZGVyQ29sb3IiLCJzZW5kQm94VGV4dFdyYXAiLCJzaG93U3Bva2VuVGV4dCIsInN1Z2dlc3RlZEFjdGlvbkJhY2tncm91bmQiLCJzdWdnZXN0ZWRBY3Rpb25Cb3JkZXIiLCJzdWdnZXN0ZWRBY3Rpb25Cb3JkZXJSYWRpdXMiLCJzdWdnZXN0ZWRBY3Rpb25JbWFnZUhlaWdodCIsInN1Z2dlc3RlZEFjdGlvblRleHRDb2xvciIsInN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQmFja2dyb3VuZCIsInN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQm9yZGVyIiwic3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRUZXh0Q29sb3IiLCJzdWdnZXN0ZWRBY3Rpb25IZWlnaHQiLCJ0aW1lc3RhbXBDb2xvciIsInRpbWVzdGFtcEZvcm1hdCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZCIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQmFja2dyb3VuZE9uRm9jdXMiLCJ0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvciIsInRyYW5zY3JpcHRPdmVybGF5QnV0dG9uQ29sb3JPbkZvY3VzIiwidHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXIiLCJ2aWRlb0hlaWdodCIsImNvbm5lY3Rpdml0eUljb25QYWRkaW5nIiwiY29ubmVjdGl2aXR5TWFyZ2luTGVmdFJpZ2h0IiwiY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tIiwiY29ubmVjdGl2aXR5VGV4dFNpemUiLCJmYWlsZWRDb25uZWN0aXZpdHkiLCJzbG93Q29ubmVjdGl2aXR5Iiwibm90aWZpY2F0aW9uVGV4dCIsInR5cGluZ0FuaW1hdGlvbkJhY2tncm91bmRJbWFnZSIsInR5cGluZ0FuaW1hdGlvbkR1cmF0aW9uIiwidHlwaW5nQW5pbWF0aW9uSGVpZ2h0IiwidHlwaW5nQW5pbWF0aW9uV2lkdGgiLCJzcGlubmVyQW5pbWF0aW9uQmFja2dyb3VuZEltYWdlIiwic3Bpbm5lckFuaW1hdGlvbkhlaWdodCIsInNwaW5uZXJBbmltYXRpb25XaWR0aCIsInNwaW5uZXJBbmltYXRpb25QYWRkaW5nUmlnaHQiLCJlbmFibGVVcGxvYWRUaHVtYm5haWwiLCJ1cGxvYWRUaHVtYm5haWxDb250ZW50VHlwZSIsInVwbG9hZFRodW1ibmFpbEhlaWdodCIsInVwbG9hZFRodW1ibmFpbFF1YWxpdHkiLCJ1cGxvYWRUaHVtYm5haWxXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsU0FBT0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLHNCQUFRQSxJQUFSO0FBQUEsR0FBZCxFQUErQkMsSUFBL0IsQ0FBb0MsSUFBcEMsQ0FBUDtBQUNEOztBQUVELElBQU1DLGNBQWMsR0FBRyxTQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUF2QixDLENBQWtDOztBQUNsQyxJQUFNQyxlQUFlLEdBQUcsRUFBeEI7QUFFQSxJQUFNQyxlQUFlLEdB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R0FBRyxHQTdHekI7QUE4R3RCZ0YsRUFBQUEsMkJBQTJCLEVBQUVoRixlQUFlLEdBQUcsR0E5R3pCO0FBK0d0QmlGLEVBQUFBLG9CQUFvQixFQUFFLEVBL0dBO0FBZ0h0QkMsRUFBQUEsa0JBQWtCLEVBQUUsU0FoSEU7QUFpSHRCQyxFQUFBQSxnQkFBZ0IsRUFBRSxTQWpISTtBQWtIdEJDLEVBQUFBLGdCQUFnQixFQUFFLFNBbEhJO0FBb0h0QkMsRUFBQUEsOEJBQThCLEVBQUUsSUFwSFY7QUFxSHRCQyxFQUFBQSx1QkFBdUIsRUFBRSxJQXJISDtBQXNIdEJDLEVBQUFBLHFCQUFxQixFQUFFLEVBdEhEO0FBdUh0QkMsRUFBQUEsb0JBQW9CLEVBQUUsRUF2SEE7QUF5SHRCQyxFQUFBQSwrQkFBK0IsRUFBRSxJQXpIWDtBQTBIdEJDLEVBQUFBLHNCQUFzQixFQUFFLEVBMUhGO0FBMkh0QkMsRUFBQUEscUJBQXFCLEVBQUUsRUEzSEQ7QUE0SHRCQyxFQUFBQSw0QkFBNEIsRUFBRSxFQTVIUjtBQThIdEJDLEVBQUFBLHFCQUFxQixFQUFFLElBOUhEO0FBK0h0QkMsRUFBQUEsMEJBQTBCLEVBQUUsWUEvSE47QUFnSXRCQyxFQUFBQSxxQkFBcUIsRUFBRSxHQWhJRDtBQWlJdEJDLEVBQUFBLHNCQUFzQixFQUFFLEdBaklGO0FBa0l0QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFsSUEsQ0FBeEI7ZUFxSWVoRyxlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFwib2ZmXCIgKi9cblxuZnVuY3Rpb24gZm9udEZhbWlseShmb250cykge1xuICByZXR1cm4gZm9udHMubWFwKGZvbnQgPT4gYCcke2ZvbnR9J2ApLmpvaW4oJywgJyk7XG59XG5cbmNvbnN0IERFRkFVTFRfQUNDRU5UID0gJyMwMDYzQjEnO1xuY29uc3QgREVGQVVMVF9TVUJUTEUgPSAnIzc2NzY3Nic7IC8vIFdpdGggY29udHJhc3QgNC41OjEgdG8gd2hpdGVcbmNvbnN0IFBBRERJTkdfUkVHVUxBUiA9IDEwO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gIC8vIENvbG9yIGFuZCBwYWRkaW5nc1xuICBhY2NlbnQ6IERFRkFVTFRfQUNDRU5ULFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdXaGl0ZScsXG4gIGNhcmRFbXBoYXNpc0JhY2tncm91bmRDb2xvcjogJyNGMEYwRjAnLFxuICBwYWRkaW5nUmVndWxhcjogUEFERElOR19SRUdVTEFSLFxuICBwYWRkaW5nV2lkZTogUEFERElOR19SRUdVTEFSICogMixcbiAgc3VidGxlOiBERUZBVUxUX1NVQlRMRSxcblxuICAvLyBXb3JkIGJyZWFrXG4gIG1lc3NhZ2VBY3Rpdml0eVdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLCAvLyAnbm9ybWFsJyB8fCAnYnJlYWstYWxsJyB8fCAnYnJlYWstd29yZCcgfHwgJ2tlZXAtYWxsJ1xuXG4gIC8vIEZvbnRzXG4gIGZvbnRTaXplU21hbGw6ICc4MCUnLFxuICBtb25vc3BhY2VGb250OiBmb250RmFtaWx5KFsnQ29uc29sYXMnLCAnQ291cmllciBOZXcnLCAnbW9ub3NwYWNlJ10pLFxuICBwcmltYXJ5Rm9udDogZm9udEZhbWlseShbJ0NhbGlicmknLCAnSGVsdmV0aWNhIE5ldWUnLCAnQXJpYWwnLCAnc2Fucy1zZXJpZiddKSxcblxuICAvLyBBdmF0YXJcbiAgYXZhdGFyU2l6ZTogNDAsXG4gIGJvdEF2YXRhckltYWdlOiAnJyxcbiAgYm90QXZhdGFySW5pdGlhbHM6ICcnLFxuICB1c2VyQXZhdGFySW1hZ2U6ICcnLFxuICB1c2VyQXZhdGFySW5pdGlhbHM6ICcnLFxuXG4gIC8vIEJ1YmJsZVxuICBidWJibGVCYWNrZ3JvdW5kOiAnV2hpdGUnLFxuICBidWJibGVCb3JkZXJDb2xvcjogJyNFNkU2RTYnLFxuICBidWJibGVCb3JkZXJSYWRpdXM6IDIsXG4gIGJ1YmJsZUJvcmRlclN0eWxlOiAnc29saWQnLFxuICBidWJibGVCb3JkZXJXaWR0aDogMSxcbiAgYnViYmxlRnJvbVVzZXJCYWNrZ3JvdW5kOiAnV2hpdGUnLFxuICBidWJibGVGcm9tVXNlckJvcmRlckNvbG9yOiAnI0U2RTZFNicsXG4gIGJ1YmJsZUZyb21Vc2VyQm9yZGVyUmFkaXVzOiAyLFxuICBidWJibGVGcm9tVXNlckJvcmRlclN0eWxlOiAnc29saWQnLFxuICBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoOiAxLFxuICBidWJibGVGcm9tVXNlck51Yk9mZnNldDogJ2JvdHRvbScsXG4gIGJ1YmJsZUZyb21Vc2VyTnViU2l6ZTogMCxcbiAgYnViYmxlRnJvbVVzZXJUZXh0Q29sb3I6ICdCbGFjaycsXG4gIGJ1YmJsZUltYWdlSGVpZ2h0OiAyNDAsXG4gIGJ1YmJsZU1heFdpZHRoOiA0ODAsIC8vIHNjcmVlbiB3aWR0aCA9IDYwMHB4XG4gIGJ1YmJsZU1pbkhlaWdodDogNDAsXG4gIGJ1YmJsZU1pbldpZHRoOiAyNTAsIC8vIG1pbiBzY3JlZW4gd2lkdGggPSAzMDBweCwgRWRnZSByZXF1aXJlcyAzNzJweCAoaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTM2MjE0NjgvKVxuICBidWJibGVOdWJPZmZzZXQ6ICdib3R0b20nLFxuICBidWJibGVOdWJTaXplOiAwLFxuICBidWJibGVUZXh0Q29sb3I6ICdCbGFjaycsXG5cbiAgLy8gTWFya2Rvd25cbiAgbWFya2Rvd25SZXNwZWN0Q1JMRjogdHJ1ZSxcblxuICAvLyBSaWNoIENhcmRzXG4gIHJpY2hDYXJkV3JhcFRpdGxlOiBmYWxzZSwgLy8gQXBwbGllcyB0byBzdWJ0aXRsZXMgYXMgd2VsbFxuXG4gIC8vIFJvb3RcbiAgcm9vdEhlaWdodDogJzEwMCUnLFxuICByb290V2lkdGg6ICcxMDAlJyxcblxuICAvLyBTY3JvbGwgdG8gZW5kIGJ1dHRvblxuICBoaWRlU2Nyb2xsVG9FbmRCdXR0b246IGZhbHNlLFxuXG4gIC8vIFNlbmQgYm94XG4gIGhpZGVTZW5kQm94OiBmYWxzZSxcbiAgaGlkZVVwbG9hZEJ1dHRvbjogZmFsc2UsXG4gIG1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZTogJyNGMzMnLFxuICBzZW5kQm94QmFja2dyb3VuZDogJ1doaXRlJyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yOiAnIzc2NzY3NicsXG4gIHNlbmRCb3hCdXR0b25Db2xvck9uRGlzYWJsZWQ6ICcjQ0NDJyxcbiAgc2VuZEJveEJ1dHRvbkNvbG9yT25Gb2N1czogJyMzMzMnLFxuICBzZW5kQm94QnV0dG9uQ29sb3JPbkhvdmVyOiAnIzMzMycsXG4gIHNlbmRCb3hIZWlnaHQ6IDQwLFxuICBzZW5kQm94TWF4SGVpZ2h0OiAyMDAsXG4gIHNlbmRCb3hUZXh0Q29sb3I6ICdCbGFjaycsXG4gIHNlbmRCb3hCb3JkZXJCb3R0b206ICcnLFxuICBzZW5kQm94Qm9yZGVyTGVmdDogJycsXG4gIHNlbmRCb3hCb3JkZXJSaWdodDogJycsXG4gIHNlbmRCb3hCb3JkZXJUb3A6ICdzb2xpZCAxcHggI0U2RTZFNicsXG4gIHNlbmRCb3hQbGFjZWhvbGRlckNvbG9yOiAnIzc2NzY3NicsXG4gIHNlbmRCb3hUZXh0V3JhcDogZmFsc2UsXG5cbiAgLy8gVmlzdWFsbHkgc2hvdyBzcG9rZW4gdGV4dFxuICBzaG93U3Bva2VuVGV4dDogZmFsc2UsXG5cbiAgLy8gU3VnZ2VzdGVkIGFjdGlvbnNcbiAgc3VnZ2VzdGVkQWN0aW9uQmFja2dyb3VuZDogJ1doaXRlJyxcbiAgc3VnZ2VzdGVkQWN0aW9uQm9yZGVyOiBgc29saWQgMnB4ICR7REVGQVVMVF9BQ0NFTlR9YCxcbiAgc3VnZ2VzdGVkQWN0aW9uQm9yZGVyUmFkaXVzOiAwLFxuICBzdWdnZXN0ZWRBY3Rpb25JbWFnZUhlaWdodDogMjAsXG4gIHN1Z2dlc3RlZEFjdGlvblRleHRDb2xvcjogREVGQVVMVF9BQ0NFTlQsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkQmFja2dyb3VuZDogJ1doaXRlJyxcbiAgc3VnZ2VzdGVkQWN0aW9uRGlzYWJsZWRCb3JkZXI6IGBzb2xpZCAycHggI0U2RTZFNmAsXG4gIHN1Z2dlc3RlZEFjdGlvbkRpc2FibGVkVGV4dENvbG9yOiBERUZBVUxUX1NVQlRMRSxcbiAgc3VnZ2VzdGVkQWN0aW9uSGVpZ2h0OiA0MCxcblxuICAvLyBUaW1lc3RhbXBcbiAgdGltZXN0YW1wQ29sb3I6IERFRkFVTFRfU1VCVExFLFxuICB0aW1lc3RhbXBGb3JtYXQ6ICdyZWxhdGl2ZScsIC8vICdhYnNvbHV0ZSdcblxuICAvLyBUcmFuc2NyaXB0IG92ZXJsYXkgYnV0dG9ucyAoZS5nLiBjYXJvdXNlbCBhbmQgc3VnZ2VzdGVkIGFjdGlvbiBmbGlwcGVycywgc2Nyb2xsIHRvIGJvdHRvbSwgZXRjLilcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25CYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAuNiknLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkZvY3VzOiAncmdiYSgwLCAwLCAwLCAuOCknLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkJhY2tncm91bmRPbkhvdmVyOiAncmdiYSgwLCAwLCAwLCAuOCknLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yOiAnV2hpdGUnLFxuICB0cmFuc2NyaXB0T3ZlcmxheUJ1dHRvbkNvbG9yT25Gb2N1czogJ1doaXRlJyxcbiAgdHJhbnNjcmlwdE92ZXJsYXlCdXR0b25Db2xvck9uSG92ZXI6ICdXaGl0ZScsXG5cbiAgLy8gVmlkZW9cbiAgdmlkZW9IZWlnaHQ6IDI3MCwgLy8gYmFzZWQgb24gYnViYmxlTWF4V2lkdGgsIDQ4MCAvIDE2ICogOSA9IDI3MFxuXG4gIC8vIENvbm5lY3Rpdml0eSBVSVxuICBjb25uZWN0aXZpdHlJY29uUGFkZGluZzogUEFERElOR19SRUdVTEFSICogMS4yLFxuICBjb25uZWN0aXZpdHlNYXJnaW5MZWZ0UmlnaHQ6IFBBRERJTkdfUkVHVUxBUiAqIDEuNCxcbiAgY29ubmVjdGl2aXR5TWFyZ2luVG9wQm90dG9tOiBQQURESU5HX1JFR1VMQVIgKiAwLjgsXG4gIGNvbm5lY3Rpdml0eVRleHRTaXplOiAxMixcbiAgZmFpbGVkQ29ubmVjdGl2aXR5OiAnI0M1MEYxRicsXG4gIHNsb3dDb25uZWN0aXZpdHk6ICcjRUFBMzAwJyxcbiAgbm90aWZpY2F0aW9uVGV4dDogJyM1RTVFNUUnLFxuXG4gIHR5cGluZ0FuaW1hdGlvbkJhY2tncm91bmRJbWFnZTogbnVsbCxcbiAgdHlwaW5nQW5pbWF0aW9uRHVyYXRpb246IDUwMDAsXG4gIHR5cGluZ0FuaW1hdGlvbkhlaWdodDogMjAsXG4gIHR5cGluZ0FuaW1hdGlvbldpZHRoOiA2NCxcblxuICBzcGlubmVyQW5pbWF0aW9uQmFja2dyb3VuZEltYWdlOiBudWxsLFxuICBzcGlubmVyQW5pbWF0aW9uSGVpZ2h0OiAxNixcbiAgc3Bpbm5lckFuaW1hdGlvbldpZHRoOiAxNixcbiAgc3Bpbm5lckFuaW1hdGlvblBhZGRpbmdSaWdodDogMTIsXG5cbiAgZW5hYmxlVXBsb2FkVGh1bWJuYWlsOiB0cnVlLFxuICB1cGxvYWRUaHVtYm5haWxDb250ZW50VHlwZTogJ2ltYWdlL2pwZWcnLFxuICB1cGxvYWRUaHVtYm5haWxIZWlnaHQ6IDM2MCxcbiAgdXBsb2FkVGh1bWJuYWlsUXVhbGl0eTogMC42LFxuICB1cGxvYWRUaHVtYm5haWxXaWR0aDogNzIwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBERUZBVUxUX09QVElPTlM7XG4iXX0=
