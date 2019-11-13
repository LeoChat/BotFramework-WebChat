'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS = (0, _glamor.css)({
  // .sr-only - This component is intended to be invisible to the visual Web Chat user, but read by the AT when using a screen reader
  color: 'transparent',
  height: 1,
  left: -10000,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  whiteSpace: 'nowrap',
  width: 1
});

var ScreenReaderText = function ScreenReaderText(_ref) {
  var text = _ref.text;
  return (
    // Because of differences in browser implementations, <span aria-label> is used to make the screen reader perform the same on different browsers. This workaround was made to accommodate Edge v44
    _react.default.createElement(
      'span',
      {
        'aria-label': text,
        className: (0, _classnames.default)(ROOT_CSS + '')
      },
      text
    )
  );
};

ScreenReaderText.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = ScreenReaderText;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TY3JlZW5SZWFkZXJUZXh0LmpzIl0sIm5hbWVzIjpbIlJPT1RfQ1NTIiwiY29sb3IiLCJoZWlnaHQiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsIlNjcmVlblJlYWRlclRleHQiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGlCQUFJO0FBQ25CO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxhQUZZO0FBR25CQyxFQUFBQSxNQUFNLEVBQUUsQ0FIVztBQUluQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsS0FKWTtBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLFFBTFM7QUFNbkJDLEVBQUFBLFFBQVEsRUFBRSxVQU5TO0FBT25CQyxFQUFBQSxHQUFHLEVBQUUsQ0FQYztBQVFuQkMsRUFBQUEsVUFBVSxFQUFFLFFBUk87QUFTbkJDLEVBQUFBLEtBQUssRUFBRTtBQVRZLENBQUosQ0FBakI7O0FBWUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQ3ZCO0FBQ0E7QUFBTSxvQkFBWUEsSUFBbEI7QUFBd0IsTUFBQSxTQUFTLEVBQUUseUJBQVdWLFFBQVEsR0FBRyxFQUF0QjtBQUFuQyxPQUNHVSxJQURIO0FBRnVCO0FBQUEsQ0FBekI7O0FBT0FELGdCQUFnQixDQUFDRSxTQUFqQixHQUE2QjtBQUMzQkQsRUFBQUEsSUFBSSxFQUFFRSxtQkFBVUMsTUFBVixDQUFpQkM7QUFESSxDQUE3QjtlQUllTCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIC8vIC5zci1vbmx5IC0gVGhpcyBjb21wb25lbnQgaXMgaW50ZW5kZWQgdG8gYmUgaW52aXNpYmxlIHRvIHRoZSB2aXN1YWwgV2ViIENoYXQgdXNlciwgYnV0IHJlYWQgYnkgdGhlIEFUIHdoZW4gdXNpbmcgYSBzY3JlZW4gcmVhZGVyXG4gIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBoZWlnaHQ6IDEsXG4gIGxlZnQ6IC0xMDAwMCxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgd2lkdGg6IDFcbn0pO1xuXG5jb25zdCBTY3JlZW5SZWFkZXJUZXh0ID0gKHsgdGV4dCB9KSA9PiAoXG4gIC8vIEJlY2F1c2Ugb2YgZGlmZmVyZW5jZXMgaW4gYnJvd3NlciBpbXBsZW1lbnRhdGlvbnMsIDxzcGFuIGFyaWEtbGFiZWw+IGlzIHVzZWQgdG8gbWFrZSB0aGUgc2NyZWVuIHJlYWRlciBwZXJmb3JtIHRoZSBzYW1lIG9uIGRpZmZlcmVudCBicm93c2Vycy4gVGhpcyB3b3JrYXJvdW5kIHdhcyBtYWRlIHRvIGFjY29tbW9kYXRlIEVkZ2UgdjQ0XG4gIDxzcGFuIGFyaWEtbGFiZWw9e3RleHR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnKX0+XG4gICAge3RleHR9XG4gIDwvc3Bhbj5cbik7XG5cblNjcmVlblJlYWRlclRleHQucHJvcFR5cGVzID0ge1xuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblJlYWRlclRleHQ7XG4iXX0=
