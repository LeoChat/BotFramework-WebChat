'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createDefaultCardActionMiddleware;

var _botframeworkWebchatCore = require('botframework-webchat-core');

function createDefaultCardActionMiddleware() {
  return function(_ref) {
    var dispatch = _ref.dispatch;
    return function(next) {
      return function(_ref2) {
        var cardAction = _ref2.cardAction,
          getSignInUrl = _ref2.getSignInUrl;
        var displayText = cardAction.displayText,
          text = cardAction.text,
          type = cardAction.type,
          value = cardAction.value;

        switch (type) {
          case 'imBack':
            if (typeof value === 'string') {
              // TODO: [P4] Instead of calling dispatch, we should move to dispatchers instead for completeness
              dispatch((0, _botframeworkWebchatCore.sendMessage)(value, 'imBack'));
            } else {
              throw new Error('cannot send "imBack" with a non-string value');
            }

            break;

          case 'messageBack':
            dispatch((0, _botframeworkWebchatCore.sendMessageBack)(value, text, displayText));
            break;

          case 'postBack':
            dispatch((0, _botframeworkWebchatCore.sendPostBack)(value));
            break;

          case 'call':
          case 'downloadFile':
          case 'openUrl':
          case 'playAudio':
          case 'playVideo':
          case 'showImage':
            window.open(value);
            break;

          case 'signin': {
            // TODO: [P3] We should prime the URL into the OAuthCard directly, instead of calling getSessionId on-demand
            //       This is to eliminate the delay between window.open() and location.href call
            var popup = window.open();
            getSignInUrl().then(function(url) {
              popup.location.href = url;
            });
            break;
          }

          default:
            return next({
              cardAction: cardAction,
              getSignInUrl: getSignInUrl
            });
        }
      };
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NaWRkbGV3YXJlL0NhcmRBY3Rpb24vY3JlYXRlQ29yZU1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiY3JlYXRlRGVmYXVsdENhcmRBY3Rpb25NaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJuZXh0IiwiY2FyZEFjdGlvbiIsImdldFNpZ25JblVybCIsImRpc3BsYXlUZXh0IiwidGV4dCIsInR5cGUiLCJ2YWx1ZSIsIkVycm9yIiwid2luZG93Iiwib3BlbiIsInBvcHVwIiwidGhlbiIsInVybCIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVlLFNBQVNBLGlDQUFULEdBQTZDO0FBQzFELFNBQU87QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxXQUFrQixVQUFBQyxJQUFJO0FBQUEsYUFBSSxpQkFBa0M7QUFBQSxZQUEvQkMsVUFBK0IsU0FBL0JBLFVBQStCO0FBQUEsWUFBbkJDLFlBQW1CLFNBQW5CQSxZQUFtQjtBQUFBLFlBQ3pEQyxXQUR5RCxHQUN0QkYsVUFEc0IsQ0FDekRFLFdBRHlEO0FBQUEsWUFDNUNDLElBRDRDLEdBQ3RCSCxVQURzQixDQUM1Q0csSUFENEM7QUFBQSxZQUN0Q0MsSUFEc0MsR0FDdEJKLFVBRHNCLENBQ3RDSSxJQURzQztBQUFBLFlBQ2hDQyxLQURnQyxHQUN0QkwsVUFEc0IsQ0FDaENLLEtBRGdDOztBQUdqRSxnQkFBUUQsSUFBUjtBQUNFLGVBQUssUUFBTDtBQUNFLGdCQUFJLE9BQU9DLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0I7QUFDQVAsY0FBQUEsUUFBUSxDQUFDLDBDQUFZTyxLQUFaLEVBQW1CLFFBQW5CLENBQUQsQ0FBUjtBQUNELGFBSEQsTUFHTztBQUNMLG9CQUFNLElBQUlDLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0Q7O0FBRUQ7O0FBRUYsZUFBSyxhQUFMO0FBQ0VSLFlBQUFBLFFBQVEsQ0FBQyw4Q0FBZ0JPLEtBQWhCLEVBQXVCRixJQUF2QixFQUE2QkQsV0FBN0IsQ0FBRCxDQUFSO0FBRUE7O0FBRUYsZUFBSyxVQUFMO0FBQ0VKLFlBQUFBLFFBQVEsQ0FBQywyQ0FBYU8sS0FBYixDQUFELENBQVI7QUFFQTs7QUFFRixlQUFLLE1BQUw7QUFDQSxlQUFLLGNBQUw7QUFDQSxlQUFLLFNBQUw7QUFDQSxlQUFLLFdBQUw7QUFDQSxlQUFLLFdBQUw7QUFDQSxlQUFLLFdBQUw7QUFDRUUsWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVo7QUFDQTs7QUFFRixlQUFLLFFBQUw7QUFBZTtBQUNiO0FBQ0E7QUFFQSxrQkFBTUksS0FBSyxHQUFHRixNQUFNLENBQUNDLElBQVAsRUFBZDtBQUVBUCxjQUFBQSxZQUFZLEdBQUdTLElBQWYsQ0FBb0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3pCRixnQkFBQUEsS0FBSyxDQUFDRyxRQUFOLENBQWVDLElBQWYsR0FBc0JGLEdBQXRCO0FBQ0QsZUFGRDtBQUlBO0FBQ0Q7O0FBRUQ7QUFDRSxtQkFBT1osSUFBSSxDQUFDO0FBQUVDLGNBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxjQUFBQSxZQUFZLEVBQVpBO0FBQWQsYUFBRCxDQUFYO0FBNUNKO0FBOENELE9BakQ0QjtBQUFBLEtBQXRCO0FBQUEsR0FBUDtBQWtERCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbmRNZXNzYWdlLCBzZW5kTWVzc2FnZUJhY2ssIHNlbmRQb3N0QmFjayB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0Q2FyZEFjdGlvbk1pZGRsZXdhcmUoKSB7XG4gIHJldHVybiAoeyBkaXNwYXRjaCB9KSA9PiBuZXh0ID0+ICh7IGNhcmRBY3Rpb24sIGdldFNpZ25JblVybCB9KSA9PiB7XG4gICAgY29uc3QgeyBkaXNwbGF5VGV4dCwgdGV4dCwgdHlwZSwgdmFsdWUgfSA9IGNhcmRBY3Rpb247XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltQmFjayc6XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVE9ETzogW1A0XSBJbnN0ZWFkIG9mIGNhbGxpbmcgZGlzcGF0Y2gsIHdlIHNob3VsZCBtb3ZlIHRvIGRpc3BhdGNoZXJzIGluc3RlYWQgZm9yIGNvbXBsZXRlbmVzc1xuICAgICAgICAgIGRpc3BhdGNoKHNlbmRNZXNzYWdlKHZhbHVlLCAnaW1CYWNrJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHNlbmQgXCJpbUJhY2tcIiB3aXRoIGEgbm9uLXN0cmluZyB2YWx1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21lc3NhZ2VCYWNrJzpcbiAgICAgICAgZGlzcGF0Y2goc2VuZE1lc3NhZ2VCYWNrKHZhbHVlLCB0ZXh0LCBkaXNwbGF5VGV4dCkpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0QmFjayc6XG4gICAgICAgIGRpc3BhdGNoKHNlbmRQb3N0QmFjayh2YWx1ZSkpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjYWxsJzpcbiAgICAgIGNhc2UgJ2Rvd25sb2FkRmlsZSc6XG4gICAgICBjYXNlICdvcGVuVXJsJzpcbiAgICAgIGNhc2UgJ3BsYXlBdWRpbyc6XG4gICAgICBjYXNlICdwbGF5VmlkZW8nOlxuICAgICAgY2FzZSAnc2hvd0ltYWdlJzpcbiAgICAgICAgd2luZG93Lm9wZW4odmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2lnbmluJzoge1xuICAgICAgICAvLyBUT0RPOiBbUDNdIFdlIHNob3VsZCBwcmltZSB0aGUgVVJMIGludG8gdGhlIE9BdXRoQ2FyZCBkaXJlY3RseSwgaW5zdGVhZCBvZiBjYWxsaW5nIGdldFNlc3Npb25JZCBvbi1kZW1hbmRcbiAgICAgICAgLy8gICAgICAgVGhpcyBpcyB0byBlbGltaW5hdGUgdGhlIGRlbGF5IGJldHdlZW4gd2luZG93Lm9wZW4oKSBhbmQgbG9jYXRpb24uaHJlZiBjYWxsXG5cbiAgICAgICAgY29uc3QgcG9wdXAgPSB3aW5kb3cub3BlbigpO1xuXG4gICAgICAgIGdldFNpZ25JblVybCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICBwb3B1cC5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG5leHQoeyBjYXJkQWN0aW9uLCBnZXRTaWduSW5VcmwgfSk7XG4gICAgfVxuICB9O1xufVxuIl19
