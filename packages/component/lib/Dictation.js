'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _reactDictateButton = require('react-dictate-button');

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

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

var _Constants$DictateSta = _botframeworkWebchatCore.Constants.DictateState,
  DICTATING = _Constants$DictateSta.DICTATING,
  IDLE = _Constants$DictateSta.IDLE,
  STARTING = _Constants$DictateSta.STARTING;

var Dictation = function Dictation(_ref) {
  var dictateState = _ref.dictateState,
    disabled = _ref.disabled,
    language = _ref.language,
    numSpeakingActivities = _ref.numSpeakingActivities,
    onError = _ref.onError,
    postActivity = _ref.postActivity,
    sendTypingIndicator = _ref.sendTypingIndicator,
    setDictateInterims = _ref.setDictateInterims,
    setDictateState = _ref.setDictateState,
    setSendBox = _ref.setSendBox,
    startSpeakingActivity = _ref.startSpeakingActivity,
    stopDictate = _ref.stopDictate,
    submitSendBox = _ref.submitSendBox,
    _ref$webSpeechPonyfil = _ref.webSpeechPonyfill;
  _ref$webSpeechPonyfil = _ref$webSpeechPonyfil === void 0 ? {} : _ref$webSpeechPonyfil;
  var SpeechGrammarList = _ref$webSpeechPonyfil.SpeechGrammarList,
    SpeechRecognition = _ref$webSpeechPonyfil.SpeechRecognition;
  var handleDictate = (0, _react.useCallback)(
    function(_ref2) {
      var _ref2$result = _ref2.result;
      _ref2$result = _ref2$result === void 0 ? {} : _ref2$result;
      var transcript = _ref2$result.transcript;

      if (dictateState === DICTATING || dictateState === STARTING) {
        setDictateInterims([]);
        setDictateState(IDLE);
        stopDictate();

        if (transcript) {
          setSendBox(transcript);
          submitSendBox('speech');
          startSpeakingActivity();
        }
      }
    },
    [dictateState, setDictateInterims, setDictateState, stopDictate, setSendBox, submitSendBox, startSpeakingActivity]
  );
  var handleDictating = (0, _react.useCallback)(
    function(_ref3) {
      var _ref3$results = _ref3.results,
        results = _ref3$results === void 0 ? [] : _ref3$results;

      if (dictateState === DICTATING || dictateState === STARTING) {
        var interims = results.map(function(_ref4) {
          var transcript = _ref4.transcript;
          return transcript;
        });
        setDictateInterims(interims);
        setDictateState(DICTATING);
        sendTypingIndicator &&
          postActivity({
            type: 'typing'
          });
      }
    },
    [dictateState, postActivity, sendTypingIndicator, setDictateInterims, setDictateState]
  );
  var handleError = (0, _react.useCallback)(
    function() {
      dictateState !== IDLE && setDictateState(IDLE);
      (dictateState === DICTATING || dictateState === STARTING) && stopDictate();
      onError && onError(event);
    },
    [dictateState, onError, setDictateState, stopDictate]
  );
  return _react.default.createElement(_reactDictateButton.Composer, {
    lang: language,
    onDictate: handleDictate,
    onError: handleError,
    onProgress: handleDictating,
    speechGrammarList: SpeechGrammarList,
    speechRecognition: SpeechRecognition,
    started: !disabled && (dictateState === STARTING || dictateState === DICTATING) && !numSpeakingActivities
  });
};

Dictation.defaultProps = {
  disabled: false,
  onError: undefined,
  webSpeechPonyfill: undefined
};
Dictation.propTypes = {
  dictateState: _propTypes.default.number.isRequired,
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  numSpeakingActivities: _propTypes.default.number.isRequired,
  onError: _propTypes.default.func,
  postActivity: _propTypes.default.func.isRequired,
  sendTypingIndicator: _propTypes.default.bool.isRequired,
  setDictateInterims: _propTypes.default.func.isRequired,
  setDictateState: _propTypes.default.func.isRequired,
  setSendBox: _propTypes.default.func.isRequired,
  startSpeakingActivity: _propTypes.default.func.isRequired,
  stopDictate: _propTypes.default.func.isRequired,
  submitSendBox: _propTypes.default.func.isRequired,
  webSpeechPonyfill: _propTypes.default.shape({
    SpeechGrammarList: _propTypes.default.any.isRequired,
    SpeechRecognition: _propTypes.default.any.isRequired
  })
};

