'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = detectSlowConnectionSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _connect = require('../actions/connect');

var _reconnect = require('../actions/reconnect');

var _sleep = _interopRequireDefault(require('../utils/sleep'));

var _marked =
  /*#__PURE__*/
  _regenerator['default'].mark(detectSlowConnectionSaga);

var SLOW_CONNECTION_AFTER = 15000;

function detectSlowConnectionSaga() {
  var connectivityRace;
  return _regenerator['default'].wrap(function detectSlowConnectionSaga$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return (0, _effects.take)([_connect.CONNECT_PENDING, _reconnect.RECONNECT_PENDING]);

        case 2:
          _context.next = 4;
          return (0, _effects.race)({
            fulfilled: (0, _effects.take)(_connect.CONNECT_FULFILLED),
            rejected: (0, _effects.take)(_connect.CONNECT_REJECTED),
            slow: (0, _effects.call)(function() {
              return (0, _sleep['default'])(SLOW_CONNECTION_AFTER);
            })
          });

        case 4:
          connectivityRace = _context.sent;

          if (!('slow' in connectivityRace)) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return (0, _effects.put)({
            type: _connect.CONNECT_STILL_PENDING
          });

        case 8:
          _context.next = 0;
          break;

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9kZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EuanMiXSwibmFtZXMiOlsiZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhIiwiU0xPV19DT05ORUNUSU9OX0FGVEVSIiwiQ09OTkVDVF9QRU5ESU5HIiwiUkVDT05ORUNUX1BFTkRJTkciLCJmdWxmaWxsZWQiLCJDT05ORUNUX0ZVTEZJTExFRCIsInJlamVjdGVkIiwiQ09OTkVDVF9SRUpFQ1RFRCIsInNsb3ciLCJjb25uZWN0aXZpdHlSYWNlIiwidHlwZSIsIkNPTk5FQ1RfU1RJTExfUEVORElORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs2QkFJeUJBLHdCOztBQUZ6QixJQUFNQyxxQkFBcUIsR0FBRyxLQUE5Qjs7QUFFZSxTQUFVRCx3QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYLGlCQUFNLG1CQUFLLENBQUNFLHdCQUFELEVBQWtCQyw0QkFBbEIsQ0FBTCxDQUFOOztBQUZXO0FBQUE7QUFJYyxpQkFBTSxtQkFBSztBQUNsQ0MsWUFBQUEsU0FBUyxFQUFFLG1CQUFLQywwQkFBTCxDQUR1QjtBQUVsQ0MsWUFBQUEsUUFBUSxFQUFFLG1CQUFLQyx5QkFBTCxDQUZ3QjtBQUdsQ0MsWUFBQUEsSUFBSSxFQUFFLG1CQUFLO0FBQUEscUJBQU0sdUJBQU1QLHFCQUFOLENBQU47QUFBQSxhQUFMO0FBSDRCLFdBQUwsQ0FBTjs7QUFKZDtBQUlMUSxVQUFBQSxnQkFKSzs7QUFBQSxnQkFVUCxVQUFVQSxnQkFWSDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVdULGlCQUFNLGtCQUFJO0FBQUVDLFlBQUFBLElBQUksRUFBRUM7QUFBUixXQUFKLENBQU47O0FBWFM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCwgcHV0LCByYWNlLCB0YWtlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgQ09OTkVDVF9GVUxGSUxMRUQsIENPTk5FQ1RfUEVORElORywgQ09OTkVDVF9SRUpFQ1RFRCwgQ09OTkVDVF9TVElMTF9QRU5ESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25uZWN0JztcblxuaW1wb3J0IHsgUkVDT05ORUNUX1BFTkRJTkcgfSBmcm9tICcuLi9hY3Rpb25zL3JlY29ubmVjdCc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuXG5jb25zdCBTTE9XX0NPTk5FQ1RJT05fQUZURVIgPSAxNTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGRldGVjdFNsb3dDb25uZWN0aW9uU2FnYSgpIHtcbiAgZm9yICg7Oykge1xuICAgIHlpZWxkIHRha2UoW0NPTk5FQ1RfUEVORElORywgUkVDT05ORUNUX1BFTkRJTkddKTtcblxuICAgIGNvbnN0IGNvbm5lY3Rpdml0eVJhY2UgPSB5aWVsZCByYWNlKHtcbiAgICAgIGZ1bGZpbGxlZDogdGFrZShDT05ORUNUX0ZVTEZJTExFRCksXG4gICAgICByZWplY3RlZDogdGFrZShDT05ORUNUX1JFSkVDVEVEKSxcbiAgICAgIHNsb3c6IGNhbGwoKCkgPT4gc2xlZXAoU0xPV19DT05ORUNUSU9OX0FGVEVSKSlcbiAgICB9KTtcblxuICAgIGlmICgnc2xvdycgaW4gY29ubmVjdGl2aXR5UmFjZSkge1xuICAgICAgeWllbGQgcHV0KHsgdHlwZTogQ09OTkVDVF9TVElMTF9QRU5ESU5HIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
