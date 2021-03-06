'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = connectionStatusUpdateSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _connectionStatusUpdate = _interopRequireDefault(require('../actions/connectionStatusUpdate'));

var _observeEach = _interopRequireDefault(require('./effects/observeEach'));

var _setReferenceGrammarID = _interopRequireDefault(require('../actions/setReferenceGrammarID'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(observeConnectionStatus),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(connectionStatusUpdateSaga);

function observeConnectionStatus(_ref) {
  var directLine;
  return _regenerator['default'].wrap(function observeConnectionStatus$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          directLine = _ref.directLine;
          _context2.next = 3;
          return (0, _observeEach['default'])(
            directLine.connectionStatus$,
            /*#__PURE__*/
            _regenerator['default'].mark(function updateConnectionStatus(connectionStatus) {
              return _regenerator['default'].wrap(function updateConnectionStatus$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return (0, _effects.put)((0, _connectionStatusUpdate['default'])(connectionStatus));

                    case 2:
                      _context.next = 4;
                      return (0, _effects.put)((0, _setReferenceGrammarID['default'])(directLine.referenceGrammarId));

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, updateConnectionStatus);
            })
          );

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function connectionStatusUpdateSaga() {
  return _regenerator['default'].wrap(function connectionStatusUpdateSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(observeConnectionStatus);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlU2FnYS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhIiwiZGlyZWN0TGluZSIsImNvbm5lY3Rpb25TdGF0dXMkIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3Rpb25TdGF0dXMiLCJyZWZlcmVuY2VHcmFtbWFySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLHVCOzs7NkJBT2VDLDBCOztBQVB6QixTQUFVRCx1QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0NFLFVBQUFBLFVBQXBDLFFBQW9DQSxVQUFwQztBQUFBO0FBQ0UsaUJBQU0sNkJBQVlBLFVBQVUsQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQSx1Q0FBMEMsU0FBVUMsc0JBQVYsQ0FBaUNDLGdCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUMsMkJBQU0sa0JBQUksd0NBQXVCQSxnQkFBdkIsQ0FBSixDQUFOOztBQUQ4QztBQUFBO0FBRTlDLDJCQUFNLGtCQUFJLHVDQUFzQkgsVUFBVSxDQUFDSSxrQkFBakMsQ0FBSixDQUFOOztBQUY4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVUYsc0JBQVY7QUFBQSxXQUExQyxFQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lLFNBQVVILDBCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCx1QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IGNvbm5lY3Rpb25TdGF0dXNVcGRhdGUgZnJvbSAnLi4vYWN0aW9ucy9jb25uZWN0aW9uU3RhdHVzVXBkYXRlJztcbmltcG9ydCBvYnNlcnZlRWFjaCBmcm9tICcuL2VmZmVjdHMvb2JzZXJ2ZUVhY2gnO1xuaW1wb3J0IHNldFJlZmVyZW5jZUdyYW1tYXJJRCBmcm9tICcuLi9hY3Rpb25zL3NldFJlZmVyZW5jZUdyYW1tYXJJRCc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIG9ic2VydmVDb25uZWN0aW9uU3RhdHVzKHsgZGlyZWN0TGluZSB9KSB7XG4gIHlpZWxkIG9ic2VydmVFYWNoKGRpcmVjdExpbmUuY29ubmVjdGlvblN0YXR1cyQsIGZ1bmN0aW9uKiB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKGNvbm5lY3Rpb25TdGF0dXMpIHtcbiAgICB5aWVsZCBwdXQoY29ubmVjdGlvblN0YXR1c1VwZGF0ZShjb25uZWN0aW9uU3RhdHVzKSk7XG4gICAgeWllbGQgcHV0KHNldFJlZmVyZW5jZUdyYW1tYXJJRChkaXJlY3RMaW5lLnJlZmVyZW5jZUdyYW1tYXJJZCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbm5lY3Rpb25TdGF0dXNVcGRhdGVTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChvYnNlcnZlQ29ubmVjdGlvblN0YXR1cyk7XG59XG4iXX0=
