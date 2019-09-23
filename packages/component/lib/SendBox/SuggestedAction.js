'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSuggestedAction = exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SUGGESTED_ACTION_CSS = (0, _glamor.css)({
  display: 'inline-block',
  whiteSpace: 'initial',
  '& > button': {
    display: 'flex'
  }
});
var SUGGESTED_ACTION_BUTTON_CSS = (0, _glamor.css)({
  '&:focus, &:hover': {
    textDecoration: 'none',
    outline: 0
  }
});

var connectSuggestedAction = function connectSuggestedAction() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref, _ref2) {
        var clearSuggestedActions = _ref.clearSuggestedActions,
          disabled = _ref.disabled,
          language = _ref.language,
          onCardAction = _ref.onCardAction;
        var displayText = _ref2.displayText,
          text = _ref2.text,
          type = _ref2.type,
          value = _ref2.value;
        return {
          click: function click() {
            onCardAction({
              displayText: displayText,
              text: text,
              type: type,
              value: value
            });
            type === 'openUrl' && clearSuggestedActions();
          },
          disabled: disabled,
          language: language
        };
      }
    ].concat(selectors)
  );
};

exports.connectSuggestedAction = connectSuggestedAction;

var SuggestedAction = function SuggestedAction(_ref3) {
  var buttonText = _ref3.buttonText,
    click = _ref3.click,
    disabled = _ref3.disabled,
    image = _ref3.image,
    styleSet = _ref3.styleSet;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(styleSet.suggestedAction + '', SUGGESTED_ACTION_CSS + '')
    },
    _react.default.createElement(
      'button',
      {
        className: SUGGESTED_ACTION_BUTTON_CSS + '',
        disabled: disabled,
        onClick: click,
        type: 'button'
      },
      image &&
        _react.default.createElement('img', {
          src: image
        }),
      _react.default.createElement('nobr', null, buttonText)
    )
  );
};

