'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createAdaptiveCardMiddleware;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AdaptiveCardAttachment = _interopRequireDefault(require('./Attachment/AdaptiveCardAttachment'));

var _AnimationCardAttachment = _interopRequireDefault(require('./Attachment/AnimationCardAttachment'));

var _AudioCardAttachment = _interopRequireDefault(require('./Attachment/AudioCardAttachment'));

var _HeroCardAttachment = _interopRequireDefault(require('./Attachment/HeroCardAttachment'));

var _OAuthCardAttachment = _interopRequireDefault(require('./Attachment/OAuthCardAttachment'));

var _ReceiptCardAttachment = _interopRequireDefault(require('./Attachment/ReceiptCardAttachment'));

var _SignInCardAttachment = _interopRequireDefault(require('./Attachment/SignInCardAttachment'));

var _ThumbnailCardAttachment = _interopRequireDefault(require('./Attachment/ThumbnailCardAttachment'));

var _VideoCardAttachment = _interopRequireDefault(require('./Attachment/VideoCardAttachment'));

// TODO: [P4] Rename this file or the whole middleware, it looks either too simple or too comprehensive now
function createAdaptiveCardMiddleware(props) {
  return function() {
    return function(next) {
      function AdaptiveCardMiddleware(_ref) {
        var activity = _ref.activity,
          attachment = _ref.attachment;
        return attachment.contentType === 'application/vnd.microsoft.card.hero'
          ? _react.default.createElement(
              _HeroCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.adaptive'
          ? _react.default.createElement(
              _AdaptiveCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.animation'
          ? _react.default.createElement(
              _AnimationCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.audio'
          ? _react.default.createElement(
              _AudioCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.oauth'
          ? _react.default.createElement(
              _OAuthCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.receipt'
          ? _react.default.createElement(
              _ReceiptCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.signin'
          ? _react.default.createElement(
              _SignInCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.thumbnail'
          ? _react.default.createElement(
              _ThumbnailCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : attachment.contentType === 'application/vnd.microsoft.card.video'
          ? _react.default.createElement(
              _VideoCardAttachment.default,
              (0, _extends2.default)({}, props, {
                activity: activity,
                attachment: attachment
              })
            )
          : next({
              activity: activity,
              attachment: attachment
            });
      }

      AdaptiveCardMiddleware.propTypes = {
        activity: _propTypes.default.any.isRequired,
        attachment: _propTypes.default.shape({
          contentType: _propTypes.default.string.isRequired
        }).isRequired
      };
      return AdaptiveCardMiddleware;
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL2NyZWF0ZUFkYXB0aXZlQ2FyZE1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiY3JlYXRlQWRhcHRpdmVDYXJkTWlkZGxld2FyZSIsInByb3BzIiwibmV4dCIsIkFkYXB0aXZlQ2FyZE1pZGRsZXdhcmUiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnQiLCJjb250ZW50VHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNlLFNBQVNBLDRCQUFULENBQXNDQyxLQUF0QyxFQUE2QztBQUMxRCxTQUFPO0FBQUEsV0FBTSxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsZUFBU0Msc0JBQVQsT0FBMEQ7QUFBQSxZQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsWUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3hELGVBQU9BLFVBQVUsQ0FBQ0MsV0FBWCxLQUEyQixxQ0FBM0IsR0FDTCw2QkFBQywyQkFBRCw2QkFBd0JMLEtBQXhCO0FBQStCLFVBQUEsUUFBUSxFQUFFRyxRQUF6QztBQUFtRCxVQUFBLFVBQVUsRUFBRUM7QUFBL0QsV0FESyxHQUVIQSxVQUFVLENBQUNDLFdBQVgsS0FBMkIseUNBQTNCLEdBQ0YsNkJBQUMsK0JBQUQsNkJBQTRCTCxLQUE1QjtBQUFtQyxVQUFBLFFBQVEsRUFBRUcsUUFBN0M7QUFBdUQsVUFBQSxVQUFVLEVBQUVDO0FBQW5FLFdBREUsR0FFQUEsVUFBVSxDQUFDQyxXQUFYLEtBQTJCLDBDQUEzQixHQUNGLDZCQUFDLGdDQUFELDZCQUE2QkwsS0FBN0I7QUFBb0MsVUFBQSxRQUFRLEVBQUVHLFFBQTlDO0FBQXdELFVBQUEsVUFBVSxFQUFFQztBQUFwRSxXQURFLEdBRUFBLFVBQVUsQ0FBQ0MsV0FBWCxLQUEyQixzQ0FBM0IsR0FDRiw2QkFBQyw0QkFBRCw2QkFBeUJMLEtBQXpCO0FBQWdDLFVBQUEsUUFBUSxFQUFFRyxRQUExQztBQUFvRCxVQUFBLFVBQVUsRUFBRUM7QUFBaEUsV0FERSxHQUVBQSxVQUFVLENBQUNDLFdBQVgsS0FBMkIsc0NBQTNCLEdBQ0YsNkJBQUMsNEJBQUQsNkJBQXlCTCxLQUF6QjtBQUFnQyxVQUFBLFFBQVEsRUFBRUcsUUFBMUM7QUFBb0QsVUFBQSxVQUFVLEVBQUVDO0FBQWhFLFdBREUsR0FFQUEsVUFBVSxDQUFDQyxXQUFYLEtBQTJCLHdDQUEzQixHQUNGLDZCQUFDLDhCQUFELDZCQUEyQkwsS0FBM0I7QUFBa0MsVUFBQSxRQUFRLEVBQUVHLFFBQTVDO0FBQXNELFVBQUEsVUFBVSxFQUFFQztBQUFsRSxXQURFLEdBRUFBLFVBQVUsQ0FBQ0MsV0FBWCxLQUEyQix1Q0FBM0IsR0FDRiw2QkFBQyw2QkFBRCw2QkFBMEJMLEtBQTFCO0FBQWlDLFVBQUEsUUFBUSxFQUFFRyxRQUEzQztBQUFxRCxVQUFBLFVBQVUsRUFBRUM7QUFBakUsV0FERSxHQUVBQSxVQUFVLENBQUNDLFdBQVgsS0FBMkIsMENBQTNCLEdBQ0YsNkJBQUMsZ0NBQUQsNkJBQTZCTCxLQUE3QjtBQUFvQyxVQUFBLFFBQVEsRUFBRUcsUUFBOUM7QUFBd0QsVUFBQSxVQUFVLEVBQUVDO0FBQXBFLFdBREUsR0FFQUEsVUFBVSxDQUFDQyxXQUFYLEtBQTJCLHNDQUEzQixHQUNGLDZCQUFDLDRCQUFELDZCQUF5QkwsS0FBekI7QUFBZ0MsVUFBQSxRQUFRLEVBQUVHLFFBQTFDO0FBQW9ELFVBQUEsVUFBVSxFQUFFQztBQUFoRSxXQURFLEdBR0ZILElBQUksQ0FBQztBQUFFRSxVQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsVUFBQUEsVUFBVSxFQUFWQTtBQUFaLFNBQUQsQ0FuQk47QUFxQkQ7O0FBRURGLE1BQUFBLHNCQUFzQixDQUFDSSxTQUF2QixHQUFtQztBQUNqQ0gsUUFBQUEsUUFBUSxFQUFFSSxtQkFBVUMsR0FBVixDQUFjQyxVQURTO0FBRWpDTCxRQUFBQSxVQUFVLEVBQUVHLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCTCxVQUFBQSxXQUFXLEVBQUVFLG1CQUFVSSxNQUFWLENBQWlCRjtBQURKLFNBQWhCLEVBRVRBO0FBSjhCLE9BQW5DO0FBT0EsYUFBT1Asc0JBQVA7QUFDRCxLQWpDTTtBQUFBLEdBQVA7QUFrQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFkYXB0aXZlQ2FyZEF0dGFjaG1lbnQgZnJvbSAnLi9BdHRhY2htZW50L0FkYXB0aXZlQ2FyZEF0dGFjaG1lbnQnO1xuaW1wb3J0IEFuaW1hdGlvbkNhcmRBdHRhY2htZW50IGZyb20gJy4vQXR0YWNobWVudC9BbmltYXRpb25DYXJkQXR0YWNobWVudCc7XG5pbXBvcnQgQXVkaW9DYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudCc7XG5pbXBvcnQgSGVyb0NhcmRBdHRhY2htZW50IGZyb20gJy4vQXR0YWNobWVudC9IZXJvQ2FyZEF0dGFjaG1lbnQnO1xuaW1wb3J0IE9BdXRoQ2FyZEF0dGFjaG1lbnQgZnJvbSAnLi9BdHRhY2htZW50L09BdXRoQ2FyZEF0dGFjaG1lbnQnO1xuaW1wb3J0IFJlY2VpcHRDYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvUmVjZWlwdENhcmRBdHRhY2htZW50JztcbmltcG9ydCBTaWduSW5DYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvU2lnbkluQ2FyZEF0dGFjaG1lbnQnO1xuaW1wb3J0IFRodW1ibmFpbENhcmRBdHRhY2htZW50IGZyb20gJy4vQXR0YWNobWVudC9UaHVtYm5haWxDYXJkQXR0YWNobWVudCc7XG5pbXBvcnQgVmlkZW9DYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudCc7XG5cbi8vIFRPRE86IFtQNF0gUmVuYW1lIHRoaXMgZmlsZSBvciB0aGUgd2hvbGUgbWlkZGxld2FyZSwgaXQgbG9va3MgZWl0aGVyIHRvbyBzaW1wbGUgb3IgdG9vIGNvbXByZWhlbnNpdmUgbm93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGFwdGl2ZUNhcmRNaWRkbGV3YXJlKHByb3BzKSB7XG4gIHJldHVybiAoKSA9PiBuZXh0ID0+IHtcbiAgICBmdW5jdGlvbiBBZGFwdGl2ZUNhcmRNaWRkbGV3YXJlKHsgYWN0aXZpdHksIGF0dGFjaG1lbnQgfSkge1xuICAgICAgcmV0dXJuIGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuaGVybycgPyAoXG4gICAgICAgIDxIZXJvQ2FyZEF0dGFjaG1lbnQgey4uLnByb3BzfSBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gICAgICApIDogYXR0YWNobWVudC5jb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hZGFwdGl2ZScgPyAoXG4gICAgICAgIDxBZGFwdGl2ZUNhcmRBdHRhY2htZW50IHsuLi5wcm9wc30gYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuYW5pbWF0aW9uJyA/IChcbiAgICAgICAgPEFuaW1hdGlvbkNhcmRBdHRhY2htZW50IHsuLi5wcm9wc30gYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuYXVkaW8nID8gKFxuICAgICAgICA8QXVkaW9DYXJkQXR0YWNobWVudCB7Li4ucHJvcHN9IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLm9hdXRoJyA/IChcbiAgICAgICAgPE9BdXRoQ2FyZEF0dGFjaG1lbnQgey4uLnByb3BzfSBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gICAgICApIDogYXR0YWNobWVudC5jb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5yZWNlaXB0JyA/IChcbiAgICAgICAgPFJlY2VpcHRDYXJkQXR0YWNobWVudCB7Li4ucHJvcHN9IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnNpZ25pbicgPyAoXG4gICAgICAgIDxTaWduSW5DYXJkQXR0YWNobWVudCB7Li4ucHJvcHN9IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnRodW1ibmFpbCcgPyAoXG4gICAgICAgIDxUaHVtYm5haWxDYXJkQXR0YWNobWVudCB7Li4ucHJvcHN9IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnZpZGVvJyA/IChcbiAgICAgICAgPFZpZGVvQ2FyZEF0dGFjaG1lbnQgey4uLnByb3BzfSBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gICAgICApIDogKFxuICAgICAgICBuZXh0KHsgYWN0aXZpdHksIGF0dGFjaG1lbnQgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQWRhcHRpdmVDYXJkTWlkZGxld2FyZS5wcm9wVHlwZXMgPSB7XG4gICAgICBhY3Rpdml0eTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY29udGVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSkuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZXR1cm4gQWRhcHRpdmVDYXJkTWlkZGxld2FyZTtcbiAgfTtcbn1cbiJdfQ==
