'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectStackedLayout = exports.default = void 0;

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _remark = _interopRequireDefault(require('remark'));

var _stripMarkdown = _interopRequireDefault(require('strip-markdown'));

var _Avatar = _interopRequireDefault(require('./Avatar'));

var _Bubble = _interopRequireDefault(require('./Bubble'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _SendStatus = _interopRequireDefault(require('./SendStatus'));

var _textFormatToContentType = _interopRequireDefault(require('../Utils/textFormatToContentType'));

var _Timestamp = _interopRequireDefault(require('./Timestamp'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useStyleOptions3 = _interopRequireDefault(require('../hooks/useStyleOptions'));

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

var _Constants$ActivityCl = _botframeworkWebchatCore.Constants.ActivityClientState,
  SENDING = _Constants$ActivityCl.SENDING,
  SEND_FAILED = _Constants$ActivityCl.SEND_FAILED;
var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  '& > .avatar': {
    flexShrink: 0
  },
  '& > .content': {
    flexGrow: 1,
    overflow: 'hidden',
    '& > .webchat__row': {
      display: 'flex',
      '& > .bubble, & > .timestamp': {
        flexGrow: 1,
        overflow: 'hidden'
      },
      '& > .filler': {
        flexGrow: 10000,
        flexShrink: 1
      }
    }
  },
  '& > .filler': {
    flexShrink: 0
  },
  '&.from-user': {
    flexDirection: 'row-reverse',
    '& > .content > .webchat__row': {
      flexDirection: 'row-reverse'
    }
  }
});

var connectStackedLayout = function connectStackedLayout() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref, _ref2) {
        var language = _ref.language,
          _ref$styleSet$options = _ref.styleSet.options,
          botAvatarInitials = _ref$styleSet$options.botAvatarInitials,
          userAvatarInitials = _ref$styleSet$options.userAvatarInitials;
        var _ref2$activity = _ref2.activity;
        _ref2$activity = _ref2$activity === void 0 ? {} : _ref2$activity;
        var _ref2$activity$from = _ref2$activity.from;
        _ref2$activity$from = _ref2$activity$from === void 0 ? {} : _ref2$activity$from;
        var role = _ref2$activity$from.role;
        return {
          avatarInitials: role === 'user' ? userAvatarInitials : botAvatarInitials,
          language: language,
          // TODO: [P4] We want to deprecate botAvatarInitials/userAvatarInitials because they are not as helpful as avatarInitials
          botAvatarInitials: botAvatarInitials,
          userAvatarInitials: userAvatarInitials
        };
      }
    ].concat(selectors)
  );
};

exports.connectStackedLayout = connectStackedLayout;

