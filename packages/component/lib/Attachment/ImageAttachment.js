'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ImageContent = _interopRequireDefault(require('./ImageContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ImageAttachment = function ImageAttachment(_ref) {
  var attachment = _ref.attachment;
  return _react.default.createElement(_ImageContent.default, {
    alt: attachment.name,
    src: attachment.thumbnailUrl || attachment.contentUrl
  });
};

ImageAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachments: _propTypes.default.array.isRequired
  }).isRequired,
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string,
    thumbnailUrl: _propTypes.default.string
  }).isRequired
};
var _default = ImageAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUF0dGFjaG1lbnQiLCJhdHRhY2htZW50IiwibmFtZSIsInRodW1ibmFpbFVybCIsImNvbnRlbnRVcmwiLCJwcm9wVHlwZXMiLCJhY3Rpdml0eSIsIlByb3BUeXBlcyIsInNoYXBlIiwiYXR0YWNobWVudHMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxTQUN0Qiw2QkFBQyxxQkFBRDtBQUFjLElBQUEsR0FBRyxFQUFFQSxVQUFVLENBQUNDLElBQTlCO0FBQW9DLElBQUEsR0FBRyxFQUFFRCxVQUFVLENBQUNFLFlBQVgsSUFBMkJGLFVBQVUsQ0FBQ0c7QUFBL0UsSUFEc0I7QUFBQSxDQUF4Qjs7QUFJQUosZUFBZSxDQUFDSyxTQUFoQixHQUE0QjtBQUMxQkMsRUFBQUEsUUFBUSxFQUFFQyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QkMsSUFBQUEsV0FBVyxFQUFFRixtQkFBVUcsS0FBVixDQUFnQkM7QUFETCxHQUFoQixFQUVQQSxVQUh1QjtBQUkxQlYsRUFBQUEsVUFBVSxFQUFFTSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkosSUFBQUEsVUFBVSxFQUFFRyxtQkFBVUssTUFBVixDQUFpQkQsVUFESDtBQUUxQlQsSUFBQUEsSUFBSSxFQUFFSyxtQkFBVUssTUFGVTtBQUcxQlQsSUFBQUEsWUFBWSxFQUFFSSxtQkFBVUs7QUFIRSxHQUFoQixFQUlURDtBQVJ1QixDQUE1QjtlQVdlWCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbWFnZUNvbnRlbnQgZnJvbSAnLi9JbWFnZUNvbnRlbnQnO1xuXG5jb25zdCBJbWFnZUF0dGFjaG1lbnQgPSAoeyBhdHRhY2htZW50IH0pID0+IChcbiAgPEltYWdlQ29udGVudCBhbHQ9e2F0dGFjaG1lbnQubmFtZX0gc3JjPXthdHRhY2htZW50LnRodW1ibmFpbFVybCB8fCBhdHRhY2htZW50LmNvbnRlbnRVcmx9IC8+XG4pO1xuXG5JbWFnZUF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdHRhY2htZW50czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aHVtYm5haWxVcmw6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VBdHRhY2htZW50O1xuIl19
