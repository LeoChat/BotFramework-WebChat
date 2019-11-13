'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _bytes = require('bytes');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column'
});

var UploadAttachment = function UploadAttachment(_ref) {
  var _ref$activity = _ref.activity;
  _ref$activity = _ref$activity === void 0 ? {} : _ref$activity;
  var _ref$activity$attachm = _ref$activity.attachments,
    attachments = _ref$activity$attachm === void 0 ? [] : _ref$activity$attachm,
    _ref$activity$channel = _ref$activity.channelData;
  _ref$activity$channel = _ref$activity$channel === void 0 ? {} : _ref$activity$channel;
  var _ref$activity$channel2 = _ref$activity$channel.attachmentSizes,
    attachmentSizes = _ref$activity$channel2 === void 0 ? [] : _ref$activity$channel2,
    attachment = _ref.attachment;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    uploadAttachmentStyleSet = _useStyleSet2[0].uploadAttachment;

  var attachmentIndex = attachments.indexOf(attachment);
  var size = attachmentSizes[attachmentIndex];
  var formattedSize = typeof size === 'number' && (0, _bytes.format)(size);
  var uploadFileWithFileSizeLabel = (0, _useLocalize.default)('UploadFileWithFileSize', attachment.name, formattedSize);
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: uploadFileWithFileSizeLabel
    }),
    _react.default.createElement(
      'div',
      {
        'aria-hidden': true,
        className: (0, _classnames.default)(ROOT_CSS + '', uploadAttachmentStyleSet + '')
      },
      _react.default.createElement(
        'div',
        {
          className: 'name'
        },
        attachment.name
      ),
      _react.default.createElement(
        'div',
        {
          className: 'size'
        },
        formattedSize
      )
    )
  );
};

UploadAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachment: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      attachmentSizes: _propTypes.default.arrayOf(_propTypes.default.number)
    })
  }).isRequired,
  attachment: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = UploadAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1VwbG9hZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIlVwbG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwidXBsb2FkQXR0YWNobWVudFN0eWxlU2V0IiwidXBsb2FkQXR0YWNobWVudCIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJzaXplIiwiZm9ybWF0dGVkU2l6ZSIsInVwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5IiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxPQUFPLEVBQUUsTUFEVTtBQUVuQkMsRUFBQUEsYUFBYSxFQUFFO0FBRkksQ0FBSixDQUFqQjs7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BR25CO0FBQUEsMkJBRkpDLFFBRUk7QUFBQSw2Q0FGeUUsRUFFekU7QUFBQSw0Q0FGUUMsV0FFUjtBQUFBLE1BRlFBLFdBRVIsc0NBRnNCLEVBRXRCO0FBQUEsNENBRjBCQyxXQUUxQjtBQUFBLDZEQUZrRSxFQUVsRTtBQUFBLHFEQUZ5Q0MsZUFFekM7QUFBQSxNQUZ5Q0EsZUFFekMsdUNBRjJELEVBRTNEO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJOztBQUFBLHFCQUNxRCw0QkFEckQ7QUFBQTtBQUFBLE1BQ3VCQyx3QkFEdkIsb0JBQ0tDLGdCQURMOztBQUdKLE1BQU1DLGVBQWUsR0FBR04sV0FBVyxDQUFDTyxPQUFaLENBQW9CSixVQUFwQixDQUF4QjtBQUNBLE1BQU1LLElBQUksR0FBR04sZUFBZSxDQUFDSSxlQUFELENBQTVCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHLE9BQU9ELElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsbUJBQU9BLElBQVAsQ0FBbEQ7QUFDQSxNQUFNRSwyQkFBMkIsR0FBRywwQkFBWSx3QkFBWixFQUFzQ1AsVUFBVSxDQUFDUSxJQUFqRCxFQUF1REYsYUFBdkQsQ0FBcEM7QUFFQSxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDO0FBQXhCLElBREYsRUFFRTtBQUFLLG1CQUFhLElBQWxCO0FBQXdCLElBQUEsU0FBUyxFQUFFLHlCQUFXZixRQUFRLEdBQUcsRUFBdEIsRUFBMEJTLHdCQUF3QixHQUFHLEVBQXJEO0FBQW5DLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVCRCxVQUFVLENBQUNRLElBQWxDLENBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBdUJGLGFBQXZCLENBRkYsQ0FGRixDQURGO0FBU0QsQ0FwQkQ7O0FBc0JBWCxnQkFBZ0IsQ0FBQ2MsU0FBakIsR0FBNkI7QUFDM0JiLEVBQUFBLFFBQVEsRUFBRWMsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJYLElBQUFBLFVBQVUsRUFBRVUsbUJBQVVFLEtBREU7QUFFeEJkLElBQUFBLFdBQVcsRUFBRVksbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDM0JaLE1BQUFBLGVBQWUsRUFBRVcsbUJBQVVHLE9BQVYsQ0FBa0JILG1CQUFVSSxNQUE1QjtBQURVLEtBQWhCO0FBRlcsR0FBaEIsRUFLUEMsVUFOd0I7QUFPM0JmLEVBQUFBLFVBQVUsRUFBRVUsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJILElBQUFBLElBQUksRUFBRUUsbUJBQVVNLE1BQVYsQ0FBaUJEO0FBREcsR0FBaEIsRUFFVEE7QUFUd0IsQ0FBN0I7ZUFZZXBCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2J5dGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufSk7XG5cbmNvbnN0IFVwbG9hZEF0dGFjaG1lbnQgPSAoe1xuICBhY3Rpdml0eTogeyBhdHRhY2htZW50cyA9IFtdLCBjaGFubmVsRGF0YTogeyBhdHRhY2htZW50U2l6ZXMgPSBbXSB9ID0ge30gfSA9IHt9LFxuICBhdHRhY2htZW50XG59KSA9PiB7XG4gIGNvbnN0IFt7IHVwbG9hZEF0dGFjaG1lbnQ6IHVwbG9hZEF0dGFjaG1lbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgY29uc3QgYXR0YWNobWVudEluZGV4ID0gYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KTtcbiAgY29uc3Qgc2l6ZSA9IGF0dGFjaG1lbnRTaXplc1thdHRhY2htZW50SW5kZXhdO1xuICBjb25zdCBmb3JtYXR0ZWRTaXplID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInICYmIGZvcm1hdChzaXplKTtcbiAgY29uc3QgdXBsb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsID0gdXNlTG9jYWxpemUoJ1VwbG9hZEZpbGVXaXRoRmlsZVNpemUnLCBhdHRhY2htZW50Lm5hbWUsIGZvcm1hdHRlZFNpemUpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17dXBsb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsfSAvPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycsIHVwbG9hZEF0dGFjaG1lbnRTdHlsZVNldCArICcnKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPnthdHRhY2htZW50Lm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l6ZVwiPntmb3JtYXR0ZWRTaXplfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cblVwbG9hZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdHRhY2htZW50OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2hhbm5lbERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhdHRhY2htZW50U2l6ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkQXR0YWNobWVudDtcbiJdfQ==
