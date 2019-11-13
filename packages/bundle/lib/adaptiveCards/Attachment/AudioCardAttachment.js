'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

/* eslint react/no-array-index-key: "off" */
var AudioContent = _botframeworkWebchatComponent.Components.AudioContent;
var useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;

var AudioCardAttachment = function AudioCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    attachment = _ref.attachment,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content;
  _ref$attachment$conte = _ref$attachment$conte === void 0 ? {} : _ref$attachment$conte;
  var _ref$attachment$conte2 = _ref$attachment$conte.autostart,
    autostart = _ref$attachment$conte2 === void 0 ? false : _ref$attachment$conte2,
    _ref$attachment$conte3 = _ref$attachment$conte.autoloop,
    autoloop = _ref$attachment$conte3 === void 0 ? false : _ref$attachment$conte3,
    _ref$attachment$conte4 = _ref$attachment$conte.image;
  _ref$attachment$conte4 = _ref$attachment$conte4 === void 0 ? {} : _ref$attachment$conte4;
  var _ref$attachment$conte5 = _ref$attachment$conte4.url,
    imageURL = _ref$attachment$conte5 === void 0 ? '' : _ref$attachment$conte5,
    _ref$attachment$conte6 = _ref$attachment$conte.media,
    media = _ref$attachment$conte6 === void 0 ? [] : _ref$attachment$conte6;

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
          _react.default.createElement(AudioContent, {
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

AudioCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autostart: _propTypes.default.bool,
      autoloop: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string.isRequired
      }),
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          url: _propTypes.default.string.isRequired
        }).isRequired
      ).isRequired
    })
  }).isRequired
};
var _default = AudioCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJDb21wb25lbnRzIiwidXNlU3R5bGVTZXQiLCJob29rcyIsIkF1ZGlvQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwiYXV0b3N0YXJ0IiwiYXV0b2xvb3AiLCJpbWFnZSIsInVybCIsImltYWdlVVJMIiwibWVkaWEiLCJhdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXQiLCJhdWRpb0NhcmRBdHRhY2htZW50IiwibWFwIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJib29sIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFOQTtJQVFRQSxZLEdBQWlCQyx3QyxDQUFqQkQsWTtJQUNBRSxXLEdBQWdCQyxtQyxDQUFoQkQsVzs7QUFFUixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BT3RCO0FBQUEsTUFOSkMsc0JBTUksUUFOSkEsc0JBTUk7QUFBQSxNQUxKQyxhQUtJLFFBTEpBLGFBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSw2QkFISkEsVUFHSTtBQUFBLGlEQURBLEVBQ0E7QUFBQSw4Q0FGRkMsT0FFRTtBQUFBLDZEQUZpRyxFQUVqRztBQUFBLHFEQUZTQyxTQUVUO0FBQUEsTUFGU0EsU0FFVCx1Q0FGcUIsS0FFckI7QUFBQSxxREFGNEJDLFFBRTVCO0FBQUEsTUFGNEJBLFFBRTVCLHVDQUZ1QyxLQUV2QztBQUFBLHFEQUY4Q0MsS0FFOUM7QUFBQSwrREFGOEUsRUFFOUU7QUFBQSxzREFGdURDLEdBRXZEO0FBQUEsTUFGNERDLFFBRTVELHVDQUZ1RSxFQUV2RTtBQUFBLHFEQUZrRkMsS0FFbEY7QUFBQSxNQUZrRkEsS0FFbEYsdUNBRjBGLEVBRTFGOztBQUFBLHFCQUMyRFosV0FBVyxFQUR0RTtBQUFBO0FBQUEsTUFDMEJhLDJCQUQxQixvQkFDS0MsbUJBREw7O0FBR0osU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRDtBQUFoQixLQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHRCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxpQkFBVUMsS0FBVjtBQUFBLFFBQUdOLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFdBQ1Q7QUFBSSxNQUFBLEdBQUcsRUFBRU07QUFBVCxPQUNFLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLFFBQVEsRUFBRVQsU0FBeEI7QUFBbUMsTUFBQSxJQUFJLEVBQUVDLFFBQXpDO0FBQW1ELE1BQUEsTUFBTSxFQUFFRyxRQUEzRDtBQUFxRSxNQUFBLEdBQUcsRUFBRUQ7QUFBMUUsTUFERixDQURTO0FBQUEsR0FBVixDQURILENBREYsRUFRRSw2QkFBQyxtQkFBRDtBQUNFLElBQUEsc0JBQXNCLEVBQUVQLHNCQUQxQjtBQUVFLElBQUEsYUFBYSxFQUFFQyxhQUZqQjtBQUdFLElBQUEsVUFBVSxFQUFFQztBQUhkLElBUkYsQ0FERjtBQWdCRCxDQTFCRDs7QUE0QkFILG1CQUFtQixDQUFDZSxTQUFwQixHQUFnQztBQUM5QmQsRUFBQUEsc0JBQXNCLEVBQUVlLG1CQUFVQyxHQUFWLENBQWNDLFVBRFI7QUFFOUJoQixFQUFBQSxhQUFhLEVBQUVjLG1CQUFVQyxHQUFWLENBQWNDLFVBRkM7QUFHOUJmLEVBQUFBLFVBQVUsRUFBRWEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJmLElBQUFBLE9BQU8sRUFBRVksbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJkLE1BQUFBLFNBQVMsRUFBRVcsbUJBQVVJLElBREU7QUFFdkJkLE1BQUFBLFFBQVEsRUFBRVUsbUJBQVVJLElBRkc7QUFHdkJiLE1BQUFBLEtBQUssRUFBRVMsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDckJYLFFBQUFBLEdBQUcsRUFBRVEsbUJBQVVLLE1BQVYsQ0FBaUJIO0FBREQsT0FBaEIsQ0FIZ0I7QUFNdkJSLE1BQUFBLEtBQUssRUFBRU0sbUJBQVVNLE9BQVYsQ0FDTE4sbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDZFgsUUFBQUEsR0FBRyxFQUFFUSxtQkFBVUssTUFBVixDQUFpQkg7QUFEUixPQUFoQixFQUVHQSxVQUhFLEVBSUxBO0FBVnFCLEtBQWhCO0FBRGlCLEdBQWhCLEVBYVRBO0FBaEIyQixDQUFoQztlQW1CZWxCLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBob29rcyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcblxuY29uc3QgeyBBdWRpb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5jb25zdCB7IHVzZVN0eWxlU2V0IH0gPSBob29rcztcblxuY29uc3QgQXVkaW9DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHtcbiAgICBjb250ZW50OiB7IGF1dG9zdGFydCA9IGZhbHNlLCBhdXRvbG9vcCA9IGZhbHNlLCBpbWFnZTogeyB1cmw6IGltYWdlVVJMID0gJycgfSA9IHt9LCBtZWRpYSA9IFtdIH0gPSB7fVxuICB9ID0ge31cbn0pID0+IHtcbiAgY29uc3QgW3sgYXVkaW9DYXJkQXR0YWNobWVudDogYXVkaW9DYXJkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXR9PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3RcIj5cbiAgICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8QXVkaW9Db250ZW50IGF1dG9QbGF5PXthdXRvc3RhcnR9IGxvb3A9e2F1dG9sb29wfSBwb3N0ZXI9e2ltYWdlVVJMfSBzcmM9e3VybH0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8Q29tbW9uQ2FyZFxuICAgICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgICBhZGFwdGl2ZUNhcmRzPXthZGFwdGl2ZUNhcmRzfVxuICAgICAgICBhdHRhY2htZW50PXthdHRhY2htZW50fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkF1ZGlvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGF1dG9sb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSksXG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICAgKS5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9DYXJkQXR0YWNobWVudDtcbiJdfQ==
