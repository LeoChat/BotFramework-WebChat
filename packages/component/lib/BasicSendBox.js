'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.useSendBoxDictationStarted = useSendBoxDictationStarted;
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

var _useActivities3 = _interopRequireDefault(require('./hooks/useActivities'));

var _useStyleOptions3 = _interopRequireDefault(require('./hooks/useStyleOptions'));

var _useStyleSet3 = _interopRequireDefault(require('./hooks/useStyleSet'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
}); // TODO: [P3] We should consider exposing core/src/definitions and use it instead

function activityIsSpeakingOrQueuedToSpeak(_ref) {
  var _ref$channelData = _ref.channelData;
  _ref$channelData = _ref$channelData === void 0 ? {} : _ref$channelData;
  var speak = _ref$channelData.speak;
  return !!speak;
}

function useSendBoxDictationStarted(dictateState) {
  var _useActivities = (0, _useActivities3.default)(),
    _useActivities2 = _slicedToArray(_useActivities, 1),
    activities = _useActivities2[0];

  return [
    (dictateState === STARTING || dictateState === DICTATING) &&
      !activities.filter(activityIsSpeakingOrQueuedToSpeak).length
  ];
}

var BasicSendBox = function BasicSendBox(_ref2) {
  var className = _ref2.className,
    dictateState = _ref2.dictateState,
    webSpeechPonyfill = _ref2.webSpeechPonyfill;

  var _useSendBoxDictationS = useSendBoxDictationStarted(dictateState),
    _useSendBoxDictationS2 = _slicedToArray(_useSendBoxDictationS, 1),
    dictationStarted = _useSendBoxDictationS2[0];

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    sendBoxStyleSet = _useStyleSet2[0].sendBox;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    hideUploadButton = _useStyleOptions2[0].hideUploadButton;

  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(sendBoxStyleSet + '', ROOT_CSS + '', className + ''),
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
      !hideUploadButton && _react.default.createElement(_UploadButton.default, null),
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
  dictateState: _propTypes.default.number.isRequired,
  webSpeechPonyfill: _propTypes.default.shape({
    SpeechRecognition: _propTypes.default.any
  })
};

