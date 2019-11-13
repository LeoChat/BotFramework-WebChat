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

var SUGGESTED_ACTION_CSS = (0, _glamor.css)({
  display: 'inline-block',
  whiteSpace: 'initial',
  '& > button': {
    display: 'flex'
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
    image = _ref3.image;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    suggestedActionStyleSet = _useStyleSet2[0].suggestedAction;

  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(suggestedActionStyleSet + '', SUGGESTED_ACTION_CSS + '')
    },
    _react.default.createElement(
      'button',
      {
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
  image: _propTypes.default.string
};

var _default = connectSuggestedAction()(SuggestedAction);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1N1Z2dlc3RlZEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJTVUdHRVNURURfQUNUSU9OX0NTUyIsImRpc3BsYXkiLCJ3aGl0ZVNwYWNlIiwiY29ubmVjdFN1Z2dlc3RlZEFjdGlvbiIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJjbGVhclN1Z2dlc3RlZEFjdGlvbnMiLCJkaXNhYmxlZCIsImxhbmd1YWdlIiwib25DYXJkQWN0aW9uIiwiZGlzcGxheVRleHQiLCJ0ZXh0IiwidHlwZSIsInZhbHVlIiwiY2xpY2siLCJTdWdnZXN0ZWRBY3Rpb24iLCJidXR0b25UZXh0IiwiaW1hZ2UiLCJzdWdnZXN0ZWRBY3Rpb25TdHlsZVNldCIsInN1Z2dlc3RlZEFjdGlvbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxpQkFBSTtBQUMvQkMsRUFBQUEsT0FBTyxFQUFFLGNBRHNCO0FBRS9CQyxFQUFBQSxVQUFVLEVBQUUsU0FGbUI7QUFJL0IsZ0JBQWM7QUFDWkQsSUFBQUEsT0FBTyxFQUFFO0FBREc7QUFKaUIsQ0FBSixDQUE3Qjs7QUFTQSxJQUFNRSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCO0FBQUEsb0NBQUlDLFNBQUo7QUFBSUEsSUFBQUEsU0FBSjtBQUFBOztBQUFBLFNBQzdCQyx5Q0FDRTtBQUFBLFFBQUdDLHFCQUFILFFBQUdBLHFCQUFIO0FBQUEsUUFBMEJDLFFBQTFCLFFBQTBCQSxRQUExQjtBQUFBLFFBQW9DQyxRQUFwQyxRQUFvQ0EsUUFBcEM7QUFBQSxRQUE4Q0MsWUFBOUMsUUFBOENBLFlBQTlDO0FBQUEsUUFBZ0VDLFdBQWhFLFNBQWdFQSxXQUFoRTtBQUFBLFFBQTZFQyxJQUE3RSxTQUE2RUEsSUFBN0U7QUFBQSxRQUFtRkMsSUFBbkYsU0FBbUZBLElBQW5GO0FBQUEsUUFBeUZDLEtBQXpGLFNBQXlGQSxLQUF6RjtBQUFBLFdBQXNHO0FBQ3BHQyxNQUFBQSxLQUFLLEVBQUUsaUJBQU07QUFDWEwsUUFBQUEsWUFBWSxDQUFDO0FBQUVDLFVBQUFBLFdBQVcsRUFBWEEsV0FBRjtBQUFlQyxVQUFBQSxJQUFJLEVBQUpBLElBQWY7QUFBcUJDLFVBQUFBLElBQUksRUFBSkEsSUFBckI7QUFBMkJDLFVBQUFBLEtBQUssRUFBTEE7QUFBM0IsU0FBRCxDQUFaO0FBQ0FELFFBQUFBLElBQUksS0FBSyxTQUFULElBQXNCTixxQkFBcUIsRUFBM0M7QUFDRCxPQUptRztBQUtwR0MsTUFBQUEsUUFBUSxFQUFSQSxRQUxvRztBQU1wR0MsTUFBQUEsUUFBUSxFQUFSQTtBQU5vRyxLQUF0RztBQUFBLEdBREYsU0FTS0osU0FUTCxFQUQ2QjtBQUFBLENBQS9COzs7O0FBYUEsSUFBTVcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUE0QztBQUFBLE1BQXpDQyxVQUF5QyxTQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkYsS0FBNkIsU0FBN0JBLEtBQTZCO0FBQUEsTUFBdEJQLFFBQXNCLFNBQXRCQSxRQUFzQjtBQUFBLE1BQVpVLEtBQVksU0FBWkEsS0FBWTs7QUFBQSxxQkFDWCw0QkFEVztBQUFBO0FBQUEsTUFDeENDLHVCQUR3QyxvQkFDekRDLGVBRHlEOztBQUdsRSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQVdELHVCQUF1QixHQUFHLEVBQXJDLEVBQXlDbEIsb0JBQW9CLEdBQUcsRUFBaEU7QUFBaEIsS0FDRTtBQUFRLElBQUEsUUFBUSxFQUFFTyxRQUFsQjtBQUE0QixJQUFBLE9BQU8sRUFBRU8sS0FBckM7QUFBNEMsSUFBQSxJQUFJLEVBQUM7QUFBakQsS0FDR0csS0FBSyxJQUFJO0FBQUssSUFBQSxHQUFHLEVBQUVBO0FBQVYsSUFEWixFQUVFLDJDQUFPRCxVQUFQLENBRkYsQ0FERixDQURGO0FBUUQsQ0FYRDs7QUFhQUQsZUFBZSxDQUFDSyxZQUFoQixHQUErQjtBQUM3QmIsRUFBQUEsUUFBUSxFQUFFLEtBRG1CO0FBRTdCVSxFQUFBQSxLQUFLLEVBQUU7QUFGc0IsQ0FBL0I7QUFLQUYsZUFBZSxDQUFDTSxTQUFoQixHQUE0QjtBQUMxQkwsRUFBQUEsVUFBVSxFQUFFTSxtQkFBVUMsTUFBVixDQUFpQkMsVUFESDtBQUUxQlYsRUFBQUEsS0FBSyxFQUFFUSxtQkFBVUcsSUFBVixDQUFlRCxVQUZJO0FBRzFCakIsRUFBQUEsUUFBUSxFQUFFZSxtQkFBVUksSUFITTtBQUkxQlQsRUFBQUEsS0FBSyxFQUFFSyxtQkFBVUM7QUFKUyxDQUE1Qjs7ZUFPZXBCLHNCQUFzQixHQUFHWSxlQUFILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBTVUdHRVNURURfQUNUSU9OX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICB3aGl0ZVNwYWNlOiAnaW5pdGlhbCcsXG5cbiAgJyYgPiBidXR0b24nOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH1cbn0pO1xuXG5jb25zdCBjb25uZWN0U3VnZ2VzdGVkQWN0aW9uID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoeyBjbGVhclN1Z2dlc3RlZEFjdGlvbnMsIGRpc2FibGVkLCBsYW5ndWFnZSwgb25DYXJkQWN0aW9uIH0sIHsgZGlzcGxheVRleHQsIHRleHQsIHR5cGUsIHZhbHVlIH0pID0+ICh7XG4gICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICBvbkNhcmRBY3Rpb24oeyBkaXNwbGF5VGV4dCwgdGV4dCwgdHlwZSwgdmFsdWUgfSk7XG4gICAgICAgIHR5cGUgPT09ICdvcGVuVXJsJyAmJiBjbGVhclN1Z2dlc3RlZEFjdGlvbnMoKTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGxhbmd1YWdlXG4gICAgfSksXG4gICAgLi4uc2VsZWN0b3JzXG4gICk7XG5cbmNvbnN0IFN1Z2dlc3RlZEFjdGlvbiA9ICh7IGJ1dHRvblRleHQsIGNsaWNrLCBkaXNhYmxlZCwgaW1hZ2UgfSkgPT4ge1xuICBjb25zdCBbeyBzdWdnZXN0ZWRBY3Rpb246IHN1Z2dlc3RlZEFjdGlvblN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN1Z2dlc3RlZEFjdGlvblN0eWxlU2V0ICsgJycsIFNVR0dFU1RFRF9BQ1RJT05fQ1NTICsgJycpfT5cbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtjbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICB7aW1hZ2UgJiYgPGltZyBzcmM9e2ltYWdlfSAvPn1cbiAgICAgICAgPG5vYnI+e2J1dHRvblRleHR9PC9ub2JyPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TdWdnZXN0ZWRBY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGltYWdlOiAnJ1xufTtcblxuU3VnZ2VzdGVkQWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbigpKFN1Z2dlc3RlZEFjdGlvbik7XG5cbmV4cG9ydCB7IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb24gfTtcbiJdfQ==
