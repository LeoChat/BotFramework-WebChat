'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ConnectivityStatus = _interopRequireDefault(require('./SendBox/ConnectivityStatus'));

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

var _DictationInterims = _interopRequireDefault(require('./SendBox/DictationInterims'));

var _MicrophoneButton = _interopRequireDefault(require('./SendBox/MicrophoneButton'));

var _SendButton = _interopRequireDefault(require('./SendBox/SendButton'));

var _SuggestedActions = _interopRequireDefault(require('./SendBox/SuggestedActions'));

var _TextBox = _interopRequireDefault(require('./SendBox/TextBox'));

var _TypingIndicator = _interopRequireDefault(require('./SendBox/TypingIndicator'));

var _UploadButton = _interopRequireDefault(require('./SendBox/UploadButton'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _Constants$DictateSta = _botframeworkWebchatCore.Constants.DictateState,
  DICTATING = _Constants$DictateSta.DICTATING,
  STARTING = _Constants$DictateSta.STARTING;
var ROOT_CSS = (0, _glamor.css)({
  '& > .main': {
    display: 'flex'
  }
});
var DICTATION_INTERIMS_CSS = (0, _glamor.css)({
  flex: 10000
});
var MICROPHONE_BUTTON_CSS = (0, _glamor.css)({
  flex: 1
});
var TEXT_BOX_CSS = (0, _glamor.css)({
  flex: 10000
});

var BasicSendBox = function BasicSendBox(_ref) {
  var className = _ref.className,
    dictationStarted = _ref.dictationStarted,
    styleSet = _ref.styleSet,
    webSpeechPonyfill = _ref.webSpeechPonyfill;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(styleSet.sendBox + '', ROOT_CSS + '', className + ''),
      role: 'form'
    },
    _react.default.createElement(_TypingIndicator.default, null),
    _react.default.createElement(_ConnectivityStatus.default, null),
    _react.default.createElement(_SuggestedActions.default, null),
    _react.default.createElement(
      'div',
      {
        className: 'main'
      },
      !styleSet.options.hideUploadButton && _react.default.createElement(_UploadButton.default, null),
      dictationStarted
        ? _react.default.createElement(_DictationInterims.default, {
            className: DICTATION_INTERIMS_CSS + ''
          })
        : _react.default.createElement(_TextBox.default, {
            className: TEXT_BOX_CSS + ''
          }),
      _react.default.createElement(
        'div',
        null,
        (webSpeechPonyfill || {}).SpeechRecognition
          ? _react.default.createElement(_MicrophoneButton.default, {
              className: MICROPHONE_BUTTON_CSS + ''
            })
          : _react.default.createElement(_SendButton.default, null)
      )
    )
  );
};

BasicSendBox.defaultProps = {
  className: '',
  webSpeechPonyfill: undefined
};
BasicSendBox.propTypes = {
  className: _propTypes.default.string,
  dictationStarted: _propTypes.default.bool.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      hideUploadButton: _propTypes.default.bool.isRequired
    }).isRequired,
    sendBox: _propTypes.default.any.isRequired
  }).isRequired,
  webSpeechPonyfill: _propTypes.default.shape({
    SpeechRecognition: _propTypes.default.any
  })
}; // TODO: [P3] We should consider exposing core/src/definitions and use it instead

function activityIsSpeakingOrQueuedToSpeak(_ref2) {
  var _ref2$channelData = _ref2.channelData;
  _ref2$channelData = _ref2$channelData === void 0 ? {} : _ref2$channelData;
  var speak = _ref2$channelData.speak;
  return !!speak;
}

