'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = speakingActivity;

// If true, the activity is in the queue and needs to be spoken.
function speakingActivity(activity) {
  return activity.channelData && activity.channelData.speak;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9ucy9zcGVha2luZ0FjdGl2aXR5LmpzIl0sIm5hbWVzIjpbInNwZWFraW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsImNoYW5uZWxEYXRhIiwic3BlYWsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztBQUNqRCxTQUFPQSxRQUFRLENBQUNDLFdBQVQsSUFBd0JELFFBQVEsQ0FBQ0MsV0FBVCxDQUFxQkMsS0FBcEQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIElmIHRydWUsIHRoZSBhY3Rpdml0eSBpcyBpbiB0aGUgcXVldWUgYW5kIG5lZWRzIHRvIGJlIHNwb2tlbi5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BlYWtpbmdBY3Rpdml0eShhY3Rpdml0eSkge1xuICByZXR1cm4gYWN0aXZpdHkuY2hhbm5lbERhdGEgJiYgYWN0aXZpdHkuY2hhbm5lbERhdGEuc3BlYWs7XG59XG4iXX0=