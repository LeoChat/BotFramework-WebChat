'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'Constants', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.Constants;
  }
});
Object.defineProperty(exports, 'createStore', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.createStore;
  }
});
Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.version;
  }
});
Object.defineProperty(exports, 'Components', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.Components;
  }
});
Object.defineProperty(exports, 'concatMiddleware', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.concatMiddleware;
  }
});
Object.defineProperty(exports, 'connectToWebChat', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.connectToWebChat;
  }
});
Object.defineProperty(exports, 'createStyleSet', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.createStyleSet;
  }
});
Object.defineProperty(exports, 'createBrowserWebSpeechPonyfillFactory', {
  enumerable: true,
  get: function get() {
    return _createBrowserWebSpeechPonyfillFactory.default;
  }
});
exports.renderWebChat = exports.default = exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _botframeworkWebchatComponent = _interopRequireWildcard(require('botframework-webchat-component'));

var _addVersion = _interopRequireDefault(require('./addVersion'));

var _renderWebChat = _interopRequireDefault(require('./renderWebChat'));

var _createBrowserWebSpeechPonyfillFactory = _interopRequireDefault(require('./createBrowserWebSpeechPonyfillFactory'));

var _createDirectLine = _interopRequireDefault(require('./createDirectLine'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var renderWebChat = _renderWebChat.default.bind(null, _botframeworkWebchatComponent.default);

exports.renderWebChat = renderWebChat;

var createDirectLine = function createDirectLine(options) {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_botframeworkWebchatCore.version, ' (Minimal)')
    })
  );
};

