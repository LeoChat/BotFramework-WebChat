'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSendTextBox = exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _TypeFocusSink = require('../Utils/TypeFocusSink');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

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

var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  '& > div, input': {
    flex: 1
  }
});

var connectSendTextBox = function connectSendTextBox() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var disabled = _ref.disabled,
          focusSendBox = _ref.focusSendBox,
          language = _ref.language,
          scrollToEnd = _ref.scrollToEnd,
          sendBoxValue = _ref.sendBoxValue,
          setSendBox = _ref.setSendBox,
          stopDictate = _ref.stopDictate,
          submitSendBox = _ref.submitSendBox;
        return {
          disabled: disabled,
          language: language,
          onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            setSendBox(value);
            stopDictate();
          },
          onKeyPress: function onKeyPress(event) {
            var key = event.key,
              shiftKey = event.shiftKey;

            if (key === 'Enter' && !shiftKey) {
              event.preventDefault();

              if (sendBoxValue) {
                scrollToEnd();
                submitSendBox();
                focusSendBox();
              }
            }
          },
          onSubmit: function onSubmit(event) {
            event.preventDefault(); // Consider clearing the send box only after we received POST_ACTIVITY_PENDING
            // E.g. if the connection is bad, sending the message essentially do nothing but just clearing the send box

            if (sendBoxValue) {
              scrollToEnd();
              submitSendBox();
            }
          },
          value: sendBoxValue
        };
      }
    ].concat(selectors)
  );
};

exports.connectSendTextBox = connectSendTextBox;

var TextBox = function TextBox(_ref3) {
  var className = _ref3.className,
    disabled = _ref3.disabled,
    onChange = _ref3.onChange,
    onKeyPress = _ref3.onKeyPress,
    onSubmit = _ref3.onSubmit,
    value = _ref3.value;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    sendBoxTextWrap = _useStyleOptions2[0].sendBoxTextWrap;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    _useStyleSet2$ = _useStyleSet2[0],
    sendBoxTextAreaStyleSet = _useStyleSet2$.sendBoxTextArea,
    sendBoxTextBoxStyleSet = _useStyleSet2$.sendBoxTextBox;

  var sendBoxString = (0, _useLocalize.default)('Sendbox');
  var typeYourMessageString = (0, _useLocalize.default)('Type your message');
  return _react.default.createElement(
    'form',
    {
      className: (0, _classnames.default)(
        ROOT_CSS + '',
        sendBoxTextAreaStyleSet + '',
        sendBoxTextBoxStyleSet + '',
        className + ''
      ),
      onSubmit: onSubmit
    },
    _react.default.createElement(_TypeFocusSink.Context.Consumer, null, function(_ref4) {
      var sendFocusRef = _ref4.sendFocusRef;
      return !sendBoxTextWrap
        ? _react.default.createElement('input', {
            'aria-label': sendBoxString,
            'data-id': 'webchat-sendbox-input',
            disabled: disabled,
            onChange: onChange,
            placeholder: typeYourMessageString,
            ref: sendFocusRef,
            type: 'text',
            value: value
          })
        : _react.default.createElement(
            'div',
            null,
            _react.default.createElement('textarea', {
              'aria-label': sendBoxString,
              'data-id': 'webchat-sendbox-input',
              disabled: disabled,
              onChange: onChange,
              onKeyPress: onKeyPress,
              placeholder: typeYourMessageString,
              ref: sendFocusRef,
              rows: '1',
              value: value
            }),
            _react.default.createElement('div', null, value + '\n')
          );
    })
  );
};

TextBox.defaultProps = {
  className: '',
  disabled: false,
  value: ''
};
TextBox.propTypes = {
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  onKeyPress: _propTypes.default.func.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  value: _propTypes.default.string
};

