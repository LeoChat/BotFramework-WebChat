'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _bytes = require('bytes');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _DownloadIcon = _interopRequireDefault(require('./Assets/DownloadIcon'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DownloadAttachment = function DownloadAttachment(_ref) {
  var _ref$activity = _ref.activity;
  _ref$activity = _ref$activity === void 0 ? {} : _ref$activity;
  var _ref$activity$attachm = _ref$activity.attachments,
    attachments = _ref$activity$attachm === void 0 ? [] : _ref$activity$attachm,
    _ref$activity$channel = _ref$activity.channelData;
  _ref$activity$channel = _ref$activity$channel === void 0 ? {} : _ref$activity$channel;
  var _ref$activity$channel2 = _ref$activity$channel.attachmentSizes,
    attachmentSizes = _ref$activity$channel2 === void 0 ? [] : _ref$activity$channel2,
    attachment = _ref.attachment,
    language = _ref.language,
    styleSet = _ref.styleSet;
  var attachmentIndex = attachments.indexOf(attachment);
  var downloadLabel = (0, _Localize.localize)('Download file', language);
  var size = attachmentSizes[attachmentIndex];
  var formattedSize = typeof size === 'number' && (0, _bytes.format)(size);
  var downloadFileWithFileSizeLabel = (0, _Localize.localize)(
    'DownloadFileWithFileSize',
    language,
    downloadLabel,
    attachment.name,
    formattedSize
  );
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: downloadFileWithFileSizeLabel
    }),
    _react.default.createElement(
      'div',
      {
        'aria-hidden': true,
        className: styleSet.downloadAttachment
      },
      _react.default.createElement(
        'a',
        {
          href: attachment.contentUrl,
          rel: 'noopener noreferrer',
          target: '_blank'
        },
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: 'details'
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
        ),
        _react.default.createElement(_DownloadIcon.default, {
          className: 'icon',
          size: 1.5
        })
      )
    )
  );
};

DownloadAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachment: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      attachmentSizes: _propTypes.default.arrayOf(_propTypes.default.number)
    })
  }).isRequired,
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired
  }).isRequired,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    downloadAttachment: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language,
    styleSet = _ref2.styleSet;
  return {
    language: language,
    styleSet: styleSet
  };
})(DownloadAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0Rvd25sb2FkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJEb3dubG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwibGFuZ3VhZ2UiLCJzdHlsZVNldCIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJkb3dubG9hZExhYmVsIiwic2l6ZSIsImZvcm1hdHRlZFNpemUiLCJkb3dubG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCIsIm5hbWUiLCJkb3dubG9hZEF0dGFjaG1lbnQiLCJjb250ZW50VXJsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BS3JCO0FBQUEsMkJBSkpDLFFBSUk7QUFBQSw2Q0FKeUUsRUFJekU7QUFBQSw0Q0FKUUMsV0FJUjtBQUFBLE1BSlFBLFdBSVIsc0NBSnNCLEVBSXRCO0FBQUEsNENBSjBCQyxXQUkxQjtBQUFBLDZEQUprRSxFQUlsRTtBQUFBLHFEQUp5Q0MsZUFJekM7QUFBQSxNQUp5Q0EsZUFJekMsdUNBSjJELEVBSTNEO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsZUFBZSxHQUFHTixXQUFXLENBQUNPLE9BQVosQ0FBb0JKLFVBQXBCLENBQXhCO0FBQ0EsTUFBTUssYUFBYSxHQUFHLHdCQUFTLGVBQVQsRUFBMEJKLFFBQTFCLENBQXRCO0FBQ0EsTUFBTUssSUFBSSxHQUFHUCxlQUFlLENBQUNJLGVBQUQsQ0FBNUI7QUFDQSxNQUFNSSxhQUFhLEdBQUcsT0FBT0QsSUFBUCxLQUFnQixRQUFoQixJQUE0QixtQkFBT0EsSUFBUCxDQUFsRDtBQUNBLE1BQU1FLDZCQUE2QixHQUFHLHdCQUNwQywwQkFEb0MsRUFFcENQLFFBRm9DLEVBR3BDSSxhQUhvQyxFQUlwQ0wsVUFBVSxDQUFDUyxJQUp5QixFQUtwQ0YsYUFMb0MsQ0FBdEM7QUFPQSxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDO0FBQXhCLElBREYsRUFFRTtBQUFLLG1CQUFhLElBQWxCO0FBQXdCLElBQUEsU0FBUyxFQUFFTixRQUFRLENBQUNRO0FBQTVDLEtBQ0U7QUFBRyxJQUFBLElBQUksRUFBRVYsVUFBVSxDQUFDVyxVQUFwQjtBQUFnQyxJQUFBLEdBQUcsRUFBQyxxQkFBcEM7QUFBMEQsSUFBQSxNQUFNLEVBQUM7QUFBakUsS0FFRTtBQUFLLG1CQUFhLElBQWxCO0FBQXdCLElBQUEsU0FBUyxFQUFDO0FBQWxDLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVCWCxVQUFVLENBQUNTLElBQWxDLENBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBdUJGLGFBQXZCLENBRkYsQ0FGRixFQU1FLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxTQUFTLEVBQUMsTUFBeEI7QUFBK0IsSUFBQSxJQUFJLEVBQUU7QUFBckMsSUFORixDQURGLENBRkYsQ0FERjtBQWVELENBaENEOztBQWtDQVosa0JBQWtCLENBQUNpQixTQUFuQixHQUErQjtBQUM3QmhCLEVBQUFBLFFBQVEsRUFBRWlCLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCZCxJQUFBQSxVQUFVLEVBQUVhLG1CQUFVRSxLQURFO0FBRXhCakIsSUFBQUEsV0FBVyxFQUFFZSxtQkFBVUMsS0FBVixDQUFnQjtBQUMzQmYsTUFBQUEsZUFBZSxFQUFFYyxtQkFBVUcsT0FBVixDQUFrQkgsbUJBQVVJLE1BQTVCO0FBRFUsS0FBaEI7QUFGVyxHQUFoQixFQUtQQyxVQU4wQjtBQU83QmxCLEVBQUFBLFVBQVUsRUFBRWEsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJILElBQUFBLFVBQVUsRUFBRUUsbUJBQVVNLE1BQVYsQ0FBaUJELFVBREg7QUFFMUJULElBQUFBLElBQUksRUFBRUksbUJBQVVNLE1BQVYsQ0FBaUJEO0FBRkcsR0FBaEIsRUFHVEEsVUFWMEI7QUFXN0JqQixFQUFBQSxRQUFRLEVBQUVZLG1CQUFVTSxNQUFWLENBQWlCRCxVQVhFO0FBWTdCaEIsRUFBQUEsUUFBUSxFQUFFVyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QkosSUFBQUEsa0JBQWtCLEVBQUVHLG1CQUFVTyxHQUFWLENBQWNGO0FBRFYsR0FBaEIsRUFFUEE7QUFkMEIsQ0FBL0I7O2VBaUJlLCtCQUFpQjtBQUFBLE1BQUdqQixRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhQyxRQUFiLFNBQWFBLFFBQWI7QUFBQSxTQUE2QjtBQUFFRCxJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsSUFBQUEsUUFBUSxFQUFSQTtBQUFaLEdBQTdCO0FBQUEsQ0FBakIsRUFBdUVQLGtCQUF2RSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnYnl0ZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnLi4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IERvd25sb2FkSWNvbiBmcm9tICcuL0Fzc2V0cy9Eb3dubG9hZEljb24nO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5cbmNvbnN0IERvd25sb2FkQXR0YWNobWVudCA9ICh7XG4gIGFjdGl2aXR5OiB7IGF0dGFjaG1lbnRzID0gW10sIGNoYW5uZWxEYXRhOiB7IGF0dGFjaG1lbnRTaXplcyA9IFtdIH0gPSB7fSB9ID0ge30sXG4gIGF0dGFjaG1lbnQsXG4gIGxhbmd1YWdlLFxuICBzdHlsZVNldFxufSkgPT4ge1xuICBjb25zdCBhdHRhY2htZW50SW5kZXggPSBhdHRhY2htZW50cy5pbmRleE9mKGF0dGFjaG1lbnQpO1xuICBjb25zdCBkb3dubG9hZExhYmVsID0gbG9jYWxpemUoJ0Rvd25sb2FkIGZpbGUnLCBsYW5ndWFnZSk7XG4gIGNvbnN0IHNpemUgPSBhdHRhY2htZW50U2l6ZXNbYXR0YWNobWVudEluZGV4XTtcbiAgY29uc3QgZm9ybWF0dGVkU2l6ZSA9IHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyAmJiBmb3JtYXQoc2l6ZSk7XG4gIGNvbnN0IGRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsID0gbG9jYWxpemUoXG4gICAgJ0Rvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZScsXG4gICAgbGFuZ3VhZ2UsXG4gICAgZG93bmxvYWRMYWJlbCxcbiAgICBhdHRhY2htZW50Lm5hbWUsXG4gICAgZm9ybWF0dGVkU2l6ZVxuICApO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2Rvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsfSAvPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZVNldC5kb3dubG9hZEF0dGFjaG1lbnR9PlxuICAgICAgICA8YSBocmVmPXthdHRhY2htZW50LmNvbnRlbnRVcmx9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICB7LyogQWx0aG91Z2ggbmVzdGVkLCBDaHJvbWUgdjc1IGRvZXMgbm90IHJlc3BlY3QgdGhlIGFib3ZlIGFyaWEtaGlkZGVuIGFuZCBtYWtlcyB0aGUgYmVsb3cgYXJpYS1oaWRkZW4gbmVjZXNzYXJ5ICovfVxuICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPnthdHRhY2htZW50Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVcIj57Zm9ybWF0dGVkU2l6ZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RG93bmxvYWRJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxLjV9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5Eb3dubG9hZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdHRhY2htZW50OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2hhbm5lbERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhdHRhY2htZW50U2l6ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRvd25sb2FkQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgbGFuZ3VhZ2UsIHN0eWxlU2V0IH0pID0+ICh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSkoRG93bmxvYWRBdHRhY2htZW50KTtcbiJdfQ==
