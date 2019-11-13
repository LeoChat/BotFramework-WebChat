'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _bytes = require('bytes');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _DownloadIcon = _interopRequireDefault(require('./Assets/DownloadIcon'));

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

var DownloadAttachment = function DownloadAttachment(_ref) {
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
    downloadAttachmentStyleSet = _useStyleSet2[0].downloadAttachment;

  var downloadLabel = (0, _useLocalize.default)('Download file');
  var attachmentIndex = attachments.indexOf(attachment);
  var size = attachmentSizes[attachmentIndex];
  var formattedSize = typeof size === 'number' && (0, _bytes.format)(size);
  var downloadFileWithFileSizeLabel = (0, _useLocalize.default)(
    'DownloadFileWithFileSize',
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
        className: downloadAttachmentStyleSet
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
  }).isRequired
};
var _default = DownloadAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0Rvd25sb2FkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJEb3dubG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwiZG93bmxvYWRBdHRhY2htZW50U3R5bGVTZXQiLCJkb3dubG9hZEF0dGFjaG1lbnQiLCJkb3dubG9hZExhYmVsIiwiYXR0YWNobWVudEluZGV4IiwiaW5kZXhPZiIsInNpemUiLCJmb3JtYXR0ZWRTaXplIiwiZG93bmxvYWRGaWxlV2l0aEZpbGVTaXplTGFiZWwiLCJuYW1lIiwiY29udGVudFVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiYXJyYXkiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BR3JCO0FBQUEsMkJBRkpDLFFBRUk7QUFBQSw2Q0FGeUUsRUFFekU7QUFBQSw0Q0FGUUMsV0FFUjtBQUFBLE1BRlFBLFdBRVIsc0NBRnNCLEVBRXRCO0FBQUEsNENBRjBCQyxXQUUxQjtBQUFBLDZEQUZrRSxFQUVsRTtBQUFBLHFEQUZ5Q0MsZUFFekM7QUFBQSxNQUZ5Q0EsZUFFekMsdUNBRjJELEVBRTNEO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJOztBQUFBLHFCQUN5RCw0QkFEekQ7QUFBQTtBQUFBLE1BQ3lCQywwQkFEekIsb0JBQ0tDLGtCQURMOztBQUVKLE1BQU1DLGFBQWEsR0FBRywwQkFBWSxlQUFaLENBQXRCO0FBRUEsTUFBTUMsZUFBZSxHQUFHUCxXQUFXLENBQUNRLE9BQVosQ0FBb0JMLFVBQXBCLENBQXhCO0FBQ0EsTUFBTU0sSUFBSSxHQUFHUCxlQUFlLENBQUNLLGVBQUQsQ0FBNUI7QUFDQSxNQUFNRyxhQUFhLEdBQUcsT0FBT0QsSUFBUCxLQUFnQixRQUFoQixJQUE0QixtQkFBT0EsSUFBUCxDQUFsRDtBQUVBLE1BQU1FLDZCQUE2QixHQUFHLDBCQUNwQywwQkFEb0MsRUFFcENMLGFBRm9DLEVBR3BDSCxVQUFVLENBQUNTLElBSHlCLEVBSXBDRixhQUpvQyxDQUF0QztBQU9BLFNBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUM7QUFBeEIsSUFERixFQUVFO0FBQUssbUJBQWEsSUFBbEI7QUFBd0IsSUFBQSxTQUFTLEVBQUVQO0FBQW5DLEtBQ0U7QUFBRyxJQUFBLElBQUksRUFBRUQsVUFBVSxDQUFDVSxVQUFwQjtBQUFnQyxJQUFBLEdBQUcsRUFBQyxxQkFBcEM7QUFBMEQsSUFBQSxNQUFNLEVBQUM7QUFBakUsS0FFRTtBQUFLLG1CQUFhLElBQWxCO0FBQXdCLElBQUEsU0FBUyxFQUFDO0FBQWxDLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVCVixVQUFVLENBQUNTLElBQWxDLENBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBdUJGLGFBQXZCLENBRkYsQ0FGRixFQU1FLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxTQUFTLEVBQUMsTUFBeEI7QUFBK0IsSUFBQSxJQUFJLEVBQUU7QUFBckMsSUFORixDQURGLENBRkYsQ0FERjtBQWVELENBakNEOztBQW1DQVosa0JBQWtCLENBQUNnQixTQUFuQixHQUErQjtBQUM3QmYsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJiLElBQUFBLFVBQVUsRUFBRVksbUJBQVVFLEtBREU7QUFFeEJoQixJQUFBQSxXQUFXLEVBQUVjLG1CQUFVQyxLQUFWLENBQWdCO0FBQzNCZCxNQUFBQSxlQUFlLEVBQUVhLG1CQUFVRyxPQUFWLENBQWtCSCxtQkFBVUksTUFBNUI7QUFEVSxLQUFoQjtBQUZXLEdBQWhCLEVBS1BDLFVBTjBCO0FBTzdCakIsRUFBQUEsVUFBVSxFQUFFWSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkgsSUFBQUEsVUFBVSxFQUFFRSxtQkFBVU0sTUFBVixDQUFpQkQsVUFESDtBQUUxQlIsSUFBQUEsSUFBSSxFQUFFRyxtQkFBVU0sTUFBVixDQUFpQkQ7QUFGRyxHQUFoQixFQUdUQTtBQVYwQixDQUEvQjtlQWFldEIsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdieXRlcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IERvd25sb2FkSWNvbiBmcm9tICcuL0Fzc2V0cy9Eb3dubG9hZEljb24nO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgRG93bmxvYWRBdHRhY2htZW50ID0gKHtcbiAgYWN0aXZpdHk6IHsgYXR0YWNobWVudHMgPSBbXSwgY2hhbm5lbERhdGE6IHsgYXR0YWNobWVudFNpemVzID0gW10gfSA9IHt9IH0gPSB7fSxcbiAgYXR0YWNobWVudFxufSkgPT4ge1xuICBjb25zdCBbeyBkb3dubG9hZEF0dGFjaG1lbnQ6IGRvd25sb2FkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcbiAgY29uc3QgZG93bmxvYWRMYWJlbCA9IHVzZUxvY2FsaXplKCdEb3dubG9hZCBmaWxlJyk7XG5cbiAgY29uc3QgYXR0YWNobWVudEluZGV4ID0gYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KTtcbiAgY29uc3Qgc2l6ZSA9IGF0dGFjaG1lbnRTaXplc1thdHRhY2htZW50SW5kZXhdO1xuICBjb25zdCBmb3JtYXR0ZWRTaXplID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInICYmIGZvcm1hdChzaXplKTtcblxuICBjb25zdCBkb3dubG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCA9IHVzZUxvY2FsaXplKFxuICAgICdEb3dubG9hZEZpbGVXaXRoRmlsZVNpemUnLFxuICAgIGRvd25sb2FkTGFiZWwsXG4gICAgYXR0YWNobWVudC5uYW1lLFxuICAgIGZvcm1hdHRlZFNpemVcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2Rvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsfSAvPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtkb3dubG9hZEF0dGFjaG1lbnRTdHlsZVNldH0+XG4gICAgICAgIDxhIGhyZWY9e2F0dGFjaG1lbnQuY29udGVudFVybH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIHsvKiBBbHRob3VnaCBuZXN0ZWQsIENocm9tZSB2NzUgZG9lcyBub3QgcmVzcGVjdCB0aGUgYWJvdmUgYXJpYS1oaWRkZW4gYW5kIG1ha2VzIHRoZSBiZWxvdyBhcmlhLWhpZGRlbiBuZWNlc3NhcnkgKi99XG4gICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2F0dGFjaG1lbnQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l6ZVwiPntmb3JtYXR0ZWRTaXplfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEb3dubG9hZEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezEuNX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRvd25sb2FkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGF0dGFjaG1lbnRTaXplczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcilcbiAgICB9KVxuICB9KS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRBdHRhY2htZW50O1xuIl19
