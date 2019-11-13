'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _exportNames = {
  createDirectLine: true,
  renderWebChat: true,
  hooks: true,
  createCognitiveServicesBingSpeechPonyfillFactory: true,
  createCognitiveServicesSpeechServicesPonyfillFactory: true,
  createStyleSet: true,
  renderMarkdown: true
};
Object.defineProperty(exports, 'hooks', {
  enumerable: true,
  get: function get() {
    return _indexMinimal.hooks;
  }
});
Object.defineProperty(exports, 'createCognitiveServicesBingSpeechPonyfillFactory', {
  enumerable: true,
  get: function get() {
    return _createCognitiveServicesBingSpeechPonyfillFactory.default;
  }
});
Object.defineProperty(exports, 'createCognitiveServicesSpeechServicesPonyfillFactory', {
  enumerable: true,
  get: function get() {
    return _createCognitiveServicesSpeechServicesPonyfillFactory.default;
  }
});
Object.defineProperty(exports, 'createStyleSet', {
  enumerable: true,
  get: function get() {
    return _createStyleSetWithAdaptiveCards.default;
  }
});
Object.defineProperty(exports, 'renderMarkdown', {
  enumerable: true,
  get: function get() {
    return _renderMarkdown.default;
  }
});
exports.renderWebChat = exports.default = exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _indexMinimal = require('./index-minimal');

Object.keys(_indexMinimal).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexMinimal[key];
    }
  });
});

var _addVersion = _interopRequireDefault(require('./addVersion'));

var _renderWebChat = _interopRequireDefault(require('./renderWebChat'));

var _createCognitiveServicesBingSpeechPonyfillFactory = _interopRequireDefault(
  require('./createCognitiveServicesBingSpeechPonyfillFactory')
);

var _createCognitiveServicesSpeechServicesPonyfillFactory = _interopRequireDefault(
  require('./createCognitiveServicesSpeechServicesPonyfillFactory')
);

var _createStyleSetWithAdaptiveCards = _interopRequireDefault(
  require('./adaptiveCards/Styles/createStyleSetWithAdaptiveCards')
);

var _createDirectLine = _interopRequireDefault(require('./createDirectLine'));

var _FullReactWebChat = _interopRequireDefault(require('./FullReactWebChat'));

var _renderMarkdown = _interopRequireDefault(require('./renderMarkdown'));

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

var renderWebChat = _renderWebChat.default.bind(null, _FullReactWebChat.default);

exports.renderWebChat = renderWebChat;

var createDirectLine = function createDirectLine(options) {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_indexMinimal.version, ' (Full)')
    })
  );
};

