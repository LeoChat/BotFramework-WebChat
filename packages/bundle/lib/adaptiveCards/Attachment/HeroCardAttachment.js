'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _AdaptiveCardBuilder = _interopRequireDefault(require('./AdaptiveCardBuilder'));

var _AdaptiveCardRenderer = _interopRequireDefault(require('./AdaptiveCardRenderer'));

var HeroCardAttachment = function HeroCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var content = _ref$attachment.content,
    options = _ref.styleSet.options;
  var builtCard = (0, _react.useMemo)(
    function() {
      var builder = new _AdaptiveCardBuilder.default(adaptiveCards, options);

      if (content) {
        (content.images || []).forEach(function(image) {
          return builder.addImage(image.url, null, image.tap);
        });
        builder.addCommon(content);
        return builder.card;
      }
    },
    [adaptiveCards, content, options]
  );
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    adaptiveCardHostConfig: adaptiveCardHostConfig,
    tapAction: content && content.tap
  });
};

HeroCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      tap: _propTypes.default.any
    }).isRequired
  }).isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(HeroCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvSGVyb0NhcmRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbIkhlcm9DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJvcHRpb25zIiwic3R5bGVTZXQiLCJidWlsdENhcmQiLCJidWlsZGVyIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsImltYWdlcyIsImZvckVhY2giLCJpbWFnZSIsImFkZEltYWdlIiwidXJsIiwidGFwIiwiYWRkQ29tbW9uIiwiY2FyZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BS3JCO0FBQUEsTUFKSkMsc0JBSUksUUFKSkEsc0JBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSw2QkFGSkMsVUFFSTtBQUFBLGlEQUZzQixFQUV0QjtBQUFBLE1BRlVDLE9BRVYsbUJBRlVBLE9BRVY7QUFBQSxNQURRQyxPQUNSLFFBREpDLFFBQ0ksQ0FEUUQsT0FDUjtBQUNKLE1BQU1FLFNBQVMsR0FBRyxvQkFBUSxZQUFNO0FBQzlCLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyw0QkFBSixDQUF3QlAsYUFBeEIsRUFBdUNHLE9BQXZDLENBQWhCOztBQUVBLFFBQUlELE9BQUosRUFBYTtBQUNYLE9BQUNBLE9BQU8sQ0FBQ00sTUFBUixJQUFrQixFQUFuQixFQUF1QkMsT0FBdkIsQ0FBK0IsVUFBQUMsS0FBSztBQUFBLGVBQUlKLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkQsS0FBSyxDQUFDRSxHQUF2QixFQUE0QixJQUE1QixFQUFrQ0YsS0FBSyxDQUFDRyxHQUF4QyxDQUFKO0FBQUEsT0FBcEM7QUFFQVAsTUFBQUEsT0FBTyxDQUFDUSxTQUFSLENBQWtCWixPQUFsQjtBQUVBLGFBQU9JLE9BQU8sQ0FBQ1MsSUFBZjtBQUNEO0FBQ0YsR0FWaUIsRUFVZixDQUFDZixhQUFELEVBQWdCRSxPQUFoQixFQUF5QkMsT0FBekIsQ0FWZSxDQUFsQjtBQVlBLFNBQ0UsNkJBQUMsNkJBQUQ7QUFDRSxJQUFBLFlBQVksRUFBRUUsU0FEaEI7QUFFRSxJQUFBLHNCQUFzQixFQUFFTixzQkFGMUI7QUFHRSxJQUFBLFNBQVMsRUFBRUcsT0FBTyxJQUFJQSxPQUFPLENBQUNXO0FBSGhDLElBREY7QUFPRCxDQXpCRDs7QUEyQkFmLGtCQUFrQixDQUFDa0IsU0FBbkIsR0FBK0I7QUFDN0JqQixFQUFBQSxzQkFBc0IsRUFBRWtCLG1CQUFVQyxHQUFWLENBQWNDLFVBRFQ7QUFFN0JuQixFQUFBQSxhQUFhLEVBQUVpQixtQkFBVUMsR0FBVixDQUFjQyxVQUZBO0FBRzdCbEIsRUFBQUEsVUFBVSxFQUFFZ0IsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJsQixJQUFBQSxPQUFPLEVBQUVlLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCUCxNQUFBQSxHQUFHLEVBQUVJLG1CQUFVQztBQURRLEtBQWhCLEVBRU5DO0FBSHVCLEdBQWhCLEVBSVRBLFVBUDBCO0FBUTdCZixFQUFBQSxRQUFRLEVBQUVhLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCakIsSUFBQUEsT0FBTyxFQUFFYyxtQkFBVUMsR0FBVixDQUFjQztBQURDLEdBQWhCLEVBRVBBO0FBVjBCLENBQS9COztlQWFlLG9EQUFpQjtBQUFBLE1BQUdmLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ETixrQkFBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29ubmVjdFRvV2ViQ2hhdCB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgQWRhcHRpdmVDYXJkQnVpbGRlciBmcm9tICcuL0FkYXB0aXZlQ2FyZEJ1aWxkZXInO1xuaW1wb3J0IEFkYXB0aXZlQ2FyZFJlbmRlcmVyIGZyb20gJy4vQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xuXG5jb25zdCBIZXJvQ2FyZEF0dGFjaG1lbnQgPSAoe1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBhZGFwdGl2ZUNhcmRzLFxuICBhdHRhY2htZW50OiB7IGNvbnRlbnQgfSA9IHt9LFxuICBzdHlsZVNldDogeyBvcHRpb25zIH1cbn0pID0+IHtcbiAgY29uc3QgYnVpbHRDYXJkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgYnVpbGRlciA9IG5ldyBBZGFwdGl2ZUNhcmRCdWlsZGVyKGFkYXB0aXZlQ2FyZHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIChjb250ZW50LmltYWdlcyB8fCBbXSkuZm9yRWFjaChpbWFnZSA9PiBidWlsZGVyLmFkZEltYWdlKGltYWdlLnVybCwgbnVsbCwgaW1hZ2UudGFwKSk7XG5cbiAgICAgIGJ1aWxkZXIuYWRkQ29tbW9uKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gYnVpbGRlci5jYXJkO1xuICAgIH1cbiAgfSwgW2FkYXB0aXZlQ2FyZHMsIGNvbnRlbnQsIG9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBZGFwdGl2ZUNhcmRSZW5kZXJlclxuICAgICAgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9XG4gICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgdGFwQWN0aW9uPXtjb250ZW50ICYmIGNvbnRlbnQudGFwfVxuICAgIC8+XG4gICk7XG59O1xuXG5IZXJvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdGFwOiBQcm9wVHlwZXMuYW55XG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoSGVyb0NhcmRBdHRhY2htZW50KTtcbiJdfQ==
