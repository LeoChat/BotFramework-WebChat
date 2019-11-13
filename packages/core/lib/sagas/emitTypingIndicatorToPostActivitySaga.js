'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = emitTypingActivityToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _emitTypingIndicator = require('../actions/emitTypingIndicator');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postTypingActivity),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(emitTypingActivityToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(emitTypingActivityToPostActivitySaga);

function postTypingActivity() {
  return _regenerator['default'].wrap(function postTypingActivity$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              type: 'typing'
            })
          );

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function emitTypingActivityToPostActivity() {
  return _regenerator['default'].wrap(function emitTypingActivityToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref) {
            var type = _ref.type;
            return type === _emitTypingIndicator.EMIT_TYPING_INDICATOR;
          }, postTypingActivity);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function emitTypingActivityToPostActivitySaga() {
  return _regenerator['default'].wrap(function emitTypingActivityToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(emitTypingActivityToPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9lbWl0VHlwaW5nSW5kaWNhdG9yVG9Qb3N0QWN0aXZpdHlTYWdhLmpzIl0sIm5hbWVzIjpbInBvc3RUeXBpbmdBY3Rpdml0eSIsImVtaXRUeXBpbmdBY3Rpdml0eVRvUG9zdEFjdGl2aXR5IiwiZW1pdFR5cGluZ0FjdGl2aXR5VG9Qb3N0QWN0aXZpdHlTYWdhIiwidHlwZSIsIkVNSVRfVFlQSU5HX0lORElDQVRPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsa0I7Ozs2QkFRQUMsZ0M7Ozs2QkFJZUMsb0M7O0FBWnpCLFNBQVVGLGtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLGtCQUNKLDhCQUFhO0FBQ1hHLFlBQUFBLElBQUksRUFBRTtBQURLLFdBQWIsQ0FESSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFNBQVVGLGdDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVO0FBQUEsZ0JBQUdFLElBQUgsUUFBR0EsSUFBSDtBQUFBLG1CQUFjQSxJQUFJLEtBQUtDLDBDQUF2QjtBQUFBLFdBQVYsRUFBd0RKLGtCQUF4RCxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLG9DQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCxnQ0FBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBFTUlUX1RZUElOR19JTkRJQ0FUT1IgfSBmcm9tICcuLi9hY3Rpb25zL2VtaXRUeXBpbmdJbmRpY2F0b3InO1xuaW1wb3J0IHBvc3RBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHBvc3RUeXBpbmdBY3Rpdml0eSgpIHtcbiAgeWllbGQgcHV0KFxuICAgIHBvc3RBY3Rpdml0eSh7XG4gICAgICB0eXBlOiAndHlwaW5nJ1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBlbWl0VHlwaW5nQWN0aXZpdHlUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gRU1JVF9UWVBJTkdfSU5ESUNBVE9SLCBwb3N0VHlwaW5nQWN0aXZpdHkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZW1pdFR5cGluZ0FjdGl2aXR5VG9Qb3N0QWN0aXZpdHlTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChlbWl0VHlwaW5nQWN0aXZpdHlUb1Bvc3RBY3Rpdml0eSk7XG59XG4iXX0=