var StackedLayout = function StackedLayout(_ref3) {
  var activity = _ref3.activity,
    avatarInitials = _ref3.avatarInitials,
    children = _ref3.children,
    timestampClassName = _ref3.timestampClassName;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    _useStyleOptions2$ = _useStyleOptions2[0],
    botAvatarInitials = _useStyleOptions2$.botAvatarInitials,
    bubbleNubSize = _useStyleOptions2$.bubbleNubSize,
    bubbleFromUserNubSize = _useStyleOptions2$.bubbleFromUserNubSize,
    userAvatarInitials = _useStyleOptions2$.userAvatarInitials;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    stackedLayoutStyleSet = _useStyleSet2[0].stackedLayout;

  var _activity$attachments = activity.attachments,
    attachments = _activity$attachments === void 0 ? [] : _activity$attachments,
    _activity$channelData = activity.channelData;
  _activity$channelData = _activity$channelData === void 0 ? {} : _activity$channelData;
  var _activity$channelData2 = _activity$channelData.messageBack;
  _activity$channelData2 = _activity$channelData2 === void 0 ? {} : _activity$channelData2;
  var messageBackDisplayText = _activity$channelData2.displayText,
    state = _activity$channelData.state,
    _activity$from = activity.from;
  _activity$from = _activity$from === void 0 ? {} : _activity$from;
  var role = _activity$from.role,
    text = activity.text,
    textFormat = activity.textFormat;
  var activityDisplayText = messageBackDisplayText || text;
  var fromUser = role === 'user';
  var showSendStatus = state === SENDING || state === SEND_FAILED;
  var plainText = (0, _remark.default)()
    .use(_stripMarkdown.default)
    .processSync(text);
  var indented = fromUser ? bubbleFromUserNubSize : bubbleNubSize;
  var botRoleLabel = (0, _useLocalize.default)('BotSent');
  var userRoleLabel = (0, _useLocalize.default)('UserSent');
  var roleLabel = fromUser ? botRoleLabel : userRoleLabel;
  var botAriaLabel = (0, _useLocalize.default)('Bot said something', avatarInitials, plainText);
  var userAriaLabel = (0, _useLocalize.default)('User said something', avatarInitials, plainText);
  var ariaLabel = fromUser ? userAriaLabel : botAriaLabel;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', stackedLayoutStyleSet + '', {
        'from-user': fromUser,
        webchat__stacked_extra_left_indent: fromUser && !botAvatarInitials && bubbleNubSize,
        webchat__stacked_extra_right_indent: !fromUser && !userAvatarInitials && bubbleFromUserNubSize,
        webchat__stacked_indented_content: avatarInitials && !indented
      })
    },
    !avatarInitials &&
      !!(fromUser ? bubbleFromUserNubSize : bubbleNubSize) &&
      _react.default.createElement('div', {
        className: 'avatar'
      }),
    _react.default.createElement(_Avatar.default, {
      'aria-hidden': true,
      className: 'avatar',
      fromUser: fromUser
    }),
    _react.default.createElement(
      'div',
      {
        className: 'content'
      },
      !!activityDisplayText &&
        _react.default.createElement(
          'div',
          {
            className: 'webchat__row message'
          },
          _react.default.createElement(_ScreenReaderText.default, {
            text: ariaLabel
          }),
          _react.default.createElement(
            _Bubble.default,
            {
              'aria-hidden': true,
              className: 'bubble',
              fromUser: fromUser,
              nub: true
            },
            children({
              activity: activity,
              attachment: {
                content: activityDisplayText,
                contentType: (0, _textFormatToContentType.default)(textFormat)
              }
            })
          ),
          _react.default.createElement('div', {
            className: 'filler'
          })
        ),
      attachments.map(function(attachment, index) {
        return _react.default.createElement(
          'div',
          {
            'aria-label': ' ',
            className: (0, _classnames.default)('webchat__row attachment', {
              webchat__stacked_item_indented: indented
            }),
            key: index
          },
          _react.default.createElement(_ScreenReaderText.default, {
            text: roleLabel
          }),
          _react.default.createElement(
            _Bubble.default,
            {
              className: 'attachment bubble',
              fromUser: fromUser,
              key: index,
              nub: false
            },
            children({
              attachment: attachment
            })
          )
        );
      }),
      _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)('webchat__row', {
            webchat__stacked_item_indented: indented
          })
        },
        showSendStatus
          ? _react.default.createElement(_SendStatus.default, {
              activity: activity,
              className: 'timestamp'
            })
          : _react.default.createElement(_Timestamp.default, {
              activity: activity,
              className: (0, _classnames.default)('timestamp', timestampClassName)
            }),
        _react.default.createElement('div', {
          className: 'filler'
        })
      )
    ),
    _react.default.createElement('div', {
      className: 'filler'
    })
  );
};

StackedLayout.defaultProps = {
  children: undefined,
  timestampClassName: ''
};
StackedLayout.propTypes = {
  activity: _propTypes.default.shape({
    attachments: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      messageBack: _propTypes.default.shape({
        displayText: _propTypes.default.string
      })
    }),
    from: _propTypes.default.shape({
      role: _propTypes.default.string.isRequired
    }).isRequired,
    text: _propTypes.default.string,
    textFormat: _propTypes.default.string,
    timestamp: _propTypes.default.string,
    type: _propTypes.default.string.isRequired
  }).isRequired,
  avatarInitials: _propTypes.default.string.isRequired,
  children: _propTypes.default.any,
  timestampClassName: _propTypes.default.string
};

