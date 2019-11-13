'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _toArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toArray'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _AdaptiveCardBuilder = _interopRequireDefault(require('./AdaptiveCardBuilder'));

var _AdaptiveCardRenderer = _interopRequireDefault(require('./AdaptiveCardRenderer'));

/* eslint no-magic-numbers: ["error", { "ignore": [0, 1, 10, 15, 25, 75] }] */
var useLocalize = _botframeworkWebchatComponent.hooks.useLocalize,
  useStyleOptions = _botframeworkWebchatComponent.hooks.useStyleOptions;

function nullOrUndefined(obj) {
  return obj === null || typeof obj === 'undefined';
}

var ReceiptCardAttachment = function ReceiptCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    content = _ref.attachment.content;

  var _useStyleOptions = useStyleOptions(),
    _useStyleOptions2 = (0, _slicedToArray2.default)(_useStyleOptions, 1),
    styleOptions = _useStyleOptions2[0];

  var taxText = useLocalize('Tax');
  var totalText = useLocalize('Total');
  var vatText = useLocalize('VAT');
  var builtCard = (0, _react.useMemo)(
    function() {
      var builder = new _AdaptiveCardBuilder.default(adaptiveCards, styleOptions);
      var HorizontalAlignment = adaptiveCards.HorizontalAlignment,
        TextSize = adaptiveCards.TextSize,
        TextWeight = adaptiveCards.TextWeight;
      var buttons = content.buttons,
        facts = content.facts,
        items = content.items,
        tax = content.tax,
        title = content.title,
        total = content.total,
        vat = content.vat;
      var richCardWrapTitle = styleOptions.richCardWrapTitle;

      if (content) {
        builder.addTextBlock(title, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder,
          wrap: richCardWrapTitle
        });

        if (facts) {
          var _builder$addColumnSet = builder.addColumnSet([75, 25]),
            _builder$addColumnSet2 = (0, _slicedToArray2.default)(_builder$addColumnSet, 2),
            firstFactColumn = _builder$addColumnSet2[0],
            lastFactColumn = _builder$addColumnSet2[1];

          facts.map(function(_ref2) {
            var key = _ref2.key,
              value = _ref2.value;
            builder.addTextBlock(
              key,
              {
                size: TextSize.Medium
              },
              firstFactColumn
            );
            builder.addTextBlock(
              value,
              {
                size: TextSize.Medium,
                horizontalAlignment: HorizontalAlignment.Right
              },
              lastFactColumn
            );
          });
        }

        items &&
          items.map(function(_ref3) {
            var _ref3$image = _ref3.image;
            _ref3$image = _ref3$image === void 0 ? {} : _ref3$image;
            var tap = _ref3$image.tap,
              url = _ref3$image.url,
              price = _ref3.price,
              subtitle = _ref3.subtitle,
              title = _ref3.title;
            var itemColumns;

            if (url) {
              var _builder$addColumnSet3 = builder.addColumnSet([15, 75, 10]),
                _builder$addColumnSet4 = (0, _toArray2.default)(_builder$addColumnSet3),
                itemImageColumn = _builder$addColumnSet4[0],
                columns = _builder$addColumnSet4.slice(1);

              itemColumns = columns;
              builder.addImage(url, itemImageColumn, tap);
            } else {
              itemColumns = builder.addColumnSet([75, 25]);
            }

            var _itemColumns = itemColumns,
              _itemColumns2 = (0, _slicedToArray2.default)(_itemColumns, 2),
              itemTitleColumn = _itemColumns2[0],
              itemPriceColumn = _itemColumns2[1];

            builder.addTextBlock(
              title,
              {
                size: TextSize.Medium,
                weight: TextWeight.Bolder,
                wrap: richCardWrapTitle
              },
              itemTitleColumn
            );
            builder.addTextBlock(
              subtitle,
              {
                size: TextSize.Medium,
                wrap: richCardWrapTitle
              },
              itemTitleColumn
            );
            builder.addTextBlock(
              price,
              {
                horizontalAlignment: HorizontalAlignment.Right
              },
              itemPriceColumn
            );
          });

        if (!nullOrUndefined(vat)) {
          var vatCol = builder.addColumnSet([75, 25]);
          builder.addTextBlock(
            vatText,
            {
              size: TextSize.Medium,
              weight: TextWeight.Bolder
            },
            vatCol[0]
          );
          builder.addTextBlock(
            vat,
            {
              horizontalAlignment: HorizontalAlignment.Right
            },
            vatCol[1]
          );
        }

        if (!nullOrUndefined(tax)) {
          var taxCol = builder.addColumnSet([75, 25]);
          builder.addTextBlock(
            taxText,
            {
              size: TextSize.Medium,
              weight: TextWeight.Bolder
            },
            taxCol[0]
          );
          builder.addTextBlock(
            tax,
            {
              horizontalAlignment: HorizontalAlignment.Right
            },
            taxCol[1]
          );
        }

        if (!nullOrUndefined(total)) {
          var totalCol = builder.addColumnSet([75, 25]);
          builder.addTextBlock(
            totalText,
            {
              size: TextSize.Medium,
              weight: TextWeight.Bolder
            },
            totalCol[0]
          );
          builder.addTextBlock(
            total,
            {
              horizontalAlignment: HorizontalAlignment.Right,
              size: TextSize.Medium,
              weight: TextWeight.Bolder
            },
            totalCol[1]
          );
        }

        builder.addButtons(buttons);
        return builder.card;
      }
    },
    [adaptiveCards, content, styleOptions, taxText, totalText, vatText]
  );
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    adaptiveCardHostConfig: adaptiveCardHostConfig,
    tapAction: content && content.tap
  });
};

ReceiptCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      buttons: _propTypes.default.array,
      facts: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          key: _propTypes.default.string,
          value: _propTypes.default.string
        })
      ),
      items: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          image: _propTypes.default.shape({
            tap: _propTypes.default.any,
            url: _propTypes.default.string.isRequired
          }),
          price: _propTypes.default.string.isRequired,
          subtitle: _propTypes.default.string,
          title: _propTypes.default.string.isRequired
        })
      ),
      tap: _propTypes.default.any,
      tax: _propTypes.default.string,
      title: _propTypes.default.string,
      total: _propTypes.default.string,
      vat: _propTypes.default.string
    }).isRequired
  }).isRequired
};
var _default = ReceiptCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvUmVjZWlwdENhcmRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbInVzZUxvY2FsaXplIiwiaG9va3MiLCJ1c2VTdHlsZU9wdGlvbnMiLCJudWxsT3JVbmRlZmluZWQiLCJvYmoiLCJSZWNlaXB0Q2FyZEF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwiYWRhcHRpdmVDYXJkcyIsImNvbnRlbnQiLCJhdHRhY2htZW50Iiwic3R5bGVPcHRpb25zIiwidGF4VGV4dCIsInRvdGFsVGV4dCIsInZhdFRleHQiLCJidWlsdENhcmQiLCJidWlsZGVyIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsIkhvcml6b250YWxBbGlnbm1lbnQiLCJUZXh0U2l6ZSIsIlRleHRXZWlnaHQiLCJidXR0b25zIiwiZmFjdHMiLCJpdGVtcyIsInRheCIsInRpdGxlIiwidG90YWwiLCJ2YXQiLCJyaWNoQ2FyZFdyYXBUaXRsZSIsImFkZFRleHRCbG9jayIsInNpemUiLCJNZWRpdW0iLCJ3ZWlnaHQiLCJCb2xkZXIiLCJ3cmFwIiwiYWRkQ29sdW1uU2V0IiwiZmlyc3RGYWN0Q29sdW1uIiwibGFzdEZhY3RDb2x1bW4iLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImhvcml6b250YWxBbGlnbm1lbnQiLCJSaWdodCIsImltYWdlIiwidGFwIiwidXJsIiwicHJpY2UiLCJzdWJ0aXRsZSIsIml0ZW1Db2x1bW5zIiwiaXRlbUltYWdlQ29sdW1uIiwiY29sdW1ucyIsImFkZEltYWdlIiwiaXRlbVRpdGxlQ29sdW1uIiwiaXRlbVByaWNlQ29sdW1uIiwidmF0Q29sIiwidGF4Q29sIiwidG90YWxDb2wiLCJhZGRCdXR0b25zIiwiY2FyZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFycmF5IiwiYXJyYXlPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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UTtBQXFCdkJ6QyxNQUFBQSxLQUFLLEVBQUVtQyxtQkFBVU0sTUFyQk07QUFzQnZCeEMsTUFBQUEsS0FBSyxFQUFFa0MsbUJBQVVNLE1BdEJNO0FBdUJ2QnZDLE1BQUFBLEdBQUcsRUFBRWlDLG1CQUFVTTtBQXZCUSxLQUFoQixFQXdCTko7QUF6QnVCLEdBQWhCLEVBMEJUQTtBQTdCNkIsQ0FBbEM7ZUFnQ2V4RCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlXCI6IFswLCAxLCAxMCwgMTUsIDI1LCA3NV0gfV0gKi9cblxuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQWRhcHRpdmVDYXJkQnVpbGRlciBmcm9tICcuL0FkYXB0aXZlQ2FyZEJ1aWxkZXInO1xuaW1wb3J0IEFkYXB0aXZlQ2FyZFJlbmRlcmVyIGZyb20gJy4vQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xuXG5jb25zdCB7IHVzZUxvY2FsaXplLCB1c2VTdHlsZU9wdGlvbnMgfSA9IGhvb2tzO1xuXG5mdW5jdGlvbiBudWxsT3JVbmRlZmluZWQob2JqKSB7XG4gIHJldHVybiBvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmNvbnN0IFJlY2VpcHRDYXJkQXR0YWNobWVudCA9ICh7IGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsIGFkYXB0aXZlQ2FyZHMsIGF0dGFjaG1lbnQ6IHsgY29udGVudCB9IH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT3B0aW9uc10gPSB1c2VTdHlsZU9wdGlvbnMoKTtcbiAgY29uc3QgdGF4VGV4dCA9IHVzZUxvY2FsaXplKCdUYXgnKTtcbiAgY29uc3QgdG90YWxUZXh0ID0gdXNlTG9jYWxpemUoJ1RvdGFsJyk7XG4gIGNvbnN0IHZhdFRleHQgPSB1c2VMb2NhbGl6ZSgnVkFUJyk7XG5cbiAgY29uc3QgYnVpbHRDYXJkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgYnVpbGRlciA9IG5ldyBBZGFwdGl2ZUNhcmRCdWlsZGVyKGFkYXB0aXZlQ2FyZHMsIHN0eWxlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBIb3Jpem9udGFsQWxpZ25tZW50LCBUZXh0U2l6ZSwgVGV4dFdlaWdodCB9ID0gYWRhcHRpdmVDYXJkcztcbiAgICBjb25zdCB7IGJ1dHRvbnMsIGZhY3RzLCBpdGVtcywgdGF4LCB0aXRsZSwgdG90YWwsIHZhdCB9ID0gY29udGVudDtcbiAgICBjb25zdCB7IHJpY2hDYXJkV3JhcFRpdGxlIH0gPSBzdHlsZU9wdGlvbnM7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2sodGl0bGUsIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyLCB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZSB9KTtcblxuICAgICAgaWYgKGZhY3RzKSB7XG4gICAgICAgIGNvbnN0IFtmaXJzdEZhY3RDb2x1bW4sIGxhc3RGYWN0Q29sdW1uXSA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcblxuICAgICAgICBmYWN0cy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soa2V5LCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSB9LCBmaXJzdEZhY3RDb2x1bW4pO1xuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCB9LFxuICAgICAgICAgICAgbGFzdEZhY3RDb2x1bW5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaXRlbXMgJiZcbiAgICAgICAgaXRlbXMubWFwKCh7IGltYWdlOiB7IHRhcCwgdXJsIH0gPSB7fSwgcHJpY2UsIHN1YnRpdGxlLCB0aXRsZSB9KSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW1Db2x1bW5zO1xuXG4gICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgY29uc3QgW2l0ZW1JbWFnZUNvbHVtbiwgLi4uY29sdW1uc10gPSBidWlsZGVyLmFkZENvbHVtblNldChbMTUsIDc1LCAxMF0pO1xuXG4gICAgICAgICAgICBpdGVtQ29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgICAgICBidWlsZGVyLmFkZEltYWdlKHVybCwgaXRlbUltYWdlQ29sdW1uLCB0YXApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtQ29sdW1ucyA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBbaXRlbVRpdGxlQ29sdW1uLCBpdGVtUHJpY2VDb2x1bW5dID0gaXRlbUNvbHVtbnM7XG5cbiAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgeyBzaXplOiBUZXh0U2l6ZS5NZWRpdW0sIHdlaWdodDogVGV4dFdlaWdodC5Cb2xkZXIsIHdyYXA6IHJpY2hDYXJkV3JhcFRpdGxlIH0sXG4gICAgICAgICAgICBpdGVtVGl0bGVDb2x1bW5cbiAgICAgICAgICApO1xuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHN1YnRpdGxlLCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd3JhcDogcmljaENhcmRXcmFwVGl0bGUgfSwgaXRlbVRpdGxlQ29sdW1uKTtcbiAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhwcmljZSwgeyBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0IH0sIGl0ZW1QcmljZUNvbHVtbik7XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW51bGxPclVuZGVmaW5lZCh2YXQpKSB7XG4gICAgICAgIGNvbnN0IHZhdENvbCA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcblxuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh2YXRUZXh0LCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciB9LCB2YXRDb2xbMF0pO1xuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh2YXQsIHsgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCB9LCB2YXRDb2xbMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW51bGxPclVuZGVmaW5lZCh0YXgpKSB7XG4gICAgICAgIGNvbnN0IHRheENvbCA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcblxuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh0YXhUZXh0LCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciB9LCB0YXhDb2xbMF0pO1xuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh0YXgsIHsgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCB9LCB0YXhDb2xbMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW51bGxPclVuZGVmaW5lZCh0b3RhbCkpIHtcbiAgICAgICAgY29uc3QgdG90YWxDb2wgPSBidWlsZGVyLmFkZENvbHVtblNldChbNzUsIDI1XSk7XG5cbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2sodG90YWxUZXh0LCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciB9LCB0b3RhbENvbFswXSk7XG4gICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKFxuICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgIHsgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCwgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyIH0sXG4gICAgICAgICAgdG90YWxDb2xbMV1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgYnVpbGRlci5hZGRCdXR0b25zKGJ1dHRvbnMpO1xuXG4gICAgICByZXR1cm4gYnVpbGRlci5jYXJkO1xuICAgIH1cbiAgfSwgW2FkYXB0aXZlQ2FyZHMsIGNvbnRlbnQsIHN0eWxlT3B0aW9ucywgdGF4VGV4dCwgdG90YWxUZXh0LCB2YXRUZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWRhcHRpdmVDYXJkUmVuZGVyZXJcbiAgICAgIGFkYXB0aXZlQ2FyZD17YnVpbHRDYXJkfVxuICAgICAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZz17YWRhcHRpdmVDYXJkSG9zdENvbmZpZ31cbiAgICAgIHRhcEFjdGlvbj17Y29udGVudCAmJiBjb250ZW50LnRhcH1cbiAgICAvPlxuICApO1xufTtcblxuUmVjZWlwdENhcmRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZzogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhZGFwdGl2ZUNhcmRzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgIGZhY3RzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICBrZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgaW1hZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICB0YXA6IFByb3BUeXBlcy5hbnksXG4gICAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRhcDogUHJvcFR5cGVzLmFueSxcbiAgICAgIHRheDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdG90YWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YXQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHRDYXJkQXR0YWNobWVudDtcbiJdfQ==
