'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = loadIFRAME;

var _createElement = _interopRequireDefault(require('./createElement'));

function loadIFRAME(src) {
  return new Promise(function(resolve, reject) {
    document.body.appendChild(
      (0, _createElement.default)(
        'div',
        {
          style: {
            height: '100%',
            overflow: 'hidden'
          }
        },
        (0, _createElement.default)('iframe', {
          onError: reject,
          onLoad: resolve,
          src: src,
          style: {
            border: '0',
            height: '100%',
            width: '100%'
          }
        })
      )
    );
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvbG9hZElGUkFNRS5qcyJdLCJuYW1lcyI6WyJsb2FkSUZSQU1FIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJvbkVycm9yIiwib25Mb2FkIiwiYm9yZGVyIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVlLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3RDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FDRSw0QkFDRSxLQURGLEVBRUU7QUFDRUMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLE1BQU0sRUFBRSxNQURIO0FBRUxDLFFBQUFBLFFBQVEsRUFBRTtBQUZMO0FBRFQsS0FGRixFQVFFLDRCQUFjLFFBQWQsRUFBd0I7QUFDdEJDLE1BQUFBLE9BQU8sRUFBRVAsTUFEYTtBQUV0QlEsTUFBQUEsTUFBTSxFQUFFVCxPQUZjO0FBR3RCRixNQUFBQSxHQUFHLEVBQUhBLEdBSHNCO0FBSXRCTyxNQUFBQSxLQUFLLEVBQUU7QUFDTEssUUFBQUEsTUFBTSxFQUFFLEdBREg7QUFFTEosUUFBQUEsTUFBTSxFQUFFLE1BRkg7QUFHTEssUUFBQUEsS0FBSyxFQUFFO0FBSEY7QUFKZSxLQUF4QixDQVJGLENBREY7QUFxQkQsR0F0Qk0sQ0FBUDtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJRlJBTUUoc3JjKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICAgICAgb25FcnJvcjogcmVqZWN0LFxuICAgICAgICAgIG9uTG9hZDogcmVzb2x2ZSxcbiAgICAgICAgICBzcmMsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH0pO1xufVxuIl19
