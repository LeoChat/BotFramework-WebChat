'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendMessageToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendMessage = require('../actions/sendMessage');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithMessage),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendMessageToPostActivitySaga);

function postActivityWithMessage(_ref) {
  var _ref$payload, method, text;

  return _regenerator['default'].wrap(function postActivityWithMessage$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_ref$payload = _ref.payload), (method = _ref$payload.method), (text = _ref$payload.text);
          _context.next = 3;
          return (0, _effects.put)(
            (0, _postActivity['default'])(
              {
                text: text,
                textFormat: 'plain',
                type: 'message'
              },
              method
            )
          );

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendMessageToPostActivity() {
  return _regenerator['default'].wrap(function sendMessageToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref2) {
            var payload = _ref2.payload,
              type = _ref2.type;
            return type === _sendMessage.SEND_MESSAGE && payload.text;
          }, postActivityWithMessage);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendMessageToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendMessageToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(sendMessageToPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0QWN0aXZpdHlXaXRoTWVzc2FnZSIsInNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHkiLCJzZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSIsInBheWxvYWQiLCJtZXRob2QiLCJ0ZXh0IiwidGV4dEZvcm1hdCIsInR5cGUiLCJTRU5EX01FU1NBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLHVCOzs7NkJBYUFDLHlCOzs7NkJBSWVDLDZCOztBQWpCekIsU0FBVUYsdUJBQVY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFvQ0csT0FBcEMsRUFBK0NDLE1BQS9DLGdCQUErQ0EsTUFBL0MsRUFBdURDLElBQXZELGdCQUF1REEsSUFBdkQ7QUFBQTtBQUNFLGlCQUFNLGtCQUNKLDhCQUNFO0FBQ0VBLFlBQUFBLElBQUksRUFBSkEsSUFERjtBQUVFQyxZQUFBQSxVQUFVLEVBQUUsT0FGZDtBQUdFQyxZQUFBQSxJQUFJLEVBQUU7QUFIUixXQURGLEVBTUVILE1BTkYsQ0FESSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFBLFNBQVVILHlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVO0FBQUEsZ0JBQUdFLE9BQUgsU0FBR0EsT0FBSDtBQUFBLGdCQUFZSSxJQUFaLFNBQVlBLElBQVo7QUFBQSxtQkFBdUJBLElBQUksS0FBS0MseUJBQVQsSUFBeUJMLE9BQU8sQ0FBQ0UsSUFBeEQ7QUFBQSxXQUFWLEVBQXdFTCx1QkFBeEUsQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSw2QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSxnQ0FBZUQseUJBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgU0VORF9NRVNTQUdFIH0gZnJvbSAnLi4vYWN0aW9ucy9zZW5kTWVzc2FnZSc7XG5pbXBvcnQgcG9zdEFjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvcG9zdEFjdGl2aXR5JztcbmltcG9ydCB3aGlsZUNvbm5lY3RlZCBmcm9tICcuL2VmZmVjdHMvd2hpbGVDb25uZWN0ZWQnO1xuXG5mdW5jdGlvbiogcG9zdEFjdGl2aXR5V2l0aE1lc3NhZ2UoeyBwYXlsb2FkOiB7IG1ldGhvZCwgdGV4dCB9IH0pIHtcbiAgeWllbGQgcHV0KFxuICAgIHBvc3RBY3Rpdml0eShcbiAgICAgIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGV4dEZvcm1hdDogJ3BsYWluJyxcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnXG4gICAgICB9LFxuICAgICAgbWV0aG9kXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiogc2VuZE1lc3NhZ2VUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gU0VORF9NRVNTQUdFICYmIHBheWxvYWQudGV4dCwgcG9zdEFjdGl2aXR5V2l0aE1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc2VuZE1lc3NhZ2VUb1Bvc3RBY3Rpdml0eVNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHkpO1xufVxuIl19
