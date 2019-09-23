'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = suggestedActions;

var _clearSuggestedActions = require('../actions/clearSuggestedActions');

var _setSuggestedActions = require('../actions/setSuggestedActions');

var DEFAULT_STATE = [];

function suggestedActions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    _ref$payload = _ref.payload,
    payload = _ref$payload === void 0 ? {} : _ref$payload,
    type = _ref.type;

  switch (type) {
    case _setSuggestedActions.SET_SUGGESTED_ACTIONS:
      state = [].slice.call(payload.suggestedActions || []);
      break;

    case _clearSuggestedActions.CLEAR_SUGGESTED_ACTIONS:
      state = DEFAULT_STATE;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zdWdnZXN0ZWRBY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJzdWdnZXN0ZWRBY3Rpb25zIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIlNFVF9TVUdHRVNURURfQUNUSU9OUyIsInNsaWNlIiwiY2FsbCIsIkNMRUFSX1NVR0dFU1RFRF9BQ1RJT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLEVBQXRCOztBQUVlLFNBQVNDLGdCQUFULEdBQXlFO0FBQUEsTUFBL0NDLEtBQStDLHVFQUF2Q0YsYUFBdUM7O0FBQUE7QUFBQSwwQkFBdEJHLE9BQXNCO0FBQUEsTUFBdEJBLE9BQXNCLDZCQUFaLEVBQVk7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ3RGLFVBQVFBLElBQVI7QUFDRSxTQUFLQywwQ0FBTDtBQUNFSCxNQUFBQSxLQUFLLEdBQUcsR0FBR0ksS0FBSCxDQUFTQyxJQUFULENBQWNKLE9BQU8sQ0FBQ0YsZ0JBQVIsSUFBNEIsRUFBMUMsQ0FBUjtBQUNBOztBQUNGLFNBQUtPLDhDQUFMO0FBQ0VOLE1BQUFBLEtBQUssR0FBR0YsYUFBUjtBQUNBOztBQUNGO0FBQ0U7QUFSSjs7QUFXQSxTQUFPRSxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTEVBUl9TVUdHRVNURURfQUNUSU9OUyB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYXJTdWdnZXN0ZWRBY3Rpb25zJztcbmltcG9ydCB7IFNFVF9TVUdHRVNURURfQUNUSU9OUyB9IGZyb20gJy4uL2FjdGlvbnMvc2V0U3VnZ2VzdGVkQWN0aW9ucyc7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3VnZ2VzdGVkQWN0aW9ucyhzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCA9IHt9LCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfU1VHR0VTVEVEX0FDVElPTlM6XG4gICAgICBzdGF0ZSA9IFtdLnNsaWNlLmNhbGwocGF5bG9hZC5zdWdnZXN0ZWRBY3Rpb25zIHx8IFtdKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ0xFQVJfU1VHR0VTVEVEX0FDVElPTlM6XG4gICAgICBzdGF0ZSA9IERFRkFVTFRfU1RBVEU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
