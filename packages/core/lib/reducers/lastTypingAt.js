'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = lastTypingAt;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _incomingActivity = require('../actions/incomingActivity');

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return (0, _typeof2['default'])(key) === 'symbol' ? key : String(key);
}

function _toPrimitive(input, hint) {
  if ((0, _typeof2['default'])(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if ((0, _typeof2['default'])(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
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

var DEFAULT_STATE = {};

function lastTypingAt() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  if (type === _incomingActivity.INCOMING_ACTIVITY) {
    var _payload$activity = payload.activity,
      _payload$activity$fro = _payload$activity.from,
      id = _payload$activity$fro.id,
      role = _payload$activity$fro.role,
      activityType = _payload$activity.type;

    if (role === 'bot') {
      if (activityType === 'typing') {
        state = _objectSpread({}, state, (0, _defineProperty2['default'])({}, id, Date.now()));
      } else if (activityType === 'message') {
        var _state = state,
          last = _state[id],
          nextState = (0, _objectWithoutProperties2['default'])(_state, [id].map(_toPropertyKey));
        state = nextState;
      }
    }
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sYXN0VHlwaW5nQXQuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsImxhc3RUeXBpbmdBdCIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJJTkNPTUlOR19BQ1RJVklUWSIsImFjdGl2aXR5IiwiZnJvbSIsImlkIiwicm9sZSIsImFjdGl2aXR5VHlwZSIsIkRhdGUiLCJub3ciLCJsYXN0IiwibmV4dFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxFQUF0Qjs7QUFFZSxTQUFTQyxZQUFULEdBQWdFO0FBQUEsTUFBMUNDLEtBQTBDLHVFQUFsQ0YsYUFBa0M7O0FBQUE7QUFBQSxNQUFqQkcsT0FBaUIsUUFBakJBLE9BQWlCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3RSxNQUFJQSxJQUFJLEtBQUtDLG1DQUFiLEVBQWdDO0FBQUEsNEJBTTFCRixPQU4wQixDQUU1QkcsUUFGNEI7QUFBQSxrREFHMUJDLElBSDBCO0FBQUEsUUFHbEJDLEVBSGtCLHlCQUdsQkEsRUFIa0I7QUFBQSxRQUdkQyxJQUhjLHlCQUdkQSxJQUhjO0FBQUEsUUFJcEJDLFlBSm9CLHFCQUkxQk4sSUFKMEI7O0FBUTlCLFFBQUlLLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ2xCLFVBQUlDLFlBQVksS0FBSyxRQUFyQixFQUErQjtBQUM3QlIsUUFBQUEsS0FBSyxxQkFBUUEsS0FBUix1Q0FBZ0JNLEVBQWhCLEVBQXFCRyxJQUFJLENBQUNDLEdBQUwsRUFBckIsRUFBTDtBQUNELE9BRkQsTUFFTyxJQUFJRixZQUFZLEtBQUssU0FBckIsRUFBZ0M7QUFBQSxxQkFDQVIsS0FEQTtBQUFBLFlBQ3ZCVyxJQUR1QixVQUM1QkwsRUFENEI7QUFBQSxZQUNkTSxTQURjLHNEQUM1Qk4sRUFENEI7QUFHckNOLFFBQUFBLEtBQUssR0FBR1ksU0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPWixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludCBuby1jYXNlLWRlY2xhcmF0aW9uczogXCJvZmZcIiovXG4vKmVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiovXG5cbmltcG9ydCB7IElOQ09NSU5HX0FDVElWSVRZIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmNvbWluZ0FjdGl2aXR5JztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYXN0VHlwaW5nQXQoc3RhdGUgPSBERUZBVUxUX1NUQVRFLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBpZiAodHlwZSA9PT0gSU5DT01JTkdfQUNUSVZJVFkpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpdml0eToge1xuICAgICAgICBmcm9tOiB7IGlkLCByb2xlIH0sXG4gICAgICAgIHR5cGU6IGFjdGl2aXR5VHlwZVxuICAgICAgfVxuICAgIH0gPSBwYXlsb2FkO1xuXG4gICAgaWYgKHJvbGUgPT09ICdib3QnKSB7XG4gICAgICBpZiAoYWN0aXZpdHlUeXBlID09PSAndHlwaW5nJykge1xuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIFtpZF06IERhdGUubm93KCkgfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZpdHlUeXBlID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgY29uc3QgeyBbaWRdOiBsYXN0LCAuLi5uZXh0U3RhdGUgfSA9IHN0YXRlO1xuXG4gICAgICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
