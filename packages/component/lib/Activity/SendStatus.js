'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSendStatus = exports.default = void 0;

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

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

var _Constants$ActivityCl = _botframeworkWebchatCore.Constants.ActivityClientState,
  SEND_FAILED = _Constants$ActivityCl.SEND_FAILED,
  SENDING = _Constants$ActivityCl.SENDING;

var connectSendStatus = function connectSendStatus() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref, _ref2) {
        var focusSendBox = _ref.focusSendBox,
          language = _ref.language,
          postActivity = _ref.postActivity;
        var activity = _ref2.activity;
        return {
          language: language,
          retrySend: function retrySend(evt) {
            evt.preventDefault();
            postActivity(activity); // After clicking on "retry", the button will be gone and focus will be lost (back to document.body)
            // We want to make sure the user stay inside Web Chat

            focusSendBox();
          }
        };
      }
    ].concat(selectors)
  );
};

exports.connectSendStatus = connectSendStatus;

var SendStatus = function SendStatus(_ref3) {
  var _ref3$activity$channe = _ref3.activity.channelData;
  _ref3$activity$channe = _ref3$activity$channe === void 0 ? {} : _ref3$activity$channe;
  var state = _ref3$activity$channe.state,
    retrySend = _ref3.retrySend;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    sendStatusStyleSet = _useStyleSet2[0].sendStatus; // TODO: [P4] Currently, this is the only place which use a templated string
  //       We could refactor this into a general component if there are more templated strings

  var localizedSending = (0, _useLocalize.default)('Sending');
  var localizedSendStatus = (0, _useLocalize.default)('SendStatus');
  var retryText = (0, _useLocalize.default)('Retry');
  var sendFailedText = (0, _useLocalize.default)('SEND_FAILED_KEY');
  var sendFailedRetryMatch = /\{Retry\}/.exec(sendFailedText);
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: localizedSendStatus + localizedSending
    }),
    _react.default.createElement(
      'span',
      {
        'aria-hidden': true,
        className: sendStatusStyleSet
      },
      state === SENDING
        ? localizedSending
        : state === SEND_FAILED
        ? sendFailedRetryMatch
          ? _react.default.createElement(
              _react.default.Fragment,
              null,
              sendFailedText.substr(0, sendFailedRetryMatch.index),
              _react.default.createElement(
                'button',
                {
                  onClick: retrySend,
                  type: 'button'
                },
                retryText
              ),
              sendFailedText.substr(sendFailedRetryMatch.index + sendFailedRetryMatch[0].length)
            )
          : _react.default.createElement(
              'button',
              {
                onClick: retrySend,
                type: 'button'
              },
              sendFailedText
            )
        : false
    )
  );
};

SendStatus.propTypes = {
  activity: _propTypes.default.shape({
    channelData: _propTypes.default.shape({
      state: _propTypes.default.string
    })
  }).isRequired,
  retrySend: _propTypes.default.func.isRequired
};