var _default = connectStackedLayout(function(_ref4) {
  var avatarInitials = _ref4.avatarInitials;
  return {
    avatarInitials: avatarInitials
  };
})(StackedLayout);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TdGFja2VkTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkFjdGl2aXR5Q2xpZW50U3RhdGUiLCJTRU5ESU5HIiwiU0VORF9GQUlMRUQiLCJST09UX0NTUyIsImRpc3BsYXkiLCJmbGV4U2hyaW5rIiwiZmxleEdyb3ciLCJvdmVyZmxvdyIsImZsZXhEaXJlY3Rpb24iLCJjb25uZWN0U3RhY2tlZExheW91dCIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJsYW5ndWFnZSIsInN0eWxlU2V0Iiwib3B0aW9ucyIsImJvdEF2YXRhckluaXRpYWxzIiwidXNlckF2YXRhckluaXRpYWxzIiwiYWN0aXZpdHkiLCJmcm9tIiwicm9sZSIsImF2YXRhckluaXRpYWxzIiwiU3RhY2tlZExheW91dCIsImNoaWxkcmVuIiwidGltZXN0YW1wQ2xhc3NOYW1lIiwiYnViYmxlTnViU2l6ZSIsImJ1YmJsZUZyb21Vc2VyTnViU2l6ZSIsInN0YWNrZWRMYXlvdXRTdHlsZVNldCIsInN0YWNrZWRMYXlvdXQiLCJhdHRhY2htZW50cyIsImNoYW5uZWxEYXRhIiwibWVzc2FnZUJhY2siLCJtZXNzYWdlQmFja0Rpc3BsYXlUZXh0IiwiZGlzcGxheVRleHQiLCJzdGF0ZSIsInRleHQiLCJ0ZXh0Rm9ybWF0IiwiYWN0aXZpdHlEaXNwbGF5VGV4dCIsImZyb21Vc2VyIiwic2hvd1NlbmRTdGF0dXMiLCJwbGFpblRleHQiLCJ1c2UiLCJzdHJpcE1hcmtkb3duIiwicHJvY2Vzc1N5bmMiLCJpbmRlbnRlZCIsImJvdFJvbGVMYWJlbCIsInVzZXJSb2xlTGFiZWwiLCJyb2xlTGFiZWwiLCJib3RBcmlhTGFiZWwiLCJ1c2VyQXJpYUxhYmVsIiwiYXJpYUxhYmVsIiwid2ViY2hhdF9fc3RhY2tlZF9leHRyYV9sZWZ0X2luZGVudCIsIndlYmNoYXRfX3N0YWNrZWRfZXh0cmFfcmlnaHRfaW5kZW50Iiwid2ViY2hhdF9fc3RhY2tlZF9pbmRlbnRlZF9jb250ZW50IiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJjb250ZW50VHlwZSIsIm1hcCIsImluZGV4Iiwid2ViY2hhdF9fc3RhY2tlZF9pdGVtX2luZGVudGVkIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ0aW1lc3RhbXAiLCJ0eXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs0QkFJSUEsa0MsQ0FERkMsbUI7SUFBdUJDLE8seUJBQUFBLE87SUFBU0MsVyx5QkFBQUEsVztBQUdsQyxJQUFNQyxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBR25CLGlCQUFlO0FBQ2JDLElBQUFBLFVBQVUsRUFBRTtBQURDLEdBSEk7QUFPbkIsa0JBQWdCO0FBQ2RDLElBQUFBLFFBQVEsRUFBRSxDQURJO0FBRWRDLElBQUFBLFFBQVEsRUFBRSxRQUZJO0FBSWQseUJBQXFCO0FBQ25CSCxNQUFBQSxPQUFPLEVBQUUsTUFEVTtBQUduQixxQ0FBK0I7QUFDN0JFLFFBQUFBLFFBQVEsRUFBRSxDQURtQjtBQUU3QkMsUUFBQUEsUUFBUSxFQUFFO0FBRm1CLE9BSFo7QUFRbkIscUJBQWU7QUFDYkQsUUFBQUEsUUFBUSxFQUFFLEtBREc7QUFFYkQsUUFBQUEsVUFBVSxFQUFFO0FBRkM7QUFSSTtBQUpQLEdBUEc7QUEwQm5CLGlCQUFlO0FBQ2JBLElBQUFBLFVBQVUsRUFBRTtBQURDLEdBMUJJO0FBOEJuQixpQkFBZTtBQUNiRyxJQUFBQSxhQUFhLEVBQUUsYUFERjtBQUdiLG9DQUFnQztBQUM5QkEsTUFBQUEsYUFBYSxFQUFFO0FBRGU7QUFIbkI7QUE5Qkks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LFNBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUMzREEsSUFBQUEsY0FBYyxFQUFkQTtBQUQyRCxHQUF6QjtBQUFBLENBQUQsQ0FBcEIsQ0FFWEMsYUFGVyxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc3luYyAqL1xuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlbWFyayBmcm9tICdyZW1hcmsnO1xuaW1wb3J0IHN0cmlwTWFya2Rvd24gZnJvbSAnc3RyaXAtbWFya2Rvd24nO1xuXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBCdWJibGUgZnJvbSAnLi9CdWJibGUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcbmltcG9ydCBTZW5kU3RhdHVzIGZyb20gJy4vU2VuZFN0YXR1cyc7XG5pbXBvcnQgdGV4dEZvcm1hdFRvQ29udGVudFR5cGUgZnJvbSAnLi4vVXRpbHMvdGV4dEZvcm1hdFRvQ29udGVudFR5cGUnO1xuaW1wb3J0IFRpbWVzdGFtcCBmcm9tICcuL1RpbWVzdGFtcCc7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlT3B0aW9ucyBmcm9tICcuLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3Qge1xuICBBY3Rpdml0eUNsaWVudFN0YXRlOiB7IFNFTkRJTkcsIFNFTkRfRkFJTEVEIH1cbn0gPSBDb25zdGFudHM7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuXG4gICcmID4gLmF2YXRhcic6IHtcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH0sXG5cbiAgJyYgPiAuY29udGVudCc6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAnJiA+IC53ZWJjaGF0X19yb3cnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG5cbiAgICAgICcmID4gLmJ1YmJsZSwgJiA+IC50aW1lc3RhbXAnOiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0sXG5cbiAgICAgICcmID4gLmZpbGxlcic6IHtcbiAgICAgICAgZmxleEdyb3c6IDEwMDAwLFxuICAgICAgICBmbGV4U2hyaW5rOiAxXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gICcmID4gLmZpbGxlcic6IHtcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH0sXG5cbiAgJyYuZnJvbS11c2VyJzoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG5cbiAgICAnJiA+IC5jb250ZW50ID4gLndlYmNoYXRfX3Jvdyc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBjb25uZWN0U3RhY2tlZExheW91dCA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKFxuICAgICAge1xuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgc3R5bGVTZXQ6IHtcbiAgICAgICAgICBvcHRpb25zOiB7IGJvdEF2YXRhckluaXRpYWxzLCB1c2VyQXZhdGFySW5pdGlhbHMgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBhY3Rpdml0eTogeyBmcm9tOiB7IHJvbGUgfSA9IHt9IH0gPSB7fSB9XG4gICAgKSA9PiAoe1xuICAgICAgYXZhdGFySW5pdGlhbHM6IHJvbGUgPT09ICd1c2VyJyA/IHVzZXJBdmF0YXJJbml0aWFscyA6IGJvdEF2YXRhckluaXRpYWxzLFxuICAgICAgbGFuZ3VhZ2UsXG5cbiAgICAgIC8vIFRPRE86IFtQNF0gV2Ugd2FudCB0byBkZXByZWNhdGUgYm90QXZhdGFySW5pdGlhbHMvdXNlckF2YXRhckluaXRpYWxzIGJlY2F1c2UgdGhleSBhcmUgbm90IGFzIGhlbHBmdWwgYXMgYXZhdGFySW5pdGlhbHNcbiAgICAgIGJvdEF2YXRhckluaXRpYWxzLFxuICAgICAgdXNlckF2YXRhckluaXRpYWxzXG4gICAgfSksXG4gICAgLi4uc2VsZWN0b3JzXG4gICk7XG5cbmNvbnN0IFN0YWNrZWRMYXlvdXQgPSAoeyBhY3Rpdml0eSwgYXZhdGFySW5pdGlhbHMsIGNoaWxkcmVuLCB0aW1lc3RhbXBDbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBbeyBib3RBdmF0YXJJbml0aWFscywgYnViYmxlTnViU2l6ZSwgYnViYmxlRnJvbVVzZXJOdWJTaXplLCB1c2VyQXZhdGFySW5pdGlhbHMgfV0gPSB1c2VTdHlsZU9wdGlvbnMoKTtcbiAgY29uc3QgW3sgc3RhY2tlZExheW91dDogc3RhY2tlZExheW91dFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICBjb25zdCB7XG4gICAgYXR0YWNobWVudHMgPSBbXSxcbiAgICBjaGFubmVsRGF0YTogeyBtZXNzYWdlQmFjazogeyBkaXNwbGF5VGV4dDogbWVzc2FnZUJhY2tEaXNwbGF5VGV4dCB9ID0ge30sIHN0YXRlIH0gPSB7fSxcbiAgICBmcm9tOiB7IHJvbGUgfSA9IHt9LFxuICAgIHRleHQsXG4gICAgdGV4dEZvcm1hdFxuICB9ID0gYWN0aXZpdHk7XG5cbiAgY29uc3QgYWN0aXZpdHlEaXNwbGF5VGV4dCA9IG1lc3NhZ2VCYWNrRGlzcGxheVRleHQgfHwgdGV4dDtcbiAgY29uc3QgZnJvbVVzZXIgPSByb2xlID09PSAndXNlcic7XG4gIGNvbnN0IHNob3dTZW5kU3RhdHVzID0gc3RhdGUgPT09IFNFTkRJTkcgfHwgc3RhdGUgPT09IFNFTkRfRkFJTEVEO1xuICBjb25zdCBwbGFpblRleHQgPSByZW1hcmsoKVxuICAgIC51c2Uoc3RyaXBNYXJrZG93bilcbiAgICAucHJvY2Vzc1N5bmModGV4dCk7XG4gIGNvbnN0IGluZGVudGVkID0gZnJvbVVzZXIgPyBidWJibGVGcm9tVXNlck51YlNpemUgOiBidWJibGVOdWJTaXplO1xuXG4gIGNvbnN0IGJvdFJvbGVMYWJlbCA9IHVzZUxvY2FsaXplKCdCb3RTZW50Jyk7XG4gIGNvbnN0IHVzZXJSb2xlTGFiZWwgPSB1c2VMb2NhbGl6ZSgnVXNlclNlbnQnKTtcblxuICBjb25zdCByb2xlTGFiZWwgPSBmcm9tVXNlciA/IGJvdFJvbGVMYWJlbCA6IHVzZXJSb2xlTGFiZWw7XG5cbiAgY29uc3QgYm90QXJpYUxhYmVsID0gdXNlTG9jYWxpemUoJ0JvdCBzYWlkIHNvbWV0aGluZycsIGF2YXRhckluaXRpYWxzLCBwbGFpblRleHQpO1xuICBjb25zdCB1c2VyQXJpYUxhYmVsID0gdXNlTG9jYWxpemUoJ1VzZXIgc2FpZCBzb21ldGhpbmcnLCBhdmF0YXJJbml0aWFscywgcGxhaW5UZXh0KTtcblxuICBjb25zdCBhcmlhTGFiZWwgPSBmcm9tVXNlciA/IHVzZXJBcmlhTGFiZWwgOiBib3RBcmlhTGFiZWw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgc3RhY2tlZExheW91dFN0eWxlU2V0ICsgJycsIHtcbiAgICAgICAgJ2Zyb20tdXNlcic6IGZyb21Vc2VyLFxuICAgICAgICB3ZWJjaGF0X19zdGFja2VkX2V4dHJhX2xlZnRfaW5kZW50OiBmcm9tVXNlciAmJiAhYm90QXZhdGFySW5pdGlhbHMgJiYgYnViYmxlTnViU2l6ZSxcbiAgICAgICAgd2ViY2hhdF9fc3RhY2tlZF9leHRyYV9yaWdodF9pbmRlbnQ6ICFmcm9tVXNlciAmJiAhdXNlckF2YXRhckluaXRpYWxzICYmIGJ1YmJsZUZyb21Vc2VyTnViU2l6ZSxcbiAgICAgICAgd2ViY2hhdF9fc3RhY2tlZF9pbmRlbnRlZF9jb250ZW50OiBhdmF0YXJJbml0aWFscyAmJiAhaW5kZW50ZWRcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHshYXZhdGFySW5pdGlhbHMgJiYgISEoZnJvbVVzZXIgPyBidWJibGVGcm9tVXNlck51YlNpemUgOiBidWJibGVOdWJTaXplKSAmJiA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiIC8+fVxuICAgICAgPEF2YXRhciBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPVwiYXZhdGFyXCIgZnJvbVVzZXI9e2Zyb21Vc2VyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIHshIWFjdGl2aXR5RGlzcGxheVRleHQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2ViY2hhdF9fcm93IG1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2FyaWFMYWJlbH0gLz5cbiAgICAgICAgICAgIDxCdWJibGUgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT1cImJ1YmJsZVwiIGZyb21Vc2VyPXtmcm9tVXNlcn0gbnViPXt0cnVlfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50OiB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpdml0eURpc3BsYXlUZXh0LFxuICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IHRleHRGb3JtYXRUb0NvbnRlbnRUeXBlKHRleHRGb3JtYXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQnViYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxsZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogQmVjYXVzZSBvZiBkaWZmZXJlbmNlcyBpbiBicm93c2VyIGltcGxlbWVudGF0aW9ucywgYXJpYS1sYWJlbD1cIiBcIiBpcyB1c2VkIHRvIG1ha2UgdGhlIHNjcmVlbiByZWFkZXIgbm90IHJlcGVhdCB0aGUgc2FtZSB0ZXh0IG11bHRpcGxlIHRpbWVzIGluIENocm9tZSB2NzUgKi99XG4gICAgICAgIHthdHRhY2htZW50cy5tYXAoKGF0dGFjaG1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3ZWJjaGF0X19yb3cgYXR0YWNobWVudCcsIHsgd2ViY2hhdF9fc3RhY2tlZF9pdGVtX2luZGVudGVkOiBpbmRlbnRlZCB9KX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17cm9sZUxhYmVsfSAvPlxuICAgICAgICAgICAgPEJ1YmJsZSBjbGFzc05hbWU9XCJhdHRhY2htZW50IGJ1YmJsZVwiIGZyb21Vc2VyPXtmcm9tVXNlcn0ga2V5PXtpbmRleH0gbnViPXtmYWxzZX0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbih7IGF0dGFjaG1lbnQgfSl9XG4gICAgICAgICAgICA8L0J1YmJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3ZWJjaGF0X19yb3cnLCB7IHdlYmNoYXRfX3N0YWNrZWRfaXRlbV9pbmRlbnRlZDogaW5kZW50ZWQgfSl9PlxuICAgICAgICAgIHtzaG93U2VuZFN0YXR1cyA/IChcbiAgICAgICAgICAgIDxTZW5kU3RhdHVzIGFjdGl2aXR5PXthY3Rpdml0eX0gY2xhc3NOYW1lPVwidGltZXN0YW1wXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRpbWVzdGFtcCBhY3Rpdml0eT17YWN0aXZpdHl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGltZXN0YW1wJywgdGltZXN0YW1wQ2xhc3NOYW1lKX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsbGVyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsbGVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblN0YWNrZWRMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICB0aW1lc3RhbXBDbGFzc05hbWU6ICcnXG59O1xuXG5TdGFja2VkTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2VCYWNrOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBkaXNwbGF5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSlcbiAgICB9KSxcbiAgICBmcm9tOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHRGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZXN0YW1wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBhdmF0YXJJbml0aWFsczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U3RhY2tlZExheW91dCgoeyBhdmF0YXJJbml0aWFscyB9KSA9PiAoe1xuICBhdmF0YXJJbml0aWFsc1xufSkpKFN0YWNrZWRMYXlvdXQpO1xuXG5leHBvcnQgeyBjb25uZWN0U3RhY2tlZExheW91dCB9O1xuIl19
