'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = loadAsset;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _createElement = _interopRequireDefault(require('./createElement'));

// We enable Subresource Integrity to protect our assets on CDN.
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// curl https://cdn.botframework.com/botframework-webchat/4.3.0/webchat.js | openssl dgst -sha384 -binary | openssl base64 -A
function loadScript(src, integrity) {
  return new Promise(function(resolve, reject) {
    document.head.appendChild(
      (0, _createElement.default)('script', {
        async: true,
        crossOrigin: 'anonymous',
        integrity: integrity,
        onError: reject,
        onLoad: resolve,
        src: src
      })
    );
  });
}

function loadStylesheet(href, integrity) {
  document.head.appendChild(
    (0, _createElement.default)('link', {
      crossOrigin: 'anonymous',
      href: href,
      integrity: integrity,
      rel: 'stylesheet'
    })
  );
}

function loadAsset(_x) {
  return _loadAsset.apply(this, arguments);
}

function _loadAsset() {
  _loadAsset = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(src) {
      var _ref, _ref2, assetURL, integrity;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (_ref = Array.isArray(src) ? src : [src, undefined]),
                (_ref2 = (0, _slicedToArray2.default)(_ref, 2)),
                (assetURL = _ref2[0]),
                (integrity = _ref2[1]);

              if (!/\.css$/i.test(assetURL)) {
                _context.next = 5;
                break;
              }

              _context.t0 = loadStylesheet(assetURL, integrity);
              _context.next = 8;
              break;

            case 5:
              _context.next = 7;
              return loadScript(assetURL, integrity);

            case 7:
              _context.t0 = _context.sent;

            case 8:
              return _context.abrupt('return', _context.t0);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _loadAsset.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvbG9hZEFzc2V0LmpzIl0sIm5hbWVzIjpbImxvYWRTY3JpcHQiLCJzcmMiLCJpbnRlZ3JpdHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRvY3VtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYXN5bmMiLCJjcm9zc09yaWdpbiIsIm9uRXJyb3IiLCJvbkxvYWQiLCJsb2FkU3R5bGVzaGVldCIsImhyZWYiLCJyZWwiLCJsb2FkQXNzZXQiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJhc3NldFVSTCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCQyxTQUF6QixFQUFvQztBQUNsQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQ0UsNEJBQWMsUUFBZCxFQUF3QjtBQUN0QkMsTUFBQUEsS0FBSyxFQUFFLElBRGU7QUFFdEJDLE1BQUFBLFdBQVcsRUFBRSxXQUZTO0FBR3RCUixNQUFBQSxTQUFTLEVBQVRBLFNBSHNCO0FBSXRCUyxNQUFBQSxPQUFPLEVBQUVOLE1BSmE7QUFLdEJPLE1BQUFBLE1BQU0sRUFBRVIsT0FMYztBQU10QkgsTUFBQUEsR0FBRyxFQUFIQTtBQU5zQixLQUF4QixDQURGO0FBVUQsR0FYTSxDQUFQO0FBWUQ7O0FBRUQsU0FBU1ksY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEJaLFNBQTlCLEVBQXlDO0FBQ3ZDSSxFQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUNFLDRCQUFjLE1BQWQsRUFBc0I7QUFDcEJFLElBQUFBLFdBQVcsRUFBRSxXQURPO0FBRXBCSSxJQUFBQSxJQUFJLEVBQUpBLElBRm9CO0FBR3BCWixJQUFBQSxTQUFTLEVBQVRBLFNBSG9CO0FBSXBCYSxJQUFBQSxHQUFHLEVBQUU7QUFKZSxHQUF0QixDQURGO0FBUUQ7O1NBRTZCQyxTOzs7Ozs7OzRCQUFmLGlCQUF5QmYsR0FBekI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQmdCLEtBQUssQ0FBQ0MsT0FBTixDQUFjakIsR0FBZCxJQUFxQkEsR0FBckIsR0FBMkIsQ0FBQ0EsR0FBRCxFQUFNa0IsU0FBTixDQUQ1QyxpREFDTkMsUUFETSxhQUNJbEIsU0FESjs7QUFBQSxpQkFHTixVQUFVbUIsSUFBVixDQUFlRCxRQUFmLENBSE07QUFBQTtBQUFBO0FBQUE7O0FBQUEsMEJBR3FCUCxjQUFjLENBQUNPLFFBQUQsRUFBV2xCLFNBQVgsQ0FIbkM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFHaUVGLFVBQVUsQ0FBQ29CLFFBQUQsRUFBV2xCLFNBQVgsQ0FIM0U7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG4vLyBXZSBlbmFibGUgU3VicmVzb3VyY2UgSW50ZWdyaXR5IHRvIHByb3RlY3Qgb3VyIGFzc2V0cyBvbiBDRE4uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TZWN1cml0eS9TdWJyZXNvdXJjZV9JbnRlZ3JpdHlcbi8vIGN1cmwgaHR0cHM6Ly9jZG4uYm90ZnJhbWV3b3JrLmNvbS9ib3RmcmFtZXdvcmstd2ViY2hhdC80LjMuMC93ZWJjaGF0LmpzIHwgb3BlbnNzbCBkZ3N0IC1zaGEzODQgLWJpbmFyeSB8IG9wZW5zc2wgYmFzZTY0IC1BXG5cbmZ1bmN0aW9uIGxvYWRTY3JpcHQoc3JjLCBpbnRlZ3JpdHkpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgICBpbnRlZ3JpdHksXG4gICAgICAgIG9uRXJyb3I6IHJlamVjdCxcbiAgICAgICAgb25Mb2FkOiByZXNvbHZlLFxuICAgICAgICBzcmNcbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTdHlsZXNoZWV0KGhyZWYsIGludGVncml0eSkge1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoJ2xpbmsnLCB7XG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICBocmVmLFxuICAgICAgaW50ZWdyaXR5LFxuICAgICAgcmVsOiAnc3R5bGVzaGVldCdcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2FkQXNzZXQoc3JjKSB7XG4gIGNvbnN0IFthc3NldFVSTCwgaW50ZWdyaXR5XSA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtzcmMsIHVuZGVmaW5lZF07XG5cbiAgcmV0dXJuIC9cXC5jc3MkL2kudGVzdChhc3NldFVSTCkgPyBsb2FkU3R5bGVzaGVldChhc3NldFVSTCwgaW50ZWdyaXR5KSA6IGF3YWl0IGxvYWRTY3JpcHQoYXNzZXRVUkwsIGludGVncml0eSk7XG59XG4iXX0=
