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

var _useActivities3 = _interopRequireDefault(require('./hooks/useActivities'));

var _useStyleOptions3 = _interopRequireDefault(require('./hooks/useStyleOptions'));

var _useStyleSet3 = _interopRequireDefault(require('./hooks/useStyleSet'));

var _BypassSpeechSynthesisPonyfill = require('./Speech/BypassSpeechSynthesisPonyfill');

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
    attachmentRenderer = _ref.attachmentRenderer,
    className = _ref.className,
    groupTimestamp = _ref.groupTimestamp,
    webSpeechPonyfill = _ref.webSpeechPonyfill;

  var _useActivities = (0, _useActivities3.default)(),
    _useActivities2 = _slicedToArray(_useActivities, 1),
    activities = _useActivities2[0];

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    _useStyleSet2$ = _useStyleSet2[0],
    activitiesStyleSet = _useStyleSet2$.activities,
    activityStyleSet = _useStyleSet2$.activity;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    hideScrollToEndButton = _useStyleOptions2[0].hideScrollToEndButton;

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
        _reactSay.Composer, // These are props for passing in Web Speech ponyfill, where speech synthesis requires these two class/object to be ponyfilled.
        {
          speechSynthesis: speechSynthesis || _BypassSpeechSynthesisPonyfill.speechSynthesis,
          speechSynthesisUtterance: SpeechSynthesisUtterance || _BypassSpeechSynthesisPonyfill.SpeechSynthesisUtterance
        },
        _react.default.createElement(
          'ul',
          {
            'aria-atomic': 'false',
            'aria-live': 'polite',
            'aria-relevant': 'additions text',
            className: (0, _classnames.default)(LIST_CSS + '', activitiesStyleSet + ''),
            role: 'list'
          },
          activityElements.map(function(_ref4, index) {
            var activity = _ref4.activity,
              element = _ref4.element;
            return _react.default.createElement(
              'li',
              {
                // Because of differences in browser implementations, aria-label=" " is used to make the screen reader not repeat the same text multiple times in Chrome v75
                'aria-label': ' ',
                className: (0, _classnames.default)(activityStyleSet + '', {
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
    !hideScrollToEndButton && _react.default.createElement(_ScrollToEndButton.default, null)
  );
};

BasicTranscript.defaultProps = {
  className: '',
  groupTimestamp: true,
  webSpeechPonyfill: undefined
};
BasicTranscript.propTypes = {
  activityRenderer: _propTypes.default.func.isRequired,
  attachmentRenderer: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  groupTimestamp: _propTypes.default.oneOfType([
    _propTypes.default.bool.isRequired,
    _propTypes.default.number.isRequired
  ]),
  webSpeechPonyfill: _propTypes.default.shape({
    speechSynthesis: _propTypes.default.any,
    SpeechSynthesisUtterance: _propTypes.default.any
  })
};

var _default = (0, _connectToWebChat.default)(function(_ref5) {
  var activityRenderer = _ref5.activityRenderer,
    attachmentRenderer = _ref5.attachmentRenderer,
    groupTimestamp = _ref5.groupTimestamp,
    webSpeechPonyfill = _ref5.webSpeechPonyfill;
  return {
    activityRenderer: activityRenderer,
    attachmentRenderer: attachmentRenderer,
    groupTimestamp: groupTimestamp,
    webSpeechPonyfill: webSpeechPonyfill
  };
})(BasicTranscript);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNpY1RyYW5zY3JpcHQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiUEFORUxfQ1NTIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsIkZJTExFUl9DU1MiLCJmbGV4IiwiTElTVF9DU1MiLCJsaXN0U3R5bGVUeXBlIiwiREVGQVVMVF9HUk9VUF9USU1FU1RBTVAiLCJzYW1lVGltZXN0YW1wR3JvdXAiLCJhY3Rpdml0eVgiLCJhY3Rpdml0eVkiLCJncm91cFRpbWVzdGFtcCIsImZyb20iLCJyb2xlIiwidGltZVgiLCJEYXRlIiwidGltZXN0YW1wIiwiZ2V0VGltZSIsInRpbWVZIiwiTWF0aCIsImFicyIsIkJhc2ljVHJhbnNjcmlwdCIsImFjdGl2aXR5UmVuZGVyZXIiLCJhdHRhY2htZW50UmVuZGVyZXIiLCJjbGFzc05hbWUiLCJ3ZWJTcGVlY2hQb255ZmlsbCIsImFjdGl2aXRpZXMiLCJhY3Rpdml0aWVzU3R5bGVTZXQiLCJhY3Rpdml0eVN0eWxlU2V0IiwiYWN0aXZpdHkiLCJoaWRlU2Nyb2xsVG9FbmRCdXR0b24iLCJzcGVlY2hTeW50aGVzaXMiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJhY3Rpdml0eUVsZW1lbnRzIiwicmVkdWNlIiwiZWxlbWVudCIsInRpbWVzdGFtcENsYXNzTmFtZSIsImF0dGFjaG1lbnQiLCJwdXNoIiwiYnlwYXNzU3BlZWNoU3ludGhlc2lzIiwiQnlwYXNzU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwibWFwIiwiaW5kZXgiLCJjaGFubmVsRGF0YSIsImNsaWVudEFjdGl2aXR5SUQiLCJpZCIsInNwZWFrIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwic2hhcGUi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VixDQUFvQixDQUFDSixtQkFBVUssSUFBVixDQUFlSCxVQUFoQixFQUE0QkYsbUJBQVVNLE1BQVYsQ0FBaUJKLFVBQTdDLENBQXBCLENBSlU7QUFLMUIzQixFQUFBQSxpQkFBaUIsRUFBRXlCLG1CQUFVTyxLQUFWLENBQWdCO0FBQ2pDMUIsSUFBQUEsZUFBZSxFQUFFbUIsbUJBQVVRLEdBRE07QUFFakMxQixJQUFBQSx3QkFBd0IsRUFBRWtCLG1CQUFVUTtBQUZILEdBQWhCO0FBTE8sQ0FBNUI7O2VBV2UsK0JBQWlCO0FBQUEsTUFBR3BDLGdCQUFILFNBQUdBLGdCQUFIO0FBQUEsTUFBcUJDLGtCQUFyQixTQUFxQkEsa0JBQXJCO0FBQUEsTUFBeUNaLGNBQXpDLFNBQXlDQSxjQUF6QztBQUFBLE1BQXlEYyxpQkFBekQsU0FBeURBLGlCQUF6RDtBQUFBLFNBQWtGO0FBQ2hISCxJQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQURnSDtBQUVoSEMsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFGZ0g7QUFHaEhaLElBQUFBLGNBQWMsRUFBZEEsY0FIZ0g7QUFJaEhjLElBQUFBLGlCQUFpQixFQUFqQkE7QUFKZ0gsR0FBbEY7QUFBQSxDQUFqQixFQUtYSixlQUxXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NlciBhcyBTYXlDb21wb3NlciB9IGZyb20gJ3JlYWN0LXNheSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IHsgUGFuZWwgYXMgU2Nyb2xsVG9Cb3R0b21QYW5lbCB9IGZyb20gJ3JlYWN0LXNjcm9sbC10by1ib3R0b20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JvbGxUb0VuZEJ1dHRvbiBmcm9tICcuL0FjdGl2aXR5L1Njcm9sbFRvRW5kQnV0dG9uJztcbmltcG9ydCBTcGVha0FjdGl2aXR5IGZyb20gJy4vQWN0aXZpdHkvU3BlYWsnO1xuaW1wb3J0IHVzZUFjdGl2aXRpZXMgZnJvbSAnLi9ob29rcy91c2VBY3Rpdml0aWVzJztcbmltcG9ydCB1c2VTdHlsZU9wdGlvbnMgZnJvbSAnLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5pbXBvcnQge1xuICBzcGVlY2hTeW50aGVzaXMgYXMgYnlwYXNzU3BlZWNoU3ludGhlc2lzLFxuICBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UgYXMgQnlwYXNzU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlXG59IGZyb20gJy4vU3BlZWNoL0J5cGFzc1NwZWVjaFN5bnRoZXNpc1BvbnlmaWxsJztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KTtcblxuY29uc3QgUEFORUxfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbn0pO1xuXG5jb25zdCBGSUxMRVJfQ1NTID0gY3NzKHtcbiAgZmxleDogMVxufSk7XG5cbmNvbnN0IExJU1RfQ1NTID0gY3NzKHtcbiAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuXG4gICcmID4gbGkuaGlkZS10aW1lc3RhbXAgLnRyYW5zY3JpcHQtdGltZXN0YW1wJzoge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59KTtcblxuY29uc3QgREVGQVVMVF9HUk9VUF9USU1FU1RBTVAgPSAzMDAwMDA7IC8vIDUgbWludXRlc1xuXG5mdW5jdGlvbiBzYW1lVGltZXN0YW1wR3JvdXAoYWN0aXZpdHlYLCBhY3Rpdml0eVksIGdyb3VwVGltZXN0YW1wKSB7XG4gIGlmIChncm91cFRpbWVzdGFtcCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhY3Rpdml0eVggJiYgYWN0aXZpdHlZKSB7XG4gICAgZ3JvdXBUaW1lc3RhbXAgPSB0eXBlb2YgZ3JvdXBUaW1lc3RhbXAgPT09ICdudW1iZXInID8gZ3JvdXBUaW1lc3RhbXAgOiBERUZBVUxUX0dST1VQX1RJTUVTVEFNUDtcblxuICAgIGlmIChhY3Rpdml0eVguZnJvbS5yb2xlID09PSBhY3Rpdml0eVkuZnJvbS5yb2xlKSB7XG4gICAgICBjb25zdCB0aW1lWCA9IG5ldyBEYXRlKGFjdGl2aXR5WC50aW1lc3RhbXApLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHRpbWVZID0gbmV3IERhdGUoYWN0aXZpdHlZLnRpbWVzdGFtcCkuZ2V0VGltZSgpO1xuXG4gICAgICByZXR1cm4gTWF0aC5hYnModGltZVggLSB0aW1lWSkgPD0gZ3JvdXBUaW1lc3RhbXA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBCYXNpY1RyYW5zY3JpcHQgPSAoeyBhY3Rpdml0eVJlbmRlcmVyLCBhdHRhY2htZW50UmVuZGVyZXIsIGNsYXNzTmFtZSwgZ3JvdXBUaW1lc3RhbXAsIHdlYlNwZWVjaFBvbnlmaWxsIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2aXRpZXNdID0gdXNlQWN0aXZpdGllcygpO1xuICBjb25zdCBbeyBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzU3R5bGVTZXQsIGFjdGl2aXR5OiBhY3Rpdml0eVN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcbiAgY29uc3QgW3sgaGlkZVNjcm9sbFRvRW5kQnV0dG9uIH1dID0gdXNlU3R5bGVPcHRpb25zKCk7XG5cbiAgY29uc3QgeyBzcGVlY2hTeW50aGVzaXMsIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSB9ID0gd2ViU3BlZWNoUG9ueWZpbGwgfHwge307XG5cbiAgLy8gV2UgdXNlIDItcGFzcyBhcHByb2FjaCBmb3IgcmVuZGVyaW5nIGFjdGl2aXRpZXMsIGZvciBzaG93L2hpZGUgdGltZXN0YW1wIGdyb3VwaW5nLlxuICAvLyBVbnRpbCB0aGUgYWN0aXZpdHkgcGFzcyB0aHJ1IG1pZGRsZXdhcmUsIHdlIG5ldmVyIGtub3cgaWYgaXQgaXMgZ29pbmcgdG8gc2hvdyB1cC5cbiAgLy8gQWZ0ZXIgd2Uga25vdyB3aGljaCBhY3Rpdml0aWVzIHdpbGwgc2hvdyB1cCwgd2UgY2FuIGNvbXB1dGUgd2hpY2ggYWN0aXZpdHkgd2lsbCBzaG93IHRpbWVzdGFtcHMuXG4gIC8vIElmIHRoZSBhY3Rpdml0eSBkb2VzIG5vdCByZW5kZXIsIGl0IHdpbGwgbm90IGJlIHNwb2tlbiBpZiB0ZXh0LXRvLXNwZWVjaCBpcyBlbmFibGVkLlxuICBjb25zdCBhY3Rpdml0eUVsZW1lbnRzID0gYWN0aXZpdGllcy5yZWR1Y2UoKGFjdGl2aXR5RWxlbWVudHMsIGFjdGl2aXR5KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFjdGl2aXR5UmVuZGVyZXIoe1xuICAgICAgYWN0aXZpdHksXG4gICAgICB0aW1lc3RhbXBDbGFzc05hbWU6ICd0cmFuc2NyaXB0LXRpbWVzdGFtcCdcbiAgICB9KSgoeyBhdHRhY2htZW50IH0pID0+IGF0dGFjaG1lbnRSZW5kZXJlcih7IGFjdGl2aXR5LCBhdHRhY2htZW50IH0pKTtcblxuICAgIGVsZW1lbnQgJiZcbiAgICAgIGFjdGl2aXR5RWxlbWVudHMucHVzaCh7XG4gICAgICAgIGFjdGl2aXR5LFxuICAgICAgICBlbGVtZW50XG4gICAgICB9KTtcblxuICAgIHJldHVybiBhY3Rpdml0eUVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJyl9IHJvbGU9XCJsb2dcIj5cbiAgICAgIDxTY3JvbGxUb0JvdHRvbVBhbmVsIGNsYXNzTmFtZT17UEFORUxfQ1NTICsgJyd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RklMTEVSX0NTU30gLz5cbiAgICAgICAgPFNheUNvbXBvc2VyXG4gICAgICAgICAgLy8gVGhlc2UgYXJlIHByb3BzIGZvciBwYXNzaW5nIGluIFdlYiBTcGVlY2ggcG9ueWZpbGwsIHdoZXJlIHNwZWVjaCBzeW50aGVzaXMgcmVxdWlyZXMgdGhlc2UgdHdvIGNsYXNzL29iamVjdCB0byBiZSBwb255ZmlsbGVkLlxuICAgICAgICAgIHNwZWVjaFN5bnRoZXNpcz17c3BlZWNoU3ludGhlc2lzIHx8IGJ5cGFzc1NwZWVjaFN5bnRoZXNpc31cbiAgICAgICAgICBzcGVlY2hTeW50aGVzaXNVdHRlcmFuY2U9e1NwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSB8fCBCeXBhc3NTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2V9XG4gICAgICAgID5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGFyaWEtYXRvbWljPVwiZmFsc2VcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICAgIGFyaWEtcmVsZXZhbnQ9XCJhZGRpdGlvbnMgdGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoTElTVF9DU1MgKyAnJywgYWN0aXZpdGllc1N0eWxlU2V0ICsgJycpfVxuICAgICAgICAgICAgcm9sZT1cImxpc3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthY3Rpdml0eUVsZW1lbnRzLm1hcCgoeyBhY3Rpdml0eSwgZWxlbWVudCB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIG9mIGRpZmZlcmVuY2VzIGluIGJyb3dzZXIgaW1wbGVtZW50YXRpb25zLCBhcmlhLWxhYmVsPVwiIFwiIGlzIHVzZWQgdG8gbWFrZSB0aGUgc2NyZWVuIHJlYWRlciBub3QgcmVwZWF0IHRoZSBzYW1lIHRleHQgbXVsdGlwbGUgdGltZXMgaW4gQ2hyb21lIHY3NVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIgXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aXZpdHlTdHlsZVNldCArICcnLCB7XG4gICAgICAgICAgICAgICAgICAvLyBIaWRlIHRpbWVzdGFtcCBpZiBzYW1lIHRpbWVzdGFtcCBncm91cCB3aXRoIHRoZSBuZXh0IGFjdGl2aXR5XG4gICAgICAgICAgICAgICAgICAnaGlkZS10aW1lc3RhbXAnOiBzYW1lVGltZXN0YW1wR3JvdXAoXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LFxuICAgICAgICAgICAgICAgICAgICAoYWN0aXZpdHlFbGVtZW50c1tpbmRleCArIDFdIHx8IHt9KS5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBrZXk9eyhhY3Rpdml0eS5jaGFubmVsRGF0YSAmJiBhY3Rpdml0eS5jaGFubmVsRGF0YS5jbGllbnRBY3Rpdml0eUlEKSB8fCBhY3Rpdml0eS5pZCB8fCBpbmRleH1cbiAgICAgICAgICAgICAgICByb2xlPVwibGlzdGl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgICAgICAgICAgey8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIHVzZSBjb3JlL2RlZmluaXRpb25zL3NwZWFraW5nQWN0aXZpdHkgZm9yIHRoaXMgcHJlZGljYXRlIGluc3RlYWRcbiAgICAgICAgICAgICAgICBhY3Rpdml0eS5jaGFubmVsRGF0YSAmJiBhY3Rpdml0eS5jaGFubmVsRGF0YS5zcGVhayAmJiA8U3BlYWtBY3Rpdml0eSBhY3Rpdml0eT17YWN0aXZpdHl9IC8+fVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TYXlDb21wb3Nlcj5cbiAgICAgIDwvU2Nyb2xsVG9Cb3R0b21QYW5lbD5cbiAgICAgIHshaGlkZVNjcm9sbFRvRW5kQnV0dG9uICYmIDxTY3JvbGxUb0VuZEJ1dHRvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJhc2ljVHJhbnNjcmlwdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGdyb3VwVGltZXN0YW1wOiB0cnVlLFxuICB3ZWJTcGVlY2hQb255ZmlsbDogdW5kZWZpbmVkXG59O1xuXG5CYXNpY1RyYW5zY3JpcHQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ3JvdXBUaW1lc3RhbXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZF0pLFxuICB3ZWJTcGVlY2hQb255ZmlsbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzcGVlY2hTeW50aGVzaXM6IFByb3BUeXBlcy5hbnksXG4gICAgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlOiBQcm9wVHlwZXMuYW55XG4gIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGFjdGl2aXR5UmVuZGVyZXIsIGF0dGFjaG1lbnRSZW5kZXJlciwgZ3JvdXBUaW1lc3RhbXAsIHdlYlNwZWVjaFBvbnlmaWxsIH0pID0+ICh7XG4gIGFjdGl2aXR5UmVuZGVyZXIsXG4gIGF0dGFjaG1lbnRSZW5kZXJlcixcbiAgZ3JvdXBUaW1lc3RhbXAsXG4gIHdlYlNwZWVjaFBvbnlmaWxsXG59KSkoQmFzaWNUcmFuc2NyaXB0KTtcbiJdfQ==
