'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectSuggestedActions = exports.default = void 0;

var _BasicFilm = _interopRequireDefault(require('./BasicFilm'));

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _SuggestedAction = _interopRequireDefault(require('./SuggestedAction'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint react/no-array-index-key: "off" */
function suggestedActionText(_ref) {
  var displayText = _ref.displayText,
    title = _ref.title,
    type = _ref.type,
    value = _ref.value;

  if (type === 'messageBack') {
    return title || displayText;
  } else if (title) {
    return title;
  } else if (typeof value === 'string') {
    return value;
  }

  return JSON.stringify(value);
}

var connectSuggestedActions = function connectSuggestedActions() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref2) {
        var language = _ref2.language,
          suggestedActions = _ref2.suggestedActions;
        return {
          language: language,
          suggestedActions: suggestedActions
        };
      }
    ].concat(selectors)
  );
};

exports.connectSuggestedActions = connectSuggestedActions;

var SuggestedActions = function SuggestedActions(_ref3) {
  var className = _ref3.className,
    styleSet = _ref3.styleSet,
    _ref3$suggestedAction = _ref3.suggestedActions,
    suggestedActions = _ref3$suggestedAction === void 0 ? [] : _ref3$suggestedAction;
  return (
    !!suggestedActions.length &&
    _react.default.createElement(
      _BasicFilm.default,
      {
        autoCenter: false,
        className: (0, _classnames.default)(styleSet.suggestedActions + '', className + ''),
        showDots: false,
        styleSet: styleSet.options.suggestedActionsStyleSet
      },
      suggestedActions.map(function(_ref4, index) {
        var displayText = _ref4.displayText,
          image = _ref4.image,
          text = _ref4.text,
          title = _ref4.title,
          type = _ref4.type,
          value = _ref4.value;
        return _react.default.createElement(_SuggestedAction.default, {
          buttonText: suggestedActionText({
            displayText: displayText,
            title: title,
            type: type,
            value: value
          }),
          displayText: displayText,
          image: image,
          key: index,
          text: text,
          type: type,
          value: value
        });
      })
    )
  );
};

SuggestedActions.defaultProps = {
  className: ''
};
SuggestedActions.propTypes = {
  className: _propTypes.default.string,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      suggestedActionsStyleSet: _propTypes.default.any.isRequired
    }).isRequired,
    suggestedActions: _propTypes.default.any.isRequired
  }).isRequired,
  suggestedActions: _propTypes.default.arrayOf(
    _propTypes.default.shape({
      displayText: _propTypes.default.string,
      image: _propTypes.default.string,
      text: _propTypes.default.string,
      title: _propTypes.default.string,
      type: _propTypes.default.string.isRequired,
      value: _propTypes.default.any
    })
  ).isRequired
};

