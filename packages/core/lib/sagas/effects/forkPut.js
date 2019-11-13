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
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, action;

      return _regenerator['default'].wrap(
        function forkPut$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 3;
                _iterator = actions[Symbol.iterator]();

              case 5:
                if ((_iteratorNormalCompletion = (_step = _iterator.next()).done)) {
                  _context.next = 12;
                  break;
                }

                action = _step.value;
                _context.next = 9;
                return (0, _effects.put)(action);

              case 9:
                _iteratorNormalCompletion = true;
                _context.next = 5;
                break;

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](3);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 18:
                _context.prev = 18;
                _context.prev = 19;

                if (!_iteratorNormalCompletion && _iterator['return'] != null) {
                  _iterator['return']();
                }

              case 21:
                _context.prev = 21;

                if (!_didIteratorError) {
                  _context.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context.finish(21);

              case 25:
                return _context.finish(18);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        },
        forkPut,
        null,
        [[3, 14, 18, 26], [19, , 21, 25]]
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2ZvcmtQdXQuanMiXSwibmFtZXMiOlsiZm9ya1B1dEVmZmVjdCIsImFjdGlvbnMiLCJmb3JrUHV0IiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsYUFBVCxHQUFtQztBQUFBLG9DQUFUQyxPQUFTO0FBQVRBLElBQUFBLE9BQVM7QUFBQTs7QUFDaEQsU0FBTztBQUFBO0FBQUEsK0JBQUssU0FBVUMsT0FBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDV0QsT0FEWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNDRSxZQUFBQSxNQUREO0FBQUE7QUFFUixtQkFBTSxrQkFBSUEsTUFBSixDQUFOOztBQUZRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVVELE9BQVY7QUFBQSxHQUFMLEVBQVA7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcmssIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbi8vIEluIHJlZHV4LXNhZ2EsIGlmIHdlIGNhbGwgdGhlIGZvbGxvd2luZyBlZmZlY3RzIGluIG9yZGVyLCB3ZSBtaWdodCBtaXNzIHRoZSB0YWtlKCdDJykuXG4vLyAxLiB0YWtlKCdBJylcbi8vIDIuIHB1dCh7IHR5cGU6ICdCJyB9KVxuLy8gMy4gdGFrZSgnQycpXG5cbi8vIFdlIG5lZWQgdG8gbW9kaWZ5IHN0ZXAgMiB0bzpcbi8vIDIuIGZvcmsoZnVuY3Rpb24qICgpIHsgeWllbGQgcHV0KHsgdHlwZTogJ0InIH0pIH0pXG5cbi8vIFRoaXMgaXMgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIHRoaXMgcHVycG9zZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ya1B1dEVmZmVjdCguLi5hY3Rpb25zKSB7XG4gIHJldHVybiBmb3JrKGZ1bmN0aW9uKiBmb3JrUHV0KCkge1xuICAgIGZvciAoY29uc3QgYWN0aW9uIG9mIGFjdGlvbnMpIHtcbiAgICAgIHlpZWxkIHB1dChhY3Rpb24pO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
