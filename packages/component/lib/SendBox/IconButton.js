'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var IconButton = function IconButton(_ref) {
  var alt = _ref.alt,
    children = _ref.children,
    className = _ref.className,
    direction = _ref.direction,
    disabled = _ref.disabled,
    onClick = _ref.onClick,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'button',
    {
      className: (0, _classnames.default)(styleSet.sendBoxButton + '', className + '', 'btn-' + direction),
      disabled: disabled,
      onClick: onClick,
      title: alt,
      type: 'button'
    },
    children
  );
};

IconButton.defaultProps = {
  alt: '',
  children: undefined,
  className: '',
  direction: 'ltr',
  disabled: false,
  onClick: undefined
};
IconButton.propTypes = {
  alt: _propTypes.default.string,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  direction: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  styleSet: _propTypes.default.shape({
    sendBoxButton: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var direction = _ref2.direction,
    styleSet = _ref2.styleSet;
  return {
    direction: direction,
    styleSet: styleSet
  };
})(IconButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ljb25CdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsImFsdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwic3R5bGVTZXQiLCJzZW5kQm94QnV0dG9uIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsImZ1bmMiLCJzaGFwZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsTUFBUUMsUUFBUixRQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFNBQWxCLFFBQWtCQSxTQUFsQjtBQUFBLE1BQTZCQyxTQUE3QixRQUE2QkEsU0FBN0I7QUFBQSxNQUF3Q0MsUUFBeEMsUUFBd0NBLFFBQXhDO0FBQUEsTUFBa0RDLE9BQWxELFFBQWtEQSxPQUFsRDtBQUFBLE1BQTJEQyxRQUEzRCxRQUEyREEsUUFBM0Q7QUFBQSxTQUNqQjtBQUNFLElBQUEsU0FBUyxFQUFFLHlCQUFXQSxRQUFRLENBQUNDLGFBQVQsR0FBeUIsRUFBcEMsRUFBd0NMLFNBQVMsR0FBRyxFQUFwRCxFQUF3RCxTQUFTQyxTQUFqRSxDQURiO0FBRUUsSUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxJQUFBLE9BQU8sRUFBRUMsT0FIWDtBQUlFLElBQUEsS0FBSyxFQUFFTCxHQUpUO0FBS0UsSUFBQSxJQUFJLEVBQUM7QUFMUCxLQU9HQyxRQVBILENBRGlCO0FBQUEsQ0FBbkI7O0FBWUFGLFVBQVUsQ0FBQ1MsWUFBWCxHQUEwQjtBQUN4QlIsRUFBQUEsR0FBRyxFQUFFLEVBRG1CO0FBRXhCQyxFQUFBQSxRQUFRLEVBQUVRLFNBRmM7QUFHeEJQLEVBQUFBLFNBQVMsRUFBRSxFQUhhO0FBSXhCQyxFQUFBQSxTQUFTLEVBQUUsS0FKYTtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFLEtBTGM7QUFNeEJDLEVBQUFBLE9BQU8sRUFBRUk7QUFOZSxDQUExQjtBQVNBVixVQUFVLENBQUNXLFNBQVgsR0FBdUI7QUFDckJWLEVBQUFBLEdBQUcsRUFBRVcsbUJBQVVDLE1BRE07QUFFckJYLEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVFLEdBRkM7QUFHckJYLEVBQUFBLFNBQVMsRUFBRVMsbUJBQVVDLE1BSEE7QUFJckJULEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVDLE1BSkE7QUFLckJSLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVHLElBTEM7QUFNckJULEVBQUFBLE9BQU8sRUFBRU0sbUJBQVVJLElBTkU7QUFPckJULEVBQUFBLFFBQVEsRUFBRUssbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDeEJULElBQUFBLGFBQWEsRUFBRUksbUJBQVVFLEdBQVYsQ0FBY0k7QUFETCxHQUFoQixFQUVQQTtBQVRrQixDQUF2Qjs7ZUFZZSwrQkFBaUI7QUFBQSxNQUFHZCxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjRyxRQUFkLFNBQWNBLFFBQWQ7QUFBQSxTQUE4QjtBQUFFSCxJQUFBQSxTQUFTLEVBQVRBLFNBQUY7QUFBYUcsSUFBQUEsUUFBUSxFQUFSQTtBQUFiLEdBQTlCO0FBQUEsQ0FBakIsRUFBeUVQLFVBQXpFLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgSWNvbkJ1dHRvbiA9ICh7IGFsdCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlyZWN0aW9uLCBkaXNhYmxlZCwgb25DbGljaywgc3R5bGVTZXQgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlU2V0LnNlbmRCb3hCdXR0b24gKyAnJywgY2xhc3NOYW1lICsgJycsICdidG4tJyArIGRpcmVjdGlvbil9XG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgdGl0bGU9e2FsdH1cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5JY29uQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNsaWNrOiB1bmRlZmluZWRcbn07XG5cbkljb25CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VuZEJveEJ1dHRvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgZGlyZWN0aW9uLCBzdHlsZVNldCB9KSA9PiAoeyBkaXJlY3Rpb24sIHN0eWxlU2V0IH0pKShJY29uQnV0dG9uKTtcbiJdfQ==
