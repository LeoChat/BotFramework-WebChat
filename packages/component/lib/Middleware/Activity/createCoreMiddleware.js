'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createCoreMiddleware;

var _react = _interopRequireDefault(require('react'));

var _CarouselLayout = _interopRequireDefault(require('../../Activity/CarouselLayout'));

var _StackedLayout = _interopRequireDefault(require('../../Activity/StackedLayout'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RETURN_FALSE = function RETURN_FALSE() {
  return false;
};

function createCoreMiddleware() {
  return function() {
    return function(next) {
      return function(_ref) {
        var _ref$activity = _ref.activity,
          activity = _ref$activity === void 0 ? {} : _ref$activity,
          timestampClassName = _ref.timestampClassName;
        // TODO: [P4] Can we simplify these if-statement to something more readable?
        var type = activity.type; // Filter out activities that should not be visible

        if (type === 'conversationUpdate' || type === 'event') {
          return RETURN_FALSE;
        } else if (type === 'message') {
          var _activity$attachments = activity.attachments,
            attachments = _activity$attachments === void 0 ? [] : _activity$attachments,
            channelData = activity.channelData,
            text = activity.text;

          if (
            // Do not show postback
            (channelData && channelData.postBack) || // Do not show messageBack if displayText is undefined
            (channelData && channelData.messageBack && !channelData.messageBack.displayText) || // Do not show empty bubbles (no text and attachments, and not "typing")
            !(text || attachments.length)
          ) {
            return RETURN_FALSE;
          }
        } else if (type === 'typing' && activity.from.role === 'user') {
          // Do not show typing by oneself
          return RETURN_FALSE;
        }

        if (type === 'message' || type === 'typing') {
          if (
            type === 'message' &&
            (activity.attachments || []).length > 1 &&
            activity.attachmentLayout === 'carousel'
          ) {
            // The following line is not a React functional component, it's a middleware function.
            // Note that "children" is not a props, but first argument.
            var CarouselActivity = function CarouselActivity(children) {
              return _react.default.createElement(
                _CarouselLayout.default,
                {
                  activity: activity,
                  timestampClassName: timestampClassName
                },
                children
              );
            };

            return CarouselActivity;
          } // The following line is not a React functional component, it's a middleware function.
          // Note that "children" is not a props, but first argument.

          var StackedActivity = function StackedActivity(children) {
            return _react.default.createElement(
              _StackedLayout.default,
              {
                activity: activity,
                timestampClassName: timestampClassName
              },
              children
            );
          };

          return StackedActivity;
        }

        return next({
          activity: activity,
          timestampClassName: timestampClassName
        });
      };
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NaWRkbGV3YXJlL0FjdGl2aXR5L2NyZWF0ZUNvcmVNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbIlJFVFVSTl9GQUxTRSIsImNyZWF0ZUNvcmVNaWRkbGV3YXJlIiwibmV4dCIsImFjdGl2aXR5IiwidGltZXN0YW1wQ2xhc3NOYW1lIiwidHlwZSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJ0ZXh0IiwicG9zdEJhY2siLCJtZXNzYWdlQmFjayIsImRpc3BsYXlUZXh0IiwibGVuZ3RoIiwiZnJvbSIsInJvbGUiLCJhdHRhY2htZW50TGF5b3V0IiwiQ2Fyb3VzZWxBY3Rpdml0eSIsImNoaWxkcmVuIiwiU3RhY2tlZEFjdGl2aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU0sS0FBTjtBQUFBLENBQXJCOztBQUVlLFNBQVNDLG9CQUFULEdBQWdDO0FBQzdDLFNBQU87QUFBQSxXQUFNLFVBQUFDLElBQUk7QUFBQSxhQUFJLGdCQUEyQztBQUFBLGlDQUF4Q0MsUUFBd0M7QUFBQSxZQUF4Q0EsUUFBd0MsOEJBQTdCLEVBQTZCO0FBQUEsWUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCO0FBQzlEO0FBRDhELFlBR3REQyxJQUhzRCxHQUc3Q0YsUUFINkMsQ0FHdERFLElBSHNELEVBSzlEOztBQUNBLFlBQUlBLElBQUksS0FBSyxvQkFBVCxJQUFpQ0EsSUFBSSxLQUFLLE9BQTlDLEVBQXVEO0FBQ3JELGlCQUFPTCxZQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUlLLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQUEsc0NBQ21CRixRQURuQixDQUNyQkcsV0FEcUI7QUFBQSxjQUNyQkEsV0FEcUIsc0NBQ1AsRUFETztBQUFBLGNBQ0hDLFdBREcsR0FDbUJKLFFBRG5CLENBQ0hJLFdBREc7QUFBQSxjQUNVQyxJQURWLEdBQ21CTCxRQURuQixDQUNVSyxJQURWOztBQUc3QixlQUNFO0FBQ0NELFVBQUFBLFdBQVcsSUFBSUEsV0FBVyxDQUFDRSxRQUE1QixJQUNBO0FBQ0NGLFVBQUFBLFdBQVcsSUFBSUEsV0FBVyxDQUFDRyxXQUEzQixJQUEwQyxDQUFDSCxXQUFXLENBQUNHLFdBQVosQ0FBd0JDLFdBRnBFLElBR0E7QUFDQSxZQUFFSCxJQUFJLElBQUlGLFdBQVcsQ0FBQ00sTUFBdEIsQ0FORixFQU9FO0FBQ0EsbUJBQU9aLFlBQVA7QUFDRDtBQUNGLFNBYk0sTUFhQSxJQUFJSyxJQUFJLEtBQUssUUFBVCxJQUFxQkYsUUFBUSxDQUFDVSxJQUFULENBQWNDLElBQWQsS0FBdUIsTUFBaEQsRUFBd0Q7QUFDN0Q7QUFDQSxpQkFBT2QsWUFBUDtBQUNEOztBQUVELFlBQUlLLElBQUksS0FBSyxTQUFULElBQXNCQSxJQUFJLEtBQUssUUFBbkMsRUFBNkM7QUFDM0MsY0FBSUEsSUFBSSxLQUFLLFNBQVQsSUFBc0IsQ0FBQ0YsUUFBUSxDQUFDRyxXQUFULElBQXdCLEVBQXpCLEVBQTZCTSxNQUE3QixHQUFzQyxDQUE1RCxJQUFpRVQsUUFBUSxDQUFDWSxnQkFBVCxLQUE4QixVQUFuRyxFQUErRztBQUM3RztBQUNBO0FBQ0EsZ0JBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsUUFBUTtBQUFBLHFCQUMvQiw2QkFBQyx1QkFBRDtBQUFnQixnQkFBQSxRQUFRLEVBQUVkLFFBQTFCO0FBQW9DLGdCQUFBLGtCQUFrQixFQUFFQztBQUF4RCxpQkFDR2EsUUFESCxDQUQrQjtBQUFBLGFBQWpDOztBQU1BLG1CQUFPRCxnQkFBUDtBQUNELFdBWDBDLENBYTNDO0FBQ0E7OztBQUNBLGNBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUQsUUFBUTtBQUFBLG1CQUM5Qiw2QkFBQyxzQkFBRDtBQUFlLGNBQUEsUUFBUSxFQUFFZCxRQUF6QjtBQUFtQyxjQUFBLGtCQUFrQixFQUFFQztBQUF2RCxlQUNHYSxRQURILENBRDhCO0FBQUEsV0FBaEM7O0FBTUEsaUJBQU9DLGVBQVA7QUFDRDs7QUFFRCxlQUFPaEIsSUFBSSxDQUFDO0FBQUVDLFVBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxVQUFBQSxrQkFBa0IsRUFBbEJBO0FBQVosU0FBRCxDQUFYO0FBQ0QsT0FuRGdCO0FBQUEsS0FBVjtBQUFBLEdBQVA7QUFvREQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2Fyb3VzZWxMYXlvdXQgZnJvbSAnLi4vLi4vQWN0aXZpdHkvQ2Fyb3VzZWxMYXlvdXQnO1xuaW1wb3J0IFN0YWNrZWRMYXlvdXQgZnJvbSAnLi4vLi4vQWN0aXZpdHkvU3RhY2tlZExheW91dCc7XG5cbmNvbnN0IFJFVFVSTl9GQUxTRSA9ICgpID0+IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb3JlTWlkZGxld2FyZSgpIHtcbiAgcmV0dXJuICgpID0+IG5leHQgPT4gKHsgYWN0aXZpdHkgPSB7fSwgdGltZXN0YW1wQ2xhc3NOYW1lIH0pID0+IHtcbiAgICAvLyBUT0RPOiBbUDRdIENhbiB3ZSBzaW1wbGlmeSB0aGVzZSBpZi1zdGF0ZW1lbnQgdG8gc29tZXRoaW5nIG1vcmUgcmVhZGFibGU/XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IGFjdGl2aXR5O1xuXG4gICAgLy8gRmlsdGVyIG91dCBhY3Rpdml0aWVzIHRoYXQgc2hvdWxkIG5vdCBiZSB2aXNpYmxlXG4gICAgaWYgKHR5cGUgPT09ICdjb252ZXJzYXRpb25VcGRhdGUnIHx8IHR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIHJldHVybiBSRVRVUk5fRkFMU0U7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbWVzc2FnZScpIHtcbiAgICAgIGNvbnN0IHsgYXR0YWNobWVudHMgPSBbXSwgY2hhbm5lbERhdGEsIHRleHQgfSA9IGFjdGl2aXR5O1xuXG4gICAgICBpZiAoXG4gICAgICAgIC8vIERvIG5vdCBzaG93IHBvc3RiYWNrXG4gICAgICAgIChjaGFubmVsRGF0YSAmJiBjaGFubmVsRGF0YS5wb3N0QmFjaykgfHxcbiAgICAgICAgLy8gRG8gbm90IHNob3cgbWVzc2FnZUJhY2sgaWYgZGlzcGxheVRleHQgaXMgdW5kZWZpbmVkXG4gICAgICAgIChjaGFubmVsRGF0YSAmJiBjaGFubmVsRGF0YS5tZXNzYWdlQmFjayAmJiAhY2hhbm5lbERhdGEubWVzc2FnZUJhY2suZGlzcGxheVRleHQpIHx8XG4gICAgICAgIC8vIERvIG5vdCBzaG93IGVtcHR5IGJ1YmJsZXMgKG5vIHRleHQgYW5kIGF0dGFjaG1lbnRzLCBhbmQgbm90IFwidHlwaW5nXCIpXG4gICAgICAgICEodGV4dCB8fCBhdHRhY2htZW50cy5sZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIFJFVFVSTl9GQUxTRTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0eXBpbmcnICYmIGFjdGl2aXR5LmZyb20ucm9sZSA9PT0gJ3VzZXInKSB7XG4gICAgICAvLyBEbyBub3Qgc2hvdyB0eXBpbmcgYnkgb25lc2VsZlxuICAgICAgcmV0dXJuIFJFVFVSTl9GQUxTRTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ21lc3NhZ2UnIHx8IHR5cGUgPT09ICd0eXBpbmcnKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ21lc3NhZ2UnICYmIChhY3Rpdml0eS5hdHRhY2htZW50cyB8fCBbXSkubGVuZ3RoID4gMSAmJiBhY3Rpdml0eS5hdHRhY2htZW50TGF5b3V0ID09PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBpcyBub3QgYSBSZWFjdCBmdW5jdGlvbmFsIGNvbXBvbmVudCwgaXQncyBhIG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAgICAgIC8vIE5vdGUgdGhhdCBcImNoaWxkcmVuXCIgaXMgbm90IGEgcHJvcHMsIGJ1dCBmaXJzdCBhcmd1bWVudC5cbiAgICAgICAgY29uc3QgQ2Fyb3VzZWxBY3Rpdml0eSA9IGNoaWxkcmVuID0+IChcbiAgICAgICAgICA8Q2Fyb3VzZWxMYXlvdXQgYWN0aXZpdHk9e2FjdGl2aXR5fSB0aW1lc3RhbXBDbGFzc05hbWU9e3RpbWVzdGFtcENsYXNzTmFtZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9DYXJvdXNlbExheW91dD5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gQ2Fyb3VzZWxBY3Rpdml0eTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIG5vdCBhIFJlYWN0IGZ1bmN0aW9uYWwgY29tcG9uZW50LCBpdCdzIGEgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICAgIC8vIE5vdGUgdGhhdCBcImNoaWxkcmVuXCIgaXMgbm90IGEgcHJvcHMsIGJ1dCBmaXJzdCBhcmd1bWVudC5cbiAgICAgIGNvbnN0IFN0YWNrZWRBY3Rpdml0eSA9IGNoaWxkcmVuID0+IChcbiAgICAgICAgPFN0YWNrZWRMYXlvdXQgYWN0aXZpdHk9e2FjdGl2aXR5fSB0aW1lc3RhbXBDbGFzc05hbWU9e3RpbWVzdGFtcENsYXNzTmFtZX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1N0YWNrZWRMYXlvdXQ+XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gU3RhY2tlZEFjdGl2aXR5O1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KHsgYWN0aXZpdHksIHRpbWVzdGFtcENsYXNzTmFtZSB9KTtcbiAgfTtcbn1cbiJdfQ==