var _default = (0, _connectToWebChat.default)(function(_ref5) {
  var activities = _ref5.activities,
    dictateState = _ref5.dictateState,
    disabled = _ref5.disabled,
    language = _ref5.language,
    postActivity = _ref5.postActivity,
    sendTypingIndicator = _ref5.sendTypingIndicator,
    setDictateInterims = _ref5.setDictateInterims,
    setDictateState = _ref5.setDictateState,
    setSendBox = _ref5.setSendBox,
    startSpeakingActivity = _ref5.startSpeakingActivity,
    stopDictate = _ref5.stopDictate,
    submitSendBox = _ref5.submitSendBox,
    webSpeechPonyfill = _ref5.webSpeechPonyfill;
  return {
    dictateState: dictateState,
    disabled: disabled,
    language: language,
    numSpeakingActivities: activities.filter(function(_ref6) {
      var _ref6$channelData = _ref6.channelData;
      _ref6$channelData = _ref6$channelData === void 0 ? {} : _ref6$channelData;
      var speak = _ref6$channelData.speak;
      return speak;
    }).length,
    postActivity: postActivity,
    sendTypingIndicator: sendTypingIndicator,
    setDictateInterims: setDictateInterims,
    setDictateState: setDictateState,
    setSendBox: setSendBox,
    startSpeakingActivity: startSpeakingActivity,
    stopDictate: stopDictate,
    submitSendBox: submitSendBox,
    webSpeechPonyfill: webSpeechPonyfill
  };
})(Dictation);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EaWN0YXRpb24uanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiRGljdGF0ZVN0YXRlIiwiRElDVEFUSU5HIiwiSURMRSIsIlNUQVJUSU5HIiwiRGljdGF0aW9uIiwiZGljdGF0ZVN0YXRlIiwiZGlzYWJsZWQiLCJsYW5ndWFnZSIsIm51bVNwZWFraW5nQWN0aXZpdGllcyIsIm9uRXJyb3IiLCJwb3N0QWN0aXZpdHkiLCJzZW5kVHlwaW5nSW5kaWNhdG9yIiwic2V0RGljdGF0ZUludGVyaW1zIiwic2V0RGljdGF0ZVN0YXRlIiwic2V0U2VuZEJveCIsInN0YXJ0U3BlYWtpbmdBY3Rpdml0eSIsInN0b3BEaWN0YXRlIiwic3VibWl0U2VuZEJveCIsIndlYlNwZWVjaFBvbnlmaWxsIiwiU3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbiIsImhhbmRsZURpY3RhdGUiLCJyZXN1bHQiLCJ0cmFuc2NyaXB0IiwiaGFuZGxlRGljdGF0aW5nIiwicmVzdWx0cyIsImludGVyaW1zIiwibWFwIiwidHlwZSIsImhhbmRsZUVycm9yIiwiZXZlbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJzaGFwZSIsImFueSIsImFjdGl2aXRpZXMiLCJmaWx0ZXIiLCJjaGFubmVsRGF0YSIsInNwZWFrIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs0QkFJSUEsa0MsQ0FERkMsWTtJQUFnQkMsUyx5QkFBQUEsUztJQUFXQyxJLHlCQUFBQSxJO0lBQU1DLFEseUJBQUFBLFE7O0FBR25DLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BZVo7QUFBQSxNQWRKQyxZQWNJLFFBZEpBLFlBY0k7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpK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QyxJQUFBQSxrQkFBa0IsRUFBbEJBLGtCQVBLO0FBUUxDLElBQUFBLGVBQWUsRUFBZkEsZUFSSztBQVNMQyxJQUFBQSxVQUFVLEVBQVZBLFVBVEs7QUFVTEMsSUFBQUEscUJBQXFCLEVBQXJCQSxxQkFWSztBQVdMQyxJQUFBQSxXQUFXLEVBQVhBLFdBWEs7QUFZTEMsSUFBQUEsYUFBYSxFQUFiQSxhQVpLO0FBYUxDLElBQUFBLGlCQUFpQixFQUFqQkE7QUFiSyxHQWRQO0FBQUEsQ0FEYSxFQThCYmQsU0E5QmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2VyIGFzIERpY3RhdGVDb21wb3NlciB9IGZyb20gJ3JlYWN0LWRpY3RhdGUtYnV0dG9uJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3Qge1xuICBEaWN0YXRlU3RhdGU6IHsgRElDVEFUSU5HLCBJRExFLCBTVEFSVElORyB9XG59ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBEaWN0YXRpb24gPSAoe1xuICBkaWN0YXRlU3RhdGUsXG4gIGRpc2FibGVkLFxuICBsYW5ndWFnZSxcbiAgbnVtU3BlYWtpbmdBY3Rpdml0aWVzLFxuICBvbkVycm9yLFxuICBwb3N0QWN0aXZpdHksXG4gIHNlbmRUeXBpbmdJbmRpY2F0b3IsXG4gIHNldERpY3RhdGVJbnRlcmltcyxcbiAgc2V0RGljdGF0ZVN0YXRlLFxuICBzZXRTZW5kQm94LFxuICBzdGFydFNwZWFraW5nQWN0aXZpdHksXG4gIHN0b3BEaWN0YXRlLFxuICBzdWJtaXRTZW5kQm94LFxuICB3ZWJTcGVlY2hQb255ZmlsbDogeyBTcGVlY2hHcmFtbWFyTGlzdCwgU3BlZWNoUmVjb2duaXRpb24gfSA9IHt9XG59KSA9PiB7XG4gIGNvbnN0IGhhbmRsZURpY3RhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAoeyByZXN1bHQ6IHsgdHJhbnNjcmlwdCB9ID0ge30gfSkgPT4ge1xuICAgICAgaWYgKGRpY3RhdGVTdGF0ZSA9PT0gRElDVEFUSU5HIHx8IGRpY3RhdGVTdGF0ZSA9PT0gU1RBUlRJTkcpIHtcbiAgICAgICAgc2V0RGljdGF0ZUludGVyaW1zKFtdKTtcbiAgICAgICAgc2V0RGljdGF0ZVN0YXRlKElETEUpO1xuICAgICAgICBzdG9wRGljdGF0ZSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2NyaXB0KSB7XG4gICAgICAgICAgc2V0U2VuZEJveCh0cmFuc2NyaXB0KTtcbiAgICAgICAgICBzdWJtaXRTZW5kQm94KCdzcGVlY2gnKTtcbiAgICAgICAgICBzdGFydFNwZWFraW5nQWN0aXZpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2RpY3RhdGVTdGF0ZSwgc2V0RGljdGF0ZUludGVyaW1zLCBzZXREaWN0YXRlU3RhdGUsIHN0b3BEaWN0YXRlLCBzZXRTZW5kQm94LCBzdWJtaXRTZW5kQm94LCBzdGFydFNwZWFraW5nQWN0aXZpdHldXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRGljdGF0aW5nID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgcmVzdWx0cyA9IFtdIH0pID0+IHtcbiAgICAgIGlmIChkaWN0YXRlU3RhdGUgPT09IERJQ1RBVElORyB8fCBkaWN0YXRlU3RhdGUgPT09IFNUQVJUSU5HKSB7XG4gICAgICAgIGNvbnN0IGludGVyaW1zID0gcmVzdWx0cy5tYXAoKHsgdHJhbnNjcmlwdCB9KSA9PiB0cmFuc2NyaXB0KTtcblxuICAgICAgICBzZXREaWN0YXRlSW50ZXJpbXMoaW50ZXJpbXMpO1xuICAgICAgICBzZXREaWN0YXRlU3RhdGUoRElDVEFUSU5HKTtcbiAgICAgICAgc2VuZFR5cGluZ0luZGljYXRvciAmJiBwb3N0QWN0aXZpdHkoeyB0eXBlOiAndHlwaW5nJyB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkaWN0YXRlU3RhdGUsIHBvc3RBY3Rpdml0eSwgc2VuZFR5cGluZ0luZGljYXRvciwgc2V0RGljdGF0ZUludGVyaW1zLCBzZXREaWN0YXRlU3RhdGVdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRXJyb3IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGljdGF0ZVN0YXRlICE9PSBJRExFICYmIHNldERpY3RhdGVTdGF0ZShJRExFKTtcbiAgICAoZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBTVEFSVElORykgJiYgc3RvcERpY3RhdGUoKTtcblxuICAgIG9uRXJyb3IgJiYgb25FcnJvcihldmVudCk7XG4gIH0sIFtkaWN0YXRlU3RhdGUsIG9uRXJyb3IsIHNldERpY3RhdGVTdGF0ZSwgc3RvcERpY3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxEaWN0YXRlQ29tcG9zZXJcbiAgICAgIGxhbmc9e2xhbmd1YWdlfVxuICAgICAgb25EaWN0YXRlPXtoYW5kbGVEaWN0YXRlfVxuICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICBvblByb2dyZXNzPXtoYW5kbGVEaWN0YXRpbmd9XG4gICAgICBzcGVlY2hHcmFtbWFyTGlzdD17U3BlZWNoR3JhbW1hckxpc3R9XG4gICAgICBzcGVlY2hSZWNvZ25pdGlvbj17U3BlZWNoUmVjb2duaXRpb259XG4gICAgICBzdGFydGVkPXshZGlzYWJsZWQgJiYgKGRpY3RhdGVTdGF0ZSA9PT0gU1RBUlRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcpICYmICFudW1TcGVha2luZ0FjdGl2aXRpZXN9XG4gICAgLz5cbiAgKTtcbn07XG5cbkRpY3RhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25FcnJvcjogdW5kZWZpbmVkLFxuICB3ZWJTcGVlY2hQb255ZmlsbDogdW5kZWZpbmVkXG59O1xuXG5EaWN0YXRpb24ucHJvcFR5cGVzID0ge1xuICBkaWN0YXRlU3RhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBudW1TcGVha2luZ0FjdGl2aXRpZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvc3RBY3Rpdml0eTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VuZFR5cGluZ0luZGljYXRvcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0RGljdGF0ZUludGVyaW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXREaWN0YXRlU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0YXJ0U3BlYWtpbmdBY3Rpdml0eTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3RvcERpY3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIFNwZWVjaEdyYW1tYXJMaXN0OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgU3BlZWNoUmVjb2duaXRpb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdChcbiAgKHtcbiAgICBhY3Rpdml0aWVzLFxuICAgIGRpY3RhdGVTdGF0ZSxcbiAgICBkaXNhYmxlZCxcbiAgICBsYW5ndWFnZSxcbiAgICBwb3N0QWN0aXZpdHksXG4gICAgc2VuZFR5cGluZ0luZGljYXRvcixcbiAgICBzZXREaWN0YXRlSW50ZXJpbXMsXG4gICAgc2V0RGljdGF0ZVN0YXRlLFxuICAgIHNldFNlbmRCb3gsXG4gICAgc3RhcnRTcGVha2luZ0FjdGl2aXR5LFxuICAgIHN0b3BEaWN0YXRlLFxuICAgIHN1Ym1pdFNlbmRCb3gsXG4gICAgd2ViU3BlZWNoUG9ueWZpbGxcbiAgfSkgPT4gKHtcbiAgICBkaWN0YXRlU3RhdGUsXG4gICAgZGlzYWJsZWQsXG4gICAgbGFuZ3VhZ2UsXG4gICAgbnVtU3BlYWtpbmdBY3Rpdml0aWVzOiBhY3Rpdml0aWVzLmZpbHRlcigoeyBjaGFubmVsRGF0YTogeyBzcGVhayB9ID0ge30gfSkgPT4gc3BlYWspLmxlbmd0aCxcbiAgICBwb3N0QWN0aXZpdHksXG4gICAgc2VuZFR5cGluZ0luZGljYXRvcixcbiAgICBzZXREaWN0YXRlSW50ZXJpbXMsXG4gICAgc2V0RGljdGF0ZVN0YXRlLFxuICAgIHNldFNlbmRCb3gsXG4gICAgc3RhcnRTcGVha2luZ0FjdGl2aXR5LFxuICAgIHN0b3BEaWN0YXRlLFxuICAgIHN1Ym1pdFNlbmRCb3gsXG4gICAgd2ViU3BlZWNoUG9ueWZpbGxcbiAgfSlcbikoRGljdGF0aW9uKTtcbiJdfQ==
