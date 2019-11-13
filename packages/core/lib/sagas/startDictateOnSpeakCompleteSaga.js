'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = startDictateOnSpeakCompleteSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _markActivity = require('../../lib/actions/markActivity');

var _activities = require('../selectors/activities');

var _setDictateState = require('../../lib/actions/setDictateState');

var _DictateState = require('../constants/DictateState');

var _dictateState = _interopRequireDefault(require('../selectors/dictateState'));

var _speakingActivity = _interopRequireDefault(require('../definitions/speakingActivity'));

var _startDictate = _interopRequireDefault(require('../actions/startDictate'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(startDictateOnSpeakComplete),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(startDictateOnSpeakCompleteSaga);

function startDictateOnSpeakComplete() {
  var speakingActivities, dictateState;
  return _regenerator['default'].wrap(function startDictateOnSpeakComplete$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)((0, _activities.of)(_speakingActivity['default']));

        case 2:
          speakingActivities = _context.sent;
          _context.next = 5;
          return (0, _effects.select)(_dictateState['default']);

        case 5:
          dictateState = _context.sent;

          if (!(dictateState === _DictateState.WILL_START && !speakingActivities.length)) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return (0, _effects.put)((0, _startDictate['default'])());

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
} // TODO: [P4] We should turn this into a reducer instead

function startDictateOnSpeakCompleteSaga() {
  return _regenerator['default'].wrap(function startDictateOnSpeakCompleteSaga$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref) {
            var type = _ref.type;
            return type === _markActivity.MARK_ACTIVITY || type === _setDictateState.SET_DICTATE_STATE;
          }, startDictateOnSpeakComplete);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdGFydERpY3RhdGVPblNwZWFrQ29tcGxldGVTYWdhLmpzIl0sIm5hbWVzIjpbInN0YXJ0RGljdGF0ZU9uU3BlYWtDb21wbGV0ZSIsInN0YXJ0RGljdGF0ZU9uU3BlYWtDb21wbGV0ZVNhZ2EiLCJzcGVha2luZ0FjdGl2aXR5Iiwic3BlYWtpbmdBY3Rpdml0aWVzIiwiZGljdGF0ZVN0YXRlU2VsZWN0b3IiLCJkaWN0YXRlU3RhdGUiLCJXSUxMX1NUQVJUIiwibGVuZ3RoIiwidHlwZSIsIk1BUktfQUNUSVZJVFkiLCJTRVRfRElDVEFURV9TVEFURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsMkI7Ozs2QkFVZUMsK0I7O0FBVnpCLFNBQVVELDJCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzZCLGlCQUFNLHFCQUFPLG9CQUFhRSw0QkFBYixDQUFQLENBQU47O0FBRDdCO0FBQ1FDLFVBQUFBLGtCQURSO0FBQUE7QUFFdUIsaUJBQU0scUJBQU9DLHdCQUFQLENBQU47O0FBRnZCO0FBRVFDLFVBQUFBLFlBRlI7O0FBQUEsZ0JBSU1BLFlBQVksS0FBS0Msd0JBQWpCLElBQStCLENBQUNILGtCQUFrQixDQUFDSSxNQUp6RDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUtJLGlCQUFNLGtCQUFJLCtCQUFKLENBQU47O0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQVNBOzs7QUFDZSxTQUFVTiwrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSx3QkFBVTtBQUFBLGdCQUFHTyxJQUFILFFBQUdBLElBQUg7QUFBQSxtQkFBY0EsSUFBSSxLQUFLQywyQkFBVCxJQUEwQkQsSUFBSSxLQUFLRSxrQ0FBakQ7QUFBQSxXQUFWLEVBQThFViwyQkFBOUUsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgc2VsZWN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBNQVJLX0FDVElWSVRZIH0gZnJvbSAnLi4vLi4vbGliL2FjdGlvbnMvbWFya0FjdGl2aXR5JztcbmltcG9ydCB7IG9mIGFzIGFjdGl2aXRpZXNPZiB9IGZyb20gJy4uL3NlbGVjdG9ycy9hY3Rpdml0aWVzJztcbmltcG9ydCB7IFNFVF9ESUNUQVRFX1NUQVRFIH0gZnJvbSAnLi4vLi4vbGliL2FjdGlvbnMvc2V0RGljdGF0ZVN0YXRlJztcbmltcG9ydCB7IFdJTExfU1RBUlQgfSBmcm9tICcuLi9jb25zdGFudHMvRGljdGF0ZVN0YXRlJztcbmltcG9ydCBkaWN0YXRlU3RhdGVTZWxlY3RvciBmcm9tICcuLi9zZWxlY3RvcnMvZGljdGF0ZVN0YXRlJztcbmltcG9ydCBzcGVha2luZ0FjdGl2aXR5IGZyb20gJy4uL2RlZmluaXRpb25zL3NwZWFraW5nQWN0aXZpdHknO1xuaW1wb3J0IHN0YXJ0RGljdGF0ZSBmcm9tICcuLi9hY3Rpb25zL3N0YXJ0RGljdGF0ZSc7XG5cbmZ1bmN0aW9uKiBzdGFydERpY3RhdGVPblNwZWFrQ29tcGxldGUoKSB7XG4gIGNvbnN0IHNwZWFraW5nQWN0aXZpdGllcyA9IHlpZWxkIHNlbGVjdChhY3Rpdml0aWVzT2Yoc3BlYWtpbmdBY3Rpdml0eSkpO1xuICBjb25zdCBkaWN0YXRlU3RhdGUgPSB5aWVsZCBzZWxlY3QoZGljdGF0ZVN0YXRlU2VsZWN0b3IpO1xuXG4gIGlmIChkaWN0YXRlU3RhdGUgPT09IFdJTExfU1RBUlQgJiYgIXNwZWFraW5nQWN0aXZpdGllcy5sZW5ndGgpIHtcbiAgICB5aWVsZCBwdXQoc3RhcnREaWN0YXRlKCkpO1xuICB9XG59XG5cbi8vIFRPRE86IFtQNF0gV2Ugc2hvdWxkIHR1cm4gdGhpcyBpbnRvIGEgcmVkdWNlciBpbnN0ZWFkXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RhcnREaWN0YXRlT25TcGVha0NvbXBsZXRlU2FnYSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gTUFSS19BQ1RJVklUWSB8fCB0eXBlID09PSBTRVRfRElDVEFURV9TVEFURSwgc3RhcnREaWN0YXRlT25TcGVha0NvbXBsZXRlKTtcbn1cbiJdfQ==
