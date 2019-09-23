'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = forkPutEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

// In redux-saga, if we call the following effects in order, we might miss the take('C').
// 1. take('A')
// 2. put({ type: 'B' })
// 3. take('C')
// We need to modify step 2 to:
// 2. fork(function* () { yield put({ type: 'B' }) })
// This is a helper function for this purpose.
function forkPutEffect() {
  for (var _len = arguments.length, actions = new Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  return (0, _effects.fork)(
    /*#__PURE__*/
    _regenerator['default'].mark(function forkPut() {
      var _i, _actions, action;

      return _regenerator['default'].wrap(function forkPut$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (_i = 0), (_actions = actions);

            case 1:
              if (!(_i < _actions.length)) {
                _context.next = 8;
                break;
              }

              action = _actions[_i];
              _context.next = 5;
              return (0, _effects.put)(action);

            case 5:
              _i++;
              _context.next = 1;
              break;

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, forkPut);
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2ZvcmtQdXQuanMiXSwibmFtZXMiOlsiZm9ya1B1dEVmZmVjdCIsImFjdGlvbnMiLCJmb3JrUHV0IiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsYUFBVCxHQUFtQztBQUFBLG9DQUFUQyxPQUFTO0FBQVRBLElBQUFBLE9BQVM7QUFBQTs7QUFDaEQsU0FBTztBQUFBO0FBQUEsK0JBQUssU0FBVUMsT0FBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ1dELE9BRFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQ0UsWUFBQUEsTUFERDtBQUFBO0FBRVIsbUJBQU0sa0JBQUlBLE1BQUosQ0FBTjs7QUFGUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVUQsT0FBVjtBQUFBLEdBQUwsRUFBUDtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yaywgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuLy8gSW4gcmVkdXgtc2FnYSwgaWYgd2UgY2FsbCB0aGUgZm9sbG93aW5nIGVmZmVjdHMgaW4gb3JkZXIsIHdlIG1pZ2h0IG1pc3MgdGhlIHRha2UoJ0MnKS5cbi8vIDEuIHRha2UoJ0EnKVxuLy8gMi4gcHV0KHsgdHlwZTogJ0InIH0pXG4vLyAzLiB0YWtlKCdDJylcblxuLy8gV2UgbmVlZCB0byBtb2RpZnkgc3RlcCAyIHRvOlxuLy8gMi4gZm9yayhmdW5jdGlvbiogKCkgeyB5aWVsZCBwdXQoeyB0eXBlOiAnQicgfSkgfSlcblxuLy8gVGhpcyBpcyBhIGhlbHBlciBmdW5jdGlvbiBmb3IgdGhpcyBwdXJwb3NlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JrUHV0RWZmZWN0KC4uLmFjdGlvbnMpIHtcbiAgcmV0dXJuIGZvcmsoZnVuY3Rpb24qIGZvcmtQdXQoKSB7XG4gICAgZm9yIChjb25zdCBhY3Rpb24gb2YgYWN0aW9ucykge1xuICAgICAgeWllbGQgcHV0KGFjdGlvbik7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
