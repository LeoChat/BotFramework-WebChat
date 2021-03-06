'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendBoxValue;

var _setSendBox = require('../actions/setSendBox');

var DEFAULT_STATE = '';

function sendBoxValue() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _setSendBox.SET_SEND_BOX:
      state = payload.text;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZW5kQm94VmFsdWUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsInNlbmRCb3hWYWx1ZSIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfU0VORF9CT1giLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLEVBQXRCOztBQUVlLFNBQVNDLFlBQVQsR0FBZ0U7QUFBQSxNQUExQ0MsS0FBMEMsdUVBQWxDRixhQUFrQzs7QUFBQTtBQUFBLE1BQWpCRyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQzdFLFVBQVFBLElBQVI7QUFDRSxTQUFLQyx3QkFBTDtBQUNFSCxNQUFBQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0csSUFBaEI7QUFDQTs7QUFFRjtBQUNFO0FBTko7O0FBU0EsU0FBT0osS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1NFTkRfQk9YIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRTZW5kQm94JztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9ICcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kQm94VmFsdWUoc3RhdGUgPSBERUZBVUxUX1NUQVRFLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9TRU5EX0JPWDpcbiAgICAgIHN0YXRlID0gcGF5bG9hZC50ZXh0O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
