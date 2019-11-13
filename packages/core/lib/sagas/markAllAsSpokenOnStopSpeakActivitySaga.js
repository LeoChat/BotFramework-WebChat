'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = markAllAsSpokenOnStopSpeakActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _activities = require('../selectors/activities');

var _stopSpeakingActivity = require('../actions/stopSpeakingActivity');

var _markActivity = _interopRequireDefault(require('../actions/markActivity'));

var _speakingActivity = _interopRequireDefault(require('../definitions/speakingActivity'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(markAllAsSpoken),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(markAllAsSpokenOnStopSpeakActivitySaga);

function markAllAsSpoken() {
  var speakingActivities, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, activity;

  return _regenerator['default'].wrap(
    function markAllAsSpoken$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return (0, _effects.select)((0, _activities.of)(_speakingActivity['default']));

          case 2:
            speakingActivities = _context.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 6;
            _iterator = speakingActivities[Symbol.iterator]();

          case 8:
            if ((_iteratorNormalCompletion = (_step = _iterator.next()).done)) {
              _context.next = 15;
              break;
            }

            activity = _step.value;
            _context.next = 12;
            return (0, _effects.put)((0, _markActivity['default'])(activity, 'speak', false));

          case 12:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context['catch'](6);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 21:
            _context.prev = 21;
            _context.prev = 22;

            if (!_iteratorNormalCompletion && _iterator['return'] != null) {
              _iterator['return']();
            }

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(21);

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    },
    _marked,
    null,
    [[6, 17, 21, 29], [22, , 24, 28]]
  );
} // TODO: [P4] We should turn this into a reducer instead

function markAllAsSpokenOnStopSpeakActivitySaga() {
  return _regenerator['default'].wrap(function markAllAsSpokenOnStopSpeakActivitySaga$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(_stopSpeakingActivity.STOP_SPEAKING_ACTIVITY, markAllAsSpoken);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9tYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYS5qcyJdLCJuYW1lcyI6WyJtYXJrQWxsQXNTcG9rZW4iLCJtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSIsInNwZWFraW5nQWN0aXZpdHkiLCJzcGVha2luZ0FjdGl2aXRpZXMiLCJhY3Rpdml0eSIsIlNUT1BfU1BFQUtJTkdfQUNUSVZJVFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLGU7Ozs2QkFTZUMsc0M7O0FBVHpCLFNBQVVELGVBQVY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzZCLGlCQUFNLHFCQUFPLG9CQUFhRSw0QkFBYixDQUFQLENBQU47O0FBRDdCO0FBQ1FDLFVBQUFBLGtCQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFHeUJBLGtCQUh6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdhQyxVQUFBQSxRQUhiO0FBQUE7QUFJSSxpQkFBTSxrQkFBSSw4QkFBYUEsUUFBYixFQUF1QixPQUF2QixFQUFnQyxLQUFoQyxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBUUE7OztBQUNlLFNBQVVILHNDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLHdCQUFVSSw0Q0FBVixFQUFrQ0wsZUFBbEMsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgc2VsZWN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBvZiBhcyBhY3Rpdml0aWVzT2YgfSBmcm9tICcuLi9zZWxlY3RvcnMvYWN0aXZpdGllcyc7XG5pbXBvcnQgeyBTVE9QX1NQRUFLSU5HX0FDVElWSVRZIH0gZnJvbSAnLi4vYWN0aW9ucy9zdG9wU3BlYWtpbmdBY3Rpdml0eSc7XG5pbXBvcnQgbWFya0FjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvbWFya0FjdGl2aXR5JztcbmltcG9ydCBzcGVha2luZ0FjdGl2aXR5IGZyb20gJy4uL2RlZmluaXRpb25zL3NwZWFraW5nQWN0aXZpdHknO1xuXG5mdW5jdGlvbiogbWFya0FsbEFzU3Bva2VuKCkge1xuICBjb25zdCBzcGVha2luZ0FjdGl2aXRpZXMgPSB5aWVsZCBzZWxlY3QoYWN0aXZpdGllc09mKHNwZWFraW5nQWN0aXZpdHkpKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHNwZWFraW5nQWN0aXZpdGllcykge1xuICAgIHlpZWxkIHB1dChtYXJrQWN0aXZpdHkoYWN0aXZpdHksICdzcGVhaycsIGZhbHNlKSk7XG4gIH1cbn1cblxuLy8gVE9ETzogW1A0XSBXZSBzaG91bGQgdHVybiB0aGlzIGludG8gYSByZWR1Y2VyIGluc3RlYWRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNUT1BfU1BFQUtJTkdfQUNUSVZJVFksIG1hcmtBbGxBc1Nwb2tlbik7XG59XG4iXX0=
