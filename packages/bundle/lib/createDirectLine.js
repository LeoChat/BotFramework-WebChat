'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createDirectLine;

var _botframeworkDirectlinejs = require('botframework-directlinejs');

function createDirectLine(_ref) {
  var botAgent = _ref.botAgent,
    conversationId = _ref.conversationId,
    domain = _ref.domain,
    fetch = _ref.fetch,
    pollingInterval = _ref.pollingInterval,
    secret = _ref.secret,
    streamUrl = _ref.streamUrl,
    token = _ref.token,
    watermark = _ref.watermark,
    webSocket = _ref.webSocket;
  return new _botframeworkDirectlinejs.DirectLine({
    botAgent: botAgent,
    conversationId: conversationId,
    domain: domain,
    fetch: fetch,
    pollingInterval: pollingInterval,
    secret: secret,
    streamUrl: streamUrl,
    token: token,
    watermark: watermark,
    webSocket: webSocket,
    createFormData: function createFormData(attachments) {
      var formData = new FormData();
      attachments.forEach(function(_ref2) {
        var contentType = _ref2.contentType,
          data = _ref2.data,
          filename = _ref2.filename,
          name = _ref2.name;
        formData.append(
          name,
          new Blob(data, {
            contentType: contentType
          }),
          filename
        );
      });
      return formData;
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXJlY3RMaW5lLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURpcmVjdExpbmUiLCJib3RBZ2VudCIsImNvbnZlcnNhdGlvbklkIiwiZG9tYWluIiwiZmV0Y2giLCJwb2xsaW5nSW50ZXJ2YWwiLCJzZWNyZXQiLCJzdHJlYW1VcmwiLCJ0b2tlbiIsIndhdGVybWFyayIsIndlYlNvY2tldCIsIkRpcmVjdExpbmUiLCJjcmVhdGVGb3JtRGF0YSIsImF0dGFjaG1lbnRzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjb250ZW50VHlwZSIsImRhdGEiLCJmaWxlbmFtZSIsIm5hbWUiLCJhcHBlbmQiLCJCbG9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FXWjtBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLGNBU0MsUUFUREEsY0FTQztBQUFBLE1BUkRDLE1BUUMsUUFSREEsTUFRQztBQUFBLE1BUERDLEtBT0MsUUFQREEsS0FPQztBQUFBLE1BTkRDLGVBTUMsUUFOREEsZUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLFNBRUMsUUFGREEsU0FFQztBQUFBLE1BRERDLFNBQ0MsUUFEREEsU0FDQztBQUNELFNBQU8sSUFBSUMsb0NBQUosQ0FBZTtBQUNwQlYsSUFBQUEsUUFBUSxFQUFSQSxRQURvQjtBQUVwQkMsSUFBQUEsY0FBYyxFQUFkQSxjQUZvQjtBQUdwQkMsSUFBQUEsTUFBTSxFQUFOQSxNQUhvQjtBQUlwQkMsSUFBQUEsS0FBSyxFQUFMQSxLQUpvQjtBQUtwQkMsSUFBQUEsZUFBZSxFQUFmQSxlQUxvQjtBQU1wQkMsSUFBQUEsTUFBTSxFQUFOQSxNQU5vQjtBQU9wQkMsSUFBQUEsU0FBUyxFQUFUQSxTQVBvQjtBQVFwQkMsSUFBQUEsS0FBSyxFQUFMQSxLQVJvQjtBQVNwQkMsSUFBQUEsU0FBUyxFQUFUQSxTQVRvQjtBQVVwQkMsSUFBQUEsU0FBUyxFQUFUQSxTQVZvQjtBQVdwQkUsSUFBQUEsY0FBYyxFQUFFLHdCQUFBQyxXQUFXLEVBQUk7QUFDN0IsVUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFFQUYsTUFBQUEsV0FBVyxDQUFDRyxPQUFaLENBQW9CLGlCQUEyQztBQUFBLFlBQXhDQyxXQUF3QyxTQUF4Q0EsV0FBd0M7QUFBQSxZQUEzQkMsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsWUFBckJDLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLFlBQVhDLElBQVcsU0FBWEEsSUFBVztBQUM3RE4sUUFBQUEsUUFBUSxDQUFDTyxNQUFULENBQWdCRCxJQUFoQixFQUFzQixJQUFJRSxJQUFKLENBQVNKLElBQVQsRUFBZTtBQUFFRCxVQUFBQSxXQUFXLEVBQVhBO0FBQUYsU0FBZixDQUF0QixFQUF1REUsUUFBdkQ7QUFDRCxPQUZEO0FBSUEsYUFBT0wsUUFBUDtBQUNEO0FBbkJtQixHQUFmLENBQVA7QUFxQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RMaW5lIH0gZnJvbSAnYm90ZnJhbWV3b3JrLWRpcmVjdGxpbmVqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdExpbmUoe1xuICBib3RBZ2VudCxcbiAgY29udmVyc2F0aW9uSWQsXG4gIGRvbWFpbixcbiAgZmV0Y2gsXG4gIHBvbGxpbmdJbnRlcnZhbCxcbiAgc2VjcmV0LFxuICBzdHJlYW1VcmwsXG4gIHRva2VuLFxuICB3YXRlcm1hcmssXG4gIHdlYlNvY2tldFxufSkge1xuICByZXR1cm4gbmV3IERpcmVjdExpbmUoe1xuICAgIGJvdEFnZW50LFxuICAgIGNvbnZlcnNhdGlvbklkLFxuICAgIGRvbWFpbixcbiAgICBmZXRjaCxcbiAgICBwb2xsaW5nSW50ZXJ2YWwsXG4gICAgc2VjcmV0LFxuICAgIHN0cmVhbVVybCxcbiAgICB0b2tlbixcbiAgICB3YXRlcm1hcmssXG4gICAgd2ViU29ja2V0LFxuICAgIGNyZWF0ZUZvcm1EYXRhOiBhdHRhY2htZW50cyA9PiB7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBhdHRhY2htZW50cy5mb3JFYWNoKCh7IGNvbnRlbnRUeXBlLCBkYXRhLCBmaWxlbmFtZSwgbmFtZSB9KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCBuZXcgQmxvYihkYXRhLCB7IGNvbnRlbnRUeXBlIH0pLCBmaWxlbmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
