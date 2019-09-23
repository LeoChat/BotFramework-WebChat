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
function nullOrUndefined(obj) {
  return obj === null || typeof obj === 'undefined';
}

var ReceiptCardAttachment = function ReceiptCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    content = _ref.attachment.content,
    language = _ref.language,
    options = _ref.styleSet.options;
  var builtCard = (0, _react.useMemo)(
    function() {
      var builder = new _AdaptiveCardBuilder.default(adaptiveCards, options);
      var HorizontalAlignment = adaptiveCards.HorizontalAlignment,
        TextSize = adaptiveCards.TextSize,
        TextWeight = adaptiveCards.TextWeight;
      var buttons = content.buttons,
        fact = content.fact,
        items = content.items,
        tax = content.tax,
        title = content.title,
        total = content.total,
        vat = content.vat;
      var richCardWrapTitle = options.richCardWrapTitle;

      if (content) {
        builder.addTextBlock(title, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder,
          wrap: richCardWrapTitle
        });

        if (fact) {
          var _builder$addColumnSet = builder.addColumnSet([75, 25]),
            _builder$addColumnSet2 = (0, _slicedToArray2.default)(_builder$addColumnSet, 2),
            firstFactColumn = _builder$addColumnSet2[0],
            lastFactColumn = _builder$addColumnSet2[1];

          fact.map(function(_ref2) {
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

            if (!nullOrUndefined(vat)) {
              var vatCol = builder.addColumnSet([75, 25]);
              builder.addTextBlock(
                (0, _botframeworkWebchatComponent.localize)('VAT', language),
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
                (0, _botframeworkWebchatComponent.localize)('Tax', language),
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
                (0, _botframeworkWebchatComponent.localize)('Total', language),
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
          });
      }
    },
    [adaptiveCards, content, language, options]
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
      fact: _propTypes.default.arrayOf(
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
  }).isRequired,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref4) {
  var language = _ref4.language,
    styleSet = _ref4.styleSet;
  return {
    language: language,
    styleSet: styleSet
  };
})(ReceiptCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvUmVjZWlwdENhcmRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbIm51bGxPclVuZGVmaW5lZCIsIm9iaiIsIlJlY2VpcHRDYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiY29udGVudCIsImF0dGFjaG1lbnQiLCJsYW5ndWFnZSIsIm9wdGlvbnMiLCJzdHlsZVNldCIsImJ1aWx0Q2FyZCIsImJ1aWxkZXIiLCJBZGFwdGl2ZUNhcmRCdWlsZGVyIiwiSG9yaXpvbnRhbEFsaWdubWVudCIsIlRleHRTaXplIiwiVGV4dFdlaWdodCIsImJ1dHRvbnMiLCJmYWN0IiwiaXRlbXMiLCJ0YXgiLCJ0aXRsZSIsInRvdGFsIiwidmF0IiwicmljaENhcmRXcmFwVGl0bGUiLCJhZGRUZXh0QmxvY2siLCJzaXplIiwiTWVkaXVtIiwid2VpZ2h0IiwiQm9sZGVyIiwid3JhcCIsImFkZENvbHVtblNldCIsImZpcnN0RmFjdENvbHVtbiIsImxhc3RGYWN0Q29sdW1uIiwibWFwIiwia2V5IiwidmFsdWUiLCJob3Jpem9udGFsQWxpZ25tZW50IiwiUmlnaHQiLCJpbWFnZSIsInRhcCIsInVybCIsInByaWNlIiwic3VidGl0bGUiLCJpdGVtQ29sdW1ucyIsIml0ZW1JbWFnZUNvbHVtbiIsImNvbHVtbnMiLCJhZGRJbWFnZSIsIml0ZW1UaXRsZUNvbHVtbiIsIml0ZW1QcmljZUNvbHVtbiIsInZhdENvbCIsInRheENvbCIsInRvdGFsQ29sIiwiYWRkQnV0dG9ucyIsImNhcmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheSIsImFycmF5T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQVBBO0FBU0EsU0FBU0EsZUFBVCxDQUF5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K0JoQ2hELEVBQUFBLFFBQVEsRUFBRThDLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCbEQsSUFBQUEsT0FBTyxFQUFFK0MsbUJBQVVDLEdBQVYsQ0FBY0M7QUFEQyxHQUFoQixFQUVQQTtBQWpDNkIsQ0FBbEM7O2VBb0NlLG9EQUFpQjtBQUFBLE1BQUdsRCxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhRSxRQUFiLFNBQWFBLFFBQWI7QUFBQSxTQUE2QjtBQUFFRixJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUUsSUFBQUEsUUFBUSxFQUFSQTtBQUFaLEdBQTdCO0FBQUEsQ0FBakIsRUFBdUVQLHFCQUF2RSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzAsIDEsIDEwLCAxNSwgMjUsIDc1XSB9XSAqL1xuXG5pbXBvcnQgeyBjb25uZWN0VG9XZWJDaGF0LCBsb2NhbGl6ZSB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBZGFwdGl2ZUNhcmRCdWlsZGVyIGZyb20gJy4vQWRhcHRpdmVDYXJkQnVpbGRlcic7XG5pbXBvcnQgQWRhcHRpdmVDYXJkUmVuZGVyZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRSZW5kZXJlcic7XG5cbmZ1bmN0aW9uIG51bGxPclVuZGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcbn1cblxuY29uc3QgUmVjZWlwdENhcmRBdHRhY2htZW50ID0gKHtcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZyxcbiAgYWRhcHRpdmVDYXJkcyxcbiAgYXR0YWNobWVudDogeyBjb250ZW50IH0sXG4gIGxhbmd1YWdlLFxuICBzdHlsZVNldDogeyBvcHRpb25zIH1cbn0pID0+IHtcbiAgY29uc3QgYnVpbHRDYXJkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgYnVpbGRlciA9IG5ldyBBZGFwdGl2ZUNhcmRCdWlsZGVyKGFkYXB0aXZlQ2FyZHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgSG9yaXpvbnRhbEFsaWdubWVudCwgVGV4dFNpemUsIFRleHRXZWlnaHQgfSA9IGFkYXB0aXZlQ2FyZHM7XG4gICAgY29uc3QgeyBidXR0b25zLCBmYWN0LCBpdGVtcywgdGF4LCB0aXRsZSwgdG90YWwsIHZhdCB9ID0gY29udGVudDtcbiAgICBjb25zdCB7IHJpY2hDYXJkV3JhcFRpdGxlIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHRpdGxlLCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciwgd3JhcDogcmljaENhcmRXcmFwVGl0bGUgfSk7XG5cbiAgICAgIGlmIChmYWN0KSB7XG4gICAgICAgIGNvbnN0IFtmaXJzdEZhY3RDb2x1bW4sIGxhc3RGYWN0Q29sdW1uXSA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcblxuICAgICAgICBmYWN0Lm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhrZXksIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtIH0sIGZpcnN0RmFjdENvbHVtbik7XG4gICAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0IH0sXG4gICAgICAgICAgICBsYXN0RmFjdENvbHVtblxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpdGVtcyAmJlxuICAgICAgICBpdGVtcy5tYXAoKHsgaW1hZ2U6IHsgdGFwLCB1cmwgfSA9IHt9LCBwcmljZSwgc3VidGl0bGUsIHRpdGxlIH0pID0+IHtcbiAgICAgICAgICBsZXQgaXRlbUNvbHVtbnM7XG5cbiAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBjb25zdCBbaXRlbUltYWdlQ29sdW1uLCAuLi5jb2x1bW5zXSA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFsxNSwgNzUsIDEwXSk7XG5cbiAgICAgICAgICAgIGl0ZW1Db2x1bW5zID0gY29sdW1ucztcbiAgICAgICAgICAgIGJ1aWxkZXIuYWRkSW1hZ2UodXJsLCBpdGVtSW1hZ2VDb2x1bW4sIHRhcCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1Db2x1bW5zID0gYnVpbGRlci5hZGRDb2x1bW5TZXQoWzc1LCAyNV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IFtpdGVtVGl0bGVDb2x1bW4sIGl0ZW1QcmljZUNvbHVtbl0gPSBpdGVtQ29sdW1ucztcblxuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciwgd3JhcDogcmljaENhcmRXcmFwVGl0bGUgfSxcbiAgICAgICAgICAgIGl0ZW1UaXRsZUNvbHVtblxuICAgICAgICAgICk7XG4gICAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soc3VidGl0bGUsIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZSB9LCBpdGVtVGl0bGVDb2x1bW4pO1xuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHByaWNlLCB7IGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQgfSwgaXRlbVByaWNlQ29sdW1uKTtcblxuICAgICAgICAgIGlmICghbnVsbE9yVW5kZWZpbmVkKHZhdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhdENvbCA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcblxuICAgICAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soXG4gICAgICAgICAgICAgIGxvY2FsaXplKCdWQVQnLCBsYW5ndWFnZSksXG4gICAgICAgICAgICAgIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyIH0sXG4gICAgICAgICAgICAgIHZhdENvbFswXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHZhdCwgeyBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0IH0sIHZhdENvbFsxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFudWxsT3JVbmRlZmluZWQodGF4KSkge1xuICAgICAgICAgICAgY29uc3QgdGF4Q29sID0gYnVpbGRlci5hZGRDb2x1bW5TZXQoWzc1LCAyNV0pO1xuXG4gICAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhcbiAgICAgICAgICAgICAgbG9jYWxpemUoJ1RheCcsIGxhbmd1YWdlKSxcbiAgICAgICAgICAgICAgeyBzaXplOiBUZXh0U2l6ZS5NZWRpdW0sIHdlaWdodDogVGV4dFdlaWdodC5Cb2xkZXIgfSxcbiAgICAgICAgICAgICAgdGF4Q29sWzBdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2sodGF4LCB7IGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQgfSwgdGF4Q29sWzFdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW51bGxPclVuZGVmaW5lZCh0b3RhbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQ29sID0gYnVpbGRlci5hZGRDb2x1bW5TZXQoWzc1LCAyNV0pO1xuXG4gICAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhcbiAgICAgICAgICAgICAgbG9jYWxpemUoJ1RvdGFsJywgbGFuZ3VhZ2UpLFxuICAgICAgICAgICAgICB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciB9LFxuICAgICAgICAgICAgICB0b3RhbENvbFswXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKFxuICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgeyBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0LCBzaXplOiBUZXh0U2l6ZS5NZWRpdW0sIHdlaWdodDogVGV4dFdlaWdodC5Cb2xkZXIgfSxcbiAgICAgICAgICAgICAgdG90YWxDb2xbMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnVpbGRlci5hZGRCdXR0b25zKGJ1dHRvbnMpO1xuXG4gICAgICAgICAgcmV0dXJuIGJ1aWxkZXIuY2FyZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbYWRhcHRpdmVDYXJkcywgY29udGVudCwgbGFuZ3VhZ2UsIG9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBZGFwdGl2ZUNhcmRSZW5kZXJlclxuICAgICAgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9XG4gICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgdGFwQWN0aW9uPXtjb250ZW50ICYmIGNvbnRlbnQudGFwfVxuICAgIC8+XG4gICk7XG59O1xuXG5SZWNlaXB0Q2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYnV0dG9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgZmFjdDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAga2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgdGFwOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmljZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB0YXA6IFByb3BUeXBlcy5hbnksXG4gICAgICB0YXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRvdGFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmF0OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBsYW5ndWFnZSwgc3R5bGVTZXQgfSkgPT4gKHsgbGFuZ3VhZ2UsIHN0eWxlU2V0IH0pKShSZWNlaXB0Q2FyZEF0dGFjaG1lbnQpO1xuIl19
