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

var _Localize = require('../Localization/Localize');

var _Avatar = _interopRequireDefault(require('./Avatar'));

var _Bubble = _interopRequireDefault(require('./Bubble'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _SendStatus = _interopRequireDefault(require('./SendStatus'));

var _textFormatToContentType = _interopRequireDefault(require('../Utils/textFormatToContentType'));

var _Timestamp = _interopRequireDefault(require('./Timestamp'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint react/no-array-index-key: "off" */

/* eslint-disable no-sync */
var _Constants$ActivityCl = _botframeworkWebchatCore.Constants.ActivityClientState,
  SENDING = _Constants$ActivityCl.SENDING,
  SEND_FAILED = _Constants$ActivityCl.SEND_FAILED;
var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  '& > .avatar': {
    flexShrink: 0
  },
  '& > .content': {
    padding: '0px 5px',
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
    direction = _ref3.direction,
    language = _ref3.language,
    styleSet = _ref3.styleSet,
    timestampClassName = _ref3.timestampClassName;
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
  var ariaLabel = (0, _Localize.localize)(
    fromUser ? 'User said something' : 'Bot said something',
    language,
    avatarInitials,
    plainText
  );
  var indented = fromUser ? styleSet.options.bubbleFromUserNubSize : styleSet.options.bubbleNubSize;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', styleSet.stackedLayout + '', {
        'from-user': fromUser,
        direction: direction,
        webchat__stacked_extra_left_indent:
          fromUser && !styleSet.options.botAvatarInitials && styleSet.options.bubbleNubSize,
        webchat__stacked_extra_right_indent:
          !fromUser && !styleSet.options.userAvatarInitials && styleSet.options.bubbleFromUserNubSize,
        webchat__stacked_indented_content: avatarInitials && !indented
      })
    },
    !avatarInitials &&
      !!(fromUser ? styleSet.options.bubbleFromUserNubSize : styleSet.options.bubbleNubSize) &&
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
            text: fromUser
              ? (0, _Localize.localize)('UserSent', language)
              : (0, _Localize.localize)('BotSent', language)
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
  direction: 'ltr',
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
  direction: _propTypes.default.string,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    stackedLayout: _propTypes.default.any.isRequired
  }).isRequired,
  timestampClassName: _propTypes.default.string
};