var _default = connectSuggestedActions(function(_ref5) {
  var styleSet = _ref5.styleSet;
  return {
    styleSet: styleSet
  };
})(SuggestedActions);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1N1Z2dlc3RlZEFjdGlvbnMuanMiXSwibmFtZXMiOlsic3VnZ2VzdGVkQWN0aW9uVGV4dCIsImRpc3BsYXlUZXh0IiwidGl0bGUiLCJ0eXBlIiwidmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMiLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwibGFuZ3VhZ2UiLCJzdWdnZXN0ZWRBY3Rpb25zIiwiU3VnZ2VzdGVkQWN0aW9ucyIsImNsYXNzTmFtZSIsInN0eWxlU2V0IiwibGVuZ3RoIiwib3B0aW9ucyIsInN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJ0ZXh0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwic2hhcGUiLCJhbnkiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBUkE7QUFVQSxTQUFTQSxtQkFBVCxPQUFrRTtBQUFBLE1BQW5DQyxXQUFtQyxRQUFuQ0EsV0FBbUM7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNoRSxNQUFJRCxJQUFJLEtBQUssYUFBYixFQUE0QjtBQUMxQixXQUFPRCxLQUFLLElBQUlELFdBQWhCO0FBQ0QsR0FGRCxNQUVPLElBQUlDLEtBQUosRUFBVztBQUNoQixXQUFPQSxLQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksT0FBT0UsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUNwQyxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEtBQWYsQ0FBUDtBQUNEOztBQUVELElBQU1HLHVCQUF1QixHQUFHLFNB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TUFKSDtBQUtkdEIsSUFBQUEsSUFBSSxFQUFFcUIsbUJBQVVDLE1BQVYsQ0FBaUJHLFVBTFQ7QUFNZHhCLElBQUFBLEtBQUssRUFBRW9CLG1CQUFVRztBQU5ILEdBQWhCLENBRGdCLEVBU2hCQztBQWpCeUIsQ0FBN0I7O2VBb0JlckIsdUJBQXVCLENBQUM7QUFBQSxNQUFHTyxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFELENBQXZCLENBQTBERixnQkFBMUQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IEJhc2ljRmlsbSBmcm9tICcuL0Jhc2ljRmlsbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTdWdnZXN0ZWRBY3Rpb24gZnJvbSAnLi9TdWdnZXN0ZWRBY3Rpb24nO1xuXG5mdW5jdGlvbiBzdWdnZXN0ZWRBY3Rpb25UZXh0KHsgZGlzcGxheVRleHQsIHRpdGxlLCB0eXBlLCB2YWx1ZSB9KSB7XG4gIGlmICh0eXBlID09PSAnbWVzc2FnZUJhY2snKSB7XG4gICAgcmV0dXJuIHRpdGxlIHx8IGRpc3BsYXlUZXh0O1xuICB9IGVsc2UgaWYgKHRpdGxlKSB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufVxuXG5jb25zdCBjb25uZWN0U3VnZ2VzdGVkQWN0aW9ucyA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgbGFuZ3VhZ2UsIHN1Z2dlc3RlZEFjdGlvbnMgfSkgPT4gKHtcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3VnZ2VzdGVkQWN0aW9uc1xuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTdWdnZXN0ZWRBY3Rpb25zID0gKHsgY2xhc3NOYW1lLCBzdHlsZVNldCwgc3VnZ2VzdGVkQWN0aW9ucyA9IFtdIH0pID0+XG4gICEhc3VnZ2VzdGVkQWN0aW9ucy5sZW5ndGggJiYgKFxuICAgIDxCYXNpY0ZpbG1cbiAgICAgIGF1dG9DZW50ZXI9e2ZhbHNlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlU2V0LnN1Z2dlc3RlZEFjdGlvbnMgKyAnJywgY2xhc3NOYW1lICsgJycpfVxuICAgICAgc2hvd0RvdHM9e2ZhbHNlfVxuICAgICAgc3R5bGVTZXQ9e3N0eWxlU2V0Lm9wdGlvbnMuc3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0fVxuICAgID5cbiAgICAgIHtzdWdnZXN0ZWRBY3Rpb25zLm1hcCgoeyBkaXNwbGF5VGV4dCwgaW1hZ2UsIHRleHQsIHRpdGxlLCB0eXBlLCB2YWx1ZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8U3VnZ2VzdGVkQWN0aW9uXG4gICAgICAgICAgYnV0dG9uVGV4dD17c3VnZ2VzdGVkQWN0aW9uVGV4dCh7IGRpc3BsYXlUZXh0LCB0aXRsZSwgdHlwZSwgdmFsdWUgfSl9XG4gICAgICAgICAgZGlzcGxheVRleHQ9e2Rpc3BsYXlUZXh0fVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0Jhc2ljRmlsbT5cbiAgKTtcblxuU3VnZ2VzdGVkQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn07XG5cblN1Z2dlc3RlZEFjdGlvbnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdWdnZXN0ZWRBY3Rpb25zU3R5bGVTZXQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3VnZ2VzdGVkQWN0aW9uczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHN1Z2dlc3RlZEFjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBkaXNwbGF5VGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICApLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb25zKCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShTdWdnZXN0ZWRBY3Rpb25zKTtcblxuZXhwb3J0IHsgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMgfTtcbiJdfQ==
