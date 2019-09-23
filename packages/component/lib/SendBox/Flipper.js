'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectFlipper = exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactFilm = require('react-film');

var _ArrowRight = _interopRequireDefault(require('./Assets/ArrowRight'));

var _ArrowLeft = _interopRequireDefault(require('./Assets/ArrowLeft'));

var _glamor = require('glamor');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FLIPPER_CSS = (0, _glamor.css)({
  position: 'absolute',
  backgroundColor: 'transparent',
  color: '#dcdcdc',
  marginTop: -45,
  opacity: 0.4,
  overflow: 'hidden',
  padding: 0,
  borderWidth: 0,
  cursor: 'pointer',
  '& svg path': {
    fill: '#454545'
  },
  '&:focus, &:hover': {
    outline: 0,
    opacity: 0.9
  },
  '&:active': {
    outline: 0,
    border: 0,
    opacity: 0.9
  },
  '&.right.ltr': {
    right: 0
  },
  '&.left.ltr': {
    left: 0
  },
  '&.rtl': {
    transform: 'scaleX(-1)',
    filter: 'FlipH'
  },
  '&.right.rtl': {
    left: 0
  },
  '&.left.rtl': {
    right: 0
  }
});

var connectFlipper = function connectFlipper() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var direction = _ref.direction;
        return {
          direction: direction
        };
      }
    ].concat(selectors)
  );
};

exports.connectFlipper = connectFlipper;

