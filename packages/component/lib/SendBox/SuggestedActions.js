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
    _ref3$suggestedAction = _ref3.suggestedActions,
    suggestedActions = _ref3$suggestedAction === void 0 ? [] : _ref3$suggestedAction;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    suggestedActionsStyleSet = _useStyleSet2[0].suggestedActions;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    suggestedActionsStyleSetForReactFilm = _useStyleOptions2[0].suggestedActionsStyleSet;

  return (
    !!suggestedActions.length &&
    _react.default.createElement(
      _BasicFilm.default,
      {
        autoCenter: false,
        className: (0, _classnames.default)(suggestedActionsStyleSet + '', className + ''),
        showDots: false,
        styleSet: suggestedActionsStyleSetForReactFilm
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

var _default = connectSuggestedActions()(SuggestedActions);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1N1Z2dlc3RlZEFjdGlvbnMuanMiXSwibmFtZXMiOlsic3VnZ2VzdGVkQWN0aW9uVGV4dCIsImRpc3BsYXlUZXh0IiwidGl0bGUiLCJ0eXBlIiwidmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiY29ubmVjdFN1Z2dlc3RlZEFjdGlvbnMiLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwibGFuZ3VhZ2UiLCJzdWdnZXN0ZWRBY3Rpb25zIiwiU3VnZ2VzdGVkQWN0aW9ucyIsImNsYXNzTmFtZSIsInN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCIsInN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldEZvclJlYWN0RmlsbSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJ0ZXh0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwiaXNSZXF1aXJlZCIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxtQkFBVCxPQUFrRTtBQUFBLE1BQW5DQyxXQUFtQyxRQUFuQ0EsV0FBbUM7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNoRSxNQUFJRCxJQUFJLEtBQUssYUFBYixFQUE0QjtBQUMxQixXQUFPRCxLQUFLLElBQUlELFdBQWhCO0FBQ0QsR0FGRCxNQUVPLElBQUlDLEtBQUosRUFBVztBQUNoQixXQUFPQSxLQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksT0FBT0UsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUNwQyxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEtBQWYsQ0FB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cEIsdUJBQXVCLEdBQUdLLGdCQUFILEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXG5cbmltcG9ydCBCYXNpY0ZpbG0gZnJvbSAnLi9CYXNpY0ZpbG0nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU3VnZ2VzdGVkQWN0aW9uIGZyb20gJy4vU3VnZ2VzdGVkQWN0aW9uJztcbmltcG9ydCB1c2VTdHlsZU9wdGlvbnMgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVPcHRpb25zJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmZ1bmN0aW9uIHN1Z2dlc3RlZEFjdGlvblRleHQoeyBkaXNwbGF5VGV4dCwgdGl0bGUsIHR5cGUsIHZhbHVlIH0pIHtcbiAgaWYgKHR5cGUgPT09ICdtZXNzYWdlQmFjaycpIHtcbiAgICByZXR1cm4gdGl0bGUgfHwgZGlzcGxheVRleHQ7XG4gIH0gZWxzZSBpZiAodGl0bGUpIHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG59XG5cbmNvbnN0IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb25zID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoeyBsYW5ndWFnZSwgc3VnZ2VzdGVkQWN0aW9ucyB9KSA9PiAoe1xuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzdWdnZXN0ZWRBY3Rpb25zXG4gICAgfSksXG4gICAgLi4uc2VsZWN0b3JzXG4gICk7XG5cbmNvbnN0IFN1Z2dlc3RlZEFjdGlvbnMgPSAoeyBjbGFzc05hbWUsIHN1Z2dlc3RlZEFjdGlvbnMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IFt7IHN1Z2dlc3RlZEFjdGlvbnM6IHN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG4gIGNvbnN0IFt7IHN1Z2dlc3RlZEFjdGlvbnNTdHlsZVNldDogc3VnZ2VzdGVkQWN0aW9uc1N0eWxlU2V0Rm9yUmVhY3RGaWxtIH1dID0gdXNlU3R5bGVPcHRpb25zKCk7XG5cbiAgcmV0dXJuIChcbiAgICAhIXN1Z2dlc3RlZEFjdGlvbnMubGVuZ3RoICYmIChcbiAgICAgIDxCYXNpY0ZpbG1cbiAgICAgICAgYXV0b0NlbnRlcj17ZmFsc2V9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdWdnZXN0ZWRBY3Rpb25zU3R5bGVTZXQgKyAnJywgY2xhc3NOYW1lICsgJycpfVxuICAgICAgICBzaG93RG90cz17ZmFsc2V9XG4gICAgICAgIHN0eWxlU2V0PXtzdWdnZXN0ZWRBY3Rpb25zU3R5bGVTZXRGb3JSZWFjdEZpbG19XG4gICAgICA+XG4gICAgICAgIHtzdWdnZXN0ZWRBY3Rpb25zLm1hcCgoeyBkaXNwbGF5VGV4dCwgaW1hZ2UsIHRleHQsIHRpdGxlLCB0eXBlLCB2YWx1ZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTdWdnZXN0ZWRBY3Rpb25cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9e3N1Z2dlc3RlZEFjdGlvblRleHQoeyBkaXNwbGF5VGV4dCwgdGl0bGUsIHR5cGUsIHZhbHVlIH0pfVxuICAgICAgICAgICAgZGlzcGxheVRleHQ9e2Rpc3BsYXlUZXh0fVxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9CYXNpY0ZpbG0+XG4gICAgKVxuICApO1xufTtcblxuU3VnZ2VzdGVkQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn07XG5cblN1Z2dlc3RlZEFjdGlvbnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN1Z2dlc3RlZEFjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBkaXNwbGF5VGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICApLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb25zKCkoU3VnZ2VzdGVkQWN0aW9ucyk7XG5cbmV4cG9ydCB7IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb25zIH07XG4iXX0=