var _default = (0, _connectToWebChat.default)(function(_ref3) {
  var activities = _ref3.activities,
    dictateState = _ref3.dictateState,
    styleSet = _ref3.styleSet,
    webSpeechPonyfill = _ref3.webSpeechPonyfill;
  return {
    dictationStarted:
      (dictateState === STARTING || dictateState === DICTATING) &&
      !activities.filter(activityIsSpeakingOrQueuedToSpeak).length,
    styleSet: styleSet,
    webSpeechPonyfill: webSpeechPonyfill
  };
})(BasicSendBox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNpY1NlbmRCb3guanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiRGljdGF0ZVN0YXRlIiwiRElDVEFUSU5HIiwiU1RBUlRJTkciLCJST09UX0NTUyIsImRpc3BsYXkiLCJESUNUQVRJT05fSU5URVJJTVNfQ1NTIiwiZmxleCIsIk1JQ1JPUEhPTkVfQlVUVE9OX0NTUyIsIlRFWFRfQk9YX0NTUyIsIkJhc2ljU2VuZEJveCIsImNsYXNzTmFtZSIsImRpY3RhdGlvblN0YXJ0ZWQiLCJzdHlsZVNldCIsIndlYlNwZWVjaFBvbnlmaWxsIiwic2VuZEJveCIsIm9wdGlvbnMiLCJoaWRlVXBsb2FkQnV0dG9uIiwiU3BlZWNoUmVjb2duaXRpb24iLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYW55IiwiYWN0aXZpdHlJc1NwZWFraW5nT3JRdWV1ZWRUb1NwZWFrIiwiY2hhbm5lbERhdGEiLCJzcGVhayIsImFjdGl2aXRpZXMiLCJkaWN0YXRlU3RhdGUiLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs0QkFJSUEsa0MsQ0FERkMsWTtJQUFnQkMsUyx5QkFBQUEsUztJQUFXQyxRLHlCQUFBQSxRO0FBRzdCLElBQU1DLFFBQVEsR0FBRyxpQkFBSTtBQUNuQixlQUFhO0FBQ1hDLElBQUFBLE9BQU8sRUFBRTtBQURFO0FBRE0sQ0FBSixDQUFqQjtBQU1BLElBQU1DLHNCQUFzQixHQUFHLGlCQUFJO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQUosQ0FBL0I7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxpQkFBSTtBQUFFRCxFQUFBQSxJQUFJLEVBQUU7QUFBUixD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QkFBaUIsRUFBakJBO0FBTDhGLEdBQWhFO0FBQUEsQ0FBakIsRUFNWEosWUFOVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbm5lY3Rpdml0eVN0YXR1cyBmcm9tICcuL1NlbmRCb3gvQ29ubmVjdGl2aXR5U3RhdHVzJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgRGljdGF0aW9uSW50ZXJpbXMgZnJvbSAnLi9TZW5kQm94L0RpY3RhdGlvbkludGVyaW1zJztcbmltcG9ydCBNaWNyb3Bob25lQnV0dG9uIGZyb20gJy4vU2VuZEJveC9NaWNyb3Bob25lQnV0dG9uJztcbmltcG9ydCBTZW5kQnV0dG9uIGZyb20gJy4vU2VuZEJveC9TZW5kQnV0dG9uJztcbmltcG9ydCBTdWdnZXN0ZWRBY3Rpb25zIGZyb20gJy4vU2VuZEJveC9TdWdnZXN0ZWRBY3Rpb25zJztcbmltcG9ydCBUZXh0Qm94IGZyb20gJy4vU2VuZEJveC9UZXh0Qm94JztcbmltcG9ydCBUeXBpbmdJbmRpY2F0b3IgZnJvbSAnLi9TZW5kQm94L1R5cGluZ0luZGljYXRvcic7XG5pbXBvcnQgVXBsb2FkQnV0dG9uIGZyb20gJy4vU2VuZEJveC9VcGxvYWRCdXR0b24nO1xuXG5jb25zdCB7XG4gIERpY3RhdGVTdGF0ZTogeyBESUNUQVRJTkcsIFNUQVJUSU5HIH1cbn0gPSBDb25zdGFudHM7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgJyYgPiAubWFpbic6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfVxufSk7XG5cbmNvbnN0IERJQ1RBVElPTl9JTlRFUklNU19DU1MgPSBjc3MoeyBmbGV4OiAxMDAwMCB9KTtcbmNvbnN0IE1JQ1JPUEhPTkVfQlVUVE9OX0NTUyA9IGNzcyh7IGZsZXg6IDEgfSk7XG5jb25zdCBURVhUX0JPWF9DU1MgPSBjc3MoeyBmbGV4OiAxMDAwMCB9KTtcblxuY29uc3QgQmFzaWNTZW5kQm94ID0gKHsgY2xhc3NOYW1lLCBkaWN0YXRpb25TdGFydGVkLCBzdHlsZVNldCwgd2ViU3BlZWNoUG9ueWZpbGwgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5zZW5kQm94ICsgJycsIFJPT1RfQ1NTICsgJycsIGNsYXNzTmFtZSArICcnKX0gcm9sZT1cImZvcm1cIj5cbiAgICA8VHlwaW5nSW5kaWNhdG9yIC8+XG4gICAgPENvbm5lY3Rpdml0eVN0YXR1cyAvPlxuICAgIDxTdWdnZXN0ZWRBY3Rpb25zIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7IXN0eWxlU2V0Lm9wdGlvbnMuaGlkZVVwbG9hZEJ1dHRvbiAmJiA8VXBsb2FkQnV0dG9uIC8+fVxuICAgICAge2RpY3RhdGlvblN0YXJ0ZWQgPyAoXG4gICAgICAgIDxEaWN0YXRpb25JbnRlcmltcyBjbGFzc05hbWU9e0RJQ1RBVElPTl9JTlRFUklNU19DU1MgKyAnJ30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxUZXh0Qm94IGNsYXNzTmFtZT17VEVYVF9CT1hfQ1NTICsgJyd9IC8+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgeyh3ZWJTcGVlY2hQb255ZmlsbCB8fCB7fSkuU3BlZWNoUmVjb2duaXRpb24gPyAoXG4gICAgICAgICAgPE1pY3JvcGhvbmVCdXR0b24gY2xhc3NOYW1lPXtNSUNST1BIT05FX0JVVFRPTl9DU1MgKyAnJ30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8U2VuZEJ1dHRvbiAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQmFzaWNTZW5kQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgd2ViU3BlZWNoUG9ueWZpbGw6IHVuZGVmaW5lZFxufTtcblxuQmFzaWNTZW5kQm94LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaWN0YXRpb25TdGFydGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaGlkZVVwbG9hZEJ1dHRvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc2VuZEJveDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIFNwZWVjaFJlY29nbml0aW9uOiBQcm9wVHlwZXMuYW55XG4gIH0pXG59O1xuXG4vLyBUT0RPOiBbUDNdIFdlIHNob3VsZCBjb25zaWRlciBleHBvc2luZyBjb3JlL3NyYy9kZWZpbml0aW9ucyBhbmQgdXNlIGl0IGluc3RlYWRcbmZ1bmN0aW9uIGFjdGl2aXR5SXNTcGVha2luZ09yUXVldWVkVG9TcGVhayh7IGNoYW5uZWxEYXRhOiB7IHNwZWFrIH0gPSB7fSB9KSB7XG4gIHJldHVybiAhIXNwZWFrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGFjdGl2aXRpZXMsIGRpY3RhdGVTdGF0ZSwgc3R5bGVTZXQsIHdlYlNwZWVjaFBvbnlmaWxsIH0pID0+ICh7XG4gIGRpY3RhdGlvblN0YXJ0ZWQ6XG4gICAgKGRpY3RhdGVTdGF0ZSA9PT0gU1RBUlRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcpICYmXG4gICAgIWFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5SXNTcGVha2luZ09yUXVldWVkVG9TcGVhaykubGVuZ3RoLFxuICBzdHlsZVNldCxcbiAgd2ViU3BlZWNoUG9ueWZpbGxcbn0pKShCYXNpY1NlbmRCb3gpO1xuIl19
