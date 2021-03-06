'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = referenceGrammarID;

var _setReferenceGrammarID = require('../actions/setReferenceGrammarID');

var DEFAULT_STATE = null;

function referenceGrammarID() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    case _setReferenceGrammarID.SET_REFERENCE_GRAMMAR_ID:
      state = payload.referenceGrammarID || null;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yZWZlcmVuY2VHcmFtbWFySUQuanMiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFURSIsInJlZmVyZW5jZUdyYW1tYXJJRCIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfUkVGRVJFTkNFX0dSQU1NQVJfSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsSUFBdEI7O0FBRWUsU0FBU0Msa0JBQVQsR0FBc0U7QUFBQSxNQUExQ0MsS0FBMEMsdUVBQWxDRixhQUFrQzs7QUFBQTtBQUFBLE1BQWpCRyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ25GLFVBQVFBLElBQVI7QUFDRSxTQUFLQywrQ0FBTDtBQUNFSCxNQUFBQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0Ysa0JBQVIsSUFBOEIsSUFBdEM7QUFDQTs7QUFFRjtBQUNFO0FBTko7O0FBU0EsU0FBT0MsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1JFRkVSRU5DRV9HUkFNTUFSX0lEIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRSZWZlcmVuY2VHcmFtbWFySUQnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVmZXJlbmNlR3JhbW1hcklEKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfUkVGRVJFTkNFX0dSQU1NQVJfSUQ6XG4gICAgICBzdGF0ZSA9IHBheWxvYWQucmVmZXJlbmNlR3JhbW1hcklEIHx8IG51bGw7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
