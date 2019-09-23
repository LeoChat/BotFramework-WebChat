'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'localize', {
  enumerable: true,
  get: function get() {
    return _Localize.localize;
  }
});
Object.defineProperty(exports, 'concatMiddleware', {
  enumerable: true,
  get: function get() {
    return _concatMiddleware.default;
  }
});
Object.defineProperty(exports, 'connectToWebChat', {
  enumerable: true,
  get: function get() {
    return _connectToWebChat.default;
  }
});
Object.defineProperty(exports, 'Context', {
  enumerable: true,
  get: function get() {
    return _Context.default;
  }
});
Object.defineProperty(exports, 'createCoreActivityMiddleware', {
  enumerable: true,
  get: function get() {
    return _createCoreMiddleware.default;
  }
});
Object.defineProperty(exports, 'createCoreAttachmentMiddleware', {
  enumerable: true,
  get: function get() {
    return _createCoreMiddleware2.default;
  }
});
Object.defineProperty(exports, 'createStyleSet', {
  enumerable: true,
  get: function get() {
    return _createStyleSet.default;
  }
});
Object.defineProperty(exports, 'defaultStyleOptions', {
  enumerable: true,
  get: function get() {
    return _defaultStyleOptions.default;
  }
});
Object.defineProperty(exports, 'getTabIndex', {
  enumerable: true,
  get: function get() {
    return _getTabIndex.default;
  }
});
exports.version = exports.Components = exports.default = void 0;

var _BasicWebChat = _interopRequireDefault(require('./BasicWebChat'));

var _Composer = _interopRequireDefault(require('./Composer'));

var _Avatar = _interopRequireDefault(require('./Activity/Avatar'));

var _Bubble = _interopRequireDefault(require('./Activity/Bubble'));

var _CarouselLayout = _interopRequireDefault(require('./Activity/CarouselLayout'));

var _ErrorBox = _interopRequireDefault(require('./ErrorBox'));

var _Localize = _interopRequireWildcard(require('./Localization/Localize'));

var _SendStatus = _interopRequireWildcard(require('./Activity/SendStatus'));

var _Speak = _interopRequireWildcard(require('./Activity/Speak'));

var _StackedLayout = _interopRequireWildcard(require('./Activity/StackedLayout'));

var _Timestamp = _interopRequireDefault(require('./Activity/Timestamp'));

var _AudioContent = _interopRequireDefault(require('./Attachment/AudioContent'));

var _HTMLVideoContent = _interopRequireDefault(require('./Attachment/HTMLVideoContent'));

var _ImageContent = _interopRequireDefault(require('./Attachment/ImageContent'));

var _TextContent = _interopRequireDefault(require('./Attachment/TextContent'));

var _VideoContent = _interopRequireDefault(require('./Attachment/VideoContent'));

var _VimeoContent = _interopRequireDefault(require('./Attachment/VimeoContent'));

var _YouTubeContent = _interopRequireDefault(require('./Attachment/YouTubeContent'));

var _DictationInterims = _interopRequireWildcard(require('./SendBox/DictationInterims'));

var _MicrophoneButton = _interopRequireWildcard(require('./SendBox/MicrophoneButton'));

var _SendButton = _interopRequireWildcard(require('./SendBox/SendButton'));

var _TextBox = _interopRequireWildcard(require('./SendBox/TextBox'));

var _SuggestedActions = _interopRequireWildcard(require('./SendBox/SuggestedActions'));

var _UploadButton = _interopRequireWildcard(require('./SendBox/UploadButton'));

var _concatMiddleware = _interopRequireDefault(require('./Middleware/concatMiddleware'));

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

var _Context = _interopRequireDefault(require('./Context'));

var _createCoreMiddleware = _interopRequireDefault(require('./Middleware/Activity/createCoreMiddleware'));

var _createCoreMiddleware2 = _interopRequireDefault(require('./Middleware/Attachment/createCoreMiddleware'));

