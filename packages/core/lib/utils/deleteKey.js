'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = deleteKey;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

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

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^deleted$" }] */
function deleteKey(map, key) {
  if (!map) {
    return map;
  }

  var deleted = map[key],
    nextMap = (0, _objectWithoutProperties2['default'])(map, [key].map(_toPropertyKey));
  return nextMap;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kZWxldGVLZXkuanMiXSwibmFtZXMiOlsiZGVsZXRlS2V5IiwibWFwIiwia2V5IiwiZGVsZXRlZCIsIm5leHRNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDMUMsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUixXQUFPQSxHQUFQO0FBQ0Q7O0FBSHlDLE1BSzNCRSxPQUwyQixHQUtIRixHQUxHLENBS2pDQyxHQUxpQztBQUFBLE1BS2ZFLE9BTGUsNkNBS0hILEdBTEcsR0FLakNDLEdBTGlDO0FBTzFDLFNBQU9FLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXmRlbGV0ZWQkXCIgfV0gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlS2V5KG1hcCwga2V5KSB7XG4gIGlmICghbWFwKSB7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIGNvbnN0IHsgW2tleV06IGRlbGV0ZWQsIC4uLm5leHRNYXAgfSA9IG1hcDtcblxuICByZXR1cm4gbmV4dE1hcDtcbn1cbiJdfQ==
