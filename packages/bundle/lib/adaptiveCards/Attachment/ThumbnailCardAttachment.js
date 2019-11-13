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
var useStyleOptions = _botframeworkWebchatComponent.hooks.useStyleOptions;

var ThumbnailCardAttachment = function ThumbnailCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var content = _ref$attachment.content;

  var _useStyleOptions = useStyleOptions(),
    _useStyleOptions2 = (0, _slicedToArray2.default)(_useStyleOptions, 1),
    styleOptions = _useStyleOptions2[0];

  var builtCard = (0, _react.useMemo)(
    function() {
      if (content) {
        var builder = new _AdaptiveCardBuilder.default(adaptiveCards, styleOptions);
        var TextSize = adaptiveCards.TextSize,
          TextWeight = adaptiveCards.TextWeight;
        var buttons = content.buttons,
          images = content.images,
          subtitle = content.subtitle,
          text = content.text,
          title = content.title;
        var richCardWrapTitle = styleOptions.richCardWrapTitle;

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
    [adaptiveCards, content, styleOptions]
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
  }).isRequired
};
var _default = ThumbnailCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVPcHRpb25zIiwiaG9va3MiLCJUaHVtYm5haWxDYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJzdHlsZU9wdGlvbnMiLCJidWlsdENhcmQiLCJidWlsZGVyIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsIlRleHRTaXplIiwiVGV4dFdlaWdodCIsImJ1dHRvbnMiLCJpbWFnZXMiLCJzdWJ0aXRsZSIsInRleHQiLCJ0aXRsZSIsInJpY2hDYXJkV3JhcFRpdGxlIiwibGVuZ3RoIiwiYWRkQ29sdW1uU2V0IiwiZmlyc3RDb2x1bW4iLCJsYXN0Q29sdW1uIiwidGFwIiwidXJsIiwiYWRkVGV4dEJsb2NrIiwic2l6ZSIsIk1lZGl1bSIsIndlaWdodCIsIkJvbGRlciIsIndyYXAiLCJpc1N1YnRsZSIsImFkZEltYWdlIiwiYWRkQnV0dG9ucyIsImFkZENvbW1vbiIsImNhcmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheSIsImFycmF5T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFQQTtJQVNRQSxlLEdBQW9CQyxtQyxDQUFwQkQsZTs7QUFFUixJQUFNRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLE9BQTZFO0FBQUEsTUFBMUVDLHNCQUEwRSxRQUExRUEsc0JBQTBFO0FBQUEsTUFBbERDLGFBQWtELFFBQWxEQSxhQUFrRDtBQUFBLDZCQUFuQ0MsVUFBbUM7QUFBQSxpREFBVCxFQUFTO0FBQUEsTUFBckJDLE9BQXFCLG1CQUFyQkEsT0FBcUI7O0FBQUEseUJBQ3BGTixlQUFlLEVB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QixtQkFBVUssT0FBVixDQUNOTCxtQkFBVUcsS0FBVixDQUFnQjtBQUNkakIsUUFBQUEsR0FBRyxFQUFFYyxtQkFBVUMsR0FERDtBQUVkZCxRQUFBQSxHQUFHLEVBQUVhLG1CQUFVTSxNQUFWLENBQWlCSjtBQUZSLE9BQWhCLENBRE0sQ0FGZTtBQVF2QnhCLE1BQUFBLFFBQVEsRUFBRXNCLG1CQUFVTSxNQVJHO0FBU3ZCcEIsTUFBQUEsR0FBRyxFQUFFYyxtQkFBVUMsR0FUUTtBQVV2QnRCLE1BQUFBLElBQUksRUFBRXFCLG1CQUFVTSxNQVZPO0FBV3ZCMUIsTUFBQUEsS0FBSyxFQUFFb0IsbUJBQVVNO0FBWE0sS0FBaEIsRUFZTko7QUFidUIsR0FBaEIsRUFjVEE7QUFqQitCLENBQXBDO2VBb0JlckMsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMjUsIDc1XSB9XSAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBBZGFwdGl2ZUNhcmRCdWlsZGVyIGZyb20gJy4vQWRhcHRpdmVDYXJkQnVpbGRlcic7XG5pbXBvcnQgQWRhcHRpdmVDYXJkUmVuZGVyZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRSZW5kZXJlcic7XG5cbmNvbnN0IHsgdXNlU3R5bGVPcHRpb25zIH0gPSBob29rcztcblxuY29uc3QgVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQgPSAoeyBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLCBhZGFwdGl2ZUNhcmRzLCBhdHRhY2htZW50OiB7IGNvbnRlbnQgfSA9IHt9IH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT3B0aW9uc10gPSB1c2VTdHlsZU9wdGlvbnMoKTtcbiAgY29uc3QgYnVpbHRDYXJkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRhcHRpdmVDYXJkQnVpbGRlcihhZGFwdGl2ZUNhcmRzLCBzdHlsZU9wdGlvbnMpO1xuICAgICAgY29uc3QgeyBUZXh0U2l6ZSwgVGV4dFdlaWdodCB9ID0gYWRhcHRpdmVDYXJkcztcbiAgICAgIGNvbnN0IHsgYnV0dG9ucywgaW1hZ2VzLCBzdWJ0aXRsZSwgdGV4dCwgdGl0bGUgfSA9IGNvbnRlbnQ7XG4gICAgICBjb25zdCB7IHJpY2hDYXJkV3JhcFRpdGxlIH0gPSBzdHlsZU9wdGlvbnM7XG5cbiAgICAgIGlmIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBbZmlyc3RDb2x1bW4sIGxhc3RDb2x1bW5dID0gYnVpbGRlci5hZGRDb2x1bW5TZXQoWzc1LCAyNV0pO1xuICAgICAgICBjb25zdCBbeyB0YXAsIHVybCB9XSA9IGltYWdlcztcblxuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciwgd3JhcDogcmljaENhcmRXcmFwVGl0bGUgfSxcbiAgICAgICAgICBmaXJzdENvbHVtblxuICAgICAgICApO1xuXG4gICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHN1YnRpdGxlLCB7IGlzU3VidGxlOiB0cnVlLCB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZSB9LCBmaXJzdENvbHVtbik7XG4gICAgICAgIGJ1aWxkZXIuYWRkSW1hZ2UodXJsLCBsYXN0Q29sdW1uLCB0YXApO1xuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh0ZXh0LCB7IHdyYXA6IHRydWUgfSk7XG4gICAgICAgIGJ1aWxkZXIuYWRkQnV0dG9ucyhidXR0b25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1aWxkZXIuYWRkQ29tbW9uKGNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1aWxkZXIuY2FyZDtcbiAgICB9XG4gIH0sIFthZGFwdGl2ZUNhcmRzLCBjb250ZW50LCBzdHlsZU9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBZGFwdGl2ZUNhcmRSZW5kZXJlclxuICAgICAgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9XG4gICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgdGFwQWN0aW9uPXtjb250ZW50ICYmIGNvbnRlbnQudGFwfVxuICAgIC8+XG4gICk7XG59O1xuXG5UaHVtYm5haWxDYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHRhcDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdGFwOiBQcm9wVHlwZXMuYW55LFxuICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWxDYXJkQXR0YWNobWVudDtcbiJdfQ==
