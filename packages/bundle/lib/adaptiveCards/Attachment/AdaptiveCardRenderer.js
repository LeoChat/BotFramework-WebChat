'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _adaptivecards = require('adaptivecards');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _this = void 0;

var ErrorBox = _botframeworkWebchatComponent.Components.ErrorBox;
var useLocalize = _botframeworkWebchatComponent.hooks.useLocalize,
  useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;

function isPlainObject(obj) {
  return Object.getPrototypeOf(obj) === Object.prototype;
}

function disableInputElements(element) {
  var hyperlinks = element.querySelectorAll('a');
  var inputs = element.querySelectorAll('button, input, select, textarea');

  var disabledHandler = function disabledHandler(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  };

  [].forEach.call(inputs, function(input) {
    input.disabled = true;
  });
  [].forEach.call(hyperlinks, function(hyperlink) {
    hyperlink.addEventListener('click', disabledHandler);
  });
}

function restoreInputValues(element, inputValues) {
  var inputs = element.querySelectorAll('input, select, textarea');
  [].forEach.call(inputs, function(input, index) {
    var value = inputValues[index];

    if (typeof value !== 'undefined') {
      var tagName = input.tagName,
        type = input.type;

      if (tagName === 'INPUT' && (type === 'checkbox' || type === 'radio')) {
        input.checked = value;
      } else {
        input.value = value;
      }
    }
  });
}

function saveInputValues(element) {
  var inputs = element.querySelectorAll('input, select, textarea');
  return [].map.call(inputs, function(_ref) {
    var checked = _ref.checked,
      tagName = _ref.tagName,
      type = _ref.type,
      value = _ref.value;

    if (tagName === 'INPUT' && (type === 'checkbox' || type === 'radio')) {
      return checked;
    }

    return value;
  });
}

var AdaptiveCardRenderer = function AdaptiveCardRenderer(_ref2) {
  var adaptiveCard = _ref2.adaptiveCard,
    adaptiveCardHostConfig = _ref2.adaptiveCardHostConfig,
    disabled = _ref2.disabled,
    performCardAction = _ref2.performCardAction,
    renderMarkdown = _ref2.renderMarkdown,
    tapAction = _ref2.tapAction;

  var _useStyleSet = useStyleSet(),
    _useStyleSet2 = (0, _slicedToArray2.default)(_useStyleSet, 1),
    adaptiveCardRendererStyleSet = _useStyleSet2[0].adaptiveCardRenderer;

  var errorMessage = useLocalize('Adaptive Card render error');

  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];

  var contentRef = (0, _react.useRef)();
  var inputValuesRef = (0, _react.useRef)([]);
  var handleClick = (0, _react.useCallback)(
    function(_ref3) {
      var target = _ref3.target;

      // Some items, e.g. tappable text, cannot be disabled thru DOM attributes
      if (!disabled) {
        var tabIndex = (0, _botframeworkWebchatComponent.getTabIndex)(target); // If the user is clicking on something that is already clickable, do not allow them to click the card.
        // E.g. a hero card can be tappable, and image and buttons inside the hero card can also be tappable.

        if (typeof tabIndex !== 'number' || tabIndex < 0) {
          tapAction && performCardAction(tapAction);
        }

        var current = _this.contentRef.current;

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
    },
    [disabled, performCardAction, tapAction]
  );
  var handleExecuteAction = (0, _react.useCallback)(
    function(action) {
      // Some items, e.g. tappable image, cannot be disabled thru DOM attributes
      if (disabled) {
        return;
      }

      var actionTypeName = action.getJsonTypeName();

      if (actionTypeName === 'Action.OpenUrl') {
        performCardAction({
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
            performCardAction({
              displayText: displayText,
              type: type,
              value: value
            });
          } else {
            performCardAction({
              type: typeof action.data === 'string' ? 'imBack' : 'postBack',
              value: action.data
            });
          }
        }
      } else {
        console.error('Web Chat: received unknown action from Adaptive Cards');
        console.error(action);
      }
    },
    [disabled, performCardAction]
  );
  (0, _react.useLayoutEffect)(
    function() {
      var current = contentRef.current;

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

        adaptiveCard.onExecuteAction = handleExecuteAction;

        if (adaptiveCardHostConfig) {
          adaptiveCard.hostConfig = isPlainObject(adaptiveCardHostConfig)
            ? new _adaptivecards.HostConfig(adaptiveCardHostConfig)
            : adaptiveCardHostConfig;
        }

        var _adaptiveCard$validat = adaptiveCard.validateProperties(),
          failures = _adaptiveCard$validat.failures;

        if (failures.length) {
          // TODO: [P3] Since this can be called from `componentDidUpdate` and potentially error, we should fix a better way to propagate the error.
          var errors = failures.reduce(function(items, _ref4) {
            var errors = _ref4.errors;
            return [].concat((0, _toConsumableArray2.default)(items), (0, _toConsumableArray2.default)(errors));
          }, []);
          return setError(errors);
        }

        var element;

        try {
          element = adaptiveCard.render();
        } catch (error) {
          return setError(error);
        }

        if (!element) {
          return setError('Adaptive Card rendered as empty element');
        }

        error && setError(null);
        disabled && disableInputElements(element);
        restoreInputValues(element, inputValuesRef.current);

        var _current$children = (0, _slicedToArray2.default)(current.children, 1),
          firstChild = _current$children[0];

        if (firstChild) {
          current.replaceChild(element, firstChild);
        } else {
          current.appendChild(element);
        }

        return function() {
          inputValuesRef.current = saveInputValues(element);
        };
      }
    },
    [adaptiveCard, adaptiveCardHostConfig, contentRef, disabled, error, handleExecuteAction, renderMarkdown]
  );
  return error
    ? _react.default.createElement(
        ErrorBox,
        {
          message: errorMessage
        },
        _react.default.createElement('pre', null, JSON.stringify(error, null, 2))
      )
    : _react.default.createElement('div', {
        className: adaptiveCardRendererStyleSet,
        onClick: handleClick,
        ref: contentRef
      });
};

