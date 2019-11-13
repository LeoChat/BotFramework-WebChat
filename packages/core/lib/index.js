'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'clearSuggestedActions', {
  enumerable: true,
  get: function get() {
    return _clearSuggestedActions['default'];
  }
});
Object.defineProperty(exports, 'connect', {
  enumerable: true,
  get: function get() {
    return _connect['default'];
  }
});
Object.defineProperty(exports, 'createStore', {
  enumerable: true,
  get: function get() {
    return _createStore['default'];
  }
});
Object.defineProperty(exports, 'disconnect', {
  enumerable: true,
  get: function get() {
    return _disconnect['default'];
  }
});
Object.defineProperty(exports, 'emitTypingIndicator', {
  enumerable: true,
  get: function get() {
    return _emitTypingIndicator['default'];
  }
});
Object.defineProperty(exports, 'markActivity', {
  enumerable: true,
  get: function get() {
    return _markActivity['default'];
  }
});
Object.defineProperty(exports, 'postActivity', {
  enumerable: true,
  get: function get() {
    return _postActivity['default'];
  }
});
Object.defineProperty(exports, 'sendEvent', {
  enumerable: true,
  get: function get() {
    return _sendEvent['default'];
  }
});
Object.defineProperty(exports, 'sendFiles', {
  enumerable: true,
  get: function get() {
    return _sendFiles['default'];
  }
});
Object.defineProperty(exports, 'sendMessage', {
  enumerable: true,
  get: function get() {
    return _sendMessage['default'];
  }
});
Object.defineProperty(exports, 'sendMessageBack', {
  enumerable: true,
  get: function get() {
    return _sendMessageBack['default'];
  }
});
Object.defineProperty(exports, 'sendPostBack', {
  enumerable: true,
  get: function get() {
    return _sendPostBack['default'];
  }
});
Object.defineProperty(exports, 'setDictateInterims', {
  enumerable: true,
  get: function get() {
    return _setDictateInterims['default'];
  }
});
Object.defineProperty(exports, 'setDictateState', {
  enumerable: true,
  get: function get() {
    return _setDictateState['default'];
  }
});
Object.defineProperty(exports, 'setLanguage', {
  enumerable: true,
  get: function get() {
    return _setLanguage['default'];
  }
});
Object.defineProperty(exports, 'setSendBox', {
  enumerable: true,
  get: function get() {
    return _setSendBox['default'];
  }
});
Object.defineProperty(exports, 'setSendTimeout', {
  enumerable: true,
  get: function get() {
    return _setSendTimeout['default'];
  }
});
Object.defineProperty(exports, 'setSendTyping', {
  enumerable: true,
  get: function get() {
    return _setSendTyping['default'];
  }
});
Object.defineProperty(exports, 'setSendTypingIndicator', {
  enumerable: true,
  get: function get() {
    return _setSendTypingIndicator['default'];
  }
});
Object.defineProperty(exports, 'startDictate', {
  enumerable: true,
  get: function get() {
    return _startDictate['default'];
  }
});
Object.defineProperty(exports, 'startSpeakingActivity', {
  enumerable: true,
  get: function get() {
    return _startSpeakingActivity['default'];
  }
});
Object.defineProperty(exports, 'stopDictate', {
  enumerable: true,
  get: function get() {
    return _stopDictate['default'];
  }
});
Object.defineProperty(exports, 'stopSpeakingActivity', {
  enumerable: true,
  get: function get() {
    return _stopSpeakingActivity['default'];
  }
});
Object.defineProperty(exports, 'submitSendBox', {
  enumerable: true,
  get: function get() {
    return _submitSendBox['default'];
  }
});
exports.version = exports.Constants = void 0;

var _clearSuggestedActions = _interopRequireDefault(require('./actions/clearSuggestedActions'));

var _connect = _interopRequireDefault(require('./actions/connect'));

var _createStore = _interopRequireDefault(require('./createStore'));

var _disconnect = _interopRequireDefault(require('./actions/disconnect'));

var _emitTypingIndicator = _interopRequireDefault(require('./actions/emitTypingIndicator'));

var _markActivity = _interopRequireDefault(require('./actions/markActivity'));

var _postActivity = _interopRequireDefault(require('./actions/postActivity'));

var _sendEvent = _interopRequireDefault(require('./actions/sendEvent'));

