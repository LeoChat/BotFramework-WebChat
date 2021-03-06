'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendMessageBackToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendMessageBack = require('../actions/sendMessageBack');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithMessageBack),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageBackToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageBackToPostActivitySaga);

function postActivityWithMessageBack(_ref) {
  var _ref$payload, displayText, text, value;

  return _regenerator['default'].wrap(function postActivityWithMessageBack$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_ref$payload = _ref.payload),
            (displayText = _ref$payload.displayText),
            (text = _ref$payload.text),
            (value = _ref$payload.value);

          if (!(text || value)) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              channelData: {
                messageBack: {
                  displayText: displayText
                }
              },
              text: text,
              type: 'message',
              value: value
            })
          );

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendMessageBackToPostActivity() {
  return _regenerator['default'].wrap(function sendMessageBackToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(_sendMessageBack.SEND_MESSAGE_BACK, postActivityWithMessageBack);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendMessageBackToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendMessageBackToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(sendMessageBackToPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aE1lc3NhZ2VCYWNrIiwic2VuZE1lc3NhZ2VCYWNrVG9Qb3N0QWN0aXZpdHkiLCJzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJwYXlsb2FkIiwiZGlzcGxheVRleHQiLCJ0ZXh0IiwidmFsdWUiLCJjaGFubmVsRGF0YSIsIm1lc3NhZ2VCYWNrIiwidHlwZSIsIlNFTkRfTUVTU0FHRV9CQUNLIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7OzZCQUVVQSwyQjs7OzZCQWlCQUMsNkI7Ozs2QkFJZUMsaUM7O0FBckJ6QixTQUFVRiwyQkFBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXdDRyxPQUF4QyxFQUFtREMsV0FBbkQsZ0JBQW1EQSxXQUFuRCxFQUFnRUMsSUFBaEUsZ0JBQWdFQSxJQUFoRSxFQUFzRUMsS0FBdEUsZ0JBQXNFQSxLQUF0RTs7QUFBQSxnQkFDTUQsSUFBSSxJQUFJQyxLQURkO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRUksaUJBQU0sa0JBQ0osOEJBQWE7QUFDWEMsWUFBQUEsV0FBVyxFQUFFO0FBQ1hDLGNBQUFBLFdBQVcsRUFBRTtBQUNYSixnQkFBQUEsV0FBVyxFQUFYQTtBQURXO0FBREYsYUFERjtBQU1YQyxZQUFBQSxJQUFJLEVBQUpBLElBTlc7QUFPWEksWUFBQUEsSUFBSSxFQUFFLFNBUEs7QUFRWEgsWUFBQUEsS0FBSyxFQUFMQTtBQVJXLFdBQWIsQ0FESSxDQUFOOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCQSxTQUFVTCw2QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFBVVMsa0NBQVYsRUFBNkJWLDJCQUE3QixDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLGlDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCw2QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRU5EX01FU1NBR0VfQkFDSyB9IGZyb20gJy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2VCYWNrJztcbmltcG9ydCBwb3N0QWN0aXZpdHkgZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBwb3N0QWN0aXZpdHlXaXRoTWVzc2FnZUJhY2soeyBwYXlsb2FkOiB7IGRpc3BsYXlUZXh0LCB0ZXh0LCB2YWx1ZSB9IH0pIHtcbiAgaWYgKHRleHQgfHwgdmFsdWUpIHtcbiAgICB5aWVsZCBwdXQoXG4gICAgICBwb3N0QWN0aXZpdHkoe1xuICAgICAgICBjaGFubmVsRGF0YToge1xuICAgICAgICAgIG1lc3NhZ2VCYWNrOiB7XG4gICAgICAgICAgICBkaXNwbGF5VGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNFTkRfTUVTU0FHRV9CQUNLLCBwb3N0QWN0aXZpdHlXaXRoTWVzc2FnZUJhY2spO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc2VuZE1lc3NhZ2VCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eSk7XG59XG4iXX0=
