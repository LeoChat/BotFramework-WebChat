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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
    attachment = _ref.attachment,
    language = _ref.language,
    styleSet = _ref.styleSet;
  var attachmentIndex = attachments.indexOf(attachment);
  var size = attachmentSizes[attachmentIndex];
  var formattedSize = typeof size === 'number' && (0, _bytes.format)(size);
  var uploadFileWithFileSizeLabel = (0, _Localize.localize)(
    'UploadFileWithFileSize',
    language,
    attachment.name,
    formattedSize
  );
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
        className: (0, _classnames.default)(ROOT_CSS + '', styleSet.uploadAttachment + '')
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
})(UploadAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1VwbG9hZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIlVwbG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwibGFuZ3VhZ2UiLCJzdHlsZVNldCIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJzaXplIiwiZm9ybWF0dGVkU2l6ZSIsInVwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCIsIm5hbWUiLCJ1cGxvYWRBdHRhY2htZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZG93bmxvYWRBdHRhY2htZW50IiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBRW5CQyxFQUFBQSxhQUFhLEVBQUU7QUFGSSxDQUFKLENBQWpCOztBQUtBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FLbkI7QUFBQSwyQkFKSkMsUUFJSTtBQUFBLDZDQUp5RSxFQUl6RTtBQUFBLDRDQUpRQyxXQUlSO0FBQUEsTUFKUUEsV0FJUixzQ0FKc0IsRUFJdEI7QUFBQSw0Q0FKMEJDLFdBSTFCO0FBQUEsNkRBSmtFLEVBSWxFO0FBQUEscURBSnlDQyxlQUl6QztBQUFBLE1BSnlDQSxlQUl6Qyx1Q0FKMkQsRUFJM0Q7QUFBQSxNQUhKQyxVQUdJLFFBSEpBLFVBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7QUFDSixNQUFNQyxlQUFlLEdBQUdOLFdBQVcsQ0FBQ08sT0FBWixDQUFvQkosVUFBcEIsQ0FBeEI7QUFDQSxNQUFNSyxJQUFJLEdBQUdOLGVBQWUsQ0FBQ0ksZUFBRCxDQUE1QjtBQUNBLE1BQU1HLGFBQWEsR0FBRyxPQUFPRCxJQUFQLEtBQWdCLFFBQWhCLElBQTRCLG1CQUFPQSxJQUFQLENBQWxEO0FBQ0EsTUFBTUUsMkJBQTJCLEdBQUcsd0JBQVMsd0JBQVQsRUFBbUNOLFFBQW5DLEVBQTZDRCxVQUFVLENBQUNRLElBQXhELEVBQThERixhQUE5RCxDQUFwQztBQUNBLFNBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUM7QUFBeEIsSUFERixFQUVFO0FBQUssbUJBQWEsSUFBbEI7QUFBd0IsSUFBQSxTQUFTLEVBQUUseUJBQVdmLFFBQVEsR0FBRyxFQUF0QixFQUEwQlUsUUFBUSxDQUFDTyxnQkFBVCxHQUE0QixFQUF0RDtBQUFuQyxLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF1QlQsVUFBVSxDQUFDUSxJQUFsQyxDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVCRixhQUF2QixDQUZGLENBRkYsQ0FERjtBQVNELENBbkJEOztBQXFCQVgsZ0JBQWdCLENBQUNlLFNBQWpCLEdBQTZCO0FBQzNCZCxFQUFBQSxRQUFRLEVBQUVlLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCWixJQUFBQSxVQUFVLEVBQUVXLG1CQUFVRSxLQURFO0FBRXhCZixJQUFBQSxXQUFXLEVBQUVhLG1CQUFVQyxLQUFWLENBQWdCO0FBQzNCYixNQUFBQSxlQUFlLEVBQUVZLG1CQUFVRyxPQUFWLENBQWtCSCxtQkFBVUksTUFBNUI7QUFEVSxLQUFoQjtBQUZXLEdBQWhCLEVBS1BDLFVBTndCO0FBTzNCaEIsRUFBQUEsVUFBVSxFQUFFVyxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkosSUFBQUEsSUFBSSxFQUFFRyxtQkFBVU0sTUFBVixDQUFpQkQ7QUFERyxHQUFoQixFQUVUQSxVQVR3QjtBQVUzQmYsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVU0sTUFBVixDQUFpQkQsVUFWQTtBQVczQmQsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4Qk0sSUFBQUEsa0JBQWtCLEVBQUVQLG1CQUFVUSxHQUFWLENBQWNIO0FBRFYsR0FBaEIsRUFFUEE7QUFid0IsQ0FBN0I7O2VBZ0JlLCtCQUFpQjtBQUFBLE1BQUdmLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLFFBQWIsU0FBYUEsUUFBYjtBQUFBLFNBQTZCO0FBQUVELElBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxJQUFBQSxRQUFRLEVBQVJBO0FBQVosR0FBN0I7QUFBQSxDQUFqQixFQUF1RVAsZ0JBQXZFLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnYnl0ZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KTtcblxuY29uc3QgVXBsb2FkQXR0YWNobWVudCA9ICh7XG4gIGFjdGl2aXR5OiB7IGF0dGFjaG1lbnRzID0gW10sIGNoYW5uZWxEYXRhOiB7IGF0dGFjaG1lbnRTaXplcyA9IFtdIH0gPSB7fSB9ID0ge30sXG4gIGF0dGFjaG1lbnQsXG4gIGxhbmd1YWdlLFxuICBzdHlsZVNldFxufSkgPT4ge1xuICBjb25zdCBhdHRhY2htZW50SW5kZXggPSBhdHRhY2htZW50cy5pbmRleE9mKGF0dGFjaG1lbnQpO1xuICBjb25zdCBzaXplID0gYXR0YWNobWVudFNpemVzW2F0dGFjaG1lbnRJbmRleF07XG4gIGNvbnN0IGZvcm1hdHRlZFNpemUgPSB0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgJiYgZm9ybWF0KHNpemUpO1xuICBjb25zdCB1cGxvYWRGaWxlV2l0aEZpbGVTaXplTGFiZWwgPSBsb2NhbGl6ZSgnVXBsb2FkRmlsZVdpdGhGaWxlU2l6ZScsIGxhbmd1YWdlLCBhdHRhY2htZW50Lm5hbWUsIGZvcm1hdHRlZFNpemUpO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e3VwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbH0gLz5cbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBzdHlsZVNldC51cGxvYWRBdHRhY2htZW50ICsgJycpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2F0dGFjaG1lbnQubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXplXCI+e2Zvcm1hdHRlZFNpemV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuVXBsb2FkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGF0dGFjaG1lbnRTaXplczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcilcbiAgICB9KVxuICB9KS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkb3dubG9hZEF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSA9PiAoeyBsYW5ndWFnZSwgc3R5bGVTZXQgfSkpKFVwbG9hZEF0dGFjaG1lbnQpO1xuIl19
