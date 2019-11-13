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

var _useActivities3 = _interopRequireDefault(require('./hooks/useActivities'));

var _useLanguage3 = _interopRequireDefault(require('./hooks/useLanguage'));

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
  IDLE = _Constants$DictateSta.IDLE,
  STARTING = _Constants$DictateSta.STARTING;

var Dictation = function Dictation(_ref) {
  var dictateState = _ref.dictateState,
    disabled = _ref.disabled,
    emitTypingIndicator = _ref.emitTypingIndicator,
    onError = _ref.onError,
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

  var _useActivities = (0, _useActivities3.default)(),
    _useActivities2 = _slicedToArray(_useActivities, 1),
    activities = _useActivities2[0];

  var _useLanguage = (0, _useLanguage3.default)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    language = _useLanguage2[0];

  var numSpeakingActivities = (0, _react.useMemo)(
    function() {
      return activities.filter(function(_ref2) {
        var _ref2$channelData = _ref2.channelData;
        _ref2$channelData = _ref2$channelData === void 0 ? {} : _ref2$channelData;
        var speak = _ref2$channelData.speak;
        return speak;
      }).length;
    },
    [activities]
  );
  var handleDictate = (0, _react.useCallback)(
    function(_ref3) {
      var _ref3$result = _ref3.result;
      _ref3$result = _ref3$result === void 0 ? {} : _ref3$result;
      var transcript = _ref3$result.transcript;

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
    function(_ref4) {
      var _ref4$results = _ref4.results,
        results = _ref4$results === void 0 ? [] : _ref4$results;

      if (dictateState === DICTATING || dictateState === STARTING) {
        var interims = results.map(function(_ref5) {
          var transcript = _ref5.transcript;
          return transcript;
        });
        setDictateInterims(interims);
        setDictateState(DICTATING);
        sendTypingIndicator && emitTypingIndicator();
      }
    },
    [dictateState, emitTypingIndicator, sendTypingIndicator, setDictateInterims, setDictateState]
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
  emitTypingIndicator: _propTypes.default.func.isRequired,
  onError: _propTypes.default.func,
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

var _default = (0, _connectToWebChat.default)(function(_ref6) {
  var dictateState = _ref6.dictateState,
    disabled = _ref6.disabled,
    emitTypingIndicator = _ref6.emitTypingIndicator,
    postActivity = _ref6.postActivity,
    sendTypingIndicator = _ref6.sendTypingIndicator,
    setDictateInterims = _ref6.setDictateInterims,
    setDictateState = _ref6.setDictateState,
    setSendBox = _ref6.setSendBox,
    startSpeakingActivity = _ref6.startSpeakingActivity,
    stopDictate = _ref6.stopDictate,
    submitSendBox = _ref6.submitSendBox,
    webSpeechPonyfill = _ref6.webSpeechPonyfill;
  return {
    dictateState: dictateState,
    disabled: disabled,
    emitTypingIndicator: emitTypingIndicator,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EaWN0YXRpb24uanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiRGljdGF0ZVN0YXRlIiwiRElDVEFUSU5HIiwiSURMRSIsIlNUQVJUSU5HIiwiRGljdGF0aW9uIiwiZGljdGF0ZVN0YXRlIiwiZGlzYWJsZWQiLCJlbWl0VHlwaW5nSW5kaWNhdG9yIiwib25FcnJvciIsInNlbmRUeXBpbmdJbmRpY2F0b3IiLCJzZXREaWN0YXRlSW50ZXJpbXMiLCJzZXREaWN0YXRlU3RhdGUiLCJzZXRTZW5kQm94Iiwic3RhcnRTcGVha2luZ0FjdGl2aXR5Iiwic3RvcERpY3RhdGUiLCJzdWJtaXRTZW5kQm94Iiwid2ViU3BlZWNoUG9ueWZpbGwiLCJTcGVlY2hHcmFtbWFyTGlzdCIsIlNwZWVjaFJlY29nbml0aW9uIiwiYWN0aXZpdGllcyIsImxhbmd1YWdlIiwibnVtU3BlYWtpbmdBY3Rpdml0aWVzIiwiZmlsdGVyIiwiY2hhbm5lbERhdGEiLCJzcGVhayIsImxlbmd0aCIsImhhbmRsZURpY3RhdGUiLCJyZXN1bHQiLCJ0cmFuc2NyaXB0IiwiaGFuZGxlRGljdGF0aW5nIiwicmVzdWx0cyIsImludGVyaW1zIiwibWFwIiwiaGFuZGxlRXJyb3IiLCJldmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsInNoYXBlIiwiYW55IiwicG9zdEFjdGl2aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSUlBLGtDLENBREZDLFk7SUFBZ0JDLFMseUJBQUFBLFM7SUFBV0MsSSx5QkFBQUEsSTtJQUFNQyxRLHlCQUFBQSxROztBQUduQyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQWFaO0FBQUEsTUFaSkMsWUFZSSxRQVpKQSxZQVlJO0FBQUEsTUFYSkMsUUFXSSxRQVhKQSxRQVdJO0FBQUEsTUFWSkMsbUJBVUksUUFWSkEsbUJBVUk7QUFBQSxNQVRKQyxPQVNJLFFBVEpBLE9BU0k7QUFBQSxNQVJKQyxtQkFRSSxRQVJKQSxtQkFRSTtBQUFBLE1BUEpDLGtCQU9JLFFBUEpBLGtCQU9JO0FBQUEsTUFOSkMsZUFNSSxRQU5KQSxlQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMscUJBSUksUUFKSkEscUJBSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxhQUVJLFFBRkpBLGFBRUk7QUFBQSxtQ0FESkMsaUJBQ0k7QUFBQSw2REFEMEQsRUFDMUQ7QUFBQSxNQURpQkMsaUJBQ2pCLHlCQURpQkEsaUJBQ2pCO0FBQUEsTUFEb0NDLGlCQUNwQyx5QkFEb0NBLGlCQUNwQzs7QUFBQSx1QkFDaUIsOEJBRGpCO0FBQUE7QUFBQSxNQUNHQyxVQURIOztBQUFBLHFCQUVlLDRCQUZmO0FBQUE7QUFBQSxNQUVHQyxRQUZIOztBQUlKLE1BQU1DLHFCQUFxQixHQUFHLG9CQUFRO0FBQUEsV0FBTUYsVUFBVSxDQUFDRyxNQUFYLENBQWtCO0FBQUEsb0NBQUdDLFdBQUg7QUFBQSx5REFBNEIsRUFBNUI7QUFBQSxVQUFrQkMsS0FBbEIscUJBQWtCQSxLQUFsQjtBQUFBLGFBQXFDQSxLQUFyQztBQUFBLEtBQWxCLEVBQThEQyxNQUFwRTtBQUFBLEdBQVIsRUFBb0YsQ0FDaEhOLFVBRGdILENBQXBGLENBQTlCO0FBSUEsTUFBTU8sYUFBYSxHQUFHLHdCQUNwQixpQkFBcUM7QUFBQSw2QkFBbENDLE1BQWtDO0FBQUEsNkNBQVQsRUFBUztBQUFBLFFBQXhCQyxVQUF3QixnQkFBeEJBLFVBQXdCOztBQUNuQyxRQUFJdkIsWUFBWSxLQUFLSixTQUFqQixJQUE4QkksWUFBWSxLQUFLRixRQUFuRCxFQUE2RDtBQUMzRE8sTUFBQUEsa0JBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNBQyxNQUFBQSxlQUFlLENBQUNULElBQUQsQ0FBZjtBQUNBWSxNQUFBQSxXQUFXOztBQUVYLFVBQUljLFVBQUosRUFBZ0I7QUFDZGhCLFFBQUFBLFVBQVUsQ0FBQ2dCLFVBQUQsQ0FBVjtBQUNBYixRQUFBQSxhQUFhLENBQUMsUUFBRCxDQUFiO0FBQ0FGLFFBQUFBLHFCQUFxQjtBQUN0QjtBQUNGO0FBQ0YsR0FibUIsRUFjcEIsQ0FBQ1IsWUFBRCxFQUFlSyxrQkFBZixFQUFtQ0MsZUFBbkMsRUFBb0RHLFdBQXBELEVBQWlFRixVQUFqRSxFQUE2RUcsYUFBN0UsRUFBNEZGLHFCQUE1RixDQWRvQixDQUF0QjtBQWlCQSxNQUFNZ0IsZUFBZSxHQUFHLHdCQUN0QixpQkFBc0I7QUFBQSw4QkFBbkJDLE9BQW1CO0FBQUEsUUFBbkJBLE9BQW1CLDhCQUFULEVBQVM7O0FBQ3BCLFFBQUl6QixZQUFZLEtBQUtKLFNBQWpCLElBQThCSSxZQUFZLEtBQUtGLFFBQW5ELEVBQTZEO0FBQzNELFVBQU00QixRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsR0FBUixDQUFZO0FBQUEsWUFBR0osVUFBSCxTQUFHQSxVQUFIO0FBQUEsZUFBb0JBLFVBQXBCO0FBQUEsT0FBWixDQUFqQjtBQUVBbEIsTUFBQUEsa0JBQWtCLENBQUNxQixRQUFELENBQWxCO0FBQ0FwQixNQUFBQSxlQUFlLENBQUNWLFNBQUQsQ0FBZjtBQUNBUSxNQUFBQSxtQkFBbUIsSUFBSUYsbUJBQW1CLEVBQTFDO0FBQ0Q7QUFDRixHQVRxQixFQVV0QixDQUFDRixZQUFELEVBQWVFLG1CQUFmLEVBQW9DRSxtQkFBcEMsRUFBeURDLGtCQUF6RCxFQUE2RUMsZUFBN0UsQ0FWc0IsQ0FBeEI7QUFhQSxNQUFNc0IsV0FBVyxHQUFHLHdCQUFZLFlBQU07QUFDcEM1QixJQUFBQSxZQUFZLEtBQUtILElBQWpCLElBQXlCUyxlQUFlLENBQUNULElBQUQsQ0FBeEM7QUFDQSxLQUFDRyxZQUFZLEtBQUtKLFNBQWpCLElBQThCSSxZQUFZLEtBQUtGLFFBQWhELEtBQTZEVyxXQUFXLEVBQXhFO0FBRUFOLElBQUFBLE9BQU8sSUFBSUEsT0FBTyxDQUFDMEIsS0FBRCxDQUFsQjtBQUNELEdBTG1CLEVBS2pCLENBQUM3QixZQUFELEVBQWVHLE9BQWYsRUFBd0JHLGVBQXhCLEVBQXlDRyxXQUF6QyxDQUxpQixDQUFwQjtBQU9BLFNBQ0UsNkJBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRU0sUUFEUjtBQUVFLElBQUEsU0FBUyxFQUFFTSxhQUZiO0FBR0UsSUFBQSxPQUFPLEVBQUVPLFdBSFg7QUFJRSxJQUFBLFVBQVUsRUFBRUosZUFKZDtBQUtFLElBQUEsaUJBQWlCLEVBQUVaLGlCQUxyQjtBQU1FLElBQUEsaUJBQWlCLEVBQUVDLGlCQU5yQjtBQU9FLElBQUEsT0FBTyxFQUFFLENBQUNaLFFBQUQsS0FBY0QsWUFBWSxLQUFLRixRQUFqQixJQUE2QkUsWUFBWSxLQUFLSixTQUE1RCxLQUEwRSxDQUFDb0I7QUFQdEYsSUFERjtBQVdELENBckVEOztBQXVFQWpCLFNBQVMsQ0FBQytCLFlBQVYsR0FBeUI7QUFDdkI3QixFQUFBQSxRQUFRLEVBQUUsS0FEYTtBQUV2QkUsRUFBQUEsT0FBTyxFQUFFNEIsU0FGYztBQUd2QnBCLEVBQUFBLGlCQUFpQixFQUFFb0I7QUFISSxDQUF6QjtBQU1BaEMsU0FBUyxDQUFDaUMsU0FBVixHQUFzQjtBQUNwQmhDLEVBQUFBLFlBQVksRUFBRWlDLG1CQUFVQyxNQUFWLENBQWlCQyxVQURYO0FBRXBCbEMsRUFBQUEsUUFBUSxFQUFFZ0MsbUJBQVVHLElBRkE7QUFHcEJsQyxFQUFBQSxtQkFBbUIsRUFBRStCLG1CQUFVSSxJQUFWLENBQWVGLFVBSGhCO0FBSXBCaEMsRUFBQUEsT0FBTyxFQUFFOEIsbUJBQVVJLElBSkM7QUFLcEJqQyxFQUFBQSxtQkFBbUIsRUFBRTZCLG1CQUFVRyxJQUFWLENBQWVELFVBTGhCO0FBTXBCOUIsRUFBQUEsa0JBQWtCLEVBQUU0QixtQkFBVUksSUFBVixDQUFlRixVQU5mO0FBT3BCN0IsRUFBQUEsZUFBZSxFQUFFMkIsbUJBQVVJLElBQVYsQ0FBZUYsVUFQWjtBQVFwQjVCLEVBQUFBLFVBQVUsRUFBRTBCLG1CQUFVSSxJQUFWLENBQWVGLFVBUlA7QUFTcEIzQixFQUFBQSxxQkFBcUIsRUFBRXlCLG1CQUFVSSxJQUFWLENBQWVGLFVBVGxCO0FBVXBCMUIsRUFBQUEsV0FBVyxFQUFFd0IsbUJBQVVJLElBQVYsQ0FBZUYsVUFWUjtBQVdwQnpCLEVBQUFBLGFBQWEsRUFBRXVCLG1CQUFVSSxJQUFWLENBQWVGLFVBWFY7QUFZcEJ4QixFQUFBQSxpQkFBaUIsRUFBRXNCLG1CQUFVSyxLQUFWLENBQWdCO0FBQ2pDMUIsSUFBQUEsaUJBQWlCLEVBQUVxQixtQkFBVU0sR0FBVixDQUFjSixVQURBO0FBRWpDdEIsSUFBQUEsaUJBQWlCLEVBQUVvQixtQkFBVU0sR0FBVixDQUFjSjtBQUZBLEdBQWhCO0FBWkMsQ0FBdEI7O2VBa0JlLCtCQUNiO0FBQUEsTUFDRW5DLFlBREYsU0FDRUEsWUFERjtBQUFBLE1BRUVDLFFBRkYsU0FFRUEsUUFGRjtBQUFBLE1BR0VDLG1CQUhGLFNBR0VBLG1CQUhGO0FBQUEsTUFJRXNDLFlBSkYsU0FJRUEsWUFKRjtBQUFBLE1BS0VwQyxtQkFMRixTQUtFQSxtQkFMRjtBQUFBLE1BTUVDLGtCQU5GLFNBTUVBLGtCQU5GO0FBQUEsTUFPRUMsZUFQRixTQU9FQSxlQVBGO0FBQUEsTUFRRUMsVUFSRixTQVFFQSxVQVJGO0FBQUEsTUFTRUMscUJBVEYsU0FTRUEscUJBVEY7QUFBQSxNQVVFQyxXQVZGLFNBVUVBLFdBVkY7QUFBQSxNQVdFQyxhQVhGLFNBV0VBLGFBWEY7QUFBQSxNQVlFQyxpQkFaRixTQVlFQSxpQkFaRjtBQUFBLFNBYU87QUFDTFgsSUFBQUEsWUFBWSxFQUFaQSxZQURLO0FBRUxDLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxJQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUhLO0FBSUxzQyxJQUFBQSxZQUFZLEVBQVpBLFlBSks7QUFLTHBDLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBTEs7QUFNTEMsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFOSztBQU9MQyxJQUFBQSxlQUFlLEVBQWZBLGVBUEs7QUFRTEMsSUFBQUEsVUFBVSxFQUFWQSxVQVJLO0FBU0xDLElBQUFBLHFCQUFxQixFQUFyQkEscUJBVEs7QUFVTEMsSUFBQUEsV0FBVyxFQUFYQSxXQVZLO0FBV0xDLElBQUFBLGFBQWEsRUFBYkEsYUFYSztBQVlMQyxJQUFBQSxpQkFBaUIsRUFBakJBO0FBWkssR0FiUDtBQUFBLENBRGEsRUE0QmJaLFNBNUJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NlciBhcyBEaWN0YXRlQ29tcG9zZXIgfSBmcm9tICdyZWFjdC1kaWN0YXRlLWJ1dHRvbic7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmltcG9ydCB1c2VBY3Rpdml0aWVzIGZyb20gJy4vaG9va3MvdXNlQWN0aXZpdGllcyc7XG5pbXBvcnQgdXNlTGFuZ3VhZ2UgZnJvbSAnLi9ob29rcy91c2VMYW5ndWFnZSc7XG5cbmNvbnN0IHtcbiAgRGljdGF0ZVN0YXRlOiB7IERJQ1RBVElORywgSURMRSwgU1RBUlRJTkcgfVxufSA9IENvbnN0YW50cztcblxuY29uc3QgRGljdGF0aW9uID0gKHtcbiAgZGljdGF0ZVN0YXRlLFxuICBkaXNhYmxlZCxcbiAgZW1pdFR5cGluZ0luZGljYXRvcixcbiAgb25FcnJvcixcbiAgc2VuZFR5cGluZ0luZGljYXRvcixcbiAgc2V0RGljdGF0ZUludGVyaW1zLFxuICBzZXREaWN0YXRlU3RhdGUsXG4gIHNldFNlbmRCb3gsXG4gIHN0YXJ0U3BlYWtpbmdBY3Rpdml0eSxcbiAgc3RvcERpY3RhdGUsXG4gIHN1Ym1pdFNlbmRCb3gsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiB7IFNwZWVjaEdyYW1tYXJMaXN0LCBTcGVlY2hSZWNvZ25pdGlvbiB9ID0ge31cbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2aXRpZXNdID0gdXNlQWN0aXZpdGllcygpO1xuICBjb25zdCBbbGFuZ3VhZ2VdID0gdXNlTGFuZ3VhZ2UoKTtcblxuICBjb25zdCBudW1TcGVha2luZ0FjdGl2aXRpZXMgPSB1c2VNZW1vKCgpID0+IGFjdGl2aXRpZXMuZmlsdGVyKCh7IGNoYW5uZWxEYXRhOiB7IHNwZWFrIH0gPSB7fSB9KSA9PiBzcGVhaykubGVuZ3RoLCBbXG4gICAgYWN0aXZpdGllc1xuICBdKTtcblxuICBjb25zdCBoYW5kbGVEaWN0YXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgcmVzdWx0OiB7IHRyYW5zY3JpcHQgfSA9IHt9IH0pID0+IHtcbiAgICAgIGlmIChkaWN0YXRlU3RhdGUgPT09IERJQ1RBVElORyB8fCBkaWN0YXRlU3RhdGUgPT09IFNUQVJUSU5HKSB7XG4gICAgICAgIHNldERpY3RhdGVJbnRlcmltcyhbXSk7XG4gICAgICAgIHNldERpY3RhdGVTdGF0ZShJRExFKTtcbiAgICAgICAgc3RvcERpY3RhdGUoKTtcblxuICAgICAgICBpZiAodHJhbnNjcmlwdCkge1xuICAgICAgICAgIHNldFNlbmRCb3godHJhbnNjcmlwdCk7XG4gICAgICAgICAgc3VibWl0U2VuZEJveCgnc3BlZWNoJyk7XG4gICAgICAgICAgc3RhcnRTcGVha2luZ0FjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtkaWN0YXRlU3RhdGUsIHNldERpY3RhdGVJbnRlcmltcywgc2V0RGljdGF0ZVN0YXRlLCBzdG9wRGljdGF0ZSwgc2V0U2VuZEJveCwgc3VibWl0U2VuZEJveCwgc3RhcnRTcGVha2luZ0FjdGl2aXR5XVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZURpY3RhdGluZyA9IHVzZUNhbGxiYWNrKFxuICAgICh7IHJlc3VsdHMgPSBbXSB9KSA9PiB7XG4gICAgICBpZiAoZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBTVEFSVElORykge1xuICAgICAgICBjb25zdCBpbnRlcmltcyA9IHJlc3VsdHMubWFwKCh7IHRyYW5zY3JpcHQgfSkgPT4gdHJhbnNjcmlwdCk7XG5cbiAgICAgICAgc2V0RGljdGF0ZUludGVyaW1zKGludGVyaW1zKTtcbiAgICAgICAgc2V0RGljdGF0ZVN0YXRlKERJQ1RBVElORyk7XG4gICAgICAgIHNlbmRUeXBpbmdJbmRpY2F0b3IgJiYgZW1pdFR5cGluZ0luZGljYXRvcigpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2RpY3RhdGVTdGF0ZSwgZW1pdFR5cGluZ0luZGljYXRvciwgc2VuZFR5cGluZ0luZGljYXRvciwgc2V0RGljdGF0ZUludGVyaW1zLCBzZXREaWN0YXRlU3RhdGVdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRXJyb3IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGljdGF0ZVN0YXRlICE9PSBJRExFICYmIHNldERpY3RhdGVTdGF0ZShJRExFKTtcbiAgICAoZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBTVEFSVElORykgJiYgc3RvcERpY3RhdGUoKTtcblxuICAgIG9uRXJyb3IgJiYgb25FcnJvcihldmVudCk7XG4gIH0sIFtkaWN0YXRlU3RhdGUsIG9uRXJyb3IsIHNldERpY3RhdGVTdGF0ZSwgc3RvcERpY3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxEaWN0YXRlQ29tcG9zZXJcbiAgICAgIGxhbmc9e2xhbmd1YWdlfVxuICAgICAgb25EaWN0YXRlPXtoYW5kbGVEaWN0YXRlfVxuICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICBvblByb2dyZXNzPXtoYW5kbGVEaWN0YXRpbmd9XG4gICAgICBzcGVlY2hHcmFtbWFyTGlzdD17U3BlZWNoR3JhbW1hckxpc3R9XG4gICAgICBzcGVlY2hSZWNvZ25pdGlvbj17U3BlZWNoUmVjb2duaXRpb259XG4gICAgICBzdGFydGVkPXshZGlzYWJsZWQgJiYgKGRpY3RhdGVTdGF0ZSA9PT0gU1RBUlRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcpICYmICFudW1TcGVha2luZ0FjdGl2aXRpZXN9XG4gICAgLz5cbiAgKTtcbn07XG5cbkRpY3RhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25FcnJvcjogdW5kZWZpbmVkLFxuICB3ZWJTcGVlY2hQb255ZmlsbDogdW5kZWZpbmVkXG59O1xuXG5EaWN0YXRpb24ucHJvcFR5cGVzID0ge1xuICBkaWN0YXRlU3RhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlbWl0VHlwaW5nSW5kaWNhdG9yOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VuZFR5cGluZ0luZGljYXRvcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0RGljdGF0ZUludGVyaW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXREaWN0YXRlU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0YXJ0U3BlYWtpbmdBY3Rpdml0eTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3RvcERpY3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIFNwZWVjaEdyYW1tYXJMaXN0OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgU3BlZWNoUmVjb2duaXRpb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdChcbiAgKHtcbiAgICBkaWN0YXRlU3RhdGUsXG4gICAgZGlzYWJsZWQsXG4gICAgZW1pdFR5cGluZ0luZGljYXRvcixcbiAgICBwb3N0QWN0aXZpdHksXG4gICAgc2VuZFR5cGluZ0luZGljYXRvcixcbiAgICBzZXREaWN0YXRlSW50ZXJpbXMsXG4gICAgc2V0RGljdGF0ZVN0YXRlLFxuICAgIHNldFNlbmRCb3gsXG4gICAgc3RhcnRTcGVha2luZ0FjdGl2aXR5LFxuICAgIHN0b3BEaWN0YXRlLFxuICAgIHN1Ym1pdFNlbmRCb3gsXG4gICAgd2ViU3BlZWNoUG9ueWZpbGxcbiAgfSkgPT4gKHtcbiAgICBkaWN0YXRlU3RhdGUsXG4gICAgZGlzYWJsZWQsXG4gICAgZW1pdFR5cGluZ0luZGljYXRvcixcbiAgICBwb3N0QWN0aXZpdHksXG4gICAgc2VuZFR5cGluZ0luZGljYXRvcixcbiAgICBzZXREaWN0YXRlSW50ZXJpbXMsXG4gICAgc2V0RGljdGF0ZVN0YXRlLFxuICAgIHNldFNlbmRCb3gsXG4gICAgc3RhcnRTcGVha2luZ0FjdGl2aXR5LFxuICAgIHN0b3BEaWN0YXRlLFxuICAgIHN1Ym1pdFNlbmRCb3gsXG4gICAgd2ViU3BlZWNoUG9ueWZpbGxcbiAgfSlcbikoRGljdGF0aW9uKTtcbiJdfQ==
