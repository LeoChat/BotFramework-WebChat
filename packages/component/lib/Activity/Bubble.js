'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

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

function acuteNubSVG(nubSize, strokeWidth, side) {
  var upSideDown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!nubSize) {
    return false;
  }

  var halfNubSize = nubSize / 2;
  var halfStrokeWidth = strokeWidth / 2; // Horizontally mirror the nub if it is from user

  var horizontalTransform =
    side === 'bot' ? '' : 'translate('.concat(halfNubSize, ' 0) scale(-1 1) translate(').concat(-halfNubSize, ' 0)'); // Vertically mirror the nub if it is up-side-down

  var verticalTransform = upSideDown
    ? 'translate(0 '.concat(halfNubSize, ') scale(1 -1) translate(0 ').concat(-halfNubSize, ')')
    : '';
  var p1 = [nubSize, halfStrokeWidth].join(' ');
  var p2 = [strokeWidth, halfStrokeWidth].join(' ');
  var p3 = [nubSize + strokeWidth, nubSize + halfStrokeWidth].join(' ');
  return _react.default.createElement(
    'svg',
    {
      className: 'webchat__bubble__nub',
      version: '1.1',
      viewBox: '0 0 '.concat(nubSize, ' ').concat(nubSize),
      xmlns: 'http://www.w3.org/2000/svg'
    },
    _react.default.createElement(
      'g',
      {
        transform: ''.concat(horizontalTransform, ' ').concat(verticalTransform)
      },
      _react.default.createElement('path', {
        d: 'M'
          .concat(p1, ' L')
          .concat(p2, ' L')
          .concat(p3)
      })
    )
  );
}

function isPositive(value) {
  return 1 / value >= 0;
}

