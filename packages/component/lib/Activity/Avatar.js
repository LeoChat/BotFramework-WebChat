'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectAvatar = exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _CroppedImage = _interopRequireDefault(require('../Utils/CroppedImage'));

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

var connectAvatar = function connectAvatar() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref, _ref2) {
        var _ref$styleSet$options = _ref.styleSet.options,
          botAvatarImage = _ref$styleSet$options.botAvatarImage,
          botAvatarInitials = _ref$styleSet$options.botAvatarInitials,
          userAvatarImage = _ref$styleSet$options.userAvatarImage,
          userAvatarInitials = _ref$styleSet$options.userAvatarInitials;
        var fromUser = _ref2.fromUser;
        return {
          avatarImage: fromUser ? userAvatarImage : botAvatarImage,
          avatarInitials: fromUser ? userAvatarInitials : botAvatarInitials
        };
      }
    ].concat(selectors)
  );
}; // TODO: [P2] Consider memoizing "style={ backgroundImage }" in our upstreamers
//       We have 2 different upstreamers <CarouselFilmStrip> and <StackedLayout>

exports.connectAvatar = connectAvatar;

var Avatar = function Avatar(_ref3) {
  var ariaHidden = _ref3['aria-hidden'],
    avatarImage = _ref3.avatarImage,
    avatarInitials = _ref3.avatarInitials,
    className = _ref3.className,
    fromUser = _ref3.fromUser;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    avatarStyleSet = _useStyleSet2[0].avatar;

  return (
    !!(avatarImage || avatarInitials) &&
    _react.default.createElement(
      'div',
      {
        'aria-hidden': ariaHidden,
        className: (0, _classnames.default)(
          avatarStyleSet + '',
          {
            'from-user': fromUser
          },
          className + ''
        )
      },
      avatarInitials,
      !!avatarImage &&
        _react.default.createElement(_CroppedImage.default, {
          alt: '',
          className: 'image',
          height: '100%',
          src: avatarImage,
          width: '100%'
        })
    )
  );
};

Avatar.defaultProps = {
  'aria-hidden': false,
  avatarImage: '',
  avatarInitials: '',
  className: '',
  fromUser: false
};
Avatar.propTypes = {
  'aria-hidden': _propTypes.default.bool,
  avatarImage: _propTypes.default.string,
  avatarInitials: _propTypes.default.string,
  className: _propTypes.default.string,
  fromUser: _propTypes.default.bool
};

