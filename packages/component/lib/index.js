'use strict';

var cov_1uqnywowf5 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/index.tsx';
  var hash = '360c0a883be8baf1802600283b60924dbe010b35';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/index.tsx',
    statementMap: {
      '0': {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 39,
          column: 47
        }
      },
      '1': {
        start: {
          line: 41,
          column: 19
        },
        end: {
          line: 82,
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
    hash: '360c0a883be8baf1802600283b60924dbe010b35'
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

var version = (cov_1uqnywowf5.s[0]++, undefined);
exports.version = version;
var Components =
  (cov_1uqnywowf5.s[1]++,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsidmVyc2lvbiIsIkNvbXBvbmVudHMiLCJDb21wb3NlciIsIkxvY2FsaXplIiwiQXVkaW9Db250ZW50IiwiSFRNTFZpZGVvQ29udGVudCIsIkltYWdlQ29udGVudCIsIlRleHRDb250ZW50IiwiVmlkZW9Db250ZW50IiwiVmltZW9Db250ZW50IiwiWW91VHViZUNvbnRlbnQiLCJBdmF0YXIiLCJCdWJibGUiLCJDYXJvdXNlbExheW91dCIsIkVycm9yQm94IiwiU2VuZFN0YXR1cyIsIlNwZWFrQWN0aXZpdHkiLCJTdGFja2VkTGF5b3V0IiwiVGltZXN0YW1wIiwiY29ubmVjdFNlbmRTdGF0dXMiLCJjb25uZWN0U3BlYWtBY3Rpdml0eSIsImNvbm5lY3RTdGFja2VkTGF5b3V0IiwiRGljdGF0aW9uSW50ZXJpbXMiLCJNaWNyb3Bob25lQnV0dG9uIiwiU2VuZEJ1dHRvbiIsIlNlbmRUZXh0Qm94IiwiU3VnZ2VzdGVkQWN0aW9ucyIsIlVwbG9hZEJ1dHRvbiIsImNvbm5lY3REaWN0YXRpb25JbnRlcmltcyIsImNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIiwiY29ubmVjdFNlbmRCdXR0b24iLCJjb25uZWN0U2VuZFRleHRCb3giLCJjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyIsImNvbm5lY3RVcGxvYWRCdXR0b24iLCJCYXNpY1dlYkNoYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8scUNBQWI7O0FBRUEsSUFBTUMsVUFBVSwyQkFBRztBQUNqQkMsRUFBQUEsUUFBUSxFQUFSQSxpQkFEaUI7QUFFakJDLEVBQUFBLFFBQVEsRUFBUkEsaUJBRmlCO0FBSWpCO0FBQ0FDLEVBQUFBLFlBQVksRUFBWkEscUJBTGlCO0FBTWpCQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLHlCQU5pQjtBQU9qQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFQaUI7QUFRakJDLEVBQUFBLFdBQVcsRUFBWEEsb0JBUmlCO0FBU2pCQyxFQUFBQSxZQUFZLEVBQVpBLHFCQVRpQjtBQVVqQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFWaUI7QUFXakJDLEVBQUFBLGNBQWMsRUFBZEEsdUJBWGlCO0FBYWpCO0FBQ0FDLEVBQUFBLE1BQU0sRUFBTkEsZUFkaUI7QUFlakJDLEVBQUFBLE1BQU0sRUFBTkEsZUFmaUI7QUFnQmpCQyxFQUFBQSxjQUFjLEVBQWRBLHVCQWhCaUI7QUFpQmpCQyxFQUFBQSxRQUFRLEVBQVJBLGlCQWpCaUI7QUFrQmpCQyxFQUFBQSxVQUFVLEVBQVZBLG1CQWxCaUI7QUFtQmpCQyxFQUFBQSxhQUFhLEVBQWJBLGNBbkJpQjtBQW9CakJDLEVBQUFBLGFBQWEsRUFBYkEsc0JBcEJpQjtBQXFCakJDLEVBQUFBLFNBQVMsRUFBVEEsa0JBckJpQjtBQXVCakJDLEVBQUFBLGlCQUFpQixFQUFqQkEsNkJBdkJpQjtBQXdCakJDLEVBQUFBLG9CQUFvQixFQUFwQkEsMkJBeEJpQjtBQXlCakJDLEVBQUFBLG9CQUFvQixFQUFwQkEsbUNBekJpQjtBQTJCakI7QUFDQUMsRUFBQUEsaUJBQWlCLEVBQWpCQSwwQkE1QmlCO0FBNkJqQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkE3QmlCO0FBOEJqQkMsRUFBQUEsVUFBVSxFQUFWQSxtQkE5QmlCO0FBK0JqQkMsRUFBQUEsV0FBVyxFQUFYQSxnQkEvQmlCO0FBZ0NqQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkFoQ2lCO0FBaUNqQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFqQ2lCO0FBbUNqQkMsRUFBQUEsd0JBQXdCLEVBQXhCQSwyQ0FuQ2lCO0FBb0NqQkMsRUFBQUEsdUJBQXVCLEVBQXZCQSx5Q0FwQ2lCO0FBcUNqQkMsRUFBQUEsaUJBQWlCLEVBQWpCQSw2QkFyQ2lCO0FBc0NqQkMsRUFBQUEsa0JBQWtCLEVBQWxCQSwyQkF0Q2lCO0FBdUNqQkMsRUFBQUEsdUJBQXVCLEVBQXZCQSx5Q0F2Q2lCO0FBd0NqQkMsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQXhDaUIsQ0FBSCxDQUFoQjs7ZUEyQ2VDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2ljV2ViQ2hhdCBmcm9tICcuL0Jhc2ljV2ViQ2hhdCc7XG5cbmltcG9ydCBDb21wb3NlciBmcm9tICcuL0NvbXBvc2VyJztcblxuaW1wb3J0IEF2YXRhciBmcm9tICcuL0FjdGl2aXR5L0F2YXRhcic7XG5pbXBvcnQgQnViYmxlIGZyb20gJy4vQWN0aXZpdHkvQnViYmxlJztcbmltcG9ydCBDYXJvdXNlbExheW91dCBmcm9tICcuL0FjdGl2aXR5L0Nhcm91c2VsTGF5b3V0JztcbmltcG9ydCBFcnJvckJveCBmcm9tICcuL0Vycm9yQm94JztcbmltcG9ydCBMb2NhbGl6ZSwgeyBsb2NhbGl6ZSB9IGZyb20gJy4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCBTZW5kU3RhdHVzLCB7IGNvbm5lY3RTZW5kU3RhdHVzIH0gZnJvbSAnLi9BY3Rpdml0eS9TZW5kU3RhdHVzJztcbmltcG9ydCBTcGVha0FjdGl2aXR5LCB7IGNvbm5lY3RTcGVha0FjdGl2aXR5IH0gZnJvbSAnLi9BY3Rpdml0eS9TcGVhayc7XG5pbXBvcnQgU3RhY2tlZExheW91dCwgeyBjb25uZWN0U3RhY2tlZExheW91dCB9IGZyb20gJy4vQWN0aXZpdHkvU3RhY2tlZExheW91dCc7XG5pbXBvcnQgVGltZXN0YW1wIGZyb20gJy4vQWN0aXZpdHkvVGltZXN0YW1wJztcblxuaW1wb3J0IEF1ZGlvQ29udGVudCBmcm9tICcuL0F0dGFjaG1lbnQvQXVkaW9Db250ZW50JztcbmltcG9ydCBIVE1MVmlkZW9Db250ZW50IGZyb20gJy4vQXR0YWNobWVudC9IVE1MVmlkZW9Db250ZW50JztcbmltcG9ydCBJbWFnZUNvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L0ltYWdlQ29udGVudCc7XG5pbXBvcnQgVGV4dENvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L1RleHRDb250ZW50JztcbmltcG9ydCBWaWRlb0NvbnRlbnQgZnJvbSAnLi9BdHRhY2htZW50L1ZpZGVvQ29udGVudCc7XG5pbXBvcnQgVmltZW9Db250ZW50IGZyb20gJy4vQXR0YWNobWVudC9WaW1lb0NvbnRlbnQnO1xuaW1wb3J0IFlvdVR1YmVDb250ZW50IGZyb20gJy4vQXR0YWNobWVudC9Zb3VUdWJlQ29udGVudCc7XG5cbmltcG9ydCBEaWN0YXRpb25JbnRlcmltcywgeyBjb25uZWN0RGljdGF0aW9uSW50ZXJpbXMgfSBmcm9tICcuL1NlbmRCb3gvRGljdGF0aW9uSW50ZXJpbXMnO1xuaW1wb3J0IE1pY3JvcGhvbmVCdXR0b24sIHsgY29ubmVjdE1pY3JvcGhvbmVCdXR0b24gfSBmcm9tICcuL1NlbmRCb3gvTWljcm9waG9uZUJ1dHRvbic7XG5pbXBvcnQgU2VuZEJ1dHRvbiwgeyBjb25uZWN0U2VuZEJ1dHRvbiB9IGZyb20gJy4vU2VuZEJveC9TZW5kQnV0dG9uJztcbmltcG9ydCBTZW5kVGV4dEJveCwgeyBjb25uZWN0U2VuZFRleHRCb3ggfSBmcm9tICcuL1NlbmRCb3gvVGV4dEJveCc7XG5pbXBvcnQgU3VnZ2VzdGVkQWN0aW9ucywgeyBjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyB9IGZyb20gJy4vU2VuZEJveC9TdWdnZXN0ZWRBY3Rpb25zJztcbmltcG9ydCBVcGxvYWRCdXR0b24sIHsgY29ubmVjdFVwbG9hZEJ1dHRvbiB9IGZyb20gJy4vU2VuZEJveC9VcGxvYWRCdXR0b24nO1xuXG5pbXBvcnQgY29uY2F0TWlkZGxld2FyZSBmcm9tICcuL01pZGRsZXdhcmUvY29uY2F0TWlkZGxld2FyZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IENvbnRleHQgZnJvbSAnLi9Db250ZXh0JztcbmltcG9ydCBjcmVhdGVDb3JlQWN0aXZpdHlNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9BY3Rpdml0eS9jcmVhdGVDb3JlTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlQ29yZUF0dGFjaG1lbnRNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9BdHRhY2htZW50L2NyZWF0ZUNvcmVNaWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVTdHlsZVNldCBmcm9tICcuL1N0eWxlcy9jcmVhdGVTdHlsZVNldCc7XG5pbXBvcnQgZGVmYXVsdFN0eWxlT3B0aW9ucyBmcm9tICcuL1N0eWxlcy9kZWZhdWx0U3R5bGVPcHRpb25zJztcbmltcG9ydCBnZXRUYWJJbmRleCBmcm9tICcuL1V0aWxzL1R5cGVGb2N1c1NpbmsvZ2V0VGFiSW5kZXgnO1xuXG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYuTlBNX1BBQ0tBR0VfVkVSU0lPTjtcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgQ29tcG9zZXIsXG4gIExvY2FsaXplLFxuXG4gIC8vIENvbXBvbmVudHMgZm9yIHJlY29tcG9zaW5nIGFjdGl2aXRpZXMgYW5kIGF0dGFjaG1lbnRzXG4gIEF1ZGlvQ29udGVudCxcbiAgSFRNTFZpZGVvQ29udGVudCxcbiAgSW1hZ2VDb250ZW50LFxuICBUZXh0Q29udGVudCxcbiAgVmlkZW9Db250ZW50LFxuICBWaW1lb0NvbnRlbnQsXG4gIFlvdVR1YmVDb250ZW50LFxuXG4gIC8vIENvbXBvbmVudHMgZm9yIHJlY29tcG9zaW5nIHRyYW5zY3JpcHRcbiAgQXZhdGFyLFxuICBCdWJibGUsXG4gIENhcm91c2VsTGF5b3V0LFxuICBFcnJvckJveCxcbiAgU2VuZFN0YXR1cyxcbiAgU3BlYWtBY3Rpdml0eSxcbiAgU3RhY2tlZExheW91dCxcbiAgVGltZXN0YW1wLFxuXG4gIGNvbm5lY3RTZW5kU3RhdHVzLFxuICBjb25uZWN0U3BlYWtBY3Rpdml0eSxcbiAgY29ubmVjdFN0YWNrZWRMYXlvdXQsXG5cbiAgLy8gQ29tcG9uZW50cyBmb3IgcmVjb21wb3Npbmcgc2VuZCBib3hcbiAgRGljdGF0aW9uSW50ZXJpbXMsXG4gIE1pY3JvcGhvbmVCdXR0b24sXG4gIFNlbmRCdXR0b24sXG4gIFNlbmRUZXh0Qm94LFxuICBTdWdnZXN0ZWRBY3Rpb25zLFxuICBVcGxvYWRCdXR0b24sXG5cbiAgY29ubmVjdERpY3RhdGlvbkludGVyaW1zLFxuICBjb25uZWN0TWljcm9waG9uZUJ1dHRvbixcbiAgY29ubmVjdFNlbmRCdXR0b24sXG4gIGNvbm5lY3RTZW5kVGV4dEJveCxcbiAgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMsXG4gIGNvbm5lY3RVcGxvYWRCdXR0b25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljV2ViQ2hhdDtcblxuZXhwb3J0IHtcbiAgQ29tcG9uZW50cyxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgQ29udGV4dCxcbiAgY3JlYXRlQ29yZUFjdGl2aXR5TWlkZGxld2FyZSxcbiAgY3JlYXRlQ29yZUF0dGFjaG1lbnRNaWRkbGV3YXJlLFxuICBjcmVhdGVTdHlsZVNldCxcbiAgZGVmYXVsdFN0eWxlT3B0aW9ucyxcbiAgZ2V0VGFiSW5kZXgsXG4gIGxvY2FsaXplLFxuICB2ZXJzaW9uXG59O1xuIl19
