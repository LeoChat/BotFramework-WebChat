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

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9VdGlscy9UeXBlRm9jdXNTaW5rL0ZvY3VzQm94LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RZTEUiLCJvdXRsaW5lIiwiRm9jdXNCb3giLCJjaGlsZHJlbiIsImRpc2FibGVkIiwic2VuZEZvY3VzUmVmUHJvcCIsInNlbmRGb2N1c1JlZiIsIm90aGVyUHJvcHMiLCJzZW5kRm9jdXNSZWZQZXJzaXN0IiwicGF0Y2hlZFNlbmRGb2N1c1JlZiIsImNvbnRleHQiLCJmb2N1cyIsImN1cnJlbnQiLCJoYW5kbGVLZXlEb3duQ2FwdHVyZSIsImV2ZW50IiwiYWx0S2V5IiwiY3RybEtleSIsImtleSIsIm1ldGFLZXkiLCJ0YXJnZXQiLCJ0YWJJbmRleCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImJvb2wiLCJzaGFwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQUVDLEVBQUFBLE9BQU8sRUFBRTtBQUFYLENBQXRCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTJFO0FBQUEsTUFBeEVDLFFBQXdFLFFBQXhFQSxRQUF3RTtBQUFBLE1BQTlEQyxRQUE4RCxRQUE5REEsUUFBOEQ7QUFBQSxNQUF0Q0MsZ0JBQXNDLFFBQXBEQyxZQUFvRDtBQUFBLE1BQWpCQyxVQUFpQjs7QUFDMUYsTUFBTUMsbUJBQW1CLEdBQUcsbUJBQU8sSUFBUCxDQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLG9CQUFRO0FBQUEsV0FBTUosZ0JBQWdCLElBQUlHLG1CQUExQjtBQUFBLEdBQVIsRUFBdUQsQ0FDakZBLG1CQURpRixFQUVqRkgsZ0JBRmlGLENBQXZELENBQTVCO0FBS0EsTUFBTUssT0FBTyxHQUFHLG9CQUNkO0FBQUEsV0FBTztBQUNMSixNQUFBQSxZQUFZLEVBQUVHO0FBRFQsS0FBUDtBQUFBLEdBRGMsRUFJZCxDQUFDQSxtQkFBRCxDQUpjLENBQWhCO0FBT0EsTUFBTUUsS0FBSyxHQUFHLHdCQUFZLFlBQU07QUFBQSxRQUN0QkMsT0FEc0IsR0FDVkgsbUJBRFUsQ0FDdEJHLE9BRHNCO0FBRzlCQSxJQUFBQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0QsS0FBUixFQUFYO0FBQ0QsR0FKYSxFQUlYLENBQUNGLG1CQUFELENBSlcsQ0FBZDtBQU1BLE1BQU1JLG9CQUFvQixHQUFHLHdCQUMzQixVQUFBQyxLQUFLLEVBQUk7QUFBQSxRQUNDQyxNQURELEdBQzJDRCxLQUQzQyxDQUNDQyxNQUREO0FBQUEsUUFDU0MsT0FEVCxHQUMyQ0YsS0FEM0MsQ0FDU0UsT0FEVDtBQUFBLFFBQ2tCQyxHQURsQixHQUMyQ0gsS0FEM0MsQ0FDa0JHLEdBRGxCO0FBQUEsUUFDdUJDLE9BRHZCLEdBQzJDSixLQUQzQyxDQUN1QkksT0FEdkI7QUFBQSxRQUNnQ0MsTUFEaEMsR0FDMkNMLEtBRDNDLENBQ2dDSyxNQURoQztBQUVQLFFBQU1DLFFBQVEsR0FBRywwQkFBWUQsTUFBWixDQUFqQjs7QUFFQSxRQUFJSixNQUFNLElBQUtDLE9BQU8sSUFBSUMsR0FBRyxLQUFLLEdBQTlCLElBQXNDQyxPQUF0QyxJQUFrRCxDQUFDLDRCQUFjRCxHQUFkLENBQUQsSUFBdUJBLEdBQUcsS0FBSyxXQUFyRixFQUFtRztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELFFBQUksT0FBT0csUUFBUCxLQUFvQixRQUFwQixJQUFnQ0EsUUFBUSxHQUFHLENBQS9DLEVBQWtEO0FBQ2hETixNQUFBQSxLQUFLLENBQUNPLGVBQU47QUFFQVYsTUFBQUEsS0FBSztBQUNOO0FBQ0YsR0FqQjBCLEVBa0IzQixDQUFDQSxLQUFELENBbEIyQixDQUE3QjtBQXFCQSxTQUNFLDZCQUFDLGdCQUFELENBQVMsUUFBVDtBQUFrQixJQUFBLEtBQUssRUFBRUQ7QUFBekIsS0FDRSxpREFBU0gsVUFBVDtBQUFxQixJQUFBLGdCQUFnQixFQUFFLENBQUNILFFBQUQsSUFBYVMsb0JBQXBEO0FBQTBFLElBQUEsS0FBSyxFQUFFYixhQUFqRjtBQUFnRyxJQUFBLFFBQVEsRUFBRSxDQUFDO0FBQTNHLE1BQ0csT0FBT0csUUFBUCxLQUFvQixVQUFwQixHQUFpQ0EsUUFBUSxDQUFDO0FBQUVRLElBQUFBLEtBQUssRUFBTEE7QUFBRixHQUFELENBQXpDLEdBQXVEUixRQUQxRCxDQURGLENBREY7QUFPRCxDQWhERDs7QUFrREFELFFBQVEsQ0FBQ29CLFlBQVQsR0FBd0I7QUFDdEJuQixFQUFBQSxRQUFRLEVBQUVvQixTQURZO0FBRXRCbkIsRUFBQUEsUUFBUSxFQUFFO0FBRlksQ0FBeEI7QUFLQUYsUUFBUSxDQUFDc0IsU0FBVCxHQUFxQjtBQUNuQnJCLEVBQUFBLFFBQVEsRUFBRXNCLG1CQUFVQyxHQUREO0FBRW5CdEIsRUFBQUEsUUFBUSxFQUFFcUIsbUJBQVVFLElBRkQ7QUFHbkJyQixFQUFBQSxZQUFZLEVBQUVtQixtQkFBVUcsS0FBVixDQUFnQjtBQUM1QmhCLElBQUFBLE9BQU8sRUFBRWEsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJqQixNQUFBQSxLQUFLLEVBQUVjLG1CQUFVSTtBQURNLEtBQWhCO0FBRG1CLEdBQWhCLEVBSVhDO0FBUGdCLENBQXJCO2VBVWU1QixRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBmb3IgZGVmYXVsdFByb3BzOiB7IGNoaWxkcmVuOiB1bmRlZmluZWQgfVxuLyogZXNsaW50IG5vLXVuZGVmaW5lZDogXCJvZmZcIiAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgZ2V0VGFiSW5kZXggZnJvbSAnLi9nZXRUYWJJbmRleCc7XG5pbXBvcnQgaW5wdXR0YWJsZUtleSBmcm9tICcuL2lucHV0dGFibGVLZXknO1xuXG5jb25zdCBERUZBVUxUX1NUWUxFID0geyBvdXRsaW5lOiAwIH07XG5cbmNvbnN0IEZvY3VzQm94ID0gKHsgY2hpbGRyZW4sIGRpc2FibGVkLCBzZW5kRm9jdXNSZWY6IHNlbmRGb2N1c1JlZlByb3AsIC4uLm90aGVyUHJvcHMgfSkgPT4ge1xuICBjb25zdCBzZW5kRm9jdXNSZWZQZXJzaXN0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwYXRjaGVkU2VuZEZvY3VzUmVmID0gdXNlTWVtbygoKSA9PiBzZW5kRm9jdXNSZWZQcm9wIHx8IHNlbmRGb2N1c1JlZlBlcnNpc3QsIFtcbiAgICBzZW5kRm9jdXNSZWZQZXJzaXN0LFxuICAgIHNlbmRGb2N1c1JlZlByb3BcbiAgXSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHNlbmRGb2N1c1JlZjogcGF0Y2hlZFNlbmRGb2N1c1JlZlxuICAgIH0pLFxuICAgIFtwYXRjaGVkU2VuZEZvY3VzUmVmXVxuICApO1xuXG4gIGNvbnN0IGZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gcGF0Y2hlZFNlbmRGb2N1c1JlZjtcblxuICAgIGN1cnJlbnQgJiYgY3VycmVudC5mb2N1cygpO1xuICB9LCBbcGF0Y2hlZFNlbmRGb2N1c1JlZl0pO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd25DYXB0dXJlID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgeyBhbHRLZXksIGN0cmxLZXksIGtleSwgbWV0YUtleSwgdGFyZ2V0IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHRhYkluZGV4ID0gZ2V0VGFiSW5kZXgodGFyZ2V0KTtcblxuICAgICAgaWYgKGFsdEtleSB8fCAoY3RybEtleSAmJiBrZXkgIT09ICd2JykgfHwgbWV0YUtleSB8fCAoIWlucHV0dGFibGVLZXkoa2V5KSAmJiBrZXkgIT09ICdCYWNrc3BhY2UnKSkge1xuICAgICAgICAvLyBJZ25vcmUgaWYgb25lIG9mIHRoZSB1dGlsaXR5IGtleSAoZXhjZXB0IFNISUZUKSBpcyBwcmVzc2VkXG4gICAgICAgIC8vIEUuZy4gQ1RSTC1DIG9uIGEgbGluayBpbiBvbmUgb2YgdGhlIG1lc3NhZ2Ugc2hvdWxkIG5vdCBqdW1wIHRvIGNoYXQgYm94XG4gICAgICAgIC8vIEUuZy4gXCJBXCIgb3IgXCJCYWNrc3BhY2VcIiBzaG91bGQganVtcCB0byBjaGF0IGJveFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGFiSW5kZXggIT09ICdudW1iZXInIHx8IHRhYkluZGV4IDwgMCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBmb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2ZvY3VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAgPGRpdiB7Li4ub3RoZXJQcm9wc30gb25LZXlEb3duQ2FwdHVyZT17IWRpc2FibGVkICYmIGhhbmRsZUtleURvd25DYXB0dXJlfSBzdHlsZT17REVGQVVMVF9TVFlMRX0gdGFiSW5kZXg9ey0xfT5cbiAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHsgZm9jdXMgfSkgOiBjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbkZvY3VzQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5Gb2N1c0JveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbmRGb2N1c1JlZjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZm9jdXM6IFByb3BUeXBlcy5mdW5jXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNCb3g7XG4iXX0=