var _default = connectAvatar()(Avatar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9BdmF0YXIuanMiXSwibmFtZXMiOlsiY29ubmVjdEF2YXRhciIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJib3RBdmF0YXJJbWFnZSIsImJvdEF2YXRhckluaXRpYWxzIiwidXNlckF2YXRhckltYWdlIiwidXNlckF2YXRhckluaXRpYWxzIiwiZnJvbVVzZXIiLCJhdmF0YXJJbWFnZSIsImF2YXRhckluaXRpYWxzIiwiQXZhdGFyIiwiYXJpYUhpZGRlbiIsImNsYXNzTmFtZSIsImF2YXRhclN0eWxlU2V0IiwiYXZhdGFyIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsb0NBQUlDLFNBQUo7QUFBSUEsSUFBQUEsU0FBSjtBQUFBOztBQUFBLFNBQ3BCQyx5Q0FDRTtBQUFBLHFDQUVJQyxRQUZKLENBR01DLE9BSE47QUFBQSxRQUdpQkMsY0FIakIseUJBR2lCQSxjQUhqQjtBQUFBLFFBR2lDQyxpQkFIakMseUJBR2lDQSxpQkFIakM7QUFBQSxRQUdvREMsZUFIcEQseUJBR29EQSxlQUhwRDtBQUFBLFFBR3FFQyxrQkFIckUseUJBR3FFQSxrQkFIckU7QUFBQSxRQU1JQyxRQU5KLFNBTUlBLFFBTko7QUFBQSxXQU9NO0FBQ0pDLE1BQUFBLFdBQVcsRUFBRUQsUUFBUSxHQUFHRixlQUFILEdBQXFCRixjQUR0QztBQUVKTSxNQUFBQSxjQUFjLEVBQUVGLFFBQVEsR0FBR0Qsa0JBQUgsR0FBd0JGO0FBRjVDLEtBUE47QUFBQSxHQURGLFNBWUtMLFNBWkwsRUFEb0I7QUFBQSxDQUF0QixDLENBZ0JBO0FBQ0E7Ozs7O0FBRUEsSUFBTVcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBcUY7QUFBQSxNQUFuRUMsVUFBbUUsU0FBbEYsYUFBa0Y7QUFBQSxNQUF2REgsV0FBdUQsU0FBdkRBLFdBQXVEO0FBQUEsTUFBMUNDLGNBQTBDLFNBQTFDQSxjQUEwQztBQUFBLE1BQTFCRyxTQUEwQixTQUExQkEsU0FBMEI7QUFBQSxNQUFmTCxRQUFlLFNBQWZBLFFBQWU7O0FBQUEscUJBQzdELDRCQUQ2RDtBQUFBO0FBQUEsTUFDakZNLGNBRGlGLG9CQUN6RkMsTUFEeUY7O0FBR2xHLFNBQ0UsQ0FBQyxFQUFFTixXQUFXLElBQUlDLGNBQWpCLENBQUQsSUFDRTtBQUNFLG1CQUFhRSxVQURmO0FBRUUsSUFBQSxTQUFTLEVBQUUseUJBQVdFLGNBQWMsR0FBRyxFQUE1QixFQUFnQztBQUFFLG1CQUFhTjtBQUFmLEtBQWhDLEVBQTJESyxTQUFTLEdBQUcsRUFBdkU7QUFGYixLQUlHSCxjQUpILEVBS0csQ0FBQyxDQUFDRCxXQUFGLElBQWlCLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxHQUFHLEVBQUMsRUFBbEI7QUFBcUIsSUFBQSxTQUFTLEVBQUMsT0FBL0I7QUFBdUMsSUFBQSxNQUFNLEVBQUMsTUFBOUM7QUFBcUQsSUFBQSxHQUFHLEVBQUVBLFdBQTFEO0FBQXVFLElBQUEsS0FBSyxFQUFDO0FBQTdFLElBTHBCLENBRko7QUFXRCxDQWREOztBQWdCQUUsTUFBTSxDQUFDSyxZQUFQLEdBQXNCO0FBQ3BCLGlCQUFlLEtBREs7QUFFcEJQLEVBQUFBLFdBQVcsRUFBRSxFQUZPO0FBR3BCQyxFQUFBQSxjQUFjLEVBQUUsRUFISTtBQUlwQkcsRUFBQUEsU0FBUyxFQUFFLEVBSlM7QUFLcEJMLEVBQUFBLFFBQVEsRUFBRTtBQUxVLENBQXRCO0FBUUFHLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQjtBQUNqQixpQkFBZUMsbUJBQVVDLElBRFI7QUFFakJWLEVBQUFBLFdBQVcsRUFBRVMsbUJBQVVFLE1BRk47QUFHakJWLEVBQUFBLGNBQWMsRUFBRVEsbUJBQVVFLE1BSFQ7QUFJakJQLEVBQUFBLFNBQVMsRUFBRUssbUJBQVVFLE1BSko7QUFLakJaLEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVDO0FBTEgsQ0FBbkI7O2VBUWVwQixhQUFhLEdBQUdZLE1BQUgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IENyb3BwZWRJbWFnZSBmcm9tICcuLi9VdGlscy9Dcm9wcGVkSW1hZ2UnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgY29ubmVjdEF2YXRhciA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKFxuICAgICAge1xuICAgICAgICBzdHlsZVNldDoge1xuICAgICAgICAgIG9wdGlvbnM6IHsgYm90QXZhdGFySW1hZ2UsIGJvdEF2YXRhckluaXRpYWxzLCB1c2VyQXZhdGFySW1hZ2UsIHVzZXJBdmF0YXJJbml0aWFscyB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGZyb21Vc2VyIH1cbiAgICApID0+ICh7XG4gICAgICBhdmF0YXJJbWFnZTogZnJvbVVzZXIgPyB1c2VyQXZhdGFySW1hZ2UgOiBib3RBdmF0YXJJbWFnZSxcbiAgICAgIGF2YXRhckluaXRpYWxzOiBmcm9tVXNlciA/IHVzZXJBdmF0YXJJbml0aWFscyA6IGJvdEF2YXRhckluaXRpYWxzXG4gICAgfSksXG4gICAgLi4uc2VsZWN0b3JzXG4gICk7XG5cbi8vIFRPRE86IFtQMl0gQ29uc2lkZXIgbWVtb2l6aW5nIFwic3R5bGU9eyBiYWNrZ3JvdW5kSW1hZ2UgfVwiIGluIG91ciB1cHN0cmVhbWVyc1xuLy8gICAgICAgV2UgaGF2ZSAyIGRpZmZlcmVudCB1cHN0cmVhbWVycyA8Q2Fyb3VzZWxGaWxtU3RyaXA+IGFuZCA8U3RhY2tlZExheW91dD5cblxuY29uc3QgQXZhdGFyID0gKHsgJ2FyaWEtaGlkZGVuJzogYXJpYUhpZGRlbiwgYXZhdGFySW1hZ2UsIGF2YXRhckluaXRpYWxzLCBjbGFzc05hbWUsIGZyb21Vc2VyIH0pID0+IHtcbiAgY29uc3QgW3sgYXZhdGFyOiBhdmF0YXJTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICAhIShhdmF0YXJJbWFnZSB8fCBhdmF0YXJJbml0aWFscykgJiYgKFxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWhpZGRlbj17YXJpYUhpZGRlbn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGF2YXRhclN0eWxlU2V0ICsgJycsIHsgJ2Zyb20tdXNlcic6IGZyb21Vc2VyIH0sIGNsYXNzTmFtZSArICcnKX1cbiAgICAgID5cbiAgICAgICAge2F2YXRhckluaXRpYWxzfVxuICAgICAgICB7ISFhdmF0YXJJbWFnZSAmJiA8Q3JvcHBlZEltYWdlIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltYWdlXCIgaGVpZ2h0PVwiMTAwJVwiIHNyYz17YXZhdGFySW1hZ2V9IHdpZHRoPVwiMTAwJVwiIC8+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICApO1xufTtcblxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgJ2FyaWEtaGlkZGVuJzogZmFsc2UsXG4gIGF2YXRhckltYWdlOiAnJyxcbiAgYXZhdGFySW5pdGlhbHM6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxuICBmcm9tVXNlcjogZmFsc2Vcbn07XG5cbkF2YXRhci5wcm9wVHlwZXMgPSB7XG4gICdhcmlhLWhpZGRlbic6IFByb3BUeXBlcy5ib29sLFxuICBhdmF0YXJJbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXZhdGFySW5pdGlhbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbVVzZXI6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0QXZhdGFyKCkoQXZhdGFyKTtcblxuZXhwb3J0IHsgY29ubmVjdEF2YXRhciB9O1xuIl19
