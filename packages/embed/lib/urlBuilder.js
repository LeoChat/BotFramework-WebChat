'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.embedConfigurationURL = embedConfigurationURL;
exports.embedTelemetryURL = embedTelemetryURL;
exports.legacyEmbedURL = legacyEmbedURL;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

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

function embedConfigurationURL(botId, _ref) {
  var secret = _ref.secret,
    token = _ref.token,
    userId = _ref.userId;
  var urlSearchParams = new URLSearchParams(
    _objectSpread(
      {},
      secret && !token
        ? {
            s: secret
          }
        : {},
      {},
      token
        ? {
            t: token
          }
        : {},
      {},
      userId
        ? {
            userid: userId
          }
        : {}
    )
  );
  return '/embed/'.concat(botId, '/config?').concat(urlSearchParams.toString());
}

function embedTelemetryURL(botId, _ref2, points) {
  var secret = _ref2.secret,
    token = _ref2.token;
  var urlSearchParams = new URLSearchParams(
    _objectSpread(
      {},
      secret && !token
        ? {
            s: secret
          }
        : {},
      {},
      token
        ? {
            t: token
          }
        : {},
      {
        p: points
      }
    )
  );
  return '/embed/'.concat(botId, '/telemetry?').concat(urlSearchParams.toString());
}

function legacyEmbedURL(botId, urlSearchParams) {
  return '/embed/'.concat(botId, '?').concat(urlSearchParams.toString());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91cmxCdWlsZGVyLmpzIl0sIm5hbWVzIjpbImVtYmVkQ29uZmlndXJhdGlvblVSTCIsImJvdElkIiwic2VjcmV0IiwidG9rZW4iLCJ1c2VySWQiLCJ1cmxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzIiwidCIsInVzZXJpZCIsInRvU3RyaW5nIiwiZW1iZWRUZWxlbWV0cnlVUkwiLCJwb2ludHMiLCJwIiwibGVnYWN5RW1iZWRVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EscUJBQVQsQ0FBK0JDLEtBQS9CLFFBQWlFO0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDL0QsTUFBTUMsZUFBZSxHQUFHLElBQUlDLGVBQUosbUJBQ2xCSixNQUFNLElBQUksQ0FBQ0MsS0FBWCxHQUFtQjtBQUFFSSxJQUFBQSxDQUFDLEVBQUVMO0FBQUwsR0FBbkIsR0FBbUMsRUFEakIsTUFFbEJDLEtBQUssR0FBRztBQUFFSyxJQUFBQSxDQUFDLEVBQUVMO0FBQUwsR0FBSCxHQUFrQixFQUZMLE1BR2xCQyxNQUFNLEdBQUc7QUFBRUssSUFBQUEsTUFBTSxFQUFFTDtBQUFWLEdBQUgsR0FBd0IsRUFIWixFQUF4QjtBQU1BLDBCQUFpQkgsS0FBakIscUJBQWlDSSxlQUFlLENBQUNLLFFBQWhCLEVBQWpDO0FBQ0Q7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJWLEtBQTNCLFNBQXFEVyxNQUFyRCxFQUE2RDtBQUFBLE1BQXpCVixNQUF5QixTQUF6QkEsTUFBeUI7QUFBQSxNQUFqQkMsS0FBaUIsU0FBakJBLEtBQWlCO0FBQzNELE1BQU1FLGVBQWUsR0FBRyxJQUFJQyxlQUFKLG1CQUNsQkosTUFBTSxJQUFJLENBQUNDLEtBQVgsR0FBbUI7QUFBRUksSUFBQUEsQ0FBQyxFQUFFTDtBQUFMLEdBQW5CLEdBQW1DLEVBRGpCLE1BRWxCQyxLQUFLLEdBQUc7QUFBRUssSUFBQUEsQ0FBQyxFQUFFTDtBQUFMLEdBQUgsR0FBa0IsRUFGTDtBQUd0QlUsSUFBQUEsQ0FBQyxFQUFFRDtBQUhtQixLQUF4QjtBQU1BLDBCQUFpQlgsS0FBakIsd0JBQW9DSSxlQUFlLENBQUNLLFFBQWhCLEVBQXBDO0FBQ0Q7O0FBRUQsU0FBU0ksY0FBVCxDQUF3QmIsS0FBeEIsRUFBK0JJLGVBQS9CLEVBQWdEO0FBQzlDLDBCQUFpQkosS0FBakIsY0FBMEJJLGVBQWUsQ0FBQ0ssUUFBaEIsRUFBMUI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGVtYmVkQ29uZmlndXJhdGlvblVSTChib3RJZCwgeyBzZWNyZXQsIHRva2VuLCB1c2VySWQgfSkge1xuICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAuLi4oc2VjcmV0ICYmICF0b2tlbiA/IHsgczogc2VjcmV0IH0gOiB7fSksXG4gICAgLi4uKHRva2VuID8geyB0OiB0b2tlbiB9IDoge30pLFxuICAgIC4uLih1c2VySWQgPyB7IHVzZXJpZDogdXNlcklkIH0gOiB7fSlcbiAgfSk7XG5cbiAgcmV0dXJuIGAvZW1iZWQvJHtib3RJZH0vY29uZmlnPyR7dXJsU2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcbn1cblxuZnVuY3Rpb24gZW1iZWRUZWxlbWV0cnlVUkwoYm90SWQsIHsgc2VjcmV0LCB0b2tlbiB9LCBwb2ludHMpIHtcbiAgY29uc3QgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgLi4uKHNlY3JldCAmJiAhdG9rZW4gPyB7IHM6IHNlY3JldCB9IDoge30pLFxuICAgIC4uLih0b2tlbiA/IHsgdDogdG9rZW4gfSA6IHt9KSxcbiAgICBwOiBwb2ludHNcbiAgfSk7XG5cbiAgcmV0dXJuIGAvZW1iZWQvJHtib3RJZH0vdGVsZW1ldHJ5PyR7dXJsU2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcbn1cblxuZnVuY3Rpb24gbGVnYWN5RW1iZWRVUkwoYm90SWQsIHVybFNlYXJjaFBhcmFtcykge1xuICByZXR1cm4gYC9lbWJlZC8ke2JvdElkfT8ke3VybFNlYXJjaFBhcmFtcy50b1N0cmluZygpfWA7XG59XG5cbmV4cG9ydCB7IGVtYmVkQ29uZmlndXJhdGlvblVSTCwgZW1iZWRUZWxlbWV0cnlVUkwsIGxlZ2FjeUVtYmVkVVJMIH07XG4iXX0=
