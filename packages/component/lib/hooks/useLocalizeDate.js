'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = useLocalizeDate;

var _useLanguage3 = _interopRequireDefault(require('./useLanguage'));

var _getLocaleString = _interopRequireDefault(require('../Localization/getLocaleString'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function useLocalizeDate(date) {
  var _useLanguage = (0, _useLanguage3.default)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    language = _useLanguage2[0];

  return (0, _getLocaleString.default)(date, language);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VMb2NhbGl6ZURhdGUuanMiXSwibmFtZXMiOlsidXNlTG9jYWxpemVEYXRlIiwiZGF0ZSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQUEscUJBQ3pCLDRCQUR5QjtBQUFBO0FBQUEsTUFDckNDLFFBRHFDOztBQUc1QyxTQUFPLDhCQUFnQkQsSUFBaEIsRUFBc0JDLFFBQXRCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VMYW5ndWFnZSBmcm9tICcuL3VzZUxhbmd1YWdlJztcblxuaW1wb3J0IGdldExvY2FsZVN0cmluZyBmcm9tICcuLi9Mb2NhbGl6YXRpb24vZ2V0TG9jYWxlU3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9jYWxpemVEYXRlKGRhdGUpIHtcbiAgY29uc3QgW2xhbmd1YWdlXSA9IHVzZUxhbmd1YWdlKCk7XG5cbiAgcmV0dXJuIGdldExvY2FsZVN0cmluZyhkYXRlLCBsYW5ndWFnZSk7XG59XG4iXX0=
