'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = readyState;

var _connectionStatusUpdate = require('../actions/connectionStatusUpdate');

var DEFAULT_STATE = 0;

function readyState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _connectionStatusUpdate.CONNECTION_STATUS_UPDATE:
      state = payload.connectionStatus;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yZWFkeVN0YXRlLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJyZWFkeVN0YXRlIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIkNPTk5FQ1RJT05fU1RBVFVTX1VQREFURSIsImNvbm5lY3Rpb25TdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FBdEI7O0FBRWUsU0FBU0MsVUFBVCxHQUE4RDtBQUFBLE1BQTFDQyxLQUEwQyx1RUFBbENGLGFBQWtDOztBQUFBO0FBQUEsTUFBakJHLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDM0UsVUFBUUEsSUFBUjtBQUNFLFNBQUtDLGdEQUFMO0FBQ0VILE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDRyxnQkFBaEI7QUFDQTs7QUFFRjtBQUNFO0FBTko7O0FBU0EsU0FBT0osS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09OTkVDVElPTl9TVEFUVVNfVVBEQVRFIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlYWR5U3RhdGUoc3RhdGUgPSBERUZBVUxUX1NUQVRFLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIENPTk5FQ1RJT05fU1RBVFVTX1VQREFURTpcbiAgICAgIHN0YXRlID0gcGF5bG9hZC5jb25uZWN0aW9uU3RhdHVzO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
