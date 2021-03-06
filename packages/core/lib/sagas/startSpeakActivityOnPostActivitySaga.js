'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = startSpeakActivityOnPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _startSpeakingActivity = _interopRequireDefault(require('../actions/startSpeakingActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(startSpeakActivityOnPostActivity),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(startSpeakActivityOnPostActivitySaga);

function startSpeakActivityOnPostActivity() {
  return _regenerator['default'].wrap(function startSpeakActivityOnPostActivity$(_context2) {
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
                type === _postActivity.POST_ACTIVITY_PENDING &&
                meta.method === 'speech' &&
                payload.activity.type === 'message'
              );
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee() {
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return (0, _effects.put)((0, _startSpeakingActivity['default'])());

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

function startSpeakActivityOnPostActivitySaga() {
  return _regenerator['default'].wrap(function startSpeakActivityOnPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(startSpeakActivityOnPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsic3RhcnRTcGVha0FjdGl2aXR5T25Qb3N0QWN0aXZpdHkiLCJzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EiLCJtZXRhIiwicGF5bG9hZCIsInR5cGUiLCJQT1NUX0FDVElWSVRZX1BFTkRJTkciLCJtZXRob2QiLCJhY3Rpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsZ0M7Ozs2QkFVZUMsb0M7O0FBVnpCLFNBQVVELGdDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUNKO0FBQUEsZ0JBQUdFLElBQUgsUUFBR0EsSUFBSDtBQUFBLGdCQUFTQyxPQUFULFFBQVNBLE9BQVQ7QUFBQSxnQkFBa0JDLElBQWxCLFFBQWtCQSxJQUFsQjtBQUFBLG1CQUNFQSxJQUFJLEtBQUtDLG1DQUFULElBQWtDSCxJQUFJLENBQUNJLE1BQUwsS0FBZ0IsUUFBbEQsSUFBOERILE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkgsSUFBakIsS0FBMEIsU0FEMUY7QUFBQSxXQURJO0FBQUE7QUFBQSx1Q0FHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSwyQkFBTSxrQkFBSSx3Q0FBSixDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEksRUFBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZSxTQUFVSCxvQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSxnQ0FBZUQsZ0NBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgUE9TVF9BQ1RJVklUWV9QRU5ESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHN0YXJ0U3BlYWtpbmdBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL3N0YXJ0U3BlYWtpbmdBY3Rpdml0eSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoXG4gICAgKHsgbWV0YSwgcGF5bG9hZCwgdHlwZSB9KSA9PlxuICAgICAgdHlwZSA9PT0gUE9TVF9BQ1RJVklUWV9QRU5ESU5HICYmIG1ldGEubWV0aG9kID09PSAnc3BlZWNoJyAmJiBwYXlsb2FkLmFjdGl2aXR5LnR5cGUgPT09ICdtZXNzYWdlJyxcbiAgICBmdW5jdGlvbiooKSB7XG4gICAgICB5aWVsZCBwdXQoc3RhcnRTcGVha2luZ0FjdGl2aXR5KCkpO1xuICAgIH1cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc3RhcnRTcGVha0FjdGl2aXR5T25Qb3N0QWN0aXZpdHkpO1xufVxuIl19
