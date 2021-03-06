'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stopDictateOnCardActionSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _stopDictate = _interopRequireDefault(require('../actions/stopDictate'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(stopDictateOnCardAction),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(stopDictateOnCardActionSaga);

function stopDictateOnCardAction() {
  return _regenerator['default'].wrap(function stopDictateOnCardAction$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(
            // Currently, there are no actions that are related to card input
            // For now, we are using POST_ACTIVITY of a "message" activity
            // In the future, if we have an action for card input, we should use that instead
            function(_ref) {
              var payload = _ref.payload,
                type = _ref.type;
              return type === _postActivity.POST_ACTIVITY_PENDING && payload.activity.type === 'message';
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function putStopDictate() {
              return _regenerator['default'].wrap(function putStopDictate$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return (0, _effects.put)((0, _stopDictate['default'])());

                    case 2:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, putStopDictate);
            })
          );

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function stopDictateOnCardActionSaga() {
  return _regenerator['default'].wrap(function stopDictateOnCardActionSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(stopDictateOnCardAction);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EuanMiXSwibmFtZXMiOlsic3RvcERpY3RhdGVPbkNhcmRBY3Rpb24iLCJzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EiLCJwYXlsb2FkIiwidHlwZSIsIlBPU1RfQUNUSVZJVFlfUEVORElORyIsImFjdGl2aXR5IiwicHV0U3RvcERpY3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLHVCOzs7NkJBZWVDLDJCOztBQWZ6QixTQUFVRCx1QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJRSxpQkFBTSx5QkFDSjtBQUNBO0FBQ0E7QUFDQTtBQUFBLGdCQUFHRSxPQUFILFFBQUdBLE9BQUg7QUFBQSxnQkFBWUMsSUFBWixRQUFZQSxJQUFaO0FBQUEsbUJBQXVCQSxJQUFJLEtBQUtDLG1DQUFULElBQWtDRixPQUFPLENBQUNHLFFBQVIsQ0FBaUJGLElBQWpCLEtBQTBCLFNBQW5GO0FBQUEsV0FKSTtBQUFBO0FBQUEsdUNBS0osU0FBVUcsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSwyQkFBTSxrQkFBSSw4QkFBSixDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVQSxjQUFWO0FBQUEsV0FMSSxFQUFOOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVlLFNBQVVMLDJCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCx1QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBQT1NUX0FDVElWSVRZX1BFTkRJTkcgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgc3RvcERpY3RhdGUgZnJvbSAnLi4vYWN0aW9ucy9zdG9wRGljdGF0ZSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHN0b3BEaWN0YXRlT25DYXJkQWN0aW9uKCkge1xuICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBzdG9wIHNwZWVjaCBpbnB1dCB3aGVuIHRoZSB1c2VyIGNsaWNrIG9uIGFueXRoaW5nIG9uIGEgY2FyZCwgaW5jbHVkaW5nIG9wZW4gVVJMIHdoaWNoIGRvZXNuJ3QgZ2VuZXJhdGUgcG9zdEFjdGl2aXR5XG4gIC8vICAgICAgIFRoaXMgZnVuY3Rpb25hbGl0eSB3YXMgbm90IGltcGxlbWVudGVkIGluIHYzXG5cbiAgeWllbGQgdGFrZUV2ZXJ5KFxuICAgIC8vIEN1cnJlbnRseSwgdGhlcmUgYXJlIG5vIGFjdGlvbnMgdGhhdCBhcmUgcmVsYXRlZCB0byBjYXJkIGlucHV0XG4gICAgLy8gRm9yIG5vdywgd2UgYXJlIHVzaW5nIFBPU1RfQUNUSVZJVFkgb2YgYSBcIm1lc3NhZ2VcIiBhY3Rpdml0eVxuICAgIC8vIEluIHRoZSBmdXR1cmUsIGlmIHdlIGhhdmUgYW4gYWN0aW9uIGZvciBjYXJkIGlucHV0LCB3ZSBzaG91bGQgdXNlIHRoYXQgaW5zdGVhZFxuICAgICh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gUE9TVF9BQ1RJVklUWV9QRU5ESU5HICYmIHBheWxvYWQuYWN0aXZpdHkudHlwZSA9PT0gJ21lc3NhZ2UnLFxuICAgIGZ1bmN0aW9uKiBwdXRTdG9wRGljdGF0ZSgpIHtcbiAgICAgIHlpZWxkIHB1dChzdG9wRGljdGF0ZSgpKTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHN0b3BEaWN0YXRlT25DYXJkQWN0aW9uKTtcbn1cbiJdfQ==
