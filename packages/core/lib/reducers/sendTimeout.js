'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendTimeout;

var _setSendTimeout = require('../actions/setSendTimeout');

var DEFAULT_STATE = 20000;

function sendTimeout() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _setSendTimeout.SET_SEND_TIMEOUT:
      state = payload.sendTimeout;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZW5kVGltZW91dC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX1NUQVRFIiwic2VuZFRpbWVvdXQiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX1NFTkRfVElNRU9VVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxLQUF0Qjs7QUFFZSxTQUFTQyxXQUFULEdBQStEO0FBQUEsTUFBMUNDLEtBQTBDLHVFQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM1RSxVQUFRQSxJQUFSO0FBQ0UsU0FBS0MsZ0NBQUw7QUFDRUgsTUFBQUEsS0FBSyxHQUFHQyxPQUFPLENBQUNGLFdBQWhCO0FBQ0E7O0FBRUY7QUFDRTtBQU5KOztBQVNBLFNBQU9DLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9TRU5EX1RJTUVPVVQgfSBmcm9tICcuLi9hY3Rpb25zL3NldFNlbmRUaW1lb3V0JztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IDIwMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kVGltZW91dChzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1NFTkRfVElNRU9VVDpcbiAgICAgIHN0YXRlID0gcGF5bG9hZC5zZW5kVGltZW91dDtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19