var _sendFiles = _interopRequireDefault(require('./actions/sendFiles'));

var _sendMessage = _interopRequireDefault(require('./actions/sendMessage'));

var _sendMessageBack = _interopRequireDefault(require('./actions/sendMessageBack'));

var _sendPostBack = _interopRequireDefault(require('./actions/sendPostBack'));

var _setDictateInterims = _interopRequireDefault(require('./actions/setDictateInterims'));

var _setDictateState = _interopRequireDefault(require('./actions/setDictateState'));

var _setLanguage = _interopRequireDefault(require('./actions/setLanguage'));

var _setSendBox = _interopRequireDefault(require('./actions/setSendBox'));

var _setSendTimeout = _interopRequireDefault(require('./actions/setSendTimeout'));

var _setSendTyping = _interopRequireDefault(require('./actions/setSendTyping'));

var _setSendTypingIndicator = _interopRequireDefault(require('./actions/setSendTypingIndicator'));

var _startDictate = _interopRequireDefault(require('./actions/startDictate'));

var _startSpeakingActivity = _interopRequireDefault(require('./actions/startSpeakingActivity'));

var _stopDictate = _interopRequireDefault(require('./actions/stopDictate'));

var _stopSpeakingActivity = _interopRequireDefault(require('./actions/stopSpeakingActivity'));

var _submitSendBox = _interopRequireDefault(require('./actions/submitSendBox'));

var ActivityClientState = _interopRequireWildcard(require('./constants/ActivityClientState'));

var DictateState = _interopRequireWildcard(require('./constants/DictateState'));

