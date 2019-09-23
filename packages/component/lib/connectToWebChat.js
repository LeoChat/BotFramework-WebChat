'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = connectToWebChat;

var _reactRedux = require('react-redux');

var _react = _interopRequireDefault(require('react'));

var _Context = _interopRequireDefault(require('./Context'));

var _WebChatReduxContext = _interopRequireDefault(require('./WebChatReduxContext'));

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
      return _react.default.createElement(_Context.default.Consumer, null, function(context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0VG9XZWJDaGF0LmpzIl0sIm5hbWVzIjpbInJlbW92ZVVuZGVmaW5lZFZhbHVlcyIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJ2YWx1ZSIsImNvbWJpbmVTZWxlY3RvcnMiLCJzZWxlY3RvcnMiLCJhcmdzIiwic2VsZWN0b3IiLCJjb25uZWN0VG9XZWJDaGF0IiwiY29tYmluZWRTZWxlY3RvciIsIkNvbXBvbmVudCIsIkNvbm5lY3RlZENvbXBvbmVudCIsInN0YXRlIiwiY29udGV4dCIsIm93blByb3BzIiwiV2ViQ2hhdFJlZHV4Q29udGV4dCIsIldlYkNoYXRDb25uZWN0ZWRDb21wb25lbnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0JDLEdBQS9CLEVBQW9DO0FBQ2xDLFNBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxNQUFqQixDQUF3QixVQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFDOUMsUUFBTUMsS0FBSyxHQUFHTixHQUFHLENBQUNLLEdBQUQsQ0FBakI7O0FBRUEsUUFBSSxPQUFPQyxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDRixNQUFBQSxNQUFNLENBQUNDLEdBQUQsQ0FBTixHQUFjQyxLQUFkO0FBQ0Q7O0FBRUQsV0FBT0YsTUFBUDtBQUNELEdBUk0sRUFRSixFQVJJLENBQVA7QUFTRDs7QUFFRCxTQUFTRyxnQkFBVCxHQUF3QztBQUFBLG9DQUFYQyxTQUFXO0FBQVhBLElBQUFBLFNBQVc7QUFBQTs7QUFDdEMsU0FBTztBQUFBLHVDQUFJQyxJQUFKO0FBQUlBLE1BQUFBLElBQUo7QUFBQTs7QUFBQSxXQUNMRCxTQUFTLENBQUNMLE1BQVYsQ0FDRSxVQUFDQyxNQUFELEVBQVNNLFFBQVQ7QUFBQSwrQkFDS04sTUFETCxNQUVLTCxxQkFBcUIsQ0FBRVcsUUFBUSxJQUFJQSxRQUFRLE1BQVIsU0FBWUQsSUFBWixDQUFiLElBQW1DLEVBQXBDLENBRjFCO0FBQUEsS0FERixFQUtFLEVBTEYsQ0FESztBQUFBLEdBQVA7QUFRRDs7QUFFYyxTQUFTRSxnQkFBVCxHQUF3QztBQUNyRCxNQUFNQyxnQkFBZ0IsR0FBR0wsZ0JBQWdCLE1BQWhCLG1CQUF6QixDQURxRCxDQUdyRDtBQUNBOztBQUNBLFNBQU8sVUFBQU0sU0FBUyxFQUFJO0FBQ2xCLFFBQU1DLGtCQUFrQixHQUFHLHlCQUN6QixVQUFDQyxLQUFEO0FBQUEsVUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsVUFBc0JDLFFBQXRCOztBQUFBLGFBQXFDTCxnQkFBZ0IsbUJBQU1HLEtBQU4sTUFBZ0JDLE9BQWhCLEdBQTJCQyxRQUEzQixDQUFyRDtBQUFBLEtBRHlCLEVBRXpCLElBRnlCLEVBR3pCLElBSHlCLEVBSXpCO0FBQ0VELE1BQUFBLE9BQU8sRUFBRUU7QUFEWCxLQUp5QixFQU96QkwsU0FQeUIsQ0FBM0I7O0FBU0EsUUFBTU0seUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFBQyxLQUFLO0FBQUEsYUFDckMsNkJBQUMsZ0JBQUQsQ0FBUyxRQUFULFFBQW1CLFVBQUFKLE9BQU87QUFBQSxlQUFJLDZCQUFDLGtCQUFELGVBQXdCSSxLQUF4QjtBQUErQixVQUFBLE9BQU8sRUFBRUo7QUFBeEMsV0FBSjtBQUFBLE9BQTFCLENBRHFDO0FBQUEsS0FBdkM7O0FBSUEsV0FBT0cseUJBQVA7QUFDRCxHQWZEO0FBZ0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgV2ViQ2hhdFJlZHV4Q29udGV4dCBmcm9tICcuL1dlYkNoYXRSZWR1eENvbnRleHQnO1xuXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWRWYWx1ZXMobWFwKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtYXApLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG1hcFtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU2VsZWN0b3JzKC4uLnNlbGVjdG9ycykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgc2VsZWN0b3JzLnJlZHVjZShcbiAgICAgIChyZXN1bHQsIHNlbGVjdG9yKSA9PiAoe1xuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgIC4uLnJlbW92ZVVuZGVmaW5lZFZhbHVlcygoc2VsZWN0b3IgJiYgc2VsZWN0b3IoLi4uYXJncykpIHx8IHt9KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RUb1dlYkNoYXQoLi4uc2VsZWN0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmVkU2VsZWN0b3IgPSBjb21iaW5lU2VsZWN0b3JzKC4uLnNlbGVjdG9ycyk7XG5cbiAgLy8gVE9ETzogW1AxXSBJbnN0ZWFkIG9mIGV4cG9zaW5nIFJlZHV4IHN0b3JlIHZpYSBwcm9wcywgd2Ugc2hvdWxkIGNvbnNpZGVyIGV4cG9zaW5nIHZpYSBDb250ZXh0LlxuICAvLyAgICAgICBXZSBzaG91bGQgYWxzbyBoaWRlIGRpc3BhdGNoIGZ1bmN0aW9uLlxuICByZXR1cm4gQ29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBDb25uZWN0ZWRDb21wb25lbnQgPSBjb25uZWN0KFxuICAgICAgKHN0YXRlLCB7IGNvbnRleHQsIC4uLm93blByb3BzIH0pID0+IGNvbWJpbmVkU2VsZWN0b3IoeyAuLi5zdGF0ZSwgLi4uY29udGV4dCB9LCBvd25Qcm9wcyksXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIHtcbiAgICAgICAgY29udGV4dDogV2ViQ2hhdFJlZHV4Q29udGV4dFxuICAgICAgfVxuICAgICkoQ29tcG9uZW50KTtcblxuICAgIGNvbnN0IFdlYkNoYXRDb25uZWN0ZWRDb21wb25lbnQgPSBwcm9wcyA9PiAoXG4gICAgICA8Q29udGV4dC5Db25zdW1lcj57Y29udGV4dCA9PiA8Q29ubmVjdGVkQ29tcG9uZW50IHsuLi5wcm9wc30gY29udGV4dD17Y29udGV4dH0gLz59PC9Db250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG5cbiAgICByZXR1cm4gV2ViQ2hhdENvbm5lY3RlZENvbXBvbmVudDtcbiAgfTtcbn1cbiJdfQ==
