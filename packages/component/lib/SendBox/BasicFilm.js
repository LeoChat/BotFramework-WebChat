'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _glamor = require('glamor');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _reactFilm = require('react-film');

var _Flipper = _interopRequireDefault(require('./Flipper'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var BASIC_FILM_CSS = (0, _glamor.css)({});
var FILM_STRIP_CSS = (0, _glamor.css)({
  marginLeft: 27,
  marginRight: 27
});
var FLIPPERS_CONTAINER_CSS = (0, _glamor.css)({
  width: '100%',
  position: 'relative'
});

var _default = (0, _connectToWebChat.default)(function(_ref) {
  var styleSet = _ref.styleSet;
  return {
    styleSet: styleSet
  };
})(function(_ref2) {
  var children = _ref2.children,
    showDots = _ref2.showDots;
  return _react.default.createElement(
    _reactFilm.Composer,
    null,
    _react.default.createElement(
      'div',
      {
        className: BASIC_FILM_CSS
      },
      _react.default.createElement(
        'div',
        {
          className: FILM_STRIP_CSS
        },
        _react.default.createElement(_reactFilm.FilmStrip, null, children)
      ),
      _react.default.createElement(_reactFilm.ScrollBar, null),
      _react.default.createElement(
        'div',
        {
          className: FLIPPERS_CONTAINER_CSS
        },
        _react.default.createElement(_Flipper.default, {
          mode: 'left'
        }),
        _react.default.createElement(_Flipper.default, {
          mode: 'right'
        })
      )
    ),
    showDots &&
      _react.default.createElement(_reactFilm.Dots, null, function() {
        return '.';
      })
  );
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0Jhc2ljRmlsbS5qcyJdLCJuYW1lcyI6WyJCQVNJQ19GSUxNX0NTUyIsIkZJTE1fU1RSSVBfQ1NTIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiRkxJUFBFUlNfQ09OVEFJTkVSX0NTUyIsIndpZHRoIiwicG9zaXRpb24iLCJzdHlsZVNldCIsImNoaWxkcmVuIiwic2hvd0RvdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxpQkFBSSxFQUFKLENBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGlCQUFJO0FBQ3pCQyxFQUFBQSxVQUFVLEVBQUUsRUFEYTtBQUV6QkMsRUFBQUEsV0FBVyxFQUFFO0FBRlksQ0FBSixDQUF2QjtBQUtBLElBQU1DLHNCQUFzQixHQUFHLGlCQUFJO0FBQ2pDQyxFQUFBQSxLQUFLLEVBQUUsTUFEMEI7QUFFakNDLEVBQUFBLFFBQVEsRUFBRTtBQUZ1QixDQUFKLENBQS9COztlQUtlLCtCQUFpQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1EO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsUUFBYixTQUFhQSxRQUFiO0FBQUEsU0FDaEUsNkJBQUMsbUJBQUQsUUFDRTtBQUFLLElBQUEsU0FBUyxFQUFFVDtBQUFoQixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVDO0FBQWhCLEtBQ0UsNkJBQUMsb0JBQUQsUUFBWU8sUUFBWixDQURGLENBREYsRUFJRSw2QkFBQyxvQkFBRCxPQUpGLEVBS0U7QUFBSyxJQUFBLFNBQVMsRUFBRUo7QUFBaEIsS0FDRSw2QkFBQyxnQkFBRDtBQUFTLElBQUEsSUFBSSxFQUFDO0FBQWQsSUFERixFQUVFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxJQUFJLEVBQUM7QUFBZCxJQUZGLENBTEYsQ0FERixFQVdHSyxRQUFRLElBQUksNkJBQUMsZUFBRCxRQUFPO0FBQUEsV0FBTSxHQUFOO0FBQUEsR0FBUCxDQVhmLENBRGdFO0FBQUEsQ0FBbkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCB7IENvbXBvc2VyLCBEb3RzLCBGaWxtU3RyaXAsIFNjcm9sbEJhciB9IGZyb20gJ3JlYWN0LWZpbG0nO1xuaW1wb3J0IEZsaXBwZXIgZnJvbSAnLi9GbGlwcGVyJztcblxuY29uc3QgQkFTSUNfRklMTV9DU1MgPSBjc3Moe30pO1xuY29uc3QgRklMTV9TVFJJUF9DU1MgPSBjc3Moe1xuICBtYXJnaW5MZWZ0OiAyNyxcbiAgbWFyZ2luUmlnaHQ6IDI3XG59KTtcblxuY29uc3QgRkxJUFBFUlNfQ09OVEFJTkVSX0NTUyA9IGNzcyh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoKHsgY2hpbGRyZW4sIHNob3dEb3RzIH0pID0+IChcbiAgPENvbXBvc2VyPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtCQVNJQ19GSUxNX0NTU30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17RklMTV9TVFJJUF9DU1N9PlxuICAgICAgICA8RmlsbVN0cmlwPntjaGlsZHJlbn08L0ZpbG1TdHJpcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNjcm9sbEJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZMSVBQRVJTX0NPTlRBSU5FUl9DU1N9PlxuICAgICAgICA8RmxpcHBlciBtb2RlPVwibGVmdFwiIC8+XG4gICAgICAgIDxGbGlwcGVyIG1vZGU9XCJyaWdodFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICB7c2hvd0RvdHMgJiYgPERvdHM+eygpID0+ICcuJ308L0RvdHM+fVxuICA8L0NvbXBvc2VyPlxuKSk7XG4iXX0=
