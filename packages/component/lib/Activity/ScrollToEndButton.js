'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _reactScrollToBottom = require('react-scroll-to-bottom');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _Localize = _interopRequireDefault(require('../Localization/Localize'));

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

var ScrollToEndButton = function ScrollToEndButton(_ref) {
  var className = _ref.className,
    scrollToEnd = _ref.scrollToEnd;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    scrollToEndButtonStyleSet = _useStyleSet2[0].scrollToEndButton;

  return _react.default.createElement(
    'button',
    {
      className: (0, _classnames.default)(scrollToEndButtonStyleSet + '', className + ''),
      onClick: scrollToEnd,
      type: 'button'
    },
    _react.default.createElement(_Localize.default, {
      text: 'New messages'
    })
  );
};

ScrollToEndButton.defaultProps = {
  className: ''
};
ScrollToEndButton.propTypes = {
  className: _propTypes.default.string,
  scrollToEnd: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    scrollToEndButton: _propTypes.default.any.isRequired
  }).isRequired
};
var WebChatConnectedScrollToEndButton = (0, _connectToWebChat.default)(function(_ref2) {
  var scrollToEnd = _ref2.scrollToEnd;
  return {
    scrollToEnd: scrollToEnd
  };
})(ScrollToEndButton);

var ConnectedScrollToEndButton = function ConnectedScrollToEndButton(props) {
  return _react.default.createElement(_reactScrollToBottom.StateContext.Consumer, null, function(_ref3) {
    var sticky = _ref3.sticky;
    return !sticky && _react.default.createElement(WebChatConnectedScrollToEndButton, props);
  });
};

var _default = ConnectedScrollToEndButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TY3JvbGxUb0VuZEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJTY3JvbGxUb0VuZEJ1dHRvbiIsImNsYXNzTmFtZSIsInNjcm9sbFRvRW5kIiwic2Nyb2xsVG9FbmRCdXR0b25TdHlsZVNldCIsInNjcm9sbFRvRW5kQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHlsZVNldCIsInNoYXBlIiwiYW55IiwiV2ViQ2hhdENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uIiwiQ29ubmVjdGVkU2Nyb2xsVG9FbmRCdXR0b24iLCJwcm9wcyIsInN0aWNreSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQWdDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEscUJBQ0csNEJBREg7QUFBQTtBQUFBLE1BQzVCQyx5QkFENEIsb0JBQy9DQyxpQkFEK0M7O0FBR3hELFNBQ0U7QUFBUSxJQUFBLFNBQVMsRUFBRSx5QkFBV0QseUJBQXlCLEdBQUcsRUFBdkMsRUFBMkNGLFNBQVMsR0FBRyxFQUF2RCxDQUFuQjtBQUErRSxJQUFBLE9BQU8sRUFBRUMsV0FBeEY7QUFBcUcsSUFBQSxJQUFJLEVBQUM7QUFBMUcsS0FDRSw2QkFBQyxpQkFBRDtBQUFVLElBQUEsSUFBSSxFQUFDO0FBQWYsSUFERixDQURGO0FBS0QsQ0FSRDs7QUFVQUYsaUJBQWlCLENBQUNLLFlBQWxCLEdBQWlDO0FBQy9CSixFQUFBQSxTQUFTLEVBQUU7QUFEb0IsQ0FBakM7QUFJQUQsaUJBQWlCLENBQUNNLFNBQWxCLEdBQThCO0FBQzVCTCxFQUFBQSxTQUFTLEVBQUVNLG1CQUFVQyxNQURPO0FBRTVCTixFQUFBQSxXQUFXLEVBQUVLLG1CQUFVRSxJQUFWLENBQWVDLFVBRkE7QUFHNUJDLEVBQUFBLFFBQVEsRUFBRUosbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDeEJSLElBQUFBLGlCQUFpQixFQUFFRyxtQkFBVU0sR0FBVixDQUFjSDtBQURULEdBQWhCLEVBRVBBO0FBTHlCLENBQTlCO0FBUUEsSUFBTUksaUNBQWlDLEdBQUcsK0JBQWlCO0FBQUEsTUFBR1osV0FBSCxTQUFHQSxXQUFIO0FBQUEsU0FBc0I7QUFBRUEsSUFBQUEsV0FBVyxFQUFYQTtBQUFGLEdBQXRCO0FBQUEsQ0FBakIsRUFBeURGLGlCQUF6RCxDQUExQzs7QUFFQSxJQUFNZSwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUFDLEtBQUs7QUFBQSxTQUN0Qyw2QkFBQyxpQ0FBRCxDQUE0QixRQUE1QixRQUNHO0FBQUEsUUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBZ0IsQ0FBQ0EsTUFBRCxJQUFXLDZCQUFDLGlDQUFELEVBQXVDRCxLQUF2QyxDQUEzQjtBQUFBLEdBREgsQ0FEc0M7QUFBQSxDQUF4Qzs7ZUFNZUQsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUNvbnRleHQgYXMgU2Nyb2xsVG9Cb3R0b21TdGF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdC1zY3JvbGwtdG8tYm90dG9tJztcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgTG9jYWxpemUgZnJvbSAnLi4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IFNjcm9sbFRvRW5kQnV0dG9uID0gKHsgY2xhc3NOYW1lLCBzY3JvbGxUb0VuZCB9KSA9PiB7XG4gIGNvbnN0IFt7IHNjcm9sbFRvRW5kQnV0dG9uOiBzY3JvbGxUb0VuZEJ1dHRvblN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHNjcm9sbFRvRW5kQnV0dG9uU3R5bGVTZXQgKyAnJywgY2xhc3NOYW1lICsgJycpfSBvbkNsaWNrPXtzY3JvbGxUb0VuZH0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgPExvY2FsaXplIHRleHQ9XCJOZXcgbWVzc2FnZXNcIiAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuU2Nyb2xsVG9FbmRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59O1xuXG5TY3JvbGxUb0VuZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2Nyb2xsVG9FbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNjcm9sbFRvRW5kQnV0dG9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgV2ViQ2hhdENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uID0gY29ubmVjdFRvV2ViQ2hhdCgoeyBzY3JvbGxUb0VuZCB9KSA9PiAoeyBzY3JvbGxUb0VuZCB9KSkoU2Nyb2xsVG9FbmRCdXR0b24pO1xuXG5jb25zdCBDb25uZWN0ZWRTY3JvbGxUb0VuZEJ1dHRvbiA9IHByb3BzID0+IChcbiAgPFNjcm9sbFRvQm90dG9tU3RhdGVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyBzdGlja3kgfSkgPT4gIXN0aWNreSAmJiA8V2ViQ2hhdENvbm5lY3RlZFNjcm9sbFRvRW5kQnV0dG9uIHsuLi5wcm9wc30gLz59XG4gIDwvU2Nyb2xsVG9Cb3R0b21TdGF0ZUNvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWRTY3JvbGxUb0VuZEJ1dHRvbjtcbiJdfQ==
