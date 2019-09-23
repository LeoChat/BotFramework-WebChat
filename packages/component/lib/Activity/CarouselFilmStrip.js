'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectCarouselFilmStrip = exports.default = void 0;

var _glamor = require('glamor');

var _reactFilm = require('react-film');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatCore = require('botframework-webchat-core');

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

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

var _Constants$ActivityCl = _botframeworkWebchatCore.Constants.ActivityClientState,
  SENDING = _Constants$ActivityCl.SENDING,
  SEND_FAILED = _Constants$ActivityCl.SEND_FAILED;
var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  MsOverflowStyle: 'none',
  overflowX: 'scroll',
  overflowY: 'hidden',
  touchAction: 'manipulation',
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '& > .avatar': {
    flexShrink: 0
  },
  '& > .content': {
    flex: 1,
    '& > .message': {
      display: 'flex',
      '& > .bubble': {
        flexGrow: 1,
        overflow: 'hidden'
      },
      '& > .filler': {
        flexGrow: 10000,
        flexShrink: 1
      }
    },
    '& > ul': {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '& > li': {
        flex: 1
      }
    }
  }
});

var connectCarouselFilmStrip = function connectCarouselFilmStrip() {
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
          language: language
        };
      }
    ].concat(selectors)
  );
};

exports.connectCarouselFilmStrip = connectCarouselFilmStrip;

var WebChatCarouselFilmStrip = function WebChatCarouselFilmStrip(_ref3) {
  var activity = _ref3.activity,
    avatarInitials = _ref3.avatarInitials,
    children = _ref3.children,
    className = _ref3.className,
    itemContainerRef = _ref3.itemContainerRef,
    language = _ref3.language,
    scrollableRef = _ref3.scrollableRef,
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
  var fromUser = role === 'user';
  var activityDisplayText = messageBackDisplayText || text;
  var indented = fromUser ? styleSet.options.bubbleFromUserNubSize : styleSet.options.bubbleNubSize;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', styleSet.carouselFilmStrip + '', className + '', {
        webchat__carousel_indented_content: avatarInitials && !indented
      }),
      ref: scrollableRef
    },
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
            className: 'message'
          },
          _react.default.createElement(_ScreenReaderText.default, {
            text: fromUser
              ? (0, _Localize.localize)('UserSent', language)
              : (0, _Localize.localize)('BotSent', language)
          }),
          _react.default.createElement(
            _Bubble.default,
            {
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
      _react.default.createElement(
        'ul',
        {
          className: (0, _classnames.default)({
            webchat__carousel__item_indented: indented
          }),
          ref: itemContainerRef
        },
        attachments.map(function(attachment, index) {
          return _react.default.createElement(
            'li',
            {
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
                fromUser: fromUser,
                key: index,
                nub: false
              },
              children({
                attachment: attachment
              })
            )
          );
        })
      ),
      _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)({
            webchat__carousel__item_indented: indented
          })
        },
        state === SENDING || state === SEND_FAILED
          ? _react.default.createElement(_SendStatus.default, {
              activity: activity
            })
          : _react.default.createElement(_Timestamp.default, {
              activity: activity,
              className: timestampClassName
            })
      )
    )
  );
};

WebChatCarouselFilmStrip.defaultProps = {
  avatarInitials: '',
  children: undefined,
  className: '',
  timestampClassName: ''
};
WebChatCarouselFilmStrip.propTypes = {
  activity: _propTypes.default.shape({
    attachments: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      messageBack: _propTypes.default.shape({
        displayText: _propTypes.default.string
      }),
      state: _propTypes.default.string
    }),
    from: _propTypes.default.shape({
      role: _propTypes.default.string.isRequired
    }).isRequired,
    text: _propTypes.default.string,
    textFormat: _propTypes.default.string,
    timestamp: _propTypes.default.string
  }).isRequired,
  avatarInitials: _propTypes.default.string,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  itemContainerRef: _propTypes.default.any.isRequired,
  language: _propTypes.default.string.isRequired,
  scrollableRef: _propTypes.default.any.isRequired,
  styleSet: _propTypes.default.shape({
    carouselFilmStrip: _propTypes.default.any.isRequired
  }).isRequired,
  timestampClassName: _propTypes.default.string
};
var ConnectedCarouselFilmStrip = connectCarouselFilmStrip(function(_ref4) {
  var avatarInitials = _ref4.avatarInitials,
    language = _ref4.language,
    styleSet = _ref4.styleSet;
  return {
    avatarInitials: avatarInitials,
    language: language,
    styleSet: styleSet
  };
})(WebChatCarouselFilmStrip);

