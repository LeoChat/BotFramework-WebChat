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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
    fromUser = _ref3.fromUser,
    styleSet = _ref3.styleSet;
  return (
    !!(avatarImage || avatarInitials) &&
    _react.default.createElement(
      'div',
      {
        'aria-hidden': ariaHidden,
        className: (0, _classnames.default)(
          styleSet.avatar + '',
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
  fromUser: _propTypes.default.bool,
  styleSet: _propTypes.default.shape({
    avatar: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = connectAvatar(function(_ref4) {
  var styleSet = _ref4.styleSet;
  return {
    styleSet: styleSet
  };
})(Avatar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9BdmF0YXIuanMiXSwibmFtZXMiOlsiY29ubmVjdEF2YXRhciIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJib3RBdmF0YXJJbWFnZSIsImJvdEF2YXRhckluaXRpYWxzIiwidXNlckF2YXRhckltYWdlIiwidXNlckF2YXRhckluaXRpYWxzIiwiZnJvbVVzZXIiLCJhdmF0YXJJbWFnZSIsImF2YXRhckluaXRpYWxzIiwiQXZhdGFyIiwiYXJpYUhpZGRlbiIsImNsYXNzTmFtZSIsImF2YXRhciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJzaGFwZSIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxvQ0FBSUMsU0FBSjtBQUFJQSxJQUFBQSxTQUFKO0FBQUE7O0FBQUEsU0FDcEJDLHlDQUNFO0FBQUEscUNBRUlDLFFBRkosQ0FHTUMsT0FITjtBQUFBLFFBR2lCQyxjQUhqQix5QkFHaUJBLGNBSGpCO0FBQUEsUUFHaUNDLGlCQUhqQyx5QkFHaUNBLGlCQUhqQztBQUFBLFFBR29EQyxlQUhwRCx5QkFHb0RBLGVBSHBEO0FBQUEsUUFHcUVDLGtCQUhyRSx5QkFHcUVBLGtCQUhyRTtBQUFBLFFBTUlDLFFBTkosU0FNSUEsUUFOSjtBQUFBLFdBT007QUFDSkMsTUFBQUEsV0FBVyxFQUFFRCxRQUFRLEdBQUdGLGVBQUgsR0FBcUJGLGNBRHRDO0FBRUpNLE1BQUFBLGNBQWMsRUFBRUYsUUFBUSxHQUFHRCxrQkFBSCxHQUF3QkY7QUFGNUMsS0FQTjtBQUFBLEdBREYsU0FZS0wsU0FaTCxFQURvQjtBQUFBLENBQXRCLEMsQ0FnQkE7QUFDQTs7Ozs7QUFFQSxJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQWtCQyxVQUFsQixTQUFHLGFBQUg7QUFBQSxNQUE4QkgsV0FBOUIsU0FBOEJBLFdBQTlCO0FBQUEsTUFBMkNDLGNBQTNDLFNBQTJDQSxjQUEzQztBQUFBLE1BQTJERyxTQUEzRCxTQUEyREEsU0FBM0Q7QUFBQSxNQUFzRUwsUUFBdEUsU0FBc0VBLFFBQXRFO0FBQUEsTUFBZ0ZOLFFBQWhGLFNBQWdGQSxRQUFoRjtBQUFBLFNBQ2IsQ0FBQyxFQUFFTyxXQUFXLElBQUlDLGNBQWpCLENBQUQsSUFDRTtBQUNFLG1CQUFhRSxVQURmO0FBRUUsSUFBQSxTQUFTLEVBQUUseUJBQVdWLFFBQVEsQ0FBQ1ksTUFBVCxHQUFrQixFQUE3QixFQUFpQztBQUFFLG1CQUFhTjtBQUFmLEtBQWpDLEVBQTRESyxTQUFTLEdBQUcsRUFBeEU7QUFGYixLQUlHSCxjQUpILEVBS0csQ0FBQyxDQUFDRCxXQUFGLElBQWlCLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxHQUFHLEVBQUMsRUFBbEI7QUFBcUIsSUFBQSxTQUFTLEVBQUMsT0FBL0I7QUFBdUMsSUFBQSxNQUFNLEVBQUMsTUFBOUM7QUFBcUQsSUFBQSxHQUFHLEVBQUVBLFdBQTFEO0FBQXVFLElBQUEsS0FBSyxFQUFDO0FBQTdFLElBTHBCLENBRlc7QUFBQSxDQUFmOztBQVdBRSxNQUFNLENBQUNJLFlBQVAsR0FBc0I7QUFDcEIsaUJBQWUsS0FESztBQUVwQk4sRUFBQUEsV0FBVyxFQUFFLEVBRk87QUFHcEJDLEVBQUFBLGNBQWMsRUFBRSxFQUhJO0FBSXBCRyxFQUFBQSxTQUFTLEVBQUUsRUFKUztBQUtwQkwsRUFBQUEsUUFBUSxFQUFFO0FBTFUsQ0FBdEI7QUFRQUcsTUFBTSxDQUFDSyxTQUFQLEdBQW1CO0FBQ2pCLGlCQUFlQyxtQkFBVUMsSUFEUjtBQUVqQlQsRUFBQUEsV0FBVyxFQUFFUSxtQkFBVUUsTUFGTjtBQUdqQlQsRUFBQUEsY0FBYyxFQUFFTyxtQkFBVUUsTUFIVDtBQUlqQk4sRUFBQUEsU0FBUyxFQUFFSSxtQkFBVUUsTUFKSjtBQUtqQlgsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUMsSUFMSDtBQU1qQmhCLEVBQUFBLFFBQVEsRUFBRWUsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDeEJOLElBQUFBLE1BQU0sRUFBRUcsbUJBQVVJLEdBQVYsQ0FBY0M7QUFERSxHQUFoQixFQUVQQTtBQVJjLENBQW5COztlQVdldkIsYUFBYSxDQUFDO0FBQUEsTUFBR0csUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBRCxDQUFiLENBQWdEUyxNQUFoRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgQ3JvcHBlZEltYWdlIGZyb20gJy4uL1V0aWxzL0Nyb3BwZWRJbWFnZSc7XG5cbmNvbnN0IGNvbm5lY3RBdmF0YXIgPSAoLi4uc2VsZWN0b3JzKSA9PlxuICBjb25uZWN0VG9XZWJDaGF0KFxuICAgIChcbiAgICAgIHtcbiAgICAgICAgc3R5bGVTZXQ6IHtcbiAgICAgICAgICBvcHRpb25zOiB7IGJvdEF2YXRhckltYWdlLCBib3RBdmF0YXJJbml0aWFscywgdXNlckF2YXRhckltYWdlLCB1c2VyQXZhdGFySW5pdGlhbHMgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBmcm9tVXNlciB9XG4gICAgKSA9PiAoe1xuICAgICAgYXZhdGFySW1hZ2U6IGZyb21Vc2VyID8gdXNlckF2YXRhckltYWdlIDogYm90QXZhdGFySW1hZ2UsXG4gICAgICBhdmF0YXJJbml0aWFsczogZnJvbVVzZXIgPyB1c2VyQXZhdGFySW5pdGlhbHMgOiBib3RBdmF0YXJJbml0aWFsc1xuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG4vLyBUT0RPOiBbUDJdIENvbnNpZGVyIG1lbW9pemluZyBcInN0eWxlPXsgYmFja2dyb3VuZEltYWdlIH1cIiBpbiBvdXIgdXBzdHJlYW1lcnNcbi8vICAgICAgIFdlIGhhdmUgMiBkaWZmZXJlbnQgdXBzdHJlYW1lcnMgPENhcm91c2VsRmlsbVN0cmlwPiBhbmQgPFN0YWNrZWRMYXlvdXQ+XG5cbmNvbnN0IEF2YXRhciA9ICh7ICdhcmlhLWhpZGRlbic6IGFyaWFIaWRkZW4sIGF2YXRhckltYWdlLCBhdmF0YXJJbml0aWFscywgY2xhc3NOYW1lLCBmcm9tVXNlciwgc3R5bGVTZXQgfSkgPT5cbiAgISEoYXZhdGFySW1hZ2UgfHwgYXZhdGFySW5pdGlhbHMpICYmIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWhpZGRlbj17YXJpYUhpZGRlbn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5hdmF0YXIgKyAnJywgeyAnZnJvbS11c2VyJzogZnJvbVVzZXIgfSwgY2xhc3NOYW1lICsgJycpfVxuICAgID5cbiAgICAgIHthdmF0YXJJbml0aWFsc31cbiAgICAgIHshIWF2YXRhckltYWdlICYmIDxDcm9wcGVkSW1hZ2UgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPXthdmF0YXJJbWFnZX0gd2lkdGg9XCIxMDAlXCIgLz59XG4gICAgPC9kaXY+XG4gICk7XG5cbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XG4gICdhcmlhLWhpZGRlbic6IGZhbHNlLFxuICBhdmF0YXJJbWFnZTogJycsXG4gIGF2YXRhckluaXRpYWxzOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZnJvbVVzZXI6IGZhbHNlXG59O1xuXG5BdmF0YXIucHJvcFR5cGVzID0ge1xuICAnYXJpYS1oaWRkZW4nOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXZhdGFySW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhckluaXRpYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb21Vc2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXZhdGFyOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdEF2YXRhcigoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoQXZhdGFyKTtcblxuZXhwb3J0IHsgY29ubmVjdEF2YXRhciB9O1xuIl19
