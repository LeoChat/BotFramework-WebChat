'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSpeakActivity = exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _reactSay = _interopRequireDefault(require('react-say'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _SayAlt = _interopRequireDefault(require('./SayAlt'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// TODO: [P4] Consider moving this feature into BasicActivity
//       And it has better DOM position for showing visual spoken text
// TODO: [P3] We should add a "spoken" or "speakState" flag to indicate whether this activity is going to speak, or spoken
var connectSpeakActivity = function connectSpeakActivity() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref, _ref2) {
        var language = _ref.language,
          markActivity = _ref.markActivity,
          _selectVoice = _ref.selectVoice;
        var activity = _ref2.activity;
        return {
          language: language,
          markAsSpoken: function markAsSpoken() {
            return markActivity(activity, 'speak', false);
          },
          selectVoice: function selectVoice(voices) {
            return _selectVoice(voices, activity);
          }
        };
      }
    ].concat(selectors)
  );
};

exports.connectSpeakActivity = connectSpeakActivity;

var Speak = function Speak(_ref3) {
  var activity = _ref3.activity,
    markAsSpoken = _ref3.markAsSpoken,
    selectVoice = _ref3.selectVoice,
    styleSet = _ref3.styleSet;

  if (!activity) {
    return false;
  }

  var _activity$attachments = activity.attachments,
    attachments = _activity$attachments === void 0 ? [] : _activity$attachments,
    speak = activity.speak,
    text = activity.text;
  var lines = [speak || text];
  attachments.forEach(function(_ref4) {
    var _ref4$content = _ref4.content;
    _ref4$content = _ref4$content === void 0 ? {} : _ref4$content;
    var speak = _ref4$content.speak,
      contentType = _ref4.contentType;

    if (contentType === 'application/vnd.microsoft.card.adaptive') {
      lines.push(speak);
    }
  });
  var singleLine = lines
    .filter(function(line) {
      return line;
    })
    .join('\r\n');
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_reactSay.default, {
      onEnd: markAsSpoken,
      onError: markAsSpoken,
      speak: singleLine,
      voice: selectVoice
    }),
    !!styleSet.options.showSpokenText &&
      _react.default.createElement(_SayAlt.default, {
        speak: singleLine,
        voice: selectVoice
      })
  );
};

Speak.propTypes = {
  activity: _propTypes.default.shape({
    attachments: _propTypes.default.arrayOf(
      _propTypes.default.shape({
        speak: _propTypes.default.string,
        subtitle: _propTypes.default.string,
        text: _propTypes.default.string,
        title: _propTypes.default.string
      })
    ),
    speak: _propTypes.default.string,
    text: _propTypes.default.string
  }).isRequired,
  markAsSpoken: _propTypes.default.func.isRequired,
  selectVoice: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      showSpokenText: _propTypes.default.bool.isRequired
    }).isRequired
  }).isRequired
};

