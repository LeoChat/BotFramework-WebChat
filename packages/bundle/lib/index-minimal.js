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
Object.defineProperty(exports, 'hooks', {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.hooks;
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
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
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
  hooks: _botframeworkWebchatComponent.hooks,
  ReactWebChat: _botframeworkWebchatComponent.default,
  renderWebChat: renderWebChat
});
(0, _addVersion.default)('minimal');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1taW5pbWFsLnRzIl0sIm5hbWVzIjpbInJlbmRlcldlYkNoYXQiLCJjb3JlUmVuZGVyV2ViQ2hhdCIsImJpbmQiLCJSZWFjdFdlYkNoYXQiLCJjcmVhdGVEaXJlY3RMaW5lIiwib3B0aW9ucyIsImJvdEFnZW50IiwiY29uc29sZSIsIndhcm4iLCJ2ZXJzaW9uIiwid2luZG93IiwiY29uY2F0TWlkZGxld2FyZSIsImNvbm5lY3RUb1dlYkNoYXQiLCJDb25zdGFudHMiLCJjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVTdHlsZVNldCIsImhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsdUJBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkMscUNBQTdCLENBQXRCOzs7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFDekNBLEVBQUFBLE9BQU8sQ0FBQ0MsUUFBUixJQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxzTEFERixDQURGO0FBSUEsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxnQ0FBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O2VBUVFOLHFDOztBQWVmTyxNQUFNLENBQUMsU0FBRCxDQUFOLHFCQUNLQSxNQUFNLENBQUMsU0FBRCxDQURYO0FBRUVDLEVBQUFBLGdCQUFnQixFQUFoQkEsOENBRkY7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQWhCQSw4Q0FIRjtBQUlFQyxFQUFBQSxTQUFTLEVBQVRBLGtDQUpGO0FBS0VDLEVBQUFBLHFDQUFxQyxFQUFyQ0EsOENBTEY7QUFNRVYsRUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFORjtBQU9FVyxFQUFBQSxXQUFXLEVBQVhBLG9DQVBGO0FBUUVDLEVBQUFBLGNBQWMsRUFBZEEsNENBUkY7QUFTRUMsRUFBQUEsS0FBSyxFQUFMQSxtQ0FURjtBQVVFZCxFQUFBQSxZQUFZLEVBQVpBLHFDQVZGO0FBV0VILEVBQUFBLGFBQWEsRUFBYkE7QUFYRjtBQWNBLHlCQUFXLFNBQVgiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgZG90LW5vdGF0aW9uOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dQYXR0ZXJuXCI6IFwiXldlYkNoYXQkXCIgfV0gKi9cbi8vIHdpbmRvd1snV2ViQ2hhdCddIGlzIHJlcXVpcmVkIGZvciBUeXBlU2NyaXB0XG5cbmltcG9ydCB7IENvbnN0YW50cywgY3JlYXRlU3RvcmUsIHZlcnNpb24gfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcblxuaW1wb3J0IFJlYWN0V2ViQ2hhdCwge1xuICBDb21wb25lbnRzLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBjcmVhdGVTdHlsZVNldCxcbiAgaG9va3Ncbn0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcblxuaW1wb3J0IGFkZFZlcnNpb24gZnJvbSAnLi9hZGRWZXJzaW9uJztcbmltcG9ydCBjb3JlUmVuZGVyV2ViQ2hhdCBmcm9tICcuL3JlbmRlcldlYkNoYXQnO1xuaW1wb3J0IGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkgZnJvbSAnLi9jcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5JztcbmltcG9ydCBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSBmcm9tICcuL2NyZWF0ZURpcmVjdExpbmUnO1xuXG5jb25zdCByZW5kZXJXZWJDaGF0ID0gY29yZVJlbmRlcldlYkNoYXQuYmluZChudWxsLCBSZWFjdFdlYkNoYXQpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0TGluZSA9IG9wdGlvbnMgPT4ge1xuICBvcHRpb25zLmJvdEFnZW50ICYmXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBEZXZlbG9wZXJzIGFyZSBub3QgY3VycmVudGx5IGFsbG93ZWQgdG8gc2V0IGJvdEFnZW50IGluIHRoZSBjcmVhdGVEaXJlY3RMaW5lIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9pc3N1ZXMvMjExOSBmb3IgbW9yZSBkZXRhaWxzLidcbiAgICApO1xuICByZXR1cm4gZGVmYXVsdENyZWF0ZURpcmVjdExpbmUoeyAuLi5vcHRpb25zLCBib3RBZ2VudDogYFdlYkNoYXQvJHt2ZXJzaW9ufSAoTWluaW1hbClgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RXZWJDaGF0O1xuXG5leHBvcnQge1xuICBDb21wb25lbnRzLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZVN0b3JlLFxuICBjcmVhdGVTdHlsZVNldCxcbiAgaG9va3MsXG4gIHJlbmRlcldlYkNoYXQsXG4gIHZlcnNpb25cbn07XG5cbndpbmRvd1snV2ViQ2hhdCddID0ge1xuICAuLi53aW5kb3dbJ1dlYkNoYXQnXSxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgQ29uc3RhbnRzLFxuICBjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5LFxuICBjcmVhdGVEaXJlY3RMaW5lLFxuICBjcmVhdGVTdG9yZSxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIGhvb2tzLFxuICBSZWFjdFdlYkNoYXQsXG4gIHJlbmRlcldlYkNoYXRcbn07XG5cbmFkZFZlcnNpb24oJ21pbmltYWwnKTtcbiJdfQ==
