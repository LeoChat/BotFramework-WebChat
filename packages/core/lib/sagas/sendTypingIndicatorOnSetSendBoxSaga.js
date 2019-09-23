'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

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

var _postActivity = _interopRequireWildcard(require('../actions/postActivity'));

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
                                  return (0, _effects.put)(
                                    (0, _postActivity['default'])({
                                      type: 'typing'
                                    })
                                  );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYS5qcyJdLCJuYW1lcyI6WyJzZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94Iiwic2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveFNhZ2EiLCJTRU5EX0lOVEVSVkFMIiwidGFrZVNlbmRUeXBpbmdJbmRpY2F0b3IiLCJ2YWx1ZSIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiIsInNlbmRUeXBpbmdJbmRpY2F0b3IiLCJTRVRfU0VORF9UWVBJTkciLCJzZW5kVHlwaW5nIiwic2VuZFR5cGluZ0luZGljYXRvclNlbGVjdG9yIiwibGFzdFNlbmQiLCJTRVRfU0VORF9CT1giLCJ0ZXh0IiwiUE9TVF9BQ1RJVklUWSIsImFjdGl2aXR5IiwiaW50ZXJ2YWwiLCJEYXRlIiwibm93Iiwic2xlZXAiLCJ0YXNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBYVVBLCtCOzs7NkJBc0NlQyxtQzs7QUFqRHpCLElBQU1DLGFBQWEsR0FBRyxJQUF0Qjs7QUFFQSxTQUFTQyx1QkFBVCxDQUFpQ0MsS0FBakMsRUFBd0M7QUFDdEMsU0FBTyxtQkFDTDtBQUFBLFFBQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFFBQVlDLElBQVosUUFBWUEsSUFBWjtBQUFBLFdBQ0dBLElBQUksS0FBS0MsaURBQVQsSUFBc0MsQ0FBQ0YsT0FBTyxDQUFDRyxtQkFBVCxLQUFpQyxDQUFDSixLQUF6RSxJQUNBO0FBQ0NFLElBQUFBLElBQUksS0FBS0csOEJBQVQsSUFBNEIsQ0FBQ0osT0FBTyxDQUFDSyxVQUFULEtBQXdCLENBQUNOLEtBSHhEO0FBQUEsR0FESyxDQUFQO0FBTUQ7O0FBRUQsU0FBVUosK0JBQVY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhCLGlCQUFNLHFCQUFPVywrQkFBUCxDQUFOOztBQUQ5QjtBQUNRSCxVQUFBQSxtQkFEUjs7QUFBQSxjQUdPQSxtQkFIUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUlJLGlCQUFNTCx1QkFBdUIsQ0FBQyxJQUFELENBQTdCOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFRUyxvQkFBQUEsUUFSUixHQVFtQixDQVJuQjtBQUFBO0FBU2lCLDJCQUFNLHlCQUNqQjtBQUFBLDBCQUFHUCxPQUFILFNBQUdBLE9BQUg7QUFBQSwwQkFBWUMsSUFBWixTQUFZQSxJQUFaO0FBQUEsNkJBQ0dBLElBQUksS0FBS08sd0JBQVQsSUFBeUJSLE9BQU8sQ0FBQ1MsSUFBbEMsSUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDUixzQkFBQUEsSUFBSSxLQUFLUywyQkFBVCxJQUEwQlYsT0FBTyxDQUFDVyxRQUFSLENBQWlCVixJQUFqQixLQUEwQixRQU52RDtBQUFBLHFCQURpQjtBQUFBO0FBQUEsaURBUWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFZQSw4QkFBQUEsSUFBWixTQUFZQSxJQUFaOztBQUFBLG9DQUNNQSxJQUFJLEtBQUtPLHdCQURmO0FBQUE7QUFBQTtBQUFBOztBQUVVSSw4QkFBQUEsUUFGVixHQUVxQmYsYUFBYSxHQUFHZ0IsSUFBSSxDQUFDQyxHQUFMLEVBQWhCLEdBQTZCUCxRQUZsRDs7QUFBQSxvQ0FJUUssUUFBUSxHQUFHLENBSm5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBS00scUNBQU0sbUJBQUtHLGlCQUFMLEVBQVlILFFBQVosQ0FBTjs7QUFMTjtBQUFBO0FBUUkscUNBQU0sa0JBQUksOEJBQWE7QUFBRVgsZ0NBQUFBLElBQUksRUFBRTtBQUFSLCtCQUFiLENBQUosQ0FBTjs7QUFSSjtBQVVJTSw4QkFBQUEsUUFBUSxHQUFHTSxJQUFJLENBQUNDLEdBQUwsRUFBWDs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSaUIsRUFBTjs7QUFUakI7QUFTVUUsb0JBQUFBLElBVFY7QUFBQTtBQWdDSSwyQkFBTWxCLHVCQUF1QixDQUFDLEtBQUQsQ0FBN0I7O0FBaENKO0FBQUE7QUFpQ0ksMkJBQU0scUJBQU9rQixJQUFQLENBQU47O0FBakNKO0FBQUE7QUFrQ0ksMkJBQU1sQix1QkFBdUIsQ0FBQyxJQUFELENBQTdCOztBQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQ2UsU0FBVUYsbUNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELCtCQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZSB3aWxsIHJldmlzaXQgdGhpcyBsb2dpYyBpbiAjMjE1NyBhbmQgc2hvdWxkIHJlbW92ZSB0aGUgZm9sbG93aW5nIGVzbGludCBpZ25vcmVcbi8qIGVzbGludCByZXF1aXJlLWF0b21pYy11cGRhdGVzOiBcIm9mZlwiICovXG5cbmltcG9ydCB7IGNhbGwsIGNhbmNlbCwgcHV0LCBzZWxlY3QsIHRha2UsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRVRfU0VORF9CT1ggfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRCb3gnO1xuaW1wb3J0IHsgU0VUX1NFTkRfVFlQSU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRTZW5kVHlwaW5nJztcbmltcG9ydCB7IFNFVF9TRU5EX1RZUElOR19JTkRJQ0FUT1IgfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRUeXBpbmdJbmRpY2F0b3InO1xuaW1wb3J0IHBvc3RBY3Rpdml0eSwgeyBQT1NUX0FDVElWSVRZIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHNlbmRUeXBpbmdJbmRpY2F0b3JTZWxlY3RvciBmcm9tICcuLi9zZWxlY3RvcnMvc2VuZFR5cGluZ0luZGljYXRvcic7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmNvbnN0IFNFTkRfSU5URVJWQUwgPSAzMDAwO1xuXG5mdW5jdGlvbiB0YWtlU2VuZFR5cGluZ0luZGljYXRvcih2YWx1ZSkge1xuICByZXR1cm4gdGFrZShcbiAgICAoeyBwYXlsb2FkLCB0eXBlIH0pID0+XG4gICAgICAodHlwZSA9PT0gU0VUX1NFTkRfVFlQSU5HX0lORElDQVRPUiAmJiAhcGF5bG9hZC5zZW5kVHlwaW5nSW5kaWNhdG9yID09PSAhdmFsdWUpIHx8XG4gICAgICAvLyBUT0RPOiBbUDNdIFRha2UgdGhpcyBkZXByZWNhdGlvbiBjb2RlIG91dCB3aGVuIHJlbGVhc2luZyBvbiBvciBhZnRlciBKYW51YXJ5IDEzIDIwMjBcbiAgICAgICh0eXBlID09PSBTRVRfU0VORF9UWVBJTkcgJiYgIXBheWxvYWQuc2VuZFR5cGluZyA9PT0gIXZhbHVlKVxuICApO1xufVxuXG5mdW5jdGlvbiogc2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveCgpIHtcbiAgY29uc3Qgc2VuZFR5cGluZ0luZGljYXRvciA9IHlpZWxkIHNlbGVjdChzZW5kVHlwaW5nSW5kaWNhdG9yU2VsZWN0b3IpO1xuXG4gIGlmICghc2VuZFR5cGluZ0luZGljYXRvcikge1xuICAgIHlpZWxkIHRha2VTZW5kVHlwaW5nSW5kaWNhdG9yKHRydWUpO1xuICB9XG5cbiAgZm9yICg7Oykge1xuICAgIGxldCBsYXN0U2VuZCA9IDA7XG4gICAgY29uc3QgdGFzayA9IHlpZWxkIHRha2VMYXRlc3QoXG4gICAgICAoeyBwYXlsb2FkLCB0eXBlIH0pID0+XG4gICAgICAgICh0eXBlID09PSBTRVRfU0VORF9CT1ggJiYgcGF5bG9hZC50ZXh0KSB8fFxuICAgICAgICAvLyBTdG9wIHNlbmRpbmcgcGVuZGluZyB0eXBpbmcgaW5kaWNhdG9yIGlmIHRoZSB1c2VyIGhhcyBwb3N0ZWQgYW55dGhpbmcuXG4gICAgICAgIC8vIFdlIHNlbmQgdHlwaW5nIGluZGljYXRvciBpbiBhIGRlYm91bmNlIHdheSAodCA9IDAsIHQgPSAzMDAwLCB0ID0gNjAwMCkuXG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgdHlwZSwgYW5kIHRoZW4gcG9zdCB0aGUgYWN0aXZpdHkgYXQgdCA9IDE1MDAsIHdlIHN0aWxsIGhhdmUgYSBwZW5kaW5nIHR5cGluZyBpbmRpY2F0b3IgYXQgdCA9IDMwMDAuXG4gICAgICAgIC8vIFRoaXMgY29kZSBpcyB0byBjYW5jZWwgdGhlIHR5cGluZyBpbmRpY2F0b3IgYXQgdCA9IDMwMDAuXG4gICAgICAgICh0eXBlID09PSBQT1NUX0FDVElWSVRZICYmIHBheWxvYWQuYWN0aXZpdHkudHlwZSAhPT0gJ3R5cGluZycpLFxuICAgICAgZnVuY3Rpb24qKHsgdHlwZSB9KSB7XG4gICAgICAgIGlmICh0eXBlID09PSBTRVRfU0VORF9CT1gpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IFNFTkRfSU5URVJWQUwgLSBEYXRlLm5vdygpICsgbGFzdFNlbmQ7XG5cbiAgICAgICAgICBpZiAoaW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICB5aWVsZCBjYWxsKHNsZWVwLCBpbnRlcnZhbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeWllbGQgcHV0KHBvc3RBY3Rpdml0eSh7IHR5cGU6ICd0eXBpbmcnIH0pKTtcblxuICAgICAgICAgIGxhc3RTZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICB5aWVsZCB0YWtlU2VuZFR5cGluZ0luZGljYXRvcihmYWxzZSk7XG4gICAgeWllbGQgY2FuY2VsKHRhc2spO1xuICAgIHlpZWxkIHRha2VTZW5kVHlwaW5nSW5kaWNhdG9yKHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveCk7XG59XG4iXX0=
