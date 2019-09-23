'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = activities;

var _simpleUpdateIn = _interopRequireDefault(require('simple-update-in'));

var _deleteActivity = require('../actions/deleteActivity');

var _incomingActivity = require('../actions/incomingActivity');

var _markActivity = require('../actions/markActivity');

var _postActivity = require('../actions/postActivity');

var _ActivityClientState = require('../constants/ActivityClientState');

/* eslint no-magic-numbers: ["error", { "ignore": [0, -1] }] */
var DEFAULT_STATE = [];

function getClientActivityID(_ref) {
  var _ref$channelData = _ref.channelData;
  _ref$channelData = _ref$channelData === void 0 ? {} : _ref$channelData;
  var clientActivityID = _ref$channelData.clientActivityID;
  return clientActivityID;
}

function findByClientActivityID(clientActivityID) {
  return function(activity) {
    return getClientActivityID(activity) === clientActivityID;
  };
}

function upsertActivityWithSort(activities, nextActivity) {
  var _nextActivity$channel = nextActivity.channelData;
  _nextActivity$channel = _nextActivity$channel === void 0 ? {} : _nextActivity$channel;
  var nextClientActivityID = _nextActivity$channel.clientActivityID;
  var nextTimestamp = Date.parse(nextActivity.timestamp);
  var nextActivities = activities.filter(function(_ref2) {
    var _ref2$channelData = _ref2.channelData;
    _ref2$channelData = _ref2$channelData === void 0 ? {} : _ref2$channelData;
    var clientActivityID = _ref2$channelData.clientActivityID;
    return (
      // We will remove all "sending messages" activities
      // "clientActivityID" is unique and used to track if the message has been sent and echoed back from the server
      !(nextClientActivityID && clientActivityID === nextClientActivityID)
    );
  }); // Then, find the right (sorted) place to insert the new activity at, based on timestamp
  // Since clockskew might happen, we will ignore timestamp on messages that are sending

  var indexToInsert = nextActivities.findIndex(function(_ref3) {
    var _ref3$channelData = _ref3.channelData;
    _ref3$channelData = _ref3$channelData === void 0 ? {} : _ref3$channelData;
    var state = _ref3$channelData.state,
      timestamp = _ref3.timestamp;
    return (
      Date.parse(timestamp) > nextTimestamp &&
      state !== _ActivityClientState.SENDING &&
      state !== _ActivityClientState.SEND_FAILED
    );
  }); // If no right place are found, append it

  nextActivities.splice(~indexToInsert ? indexToInsert : nextActivities.length, 0, nextActivity);
  return nextActivities;
}

