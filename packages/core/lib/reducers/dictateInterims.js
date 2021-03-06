'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = dictateInterims;

var _setDictateInterims = require('../actions/setDictateInterims');

var DEFAULT_STATE = [];

function dictateInterims() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _setDictateInterims.SET_DICTATE_INTERIMS:
      state = payload.dictateInterims;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9kaWN0YXRlSW50ZXJpbXMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsImRpY3RhdGVJbnRlcmltcyIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfRElDVEFURV9JTlRFUklNUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxFQUF0Qjs7QUFFZSxTQUFTQyxlQUFULEdBQW1FO0FBQUEsTUFBMUNDLEtBQTBDLHVFQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUNoRixVQUFRQSxJQUFSO0FBQ0UsU0FBS0Msd0NBQUw7QUFDRUgsTUFBQUEsS0FBSyxHQUFHQyxPQUFPLENBQUNGLGVBQWhCO0FBQ0E7O0FBRUY7QUFDRTtBQU5KOztBQVNBLFNBQU9DLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9ESUNUQVRFX0lOVEVSSU1TIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXREaWN0YXRlSW50ZXJpbXMnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpY3RhdGVJbnRlcmltcyhzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX0RJQ1RBVEVfSU5URVJJTVM6XG4gICAgICBzdGF0ZSA9IHBheWxvYWQuZGljdGF0ZUludGVyaW1zO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