SuggestedAction.defaultProps = {
  disabled: false,
  image: ''
};
SuggestedAction.propTypes = {
  buttonText: _propTypes.default.string.isRequired,
  click: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  image: _propTypes.default.string,
  styleSet: _propTypes.default.shape({
    suggestedAction: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = connectSuggestedAction(function(_ref4) {
  var styleSet = _ref4.styleSet;
  return {
    styleSet: styleSet
  };
})(SuggestedAction);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1N1Z2dlc3RlZEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJTVUdHRVNURURfQUNUSU9OX0NTUyIsImRpc3BsYXkiLCJ3aGl0ZVNwYWNlIiwiU1VHR0VTVEVEX0FDVElPTl9CVVRUT05fQ1NTIiwidGV4dERlY29yYXRpb24iLCJvdXRsaW5lIiwiY29ubmVjdFN1Z2dlc3RlZEFjdGlvbiIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJjbGVhclN1Z2dlc3RlZEFjdGlvbnMiLCJkaXNhYmxlZCIsImxhbmd1YWdlIiwib25DYXJkQWN0aW9uIiwiZGlzcGxheVRleHQiLCJ0ZXh0IiwidHlwZSIsInZhbHVlIiwiY2xpY2siLCJTdWdnZXN0ZWRBY3Rpb24iLCJidXR0b25UZXh0IiwiaW1hZ2UiLCJzdHlsZVNldCIsInN1Z2dlc3RlZEFjdGlvbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsInNoYXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxpQkFBSTtBQUMvQkMsRUFBQUEsT0FBTyxFQUFFLGNBRHNCO0FBRS9CQyxFQUFBQSxVQUFVLEVBQUUsU0FGbUI7QUFJL0IsZ0JBQWM7QUFDWkQsSUFBQUEsT0FBTyxFQUFFO0FBREc7QUFKaUIsQ0FBSixDQUE3QjtBQVNBLElBQU1FLDJCQUEyQixHQUFHLGlCQUFJO0FBQ3RDLHNCQUFvQjtBQUNsQkMsSUFBQUEsY0FBYyxFQUFFLE1BREU7QUFFbEJDLElBQUFBLE9BQU8sRUFBRTtBQUZTO0FBRGtCLENBQUosQ0FBcEM7O0FBT0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUM3QkMseUNBQ0U7QUFBQSxRQUFHQyxxQkFBSCxRQUFHQSxxQkFBSDtBQUFBLFFBQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxRQUFvQ0MsUUFBcEMsUUFBb0NBLFFBQXBDO0FBQUEsUUFBOENDLFlBQTlDLFFBQThDQSxZQUE5QztBQUFBLFFBQWdFQyxXQUFoRSxTQUFnRUEsV0FBaEU7QUFBQSxRQUE2RUMsSUFBN0UsU0FBNkVBLElBQTdFO0FBQUEsUUFBbUZDLElBQW5GLFNBQW1GQSxJQUFuRjtBQUFBLFFBQXlGQyxLQUF6RixTQUF5RkEsS0FBekY7QUFBQSxXQUFzRztBQUNwR0MsTUFBQUEsS0FBSyxFQUFFLGlCQUFNO0FBQ1hMLFFBQUFBLFlBQVksQ0FBQztBQUFFQyxVQUFBQSxXQUFXLEVBQVhBLFdBQUY7QUFBZUMsVUFBQUEsSUFBSSxFQUFKQSxJQUFmO0FBQXFCQyxVQUFBQSxJQUFJLEVBQUpBLElBQXJCO0FBQTJCQyxVQUFBQSxLQUFLLEVBQUxBO0FBQTNCLFNBQUQsQ0FBWjtBQUNBRCxRQUFBQSxJQUFJLEtBQUssU0FBVCxJQUFzQk4scUJBQXFCLEVBQTNDO0FBQ0QsT0FKbUc7QUFLcEdDLE1BQUFBLFFBQVEsRUFBUkEsUUFMb0c7QUFNcEdDLE1BQUFBLFFBQVEsRUFBUkE7QUFOb0csS0FBdEc7QUFBQSxHQURGLFNBU0tKLFNBVEwsRUFENkI7QUFBQSxDQUEvQjs7OztBQWFBLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlRixLQUFmLFNBQWVBLEtBQWY7QUFBQSxNQUFzQlAsUUFBdEIsU0FBc0JBLFFBQXRCO0FBQUEsTUFBZ0NVLEtBQWhDLFNBQWdDQSxLQUFoQztBQUFBLE1BQXVDQyxRQUF2QyxTQUF1Q0EsUUFBdkM7QUFBQSxTQUN0QjtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFXQSxRQUFRLENBQUNDLGVBQVQsR0FBMkIsRUFBdEMsRUFBMEN0QixvQkFBb0IsR0FBRyxFQUFqRTtBQUFoQixLQUNFO0FBQVEsSUFBQSxTQUFTLEVBQUVHLDJCQUEyQixHQUFHLEVBQWpEO0FBQXFELElBQUEsUUFBUSxFQUFFTyxRQUEvRDtBQUF5RSxJQUFBLE9BQU8sRUFBRU8sS0FBbEY7QUFBeUYsSUFBQSxJQUFJLEVBQUM7QUFBOUYsS0FDR0csS0FBSyxJQUFJO0FBQUssSUFBQSxHQUFHLEVBQUVBO0FBQVYsSUFEWixFQUVFLDJDQUFPRCxVQUFQLENBRkYsQ0FERixDQURzQjtBQUFBLENBQXhCOztBQVNBRCxlQUFlLENBQUNLLFlBQWhCLEdBQStCO0FBQzdCYixFQUFBQSxRQUFRLEVBQUUsS0FEbUI7QUFFN0JVLEVBQUFBLEtBQUssRUFBRTtBQUZzQixDQUEvQjtBQUtBRixlQUFlLENBQUNNLFNBQWhCLEdBQTRCO0FBQzFCTCxFQUFBQSxVQUFVLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCQyxVQURIO0FBRTFCVixFQUFBQSxLQUFLLEVBQUVRLG1CQUFVRyxJQUFWLENBQWVELFVBRkk7QUFHMUJqQixFQUFBQSxRQUFRLEVBQUVlLG1CQUFVSSxJQUhNO0FBSTFCVCxFQUFBQSxLQUFLLEVBQUVLLG1CQUFVQyxNQUpTO0FBSzFCTCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVSyxLQUFWLENBQWdCO0FBQ3hCUixJQUFBQSxlQUFlLEVBQUVHLG1CQUFVTSxHQUFWLENBQWNKO0FBRFAsR0FBaEIsRUFFUEE7QUFQdUIsQ0FBNUI7O2VBVWVyQixzQkFBc0IsQ0FBQztBQUFBLE1BQUdlLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQUQsQ0FBdEIsQ0FBeURILGVBQXpELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IFNVR0dFU1RFRF9BQ1RJT05fQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHdoaXRlU3BhY2U6ICdpbml0aWFsJyxcblxuICAnJiA+IGJ1dHRvbic6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfVxufSk7XG5cbmNvbnN0IFNVR0dFU1RFRF9BQ1RJT05fQlVUVE9OX0NTUyA9IGNzcyh7XG4gICcmOmZvY3VzLCAmOmhvdmVyJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgb3V0bGluZTogMFxuICB9XG59KTtcblxuY29uc3QgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zLCBkaXNhYmxlZCwgbGFuZ3VhZ2UsIG9uQ2FyZEFjdGlvbiB9LCB7IGRpc3BsYXlUZXh0LCB0ZXh0LCB0eXBlLCB2YWx1ZSB9KSA9PiAoe1xuICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgb25DYXJkQWN0aW9uKHsgZGlzcGxheVRleHQsIHRleHQsIHR5cGUsIHZhbHVlIH0pO1xuICAgICAgICB0eXBlID09PSAnb3BlblVybCcgJiYgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zKCk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYW5ndWFnZVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTdWdnZXN0ZWRBY3Rpb24gPSAoeyBidXR0b25UZXh0LCBjbGljaywgZGlzYWJsZWQsIGltYWdlLCBzdHlsZVNldCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlU2V0LnN1Z2dlc3RlZEFjdGlvbiArICcnLCBTVUdHRVNURURfQUNUSU9OX0NTUyArICcnKX0+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e1NVR0dFU1RFRF9BQ1RJT05fQlVUVE9OX0NTUyArICcnfSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e2NsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICB7aW1hZ2UgJiYgPGltZyBzcmM9e2ltYWdlfSAvPn1cbiAgICAgIDxub2JyPntidXR0b25UZXh0fTwvbm9icj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5TdWdnZXN0ZWRBY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGltYWdlOiAnJ1xufTtcblxuU3VnZ2VzdGVkQWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc3VnZ2VzdGVkQWN0aW9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbigoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoU3VnZ2VzdGVkQWN0aW9uKTtcblxuZXhwb3J0IHsgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbiB9O1xuIl19
