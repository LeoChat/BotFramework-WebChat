'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sagas;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _clearSuggestedActionsOnPostActivitySaga = _interopRequireDefault(
  require('./sagas/clearSuggestedActionsOnPostActivitySaga')
);

var _connectionStatusUpdateSaga = _interopRequireDefault(require('./sagas/connectionStatusUpdateSaga'));

var _connectSaga = _interopRequireDefault(require('./sagas/connectSaga'));

var _detectSlowConnectionSaga = _interopRequireDefault(require('./sagas/detectSlowConnectionSaga'));

var _incomingActivitySaga = _interopRequireDefault(require('./sagas/incomingActivitySaga'));

var _markAllAsSpokenOnStopSpeakActivitySaga = _interopRequireDefault(
  require('./sagas/markAllAsSpokenOnStopSpeakActivitySaga')
);

var _postActivitySaga = _interopRequireDefault(require('./sagas/postActivitySaga'));

var _sendEventToPostActivitySaga = _interopRequireDefault(require('./sagas/sendEventToPostActivitySaga'));

var _sendFilesToPostActivitySaga = _interopRequireDefault(require('./sagas/sendFilesToPostActivitySaga'));

var _sendMessageBackToPostActivitySaga = _interopRequireDefault(require('./sagas/sendMessageBackToPostActivitySaga'));

var _sendMessageToPostActivitySaga = _interopRequireDefault(require('./sagas/sendMessageToPostActivitySaga'));

var _sendPostBackToPostActivitySaga = _interopRequireDefault(require('./sagas/sendPostBackToPostActivitySaga'));

var _sendTypingIndicatorOnSetSendBoxSaga = _interopRequireDefault(
  require('./sagas/sendTypingIndicatorOnSetSendBoxSaga')
);

var _speakActivityAndStartDictateOnIncomingActivityFromOthersSaga = _interopRequireDefault(
  require('./sagas/speakActivityAndStartDictateOnIncomingActivityFromOthersSaga')
);

var _startSpeakActivityOnPostActivitySaga = _interopRequireDefault(
  require('./sagas/startSpeakActivityOnPostActivitySaga')
);

var _stopDictateOnCardActionSaga = _interopRequireDefault(require('./sagas/stopDictateOnCardActionSaga'));

var _stopSpeakingActivityOnInputSaga = _interopRequireDefault(require('./sagas/stopSpeakingActivityOnInputSaga'));

var _submitSendBoxSaga = _interopRequireDefault(require('./sagas/submitSendBoxSaga'));

var _marked =
  /*#__PURE__*/
  _regenerator['default'].mark(sagas);

