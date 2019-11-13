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

var _emitTypingIndicatorToPostActivitySaga = _interopRequireDefault(
  require('./sagas/emitTypingIndicatorToPostActivitySaga')
);

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

var _startDictateOnSpeakCompleteSaga = _interopRequireDefault(require('./sagas/startDictateOnSpeakCompleteSaga'));

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
          return (0, _effects.fork)(_emitTypingIndicatorToPostActivitySaga['default']);

        case 10:
          _context.next = 12;
          return (0, _effects.fork)(_incomingActivitySaga['default']);

        case 12:
          _context.next = 14;
          return (0, _effects.fork)(_markAllAsSpokenOnStopSpeakActivitySaga['default']);

        case 14:
          _context.next = 16;
          return (0, _effects.fork)(_postActivitySaga['default']);

        case 16:
          _context.next = 18;
          return (0, _effects.fork)(_sendEventToPostActivitySaga['default']);

        case 18:
          _context.next = 20;
          return (0, _effects.fork)(_sendFilesToPostActivitySaga['default']);

        case 20:
          _context.next = 22;
          return (0, _effects.fork)(_sendMessageBackToPostActivitySaga['default']);

        case 22:
          _context.next = 24;
          return (0, _effects.fork)(_sendMessageToPostActivitySaga['default']);

        case 24:
          _context.next = 26;
          return (0, _effects.fork)(_sendPostBackToPostActivitySaga['default']);

        case 26:
          _context.next = 28;
          return (0, _effects.fork)(_sendTypingIndicatorOnSetSendBoxSaga['default']);

        case 28:
          _context.next = 30;
          return (0, _effects.fork)(_speakActivityAndStartDictateOnIncomingActivityFromOthersSaga['default']);

        case 30:
          _context.next = 32;
          return (0, _effects.fork)(_startDictateOnSpeakCompleteSaga['default']);

        case 32:
          _context.next = 34;
          return (0, _effects.fork)(_startSpeakActivityOnPostActivitySaga['default']);

        case 34:
          _context.next = 36;
          return (0, _effects.fork)(_stopDictateOnCardActionSaga['default']);

        case 36:
          _context.next = 38;
          return (0, _effects.fork)(_stopSpeakingActivityOnInputSaga['default']);

        case 38:
          _context.next = 40;
          return (0, _effects.fork)(_submitSendBoxSaga['default']);

        case 40:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYWdhcy5qcyJdLCJuYW1lcyI6WyJzYWdhcyIsImNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSIsImNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhIiwiY29ubmVjdFNhZ2EiLCJkZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EiLCJlbWl0VHlwaW5nSW5kaWNhdG9yVG9Qb3N0QWN0aXZpdHlTYWdhIiwiaW5jb21pbmdBY3Rpdml0eVNhZ2EiLCJtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSIsInBvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kTWVzc2FnZUJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJzZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5U2FnYSIsInNlbmRUeXBpbmdJbmRpY2F0b3JPblNldFNlbmRCb3hTYWdhIiwic3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnNTYWdhIiwic3RhcnREaWN0YXRlT25TcGVha0NvbXBsZXRlU2FnYSIsInN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5U2FnYSIsInN0b3BEaWN0YXRlT25DYXJkQWN0aW9uU2FnYSIsInN0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EiLCJzdWJtaXRTZW5kQm94U2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs2QkFFeUJBLEs7O0FBQVYsU0FBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHYixpQkFBTSxtQkFBS0MsbURBQUwsQ0FBTjs7QUFIYTtBQUFBO0FBSWIsaUJBQU0sbUJBQUtDLHNDQUFMLENBQU47O0FBSmE7QUFBQTtBQUtiLGlCQUFNLG1CQUFLQyx1QkFBTCxDQUFOOztBQUxhO0FBQUE7QUFNYixpQkFBTSxtQkFBS0Msb0NBQUwsQ0FBTjs7QUFOYTtBQUFBO0FBT2IsaUJBQU0sbUJBQUtDLGlEQUFMLENBQU47O0FBUGE7QUFBQTtBQVFiLGlCQUFNLG1CQUFLQyxnQ0FBTCxDQUFOOztBQVJhO0FBQUE7QUFTYixpQkFBTSxtQkFBS0Msa0RBQUwsQ0FBTjs7QUFUYTtBQUFBO0FBVWIsaUJBQU0sbUJBQUtDLDRCQUFMLENBQU47O0FBVmE7QUFBQTtBQVdiLGlCQUFNLG1CQUFLQyx1Q0FBTCxDQUFOOztBQVhhO0FBQUE7QUFZYixpQkFBTSxtQkFBS0MsdUNBQUwsQ0FBTjs7QUFaYTtBQUFBO0FBYWIsaUJBQU0sbUJBQUtDLDZDQUFMLENBQU47O0FBYmE7QUFBQTtBQWNiLGlCQUFNLG1CQUFLQyx5Q0FBTCxDQUFOOztBQWRhO0FBQUE7QUFlYixpQkFBTSxtQkFBS0MsMENBQUwsQ0FBTjs7QUFmYTtBQUFBO0FBZ0JiLGlCQUFNLG1CQUFLQywrQ0FBTCxDQUFOOztBQWhCYTtBQUFBO0FBaUJiLGlCQUFNLG1CQUFLQyx3RUFBTCxDQUFOOztBQWpCYTtBQUFBO0FBa0JiLGlCQUFNLG1CQUFLQywyQ0FBTCxDQUFOOztBQWxCYTtBQUFBO0FBbUJiLGlCQUFNLG1CQUFLQyxnREFBTCxDQUFOOztBQW5CYTtBQUFBO0FBb0JiLGlCQUFNLG1CQUFLQyx1Q0FBTCxDQUFOOztBQXBCYTtBQUFBO0FBcUJiLGlCQUFNLG1CQUFLQywyQ0FBTCxDQUFOOztBQXJCYTtBQUFBO0FBc0JiLGlCQUFNLG1CQUFLQyw2QkFBTCxDQUFOOztBQXRCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBjb25uZWN0aW9uU3RhdHVzVXBkYXRlU2FnYSBmcm9tICcuL3NhZ2FzL2Nvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhJztcbmltcG9ydCBjb25uZWN0U2FnYSBmcm9tICcuL3NhZ2FzL2Nvbm5lY3RTYWdhJztcbmltcG9ydCBkZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EgZnJvbSAnLi9zYWdhcy9kZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EnO1xuaW1wb3J0IGVtaXRUeXBpbmdJbmRpY2F0b3JUb1Bvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9lbWl0VHlwaW5nSW5kaWNhdG9yVG9Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBpbmNvbWluZ0FjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL2luY29taW5nQWN0aXZpdHlTYWdhJztcbmltcG9ydCBtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL21hcmtBbGxBc1Nwb2tlbk9uU3RvcFNwZWFrQWN0aXZpdHlTYWdhJztcbmltcG9ydCBwb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvcG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc2VuZEV2ZW50VG9Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9zZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EnO1xuaW1wb3J0IHNlbmRNZXNzYWdlQmFja1RvUG9zdEFjdGl2aXR5U2FnYSBmcm9tICcuL3NhZ2FzL3NlbmRNZXNzYWdlQmFja1RvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZE1lc3NhZ2VUb1Bvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9zZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSc7XG5pbXBvcnQgc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhIGZyb20gJy4vc2FnYXMvc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhJztcbmltcG9ydCBzZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYSBmcm9tICcuL3NhZ2FzL3NlbmRUeXBpbmdJbmRpY2F0b3JPblNldFNlbmRCb3hTYWdhJztcbmltcG9ydCBzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EgZnJvbSAnLi9zYWdhcy9zcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EnO1xuaW1wb3J0IHN0YXJ0RGljdGF0ZU9uU3BlYWtDb21wbGV0ZVNhZ2EgZnJvbSAnLi9zYWdhcy9zdGFydERpY3RhdGVPblNwZWFrQ29tcGxldGVTYWdhJztcbmltcG9ydCBzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EgZnJvbSAnLi9zYWdhcy9zdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EnO1xuaW1wb3J0IHN0b3BEaWN0YXRlT25DYXJkQWN0aW9uU2FnYSBmcm9tICcuL3NhZ2FzL3N0b3BEaWN0YXRlT25DYXJkQWN0aW9uU2FnYSc7XG5pbXBvcnQgc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0U2FnYSBmcm9tICcuL3NhZ2FzL3N0b3BTcGVha2luZ0FjdGl2aXR5T25JbnB1dFNhZ2EnO1xuaW1wb3J0IHN1Ym1pdFNlbmRCb3hTYWdhIGZyb20gJy4vc2FnYXMvc3VibWl0U2VuZEJveFNhZ2EnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc2FnYXMoKSB7XG4gIC8vIFRPRE86IFtQMl0gU2luY2UgZm9yaygpIHNpbGVudGx5IGNhdGNoZXMgYWxsIGV4Y2VwdGlvbnMsIHdlIG5lZWQgdG8gZmluZCBhIHdheSB0byBjb25zb2xlLmVycm9yIHRoZW0gb3V0LlxuXG4gIHlpZWxkIGZvcmsoY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhjb25uZWN0aW9uU3RhdHVzVXBkYXRlU2FnYSk7XG4gIHlpZWxkIGZvcmsoY29ubmVjdFNhZ2EpO1xuICB5aWVsZCBmb3JrKGRldGVjdFNsb3dDb25uZWN0aW9uU2FnYSk7XG4gIHlpZWxkIGZvcmsoZW1pdFR5cGluZ0luZGljYXRvclRvUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoaW5jb21pbmdBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKG1hcmtBbGxBc1Nwb2tlbk9uU3RvcFNwZWFrQWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhwb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzZW5kRXZlbnRUb1Bvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHNlbmRGaWxlc1RvUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc2VuZE1lc3NhZ2VCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzZW5kTWVzc2FnZVRvUG9zdEFjdGl2aXR5U2FnYSk7XG4gIHlpZWxkIGZvcmsoc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhKTtcbiAgeWllbGQgZm9yayhzZW5kVHlwaW5nSW5kaWNhdG9yT25TZXRTZW5kQm94U2FnYSk7XG4gIHlpZWxkIGZvcmsoc3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnNTYWdhKTtcbiAgeWllbGQgZm9yayhzdGFydERpY3RhdGVPblNwZWFrQ29tcGxldGVTYWdhKTtcbiAgeWllbGQgZm9yayhzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EpO1xuICB5aWVsZCBmb3JrKHN0b3BEaWN0YXRlT25DYXJkQWN0aW9uU2FnYSk7XG4gIHlpZWxkIGZvcmsoc3RvcFNwZWFraW5nQWN0aXZpdHlPbklucHV0U2FnYSk7XG4gIHlpZWxkIGZvcmsoc3VibWl0U2VuZEJveFNhZ2EpO1xufVxuIl19
