'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _adaptivecards = require('adaptivecards');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

/* eslint no-magic-numbers: ["error", { "ignore": [0, 2] }] */
var ErrorBox = _botframeworkWebchatComponent.Components.ErrorBox;

function isPlainObject(obj) {
  return Object.getPrototypeOf(obj) === Object.prototype;
}

var AdaptiveCardRenderer =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    (0, _inherits2.default)(AdaptiveCardRenderer, _React$PureComponent);

    function AdaptiveCardRenderer(props) {
      var _this;

      (0, _classCallCheck2.default)(this, AdaptiveCardRenderer);
      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(AdaptiveCardRenderer).call(this, props)
      );
      _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
      _this.handleExecuteAction = _this.handleExecuteAction.bind((0, _assertThisInitialized2.default)(_this));
      _this.contentRef = _react.default.createRef();
      _this.state = {
        error: null
      };
      return _this;
    }

    (0, _createClass2.default)(AdaptiveCardRenderer, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.renderCard();
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(_ref) {
          var prevAdaptiveCard = _ref.adaptiveCard;
          var adaptiveCard = this.props.adaptiveCard;
          prevAdaptiveCard !== adaptiveCard && this.renderCard();
        }
      },
      {
        key: 'handleClick',
        value: function handleClick(_ref2) {
          var target = _ref2.target;
          var _this$props = this.props,
            disabled = _this$props.disabled,
            onCardAction = _this$props.onCardAction,
            tapAction = _this$props.tapAction; // Some items, e.g. tappable text, cannot be disabled thru DOM attributes

          if (!disabled) {
            var tabIndex = (0, _botframeworkWebchatComponent.getTabIndex)(target); // If the user is clicking on something that is already clickable, do not allow them to click the card.
            // E.g. a hero card can be tappable, and image and buttons inside the hero card can also be tappable.

            if (typeof tabIndex !== 'number' || tabIndex < 0) {
              tapAction && onCardAction(tapAction);
            }
          }
        }
      },
      {
        key: 'handleExecuteAction',
        value: function handleExecuteAction(action) {
          var _this$props2 = this.props,
            disabled = _this$props2.disabled,
            onCardAction = _this$props2.onCardAction; // Some items, e.g. tappable image, cannot be disabled thru DOM attributes

          if (disabled) {
            return;
          }

          var actionTypeName = action.getJsonTypeName();

          if (actionTypeName === 'Action.OpenUrl') {
            onCardAction({
              type: 'openUrl',
              value: action.url
            });
          } else if (actionTypeName === 'Action.Submit') {
            if (typeof action.data !== 'undefined') {
              var actionData = action.data;

              if (actionData && actionData.__isBotFrameworkCardAction) {
                var cardAction = actionData.cardAction;
                var displayText = cardAction.displayText,
                  type = cardAction.type,
                  value = cardAction.value;
                onCardAction({
                  displayText: displayText,
                  type: type,
                  value: value
                });
              } else {
                onCardAction({
                  type: typeof action.data === 'string' ? 'imBack' : 'postBack',
                  value: action.data
                });
              }

              var current = this.contentRef.current;

              if (current) {
                var inputs = current.querySelectorAll('button, input, select, textarea');

                if (inputs.length > 0) {
                  for (var inputsKey in inputs) {
                    if (inputs.hasOwnProperty(inputsKey)) {
                      inputs[inputsKey].setAttribute('disabled', 'disabled');
                      inputs[inputsKey].setAttribute('style', 'background: #dcdcdc;');
                    }
                  }
                }
              }
            }
          } else {
            console.error('Web Chat: received unknown action from Adaptive Cards');
            console.error(action);
          }
        }
      },
      {
        key: 'renderCard',
        value: function renderCard() {
          var current = this.contentRef.current,
            _this$props3 = this.props,
            adaptiveCard = _this$props3.adaptiveCard,
            adaptiveCardHostConfig = _this$props3.adaptiveCardHostConfig,
            disabled = _this$props3.disabled,
            renderMarkdown = _this$props3.renderMarkdown,
            error = this.state.error;

          if (current && adaptiveCard) {
            // Currently, the only way to set the Markdown engine is to set it thru static member of AdaptiveCard class
            // TODO: [P3] Checks if we could make the "renderMarkdown" per card
            //       This could be limitations from Adaptive Cards package
            //       Because there could be timing difference between .parse and .render, we could be using wrong Markdown engine
            adaptiveCard.constructor.onProcessMarkdown = function(text, result) {
              if (renderMarkdown) {
                result.outputHtml = renderMarkdown(text);
                result.didProcess = true;
              }
            };

            adaptiveCard.onExecuteAction = this.handleExecuteAction;

            if (adaptiveCardHostConfig) {
              adaptiveCard.hostConfig = isPlainObject(adaptiveCardHostConfig)
                ? new _adaptivecards.HostConfig(adaptiveCardHostConfig)
                : adaptiveCardHostConfig;
            }

            var _adaptiveCard$validat = adaptiveCard.validateProperties(),
              failures = _adaptiveCard$validat.failures;

            if (failures.length) {
              // TODO: [P3] Since this can be called from `componentDidUpdate` and potentially error, we should fix a better way to propagate the error.
              var errors = failures.reduce(function(items, _ref3) {
                var errors = _ref3.errors;
                return [].concat((0, _toConsumableArray2.default)(items), (0, _toConsumableArray2.default)(errors));
              }, []);
              return this.setState(function() {
                return {
                  error: errors
                };
              });
            }

            var element;

            try {
              element = adaptiveCard.render();
            } catch (error) {
              return this.setState(function() {
                return {
                  error: error
                };
              });
            }

            if (!element) {
              return this.setState(function() {
                return {
                  error: 'Adaptive Card rendered as empty element'
                };
              });
            }

            error &&
              this.setState(function() {
                return {
                  error: null
                };
              });

            if (disabled) {
              var hyperlinks = element.querySelectorAll('a');
              var inputs = element.querySelectorAll('button, input, select, textarea');
              [].forEach.call(inputs, function(input) {
                input.disabled = true;
              });
              [].forEach.call(hyperlinks, function(hyperlink) {
                hyperlink.addEventListener('click', function(event) {
                  event.preventDefault();
                  event.stopImmediatePropagation();
                  event.stopPropagation();
                });
              });
            }

            var _current$children = (0, _slicedToArray2.default)(current.children, 1),
              firstChild = _current$children[0];

            if (firstChild) {
              current.replaceChild(element, firstChild);
            } else {
              current.appendChild(element);
            }
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props4 = this.props,
            language = _this$props4.language,
            styleSet = _this$props4.styleSet,
            error = this.state.error;
          return error
            ? _react.default.createElement(
                ErrorBox,
                {
                  message: (0, _botframeworkWebchatComponent.localize)('Adaptive Card render error', language)
                },
                _react.default.createElement('pre', null, JSON.stringify(error, null, 2))
              )
            : _react.default.createElement('div', {
                className: styleSet.adaptiveCardRenderer,
                onClick: this.handleClick,
                ref: this.contentRef
              });
        }
      }
    ]);
    return AdaptiveCardRenderer;
  })(_react.default.PureComponent);

