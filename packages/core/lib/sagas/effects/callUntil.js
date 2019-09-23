'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = callUntilEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _effects = require('redux-saga/effects');

function callUntilEffect(fn, args, predicate) {
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function callUntil() {
      var result;
      return _regenerator['default'].wrap(function callUntil$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _effects.call.apply(void 0, [fn].concat((0, _toConsumableArray2['default'])(args)));

            case 2:
              result = _context.sent;

              if (!predicate(result)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('break', 7);

            case 5:
              _context.next = 0;
              break;

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, callUntil);
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2NhbGxVbnRpbC5qcyJdLCJuYW1lcyI6WyJjYWxsVW50aWxFZmZlY3QiLCJmbiIsImFyZ3MiLCJwcmVkaWNhdGUiLCJjYWxsVW50aWwiLCJjYWxsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkJDLElBQTdCLEVBQW1DQyxTQUFuQyxFQUE4QztBQUMzRCxTQUFPO0FBQUE7QUFBQSwrQkFBSyxTQUFVQyxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sbUJBQU1DLDZCQUFLSixFQUFMLDZDQUFZQyxJQUFaLEdBQU47O0FBRlA7QUFFRkksWUFBQUEsTUFGRTs7QUFBQSxpQkFJSkgsU0FBUyxDQUFDRyxNQUFELENBSkw7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVRixTQUFWO0FBQUEsR0FBTCxFQUFQO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbFVudGlsRWZmZWN0KGZuLCBhcmdzLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGNhbGwoZnVuY3Rpb24qIGNhbGxVbnRpbCgpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZuLCAuLi5hcmdzKTtcblxuICAgICAgaWYgKHByZWRpY2F0ZShyZXN1bHQpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=
