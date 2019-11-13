'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = observableToPromise;

function observableToPromise(observable) {
  return new Promise(function(resolve, reject) {
    var subscription = observable.subscribe(
      function(sessionId) {
        resolve(sessionId); // HACK: Sometimes, the call complete asynchronously and we cannot unsubscribe
        //       Need to wait some short time here to make sure the subscription variable has setup

        setTimeout(function() {
          return subscription.unsubscribe();
        }, 0);
      },
      function(error) {
        reject(error);
        setTimeout(function() {
          return subscription.unsubscribe();
        }, 0);
      }
    );
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9vYnNlcnZhYmxlVG9Qcm9taXNlLmpzIl0sIm5hbWVzIjpbIm9ic2VydmFibGVUb1Byb21pc2UiLCJvYnNlcnZhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJzZXNzaW9uSWQiLCJzZXRUaW1lb3V0IiwidW5zdWJzY3JpYmUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLG1CQUFULENBQTZCQyxVQUE3QixFQUF5QztBQUN0RCxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTUMsWUFBWSxHQUFHSixVQUFVLENBQUNLLFNBQVgsQ0FDbkIsVUFBQUMsU0FBUyxFQUFJO0FBQ1hKLE1BQUFBLE9BQU8sQ0FBQ0ksU0FBRCxDQUFQLENBRFcsQ0FHWDtBQUNBOztBQUNBQyxNQUFBQSxVQUFVLENBQUM7QUFBQSxlQUFNSCxZQUFZLENBQUNJLFdBQWIsRUFBTjtBQUFBLE9BQUQsRUFBbUMsQ0FBbkMsQ0FBVjtBQUNELEtBUGtCLEVBUW5CLFVBQUFDLEtBQUssRUFBSTtBQUNQTixNQUFBQSxNQUFNLENBQUNNLEtBQUQsQ0FBTjtBQUNBRixNQUFBQSxVQUFVLENBQUM7QUFBQSxlQUFNSCxZQUFZLENBQUNJLFdBQWIsRUFBTjtBQUFBLE9BQUQsRUFBbUMsQ0FBbkMsQ0FBVjtBQUNELEtBWGtCLENBQXJCO0FBYUQsR0FkTSxDQUFQO0FBZUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYnNlcnZhYmxlVG9Qcm9taXNlKG9ic2VydmFibGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZShcbiAgICAgIHNlc3Npb25JZCA9PiB7XG4gICAgICAgIHJlc29sdmUoc2Vzc2lvbklkKTtcblxuICAgICAgICAvLyBIQUNLOiBTb21ldGltZXMsIHRoZSBjYWxsIGNvbXBsZXRlIGFzeW5jaHJvbm91c2x5IGFuZCB3ZSBjYW5ub3QgdW5zdWJzY3JpYmVcbiAgICAgICAgLy8gICAgICAgTmVlZCB0byB3YWl0IHNvbWUgc2hvcnQgdGltZSBoZXJlIHRvIG1ha2Ugc3VyZSB0aGUgc3Vic2NyaXB0aW9uIHZhcmlhYmxlIGhhcyBzZXR1cFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpLCAwKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCksIDApO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufVxuIl19