AdaptiveCardRenderer.propTypes = {
  adaptiveCard: _propTypes.default.any.isRequired,
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  onCardAction: _propTypes.default.func.isRequired,
  renderMarkdown: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    adaptiveCardRenderer: _propTypes.default.any.isRequired
  }).isRequired,
  tapAction: _propTypes.default.shape({
    type: _propTypes.default.string.isRequired,
    value: _propTypes.default.string
  })
};
AdaptiveCardRenderer.defaultProps = {
  disabled: false,
  tapAction: undefined
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref4) {
  var disabled = _ref4.disabled,
    language = _ref4.language,
    onCardAction = _ref4.onCardAction,
    renderMarkdown = _ref4.renderMarkdown,
    styleSet = _ref4.styleSet,
    tapAction = _ref4.tapAction;
  return {
    disabled: disabled,
    language: language,
    onCardAction: onCardAction,
    renderMarkdown: renderMarkdown,
    styleSet: styleSet,
    tapAction: tapAction
  };
})(AdaptiveCardRenderer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkUmVuZGVyZXIuanMiXSwibmFtZXMiOlsiRXJyb3JCb3giLCJDb21wb25lbnRzIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiQWRhcHRpdmVDYXJkUmVuZGVyZXIiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZUV4ZWN1dGVBY3Rpb24iLCJjb250ZW50UmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsImVycm9yIiwicmVuZGVyQ2FyZCIsInByZXZBZGFwdGl2ZUNhcmQiLCJhZGFwdGl2ZUNhcmQiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIm9uQ2FyZEFjdGlvbiIsInRhcEFjdGlvbiIsInRhYkluZGV4IiwiYWN0aW9uIiwiYWN0aW9uVHlwZU5hbWUiLCJnZXRKc29uVHlwZU5hbWUiLCJ0eXBlIiwidmFsdWUiLCJ1cmwiLCJkYXRhIiwiYWN0aW9uRGF0YSIsIl9faXNCb3RGcmFtZXdvcmtDYXJkQWN0aW9uIiwiY2FyZEFjdGlvbiIsImRpc3BsYXlUZXh0IiwiY3VycmVudCIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpbnB1dHNLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIiwicmVuZGVyTWFya2Rvd24iLCJjb25zdHJ1Y3RvciIsIm9uUHJvY2Vzc01hcmtkb3duIiwidGV4dCIsInJlc3VsdCIsIm91dHB1dEh0bWwiLCJkaWRQcm9jZXNzIiwib25FeGVjdXRlQWN0aW9uIiwiaG9zdENvbmZpZyIsIkhvc3RDb25maWciLCJ2YWxpZGF0ZVByb3BlcnRpZXMiLCJmYWlsdXJlcyIsImVycm9ycyIsInJlZHVjZSIsIml0ZW1zIiwic2V0U3RhdGUiLCJlbGVtZW50IiwicmVuZGVyIiwiaHlwZXJsaW5rcyIsImZvckVhY2giLCJjYWxsIiwiaW5wdXQiLCJoeXBlcmxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkcmVuIiwiZmlyc3RDaGlsZCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkIiwibGFuZ3VhZ2UiLCJzdHlsZVNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGFwdGl2ZUNhcmRSZW5kZXJlciIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJzaGFwZSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQU5BO0lBUVFBLFEsR0FBYUMsd0MsQ0FBYkQsUTs7QUFFUixTQUFTRSxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUMxQixTQUFPQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JGLEdBQXRCLE1BQStCQyxNQUFNLENBQUNFLFNBQTdDO0FBQ0Q7O0lBRUtDLG9COzs7OztBQUNKLGdDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsMEhBQU1BLEtBQU47QUFFQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLDZDQUFuQjtBQUNBLFVBQUtDLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCRCxJQUF6Qiw2Q0FBM0I7QUFFQSxVQUFLRSxVQUFMLEdBQWtCQyxlQUFNQyxTQUFOLEVBQWxCO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLEtBQUssRUFBRTtBQURJLEtBQWI7QUFSaUI7QUFXbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFVBQUw7QUFDRDs7OzZDQUVzRDtBQUFBLFVB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TUFBdUJ2RCxZQUF2QixTQUF1QkEsWUFBdkI7QUFBQSxNQUFxQ3VCLGNBQXJDLFNBQXFDQSxjQUFyQztBQUFBLE1BQXFEaUMsUUFBckQsU0FBcURBLFFBQXJEO0FBQUEsTUFBK0R2RCxTQUEvRCxTQUErREEsU0FBL0Q7QUFBQSxTQUFnRjtBQUM5R0YsSUFBQUEsUUFBUSxFQUFSQSxRQUQ4RztBQUU5R3dELElBQUFBLFFBQVEsRUFBUkEsUUFGOEc7QUFHOUd2RCxJQUFBQSxZQUFZLEVBQVpBLFlBSDhHO0FBSTlHdUIsSUFBQUEsY0FBYyxFQUFkQSxjQUo4RztBQUs5R2lDLElBQUFBLFFBQVEsRUFBUkEsUUFMOEc7QUFNOUd2RCxJQUFBQSxTQUFTLEVBQVRBO0FBTjhHLEdBQWhGO0FBQUEsQ0FBakIsRUFPWGhCLG9CQVBXLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMCwgMl0gfV0gKi9cblxuaW1wb3J0IHsgSG9zdENvbmZpZyB9IGZyb20gJ2FkYXB0aXZlY2FyZHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIGNvbm5lY3RUb1dlYkNoYXQsIGdldFRhYkluZGV4LCBsb2NhbGl6ZSB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5cbmNvbnN0IHsgRXJyb3JCb3ggfSA9IENvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuY2xhc3MgQWRhcHRpdmVDYXJkUmVuZGVyZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRXhlY3V0ZUFjdGlvbiA9IHRoaXMuaGFuZGxlRXhlY3V0ZUFjdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jb250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZW5kZXJDYXJkKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoeyBhZGFwdGl2ZUNhcmQ6IHByZXZBZGFwdGl2ZUNhcmQgfSkge1xuICAgIGNvbnN0IHsgYWRhcHRpdmVDYXJkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcHJldkFkYXB0aXZlQ2FyZCAhPT0gYWRhcHRpdmVDYXJkICYmIHRoaXMucmVuZGVyQ2FyZCgpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2FyZEFjdGlvbiwgdGFwQWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gU29tZSBpdGVtcywgZS5nLiB0YXBwYWJsZSB0ZXh0LCBjYW5ub3QgYmUgZGlzYWJsZWQgdGhydSBET00gYXR0cmlidXRlc1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHRhYkluZGV4ID0gZ2V0VGFiSW5kZXgodGFyZ2V0KTtcblxuICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgY2xpY2tpbmcgb24gc29tZXRoaW5nIHRoYXQgaXMgYWxyZWFkeSBjbGlja2FibGUsIGRvIG5vdCBhbGxvdyB0aGVtIHRvIGNsaWNrIHRoZSBjYXJkLlxuICAgICAgLy8gRS5nLiBhIGhlcm8gY2FyZCBjYW4gYmUgdGFwcGFibGUsIGFuZCBpbWFnZSBhbmQgYnV0dG9ucyBpbnNpZGUgdGhlIGhlcm8gY2FyZCBjYW4gYWxzbyBiZSB0YXBwYWJsZS5cbiAgICAgIGlmICh0eXBlb2YgdGFiSW5kZXggIT09ICdudW1iZXInIHx8IHRhYkluZGV4IDwgMCkge1xuICAgICAgICB0YXBBY3Rpb24gJiYgb25DYXJkQWN0aW9uKHRhcEFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXhlY3V0ZUFjdGlvbihhY3Rpb24pIHtcbiAgICBjb25zdCB7IGRpc2FibGVkLCBvbkNhcmRBY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBTb21lIGl0ZW1zLCBlLmcuIHRhcHBhYmxlIGltYWdlLCBjYW5ub3QgYmUgZGlzYWJsZWQgdGhydSBET00gYXR0cmlidXRlc1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvblR5cGVOYW1lID0gYWN0aW9uLmdldEpzb25UeXBlTmFtZSgpO1xuXG4gICAgaWYgKGFjdGlvblR5cGVOYW1lID09PSAnQWN0aW9uLk9wZW5VcmwnKSB7XG4gICAgICBvbkNhcmRBY3Rpb24oe1xuICAgICAgICB0eXBlOiAnb3BlblVybCcsXG4gICAgICAgIHZhbHVlOiBhY3Rpb24udXJsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGVOYW1lID09PSAnQWN0aW9uLlN1Ym1pdCcpIHtcbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogYWN0aW9uRGF0YSB9ID0gYWN0aW9uO1xuXG4gICAgICAgIGlmIChhY3Rpb25EYXRhICYmIGFjdGlvbkRhdGEuX19pc0JvdEZyYW1ld29ya0NhcmRBY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCB7IGNhcmRBY3Rpb24gfSA9IGFjdGlvbkRhdGE7XG4gICAgICAgICAgY29uc3QgeyBkaXNwbGF5VGV4dCwgdHlwZSwgdmFsdWUgfSA9IGNhcmRBY3Rpb247XG5cbiAgICAgICAgICBvbkNhcmRBY3Rpb24oeyBkaXNwbGF5VGV4dCwgdHlwZSwgdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25DYXJkQWN0aW9uKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVvZiBhY3Rpb24uZGF0YSA9PT0gJ3N0cmluZycgPyAnaW1CYWNrJyA6ICdwb3N0QmFjaycsXG4gICAgICAgICAgICB2YWx1ZTogYWN0aW9uLmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5jb250ZW50UmVmO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGlucHV0cyA9IGN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dHNLZXkgaW4gaW5wdXRzKSB7XG4gICAgICAgICAgICAgIGlmIChpbnB1dHMuaGFzT3duUHJvcGVydHkoaW5wdXRzS2V5KSkge1xuICAgICAgICAgICAgICAgIGlucHV0c1tpbnB1dHNLZXldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dHNbaW5wdXRzS2V5XS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6ICNkY2RjZGM7Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgV2ViIENoYXQ6IHJlY2VpdmVkIHVua25vd24gYWN0aW9uIGZyb20gQWRhcHRpdmUgQ2FyZHNgKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDYXJkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnRSZWY6IHsgY3VycmVudCB9LFxuICAgICAgcHJvcHM6IHsgYWRhcHRpdmVDYXJkLCBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLCBkaXNhYmxlZCwgcmVuZGVyTWFya2Rvd24gfSxcbiAgICAgIHN0YXRlOiB7IGVycm9yIH1cbiAgICB9ID0gdGhpcztcblxuICAgIGlmIChjdXJyZW50ICYmIGFkYXB0aXZlQ2FyZCkge1xuICAgICAgLy8gQ3VycmVudGx5LCB0aGUgb25seSB3YXkgdG8gc2V0IHRoZSBNYXJrZG93biBlbmdpbmUgaXMgdG8gc2V0IGl0IHRocnUgc3RhdGljIG1lbWJlciBvZiBBZGFwdGl2ZUNhcmQgY2xhc3NcblxuICAgICAgLy8gVE9ETzogW1AzXSBDaGVja3MgaWYgd2UgY291bGQgbWFrZSB0aGUgXCJyZW5kZXJNYXJrZG93blwiIHBlciBjYXJkXG4gICAgICAvLyAgICAgICBUaGlzIGNvdWxkIGJlIGxpbWl0YXRpb25zIGZyb20gQWRhcHRpdmUgQ2FyZHMgcGFja2FnZVxuICAgICAgLy8gICAgICAgQmVjYXVzZSB0aGVyZSBjb3VsZCBiZSB0aW1pbmcgZGlmZmVyZW5jZSBiZXR3ZWVuIC5wYXJzZSBhbmQgLnJlbmRlciwgd2UgY291bGQgYmUgdXNpbmcgd3JvbmcgTWFya2Rvd24gZW5naW5lXG5cbiAgICAgIGFkYXB0aXZlQ2FyZC5jb25zdHJ1Y3Rvci5vblByb2Nlc3NNYXJrZG93biA9ICh0ZXh0LCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlbmRlck1hcmtkb3duKSB7XG4gICAgICAgICAgcmVzdWx0Lm91dHB1dEh0bWwgPSByZW5kZXJNYXJrZG93bih0ZXh0KTtcbiAgICAgICAgICByZXN1bHQuZGlkUHJvY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGFkYXB0aXZlQ2FyZC5vbkV4ZWN1dGVBY3Rpb24gPSB0aGlzLmhhbmRsZUV4ZWN1dGVBY3Rpb247XG5cbiAgICAgIGlmIChhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnKSB7XG4gICAgICAgIGFkYXB0aXZlQ2FyZC5ob3N0Q29uZmlnID0gaXNQbGFpbk9iamVjdChhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnKVxuICAgICAgICAgID8gbmV3IEhvc3RDb25maWcoYWRhcHRpdmVDYXJkSG9zdENvbmZpZylcbiAgICAgICAgICA6IGFkYXB0aXZlQ2FyZEhvc3RDb25maWc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZmFpbHVyZXMgfSA9IGFkYXB0aXZlQ2FyZC52YWxpZGF0ZVByb3BlcnRpZXMoKTtcblxuICAgICAgaWYgKGZhaWx1cmVzLmxlbmd0aCkge1xuICAgICAgICAvLyBUT0RPOiBbUDNdIFNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBmcm9tIGBjb21wb25lbnREaWRVcGRhdGVgIGFuZCBwb3RlbnRpYWxseSBlcnJvciwgd2Ugc2hvdWxkIGZpeCBhIGJldHRlciB3YXkgdG8gcHJvcGFnYXRlIHRoZSBlcnJvci5cbiAgICAgICAgY29uc3QgZXJyb3JzID0gZmFpbHVyZXMucmVkdWNlKChpdGVtcywgeyBlcnJvcnMgfSkgPT4gWy4uLml0ZW1zLCAuLi5lcnJvcnNdLCBbXSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGVycm9yOiBlcnJvcnMgfSkpO1xuICAgICAgfVxuXG4gICAgICBsZXQgZWxlbWVudDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZWxlbWVudCA9IGFkYXB0aXZlQ2FyZC5yZW5kZXIoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGVycm9yIH0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGVycm9yOiAnQWRhcHRpdmUgQ2FyZCByZW5kZXJlZCBhcyBlbXB0eSBlbGVtZW50JyB9KSk7XG4gICAgICB9XG5cbiAgICAgIGVycm9yICYmIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXJyb3I6IG51bGwgfSkpO1xuXG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgY29uc3QgaHlwZXJsaW5rcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoaW5wdXRzLCBpbnB1dCA9PiB7XG4gICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoaHlwZXJsaW5rcywgaHlwZXJsaW5rID0+IHtcbiAgICAgICAgICBoeXBlcmxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmaXJzdENoaWxkXSA9IGN1cnJlbnQuY2hpbGRyZW47XG5cbiAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgIGN1cnJlbnQucmVwbGFjZUNoaWxkKGVsZW1lbnQsIGZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJvcHM6IHsgbGFuZ3VhZ2UsIHN0eWxlU2V0IH0sXG4gICAgICBzdGF0ZTogeyBlcnJvciB9XG4gICAgfSA9IHRoaXM7XG5cbiAgICByZXR1cm4gZXJyb3IgPyAoXG4gICAgICA8RXJyb3JCb3ggbWVzc2FnZT17bG9jYWxpemUoJ0FkYXB0aXZlIENhcmQgcmVuZGVyIGVycm9yJywgbGFuZ3VhZ2UpfT5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9FcnJvckJveD5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlU2V0LmFkYXB0aXZlQ2FyZFJlbmRlcmVyfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSByZWY9e3RoaXMuY29udGVudFJlZn0gLz5cbiAgICApO1xuICB9XG59XG5cbkFkYXB0aXZlQ2FyZFJlbmRlcmVyLnByb3BUeXBlcyA9IHtcbiAgYWRhcHRpdmVDYXJkOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNhcmRBY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbmRlck1hcmtkb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhZGFwdGl2ZUNhcmRSZW5kZXJlcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRhcEFjdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSlcbn07XG5cbkFkYXB0aXZlQ2FyZFJlbmRlcmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICB0YXBBY3Rpb246IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBkaXNhYmxlZCwgbGFuZ3VhZ2UsIG9uQ2FyZEFjdGlvbiwgcmVuZGVyTWFya2Rvd24sIHN0eWxlU2V0LCB0YXBBY3Rpb24gfSkgPT4gKHtcbiAgZGlzYWJsZWQsXG4gIGxhbmd1YWdlLFxuICBvbkNhcmRBY3Rpb24sXG4gIHJlbmRlck1hcmtkb3duLFxuICBzdHlsZVNldCxcbiAgdGFwQWN0aW9uXG59KSkoQWRhcHRpdmVDYXJkUmVuZGVyZXIpO1xuIl19
