'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS = (0, _glamor.css)({
  position: 'relative',
  '& > .webchat__bubble__content': {
    // This is for hiding content outside of the bubble, for example, content outside of border radius
    overflow: 'hidden'
  },
  '& > .webchat__bubble__nub': {
    position: 'absolute'
  }
});

var Bubble = function Bubble(_ref) {
  var ariaHidden = _ref['aria-hidden'],
    children = _ref.children,
    className = _ref.className,
    fromUser = _ref.fromUser,
    nub = _ref.nub,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'div',
    {
      'aria-hidden': ariaHidden,
      className: (0, _classnames.default)(
        ROOT_CSS + '',
        styleSet.bubble + '',
        {
          'from-user': fromUser,
          webchat__bubble_has_nub: nub
        },
        className + '' || ''
      )
    },
    _react.default.createElement(
      'div',
      {
        className: 'webchat__bubble__content'
      },
      children
    ),
    nub &&
      !!(fromUser ? styleSet.options.bubbleFromUserNubSize : styleSet.options.bubbleNubSize) &&
      _react.default.createElement('div', {
        className: 'webchat__bubble__nub'
      })
  );
};

Bubble.defaultProps = {
  'aria-hidden': false,
  children: undefined,
  className: '',
  fromUser: false,
  nub: true
};
Bubble.propTypes = {
  'aria-hidden': _propTypes.default.bool,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  fromUser: _propTypes.default.bool,
  nub: _propTypes.default.bool,
  styleSet: _propTypes.default.shape({
    bubble: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(Bubble);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9CdWJibGUuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiQnViYmxlIiwiYXJpYUhpZGRlbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZnJvbVVzZXIiLCJudWIiLCJzdHlsZVNldCIsImJ1YmJsZSIsIndlYmNoYXRfX2J1YmJsZV9oYXNfbnViIiwib3B0aW9ucyIsImJ1YmJsZUZyb21Vc2VyTnViU2l6ZSIsImJ1YmJsZU51YlNpemUiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiYW55Iiwic3RyaW5nIiwic2hhcGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRSxVQURTO0FBR25CLG1DQUFpQztBQUMvQjtBQUNBQyxJQUFBQSxRQUFRLEVBQUU7QUFGcUIsR0FIZDtBQVFuQiwrQkFBNkI7QUFDM0JELElBQUFBLFFBQVEsRUFBRTtBQURpQjtBQVJWLENBQUosQ0FBakI7O0FBYUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFrQkMsVUFBbEIsUUFBRyxhQUFIO0FBQUEsTUFBOEJDLFFBQTlCLFFBQThCQSxRQUE5QjtBQUFBLE1BQXdDQyxTQUF4QyxRQUF3Q0EsU0FBeEM7QUFBQSxNQUFtREMsUUFBbkQsUUFBbURBLFFBQW5EO0FBQUEsTUFBNkRDLEdBQTdELFFBQTZEQSxHQUE3RDtBQUFBLE1BQWtFQyxRQUFsRSxRQUFrRUEsUUFBbEU7QUFBQSxTQUNiO0FBQ0UsbUJBQWFMLFVBRGY7QUFFRSxJQUFBLFNBQVMsRUFBRSx5QkFDVEosUUFBUSxHQUFHLEVBREYsRUFFVFMsUUFBUSxDQUFDQyxNQUFULEdBQWtCLEVBRlQsRUFHVDtBQUFFLG1CQUFhSCxRQUFmO0FBQXlCSSxNQUFBQSx1QkFBdUIsRUFBRUg7QUFBbEQsS0FIUyxFQUlURixTQUFTLEdBQUcsRUFBWixJQUFrQixFQUpUO0FBRmIsS0FTRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMkNELFFBQTNDLENBVEYsRUFVR0csR0FBRyxJQUFJLENBQUMsRUFBRUQsUUFBUSxHQUFHRSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLHFCQUFwQixHQUE0Q0osUUFBUSxDQUFDRyxPQUFULENBQWlCRSxhQUF2RSxDQUFSLElBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBWEosQ0FEYTtBQUFBLENBQWY7O0FBaUJBWCxNQUFNLENBQUNZLFlBQVAsR0FBc0I7QUFDcEIsaUJBQWUsS0FESztBQUVwQlYsRUFBQUEsUUFBUSxFQUFFVyxTQUZVO0FBR3BCVixFQUFBQSxTQUFTLEVBQUUsRUFIUztBQUlwQkMsRUFBQUEsUUFBUSxFQUFFLEtBSlU7QUFLcEJDLEVBQUFBLEdBQUcsRUFBRTtBQUxlLENBQXRCO0FBUUFMLE1BQU0sQ0FBQ2MsU0FBUCxHQUFtQjtBQUNqQixpQkFBZUMsbUJBQVVDLElBRFI7QUFFakJkLEVBQUFBLFFBQVEsRUFBRWEsbUJBQVVFLEdBRkg7QUFHakJkLEVBQUFBLFNBQVMsRUFBRVksbUJBQVVHLE1BSEo7QUFJakJkLEVBQUFBLFFBQVEsRUFBRVcsbUJBQVVDLElBSkg7QUFLakJYLEVBQUFBLEdBQUcsRUFBRVUsbUJBQVVDLElBTEU7QUFNakJWLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDeEJaLElBQUFBLE1BQU0sRUFBRVEsbUJBQVVFLEdBQVYsQ0FBY0c7QUFERSxHQUFoQixFQUVQQTtBQVJjLENBQW5COztlQVdlLCtCQUFpQjtBQUFBLE1BQUdkLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ETixNQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICcmID4gLndlYmNoYXRfX2J1YmJsZV9fY29udGVudCc6IHtcbiAgICAvLyBUaGlzIGlzIGZvciBoaWRpbmcgY29udGVudCBvdXRzaWRlIG9mIHRoZSBidWJibGUsIGZvciBleGFtcGxlLCBjb250ZW50IG91dHNpZGUgb2YgYm9yZGVyIHJhZGl1c1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuXG4gICcmID4gLndlYmNoYXRfX2J1YmJsZV9fbnViJzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH1cbn0pO1xuXG5jb25zdCBCdWJibGUgPSAoeyAnYXJpYS1oaWRkZW4nOiBhcmlhSGlkZGVuLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBmcm9tVXNlciwgbnViLCBzdHlsZVNldCB9KSA9PiAoXG4gIDxkaXZcbiAgICBhcmlhLWhpZGRlbj17YXJpYUhpZGRlbn1cbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICBST09UX0NTUyArICcnLFxuICAgICAgc3R5bGVTZXQuYnViYmxlICsgJycsXG4gICAgICB7ICdmcm9tLXVzZXInOiBmcm9tVXNlciwgd2ViY2hhdF9fYnViYmxlX2hhc19udWI6IG51YiB9LFxuICAgICAgY2xhc3NOYW1lICsgJycgfHwgJydcbiAgICApfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWJjaGF0X19idWJibGVfX2NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAge251YiAmJiAhIShmcm9tVXNlciA/IHN0eWxlU2V0Lm9wdGlvbnMuYnViYmxlRnJvbVVzZXJOdWJTaXplIDogc3R5bGVTZXQub3B0aW9ucy5idWJibGVOdWJTaXplKSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYmNoYXRfX2J1YmJsZV9fbnViXCIgLz5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cbkJ1YmJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICdhcmlhLWhpZGRlbic6IGZhbHNlLFxuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBmcm9tVXNlcjogZmFsc2UsXG4gIG51YjogdHJ1ZVxufTtcblxuQnViYmxlLnByb3BUeXBlcyA9IHtcbiAgJ2FyaWEtaGlkZGVuJzogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb21Vc2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbnViOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYnViYmxlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoQnViYmxlKTtcbiJdfQ==
