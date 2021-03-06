'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = uniqueID;

var _mathRandom = _interopRequireDefault(require('math-random'));

/* eslint no-magic-numbers: ["error", { "ignore": [2, 36] }] */
function uniqueID() {
  return (
    Date.now() +
    (0, _mathRandom['default'])()
      .toString(36)
      .substr(2)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91bmlxdWVJRC5qcyJdLCJuYW1lcyI6WyJ1bmlxdWVJRCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBRkE7QUFJZSxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLFNBQ0VDLElBQUksQ0FBQ0MsR0FBTCxLQUNBLDhCQUNHQyxRQURILENBQ1ksRUFEWixFQUVHQyxNQUZILENBRVUsQ0FGVixDQUZGO0FBTUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMiwgMzZdIH1dICovXG5cbmltcG9ydCByYW5kb20gZnJvbSAnbWF0aC1yYW5kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVJRCgpIHtcbiAgcmV0dXJuIChcbiAgICBEYXRlLm5vdygpICtcbiAgICByYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgLnN1YnN0cigyKVxuICApO1xufVxuIl19