var _default = connectSendStatus()(SendStatus);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TZW5kU3RhdHVzLmpzIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkFjdGl2aXR5Q2xpZW50U3RhdGUiLCJTRU5EX0ZBSUxFRCIsIlNFTkRJTkciLCJjb25uZWN0U2VuZFN0YXR1cyIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJmb2N1c1NlbmRCb3giLCJsYW5ndWFnZSIsInBvc3RBY3Rpdml0eSIsImFjdGl2aXR5IiwicmV0cnlTZW5kIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJTZW5kU3RhdHVzIiwiY2hhbm5lbERhdGEiLCJzdGF0ZSIsInNlbmRTdGF0dXNTdHlsZVNldCIsInNlbmRTdGF0dXMiLCJsb2NhbGl6ZWRTZW5kaW5nIiwibG9jYWxpemVkU2VuZFN0YXR1cyIsInJldHJ5VGV4dCIsInNlbmRGYWlsZWRUZXh0Iiwic2VuZEZhaWxlZFJldHJ5TWF0Y2giLCJleGVjIiwic3Vic3RyIiwiaW5kZXgiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs0QkFJSUEsa0MsQ0FERkMsbUI7SUFBdUJDLFcseUJBQUFBLFc7SUFBYUMsTyx5QkFBQUEsTzs7QUFHdEMsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUN4QkMseUNBQ0U7QUFBQSxRQUFHQyxZQUFILFFBQUdBLFlBQUg7QUFBQSxRQUFpQkMsUUFBakIsUUFBaUJBLFFBQWpCO0FBQUEsUUFBMkJDLFlBQTNCLFFBQTJCQSxZQUEzQjtBQUFBLFFBQTZDQyxRQUE3QyxTQUE2Q0EsUUFBN0M7QUFBQSxXQUE2RDtBQUMzREYsTUFBQUEsUUFBUSxFQUFSQSxRQUQyRDtBQUUzREcsTUFBQUEsU0FBUyxFQUFFLG1CQUFBQyxHQUFHLEVBQUk7QUFDaEJBLFFBQUFBLEdBQUcsQ0FBQ0MsY0FBSjtBQUVBSixRQUFBQSxZQUFZLENBQUNDLFFBQUQsQ0FBWixDQUhnQixDQUtoQjtBQUNBOztBQUNBSCxRQUFBQSxZQUFZO0FBQ2I7QUFWMEQsS0FBN0Q7QUFBQSxHQURGLFNBYUtGLFNBYkwsRUFEd0I7QUFBQSxDQUExQjs7OztBQWlCQSxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUE4RDtBQUFBLG9DQUEzREosUUFBMkQsQ0FBL0NLLFdBQStDO0FBQUEsNkRBQXRCLEVBQXNCO0FBQUEsTUFBaENDLEtBQWdDLHlCQUFoQ0EsS0FBZ0M7QUFBQSxNQUFoQkwsU0FBZ0IsU0FBaEJBLFNBQWdCOztBQUFBLHFCQUNsQyw0QkFEa0M7QUFBQTtBQUFBLE1BQzFETSxrQkFEMEQsb0JBQ3RFQyxVQURzRSxFQUcvRTtBQUNBOzs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRywwQkFBWSxTQUFaLENBQXpCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsMEJBQVksWUFBWixDQUE1QjtBQUNBLE1BQU1DLFNBQVMsR0FBRywwQkFBWSxPQUFaLENBQWxCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLDBCQUFZLGlCQUFaLENBQXZCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsWUFBYUMsSUFBYixDQUFrQkYsY0FBbEIsQ0FBN0I7QUFFQSxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVGLG1CQUFtQixHQUFHRDtBQUE5QyxJQURGLEVBRUU7QUFBTSxtQkFBYSxJQUFuQjtBQUF5QixJQUFBLFNBQVMsRUFBRUY7QUFBcEMsS0FDR0QsS0FBSyxLQUFLYixPQUFWLEdBQ0NnQixnQkFERCxHQUVHSCxLQUFLLEtBQUtkLFdBQVYsR0FDRnFCLG9CQUFvQixHQUNsQiw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNHRCxjQUFjLENBQUNHLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUJGLG9CQUFvQixDQUFDRyxLQUE5QyxDQURILEVBRUU7QUFBUSxJQUFBLE9BQU8sRUFBRWYsU0FBakI7QUFBNEIsSUFBQSxJQUFJLEVBQUM7QUFBakMsS0FDR1UsU0FESCxDQUZGLEVBS0dDLGNBQWMsQ0FBQ0csTUFBZixDQUFzQkYsb0JBQW9CLENBQUNHLEtBQXJCLEdBQTZCSCxvQkFBb0IsQ0FBQyxDQUFELENBQXBCLENBQXdCSSxNQUEzRSxDQUxILENBRGtCLEdBU2xCO0FBQVEsSUFBQSxPQUFPLEVBQUVoQixTQUFqQjtBQUE0QixJQUFBLElBQUksRUFBQztBQUFqQyxLQUNHVyxjQURILENBVkEsR0FlRixLQWxCSixDQUZGLENBREY7QUEwQkQsQ0F0Q0Q7O0FBd0NBUixVQUFVLENBQUNjLFNBQVgsR0FBdUI7QUFDckJsQixFQUFBQSxRQUFRLEVBQUVtQixtQkFBVUMsS0FBVixDQUFnQjtBQUN4QmYsSUFBQUEsV0FBVyxFQUFFYyxtQkFBVUMsS0FBVixDQUFnQjtBQUMzQmQsTUFBQUEsS0FBSyxFQUFFYSxtQkFBVUU7QUFEVSxLQUFoQjtBQURXLEdBQWhCLEVBSVBDLFVBTGtCO0FBTXJCckIsRUFBQUEsU0FBUyxFQUFFa0IsbUJBQVVJLElBQVYsQ0FBZUQ7QUFOTCxDQUF2Qjs7ZUFTZTVCLGlCQUFpQixHQUFHVSxVQUFILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IHtcbiAgQWN0aXZpdHlDbGllbnRTdGF0ZTogeyBTRU5EX0ZBSUxFRCwgU0VORElORyB9XG59ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBjb25uZWN0U2VuZFN0YXR1cyA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgZm9jdXNTZW5kQm94LCBsYW5ndWFnZSwgcG9zdEFjdGl2aXR5IH0sIHsgYWN0aXZpdHkgfSkgPT4gKHtcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgcmV0cnlTZW5kOiBldnQgPT4ge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBwb3N0QWN0aXZpdHkoYWN0aXZpdHkpO1xuXG4gICAgICAgIC8vIEFmdGVyIGNsaWNraW5nIG9uIFwicmV0cnlcIiwgdGhlIGJ1dHRvbiB3aWxsIGJlIGdvbmUgYW5kIGZvY3VzIHdpbGwgYmUgbG9zdCAoYmFjayB0byBkb2N1bWVudC5ib2R5KVxuICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB0aGUgdXNlciBzdGF5IGluc2lkZSBXZWIgQ2hhdFxuICAgICAgICBmb2N1c1NlbmRCb3goKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgU2VuZFN0YXR1cyA9ICh7IGFjdGl2aXR5OiB7IGNoYW5uZWxEYXRhOiB7IHN0YXRlIH0gPSB7fSB9LCByZXRyeVNlbmQgfSkgPT4ge1xuICBjb25zdCBbeyBzZW5kU3RhdHVzOiBzZW5kU3RhdHVzU3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIC8vIFRPRE86IFtQNF0gQ3VycmVudGx5LCB0aGlzIGlzIHRoZSBvbmx5IHBsYWNlIHdoaWNoIHVzZSBhIHRlbXBsYXRlZCBzdHJpbmdcbiAgLy8gICAgICAgV2UgY291bGQgcmVmYWN0b3IgdGhpcyBpbnRvIGEgZ2VuZXJhbCBjb21wb25lbnQgaWYgdGhlcmUgYXJlIG1vcmUgdGVtcGxhdGVkIHN0cmluZ3NcbiAgY29uc3QgbG9jYWxpemVkU2VuZGluZyA9IHVzZUxvY2FsaXplKCdTZW5kaW5nJyk7XG4gIGNvbnN0IGxvY2FsaXplZFNlbmRTdGF0dXMgPSB1c2VMb2NhbGl6ZSgnU2VuZFN0YXR1cycpO1xuICBjb25zdCByZXRyeVRleHQgPSB1c2VMb2NhbGl6ZSgnUmV0cnknKTtcbiAgY29uc3Qgc2VuZEZhaWxlZFRleHQgPSB1c2VMb2NhbGl6ZSgnU0VORF9GQUlMRURfS0VZJyk7XG5cbiAgY29uc3Qgc2VuZEZhaWxlZFJldHJ5TWF0Y2ggPSAvXFx7UmV0cnlcXH0vdS5leGVjKHNlbmRGYWlsZWRUZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2xvY2FsaXplZFNlbmRTdGF0dXMgKyBsb2NhbGl6ZWRTZW5kaW5nfSAvPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17c2VuZFN0YXR1c1N0eWxlU2V0fT5cbiAgICAgICAge3N0YXRlID09PSBTRU5ESU5HID8gKFxuICAgICAgICAgIGxvY2FsaXplZFNlbmRpbmdcbiAgICAgICAgKSA6IHN0YXRlID09PSBTRU5EX0ZBSUxFRCA/IChcbiAgICAgICAgICBzZW5kRmFpbGVkUmV0cnlNYXRjaCA/IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3NlbmRGYWlsZWRUZXh0LnN1YnN0cigwLCBzZW5kRmFpbGVkUmV0cnlNYXRjaC5pbmRleCl9XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmV0cnlTZW5kfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAge3JldHJ5VGV4dH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtzZW5kRmFpbGVkVGV4dC5zdWJzdHIoc2VuZEZhaWxlZFJldHJ5TWF0Y2guaW5kZXggKyBzZW5kRmFpbGVkUmV0cnlNYXRjaFswXS5sZW5ndGgpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXRyeVNlbmR9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAge3NlbmRGYWlsZWRUZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblNlbmRTdGF0dXMucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcmV0cnlTZW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U2VuZFN0YXR1cygpKFNlbmRTdGF0dXMpO1xuXG5leHBvcnQgeyBjb25uZWN0U2VuZFN0YXR1cyB9O1xuIl19
