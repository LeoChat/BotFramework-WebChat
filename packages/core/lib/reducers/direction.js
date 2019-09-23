'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = _default;

var _setLanguage = require('../actions/setLanguage');

// eslint-disable-next-line no-unused-vars
var DEFAULT_STATE = 'ltr';

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ltr';

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _setLanguage.SET_LANGUAGE:
      // eslint-disable-next-line require-unicode-regexp
      state = /^he(-IL)?$/i.test(payload.language) ? 'rtl' : 'ltr';
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9kaXJlY3Rpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfTEFOR1VBR0UiLCJ0ZXN0IiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBLElBQU1BLGFBQWEsR0FBRyxLQUF0Qjs7QUFFZSxvQkFBMkM7QUFBQSxNQUFsQ0MsS0FBa0MsdUVBQTFCLEtBQTBCOztBQUFBO0FBQUEsTUFBakJDLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDeEQsVUFBUUEsSUFBUjtBQUNFLFNBQUtDLHlCQUFMO0FBQ0U7QUFDQUgsTUFBQUEsS0FBSyxHQUFHLGNBQWNJLElBQWQsQ0FBbUJILE9BQU8sQ0FBQ0ksUUFBM0IsSUFBdUMsS0FBdkMsR0FBK0MsS0FBdkQ7QUFDQTs7QUFFRjtBQUNFO0FBUEo7O0FBVUEsU0FBT0wsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX0xBTkdVQUdFIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRMYW5ndWFnZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgREVGQVVMVF9TVEFURSA9ICdsdHInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9ICdsdHInLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9MQU5HVUFHRTpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLXVuaWNvZGUtcmVnZXhwXG4gICAgICBzdGF0ZSA9IC9eaGUoLUlMKT8kL2kudGVzdChwYXlsb2FkLmxhbmd1YWdlKSA/ICdydGwnIDogJ2x0cic7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
