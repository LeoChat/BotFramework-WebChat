'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = submitSendBoxSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _submitSendBox = require('../actions/submitSendBox');

var _sendBoxValue = _interopRequireDefault(require('../selectors/sendBoxValue'));

var _sendMessage = _interopRequireDefault(require('../actions/sendMessage'));

var _setSendBox = _interopRequireDefault(require('../actions/setSendBox'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(submitSendBox),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(submitSendBoxSaga);

function submitSendBox() {
  return _regenerator['default'].wrap(function submitSendBox$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(
            _submitSendBox.SUBMIT_SEND_BOX,
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee(_ref) {
              var method, sendBoxValue;
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      method = _ref.payload.method;
                      _context.next = 3;
                      return (0, _effects.select)(_sendBoxValue['default']);

                    case 3:
                      sendBoxValue = _context.sent;

                      if (!sendBoxValue) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 7;
                      return (0, _effects.put)((0, _sendMessage['default'])(sendBoxValue.trim(), method));

                    case 7:
                      _context.next = 9;
                      return (0, _effects.put)((0, _setSendBox['default'])(''));

                    case 9:
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

function submitSendBoxSaga() {
  return _regenerator['default'].wrap(function submitSendBoxSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(submitSendBox);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdWJtaXRTZW5kQm94U2FnYS5qcyJdLCJuYW1lcyI6WyJzdWJtaXRTZW5kQm94Iiwic3VibWl0U2VuZEJveFNhZ2EiLCJTVUJNSVRfU0VORF9CT1giLCJtZXRob2QiLCJwYXlsb2FkIiwic2VuZEJveFZhbHVlU2VsZWN0b3IiLCJzZW5kQm94VmFsdWUiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7OzZCQUVVQSxhOzs7NkJBV2VDLGlCOztBQVh6QixTQUFVRCxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVRSw4QkFBVjtBQUFBO0FBQUEsdUNBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QkMsb0JBQUFBLE1BQXZCLFFBQVlDLE9BQVosQ0FBdUJELE1BQXZCO0FBQUE7QUFDViwyQkFBTSxxQkFBT0Usd0JBQVAsQ0FBTjs7QUFEVTtBQUN6QkMsb0JBQUFBLFlBRHlCOztBQUFBLHlCQUczQkEsWUFIMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJN0IsMkJBQU0sa0JBQUksNkJBQVlBLFlBQVksQ0FBQ0MsSUFBYixFQUFaLEVBQWlDSixNQUFqQyxDQUFKLENBQU47O0FBSjZCO0FBQUE7QUFLN0IsMkJBQU0sa0JBQUksNEJBQVcsRUFBWCxDQUFKLENBQU47O0FBTDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTNCLEVBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2UsU0FBVUYsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELGFBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgc2VsZWN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTVUJNSVRfU0VORF9CT1ggfSBmcm9tICcuLi9hY3Rpb25zL3N1Ym1pdFNlbmRCb3gnO1xuaW1wb3J0IHNlbmRCb3hWYWx1ZVNlbGVjdG9yIGZyb20gJy4uL3NlbGVjdG9ycy9zZW5kQm94VmFsdWUnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IHNldFNlbmRCb3ggZnJvbSAnLi4vYWN0aW9ucy9zZXRTZW5kQm94JztcbmltcG9ydCB3aGlsZUNvbm5lY3RlZCBmcm9tICcuL2VmZmVjdHMvd2hpbGVDb25uZWN0ZWQnO1xuXG5mdW5jdGlvbiogc3VibWl0U2VuZEJveCgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNVQk1JVF9TRU5EX0JPWCwgZnVuY3Rpb24qKHsgcGF5bG9hZDogeyBtZXRob2QgfSB9KSB7XG4gICAgY29uc3Qgc2VuZEJveFZhbHVlID0geWllbGQgc2VsZWN0KHNlbmRCb3hWYWx1ZVNlbGVjdG9yKTtcblxuICAgIGlmIChzZW5kQm94VmFsdWUpIHtcbiAgICAgIHlpZWxkIHB1dChzZW5kTWVzc2FnZShzZW5kQm94VmFsdWUudHJpbSgpLCBtZXRob2QpKTtcbiAgICAgIHlpZWxkIHB1dChzZXRTZW5kQm94KCcnKSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN1Ym1pdFNlbmRCb3hTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzdWJtaXRTZW5kQm94KTtcbn1cbiJdfQ==
