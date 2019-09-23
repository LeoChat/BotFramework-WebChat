'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = incomingActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _simpleUpdateIn = _interopRequireDefault(require('simple-update-in'));

var _activities = require('../selectors/activities');

var _activityFromBot = _interopRequireDefault(require('../definitions/activityFromBot'));

var _incomingActivity = _interopRequireDefault(require('../actions/incomingActivity'));

var _observeEach = _interopRequireDefault(require('./effects/observeEach'));

var _setSuggestedActions = _interopRequireDefault(require('../actions/setSuggestedActions'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(observeActivity),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(incomingActivitySaga);

function patchActivityWithFromRole(activity, userID) {
  // Some activities, such as "ConversationUpdate", does not have "from" defined.
  // And although "role" is defined in Direct Line spec, it was not sent over the wire.
  // We normalize the activity here to simplify null-check and logic later.
  // Patch activity.from.role to make sure its either "bot", "user", or "channel"
  if (!activity.from) {
    activity = (0, _simpleUpdateIn['default'])(activity, ['from', 'role'], function() {
      return 'channel';
    });
  } else if (!activity.from.role) {
    if (activity.from.id === userID) {
      activity = (0, _simpleUpdateIn['default'])(activity, ['from', 'role'], function() {
        return 'user';
      });
    } else if (activity.from.id) {
      activity = (0, _simpleUpdateIn['default'])(activity, ['from', 'role'], function() {
        return 'bot';
      });
    } else {
      activity = (0, _simpleUpdateIn['default'])(activity, ['from', 'role'], function() {
        return 'channel';
      });
    }
  }

  return activity;
}

function observeActivity(_ref) {
  var directLine, userID;
  return _regenerator['default'].wrap(function observeActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          (directLine = _ref.directLine), (userID = _ref.userID);
          _context2.next = 3;
          return (0, _observeEach['default'])(
            directLine.activity$,
            /*#__PURE__*/
            _regenerator['default'].mark(function observeActivity(activity) {
              var messageActivities, lastMessageActivity, _lastMessageActivity$, actions, to;

              return _regenerator['default'].wrap(function observeActivity$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      activity = patchActivityWithFromRole(activity, userID);
                      _context.next = 3;
                      return (0, _effects.put)((0, _incomingActivity['default'])(activity));

                    case 3:
                      _context.next = 5;
                      return (0, _effects.select)((0, _activities.ofType)('message'));

                    case 5:
                      messageActivities = _context.sent;
                      lastMessageActivity = messageActivities[messageActivities.length - 1];

                      if (!(0, _activityFromBot['default'])(lastMessageActivity)) {
                        _context.next = 13;
                        break;
                      }

                      _lastMessageActivity$ = lastMessageActivity.suggestedActions;
                      _lastMessageActivity$ = _lastMessageActivity$ === void 0 ? {} : _lastMessageActivity$;
                      (actions = _lastMessageActivity$.actions), (to = _lastMessageActivity$.to); // If suggested actions is not destined to anyone, or is destined to the user, show it.
                      // In other words, if suggested actions is destined to someone else, don't show it.

                      _context.next = 13;
                      return (0, _effects.put)(
                        (0, _setSuggestedActions['default'])(to && to.length && !to.includes(userID) ? null : actions)
                      );

                    case 13:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, observeActivity);
            })
          );

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function incomingActivitySaga() {
  return _regenerator['default'].wrap(function incomingActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(observeActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9pbmNvbWluZ0FjdGl2aXR5U2FnYS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZlQWN0aXZpdHkiLCJpbmNvbWluZ0FjdGl2aXR5U2FnYSIsInBhdGNoQWN0aXZpdHlXaXRoRnJvbVJvbGUiLCJhY3Rpdml0eSIsInVzZXJJRCIsImZyb20iLCJyb2xlIiwiaWQiLCJkaXJlY3RMaW5lIiwiYWN0aXZpdHkkIiwibWVzc2FnZUFjdGl2aXRpZXMiLCJsYXN0TWVzc2FnZUFjdGl2aXR5IiwibGVuZ3RoIiwic3VnZ2VzdGVkQWN0aW9ucyIsImFjdGlvbnMiLCJ0byIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7OzZCQXVCVUEsZTs7OzZCQXFCZUMsb0I7O0FBMUN6QixTQUFTQyx5QkFBVCxDQUFtQ0MsUUFBbkMsRUFBNkNDLE1BQTdDLEVBQXFEO0FBQ25EO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsTUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQWQsRUFBb0I7QUFDbEJGLElBQUFBLFFBQVEsR0FBRyxnQ0FBU0EsUUFBVCxFQUFtQixDQUFDLE1BQUQsRUFBUyxNQUFULENBQW5CLEVBQXFDO0FBQUEsYUFBTSxTQUFOO0FBQUEsS0FBckMsQ0FBWDtBQUNELEdBRkQsTUFFTyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxJQUFuQixFQUF5QjtBQUM5QixRQUFJSCxRQUFRLENBQUNFLElBQVQsQ0FBY0UsRUFBZCxLQUFxQkgsTUFBekIsRUFBaUM7QUFDL0JELE1BQUFBLFFBQVEsR0FBRyxnQ0FBU0EsUUFBVCxFQUFtQixDQUFDLE1BQUQsRUFBUyxNQUFULENBQW5CLEVBQXFDO0FBQUEsZUFBTSxNQUFOO0FBQUEsT0FBckMsQ0FBWDtBQUNELEtBRkQsTUFFTyxJQUFJQSxRQUFRLENBQUNFLElBQVQsQ0FBY0UsRUFBbEIsRUFBc0I7QUFDM0JKLE1BQUFBLFFBQVEsR0FBRyxnQ0FBU0EsUUFBVCxFQUFtQixDQUFDLE1BQUQsRUFBUyxNQUFULENBQW5CLEVBQXFDO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FBckMsQ0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMQSxNQUFBQSxRQUFRLEdBQUcsZ0NBQVNBLFFBQVQsRUFBbUIsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFuQixFQUFxQztBQUFBLGVBQU0sU0FBTjtBQUFBLE9BQXJDLENBQVg7QUFDRDtBQUNGOztBQUVELFNBQU9BLFFBQVA7QUFDRDs7QUFFRCxTQUFVSCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QlEsVUFBQUEsVUFBNUIsUUFBNEJBLFVBQTVCLEVBQXdDSixNQUF4QyxRQUF3Q0EsTUFBeEM7QUFBQTtBQUNFLGlCQUFNLDZCQUFZSSxVQUFVLENBQUNDLFNBQXZCO0FBQUE7QUFBQSx1Q0FBa0MsU0FBVVQsZUFBVixDQUEwQkcsUUFBMUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0Q0Esb0JBQUFBLFFBQVEsR0FBR0QseUJBQXlCLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxDQUFwQztBQURzQztBQUd0QywyQkFBTSxrQkFBSSxrQ0FBaUJELFFBQWpCLENBQUosQ0FBTjs7QUFIc0M7QUFBQTtBQU9aLDJCQUFNLHFCQUFPLHdCQUFpQixTQUFqQixDQUFQLENBQU47O0FBUFk7QUFPaENPLG9CQUFBQSxpQkFQZ0M7QUFRaENDLG9CQUFBQSxtQkFSZ0MsR0FRVkQsaUJBQWlCLENBQUNBLGlCQUFpQixDQUFDRSxNQUFsQixHQUEyQixDQUE1QixDQVJQOztBQUFBLHlCQVVsQyxpQ0FBZ0JELG1CQUFoQixDQVZrQztBQUFBO0FBQUE7QUFBQTs7QUFBQSw0Q0FXZUEsbUJBWGYsQ0FXNUJFLGdCQVg0QjtBQUFBLCtFQVdRLEVBWFI7QUFXUkMsb0JBQUFBLE9BWFEseUJBV1JBLE9BWFEsRUFXQ0MsRUFYRCx5QkFXQ0EsRUFYRCxFQWFwQztBQUNBOztBQWRvQztBQWVwQywyQkFBTSxrQkFBSSxxQ0FBb0JBLEVBQUUsSUFBSUEsRUFBRSxDQUFDSCxNQUFULElBQW1CLENBQUNHLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZWixNQUFaLENBQXBCLEdBQTBDLElBQTFDLEdBQWlEVSxPQUFyRSxDQUFKLENBQU47O0FBZm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVZCxlQUFWO0FBQUEsV0FBbEMsRUFBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQmUsU0FBVUMsb0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELGVBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB1cGRhdGVJbiBmcm9tICdzaW1wbGUtdXBkYXRlLWluJztcblxuaW1wb3J0IHsgb2ZUeXBlIGFzIGFjdGl2aXRpZXNPZlR5cGUgfSBmcm9tICcuLi9zZWxlY3RvcnMvYWN0aXZpdGllcyc7XG5pbXBvcnQgYWN0aXZpdHlGcm9tQm90IGZyb20gJy4uL2RlZmluaXRpb25zL2FjdGl2aXR5RnJvbUJvdCc7XG5pbXBvcnQgaW5jb21pbmdBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuaW1wb3J0IG9ic2VydmVFYWNoIGZyb20gJy4vZWZmZWN0cy9vYnNlcnZlRWFjaCc7XG5pbXBvcnQgc2V0U3VnZ2VzdGVkQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NldFN1Z2dlc3RlZEFjdGlvbnMnO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uIHBhdGNoQWN0aXZpdHlXaXRoRnJvbVJvbGUoYWN0aXZpdHksIHVzZXJJRCkge1xuICAvLyBTb21lIGFjdGl2aXRpZXMsIHN1Y2ggYXMgXCJDb252ZXJzYXRpb25VcGRhdGVcIiwgZG9lcyBub3QgaGF2ZSBcImZyb21cIiBkZWZpbmVkLlxuICAvLyBBbmQgYWx0aG91Z2ggXCJyb2xlXCIgaXMgZGVmaW5lZCBpbiBEaXJlY3QgTGluZSBzcGVjLCBpdCB3YXMgbm90IHNlbnQgb3ZlciB0aGUgd2lyZS5cbiAgLy8gV2Ugbm9ybWFsaXplIHRoZSBhY3Rpdml0eSBoZXJlIHRvIHNpbXBsaWZ5IG51bGwtY2hlY2sgYW5kIGxvZ2ljIGxhdGVyLlxuXG4gIC8vIFBhdGNoIGFjdGl2aXR5LmZyb20ucm9sZSB0byBtYWtlIHN1cmUgaXRzIGVpdGhlciBcImJvdFwiLCBcInVzZXJcIiwgb3IgXCJjaGFubmVsXCJcbiAgaWYgKCFhY3Rpdml0eS5mcm9tKSB7XG4gICAgYWN0aXZpdHkgPSB1cGRhdGVJbihhY3Rpdml0eSwgWydmcm9tJywgJ3JvbGUnXSwgKCkgPT4gJ2NoYW5uZWwnKTtcbiAgfSBlbHNlIGlmICghYWN0aXZpdHkuZnJvbS5yb2xlKSB7XG4gICAgaWYgKGFjdGl2aXR5LmZyb20uaWQgPT09IHVzZXJJRCkge1xuICAgICAgYWN0aXZpdHkgPSB1cGRhdGVJbihhY3Rpdml0eSwgWydmcm9tJywgJ3JvbGUnXSwgKCkgPT4gJ3VzZXInKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2aXR5LmZyb20uaWQpIHtcbiAgICAgIGFjdGl2aXR5ID0gdXBkYXRlSW4oYWN0aXZpdHksIFsnZnJvbScsICdyb2xlJ10sICgpID0+ICdib3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZpdHkgPSB1cGRhdGVJbihhY3Rpdml0eSwgWydmcm9tJywgJ3JvbGUnXSwgKCkgPT4gJ2NoYW5uZWwnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWN0aXZpdHk7XG59XG5cbmZ1bmN0aW9uKiBvYnNlcnZlQWN0aXZpdHkoeyBkaXJlY3RMaW5lLCB1c2VySUQgfSkge1xuICB5aWVsZCBvYnNlcnZlRWFjaChkaXJlY3RMaW5lLmFjdGl2aXR5JCwgZnVuY3Rpb24qIG9ic2VydmVBY3Rpdml0eShhY3Rpdml0eSkge1xuICAgIGFjdGl2aXR5ID0gcGF0Y2hBY3Rpdml0eVdpdGhGcm9tUm9sZShhY3Rpdml0eSwgdXNlcklEKTtcblxuICAgIHlpZWxkIHB1dChpbmNvbWluZ0FjdGl2aXR5KGFjdGl2aXR5KSk7XG5cbiAgICAvLyBVcGRhdGUgc3VnZ2VzdGVkIGFjdGlvbnNcbiAgICAvLyBUT0RPOiBbUDNdIFdlIGNvdWxkIHB1dCB0aGlzIGxvZ2ljIGluc2lkZSByZWR1Y2VyIHRvIG1pbmltaXplIG51bWJlciBvZiBhY3Rpb25zIGRpc3BhdGNoZWQuXG4gICAgY29uc3QgbWVzc2FnZUFjdGl2aXRpZXMgPSB5aWVsZCBzZWxlY3QoYWN0aXZpdGllc09mVHlwZSgnbWVzc2FnZScpKTtcbiAgICBjb25zdCBsYXN0TWVzc2FnZUFjdGl2aXR5ID0gbWVzc2FnZUFjdGl2aXRpZXNbbWVzc2FnZUFjdGl2aXRpZXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoYWN0aXZpdHlGcm9tQm90KGxhc3RNZXNzYWdlQWN0aXZpdHkpKSB7XG4gICAgICBjb25zdCB7IHN1Z2dlc3RlZEFjdGlvbnM6IHsgYWN0aW9ucywgdG8gfSA9IHt9IH0gPSBsYXN0TWVzc2FnZUFjdGl2aXR5O1xuXG4gICAgICAvLyBJZiBzdWdnZXN0ZWQgYWN0aW9ucyBpcyBub3QgZGVzdGluZWQgdG8gYW55b25lLCBvciBpcyBkZXN0aW5lZCB0byB0aGUgdXNlciwgc2hvdyBpdC5cbiAgICAgIC8vIEluIG90aGVyIHdvcmRzLCBpZiBzdWdnZXN0ZWQgYWN0aW9ucyBpcyBkZXN0aW5lZCB0byBzb21lb25lIGVsc2UsIGRvbid0IHNob3cgaXQuXG4gICAgICB5aWVsZCBwdXQoc2V0U3VnZ2VzdGVkQWN0aW9ucyh0byAmJiB0by5sZW5ndGggJiYgIXRvLmluY2x1ZGVzKHVzZXJJRCkgPyBudWxsIDogYWN0aW9ucykpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBpbmNvbWluZ0FjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQob2JzZXJ2ZUFjdGl2aXR5KTtcbn1cbiJdfQ==
