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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
        var direction = _ref.direction,
          disabled = _ref.disabled,
          focusSendBox = _ref.focusSendBox,
          language = _ref.language,
          scrollToEnd = _ref.scrollToEnd,
          sendBoxValue = _ref.sendBoxValue,
          setSendBox = _ref.setSendBox,
          stopDictate = _ref.stopDictate,
          submitSendBox = _ref.submitSendBox;
        return {
          direction: direction,
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
    direction = _ref3.direction,
    disabled = _ref3.disabled,
    language = _ref3.language,
    onChange = _ref3.onChange,
    onKeyPress = _ref3.onKeyPress,
    onSubmit = _ref3.onSubmit,
    styleSet = _ref3.styleSet,
    value = _ref3.value;
  var typeYourMessageString = (0, _Localize.localize)('Type your message', language);
  var sendBoxTextWrap = styleSet.options.sendBoxTextWrap;
  return _react.default.createElement(
    'form',
    {
      className: (0, _classnames.default)(
        ROOT_CSS + '',
        styleSet.sendBoxTextArea + '',
        styleSet.sendBoxTextBox + '',
        className + ''
      ),
      onSubmit: onSubmit
    },
    _react.default.createElement(_TypeFocusSink.Context.Consumer, null, function(_ref4) {
      var sendFocusRef = _ref4.sendFocusRef;
      return !sendBoxTextWrap
        ? _react.default.createElement('input', {
            'aria-label': typeYourMessageString,
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
              'aria-label': typeYourMessageString,
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
  direction: 'ltr',
  disabled: false,
  value: ''
};
TextBox.propTypes = {
  className: _propTypes.default.string,
  direction: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onKeyPress: _propTypes.default.func.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      sendBoxTextWrap: _propTypes.default.bool.isRequired
    }).isRequired,
    sendBoxTextArea: _propTypes.default.any.isRequired,
    sendBoxTextBox: _propTypes.default.any.isRequired
  }).isRequired,
  value: _propTypes.default.string
};

var _default = connectSendTextBox(function(_ref5) {
  var styleSet = _ref5.styleSet;
  return {
    styleSet: styleSet
  };
})(TextBox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1RleHRCb3guanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleCIsImNvbm5lY3RTZW5kVGV4dEJveCIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJkaXJlY3Rpb24iLCJkaXNhYmxlZCIsImZvY3VzU2VuZEJveCIsImxhbmd1YWdlIiwic2Nyb2xsVG9FbmQiLCJzZW5kQm94VmFsdWUiLCJzZXRTZW5kQm94Iiwic3RvcERpY3RhdGUiLCJzdWJtaXRTZW5kQm94Iiwib25DaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJldmVudCIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJvblN1Ym1pdCIsIlRleHRCb3giLCJjbGFzc05hbWUiLCJzdHlsZVNldCIsInR5cGVZb3VyTWVzc2FnZVN0cmluZyIsInNlbmRCb3hUZXh0V3JhcCIsIm9wdGlvbnMiLCJzZW5kQm94VGV4dEFyZWEiLCJzZW5kQm94VGV4dEJveCIsInNlbmRGb2N1c1JlZiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBR25CLG9CQUFrQjtBQUNoQkMsSUFBQUEsSUFBSSxFQUFFO0FBRFU7QUFIQyxDQUFKLENBQWpCOztBQVFBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxvQ0FBSUMsU0FBSjtBQUFJQSxJQUFBQSxTQUFKO0FBQUE7O0FBQUEsU0FDekJDLHlDQUNFO0FBQUEsUUFDRUMsU0FERixRQUNFQSxTQURGO0FBQUEsUUFFRUMsUUFGRixR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RU0sbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDdkJaLE1BQUFBLGVBQWUsRUFBRU8sbUJBQVVFLElBQVYsQ0FBZUM7QUFEVCxLQUFoQixFQUVOQSxVQUhxQjtBQUl4QlIsSUFBQUEsZUFBZSxFQUFFSyxtQkFBVU0sR0FBVixDQUFjSCxVQUpQO0FBS3hCUCxJQUFBQSxjQUFjLEVBQUVJLG1CQUFVTSxHQUFWLENBQWNIO0FBTE4sR0FBaEIsRUFNUEEsVUFkZTtBQWVsQnRCLEVBQUFBLEtBQUssRUFBRW1CLG1CQUFVQztBQWZDLENBQXBCOztlQWtCZWpDLGtCQUFrQixDQUFDO0FBQUEsTUFBR3VCLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQUQsQ0FBbEIsQ0FBcURGLE9BQXJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGV4dCBhcyBUeXBlRm9jdXNTaW5rQ29udGV4dCB9IGZyb20gJy4uL1V0aWxzL1R5cGVGb2N1c1NpbmsnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuXG4gICcmID4gZGl2LCBpbnB1dCc6IHtcbiAgICBmbGV4OiAxXG4gIH1cbn0pO1xuXG5jb25zdCBjb25uZWN0U2VuZFRleHRCb3ggPSAoLi4uc2VsZWN0b3JzKSA9PlxuICBjb25uZWN0VG9XZWJDaGF0KFxuICAgICh7XG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGZvY3VzU2VuZEJveCxcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc2Nyb2xsVG9FbmQsXG4gICAgICBzZW5kQm94VmFsdWUsXG4gICAgICBzZXRTZW5kQm94LFxuICAgICAgc3RvcERpY3RhdGUsXG4gICAgICBzdWJtaXRTZW5kQm94XG4gICAgfSkgPT4gKHtcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBvbkNoYW5nZTogKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICBzZXRTZW5kQm94KHZhbHVlKTtcbiAgICAgICAgc3RvcERpY3RhdGUoKTtcbiAgICAgIH0sXG4gICAgICBvbktleVByZXNzOiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBzaGlmdEtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyAmJiAhc2hpZnRLZXkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKHNlbmRCb3hWYWx1ZSkge1xuICAgICAgICAgICAgc2Nyb2xsVG9FbmQoKTtcbiAgICAgICAgICAgIHN1Ym1pdFNlbmRCb3goKTtcbiAgICAgICAgICAgIGZvY3VzU2VuZEJveCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU3VibWl0OiBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ29uc2lkZXIgY2xlYXJpbmcgdGhlIHNlbmQgYm94IG9ubHkgYWZ0ZXIgd2UgcmVjZWl2ZWQgUE9TVF9BQ1RJVklUWV9QRU5ESU5HXG4gICAgICAgIC8vIEUuZy4gaWYgdGhlIGNvbm5lY3Rpb24gaXMgYmFkLCBzZW5kaW5nIHRoZSBtZXNzYWdlIGVzc2VudGlhbGx5IGRvIG5vdGhpbmcgYnV0IGp1c3QgY2xlYXJpbmcgdGhlIHNlbmQgYm94XG5cbiAgICAgICAgaWYgKHNlbmRCb3hWYWx1ZSkge1xuICAgICAgICAgIHNjcm9sbFRvRW5kKCk7XG4gICAgICAgICAgc3VibWl0U2VuZEJveCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdmFsdWU6IHNlbmRCb3hWYWx1ZVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBUZXh0Qm94ID0gKHsgY2xhc3NOYW1lLCBkaXJlY3Rpb24sIGRpc2FibGVkLCBsYW5ndWFnZSwgb25DaGFuZ2UsIG9uS2V5UHJlc3MsIG9uU3VibWl0LCBzdHlsZVNldCwgdmFsdWUgfSkgPT4ge1xuICBjb25zdCB0eXBlWW91ck1lc3NhZ2VTdHJpbmcgPSBsb2NhbGl6ZSgnVHlwZSB5b3VyIG1lc3NhZ2UnLCBsYW5ndWFnZSk7XG4gIGNvbnN0IHtcbiAgICBvcHRpb25zOiB7IHNlbmRCb3hUZXh0V3JhcCB9XG4gIH0gPSBzdHlsZVNldDtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgc3R5bGVTZXQuc2VuZEJveFRleHRBcmVhICsgJycsIHN0eWxlU2V0LnNlbmRCb3hUZXh0Qm94ICsgJycsIGNsYXNzTmFtZSArICcnKX1cbiAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICA+XG4gICAgICB7XG4gICAgICAgIDxUeXBlRm9jdXNTaW5rQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICB7KHsgc2VuZEZvY3VzUmVmIH0pID0+XG4gICAgICAgICAgICAhc2VuZEJveFRleHRXcmFwID8gKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0eXBlWW91ck1lc3NhZ2VTdHJpbmd9XG4gICAgICAgICAgICAgICAgZGF0YS1pZD1cIndlYmNoYXQtc2VuZGJveC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHlwZVlvdXJNZXNzYWdlU3RyaW5nfVxuICAgICAgICAgICAgICAgIHJlZj17c2VuZEZvY3VzUmVmfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dHlwZVlvdXJNZXNzYWdlU3RyaW5nfVxuICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIndlYmNoYXQtc2VuZGJveC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3R5cGVZb3VyTWVzc2FnZVN0cmluZ31cbiAgICAgICAgICAgICAgICAgIHJlZj17c2VuZEZvY3VzUmVmfVxuICAgICAgICAgICAgICAgICAgcm93cz1cIjFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj57dmFsdWUgKyAnXFxuJ308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L1R5cGVGb2N1c1NpbmtDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgfVxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cblRleHRCb3guZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBkaXJlY3Rpb246ICdsdHInLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHZhbHVlOiAnJ1xufTtcblxuVGV4dEJveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbktleVByZXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlbmRCb3hUZXh0V3JhcDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc2VuZEJveFRleHRBcmVhOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgc2VuZEJveFRleHRCb3g6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFNlbmRUZXh0Qm94KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShUZXh0Qm94KTtcblxuZXhwb3J0IHsgY29ubmVjdFNlbmRUZXh0Qm94IH07XG4iXX0=
