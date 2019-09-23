'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _Context = _interopRequireDefault(require('./Context'));

var _getTabIndex = _interopRequireDefault(require('./getTabIndex'));

var _inputtableKey = _interopRequireDefault(require('./inputtableKey'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var DEFAULT_STYLE = {
  outline: 0
};

var FocusBox = function FocusBox(_ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    sendFocusRefProp = _ref.sendFocusRef,
    otherProps = _objectWithoutProperties(_ref, ['children', 'disabled', 'sendFocusRef']);

  var sendFocusRefPersist = (0, _react.useRef)(null);
  var patchedSendFocusRef = (0, _react.useMemo)(
    function() {
      return sendFocusRefProp || sendFocusRefPersist;
    },
    [sendFocusRefPersist, sendFocusRefProp]
  );
  var context = (0, _react.useMemo)(
    function() {
      return {
        sendFocusRef: patchedSendFocusRef
      };
    },
    [patchedSendFocusRef]
  );
  var focus = (0, _react.useCallback)(
    function() {
      var current = patchedSendFocusRef.current;
      current && current.focus();
    },
    [patchedSendFocusRef]
  );
  var handleKeyDownCapture = (0, _react.useCallback)(
    function(event) {
      var altKey = event.altKey,
        ctrlKey = event.ctrlKey,
        key = event.key,
        metaKey = event.metaKey,
        target = event.target;
      var tabIndex = (0, _getTabIndex.default)(target);

      if (altKey || (ctrlKey && key !== 'v') || metaKey || (!(0, _inputtableKey.default)(key) && key !== 'Backspace')) {
        // Ignore if one of the utility key (except SHIFT) is pressed
        // E.g. CTRL-C on a link in one of the message should not jump to chat box
        // E.g. "A" or "Backspace" should jump to chat box
        return;
      }

      if (typeof tabIndex !== 'number' || tabIndex < 0) {
        event.stopPropagation();
        focus();
      }
    },
    [focus]
  );
  return _react.default.createElement(
    _Context.default.Provider,
    {
      value: context
    },
    _react.default.createElement(
      'div',
      _extends({}, otherProps, {
        onKeyDownCapture: !disabled && handleKeyDownCapture,
        style: DEFAULT_STYLE,
        tabIndex: -1
      }),
      typeof children === 'function'
        ? children({
            focus: focus
          })
        : children
    )
  );
};

FocusBox.defaultProps = {
  children: undefined,
  disabled: false
};
FocusBox.propTypes = {
  children: _propTypes.default.any,
  disabled: _propTypes.default.bool,
  sendFocusRef: _propTypes.default.shape({
    current: _propTypes.default.shape({
      focus: _propTypes.default.func
    })
  }).isRequired
};
var _default = FocusBox;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9VdGlscy9UeXBlRm9jdXNTaW5rL0ZvY3VzQm94LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RZTEUiLCJvdXRsaW5lIiwiRm9jdXNCb3giLCJjaGlsZHJlbiIsImRpc2FibGVkIiwic2VuZEZvY3VzUmVmUHJvcCIsInNlbmRGb2N1c1JlZiIsIm90aGVyUHJvcHMiLCJzZW5kRm9jdXNSZWZQZXJzaXN0IiwicGF0Y2hlZFNlbmRGb2N1c1JlZiIsImNvbnRleHQiLCJmb2N1cyIsImN1cnJlbnQiLCJoYW5kbGVLZXlEb3duQ2FwdHVyZSIsImV2ZW50IiwiYWx0S2V5IiwiY3RybEtleSIsImtleSIsIm1ldGFLZXkiLCJ0YXJnZXQiLCJ0YWJJbmRleCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImJvb2wiLCJzaGFwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRztBQUFFQyxFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUF0Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEyRTtBQUFBLE1BQXhFQyxRQUF3RSxRQUF4RUEsUUFBd0U7QUFBQSxNQUE5REMsUUFBOEQsUUFBOURBLFFBQThEO0FBQUEsTUFBdENDLGdCQUFzQyxRQUFwREMsWUFBb0Q7QUFBQSxNQUFqQkMsVUFBaUI7O0FBQzFGLE1BQU1DLG1CQUFtQixHQUFHLG1CQUFPLElBQVAsQ0FBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxvQkFBUTtBQUFBLFdBQU1KLGdCQUFnQixJQUFJRyxtQkFBMUI7QUFBQSxHQUFSLEVBQXVELENBQ2pGQSxtQkFEaUYsRUFFakZILGdCQUZpRixDQUF2RCxDQUE1QjtBQUtBLE1BQU1LLE9BQU8sR0FBRyxvQkFDZDtBQUFBLFdBQU87QUFDTEosTUFBQUEsWUFBWSxFQUFFRztBQURULEtBQVA7QUFBQSxHQURjLEVBSWQsQ0FBQ0EsbUJBQUQsQ0FKYyxDQUFoQjtBQU9BLE1BQU1FLEtBQUssR0FBRyx3QkFBWSxZQUFNO0FBQUEsUUFDdEJDLE9BRHNCLEdBQ1ZILG1CQURVLENBQ3RCRyxPQURzQjtBQUc5QkEsSUFBQUEsT0FBTyxJQUFJQSxPQUFPLENBQUNELEtBQVIsRUFBWDtBQUNELEdBSmEsRUFJWCxDQUFDRixtQkFBRCxDQUpXLENBQWQ7QUFNQSxNQUFNSSxvQkFBb0IsR0FBRyx3QkFDM0IsVUFBQUMsS0FBSyxFQUFJO0FBQUEsUUFDQ0MsTUFERCxHQUMyQ0QsS0FEM0MsQ0FDQ0MsTUFERDtBQUFBLFFBQ1NDLE9BRFQsR0FDMkNGLEtBRDNDLENBQ1NFLE9BRFQ7QUFBQSxRQUNrQkMsR0FEbEIsR0FDMkNILEtBRDNDLENBQ2tCRyxHQURsQjtBQUFBLFFBQ3VCQyxPQUR2QixHQUMyQ0osS0FEM0MsQ0FDdUJJLE9BRHZCO0FBQUEsUUFDZ0NDLE1BRGhDLEdBQzJDTCxLQUQzQyxDQUNnQ0ssTUFEaEM7QUFFUCxRQUFNQyxRQUFRLEdBQUcsMEJBQVlELE1BQVosQ0FBakI7O0FBRUEsUUFBSUosTUFBTSxJQUFLQyxPQUFPLElBQUlDLEdBQUcsS0FBSyxHQUE5QixJQUFzQ0MsT0FBdEMsSUFBa0QsQ0FBQyw0QkFBY0QsR0FBZCxDQUFELElBQXVCQSxHQUFHLEtBQUssV0FBckYsRUFBbUc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxRQUFJLE9BQU9HLFFBQVAsS0FBb0IsUUFBcEIsSUFBZ0NBLFFBQVEsR0FBRyxDQUEvQyxFQUFrRDtBQUNoRE4sTUFBQUEsS0FBSyxDQUFDTyxlQUFOO0FBRUFWLE1BQUFBLEtBQUs7QUFDTjtBQUNGLEdBakIwQixFQWtCM0IsQ0FBQ0EsS0FBRCxDQWxCMkIsQ0FBN0I7QUFxQkEsU0FDRSw2QkFBQyxnQkFBRCxDQUFTLFFBQVQ7QUFBa0IsSUFBQSxLQUFLLEVBQUVEO0FBQXpCLEtBQ0UsaURBQVNILFVBQVQ7QUFBcUIsSUFBQSxnQkFBZ0IsRUFBRSxDQUFDSCxRQUFELElBQWFTLG9CQUFwRDtBQUEwRSxJQUFBLEtBQUssRUFBRWIsYUFBakY7QUFBZ0csSUFBQSxRQUFRLEVBQUUsQ0FBQztBQUEzRyxNQUNHLE9BQU9HLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUNBLFFBQVEsQ0FBQztBQUFFUSxJQUFBQSxLQUFLLEVBQUxBO0FBQUYsR0FBRCxDQUF6QyxHQUF1RFIsUUFEMUQsQ0FERixDQURGO0FBT0QsQ0FoREQ7O0FBa0RBRCxRQUFRLENBQUNvQixZQUFULEdBQXdCO0FBQ3RCbkIsRUFBQUEsUUFBUSxFQUFFb0IsU0FEWTtBQUV0Qm5CLEVBQUFBLFFBQVEsRUFBRTtBQUZZLENBQXhCO0FBS0FGLFFBQVEsQ0FBQ3NCLFNBQVQsR0FBcUI7QUFDbkJyQixFQUFBQSxRQUFRLEVBQUVzQixtQkFBVUMsR0FERDtBQUVuQnRCLEVBQUFBLFFBQVEsRUFBRXFCLG1CQUFVRSxJQUZEO0FBR25CckIsRUFBQUEsWUFBWSxFQUFFbUIsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDNUJoQixJQUFBQSxPQUFPLEVBQUVhLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCakIsTUFBQUEsS0FBSyxFQUFFYyxtQkFBVUk7QUFETSxLQUFoQjtBQURtQixHQUFoQixFQUlYQztBQVBnQixDQUFyQjtlQVVlNUIsUSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgZm9yIGRlZmF1bHRQcm9wczogeyBjaGlsZHJlbjogdW5kZWZpbmVkIH1cbi8qIGVzbGludCBuby11bmRlZmluZWQ6IFwib2ZmXCIgKi9cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IGdldFRhYkluZGV4IGZyb20gJy4vZ2V0VGFiSW5kZXgnO1xuaW1wb3J0IGlucHV0dGFibGVLZXkgZnJvbSAnLi9pbnB1dHRhYmxlS2V5JztcblxuY29uc3QgREVGQVVMVF9TVFlMRSA9IHsgb3V0bGluZTogMCB9O1xuXG5jb25zdCBGb2N1c0JveCA9ICh7IGNoaWxkcmVuLCBkaXNhYmxlZCwgc2VuZEZvY3VzUmVmOiBzZW5kRm9jdXNSZWZQcm9wLCAuLi5vdGhlclByb3BzIH0pID0+IHtcbiAgY29uc3Qgc2VuZEZvY3VzUmVmUGVyc2lzdCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcGF0Y2hlZFNlbmRGb2N1c1JlZiA9IHVzZU1lbW8oKCkgPT4gc2VuZEZvY3VzUmVmUHJvcCB8fCBzZW5kRm9jdXNSZWZQZXJzaXN0LCBbXG4gICAgc2VuZEZvY3VzUmVmUGVyc2lzdCxcbiAgICBzZW5kRm9jdXNSZWZQcm9wXG4gIF0pO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBzZW5kRm9jdXNSZWY6IHBhdGNoZWRTZW5kRm9jdXNSZWZcbiAgICB9KSxcbiAgICBbcGF0Y2hlZFNlbmRGb2N1c1JlZl1cbiAgKTtcblxuICBjb25zdCBmb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHBhdGNoZWRTZW5kRm9jdXNSZWY7XG5cbiAgICBjdXJyZW50ICYmIGN1cnJlbnQuZm9jdXMoKTtcbiAgfSwgW3BhdGNoZWRTZW5kRm9jdXNSZWZdKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duQ2FwdHVyZSA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHsgYWx0S2V5LCBjdHJsS2V5LCBrZXksIG1ldGFLZXksIHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCB0YWJJbmRleCA9IGdldFRhYkluZGV4KHRhcmdldCk7XG5cbiAgICAgIGlmIChhbHRLZXkgfHwgKGN0cmxLZXkgJiYga2V5ICE9PSAndicpIHx8IG1ldGFLZXkgfHwgKCFpbnB1dHRhYmxlS2V5KGtleSkgJiYga2V5ICE9PSAnQmFja3NwYWNlJykpIHtcbiAgICAgICAgLy8gSWdub3JlIGlmIG9uZSBvZiB0aGUgdXRpbGl0eSBrZXkgKGV4Y2VwdCBTSElGVCkgaXMgcHJlc3NlZFxuICAgICAgICAvLyBFLmcuIENUUkwtQyBvbiBhIGxpbmsgaW4gb25lIG9mIHRoZSBtZXNzYWdlIHNob3VsZCBub3QganVtcCB0byBjaGF0IGJveFxuICAgICAgICAvLyBFLmcuIFwiQVwiIG9yIFwiQmFja3NwYWNlXCIgc2hvdWxkIGp1bXAgdG8gY2hhdCBib3hcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRhYkluZGV4ICE9PSAnbnVtYmVyJyB8fCB0YWJJbmRleCA8IDApIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtmb2N1c11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIDxkaXYgey4uLm90aGVyUHJvcHN9IG9uS2V5RG93bkNhcHR1cmU9eyFkaXNhYmxlZCAmJiBoYW5kbGVLZXlEb3duQ2FwdHVyZX0gc3R5bGU9e0RFRkFVTFRfU1RZTEV9IHRhYkluZGV4PXstMX0+XG4gICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7IGZvY3VzIH0pIDogY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5Gb2N1c0JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxuRm9jdXNCb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzZW5kRm9jdXNSZWY6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGZvY3VzOiBQcm9wVHlwZXMuZnVuY1xuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvY3VzQm94O1xuIl19
