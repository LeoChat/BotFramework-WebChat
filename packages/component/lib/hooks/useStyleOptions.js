'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = useStyleOptions;

var _useStyleSet = _interopRequireDefault(require('./useStyleSet'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function useStyleOptions() {
  // Today, the "styleSet.options" is patched with missing values and "styleOptions" are unpatched.
  // Thus, we are using the "styleSet.options" version for now.
  return [(0, _useStyleSet.default)()[0].options];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VTdHlsZU9wdGlvbnMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVPcHRpb25zIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUN4QztBQUNBO0FBRUEsU0FBTyxDQUFDLDRCQUFjLENBQWQsRUFBaUJDLE9BQWxCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuL3VzZVN0eWxlU2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3R5bGVPcHRpb25zKCkge1xuICAvLyBUb2RheSwgdGhlIFwic3R5bGVTZXQub3B0aW9uc1wiIGlzIHBhdGNoZWQgd2l0aCBtaXNzaW5nIHZhbHVlcyBhbmQgXCJzdHlsZU9wdGlvbnNcIiBhcmUgdW5wYXRjaGVkLlxuICAvLyBUaHVzLCB3ZSBhcmUgdXNpbmcgdGhlIFwic3R5bGVTZXQub3B0aW9uc1wiIHZlcnNpb24gZm9yIG5vdy5cblxuICByZXR1cm4gW3VzZVN0eWxlU2V0KClbMF0ub3B0aW9uc107XG59XG4iXX0=
