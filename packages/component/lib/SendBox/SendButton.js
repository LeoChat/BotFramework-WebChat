'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSendButton = exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _SendIcon = _interopRequireDefault(require('./Assets/SendIcon'));

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
        var direction = _ref.direction,
          disabled = _ref.disabled,
          language = _ref.language,
          submitSendBox = _ref.submitSendBox;
        return {
          direction: direction,
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
  var direction = _ref2.direction,
    disabled = _ref2.disabled,
    language = _ref2.language,
    submitSendBox = _ref2.submitSendBox;
  return _react.default.createElement(
    _IconButton.default,
    {
      alt: (0, _Localize.localize)('Send', language),
      direction: direction,
      disabled: disabled,
      onClick: submitSendBox
    },
    _react.default.createElement(_SendIcon.default, null)
  );
};

SendButton.defaultProps = {
  direction: 'ltr',
  disabled: false
};
SendButton.propTypes = {
  direction: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  submitSendBox: _propTypes.default.func.isRequired
};

var _default = connectSendButton()(SendButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1NlbmRCdXR0b24uanMiXSwibmFtZXMiOlsiY29ubmVjdFNlbmRCdXR0b24iLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwiZGlyZWN0aW9uIiwiZGlzYWJsZWQiLCJsYW5ndWFnZSIsInN1Ym1pdFNlbmRCb3giLCJTZW5kQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsb0NBQUlDLFNBQUo7QUFBSUEsSUFBQUEsU0FBSjtBQUFBOztBQUFBLFNBQ3hCQyx5Q0FDRTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFFBQWNDLFFBQWQsUUFBY0EsUUFBZDtBQUFBLFFBQXdCQyxRQUF4QixRQUF3QkEsUUFBeEI7QUFBQSxRQUFrQ0MsYUFBbEMsUUFBa0NBLGFBQWxDO0FBQUEsV0FBdUQ7QUFDckRILE1BQUFBLFNBQVMsRUFBVEEsU0FEcUQ7QUFFckRDLE1BQUFBLFFBQVEsRUFBUkEsUUFGcUQ7QUFHckRDLE1BQUFBLFFBQVEsRUFBUkEsUUFIcUQ7QUFJckRDLE1BQUFBLGFBQWEsRUFBYkE7QUFKcUQsS0FBdkQ7QUFBQSxHQURGLFNBT0tMLFNBUEwsRUFEd0I7QUFBQSxDQUExQjs7OztBQVdBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0osU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsUUFBZCxTQUFjQSxRQUFkO0FBQUEsTUFBd0JDLFFBQXhCLFNBQXdCQSxRQUF4QjtBQUFBLE1BQWtDQyxhQUFsQyxTQUFrQ0EsYUFBbEM7QUFBQSxTQUNqQiw2QkFBQyxtQkFBRDtBQUFZLElBQUEsR0FBRyxFQUFFLHdCQUFTLE1BQVQsRUFBaUJELFFBQWpCLENBQWpCO0FBQTZDLElBQUEsU0FBUyxFQUFFRixTQUF4RDtBQUFtRSxJQUFBLFFBQVEsRUFBRUMsUUFBN0U7QUFBdUYsSUFBQSxPQUFPLEVBQUVFO0FBQWhHLEtBQ0UsNkJBQUMsaUJBQUQsT0FERixDQURpQjtBQUFBLENBQW5COztBQU1BQyxVQUFVLENBQUNDLFlBQVgsR0FBMEI7QUFDeEJMLEVBQUFBLFNBQVMsRUFBRSxLQURhO0FBRXhCQyxFQUFBQSxRQUFRLEVBQUU7QUFGYyxDQUExQjtBQUtBRyxVQUFVLENBQUNFLFNBQVgsR0FBdUI7QUFDckJOLEVBQUFBLFNBQVMsRUFBRU8sbUJBQVVDLE1BREE7QUFFckJQLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVFLElBRkM7QUFHckJQLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJFLFVBSE47QUFJckJQLEVBQUFBLGFBQWEsRUFBRUksbUJBQVVJLElBQVYsQ0FBZUQ7QUFKVCxDQUF2Qjs7ZUFPZWIsaUJBQWlCLEdBQUdPLFVBQUgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vSWNvbkJ1dHRvbic7XG5pbXBvcnQgU2VuZEljb24gZnJvbSAnLi9Bc3NldHMvU2VuZEljb24nO1xuXG5jb25zdCBjb25uZWN0U2VuZEJ1dHRvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgZGlyZWN0aW9uLCBkaXNhYmxlZCwgbGFuZ3VhZ2UsIHN1Ym1pdFNlbmRCb3ggfSkgPT4gKHtcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzdWJtaXRTZW5kQm94XG4gICAgfSksXG4gICAgLi4uc2VsZWN0b3JzXG4gICk7XG5cbmNvbnN0IFNlbmRCdXR0b24gPSAoeyBkaXJlY3Rpb24sIGRpc2FibGVkLCBsYW5ndWFnZSwgc3VibWl0U2VuZEJveCB9KSA9PiAoXG4gIDxJY29uQnV0dG9uIGFsdD17bG9jYWxpemUoJ1NlbmQnLCBsYW5ndWFnZSl9IGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e3N1Ym1pdFNlbmRCb3h9PlxuICAgIDxTZW5kSWNvbiAvPlxuICA8L0ljb25CdXR0b24+XG4pO1xuXG5TZW5kQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5TZW5kQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdFNlbmRCb3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTZW5kQnV0dG9uKCkoU2VuZEJ1dHRvbik7XG5cbmV4cG9ydCB7IGNvbm5lY3RTZW5kQnV0dG9uIH07XG4iXX0=