exports.createDirectLine = createDirectLine;
var _default = _botframeworkWebchatComponent.default;
exports.default = _default;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  concatMiddleware: _botframeworkWebchatComponent.concatMiddleware,
  connectToWebChat: _botframeworkWebchatComponent.connectToWebChat,
  Constants: _botframeworkWebchatCore.Constants,
  createBrowserWebSpeechPonyfillFactory: _createBrowserWebSpeechPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createStore: _botframeworkWebchatCore.createStore,
  createStyleSet: _botframeworkWebchatComponent.createStyleSet,
  ReactWebChat: _botframeworkWebchatComponent.default,
  renderWebChat: renderWebChat
});
(0, _addVersion.default)('minimal');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1taW5pbWFsLnRzIl0sIm5hbWVzIjpbInJlbmRlcldlYkNoYXQiLCJjb3JlUmVuZGVyV2ViQ2hhdCIsImJpbmQiLCJSZWFjdFdlYkNoYXQiLCJjcmVhdGVEaXJlY3RMaW5lIiwib3B0aW9ucyIsImJvdEFnZW50IiwiY29uc29sZSIsIndhcm4iLCJ2ZXJzaW9uIiwid2luZG93IiwiY29uY2F0TWlkZGxld2FyZSIsImNvbm5lY3RUb1dlYkNoYXQiLCJDb25zdGFudHMiLCJjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVTdHlsZVNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUVBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHVCQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJDLHFDQUE3QixDQUF0Qjs7OztBQUVPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsT0FBTyxFQUFJO0FBQ3pDQSxFQUFBQSxPQUFPLENBQUNDLFFBQVIsSUFDRUMsT0FBTyxDQUFDQyxJQUFSLENBQ0Usc0xBREYsQ0FERjtBQUlBLFNBQU8saURBQTZCSCxPQUE3QjtBQUFzQ0MsSUFBQUEsUUFBUSxvQkFBYUcsZ0NBQWI7QUFBOUMsS0FBUDtBQUNELENBTk07OztlQVFRTixxQzs7QUFjZk8sTUFBTSxDQUFDLFNBQUQsQ0FBTixxQkFDS0EsTUFBTSxDQUFDLFNBQUQsQ0FEWDtBQUVFQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLDhDQUZGO0FBR0VDLEVBQUFBLGdCQUFnQixFQUFoQkEsOENBSEY7QUFJRUMsRUFBQUEsU0FBUyxFQUFUQSxrQ0FKRjtBQUtFQyxFQUFBQSxxQ0FBcUMsRUFBckNBLDhDQUxGO0FBTUVWLEVBQUFBLGdCQUFnQixFQUFoQkEsZ0JBTkY7QUFPRVcsRUFBQUEsV0FBVyxFQUFYQSxvQ0FQRjtBQVFFQyxFQUFBQSxjQUFjLEVBQWRBLDRDQVJGO0FBU0ViLEVBQUFBLFlBQVksRUFBWkEscUNBVEY7QUFVRUgsRUFBQUEsYUFBYSxFQUFiQTtBQVZGO0FBYUEseUJBQVcsU0FBWCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xuLy8gd2luZG93WydXZWJDaGF0J10gaXMgcmVxdWlyZWQgZm9yIFR5cGVTY3JpcHRcblxuaW1wb3J0IHsgQ29uc3RhbnRzLCBjcmVhdGVTdG9yZSwgdmVyc2lvbiB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuXG5pbXBvcnQgUmVhY3RXZWJDaGF0LCB7XG4gIENvbXBvbmVudHMsXG4gIGNvbmNhdE1pZGRsZXdhcmUsXG4gIGNvbm5lY3RUb1dlYkNoYXQsXG4gIGNyZWF0ZVN0eWxlU2V0XG59IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5cbmltcG9ydCBhZGRWZXJzaW9uIGZyb20gJy4vYWRkVmVyc2lvbic7XG5pbXBvcnQgY29yZVJlbmRlcldlYkNoYXQgZnJvbSAnLi9yZW5kZXJXZWJDaGF0JztcbmltcG9ydCBjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IGZyb20gJy4vY3JlYXRlQnJvd3NlcldlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSc7XG5pbXBvcnQgZGVmYXVsdENyZWF0ZURpcmVjdExpbmUgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lJztcblxuY29uc3QgcmVuZGVyV2ViQ2hhdCA9IGNvcmVSZW5kZXJXZWJDaGF0LmJpbmQobnVsbCwgUmVhY3RXZWJDaGF0KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpcmVjdExpbmUgPSBvcHRpb25zID0+IHtcbiAgb3B0aW9ucy5ib3RBZ2VudCAmJlxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXZWIgQ2hhdDogRGV2ZWxvcGVycyBhcmUgbm90IGN1cnJlbnRseSBhbGxvd2VkIHRvIHNldCBib3RBZ2VudCBpbiB0aGUgY3JlYXRlRGlyZWN0TGluZSBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvQm90RnJhbWV3b3JrLVdlYkNoYXQvaXNzdWVzLzIxMTkgZm9yIG1vcmUgZGV0YWlscy4nXG4gICAgKTtcbiAgcmV0dXJuIGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lKHsgLi4ub3B0aW9ucywgYm90QWdlbnQ6IGBXZWJDaGF0LyR7dmVyc2lvbn0gKE1pbmltYWwpYCB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0V2ViQ2hhdDtcblxuZXhwb3J0IHtcbiAgQ29tcG9uZW50cyxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgQ29uc3RhbnRzLFxuICBjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5LFxuICBjcmVhdGVTdG9yZSxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIHJlbmRlcldlYkNoYXQsXG4gIHZlcnNpb25cbn07XG5cbndpbmRvd1snV2ViQ2hhdCddID0ge1xuICAuLi53aW5kb3dbJ1dlYkNoYXQnXSxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgQ29uc3RhbnRzLFxuICBjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5LFxuICBjcmVhdGVEaXJlY3RMaW5lLFxuICBjcmVhdGVTdG9yZSxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIFJlYWN0V2ViQ2hhdCxcbiAgcmVuZGVyV2ViQ2hhdFxufTtcblxuYWRkVmVyc2lvbignbWluaW1hbCcpO1xuIl19
