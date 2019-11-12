'use strict';

var cov_1suktt19r6 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/index.tsx';
  var hash = '39b166041fc0dc985f6716b6261d4d801097c05f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/index.tsx',
    statementMap: {
      '0': {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 41,
          column: 47
        }
      },
      '1': {
        start: {
          line: 43,
          column: 19
        },
        end: {
          line: 84,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {},
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '39b166041fc0dc985f6716b6261d4d801097c05f'
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

var version = (cov_1suktt19r6.s[0]++, '0.0.0-0');
exports.version = version;
var Components =
  (cov_1suktt19r6.s[1]++,
  {
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
  });
exports.Components = Components;
var _default = _BasicWebChat.default;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsidmVyc2lvbiIsIkNvbXBvbmVudHMiLCJDb21wb3NlciIsIkxvY2FsaXplIiwiQXVkaW9Db250ZW50IiwiSFRNTFZpZGVvQ29udGVudCIsIkltYWdlQ29udGVudCIsIlRleHRDb250ZW50IiwiVmlkZW9Db250ZW50IiwiVmltZW9Db250ZW50IiwiWW91VHViZUNvbnRlbnQiLCJBdmF0YXIiLCJCdWJibGUiLCJDYXJvdXNlbExheW91dCIsIkVycm9yQm94IiwiU2VuZFN0YXR1cyIsIlNwZWFrQWN0aXZpdHkiLCJTdGFja2VkTGF5b3V0IiwiVGltZXN0YW1wIiwiY29ubmVjdFNlbmRTdGF0dXMiLCJjb25uZWN0U3BlYWtBY3Rpdml0eSIsImNvbm5lY3RTdGFja2VkTGF5b3V0IiwiRGljdGF0aW9uSW50ZXJpbXMiLCJNaWNyb3Bob25lQnV0dG9uIiwiU2VuZEJ1dHRvbiIsIlNlbmRUZXh0Qm94IiwiU3VnZ2VzdGVkQWN0aW9ucyIsIlVwbG9hZEJ1dHRvbiIsImNvbm5lY3REaWN0YXRpb25JbnRlcmltcyIsImNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIiwiY29ubmVjdFNlbmRCdXR0b24iLCJjb25uZWN0U2VuZFRleHRCb3giLCJjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyIsImNvbm5lY3RVcGxvYWRCdXR0b24iLCJCYXNpY1dlYkNoYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLHFDQUFiOztBQUVBLElBQU1DLFVBQVUsMkJBQUc7QUFDakJDLEVBQUFBLFFBQVEsRUFBUkEsaUJBRGlCO0FBRWpCQyxFQUFBQSxRQUFRLEVBQVJBLGlCQUZpQjtBQUlqQjtBQUNBQyxFQUFBQSxZQUFZLEVBQVpBLHFCQUxpQjtBQU1qQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkFOaUI7QUFPakJDLEVBQUFBLFlBQVksRUFBWkEscUJBUGlCO0FBUWpCQyxFQUFBQSxXQUFXLEVBQVhBLG9CQVJpQjtBQVNqQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFUaUI7QUFVakJDLEVBQUFBLFlBQVksRUFBWkEscUJBVmlCO0FBV2pCQyxFQUFBQSxjQUFjLEVBQWRBLHVCQVhpQjtBQWFqQjtBQUNBQyxFQUFBQSxNQUFNLEVBQU5BLGVBZGlCO0FBZWpCQyxFQUFBQSxNQUFNLEVBQU5BLGVBZmlCO0FBZ0JqQkMsRUFBQUEsY0FBYyxFQUFkQSx1QkFoQmlCO0FBaUJqQkMsRUFBQUEsUUFBUSxFQUFSQSxpQkFqQmlCO0FBa0JqQkMsRUFBQUEsVUFBVSxFQUFWQSxtQkFsQmlCO0FBbUJqQkMsRUFBQUEsYUFBYSxFQUFiQSxjQW5CaUI7QUFvQmpCQyxFQUFBQSxhQUFhLEVBQWJBLHNCQXBCaUI7QUFxQmpCQyxFQUFBQSxTQUFTLEVBQVRBLGtCQXJCaUI7QUF1QmpCQyxFQUFBQSxpQkFBaUIsRUFBakJBLDZCQXZCaUI7QUF3QmpCQyxFQUFBQSxvQkFBb0IsRUFBcEJBLDJCQXhCaUI7QUF5QmpCQyxFQUFBQSxvQkFBb0IsRUFBcEJBLG1DQXpCaUI7QUEyQmpCO0FBQ0FDLEVBQUFBLGlCQUFpQixFQUFqQkEsMEJBNUJpQjtBQTZCakJDLEVBQUFBLGdCQUFnQixFQUFoQkEseUJBN0JpQjtBQThCakJDLEVBQUFBLFVBQVUsRUFBVkEsbUJBOUJpQjtBQStCakJDLEVBQUFBLFdBQVcsRUFBWEEsZ0JBL0JpQjtBQWdDakJDLEVBQUFBLGdCQUFnQixFQUFoQkEseUJBaENpQjtBQWlDakJDLEVBQUFBLFlBQVksRUFBWkEscUJBakNpQjtBQW1DakJDLEVBQUFBLHdCQUF3QixFQUF4QkEsMkNBbkNpQjtBQW9DakJDLEVBQUFBLHVCQUF1QixFQUF2QkEseUNBcENpQjtBQXFDakJDLEVBQUFBLGlCQUFpQixFQUFqQkEsNkJBckNpQjtBQXNDakJDLEVBQUFBLGtCQUFrQixFQUFsQkEsMkJBdENpQjtBQXVDakJDLEVBQUFBLHVCQUF1QixFQUF2QkEseUNBdkNpQjtBQXdDakJDLEVBQUFBLG1CQUFtQixFQUFuQkE7QUF4Q2lCLENBQUgsQ0FBaEI7O2VBMkNlQyxxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNpY1dlYkNoYXQgZnJvbSAnLi9CYXNpY1dlYkNoYXQnO1xuXG5pbXBvcnQgQ29tcG9zZXIgZnJvbSAnLi9Db21wb3Nlcic7XG5cbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9BY3Rpdml0eS9BdmF0YXInO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL0FjdGl2aXR5L0J1YmJsZSc7XG5pbXBvcnQgQ2Fyb3VzZWxMYXlvdXQgZnJvbSAnLi9BY3Rpdml0eS9DYXJvdXNlbExheW91dCc7XG5pbXBvcnQgRXJyb3JCb3ggZnJvbSAnLi9FcnJvckJveCc7XG5pbXBvcnQgTG9jYWxpemUsIHsgbG9jYWxpemUgfSBmcm9tICcuL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgU2VuZFN0YXR1cywgeyBjb25uZWN0U2VuZFN0YXR1cyB9IGZyb20gJy4vQWN0aXZpdHkvU2VuZFN0YXR1cyc7XG5pbXBvcnQgU3BlYWtBY3Rpdml0eSwgeyBjb25uZWN0U3BlYWtBY3Rpdml0eSB9IGZyb20gJy4vQWN0aXZpdHkvU3BlYWsnO1xuaW1wb3J0IFN0YWNrZWRMYXlvdXQsIHsgY29ubmVjdFN0YWNrZWRMYXlvdXQgfSBmcm9tICcuL0FjdGl2aXR5L1N0YWNrZWRMYXlvdXQnO1xuaW1wb3J0IFRpbWVzdGFtcCBmcm9tICcuL0FjdGl2aXR5L1RpbWVzdGFtcCc7XG5cbmltcG9ydCBBdWRpb0NvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L0F1ZGlvQ29udGVudCc7XG5pbXBvcnQgSFRNTFZpZGVvQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvSFRNTFZpZGVvQ29udGVudCc7XG5pbXBvcnQgSW1hZ2VDb250ZW50IGZyb20gJy4vQXR0YWNobWVudC9JbWFnZUNvbnRlbnQnO1xuaW1wb3J0IFRleHRDb250ZW50IGZyb20gJy4vQXR0YWNobWVudC9UZXh0Q29udGVudCc7XG5pbXBvcnQgVmlkZW9Db250ZW50IGZyb20gJy4vQXR0YWNobWVudC9WaWRlb0NvbnRlbnQnO1xuaW1wb3J0IFZpbWVvQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvVmltZW9Db250ZW50JztcbmltcG9ydCBZb3VUdWJlQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvWW91VHViZUNvbnRlbnQnO1xuXG5pbXBvcnQgRGljdGF0aW9uSW50ZXJpbXMsIHsgY29ubmVjdERpY3RhdGlvbkludGVyaW1zIH0gZnJvbSAnLi9TZW5kQm94L0RpY3RhdGlvbkludGVyaW1zJztcbmltcG9ydCBNaWNyb3Bob25lQnV0dG9uLCB7IGNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIH0gZnJvbSAnLi9TZW5kQm94L01pY3JvcGhvbmVCdXR0b24nO1xuaW1wb3J0IFNlbmRCdXR0b24sIHsgY29ubmVjdFNlbmRCdXR0b24gfSBmcm9tICcuL1NlbmRCb3gvU2VuZEJ1dHRvbic7XG5pbXBvcnQgU2VuZFRleHRCb3gsIHsgY29ubmVjdFNlbmRUZXh0Qm94IH0gZnJvbSAnLi9TZW5kQm94L1RleHRCb3gnO1xuaW1wb3J0IFN1Z2dlc3RlZEFjdGlvbnMsIHsgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMgfSBmcm9tICcuL1NlbmRCb3gvU3VnZ2VzdGVkQWN0aW9ucyc7XG5pbXBvcnQgVXBsb2FkQnV0dG9uLCB7IGNvbm5lY3RVcGxvYWRCdXR0b24gfSBmcm9tICcuL1NlbmRCb3gvVXBsb2FkQnV0dG9uJztcblxuaW1wb3J0IGNvbmNhdE1pZGRsZXdhcmUgZnJvbSAnLi9NaWRkbGV3YXJlL2NvbmNhdE1pZGRsZXdhcmUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vV2ViQ2hhdFVJQ29udGV4dCc7XG5pbXBvcnQgY3JlYXRlQ29yZUFjdGl2aXR5TWlkZGxld2FyZSBmcm9tICcuL01pZGRsZXdhcmUvQWN0aXZpdHkvY3JlYXRlQ29yZU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZUNvcmVBdHRhY2htZW50TWlkZGxld2FyZSBmcm9tICcuL01pZGRsZXdhcmUvQXR0YWNobWVudC9jcmVhdGVDb3JlTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlU3R5bGVTZXQgZnJvbSAnLi9TdHlsZXMvY3JlYXRlU3R5bGVTZXQnO1xuaW1wb3J0IGRlZmF1bHRTdHlsZU9wdGlvbnMgZnJvbSAnLi9TdHlsZXMvZGVmYXVsdFN0eWxlT3B0aW9ucyc7XG5pbXBvcnQgZ2V0VGFiSW5kZXggZnJvbSAnLi9VdGlscy9UeXBlRm9jdXNTaW5rL2dldFRhYkluZGV4JztcblxuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi9ob29rcy9pbmRleCc7XG5cbmNvbnN0IHZlcnNpb24gPSBwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBDb21wb3NlcixcbiAgTG9jYWxpemUsXG5cbiAgLy8gQ29tcG9uZW50cyBmb3IgcmVjb21wb3NpbmcgYWN0aXZpdGllcyBhbmQgYXR0YWNobWVudHNcbiAgQXVkaW9Db250ZW50LFxuICBIVE1MVmlkZW9Db250ZW50LFxuICBJbWFnZUNvbnRlbnQsXG4gIFRleHRDb250ZW50LFxuICBWaWRlb0NvbnRlbnQsXG4gIFZpbWVvQ29udGVudCxcbiAgWW91VHViZUNvbnRlbnQsXG5cbiAgLy8gQ29tcG9uZW50cyBmb3IgcmVjb21wb3NpbmcgdHJhbnNjcmlwdFxuICBBdmF0YXIsXG4gIEJ1YmJsZSxcbiAgQ2Fyb3VzZWxMYXlvdXQsXG4gIEVycm9yQm94LFxuICBTZW5kU3RhdHVzLFxuICBTcGVha0FjdGl2aXR5LFxuICBTdGFja2VkTGF5b3V0LFxuICBUaW1lc3RhbXAsXG5cbiAgY29ubmVjdFNlbmRTdGF0dXMsXG4gIGNvbm5lY3RTcGVha0FjdGl2aXR5LFxuICBjb25uZWN0U3RhY2tlZExheW91dCxcblxuICAvLyBDb21wb25lbnRzIGZvciByZWNvbXBvc2luZyBzZW5kIGJveFxuICBEaWN0YXRpb25JbnRlcmltcyxcbiAgTWljcm9waG9uZUJ1dHRvbixcbiAgU2VuZEJ1dHRvbixcbiAgU2VuZFRleHRCb3gsXG4gIFN1Z2dlc3RlZEFjdGlvbnMsXG4gIFVwbG9hZEJ1dHRvbixcblxuICBjb25uZWN0RGljdGF0aW9uSW50ZXJpbXMsXG4gIGNvbm5lY3RNaWNyb3Bob25lQnV0dG9uLFxuICBjb25uZWN0U2VuZEJ1dHRvbixcbiAgY29ubmVjdFNlbmRUZXh0Qm94LFxuICBjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyxcbiAgY29ubmVjdFVwbG9hZEJ1dHRvblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNXZWJDaGF0O1xuXG5leHBvcnQge1xuICBDb21wb25lbnRzLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb250ZXh0LFxuICBjcmVhdGVDb3JlQWN0aXZpdHlNaWRkbGV3YXJlLFxuICBjcmVhdGVDb3JlQXR0YWNobWVudE1pZGRsZXdhcmUsXG4gIGNyZWF0ZVN0eWxlU2V0LFxuICBkZWZhdWx0U3R5bGVPcHRpb25zLFxuICBnZXRUYWJJbmRleCxcbiAgaG9va3MsXG4gIGxvY2FsaXplLFxuICB2ZXJzaW9uXG59O1xuIl19
