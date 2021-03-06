'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = clearSuggestedActionsOnPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _setSuggestedActions = _interopRequireDefault(require('../actions/setSuggestedActions'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(clearSuggestedActions),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(clearSuggestedActionsOnPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(clearSuggestedActionsOnPostActivitySaga);

function clearSuggestedActions() {
  return _regenerator['default'].wrap(function clearSuggestedActions$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)((0, _setSuggestedActions['default'])());

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function clearSuggestedActionsOnPostActivity() {
  return _regenerator['default'].wrap(function clearSuggestedActionsOnPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref) {
            var payload = _ref.payload,
              type = _ref.type;
            return type === _postActivity.POST_ACTIVITY_PENDING && payload.activity.type === 'message';
          }, clearSuggestedActions);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function clearSuggestedActionsOnPostActivitySaga() {
  return _regenerator['default'].wrap(function clearSuggestedActionsOnPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(clearSuggestedActionsOnPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jbGVhclN1Z2dlc3RlZEFjdGlvbnNPblBvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsiY2xlYXJTdWdnZXN0ZWRBY3Rpb25zIiwiY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHkiLCJjbGVhclN1Z2dlc3RlZEFjdGlvbnNPblBvc3RBY3Rpdml0eVNhZ2EiLCJwYXlsb2FkIiwidHlwZSIsIlBPU1RfQUNUSVZJVFlfUEVORElORyIsImFjdGl2aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7OzZCQUVVQSxxQjs7OzZCQUlBQyxtQzs7OzZCQU9lQyx1Qzs7QUFYekIsU0FBVUYscUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sa0JBQUksc0NBQUosQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVQyxtQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFDSjtBQUFBLGdCQUFHRSxPQUFILFFBQUdBLE9BQUg7QUFBQSxnQkFBWUMsSUFBWixRQUFZQSxJQUFaO0FBQUEsbUJBQXVCQSxJQUFJLEtBQUtDLG1DQUFULElBQWtDRixPQUFPLENBQUNHLFFBQVIsQ0FBaUJGLElBQWpCLEtBQTBCLFNBQW5GO0FBQUEsV0FESSxFQUVKSixxQkFGSSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lLFNBQVVFLHVDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCxtQ0FBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBQT1NUX0FDVElWSVRZX1BFTkRJTkcgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgc2V0U3VnZ2VzdGVkQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NldFN1Z2dlc3RlZEFjdGlvbnMnO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBjbGVhclN1Z2dlc3RlZEFjdGlvbnMoKSB7XG4gIHlpZWxkIHB1dChzZXRTdWdnZXN0ZWRBY3Rpb25zKCkpO1xufVxuXG5mdW5jdGlvbiogY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHkoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShcbiAgICAoeyBwYXlsb2FkLCB0eXBlIH0pID0+IHR5cGUgPT09IFBPU1RfQUNUSVZJVFlfUEVORElORyAmJiBwYXlsb2FkLmFjdGl2aXR5LnR5cGUgPT09ICdtZXNzYWdlJyxcbiAgICBjbGVhclN1Z2dlc3RlZEFjdGlvbnNcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNsZWFyU3VnZ2VzdGVkQWN0aW9uc09uUG9zdEFjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoY2xlYXJTdWdnZXN0ZWRBY3Rpb25zT25Qb3N0QWN0aXZpdHkpO1xufVxuIl19
