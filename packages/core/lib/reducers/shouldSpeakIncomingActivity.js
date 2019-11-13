'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = _default;

var _startSpeakingActivity = require('../../lib/actions/startSpeakingActivity');

var _stopSpeakingActivity = require('../../lib/actions/stopSpeakingActivity');

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type;

  switch (type) {
    case _startSpeakingActivity.START_SPEAKING_ACTIVITY:
      state = true;
      break;

    case _stopSpeakingActivity.STOP_SPEAKING_ACTIVITY:
      state = false;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zaG91bGRTcGVha0luY29taW5nQWN0aXZpdHkuanMiXSwibmFtZXMiOlsic3RhdGUiLCJ0eXBlIiwiU1RBUlRfU1BFQUtJTkdfQUNUSVZJVFkiLCJTVE9QX1NQRUFLSU5HX0FDVElWSVRZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRWUsb0JBQWtDO0FBQUEsTUFBekJBLEtBQXlCLHVFQUFqQixLQUFpQjs7QUFBQTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDL0MsVUFBUUEsSUFBUjtBQUNFLFNBQUtDLDhDQUFMO0FBQ0VGLE1BQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0E7O0FBRUYsU0FBS0csNENBQUw7QUFDRUgsTUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFDQTs7QUFFRjtBQUNFO0FBVko7O0FBYUEsU0FBT0EsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RBUlRfU1BFQUtJTkdfQUNUSVZJVFkgfSBmcm9tICcuLi8uLi9saWIvYWN0aW9ucy9zdGFydFNwZWFraW5nQWN0aXZpdHknO1xuaW1wb3J0IHsgU1RPUF9TUEVBS0lOR19BQ1RJVklUWSB9IGZyb20gJy4uLy4uL2xpYi9hY3Rpb25zL3N0b3BTcGVha2luZ0FjdGl2aXR5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBmYWxzZSwgeyB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTVEFSVF9TUEVBS0lOR19BQ1RJVklUWTpcbiAgICAgIHN0YXRlID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTVE9QX1NQRUFLSU5HX0FDVElWSVRZOlxuICAgICAgc3RhdGUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19
