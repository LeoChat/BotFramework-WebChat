'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSendButton = exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _SendIcon = _interopRequireDefault(require('./Assets/SendIcon'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var connectSendButton = function connectSendButton() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var disabled = _ref.disabled,
          language = _ref.language,
          submitSendBox = _ref.submitSendBox;
        return {
          disabled: disabled,
          language: language,
          submitSendBox: submitSendBox
        };
      }
    ].concat(selectors)
  );
};

exports.connectSendButton = connectSendButton;

var SendButton = function SendButton(_ref2) {
  var disabled = _ref2.disabled,
    submitSendBox = _ref2.submitSendBox;
  var altText = (0, _useLocalize.default)('Send');
  return _react.default.createElement(
    _IconButton.default,
    {
      alt: altText,
      disabled: disabled,
      onClick: submitSendBox
    },
    _react.default.createElement(_SendIcon.default, null)
  );
};

SendButton.defaultProps = {
  disabled: false
};
SendButton.propTypes = {
  disabled: _propTypes.default.bool,
  submitSendBox: _propTypes.default.func.isRequired
};

var _default = connectSendButton()(SendButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1NlbmRCdXR0b24uanMiXSwibmFtZXMiOlsiY29ubmVjdFNlbmRCdXR0b24iLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwiZGlzYWJsZWQiLCJsYW5ndWFnZSIsInN1Ym1pdFNlbmRCb3giLCJTZW5kQnV0dG9uIiwiYWx0VGV4dCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUN4QkMseUNBQ0U7QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhQyxRQUFiLFFBQWFBLFFBQWI7QUFBQSxRQUF1QkMsYUFBdkIsUUFBdUJBLGFBQXZCO0FBQUEsV0FBNEM7QUFDMUNGLE1BQUFBLFFBQVEsRUFBUkEsUUFEMEM7QUFFMUNDLE1BQUFBLFFBQVEsRUFBUkEsUUFGMEM7QUFHMUNDLE1BQUFBLGFBQWEsRUFBYkE7QUFIMEMsS0FBNUM7QUFBQSxHQURGLFNBTUtKLFNBTkwsRUFEd0I7QUFBQSxDQUExQjs7OztBQVVBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQWlDO0FBQUEsTUFBOUJILFFBQThCLFNBQTlCQSxRQUE4QjtBQUFBLE1BQXBCRSxhQUFvQixTQUFwQkEsYUFBb0I7QUFDbEQsTUFBTUUsT0FBTyxHQUFHLDBCQUFZLE1BQVosQ0FBaEI7QUFFQSxTQUNFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxHQUFHLEVBQUVBLE9BQWpCO0FBQTBCLElBQUEsUUFBUSxFQUFFSixRQUFwQztBQUE4QyxJQUFBLE9BQU8sRUFBRUU7QUFBdkQsS0FDRSw2QkFBQyxpQkFBRCxPQURGLENBREY7QUFLRCxDQVJEOztBQVVBQyxVQUFVLENBQUNFLFlBQVgsR0FBMEI7QUFDeEJMLEVBQUFBLFFBQVEsRUFBRTtBQURjLENBQTFCO0FBSUFHLFVBQVUsQ0FBQ0csU0FBWCxHQUF1QjtBQUNyQk4sRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUMsSUFEQztBQUVyQk4sRUFBQUEsYUFBYSxFQUFFSyxtQkFBVUUsSUFBVixDQUFlQztBQUZULENBQXZCOztlQUtlYixpQkFBaUIsR0FBR00sVUFBSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi9JY29uQnV0dG9uJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tICcuL0Fzc2V0cy9TZW5kSWNvbic7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuXG5jb25zdCBjb25uZWN0U2VuZEJ1dHRvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgZGlzYWJsZWQsIGxhbmd1YWdlLCBzdWJtaXRTZW5kQm94IH0pID0+ICh7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3VibWl0U2VuZEJveFxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTZW5kQnV0dG9uID0gKHsgZGlzYWJsZWQsIHN1Ym1pdFNlbmRCb3ggfSkgPT4ge1xuICBjb25zdCBhbHRUZXh0ID0gdXNlTG9jYWxpemUoJ1NlbmQnKTtcblxuICByZXR1cm4gKFxuICAgIDxJY29uQnV0dG9uIGFsdD17YWx0VGV4dH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtzdWJtaXRTZW5kQm94fT5cbiAgICAgIDxTZW5kSWNvbiAvPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgKTtcbn07XG5cblNlbmRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblNlbmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Ym1pdFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTZW5kQnV0dG9uKCkoU2VuZEJ1dHRvbik7XG5cbmV4cG9ydCB7IGNvbm5lY3RTZW5kQnV0dG9uIH07XG4iXX0=
