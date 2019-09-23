'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _VideoContent = _interopRequireDefault(require('./VideoContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column'
});

var VideoAttachment = function VideoAttachment(_ref) {
  var attachment = _ref.attachment,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', styleSet.videoAttachment + '')
    },
    _react.default.createElement(_VideoContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

VideoAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired,
  styleSet: _propTypes.default.shape({
    videoAttachment: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(VideoAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpZGVvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiVmlkZW9BdHRhY2htZW50IiwiYXR0YWNobWVudCIsInN0eWxlU2V0IiwidmlkZW9BdHRhY2htZW50IiwibmFtZSIsImNvbnRlbnRVcmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsT0FBTyxFQUFFLE1BRFU7QUFFbkJDLEVBQUFBLGFBQWEsRUFBRTtBQUZJLENBQUosQ0FBakI7O0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLFNBQ3RCO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQVdMLFFBQVEsR0FBRyxFQUF0QixFQUEwQkssUUFBUSxDQUFDQyxlQUFULEdBQTJCLEVBQXJEO0FBQWhCLEtBQ0UsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEdBQUcsRUFBRUYsVUFBVSxDQUFDRyxJQUE5QjtBQUFvQyxJQUFBLEdBQUcsRUFBRUgsVUFBVSxDQUFDSTtBQUFwRCxJQURGLENBRHNCO0FBQUEsQ0FBeEI7O0FBTUFMLGVBQWUsQ0FBQ00sU0FBaEIsR0FBNEI7QUFDMUJMLEVBQUFBLFVBQVUsRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJILElBQUFBLFVBQVUsRUFBRUUsbUJBQVVFLE1BQVYsQ0FBaUJDLFVBREg7QUFFMUJOLElBQUFBLElBQUksRUFBRUcsbUJBQVVFO0FBRlUsR0FBaEIsRUFHVEMsVUFKdUI7QUFLMUJSLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJMLElBQUFBLGVBQWUsRUFBRUksbUJBQVVJLEdBQVYsQ0FBY0Q7QUFEUCxHQUFoQixFQUVQQTtBQVB1QixDQUE1Qjs7ZUFVZSwrQkFBaUI7QUFBQSxNQUFHUixRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFqQixFQUFtREYsZUFBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBWaWRlb0NvbnRlbnQgZnJvbSAnLi9WaWRlb0NvbnRlbnQnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbn0pO1xuXG5jb25zdCBWaWRlb0F0dGFjaG1lbnQgPSAoeyBhdHRhY2htZW50LCBzdHlsZVNldCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycsIHN0eWxlU2V0LnZpZGVvQXR0YWNobWVudCArICcnKX0+XG4gICAgPFZpZGVvQ29udGVudCBhbHQ9e2F0dGFjaG1lbnQubmFtZX0gc3JjPXthdHRhY2htZW50LmNvbnRlbnRVcmx9IC8+XG4gIDwvZGl2PlxuKTtcblxuVmlkZW9BdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB2aWRlb0F0dGFjaG1lbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShWaWRlb0F0dGFjaG1lbnQpO1xuIl19
