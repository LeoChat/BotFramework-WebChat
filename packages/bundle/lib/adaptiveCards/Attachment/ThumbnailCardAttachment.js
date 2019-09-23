'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _AdaptiveCardBuilder = _interopRequireDefault(require('./AdaptiveCardBuilder'));

var _AdaptiveCardRenderer = _interopRequireDefault(require('./AdaptiveCardRenderer'));

/* eslint no-magic-numbers: ["error", { "ignore": [25, 75] }] */
var ThumbnailCardAttachment = function ThumbnailCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var content = _ref$attachment.content,
    options = _ref.styleSet.options;
  var builtCard = (0, _react.useMemo)(
    function() {
      if (content) {
        var builder = new _AdaptiveCardBuilder.default(adaptiveCards, options);
        var TextSize = adaptiveCards.TextSize,
          TextWeight = adaptiveCards.TextWeight;
        var buttons = content.buttons,
          images = content.images,
          subtitle = content.subtitle,
          text = content.text,
          title = content.title;
        var richCardWrapTitle = options.richCardWrapTitle;

        if (images && images.length) {
          var _builder$addColumnSet = builder.addColumnSet([75, 25]),
            _builder$addColumnSet2 = (0, _slicedToArray2.default)(_builder$addColumnSet, 2),
            firstColumn = _builder$addColumnSet2[0],
            lastColumn = _builder$addColumnSet2[1];

          var _images = (0, _slicedToArray2.default)(images, 1),
            _images$ = _images[0],
            tap = _images$.tap,
            url = _images$.url;

          builder.addTextBlock(
            title,
            {
              size: TextSize.Medium,
              weight: TextWeight.Bolder,
              wrap: richCardWrapTitle
            },
            firstColumn
          );
          builder.addTextBlock(
            subtitle,
            {
              isSubtle: true,
              wrap: richCardWrapTitle
            },
            firstColumn
          );
          builder.addImage(url, lastColumn, tap);
          builder.addTextBlock(text, {
            wrap: true
          });
          builder.addButtons(buttons);
        } else {
          builder.addCommon(content);
        }

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

ThumbnailCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      buttons: _propTypes.default.array,
      images: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          tap: _propTypes.default.any,
          url: _propTypes.default.string.isRequired
        })
      ),
      subtitle: _propTypes.default.string,
      tap: _propTypes.default.any,
      text: _propTypes.default.string,
      title: _propTypes.default.string
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
})(ThumbnailCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImF0dGFjaG1lbnQiLCJjb250ZW50Iiwib3B0aW9ucyIsInN0eWxlU2V0IiwiYnVpbHRDYXJkIiwiYnVpbGRlciIsIkFkYXB0aXZlQ2FyZEJ1aWxkZXIiLCJUZXh0U2l6ZSIsIlRleHRXZWlnaHQiLCJidXR0b25zIiwiaW1hZ2VzIiwic3VidGl0bGUiLCJ0ZXh0IiwidGl0bGUiLCJyaWNoQ2FyZFdyYXBUaXRsZSIsImxlbmd0aCIsImFkZENvbHVtblNldCIsImZpcnN0Q29sdW1uIiwibGFzdENvbHVtbiIsInRhcCIsInVybCIsImFkZFRleHRCbG9jayIsInNpemUiLCJNZWRpdW0iLCJ3ZWlnaHQiLCJCb2xkZXIiLCJ3cmFwIiwiaXNTdWJ0bGUiLCJhZGRJbWFnZSIsImFkZEJ1dHRvbnMiLCJhZGRDb21tb24iLCJjYXJkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYXJyYXkiLCJhcnJheU9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBUEE7QUFTQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLE9BSzFCO0FBQUEsTUFKSkMsc0JBSUksUUFKSkEsc0JBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSw2QkFGSkMsVUFFSTtBQUFBLGlEQUZzQixFQUV0QjtBQUFBLE1BRlVDLE9BRVYsbUJBRlVBLE9BRVY7QUFBQSxNQURRQyxPQUNSLFFBREpDLFFBQ0ksQ0FEUUQsT0FDUjtBQUNKLE1BQU1FLFNBQVMsR0FBRyxvQkFBUSxZQUFNO0FBQzlCLFFBQUlI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RDtBQUVkZCxRQUFBQSxHQUFHLEVBQUVhLG1CQUFVTSxNQUFWLENBQWlCSjtBQUZSLE9BQWhCLENBRE0sQ0FGZTtBQVF2QnhCLE1BQUFBLFFBQVEsRUFBRXNCLG1CQUFVTSxNQVJHO0FBU3ZCcEIsTUFBQUEsR0FBRyxFQUFFYyxtQkFBVUMsR0FUUTtBQVV2QnRCLE1BQUFBLElBQUksRUFBRXFCLG1CQUFVTSxNQVZPO0FBV3ZCMUIsTUFBQUEsS0FBSyxFQUFFb0IsbUJBQVVNO0FBWE0sS0FBaEIsRUFZTko7QUFidUIsR0FBaEIsRUFjVEEsVUFqQitCO0FBa0JsQ2hDLEVBQUFBLFFBQVEsRUFBRThCLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCbEMsSUFBQUEsT0FBTyxFQUFFK0IsbUJBQVVDLEdBQVYsQ0FBY0M7QUFEQyxHQUFoQixFQUVQQTtBQXBCK0IsQ0FBcEM7O2VBdUJlLG9EQUFpQjtBQUFBLE1BQUdoQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFqQixFQUFtRE4sdUJBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMjUsIDc1XSB9XSAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbm5lY3RUb1dlYkNoYXQgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IEFkYXB0aXZlQ2FyZEJ1aWxkZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRCdWlsZGVyJztcbmltcG9ydCBBZGFwdGl2ZUNhcmRSZW5kZXJlciBmcm9tICcuL0FkYXB0aXZlQ2FyZFJlbmRlcmVyJztcblxuY29uc3QgVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQgPSAoe1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBhZGFwdGl2ZUNhcmRzLFxuICBhdHRhY2htZW50OiB7IGNvbnRlbnQgfSA9IHt9LFxuICBzdHlsZVNldDogeyBvcHRpb25zIH1cbn0pID0+IHtcbiAgY29uc3QgYnVpbHRDYXJkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRhcHRpdmVDYXJkQnVpbGRlcihhZGFwdGl2ZUNhcmRzLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IHsgVGV4dFNpemUsIFRleHRXZWlnaHQgfSA9IGFkYXB0aXZlQ2FyZHM7XG4gICAgICBjb25zdCB7IGJ1dHRvbnMsIGltYWdlcywgc3VidGl0bGUsIHRleHQsIHRpdGxlIH0gPSBjb250ZW50O1xuICAgICAgY29uc3QgeyByaWNoQ2FyZFdyYXBUaXRsZSB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IFtmaXJzdENvbHVtbiwgbGFzdENvbHVtbl0gPSBidWlsZGVyLmFkZENvbHVtblNldChbNzUsIDI1XSk7XG4gICAgICAgIGNvbnN0IFt7IHRhcCwgdXJsIH1dID0gaW1hZ2VzO1xuXG4gICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyLCB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZSB9LFxuICAgICAgICAgIGZpcnN0Q29sdW1uXG4gICAgICAgICk7XG5cbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soc3VidGl0bGUsIHsgaXNTdWJ0bGU6IHRydWUsIHdyYXA6IHJpY2hDYXJkV3JhcFRpdGxlIH0sIGZpcnN0Q29sdW1uKTtcbiAgICAgICAgYnVpbGRlci5hZGRJbWFnZSh1cmwsIGxhc3RDb2x1bW4sIHRhcCk7XG4gICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHRleHQsIHsgd3JhcDogdHJ1ZSB9KTtcbiAgICAgICAgYnVpbGRlci5hZGRCdXR0b25zKGJ1dHRvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVpbGRlci5hZGRDb21tb24oY29udGVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnVpbGRlci5jYXJkO1xuICAgIH1cbiAgfSwgW2FkYXB0aXZlQ2FyZHMsIGNvbnRlbnQsIG9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBZGFwdGl2ZUNhcmRSZW5kZXJlclxuICAgICAgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9XG4gICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgdGFwQWN0aW9uPXtjb250ZW50ICYmIGNvbnRlbnQudGFwfVxuICAgIC8+XG4gICk7XG59O1xuXG5UaHVtYm5haWxDYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHRhcDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdGFwOiBQcm9wVHlwZXMuYW55LFxuICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQpO1xuIl19
