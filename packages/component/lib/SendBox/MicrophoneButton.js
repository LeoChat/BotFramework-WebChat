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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _MicrophoneIcon = _interopRequireDefault(require('./Assets/MicrophoneIcon'));

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
          _ref$webSpeechPonyfil = _ref.webSpeechPonyfill;
        _ref$webSpeechPonyfil = _ref$webSpeechPonyfil === void 0 ? {} : _ref$webSpeechPonyfil;
        var speechSynthesis = _ref$webSpeechPonyfil.speechSynthesis,
          SpeechSynthesisUtterance = _ref$webSpeechPonyfil.SpeechSynthesisUtterance;
        return {
          click: function click() {
            if (dictateState === DictateState.STARTING || dictateState === DictateState.DICTATING) {
              stopDictate();
              setSendBox(dictateInterims.join(' '));
            } else {
              startDictate();
            }

            primeSpeechSynthesis(speechSynthesis, SpeechSynthesisUtterance);
          },
          dictating: dictateState === DictateState.DICTATING,
          disabled: disabled || dictateState === DictateState.STARTING || dictateState === DictateState.STOPPING,
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
    disabled = _ref2.disabled,
    language = _ref2.language,
    styleSet = _ref2.styleSet;
  return _react.default.createElement(
    'div',
    {
      'aria-controls': 'webchatSendBoxMicrophoneButton',
      className: (0, _classnames.default)(styleSet.microphoneButton + '', ROOT_CSS + '', className + '', {
        dictating: dictating
      })
    },
    _react.default.createElement(
      _IconButton.default,
      {
        alt: (0, _Localize.localize)('Speak', language),
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
      (0, _Localize.localize)(dictating ? 'Microphone on' : 'Microphone off', language)
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
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    microphoneButton: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = connectMicrophoneButton(function(_ref3) {
  var styleSet = _ref3.styleSet;
  return {
    styleSet: styleSet
  };
})(MicrophoneButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L01pY3JvcGhvbmVCdXR0b24uanMiXSwibmFtZXMiOlsiRGljdGF0ZVN0YXRlIiwiQ29uc3RhbnRzIiwiUk9PVF9DU1MiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY29sb3IiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsImNvbm5lY3RNaWNyb3Bob25lQnV0dG9uIiwicHJpbWVTcGVlY2hTeW50aGVzaXMiLCJzcGVlY2hTeW50aGVzaXMiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJ1dHRlcmFuY2UiLCJnZXRWb2ljZXMiLCJ2b2ljZSIsInNwZWFrIiwic2VsZWN0b3JzIiwiY29ubmVjdFRvV2ViQ2hhdCIsImRpc2FibGVkIiwiZGljdGF0ZUludGVyaW1zIiwiZGljdGF0ZVN0YXRlIiwibGFuZ3VhZ2UiLCJzZXRTZW5kQm94Iiwic3RhcnREaWN0YXRlIiwic3RvcERpY3RhdGUiLCJ3ZWJTcGVlY2hQb255ZmlsbCIsImNsaWNrIiwiU1RBUlRJTkciLCJESUNUQVRJTkciLCJqb2luIiwiZGljdGF0aW5nIiwiU1RPUFBJTkciLCJNaWNyb3Bob25lQnV0dG9uIiwiY2xhc3NOYW1lIiwic3R5bGVTZXQiLCJtaWNyb3Bob25lQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwic2hhcGUiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRVFBLFksR0FBaUJDLGtDLENBQWpCRCxZO0FBRVIsSUFBTUUsUUFBUSxHQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxPQUFPLEVBQUUsTUFEVTtBQUVuQkMsRUFBQUEsTUFBTSxFQUFFLE1BRlc7QUFJbkI7QUFFQSxr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SCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBRCxDQUF2QixDQUEwREYsZ0JBQTFELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciBhcmlhLWNvbnRyb2xzLlxuLyogZXNsaW50IHJlYWN0L2ZvcmJpZC1kb20tcHJvcHM6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nO1xuaW1wb3J0IE1pY3JvcGhvbmVJY29uIGZyb20gJy4vQXNzZXRzL01pY3JvcGhvbmVJY29uJztcblxuY29uc3QgeyBEaWN0YXRlU3RhdGUgfSA9IENvbnN0YW50cztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGhlaWdodDogJzEwMCUnLFxuXG4gIC8vIC5zci1vbmx5IC0gVGhpcyBjb21wb25lbnQgaXMgaW50ZW5kZWQgdG8gYmUgaW52aXNpYmxlIHRvIHRoZSB2aXN1YWwgV2ViIENoYXQgdXNlciwgYnV0IHJlYWQgYnkgdGhlIEFUIHdoZW4gdXNpbmcgYSBzY3JlZW4gcmVhZGVyXG5cbiAgJyYgPiAuc3Itb25seSc6IHtcbiAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBoZWlnaHQ6IDEsXG4gICAgbGVmdDogLTEwMDAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd2lkdGg6IDFcbiAgfVxufSk7XG5cbmNvbnN0IGNvbm5lY3RNaWNyb3Bob25lQnV0dG9uID0gKC4uLnNlbGVjdG9ycykgPT4ge1xuICBjb25zdCBwcmltZVNwZWVjaFN5bnRoZXNpcyA9IG1lbW9pemUoKHNwZWVjaFN5bnRoZXNpcywgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKSA9PiB7XG4gICAgaWYgKHNwZWVjaFN5bnRoZXNpcyAmJiBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UpIHtcbiAgICAgIGNvbnN0IHV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoJycpO1xuXG4gICAgICBbdXR0ZXJhbmNlLnZvaWNlXSA9IHNwZWVjaFN5bnRoZXNpcy5nZXRWb2ljZXMoKTtcbiAgICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayh1dHRlcmFuY2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGljdGF0ZUludGVyaW1zLFxuICAgICAgZGljdGF0ZVN0YXRlLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzZXRTZW5kQm94LFxuICAgICAgc3RhcnREaWN0YXRlLFxuICAgICAgc3RvcERpY3RhdGUsXG4gICAgICB3ZWJTcGVlY2hQb255ZmlsbDogeyBzcGVlY2hTeW50aGVzaXMsIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSB9ID0ge31cbiAgICB9KSA9PiAoe1xuICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgaWYgKGRpY3RhdGVTdGF0ZSA9PT0gRGljdGF0ZVN0YXRlLlNUQVJUSU5HIHx8IGRpY3RhdGVTdGF0ZSA9PT0gRGljdGF0ZVN0YXRlLkRJQ1RBVElORykge1xuICAgICAgICAgIHN0b3BEaWN0YXRlKCk7XG4gICAgICAgICAgc2V0U2VuZEJveChkaWN0YXRlSW50ZXJpbXMuam9pbignICcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydERpY3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW1lU3BlZWNoU3ludGhlc2lzKHNwZWVjaFN5bnRoZXNpcywgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKTtcbiAgICAgIH0sXG4gICAgICBkaWN0YXRpbmc6IGRpY3RhdGVTdGF0ZSA9PT0gRGljdGF0ZVN0YXRlLkRJQ1RBVElORyxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAoZGljdGF0ZVN0YXRlID09PSBEaWN0YXRlU3RhdGUuU1RBUlRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBEaWN0YXRlU3RhdGUuU1RPUFBJTkcpLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcbn07XG5cbmNvbnN0IE1pY3JvcGhvbmVCdXR0b24gPSAoeyBjbGFzc05hbWUsIGNsaWNrLCBkaWN0YXRpbmcsIGRpc2FibGVkLCBsYW5ndWFnZSwgc3R5bGVTZXQgfSkgPT4gKFxuICA8ZGl2XG4gICAgYXJpYS1jb250cm9scz1cIndlYmNoYXRTZW5kQm94TWljcm9waG9uZUJ1dHRvblwiXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlU2V0Lm1pY3JvcGhvbmVCdXR0b24gKyAnJywgUk9PVF9DU1MgKyAnJywgY2xhc3NOYW1lICsgJycsIHsgZGljdGF0aW5nIH0pfVxuICA+XG4gICAgPEljb25CdXR0b24gYWx0PXtsb2NhbGl6ZSgnU3BlYWsnLCBsYW5ndWFnZSl9IGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17Y2xpY2t9PlxuICAgICAgPE1pY3JvcGhvbmVJY29uIC8+XG4gICAgPC9JY29uQnV0dG9uPlxuICAgIDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3NOYW1lPVwic3Itb25seVwiIGlkPVwid2ViY2hhdFNlbmRCb3hNaWNyb3Bob25lQnV0dG9uXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAge2xvY2FsaXplKGRpY3RhdGluZyA/ICdNaWNyb3Bob25lIG9uJyA6ICdNaWNyb3Bob25lIG9mZicsIGxhbmd1YWdlKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5NaWNyb3Bob25lQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGljdGF0aW5nOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5NaWNyb3Bob25lQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGljdGF0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtaWNyb3Bob25lQnV0dG9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1pY3JvcGhvbmVCdXR0b24oKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKE1pY3JvcGhvbmVCdXR0b24pO1xuXG5leHBvcnQgeyBjb25uZWN0TWljcm9waG9uZUJ1dHRvbiB9O1xuIl19
