'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _reactSay = require('react-say');

var _glamor = require('glamor');

var _reactScrollToBottom = require('react-scroll-to-bottom');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

var _ScrollToEndButton = _interopRequireDefault(require('./Activity/ScrollToEndButton'));

var _Speak = _interopRequireDefault(require('./Activity/Speak'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'relative'
});
var PANEL_CSS = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column',
  WebkitOverflowScrolling: 'touch'
});
var FILLER_CSS = (0, _glamor.css)({
  flex: 1
});
var LIST_CSS = (0, _glamor.css)({
  listStyleType: 'none',
  '& > li.hide-timestamp .transcript-timestamp': {
    display: 'none'
  }
});
var DEFAULT_GROUP_TIMESTAMP = 300000; // 5 minutes

function sameTimestampGroup(activityX, activityY, groupTimestamp) {
  if (groupTimestamp === false) {
    return true;
  } else if (activityX && activityY) {
    groupTimestamp = typeof groupTimestamp === 'number' ? groupTimestamp : DEFAULT_GROUP_TIMESTAMP;

    if (activityX.from.role === activityY.from.role) {
      var timeX = new Date(activityX.timestamp).getTime();
      var timeY = new Date(activityY.timestamp).getTime();
      return Math.abs(timeX - timeY) <= groupTimestamp;
    }
  }

  return false;
}

var BasicTranscript = function BasicTranscript(_ref) {
  var activityRenderer = _ref.activityRenderer,
    activities = _ref.activities,
    attachmentRenderer = _ref.attachmentRenderer,
    className = _ref.className,
    groupTimestamp = _ref.groupTimestamp,
    styleSet = _ref.styleSet,
    webSpeechPonyfill = _ref.webSpeechPonyfill;

  var _ref2 = webSpeechPonyfill || {},
    speechSynthesis = _ref2.speechSynthesis,
    SpeechSynthesisUtterance = _ref2.SpeechSynthesisUtterance; // We use 2-pass approach for rendering activities, for show/hide timestamp grouping.
  // Until the activity pass thru middleware, we never know if it is going to show up.
  // After we know which activities will show up, we can compute which activity will show timestamps.
  // If the activity does not render, it will not be spoken if text-to-speech is enabled.

  var activityElements = activities.reduce(function(activityElements, activity) {
    var element = activityRenderer({
      activity: activity,
      timestampClassName: 'transcript-timestamp'
    })(function(_ref3) {
      var attachment = _ref3.attachment;
      return attachmentRenderer({
        activity: activity,
        attachment: attachment
      });
    });
    element &&
      activityElements.push({
        activity: activity,
        element: element
      });
    return activityElements;
  }, []);
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', className + ''),
      role: 'log'
    },
    _react.default.createElement(
      _reactScrollToBottom.Panel,
      {
        className: PANEL_CSS + ''
      },
      _react.default.createElement('div', {
        className: FILLER_CSS
      }),
      _react.default.createElement(
        _reactSay.Composer,
        {
          speechSynthesis: speechSynthesis,
          speechSynthesisUtterance: SpeechSynthesisUtterance
        },
        _react.default.createElement(
          'ul',
          {
            'aria-atomic': 'false',
            'aria-live': 'polite',
            'aria-relevant': 'additions text',
            className: (0, _classnames.default)(LIST_CSS + '', styleSet.activities + ''),
            role: 'list'
          },
          activityElements.map(function(_ref4, index) {
            var activity = _ref4.activity,
              element = _ref4.element;
            return _react.default.createElement(
              'li',
              {
                /* Because of differences in browser implementations, aria-label=" " is used to make the screen reader not repeat the same text multiple times in Chrome v75 */
                'aria-label': ' ',
                className: (0, _classnames.default)(styleSet.activity + '', {
                  // Hide timestamp if same timestamp group with the next activity
                  'hide-timestamp': sameTimestampGroup(
                    activity,
                    (activityElements[index + 1] || {}).activity,
                    groupTimestamp
                  )
                }),
                key: (activity.channelData && activity.channelData.clientActivityID) || activity.id || index,
                role: 'listitem'
              },
              element, // TODO: [P2] We should use core/definitions/speakingActivity for this predicate instead
              activity.channelData &&
                activity.channelData.speak &&
                _react.default.createElement(_Speak.default, {
                  activity: activity
                })
            );
          })
        )
      )
    ),
    !styleSet.options.hideScrollToEndButton && _react.default.createElement(_ScrollToEndButton.default, null)
  );
};

