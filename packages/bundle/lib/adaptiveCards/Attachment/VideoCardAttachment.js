'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

/* eslint react/no-array-index-key: "off" */
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
  var imageURL = _ref$attachment$conte2.url,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.audioCardAttachment
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
  }).isRequired,
  styleSet: _propTypes.default.shape({
    audioCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref3) {
  var styleSet = _ref3.styleSet;
  return {
    styleSet: styleSet
  };
})(VideoCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJWaWRlb0NvbnRlbnQiLCJDb21wb25lbnRzIiwiVmlkZW9DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJtZWRpYSIsImF1dG9zdGFydCIsImF1dG9sb29wIiwiaW1hZ2UiLCJpbWFnZVVSTCIsInVybCIsInN0eWxlU2V0IiwiYXVkaW9DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYm9vbCIsInN0cmluZyIsImFycmF5T2YiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFOQTtJQVFRQSxZLEdBQWlCQyx3QyxDQUFqQkQsWTs7QUFFUixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCO0FBQUEsTUFDMUJDLHNCQUQwQixRQUMxQkEsc0JBRDBCO0FBQUEsTUFFMUJDLGFBRjBCLFFBRTFCQSxhQUYwQjtBQUFBLE1BRzFCQyxVQUgwQixRQUcxQkEsVUFIMEI7QUFBQSw2QkFJMUJBLFVBSjBCO0FBQUEsaURBSW9FLEVBSnBFO0FBQUEsOENBSVpDLE9BSlk7QUFBQSw2REFJNkQsRUFKN0Q7QUFBQSxNQUlEQyxLQUpDLHlCQUlEQSxLQUpDO0FBQUEsTUFJTUMsU0FKTix5QkFJTUEsU0FKTjtBQUFBLE1BSWlCQyxRQUpqQix5QkFJaUJBLFFBSmpCO0FBQUEscURBSTJCQyxLQUozQjtBQUFBLCtEQUlzRCxFQUp0RDtBQUFBLE1BSXlDQyxRQUp6QywwQkFJb0NDLEdBSnBDO0FBQUEsTUFLMUJDLFFBTDBCLFFBSzFCQSxRQUwwQjtBQUFBLFNBTzFCO0FBQUssSUFBQSxTQUFTLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR1AsS0FBSyxDQUFDUSxHQUFOLENBQVUsaUJBQVVDLEtBQVY7QUFBQSxRQUFHSixHQUFILFNBQUdBLEdBQUg7QUFBQSxXQUNUO0FBQUksTUFBQSxHQUFHLEVBQUVJO0FBQVQsT0FDRSw2QkFBQyxZQUFEO0FBQWMsTUFBQSxRQUFRLEVBQUVSLFNBQXhCO0FBQW1DLE1BQUEsSUFBSSxFQUFFQyxRQUF6QztBQUFtRCxNQUFBLE1BQU0sRUFBRUUsUUFBM0Q7QUFBcUUsTUFBQSxHQUFHLEVBQUVDO0FBQTFFLE1BREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGLEVBUUUsNkJBQUMsbUJBQUQ7QUFBWSxJQUFBLHNCQUFzQixFQUFFVCxzQkFBcEM7QUFBNEQsSUFBQSxhQUFhLEVBQUVDLGFBQTNFO0FBQTBGLElBQUEsVUFBVSxFQUFFQztBQUF0RyxJQVJGLENBUDBCO0FBQUEsQ0FBNUI7O0FBbUJBSCxtQkFBbUIsQ0FBQ2UsU0FBcEIsR0FBZ0M7QUFDOUJkLEVBQUFBLHNCQUFzQixFQUFFZSxtQkFBVUMsR0FBVixDQUFjQyxVQURSO0FBRTlCaEIsRUFBQUEsYUFBYSxFQUFFYyxtQkFBVUMsR0FBVixDQUFjQyxVQUZDO0FBRzlCZixFQUFBQSxVQUFVLEVBQUVhLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCZixJQUFBQSxPQUFPLEVBQUVZLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCWixNQUFBQSxRQUFRLEVBQUVTLG1CQUFVSSxJQURHO0FBRXZCZCxNQUFBQSxTQUFTLEVBQUVVLG1CQUFVSSxJQUZFO0FBR3ZCWixNQUFBQSxLQUFLLEVBQUVRLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3JCVCxRQUFBQSxHQUFHLEVBQUVNLG1CQUFVSztBQURNLE9BQWhCLENBSGdCO0FBTXZCaEIsTUFBQUEsS0FBSyxFQUFFVyxtQkFBVU0sT0FBVixDQUNMTixtQkFBVUcsS0FBVixDQUFnQjtBQUNkVCxRQUFBQSxHQUFHLEVBQUVNLG1CQUFVSztBQURELE9BQWhCLENBREs7QUFOZ0IsS0FBaEI7QUFEaUIsR0FBaEIsRUFhVEgsVUFoQjJCO0FBaUI5QlAsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUcsS0FBVixDQUFnQjtBQUN4QlAsSUFBQUEsbUJBQW1CLEVBQUVJLG1CQUFVQyxHQUFWLENBQWNDLFVBRFg7QUFFeEJLLElBQUFBLE9BQU8sRUFBRVAsbUJBQVVDLEdBQVYsQ0FBY0M7QUFGQyxHQUFoQixFQUdQQTtBQXBCMkIsQ0FBaEM7O2VBdUJlLG9EQUFpQjtBQUFBLE1BQUdQLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1EWCxtQkFBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIGNvbm5lY3RUb1dlYkNoYXQgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcblxuY29uc3QgeyBWaWRlb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5cbmNvbnN0IFZpZGVvQ2FyZEF0dGFjaG1lbnQgPSAoe1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBhZGFwdGl2ZUNhcmRzLFxuICBhdHRhY2htZW50LFxuICBhdHRhY2htZW50OiB7IGNvbnRlbnQ6IHsgbWVkaWEsIGF1dG9zdGFydCwgYXV0b2xvb3AsIGltYWdlOiB7IHVybDogaW1hZ2VVUkwgfSA9IHt9IH0gPSB7fSB9ID0ge30sXG4gIHN0eWxlU2V0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5hdWRpb0NhcmRBdHRhY2htZW50fT5cbiAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxuICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxWaWRlb0NvbnRlbnQgYXV0b1BsYXk9e2F1dG9zdGFydH0gbG9vcD17YXV0b2xvb3B9IHBvc3Rlcj17aW1hZ2VVUkx9IHNyYz17dXJsfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8Q29tbW9uQ2FyZCBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfSBhZGFwdGl2ZUNhcmRzPXthZGFwdGl2ZUNhcmRzfSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXV0b2xvb3A6IFByb3BUeXBlcy5ib29sLFxuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF1ZGlvQ2FyZEF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoVmlkZW9DYXJkQXR0YWNobWVudCk7XG4iXX0=