function activities() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref4 = arguments.length > 1 ? arguments[1] : undefined,
    meta = _ref4.meta,
    payload = _ref4.payload,
    type = _ref4.type;

  switch (type) {
    case _deleteActivity.DELETE_ACTIVITY:
      state = (0, _simpleUpdateIn['default'])(state, [
        function(_ref5) {
          var id = _ref5.id;
          return id === payload.activityID;
        }
      ]);
      break;

    case _markActivity.MARK_ACTIVITY:
      state = (0, _simpleUpdateIn['default'])(
        state,
        [
          function(_ref6) {
            var id = _ref6.id;
            return id === payload.activityID;
          },
          'channelData',
          payload.name
        ],
        function() {
          return payload.value;
        }
      );
      break;

    case _postActivity.POST_ACTIVITY_PENDING:
      state = upsertActivityWithSort(
        state,
        (0, _simpleUpdateIn['default'])(payload.activity, ['channelData', 'state'], function() {
          return _ActivityClientState.SENDING;
        })
      );
      break;

    case _postActivity.POST_ACTIVITY_REJECTED:
      state = (0, _simpleUpdateIn['default'])(
        state,
        [findByClientActivityID(meta.clientActivityID), 'channelData', 'state'],
        function() {
          return _ActivityClientState.SEND_FAILED;
        }
      );
      break;

    case _postActivity.POST_ACTIVITY_FULFILLED:
      state = (0, _simpleUpdateIn['default'])(state, [findByClientActivityID(meta.clientActivityID)], function() {
        return (
          // We will replace the activity with the version from the server
          (0, _simpleUpdateIn['default'])(payload.activity, ['channelData', 'state'], function() {
            return _ActivityClientState.SENT;
          })
        );
      });
      break;

    case _incomingActivity.INCOMING_ACTIVITY:
      // UpdateActivity is not supported right now because we ignore duplicated activity ID
      // TODO: [P4] Move "typing" into Constants.ActivityType
      if (
        payload.activity.type !== 'typing' &&
        !~state.findIndex(function(_ref7) {
          var id = _ref7.id;
          return id === payload.activity.id;
        })
      ) {
        state = upsertActivityWithSort(state, payload.activity);
      }

      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9hY3Rpdml0aWVzLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJnZXRDbGllbnRBY3Rpdml0eUlEIiwiY2hhbm5lbERhdGEiLCJjbGllbnRBY3Rpdml0eUlEIiwiZmluZEJ5Q2xpZW50QWN0aXZpdHlJRCIsImFjdGl2aXR5IiwidXBzZXJ0QWN0aXZpdHlXaXRoU29ydCIsImFjdGl2aXRpZXMiLCJuZXh0QWN0aXZpdHkiLCJuZXh0Q2xpZW50QWN0aXZpdHlJRCIsIm5leHRUaW1lc3RhbXAiLCJEYXRlIiwicGFyc2UiLCJ0aW1lc3RhbXAiLCJuZXh0QWN0aXZpdGllcyIsImZpbHRlciIsImluZGV4VG9JbnNlcnQiLCJmaW5kSW5kZXgiLCJzdGF0ZSIsIlNFTkRJTkciLCJTRU5EX0ZBSUxFRCIsInNwbGljZSIsImxlbmd0aCIsIm1ldGEiLCJwYXlsb2FkIiwidHlwZSIsIkRFTEVURV9BQ1RJVklUWSIsImlkIiwiYWN0aXZpdHlJRCIsIk1BUktfQUNUSVZJVFkiLCJuYW1lIiwidmFsdWUiLCJQT1NUX0FDVElWSVRZX1BFTkRJTkciLCJQT1NUX0FDVElWSVRZX1JFSkVDVEVEIiwiUE9TVF9BQ1RJVklUWV9GVUxGSUxMRUQiLCJTRU5UIiwiSU5DT01JTkdfQUNUSVZJVFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVZBO0FBWUEsSUFBTUEsYUFBYSxHQUFHLEVBQXRCOztBQUVBLFNBQVNDLG1CQUFULE9BQXlFO0FBQUEsOEJBQTFDQyxXQUEwQztBQUFBLG1EQUFOLEVBQU07QUFBQSxNQUEzQkMsZ0JBQTJCLG9CQUEzQkEsZ0JBQTJCO0FBQ3ZFLFNBQU9BLGdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0Msc0JBQVQsQ0FBZ0NELGdCQUFoQyxFQUFrRDtBQUNoRCxTQUFPLFVBQUFFLFFBQVE7QUFBQSxXQUFJSixtQkFBbUIsQ0FBQ0ksUUFBRCxDQUFuQixLQUFrQ0YsZ0JBQXRDO0FBQUEsR0FBZjtBQUNEOztBQUVELFNBQVNHLHNCQUFULENBQWdDQyxVQUFoQyxFQUE0Q0MsWUFBNUMsRUFBMEQ7QUFBQSw4QkFDaUJBLFlBRGpCLENBQ2hETixXQURnRDtBQUFBLDZEQUNVLEVBRFY7QUFBQSxNQUNmTyxvQkFEZSx5QkFDakNOLGdCQURpQztBQUd4RCxNQUFNTyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixZQUFZLENBQUNLLFNBQXhCLENBQXRCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHUCxVQUFVLENBQUNRLE1BQVgsQ0FDckI7QUFBQSxrQ0FBR2IsV0FBSDtBQUFBLHVEQUF1QyxFQUF2QztBQUFBLFFBQWtCQyxnQkFBbEIscUJBQWtCQSxnQkFBbEI7QUFBQSxXQUNFO0FBQ0E7QUFDQSxRQUFFTSxvQkFBb0IsSUFBSU4sZ0JBQWdCLEtBQUtNLG9CQUEvQztBQUhGO0FBQUEsR0FEcUIsQ0FBdkIsQ0FKd0QsQ0FXeEQ7QUFDQTs7QUFFQSxNQUFNTyxhQUFhLEdBQUdGLGNBQWMsQ0FBQ0csU0FBZixDQUNwQjtBQUFBLGtDQUFHZixXQUFIO0FBQUEsdURBQTRCLEVBQTVCO0FBQUEsUUFBa0JnQixLQUFsQixxQkFBa0JBLEtBQWxCO0FBQUEsUUFBZ0NMLFNBQWhDLFNBQWdDQSxTQUFoQztBQUFBLFdBQ0VGLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxTQUFYLElBQXdCSCxhQUF4QixJQUF5Q1EsS0FBSyxLQUFLQyw0QkFBbkQsSUFBOERELEtBQUssS0FBS0UsZ0NBRDFFO0FBQUEsR0FEb0IsQ0FBdEIsQ0Fkd0QsQ0FtQnhEOztBQUNBTixFQUFBQSxjQUFjLENBQUNPLE1BQWYsQ0FBc0IsQ0FBQ0wsYUFBRCxHQUFpQkEsYUFBakIsR0FBaUNGLGNBQWMsQ0FBQ1EsTUFBdEUsRUFBOEUsQ0FBOUUsRUFBaUZkLFlBQWpGO0FBRUEsU0FBT00sY0FBUDtBQUNEOztBQUVjLFNBQVNQLFVBQVQsR0FBb0U7QUFBQSxNQUFoRFcsS0FBZ0QsdUVBQXhDbEIsYUFBd0M7O0FBQUE7QUFBQSxNQUF2QnVCLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxPQUFpQixTQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFNBQVJBLElBQVE7O0FBQ2pGLFVBQVFBLElBQVI7QUFDRSxTQUFLQywrQkFBTDtBQUNFUixNQUFBQSxLQUFLLEdBQUcsZ0NBQVNBLEtBQVQsRUFBZ0IsQ0FBQztBQUFBLFlBQUdTLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGVBQVlBLEVBQUUsS0FBS0gsT0FBTyxDQUFDSSxVQUEzQjtBQUFBLE9BQUQsQ0FBaEIsQ0FBUjtBQUNBOztBQUVGLFNBQUtDLDJCQUFMO0FBQ0VYLE1BQUFBLEtBQUssR0FBRyxnQ0FDTkEsS0FETSxFQUVOLENBQUM7QUFBQSxZQUFHUyxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFZQSxFQUFFLEtBQUtILE9BQU8sQ0FBQ0ksVUFBM0I7QUFBQSxPQUFELEVBQXdDLGFBQXhDLEVBQXVESixPQUFPLENBQUNNLElBQS9ELENBRk0sRUFHTjtBQUFBLGVBQU1OLE9BQU8sQ0FBQ08sS0FBZDtBQUFBLE9BSE0sQ0FBUjtBQUtBOztBQUVGLFNBQUtDLG1DQUFMO0FBQ0VkLE1BQUFBLEtBQUssR0FBR1osc0JBQXNCLENBQUNZLEtBQUQsRUFBUSxnQ0FBU00sT0FBTyxDQUFDbkIsUUFBakIsRUFBMkIsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBQTNCLEVBQXFEO0FBQUEsZUFBTWMsNEJBQU47QUFBQSxPQUFyRCxDQUFSLENBQTlCO0FBQ0E7O0FBRUYsU0FBS2Msb0NBQUw7QUFDRWYsTUFBQUEsS0FBSyxHQUFHLGdDQUNOQSxLQURNLEVBRU4sQ0FBQ2Qsc0JBQXNCLENBQUNtQixJQUFJLENBQUNwQixnQkFBTixDQUF2QixFQUFnRCxhQUFoRCxFQUErRCxPQUEvRCxDQUZNLEVBR047QUFBQSxlQUFNaUIsZ0NBQU47QUFBQSxPQUhNLENBQVI7QUFLQTs7QUFFRixTQUFLYyxxQ0FBTDtBQUNFaEIsTUFBQUEsS0FBSyxHQUFHLGdDQUFTQSxLQUFULEVBQWdCLENBQUNkLHNCQUFzQixDQUFDbUIsSUFBSSxDQUFDcEIsZ0JBQU4sQ0FBdkIsQ0FBaEIsRUFBaUU7QUFBQSxlQUN2RTtBQUNBLDBDQUFTcUIsT0FBTyxDQUFDbkIsUUFBakIsRUFBMkIsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBQTNCLEVBQXFEO0FBQUEsbUJBQU04Qix5QkFBTjtBQUFBLFdBQXJEO0FBRnVFO0FBQUEsT0FBakUsQ0FBUjtBQUtBOztBQUVGLFNBQUtDLG1DQUFMO0FBQ0U7QUFDQTtBQUNBLFVBQUlaLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJvQixJQUFqQixLQUEwQixRQUExQixJQUFzQyxDQUFDLENBQUNQLEtBQUssQ0FBQ0QsU0FBTixDQUFnQjtBQUFBLFlBQUdVLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGVBQVlBLEVBQUUsS0FBS0gsT0FBTyxDQUFDbkIsUUFBUixDQUFpQnNCLEVBQXBDO0FBQUEsT0FBaEIsQ0FBNUMsRUFBcUc7QUFDbkdULFFBQUFBLEtBQUssR0FBR1osc0JBQXNCLENBQUNZLEtBQUQsRUFBUU0sT0FBTyxDQUFDbkIsUUFBaEIsQ0FBOUI7QUFDRDs7QUFFRDs7QUFFRjtBQUNFO0FBM0NKOztBQThDQSxTQUFPYSxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMCwgLTFdIH1dICovXG5cbmltcG9ydCB1cGRhdGVJbiBmcm9tICdzaW1wbGUtdXBkYXRlLWluJztcblxuaW1wb3J0IHsgREVMRVRFX0FDVElWSVRZIH0gZnJvbSAnLi4vYWN0aW9ucy9kZWxldGVBY3Rpdml0eSc7XG5pbXBvcnQgeyBJTkNPTUlOR19BQ1RJVklUWSB9IGZyb20gJy4uL2FjdGlvbnMvaW5jb21pbmdBY3Rpdml0eSc7XG5pbXBvcnQgeyBNQVJLX0FDVElWSVRZIH0gZnJvbSAnLi4vYWN0aW9ucy9tYXJrQWN0aXZpdHknO1xuXG5pbXBvcnQgeyBQT1NUX0FDVElWSVRZX0ZVTEZJTExFRCwgUE9TVF9BQ1RJVklUWV9QRU5ESU5HLCBQT1NUX0FDVElWSVRZX1JFSkVDVEVEIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuXG5pbXBvcnQgeyBTRU5EX0ZBSUxFRCwgU0VORElORywgU0VOVCB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpdml0eUNsaWVudFN0YXRlJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRDbGllbnRBY3Rpdml0eUlEKHsgY2hhbm5lbERhdGE6IHsgY2xpZW50QWN0aXZpdHlJRCB9ID0ge30gfSkge1xuICByZXR1cm4gY2xpZW50QWN0aXZpdHlJRDtcbn1cblxuZnVuY3Rpb24gZmluZEJ5Q2xpZW50QWN0aXZpdHlJRChjbGllbnRBY3Rpdml0eUlEKSB7XG4gIHJldHVybiBhY3Rpdml0eSA9PiBnZXRDbGllbnRBY3Rpdml0eUlEKGFjdGl2aXR5KSA9PT0gY2xpZW50QWN0aXZpdHlJRDtcbn1cblxuZnVuY3Rpb24gdXBzZXJ0QWN0aXZpdHlXaXRoU29ydChhY3Rpdml0aWVzLCBuZXh0QWN0aXZpdHkpIHtcbiAgY29uc3QgeyBjaGFubmVsRGF0YTogeyBjbGllbnRBY3Rpdml0eUlEOiBuZXh0Q2xpZW50QWN0aXZpdHlJRCB9ID0ge30gfSA9IG5leHRBY3Rpdml0eTtcblxuICBjb25zdCBuZXh0VGltZXN0YW1wID0gRGF0ZS5wYXJzZShuZXh0QWN0aXZpdHkudGltZXN0YW1wKTtcbiAgY29uc3QgbmV4dEFjdGl2aXRpZXMgPSBhY3Rpdml0aWVzLmZpbHRlcihcbiAgICAoeyBjaGFubmVsRGF0YTogeyBjbGllbnRBY3Rpdml0eUlEIH0gPSB7fSB9KSA9PlxuICAgICAgLy8gV2Ugd2lsbCByZW1vdmUgYWxsIFwic2VuZGluZyBtZXNzYWdlc1wiIGFjdGl2aXRpZXNcbiAgICAgIC8vIFwiY2xpZW50QWN0aXZpdHlJRFwiIGlzIHVuaXF1ZSBhbmQgdXNlZCB0byB0cmFjayBpZiB0aGUgbWVzc2FnZSBoYXMgYmVlbiBzZW50IGFuZCBlY2hvZWQgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICEobmV4dENsaWVudEFjdGl2aXR5SUQgJiYgY2xpZW50QWN0aXZpdHlJRCA9PT0gbmV4dENsaWVudEFjdGl2aXR5SUQpXG4gICk7XG5cbiAgLy8gVGhlbiwgZmluZCB0aGUgcmlnaHQgKHNvcnRlZCkgcGxhY2UgdG8gaW5zZXJ0IHRoZSBuZXcgYWN0aXZpdHkgYXQsIGJhc2VkIG9uIHRpbWVzdGFtcFxuICAvLyBTaW5jZSBjbG9ja3NrZXcgbWlnaHQgaGFwcGVuLCB3ZSB3aWxsIGlnbm9yZSB0aW1lc3RhbXAgb24gbWVzc2FnZXMgdGhhdCBhcmUgc2VuZGluZ1xuXG4gIGNvbnN0IGluZGV4VG9JbnNlcnQgPSBuZXh0QWN0aXZpdGllcy5maW5kSW5kZXgoXG4gICAgKHsgY2hhbm5lbERhdGE6IHsgc3RhdGUgfSA9IHt9LCB0aW1lc3RhbXAgfSkgPT5cbiAgICAgIERhdGUucGFyc2UodGltZXN0YW1wKSA+IG5leHRUaW1lc3RhbXAgJiYgc3RhdGUgIT09IFNFTkRJTkcgJiYgc3RhdGUgIT09IFNFTkRfRkFJTEVEXG4gICk7XG5cbiAgLy8gSWYgbm8gcmlnaHQgcGxhY2UgYXJlIGZvdW5kLCBhcHBlbmQgaXRcbiAgbmV4dEFjdGl2aXRpZXMuc3BsaWNlKH5pbmRleFRvSW5zZXJ0ID8gaW5kZXhUb0luc2VydCA6IG5leHRBY3Rpdml0aWVzLmxlbmd0aCwgMCwgbmV4dEFjdGl2aXR5KTtcblxuICByZXR1cm4gbmV4dEFjdGl2aXRpZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2aXRpZXMoc3RhdGUgPSBERUZBVUxUX1NUQVRFLCB7IG1ldGEsIHBheWxvYWQsIHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIERFTEVURV9BQ1RJVklUWTpcbiAgICAgIHN0YXRlID0gdXBkYXRlSW4oc3RhdGUsIFsoeyBpZCB9KSA9PiBpZCA9PT0gcGF5bG9hZC5hY3Rpdml0eUlEXSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTUFSS19BQ1RJVklUWTpcbiAgICAgIHN0YXRlID0gdXBkYXRlSW4oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBbKHsgaWQgfSkgPT4gaWQgPT09IHBheWxvYWQuYWN0aXZpdHlJRCwgJ2NoYW5uZWxEYXRhJywgcGF5bG9hZC5uYW1lXSxcbiAgICAgICAgKCkgPT4gcGF5bG9hZC52YWx1ZVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBQT1NUX0FDVElWSVRZX1BFTkRJTkc6XG4gICAgICBzdGF0ZSA9IHVwc2VydEFjdGl2aXR5V2l0aFNvcnQoc3RhdGUsIHVwZGF0ZUluKHBheWxvYWQuYWN0aXZpdHksIFsnY2hhbm5lbERhdGEnLCAnc3RhdGUnXSwgKCkgPT4gU0VORElORykpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFBPU1RfQUNUSVZJVFlfUkVKRUNURUQ6XG4gICAgICBzdGF0ZSA9IHVwZGF0ZUluKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgW2ZpbmRCeUNsaWVudEFjdGl2aXR5SUQobWV0YS5jbGllbnRBY3Rpdml0eUlEKSwgJ2NoYW5uZWxEYXRhJywgJ3N0YXRlJ10sXG4gICAgICAgICgpID0+IFNFTkRfRkFJTEVEXG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFBPU1RfQUNUSVZJVFlfRlVMRklMTEVEOlxuICAgICAgc3RhdGUgPSB1cGRhdGVJbihzdGF0ZSwgW2ZpbmRCeUNsaWVudEFjdGl2aXR5SUQobWV0YS5jbGllbnRBY3Rpdml0eUlEKV0sICgpID0+XG4gICAgICAgIC8vIFdlIHdpbGwgcmVwbGFjZSB0aGUgYWN0aXZpdHkgd2l0aCB0aGUgdmVyc2lvbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICAgdXBkYXRlSW4ocGF5bG9hZC5hY3Rpdml0eSwgWydjaGFubmVsRGF0YScsICdzdGF0ZSddLCAoKSA9PiBTRU5UKVxuICAgICAgKTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElOQ09NSU5HX0FDVElWSVRZOlxuICAgICAgLy8gVXBkYXRlQWN0aXZpdHkgaXMgbm90IHN1cHBvcnRlZCByaWdodCBub3cgYmVjYXVzZSB3ZSBpZ25vcmUgZHVwbGljYXRlZCBhY3Rpdml0eSBJRFxuICAgICAgLy8gVE9ETzogW1A0XSBNb3ZlIFwidHlwaW5nXCIgaW50byBDb25zdGFudHMuQWN0aXZpdHlUeXBlXG4gICAgICBpZiAocGF5bG9hZC5hY3Rpdml0eS50eXBlICE9PSAndHlwaW5nJyAmJiAhfnN0YXRlLmZpbmRJbmRleCgoeyBpZCB9KSA9PiBpZCA9PT0gcGF5bG9hZC5hY3Rpdml0eS5pZCkpIHtcbiAgICAgICAgc3RhdGUgPSB1cHNlcnRBY3Rpdml0eVdpdGhTb3J0KHN0YXRlLCBwYXlsb2FkLmFjdGl2aXR5KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
