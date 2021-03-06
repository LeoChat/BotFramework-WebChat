'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// TODO: [P3] Although this is for development purpose, prettify it
var ROOT_CSS = (0, _glamor.css)({
  color: 'Red',
  margin: 0
});

var SayAlt = function SayAlt(_ref) {
  var speak = _ref.speak;
  return (
    !!speak &&
    _react.default.createElement(
      'pre',
      {
        className: ROOT_CSS
      },
      speak
    )
  );
};

SayAlt.defaultProps = {
  speak: ''
};
SayAlt.propTypes = {
  speak: _propTypes.default.string
};
var _default = SayAlt;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpdml0eS9TYXlBbHQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJjb2xvciIsIm1hcmdpbiIsIlNheUFsdCIsInNwZWFrIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUNBLElBQU1BLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsS0FBSyxFQUFFLEtBRFk7QUFFbkJDLEVBQUFBLE1BQU0sRUFBRTtBQUZXLENBQUosQ0FBakI7O0FBS0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlLENBQUMsQ0FBQ0EsS0FBRixJQUFXO0FBQUssSUFBQSxTQUFTLEVBQUVKO0FBQWhCLEtBQTJCSSxLQUEzQixDQUExQjtBQUFBLENBQWY7O0FBRUFELE1BQU0sQ0FBQ0UsWUFBUCxHQUFzQjtBQUNwQkQsRUFBQUEsS0FBSyxFQUFFO0FBRGEsQ0FBdEI7QUFJQUQsTUFBTSxDQUFDRyxTQUFQLEdBQW1CO0FBQ2pCRixFQUFBQSxLQUFLLEVBQUVHLG1CQUFVQztBQURBLENBQW5CO2VBSWVMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIFRPRE86IFtQM10gQWx0aG91Z2ggdGhpcyBpcyBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZSwgcHJldHRpZnkgaXRcbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgY29sb3I6ICdSZWQnLFxuICBtYXJnaW46IDBcbn0pO1xuXG5jb25zdCBTYXlBbHQgPSAoeyBzcGVhayB9KSA9PiAhIXNwZWFrICYmIDxwcmUgY2xhc3NOYW1lPXtST09UX0NTU30+e3NwZWFrfTwvcHJlPjtcblxuU2F5QWx0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc3BlYWs6ICcnXG59O1xuXG5TYXlBbHQucHJvcFR5cGVzID0ge1xuICBzcGVhazogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F5QWx0O1xuIl19
