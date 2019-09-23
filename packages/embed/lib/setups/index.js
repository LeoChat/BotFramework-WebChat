'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = setup;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _aries = _interopRequireDefault(require('./aries'));

var _scorpio = _interopRequireDefault(require('./scorpio'));

var _version = _interopRequireDefault(require('./version3'));

var _version2 = _interopRequireDefault(require('./version4'));

function setup() {
  return _setup.apply(this, arguments);
}

function _setup() {
  _setup = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _len,
        args,
        _key,
        _args$,
        versionFamily,
        _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              _args$ = args[0];
              _args$ = _args$ === void 0 ? {} : _args$;
              versionFamily = _args$.versionFamily;
              _context.t0 = versionFamily;
              _context.next =
                _context.t0 === 'aries' ? 7 : _context.t0 === 'scorpio' ? 10 : _context.t0 === '3' ? 13 : 16;
              break;

            case 7:
              _context.next = 9;
              return _aries.default.apply(void 0, args);

            case 9:
              return _context.abrupt('return', _context.sent);

            case 10:
              _context.next = 12;
              return _scorpio.default.apply(void 0, args);

            case 12:
              return _context.abrupt('return', _context.sent);

            case 13:
              _context.next = 15;
              return _version.default.apply(void 0, args);

            case 15:
              return _context.abrupt('return', _context.sent);

            case 16:
              _context.next = 18;
              return _version2.default.apply(void 0, args);

            case 18:
              return _context.abrupt('return', _context.sent);

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _setup.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvaW5kZXguanMiXSwibmFtZXMiOlsic2V0dXAiLCJhcmdzIiwidmVyc2lvbkZhbWlseSIsInNldHVwQXJpZXMiLCJzZXR1cFNjb3JwaW8iLCJzZXR1cFZlcnNpb24zIiwic2V0dXBWZXJzaW9uNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztTQUU4QkEsSzs7Ozs7Ozs0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUF3QkMsSUFBeEI7QUFBd0JBLGNBQUFBLElBQXhCO0FBQUE7O0FBQUEscUJBQ29CQSxJQURwQjtBQUFBLHlDQUNjLEVBRGQ7QUFDSkMsWUFBQUEsYUFESSxVQUNKQSxhQURJO0FBQUEsMEJBR0xBLGFBSEs7QUFBQSw0Q0FJTixPQUpNLHVCQU9OLFNBUE0sd0JBVU4sR0FWTTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFLSUMsNkJBQWNGLElBQWQsQ0FMSjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFRSUcsK0JBQWdCSCxJQUFoQixDQVJKOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQVdJSSwrQkFBaUJKLElBQWpCLENBWEo7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBY0lLLGdDQUFpQkwsSUFBakIsQ0FkSjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0dXBBcmllcyBmcm9tICcuL2FyaWVzJztcbmltcG9ydCBzZXR1cFNjb3JwaW8gZnJvbSAnLi9zY29ycGlvJztcbmltcG9ydCBzZXR1cFZlcnNpb24zIGZyb20gJy4vdmVyc2lvbjMnO1xuaW1wb3J0IHNldHVwVmVyc2lvbjQgZnJvbSAnLi92ZXJzaW9uNCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNldHVwKC4uLmFyZ3MpIHtcbiAgY29uc3QgW3sgdmVyc2lvbkZhbWlseSB9ID0ge31dID0gYXJncztcblxuICBzd2l0Y2ggKHZlcnNpb25GYW1pbHkpIHtcbiAgICBjYXNlICdhcmllcyc6XG4gICAgICByZXR1cm4gYXdhaXQgc2V0dXBBcmllcyguLi5hcmdzKTtcblxuICAgIGNhc2UgJ3Njb3JwaW8nOlxuICAgICAgcmV0dXJuIGF3YWl0IHNldHVwU2NvcnBpbyguLi5hcmdzKTtcblxuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuIGF3YWl0IHNldHVwVmVyc2lvbjMoLi4uYXJncyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGF3YWl0IHNldHVwVmVyc2lvbjQoLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==
