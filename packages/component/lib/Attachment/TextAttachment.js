'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _TextContent = _interopRequireDefault(require('./TextContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TextAttachment = function TextAttachment(_ref) {
  var _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var content = _ref$attachment.content,
    contentType = _ref$attachment.contentType;
  return (
    !!content &&
    _react.default.createElement(_TextContent.default, {
      contentType: contentType,
      text: content
    })
  );
};

TextAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.string.isRequired,
    contentType: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = TextAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1RleHRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbIlRleHRBdHRhY2htZW50IiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJjb250ZW50VHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLDZCQUFHQyxVQUFIO0FBQUEsaURBQTBDLEVBQTFDO0FBQUEsTUFBaUJDLE9BQWpCLG1CQUFpQkEsT0FBakI7QUFBQSxNQUEwQkMsV0FBMUIsbUJBQTBCQSxXQUExQjtBQUFBLFNBQ3JCLENBQUMsQ0FBQ0QsT0FBRixJQUFhLDZCQUFDLG9CQUFEO0FBQWEsSUFBQSxXQUFXLEVBQUVDLFdBQTFCO0FBQXVDLElBQUEsSUFBSSxFQUFFRDtBQUE3QyxJQURRO0FBQUEsQ0FBdkI7O0FBR0FGLGNBQWMsQ0FBQ0ksU0FBZixHQUEyQjtBQUN6QkgsRUFBQUEsVUFBVSxFQUFFSSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkosSUFBQUEsT0FBTyxFQUFFRyxtQkFBVUUsTUFBVixDQUFpQkMsVUFEQTtBQUUxQkwsSUFBQUEsV0FBVyxFQUFFRSxtQkFBVUUsTUFBVixDQUFpQkM7QUFGSixHQUFoQixFQUdUQTtBQUpzQixDQUEzQjtlQU9lUixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUZXh0Q29udGVudCBmcm9tICcuL1RleHRDb250ZW50JztcblxuY29uc3QgVGV4dEF0dGFjaG1lbnQgPSAoeyBhdHRhY2htZW50OiB7IGNvbnRlbnQsIGNvbnRlbnRUeXBlIH0gPSB7fSB9KSA9PlxuICAhIWNvbnRlbnQgJiYgPFRleHRDb250ZW50IGNvbnRlbnRUeXBlPXtjb250ZW50VHlwZX0gdGV4dD17Y29udGVudH0gLz47XG5cblRleHRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29udGVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXR0YWNobWVudDtcbiJdfQ==