var _default = connectSpeakActivity(function(_ref5) {
  var styleSet = _ref5.styleSet;
  return {
    styleSet: styleSet
  };
})(Speak);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TcGVhay5qcyJdLCJuYW1lcyI6WyJjb25uZWN0U3BlYWtBY3Rpdml0eSIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJsYW5ndWFnZSIsIm1hcmtBY3Rpdml0eSIsInNlbGVjdFZvaWNlIiwiYWN0aXZpdHkiLCJtYXJrQXNTcG9rZW4iLCJ2b2ljZXMiLCJTcGVhayIsInN0eWxlU2V0IiwiYXR0YWNobWVudHMiLCJzcGVhayIsInRleHQiLCJsaW5lcyIsImZvckVhY2giLCJjb250ZW50IiwiY29udGVudFR5cGUiLCJwdXNoIiwic2luZ2xlTGluZSIsImZpbHRlciIsImxpbmUiLCJqb2luIiwib3B0aW9ucyIsInNob3dTcG9rZW5UZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIiwic3VidGl0bGUiLCJ0aXRsZSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUMzQkMseUNBQ0U7QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhQyxZQUFiLFFBQWFBLFlBQWI7QUFBQSxRQUEyQkMsWUFBM0IsUUFBMkJBLFdBQTNCO0FBQUEsUUFBNENDLFFBQTVDLFNBQTRDQSxRQUE1QztBQUFBLFdBQTREO0FBQzFESCxNQUFBQSxRQUFRLEVBQVJBLFFBRDBEO0FBRTFESSxNQUFBQSxZQUFZLEVBQUU7QUFBQSxlQUFNSCxZQUFZLENBQUNFLFFBQUQsRUFBVyxPQUFYLEVBQW9CLEtBQXBCLENBQWxCO0FBQUEsT0FGNEM7QUFHMURELE1BQUFBLFdBQVcsRUFBRSxxQkFBQUcsTUFBTTtBQUFBLGVB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QWxCOztlQXNCZWhDLG9CQUFvQixDQUFDO0FBQUEsTUFBR1UsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBRCxDQUFwQixDQUF1REQsS0FBdkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNheSBmcm9tICdyZWFjdC1zYXknO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTYXlBbHQgZnJvbSAnLi9TYXlBbHQnO1xuXG4vLyBUT0RPOiBbUDRdIENvbnNpZGVyIG1vdmluZyB0aGlzIGZlYXR1cmUgaW50byBCYXNpY0FjdGl2aXR5XG4vLyAgICAgICBBbmQgaXQgaGFzIGJldHRlciBET00gcG9zaXRpb24gZm9yIHNob3dpbmcgdmlzdWFsIHNwb2tlbiB0ZXh0XG5cbi8vIFRPRE86IFtQM10gV2Ugc2hvdWxkIGFkZCBhIFwic3Bva2VuXCIgb3IgXCJzcGVha1N0YXRlXCIgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoaXMgYWN0aXZpdHkgaXMgZ29pbmcgdG8gc3BlYWssIG9yIHNwb2tlblxuY29uc3QgY29ubmVjdFNwZWFrQWN0aXZpdHkgPSAoLi4uc2VsZWN0b3JzKSA9PlxuICBjb25uZWN0VG9XZWJDaGF0KFxuICAgICh7IGxhbmd1YWdlLCBtYXJrQWN0aXZpdHksIHNlbGVjdFZvaWNlIH0sIHsgYWN0aXZpdHkgfSkgPT4gKHtcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgbWFya0FzU3Bva2VuOiAoKSA9PiBtYXJrQWN0aXZpdHkoYWN0aXZpdHksICdzcGVhaycsIGZhbHNlKSxcbiAgICAgIHNlbGVjdFZvaWNlOiB2b2ljZXMgPT4gc2VsZWN0Vm9pY2Uodm9pY2VzLCBhY3Rpdml0eSlcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgU3BlYWsgPSAoeyBhY3Rpdml0eSwgbWFya0FzU3Bva2VuLCBzZWxlY3RWb2ljZSwgc3R5bGVTZXQgfSkgPT4ge1xuICBpZiAoIWFjdGl2aXR5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgeyBhdHRhY2htZW50cyA9IFtdLCBzcGVhaywgdGV4dCB9ID0gYWN0aXZpdHk7XG5cbiAgY29uc3QgbGluZXMgPSBbc3BlYWsgfHwgdGV4dF07XG5cbiAgYXR0YWNobWVudHMuZm9yRWFjaCgoeyBjb250ZW50OiB7IHNwZWFrIH0gPSB7fSwgY29udGVudFR5cGUgfSkgPT4ge1xuICAgIGlmIChjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hZGFwdGl2ZScpIHtcbiAgICAgIGxpbmVzLnB1c2goc3BlYWspO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2luZ2xlTGluZSA9IGxpbmVzLmZpbHRlcihsaW5lID0+IGxpbmUpLmpvaW4oJ1xcclxcbicpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNheSBvbkVuZD17bWFya0FzU3Bva2VufSBvbkVycm9yPXttYXJrQXNTcG9rZW59IHNwZWFrPXtzaW5nbGVMaW5lfSB2b2ljZT17c2VsZWN0Vm9pY2V9IC8+XG4gICAgICB7ISFzdHlsZVNldC5vcHRpb25zLnNob3dTcG9rZW5UZXh0ICYmIDxTYXlBbHQgc3BlYWs9e3NpbmdsZUxpbmV9IHZvaWNlPXtzZWxlY3RWb2ljZX0gLz59XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblNwZWFrLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3BlYWs6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSlcbiAgICApLFxuICAgIHNwZWFrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbWFya0FzU3Bva2VuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RWb2ljZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNob3dTcG9rZW5UZXh0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U3BlYWtBY3Rpdml0eSgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoU3BlYWspO1xuXG5leHBvcnQgeyBjb25uZWN0U3BlYWtBY3Rpdml0eSB9O1xuIl19
