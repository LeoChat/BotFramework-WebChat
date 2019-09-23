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

function hasThumbnail(_ref, attachment) {
  var _ref$attachments = _ref.attachments,
    attachments = _ref$attachments === void 0 ? [] : _ref$attachments,
    _ref$channelData = _ref.channelData;
  _ref$channelData = _ref$channelData === void 0 ? {} : _ref$channelData;
  var _ref$channelData$atta = _ref$channelData.attachmentThumbnails,
    attachmentThumbnails = _ref$channelData$atta === void 0 ? [] : _ref$channelData$atta;
  var attachmentIndex = attachments.indexOf(attachment);
  return !!attachmentThumbnails[attachmentIndex];
} // TODO: [P4] Rename this file or the whole middleware, it looks either too simple or too comprehensive now

function createCoreMiddleware() {
  return function() {
    return function(next) {
      var Attachment = function Attachment(_ref2) {
        var _ref2$activity = _ref2.activity,
          activity = _ref2$activity === void 0 ? {} : _ref2$activity,
          _ref2$activity2 = _ref2.activity;
        _ref2$activity2 = _ref2$activity2 === void 0 ? {} : _ref2$activity2;
        var role = _ref2$activity2.from.role,
          attachment = _ref2.attachment,
          _ref2$attachment = _ref2.attachment;
        _ref2$attachment = _ref2$attachment === void 0 ? {} : _ref2$attachment;
        var contentType = _ref2$attachment.contentType,
          contentUrl = _ref2$attachment.contentUrl;
        return role === 'user' && !/^text\//.test(contentType) && !hasThumbnail(activity, attachment)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NaWRkbGV3YXJlL0F0dGFjaG1lbnQvY3JlYXRlQ29yZU1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiaGFzVGh1bWJuYWlsIiwiYXR0YWNobWVudCIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50VGh1bWJuYWlscyIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJjcmVhdGVDb3JlTWlkZGxld2FyZSIsIm5leHQiLCJBdHRhY2htZW50IiwiYWN0aXZpdHkiLCJyb2xlIiwiZnJvbSIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCIsInRlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLFlBQVQsT0FBNkZDLFVBQTdGLEVBQXlHO0FBQUEsOEJBQWpGQyxXQUFpRjtBQUFBLE1BQWpGQSxXQUFpRixpQ0FBbkUsRUFBbUU7QUFBQSw4QkFBL0RDLFdBQStEO0FBQUEsbURBQWxCLEVBQWtCO0FBQUEsK0NBQWhEQyxvQkFBZ0Q7QUFBQSxNQUFoREEsb0JBQWdELHNDQUF6QixFQUF5QjtBQUN2RyxNQUFNQyxlQUFlLEdBQUdILFdBQVcsQ0FBQ0ksT0FBWixDQUFvQkwsVUFBcEIsQ0FBeEI7QUFFQSxTQUFPLENBQUMsQ0FBQ0csb0JBQW9CLENBQUNDLGVBQUQsQ0FBN0I7QUFDRCxDLENBRUQ7OztBQUNlLFNBQVNFLG9CQUFULEdBQWdDO0FBQzdDLFNBQU87QUFBQSxXQUFNLFVBQUFDLElBQUksRUFBSTtBQUNuQixVQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLG1DQUNqQkMsUUFEaUI7QUFBQSxZQUNqQkEsUUFEaUIsK0JBQ04sRUFETTtBQUFBLG9DQUVqQkEsUUFGaUI7QUFBQSx1REFFYyxFQUZkO0FBQUEsWUFFR0MsSUFGSCxtQkFFTEMsSUFGSyxDQUVHRCxJQUZIO0FBQUEsWUFHakJWLFVBSGlCLFNBR2pCQSxVQUhpQjtBQUFBLHFDQUlqQkEsVUFKaUI7QUFBQSx5REFJeUIsRUFKekI7QUFBQSxZQUlIWSxXQUpHLG9CQUlIQSxXQUpHO0FBQUEsWUFJVUMsVUFKVixvQkFJVUEsVUFKVjtBQUFBLGVBTWpCSCxJQUFJLEtBQUssTUFBVCxJQUFtQixDQUFDLFVBQVdJLElBQVgsQ0FBZ0JGLFdBQWhCLENBQXBCLElBQW9ELENBQUNiLFlBQVksQ0FBQ1UsUUFBRCxFQUFXVCxVQUFYLENBQWpFLEdBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsVUFBQSxRQUFRLEVBQUVTLFFBQTVCO0FBQXNDLFVBQUEsVUFBVSxFQUFFVDtBQUFsRCxVQURGLEdBRUksV0FBWWMsSUFBWixDQUFpQkYsV0FBakIsSUFDRiw2QkFBQyx3QkFBRDtBQUFpQixVQUFBLFFBQVEsRUFBRUgsUUFBM0I7QUFBcUMsVUFBQSxVQUFVLEVBQUVUO0FBQWpELFVBREUsR0FFQSxXQUFZYyxJQUFaLENBQWlCRixXQUFqQixJQUNGLDZCQUFDLHdCQUFEO0FBQWlCLFVBQUEsUUFBUSxFQUFFSCxRQUEzQjtBQUFxQyxVQUFBLFVBQVUsRUFBRVQ7QUFBakQsVUFERSxHQUVBLFdBQVljLElBQVosQ0FBaUJGLFdBQWpCLElBQ0YsNkJBQUMsd0JBQUQ7QUFBaUIsVUFBQSxRQUFRLEVBQUVILFFBQTNCO0FBQXFDLFVBQUEsVUFBVSxFQUFFVDtBQUFqRCxVQURFLEdBRUFhLFVBQVUsSUFBSUQsV0FBVyxLQUFLLDBCQUE5QixHQUNGLDZCQUFDLDJCQUFEO0FBQW9CLFVBQUEsUUFBUSxFQUFFSCxRQUE5QjtBQUF3QyxVQUFBLFVBQVUsRUFBRVQ7QUFBcEQsVUFERSxHQUVBLFVBQVdjLElBQVgsQ0FBZ0JGLFdBQWhCLElBQ0YsNkJBQUMsdUJBQUQ7QUFBZ0IsVUFBQSxRQUFRLEVBQUVILFFBQTFCO0FBQW9DLFVBQUEsVUFBVSxFQUFFVDtBQUFoRCxVQURFLEdBR0ZPLElBQUksQ0FBQztBQUFFRSxVQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWVQsVUFBQUEsVUFBVSxFQUFWQTtBQUFaLFNBQUQsQ0FuQlc7QUFBQSxPQUFuQjs7QUFzQkFRLE1BQUFBLFVBQVUsQ0FBQ08sU0FBWCxHQUF1QjtBQUNyQk4sUUFBQUEsUUFBUSxFQUFFTyxtQkFBVUMsR0FBVixDQUFjQyxVQURIO0FBRXJCbEIsUUFBQUEsVUFBVSxFQUFFZ0IsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDMUJQLFVBQUFBLFdBQVcsRUFBRUksbUJBQVVJLE1BQVYsQ0FBaUJGLFVBREo7QUFFMUJMLFVBQUFBLFVBQVUsRUFBRUcsbUJBQVVJLE1BQVYsQ0FBaUJGO0FBRkgsU0FBaEIsRUFHVEE7QUFMa0IsT0FBdkI7QUFRQSxhQUFPVixVQUFQO0FBQ0QsS0FoQ007QUFBQSxHQUFQO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBdWRpb0F0dGFjaG1lbnQgZnJvbSAnLi4vLi4vQXR0YWNobWVudC9BdWRpb0F0dGFjaG1lbnQnO1xuaW1wb3J0IERvd25sb2FkQXR0YWNobWVudCBmcm9tICcuLi8uLi9BdHRhY2htZW50L0Rvd25sb2FkQXR0YWNobWVudCc7XG5pbXBvcnQgSW1hZ2VBdHRhY2htZW50IGZyb20gJy4uLy4uL0F0dGFjaG1lbnQvSW1hZ2VBdHRhY2htZW50JztcbmltcG9ydCBVcGxvYWRBdHRhY2htZW50IGZyb20gJy4uLy4uL0F0dGFjaG1lbnQvVXBsb2FkQXR0YWNobWVudCc7XG5pbXBvcnQgVGV4dEF0dGFjaG1lbnQgZnJvbSAnLi4vLi4vQXR0YWNobWVudC9UZXh0QXR0YWNobWVudCc7XG5pbXBvcnQgVmlkZW9BdHRhY2htZW50IGZyb20gJy4uLy4uL0F0dGFjaG1lbnQvVmlkZW9BdHRhY2htZW50JztcblxuZnVuY3Rpb24gaGFzVGh1bWJuYWlsKHsgYXR0YWNobWVudHMgPSBbXSwgY2hhbm5lbERhdGE6IHsgYXR0YWNobWVudFRodW1ibmFpbHMgPSBbXSB9ID0ge30gfSwgYXR0YWNobWVudCkge1xuICBjb25zdCBhdHRhY2htZW50SW5kZXggPSBhdHRhY2htZW50cy5pbmRleE9mKGF0dGFjaG1lbnQpO1xuXG4gIHJldHVybiAhIWF0dGFjaG1lbnRUaHVtYm5haWxzW2F0dGFjaG1lbnRJbmRleF07XG59XG5cbi8vIFRPRE86IFtQNF0gUmVuYW1lIHRoaXMgZmlsZSBvciB0aGUgd2hvbGUgbWlkZGxld2FyZSwgaXQgbG9va3MgZWl0aGVyIHRvbyBzaW1wbGUgb3IgdG9vIGNvbXByZWhlbnNpdmUgbm93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb3JlTWlkZGxld2FyZSgpIHtcbiAgcmV0dXJuICgpID0+IG5leHQgPT4ge1xuICAgIGNvbnN0IEF0dGFjaG1lbnQgPSAoe1xuICAgICAgYWN0aXZpdHkgPSB7fSxcbiAgICAgIGFjdGl2aXR5OiB7IGZyb206IHsgcm9sZSB9IH0gPSB7fSxcbiAgICAgIGF0dGFjaG1lbnQsXG4gICAgICBhdHRhY2htZW50OiB7IGNvbnRlbnRUeXBlLCBjb250ZW50VXJsIH0gPSB7fVxuICAgIH0pID0+XG4gICAgICByb2xlID09PSAndXNlcicgJiYgIS9edGV4dFxcLy91LnRlc3QoY29udGVudFR5cGUpICYmICFoYXNUaHVtYm5haWwoYWN0aXZpdHksIGF0dGFjaG1lbnQpID8gKFxuICAgICAgICA8VXBsb2FkQXR0YWNobWVudCBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gICAgICApIDogL15hdWRpb1xcLy91LnRlc3QoY29udGVudFR5cGUpID8gKFxuICAgICAgICA8QXVkaW9BdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cbiAgICAgICkgOiAvXmltYWdlXFwvL3UudGVzdChjb250ZW50VHlwZSkgPyAoXG4gICAgICAgIDxJbWFnZUF0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IC9edmlkZW9cXC8vdS50ZXN0KGNvbnRlbnRUeXBlKSA/IChcbiAgICAgICAgPFZpZGVvQXR0YWNobWVudCBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XG4gICAgICApIDogY29udGVudFVybCB8fCBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgPyAoXG4gICAgICAgIDxEb3dubG9hZEF0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IC9edGV4dFxcLy91LnRlc3QoY29udGVudFR5cGUpID8gKFxuICAgICAgICA8VGV4dEF0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgbmV4dCh7IGFjdGl2aXR5LCBhdHRhY2htZW50IH0pXG4gICAgICApO1xuXG4gICAgQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gICAgICBhY3Rpdml0eTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY29udGVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY29udGVudFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KS5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJldHVybiBBdHRhY2htZW50O1xuICB9O1xufVxuIl19
