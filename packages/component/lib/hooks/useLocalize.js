'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = useLocalize;

var _useLanguage3 = _interopRequireDefault(require('./useLanguage'));

var _Localize = require('../Localization/Localize');

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

function useLocalize(text) {
  var _useLanguage = (0, _useLanguage3.default)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    language = _useLanguage2[0]; // TODO: [P3] Use useMemo to cache the result.

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _Localize.localize.apply(void 0, [text, language].concat(args));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VMb2NhbGl6ZS5qcyJdLCJuYW1lcyI6WyJ1c2VMb2NhbGl6ZSIsInRleHQiLCJsYW5ndWFnZSIsImFyZ3MiLCJsb2NhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxJQUFyQixFQUFvQztBQUFBLHFCQUM5Qiw0QkFEOEI7QUFBQTtBQUFBLE1BQzFDQyxRQUQwQyxxQkFHakQ7OztBQUhpRCxvQ0FBTkMsSUFBTTtBQUFOQSxJQUFBQSxJQUFNO0FBQUE7O0FBSWpELFNBQU9DLGtDQUFTSCxJQUFULEVBQWVDLFFBQWYsU0FBNEJDLElBQTVCLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VMYW5ndWFnZSBmcm9tICcuL3VzZUxhbmd1YWdlJztcblxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMb2NhbGl6ZSh0ZXh0LCAuLi5hcmdzKSB7XG4gIGNvbnN0IFtsYW5ndWFnZV0gPSB1c2VMYW5ndWFnZSgpO1xuXG4gIC8vIFRPRE86IFtQM10gVXNlIHVzZU1lbW8gdG8gY2FjaGUgdGhlIHJlc3VsdC5cbiAgcmV0dXJuIGxvY2FsaXplKHRleHQsIGxhbmd1YWdlLCAuLi5hcmdzKTtcbn1cbiJdfQ==
