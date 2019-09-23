'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

/* eslint react/no-array-index-key: "off" */
var ImageContent = _botframeworkWebchatComponent.Components.ImageContent,
  VideoContent = _botframeworkWebchatComponent.Components.VideoContent;

var AnimationCardAttachment = function AnimationCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    attachment = _ref.attachment,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content.media,
    media = _ref$attachment$conte === void 0 ? [] : _ref$attachment$conte,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.animationCardAttachment
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref2, index) {
        var _ref2$profile = _ref2.profile,
          profile = _ref2$profile === void 0 ? '' : _ref2$profile,
          url = _ref2.url;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          /\.gif$/i.test(url)
            ? _react.default.createElement(ImageContent, {
                alt: profile,
                src: url
              })
            : _react.default.createElement(VideoContent, {
                alt: profile,
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

AnimationCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          profile: _propTypes.default.string,
          url: _propTypes.default.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired,
  styleSet: _propTypes.default.shape({
    animationCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref3) {
  var styleSet = _ref3.styleSet;
  return {
    styleSet: styleSet
  };
})(AnimationCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiSW1hZ2VDb250ZW50IiwiQ29tcG9uZW50cyIsIlZpZGVvQ29udGVudCIsIkFuaW1hdGlvbkNhcmRBdHRhY2htZW50IiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHMiLCJhdHRhY2htZW50IiwiY29udGVudCIsIm1lZGlhIiwic3R5bGVTZXQiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvZmlsZSIsInVybCIsInRlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTkE7SUFRUUEsWSxHQUErQkMsd0MsQ0FBL0JELFk7SUFBY0UsWSxHQUFpQkQsd0MsQ0FBakJDLFk7O0FBRXRCLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEI7QUFBQSxNQUM5QkMsc0JBRDhCLFFBQzlCQSxzQkFEOEI7QUFBQSxNQUU5QkMsYUFGOEIsUUFFOUJBLGFBRjhCO0FBQUEsTUFHOUJDLFVBSDhCLFFBRzlCQSxVQUg4QjtBQUFBLDZCQUk5QkEsVUFKOEI7QUFBQSxpREFJWSxFQUpaO0FBQUEsOENBSWhCQyxPQUpnQixDQUlMQyxLQUpLO0FBQUEsTUFJTEEsS0FKSyxzQ0FJRyxFQUpIO0FBQUEsTUFLOUJDLFFBTDhCLFFBSzlCQSxRQUw4QjtBQUFBLFNBTzlCO0FBQUssSUFBQSxTQUFTLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsaUJBQXdCQyxLQUF4QjtBQUFBLDhCQUFHQyxPQUFIO0FBQUEsUUFBR0EsT0FBSCw4QkFBYSxFQUFiO0FBQUEsUUFBaUJDLEdBQWpCLFNBQWlCQSxHQUFqQjtBQUFBLFdBQ1Q7QUFBSSxNQUFBLEdBQUcsRUFBRUY7QUFBVCxPQUNHLFVBQVdHLElBQVgsQ0FBZ0JELEdBQWhCLElBQXVCLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEdBQUcsRUFBRUQsT0FBbkI7QUFBNEIsTUFBQSxHQUFHLEVBQUVDO0FBQWpDLE1BQXZCLEdBQWtFLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEdBQUcsRUFBRUQsT0FBbkI7QUFBNEIsTUFBQSxHQUFHLEVBQUVDO0FBQWpDLE1BRHJFLENBRFM7QUFBQSxHQUFWLENBREgsQ0FERixFQVFFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxzQkFBc0IsRUFBRVYsc0JBQXBDO0FBQTRELElBQUEsYUFBYSxFQUFFQyxhQUEzRTtBQUEwRixJQUFBLFVBQVUsRUFBRUM7QUFBdEcsSUFSRixDQVA4QjtBQUFBLENBQWhDOztBQW1CQUgsdUJBQXVCLENBQUNhLFNBQXhCLEdBQW9DO0FBQ2xDWixFQUFBQSxzQkFBc0IsRUFBRWEsbUJBQVVDLEdBQVYsQ0FBY0MsVUFESjtBQUVsQ2QsRUFBQUEsYUFBYSxFQUFFWSxtQkFBVUMsR0FBVixDQUFjQyxVQUZLO0FBR2xDYixFQUFBQSxVQUFVLEVBQUVXLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVVLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCWixNQUFBQSxLQUFLLEVBQUVTLG1CQUFVSSxPQUFWLENBQ0xKLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RQLFFBQUFBLE9BQU8sRUFBRUksbUJBQVVLLE1BREw7QUFFZFIsUUFBQUEsR0FBRyxFQUFFRyxtQkFBVUssTUFBVixDQUFpQkg7QUFGUixPQUFoQixDQURLLEVBS0xBO0FBTnFCLEtBQWhCLEVBT05BO0FBUnVCLEdBQWhCLEVBU1RBLFVBWitCO0FBYWxDVixFQUFBQSxRQUFRLEVBQUVRLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCVixJQUFBQSx1QkFBdUIsRUFBRU8sbUJBQVVDLEdBQVYsQ0FBY0MsVUFEZjtBQUV4QkksSUFBQUEsT0FBTyxFQUFFTixtQkFBVUMsR0FBVixDQUFjQztBQUZDLEdBQWhCLEVBR1BBO0FBaEIrQixDQUFwQzs7ZUFtQmUsb0RBQWlCO0FBQUEsTUFBR1YsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBakIsRUFBbUROLHVCQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBjb25uZWN0VG9XZWJDaGF0IH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29tbW9uQ2FyZCBmcm9tICcuL0NvbW1vbkNhcmQnO1xuXG5jb25zdCB7IEltYWdlQ29udGVudCwgVmlkZW9Db250ZW50IH0gPSBDb21wb25lbnRzO1xuXG5jb25zdCBBbmltYXRpb25DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHsgY29udGVudDogeyBtZWRpYSA9IFtdIH0gfSA9IHt9LFxuICBzdHlsZVNldFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVTZXQuYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnR9PlxuICAgIDx1bCBjbGFzc05hbWU9XCJtZWRpYS1saXN0XCI+XG4gICAgICB7bWVkaWEubWFwKCh7IHByb2ZpbGUgPSAnJywgdXJsIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7L1xcLmdpZiQvaXUudGVzdCh1cmwpID8gPEltYWdlQ29udGVudCBhbHQ9e3Byb2ZpbGV9IHNyYz17dXJsfSAvPiA6IDxWaWRlb0NvbnRlbnQgYWx0PXtwcm9maWxlfSBzcmM9e3VybH0gLz59XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxDb21tb25DYXJkIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9IGFkYXB0aXZlQ2FyZHM9e2FkYXB0aXZlQ2FyZHN9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gIDwvZGl2PlxuKTtcblxuQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHByb2ZpbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSlcbiAgICAgICkuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQpO1xuIl19
