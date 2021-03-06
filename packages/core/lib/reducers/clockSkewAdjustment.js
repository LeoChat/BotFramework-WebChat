'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = clockSkewAdjustment;

var _incomingActivity = require('../actions/incomingActivity');

var _setClockSkewAdjustment = require('../actions/setClockSkewAdjustment');

function clockSkewAdjustment() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  if (type === _incomingActivity.INCOMING_ACTIVITY) {
    var _payload$activity = payload.activity,
      _payload$activity$cha = _payload$activity.channelData;
    _payload$activity$cha = _payload$activity$cha === void 0 ? {} : _payload$activity$cha;
    var clientTimestamp = _payload$activity$cha.clientTimestamp,
      timestamp = _payload$activity.timestamp;
    var clientSendTime = Date.parse(clientTimestamp);
    var serverTime = Date.parse(timestamp);

    if (!isNaN(clientSendTime) && !isNaN(serverTime)) {
      // The adjustment include the latency between the client and the server.
      // This means, the adjustment is always larger than the actual value.
      // And it means, after adjustment, client time will be ahead of server time.
      // And it also means, the user-originated message has higher probability to appear below bot-originated message.
      // Although it has higher probability, if the user-originated message is still sending (i.e. did not echoback with server timestamp yet),
      // the insertion-sort logic will put the bot-originated below the user-originated message.
      state = serverTime - clientSendTime;
    }
  } else if (type === _setClockSkewAdjustment.SET_CLOCK_SKEW_ADJUSTMENT) {
    // Currently, this action is for testing purpose only.
    state = payload.value;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jbG9ja1NrZXdBZGp1c3RtZW50LmpzIl0sIm5hbWVzIjpbImNsb2NrU2tld0FkanVzdG1lbnQiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiSU5DT01JTkdfQUNUSVZJVFkiLCJhY3Rpdml0eSIsImNoYW5uZWxEYXRhIiwiY2xpZW50VGltZXN0YW1wIiwidGltZXN0YW1wIiwiY2xpZW50U2VuZFRpbWUiLCJEYXRlIiwicGFyc2UiLCJzZXJ2ZXJUaW1lIiwiaXNOYU4iLCJTRVRfQ0xPQ0tfU0tFV19BREpVU1RNRU5UIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFZSxTQUFTQSxtQkFBVCxHQUEyRDtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEIsQ0FBc0I7O0FBQUE7QUFBQSxNQUFqQkMsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUN4RSxNQUFJQSxJQUFJLEtBQUtDLG1DQUFiLEVBQWdDO0FBQUEsNEJBRzFCRixPQUgwQixDQUU1QkcsUUFGNEI7QUFBQSxrREFFaEJDLFdBRmdCO0FBQUEsK0RBRW1CLEVBRm5CO0FBQUEsUUFFREMsZUFGQyx5QkFFREEsZUFGQztBQUFBLFFBRXVCQyxTQUZ2QixxQkFFdUJBLFNBRnZCO0FBSzlCLFFBQU1DLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLGVBQVgsQ0FBdkI7QUFDQSxRQUFNSyxVQUFVLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFYLENBQW5COztBQUVBLFFBQUksQ0FBQ0ssS0FBSyxDQUFDSixjQUFELENBQU4sSUFBMEIsQ0FBQ0ksS0FBSyxDQUFDRCxVQUFELENBQXBDLEVBQWtEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWCxNQUFBQSxLQUFLLEdBQUdXLFVBQVUsR0FBR0gsY0FBckI7QUFDRDtBQUNGLEdBbEJELE1Ba0JPLElBQUlOLElBQUksS0FBS1csaURBQWIsRUFBd0M7QUFDN0M7QUFDQWIsSUFBQUEsS0FBSyxHQUFHQyxPQUFPLENBQUNhLEtBQWhCO0FBQ0Q7O0FBRUQsU0FBT2QsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuaW1wb3J0IHsgU0VUX0NMT0NLX1NLRVdfQURKVVNUTUVOVCB9IGZyb20gJy4uL2FjdGlvbnMvc2V0Q2xvY2tTa2V3QWRqdXN0bWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb2NrU2tld0FkanVzdG1lbnQoc3RhdGUgPSAwLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBpZiAodHlwZSA9PT0gSU5DT01JTkdfQUNUSVZJVFkpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpdml0eTogeyBjaGFubmVsRGF0YTogeyBjbGllbnRUaW1lc3RhbXAgfSA9IHt9LCB0aW1lc3RhbXAgfVxuICAgIH0gPSBwYXlsb2FkO1xuXG4gICAgY29uc3QgY2xpZW50U2VuZFRpbWUgPSBEYXRlLnBhcnNlKGNsaWVudFRpbWVzdGFtcCk7XG4gICAgY29uc3Qgc2VydmVyVGltZSA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblxuICAgIGlmICghaXNOYU4oY2xpZW50U2VuZFRpbWUpICYmICFpc05hTihzZXJ2ZXJUaW1lKSkge1xuICAgICAgLy8gVGhlIGFkanVzdG1lbnQgaW5jbHVkZSB0aGUgbGF0ZW5jeSBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHRoZSBzZXJ2ZXIuXG4gICAgICAvLyBUaGlzIG1lYW5zLCB0aGUgYWRqdXN0bWVudCBpcyBhbHdheXMgbGFyZ2VyIHRoYW4gdGhlIGFjdHVhbCB2YWx1ZS5cbiAgICAgIC8vIEFuZCBpdCBtZWFucywgYWZ0ZXIgYWRqdXN0bWVudCwgY2xpZW50IHRpbWUgd2lsbCBiZSBhaGVhZCBvZiBzZXJ2ZXIgdGltZS5cbiAgICAgIC8vIEFuZCBpdCBhbHNvIG1lYW5zLCB0aGUgdXNlci1vcmlnaW5hdGVkIG1lc3NhZ2UgaGFzIGhpZ2hlciBwcm9iYWJpbGl0eSB0byBhcHBlYXIgYmVsb3cgYm90LW9yaWdpbmF0ZWQgbWVzc2FnZS5cbiAgICAgIC8vIEFsdGhvdWdoIGl0IGhhcyBoaWdoZXIgcHJvYmFiaWxpdHksIGlmIHRoZSB1c2VyLW9yaWdpbmF0ZWQgbWVzc2FnZSBpcyBzdGlsbCBzZW5kaW5nIChpLmUuIGRpZCBub3QgZWNob2JhY2sgd2l0aCBzZXJ2ZXIgdGltZXN0YW1wIHlldCksXG4gICAgICAvLyB0aGUgaW5zZXJ0aW9uLXNvcnQgbG9naWMgd2lsbCBwdXQgdGhlIGJvdC1vcmlnaW5hdGVkIGJlbG93IHRoZSB1c2VyLW9yaWdpbmF0ZWQgbWVzc2FnZS5cblxuICAgICAgc3RhdGUgPSBzZXJ2ZXJUaW1lIC0gY2xpZW50U2VuZFRpbWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFNFVF9DTE9DS19TS0VXX0FESlVTVE1FTlQpIHtcbiAgICAvLyBDdXJyZW50bHksIHRoaXMgYWN0aW9uIGlzIGZvciB0ZXN0aW5nIHB1cnBvc2Ugb25seS5cbiAgICBzdGF0ZSA9IHBheWxvYWQudmFsdWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