var Bubble = function Bubble(_ref) {
  var ariaHidden = _ref['aria-hidden'],
    children = _ref.children,
    className = _ref.className,
    fromUser = _ref.fromUser,
    nub = _ref.nub;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    bubbleStyleSet = _useStyleSet2[0].bubble;

  var _useStyleOptions = (0, _useStyleOptions3.default)(),
    _useStyleOptions2 = _slicedToArray(_useStyleOptions, 1),
    _useStyleOptions2$ = _useStyleOptions2[0],
    bubbleBorderWidth = _useStyleOptions2$.bubbleBorderWidth,
    bubbleFromUserBorderWidth = _useStyleOptions2$.bubbleFromUserBorderWidth,
    bubbleFromUserNubSize = _useStyleOptions2$.bubbleFromUserNubSize,
    bubbleNubSize = _useStyleOptions2$.bubbleNubSize,
    bubbleNubOffset = _useStyleOptions2$.bubbleNubOffset,
    bubbleFromUserNubOffset = _useStyleOptions2$.bubbleFromUserNubOffset;

  var _ref2 = fromUser
      ? {
          borderWidth: bubbleFromUserBorderWidth,
          nubOffset: bubbleFromUserNubOffset,
          nubSize: bubbleFromUserNubSize,
          side: 'user'
        }
      : {
          borderWidth: bubbleBorderWidth,
          nubOffset: bubbleNubOffset,
          nubSize: bubbleNubSize,
          side: 'bot'
        },
    borderWidth = _ref2.borderWidth,
    nubOffset = _ref2.nubOffset,
    nubSize = _ref2.nubSize,
    side = _ref2.side;

  return _react.default.createElement(
    'div',
    {
      'aria-hidden': ariaHidden,
      className: (0, _classnames.default)(
        ROOT_CSS + '',
        bubbleStyleSet + '',
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
    nub && acuteNubSVG(nubSize, borderWidth, side, !isPositive(nubOffset))
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
  nub: _propTypes.default.bool
};
var _default = Bubble;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9CdWJibGUuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiYWN1dGVOdWJTVkciLCJudWJTaXplIiwic3Ryb2tlV2lkdGgiLCJzaWRlIiwidXBTaWRlRG93biIsImhhbGZOdWJTaXplIiwiaGFsZlN0cm9rZVdpZHRoIiwiaG9yaXpvbnRhbFRyYW5zZm9ybSIsInZlcnRpY2FsVHJhbnNmb3JtIiwicDEiLCJqb2luIiwicDIiLCJwMyIsImlzUG9zaXRpdmUiLCJ2YWx1ZSIsIkJ1YmJsZSIsImFyaWFIaWRkZW4iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZyb21Vc2VyIiwibnViIiwiYnViYmxlU3R5bGVTZXQiLCJidWJibGUiLCJidWJibGVCb3JkZXJXaWR0aCIsImJ1YmJsZUZyb21Vc2VyQm9yZGVyV2lkdGgiLCJidWJibGVGcm9tVXNlck51YlNpemUiLCJidWJibGVOdWJTaXplIiwiYnViYmxlTnViT2Zmc2V0IiwiYnViYmxlRnJvbVVzZXJOdWJPZmZzZXQiLCJib3JkZXJXaWR0aCIsIm51Yk9mZnNldCIsIndlYmNoYXRfX2J1YmJsZV9oYXNfbnViIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImFueSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRSxVQURTO0FBR25CLG1DQUFpQztBQUMvQjtBQUNBQyxJQUFBQSxRQUFRLEVBQUU7QUFGcUIsR0FIZDtBQVFuQiwrQkFBNkI7QUFDM0JELElBQUFBLFFBQVEsRUFBRTtBQURpQjtBQVJWLENBQUosQ0FBakI7O0FBYUEsU0FBU0UsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLFdBQTlCLEVBQTJDQyxJ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QWMzQ0EsSUFkMkM7O0FBNEJwRixTQUNFO0FBQ0UsbUJBQWFhLFVBRGY7QUFFRSxJQUFBLFNBQVMsRUFBRSx5QkFDVG5CLFFBQVEsR0FBRyxFQURGLEVBRVR3QixjQUFjLEdBQUcsRUFGUixFQUdUO0FBQUUsbUJBQWFGLFFBQWY7QUFBeUJZLE1BQUFBLHVCQUF1QixFQUFFWDtBQUFsRCxLQUhTLEVBSVRGLFNBQVMsR0FBRyxFQUFaLElBQWtCLEVBSlQ7QUFGYixLQVNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEyQ0QsUUFBM0MsQ0FURixFQVVHRyxHQUFHLElBQUlwQixXQUFXLENBQUNDLE9BQUQsRUFBVTRCLFdBQVYsRUFBdUIxQixJQUF2QixFQUE2QixDQUFDVSxVQUFVLENBQUNpQixTQUFELENBQXhDLENBVnJCLENBREY7QUFjRCxDQTFDRDs7QUE0Q0FmLE1BQU0sQ0FBQ2lCLFlBQVAsR0FBc0I7QUFDcEIsaUJBQWUsS0FESztBQUVwQmYsRUFBQUEsUUFBUSxFQUFFZ0IsU0FGVTtBQUdwQmYsRUFBQUEsU0FBUyxFQUFFLEVBSFM7QUFJcEJDLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCQyxFQUFBQSxHQUFHLEVBQUU7QUFMZSxDQUF0QjtBQVFBTCxNQUFNLENBQUNtQixTQUFQLEdBQW1CO0FBQ2pCLGlCQUFlQyxtQkFBVUMsSUFEUjtBQUVqQm5CLEVBQUFBLFFBQVEsRUFBRWtCLG1CQUFVRSxHQUZIO0FBR2pCbkIsRUFBQUEsU0FBUyxFQUFFaUIsbUJBQVVHLE1BSEo7QUFJakJuQixFQUFBQSxRQUFRLEVBQUVnQixtQkFBVUMsSUFKSDtBQUtqQmhCLEVBQUFBLEdBQUcsRUFBRWUsbUJBQVVDO0FBTEUsQ0FBbkI7ZUFRZXJCLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbLTEsIDAsIDEsIDIsIDEwXSB9XSAqL1xuXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVN0eWxlT3B0aW9ucyBmcm9tICcuLi9ob29rcy91c2VTdHlsZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAnJiA+IC53ZWJjaGF0X19idWJibGVfX2NvbnRlbnQnOiB7XG4gICAgLy8gVGhpcyBpcyBmb3IgaGlkaW5nIGNvbnRlbnQgb3V0c2lkZSBvZiB0aGUgYnViYmxlLCBmb3IgZXhhbXBsZSwgY29udGVudCBvdXRzaWRlIG9mIGJvcmRlciByYWRpdXNcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcblxuICAnJiA+IC53ZWJjaGF0X19idWJibGVfX251Yic6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICB9XG59KTtcblxuZnVuY3Rpb24gYWN1dGVOdWJTVkcobnViU2l6ZSwgc3Ryb2tlV2lkdGgsIHNpZGUsIHVwU2lkZURvd24gPSBmYWxzZSkge1xuICBpZiAoIW51YlNpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBoYWxmTnViU2l6ZSA9IG51YlNpemUgLyAyO1xuICBjb25zdCBoYWxmU3Ryb2tlV2lkdGggPSBzdHJva2VXaWR0aCAvIDI7XG5cbiAgLy8gSG9yaXpvbnRhbGx5IG1pcnJvciB0aGUgbnViIGlmIGl0IGlzIGZyb20gdXNlclxuICBjb25zdCBob3Jpem9udGFsVHJhbnNmb3JtID1cbiAgICBzaWRlID09PSAnYm90JyA/ICcnIDogYHRyYW5zbGF0ZSgke2hhbGZOdWJTaXplfSAwKSBzY2FsZSgtMSAxKSB0cmFuc2xhdGUoJHstaGFsZk51YlNpemV9IDApYDtcblxuICAvLyBWZXJ0aWNhbGx5IG1pcnJvciB0aGUgbnViIGlmIGl0IGlzIHVwLXNpZGUtZG93blxuICBjb25zdCB2ZXJ0aWNhbFRyYW5zZm9ybSA9IHVwU2lkZURvd24gPyBgdHJhbnNsYXRlKDAgJHtoYWxmTnViU2l6ZX0pIHNjYWxlKDEgLTEpIHRyYW5zbGF0ZSgwICR7LWhhbGZOdWJTaXplfSlgIDogJyc7XG5cbiAgY29uc3QgcDEgPSBbbnViU2l6ZSwgaGFsZlN0cm9rZVdpZHRoXS5qb2luKCcgJyk7XG4gIGNvbnN0IHAyID0gW3N0cm9rZVdpZHRoLCBoYWxmU3Ryb2tlV2lkdGhdLmpvaW4oJyAnKTtcbiAgY29uc3QgcDMgPSBbbnViU2l6ZSArIHN0cm9rZVdpZHRoLCBudWJTaXplICsgaGFsZlN0cm9rZVdpZHRoXS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJ3ZWJjaGF0X19idWJibGVfX251YlwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHZpZXdCb3g9e2AwIDAgJHtudWJTaXplfSAke251YlNpemV9YH1cbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT17YCR7aG9yaXpvbnRhbFRyYW5zZm9ybX0gJHt2ZXJ0aWNhbFRyYW5zZm9ybX1gfT5cbiAgICAgICAgPHBhdGggZD17YE0ke3AxfSBMJHtwMn0gTCR7cDN9YH0gLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNQb3NpdGl2ZSh2YWx1ZSkge1xuICByZXR1cm4gMSAvIHZhbHVlID49IDA7XG59XG5cbmNvbnN0IEJ1YmJsZSA9ICh7ICdhcmlhLWhpZGRlbic6IGFyaWFIaWRkZW4sIGNoaWxkcmVuLCBjbGFzc05hbWUsIGZyb21Vc2VyLCBudWIgfSkgPT4ge1xuICBjb25zdCBbeyBidWJibGU6IGJ1YmJsZVN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICBjb25zdCBbXG4gICAge1xuICAgICAgYnViYmxlQm9yZGVyV2lkdGgsXG4gICAgICBidWJibGVGcm9tVXNlckJvcmRlcldpZHRoLFxuICAgICAgYnViYmxlRnJvbVVzZXJOdWJTaXplLFxuICAgICAgYnViYmxlTnViU2l6ZSxcbiAgICAgIGJ1YmJsZU51Yk9mZnNldCxcbiAgICAgIGJ1YmJsZUZyb21Vc2VyTnViT2Zmc2V0XG4gICAgfVxuICBdID0gdXNlU3R5bGVPcHRpb25zKCk7XG5cbiAgY29uc3QgeyBib3JkZXJXaWR0aCwgbnViT2Zmc2V0LCBudWJTaXplLCBzaWRlIH0gPSBmcm9tVXNlclxuICAgID8ge1xuICAgICAgICBib3JkZXJXaWR0aDogYnViYmxlRnJvbVVzZXJCb3JkZXJXaWR0aCxcbiAgICAgICAgbnViT2Zmc2V0OiBidWJibGVGcm9tVXNlck51Yk9mZnNldCxcbiAgICAgICAgbnViU2l6ZTogYnViYmxlRnJvbVVzZXJOdWJTaXplLFxuICAgICAgICBzaWRlOiAndXNlcidcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6IGJ1YmJsZUJvcmRlcldpZHRoLFxuICAgICAgICBudWJPZmZzZXQ6IGJ1YmJsZU51Yk9mZnNldCxcbiAgICAgICAgbnViU2l6ZTogYnViYmxlTnViU2l6ZSxcbiAgICAgICAgc2lkZTogJ2JvdCdcbiAgICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWhpZGRlbj17YXJpYUhpZGRlbn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgUk9PVF9DU1MgKyAnJyxcbiAgICAgICAgYnViYmxlU3R5bGVTZXQgKyAnJyxcbiAgICAgICAgeyAnZnJvbS11c2VyJzogZnJvbVVzZXIsIHdlYmNoYXRfX2J1YmJsZV9oYXNfbnViOiBudWIgfSxcbiAgICAgICAgY2xhc3NOYW1lICsgJycgfHwgJydcbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWJjaGF0X19idWJibGVfX2NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICB7bnViICYmIGFjdXRlTnViU1ZHKG51YlNpemUsIGJvcmRlcldpZHRoLCBzaWRlLCAhaXNQb3NpdGl2ZShudWJPZmZzZXQpKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJ1YmJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICdhcmlhLWhpZGRlbic6IGZhbHNlLFxuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBmcm9tVXNlcjogZmFsc2UsXG4gIG51YjogdHJ1ZVxufTtcblxuQnViYmxlLnByb3BUeXBlcyA9IHtcbiAgJ2FyaWEtaGlkZGVuJzogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb21Vc2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbnViOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnViYmxlO1xuIl19
