'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

/* eslint react/no-array-index-key: "off" */
var useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;
var VideoContent = _botframeworkWebchatComponent.Components.VideoContent;

var VideoCardAttachment = function VideoCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    attachment = _ref.attachment,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content;
  _ref$attachment$conte = _ref$attachment$conte === void 0 ? {} : _ref$attachment$conte;
  var media = _ref$attachment$conte.media,
    autostart = _ref$attachment$conte.autostart,
    autoloop = _ref$attachment$conte.autoloop,
    _ref$attachment$conte2 = _ref$attachment$conte.image;
  _ref$attachment$conte2 = _ref$attachment$conte2 === void 0 ? {} : _ref$attachment$conte2;
  var imageURL = _ref$attachment$conte2.url;

  var _useStyleSet = useStyleSet(),
    _useStyleSet2 = (0, _slicedToArray2.default)(_useStyleSet, 1),
    audioCardAttachmentStyleSet = _useStyleSet2[0].audioCardAttachment;

  return _react.default.createElement(
    'div',
    {
      className: audioCardAttachmentStyleSet
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref2, index) {
        var url = _ref2.url;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          _react.default.createElement(VideoContent, {
            autoPlay: autostart,
            loop: autoloop,
            poster: imageURL,
            src: url
          })
        );
      })
    ),
    _react.default.createElement(_CommonCard.default, {
      adaptiveCardHostConfig: adaptiveCardHostConfig,
      adaptiveCards: adaptiveCards,
      attachment: attachment
    })
  );
};

VideoCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autoloop: _propTypes.default.bool,
      autostart: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string
      }),
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          url: _propTypes.default.string
        })
      )
    })
  }).isRequired
};
var _default = VideoCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZVNldCIsImhvb2tzIiwiVmlkZW9Db250ZW50IiwiQ29tcG9uZW50cyIsIlZpZGVvQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwibWVkaWEiLCJhdXRvc3RhcnQiLCJhdXRvbG9vcCIsImltYWdlIiwiaW1hZ2VVUkwiLCJ1cmwiLCJhdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXQiLCJhdWRpb0NhcmRBdHRhY2htZW50IiwibWFwIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJib29sIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFOQTtJQVFRQSxXLEdBQWdCQyxtQyxDQUFoQkQsVztJQUNBRSxZLEdBQWlCQyx3QyxDQUFqQkQsWTs7QUFFUixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BS3RCO0FBQUEsTUFKSkMsc0JBSUksUUFKSkEsc0JBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSw2QkFESkEsVUFDSTtBQUFBLGlEQUQwRixFQUMxRjtBQUFBLDhDQURVQyxPQUNWO0FBQUEsNkRBRG1GLEVBQ25GO0FBQUEsTUFEcUJDLEtBQ3JCLHlCQURxQkEsS0FDckI7QUFBQSxNQUQ0QkMsU0FDNUIseUJBRDRCQSxTQUM1QjtBQUFBLE1BRHVDQyxRQUN2Qyx5QkFEdUNBLFFBQ3ZDO0FBQUEscURBRGlEQyxLQUNqRDtBQUFBLCtEQUQ0RSxFQUM1RTtBQUFBLE1BRCtEQyxRQUMvRCwwQkFEMERDLEdBQzFEOztBQUFBLHFCQUMyRGQsV0FBVyxFQUR0RTtBQUFBO0FBQUEsTUFDMEJlLDJCQUQxQixvQkFDS0MsbUJBREw7O0FBR0osU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRDtBQUFoQixLQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHTixLQUFLLENBQUNRLEdBQU4sQ0FBVSxpQkFBVUMsS0FBVjtBQUFBLFFBQUdKLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFdBQ1Q7QUFBSSxNQUFBLEdBQUcsRUFBRUk7QUFBVCxPQUNFLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLFFBQVEsRUFBRVIsU0FBeEI7QUFBbUMsTUFBQSxJQUFJLEVBQUVDLFFBQXpDO0FBQW1ELE1BQUEsTUFBTSxFQUFFRSxRQUEzRDtBQUFxRSxNQUFBLEdBQUcsRUFBRUM7QUFBMUUsTUFERixDQURTO0FBQUEsR0FBVixDQURILENBREYsRUFRRSw2QkFBQyxtQkFBRDtBQUNFLElBQUEsc0JBQXNCLEVBQUVULHNCQUQxQjtBQUVFLElBQUEsYUFBYSxFQUFFQyxhQUZqQjtBQUdFLElBQUEsVUFBVSxFQUFFQztBQUhkLElBUkYsQ0FERjtBQWdCRCxDQXhCRDs7QUEwQkFILG1CQUFtQixDQUFDZSxTQUFwQixHQUFnQztBQUM5QmQsRUFBQUEsc0JBQXNCLEVBQUVlLG1CQUFVQyxHQUFWLENBQWNDLFVBRFI7QUFFOUJoQixFQUFBQSxhQUFhLEVBQUVjLG1CQUFVQyxHQUFWLENBQWNDLFVBRkM7QUFHOUJmLEVBQUFBLFVBQVUsRUFBRWEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJmLElBQUFBLE9BQU8sRUFBRVksbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJaLE1BQUFBLFFBQVEsRUFBRVMsbUJBQVVJLElBREc7QUFFdkJkLE1BQUFBLFNBQVMsRUFBRVUsbUJBQVVJLElBRkU7QUFHdkJaLE1BQUFBLEtBQUssRUFBRVEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDckJULFFBQUFBLEdBQUcsRUFBRU0sbUJBQVVLO0FBRE0sT0FBaEIsQ0FIZ0I7QUFNdkJoQixNQUFBQSxLQUFLLEVBQUVXLG1CQUFVTSxPQUFWLENBQ0xOLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RULFFBQUFBLEdBQUcsRUFBRU0sbUJBQVVLO0FBREQsT0FBaEIsQ0FESztBQU5nQixLQUFoQjtBQURpQixHQUFoQixFQWFUSDtBQWhCMkIsQ0FBaEM7ZUFtQmVsQixtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIGhvb2tzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBDb21tb25DYXJkIGZyb20gJy4vQ29tbW9uQ2FyZCc7XG5cbmNvbnN0IHsgdXNlU3R5bGVTZXQgfSA9IGhvb2tzO1xuY29uc3QgeyBWaWRlb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5cbmNvbnN0IFZpZGVvQ2FyZEF0dGFjaG1lbnQgPSAoe1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBhZGFwdGl2ZUNhcmRzLFxuICBhdHRhY2htZW50LFxuICBhdHRhY2htZW50OiB7IGNvbnRlbnQ6IHsgbWVkaWEsIGF1dG9zdGFydCwgYXV0b2xvb3AsIGltYWdlOiB7IHVybDogaW1hZ2VVUkwgfSA9IHt9IH0gPSB7fSB9ID0ge31cbn0pID0+IHtcbiAgY29uc3QgW3sgYXVkaW9DYXJkQXR0YWNobWVudDogYXVkaW9DYXJkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXR9PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3RcIj5cbiAgICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8VmlkZW9Db250ZW50IGF1dG9QbGF5PXthdXRvc3RhcnR9IGxvb3A9e2F1dG9sb29wfSBwb3N0ZXI9e2ltYWdlVVJMfSBzcmM9e3VybH0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8Q29tbW9uQ2FyZFxuICAgICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgICBhZGFwdGl2ZUNhcmRzPXthZGFwdGl2ZUNhcmRzfVxuICAgICAgICBhdHRhY2htZW50PXthdHRhY2htZW50fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblZpZGVvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXV0b2xvb3A6IFByb3BUeXBlcy5ib29sLFxuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2FyZEF0dGFjaG1lbnQ7XG4iXX0=