AdaptiveCardRenderer.propTypes = {
  adaptiveCard: _propTypes.default.any.isRequired,
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  disabled: _propTypes.default.bool,
  performCardAction: _propTypes.default.func.isRequired,
  renderMarkdown: _propTypes.default.func.isRequired,
  tapAction: _propTypes.default.shape({
    type: _propTypes.default.string.isRequired,
    value: _propTypes.default.string
  })
};
AdaptiveCardRenderer.defaultProps = {
  disabled: false,
  tapAction: undefined
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref5) {
  var disabled = _ref5.disabled,
    onCardAction = _ref5.onCardAction,
    renderMarkdown = _ref5.renderMarkdown,
    tapAction = _ref5.tapAction;
  return {
    disabled: disabled,
    performCardAction: onCardAction,
    renderMarkdown: renderMarkdown,
    tapAction: tapAction
  };
})(AdaptiveCardRenderer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkUmVuZGVyZXIuanMiXSwibmFtZXMiOlsiRXJyb3JCb3giLCJDb21wb25lbnRzIiwidXNlTG9jYWxpemUiLCJob29rcyIsInVzZVN0eWxlU2V0IiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiZGlzYWJsZUlucHV0RWxlbWVudHMiLCJlbGVtZW50IiwiaHlwZXJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dHMiLCJkaXNhYmxlZEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZm9yRWFjaCIsImNhbGwiLCJpbnB1dCIsImRpc2FibGVkIiwiaHlwZXJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3RvcmVJbnB1dFZhbHVlcyIsImlucHV0VmFsdWVzIiwiaW5kZXgiLCJ2YWx1ZSIsInRhZ05hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInNhdmVJbnB1dFZhbHVlcyIsIm1hcCIsIkFkYXB0aXZlQ2FyZFJlbmRlcmVyIiwiYWRhcHRpdmVDYXJkIiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsInBlcmZvcm1DYXJkQWN0aW9uIiwicmVuZGVyTWFya2Rvd24iLCJ0YXBBY3Rpb24iLCJhZGFwdGl2ZUNhcmRSZW5kZXJlclN0eWxlU2V0IiwiYWRhcHRpdmVDYXJkUmVuZGVyZXIiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInNldEVycm9yIiwiY29udGVudFJlZiIsImlucHV0VmFsdWVzUmVmIiwiaGFuZGxlQ2xpY2siLCJ0YXJnZXQiLCJ0YWJJbmRleCIsImN1cnJlbnQiLCJsZW5ndGgiLCJpbnB1dHNLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUV4ZWN1dGVBY3Rpb24iLCJhY3Rpb24iLCJhY3Rpb25UeXBlTmFtZSIsImdldEpzb25UeXBlTmFtZSIsInVybCIsImRhdGEiLCJhY3Rpb25EYXRhIiwiX19pc0JvdEZyYW1ld29ya0NhcmRBY3Rpb24iLCJjYXJkQWN0aW9uIiwiZGlzcGxheVRleHQiLCJjb25zb2xlIiwiY29uc3RydWN0b3IiLCJvblByb2Nlc3NNYXJrZG93biIsInRleHQiLCJyZXN1bHQiLCJvdXRwdXRIdG1sIiwiZGlkUHJvY2VzcyIsIm9uRXhlY3V0ZUFjdGlvbiIsImhvc3RDb25maWciLCJIb3N0Q29uZmlnIiwidmFsaWRhdGVQcm9wZXJ0aWVzIiwiZmFpbHVyZXMiLCJlcnJvcnMiLCJyZWR1Y2UiLCJpdGVtcyIsInJlbmRlciIsImNoaWxkcmVuIiwiZmlyc3RDaGlsZCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsInNoYXBlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwib25DYXJkQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztJQUVRQSxRLEdBQWFDLHdDLENBQWJELFE7SUFDQUUsVyxHQUE2QkMsbUMsQ0FBN0JELFc7SUFBYUUsVyxHQUFnQkQsbUMsQ0FBaEJDLFc7O0FBRXJCLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQzFCLFNBQU9DLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkYsR0FBdEIsTUFBK0JDLE1BQU0sQ0FBQ0UsU0FBN0M7QUFDRDs7QUFFRCxTQUFTQyxvQkFBVCxDQUE4QkMsT0FBOUIsRUFBdUM7QUFDckMsTUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUNFLGdCQUFSLENBQXlCLEdBQXpCLENBQW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUNFLGdCQUFSLENBQXlCLGlDQUF6QixDQUFm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O0FBSjBGLEdBQTVEO0FBQUEsQ0FBakIsRUFLWEwsb0JBTFcsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlXCI6IFswLCAyXSB9XSAqL1xuXG5pbXBvcnQgeyBIb3N0Q29uZmlnIH0gZnJvbSAnYWRhcHRpdmVjYXJkcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIGNvbm5lY3RUb1dlYkNoYXQsIGdldFRhYkluZGV4LCBob29rcyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5cbmNvbnN0IHsgRXJyb3JCb3ggfSA9IENvbXBvbmVudHM7XG5jb25zdCB7IHVzZUxvY2FsaXplLCB1c2VTdHlsZVNldCB9ID0gaG9va3M7XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0RWxlbWVudHMoZWxlbWVudCkge1xuICBjb25zdCBoeXBlcmxpbmtzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG4gIGNvbnN0IGlucHV0cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG4gIGNvbnN0IGRpc2FibGVkSGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIFtdLmZvckVhY2guY2FsbChpbnB1dHMsIGlucHV0ID0+IHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xuXG4gIFtdLmZvckVhY2guY2FsbChoeXBlcmxpbmtzLCBoeXBlcmxpbmsgPT4ge1xuICAgIGh5cGVybGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc2FibGVkSGFuZGxlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXN0b3JlSW5wdXRWYWx1ZXMoZWxlbWVudCwgaW5wdXRWYWx1ZXMpIHtcbiAgY29uc3QgaW5wdXRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG4gIFtdLmZvckVhY2guY2FsbChpbnB1dHMsIChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWVzW2luZGV4XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCB7IHRhZ05hbWUsIHR5cGUgfSA9IGlucHV0O1xuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiAodHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0eXBlID09PSAncmFkaW8nKSkge1xuICAgICAgICBpbnB1dC5jaGVja2VkID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVJbnB1dFZhbHVlcyhlbGVtZW50KSB7XG4gIGNvbnN0IGlucHV0cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblxuICByZXR1cm4gW10ubWFwLmNhbGwoaW5wdXRzLCAoeyBjaGVja2VkLCB0YWdOYW1lLCB0eXBlLCB2YWx1ZSB9KSA9PiB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdJTlBVVCcgJiYgKHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykpIHtcbiAgICAgIHJldHVybiBjaGVja2VkO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSk7XG59XG5cbmNvbnN0IEFkYXB0aXZlQ2FyZFJlbmRlcmVyID0gKHtcbiAgYWRhcHRpdmVDYXJkLFxuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBkaXNhYmxlZCxcbiAgcGVyZm9ybUNhcmRBY3Rpb24sXG4gIHJlbmRlck1hcmtkb3duLFxuICB0YXBBY3Rpb25cbn0pID0+IHtcbiAgY29uc3QgW3sgYWRhcHRpdmVDYXJkUmVuZGVyZXI6IGFkYXB0aXZlQ2FyZFJlbmRlcmVyU3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSB1c2VMb2NhbGl6ZSgnQWRhcHRpdmUgQ2FyZCByZW5kZXIgZXJyb3InKTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW5wdXRWYWx1ZXNSZWYgPSB1c2VSZWYoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIC8vIFNvbWUgaXRlbXMsIGUuZy4gdGFwcGFibGUgdGV4dCwgY2Fubm90IGJlIGRpc2FibGVkIHRocnUgRE9NIGF0dHJpYnV0ZXNcbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgY29uc3QgdGFiSW5kZXggPSBnZXRUYWJJbmRleCh0YXJnZXQpO1xuXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGlzIGNsaWNraW5nIG9uIHNvbWV0aGluZyB0aGF0IGlzIGFscmVhZHkgY2xpY2thYmxlLCBkbyBub3QgYWxsb3cgdGhlbSB0byBjbGljayB0aGUgY2FyZC5cbiAgICAgICAgLy8gRS5nLiBhIGhlcm8gY2FyZCBjYW4gYmUgdGFwcGFibGUsIGFuZCBpbWFnZSBhbmQgYnV0dG9ucyBpbnNpZGUgdGhlIGhlcm8gY2FyZCBjYW4gYWxzbyBiZSB0YXBwYWJsZS5cbiAgICAgICAgaWYgKHR5cGVvZiB0YWJJbmRleCAhPT0gJ251bWJlcicgfHwgdGFiSW5kZXggPCAwKSB7XG4gICAgICAgICAgdGFwQWN0aW9uICYmIHBlcmZvcm1DYXJkQWN0aW9uKHRhcEFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuY29udGVudFJlZjtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dHMgPSBjdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcbiAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5wdXRzS2V5IGluIGlucHV0cykge1xuICAgICAgICAgICAgICBpZiAoaW5wdXRzLmhhc093blByb3BlcnR5KGlucHV0c0tleSkpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbaW5wdXRzS2V5XS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2lucHV0c0tleV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiAjZGNkY2RjOycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGlzYWJsZWQsIHBlcmZvcm1DYXJkQWN0aW9uLCB0YXBBY3Rpb25dXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRXhlY3V0ZUFjdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIGFjdGlvbiA9PiB7XG4gICAgICAvLyBTb21lIGl0ZW1zLCBlLmcuIHRhcHBhYmxlIGltYWdlLCBjYW5ub3QgYmUgZGlzYWJsZWQgdGhydSBET00gYXR0cmlidXRlc1xuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uVHlwZU5hbWUgPSBhY3Rpb24uZ2V0SnNvblR5cGVOYW1lKCk7XG5cbiAgICAgIGlmIChhY3Rpb25UeXBlTmFtZSA9PT0gJ0FjdGlvbi5PcGVuVXJsJykge1xuICAgICAgICBwZXJmb3JtQ2FyZEFjdGlvbih7XG4gICAgICAgICAgdHlwZTogJ29wZW5VcmwnLFxuICAgICAgICAgIHZhbHVlOiBhY3Rpb24udXJsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlTmFtZSA9PT0gJ0FjdGlvbi5TdWJtaXQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhOiBhY3Rpb25EYXRhIH0gPSBhY3Rpb247XG5cbiAgICAgICAgICBpZiAoYWN0aW9uRGF0YSAmJiBhY3Rpb25EYXRhLl9faXNCb3RGcmFtZXdvcmtDYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNhcmRBY3Rpb24gfSA9IGFjdGlvbkRhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGRpc3BsYXlUZXh0LCB0eXBlLCB2YWx1ZSB9ID0gY2FyZEFjdGlvbjtcblxuICAgICAgICAgICAgcGVyZm9ybUNhcmRBY3Rpb24oeyBkaXNwbGF5VGV4dCwgdHlwZSwgdmFsdWUgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlcmZvcm1DYXJkQWN0aW9uKHtcbiAgICAgICAgICAgICAgdHlwZTogdHlwZW9mIGFjdGlvbi5kYXRhID09PSAnc3RyaW5nJyA/ICdpbUJhY2snIDogJ3Bvc3RCYWNrJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGFjdGlvbi5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdlYiBDaGF0OiByZWNlaXZlZCB1bmtub3duIGFjdGlvbiBmcm9tIEFkYXB0aXZlIENhcmRzYCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkaXNhYmxlZCwgcGVyZm9ybUNhcmRBY3Rpb25dXG4gICk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IGNvbnRlbnRSZWY7XG5cbiAgICBpZiAoY3VycmVudCAmJiBhZGFwdGl2ZUNhcmQpIHtcbiAgICAgIC8vIEN1cnJlbnRseSwgdGhlIG9ubHkgd2F5IHRvIHNldCB0aGUgTWFya2Rvd24gZW5naW5lIGlzIHRvIHNldCBpdCB0aHJ1IHN0YXRpYyBtZW1iZXIgb2YgQWRhcHRpdmVDYXJkIGNsYXNzXG5cbiAgICAgIC8vIFRPRE86IFtQM10gQ2hlY2tzIGlmIHdlIGNvdWxkIG1ha2UgdGhlIFwicmVuZGVyTWFya2Rvd25cIiBwZXIgY2FyZFxuICAgICAgLy8gICAgICAgVGhpcyBjb3VsZCBiZSBsaW1pdGF0aW9ucyBmcm9tIEFkYXB0aXZlIENhcmRzIHBhY2thZ2VcbiAgICAgIC8vICAgICAgIEJlY2F1c2UgdGhlcmUgY291bGQgYmUgdGltaW5nIGRpZmZlcmVuY2UgYmV0d2VlbiAucGFyc2UgYW5kIC5yZW5kZXIsIHdlIGNvdWxkIGJlIHVzaW5nIHdyb25nIE1hcmtkb3duIGVuZ2luZVxuXG4gICAgICBhZGFwdGl2ZUNhcmQuY29uc3RydWN0b3Iub25Qcm9jZXNzTWFya2Rvd24gPSAodGV4dCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZW5kZXJNYXJrZG93bikge1xuICAgICAgICAgIHJlc3VsdC5vdXRwdXRIdG1sID0gcmVuZGVyTWFya2Rvd24odGV4dCk7XG4gICAgICAgICAgcmVzdWx0LmRpZFByb2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBhZGFwdGl2ZUNhcmQub25FeGVjdXRlQWN0aW9uID0gaGFuZGxlRXhlY3V0ZUFjdGlvbjtcblxuICAgICAgaWYgKGFkYXB0aXZlQ2FyZEhvc3RDb25maWcpIHtcbiAgICAgICAgYWRhcHRpdmVDYXJkLmhvc3RDb25maWcgPSBpc1BsYWluT2JqZWN0KGFkYXB0aXZlQ2FyZEhvc3RDb25maWcpXG4gICAgICAgICAgPyBuZXcgSG9zdENvbmZpZyhhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnKVxuICAgICAgICAgIDogYWRhcHRpdmVDYXJkSG9zdENvbmZpZztcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBmYWlsdXJlcyB9ID0gYWRhcHRpdmVDYXJkLnZhbGlkYXRlUHJvcGVydGllcygpO1xuXG4gICAgICBpZiAoZmFpbHVyZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFRPRE86IFtQM10gU2luY2UgdGhpcyBjYW4gYmUgY2FsbGVkIGZyb20gYGNvbXBvbmVudERpZFVwZGF0ZWAgYW5kIHBvdGVudGlhbGx5IGVycm9yLCB3ZSBzaG91bGQgZml4IGEgYmV0dGVyIHdheSB0byBwcm9wYWdhdGUgdGhlIGVycm9yLlxuICAgICAgICBjb25zdCBlcnJvcnMgPSBmYWlsdXJlcy5yZWR1Y2UoKGl0ZW1zLCB7IGVycm9ycyB9KSA9PiBbLi4uaXRlbXMsIC4uLmVycm9yc10sIFtdKTtcblxuICAgICAgICByZXR1cm4gc2V0RXJyb3IoZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGVsZW1lbnQgPSBhZGFwdGl2ZUNhcmQucmVuZGVyKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHNldEVycm9yKCdBZGFwdGl2ZSBDYXJkIHJlbmRlcmVkIGFzIGVtcHR5IGVsZW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IgJiYgc2V0RXJyb3IobnVsbCk7XG5cbiAgICAgIGRpc2FibGVkICYmIGRpc2FibGVJbnB1dEVsZW1lbnRzKGVsZW1lbnQpO1xuICAgICAgcmVzdG9yZUlucHV0VmFsdWVzKGVsZW1lbnQsIGlucHV0VmFsdWVzUmVmLmN1cnJlbnQpO1xuXG4gICAgICBjb25zdCBbZmlyc3RDaGlsZF0gPSBjdXJyZW50LmNoaWxkcmVuO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICBjdXJyZW50LnJlcGxhY2VDaGlsZChlbGVtZW50LCBmaXJzdENoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlucHV0VmFsdWVzUmVmLmN1cnJlbnQgPSBzYXZlSW5wdXRWYWx1ZXMoZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2FkYXB0aXZlQ2FyZCwgYWRhcHRpdmVDYXJkSG9zdENvbmZpZywgY29udGVudFJlZiwgZGlzYWJsZWQsIGVycm9yLCBoYW5kbGVFeGVjdXRlQWN0aW9uLCByZW5kZXJNYXJrZG93bl0pO1xuXG4gIHJldHVybiBlcnJvciA/IChcbiAgICA8RXJyb3JCb3ggbWVzc2FnZT17ZXJyb3JNZXNzYWdlfT5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGVycm9yLCBudWxsLCAyKX08L3ByZT5cbiAgICA8L0Vycm9yQm94PlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthZGFwdGl2ZUNhcmRSZW5kZXJlclN0eWxlU2V0fSBvbkNsaWNrPXtoYW5kbGVDbGlja30gcmVmPXtjb250ZW50UmVmfSAvPlxuICApO1xufTtcblxuQWRhcHRpdmVDYXJkUmVuZGVyZXIucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZzogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBlcmZvcm1DYXJkQWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW5kZXJNYXJrZG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdGFwQWN0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KVxufTtcblxuQWRhcHRpdmVDYXJkUmVuZGVyZXIuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHRhcEFjdGlvbjogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGRpc2FibGVkLCBvbkNhcmRBY3Rpb24sIHJlbmRlck1hcmtkb3duLCB0YXBBY3Rpb24gfSkgPT4gKHtcbiAgZGlzYWJsZWQsXG4gIHBlcmZvcm1DYXJkQWN0aW9uOiBvbkNhcmRBY3Rpb24sXG4gIHJlbmRlck1hcmtkb3duLFxuICB0YXBBY3Rpb25cbn0pKShBZGFwdGl2ZUNhcmRSZW5kZXJlcik7XG4iXX0=
