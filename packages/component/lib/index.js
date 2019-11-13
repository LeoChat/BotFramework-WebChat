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
    return _WebChatUIContext.default;
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
exports.hooks = exports.version = exports.Components = exports.default = void 0;

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

var _WebChatUIContext = _interopRequireDefault(require('./WebChatUIContext'));

var _createCoreMiddleware = _interopRequireDefault(require('./Middleware/Activity/createCoreMiddleware'));

var _createCoreMiddleware2 = _interopRequireDefault(require('./Middleware/Attachment/createCoreMiddleware'));

var _createStyleSet = _interopRequireDefault(require('./Styles/createStyleSet'));

var _defaultStyleOptions = _interopRequireDefault(require('./Styles/defaultStyleOptions'));

var _getTabIndex = _interopRequireDefault(require('./Utils/TypeFocusSink/getTabIndex'));

var hooks = _interopRequireWildcard(require('./hooks/index'));

exports.hooks = hooks;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var version = '0.0.0-0';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsidmVyc2lvbiIsIkNvbXBvbmVudHMiLCJDb21wb3NlciIsIkxvY2FsaXplIiwiQXVkaW9Db250ZW50IiwiSFRNTFZpZGVvQ29udGVudCIsIkltYWdlQ29udGVudCIsIlRleHRDb250ZW50IiwiVmlkZW9Db250ZW50IiwiVmltZW9Db250ZW50IiwiWW91VHViZUNvbnRlbnQiLCJBdmF0YXIiLCJCdWJibGUiLCJDYXJvdXNlbExheW91dCIsIkVycm9yQm94IiwiU2VuZFN0YXR1cyIsIlNwZWFrQWN0aXZpdHkiLCJTdGFja2VkTGF5b3V0IiwiVGltZXN0YW1wIiwiY29ubmVjdFNlbmRTdGF0dXMiLCJjb25uZWN0U3BlYWtBY3Rpdml0eSIsImNvbm5lY3RTdGFja2VkTGF5b3V0IiwiRGljdGF0aW9uSW50ZXJpbXMiLCJNaWNyb3Bob25lQnV0dG9uIiwiU2VuZEJ1dHRvbiIsIlNlbmRUZXh0Qm94IiwiU3VnZ2VzdGVkQWN0aW9ucyIsIlVwbG9hZEJ1dHRvbiIsImNvbm5lY3REaWN0YXRpb25JbnRlcmltcyIsImNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIiwiY29ubmVjdFNlbmRCdXR0b24iLCJjb25uZWN0U2VuZFRleHRCb3giLCJjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyIsImNvbm5lY3RVcGxvYWRCdXR0b24iLCJCYXNpY1dlYkNoYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sWUFBYjs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLFFBQVEsRUFBUkEsaUJBRGlCO0FBRWpCQyxFQUFBQSxRQUFRLEVBQVJBLGlCQUZpQjtBQUlqQjtBQUNBQyxFQUFBQSxZQUFZLEVBQVpBLHFCQUxpQjtBQU1qQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkFOaUI7QUFPakJDLEVBQUFBLFlBQVksRUFBWkEscUJBUGlCO0FBUWpCQyxFQUFBQSxXQUFXLEVBQVhBLG9CQVJpQjtBQVNqQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFUaUI7QUFVakJDLEVBQUFBLFlBQVksRUFBWkEscUJBVmlCO0FBV2pCQyxFQUFBQSxjQUFjLEVBQWRBLHVCQVhpQjtBQWFqQjtBQUNBQyxFQUFBQSxNQUFNLEVBQU5BLGVBZGlCO0FBZWpCQyxFQUFBQSxNQUFNLEVBQU5BLGVBZmlCO0FBZ0JqQkMsRUFBQUEsY0FBYyxFQUFkQSx1QkFoQmlCO0FBaUJqQkMsRUFBQUEsUUFBUSxFQUFSQSxpQkFqQmlCO0FBa0JqQkMsRUFBQUEsVUFBVSxFQUFWQSxtQkFsQmlCO0FBbUJqQkMsRUFBQUEsYUFBYSxFQUFiQSxjQW5CaUI7QUFvQmpCQyxFQUFBQSxhQUFhLEVBQWJBLHNCQXBCaUI7QUFxQmpCQyxFQUFBQSxTQUFTLEVBQVRBLGtCQXJCaUI7QUF1QmpCQyxFQUFBQSxpQkFBaUIsRUFBakJBLDZCQXZCaUI7QUF3QmpCQyxFQUFBQSxvQkFBb0IsRUFBcEJBLDJCQXhCaUI7QUF5QmpCQyxFQUFBQSxvQkFBb0IsRUFBcEJBLG1DQXpCaUI7QUEyQmpCO0FBQ0FDLEVBQUFBLGlCQUFpQixFQUFqQkEsMEJBNUJpQjtBQTZCakJDLEVBQUFBLGdCQUFnQixFQUFoQkEseUJBN0JpQjtBQThCakJDLEVBQUFBLFVBQVUsRUFBVkEsbUJBOUJpQjtBQStCakJDLEVBQUFBLFdBQVcsRUFBWEEsZ0JBL0JpQjtBQWdDakJDLEVBQUFBLGdCQUFnQixFQUFoQkEseUJBaENpQjtBQWlDakJDLEVBQUFBLFlBQVksRUFBWkEscUJBakNpQjtBQW1DakJDLEVBQUFBLHdCQUF3QixFQUF4QkEsMkNBbkNpQjtBQW9DakJDLEVBQUFBLHVCQUF1QixFQUF2QkEseUNBcENpQjtBQXFDakJDLEVBQUFBLGlCQUFpQixFQUFqQkEsNkJBckNpQjtBQXNDakJDLEVBQUFBLGtCQUFrQixFQUFsQkEsMkJBdENpQjtBQXVDakJDLEVBQUFBLHVCQUF1QixFQUF2QkEseUNBdkNpQjtBQXdDakJDLEVBQUFBLG1CQUFtQixFQUFuQkE7QUF4Q2lCLENBQW5COztlQTJDZUMscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzaWNXZWJDaGF0IGZyb20gJy4vQmFzaWNXZWJDaGF0JztcblxuaW1wb3J0IENvbXBvc2VyIGZyb20gJy4vQ29tcG9zZXInO1xuXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQWN0aXZpdHkvQXZhdGFyJztcbmltcG9ydCBCdWJibGUgZnJvbSAnLi9BY3Rpdml0eS9CdWJibGUnO1xuaW1wb3J0IENhcm91c2VsTGF5b3V0IGZyb20gJy4vQWN0aXZpdHkvQ2Fyb3VzZWxMYXlvdXQnO1xuaW1wb3J0IEVycm9yQm94IGZyb20gJy4vRXJyb3JCb3gnO1xuaW1wb3J0IExvY2FsaXplLCB7IGxvY2FsaXplIH0gZnJvbSAnLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IFNlbmRTdGF0dXMsIHsgY29ubmVjdFNlbmRTdGF0dXMgfSBmcm9tICcuL0FjdGl2aXR5L1NlbmRTdGF0dXMnO1xuaW1wb3J0IFNwZWFrQWN0aXZpdHksIHsgY29ubmVjdFNwZWFrQWN0aXZpdHkgfSBmcm9tICcuL0FjdGl2aXR5L1NwZWFrJztcbmltcG9ydCBTdGFja2VkTGF5b3V0LCB7IGNvbm5lY3RTdGFja2VkTGF5b3V0IH0gZnJvbSAnLi9BY3Rpdml0eS9TdGFja2VkTGF5b3V0JztcbmltcG9ydCBUaW1lc3RhbXAgZnJvbSAnLi9BY3Rpdml0eS9UaW1lc3RhbXAnO1xuXG5pbXBvcnQgQXVkaW9Db250ZW50IGZyb20gJy4vQXR0YWNobWVudC9BdWRpb0NvbnRlbnQnO1xuaW1wb3J0IEhUTUxWaWRlb0NvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L0hUTUxWaWRlb0NvbnRlbnQnO1xuaW1wb3J0IEltYWdlQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvSW1hZ2VDb250ZW50JztcbmltcG9ydCBUZXh0Q29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvVGV4dENvbnRlbnQnO1xuaW1wb3J0IFZpZGVvQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvVmlkZW9Db250ZW50JztcbmltcG9ydCBWaW1lb0NvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L1ZpbWVvQ29udGVudCc7XG5pbXBvcnQgWW91VHViZUNvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L1lvdVR1YmVDb250ZW50JztcblxuaW1wb3J0IERpY3RhdGlvbkludGVyaW1zLCB7IGNvbm5lY3REaWN0YXRpb25JbnRlcmltcyB9IGZyb20gJy4vU2VuZEJveC9EaWN0YXRpb25JbnRlcmltcyc7XG5pbXBvcnQgTWljcm9waG9uZUJ1dHRvbiwgeyBjb25uZWN0TWljcm9waG9uZUJ1dHRvbiB9IGZyb20gJy4vU2VuZEJveC9NaWNyb3Bob25lQnV0dG9uJztcbmltcG9ydCBTZW5kQnV0dG9uLCB7IGNvbm5lY3RTZW5kQnV0dG9uIH0gZnJvbSAnLi9TZW5kQm94L1NlbmRCdXR0b24nO1xuaW1wb3J0IFNlbmRUZXh0Qm94LCB7IGNvbm5lY3RTZW5kVGV4dEJveCB9IGZyb20gJy4vU2VuZEJveC9UZXh0Qm94JztcbmltcG9ydCBTdWdnZXN0ZWRBY3Rpb25zLCB7IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb25zIH0gZnJvbSAnLi9TZW5kQm94L1N1Z2dlc3RlZEFjdGlvbnMnO1xuaW1wb3J0IFVwbG9hZEJ1dHRvbiwgeyBjb25uZWN0VXBsb2FkQnV0dG9uIH0gZnJvbSAnLi9TZW5kQm94L1VwbG9hZEJ1dHRvbic7XG5cbmltcG9ydCBjb25jYXRNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9jb25jYXRNaWRkbGV3YXJlJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL1dlYkNoYXRVSUNvbnRleHQnO1xuaW1wb3J0IGNyZWF0ZUNvcmVBY3Rpdml0eU1pZGRsZXdhcmUgZnJvbSAnLi9NaWRkbGV3YXJlL0FjdGl2aXR5L2NyZWF0ZUNvcmVNaWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVDb3JlQXR0YWNobWVudE1pZGRsZXdhcmUgZnJvbSAnLi9NaWRkbGV3YXJlL0F0dGFjaG1lbnQvY3JlYXRlQ29yZU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZVN0eWxlU2V0IGZyb20gJy4vU3R5bGVzL2NyZWF0ZVN0eWxlU2V0JztcbmltcG9ydCBkZWZhdWx0U3R5bGVPcHRpb25zIGZyb20gJy4vU3R5bGVzL2RlZmF1bHRTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IGdldFRhYkluZGV4IGZyb20gJy4vVXRpbHMvVHlwZUZvY3VzU2luay9nZXRUYWJJbmRleCc7XG5cbmltcG9ydCAqIGFzIGhvb2tzIGZyb20gJy4vaG9va3MvaW5kZXgnO1xuXG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbjtcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgQ29tcG9zZXIsXG4gIExvY2FsaXplLFxuXG4gIC8vIENvbXBvbmVudHMgZm9yIHJlY29tcG9zaW5nIGFjdGl2aXRpZXMgYW5kIGF0dGFjaG1lbnRzXG4gIEF1ZGlvQ29udGVudCxcbiAgSFRNTFZpZGVvQ29udGVudCxcbiAgSW1hZ2VDb250ZW50LFxuICBUZXh0Q29udGVudCxcbiAgVmlkZW9Db250ZW50LFxuICBWaW1lb0NvbnRlbnQsXG4gIFlvdVR1YmVDb250ZW50LFxuXG4gIC8vIENvbXBvbmVudHMgZm9yIHJlY29tcG9zaW5nIHRyYW5zY3JpcHRcbiAgQXZhdGFyLFxuICBCdWJibGUsXG4gIENhcm91c2VsTGF5b3V0LFxuICBFcnJvckJveCxcbiAgU2VuZFN0YXR1cyxcbiAgU3BlYWtBY3Rpdml0eSxcbiAgU3RhY2tlZExheW91dCxcbiAgVGltZXN0YW1wLFxuXG4gIGNvbm5lY3RTZW5kU3RhdHVzLFxuICBjb25uZWN0U3BlYWtBY3Rpdml0eSxcbiAgY29ubmVjdFN0YWNrZWRMYXlvdXQsXG5cbiAgLy8gQ29tcG9uZW50cyBmb3IgcmVjb21wb3Npbmcgc2VuZCBib3hcbiAgRGljdGF0aW9uSW50ZXJpbXMsXG4gIE1pY3JvcGhvbmVCdXR0b24sXG4gIFNlbmRCdXR0b24sXG4gIFNlbmRUZXh0Qm94LFxuICBTdWdnZXN0ZWRBY3Rpb25zLFxuICBVcGxvYWRCdXR0b24sXG5cbiAgY29ubmVjdERpY3RhdGlvbkludGVyaW1zLFxuICBjb25uZWN0TWljcm9waG9uZUJ1dHRvbixcbiAgY29ubmVjdFNlbmRCdXR0b24sXG4gIGNvbm5lY3RTZW5kVGV4dEJveCxcbiAgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMsXG4gIGNvbm5lY3RVcGxvYWRCdXR0b25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljV2ViQ2hhdDtcblxuZXhwb3J0IHtcbiAgQ29tcG9uZW50cyxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgQ29udGV4dCxcbiAgY3JlYXRlQ29yZUFjdGl2aXR5TWlkZGxld2FyZSxcbiAgY3JlYXRlQ29yZUF0dGFjaG1lbnRNaWRkbGV3YXJlLFxuICBjcmVhdGVTdHlsZVNldCxcbiAgZGVmYXVsdFN0eWxlT3B0aW9ucyxcbiAgZ2V0VGFiSW5kZXgsXG4gIGhvb2tzLFxuICBsb2NhbGl6ZSxcbiAgdmVyc2lvblxufTtcbiJdfQ==