var _default = connectFlipper(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(function(_ref3) {
  var direction = _ref3.direction,
    mode = _ref3.mode;
  return _react.default.createElement(_reactFilm.Context.Consumer, null, function(context) {
    return _react.default.createElement(
      'button',
      {
        className: [FLIPPER_CSS, direction, mode].join(' '),
        'data-direction': mode,
        onClick: mode === 'left' ? context.scrollOneLeft : context.scrollOneRight,
        type: 'button'
      },
      mode === 'left'
        ? _react.default.createElement(_ArrowLeft.default, null)
        : _react.default.createElement(_ArrowRight.default, null)
    );
  });
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ZsaXBwZXIuanMiXSwibmFtZXMiOlsiRkxJUFBFUl9DU1MiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luVG9wIiwib3BhY2l0eSIsIm92ZXJmbG93IiwicGFkZGluZyIsImJvcmRlcldpZHRoIiwiY3Vyc29yIiwiZmlsbCIsIm91dGxpbmUiLCJib3JkZXIiLCJyaWdodCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXIiLCJjb25uZWN0RmxpcHBlciIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJkaXJlY3Rpb24iLCJzdHlsZVNldCIsIm1vZGUiLCJjb250ZXh0Iiwiam9pbiIsInNjcm9sbE9uZUxlZnQiLCJzY3JvbGxPbmVSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLGlCQUFJO0FBQ3RCQyxFQUFBQSxRQUFRLEVBQUUsVUFEWTtBQUV0QkMsRUFBQUEsZUFBZSxFQUFFLGFBRks7QUFHdEJDLEVBQUFBLEtBQUssRUFBRSxTQUhlO0FBSXRCQyxFQUFBQSxTQUFTLEVBQUUsQ0FBQyxFQUpVO0FBS3RCQyxFQUFBQSxPQUFPLEVBQUUsR0FMYTtBQU10QkMsRUFBQUEsUUFBUSxFQUFFLFFBTlk7QUFPdEJDLEVBQUFBLE9BQU8sRUFBRSxDQVBhO0FBUXRCQyxFQUFBQSxXQUFXLEVBQUUsQ0FSUztBQVN0QkMsRUFBQUEsTUFBTSxFQUFFLFNBVGM7QUFXdEIsZ0JBQWM7QUFDWkMsSUFBQUEsSUFBSSxFQUFFO0FBRE0sR0FYUTtBQWV0QixzQkFBb0I7QUFDbEJDLElBQUFBLE9BQU8sRUFBRSxDQURTO0FBRWxCTixJQUFBQSxPQUFPLEVBQUU7QUFGUyxHQWZFO0FBb0J0QixjQUFZO0FBQ1ZNLElBQUFBLE9BQU8sRUFBRSxDQURDO0FBRVZDLElBQUFBLE1BQU0sRUFBRSxDQUZFO0FBR1ZQLElBQUFBLE9BQU8sRUFBRTtBQUhDLEdBcEJVO0FBMEJ0QixpQkFBZTtBQUNiUSxJQUFBQSxLQUFLLEVBQUU7QUFETSxHQTFCTztBQThCdEIsZ0JBQWM7QUFDWkMsSUFBQUEsSUFBSSxFQUFFO0FBRE0sR0E5QlE7QUFrQ3RCLFdBQVM7QUFDUEMsSUFBQUEsU0FBUyxFQUFFLFlBREo7QUFFUEMsSUFBQUEsTUFBTSxFQUFFO0FBRkQsR0FsQ2E7QUF1Q3RCLGlCQUFlO0FBQ2JGLElBQUFBLElBQUksRUFBRTtBQURPLEdBdkNPO0FBMkN0QixnQkFBYztBQUNaRCxJQUFBQSxLQUFLLEVBQUU7QUFESztBQTNDUSxDQUFKLENBQXBCOztBQWdEQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsb0NBQUlDLFNBQUo7QUFBSUEsSUFBQUEsU0FBSjtBQUFBOztBQUFBLFNBQ3JCQyx5Q0FDRTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW9CO0FBQ2xCQSxNQUFBQSxTQUFTLEVBQVRBO0FBRGtCLEtBQXBCO0FBQUEsR0FERixTQUlLRixTQUpMLEVBRHFCO0FBQUEsQ0FBdkI7Ozs7ZUFRZUQsY0FBYyxDQUFDO0FBQUEsTUFBR0ksUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBRCxDQUFkLENBQWlEO0FBQUEsTUFBR0QsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0UsSUFBZCxTQUFjQSxJQUFkO0FBQUEsU0FDOUQsNkJBQUMsa0JBQUQsQ0FBUyxRQUFULFFBQ0csVUFBQUMsT0FBTztBQUFBLFdBQ047QUFDRSxNQUFBLFNBQVMsRUFBRSxDQUFDdkIsV0FBRCxFQUFjb0IsU0FBZCxFQUF5QkUsSUFBekIsRUFBK0JFLElBQS9CLENBQW9DLEdBQXBDLENBRGI7QUFFRSx3QkFBZ0JGLElBRmxCO0FBR0UsTUFBQSxPQUFPLEVBQUVBLElBQUksS0FBSyxNQUFULEdBQWtCQyxPQUFPLENBQUNFLGFBQTFCLEdBQTBDRixPQUFPLENBQUNHLGNBSDdEO0FBSUUsTUFBQSxJQUFJLEVBQUM7QUFKUCxPQU1HSixJQUFJLEtBQUssTUFBVCxHQUFrQiw2QkFBQyxrQkFBRCxPQUFsQixHQUFrQyw2QkFBQyxtQkFBRCxPQU5yQyxDQURNO0FBQUEsR0FEVixDQUQ4RDtBQUFBLENBQWpELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ3JlYWN0LWZpbG0nO1xuaW1wb3J0IEFycm93UmlnaHQgZnJvbSAnLi9Bc3NldHMvQXJyb3dSaWdodCc7XG5pbXBvcnQgQXJyb3dMZWZ0IGZyb20gJy4vQXNzZXRzL0Fycm93TGVmdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgRkxJUFBFUl9DU1MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyNkY2RjZGMnLFxuICBtYXJnaW5Ub3A6IC00NSxcbiAgb3BhY2l0eTogMC40LFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBhZGRpbmc6IDAsXG4gIGJvcmRlcldpZHRoOiAwLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcblxuICAnJiBzdmcgcGF0aCc6IHtcbiAgICBmaWxsOiAnIzQ1NDU0NSdcbiAgfSxcblxuICAnJjpmb2N1cywgJjpob3Zlcic6IHtcbiAgICBvdXRsaW5lOiAwLFxuICAgIG9wYWNpdHk6IDAuOVxuICB9LFxuXG4gICcmOmFjdGl2ZSc6IHtcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBvcGFjaXR5OiAwLjlcbiAgfSxcblxuICAnJi5yaWdodC5sdHInOiB7XG4gICAgcmlnaHQ6IDBcbiAgfSxcblxuICAnJi5sZWZ0Lmx0cic6IHtcbiAgICBsZWZ0OiAwXG4gIH0sXG5cbiAgJyYucnRsJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgtMSknLFxuICAgIGZpbHRlcjogJ0ZsaXBIJ1xuICB9LFxuXG4gICcmLnJpZ2h0LnJ0bCc6IHtcbiAgICBsZWZ0OiAwXG4gIH0sXG5cbiAgJyYubGVmdC5ydGwnOiB7XG4gICAgcmlnaHQ6IDBcbiAgfVxufSk7XG5cbmNvbnN0IGNvbm5lY3RGbGlwcGVyID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdChcbiAgICAoeyBkaXJlY3Rpb24gfSkgPT4gKHtcbiAgICAgIGRpcmVjdGlvblxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RmxpcHBlcigoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoKHsgZGlyZWN0aW9uLCBtb2RlIH0pID0+IChcbiAgPENvbnRleHQuQ29uc3VtZXI+XG4gICAge2NvbnRleHQgPT4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1tGTElQUEVSX0NTUywgZGlyZWN0aW9uLCBtb2RlXS5qb2luKCcgJyl9XG4gICAgICAgIGRhdGEtZGlyZWN0aW9uPXttb2RlfVxuICAgICAgICBvbkNsaWNrPXttb2RlID09PSAnbGVmdCcgPyBjb250ZXh0LnNjcm9sbE9uZUxlZnQgOiBjb250ZXh0LnNjcm9sbE9uZVJpZ2h0fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAge21vZGUgPT09ICdsZWZ0JyA/IDxBcnJvd0xlZnQgLz4gOiA8QXJyb3dSaWdodCAvPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICl9XG4gIDwvQ29udGV4dC5Db25zdW1lcj5cbikpO1xuXG5leHBvcnQgeyBjb25uZWN0RmxpcHBlciB9O1xuIl19
