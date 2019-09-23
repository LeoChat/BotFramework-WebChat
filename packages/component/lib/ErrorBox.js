'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _Localize = require('./Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('./ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorBox = function ErrorBox(_ref) {
  var children = _ref.children,
    language = _ref.language,
    message = _ref.message,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: (0, _Localize.localize)('ErrorMessage', language)
    }),
    _react.default.createElement(
      'div',
      {
        className: styleSet.errorBox
      },
      _react.default.createElement('div', null, message),
      _react.default.createElement('div', null, children)
    )
  );
};

ErrorBox.defaultProps = {
  children: undefined,
  message: ''
};
ErrorBox.propTypes = {
  children: _propTypes.default.any,
  language: _propTypes.default.string.isRequired,
  message: _propTypes.default.string,
  styleSet: _propTypes.default.shape({
    errorBox: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language,
    styleSet = _ref2.styleSet;
  return {
    language: language,
    styleSet: styleSet
  };
})(ErrorBox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckJveC5qcyJdLCJuYW1lcyI6WyJFcnJvckJveCIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJtZXNzYWdlIiwic3R5bGVTZXQiLCJlcnJvckJveCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxRQUFiLFFBQWFBLFFBQWI7QUFBQSxNQUF1QkMsT0FBdkIsUUFBdUJBLE9BQXZCO0FBQUEsTUFBZ0NDLFFBQWhDLFFBQWdDQSxRQUFoQztBQUFBLFNBQ2YsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRSx3QkFBUyxjQUFULEVBQXlCRixRQUF6QjtBQUF4QixJQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBRUUsUUFBUSxDQUFDQztBQUF6QixLQUNFLDBDQUFNRixPQUFOLENBREYsRUFFRSwwQ0FBTUYsUUFBTixDQUZGLENBRkYsQ0FEZTtBQUFBLENBQWpCOztBQVVBRCxRQUFRLENBQUNNLFlBQVQsR0FBd0I7QUFDdEJMLEVBQUFBLFFBQVEsRUFBRU0sU0FEWTtBQUV0QkosRUFBQUEsT0FBTyxFQUFFO0FBRmEsQ0FBeEI7QUFLQUgsUUFBUSxDQUFDUSxTQUFULEdBQXFCO0FBQ25CUCxFQUFBQSxRQUFRLEVBQUVRLG1CQUFVQyxHQUREO0FBRW5CUixFQUFBQSxRQUFRLEVBQUVPLG1CQUFVRSxNQUFWLENBQWlCQyxVQUZSO0FBR25CVCxFQUFBQSxPQUFPLEVBQUVNLG1CQUFVRSxNQUhBO0FBSW5CUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVSSxLQUFWLENBQWdCO0FBQ3hCUixJQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyxHQUFWLENBQWNFO0FBREEsR0FBaEIsRUFFUEE7QUFOZ0IsQ0FBckI7O2VBU2UsK0JBQWlCO0FBQUEsTUFBR1YsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUUsUUFBYixTQUFhQSxRQUFiO0FBQUEsU0FBNkI7QUFBRUYsSUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlFLElBQUFBLFFBQVEsRUFBUkE7QUFBWixHQUE3QjtBQUFBLENBQWpCLEVBQXVFSixRQUF2RSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4vU2NyZWVuUmVhZGVyVGV4dCc7XG5cbmNvbnN0IEVycm9yQm94ID0gKHsgY2hpbGRyZW4sIGxhbmd1YWdlLCBtZXNzYWdlLCBzdHlsZVNldCB9KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtsb2NhbGl6ZSgnRXJyb3JNZXNzYWdlJywgbGFuZ3VhZ2UpfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5lcnJvckJveH0+XG4gICAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PlxuICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5FcnJvckJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIG1lc3NhZ2U6ICcnXG59O1xuXG5FcnJvckJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlcnJvckJveDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgbGFuZ3VhZ2UsIHN0eWxlU2V0IH0pID0+ICh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSkoRXJyb3JCb3gpO1xuIl19
