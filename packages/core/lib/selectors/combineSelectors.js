'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = combineSelectors;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

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
        (0, _defineProperty2['default'])(target, key, source[key]);
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

function combineSelectors(selectors) {
  if (Array.isArray(selectors)) {
    return function(state) {
      return selectors.reduce(function(combinedState, selector) {
        return [].concat((0, _toConsumableArray2['default'])(combinedState), [selector(state)]);
      }, []);
    };
  }

  return function(state) {
    return Object.keys(selectors).reduce(function(combinedState, key) {
      return _objectSpread({}, combinedState, (0, _defineProperty2['default'])({}, key, selectors[key](state)));
    }, {});
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3RvcnMvY29tYmluZVNlbGVjdG9ycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiQXJyYXkiLCJpc0FycmF5Iiwic3RhdGUiLCJyZWR1Y2UiLCJjb21iaW5lZFN0YXRlIiwic2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLGdCQUFULENBQTBCQyxTQUExQixFQUFxQztBQUNsRCxNQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsU0FBZCxDQUFKLEVBQThCO0FBQzVCLFdBQU8sVUFBQUcsS0FBSztBQUFBLGFBQUlILFNBQVMsQ0FBQ0ksTUFBVixDQUFpQixVQUFDQyxhQUFELEVBQWdCQyxRQUFoQjtBQUFBLDZEQUFpQ0QsYUFBakMsSUFBZ0RDLFFBQVEsQ0FBQ0gsS0FBRCxDQUF4RDtBQUFBLE9BQWpCLEVBQW1GLEVBQW5GLENBQUo7QUFBQSxLQUFaO0FBQ0Q7O0FBRUQsU0FBTyxVQUFBQSxLQUFLO0FBQUEsV0FDVkksTUFBTSxDQUFDQyxJQUFQLENBQVlSLFNBQVosRUFBdUJJLE1BQXZCLENBQThCLFVBQUNDLGFBQUQsRUFBZ0JJLEdBQWhCO0FBQUEsK0JBQThCSixhQUE5Qix1Q0FBOENJLEdBQTlDLEVBQW9EVCxTQUFTLENBQUNTLEdBQUQsQ0FBVCxDQUFlTixLQUFmLENBQXBEO0FBQUEsS0FBOUIsRUFBNEcsRUFBNUcsQ0FEVTtBQUFBLEdBQVo7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVTZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9ycykpIHtcbiAgICByZXR1cm4gc3RhdGUgPT4gc2VsZWN0b3JzLnJlZHVjZSgoY29tYmluZWRTdGF0ZSwgc2VsZWN0b3IpID0+IFsuLi5jb21iaW5lZFN0YXRlLCBzZWxlY3RvcihzdGF0ZSldLCBbXSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGUgPT5cbiAgICBPYmplY3Qua2V5cyhzZWxlY3RvcnMpLnJlZHVjZSgoY29tYmluZWRTdGF0ZSwga2V5KSA9PiAoeyAuLi5jb21iaW5lZFN0YXRlLCBba2V5XTogc2VsZWN0b3JzW2tleV0oc3RhdGUpIH0pLCB7fSk7XG59XG4iXX0=
