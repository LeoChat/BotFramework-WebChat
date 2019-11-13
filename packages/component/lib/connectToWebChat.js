'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = connectToWebChat;

var _reactRedux = require('react-redux');

var _react = _interopRequireDefault(require('react'));

var _WebChatReduxContext = _interopRequireDefault(require('./WebChatReduxContext'));

var _WebChatUIContext = _interopRequireDefault(require('./WebChatUIContext'));

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

function removeUndefinedValues(map) {
  return Object.keys(map).reduce(function(result, key) {
    var value = map[key];

    if (typeof value !== 'undefined') {
      result[key] = value;
    }

    return result;
  }, {});
}

function combineSelectors() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return selectors.reduce(function(result, selector) {
      return _objectSpread({}, result, {}, removeUndefinedValues((selector && selector.apply(void 0, args)) || {}));
    }, {});
  };
}

function connectToWebChat() {
  var combinedSelector = combineSelectors.apply(void 0, arguments); // TODO: [P1] Instead of exposing Redux store via props, we should consider exposing via Context.
  //       We should also hide dispatch function.

  return function(Component) {
    var ConnectedComponent = (0, _reactRedux.connect)(
      function(state, _ref) {
        var context = _ref.context,
          ownProps = _objectWithoutProperties(_ref, ['context']);

        return combinedSelector(_objectSpread({}, state, {}, context), ownProps);
      },
      null,
      null,
      {
        context: _WebChatReduxContext.default
      }
    )(Component);

    var WebChatConnectedComponent = function WebChatConnectedComponent(props) {
      return _react.default.createElement(_WebChatUIContext.default.Consumer, null, function(context) {
        return _react.default.createElement(
          ConnectedComponent,
          _extends({}, props, {
            context: context
          })
        );
      });
    };

    return WebChatConnectedComponent;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0VG9XZWJDaGF0LmpzIl0sIm5hbWVzIjpbInJlbW92ZVVuZGVmaW5lZFZhbHVlcyIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJ2YWx1ZSIsImNvbWJpbmVTZWxlY3RvcnMiLCJzZWxlY3RvcnMiLCJhcmdzIiwic2VsZWN0b3IiLCJjb25uZWN0VG9XZWJDaGF0IiwiY29tYmluZWRTZWxlY3RvciIsIkNvbXBvbmVudCIsIkNvbm5lY3RlZENvbXBvbmVudCIsInN0YXRlIiwiY29udGV4dCIsIm93blByb3BzIiwiV2ViQ2hhdFJlZHV4Q29udGV4dCIsIldlYkNoYXRDb25uZWN0ZWRDb21wb25lbnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0JDLEdBQS9CLEVBQW9DO0FBQ2xDLFNBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxNQUFqQixDQUF3QixVQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFDOUMsUUFBTUMsS0FBSyxHQUFHTixHQUFHLENBQUNLLEdBQUQsQ0FBakI7O0FBRUEsUUFBSSxPQUFPQyxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDRixNQUFBQSxNQUFNLENBQUNDLEdBQUQsQ0FBTixHQUFjQyxLQUFkO0FBQ0Q7O0FBRUQsV0FBT0YsTUFBUDtBQUNELEdBUk0sRUFRSixFQVJJLENBQVA7QUFTRDs7QUFFRCxTQUFTRyxnQkFBVCxHQUF3QztBQUFBLG9DQUFYQyxTQUFXO0FBQVhBLElBQUFBLFNBQVc7QUFBQTs7QUFDdEMsU0FBTztBQUFBLHVDQUFJQyxJQUFKO0FBQUlBLE1BQUFBLElBQUo7QUFBQTs7QUFBQSxXQUNMRCxTQUFTLENBQUNMLE1BQVYsQ0FDRSxVQUFDQyxNQUFELEVBQVNNLFFBQVQ7QUFBQSwrQkFDS04sTUFETCxNQUVLTCxxQkFBcUIsQ0FBRVcsUUFBUSxJQUFJQSxRQUFRLE1BQVIsU0FBWUQsSUFBWixDQUFiLElBQW1DLEVBQXBDLENBRjFCO0FBQUEsS0FERixFQUtFLEVBTEYsQ0FESztBQUFBLEdBQVA7QUFRRDs7QUFFYyxTQUFTRSxnQkFBVCxHQUF3QztBQUNyRCxNQUFNQyxnQkFBZ0IsR0FBR0wsZ0JBQWdCLE1BQWhCLG1CQUF6QixDQURxRCxDQUdyRDtBQUNBOztBQUNBLFNBQU8sVUFBQU0sU0FBUyxFQUFJO0FBQ2xCLFFBQU1DLGtCQUFrQixHQUFHLHlCQUN6QixVQUFDQyxLQUFEO0FBQUEsVUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsVUFBc0JDLFFBQXRCOztBQUFBLGFBQXFDTCxnQkFBZ0IsbUJBQU1HLEtBQU4sTUFBZ0JDLE9BQWhCLEdBQTJCQyxRQUEzQixDQUFyRDtBQUFBLEtBRHlCLEVBRXpCLElBRnlCLEVBR3pCLElBSHlCLEVBSXpCO0FBQ0VELE1BQUFBLE9BQU8sRUFBRUU7QUFEWCxLQUp5QixFQU96QkwsU0FQeUIsQ0FBM0I7O0FBU0EsUUFBTU0seUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFBQyxLQUFLO0FBQUEsYUFDckMsNkJBQUMseUJBQUQsQ0FBa0IsUUFBbEIsUUFDRyxVQUFBSixPQUFPO0FBQUEsZUFBSSw2QkFBQyxrQkFBRCxlQUF3QkksS0FBeEI7QUFBK0IsVUFBQSxPQUFPLEVBQUVKO0FBQXhDLFdBQUo7QUFBQSxPQURWLENBRHFDO0FBQUEsS0FBdkM7O0FBTUEsV0FBT0cseUJBQVA7QUFDRCxHQWpCRDtBQWtCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2ViQ2hhdFJlZHV4Q29udGV4dCBmcm9tICcuL1dlYkNoYXRSZWR1eENvbnRleHQnO1xuaW1wb3J0IFdlYkNoYXRVSUNvbnRleHQgZnJvbSAnLi9XZWJDaGF0VUlDb250ZXh0JztcblxuZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkVmFsdWVzKG1hcCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXBba2V5XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVNlbGVjdG9ycyguLi5zZWxlY3RvcnMpIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgIHNlbGVjdG9ycy5yZWR1Y2UoXG4gICAgICAocmVzdWx0LCBzZWxlY3RvcikgPT4gKHtcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAuLi5yZW1vdmVVbmRlZmluZWRWYWx1ZXMoKHNlbGVjdG9yICYmIHNlbGVjdG9yKC4uLmFyZ3MpKSB8fCB7fSlcbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0VG9XZWJDaGF0KC4uLnNlbGVjdG9ycykge1xuICBjb25zdCBjb21iaW5lZFNlbGVjdG9yID0gY29tYmluZVNlbGVjdG9ycyguLi5zZWxlY3RvcnMpO1xuXG4gIC8vIFRPRE86IFtQMV0gSW5zdGVhZCBvZiBleHBvc2luZyBSZWR1eCBzdG9yZSB2aWEgcHJvcHMsIHdlIHNob3VsZCBjb25zaWRlciBleHBvc2luZyB2aWEgQ29udGV4dC5cbiAgLy8gICAgICAgV2Ugc2hvdWxkIGFsc28gaGlkZSBkaXNwYXRjaCBmdW5jdGlvbi5cbiAgcmV0dXJuIENvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50ID0gY29ubmVjdChcbiAgICAgIChzdGF0ZSwgeyBjb250ZXh0LCAuLi5vd25Qcm9wcyB9KSA9PiBjb21iaW5lZFNlbGVjdG9yKHsgLi4uc3RhdGUsIC4uLmNvbnRleHQgfSwgb3duUHJvcHMpLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICB7XG4gICAgICAgIGNvbnRleHQ6IFdlYkNoYXRSZWR1eENvbnRleHRcbiAgICAgIH1cbiAgICApKENvbXBvbmVudCk7XG5cbiAgICBjb25zdCBXZWJDaGF0Q29ubmVjdGVkQ29tcG9uZW50ID0gcHJvcHMgPT4gKFxuICAgICAgPFdlYkNoYXRVSUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtjb250ZXh0ID0+IDxDb25uZWN0ZWRDb21wb25lbnQgey4uLnByb3BzfSBjb250ZXh0PXtjb250ZXh0fSAvPn1cbiAgICAgIDwvV2ViQ2hhdFVJQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuXG4gICAgcmV0dXJuIFdlYkNoYXRDb25uZWN0ZWRDb21wb25lbnQ7XG4gIH07XG59XG4iXX0=