var _default = connectSendTextBox()(TextBox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1RleHRCb3guanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleCIsImNvbm5lY3RTZW5kVGV4dEJveCIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJkaXNhYmxlZCIsImZvY3VzU2VuZEJveCIsImxhbmd1YWdlIiwic2Nyb2xsVG9FbmQiLCJzZW5kQm94VmFsdWUiLCJzZXRTZW5kQm94Iiwic3RvcERpY3RhdGUiLCJzdWJtaXRTZW5kQm94Iiwib25DaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJldmVudCIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJvblN1Ym1pdCIsIlRleHRCb3giLCJjbGFzc05hbWUiLCJzZW5kQm94VGV4dFdyYXAiLCJzZW5kQm94VGV4dEFyZWFTdHlsZVNldCIsInNlbmRCb3hUZXh0QXJlYSIsInNlbmRCb3hUZXh0Qm94U3R5bGVTZXQiLCJzZW5kQm94VGV4dEJveCIsInNlbmRCb3hTdHJpbmciLCJ0eXBlWW91ck1lc3NhZ2VTdHJpbmciLCJzZW5kRm9jdXNSZWYiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxPQUFPLEVBQUUsTUFEVTtBQUduQixvQkFBa0I7QUFDaEJDLElBQUFBLElBQUksRUFBRTtBQURVO0FBSEMsQ0FBSixDQUFqQjs7QUFRQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsb0NBQUlDLFNBQUo7QUFBSUEsSUFBQUEsU0FBSjtBQUFBOztBQUFBLFNBQ3pCQyx5Q0FDRTtBQUFB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R0FBRyxFQUFFQyxZQU5QO0FBT0UsTUFBQSxJQUFJLEVBQUMsTUFQUDtBQVFFLE1BQUEsS0FBSyxFQUFFakI7QUFSVCxNQURGLEdBWUUsMENBQ0U7QUFDRSxvQkFBWWUsYUFEZDtBQUVFLGlCQUFRLHVCQUZWO0FBR0UsTUFBQSxRQUFRLEVBQUV4QixRQUhaO0FBSUUsTUFBQSxRQUFRLEVBQUVRLFFBSlo7QUFLRSxNQUFBLFVBQVUsRUFBRUcsVUFMZDtBQU1FLE1BQUEsV0FBVyxFQUFFYyxxQkFOZjtBQU9FLE1BQUEsR0FBRyxFQUFFQyxZQVBQO0FBUUUsTUFBQSxJQUFJLEVBQUMsR0FSUDtBQVNFLE1BQUEsS0FBSyxFQUFFakI7QUFUVCxNQURGLEVBWUUsMENBQU1BLEtBQUssR0FBRyxJQUFkLENBWkYsQ0FiSDtBQUFBLEdBREgsQ0FMSixDQURGO0FBd0NELENBOUNEOztBQWdEQVEsT0FBTyxDQUFDVSxZQUFSLEdBQXVCO0FBQ3JCVCxFQUFBQSxTQUFTLEVBQUUsRUFEVTtBQUVyQmxCLEVBQUFBLFFBQVEsRUFBRSxLQUZXO0FBR3JCUyxFQUFBQSxLQUFLLEVBQUU7QUFIYyxDQUF2QjtBQU1BUSxPQUFPLENBQUNXLFNBQVIsR0FBb0I7QUFDbEJWLEVBQUFBLFNBQVMsRUFBRVcsbUJBQVVDLE1BREg7QUFFbEI5QixFQUFBQSxRQUFRLEVBQUU2QixtQkFBVUUsSUFGRjtBQUdsQnZCLEVBQUFBLFFBQVEsRUFBRXFCLG1CQUFVRyxJQUFWLENBQWVDLFVBSFA7QUFJbEJ0QixFQUFBQSxVQUFVLEVBQUVrQixtQkFBVUcsSUFBVixDQUFlQyxVQUpUO0FBS2xCakIsRUFBQUEsUUFBUSxFQUFFYSxtQkFBVUcsSUFBVixDQUFlQyxVQUxQO0FBTWxCeEIsRUFBQUEsS0FBSyxFQUFFb0IsbUJBQVVDO0FBTkMsQ0FBcEI7O2VBU2VqQyxrQkFBa0IsR0FBR29CLE9BQUgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIFR5cGVGb2N1c1NpbmtDb250ZXh0IH0gZnJvbSAnLi4vVXRpbHMvVHlwZUZvY3VzU2luayc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCB1c2VMb2NhbGl6ZSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGl6ZSc7XG5pbXBvcnQgdXNlU3R5bGVPcHRpb25zIGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlT3B0aW9ucyc7XG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcblxuICAnJiA+IGRpdiwgaW5wdXQnOiB7XG4gICAgZmxleDogMVxuICB9XG59KTtcblxuY29uc3QgY29ubmVjdFNlbmRUZXh0Qm94ID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoeyBkaXNhYmxlZCwgZm9jdXNTZW5kQm94LCBsYW5ndWFnZSwgc2Nyb2xsVG9FbmQsIHNlbmRCb3hWYWx1ZSwgc2V0U2VuZEJveCwgc3RvcERpY3RhdGUsIHN1Ym1pdFNlbmRCb3ggfSkgPT4gKHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBvbkNoYW5nZTogKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICBzZXRTZW5kQm94KHZhbHVlKTtcbiAgICAgICAgc3RvcERpY3RhdGUoKTtcbiAgICAgIH0sXG4gICAgICBvbktleVByZXNzOiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBzaGlmdEtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyAmJiAhc2hpZnRLZXkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKHNlbmRCb3hWYWx1ZSkge1xuICAgICAgICAgICAgc2Nyb2xsVG9FbmQoKTtcbiAgICAgICAgICAgIHN1Ym1pdFNlbmRCb3goKTtcbiAgICAgICAgICAgIGZvY3VzU2VuZEJveCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU3VibWl0OiBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ29uc2lkZXIgY2xlYXJpbmcgdGhlIHNlbmQgYm94IG9ubHkgYWZ0ZXIgd2UgcmVjZWl2ZWQgUE9TVF9BQ1RJVklUWV9QRU5ESU5HXG4gICAgICAgIC8vIEUuZy4gaWYgdGhlIGNvbm5lY3Rpb24gaXMgYmFkLCBzZW5kaW5nIHRoZSBtZXNzYWdlIGVzc2VudGlhbGx5IGRvIG5vdGhpbmcgYnV0IGp1c3QgY2xlYXJpbmcgdGhlIHNlbmQgYm94XG5cbiAgICAgICAgaWYgKHNlbmRCb3hWYWx1ZSkge1xuICAgICAgICAgIHNjcm9sbFRvRW5kKCk7XG4gICAgICAgICAgc3VibWl0U2VuZEJveCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdmFsdWU6IHNlbmRCb3hWYWx1ZVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBUZXh0Qm94ID0gKHsgY2xhc3NOYW1lLCBkaXNhYmxlZCwgb25DaGFuZ2UsIG9uS2V5UHJlc3MsIG9uU3VibWl0LCB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IFt7IHNlbmRCb3hUZXh0V3JhcCB9XSA9IHVzZVN0eWxlT3B0aW9ucygpO1xuICBjb25zdCBbeyBzZW5kQm94VGV4dEFyZWE6IHNlbmRCb3hUZXh0QXJlYVN0eWxlU2V0LCBzZW5kQm94VGV4dEJveDogc2VuZEJveFRleHRCb3hTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG4gIGNvbnN0IHNlbmRCb3hTdHJpbmcgPSB1c2VMb2NhbGl6ZSgnU2VuZGJveCcpO1xuICBjb25zdCB0eXBlWW91ck1lc3NhZ2VTdHJpbmcgPSB1c2VMb2NhbGl6ZSgnVHlwZSB5b3VyIG1lc3NhZ2UnKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgc2VuZEJveFRleHRBcmVhU3R5bGVTZXQgKyAnJywgc2VuZEJveFRleHRCb3hTdHlsZVNldCArICcnLCBjbGFzc05hbWUgKyAnJyl9XG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgPlxuICAgICAge1xuICAgICAgICA8VHlwZUZvY3VzU2lua0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgeyh7IHNlbmRGb2N1c1JlZiB9KSA9PlxuICAgICAgICAgICAgIXNlbmRCb3hUZXh0V3JhcCA/IChcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VuZEJveFN0cmluZ31cbiAgICAgICAgICAgICAgICBkYXRhLWlkPVwid2ViY2hhdC1zZW5kYm94LWlucHV0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0eXBlWW91ck1lc3NhZ2VTdHJpbmd9XG4gICAgICAgICAgICAgICAgcmVmPXtzZW5kRm9jdXNSZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzZW5kQm94U3RyaW5nfVxuICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIndlYmNoYXQtc2VuZGJveC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3R5cGVZb3VyTWVzc2FnZVN0cmluZ31cbiAgICAgICAgICAgICAgICAgIHJlZj17c2VuZEZvY3VzUmVmfVxuICAgICAgICAgICAgICAgICAgcm93cz1cIjFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj57dmFsdWUgKyAnXFxuJ308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L1R5cGVGb2N1c1NpbmtDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgfVxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cblRleHRCb3guZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHZhbHVlOiAnJ1xufTtcblxuVGV4dEJveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U2VuZFRleHRCb3goKShUZXh0Qm94KTtcblxuZXhwb3J0IHsgY29ubmVjdFNlbmRUZXh0Qm94IH07XG4iXX0=