BasicTranscript.defaultProps = {
  className: '',
  groupTimestamp: true,
  webSpeechPonyfill: undefined
};
BasicTranscript.propTypes = {
  activities: _propTypes.default.array.isRequired,
  activityRenderer: _propTypes.default.func.isRequired,
  attachmentRenderer: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  groupTimestamp: _propTypes.default.oneOfType([
    _propTypes.default.bool.isRequired,
    _propTypes.default.number.isRequired
  ]),
  styleSet: _propTypes.default.shape({
    activities: _propTypes.default.any.isRequired,
    activity: _propTypes.default.any.isRequired,
    options: _propTypes.default.shape({
      hideScrollToEndButton: _propTypes.default.bool.isRequired
    }).isRequired
  }).isRequired,
  webSpeechPonyfill: _propTypes.default.shape({
    speechSynthesis: _propTypes.default.any.isRequired,
    SpeechSynthesisUtterance: _propTypes.default.any.isRequired
  })
};

var _default = (0, _connectToWebChat.default)(function(_ref5) {
  var activities = _ref5.activities,
    activityRenderer = _ref5.activityRenderer,
    attachmentRenderer = _ref5.attachmentRenderer,
    groupTimestamp = _ref5.groupTimestamp,
    styleSet = _ref5.styleSet,
    webSpeechPonyfill = _ref5.webSpeechPonyfill;
  return {
    activities: activities,
    activityRenderer: activityRenderer,
    attachmentRenderer: attachmentRenderer,
    groupTimestamp: groupTimestamp,
    styleSet: styleSet,
    webSpeechPonyfill: webSpeechPonyfill
  };
})(BasicTranscript);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNpY1RyYW5zY3JpcHQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiUEFORUxfQ1NTIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsIkZJTExFUl9DU1MiLCJmbGV4IiwiTElTVF9DU1MiLCJsaXN0U3R5bGVUeXBlIiwiREVGQVVMVF9HUk9VUF9USU1FU1RBTVAiLCJzYW1lVGltZXN0YW1wR3JvdXAiLCJhY3Rpdml0eVgiLCJhY3Rpdml0eVkiLCJncm91cFRpbWVzdGFtcCIsImZyb20iLCJyb2xlIiwidGltZVgiLCJEYXRlIiwidGltZXN0YW1wIiwiZ2V0VGltZSIsInRpbWVZIiwiTWF0aCIsImFicyIsIkJhc2ljVHJhbnNjcmlwdCIsImFjdGl2aXR5UmVuZGVyZXIiLCJhY3Rpdml0aWVzIiwiYXR0YWNobWVudFJlbmRlcmVyIiwiY2xhc3NOYW1lIiwic3R5bGVTZXQiLCJ3ZWJTcGVlY2hQb255ZmlsbCIsInNwZWVjaFN5bnRoZXNpcyIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsImFjdGl2aXR5RWxlbWVudHMiLCJyZWR1Y2UiLCJhY3Rpdml0eSIsImVsZW1lbnQiLCJ0aW1lc3RhbXBDbGFzc05hbWUiLCJhdHRhY2htZW50IiwicHVzaCIsIm1hcCIsImluZGV4IiwiY2hhbm5lbERhdGEiLCJjbGllbnRBY3Rpdml0eUlEIiwiaWQiLCJzcGVhayIsIm9wdGlvbnMiLCJoaWRlU2Nyb2xsVG9FbmRCdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYm9vbCIsIm51bWJlciIsInNoYXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7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QUFWLENBQWNQLFVBRkE7QUFHeEJQLElBQUFBLE9BQU8sRUFBRUssbUJBQVVRLEtBQVYsQ0FBZ0I7QUFDdkJaLE1BQUFBLHFCQUFxQixFQUFFSSxtQkFBVU0sSUFBVixDQUFlSjtBQURmLEtBQWhCLEVBRU5BO0FBTHFCLEdBQWhCLEVBTVBBLFVBWnVCO0FBYTFCdkIsRUFBQUEsaUJBQWlCLEVBQUVxQixtQkFBVVEsS0FBVixDQUFnQjtBQUNqQzVCLElBQUFBLGVBQWUsRUFBRW9CLG1CQUFVUyxHQUFWLENBQWNQLFVBREU7QUFFakNyQixJQUFBQSx3QkFBd0IsRUFBRW1CLG1CQUFVUyxHQUFWLENBQWNQO0FBRlAsR0FBaEI7QUFiTyxDQUE1Qjs7ZUFtQmUsK0JBQ2I7QUFBQSxNQUFHM0IsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZUQsZ0JBQWYsU0FBZUEsZ0JBQWY7QUFBQSxNQUFpQ0Usa0JBQWpDLFNBQWlDQSxrQkFBakM7QUFBQSxNQUFxRGIsY0FBckQsU0FBcURBLGNBQXJEO0FBQUEsTUFBcUVlLFFBQXJFLFNBQXFFQSxRQUFyRTtBQUFBLE1BQStFQyxpQkFBL0UsU0FBK0VBLGlCQUEvRTtBQUFBLFNBQXdHO0FBQ3RHSixJQUFBQSxVQUFVLEVBQVZBLFVBRHNHO0FBRXRHRCxJQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUZzRztBQUd0R0UsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFIc0c7QUFJdEdiLElBQUFBLGNBQWMsRUFBZEEsY0FKc0c7QUFLdEdlLElBQUFBLFFBQVEsRUFBUkEsUUFMc0c7QUFNdEdDLElBQUFBLGlCQUFpQixFQUFqQkE7QUFOc0csR0FBeEc7QUFBQSxDQURhLEVBU2JOLGVBVGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2VyIGFzIFNheUNvbXBvc2VyIH0gZnJvbSAncmVhY3Qtc2F5JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgeyBQYW5lbCBhcyBTY3JvbGxUb0JvdHRvbVBhbmVsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXRvLWJvdHRvbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFNjcm9sbFRvRW5kQnV0dG9uIGZyb20gJy4vQWN0aXZpdHkvU2Nyb2xsVG9FbmRCdXR0b24nO1xuaW1wb3J0IFNwZWFrQWN0aXZpdHkgZnJvbSAnLi9BY3Rpdml0eS9TcGVhayc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSk7XG5cbmNvbnN0IFBBTkVMX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG59KTtcblxuY29uc3QgRklMTEVSX0NTUyA9IGNzcyh7XG4gIGZsZXg6IDFcbn0pO1xuXG5jb25zdCBMSVNUX0NTUyA9IGNzcyh7XG4gIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcblxuICAnJiA+IGxpLmhpZGUtdGltZXN0YW1wIC50cmFuc2NyaXB0LXRpbWVzdGFtcCc6IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfVxufSk7XG5cbmNvbnN0IERFRkFVTFRfR1JPVVBfVElNRVNUQU1QID0gMzAwMDAwOyAvLyA1IG1pbnV0ZXNcblxuZnVuY3Rpb24gc2FtZVRpbWVzdGFtcEdyb3VwKGFjdGl2aXR5WCwgYWN0aXZpdHlZLCBncm91cFRpbWVzdGFtcCkge1xuICBpZiAoZ3JvdXBUaW1lc3RhbXAgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoYWN0aXZpdHlYICYmIGFjdGl2aXR5WSkge1xuICAgIGdyb3VwVGltZXN0YW1wID0gdHlwZW9mIGdyb3VwVGltZXN0YW1wID09PSAnbnVtYmVyJyA/IGdyb3VwVGltZXN0YW1wIDogREVGQVVMVF9HUk9VUF9USU1FU1RBTVA7XG5cbiAgICBpZiAoYWN0aXZpdHlYLmZyb20ucm9sZSA9PT0gYWN0aXZpdHlZLmZyb20ucm9sZSkge1xuICAgICAgY29uc3QgdGltZVggPSBuZXcgRGF0ZShhY3Rpdml0eVgudGltZXN0YW1wKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCB0aW1lWSA9IG5ldyBEYXRlKGFjdGl2aXR5WS50aW1lc3RhbXApLmdldFRpbWUoKTtcblxuICAgICAgcmV0dXJuIE1hdGguYWJzKHRpbWVYIC0gdGltZVkpIDw9IGdyb3VwVGltZXN0YW1wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgQmFzaWNUcmFuc2NyaXB0ID0gKHtcbiAgYWN0aXZpdHlSZW5kZXJlcixcbiAgYWN0aXZpdGllcyxcbiAgYXR0YWNobWVudFJlbmRlcmVyLFxuICBjbGFzc05hbWUsXG4gIGdyb3VwVGltZXN0YW1wLFxuICBzdHlsZVNldCxcbiAgd2ViU3BlZWNoUG9ueWZpbGxcbn0pID0+IHtcbiAgY29uc3QgeyBzcGVlY2hTeW50aGVzaXMsIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSB9ID0gd2ViU3BlZWNoUG9ueWZpbGwgfHwge307XG5cbiAgLy8gV2UgdXNlIDItcGFzcyBhcHByb2FjaCBmb3IgcmVuZGVyaW5nIGFjdGl2aXRpZXMsIGZvciBzaG93L2hpZGUgdGltZXN0YW1wIGdyb3VwaW5nLlxuICAvLyBVbnRpbCB0aGUgYWN0aXZpdHkgcGFzcyB0aHJ1IG1pZGRsZXdhcmUsIHdlIG5ldmVyIGtub3cgaWYgaXQgaXMgZ29pbmcgdG8gc2hvdyB1cC5cbiAgLy8gQWZ0ZXIgd2Uga25vdyB3aGljaCBhY3Rpdml0aWVzIHdpbGwgc2hvdyB1cCwgd2UgY2FuIGNvbXB1dGUgd2hpY2ggYWN0aXZpdHkgd2lsbCBzaG93IHRpbWVzdGFtcHMuXG4gIC8vIElmIHRoZSBhY3Rpdml0eSBkb2VzIG5vdCByZW5kZXIsIGl0IHdpbGwgbm90IGJlIHNwb2tlbiBpZiB0ZXh0LXRvLXNwZWVjaCBpcyBlbmFibGVkLlxuICBjb25zdCBhY3Rpdml0eUVsZW1lbnRzID0gYWN0aXZpdGllcy5yZWR1Y2UoKGFjdGl2aXR5RWxlbWVudHMsIGFjdGl2aXR5KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFjdGl2aXR5UmVuZGVyZXIoe1xuICAgICAgYWN0aXZpdHksXG4gICAgICB0aW1lc3RhbXBDbGFzc05hbWU6ICd0cmFuc2NyaXB0LXRpbWVzdGFtcCdcbiAgICB9KSgoeyBhdHRhY2htZW50IH0pID0+IGF0dGFjaG1lbnRSZW5kZXJlcih7IGFjdGl2aXR5LCBhdHRhY2htZW50IH0pKTtcblxuICAgIGVsZW1lbnQgJiZcbiAgICAgIGFjdGl2aXR5RWxlbWVudHMucHVzaCh7XG4gICAgICAgIGFjdGl2aXR5LFxuICAgICAgICBlbGVtZW50XG4gICAgICB9KTtcblxuICAgIHJldHVybiBhY3Rpdml0eUVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJyl9IHJvbGU9XCJsb2dcIj5cbiAgICAgIDxTY3JvbGxUb0JvdHRvbVBhbmVsIGNsYXNzTmFtZT17UEFORUxfQ1NTICsgJyd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RklMTEVSX0NTU30gLz5cbiAgICAgICAgPFNheUNvbXBvc2VyIHNwZWVjaFN5bnRoZXNpcz17c3BlZWNoU3ludGhlc2lzfSBzcGVlY2hTeW50aGVzaXNVdHRlcmFuY2U9e1NwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZX0+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBhcmlhLWF0b21pYz1cImZhbHNlXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgICAgICBhcmlhLXJlbGV2YW50PVwiYWRkaXRpb25zIHRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKExJU1RfQ1NTICsgJycsIHN0eWxlU2V0LmFjdGl2aXRpZXMgKyAnJyl9XG4gICAgICAgICAgICByb2xlPVwibGlzdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FjdGl2aXR5RWxlbWVudHMubWFwKCh7IGFjdGl2aXR5LCBlbGVtZW50IH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIC8qIEJlY2F1c2Ugb2YgZGlmZmVyZW5jZXMgaW4gYnJvd3NlciBpbXBsZW1lbnRhdGlvbnMsIGFyaWEtbGFiZWw9XCIgXCIgaXMgdXNlZCB0byBtYWtlIHRoZSBzY3JlZW4gcmVhZGVyIG5vdCByZXBlYXQgdGhlIHNhbWUgdGV4dCBtdWx0aXBsZSB0aW1lcyBpbiBDaHJvbWUgdjc1ICovXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5hY3Rpdml0eSArICcnLCB7XG4gICAgICAgICAgICAgICAgICAvLyBIaWRlIHRpbWVzdGFtcCBpZiBzYW1lIHRpbWVzdGFtcCBncm91cCB3aXRoIHRoZSBuZXh0IGFjdGl2aXR5XG4gICAgICAgICAgICAgICAgICAnaGlkZS10aW1lc3RhbXAnOiBzYW1lVGltZXN0YW1wR3JvdXAoXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LFxuICAgICAgICAgICAgICAgICAgICAoYWN0aXZpdHlFbGVtZW50c1tpbmRleCArIDFdIHx8IHt9KS5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBrZXk9eyhhY3Rpdml0eS5jaGFubmVsRGF0YSAmJiBhY3Rpdml0eS5jaGFubmVsRGF0YS5jbGllbnRBY3Rpdml0eUlEKSB8fCBhY3Rpdml0eS5pZCB8fCBpbmRleH1cbiAgICAgICAgICAgICAgICByb2xlPVwibGlzdGl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgICAgICAgICAgey8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIHVzZSBjb3JlL2RlZmluaXRpb25zL3NwZWFraW5nQWN0aXZpdHkgZm9yIHRoaXMgcHJlZGljYXRlIGluc3RlYWRcbiAgICAgICAgICAgICAgICBhY3Rpdml0eS5jaGFubmVsRGF0YSAmJiBhY3Rpdml0eS5jaGFubmVsRGF0YS5zcGVhayAmJiA8U3BlYWtBY3Rpdml0eSBhY3Rpdml0eT17YWN0aXZpdHl9IC8+fVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TYXlDb21wb3Nlcj5cbiAgICAgIDwvU2Nyb2xsVG9Cb3R0b21QYW5lbD5cbiAgICAgIHshc3R5bGVTZXQub3B0aW9ucy5oaWRlU2Nyb2xsVG9FbmRCdXR0b24gJiYgPFNjcm9sbFRvRW5kQnV0dG9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQmFzaWNUcmFuc2NyaXB0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZ3JvdXBUaW1lc3RhbXA6IHRydWUsXG4gIHdlYlNwZWVjaFBvbnlmaWxsOiB1bmRlZmluZWRcbn07XG5cbkJhc2ljVHJhbnNjcmlwdC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXRpZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBhY3Rpdml0eVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ3JvdXBUaW1lc3RhbXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZF0pLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3Rpdml0aWVzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaGlkZVNjcm9sbFRvRW5kQnV0dG9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICB3ZWJTcGVlY2hQb255ZmlsbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzcGVlY2hTeW50aGVzaXM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2U6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdChcbiAgKHsgYWN0aXZpdGllcywgYWN0aXZpdHlSZW5kZXJlciwgYXR0YWNobWVudFJlbmRlcmVyLCBncm91cFRpbWVzdGFtcCwgc3R5bGVTZXQsIHdlYlNwZWVjaFBvbnlmaWxsIH0pID0+ICh7XG4gICAgYWN0aXZpdGllcyxcbiAgICBhY3Rpdml0eVJlbmRlcmVyLFxuICAgIGF0dGFjaG1lbnRSZW5kZXJlcixcbiAgICBncm91cFRpbWVzdGFtcCxcbiAgICBzdHlsZVNldCxcbiAgICB3ZWJTcGVlY2hQb255ZmlsbFxuICB9KVxuKShCYXNpY1RyYW5zY3JpcHQpO1xuIl19