var _default = connectStackedLayout(function(_ref4) {
  var avatarInitials = _ref4.avatarInitials,
    direction = _ref4.direction,
    language = _ref4.language,
    styleSet = _ref4.styleSet;
  return {
    avatarInitials: avatarInitials,
    direction: direction,
    language: language,
    styleSet: styleSet
  };
})(StackedLayout);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TdGFja2VkTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkFjdGl2aXR5Q2xpZW50U3RhdGUiLCJTRU5ESU5HIiwiU0VORF9GQUlMRUQiLCJST09UX0NTUyIsImRpc3BsYXkiLCJmbGV4U2hyaW5rIiwicGFkZGluZyIsImZsZXhHcm93Iiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwiY29ubmVjdFN0YWNrZWRMYXlvdXQiLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwibGFuZ3VhZ2UiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJib3RBdmF0YXJJbml0aWFscyIsInVzZXJBdmF0YXJJbml0aWFscyIsImFjdGl2aXR5IiwiZnJvbSIsInJvbGUiLCJhdmF0YXJJbml0aWFscyIsIlN0YWNrZWRMYXlvdXQiLCJjaGlsZHJlbiIsImRpcmVjdGlvbiIsInRpbWVzdGFtcENsYXNzTmFtZSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJtZXNzYWdlQmFjayIsIm1lc3NhZ2VCYWNrRGlzcGxheVRleHQiLCJkaXNwbGF5VGV4dCIsInN0YXRlIiwidGV4dCIsInRleHRGb3JtYXQiLCJhY3Rpdml0eURpc3BsYXlUZXh0IiwiZnJvbVVzZXIiLCJzaG93U2VuZFN0YXR1cyIsInBsYWluVGV4dCIsInVzZSIsInN0cmlwTWFya2Rvd24iLCJwcm9jZXNzU3luYyIsImFyaWFMYWJlbCIsImluZGVudGVkIiwiYnViYmxlRnJvbVVzZXJOdWJTaXplIiwiYnViYmxlTnViU2l6ZSIsInN0YWNrZWRMYXlvdXQiLCJ3ZWJjaGF0X19zdGFja2VkX2V4dHJhX2xlZnRfaW5kZW50Iiwid2ViY2hhdF9fc3RhY2tlZF9leHRyYV9yaWdodF9pbmRlbnQiLCJ3ZWJjaGF0X19zdGFja2VkX2luZGVudGVkX2NvbnRlbnQiLCJhdHRhY2htZW50IiwiY29udGVudCIsImNvbnRlbnRUeXBlIiwibWFwIiwiaW5kZXgiLCJ3ZWJjaGF0X19zdGFja2VkX2l0ZW1faW5kZW50ZWQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRpbWVzdGFtcCIsInR5cGUiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWxCQTs7QUFDQTs0QkFxQklBLGtDLENBREZDLG1CO0lBQXVCQyxPLHlCQUFBQSxPO0lBQVNDLFcseUJBQUFBLFc7QUFHbEMsSUFBTUMsUUFBUSxHQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxPQUFPLEVBQUUsTUFEVTtBQUduQixpQkFBZTtBQUNiQyxJQUFBQSxVQUFVLEVBQUU7QUFEQyxHQUhJO0FBT25CLGtCQUFnQjtBQUNkQyxJQUFBQSxPQUFPLEVBQUUsU0FESztBQUVkQyxJQUFBQSxRQUFRLEVBQUUsQ0FGSTtBQUdkQyxJQUFBQSxRQUFRLEVBQUUsUUFISTtBQUtkLHlCQUFxQjtBQUNuQkosTUFBQUEsT0FBTyxFQUFFLE1BRFU7QUFHbkIscUNBQStCO0FBQzdCRyxRQUFBQSxRQUFRLEVBQUUsQ0FEbUI7QUFFN0JDLFFBQUFBLFFBQVEsRUFBRTtBQUZtQixPQUhaO0FBUW5CLHFCQUFlO0FBQ2JELFFBQUFBLFFBQVEsRUFBRSxLQURHO0FBRWJGLFFBQUFBLFVBQVUsRUFBRTtBQUZDO0FBUkk7QUFMUCxHQVBHO0FBMkJuQixpQkFBZTtBQUNiQSxJQUFBQSxVQUFVLEVBQUU7QUFEQyxHQTNCSTtBQStCbkIsaUJBQWU7QUFDYkksSUFBQUEsYUFBYSxFQUFFLGFBREY7QUFHYixvQ0FBZ0M7QUFDOUJBLE1BQUFBLGFBQWEsRUFBRTtBQURlO0FBSG5CO0FBL0JJLENBQUosQ0FBakI7O0FBd0NBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxv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QUFDeEJkLElBQUFBLGFBQWEsRUFBRWEsbUJBQVVPLEdBQVYsQ0FBY0g7QUFETCxHQUFoQixFQUVQQSxVQXRCcUI7QUF1QnhCckMsRUFBQUEsa0JBQWtCLEVBQUVpQyxtQkFBVUc7QUF2Qk4sQ0FBMUI7O2VBMEJlbkQsb0JBQW9CLENBQUM7QUFBQSxNQUFHVyxjQUFILFNBQUdBLGNBQUg7QUFBQSxNQUFtQkcsU0FBbkIsU0FBbUJBLFNBQW5CO0FBQUEsTUFBOEJYLFFBQTlCLFNBQThCQSxRQUE5QjtBQUFBLE1BQXdDQyxRQUF4QyxTQUF3Q0EsUUFBeEM7QUFBQSxTQUF3RDtBQUMxRk8sSUFBQUEsY0FBYyxFQUFkQSxjQUQwRjtBQUUxRkcsSUFBQUEsU0FBUyxFQUFUQSxTQUYwRjtBQUcxRlgsSUFBQUEsUUFBUSxFQUFSQSxRQUgwRjtBQUkxRkMsSUFBQUEsUUFBUSxFQUFSQTtBQUowRixHQUF4RDtBQUFBLENBQUQsQ0FBcEIsQ0FLWFEsYUFMVyxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc3luYyAqL1xuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlbWFyayBmcm9tICdyZW1hcmsnO1xuaW1wb3J0IHN0cmlwTWFya2Rvd24gZnJvbSAnc3RyaXAtbWFya2Rvd24nO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBCdWJibGUgZnJvbSAnLi9CdWJibGUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcbmltcG9ydCBTZW5kU3RhdHVzIGZyb20gJy4vU2VuZFN0YXR1cyc7XG5pbXBvcnQgdGV4dEZvcm1hdFRvQ29udGVudFR5cGUgZnJvbSAnLi4vVXRpbHMvdGV4dEZvcm1hdFRvQ29udGVudFR5cGUnO1xuaW1wb3J0IFRpbWVzdGFtcCBmcm9tICcuL1RpbWVzdGFtcCc7XG5cbmNvbnN0IHtcbiAgQWN0aXZpdHlDbGllbnRTdGF0ZTogeyBTRU5ESU5HLCBTRU5EX0ZBSUxFRCB9XG59ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcblxuICAnJiA+IC5hdmF0YXInOiB7XG4gICAgZmxleFNocmluazogMFxuICB9LFxuXG4gICcmID4gLmNvbnRlbnQnOiB7XG4gICAgcGFkZGluZzogJzBweCA1cHgnLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICcmID4gLndlYmNoYXRfX3Jvdyc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcblxuICAgICAgJyYgPiAuYnViYmxlLCAmID4gLnRpbWVzdGFtcCc6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgfSxcblxuICAgICAgJyYgPiAuZmlsbGVyJzoge1xuICAgICAgICBmbGV4R3JvdzogMTAwMDAsXG4gICAgICAgIGZsZXhTaHJpbms6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgJyYgPiAuZmlsbGVyJzoge1xuICAgIGZsZXhTaHJpbms6IDBcbiAgfSxcblxuICAnJi5mcm9tLXVzZXInOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcblxuICAgICcmID4gLmNvbnRlbnQgPiAud2ViY2hhdF9fcm93Jzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGNvbm5lY3RTdGFja2VkTGF5b3V0ID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoXG4gICAgICB7XG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBzdHlsZVNldDoge1xuICAgICAgICAgIG9wdGlvbnM6IHsgYm90QXZhdGFySW5pdGlhbHMsIHVzZXJBdmF0YXJJbml0aWFscyB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGFjdGl2aXR5OiB7IGZyb206IHsgcm9sZSB9ID0ge30gfSA9IHt9IH1cbiAgICApID0+ICh7XG4gICAgICBhdmF0YXJJbml0aWFsczogcm9sZSA9PT0gJ3VzZXInID8gdXNlckF2YXRhckluaXRpYWxzIDogYm90QXZhdGFySW5pdGlhbHMsXG4gICAgICBsYW5ndWFnZSxcblxuICAgICAgLy8gVE9ETzogW1A0XSBXZSB3YW50IHRvIGRlcHJlY2F0ZSBib3RBdmF0YXJJbml0aWFscy91c2VyQXZhdGFySW5pdGlhbHMgYmVjYXVzZSB0aGV5IGFyZSBub3QgYXMgaGVscGZ1bCBhcyBhdmF0YXJJbml0aWFsc1xuICAgICAgYm90QXZhdGFySW5pdGlhbHMsXG4gICAgICB1c2VyQXZhdGFySW5pdGlhbHNcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgU3RhY2tlZExheW91dCA9ICh7IGFjdGl2aXR5LCBhdmF0YXJJbml0aWFscywgY2hpbGRyZW4sIGRpcmVjdGlvbiwgbGFuZ3VhZ2UsIHN0eWxlU2V0LCB0aW1lc3RhbXBDbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgYXR0YWNobWVudHMgPSBbXSxcbiAgICBjaGFubmVsRGF0YTogeyBtZXNzYWdlQmFjazogeyBkaXNwbGF5VGV4dDogbWVzc2FnZUJhY2tEaXNwbGF5VGV4dCB9ID0ge30sIHN0YXRlIH0gPSB7fSxcbiAgICBmcm9tOiB7IHJvbGUgfSA9IHt9LFxuICAgIHRleHQsXG4gICAgdGV4dEZvcm1hdFxuICB9ID0gYWN0aXZpdHk7XG5cbiAgY29uc3QgYWN0aXZpdHlEaXNwbGF5VGV4dCA9IG1lc3NhZ2VCYWNrRGlzcGxheVRleHQgfHwgdGV4dDtcbiAgY29uc3QgZnJvbVVzZXIgPSByb2xlID09PSAndXNlcic7XG4gIGNvbnN0IHNob3dTZW5kU3RhdHVzID0gc3RhdGUgPT09IFNFTkRJTkcgfHwgc3RhdGUgPT09IFNFTkRfRkFJTEVEO1xuICBjb25zdCBwbGFpblRleHQgPSByZW1hcmsoKVxuICAgIC51c2Uoc3RyaXBNYXJrZG93bilcbiAgICAucHJvY2Vzc1N5bmModGV4dCk7XG4gIGNvbnN0IGFyaWFMYWJlbCA9IGxvY2FsaXplKFxuICAgIGZyb21Vc2VyID8gJ1VzZXIgc2FpZCBzb21ldGhpbmcnIDogJ0JvdCBzYWlkIHNvbWV0aGluZycsXG4gICAgbGFuZ3VhZ2UsXG4gICAgYXZhdGFySW5pdGlhbHMsXG4gICAgcGxhaW5UZXh0XG4gICk7XG4gIGNvbnN0IGluZGVudGVkID0gZnJvbVVzZXIgPyBzdHlsZVNldC5vcHRpb25zLmJ1YmJsZUZyb21Vc2VyTnViU2l6ZSA6IHN0eWxlU2V0Lm9wdGlvbnMuYnViYmxlTnViU2l6ZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBzdHlsZVNldC5zdGFja2VkTGF5b3V0ICsgJycsIHtcbiAgICAgICAgJ2Zyb20tdXNlcic6IGZyb21Vc2VyLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIHdlYmNoYXRfX3N0YWNrZWRfZXh0cmFfbGVmdF9pbmRlbnQ6XG4gICAgICAgICAgZnJvbVVzZXIgJiYgIXN0eWxlU2V0Lm9wdGlvbnMuYm90QXZhdGFySW5pdGlhbHMgJiYgc3R5bGVTZXQub3B0aW9ucy5idWJibGVOdWJTaXplLFxuICAgICAgICB3ZWJjaGF0X19zdGFja2VkX2V4dHJhX3JpZ2h0X2luZGVudDpcbiAgICAgICAgICAhZnJvbVVzZXIgJiYgIXN0eWxlU2V0Lm9wdGlvbnMudXNlckF2YXRhckluaXRpYWxzICYmIHN0eWxlU2V0Lm9wdGlvbnMuYnViYmxlRnJvbVVzZXJOdWJTaXplLFxuICAgICAgICB3ZWJjaGF0X19zdGFja2VkX2luZGVudGVkX2NvbnRlbnQ6IGF2YXRhckluaXRpYWxzICYmICFpbmRlbnRlZFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgeyFhdmF0YXJJbml0aWFscyAmJiAhIShmcm9tVXNlciA/IHN0eWxlU2V0Lm9wdGlvbnMuYnViYmxlRnJvbVVzZXJOdWJTaXplIDogc3R5bGVTZXQub3B0aW9ucy5idWJibGVOdWJTaXplKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cbiAgICAgICl9XG4gICAgICA8QXZhdGFyIGFyaWEtaGlkZGVuPXt0cnVlfSBjbGFzc05hbWU9XCJhdmF0YXJcIiBmcm9tVXNlcj17ZnJvbVVzZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgeyEhYWN0aXZpdHlEaXNwbGF5VGV4dCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWJjaGF0X19yb3cgbWVzc2FnZVwiPlxuICAgICAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17YXJpYUxhYmVsfSAvPlxuICAgICAgICAgICAgPEJ1YmJsZSBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPVwiYnViYmxlXCIgZnJvbVVzZXI9e2Zyb21Vc2VyfSBudWI9e3RydWV9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQ6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdGl2aXR5RGlzcGxheVRleHQsXG4gICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogdGV4dEZvcm1hdFRvQ29udGVudFR5cGUodGV4dEZvcm1hdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9CdWJibGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGxlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiBCZWNhdXNlIG9mIGRpZmZlcmVuY2VzIGluIGJyb3dzZXIgaW1wbGVtZW50YXRpb25zLCBhcmlhLWxhYmVsPVwiIFwiIGlzIHVzZWQgdG8gbWFrZSB0aGUgc2NyZWVuIHJlYWRlciBub3QgcmVwZWF0IHRoZSBzYW1lIHRleHQgbXVsdGlwbGUgdGltZXMgaW4gQ2hyb21lIHY3NSAqL31cbiAgICAgICAge2F0dGFjaG1lbnRzLm1hcCgoYXR0YWNobWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiIFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3dlYmNoYXRfX3JvdyBhdHRhY2htZW50JywgeyB3ZWJjaGF0X19zdGFja2VkX2l0ZW1faW5kZW50ZWQ6IGluZGVudGVkIH0pfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtmcm9tVXNlciA/IGxvY2FsaXplKCdVc2VyU2VudCcsIGxhbmd1YWdlKSA6IGxvY2FsaXplKCdCb3RTZW50JywgbGFuZ3VhZ2UpfSAvPlxuICAgICAgICAgICAgPEJ1YmJsZSBjbGFzc05hbWU9XCJhdHRhY2htZW50IGJ1YmJsZVwiIGZyb21Vc2VyPXtmcm9tVXNlcn0ga2V5PXtpbmRleH0gbnViPXtmYWxzZX0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbih7IGF0dGFjaG1lbnQgfSl9XG4gICAgICAgICAgICA8L0J1YmJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3ZWJjaGF0X19yb3cnLCB7IHdlYmNoYXRfX3N0YWNrZWRfaXRlbV9pbmRlbnRlZDogaW5kZW50ZWQgfSl9PlxuICAgICAgICAgIHtzaG93U2VuZFN0YXR1cyA/IChcbiAgICAgICAgICAgIDxTZW5kU3RhdHVzIGFjdGl2aXR5PXthY3Rpdml0eX0gY2xhc3NOYW1lPVwidGltZXN0YW1wXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRpbWVzdGFtcCBhY3Rpdml0eT17YWN0aXZpdHl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGltZXN0YW1wJywgdGltZXN0YW1wQ2xhc3NOYW1lKX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsbGVyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsbGVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblN0YWNrZWRMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBkaXJlY3Rpb246ICdsdHInLFxuICB0aW1lc3RhbXBDbGFzc05hbWU6ICcnXG59O1xuXG5TdGFja2VkTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2VCYWNrOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBkaXNwbGF5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSlcbiAgICB9KSxcbiAgICBmcm9tOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHRGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZXN0YW1wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBhdmF0YXJJbml0aWFsczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGFja2VkTGF5b3V0OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U3RhY2tlZExheW91dCgoeyBhdmF0YXJJbml0aWFscywgZGlyZWN0aW9uLCBsYW5ndWFnZSwgc3R5bGVTZXQgfSkgPT4gKHtcbiAgYXZhdGFySW5pdGlhbHMsXG4gIGRpcmVjdGlvbixcbiAgbGFuZ3VhZ2UsXG4gIHN0eWxlU2V0XG59KSkoU3RhY2tlZExheW91dCk7XG5cbmV4cG9ydCB7IGNvbm5lY3RTdGFja2VkTGF5b3V0IH07XG4iXX0=
