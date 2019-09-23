'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _AdaptiveCardRenderer = _interopRequireDefault(require('./AdaptiveCardRenderer'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function stripSubmitAction(card) {
  if (!card.actions) {
    return card;
  } // Filter out HTTP action buttons

  var nextActions = card.actions
    .filter(function(action) {
      return action.type !== 'Action.Submit';
    })
    .map(function(action) {
      return action.type === 'Action.ShowCard'
        ? _objectSpread({}, action, {
            card: stripSubmitAction(action.card)
          })
        : action;
    });
  return _objectSpread({}, card, {
    nextActions: nextActions
  });
}

var AdaptiveCardAttachment = function AdaptiveCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    content = _ref.attachment.content,
    renderMarkdown = _ref.renderMarkdown;

  var _useMemo = (0, _react.useMemo)(
      function() {
        if (content) {
          var _card = new adaptiveCards.AdaptiveCard();

          var errors = []; // TODO: [P3] Move from "onParseError" to "card.parse(json, errors)"

          adaptiveCards.AdaptiveCard.onParseError = function(error) {
            return errors.push(error);
          };

          _card.parse(
            stripSubmitAction(
              _objectSpread(
                {
                  version: '1.0'
                },
                content
              )
            )
          );

          adaptiveCards.AdaptiveCard.onParseError = null;
          return {
            card: _card,
            errors: errors
          };
        }
      },
      [adaptiveCards, content]
    ),
    card = _useMemo.card;

  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: card,
    adaptiveCardHostConfig: adaptiveCardHostConfig,
    renderMarkdown: renderMarkdown
  });
};

