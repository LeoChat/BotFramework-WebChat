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
    scrollableRef = _ref3.scrollableRef,
    timestampClassName = _ref3.timestampClassName;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    _useStyleOptions2$ = _useStyleOptions2[0],
    bubbleNubSize = _useStyleOptions2$.bubbleNubSize,
    bubbleFromUserNubSize = _useStyleOptions2$.bubbleFromUserNubSize;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    carouselFilmStripStyleSet = _useStyleSet2[0].carouselFilmStrip;

  var botRoleLabel = (0, _useLocalize.default)('BotSent');
  var userRoleLabel = (0, _useLocalize.default)('UserSent');
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
  var indented = fromUser ? bubbleFromUserNubSize : bubbleNubSize;
  var roleLabel = fromUser ? userRoleLabel : botRoleLabel;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', carouselFilmStripStyleSet + '', className + '', {
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
            text: roleLabel
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
              text: roleLabel
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
  scrollableRef: _propTypes.default.any.isRequired,
  timestampClassName: _propTypes.default.string
};
var ConnectedCarouselFilmStrip = connectCarouselFilmStrip(function(_ref4) {
  var avatarInitials = _ref4.avatarInitials;
  return {
    avatarInitials: avatarInitials
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9DYXJvdXNlbEZpbG1TdHJpcC5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJBY3Rpdml0eUNsaWVudFN0YXRlIiwiU0VORElORyIsIlNFTkRfRkFJTEVEIiwiUk9PVF9DU1MiLCJkaXNwbGF5IiwiTXNPdmVyZmxvd1N0eWxlIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwidG91Y2hBY3Rpb24iLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsImZsZXhTaHJpbmsiLCJmbGV4IiwiZmxleEdyb3ciLCJvdmVyZmxvdyIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29ubmVjdENhcm91c2VsRmlsbVN0cmlwIiwic2VsZWN0b3JzIiwiY29ubmVjdFRvV2ViQ2hhdCIsImxhbmd1YWdlIiwic3R5bGVTZXQiLCJvcHRpb25zIiwiYm90QXZhdGFySW5pdGlhbHMiLCJ1c2VyQXZhdGFySW5pdGlhbHMiLCJhY3Rpdml0eSIsImZyb20iLCJyb2xlIiwiYXZhdGFySW5pdGlhbHMiLCJXZWJDaGF0Q2Fyb3VzZWxGaWxtU3RyaXAiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIml0ZW1Db250YWluZXJSZWYiLCJzY3JvbGxhYmxlUmVmIiwidGltZXN0YW1wQ2xhc3NOYW1lIiwiYnViYmxlTnViU2l6ZSIsImJ1YmJsZUZyb21Vc2VyTnViU2l6ZSIsImNhcm91c2VsRmlsbVN0cmlwU3R5bGVTZXQiLCJjYXJvdXNlbEZpbG1TdHJpcCIsImJvdFJvbGVMYWJlbCIsInVzZXJSb2xlTGFiZWwiLCJhdHRhY2htZW50cyIsImNoYW5uZWxEYXRhIiwibWVzc2FnZUJhY2siLCJtZXNzYWdlQmFja0Rpc3BsYXlUZXh0IiwiZGlzcGxheVRleHQiLCJzdGF0ZSIsInRleHQiLCJ0ZXh0Rm9ybWF0IiwiZnJvbVVzZXIiLCJhY3Rpdml0eURpc3BsYXlUZXh0IiwiaW5kZW50ZWQiLCJyb2xlTGFiZWwiLCJ3ZWJjaGF0X19jYXJvdXNlbF9pbmRlbnRlZF9jb250ZW50IiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJjb250ZW50VHlwZSIsIndlYmNoYXRfX2Nhcm91c2VsX19pdGVtX2luZGVudGVkIiwibWFwIiwiaW5kZXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRpbWVzdGFtcCIsImFueSIsIkNvbm5lY3RlZENhcm91c2VsRmlsbVN0cmlwIiwiQ2Fyb3VzZWxGaWxtU3RyaXAiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs0QkFJSUEsa0MsQ0FERkMsbUI7SUFBdUJDLE8seUJBQUFBLE87SUFBU0MsVyx5QkFBQUEsVztBQUdsQyxJQUFNQyxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBRW5CQyxFQUFBQSxlQUFlLEVBQUUsTUFGRTtBQUduQkMsRUFBQUEsU0FBUyxFQUFFLFFBSFE7QUFJbkJDLEVBQUFBLFNBQVMsRUFBRSxRQUpRO0FBS25CQyxFQUFBQSxXQUFXLEVBQUUsY0FMTTtBQU1uQkMsRUFBQUEsdUJBQXVCLEVBQUUsT0FOTjtBQVFuQiwwQkFBd0I7QUFDdEJMLElBQUFBLE9BQU8sRUFBRTtBQURhLEdBUkw7QUFZbkIsaUJBQWU7QUFDYk0sSUFBQUEsVUFBVSxFQUFFO0FBREMsR0FaSTtBQWdCbkIsa0JBQWdCO0FBQ2RDLElBQUFBLElBQUksRUFBRSxDQURRO0FBR2Qsb0JBQWdCO0FBQ2RQLE1BQUFBLE9BQU8sRUFBRSxNQURLO0FBR2QscUJBQWU7QUFDYlEsUUFBQUEsUUFBUSxFQUFFLENBREc7QUFFYkMsUUFBQUEsUUFBUSxFQUFFO0FBRkcsT0FIRDtBQVFkLHFCQUFlO0FBQ2JE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LE9BQWtHdUMsS0FBbEcsRUFERDtBQUFBLEdBREgsQ0FENkI7QUFBQSxDQUEvQjs7ZUFRZUQsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXG5cbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgeyBDb250ZXh0IGFzIEZpbG1Db250ZXh0IH0gZnJvbSAncmVhY3QtZmlsbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcblxuaW1wb3J0IEF2YXRhciBmcm9tICcuL0F2YXRhcic7XG5pbXBvcnQgQnViYmxlIGZyb20gJy4vQnViYmxlJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5pbXBvcnQgU2VuZFN0YXR1cyBmcm9tICcuL1NlbmRTdGF0dXMnO1xuaW1wb3J0IHRleHRGb3JtYXRUb0NvbnRlbnRUeXBlIGZyb20gJy4uL1V0aWxzL3RleHRGb3JtYXRUb0NvbnRlbnRUeXBlJztcbmltcG9ydCBUaW1lc3RhbXAgZnJvbSAnLi9UaW1lc3RhbXAnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZU9wdGlvbnMgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVPcHRpb25zJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IHtcbiAgQWN0aXZpdHlDbGllbnRTdGF0ZTogeyBTRU5ESU5HLCBTRU5EX0ZBSUxFRCB9XG59ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgTXNPdmVyZmxvd1N0eWxlOiAnbm9uZScsXG4gIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gIHRvdWNoQWN0aW9uOiAnbWFuaXB1bGF0aW9uJyxcbiAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG5cbiAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LFxuXG4gICcmID4gLmF2YXRhcic6IHtcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH0sXG5cbiAgJyYgPiAuY29udGVudCc6IHtcbiAgICBmbGV4OiAxLFxuXG4gICAgJyYgPiAubWVzc2FnZSc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcblxuICAgICAgJyYgPiAuYnViYmxlJzoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC5maWxsZXInOiB7XG4gICAgICAgIGZsZXhHcm93OiAxMDAwMCxcbiAgICAgICAgZmxleFNocmluazogMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnJiA+IHVsJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMCxcblxuICAgICAgJyYgPiBsaSc6IHtcbiAgICAgICAgZmxleDogMVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGNvbm5lY3RDYXJvdXNlbEZpbG1TdHJpcCA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKFxuICAgICAge1xuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgc3R5bGVTZXQ6IHtcbiAgICAgICAgICBvcHRpb25zOiB7IGJvdEF2YXRhckluaXRpYWxzLCB1c2VyQXZhdGFySW5pdGlhbHMgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBhY3Rpdml0eTogeyBmcm9tOiB7IHJvbGUgfSA9IHt9IH0gPSB7fSB9XG4gICAgKSA9PiAoe1xuICAgICAgYXZhdGFySW5pdGlhbHM6IHJvbGUgPT09ICd1c2VyJyA/IHVzZXJBdmF0YXJJbml0aWFscyA6IGJvdEF2YXRhckluaXRpYWxzLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgV2ViQ2hhdENhcm91c2VsRmlsbVN0cmlwID0gKHtcbiAgYWN0aXZpdHksXG4gIGF2YXRhckluaXRpYWxzLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpdGVtQ29udGFpbmVyUmVmLFxuICBzY3JvbGxhYmxlUmVmLFxuICB0aW1lc3RhbXBDbGFzc05hbWVcbn0pID0+IHtcbiAgY29uc3QgW3sgYnViYmxlTnViU2l6ZSwgYnViYmxlRnJvbVVzZXJOdWJTaXplIH1dID0gdXNlU3R5bGVPcHRpb25zKCk7XG4gIGNvbnN0IFt7IGNhcm91c2VsRmlsbVN0cmlwOiBjYXJvdXNlbEZpbG1TdHJpcFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICBjb25zdCBib3RSb2xlTGFiZWwgPSB1c2VMb2NhbGl6ZSgnQm90U2VudCcpO1xuICBjb25zdCB1c2VyUm9sZUxhYmVsID0gdXNlTG9jYWxpemUoJ1VzZXJTZW50Jyk7XG5cbiAgY29uc3Qge1xuICAgIGF0dGFjaG1lbnRzID0gW10sXG4gICAgY2hhbm5lbERhdGE6IHsgbWVzc2FnZUJhY2s6IHsgZGlzcGxheVRleHQ6IG1lc3NhZ2VCYWNrRGlzcGxheVRleHQgfSA9IHt9LCBzdGF0ZSB9ID0ge30sXG4gICAgZnJvbTogeyByb2xlIH0gPSB7fSxcbiAgICB0ZXh0LFxuICAgIHRleHRGb3JtYXRcbiAgfSA9IGFjdGl2aXR5O1xuXG4gIGNvbnN0IGZyb21Vc2VyID0gcm9sZSA9PT0gJ3VzZXInO1xuICBjb25zdCBhY3Rpdml0eURpc3BsYXlUZXh0ID0gbWVzc2FnZUJhY2tEaXNwbGF5VGV4dCB8fCB0ZXh0O1xuICBjb25zdCBpbmRlbnRlZCA9IGZyb21Vc2VyID8gYnViYmxlRnJvbVVzZXJOdWJTaXplIDogYnViYmxlTnViU2l6ZTtcblxuICBjb25zdCByb2xlTGFiZWwgPSBmcm9tVXNlciA/IHVzZXJSb2xlTGFiZWwgOiBib3RSb2xlTGFiZWw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgY2Fyb3VzZWxGaWxtU3RyaXBTdHlsZVNldCArICcnLCBjbGFzc05hbWUgKyAnJywge1xuICAgICAgICB3ZWJjaGF0X19jYXJvdXNlbF9pbmRlbnRlZF9jb250ZW50OiBhdmF0YXJJbml0aWFscyAmJiAhaW5kZW50ZWRcbiAgICAgIH0pfVxuICAgICAgcmVmPXtzY3JvbGxhYmxlUmVmfVxuICAgID5cbiAgICAgIDxBdmF0YXIgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT1cImF2YXRhclwiIGZyb21Vc2VyPXtmcm9tVXNlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICB7ISFhY3Rpdml0eURpc3BsYXlUZXh0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e3JvbGVMYWJlbH0gLz5cbiAgICAgICAgICAgIDxCdWJibGUgY2xhc3NOYW1lPVwiYnViYmxlXCIgZnJvbVVzZXI9e2Zyb21Vc2VyfSBudWI9e3RydWV9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQ6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdGl2aXR5RGlzcGxheVRleHQsXG4gICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogdGV4dEZvcm1hdFRvQ29udGVudFR5cGUodGV4dEZvcm1hdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9CdWJibGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGxlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyB3ZWJjaGF0X19jYXJvdXNlbF9faXRlbV9pbmRlbnRlZDogaW5kZW50ZWQgfSl9IHJlZj17aXRlbUNvbnRhaW5lclJlZn0+XG4gICAgICAgICAge2F0dGFjaG1lbnRzLm1hcCgoYXR0YWNobWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17cm9sZUxhYmVsfSAvPlxuICAgICAgICAgICAgICA8QnViYmxlIGZyb21Vc2VyPXtmcm9tVXNlcn0ga2V5PXtpbmRleH0gbnViPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuKHsgYXR0YWNobWVudCB9KX1cbiAgICAgICAgICAgICAgPC9CdWJibGU+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IHdlYmNoYXRfX2Nhcm91c2VsX19pdGVtX2luZGVudGVkOiBpbmRlbnRlZCB9KX0+XG4gICAgICAgICAge3N0YXRlID09PSBTRU5ESU5HIHx8IHN0YXRlID09PSBTRU5EX0ZBSUxFRCA/IChcbiAgICAgICAgICAgIDxTZW5kU3RhdHVzIGFjdGl2aXR5PXthY3Rpdml0eX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRpbWVzdGFtcCBhY3Rpdml0eT17YWN0aXZpdHl9IGNsYXNzTmFtZT17dGltZXN0YW1wQ2xhc3NOYW1lfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5XZWJDaGF0Q2Fyb3VzZWxGaWxtU3RyaXAuZGVmYXVsdFByb3BzID0ge1xuICBhdmF0YXJJbml0aWFsczogJycsXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJycsXG4gIHRpbWVzdGFtcENsYXNzTmFtZTogJydcbn07XG5cbldlYkNoYXRDYXJvdXNlbEZpbG1TdHJpcC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF0dGFjaG1lbnRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2hhbm5lbERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlQmFjazogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZGlzcGxheVRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KSxcbiAgICBmcm9tOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHRGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZXN0YW1wOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGF2YXRhckluaXRpYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpdGVtQ29udGFpbmVyUmVmOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIHNjcm9sbGFibGVSZWY6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgdGltZXN0YW1wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBDb25uZWN0ZWRDYXJvdXNlbEZpbG1TdHJpcCA9IGNvbm5lY3RDYXJvdXNlbEZpbG1TdHJpcCgoeyBhdmF0YXJJbml0aWFscyB9KSA9PiAoe1xuICBhdmF0YXJJbml0aWFsc1xufSkpKFdlYkNoYXRDYXJvdXNlbEZpbG1TdHJpcCk7XG5cbmNvbnN0IENhcm91c2VsRmlsbVN0cmlwID0gcHJvcHMgPT4gKFxuICA8RmlsbUNvbnRleHQuQ29uc3VtZXI+XG4gICAgeyh7IGl0ZW1Db250YWluZXJSZWYsIHNjcm9sbGFibGVSZWYgfSkgPT4gKFxuICAgICAgPENvbm5lY3RlZENhcm91c2VsRmlsbVN0cmlwIGl0ZW1Db250YWluZXJSZWY9e2l0ZW1Db250YWluZXJSZWZ9IHNjcm9sbGFibGVSZWY9e3Njcm9sbGFibGVSZWZ9IHsuLi5wcm9wc30gLz5cbiAgICApfVxuICA8L0ZpbG1Db250ZXh0LkNvbnN1bWVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxGaWxtU3RyaXA7XG5cbmV4cG9ydCB7IGNvbm5lY3RDYXJvdXNlbEZpbG1TdHJpcCB9O1xuIl19