var CarouselFilmStrip = function CarouselFilmStrip(props) {
  return _react.default.createElement(_reactFilm.Context.Consumer, null, function(_ref5) {
    var itemContainerRef = _ref5.itemContainerRef,
      scrollableRef = _ref5.scrollableRef;
    return _react.default.createElement(
      ConnectedCarouselFilmStrip,
      _extends(
        {
          itemContainerRef: itemContainerRef,
          scrollableRef: scrollableRef
        },
        props
      )
    );
  });
};

var _default = CarouselFilmStrip;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9DYXJvdXNlbEZpbG1TdHJpcC5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJBY3Rpdml0eUNsaWVudFN0YXRlIiwiU0VORElORyIsIlNFTkRfRkFJTEVEIiwiUk9PVF9DU1MiLCJkaXNwbGF5IiwiTXNPdmVyZmxvd1N0eWxlIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwidG91Y2hBY3Rpb24iLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsImZsZXhTaHJpbmsiLCJmbGV4IiwiZmxleEdyb3ciLCJvdmVyZmxvdyIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29ubmVjdENhcm91c2VsRmlsbVN0cmlwIiwic2VsZWN0b3JzIiwiY29ubmVjdFRvV2ViQ2hhdCIsImxhbmd1YWdlIiwic3R5bGVTZXQiLCJvcHRpb25zIiwiYm90QXZhdGFySW5pdGlhbHMiLCJ1c2VyQXZhdGFySW5pdGlhbHMiLCJhY3Rpdml0eSIsImZyb20iLCJyb2xlIiwiYXZhdGFySW5pdGlhbHMiLCJXZWJDaGF0Q2Fyb3VzZWxGaWxtU3RyaXAiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIml0ZW1Db250YWluZXJSZWYiLCJzY3JvbGxhYmxlUmVmIiwidGltZXN0YW1wQ2xhc3NOYW1lIiwiYXR0YWNobWVudHMiLCJjaGFubmVsRGF0YSIsIm1lc3NhZ2VCYWNrIiwibWVzc2FnZUJhY2tEaXNwbGF5VGV4dCIsImRpc3BsYXlUZXh0Iiwic3RhdGUiLCJ0ZXh0IiwidGV4dEZvcm1hdCIsImZyb21Vc2VyIiwiYWN0aXZpdHlEaXNwbGF5VGV4dCIsImluZGVudGVkIiwiYnViYmxlRnJvbVVzZXJOdWJTaXplIiwiYnViYmxlTnViU2l6ZSIsImNhcm91c2VsRmlsbVN0cmlwIiwid2ViY2hhdF9fY2Fyb3VzZWxfaW5kZW50ZWRfY29udGVudCIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwiY29udGVudFR5cGUiLCJ3ZWJjaGF0X19jYXJvdXNlbF9faXRlbV9pbmRlbnRlZCIsIm1hcCIsImluZGV4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ0aW1lc3RhbXAiLCJhbnkiLCJDb25uZWN0ZWRDYXJvdXNlbEZpbG1TdHJpcCIsIkNhcm91c2VsRmlsbVN0cmlwIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7OzRCQUlJQSxrQyxDQURGQyxtQjtJQUF1QkMsTyx5QkFBQUEsTztJQUFTQyxXLHlCQUFBQSxXO0FBR2xDLElBQU1DLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsT0FBTyxFQUFFLE1BRFU7QUFFbkJDLEVBQUFBLGVBQWUsRUFBRSxNQUZFO0FBR25CQyxFQUFBQSxTQUFTLEVBQUUsUUFIUTtBQUluQkMsRUFBQUEsU0FBUyxFQUFFLFFBSlE7QUFLbkJDLEVBQUFBLFdBQVcsRUFBRSxjQUxNO0FBTW5CQyxFQUFBQSx1QkFBdUIsRUFBRSxPQU5OO0FBUW5CLDBCQUF3QjtBQUN0QkwsSUFBQUEsT0FBTyxFQUFFO0FBRGEsR0FSTDtBQVluQixpQkFBZTtBQUNiTSxJQUFBQSxVQUFVLEVBQUU7QUFEQyxHQVpJO0FBZ0JuQixrQkFBZ0I7QUFDZEMsSUFBQUEsSUFBSSxFQUFFLENBRFE7QUFHZCxvQkFBZ0I7QUFDZFAsTUFBQUEsT0FBTyxFQUFFLE1BREs7QUFHZCxxQkFBZTtBQUNiUSxRQUFBQSxRQUFRLEVBQUUsQ0FERztBQUViQyxRQUFBQSxRQUFRLEVBQUU7QUFGRyxPQUhEO0FBUWQscUJBQWU7QUFDYkQsUUFBQUEsUUFBUSxFQUFFLEtBREc7QUFFYkYsUUFBQUEsVUFBVSxFQUFFO0FBRkM7QUFSRCxLQUhGO0FBaUJkLGNBQVU7QUFDUk4sTUFBQUEsT0FBTyxFQUFF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Qiw2QkFBQyxrQkFBRCxDQUFhLFFBQWIsUUFDRztBQUFBLFFBQUdwQyxnQkFBSCxTQUFHQSxnQkFBSDtBQUFBLFFBQXFCQyxhQUFyQixTQUFxQkEsYUFBckI7QUFBQSxXQUNDLDZCQUFDLDBCQUFEO0FBQTRCLE1BQUEsZ0JBQWdCLEVBQUVELGdCQUE5QztBQUFnRSxNQUFBLGFBQWEsRUFBRUM7QUFBL0UsT0FBa0dtQyxLQUFsRyxFQUREO0FBQUEsR0FESCxDQUQ2QjtBQUFBLENBQS9COztlQVFlRCxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCB7IENvbnRleHQgYXMgRmlsbUNvbnRleHQgfSBmcm9tICdyZWFjdC1maWxtJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBCdWJibGUgZnJvbSAnLi9CdWJibGUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcbmltcG9ydCBTZW5kU3RhdHVzIGZyb20gJy4vU2VuZFN0YXR1cyc7XG5pbXBvcnQgdGV4dEZvcm1hdFRvQ29udGVudFR5cGUgZnJvbSAnLi4vVXRpbHMvdGV4dEZvcm1hdFRvQ29udGVudFR5cGUnO1xuaW1wb3J0IFRpbWVzdGFtcCBmcm9tICcuL1RpbWVzdGFtcCc7XG5cbmNvbnN0IHtcbiAgQWN0aXZpdHlDbGllbnRTdGF0ZTogeyBTRU5ESU5HLCBTRU5EX0ZBSUxFRCB9XG59ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgTXNPdmVyZmxvd1N0eWxlOiAnbm9uZScsXG4gIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gIHRvdWNoQWN0aW9uOiAnbWFuaXB1bGF0aW9uJyxcbiAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG5cbiAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LFxuXG4gICcmID4gLmF2YXRhcic6IHtcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH0sXG5cbiAgJyYgPiAuY29udGVudCc6IHtcbiAgICBmbGV4OiAxLFxuXG4gICAgJyYgPiAubWVzc2FnZSc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcblxuICAgICAgJyYgPiAuYnViYmxlJzoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC5maWxsZXInOiB7XG4gICAgICAgIGZsZXhHcm93OiAxMDAwMCxcbiAgICAgICAgZmxleFNocmluazogMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnJiA+IHVsJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMCxcblxuICAgICAgJyYgPiBsaSc6IHtcbiAgICAgICAgZmxleDogMVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGNvbm5lY3RDYXJvdXNlbEZpbG1TdHJpcCA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKFxuICAgICAge1xuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgc3R5bGVTZXQ6IHtcbiAgICAgICAgICBvcHRpb25zOiB7IGJvdEF2YXRhckluaXRpYWxzLCB1c2VyQXZhdGFySW5pdGlhbHMgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBhY3Rpdml0eTogeyBmcm9tOiB7IHJvbGUgfSA9IHt9IH0gPSB7fSB9XG4gICAgKSA9PiAoe1xuICAgICAgYXZhdGFySW5pdGlhbHM6IHJvbGUgPT09ICd1c2VyJyA/IHVzZXJBdmF0YXJJbml0aWFscyA6IGJvdEF2YXRhckluaXRpYWxzLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgV2ViQ2hhdENhcm91c2VsRmlsbVN0cmlwID0gKHtcbiAgYWN0aXZpdHksXG4gIGF2YXRhckluaXRpYWxzLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpdGVtQ29udGFpbmVyUmVmLFxuICBsYW5ndWFnZSxcbiAgc2Nyb2xsYWJsZVJlZixcbiAgc3R5bGVTZXQsXG4gIHRpbWVzdGFtcENsYXNzTmFtZVxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgYXR0YWNobWVudHMgPSBbXSxcbiAgICBjaGFubmVsRGF0YTogeyBtZXNzYWdlQmFjazogeyBkaXNwbGF5VGV4dDogbWVzc2FnZUJhY2tEaXNwbGF5VGV4dCB9ID0ge30sIHN0YXRlIH0gPSB7fSxcbiAgICBmcm9tOiB7IHJvbGUgfSA9IHt9LFxuICAgIHRleHQsXG4gICAgdGV4dEZvcm1hdFxuICB9ID0gYWN0aXZpdHk7XG5cbiAgY29uc3QgZnJvbVVzZXIgPSByb2xlID09PSAndXNlcic7XG4gIGNvbnN0IGFjdGl2aXR5RGlzcGxheVRleHQgPSBtZXNzYWdlQmFja0Rpc3BsYXlUZXh0IHx8IHRleHQ7XG4gIGNvbnN0IGluZGVudGVkID0gZnJvbVVzZXIgPyBzdHlsZVNldC5vcHRpb25zLmJ1YmJsZUZyb21Vc2VyTnViU2l6ZSA6IHN0eWxlU2V0Lm9wdGlvbnMuYnViYmxlTnViU2l6ZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBzdHlsZVNldC5jYXJvdXNlbEZpbG1TdHJpcCArICcnLCBjbGFzc05hbWUgKyAnJywge1xuICAgICAgICB3ZWJjaGF0X19jYXJvdXNlbF9pbmRlbnRlZF9jb250ZW50OiBhdmF0YXJJbml0aWFscyAmJiAhaW5kZW50ZWRcbiAgICAgIH0pfVxuICAgICAgcmVmPXtzY3JvbGxhYmxlUmVmfVxuICAgID5cbiAgICAgIDxBdmF0YXIgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT1cImF2YXRhclwiIGZyb21Vc2VyPXtmcm9tVXNlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICB7ISFhY3Rpdml0eURpc3BsYXlUZXh0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2Zyb21Vc2VyID8gbG9jYWxpemUoJ1VzZXJTZW50JywgbGFuZ3VhZ2UpIDogbG9jYWxpemUoJ0JvdFNlbnQnLCBsYW5ndWFnZSl9IC8+XG4gICAgICAgICAgICA8QnViYmxlIGNsYXNzTmFtZT1cImJ1YmJsZVwiIGZyb21Vc2VyPXtmcm9tVXNlcn0gbnViPXt0cnVlfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50OiB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpdml0eURpc3BsYXlUZXh0LFxuICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IHRleHRGb3JtYXRUb0NvbnRlbnRUeXBlKHRleHRGb3JtYXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQnViYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxsZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgd2ViY2hhdF9fY2Fyb3VzZWxfX2l0ZW1faW5kZW50ZWQ6IGluZGVudGVkIH0pfSByZWY9e2l0ZW1Db250YWluZXJSZWZ9PlxuICAgICAgICAgIHthdHRhY2htZW50cy5tYXAoKGF0dGFjaG1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2Zyb21Vc2VyID8gbG9jYWxpemUoJ1VzZXJTZW50JywgbGFuZ3VhZ2UpIDogbG9jYWxpemUoJ0JvdFNlbnQnLCBsYW5ndWFnZSl9IC8+XG4gICAgICAgICAgICAgIDxCdWJibGUgZnJvbVVzZXI9e2Zyb21Vc2VyfSBrZXk9e2luZGV4fSBudWI9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4oeyBhdHRhY2htZW50IH0pfVxuICAgICAgICAgICAgICA8L0J1YmJsZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgd2ViY2hhdF9fY2Fyb3VzZWxfX2l0ZW1faW5kZW50ZWQ6IGluZGVudGVkIH0pfT5cbiAgICAgICAgICB7c3RhdGUgPT09IFNFTkRJTkcgfHwgc3RhdGUgPT09IFNFTkRfRkFJTEVEID8gKFxuICAgICAgICAgICAgPFNlbmRTdGF0dXMgYWN0aXZpdHk9e2FjdGl2aXR5fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGltZXN0YW1wIGFjdGl2aXR5PXthY3Rpdml0eX0gY2xhc3NOYW1lPXt0aW1lc3RhbXBDbGFzc05hbWV9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbldlYkNoYXRDYXJvdXNlbEZpbG1TdHJpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGF2YXRhckluaXRpYWxzOiAnJyxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiAnJ1xufTtcblxuV2ViQ2hhdENhcm91c2VsRmlsbVN0cmlwLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2VCYWNrOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBkaXNwbGF5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSksXG4gICAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLFxuICAgIGZyb206IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dEZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aW1lc3RhbXA6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgYXZhdGFySW5pdGlhbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGl0ZW1Db250YWluZXJSZWY6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2Nyb2xsYWJsZVJlZjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjYXJvdXNlbEZpbG1TdHJpcDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRpbWVzdGFtcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgQ29ubmVjdGVkQ2Fyb3VzZWxGaWxtU3RyaXAgPSBjb25uZWN0Q2Fyb3VzZWxGaWxtU3RyaXAoKHsgYXZhdGFySW5pdGlhbHMsIGxhbmd1YWdlLCBzdHlsZVNldCB9KSA9PiAoe1xuICBhdmF0YXJJbml0aWFscyxcbiAgbGFuZ3VhZ2UsXG4gIHN0eWxlU2V0XG59KSkoV2ViQ2hhdENhcm91c2VsRmlsbVN0cmlwKTtcblxuY29uc3QgQ2Fyb3VzZWxGaWxtU3RyaXAgPSBwcm9wcyA9PiAoXG4gIDxGaWxtQ29udGV4dC5Db25zdW1lcj5cbiAgICB7KHsgaXRlbUNvbnRhaW5lclJlZiwgc2Nyb2xsYWJsZVJlZiB9KSA9PiAoXG4gICAgICA8Q29ubmVjdGVkQ2Fyb3VzZWxGaWxtU3RyaXAgaXRlbUNvbnRhaW5lclJlZj17aXRlbUNvbnRhaW5lclJlZn0gc2Nyb2xsYWJsZVJlZj17c2Nyb2xsYWJsZVJlZn0gey4uLnByb3BzfSAvPlxuICAgICl9XG4gIDwvRmlsbUNvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbEZpbG1TdHJpcDtcblxuZXhwb3J0IHsgY29ubmVjdENhcm91c2VsRmlsbVN0cmlwIH07XG4iXX0=
