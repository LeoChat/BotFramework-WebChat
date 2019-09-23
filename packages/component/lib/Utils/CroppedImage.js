'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9Dcm9wcGVkSW1hZ2UuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwiQ3JvcHBlZEltYWdlIiwiYWx0IiwiY2xhc3NOYW1lIiwic3JjIiwic2l6ZVN0eWxlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRSxRQURTO0FBRW5CQyxFQUFBQSxRQUFRLEVBQUUsVUFGUztBQUluQixhQUFXO0FBQ1RDLElBQUFBLE1BQU0sRUFBRSxNQURDO0FBRVRDLElBQUFBLElBQUksRUFBRSxLQUZHO0FBR1RGLElBQUFBLFFBQVEsRUFBRSxVQUhEO0FBSVRHLElBQUFBLEdBQUcsRUFBRSxLQUpJO0FBS1RDLElBQUFBLFNBQVMsRUFBRSx1QkFMRjtBQU1UQyxJQUFBQSxLQUFLLEVBQUU7QUFORTtBQUpRLENBQUosQ0FBakI7O0FBY0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBNEM7QUFBQSxNQUF6Q0MsR0FBeUMsUUFBekNBLEdBQXlDO0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCUCxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxNQUFqQlEsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsTUFBWkosS0FBWSxRQUFaQSxLQUFZO0FBQy9ELE1BQU1LLFNBQVMsR0FBRyxvQkFBUTtBQUFBLFdBQU87QUFBRVQsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVJLE1BQUFBLEtBQUssRUFBTEE7QUFBVixLQUFQO0FBQUEsR0FBUixFQUFtQyxDQUFDSixNQUFELEVBQVNJLEtBQVQsQ0FBbkMsQ0FBbEI7QUFFQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQVdQLFFBQVEsR0FBRyxFQUF0QixFQUEwQlUsU0FBUyxHQUFHLEVBQXRDLENBQWhCO0FBQTJELElBQUEsS0FBSyxFQUFFRTtBQUFsRSxLQUNFO0FBQUssSUFBQSxHQUFHLEVBQUVILEdBQVY7QUFBZSxJQUFBLEdBQUcsRUFBRUU7QUFBcEIsSUFERixDQURGO0FBS0QsQ0FSRDs7QUFVQUgsWUFBWSxDQUFDSyxZQUFiLEdBQTRCO0FBQzFCSixFQUFBQSxHQUFHLEVBQUUsRUFEcUI7QUFFMUJDLEVBQUFBLFNBQVMsRUFBRTtBQUZlLENBQTVCO0FBS0FGLFlBQVksQ0FBQ00sU0FBYixHQUF5QjtBQUN2QkwsRUFBQUEsR0FBRyxFQUFFTSxtQkFBVUMsTUFEUTtBQUV2Qk4sRUFBQUEsU0FBUyxFQUFFSyxtQkFBVUMsTUFGRTtBQUd2QmIsRUFBQUEsTUFBTSxFQUFFWSxtQkFBVUUsTUFBVixDQUFpQkMsVUFIRjtBQUl2QlAsRUFBQUEsR0FBRyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkUsVUFKQztBQUt2QlgsRUFBQUEsS0FBSyxFQUFFUSxtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVDLE1BQTdCLENBQXBCLEVBQTBERTtBQUwxQyxDQUF6QjtlQVFlVixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgJyYgPiBpbWcnOiB7XG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufSk7XG5cbmNvbnN0IENyb3BwZWRJbWFnZSA9ICh7IGFsdCwgY2xhc3NOYW1lLCBoZWlnaHQsIHNyYywgd2lkdGggfSkgPT4ge1xuICBjb25zdCBzaXplU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7IGhlaWdodCwgd2lkdGggfSksIFtoZWlnaHQsIHdpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJyl9IHN0eWxlPXtzaXplU3R5bGV9PlxuICAgICAgPGltZyBhbHQ9e2FsdH0gc3JjPXtzcmN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Dcm9wcGVkSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBjbGFzc05hbWU6ICcnXG59O1xuXG5Dcm9wcGVkSW1hZ2UucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyb3BwZWRJbWFnZTtcbiJdfQ==