exports.createDirectLine = createDirectLine;
var _default = _FullReactWebChat.default;
exports.default = _default;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  createCognitiveServicesBingSpeechPonyfillFactory: _createCognitiveServicesBingSpeechPonyfillFactory.default,
  createCognitiveServicesSpeechServicesPonyfillFactory: _createCognitiveServicesSpeechServicesPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createStyleSet: _createStyleSetWithAdaptiveCards.default,
  hooks: _indexMinimal.hooks,
  ReactWebChat: _FullReactWebChat.default,
  renderMarkdown: _renderMarkdown.default,
  renderWebChat: renderWebChat
});
(0, _addVersion.default)('full');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJyZW5kZXJXZWJDaGF0IiwiY29yZVJlbmRlcldlYkNoYXQiLCJiaW5kIiwiUmVhY3RXZWJDaGF0IiwiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwidmVyc2lvbiIsIndpbmRvdyIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnkiLCJjcmVhdGVTdHlsZVNldCIsImhvb2tzIiwicmVuZGVyTWFya2Rvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsdUJBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkMseUJBQTdCLENBQXRCOzs7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFDekNBLEVBQUFBLE9BQU8sQ0FBQ0MsUUFBUixJQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxxSkFERixDQURGO0FBSUEsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxxQkFBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O2VBUVFOLHlCOztBQVdmTyxNQUFNLENBQUMsU0FBRCxDQUFOLHFCQUNLQSxNQUFNLENBQUMsU0FBRCxDQURYO0FBRUVDLEVBQUFBLGdEQUFnRCxFQUFoREEseURBRkY7QUFHRUMsRUFBQUEsb0RBQW9ELEVBQXBEQSw2REFIRjtBQUlFUixFQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUpGO0FBS0VTLEVBQUFBLGNBQWMsRUFBZEEsd0NBTEY7QUFNRUMsRUFBQUEsS0FBSyxFQUFMQSxtQkFORjtBQU9FWCxFQUFBQSxZQUFZLEVBQVpBLHlCQVBGO0FBUUVZLEVBQUFBLGNBQWMsRUFBZEEsdUJBUkY7QUFTRWYsRUFBQUEsYUFBYSxFQUFiQTtBQVRGO0FBWUEseUJBQVcsTUFBWCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xuLy8gd2luZG93WydXZWJDaGF0J10gaXMgcmVxdWlyZWQgZm9yIFR5cGVTY3JpcHRcblxuZXhwb3J0ICogZnJvbSAnLi9pbmRleC1taW5pbWFsJztcblxuaW1wb3J0IHsgaG9va3MsIHZlcnNpb24gfSBmcm9tICcuL2luZGV4LW1pbmltYWwnO1xuaW1wb3J0IGFkZFZlcnNpb24gZnJvbSAnLi9hZGRWZXJzaW9uJztcbmltcG9ydCBjb3JlUmVuZGVyV2ViQ2hhdCBmcm9tICcuL3JlbmRlcldlYkNoYXQnO1xuaW1wb3J0IGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSBmcm9tICcuL2NyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSc7XG5pbXBvcnQgY3JlYXRlQ29nbml0aXZlU2VydmljZXNTcGVlY2hTZXJ2aWNlc1BvbnlmaWxsRmFjdG9yeSBmcm9tICcuL2NyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnknO1xuaW1wb3J0IGNyZWF0ZVN0eWxlU2V0IGZyb20gJy4vYWRhcHRpdmVDYXJkcy9TdHlsZXMvY3JlYXRlU3R5bGVTZXRXaXRoQWRhcHRpdmVDYXJkcyc7XG5pbXBvcnQgZGVmYXVsdENyZWF0ZURpcmVjdExpbmUgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lJztcbmltcG9ydCBSZWFjdFdlYkNoYXQgZnJvbSAnLi9GdWxsUmVhY3RXZWJDaGF0JztcbmltcG9ydCByZW5kZXJNYXJrZG93biBmcm9tICcuL3JlbmRlck1hcmtkb3duJztcblxuY29uc3QgcmVuZGVyV2ViQ2hhdCA9IGNvcmVSZW5kZXJXZWJDaGF0LmJpbmQobnVsbCwgUmVhY3RXZWJDaGF0KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpcmVjdExpbmUgPSBvcHRpb25zID0+IHtcbiAgb3B0aW9ucy5ib3RBZ2VudCAmJlxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXZWIgQ2hhdDogRGV2ZWxvcGVycyBhcmUgbm90IGN1cnJlbnRseSBhbGxvd2VkIHRvIHNldCBib3RBZ2VudC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvQm90RnJhbWV3b3JrLVdlYkNoYXQvaXNzdWVzLzIxMTkgZm9yIG1vcmUgZGV0YWlscy4nXG4gICAgKTtcbiAgcmV0dXJuIGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lKHsgLi4ub3B0aW9ucywgYm90QWdlbnQ6IGBXZWJDaGF0LyR7dmVyc2lvbn0gKEZ1bGwpYCB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0V2ViQ2hhdDtcblxuZXhwb3J0IHtcbiAgY3JlYXRlQ29nbml0aXZlU2VydmljZXNCaW5nU3BlZWNoUG9ueWZpbGxGYWN0b3J5LFxuICBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5LFxuICBjcmVhdGVTdHlsZVNldCxcbiAgaG9va3MsXG4gIHJlbmRlck1hcmtkb3duLFxuICByZW5kZXJXZWJDaGF0XG59O1xuXG53aW5kb3dbJ1dlYkNoYXQnXSA9IHtcbiAgLi4ud2luZG93WydXZWJDaGF0J10sXG4gIGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSxcbiAgY3JlYXRlQ29nbml0aXZlU2VydmljZXNTcGVlY2hTZXJ2aWNlc1BvbnlmaWxsRmFjdG9yeSxcbiAgY3JlYXRlRGlyZWN0TGluZSxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIGhvb2tzLFxuICBSZWFjdFdlYkNoYXQsXG4gIHJlbmRlck1hcmtkb3duLFxuICByZW5kZXJXZWJDaGF0XG59O1xuXG5hZGRWZXJzaW9uKCdmdWxsJyk7XG4iXX0=
