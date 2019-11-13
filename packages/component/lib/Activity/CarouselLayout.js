'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _reactFilm = require('react-film');

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CarouselFilmStrip = _interopRequireDefault(require('./CarouselFilmStrip'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

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
  overflow: 'hidden',
  position: 'relative'
});

var CarouselLayout = function CarouselLayout(_ref) {
  var activity = _ref.activity,
    children = _ref.children,
    timestampClassName = _ref.timestampClassName;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    carouselFlipperStyleSet = _useStyleSet2[0].carouselFlipper;

  var leftLabel = (0, _useLocalize.default)('Left');
  var rightLabel = (0, _useLocalize.default)('Right');
  var filmStyleSet = (0, _reactFilm.createBasicStyleSet)({
    cursor: null
  });
  return _react.default.createElement(
    _reactFilm.Composer,
    {
      numItems: _react.default.Children.count(children)
    },
    _react.default.createElement(_reactFilm.Context.Consumer, null, function(_ref2) {
      var scrollBarWidth = _ref2.scrollBarWidth;
      return _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)(ROOT_CSS + '', filmStyleSet.carousel + '')
        },
        _react.default.createElement(
          _CarouselFilmStrip.default,
          {
            activity: activity,
            timestampClassName: timestampClassName
          },
          children
        ),
        scrollBarWidth !== '100%' &&
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(
              _reactFilm.Flipper,
              {
                'aria-label': leftLabel,
                className: (0, _classnames.default)(carouselFlipperStyleSet + '', filmStyleSet.leftFlipper + ''),
                mode: 'left'
              },
              _react.default.createElement(
                'div',
                {
                  className: 'button'
                },
                '<'
              )
            ),
            _react.default.createElement(
              _reactFilm.Flipper,
              {
                'aria-label': rightLabel,
                className: (0, _classnames.default)(carouselFlipperStyleSet + '', filmStyleSet.rightFlipper + ''),
                mode: 'right'
              },
              _react.default.createElement(
                'div',
                {
                  className: 'button'
                },
                '>'
              )
            )
          )
      );
    })
  );
};

