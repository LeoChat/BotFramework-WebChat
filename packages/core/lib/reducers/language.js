'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = language;

var _setLanguage = require('../actions/setLanguage');

var DEFAULT_STATE = 'en-US';

function language() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _setLanguage.SET_LANGUAGE:
      state = payload.language;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX1NUQVRFIiwibGFuZ3VhZ2UiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX0xBTkdVQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLE9BQXRCOztBQUVlLFNBQVNDLFFBQVQsR0FBNEQ7QUFBQSxNQUExQ0MsS0FBMEMsdUVBQWxDRixhQUFrQzs7QUFBQTtBQUFBLE1BQWpCRyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ3pFLFVBQVFBLElBQVI7QUFDRSxTQUFLQyx5QkFBTDtBQUNFSCxNQUFBQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0YsUUFBaEI7QUFDQTs7QUFFRjtBQUNFO0FBTko7O0FBU0EsU0FBT0MsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX0xBTkdVQUdFIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRMYW5ndWFnZSc7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSAnZW4tVVMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYW5ndWFnZShzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX0xBTkdVQUdFOlxuICAgICAgc3RhdGUgPSBwYXlsb2FkLmxhbmd1YWdlO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
