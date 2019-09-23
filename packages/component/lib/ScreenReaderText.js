'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

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
    /* Because of differences in browser implementations, <span aria-label> is used to make the screen reader perform the same on different browsers. This workaround was made to accommodate Edge v44 */
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

var _default = (0, _connectToWebChat.default)()(ScreenReaderText);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TY3JlZW5SZWFkZXJUZXh0LmpzIl0sIm5hbWVzIjpbIlJPT1RfQ1NTIiwiY29sb3IiLCJoZWlnaHQiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsIlNjcmVlblJlYWRlclRleHQiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGlCQUFJO0FBQ25CO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxhQUZZO0FBR25CQyxFQUFBQSxNQUFNLEVBQUUsQ0FIVztBQUluQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsS0FKWTtBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLFFBTFM7QUFNbkJDLEVBQUFBLFFBQVEsRUFBRSxVQU5TO0FBT25CQyxFQUFBQSxHQUFHLEVBQUUsQ0FQYztBQVFuQkMsRUFBQUEsVUFBVSxFQUFFLFFBUk87QUFTbkJDLEVBQUFBLEtBQUssRUFBRTtBQVRZLENBQUosQ0FBakI7O0FBWUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBO0FBQ3ZCO0FBQ0E7QUFBTSxvQkFBWUEsSUFBbEI7QUFBd0IsTUFBQSxTQUFTLEVBQUUseUJBQVdWLFFBQVEsR0FBRyxFQUF0QjtBQUFuQyxPQUNHVSxJQURIO0FBRnVCO0FBQUEsQ0FBekI7O0FBT0FELGdCQUFnQixDQUFDRSxTQUFqQixHQUE2QjtBQUMzQkQsRUFBQUEsSUFBSSxFQUFFRSxtQkFBVUMsTUFBVixDQUFpQkM7QUFESSxDQUE3Qjs7ZUFJZSxpQ0FBbUJMLGdCQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgLy8gLnNyLW9ubHkgLSBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSBpbnZpc2libGUgdG8gdGhlIHZpc3VhbCBXZWIgQ2hhdCB1c2VyLCBidXQgcmVhZCBieSB0aGUgQVQgd2hlbiB1c2luZyBhIHNjcmVlbiByZWFkZXJcbiAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIGhlaWdodDogMSxcbiAgbGVmdDogLTEwMDAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IDAsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB3aWR0aDogMVxufSk7XG5cbmNvbnN0IFNjcmVlblJlYWRlclRleHQgPSAoeyB0ZXh0IH0pID0+IChcbiAgLyogQmVjYXVzZSBvZiBkaWZmZXJlbmNlcyBpbiBicm93c2VyIGltcGxlbWVudGF0aW9ucywgPHNwYW4gYXJpYS1sYWJlbD4gaXMgdXNlZCB0byBtYWtlIHRoZSBzY3JlZW4gcmVhZGVyIHBlcmZvcm0gdGhlIHNhbWUgb24gZGlmZmVyZW50IGJyb3dzZXJzLiBUaGlzIHdvcmthcm91bmQgd2FzIG1hZGUgdG8gYWNjb21tb2RhdGUgRWRnZSB2NDQgKi9cbiAgPHNwYW4gYXJpYS1sYWJlbD17dGV4dH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycpfT5cbiAgICB7dGV4dH1cbiAgPC9zcGFuPlxuKTtcblxuU2NyZWVuUmVhZGVyVGV4dC5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgpKFNjcmVlblJlYWRlclRleHQpO1xuIl19
