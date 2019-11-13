'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendTypingIndicatorOnSetSendBoxSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _setSendBox = require('../actions/setSendBox');

var _setSendTyping = require('../actions/setSendTyping');

var _setSendTypingIndicator = require('../actions/setSendTypingIndicator');

var _postActivity = require('../actions/postActivity');

var _emitTypingIndicator = _interopRequireDefault(require('../actions/emitTypingIndicator'));

var _sendTypingIndicator = _interopRequireDefault(require('../selectors/sendTypingIndicator'));

var _sleep = _interopRequireDefault(require('../utils/sleep'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(sendTypingIndicatorOnSetSendBox),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendTypingIndicatorOnSetSendBoxSaga);

var SEND_INTERVAL = 3000;

function takeSendTypingIndicator(value) {
  return (0, _effects.take)(function(_ref) {
    var payload = _ref.payload,
      type = _ref.type;
    return (
      (type === _setSendTypingIndicator.SET_SEND_TYPING_INDICATOR && !payload.sendTypingIndicator === !value) || // TODO: [P3] Take this deprecation code out when releasing on or after January 13 2020
      (type === _setSendTyping.SET_SEND_TYPING && !payload.sendTyping === !value)
    );
  });
}

function sendTypingIndicatorOnSetSendBox() {
  var sendTypingIndicator, _loop;

  return _regenerator['default'].wrap(function sendTypingIndicatorOnSetSendBox$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(_sendTypingIndicator['default']);

        case 2:
          sendTypingIndicator = _context3.sent;

          if (sendTypingIndicator) {
            _context3.next = 6;
            break;
          }

          _context3.next = 6;
          return takeSendTypingIndicator(true);

        case 6:
          _loop =
            /*#__PURE__*/
            _regenerator['default'].mark(function _loop() {
              var lastSend, task;
              return _regenerator['default'].wrap(function _loop$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      lastSend = 0;
                      _context2.next = 3;
                      return (0, _effects.takeLatest)(
                        function(_ref2) {
                          var payload = _ref2.payload,
                            type = _ref2.type;
                          return (
                            (type === _setSendBox.SET_SEND_BOX && payload.text) || // Stop sending pending typing indicator if the user has posted anything.
                            // We send typing indicator in a debounce way (t = 0, t = 3000, t = 6000).
                            // When the user type, and then post the activity at t = 1500, we still have a pending typing indicator at t = 3000.
                            // This code is to cancel the typing indicator at t = 3000.
                            (type === _postActivity.POST_ACTIVITY && payload.activity.type !== 'typing')
                          );
                        },
                        /*#__PURE__*/
                        _regenerator['default'].mark(function _callee(_ref3) {
                          var type, interval;
                          return _regenerator['default'].wrap(function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  type = _ref3.type;

                                  if (!(type === _setSendBox.SET_SEND_BOX)) {
                                    _context.next = 9;
                                    break;
                                  }

                                  interval = SEND_INTERVAL - Date.now() + lastSend;

                                  if (!(interval > 0)) {
                                    _context.next = 6;
                                    break;
                                  }

                                  _context.next = 6;
                                  return (0, _effects.call)(_sleep['default'], interval);

                                case 6:
                                  _context.next = 8;
                                  return (0, _effects.put)((0, _emitTypingIndicator['default'])());

                                case 8:
                                  lastSend = Date.now();

                                case 9:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        })
                      );

                    case 3:
                      task = _context2.sent;
                      _context2.next = 6;
                      return takeSendTypingIndicator(false);

                    case 6:
                      _context2.next = 8;
                      return (0, _effects.cancel)(task);

                    case 8:
                      _context2.next = 10;
                      return takeSendTypingIndicator(true);

                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _loop);
            });

        case 7:
          return _context3.delegateYield(_loop(), 't0', 8);

        case 8:
          _context3.next = 7;
          break;

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked);
}

function sendTypingIndicatorOnSetSendBoxSaga() {
  return _regenerator['default'].wrap(function sendTypingIndicatorOnSetSendBoxSaga$(_context4) {
    while (1) {
      switch ((_context4.prev = _context4.next)) {
        case 0:
          _context4.next = 2;
          return (0, _whileConnected['default'])(sendTypingIndicatorOnSetSendBox);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYS5qcyJdLCJuYW1lcyI6WyJzZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94Iiwic2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveFNhZ2EiLCJTRU5EX0lOVEVSVkFMIiwidGFrZVNlbmRUeXBpbmdJbmRpY2F0b3IiLCJ2YWx1ZSIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiIsInNlbmRUeXBpbmdJbmRpY2F0b3IiLCJTRVRfU0VORF9UWVBJTkciLCJzZW5kVHlwaW5nIiwic2VuZFR5cGluZ0luZGljYXRvclNlbGVjdG9yIiwibGFzdFNlbmQiLCJTRVRfU0VORF9CT1giLCJ0ZXh0IiwiUE9TVF9BQ1RJVklUWSIsImFjdGl2aXR5IiwiaW50ZXJ2YWwiLCJEYXRlIiwibm93Iiwic2xlZXAiLCJ0YXNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7OzZCQWFVQSwrQjs7OzZCQXNDZUMsbUM7O0FBakR6QixJQUFNQyxhQUFhLEdBQUcsSUFBdEI7O0FBRUEsU0FBU0MsdUJBQVQsQ0FBaUNDLEtBQWpDLEVBQXdDO0FBQ3RDLFNBQU8sbUJBQ0w7QUFBQSxRQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxRQUFZQyxJQUFaLFFBQVlBLElBQVo7QUFBQSxXQUNHQSxJQUFJLEtBQUtDLGlEQUFULElBQXNDLENBQUNGLE9BQU8sQ0FBQ0csbUJBQVQsS0FBaUMsQ0FBQ0osS0FBekUsSUFDQTtBQUNDRSxJQUFBQSxJQUFJLEtBQUtHLDhCQUFULElBQTRCLENBQUNKLE9BQU8sQ0FBQ0ssVUFBVCxLQUF3QixDQUFDTixLQUh4RDtBQUFBLEdBREssQ0FBUDtBQU1EOztBQUVELFNBQVVKLCtCQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM4QixpQkFBTSxxQkFBT1csK0JBQVAsQ0FBTjs7QUFEOUI7QUFDUUgsVUFBQUEsbUJBRFI7O0FBQUEsY0FHT0EsbUJBSFA7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJSSxpQkFBTUwsdUJBQXVCLENBQUMsSUFBRCxDQUE3Qjs7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRUVMsb0JBQUFBLFFBUlIsR0FRbUIsQ0FSbkI7QUFBQTtBQVNpQiwyQkFBTSx5QkFDakI7QUFBQSwwQkFBR1AsT0FBSCxTQUFHQSxPQUFIO0FBQUEsMEJBQVlDLElBQVosU0FBWUEsSUFBWjtBQUFBLDZCQUNHQSxJQUFJLEtBQUtPLHdCQUFULElBQXlCUixPQUFPLENBQUNTLElBQWxDLElBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQ1Isc0JBQUFBLElBQUksS0FBS1MsMkJBQVQsSUFBMEJWLE9BQU8sQ0FBQ1csUUFBUixDQUFpQlYsSUFBakIsS0FBMEIsUUFOdkQ7QUFBQSxxQkFEaUI7QUFBQTtBQUFBLGlEQVFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWUEsOEJBQUFBLElBQVosU0FBWUEsSUFBWjs7QUFBQSxvQ0FDTUEsSUFBSSxLQUFLTyx3QkFEZjtBQUFBO0FBQUE7QUFBQTs7QUFFVUksOEJBQUFBLFFBRlYsR0FFcUJmLGFBQWEsR0FBR2dCLElBQUksQ0FBQ0MsR0FBTCxFQUFoQixHQUE2QlAsUUFGbEQ7O0FBQUEsb0NBSVFLLFFBQVEsR0FBRyxDQUpuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUtNLHFDQUFNLG1CQUFLRyxpQkFBTCxFQUFZSCxRQUFaLENBQU47O0FBTE47QUFBQTtBQVFJLHFDQUFNLGtCQUFJLHNDQUFKLENBQU47O0FBUko7QUFVSUwsOEJBQUFBLFFBQVEsR0FBR00sSUFBSSxDQUFDQyxHQUFMLEVBQVg7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUmlCLEVBQU47O0FBVGpCO0FBU1VFLG9CQUFBQSxJQVRWO0FBQUE7QUFnQ0ksMkJBQU1sQix1QkFBdUIsQ0FBQyxLQUFELENBQTdCOztBQWhDSjtBQUFBO0FBaUNJLDJCQUFNLHFCQUFPa0IsSUFBUCxDQUFOOztBQWpDSjtBQUFBO0FBa0NJLDJCQUFNbEIsdUJBQXVCLENBQUMsSUFBRCxDQUE3Qjs7QUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0NlLFNBQVVGLG1DQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCwrQkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2Ugd2lsbCByZXZpc2l0IHRoaXMgbG9naWMgaW4gIzIxNTcgYW5kIHNob3VsZCByZW1vdmUgdGhlIGZvbGxvd2luZyBlc2xpbnQgaWdub3JlXG4vKiBlc2xpbnQgcmVxdWlyZS1hdG9taWMtdXBkYXRlczogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBjYWxsLCBjYW5jZWwsIHB1dCwgc2VsZWN0LCB0YWtlLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgU0VUX1NFTkRfQk9YIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRTZW5kQm94JztcbmltcG9ydCB7IFNFVF9TRU5EX1RZUElORyB9IGZyb20gJy4uL2FjdGlvbnMvc2V0U2VuZFR5cGluZyc7XG5pbXBvcnQgeyBTRVRfU0VORF9UWVBJTkdfSU5ESUNBVE9SIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRTZW5kVHlwaW5nSW5kaWNhdG9yJztcbmltcG9ydCB7IFBPU1RfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgZW1pdFR5cGluZ0luZGljYXRvciBmcm9tICcuLi9hY3Rpb25zL2VtaXRUeXBpbmdJbmRpY2F0b3InO1xuaW1wb3J0IHNlbmRUeXBpbmdJbmRpY2F0b3JTZWxlY3RvciBmcm9tICcuLi9zZWxlY3RvcnMvc2VuZFR5cGluZ0luZGljYXRvcic7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmNvbnN0IFNFTkRfSU5URVJWQUwgPSAzMDAwO1xuXG5mdW5jdGlvbiB0YWtlU2VuZFR5cGluZ0luZGljYXRvcih2YWx1ZSkge1xuICByZXR1cm4gdGFrZShcbiAgICAoeyBwYXlsb2FkLCB0eXBlIH0pID0+XG4gICAgICAodHlwZSA9PT0gU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiAmJiAhcGF5bG9hZC5zZW5kVHlwaW5nSW5kaWNhdG9yID09PSAhdmFsdWUpIHx8XG4gICAgICAvLyBUT0RPOiBbUDNdIFRha2UgdGhpcyBkZXByZWNhdGlvbiBjb2RlIG91dCB3aGVuIHJlbGVhc2luZyBvbiBvciBhZnRlciBKYW51YXJ5IDEzIDIwMjBcbiAgICAgICh0eXBlID09PSBTRVRfU0VORF9UWVBJTkcgJiYgIXBheWxvYWQuc2VuZFR5cGluZyA9PT0gIXZhbHVlKVxuICApO1xufVxuXG5mdW5jdGlvbiogc2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveCgpIHtcbiAgY29uc3Qgc2VuZFR5cGluZ0luZGljYXRvciA9IHlpZWxkIHNlbGVjdChzZW5kVHlwaW5nSW5kaWNhdG9yU2VsZWN0b3IpO1xuXG4gIGlmICghc2VuZFR5cGluZ0luZGljYXRvcikge1xuICAgIHlpZWxkIHRha2VTZW5kVHlwaW5nSW5kaWNhdG9yKHRydWUpO1xuICB9XG5cbiAgZm9yICg7Oykge1xuICAgIGxldCBsYXN0U2VuZCA9IDA7XG4gICAgY29uc3QgdGFzayA9IHlpZWxkIHRha2VMYXRlc3QoXG4gICAgICAoeyBwYXlsb2FkLCB0eXBlIH0pID0+XG4gICAgICAgICh0eXBlID09PSBTRVRfU0VORF9CT1ggJiYgcGF5bG9hZC50ZXh0KSB8fFxuICAgICAgICAvLyBTdG9wIHNlbmRpbmcgcGVuZGluZyB0eXBpbmcgaW5kaWNhdG9yIGlmIHRoZSB1c2VyIGhhcyBwb3N0ZWQgYW55dGhpbmcuXG4gICAgICAgIC8vIFdlIHNlbmQgdHlwaW5nIGluZGljYXRvciBpbiBhIGRlYm91bmNlIHdheSAodCA9IDAsIHQgPSAzMDAwLCB0ID0gNjAwMCkuXG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgdHlwZSwgYW5kIHRoZW4gcG9zdCB0aGUgYWN0aXZpdHkgYXQgdCA9IDE1MDAsIHdlIHN0aWxsIGhhdmUgYSBwZW5kaW5nIHR5cGluZyBpbmRpY2F0b3IgYXQgdCA9IDMwMDAuXG4gICAgICAgIC8vIFRoaXMgY29kZSBpcyB0byBjYW5jZWwgdGhlIHR5cGluZyBpbmRpY2F0b3IgYXQgdCA9IDMwMDAuXG4gICAgICAgICh0eXBlID09PSBQT1NUX0FDVElWSVRZICYmIHBheWxvYWQuYWN0aXZpdHkudHlwZSAhPT0gJ3R5cGluZycpLFxuICAgICAgZnVuY3Rpb24qKHsgdHlwZSB9KSB7XG4gICAgICAgIGlmICh0eXBlID09PSBTRVRfU0VORF9CT1gpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IFNFTkRfSU5URVJWQUwgLSBEYXRlLm5vdygpICsgbGFzdFNlbmQ7XG5cbiAgICAgICAgICBpZiAoaW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICB5aWVsZCBjYWxsKHNsZWVwLCBpbnRlcnZhbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeWllbGQgcHV0KGVtaXRUeXBpbmdJbmRpY2F0b3IoKSk7XG5cbiAgICAgICAgICBsYXN0U2VuZCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgeWllbGQgdGFrZVNlbmRUeXBpbmdJbmRpY2F0b3IoZmFsc2UpO1xuICAgIHlpZWxkIGNhbmNlbCh0YXNrKTtcbiAgICB5aWVsZCB0YWtlU2VuZFR5cGluZ0luZGljYXRvcih0cnVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveFNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHNlbmRUeXBpbmdJbmRpY2F0b3JPblNldFNlbmRCb3gpO1xufVxuIl19
