'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _adaptivecards = require('adaptivecards');

function addCardAction(cardAction, includesOAuthButtons) {
  var type = cardAction.type;
  var action;

  if (
    type === 'imBack' ||
    type === 'messageBack' ||
    type === 'postBack' ||
    (type === 'signin' && includesOAuthButtons)
  ) {
    action = new _adaptivecards.SubmitAction();
    action.data = {
      __isBotFrameworkCardAction: true,
      cardAction: cardAction
    };
    action.title = cardAction.title;
  } else {
    action = new _adaptivecards.OpenUrlAction();
    action.title = cardAction.title;
    action.url = cardAction.type === 'call' ? 'tel:'.concat(cardAction.value) : cardAction.value;
  }

  return action;
}

var AdaptiveCardBuilder =
  /*#__PURE__*/
  (function() {
    function AdaptiveCardBuilder(adaptiveCards, styleOptions) {
      (0, _classCallCheck2.default)(this, AdaptiveCardBuilder);
      (0, _defineProperty2.default)(this, 'card', void 0);
      (0, _defineProperty2.default)(this, 'container', void 0);
      (0, _defineProperty2.default)(this, 'styleOptions', void 0);
      this.card = new adaptiveCards.AdaptiveCard();
      this.container = new _adaptivecards.Container();
      this.styleOptions = styleOptions;
      this.card.addItem(this.container);
    }

    (0, _createClass2.default)(AdaptiveCardBuilder, [
      {
        key: 'addColumnSet',
        value: function addColumnSet(sizes) {
          var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;
          var columnSet = new _adaptivecards.ColumnSet();
          container.addItem(columnSet);
          return sizes.map(function(size) {
            var column = new _adaptivecards.Column();
            column.width = _adaptivecards.SizeAndUnit.parse(size);
            columnSet.addColumn(column);
            return column;
          });
        }
      },
      {
        key: 'addItems',
        value: function addItems(cardElements) {
          var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;
          cardElements.forEach(function(cardElement) {
            return container.addItem(cardElement);
          });
        }
      },
      {
        key: 'addTextBlock',
        value: function addTextBlock(text, template) {
          var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.container;

          if (typeof text !== 'undefined') {
            var textblock = new _adaptivecards.TextBlock(); // tslint:disable-next-line:forin

            for (var prop in template) {
              textblock[prop] = template[prop];
            }

            textblock.text = text;
            container.addItem(textblock);
          }
        }
      },
      {
        key: 'addButtons',
        value: function addButtons(cardActions, includesOAuthButtons) {
          var _this = this;

          cardActions &&
            cardActions.forEach(function(cardAction) {
              _this.card.addAction(addCardAction(cardAction, includesOAuthButtons));
            });
        }
      },
      {
        key: 'addCommonHeaders',
        value: function addCommonHeaders(content) {
          var richCardWrapTitle = this.styleOptions.richCardWrapTitle;
          this.addTextBlock(content.title, {
            color: _adaptivecards.TextColor.Dark,
            size: _adaptivecards.TextSize.Medium,
            weight: _adaptivecards.TextWeight.Bolder,
            wrap: richCardWrapTitle
          });
          this.addTextBlock(content.subtitle, {
            color: _adaptivecards.TextColor.Dark,
            isSubtle: true,
            wrap: richCardWrapTitle
          });
          this.addTextBlock(content.text, {
            color: _adaptivecards.TextColor.Dark,
            wrap: true
          });
        }
      },
      {
        key: 'addCommon',
        value: function addCommon(content) {
          this.addCommonHeaders(content);
          this.addButtons(content.buttons);
        }
      },
      {
        key: 'addImage',
        value: function addImage(url, container, selectAction) {
          container = container || this.container;
          var image = new _adaptivecards.Image();
          image.url = url;
          image.selectAction = selectAction && addCardAction(selectAction);
          image.size = _adaptivecards.Size.Stretch;
          container.addItem(image);
        }
      }
    ]);
    return AdaptiveCardBuilder;
  })();

