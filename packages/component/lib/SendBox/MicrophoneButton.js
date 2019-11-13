'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectMicrophoneButton = exports.default = void 0;

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _memoizeOne = _interopRequireDefault(require('memoize-one'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _MicrophoneIcon = _interopRequireDefault(require('./Assets/MicrophoneIcon'));

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

var DictateState = _botframeworkWebchatCore.Constants.DictateState;
var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  height: '100%',
  // .sr-only - This component is intended to be invisible to the visual Web Chat user, but read by the AT when using a screen reader
  '& > .sr-only': {
    color: 'transparent',
    height: 1,
    left: -10000,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    width: 1
  }
});

var connectMicrophoneButton = function connectMicrophoneButton() {
  var primeSpeechSynthesis = (0, _memoizeOne.default)(function(speechSynthesis, SpeechSynthesisUtterance) {
    if (speechSynthesis && SpeechSynthesisUtterance) {
      var utterance = new SpeechSynthesisUtterance('');

      var _speechSynthesis$getV = speechSynthesis.getVoices();

      var _speechSynthesis$getV2 = _slicedToArray(_speechSynthesis$getV, 1);

      utterance.voice = _speechSynthesis$getV2[0];
      speechSynthesis.speak(utterance);
    }
  });

  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var disabled = _ref.disabled,
          dictateInterims = _ref.dictateInterims,
          dictateState = _ref.dictateState,
          language = _ref.language,
          setSendBox = _ref.setSendBox,
          startDictate = _ref.startDictate,
          stopDictate = _ref.stopDictate,
          stopSpeakingActivity = _ref.stopSpeakingActivity,
          _ref$webSpeechPonyfil = _ref.webSpeechPonyfill;
        _ref$webSpeechPonyfil = _ref$webSpeechPonyfil === void 0 ? {} : _ref$webSpeechPonyfil;
        var speechSynthesis = _ref$webSpeechPonyfil.speechSynthesis,
          SpeechSynthesisUtterance = _ref$webSpeechPonyfil.SpeechSynthesisUtterance;
        return {
          click: function click() {
            if (dictateState === DictateState.WILL_START) {
              stopSpeakingActivity();
            } else if (dictateState === DictateState.DICTATING) {
              stopDictate();
              setSendBox(dictateInterims.join(' '));
            } else {
              stopSpeakingActivity();
              startDictate();
            }

            primeSpeechSynthesis(speechSynthesis, SpeechSynthesisUtterance);
          },
          dictating: dictateState === DictateState.DICTATING,
          disabled: disabled || (dictateState === DictateState.STARTING && dictateState === DictateState.STOPPING),
          language: language
        };
      }
    ].concat(selectors)
  );
};

exports.connectMicrophoneButton = connectMicrophoneButton;

var MicrophoneButton = function MicrophoneButton(_ref2) {
  var className = _ref2.className,
    click = _ref2.click,
    dictating = _ref2.dictating,
    disabled = _ref2.disabled;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    microphoneButtonStyleSet = _useStyleSet2[0].microphoneButton;

  var iconButtonAltText = (0, _useLocalize.default)('Speak');
  var screenReaderText = (0, _useLocalize.default)(dictating ? 'Microphone on' : 'Microphone off');
  return _react.default.createElement(
    'div',
    {
      'aria-controls': 'webchatSendBoxMicrophoneButton',
      className: (0, _classnames.default)(microphoneButtonStyleSet + '', ROOT_CSS + '', className + '', {
        dictating: dictating
      })
    },
    _react.default.createElement(
      _IconButton.default,
      {
        alt: iconButtonAltText,
        disabled: disabled,
        onClick: click
      },
      _react.default.createElement(_MicrophoneIcon.default, null)
    ),
    _react.default.createElement(
      'div',
      {
        'aria-live': 'polite',
        className: 'sr-only',
        id: 'webchatSendBoxMicrophoneButton',
        role: 'status'
      },
      screenReaderText
    )
  );
};