var _createStyleSet = _interopRequireDefault(require('./Styles/createStyleSet'));

var _defaultStyleOptions = _interopRequireDefault(require('./Styles/defaultStyleOptions'));

var _getTabIndex = _interopRequireDefault(require('./Utils/TypeFocusSink/getTabIndex'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var version = undefined;
exports.version = version;
var Components = {
  Composer: _Composer.default,
  Localize: _Localize.default,
  // Components for recomposing activities and attachments
  AudioContent: _AudioContent.default,
  HTMLVideoContent: _HTMLVideoContent.default,
  ImageContent: _ImageContent.default,
  TextContent: _TextContent.default,
  VideoContent: _VideoContent.default,
  VimeoContent: _VimeoContent.default,
  YouTubeContent: _YouTubeContent.default,
  // Components for recomposing transcript
  Avatar: _Avatar.default,
  Bubble: _Bubble.default,
  CarouselLayout: _CarouselLayout.default,
  ErrorBox: _ErrorBox.default,
  SendStatus: _SendStatus.default,
  SpeakActivity: _Speak.default,
  StackedLayout: _StackedLayout.default,
  Timestamp: _Timestamp.default,
  connectSendStatus: _SendStatus.connectSendStatus,
  connectSpeakActivity: _Speak.connectSpeakActivity,
  connectStackedLayout: _StackedLayout.connectStackedLayout,
  // Components for recomposing send box
  DictationInterims: _DictationInterims.default,
  MicrophoneButton: _MicrophoneButton.default,
  SendButton: _SendButton.default,
  SendTextBox: _TextBox.default,
  SuggestedActions: _SuggestedActions.default,
  UploadButton: _UploadButton.default,
  connectDictationInterims: _DictationInterims.connectDictationInterims,
  connectMicrophoneButton: _MicrophoneButton.connectMicrophoneButton,
  connectSendButton: _SendButton.connectSendButton,
  connectSendTextBox: _TextBox.connectSendTextBox,
  connectSuggestedActions: _SuggestedActions.connectSuggestedActions,
  connectUploadButton: _UploadButton.connectUploadButton
};
exports.Components = Components;
var _default = _BasicWebChat.default;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsidmVyc2lvbiIsIkNvbXBvbmVudHMiLCJDb21wb3NlciIsIkxvY2FsaXplIiwiQXVkaW9Db250ZW50IiwiSFRNTFZpZGVvQ29udGVudCIsIkltYWdlQ29udGVudCIsIlRleHRDb250ZW50IiwiVmlkZW9Db250ZW50IiwiVmltZW9Db250ZW50IiwiWW91VHViZUNvbnRlbnQiLCJBdmF0YXIiLCJCdWJibGUiLCJDYXJvdXNlbExheW91dCIsIkVycm9yQm94IiwiU2VuZFN0YXR1cyIsIlNwZWFrQWN0aXZpdHkiLCJTdGFja2VkTGF5b3V0IiwiVGltZXN0YW1wIiwiY29ubmVjdFNlbmRTdGF0dXMiLCJjb25uZWN0U3BlYWtBY3Rpdml0eSIsImNvbm5lY3RTdGFja2VkTGF5b3V0IiwiRGljdGF0aW9uSW50ZXJpbXMiLCJNaWNyb3Bob25lQnV0dG9uIiwiU2VuZEJ1dHRvbiIsIlNlbmRUZXh0Qm94IiwiU3VnZ2VzdGVkQWN0aW9ucyIsIlVwbG9hZEJ1dHRvbiIsImNvbm5lY3REaWN0YXRpb25JbnRlcmltcyIsImNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIiwiY29ubmVjdFNlbmRCdXR0b24iLCJjb25uZWN0U2VuZFRleHRCb3giLCJjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyIsImNvbm5lY3RVcGxvYWRCdXR0b24iLCJCYXNpY1dlYkNoYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxZQUFiOztBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsUUFBUSxFQUFSQSxpQkFEaUI7QUFFakJDLEVBQUFBLFFBQVEsRUFBUkEsaUJBRmlCO0FBSWpCO0FBQ0FDLEVBQUFBLFlBQVksRUFBWkEscUJBTGlCO0FBTWpCQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLHlCQU5pQjtBQU9qQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFQaUI7QUFRakJDLEVBQUFBLFdBQVcsRUFBWEEsb0JBUmlCO0FBU2pCQyxFQUFBQSxZQUFZLEVBQVpBLHFCQVRpQjtBQVVqQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFWaUI7QUFXakJDLEVBQUFBLGNBQWMsRUFBZEEsdUJBWGlCO0FBYWpCO0FBQ0FDLEVBQUFBLE1BQU0sRUFBTkEsZUFkaUI7QUFlakJDLEVBQUFBLE1BQU0sRUFBTkEsZUFmaUI7QUFnQmpCQyxFQUFBQSxjQUFjLEVBQWRBLHVCQWhCaUI7QUFpQmpCQyxFQUFBQSxRQUFRLEVBQVJBLGlCQWpCaUI7QUFrQmpCQyxFQUFBQSxVQUFVLEVBQVZBLG1CQWxCaUI7QUFtQmpCQyxFQUFBQSxhQUFhLEVBQWJBLGNBbkJpQjtBQW9CakJDLEVBQUFBLGFBQWEsRUFBYkEsc0JBcEJpQjtBQXFCakJDLEVBQUFBLFNBQVMsRUFBVEEsa0JBckJpQjtBQXVCakJDLEVBQUFBLGlCQUFpQixFQUFqQkEsNkJBdkJpQjtBQXdCakJDLEVBQUFBLG9CQUFvQixFQUFwQkEsMkJBeEJpQjtBQXlCakJDLEVBQUFBLG9CQUFvQixFQUFwQkEsbUNBekJpQjtBQTJCakI7QUFDQUMsRUFBQUEsaUJBQWlCLEVBQWpCQSwwQkE1QmlCO0FBNkJqQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkE3QmlCO0FBOEJqQkMsRUFBQUEsVUFBVSxFQUFWQSxtQkE5QmlCO0FBK0JqQkMsRUFBQUEsV0FBVyxFQUFYQSxnQkEvQmlCO0FBZ0NqQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkFoQ2lCO0FBaUNqQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFqQ2lCO0FBbUNqQkMsRUFBQUEsd0JBQXdCLEVBQXhCQSwyQ0FuQ2lCO0FBb0NqQkMsRUFBQUEsdUJBQXVCLEVBQXZCQSx5Q0FwQ2lCO0FBcUNqQkMsRUFBQUEsaUJBQWlCLEVBQWpCQSw2QkFyQ2lCO0FBc0NqQkMsRUFBQUEsa0JBQWtCLEVBQWxCQSwyQkF0Q2lCO0FBdUNqQkMsRUFBQUEsdUJBQXVCLEVBQXZCQSx5Q0F2Q2lCO0FBd0NqQkMsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQXhDaUIsQ0FBbkI7O2VBMkNlQyxxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNpY1dlYkNoYXQgZnJvbSAnLi9CYXNpY1dlYkNoYXQnO1xuXG5pbXBvcnQgQ29tcG9zZXIgZnJvbSAnLi9Db21wb3Nlcic7XG5cbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9BY3Rpdml0eS9BdmF0YXInO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL0FjdGl2aXR5L0J1YmJsZSc7XG5pbXBvcnQgQ2Fyb3VzZWxMYXlvdXQgZnJvbSAnLi9BY3Rpdml0eS9DYXJvdXNlbExheW91dCc7XG5pbXBvcnQgRXJyb3JCb3ggZnJvbSAnLi9FcnJvckJveCc7XG5pbXBvcnQgTG9jYWxpemUsIHsgbG9jYWxpemUgfSBmcm9tICcuL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgU2VuZFN0YXR1cywgeyBjb25uZWN0U2VuZFN0YXR1cyB9IGZyb20gJy4vQWN0aXZpdHkvU2VuZFN0YXR1cyc7XG5pbXBvcnQgU3BlYWtBY3Rpdml0eSwgeyBjb25uZWN0U3BlYWtBY3Rpdml0eSB9IGZyb20gJy4vQWN0aXZpdHkvU3BlYWsnO1xuaW1wb3J0IFN0YWNrZWRMYXlvdXQsIHsgY29ubmVjdFN0YWNrZWRMYXlvdXQgfSBmcm9tICcuL0FjdGl2aXR5L1N0YWNrZWRMYXlvdXQnO1xuaW1wb3J0IFRpbWVzdGFtcCBmcm9tICcuL0FjdGl2aXR5L1RpbWVzdGFtcCc7XG5cbmltcG9ydCBBdWRpb0NvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L0F1ZGlvQ29udGVudCc7XG5pbXBvcnQgSFRNTFZpZGVvQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvSFRNTFZpZGVvQ29udGVudCc7XG5pbXBvcnQgSW1hZ2VDb250ZW50IGZyb20gJy4vQXR0YWNobWVudC9JbWFnZUNvbnRlbnQnO1xuaW1wb3J0IFRleHRDb250ZW50IGZyb20gJy4vQXR0YWNobWVudC9UZXh0Q29udGVudCc7XG5pbXBvcnQgVmlkZW9Db250ZW50IGZyb20gJy4vQXR0YWNobWVudC9WaWRlb0NvbnRlbnQnO1xuaW1wb3J0IFZpbWVvQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvVmltZW9Db250ZW50JztcbmltcG9ydCBZb3VUdWJlQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvWW91VHViZUNvbnRlbnQnO1xuXG5pbXBvcnQgRGljdGF0aW9uSW50ZXJpbXMsIHsgY29ubmVjdERpY3RhdGlvbkludGVyaW1zIH0gZnJvbSAnLi9TZW5kQm94L0RpY3RhdGlvbkludGVyaW1zJztcbmltcG9ydCBNaWNyb3Bob25lQnV0dG9uLCB7IGNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIH0gZnJvbSAnLi9TZW5kQm94L01pY3JvcGhvbmVCdXR0b24nO1xuaW1wb3J0IFNlbmRCdXR0b24sIHsgY29ubmVjdFNlbmRCdXR0b24gfSBmcm9tICcuL1NlbmRCb3gvU2VuZEJ1dHRvbic7XG5pbXBvcnQgU2VuZFRleHRCb3gsIHsgY29ubmVjdFNlbmRUZXh0Qm94IH0gZnJvbSAnLi9TZW5kQm94L1RleHRCb3gnO1xuaW1wb3J0IFN1Z2dlc3RlZEFjdGlvbnMsIHsgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMgfSBmcm9tICcuL1NlbmRCb3gvU3VnZ2VzdGVkQWN0aW9ucyc7XG5pbXBvcnQgVXBsb2FkQnV0dG9uLCB7IGNvbm5lY3RVcGxvYWRCdXR0b24gfSBmcm9tICcuL1NlbmRCb3gvVXBsb2FkQnV0dG9uJztcblxuaW1wb3J0IGNvbmNhdE1pZGRsZXdhcmUgZnJvbSAnLi9NaWRkbGV3YXJlL2NvbmNhdE1pZGRsZXdhcmUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgY3JlYXRlQ29yZUFjdGl2aXR5TWlkZGxld2FyZSBmcm9tICcuL01pZGRsZXdhcmUvQWN0aXZpdHkvY3JlYXRlQ29yZU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZUNvcmVBdHRhY2htZW50TWlkZGxld2FyZSBmcm9tICcuL01pZGRsZXdhcmUvQXR0YWNobWVudC9jcmVhdGVDb3JlTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlU3R5bGVTZXQgZnJvbSAnLi9TdHlsZXMvY3JlYXRlU3R5bGVTZXQnO1xuaW1wb3J0IGRlZmF1bHRTdHlsZU9wdGlvbnMgZnJvbSAnLi9TdHlsZXMvZGVmYXVsdFN0eWxlT3B0aW9ucyc7XG5pbXBvcnQgZ2V0VGFiSW5kZXggZnJvbSAnLi9VdGlscy9UeXBlRm9jdXNTaW5rL2dldFRhYkluZGV4JztcblxuY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52Lk5QTV9QQUNLQUdFX1ZFUlNJT047XG5cbmNvbnN0IENvbXBvbmVudHMgPSB7XG4gIENvbXBvc2VyLFxuICBMb2NhbGl6ZSxcblxuICAvLyBDb21wb25lbnRzIGZvciByZWNvbXBvc2luZyBhY3Rpdml0aWVzIGFuZCBhdHRhY2htZW50c1xuICBBdWRpb0NvbnRlbnQsXG4gIEhUTUxWaWRlb0NvbnRlbnQsXG4gIEltYWdlQ29udGVudCxcbiAgVGV4dENvbnRlbnQsXG4gIFZpZGVvQ29udGVudCxcbiAgVmltZW9Db250ZW50LFxuICBZb3VUdWJlQ29udGVudCxcblxuICAvLyBDb21wb25lbnRzIGZvciByZWNvbXBvc2luZyB0cmFuc2NyaXB0XG4gIEF2YXRhcixcbiAgQnViYmxlLFxuICBDYXJvdXNlbExheW91dCxcbiAgRXJyb3JCb3gsXG4gIFNlbmRTdGF0dXMsXG4gIFNwZWFrQWN0aXZpdHksXG4gIFN0YWNrZWRMYXlvdXQsXG4gIFRpbWVzdGFtcCxcblxuICBjb25uZWN0U2VuZFN0YXR1cyxcbiAgY29ubmVjdFNwZWFrQWN0aXZpdHksXG4gIGNvbm5lY3RTdGFja2VkTGF5b3V0LFxuXG4gIC8vIENvbXBvbmVudHMgZm9yIHJlY29tcG9zaW5nIHNlbmQgYm94XG4gIERpY3RhdGlvbkludGVyaW1zLFxuICBNaWNyb3Bob25lQnV0dG9uLFxuICBTZW5kQnV0dG9uLFxuICBTZW5kVGV4dEJveCxcbiAgU3VnZ2VzdGVkQWN0aW9ucyxcbiAgVXBsb2FkQnV0dG9uLFxuXG4gIGNvbm5lY3REaWN0YXRpb25JbnRlcmltcyxcbiAgY29ubmVjdE1pY3JvcGhvbmVCdXR0b24sXG4gIGNvbm5lY3RTZW5kQnV0dG9uLFxuICBjb25uZWN0U2VuZFRleHRCb3gsXG4gIGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb25zLFxuICBjb25uZWN0VXBsb2FkQnV0dG9uXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpY1dlYkNoYXQ7XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudHMsXG4gIGNvbmNhdE1pZGRsZXdhcmUsXG4gIGNvbm5lY3RUb1dlYkNoYXQsXG4gIENvbnRleHQsXG4gIGNyZWF0ZUNvcmVBY3Rpdml0eU1pZGRsZXdhcmUsXG4gIGNyZWF0ZUNvcmVBdHRhY2htZW50TWlkZGxld2FyZSxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIGRlZmF1bHRTdHlsZU9wdGlvbnMsXG4gIGdldFRhYkluZGV4LFxuICBsb2NhbGl6ZSxcbiAgdmVyc2lvblxufTtcbiJdfQ==