var _default = AdaptiveCardAttachment;
exports.default = _default;
AdaptiveCardAttachment.propTypes = {
  // TODO: [P2] We should rename adaptiveCards to adaptiveCardsPolyfill
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.any.isRequired
  }).isRequired,
  renderMarkdown: _propTypes.default.any.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJzdHJpcFN1Ym1pdEFjdGlvbiIsImNhcmQiLCJhY3Rpb25zIiwibmV4dEFjdGlvbnMiLCJmaWx0ZXIiLCJhY3Rpb24iLCJ0eXBlIiwibWFwIiwiQWRhcHRpdmVDYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiY29udGVudCIsImF0dGFjaG1lbnQiLCJyZW5kZXJNYXJrZG93biIsIkFkYXB0aXZlQ2FyZCIsImVycm9ycyIsIm9uUGFyc2VFcnJvciIsImVycm9yIiwicHVzaCIsInBhcnNlIiwidmVyc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDL0IsTUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQVYsRUFBbUI7QUFDakIsV0FBT0QsSUFBUDtBQUNELEdBSDhCLENBSy9COzs7QUFDQSxNQUFNRSxXQUFXLEdBQUdGLElBQUksQ0FBQ0MsT0FBTCxDQUNqQkUsTUFEaUIsQ0FDVixVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGVBQXBCO0FBQUEsR0FESSxFQUVqQkMsR0FGaUIsQ0FFYixVQUFBRixNQUFNO0FBQUEsV0FBS0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGlCQUFoQixxQkFBeUNELE1BQXpDO0FBQWlESixNQUFBQSxJQUFJLEVBQUVELGlCQUFpQixDQUFDSyxNQUFNLENBQUNKLElBQVI7QUFBeEUsU0FBMEZJLE1BQS9GO0FBQUEsR0FGTyxDQUFwQjtBQUlBLDJCQUFZSixJQUFaO0FBQWtCRSxJQUFBQSxXQUFXLEVBQVhBO0FBQWxCO0FBQ0Q7O0FBRUQsSUFBTUssc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixPQUF3RjtBQUFBLE1BQXJGQyxzQkFBcUYsUUFBckZBLHNCQUFxRjtBQUFBLE1BQTdEQyxhQUE2RCxRQUE3REEsYUFBNkQ7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBOUNDLFVBQThDLENBQWhDRCxPQUFnQztBQUFBLE1BQXJCRSxjQUFxQixRQUFyQkEsY0FBcUI7O0FBQUEsaUJBQ3BHLG9CQUFRLFlBQU07QUFDN0IsUUFBSUYsT0FBSixFQUFhO0FBQ1gsVUFBTVYsS0FBSSxHQUFHLElBQUlTLGFBQWEsQ0FBQ0ksWUFBbEIsRUFBYjs7QUFDQSxVQUFNQyxNQUFNLEdBQUcsRUFBZixDQUZXLENBSVg7O0FBQ0FMLE1BQUFBLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkUsWUFBM0IsR0FBMEMsVUFBQUMsS0FBSztBQUFBLGVBQUlGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRCxLQUFaLENBQUo7QUFBQSxPQUEvQzs7QUFFQWhCLE1BQUFBLEtBQUksQ0FBQ2tCLEtBQUwsQ0FDRW5CLGlCQUFpQjtBQUNmb0IsUUFBQUEsT0FBTyxFQUFFO0FBRE0sU0FFWlQsT0FGWSxFQURuQjs7QUFPQUQsTUFBQUEsYUFBYSxDQUFDSSxZQUFkLENBQTJCRSxZQUEzQixHQUEwQyxJQUExQztBQUVBLGFBQU87QUFDTGYsUUFBQUEsSUFBSSxFQUFKQSxLQURLO0FBRUxjLFFBQUFBLE1BQU0sRUFBTkE7QUFGSyxPQUFQO0FBSUQ7QUFDRixHQXRCZ0IsRUFzQmQsQ0FBQ0wsYUFBRCxFQUFnQkMsT0FBaEIsQ0F0QmMsQ0FEb0c7QUFBQSxNQUM3R1YsSUFENkcsWUFDN0dBLElBRDZHOztBQXlCckgsU0FDRSw2QkFBQyw2QkFBRDtBQUNFLElBQUEsWUFBWSxFQUFFQSxJQURoQjtBQUVFLElBQUEsc0JBQXNCLEVBQUVRLHNCQUYxQjtBQUdFLElBQUEsY0FBYyxFQUFFSTtBQUhsQixJQURGO0FBT0QsQ0FoQ0Q7O2VBa0NlTCxzQjs7QUFFZkEsc0JBQXNCLENBQUNhLFNBQXZCLEdBQW1DO0FBQ2pDO0FBQ0FaLEVBQUFBLHNCQUFzQixFQUFFYSxtQkFBVUMsR0FBVixDQUFjQyxVQUZMO0FBR2pDZCxFQUFBQSxhQUFhLEVBQUVZLG1CQUFVQyxHQUFWLENBQWNDLFVBSEk7QUFJakNaLEVBQUFBLFVBQVUsRUFBRVUsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJkLElBQUFBLE9BQU8sRUFBRVcsbUJBQVVDLEdBQVYsQ0FBY0M7QUFERyxHQUFoQixFQUVUQSxVQU44QjtBQU9qQ1gsRUFBQUEsY0FBYyxFQUFFUyxtQkFBVUMsR0FBVixDQUFjQztBQVBHLENBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQWRhcHRpdmVDYXJkUmVuZGVyZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRSZW5kZXJlcic7XG5cbmZ1bmN0aW9uIHN0cmlwU3VibWl0QWN0aW9uKGNhcmQpIHtcbiAgaWYgKCFjYXJkLmFjdGlvbnMpIHtcbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIC8vIEZpbHRlciBvdXQgSFRUUCBhY3Rpb24gYnV0dG9uc1xuICBjb25zdCBuZXh0QWN0aW9ucyA9IGNhcmQuYWN0aW9uc1xuICAgIC5maWx0ZXIoYWN0aW9uID0+IGFjdGlvbi50eXBlICE9PSAnQWN0aW9uLlN1Ym1pdCcpXG4gICAgLm1hcChhY3Rpb24gPT4gKGFjdGlvbi50eXBlID09PSAnQWN0aW9uLlNob3dDYXJkJyA/IHsgLi4uYWN0aW9uLCBjYXJkOiBzdHJpcFN1Ym1pdEFjdGlvbihhY3Rpb24uY2FyZCkgfSA6IGFjdGlvbikpO1xuXG4gIHJldHVybiB7IC4uLmNhcmQsIG5leHRBY3Rpb25zIH07XG59XG5cbmNvbnN0IEFkYXB0aXZlQ2FyZEF0dGFjaG1lbnQgPSAoeyBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLCBhZGFwdGl2ZUNhcmRzLCBhdHRhY2htZW50OiB7IGNvbnRlbnQgfSwgcmVuZGVyTWFya2Rvd24gfSkgPT4ge1xuICBjb25zdCB7IGNhcmQgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjb25zdCBjYXJkID0gbmV3IGFkYXB0aXZlQ2FyZHMuQWRhcHRpdmVDYXJkKCk7XG4gICAgICBjb25zdCBlcnJvcnMgPSBbXTtcblxuICAgICAgLy8gVE9ETzogW1AzXSBNb3ZlIGZyb20gXCJvblBhcnNlRXJyb3JcIiB0byBcImNhcmQucGFyc2UoanNvbiwgZXJyb3JzKVwiXG4gICAgICBhZGFwdGl2ZUNhcmRzLkFkYXB0aXZlQ2FyZC5vblBhcnNlRXJyb3IgPSBlcnJvciA9PiBlcnJvcnMucHVzaChlcnJvcik7XG5cbiAgICAgIGNhcmQucGFyc2UoXG4gICAgICAgIHN0cmlwU3VibWl0QWN0aW9uKHtcbiAgICAgICAgICB2ZXJzaW9uOiAnMS4wJyxcbiAgICAgICAgICAuLi5jb250ZW50XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBhZGFwdGl2ZUNhcmRzLkFkYXB0aXZlQ2FyZC5vblBhcnNlRXJyb3IgPSBudWxsO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYXJkLFxuICAgICAgICBlcnJvcnNcbiAgICAgIH07XG4gICAgfVxuICB9LCBbYWRhcHRpdmVDYXJkcywgY29udGVudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFkYXB0aXZlQ2FyZFJlbmRlcmVyXG4gICAgICBhZGFwdGl2ZUNhcmQ9e2NhcmR9XG4gICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfVxuICAgICAgcmVuZGVyTWFya2Rvd249e3JlbmRlck1hcmtkb3dufVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGFwdGl2ZUNhcmRBdHRhY2htZW50O1xuXG5BZGFwdGl2ZUNhcmRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgLy8gVE9ETzogW1AyXSBXZSBzaG91bGQgcmVuYW1lIGFkYXB0aXZlQ2FyZHMgdG8gYWRhcHRpdmVDYXJkc1BvbHlmaWxsXG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICByZW5kZXJNYXJrZG93bjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59O1xuIl19
