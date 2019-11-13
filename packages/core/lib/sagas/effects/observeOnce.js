'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = observeOnceEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

function observeOnceEffect(observable) {
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function observeOnce() {
      var subscription;
      return _regenerator['default'].wrap(
        function observeOnce$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _effects.call)(function() {
                  return new Promise(function(resolve, reject) {
                    subscription = observable.subscribe(resolve, reject, resolve);
                  });
                });

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
                _context.prev = 4;
                subscription && subscription.unsubscribe();
                return _context.finish(4);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        },
        observeOnce,
        null,
        [[0, , 4, 7]]
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL29ic2VydmVPbmNlLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVPbmNlRWZmZWN0Iiwib2JzZXJ2YWJsZSIsIm9ic2VydmVPbmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUM7QUFDcEQsU0FBTztBQUFBO0FBQUEsK0JBQUssU0FBVUMsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUQsbUJBQU0sbUJBQ1g7QUFBQSxxQkFDRSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CQyxnQkFBQUEsWUFBWSxHQUFHTCxVQUFVLENBQUNNLFNBQVgsQ0FBcUJILE9BQXJCLEVBQThCQyxNQUE5QixFQUFzQ0QsT0FBdEMsQ0FBZjtBQUNELGVBRkQsQ0FERjtBQUFBLGFBRFcsQ0FBTjs7QUFKQztBQUFBOztBQUFBO0FBQUE7QUFXUkUsWUFBQUEsWUFBWSxJQUFJQSxZQUFZLENBQUNFLFdBQWIsRUFBaEI7QUFYUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVU4sV0FBVjtBQUFBLEdBQUwsRUFBUDtBQWNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9ic2VydmVPbmNlRWZmZWN0KG9ic2VydmFibGUpIHtcbiAgcmV0dXJuIGNhbGwoZnVuY3Rpb24qIG9ic2VydmVPbmNlKCkge1xuICAgIGxldCBzdWJzY3JpcHRpb247XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHlpZWxkIGNhbGwoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