/* global process:readonly */
var Constants = {
  ActivityClientState: ActivityClientState,
  DictateState: DictateState
};
exports.Constants = Constants;
var version = '0.0.0-0';
exports.version = version;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJBY3Rpdml0eUNsaWVudFN0YXRlIiwiRGljdGF0ZVN0YXRlIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUE1QkE7QUE4QkEsSUFBTUEsU0FBUyxHQUFHO0FBQUVDLEVBQUFBLG1CQUFtQixFQUFuQkEsbUJBQUY7QUFBdUJDLEVBQUFBLFlBQVksRUFBWkE7QUFBdkIsQ0FBbEI7O0FBQ0EsSUFBTUMsT0FBTyxZQUFiIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHByb2Nlc3M6cmVhZG9ubHkgKi9cblxuaW1wb3J0IGNsZWFyU3VnZ2VzdGVkQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvY2xlYXJTdWdnZXN0ZWRBY3Rpb25zJztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4vYWN0aW9ucy9jb25uZWN0JztcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBkaXNjb25uZWN0IGZyb20gJy4vYWN0aW9ucy9kaXNjb25uZWN0JztcbmltcG9ydCBlbWl0VHlwaW5nSW5kaWNhdG9yIGZyb20gJy4vYWN0aW9ucy9lbWl0VHlwaW5nSW5kaWNhdG9yJztcbmltcG9ydCBtYXJrQWN0aXZpdHkgZnJvbSAnLi9hY3Rpb25zL21hcmtBY3Rpdml0eSc7XG5pbXBvcnQgcG9zdEFjdGl2aXR5IGZyb20gJy4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHNlbmRFdmVudCBmcm9tICcuL2FjdGlvbnMvc2VuZEV2ZW50JztcbmltcG9ydCBzZW5kRmlsZXMgZnJvbSAnLi9hY3Rpb25zL3NlbmRGaWxlcyc7XG5pbXBvcnQgc2VuZE1lc3NhZ2UgZnJvbSAnLi9hY3Rpb25zL3NlbmRNZXNzYWdlJztcbmltcG9ydCBzZW5kTWVzc2FnZUJhY2sgZnJvbSAnLi9hY3Rpb25zL3NlbmRNZXNzYWdlQmFjayc7XG5pbXBvcnQgc2VuZFBvc3RCYWNrIGZyb20gJy4vYWN0aW9ucy9zZW5kUG9zdEJhY2snO1xuaW1wb3J0IHNldERpY3RhdGVJbnRlcmltcyBmcm9tICcuL2FjdGlvbnMvc2V0RGljdGF0ZUludGVyaW1zJztcbmltcG9ydCBzZXREaWN0YXRlU3RhdGUgZnJvbSAnLi9hY3Rpb25zL3NldERpY3RhdGVTdGF0ZSc7XG5pbXBvcnQgc2V0TGFuZ3VhZ2UgZnJvbSAnLi9hY3Rpb25zL3NldExhbmd1YWdlJztcbmltcG9ydCBzZXRTZW5kQm94IGZyb20gJy4vYWN0aW9ucy9zZXRTZW5kQm94JztcbmltcG9ydCBzZXRTZW5kVGltZW91dCBmcm9tICcuL2FjdGlvbnMvc2V0U2VuZFRpbWVvdXQnO1xuaW1wb3J0IHNldFNlbmRUeXBpbmcgZnJvbSAnLi9hY3Rpb25zL3NldFNlbmRUeXBpbmcnO1xuaW1wb3J0IHNldFNlbmRUeXBpbmdJbmRpY2F0b3IgZnJvbSAnLi9hY3Rpb25zL3NldFNlbmRUeXBpbmdJbmRpY2F0b3InO1xuaW1wb3J0IHN0YXJ0RGljdGF0ZSBmcm9tICcuL2FjdGlvbnMvc3RhcnREaWN0YXRlJztcbmltcG9ydCBzdGFydFNwZWFraW5nQWN0aXZpdHkgZnJvbSAnLi9hY3Rpb25zL3N0YXJ0U3BlYWtpbmdBY3Rpdml0eSc7XG5pbXBvcnQgc3RvcERpY3RhdGUgZnJvbSAnLi9hY3Rpb25zL3N0b3BEaWN0YXRlJztcbmltcG9ydCBzdG9wU3BlYWtpbmdBY3Rpdml0eSBmcm9tICcuL2FjdGlvbnMvc3RvcFNwZWFraW5nQWN0aXZpdHknO1xuaW1wb3J0IHN1Ym1pdFNlbmRCb3ggZnJvbSAnLi9hY3Rpb25zL3N1Ym1pdFNlbmRCb3gnO1xuXG5pbXBvcnQgKiBhcyBBY3Rpdml0eUNsaWVudFN0YXRlIGZyb20gJy4vY29uc3RhbnRzL0FjdGl2aXR5Q2xpZW50U3RhdGUnO1xuaW1wb3J0ICogYXMgRGljdGF0ZVN0YXRlIGZyb20gJy4vY29uc3RhbnRzL0RpY3RhdGVTdGF0ZSc7XG5cbmNvbnN0IENvbnN0YW50cyA9IHsgQWN0aXZpdHlDbGllbnRTdGF0ZSwgRGljdGF0ZVN0YXRlIH07XG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbjtcblxuZXhwb3J0IHtcbiAgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zLFxuICBjb25uZWN0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZVN0b3JlLFxuICBkaXNjb25uZWN0LFxuICBlbWl0VHlwaW5nSW5kaWNhdG9yLFxuICBtYXJrQWN0aXZpdHksXG4gIHBvc3RBY3Rpdml0eSxcbiAgc2VuZEV2ZW50LFxuICBzZW5kRmlsZXMsXG4gIHNlbmRNZXNzYWdlLFxuICBzZW5kTWVzc2FnZUJhY2ssXG4gIHNlbmRQb3N0QmFjayxcbiAgc2V0RGljdGF0ZUludGVyaW1zLFxuICBzZXREaWN0YXRlU3RhdGUsXG4gIHNldExhbmd1YWdlLFxuICBzZXRTZW5kQm94LFxuICBzZXRTZW5kVGltZW91dCxcbiAgc2V0U2VuZFR5cGluZ0luZGljYXRvcixcbiAgc3RhcnREaWN0YXRlLFxuICBzdGFydFNwZWFraW5nQWN0aXZpdHksXG4gIHN0b3BEaWN0YXRlLFxuICBzdG9wU3BlYWtpbmdBY3Rpdml0eSxcbiAgc3VibWl0U2VuZEJveCxcbiAgdmVyc2lvbixcbiAgLy8gVE9ETzogW1AzXSBUYWtlIHRoaXMgZGVwcmVjYXRpb24gY29kZSBvdXQgd2hlbiByZWxlYXNpbmcgb24gb3IgYWZ0ZXIgSmFudWFyeSAxMyAyMDIwXG4gIHNldFNlbmRUeXBpbmdcbn07XG4iXX0=
