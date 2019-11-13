'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'relative',
  '& > img': {
    height: 'auto',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%'
  }
});

var CroppedImage = function CroppedImage(_ref) {
  var alt = _ref.alt,
    className = _ref.className,
    height = _ref.height,
    src = _ref.src,
    width = _ref.width;
  var sizeStyle = (0, _react.useMemo)(
    function() {
      return {
        height: height,
        width: width
      };
    },
    [height, width]
  );
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', className + ''),
      style: sizeStyle
    },
    _react.default.createElement('img', {
      alt: alt,
      src: src
    })
  );
};

CroppedImage.defaultProps = {
  alt: '',
  className: ''
};
CroppedImage.propTypes = {
  alt: _propTypes.default.string,
  className: _propTypes.default.string,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
};
var _default = CroppedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9Dcm9wcGVkSW1hZ2UuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwiQ3JvcHBlZEltYWdlIiwiYWx0IiwiY2xhc3NOYW1lIiwic3JjIiwic2l6ZVN0eWxlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsUUFBUSxFQUFFLFFBRFM7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRSxVQUZTO0FBSW5CLGFBQVc7QUFDVEMsSUFBQUEsTUFBTSxFQUFFLE1BREM7QUFFVEMsSUFBQUEsSUFBSSxFQUFFLEtBRkc7QUFHVEYsSUFBQUEsUUFBUSxFQUFFLFVBSEQ7QUFJVEcsSUFBQUEsR0FBRyxFQUFFLEtBSkk7QUFLVEMsSUFBQUEsU0FBUyxFQUFFLHVCQUxGO0FBTVRDLElBQUFBLEtBQUssRUFBRTtBQU5FO0FBSlEsQ0FBSixDQUFqQjs7QUFjQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE0QztBQUFBLE1BQXpDQyxHQUF5QyxRQUF6Q0EsR0FBeUM7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJQLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCUSxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxNQUFaSixLQUFZLFFBQVpBLEtBQVk7QUFDL0QsTUFBTUssU0FBUyxHQUFHLG9CQUFRO0FBQUEsV0FBTztBQUFFVCxNQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVUksTUFBQUEsS0FBSyxFQUFMQTtBQUFWLEtBQVA7QUFBQSxHQUFSLEVBQW1DLENBQUNKLE1BQUQsRUFBU0ksS0FBVCxDQUFuQyxDQUFsQjtBQUVBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBV1AsUUFBUSxHQUFHLEVBQXRCLEVBQTBCVSxTQUFTLEdBQUcsRUFBdEMsQ0FBaEI7QUFBMkQsSUFBQSxLQUFLLEVBQUVFO0FBQWxFLEtBQ0U7QUFBSyxJQUFBLEdBQUcsRUFBRUgsR0FBVjtBQUFlLElBQUEsR0FBRyxFQUFFRTtBQUFwQixJQURGLENBREY7QUFLRCxDQVJEOztBQVVBSCxZQUFZLENBQUNLLFlBQWIsR0FBNEI7QUFDMUJKLEVBQUFBLEdBQUcsRUFBRSxFQURxQjtBQUUxQkMsRUFBQUEsU0FBUyxFQUFFO0FBRmUsQ0FBNUI7QUFLQUYsWUFBWSxDQUFDTSxTQUFiLEdBQXlCO0FBQ3ZCTCxFQUFBQSxHQUFHLEVBQUVNLG1CQUFVQyxNQURRO0FBRXZCTixFQUFBQSxTQUFTLEVBQUVLLG1CQUFVQyxNQUZFO0FBR3ZCYixFQUFBQSxNQUFNLEVBQUVZLG1CQUFVRSxNQUFWLENBQWlCQyxVQUhGO0FBSXZCUCxFQUFBQSxHQUFHLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCRSxVQUpDO0FBS3ZCWCxFQUFBQSxLQUFLLEVBQUVRLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVRSxNQUFYLEVBQW1CRixtQkFBVUMsTUFBN0IsQ0FBcEIsRUFBMERFO0FBTDFDLENBQXpCO2VBUWVWLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAnJiA+IGltZyc6IHtcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59KTtcblxuY29uc3QgQ3JvcHBlZEltYWdlID0gKHsgYWx0LCBjbGFzc05hbWUsIGhlaWdodCwgc3JjLCB3aWR0aCB9KSA9PiB7XG4gIGNvbnN0IHNpemVTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgaGVpZ2h0LCB3aWR0aCB9KSwgW2hlaWdodCwgd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycsIGNsYXNzTmFtZSArICcnKX0gc3R5bGU9e3NpemVTdHlsZX0+XG4gICAgICA8aW1nIGFsdD17YWx0fSBzcmM9e3NyY30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNyb3BwZWRJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbkNyb3BwZWRJbWFnZS5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JvcHBlZEltYWdlO1xuIl19
