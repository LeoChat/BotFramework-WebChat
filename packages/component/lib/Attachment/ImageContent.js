'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _CroppedImage = _interopRequireDefault(require('../Utils/CroppedImage'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ImageContent = function ImageContent(_ref) {
  var alt = _ref.alt,
    src = _ref.src,
    styleSet = _ref.styleSet;
  return _react.default.createElement(_CroppedImage.default, {
    alt: alt,
    height: styleSet.options.bubbleImageHeight,
    src: src,
    width: '100%'
  });
};

ImageContent.defaultProps = {
  alt: ''
};
ImageContent.propTypes = {
  alt: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      bubbleImageHeight: _propTypes.default.number.isRequired
    }).isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  return {
    styleSet: styleSet
  };
})(ImageContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQ29udGVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNvbnRlbnQiLCJhbHQiLCJzcmMiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJidWJibGVJbWFnZUhlaWdodCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSxNQUFRQyxHQUFSLFFBQVFBLEdBQVI7QUFBQSxNQUFhQyxRQUFiLFFBQWFBLFFBQWI7QUFBQSxTQUNuQiw2QkFBQyxxQkFBRDtBQUFjLElBQUEsR0FBRyxFQUFFRixHQUFuQjtBQUF3QixJQUFBLE1BQU0sRUFBRUUsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxpQkFBakQ7QUFBb0UsSUFBQSxHQUFHLEVBQUVILEdBQXpFO0FBQThFLElBQUEsS0FBSyxFQUFDO0FBQXBGLElBRG1CO0FBQUEsQ0FBckI7O0FBSUFGLFlBQVksQ0FBQ00sWUFBYixHQUE0QjtBQUMxQkwsRUFBQUEsR0FBRyxFQUFFO0FBRHFCLENBQTVCO0FBSUFELFlBQVksQ0FBQ08sU0FBYixHQUF5QjtBQUN2Qk4sRUFBQUEsR0FBRyxFQUFFTyxtQkFBVUMsTUFEUTtBQUV2QlAsRUFBQUEsR0FBRyxFQUFFTSxtQkFBVUMsTUFBVixDQUFpQkMsVUFGQztBQUd2QlAsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUcsS0FBVixDQUFnQjtBQUN4QlAsSUFBQUEsT0FBTyxFQUFFSSxtQkFBVUcsS0FBVixDQUFnQjtBQUN2Qk4sTUFBQUEsaUJBQWlCLEVBQUVHLG1CQUFVSSxNQUFWLENBQWlCRjtBQURiLEtBQWhCLEVBRU5BO0FBSHFCLEdBQWhCLEVBSVBBO0FBUG9CLENBQXpCOztlQVVlLCtCQUFpQjtBQUFBLE1BQUdQLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1ESCxZQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IENyb3BwZWRJbWFnZSBmcm9tICcuLi9VdGlscy9Dcm9wcGVkSW1hZ2UnO1xuXG5jb25zdCBJbWFnZUNvbnRlbnQgPSAoeyBhbHQsIHNyYywgc3R5bGVTZXQgfSkgPT4gKFxuICA8Q3JvcHBlZEltYWdlIGFsdD17YWx0fSBoZWlnaHQ9e3N0eWxlU2V0Lm9wdGlvbnMuYnViYmxlSW1hZ2VIZWlnaHR9IHNyYz17c3JjfSB3aWR0aD1cIjEwMCVcIiAvPlxuKTtcblxuSW1hZ2VDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJ1xufTtcblxuSW1hZ2VDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGJ1YmJsZUltYWdlSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKEltYWdlQ29udGVudCk7XG4iXX0=
