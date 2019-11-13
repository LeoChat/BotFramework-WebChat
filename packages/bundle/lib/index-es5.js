'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _exportNames = {
  createDirectLine: true
};
exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

require('core-js/features/array/find-index');

require('core-js/features/array/find');

require('core-js/features/array/includes');

require('core-js/features/array/iterator');

require('core-js/features/dom-collections');

require('core-js/features/math/sign');

require('core-js/features/number/is-finite');

require('core-js/features/object/assign');

require('core-js/features/object/values');

require('core-js/features/promise');

require('core-js/features/promise/finally');

require('core-js/features/string/starts-with');

require('core-js/features/symbol');

require('url-search-params-polyfill');

require('whatwg-fetch');

var _indexMinimal = require('./index-minimal');

var _addVersion = _interopRequireDefault(require('./addVersion'));

var _createDirectLine = _interopRequireDefault(require('./createDirectLine'));

var _index = require('./index');

Object.keys(_index).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

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

var createDirectLine = function createDirectLine(options) {
  options.botAgent &&
    console.warn(
      'Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.'
    );
  return (0, _createDirectLine.default)(
    _objectSpread({}, options, {
      botAgent: 'WebChat/'.concat(_indexMinimal.version, ' (ES5)')
    })
  );
};

exports.createDirectLine = createDirectLine;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  createDirectLine: createDirectLine
});
(0, _addVersion.default)('full-es5');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1lczUudHMiXSwibmFtZXMiOlsiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwidmVyc2lvbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFDekNBLEVBQUFBLE9BQU8sQ0FBQ0MsUUFBUixJQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxzTEFERixDQURGO0FBSUEsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxxQkFBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O0FBUVBDLE1BQU0sQ0FBQyxTQUFELENBQU4scUJBQ0tBLE1BQU0sQ0FBQyxTQUFELENBRFg7QUFFRU4sRUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUZGO0FBS0EseUJBQVcsVUFBWCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xuLy8gd2luZG93WydXZWJDaGF0J10gaXMgcmVxdWlyZWQgZm9yIFR5cGVTY3JpcHRcblxuLy8gUG9seWZpbGxzIGZvciBJRTExIGFuZCBvdGhlciBFUzUgYnJvd3NlcnNcbi8vIFRvIG1haW50YWluIHF1YWxpdHksIHdlIHByZWZlciBwb2x5ZmlsbHMgd2l0aG91dCBhZGRpdGl2ZXNcbi8vIEZvciBleGFtcGxlLCB3ZSBwcmVmZXIgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBmcm9tIFwiY29yZS1qc1wiIHRoYW4gXCJibHVlYmlyZFwiXG5cbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9maW5kLWluZGV4JztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9maW5kJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9pbmNsdWRlcyc7XG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvYXJyYXkvaXRlcmF0b3InO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2RvbS1jb2xsZWN0aW9ucyc7XG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvbWF0aC9zaWduJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9udW1iZXIvaXMtZmluaXRlJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9vYmplY3QvYXNzaWduJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9vYmplY3QvdmFsdWVzJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9wcm9taXNlJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9wcm9taXNlL2ZpbmFsbHknO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3N0cmluZy9zdGFydHMtd2l0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvc3ltYm9sJztcblxuaW1wb3J0ICd1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbCc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi9pbmRleC1taW5pbWFsJztcbmltcG9ydCBhZGRWZXJzaW9uIGZyb20gJy4vYWRkVmVyc2lvbic7XG5pbXBvcnQgZGVmYXVsdENyZWF0ZURpcmVjdExpbmUgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lJztcblxuZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3RMaW5lID0gb3B0aW9ucyA9PiB7XG4gIG9wdGlvbnMuYm90QWdlbnQgJiZcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnV2ViIENoYXQ6IERldmVsb3BlcnMgYXJlIG5vdCBjdXJyZW50bHkgYWxsb3dlZCB0byBzZXQgYm90QWdlbnQgaW4gdGhlIGNyZWF0ZURpcmVjdExpbmUgZnVuY3Rpb24uIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTE5IGZvciBtb3JlIGRldGFpbHMuJ1xuICAgICk7XG4gIHJldHVybiBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSh7IC4uLm9wdGlvbnMsIGJvdEFnZW50OiBgV2ViQ2hhdC8ke3ZlcnNpb259IChFUzUpYCB9KTtcbn07XG5cbndpbmRvd1snV2ViQ2hhdCddID0ge1xuICAuLi53aW5kb3dbJ1dlYkNoYXQnXSxcbiAgY3JlYXRlRGlyZWN0TGluZVxufTtcblxuYWRkVmVyc2lvbignZnVsbC1lczUnKTtcbiJdfQ==