CarouselLayout.defaultProps = {
  children: undefined,
  timestampClassName: ''
};
CarouselLayout.propTypes = {
  activity: _propTypes.default.any.isRequired,
  children: _propTypes.default.any,
  timestampClassName: _propTypes.default.string
};
var _default = CarouselLayout;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9DYXJvdXNlbExheW91dC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJDYXJvdXNlbExheW91dCIsImFjdGl2aXR5IiwiY2hpbGRyZW4iLCJ0aW1lc3RhbXBDbGFzc05hbWUiLCJjYXJvdXNlbEZsaXBwZXJTdHlsZVNldCIsImNhcm91c2VsRmxpcHBlciIsImxlZnRMYWJlbCIsInJpZ2h0TGFiZWwiLCJmaWxtU3R5bGVTZXQiLCJjdXJzb3IiLCJSZWFjdCIsIkNoaWxkcmVuIiwiY291bnQiLCJzY3JvbGxCYXJXaWR0aCIsImNhcm91c2VsIiwibGVmdEZsaXBwZXIiLCJyaWdodEZsaXBwZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsUUFBUSxFQUFFLFFBRFM7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRTtBQUZTLENBQUosQ0FBakI7O0FBS0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUFBLHFCQUNkLDRCQURjO0FBQUE7QUFBQSxNQUMzQ0MsdUJBRDJDLG9CQUM1REMsZUFENEQ7O0FBRXJFLE1BQU1DLFNBQVMsR0FBRywwQkFBWSxNQUFaLENBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLDBCQUFZLE9BQVosQ0FBbkI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsb0NBQW9CO0FBQUVDLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQXBCLENBQXJCO0FBRUEsU0FDRSw2QkFBQyxtQkFBRDtBQUFVLElBQUEsUUFBUSxFQUFFQyxlQUFNQyxRQUFOLENBQWVDLEtBQWYsQ0FBcUJWLFFBQXJCO0FBQXBCLEtBQ0UsNkJBQUMsa0JBQUQsQ0FBYSxRQUFiLFFBQ0c7QUFBQSxRQUFHVyxjQUFILFNBQUdBLGNBQUg7QUFBQSxXQUNDO0FBQUssTUFBQSxTQUFTLEVBQUUseUJBQVdoQixRQUFRLEdBQUcsRUFBdEIsRUFBMEJXLFlBQVksQ0FBQ00sUUFBYixHQUF3QixFQUFsRDtBQUFoQixPQUNFLDZCQUFDLDBCQUFEO0FBQW1CLE1BQUEsUUFBUSxFQUFFYixRQUE3QjtBQUF1QyxNQUFBLGtCQUFrQixFQUFFRTtBQUEzRCxPQUNHRCxRQURILENBREYsRUFJR1csY0FBYyxLQUFLLE1BQW5CLElBQ0MsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyxrQkFBRDtBQUNFLG9CQUFZUCxTQURkO0FBRUUsTUFBQSxTQUFTLEVBQUUseUJBQVdGLHVCQUF1QixHQUFHLEVBQXJDLEVBQXlDSSxZQUFZLENBQUNPLFdBQWIsR0FBMkIsRUFBcEUsQ0FGYjtBQUdFLE1BQUEsSUFBSSxFQUFDO0FBSFAsT0FLRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FBeUIsR0FBekIsQ0FMRixDQURGLEVBUUUsNkJBQUMsa0JBQUQ7QUFDRSxvQkFBWVIsVUFEZDtBQUVFLE1BQUEsU0FBUyxFQUFFLHlCQUFXSCx1QkFBdUIsR0FBRyxFQUFyQyxFQUF5Q0ksWUFBWSxDQUFDUSxZQUFiLEdBQTRCLEVBQXJFLENBRmI7QUFHRSxNQUFBLElBQUksRUFBQztBQUhQLE9BS0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQXlCLEdBQXpCLENBTEYsQ0FSRixDQUxKLENBREQ7QUFBQSxHQURILENBREYsQ0FERjtBQStCRCxDQXRDRDs7QUF3Q0FoQixjQUFjLENBQUNpQixZQUFmLEdBQThCO0FBQzVCZixFQUFBQSxRQUFRLEVBQUVnQixTQURrQjtBQUU1QmYsRUFBQUEsa0JBQWtCLEVBQUU7QUFGUSxDQUE5QjtBQUtBSCxjQUFjLENBQUNtQixTQUFmLEdBQTJCO0FBQ3pCbEIsRUFBQUEsUUFBUSxFQUFFbUIsbUJBQVVDLEdBQVYsQ0FBY0MsVUFEQztBQUV6QnBCLEVBQUFBLFFBQVEsRUFBRWtCLG1CQUFVQyxHQUZLO0FBR3pCbEIsRUFBQUEsa0JBQWtCLEVBQUVpQixtQkFBVUc7QUFITCxDQUEzQjtlQU1ldkIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2VyLCBDb250ZXh0IGFzIEZpbG1Db250ZXh0LCBjcmVhdGVCYXNpY1N0eWxlU2V0LCBGbGlwcGVyIH0gZnJvbSAncmVhY3QtZmlsbSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhcm91c2VsRmlsbVN0cmlwIGZyb20gJy4vQ2Fyb3VzZWxGaWxtU3RyaXAnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSk7XG5cbmNvbnN0IENhcm91c2VsTGF5b3V0ID0gKHsgYWN0aXZpdHksIGNoaWxkcmVuLCB0aW1lc3RhbXBDbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBbeyBjYXJvdXNlbEZsaXBwZXI6IGNhcm91c2VsRmxpcHBlclN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcbiAgY29uc3QgbGVmdExhYmVsID0gdXNlTG9jYWxpemUoJ0xlZnQnKTtcbiAgY29uc3QgcmlnaHRMYWJlbCA9IHVzZUxvY2FsaXplKCdSaWdodCcpO1xuXG4gIGNvbnN0IGZpbG1TdHlsZVNldCA9IGNyZWF0ZUJhc2ljU3R5bGVTZXQoeyBjdXJzb3I6IG51bGwgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9zZXIgbnVtSXRlbXM9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKX0+XG4gICAgICA8RmlsbUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBzY3JvbGxCYXJXaWR0aCB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgZmlsbVN0eWxlU2V0LmNhcm91c2VsICsgJycpfT5cbiAgICAgICAgICAgIDxDYXJvdXNlbEZpbG1TdHJpcCBhY3Rpdml0eT17YWN0aXZpdHl9IHRpbWVzdGFtcENsYXNzTmFtZT17dGltZXN0YW1wQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9DYXJvdXNlbEZpbG1TdHJpcD5cbiAgICAgICAgICAgIHtzY3JvbGxCYXJXaWR0aCAhPT0gJzEwMCUnICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxGbGlwcGVyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsZWZ0TGFiZWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2Fyb3VzZWxGbGlwcGVyU3R5bGVTZXQgKyAnJywgZmlsbVN0eWxlU2V0LmxlZnRGbGlwcGVyICsgJycpfVxuICAgICAgICAgICAgICAgICAgbW9kZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+eyc8J308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZsaXBwZXI+XG4gICAgICAgICAgICAgICAgPEZsaXBwZXJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3JpZ2h0TGFiZWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2Fyb3VzZWxGbGlwcGVyU3R5bGVTZXQgKyAnJywgZmlsbVN0eWxlU2V0LnJpZ2h0RmxpcHBlciArICcnKX1cbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj57Jz4nfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmxpcHBlcj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0ZpbG1Db250ZXh0LkNvbnN1bWVyPlxuICAgIDwvQ29tcG9zZXI+XG4gICk7XG59O1xuXG5DYXJvdXNlbExheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHRpbWVzdGFtcENsYXNzTmFtZTogJydcbn07XG5cbkNhcm91c2VsTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHRpbWVzdGFtcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxMYXlvdXQ7XG4iXX0=