exports.default = AdaptiveCardBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkQnVpbGRlci50cyJdLCJuYW1lcyI6WyJhZGRDYXJkQWN0aW9uIiwiY2FyZEFjdGlvbiIsImluY2x1ZGVzT0F1dGhCdXR0b25zIiwidHlwZSIsImFjdGlvbiIsIlN1Ym1pdEFjdGlvbiIsImRhdGEiLCJfX2lzQm90RnJhbWV3b3JrQ2FyZEFjdGlvbiIsInRpdGxlIiwiT3BlblVybEFjdGlvbiIsInVybCIsInZhbHVlIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsImFkYXB0aXZlQ2FyZHMiLCJzdHlsZU9wdGlvbnMiLCJjYXJkIiwiQWRhcHRpdmVDYXJkIiwiY29udGFpbmVyIiwiQ29udGFpbmVyIiwiYWRkSXRlbSIsInNpemVzIiwiY29sdW1uU2V0IiwiQ29sdW1uU2V0IiwibWFwIiwic2l6ZSIsImNvbHVtbiIsIkNvbHVtbiIsIndpZHRoIiwiU2l6ZUFuZFVuaXQiLCJwYXJzZSIsImFkZENvbHVtbiIsImNhcmRFbGVtZW50cyIsImZvckVhY2giLCJjYXJkRWxlbWVudCIsInRleHQiLCJ0ZW1wbGF0ZSIsInRleHRibG9jayIsIlRleHRCbG9jayIsInByb3AiLCJjYXJkQWN0aW9ucyIsImFkZEFjdGlvbiIsImNvbnRlbnQiLCJyaWNoQ2FyZFdyYXBUaXRsZSIsImFkZFRleHRCbG9jayIsImNvbG9yIiwiVGV4dENvbG9yIiwiRGFyayIsIlRleHRTaXplIiwiTWVkaXVtIiwid2VpZ2h0IiwiVGV4dFdlaWdodCIsIkJvbGRlciIsIndyYXAiLCJzdWJ0aXRsZSIsImlzU3VidGxlIiwiYWRkQ29tbW9uSGVhZGVycyIsImFkZEJ1dHRvbnMiLCJidXR0b25zIiwic2VsZWN0QWN0aW9uIiwiaW1hZ2UiLCJJbWFnZSIsIlNpemUiLCJTdHJldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUF3QkEsU0FBU0EsYUFBVCxDQUF1QkMsVUFBdkIsRUFBK0NDLG9CQUEvQyxFQUErRTtBQUFBLE1BQ3JFQyxJQURxRSxHQUM1REYsVUFENEQsQ0FDckVFLElBRHFFO0FBRTdFLE1BQUlDLE1BQUo7O0FBRUEsTUFDRUQsSUFBSSxLQUFLLFFBQVQsSUFDQUEsSUFBSSxLQUFLLGFBRFQsSUFFQUEsSUFBSSxLQUFLLFVBRlQsSUFHQ0EsSUFBSSxLQUFLLFFBQVQsSUFBcUJELG9CQUp4QixFQUtFO0FBQ0FFLElBQUFBLE1BQU0sR0FBRyxJQUFJQywyQkFBSixFQUFUO0FBRUFELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxHQUFjO0FBQ1pDLE1BQUFBLDBCQUEwQixFQUFFLElBRGhCO0FBRVpOLE1BQUFBLFVBQVUsRUFBVkE7QUFGWSxLQUFkO0FBS0FHLElBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlUCxVQUFVLENBQUNPLEtBQTFCO0FBQ0QsR0FkRCxNQWNPO0FBQ0xKLElBQUFBLE1BQU0sR0FBRyxJQUFJSyw0QkFBSixFQUFUO0FBRUFMLElBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlUCxVQUFVLENBQUNPLEtBQTFCO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ00sR0FBUCxHQUFhVCxVQUFVLENBQUNFLElBQVgsS0FBb0IsTUFBcEIsaUJBQW9DRixVQUFVLENBQUNVLEtBQS9DLElBQXlEVixVQUFVLENBQUNVLEtBQWpGO0FBQ0Q7O0FBRUQsU0FBT1AsTUFBUDtBQUNEOztJQUVvQlEsbUI7OztBQUtuQiwrQkFBWUMsYUFBWixFQUEyQkMsWUFBM0IsRUFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QyxTQUFLQyxJQUFMLEdBQVksSUFBSUYsYUFBYSxDQUFDRyxZQUFsQixFQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyx3QkFBSixFQUFqQjtBQUNBLFNBQUtKLFlBQUwsR0FBb0JBLFlBQXBCO0FBRUEsU0FBS0MsSUFBTCxDQUFVSSxPQUFWLENBQWtCLEtBQUtGLFNBQXZCO0FBQ0Q7Ozs7aUNBRVlHLEssRUFBd0Q7QUFBQSxVQUF2Q0gsU0FBdUMsdUVBQWhCLEtBQUtBLFNBQVc7QUFDbkUsVUFBTUksU0FBUyxHQUFHLElBQUlDLHdCQUFKLEVBQWxCO0FBRUFMLE1BQUFBLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkUsU0FBbEI7QUFFQSxhQUFPRCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDdkIsWUFBTUMsTUFBTSxHQUFHLElBQUlDLHFCQUFKLEVBQWY7QUFFQUQsUUFBQUEsTUFBTSxDQUFDRSxLQUFQLEdBQWVDLDJCQUFZQyxLQUFaLENBQWtCTCxJQUFsQixDQUFmO0FBRUFILFFBQUFBLFNBQVMsQ0FBQ1MsU0FBVixDQUFvQkwsTUFBcEI7QUFFQSxlQUFPQSxNQUFQO0FBQ0QsT0FSTSxDQUFQO0FBU0Q7Ozs2QkFFUU0sWSxFQUFvRTtBQUFBLFVBQXZDZCxTQUF1Qyx1RUFBaEIsS0FBS0EsU0FBVztBQUMzRWMsTUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQUFDLFdBQVc7QUFBQSxlQUFJaEIsU0FBUyxDQUFDRSxPQUFWLENBQWtCYyxXQUFsQixDQUFKO0FBQUEsT0FBaEM7QUFDRDs7O2lDQUVZQyxJLEVBQWNDLFEsRUFBcUU7QUFBQSxVQUF2Q2xCLFNBQXVDLHVFQUFoQixLQUFLQSxTQUFXOztBQUM5RixVQUFJLE9BQU9pQixJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CLFlBQU1FLFNBQVMsR0FBRyxJQUFJQyx3QkFBSixFQUFsQixDQUQrQixDQUcvQjs7QUFDQSxhQUFLLElBQU1DLElBQVgsSUFBbUJILFFBQW5CLEVBQTZCO0FBQzNCQyxVQUFBQSxTQUFTLENBQUNFLElBQUQsQ0FBVCxHQUFrQkgsUUFBUSxDQUFDRyxJQUFELENBQTFCO0FBQ0Q7O0FBRURGLFFBQUFBLFNBQVMsQ0FBQ0YsSUFBVixHQUFpQkEsSUFBakI7QUFFQWpCLFFBQUFBLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQmlCLFNBQWxCO0FBQ0Q7QUFDRjs7OytCQUVVRyxXLEVBQTJCckMsb0IsRUFBZ0M7QUFBQTs7QUFDcEVxQyxNQUFBQSxXQUFXLElBQ1RBLFdBQVcsQ0FBQ1AsT0FBWixDQUFvQixVQUFBL0IsVUFBVSxFQUFJO0FBQ2hDLFFBQUEsS0FBSSxDQUFDYyxJQUFMLENBQVV5QixTQUFWLENBQW9CeEMsYUFBYSxDQUFDQyxVQUFELEVBQWFDLG9CQUFiLENBQWpDO0FBQ0QsT0FGRCxDQURGO0FBSUQ7OztxQ0FFZ0J1QyxPLEVBQXlCO0FBQUEsVUFDaENDLGlCQURnQyxHQUNWLEtBQUs1QixZQURLLENBQ2hDNEIsaUJBRGdDO0FBRXhDLFdBQUtDLFlBQUwsQ0FBa0JGLE9BQU8sQ0FBQ2pDLEtBQTFCLEVBQWlDO0FBQy9Cb0MsUUFBQUEsS0FBSyxFQUFFQyx5QkFBVUMsSUFEYztBQUUvQnRCLFFBQUFBLElBQUksRUFBRXVCLHdCQUFTQyxNQUZnQjtBQUcvQkMsUUFBQUEsTUFBTSxFQUFFQywwQkFBV0MsTUFIWTtBQUkvQkMsUUFBQUEsSUFBSSxFQUFFVjtBQUp5QixPQUFqQztBQU1BLFdBQUtDLFlBQUwsQ0FBa0JGLE9BQU8sQ0FBQ1ksUUFBMUIsRUFBb0M7QUFBRVQsUUFBQUEsS0FBSyxFQUFFQyx5QkFBVUMsSUFBbkI7QUFBeUJRLFFBQUFBLFFBQVEsRUFBRSxJQUFuQztBQUF5Q0YsUUFBQUEsSUFBSSxFQUFFVjtBQUEvQyxPQUFwQztBQUNBLFdBQUtDLFlBQUwsQ0FBa0JGLE9BQU8sQ0FBQ1AsSUFBMUIsRUFBZ0M7QUFBRVUsUUFBQUEsS0FBSyxFQUFFQyx5QkFBVUMsSUFBbkI7QUFBeUJNLFFBQUFBLElBQUksRUFBRTtBQUEvQixPQUFoQztBQUNEOzs7OEJBRVNYLE8sRUFBeUI7QUFDakMsV0FBS2MsZ0JBQUwsQ0FBc0JkLE9BQXRCO0FBQ0EsV0FBS2UsVUFBTCxDQUFnQmYsT0FBTyxDQUFDZ0IsT0FBeEI7QUFDRDs7OzZCQUVRL0MsRyxFQUFhTyxTLEVBQXVCeUMsWSxFQUEyQjtBQUN0RXpDLE1BQUFBLFNBQVMsR0FBR0EsU0FBUyxJQUFJLEtBQUtBLFNBQTlCO0FBRUEsVUFBTTBDLEtBQUssR0FBRyxJQUFJQyxvQkFBSixFQUFkO0FBRUFELE1BQUFBLEtBQUssQ0FBQ2pELEdBQU4sR0FBWUEsR0FBWjtBQUNBaUQsTUFBQUEsS0FBSyxDQUFDRCxZQUFOLEdBQXFCQSxZQUFZLElBQUkxRCxhQUFhLENBQUMwRCxZQUFELENBQWxEO0FBQ0FDLE1BQUFBLEtBQUssQ0FBQ25DLElBQU4sR0FBYXFDLG9CQUFLQyxPQUFsQjtBQUVBN0MsTUFBQUEsU0FBUyxDQUFDRSxPQUFWLENBQWtCd0MsS0FBbEI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFkYXB0aXZlQ2FyZCxcbiAgQ2FyZEVsZW1lbnQsXG4gIENvbHVtbixcbiAgQ29sdW1uU2V0LFxuICBDb250YWluZXIsXG4gIEltYWdlLFxuICBPcGVuVXJsQWN0aW9uLFxuICBTaXplLFxuICBTaXplQW5kVW5pdCxcbiAgU3VibWl0QWN0aW9uLFxuICBUZXh0QmxvY2ssXG4gIFRleHRDb2xvcixcbiAgVGV4dFNpemUsXG4gIFRleHRXZWlnaHRcbn0gZnJvbSAnYWRhcHRpdmVjYXJkcyc7XG5cbmltcG9ydCB7IENhcmRBY3Rpb24gfSBmcm9tICdib3RmcmFtZXdvcmstZGlyZWN0bGluZWpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCb3RGcmFtZXdvcmtDYXJkQWN0aW9uIHtcbiAgX19pc0JvdEZyYW1ld29ya0NhcmRBY3Rpb246IGJvb2xlYW47XG4gIGNhcmRBY3Rpb246IENhcmRBY3Rpb247XG59XG5cbmZ1bmN0aW9uIGFkZENhcmRBY3Rpb24oY2FyZEFjdGlvbjogQ2FyZEFjdGlvbiwgaW5jbHVkZXNPQXV0aEJ1dHRvbnM/OiBib29sZWFuKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gY2FyZEFjdGlvbjtcbiAgbGV0IGFjdGlvbjtcblxuICBpZiAoXG4gICAgdHlwZSA9PT0gJ2ltQmFjaycgfHxcbiAgICB0eXBlID09PSAnbWVzc2FnZUJhY2snIHx8XG4gICAgdHlwZSA9PT0gJ3Bvc3RCYWNrJyB8fFxuICAgICh0eXBlID09PSAnc2lnbmluJyAmJiBpbmNsdWRlc09BdXRoQnV0dG9ucylcbiAgKSB7XG4gICAgYWN0aW9uID0gbmV3IFN1Ym1pdEFjdGlvbigpO1xuXG4gICAgYWN0aW9uLmRhdGEgPSB7XG4gICAgICBfX2lzQm90RnJhbWV3b3JrQ2FyZEFjdGlvbjogdHJ1ZSxcbiAgICAgIGNhcmRBY3Rpb25cbiAgICB9O1xuXG4gICAgYWN0aW9uLnRpdGxlID0gY2FyZEFjdGlvbi50aXRsZTtcbiAgfSBlbHNlIHtcbiAgICBhY3Rpb24gPSBuZXcgT3BlblVybEFjdGlvbigpO1xuXG4gICAgYWN0aW9uLnRpdGxlID0gY2FyZEFjdGlvbi50aXRsZTtcbiAgICBhY3Rpb24udXJsID0gY2FyZEFjdGlvbi50eXBlID09PSAnY2FsbCcgPyBgdGVsOiR7Y2FyZEFjdGlvbi52YWx1ZX1gIDogY2FyZEFjdGlvbi52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlQ2FyZEJ1aWxkZXIge1xuICBjYXJkOiBBZGFwdGl2ZUNhcmQ7XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICBzdHlsZU9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihhZGFwdGl2ZUNhcmRzLCBzdHlsZU9wdGlvbnMpIHtcbiAgICB0aGlzLmNhcmQgPSBuZXcgYWRhcHRpdmVDYXJkcy5BZGFwdGl2ZUNhcmQoKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICB0aGlzLnN0eWxlT3B0aW9ucyA9IHN0eWxlT3B0aW9ucztcblxuICAgIHRoaXMuY2FyZC5hZGRJdGVtKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIGFkZENvbHVtblNldChzaXplczogbnVtYmVyW10sIGNvbnRhaW5lcjogQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIpIHtcbiAgICBjb25zdCBjb2x1bW5TZXQgPSBuZXcgQ29sdW1uU2V0KCk7XG5cbiAgICBjb250YWluZXIuYWRkSXRlbShjb2x1bW5TZXQpO1xuXG4gICAgcmV0dXJuIHNpemVzLm1hcChzaXplID0+IHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBDb2x1bW4oKTtcblxuICAgICAgY29sdW1uLndpZHRoID0gU2l6ZUFuZFVuaXQucGFyc2Uoc2l6ZSk7XG5cbiAgICAgIGNvbHVtblNldC5hZGRDb2x1bW4oY29sdW1uKTtcblxuICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW1zKGNhcmRFbGVtZW50czogQ2FyZEVsZW1lbnRbXSwgY29udGFpbmVyOiBDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcikge1xuICAgIGNhcmRFbGVtZW50cy5mb3JFYWNoKGNhcmRFbGVtZW50ID0+IGNvbnRhaW5lci5hZGRJdGVtKGNhcmRFbGVtZW50KSk7XG4gIH1cblxuICBhZGRUZXh0QmxvY2sodGV4dDogc3RyaW5nLCB0ZW1wbGF0ZTogUGFydGlhbDxUZXh0QmxvY2s+LCBjb250YWluZXI6IENvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdGV4dGJsb2NrID0gbmV3IFRleHRCbG9jaygpO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0ZW1wbGF0ZSkge1xuICAgICAgICB0ZXh0YmxvY2tbcHJvcF0gPSB0ZW1wbGF0ZVtwcm9wXTtcbiAgICAgIH1cblxuICAgICAgdGV4dGJsb2NrLnRleHQgPSB0ZXh0O1xuXG4gICAgICBjb250YWluZXIuYWRkSXRlbSh0ZXh0YmxvY2spO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJ1dHRvbnMoY2FyZEFjdGlvbnM6IENhcmRBY3Rpb25bXSwgaW5jbHVkZXNPQXV0aEJ1dHRvbnM/OiBib29sZWFuKSB7XG4gICAgY2FyZEFjdGlvbnMgJiZcbiAgICAgIGNhcmRBY3Rpb25zLmZvckVhY2goY2FyZEFjdGlvbiA9PiB7XG4gICAgICAgIHRoaXMuY2FyZC5hZGRBY3Rpb24oYWRkQ2FyZEFjdGlvbihjYXJkQWN0aW9uLCBpbmNsdWRlc09BdXRoQnV0dG9ucykpO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGRDb21tb25IZWFkZXJzKGNvbnRlbnQ6IElDb21tb25Db250ZW50KSB7XG4gICAgY29uc3QgeyByaWNoQ2FyZFdyYXBUaXRsZSB9ID0gdGhpcy5zdHlsZU9wdGlvbnM7XG4gICAgdGhpcy5hZGRUZXh0QmxvY2soY29udGVudC50aXRsZSwge1xuICAgICAgY29sb3I6IFRleHRDb2xvci5EYXJrLFxuICAgICAgc2l6ZTogVGV4dFNpemUuTWVkaXVtLFxuICAgICAgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlcixcbiAgICAgIHdyYXA6IHJpY2hDYXJkV3JhcFRpdGxlXG4gICAgfSk7XG4gICAgdGhpcy5hZGRUZXh0QmxvY2soY29udGVudC5zdWJ0aXRsZSwgeyBjb2xvcjogVGV4dENvbG9yLkRhcmssIGlzU3VidGxlOiB0cnVlLCB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZSB9KTtcbiAgICB0aGlzLmFkZFRleHRCbG9jayhjb250ZW50LnRleHQsIHsgY29sb3I6IFRleHRDb2xvci5EYXJrLCB3cmFwOiB0cnVlIH0pO1xuICB9XG5cbiAgYWRkQ29tbW9uKGNvbnRlbnQ6IElDb21tb25Db250ZW50KSB7XG4gICAgdGhpcy5hZGRDb21tb25IZWFkZXJzKGNvbnRlbnQpO1xuICAgIHRoaXMuYWRkQnV0dG9ucyhjb250ZW50LmJ1dHRvbnMpO1xuICB9XG5cbiAgYWRkSW1hZ2UodXJsOiBzdHJpbmcsIGNvbnRhaW5lcj86IENvbnRhaW5lciwgc2VsZWN0QWN0aW9uPzogQ2FyZEFjdGlvbikge1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lcjtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICBpbWFnZS51cmwgPSB1cmw7XG4gICAgaW1hZ2Uuc2VsZWN0QWN0aW9uID0gc2VsZWN0QWN0aW9uICYmIGFkZENhcmRBY3Rpb24oc2VsZWN0QWN0aW9uKTtcbiAgICBpbWFnZS5zaXplID0gU2l6ZS5TdHJldGNoO1xuXG4gICAgY29udGFpbmVyLmFkZEl0ZW0oaW1hZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vbkNvbnRlbnQge1xuICBidXR0b25zPzogQ2FyZEFjdGlvbltdO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG4iXX0=
