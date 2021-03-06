'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendEventToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendEvent = require('../actions/sendEvent');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithEvent),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendEventToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendEventToPostActivitySaga);

function postActivityWithEvent(_ref) {
  var _ref$payload, name, value;

  return _regenerator['default'].wrap(function postActivityWithEvent$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_ref$payload = _ref.payload), (name = _ref$payload.name), (value = _ref$payload.value);
          _context.next = 3;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              name: name,
              type: 'event',
              value: value
            })
          );

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendEventToPostActivity() {
  return _regenerator['default'].wrap(function sendEventToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref2) {
            var payload = _ref2.payload,
              type = _ref2.type;
            return type === _sendEvent.SEND_EVENT && payload.name;
          }, postActivityWithEvent);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendEventToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendEventToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(sendEventToPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aEV2ZW50Iiwic2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHkiLCJzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJwYXlsb2FkIiwibmFtZSIsInZhbHVlIiwidHlwZSIsIlNFTkRfRVZFTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLHFCOzs7NkJBVUFDLHVCOzs7NkJBSWVDLDJCOztBQWR6QixTQUFVRixxQkFBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQWtDRyxPQUFsQyxFQUE2Q0MsSUFBN0MsZ0JBQTZDQSxJQUE3QyxFQUFtREMsS0FBbkQsZ0JBQW1EQSxLQUFuRDtBQUFBO0FBQ0UsaUJBQU0sa0JBQ0osOEJBQWE7QUFDWEQsWUFBQUEsSUFBSSxFQUFKQSxJQURXO0FBRVhFLFlBQUFBLElBQUksRUFBRSxPQUZLO0FBR1hELFlBQUFBLEtBQUssRUFBTEE7QUFIVyxXQUFiLENBREksQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQSxTQUFVSix1QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFBVTtBQUFBLGdCQUFHRSxPQUFILFNBQUdBLE9BQUg7QUFBQSxnQkFBWUcsSUFBWixTQUFZQSxJQUFaO0FBQUEsbUJBQXVCQSxJQUFJLEtBQUtDLHFCQUFULElBQXVCSixPQUFPLENBQUNDLElBQXREO0FBQUEsV0FBVixFQUFzRUoscUJBQXRFLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsMkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELHVCQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB7IFNFTkRfRVZFTlQgfSBmcm9tICcuLi9hY3Rpb25zL3NlbmRFdmVudCc7XG5pbXBvcnQgcG9zdEFjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvcG9zdEFjdGl2aXR5JztcbmltcG9ydCB3aGlsZUNvbm5lY3RlZCBmcm9tICcuL2VmZmVjdHMvd2hpbGVDb25uZWN0ZWQnO1xuXG5mdW5jdGlvbiogcG9zdEFjdGl2aXR5V2l0aEV2ZW50KHsgcGF5bG9hZDogeyBuYW1lLCB2YWx1ZSB9IH0pIHtcbiAgeWllbGQgcHV0KFxuICAgIHBvc3RBY3Rpdml0eSh7XG4gICAgICBuYW1lLFxuICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgIHZhbHVlXG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24qIHNlbmRFdmVudFRvUG9zdEFjdGl2aXR5KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoKHsgcGF5bG9hZCwgdHlwZSB9KSA9PiB0eXBlID09PSBTRU5EX0VWRU5UICYmIHBheWxvYWQubmFtZSwgcG9zdEFjdGl2aXR5V2l0aEV2ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlbmRFdmVudFRvUG9zdEFjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHkpO1xufVxuIl19
