'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createCoreMiddleware;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AudioAttachment = _interopRequireDefault(require('../../Attachment/AudioAttachment'));

var _DownloadAttachment = _interopRequireDefault(require('../../Attachment/DownloadAttachment'));

var _ImageAttachment = _interopRequireDefault(require('../../Attachment/ImageAttachment'));

var _UploadAttachment = _interopRequireDefault(require('../../Attachment/UploadAttachment'));

var _TextAttachment = _interopRequireDefault(require('../../Attachment/TextAttachment'));

var _VideoAttachment = _interopRequireDefault(require('../../Attachment/VideoAttachment'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// TODO: [P4] Rename this file or the whole middleware, it looks either too simple or too comprehensive now
function createCoreMiddleware() {
  return function() {
    return function(next) {
      var Attachment = function Attachment(_ref) {
        var _ref$activity = _ref.activity,
          activity = _ref$activity === void 0 ? {} : _ref$activity,
          _ref$activity2 = _ref.activity;
        _ref$activity2 = _ref$activity2 === void 0 ? {} : _ref$activity2;
        var role = _ref$activity2.from.role,
          attachment = _ref.attachment,
          _ref$attachment = _ref.attachment;
        _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
        var contentType = _ref$attachment.contentType,
          contentUrl = _ref$attachment.contentUrl,
          thumbnailUrl = _ref$attachment.thumbnailUrl;
        return role === 'user' && !/^text\//.test(contentType) && !thumbnailUrl
          ? _react.default.createElement(_UploadAttachment.default, {
              activity: activity,
              attachment: attachment
            })
          : /^audio\//.test(contentType)
          ? _react.default.createElement(_AudioAttachment.default, {
              activity: activity,
              attachment: attachment
            })
          : /^image\//.test(contentType)
          ? _react.default.createElement(_ImageAttachment.default, {
              activity: activity,
              attachment: attachment
            })
          : /^video\//.test(contentType)
          ? _react.default.createElement(_VideoAttachment.default, {
              activity: activity,
              attachment: attachment
            })
          : contentUrl || contentType === 'application/octet-stream'
          ? _react.default.createElement(_DownloadAttachment.default, {
              activity: activity,
              attachment: attachment
            })
          : /^text\//.test(contentType)
          ? _react.default.createElement(_TextAttachment.default, {
              activity: activity,
              attachment: attachment
            })
          : next({
              activity: activity,
              attachment: attachment
            });
      };

      Attachment.propTypes = {
        activity: _propTypes.default.any.isRequired,
        attachment: _propTypes.default.shape({
          contentType: _propTypes.default.string.isRequired,
          contentUrl: _propTypes.default.string.isRequired
        }).isRequired
      };
      return Attachment;
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NaWRkbGV3YXJlL0F0dGFjaG1lbnQvY3JlYXRlQ29yZU1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29yZU1pZGRsZXdhcmUiLCJuZXh0IiwiQXR0YWNobWVudCIsImFjdGl2aXR5Iiwicm9sZSIsImZyb20iLCJhdHRhY2htZW50IiwiY29udGVudFR5cGUiLCJjb250ZW50VXJsIiwidGh1bWJuYWlsVXJsIiwidGVzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzaGFwZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDZSxTQUFTQSxvQkFBVCxHQUFnQztBQUM3QyxTQUFPO0FBQUEsV0FBTSxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsVUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxpQ0FDakJDLFFBRGlCO0FBQUEsWUFDakJBLFFBRGlCLDhCQUNOLEVBRE07QUFBQSxrQ0FFakJBLFFBRmlCO0FBQUEscURBRWMsRUFGZDtBQUFBLFlBRUdDLElBRkgsa0JBRUxDLElBRkssQ0FFR0QsSUFGSDtBQUFBLFlBR2pCRSxVQUhpQixRQUdqQkEsVUFIaUI7QUFBQSxtQ0FJakJBLFVBSmlCO0FBQUEsdURBSXVDLEVBSnZDO0FBQUEsWUFJSEMsV0FKRyxtQkFJSEEsV0FKRztBQUFBLFlBSVVDLFVBSlYsbUJBSVVBLFVBSlY7QUFBQSxZQUlzQkMsWUFKdEIsbUJBSXNCQSxZQUp0QjtBQUFBLGVBTWpCTCxJQUFJLEtBQUssTUFBVCxJQUFtQixDQUFDLFVBQVdNLElBQVgsQ0FBZ0JILFdBQWhCLENBQXBCLElBQW9ELENBQUNFLFlBQXJELEdBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsVUFBQSxRQUFRLEVBQUVOLFFBQTVCO0FBQXNDLFVBQUEsVUFBVSxFQUFFRztBQUFsRCxVQURGLEdBRUksV0FBWUksSUFBWixDQUFpQkgsV0FBakIsSUFDRiw2QkFBQyx3QkFBRDtBQUFpQixVQUFBLFFBQVEsRUFBRUosUUFBM0I7QUFBcUMsVUFBQSxVQUFVLEVBQUVHO0FBQWpELFVBREUsR0FFQSxXQUFZSSxJQUFaLENBQWlCSCxXQUFqQixJQUNGLDZCQUFDLHdCQUFEO0FBQWlCLFVBQUEsUUFBUSxFQUFFSixRQUEzQjtBQUFxQyxVQUFBLFVBQVUsRUFBRUc7QUFBakQsVUFERSxHQUVBLFdBQVlJLElBQVosQ0FBaUJILFdBQWpCLElBQ0YsNkJBQUMsd0JBQUQ7QUFBaUIsVUFBQSxRQUFRLEVBQUVKLFFBQTNCO0FBQXFDLFVBQUEsVUFBVSxFQUFFRztBQUFqRCxVQURFLEdBRUFFLFVBQVUsSUFBSUQsV0FBVyxLQUFLLDBCQUE5QixHQUNGLDZCQUFDLDJCQUFEO0FBQW9CLFVBQUEsUUFBUSxFQUFFSixRQUE5QjtBQUF3QyxVQUFBLFVBQVUsRUFBRUc7QUFBcEQsVUFERSxHQUVBLFVBQVdJLElBQVgsQ0FBZ0JILFdBQWhCLElBQ0YsNkJBQUMsdUJBQUQ7QUFBZ0IsVUFBQSxRQUFRLEVBQUVKLFFBQTFCO0FBQW9DLFVBQUEsVUFBVSxFQUFFRztBQUFoRCxVQURFLEdBR0ZMLElBQUksQ0FBQztBQUFFRSxVQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUcsVUFBQUEsVUFBVSxFQUFWQTtBQUFaLFNBQUQsQ0FuQlc7QUFBQSxPQUFuQjs7QUFzQkFKLE1BQUFBLFVBQVUsQ0FBQ1MsU0FBWCxHQUF1QjtBQUNyQlIsUUFBQUEsUUFBUSxFQUFFUyxtQkFBVUMsR0FBVixDQUFjQyxVQURIO0FBRXJCUixRQUFBQSxVQUFVLEVBQUVNLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCUixVQUFBQSxXQUFXLEVBQUVLLG1CQUFVSSxNQUFWLENBQWlCRixVQURKO0FBRTFCTixVQUFBQSxVQUFVLEVBQUVJLG1CQUFVSSxNQUFWLENBQWlCRjtBQUZILFNBQWhCLEVBR1RBO0FBTGtCLE9BQXZCO0FBUUEsYUFBT1osVUFBUDtBQUNELEtBaENNO0FBQUEsR0FBUDtBQWlDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQXVkaW9BdHRhY2htZW50IGZyb20gJy4uLy4uL0F0dGFjaG1lbnQvQXVkaW9BdHRhY2htZW50JztcbmltcG9ydCBEb3dubG9hZEF0dGFjaG1lbnQgZnJvbSAnLi4vLi4vQXR0YWNobWVudC9Eb3dubG9hZEF0dGFjaG1lbnQnO1xuaW1wb3J0IEltYWdlQXR0YWNobWVudCBmcm9tICcuLi8uLi9BdHRhY2htZW50L0ltYWdlQXR0YWNobWVudCc7XG5pbXBvcnQgVXBsb2FkQXR0YWNobWVudCBmcm9tICcuLi8uLi9BdHRhY2htZW50L1VwbG9hZEF0dGFjaG1lbnQnO1xuaW1wb3J0IFRleHRBdHRhY2htZW50IGZyb20gJy4uLy4uL0F0dGFjaG1lbnQvVGV4dEF0dGFjaG1lbnQnO1xuaW1wb3J0IFZpZGVvQXR0YWNobWVudCBmcm9tICcuLi8uLi9BdHRhY2htZW50L1ZpZGVvQXR0YWNobWVudCc7XG5cbi8vIFRPRE86IFtQNF0gUmVuYW1lIHRoaXMgZmlsZSBvciB0aGUgd2hvbGUgbWlkZGxld2FyZSwgaXQgbG9va3MgZWl0aGVyIHRvbyBzaW1wbGUgb3IgdG9vIGNvbXByZWhlbnNpdmUgbm93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb3JlTWlkZGxld2FyZSgpIHtcbiAgcmV0dXJuICgpID0+IG5leHQgPT4ge1xuICAgIGNvbnN0IEF0dGFjaG1lbnQgPSAoe1xuICAgICAgYWN0aXZpdHkgPSB7fSxcbiAgICAgIGFjdGl2aXR5OiB7IGZyb206IHsgcm9sZSB9IH0gPSB7fSxcbiAgICAgIGF0dGFjaG1lbnQsXG4gICAgICBhdHRhY2htZW50OiB7IGNvbnRlbnRUeXBlLCBjb250ZW50VXJsLCB0aHVtYm5haWxVcmwgfSA9IHt9XG4gICAgfSkgPT5cbiAgICAgIHJvbGUgPT09ICd1c2VyJyAmJiAhL150ZXh0XFwvL3UudGVzdChjb250ZW50VHlwZSkgJiYgIXRodW1ibmFpbFVybCA/IChcbiAgICAgICAgPFVwbG9hZEF0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IC9eYXVkaW9cXC8vdS50ZXN0KGNvbnRlbnRUeXBlKSA/IChcbiAgICAgICAgPEF1ZGlvQXR0YWNobWVudCBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gICAgICApIDogL15pbWFnZVxcLy91LnRlc3QoY29udGVudFR5cGUpID8gKFxuICAgICAgICA8SW1hZ2VBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiAvXnZpZGVvXFwvL3UudGVzdChjb250ZW50VHlwZSkgPyAoXG4gICAgICAgIDxWaWRlb0F0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IGNvbnRlbnRVcmwgfHwgY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nID8gKFxuICAgICAgICA8RG93bmxvYWRBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiAvXnRleHRcXC8vdS50ZXN0KGNvbnRlbnRUeXBlKSA/IChcbiAgICAgICAgPFRleHRBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIG5leHQoeyBhY3Rpdml0eSwgYXR0YWNobWVudCB9KVxuICAgICAgKTtcblxuICAgIEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICAgICAgYWN0aXZpdHk6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSkuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZXR1cm4gQXR0YWNobWVudDtcbiAgfTtcbn1cbiJdfQ==
