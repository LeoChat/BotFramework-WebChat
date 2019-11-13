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

var _useStyleOptions3 = _interopRequireDefault(require('../hooks/useStyleOptions'));

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
    selectVoice = _ref3.selectVoice;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    showSpokenText = _useStyleOptions2[0].showSpokenText;

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
    !!showSpokenText &&
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
  selectVoice: _propTypes.default.func.isRequired
};

var _default = connectSpeakActivity()(Speak);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TcGVhay5qcyJdLCJuYW1lcyI6WyJjb25uZWN0U3BlYWtBY3Rpdml0eSIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJsYW5ndWFnZSIsIm1hcmtBY3Rpdml0eSIsInNlbGVjdFZvaWNlIiwiYWN0aXZpdHkiLCJtYXJrQXNTcG9rZW4iLCJ2b2ljZXMiLCJTcGVhayIsInNob3dTcG9rZW5UZXh0IiwiYXR0YWNobWVudHMiLCJzcGVhayIsInRleHQiLCJsaW5lcyIsImZvckVhY2giLCJjb250ZW50IiwiY29udGVudFR5cGUiLCJwdXNoIiwic2luZ2xlTGluZSIsImZpbHRlciIsImxpbmUiLCJqb2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIiwic3VidGl0bGUiLCJ0aXRsZSIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxvQ0FBSUMsU0FBSjtBQUFJQSxJQUFBQSxTQUFKO0FBQUE7O0FBQUEsU0FDM0JDLHlDQUNFO0FBQUEsUUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBYUMsWUFBYixRQUFhQSxZQUFiO0FBQUEsUUFBMkJDLFlBQTNCLFFBQTJCQSxXQUEzQjtBQUFBLFFBQTRDQyxRQUE1QyxTQUE0Q0EsUUFBNUM7QUFBQSxXQUE0RDtBQUMxREgsTUFBQUEsUUFBUSxFQUFSQSxRQUQwRDtBQUUxREksTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUgsWUFBWSxDQUFDRSxRQUFELEVBQVcsT0FBWCxFQUFvQixLQUFwQixDQUFsQjtBQUFBLE9BRjRDO0FBRzFERCxNQUFBQSxXQUFXLEVBQUUscUJBQUFHLE1BQU07QUFBQSxlQUFJSCxZQUFXLENBQUNHLE1BQUQsRUFBU0YsUUFBVCxDQUFmO0FBQUE7QUFIdUMsS0FBNUQ7QUFBQSxHQURGLFNBTUtMLFNBTkwsRUFEMkI7QUFBQSxDQUE3Qjs7OztBQVVBLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQTZDO0FBQUEsTUFBMUNILFFBQTBDLFNBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxZQUFnQyxTQUFoQ0EsWUFBZ0M7QUFBQSxNQUFsQkYsV0FBa0IsU0FBbEJBLFdBQWtCOztBQUFBLHlCQUM1QixnQ0FENEI7QUFBQTtBQUFBLE1BQ2hESyxjQURnRCx3QkFDaERBLGNBRGdEOztBQUd6RCxNQUFJLENBQUNKLFFBQUwsRUFBZTtBQUNiLFdBQU8sS0FBUDtBQUNEOztBQUx3RCw4QkFPZkEsUUFQZSxDQU9qREssV0FQaUQ7QUFBQSxNQU9qREEsV0FQaUQsc0NBT25DLEVBUG1DO0FBQUEsTUFPL0JDLEtBUCtCLEdBT2ZOLFFBUGUsQ0FPL0JNLEtBUCtCO0FBQUEsTUFPeEJDLElBUHdCLEdBT2ZQLFFBUGUsQ0FPeEJPLElBUHdCO0FBU3pELE1BQU1DLEtBQUssR0FBRyxDQUFDRixLQUFLLElBQUlDLElBQVYsQ0FBZDtBQUVBRixFQUFBQSxXQUFXLENBQUNJLE9BQVosQ0FBb0IsaUJBQThDO0FBQUEsOEJBQTNDQyxPQUEyQztBQUFBLCtDQUF0QixFQUFzQjtBQUFBLFFBQWhDSixLQUFnQyxpQkFBaENBLEtBQWdDO0FBQUEsUUFBbEJLLFdBQWtCLFNBQWxCQSxXQUFrQjs7QUFDaEUsUUFBSUEsV0FBVyxLQUFLLHlDQUFwQixFQUErRDtBQUM3REgsTUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdOLEtBQVg7QUFDRDtBQUNGLEdBSkQ7QUFNQSxNQUFNTyxVQUFVLEdBQUdMLEtBQUssQ0FBQ00sTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFKO0FBQUEsR0FBakIsRUFBMkJDLElBQTNCLENBQWdDLE1BQWhDLENBQW5CO0FBRUEsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLGlCQUFEO0FBQUssSUFBQSxLQUFLLEVBQUVmLFlBQVo7QUFBMEIsSUFBQSxPQUFPLEVBQUVBLFlBQW5DO0FBQWlELElBQUEsS0FBSyxFQUFFWSxVQUF4RDtBQUFvRSxJQUFBLEtBQUssRUFBRWQ7QUFBM0UsSUFERixFQUVHLENBQUMsQ0FBQ0ssY0FBRixJQUFvQiw2QkFBQyxlQUFEO0FBQVEsSUFBQSxLQUFLLEVBQUVTLFVBQWY7QUFBMkIsSUFBQSxLQUFLLEVBQUVkO0FBQWxDLElBRnZCLENBREY7QUFNRCxDQXpCRDs7QUEyQkFJLEtBQUssQ0FBQ2MsU0FBTixHQUFrQjtBQUNoQmpCLEVBQUFBLFFBQVEsRUFBRWtCLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCZCxJQUFBQSxXQUFXLEVBQUVhLG1CQUFVRSxPQUFWLENBQ1hGLG1CQUFVQyxLQUFWLENBQWdCO0FBQ2RiLE1BQUFBLEtBQUssRUFBRVksbUJBQVVHLE1BREg7QUFFZEMsTUFBQUEsUUFBUSxFQUFFSixtQkFBVUcsTUFGTjtBQUdkZCxNQUFBQSxJQUFJLEVBQUVXLG1CQUFVRyxNQUhGO0FBSWRFLE1BQUFBLEtBQUssRUFBRUwsbUJBQVVHO0FBSkgsS0FBaEIsQ0FEVyxDQURXO0FBU3hCZixJQUFBQSxLQUFLLEVBQUVZLG1CQUFVRyxNQVRPO0FBVXhCZCxJQUFBQSxJQUFJLEVBQUVXLG1CQUFVRztBQVZRLEdBQWhCLEVBV1BHLFVBWmE7QUFhaEJ2QixFQUFBQSxZQUFZLEVBQUVpQixtQkFBVU8sSUFBVixDQUFlRCxVQWJiO0FBY2hCekIsRUFBQUEsV0FBVyxFQUFFbUIsbUJBQVVPLElBQVYsQ0FBZUQ7QUFkWixDQUFsQjs7ZUFpQmU5QixvQkFBb0IsR0FBR1MsS0FBSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2F5IGZyb20gJ3JlYWN0LXNheSc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFNheUFsdCBmcm9tICcuL1NheUFsdCc7XG5pbXBvcnQgdXNlU3R5bGVPcHRpb25zIGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlT3B0aW9ucyc7XG5cbi8vIFRPRE86IFtQNF0gQ29uc2lkZXIgbW92aW5nIHRoaXMgZmVhdHVyZSBpbnRvIEJhc2ljQWN0aXZpdHlcbi8vICAgICAgIEFuZCBpdCBoYXMgYmV0dGVyIERPTSBwb3NpdGlvbiBmb3Igc2hvd2luZyB2aXN1YWwgc3Bva2VuIHRleHRcblxuLy8gVE9ETzogW1AzXSBXZSBzaG91bGQgYWRkIGEgXCJzcG9rZW5cIiBvciBcInNwZWFrU3RhdGVcIiBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBhY3Rpdml0eSBpcyBnb2luZyB0byBzcGVhaywgb3Igc3Bva2VuXG5jb25zdCBjb25uZWN0U3BlYWtBY3Rpdml0eSA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgbGFuZ3VhZ2UsIG1hcmtBY3Rpdml0eSwgc2VsZWN0Vm9pY2UgfSwgeyBhY3Rpdml0eSB9KSA9PiAoe1xuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBtYXJrQXNTcG9rZW46ICgpID0+IG1hcmtBY3Rpdml0eShhY3Rpdml0eSwgJ3NwZWFrJywgZmFsc2UpLFxuICAgICAgc2VsZWN0Vm9pY2U6IHZvaWNlcyA9PiBzZWxlY3RWb2ljZSh2b2ljZXMsIGFjdGl2aXR5KVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTcGVhayA9ICh7IGFjdGl2aXR5LCBtYXJrQXNTcG9rZW4sIHNlbGVjdFZvaWNlIH0pID0+IHtcbiAgY29uc3QgW3sgc2hvd1Nwb2tlblRleHQgfV0gPSB1c2VTdHlsZU9wdGlvbnMoKTtcblxuICBpZiAoIWFjdGl2aXR5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgeyBhdHRhY2htZW50cyA9IFtdLCBzcGVhaywgdGV4dCB9ID0gYWN0aXZpdHk7XG5cbiAgY29uc3QgbGluZXMgPSBbc3BlYWsgfHwgdGV4dF07XG5cbiAgYXR0YWNobWVudHMuZm9yRWFjaCgoeyBjb250ZW50OiB7IHNwZWFrIH0gPSB7fSwgY29udGVudFR5cGUgfSkgPT4ge1xuICAgIGlmIChjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hZGFwdGl2ZScpIHtcbiAgICAgIGxpbmVzLnB1c2goc3BlYWspO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2luZ2xlTGluZSA9IGxpbmVzLmZpbHRlcihsaW5lID0+IGxpbmUpLmpvaW4oJ1xcclxcbicpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNheSBvbkVuZD17bWFya0FzU3Bva2VufSBvbkVycm9yPXttYXJrQXNTcG9rZW59IHNwZWFrPXtzaW5nbGVMaW5lfSB2b2ljZT17c2VsZWN0Vm9pY2V9IC8+XG4gICAgICB7ISFzaG93U3Bva2VuVGV4dCAmJiA8U2F5QWx0IHNwZWFrPXtzaW5nbGVMaW5lfSB2b2ljZT17c2VsZWN0Vm9pY2V9IC8+fVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5TcGVhay5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF0dGFjaG1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHNwZWFrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pXG4gICAgKSxcbiAgICBzcGVhazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG1hcmtBc1Nwb2tlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0Vm9pY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTcGVha0FjdGl2aXR5KCkoU3BlYWspO1xuXG5leHBvcnQgeyBjb25uZWN0U3BlYWtBY3Rpdml0eSB9O1xuIl19
