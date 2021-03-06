'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stopSpeakingActivityOnInputSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _setSendBox = require('../actions/setSendBox');

var _stopSpeakingActivity = _interopRequireDefault(require('../actions/stopSpeakingActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(stopSpeakingActivityOnInput),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(stopSpeakingActivityOnInputSaga);

function stopSpeakingActivityOnInput() {
  return _regenerator['default'].wrap(function stopSpeakingActivityOnInput$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(
            function(_ref) {
              var meta = _ref.meta,
                payload = _ref.payload,
                type = _ref.type;
              return (
                (type === _setSendBox.SET_SEND_BOX && payload.text) || // We want to stop speaking activity when the user click on a card action
                // But currently there are no actions generated out of a card action
                // So, right now, we are using best-effort by listening to POST_ACTIVITY_PENDING with a "message" event
                // We filter out speech because we will call startSpeakingActivity() for POST_ACTIVITY_PENDING dispatched by speech
                (type === _postActivity.POST_ACTIVITY_PENDING &&
                  meta.method !== 'speech' &&
                  payload.activity.type === 'message')
              );
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee() {
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return (0, _effects.put)((0, _stopSpeakingActivity['default'])());

                    case 2:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function stopSpeakingActivityOnInputSaga() {
  return _regenerator['default'].wrap(function stopSpeakingActivityOnInputSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(stopSpeakingActivityOnInput);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXRTYWdhLmpzIl0sIm5hbWVzIjpbInN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dCIsInN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EiLCJtZXRhIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfU0VORF9CT1giLCJ0ZXh0IiwiUE9TVF9BQ1RJVklUWV9QRU5ESU5HIiwibWV0aG9kIiwiYWN0aXZpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLDJCOzs7NkJBZWVDLCtCOztBQWZ6QixTQUFVRCwyQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFDSjtBQUFBLGdCQUFHRSxJQUFILFFBQUdBLElBQUg7QUFBQSxnQkFBU0MsT0FBVCxRQUFTQSxPQUFUO0FBQUEsZ0JBQWtCQyxJQUFsQixRQUFrQkEsSUFBbEI7QUFBQSxtQkFDR0EsSUFBSSxLQUFLQyx3QkFBVCxJQUF5QkYsT0FBTyxDQUFDRyxJQUFsQyxJQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0NGLFlBQUFBLElBQUksS0FBS0csbUNBQVQsSUFBa0NMLElBQUksQ0FBQ00sTUFBTCxLQUFnQixRQUFsRCxJQUE4REwsT0FBTyxDQUFDTSxRQUFSLENBQWlCTCxJQUFqQixLQUEwQixTQU4zRjtBQUFBLFdBREk7QUFBQTtBQUFBLHVDQVFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLDJCQUFNLGtCQUFJLHVDQUFKLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSSSxFQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVlLFNBQVVILCtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCwyQkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBQT1NUX0FDVElWSVRZX1BFTkRJTkcgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgeyBTRVRfU0VORF9CT1ggfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRCb3gnO1xuaW1wb3J0IHN0b3BTcGVha2luZ0FjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvc3RvcFNwZWFraW5nQWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBzdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXQoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShcbiAgICAoeyBtZXRhLCBwYXlsb2FkLCB0eXBlIH0pID0+XG4gICAgICAodHlwZSA9PT0gU0VUX1NFTkRfQk9YICYmIHBheWxvYWQudGV4dCkgfHxcbiAgICAgIC8vIFdlIHdhbnQgdG8gc3RvcCBzcGVha2luZyBhY3Rpdml0eSB3aGVuIHRoZSB1c2VyIGNsaWNrIG9uIGEgY2FyZCBhY3Rpb25cbiAgICAgIC8vIEJ1dCBjdXJyZW50bHkgdGhlcmUgYXJlIG5vIGFjdGlvbnMgZ2VuZXJhdGVkIG91dCBvZiBhIGNhcmQgYWN0aW9uXG4gICAgICAvLyBTbywgcmlnaHQgbm93LCB3ZSBhcmUgdXNpbmcgYmVzdC1lZmZvcnQgYnkgbGlzdGVuaW5nIHRvIFBPU1RfQUNUSVZJVFlfUEVORElORyB3aXRoIGEgXCJtZXNzYWdlXCIgZXZlbnRcbiAgICAgIC8vIFdlIGZpbHRlciBvdXQgc3BlZWNoIGJlY2F1c2Ugd2Ugd2lsbCBjYWxsIHN0YXJ0U3BlYWtpbmdBY3Rpdml0eSgpIGZvciBQT1NUX0FDVElWSVRZX1BFTkRJTkcgZGlzcGF0Y2hlZCBieSBzcGVlY2hcbiAgICAgICh0eXBlID09PSBQT1NUX0FDVElWSVRZX1BFTkRJTkcgJiYgbWV0YS5tZXRob2QgIT09ICdzcGVlY2gnICYmIHBheWxvYWQuYWN0aXZpdHkudHlwZSA9PT0gJ21lc3NhZ2UnKSxcbiAgICBmdW5jdGlvbiooKSB7XG4gICAgICB5aWVsZCBwdXQoc3RvcFNwZWFraW5nQWN0aXZpdHkoKSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0KTtcbn1cbiJdfQ==