MicrophoneButton.defaultProps = {
  className: '',
  dictating: false,
  disabled: false
};
MicrophoneButton.propTypes = {
  className: _propTypes.default.string,
  click: _propTypes.default.func.isRequired,
  dictating: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};

var _default = connectMicrophoneButton()(MicrophoneButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L01pY3JvcGhvbmVCdXR0b24uanMiXSwibmFtZXMiOlsiRGljdGF0ZVN0YXRlIiwiQ29uc3RhbnRzIiwiUk9PVF9DU1MiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY29sb3IiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsImNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIiwicHJpbWVTcGVlY2hTeW50aGVzaXMiLCJzcGVlY2hTeW50aGVzaXMiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJ1dHRlcmFuY2UiLCJnZXRWb2ljZXMiLCJ2b2ljZSIsInNwZWFrIiwic2VsZWN0b3JzIiwiY29ubmVjdFRvV2ViQ2hhdCIsImRpc2FibGVkIiwiZGljdGF0ZUludGVyaW1zIiwiZGljdGF0ZVN0YXRlIiwibGFuZ3VhZ2UiLCJzZXRTZW5kQm94Iiwic3RhcnREaWN0YXRlIiwic3RvcERpY3RhdGUiLCJzdG9wU3BlYWtpbmdBY3Rpdml0eSIsIndlYlNwZWVjaFBvbnlmaWxsIiwiY2xpY2siLCJXSUxMX1NUQVJUIiwiRElDVEFUSU5HIiwiam9pbiIsImRpY3RhdGluZyIsIlNUQVJUSU5HIiwiU1RPUFBJTkciLCJNaWNyb3Bob25lQnV0dG9uIiwiY2xhc3NOYW1lIiwibWljcm9waG9uZUJ1dHRvblN0eWxlU2V0IiwibWljcm9waG9uZUJ1dHRvbiIsImljb25CdXR0b25BbHRUZXh0Iiwic2NyZWVuUmVhZGVyVGV4dCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFUUEsWSxHQUFpQkMsa0MsQ0FBakJELFk7QUFFUixJQUFNRSxR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bUJBQVVJO0FBSk8sQ0FBN0I7O2VBT2V0Qyx1QkFBdUIsR0FBRzBCLGdCQUFILEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciBhcmlhLWNvbnRyb2xzLlxuLyogZXNsaW50IHJlYWN0L2ZvcmJpZC1kb20tcHJvcHM6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nO1xuaW1wb3J0IE1pY3JvcGhvbmVJY29uIGZyb20gJy4vQXNzZXRzL01pY3JvcGhvbmVJY29uJztcbmltcG9ydCB1c2VMb2NhbGl6ZSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGl6ZSc7XG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCB7IERpY3RhdGVTdGF0ZSB9ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG5cbiAgLy8gLnNyLW9ubHkgLSBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSBpbnZpc2libGUgdG8gdGhlIHZpc3VhbCBXZWIgQ2hhdCB1c2VyLCBidXQgcmVhZCBieSB0aGUgQVQgd2hlbiB1c2luZyBhIHNjcmVlbiByZWFkZXJcblxuICAnJiA+IC5zci1vbmx5Jzoge1xuICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGhlaWdodDogMSxcbiAgICBsZWZ0OiAtMTAwMDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB3aWR0aDogMVxuICB9XG59KTtcblxuY29uc3QgY29ubmVjdE1pY3JvcGhvbmVCdXR0b24gPSAoLi4uc2VsZWN0b3JzKSA9PiB7XG4gIGNvbnN0IHByaW1lU3BlZWNoU3ludGhlc2lzID0gbWVtb2l6ZSgoc3BlZWNoU3ludGhlc2lzLCBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UpID0+IHtcbiAgICBpZiAoc3BlZWNoU3ludGhlc2lzICYmIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSkge1xuICAgICAgY29uc3QgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgnJyk7XG5cbiAgICAgIFt1dHRlcmFuY2Uudm9pY2VdID0gc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpO1xuICAgICAgc3BlZWNoU3ludGhlc2lzLnNwZWFrKHV0dGVyYW5jZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoe1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaWN0YXRlSW50ZXJpbXMsXG4gICAgICBkaWN0YXRlU3RhdGUsXG4gICAgICBsYW5ndWFnZSxcbiAgICAgIHNldFNlbmRCb3gsXG4gICAgICBzdGFydERpY3RhdGUsXG4gICAgICBzdG9wRGljdGF0ZSxcbiAgICAgIHN0b3BTcGVha2luZ0FjdGl2aXR5LFxuICAgICAgd2ViU3BlZWNoUG9ueWZpbGw6IHsgc3BlZWNoU3ludGhlc2lzLCBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UgfSA9IHt9XG4gICAgfSkgPT4gKHtcbiAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgIGlmIChkaWN0YXRlU3RhdGUgPT09IERpY3RhdGVTdGF0ZS5XSUxMX1NUQVJUKSB7XG4gICAgICAgICAgc3RvcFNwZWFraW5nQWN0aXZpdHkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaWN0YXRlU3RhdGUgPT09IERpY3RhdGVTdGF0ZS5ESUNUQVRJTkcpIHtcbiAgICAgICAgICBzdG9wRGljdGF0ZSgpO1xuICAgICAgICAgIHNldFNlbmRCb3goZGljdGF0ZUludGVyaW1zLmpvaW4oJyAnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcFNwZWFraW5nQWN0aXZpdHkoKTtcbiAgICAgICAgICBzdGFydERpY3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW1lU3BlZWNoU3ludGhlc2lzKHNwZWVjaFN5bnRoZXNpcywgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKTtcbiAgICAgIH0sXG4gICAgICBkaWN0YXRpbmc6IGRpY3RhdGVTdGF0ZSA9PT0gRGljdGF0ZVN0YXRlLkRJQ1RBVElORyxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAoZGljdGF0ZVN0YXRlID09PSBEaWN0YXRlU3RhdGUuU1RBUlRJTkcgJiYgZGljdGF0ZVN0YXRlID09PSBEaWN0YXRlU3RhdGUuU1RPUFBJTkcpLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcbn07XG5cbmNvbnN0IE1pY3JvcGhvbmVCdXR0b24gPSAoeyBjbGFzc05hbWUsIGNsaWNrLCBkaWN0YXRpbmcsIGRpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgW3sgbWljcm9waG9uZUJ1dHRvbjogbWljcm9waG9uZUJ1dHRvblN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcbiAgY29uc3QgaWNvbkJ1dHRvbkFsdFRleHQgPSB1c2VMb2NhbGl6ZSgnU3BlYWsnKTtcbiAgY29uc3Qgc2NyZWVuUmVhZGVyVGV4dCA9IHVzZUxvY2FsaXplKGRpY3RhdGluZyA/ICdNaWNyb3Bob25lIG9uJyA6ICdNaWNyb3Bob25lIG9mZicpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgYXJpYS1jb250cm9scz1cIndlYmNoYXRTZW5kQm94TWljcm9waG9uZUJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMobWljcm9waG9uZUJ1dHRvblN0eWxlU2V0ICsgJycsIFJPT1RfQ1NTICsgJycsIGNsYXNzTmFtZSArICcnLCB7IGRpY3RhdGluZyB9KX1cbiAgICA+XG4gICAgICA8SWNvbkJ1dHRvbiBhbHQ9e2ljb25CdXR0b25BbHRUZXh0fSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e2NsaWNrfT5cbiAgICAgICAgPE1pY3JvcGhvbmVJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBpZD1cIndlYmNoYXRTZW5kQm94TWljcm9waG9uZUJ1dHRvblwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAge3NjcmVlblJlYWRlclRleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1pY3JvcGhvbmVCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBkaWN0YXRpbmc6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cbk1pY3JvcGhvbmVCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaWN0YXRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNaWNyb3Bob25lQnV0dG9uKCkoTWljcm9waG9uZUJ1dHRvbik7XG5cbmV4cG9ydCB7IGNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIH07XG4iXX0=
