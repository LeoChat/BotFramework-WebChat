'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AudioContent = _interopRequireDefault(require('./AudioContent'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AudioAttachment = function AudioAttachment(_ref) {
  var attachment = _ref.attachment,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.audioAttachment
    },
    _react.default.createElement(_AudioContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

AudioAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired,
  styleSet: _propTypes.default.shape({
    audioAttachment: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(AudioAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0F0dGFjaG1lbnQiLCJhdHRhY2htZW50Iiwic3R5bGVTZXQiLCJhdWRpb0F0dGFjaG1lbnQiLCJuYW1lIiwiY29udGVudFVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLFNBQ3RCO0FBQUssSUFBQSxTQUFTLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRSw2QkFBQyxxQkFBRDtBQUFjLElBQUEsR0FBRyxFQUFFRixVQUFVLENBQUNHLElBQTlCO0FBQW9DLElBQUEsR0FBRyxFQUFFSCxVQUFVLENBQUNJO0FBQXBELElBREYsQ0FEc0I7QUFBQSxDQUF4Qjs7QUFNQUwsZUFBZSxDQUFDTSxTQUFoQixHQUE0QjtBQUMxQkwsRUFBQUEsVUFBVSxFQUFFTSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkgsSUFBQUEsVUFBVSxFQUFFRSxtQkFBVUUsTUFBVixDQUFpQkMsVUFESDtBQUUxQk4sSUFBQUEsSUFBSSxFQUFFRyxtQkFBVUU7QUFGVSxHQUFoQixFQUdUQyxVQUp1QjtBQUsxQlIsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QkwsSUFBQUEsZUFBZSxFQUFFSSxtQkFBVUksR0FBVixDQUFjRDtBQURQLEdBQWhCLEVBRVBBO0FBUHVCLENBQTVCOztlQVVlLCtCQUFpQjtBQUFBLE1BQUdSLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ERixlQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBdWRpb0NvbnRlbnQgZnJvbSAnLi9BdWRpb0NvbnRlbnQnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IEF1ZGlvQXR0YWNobWVudCA9ICh7IGF0dGFjaG1lbnQsIHN0eWxlU2V0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlU2V0LmF1ZGlvQXR0YWNobWVudH0+XG4gICAgPEF1ZGlvQ29udGVudCBhbHQ9e2F0dGFjaG1lbnQubmFtZX0gc3JjPXthdHRhY2htZW50LmNvbnRlbnRVcmx9IC8+XG4gIDwvZGl2PlxuKTtcblxuQXVkaW9BdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdWRpb0F0dGFjaG1lbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShBdWRpb0F0dGFjaG1lbnQpO1xuIl19