var _default = (0, _connectToWebChat.default)(function(_ref3) {
  var dictateState = _ref3.dictateState,
    webSpeechPonyfill = _ref3.webSpeechPonyfill;
  return {
    dictateState: dictateState,
    webSpeechPonyfill: webSpeechPonyfill
  };
})(BasicSendBox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNpY1NlbmRCb3guanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiRGljdGF0ZVN0YXRlIiwiRElDVEFUSU5HIiwiU1RBUlRJTkciLCJST09UX0NTUyIsImRpc3BsYXkiLCJESUNUQVRJT05fSU5URVJJTVNfQ1NTIiwiZmxleCIsIk1JQ1JPUEhPTkVfQlVUVE9OX0NTUyIsIlRFWFRfQk9YX0NTUyIsImFjdGl2aXR5SXNTcGVha2luZ09yUXVldWVkVG9TcGVhayIsImNoYW5uZWxEYXRhIiwic3BlYWsiLCJ1c2VTZW5kQm94RGljdGF0aW9uU3RhcnRlZCIsImRpY3RhdGVTdGF0ZSIsImFjdGl2aXRpZXMiLCJmaWx0ZXIiLCJsZW5ndGgiLCJCYXNpY1NlbmRCb3giLCJjbGFzc05hbWUiLCJ3ZWJTcGVlY2hQb255ZmlsbCIsImRpY3RhdGlvblN0YXJ0ZWQiLCJzZW5kQm94U3R5bGVTZXQiLCJzZW5kQm94IiwiaGlkZVVwbG9hZEJ1dHRvbiIsIlNwZWVjaFJlY29nbml0aW9uIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7NEJBSUlBLGtDLENBREZDLFk7SUFBZ0JDLFMseUJBQUFBLFM7SUFBV0MsUSx5QkFBQUEsUTtBQUc3QixJQUFNQyxRQUFRLEdBQUcsaUJBQUk7QUFDbkIsZUFBYTtBQUNYQyxJQUFBQSxPQUFPLEVBQUU7QUFERTtBQURNLENBQUosQ0FBakI7QUFNQSxJQUFNQyxzQkFBc0IsR0FBRyxpQkFBSTtBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFKLENBQS9CO0FB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LEdBQTFDO0FBQUEsQ0FBakIsRUFHWEYsWUFIVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbm5lY3Rpdml0eVN0YXR1cyBmcm9tICcuL1NlbmRCb3gvQ29ubmVjdGl2aXR5U3RhdHVzJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgRGljdGF0aW9uSW50ZXJpbXMgZnJvbSAnLi9TZW5kQm94L0RpY3RhdGlvbkludGVyaW1zJztcbmltcG9ydCBNaWNyb3Bob25lQnV0dG9uIGZyb20gJy4vU2VuZEJveC9NaWNyb3Bob25lQnV0dG9uJztcbmltcG9ydCBTZW5kQnV0dG9uIGZyb20gJy4vU2VuZEJveC9TZW5kQnV0dG9uJztcbmltcG9ydCBTdWdnZXN0ZWRBY3Rpb25zIGZyb20gJy4vU2VuZEJveC9TdWdnZXN0ZWRBY3Rpb25zJztcbmltcG9ydCBUZXh0Qm94IGZyb20gJy4vU2VuZEJveC9UZXh0Qm94JztcbmltcG9ydCBUeXBpbmdJbmRpY2F0b3IgZnJvbSAnLi9TZW5kQm94L1R5cGluZ0luZGljYXRvcic7XG5pbXBvcnQgVXBsb2FkQnV0dG9uIGZyb20gJy4vU2VuZEJveC9VcGxvYWRCdXR0b24nO1xuaW1wb3J0IHVzZUFjdGl2aXRpZXMgZnJvbSAnLi9ob29rcy91c2VBY3Rpdml0aWVzJztcbmltcG9ydCB1c2VTdHlsZU9wdGlvbnMgZnJvbSAnLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCB7XG4gIERpY3RhdGVTdGF0ZTogeyBESUNUQVRJTkcsIFNUQVJUSU5HIH1cbn0gPSBDb25zdGFudHM7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgJyYgPiAubWFpbic6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfVxufSk7XG5cbmNvbnN0IERJQ1RBVElPTl9JTlRFUklNU19DU1MgPSBjc3MoeyBmbGV4OiAxMDAwMCB9KTtcbmNvbnN0IE1JQ1JPUEhPTkVfQlVUVE9OX0NTUyA9IGNzcyh7IGZsZXg6IDEgfSk7XG5jb25zdCBURVhUX0JPWF9DU1MgPSBjc3MoeyBmbGV4OiAxMDAwMCB9KTtcblxuLy8gVE9ETzogW1AzXSBXZSBzaG91bGQgY29uc2lkZXIgZXhwb3NpbmcgY29yZS9zcmMvZGVmaW5pdGlvbnMgYW5kIHVzZSBpdCBpbnN0ZWFkXG5mdW5jdGlvbiBhY3Rpdml0eUlzU3BlYWtpbmdPclF1ZXVlZFRvU3BlYWsoeyBjaGFubmVsRGF0YTogeyBzcGVhayB9ID0ge30gfSkge1xuICByZXR1cm4gISFzcGVhaztcbn1cblxuZnVuY3Rpb24gdXNlU2VuZEJveERpY3RhdGlvblN0YXJ0ZWQoZGljdGF0ZVN0YXRlKSB7XG4gIGNvbnN0IFthY3Rpdml0aWVzXSA9IHVzZUFjdGl2aXRpZXMoKTtcblxuICByZXR1cm4gW1xuICAgIChkaWN0YXRlU3RhdGUgPT09IFNUQVJUSU5HIHx8IGRpY3RhdGVTdGF0ZSA9PT0gRElDVEFUSU5HKSAmJlxuICAgICAgIWFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5SXNTcGVha2luZ09yUXVldWVkVG9TcGVhaykubGVuZ3RoXG4gIF07XG59XG5cbmNvbnN0IEJhc2ljU2VuZEJveCA9ICh7IGNsYXNzTmFtZSwgZGljdGF0ZVN0YXRlLCB3ZWJTcGVlY2hQb255ZmlsbCB9KSA9PiB7XG4gIGNvbnN0IFtkaWN0YXRpb25TdGFydGVkXSA9IHVzZVNlbmRCb3hEaWN0YXRpb25TdGFydGVkKGRpY3RhdGVTdGF0ZSk7XG4gIGNvbnN0IFt7IHNlbmRCb3g6IHNlbmRCb3hTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG4gIGNvbnN0IFt7IGhpZGVVcGxvYWRCdXR0b24gfV0gPSB1c2VTdHlsZU9wdGlvbnMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHNlbmRCb3hTdHlsZVNldCArICcnLCBST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJyl9IHJvbGU9XCJmb3JtXCI+XG4gICAgICA8VHlwaW5nSW5kaWNhdG9yIC8+XG4gICAgICA8Q29ubmVjdGl2aXR5U3RhdHVzIC8+XG4gICAgICA8U3VnZ2VzdGVkQWN0aW9ucyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIHshaGlkZVVwbG9hZEJ1dHRvbiAmJiA8VXBsb2FkQnV0dG9uIC8+fVxuICAgICAgICB7ZGljdGF0aW9uU3RhcnRlZCA/IChcbiAgICAgICAgICA8RGljdGF0aW9uSW50ZXJpbXMgY2xhc3NOYW1lPXtESUNUQVRJT05fSU5URVJJTVNfQ1NTICsgJyd9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRCb3ggY2xhc3NOYW1lPXtURVhUX0JPWF9DU1MgKyAnJ30gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KHdlYlNwZWVjaFBvbnlmaWxsIHx8IHt9KS5TcGVlY2hSZWNvZ25pdGlvbiA/IChcbiAgICAgICAgICAgIDxNaWNyb3Bob25lQnV0dG9uIGNsYXNzTmFtZT17TUlDUk9QSE9ORV9CVVRUT05fQ1NTICsgJyd9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTZW5kQnV0dG9uIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJhc2ljU2VuZEJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiB1bmRlZmluZWRcbn07XG5cbkJhc2ljU2VuZEJveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGljdGF0ZVN0YXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIFNwZWVjaFJlY29nbml0aW9uOiBQcm9wVHlwZXMuYW55XG4gIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGRpY3RhdGVTdGF0ZSwgd2ViU3BlZWNoUG9ueWZpbGwgfSkgPT4gKHtcbiAgZGljdGF0ZVN0YXRlLFxuICB3ZWJTcGVlY2hQb255ZmlsbFxufSkpKEJhc2ljU2VuZEJveCk7XG5cbmV4cG9ydCB7IHVzZVNlbmRCb3hEaWN0YXRpb25TdGFydGVkIH07XG4iXX0=
