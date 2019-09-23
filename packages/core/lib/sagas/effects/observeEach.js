'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = observeEachEffect;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _createPromiseQueue = _interopRequireDefault(require('../../createPromiseQueue'));

function observeEachEffect(observable, saga) {
  return (0, _effects.call)(
    /*#__PURE__*/
    _regenerator['default'].mark(function observeEach() {
      var queue, subscription, result;
      return _regenerator['default'].wrap(
        function observeEach$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                queue = (0, _createPromiseQueue['default'])();
                subscription = observable.subscribe({
                  next: queue.push
                });
                _context.prev = 2;

              case 3:
                _context.next = 5;
                return (0, _effects.call)(queue.shift);

              case 5:
                result = _context.sent;
                _context.next = 8;
                return (0, _effects.call)(saga, result);

              case 8:
                _context.next = 3;
                break;

              case 10:
                _context.prev = 10;
                subscription.unsubscribe();
                return _context.finish(10);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        },
        observeEach,
        null,
        [[2, , 10, 13]]
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL29ic2VydmVFYWNoLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVFYWNoRWZmZWN0Iiwib2JzZXJ2YWJsZSIsInNhZ2EiLCJvYnNlcnZlRWFjaCIsInF1ZXVlIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwibmV4dCIsInB1c2giLCJzaGlmdCIsInJlc3VsdCIsInVuc3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxVQUEzQixFQUF1Q0MsSUFBdkMsRUFBNkM7QUFDMUQsU0FBTztBQUFBO0FBQUEsK0JBQUssU0FBVUMsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSkMsWUFBQUEsS0FESSxHQUNJLHFDQURKO0FBRUpDLFlBQUFBLFlBRkksR0FFV0osVUFBVSxDQUFDSyxTQUFYLENBQXFCO0FBQUVDLGNBQUFBLElBQUksRUFBRUgsS0FBSyxDQUFDSTtBQUFkLGFBQXJCLENBRlg7QUFBQTs7QUFBQTtBQUFBO0FBTVMsbUJBQU0sbUJBQUtKLEtBQUssQ0FBQ0ssS0FBWCxDQUFOOztBQU5UO0FBTUFDLFlBQUFBLE1BTkE7QUFBQTtBQVFOLG1CQUFNLG1CQUFLUixJQUFMLEVBQVdRLE1BQVgsQ0FBTjs7QUFSTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVdSTCxZQUFBQSxZQUFZLENBQUNNLFdBQWI7QUFYUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVVIsV0FBVjtBQUFBLEdBQUwsRUFBUDtBQWNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBjcmVhdGVQcm9taXNlUXVldWUgZnJvbSAnLi4vLi4vY3JlYXRlUHJvbWlzZVF1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JzZXJ2ZUVhY2hFZmZlY3Qob2JzZXJ2YWJsZSwgc2FnYSkge1xuICByZXR1cm4gY2FsbChmdW5jdGlvbiogb2JzZXJ2ZUVhY2goKSB7XG4gICAgY29uc3QgcXVldWUgPSBjcmVhdGVQcm9taXNlUXVldWUoKTtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSh7IG5leHQ6IHF1ZXVlLnB1c2ggfSk7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICg7Oykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHF1ZXVlLnNoaWZ0KTtcblxuICAgICAgICB5aWVsZCBjYWxsKHNhZ2EsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
