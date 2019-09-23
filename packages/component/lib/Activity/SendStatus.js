'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSendStatus = exports.default = void 0;

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
    language = _ref3.language,
    retrySend = _ref3.retrySend,
    styleSet = _ref3.styleSet;
  // TODO: [P4] Currently, this is the only place which use a templated string
  //       We could refactor this into a general component if there are more templated strings
  var localizedSending = (0, _Localize.localize)('Sending', language);
  var localizedSendStatus = (0, _Localize.localize)('SendStatus', language);
  var sendFailedText = (0, _Localize.localize)('SEND_FAILED_KEY', language);
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
        className: styleSet.sendStatus
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
                (0, _Localize.localize)('Retry', language)
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
  language: _propTypes.default.string.isRequired,
  retrySend: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    sendStatus: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = connectSendStatus(function(_ref4) {
  var styleSet = _ref4.styleSet;
  return {
    styleSet: styleSet
  };
})(SendStatus);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TZW5kU3RhdHVzLmpzIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkFjdGl2aXR5Q2xpZW50U3RhdGUiLCJTRU5EX0ZBSUxFRCIsIlNFTkRJTkciLCJjb25uZWN0U2VuZFN0YXR1cyIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJmb2N1c1NlbmRCb3giLCJsYW5ndWFnZSIsInBvc3RBY3Rpdml0eSIsImFjdGl2aXR5IiwicmV0cnlTZW5kIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJTZW5kU3RhdHVzIiwiY2hhbm5lbERhdGEiLCJzdGF0ZSIsInN0eWxlU2V0IiwibG9jYWxpemVkU2VuZGluZyIsImxvY2FsaXplZFNlbmRTdGF0dXMiLCJzZW5kRmFpbGVkVGV4dCIsInNlbmRGYWlsZWRSZXRyeU1hdGNoIiwiZXhlYyIsInNlbmRTdGF0dXMiLCJzdWJzdHIiLCJpbmRleCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs0QkFJSUEsa0MsQ0FERkMsbUI7SUFBdUJDLFcseUJBQUFBLFc7SUFBYUMsTyx5QkFBQUEsTzs7QUFHdEMsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUN4QkMseUNBQ0U7QUFBQSxRQUFHQyxZQUFILFFBQUdBLFlBQUg7QUFBQSxRQUFpQkMsUUFBakIsUUFBaUJBLFFBQWpCO0FBQUEsUUFBMkJDLFlBQTNCLFFBQTJCQSxZQUEzQjtBQUFBLFFBQTZDQyxRQUE3QyxTQUE2Q0EsUUFBN0M7QUFBQSxXQUE2RDtBQUMzREYsTUFBQUEsUUFBUSxFQUFSQSxRQUQyRDtBQUUzREcsTUFBQUEsU0FBUyxFQUFFLG1C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b3JrLXdlYmNoYXQtY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcblxuY29uc3Qge1xuICBBY3Rpdml0eUNsaWVudFN0YXRlOiB7IFNFTkRfRkFJTEVELCBTRU5ESU5HIH1cbn0gPSBDb25zdGFudHM7XG5cbmNvbnN0IGNvbm5lY3RTZW5kU3RhdHVzID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoeyBmb2N1c1NlbmRCb3gsIGxhbmd1YWdlLCBwb3N0QWN0aXZpdHkgfSwgeyBhY3Rpdml0eSB9KSA9PiAoe1xuICAgICAgbGFuZ3VhZ2UsXG4gICAgICByZXRyeVNlbmQ6IGV2dCA9PiB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHBvc3RBY3Rpdml0eShhY3Rpdml0eSk7XG5cbiAgICAgICAgLy8gQWZ0ZXIgY2xpY2tpbmcgb24gXCJyZXRyeVwiLCB0aGUgYnV0dG9uIHdpbGwgYmUgZ29uZSBhbmQgZm9jdXMgd2lsbCBiZSBsb3N0IChiYWNrIHRvIGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIHN0YXkgaW5zaWRlIFdlYiBDaGF0XG4gICAgICAgIGZvY3VzU2VuZEJveCgpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTZW5kU3RhdHVzID0gKHsgYWN0aXZpdHk6IHsgY2hhbm5lbERhdGE6IHsgc3RhdGUgfSA9IHt9IH0sIGxhbmd1YWdlLCByZXRyeVNlbmQsIHN0eWxlU2V0IH0pID0+IHtcbiAgLy8gVE9ETzogW1A0XSBDdXJyZW50bHksIHRoaXMgaXMgdGhlIG9ubHkgcGxhY2Ugd2hpY2ggdXNlIGEgdGVtcGxhdGVkIHN0cmluZ1xuICAvLyAgICAgICBXZSBjb3VsZCByZWZhY3RvciB0aGlzIGludG8gYSBnZW5lcmFsIGNvbXBvbmVudCBpZiB0aGVyZSBhcmUgbW9yZSB0ZW1wbGF0ZWQgc3RyaW5nc1xuICBjb25zdCBsb2NhbGl6ZWRTZW5kaW5nID0gbG9jYWxpemUoJ1NlbmRpbmcnLCBsYW5ndWFnZSk7XG4gIGNvbnN0IGxvY2FsaXplZFNlbmRTdGF0dXMgPSBsb2NhbGl6ZSgnU2VuZFN0YXR1cycsIGxhbmd1YWdlKTtcbiAgY29uc3Qgc2VuZEZhaWxlZFRleHQgPSBsb2NhbGl6ZSgnU0VORF9GQUlMRURfS0VZJywgbGFuZ3VhZ2UpO1xuICBjb25zdCBzZW5kRmFpbGVkUmV0cnlNYXRjaCA9IC9cXHtSZXRyeVxcfS91LmV4ZWMoc2VuZEZhaWxlZFRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemVkU2VuZFN0YXR1cyArIGxvY2FsaXplZFNlbmRpbmd9IC8+XG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZVNldC5zZW5kU3RhdHVzfT5cbiAgICAgICAge3N0YXRlID09PSBTRU5ESU5HID8gKFxuICAgICAgICAgIGxvY2FsaXplZFNlbmRpbmdcbiAgICAgICAgKSA6IHN0YXRlID09PSBTRU5EX0ZBSUxFRCA/IChcbiAgICAgICAgICBzZW5kRmFpbGVkUmV0cnlNYXRjaCA/IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3NlbmRGYWlsZWRUZXh0LnN1YnN0cigwLCBzZW5kRmFpbGVkUmV0cnlNYXRjaC5pbmRleCl9XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmV0cnlTZW5kfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKCdSZXRyeScsIGxhbmd1YWdlKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtzZW5kRmFpbGVkVGV4dC5zdWJzdHIoc2VuZEZhaWxlZFJldHJ5TWF0Y2guaW5kZXggKyBzZW5kRmFpbGVkUmV0cnlNYXRjaFswXS5sZW5ndGgpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXRyeVNlbmR9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAge3NlbmRGYWlsZWRUZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblNlbmRTdGF0dXMucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmV0cnlTZW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZW5kU3RhdHVzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFNlbmRTdGF0dXMoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFNlbmRTdGF0dXMpO1xuXG5leHBvcnQgeyBjb25uZWN0U2VuZFN0YXR1cyB9O1xuIl19
