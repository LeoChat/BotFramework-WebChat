'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = whileConnectedEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _connect = require('../../actions/connect');

var _disconnect = require('../../actions/disconnect');

var _reconnect = require('../../actions/reconnect');

function whileConnectedEffect(fn) {
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function whileConnected() {
      var _ref, _ref$meta, userID, username, directLine, task;

      return _regenerator['default'].wrap(function whileConnected$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return (0, _effects.take)([_connect.CONNECT_FULFILLING, _reconnect.RECONNECT_FULFILLING]);

            case 2:
              _ref = _context.sent;
              _ref$meta = _ref.meta;
              userID = _ref$meta.userID;
              username = _ref$meta.username;
              directLine = _ref.payload.directLine;
              _context.next = 9;
              return (0, _effects.fork)(fn, {
                directLine: directLine,
                userID: userID,
                username: username
              });

            case 9:
              task = _context.sent;
              _context.next = 12;
              return (0, _effects.take)([_disconnect.DISCONNECT_PENDING, _reconnect.RECONNECT_PENDING]);

            case 12:
              _context.next = 14;
              return (0, _effects.cancel)(task);

            case 14:
              _context.next = 0;
              break;

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, whileConnected);
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL3doaWxlQ29ubmVjdGVkLmpzIl0sIm5hbWVzIjpbIndoaWxlQ29ubmVjdGVkRWZmZWN0IiwiZm4iLCJ3aGlsZUNvbm5lY3RlZCIsIkNPTk5FQ1RfRlVMRklMTElORyIsIlJFQ09OTkVDVF9GVUxGSUxMSU5HIiwibWV0YSIsInVzZXJJRCIsInVzZXJuYW1lIiwiZGlyZWN0TGluZSIsInBheWxvYWQiLCJ0YXNrIiwiRElTQ09OTkVDVF9QRU5ESU5HIiwiUkVDT05ORUNUX1BFTkRJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRWUsU0FBU0Esb0JBQVQsQ0FBOEJDLEVBQTlCLEVBQWtDO0FBQy9DLFNBQU87QUFBQTtBQUFBLCtCQUFLLFNBQVVDLGNBQVY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0osbUJBQU0sbUJBQUssQ0FBQ0MsMkJBQUQsRUFBcUJDLCtCQUFyQixDQUFMLENBQU47O0FBTEk7QUFBQTtBQUFBLDZCQUdOQyxJQUhNO0FBR0VDLFlBQUFBLE1BSEYsYUFHRUEsTUFIRjtBQUdVQyxZQUFBQSxRQUhWLGFBR1VBLFFBSFY7QUFJS0MsWUFBQUEsVUFKTCxRQUlOQyxPQUpNLENBSUtELFVBSkw7QUFBQTtBQU1LLG1CQUFNLG1CQUFLUCxFQUFMLEVBQVM7QUFBRU8sY0FBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNGLGNBQUFBLE1BQU0sRUFBTkEsTUFBZDtBQUFzQkMsY0FBQUEsUUFBUSxFQUFSQTtBQUF0QixhQUFULENBQU47O0FBTkw7QUFNRkcsWUFBQUEsSUFORTtBQUFBO0FBVVIsbUJBQU0sbUJBQUssQ0FBQ0MsOEJBQUQsRUFBcUJDLDRCQUFyQixDQUFMLENBQU47O0FBVlE7QUFBQTtBQVdSLG1CQUFNLHFCQUFPRixJQUFQLENBQU47O0FBWFE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVUixjQUFWO0FBQUEsR0FBTCxFQUFQO0FBY0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsLCBjYW5jZWwsIGZvcmssIHRha2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBDT05ORUNUX0ZVTEZJTExJTkcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Nvbm5lY3QnO1xuaW1wb3J0IHsgRElTQ09OTkVDVF9QRU5ESU5HIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9kaXNjb25uZWN0JztcbmltcG9ydCB7IFJFQ09OTkVDVF9QRU5ESU5HLCBSRUNPTk5FQ1RfRlVMRklMTElORyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVjb25uZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2hpbGVDb25uZWN0ZWRFZmZlY3QoZm4pIHtcbiAgcmV0dXJuIGNhbGwoZnVuY3Rpb24qIHdoaWxlQ29ubmVjdGVkKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWV0YTogeyB1c2VySUQsIHVzZXJuYW1lIH0sXG4gICAgICAgIHBheWxvYWQ6IHsgZGlyZWN0TGluZSB9XG4gICAgICB9ID0geWllbGQgdGFrZShbQ09OTkVDVF9GVUxGSUxMSU5HLCBSRUNPTk5FQ1RfRlVMRklMTElOR10pO1xuICAgICAgY29uc3QgdGFzayA9IHlpZWxkIGZvcmsoZm4sIHsgZGlyZWN0TGluZSwgdXNlcklELCB1c2VybmFtZSB9KTtcblxuICAgICAgLy8gV2hlbiB3ZSByZWNlaXZlIERJU0NPTk5FQ1RfUEVORElORyBvciBSRUNPTk5FQ1RfUEVORElORywgdGhlIERpcmVjdCBMaW5lIGNvbm5lY3Rpb24gaXMgY3VycmVudGx5IGJ1c3kgYW5kIHNob3VsZCBub3QgYmUgdXNlZC5cblxuICAgICAgeWllbGQgdGFrZShbRElTQ09OTkVDVF9QRU5ESU5HLCBSRUNPTk5FQ1RfUEVORElOR10pO1xuICAgICAgeWllbGQgY2FuY2VsKHRhc2spO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