function sagas() {
  return _regenerator['default'].wrap(function sagas$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return (0, _effects.fork)(_clearSuggestedActionsOnPostActivitySaga['default']);

        case 2:
          _context.next = 4;
          return (0, _effects.fork)(_connectionStatusUpdateSaga['default']);

        case 4:
          _context.next = 6;
          return (0, _effects.fork)(_connectSaga['default']);

        case 6:
          _context.next = 8;
          return (0, _effects.fork)(_detectSlowConnectionSaga['default']);

        case 8:
          _context.next = 10;
          return (0, _effects.fork)(_incomingActivitySaga['default']);

        case 10:
          _context.next = 12;
          return (0, _effects.fork)(_markAllAsSpokenOnStopSpeakActivitySaga['default']);

        case 12:
          _context.next = 14;
          return (0, _effects.fork)(_postActivitySaga['default']);

        case 14:
          _context.next = 16;
          return (0, _effects.fork)(_sendEventToPostActivitySaga['default']);

        case 16:
          _context.next = 18;
          return (0, _effects.fork)(_sendFilesToPostActivitySaga['default']);

        case 18:
          _context.next = 20;
          return (0, _effects.fork)(_sendMessageBackToPostActivitySaga['default']);

        case 20:
          _context.next = 22;
          return (0, _effects.fork)(_sendMessageToPostActivitySaga['default']);

        case 22:
          _context.next = 24;
          return (0, _effects.fork)(_sendPostBackToPostActivitySaga['default']);

        case 24:
          _context.next = 26;
          return (0, _effects.fork)(_sendTypingIndicatorOnSetSendBoxSaga['default']);

        case 26:
          _context.next = 28;
          return (0, _effects.fork)(_speakActivityAndStartDictateOnIncomingActivityFromOthersSaga['default']);

        case 28:
          _context.next = 30;
          return (0, _effects.fork)(_startSpeakActivityOnPostActivitySaga['default']);

        case 30:
          _context.next = 32;
          return (0, _effects.fork)(_stopDictateOnCardActionSaga['default']);

        case 32:
          _context.next = 34;
          return (0, _effects.fork)(_stopSpeakingActivityOnInputSaga['default']);

        case 34:
          _context.next = 36;
          return (0, _effects.fork)(_submitSendBoxSaga['default']);

        case 36:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYWdhcy5qcyJdLCJuYW1lcyI6WyJzYWdhcyIsImNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSIsImNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhIiwiY29ubmVjdFNhZ2EiLCJkZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EiLCJpbmNvbWluZ0FjdGl2aXR5U2FnYSIsIm1hcmtBbGxBc1Nwb2tlbk9uU3RvcFNwZWFrQWN0aXZpdHlTYWdhIiwicG9zdEFjdGl2aXR5U2FnYSIsInNlbmRFdmVudFRvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRGaWxlc1RvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRNZXNzYWdlQmFja1RvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHlTYWdhIiwic2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhIiwic2VuZFR5cGluZ0luZGljYXRvck9uU2V0U2VuZEJveFNhZ2EiLCJzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EiLCJzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EiLCJzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EiLCJzdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXRTYWdhIiwic3VibWl0U2VuZEJveFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRXlCQSxLOztBQUFWLFNBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2IsaUJBQU0sbUJBQUtDLG1EQUFMLENBQU47O0FBSGE7QUFBQTtBQUliLGlCQUFNLG1CQUFLQyxzQ0FBTCxDQUFOOztBQUphO0FBQUE7QUFLYixpQkFBTSxtQkFBS0MsdUJBQUwsQ0FBTjs7QUFMYTtBQUFBO0FBTWIsaUJBQU0sbUJBQUtDLG9DQUFMLENBQU47O0FBTmE7QUFBQTtBQU9iLGlCQUFNLG1CQUFLQyxnQ0FBTCxDQUFOOztBQVBhO0FBQUE7QUFRYixpQkFBTSxtQkFBS0Msa0RBQUwsQ0FBTjs7QUFSYTtBQUFBO0FBU2IsaUJBQU0sbUJBQUtDLDRCQUFMLENBQU47O0FBVGE7QUFBQTtBQVViLGlCQUFNLG1CQUFLQyx1Q0FBTCxDQUFOOztBQVZhO0FBQUE7QUFXYixpQkFBTSxtQkFBS0MsdUNBQUwsQ0FBTjs7QUFYYTtBQUFBO0FBWWIsaUJBQU0sbUJBQUtDLDZDQUFMLENBQU47O0FBWmE7QUFBQTtBQWFiLGlCQUFNLG1CQUFLQyx5Q0FBTCxDQUFOOztBQWJhO0FBQUE7QUFjYixpQkFBTSxtQkFBS0MsMENBQUwsQ0FBTjs7QUFkYTtBQUFBO0FBZWIsaUJBQU0sbUJBQUtDLCtDQUFMLENBQU47O0FBZmE7QUFBQTtBQWdCYixpQkFBTSxtQkFBS0Msd0VBQUwsQ0FBTjs7QUFoQmE7QUFBQTtBQWlCYixpQkFBTSxtQkFBS0MsZ0RBQUwsQ0FBTjs7QUFqQmE7QUFBQTtBQWtCYixpQkFBTSxtQkFBS0MsdUNBQUwsQ0FBTjs7QUFsQmE7QUFBQTtBQW1CYixpQkFBTSxtQkFBS0MsMkNBQUwsQ0FBTjs7QUFuQmE7QUFBQTtBQW9CYixpQkFBTSxtQkFBS0MsNkJBQUwsQ0FBTjs7QUFwQmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IGNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL2NsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgY29ubmVjdGlvblN0YXR1c1VwZGF0ZVNhZ2EgZnJvbSAnLi9zYWdhcy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlU2FnYSc7XG5pbXBvcnQgY29ubmVjdFNhZ2EgZnJvbSAnLi9zYWdhcy9jb25uZWN0U2FnYSc7XG5pbXBvcnQgZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhIGZyb20gJy4vc2FnYXMvZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhJztcbmltcG9ydCBpbmNvbWluZ0FjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL2luY29taW5nQWN0aXZpdHlTYWdhJztcbmltcG9ydCBtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL21hcmtBbGxBc1Nwb2tlbk9uU3RvcFNwZWFrQWN0aXZpdHlTYWdhJztcbmltcG9ydCBwb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvcG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9zZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EnO1xuaW1wb3J0IHNlbmRNZXNzYWdlQmFja1RvUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL3NlbmRNZXNzYWdlQmFja1RvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZE1lc3NhZ2VUb1Bvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9zZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBzZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYSBmcm9tICcuL3NhZ2FzL3NlbmRUeXBpbmdJbmRpY2F0b3JPblNldFNlbmRCb3hTYWdhJztcbmltcG9ydCBzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EgZnJvbSAnLi9zYWdhcy9zcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EnO1xuaW1wb3J0IHN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL3N0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc3RvcERpY3RhdGVPbkNhcmRBY3Rpb25TYWdhIGZyb20gJy4vc2FnYXMvc3RvcERpY3RhdGVPbkNhcmRBY3Rpb25TYWdhJztcbmltcG9ydCBzdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXRTYWdhIGZyb20gJy4vc2FnYXMvc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0U2FnYSc7XG5pbXBvcnQgc3VibWl0U2VuZEJveFNhZ2EgZnJvbSAnLi9zYWdhcy9zdWJtaXRTZW5kQm94U2FnYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzYWdhcygpIHtcbiAgLy8gVE9ETzogW1AyXSBTaW5jZSBmb3JrKCkgc2lsZW50bHkgY2F0Y2hlcyBhbGwgZXhjZXB0aW9ucywgd2UgbmVlZCB0byBmaW5kIGEgd2F5IHRvIGNvbnNvbGUuZXJyb3IgdGhlbSBvdXQuXG5cbiAgeWllbGQgZm9yayhjbGVhclN1Z2dlc3RlZEFjdGlvbnNPblBvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKGNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhKTtcbiAgeWllbGQgZm9yayhjb25uZWN0U2FnYSk7XG4gIHlpZWxkIGZvcmsoZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhKTtcbiAgeWllbGQgZm9yayhpbmNvbWluZ0FjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsobWFya0FsbEFzU3Bva2VuT25TdG9wU3BlYWtBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHBvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHNlbmRFdmVudFRvUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHNlbmRNZXNzYWdlVG9Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHNlbmRUeXBpbmdJbmRpY2F0b3JPblNldFNlbmRCb3hTYWdhKTtcbiAgeWllbGQgZm9yayhzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EpO1xuICB5aWVsZCBmb3JrKHN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc3RvcERpY3RhdGVPbkNhcmRBY3Rpb25TYWdhKTtcbiAgeWllbGQgZm9yayhzdG9wU3BlYWtpbmdBY3Rpdml0eU9uSW5wdXRTYWdhKTtcbiAgeWllbGQgZm9yayhzdWJtaXRTZW5kQm94U2FnYSk7XG59XG4iXX0=
