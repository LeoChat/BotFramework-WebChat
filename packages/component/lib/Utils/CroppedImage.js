'use strict';

var cov_177qcjzrez = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/CroppedImage.js';
  var hash = '733a051a4de1f0e57d82747f2282b616f380ce3d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/CroppedImage.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 18,
          column: 2
        }
      },
      '1': {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 28,
          column: 1
        }
      },
      '2': {
        start: {
          line: 21,
          column: 20
        },
        end: {
          line: 21,
          column: 71
        }
      },
      '3': {
        start: {
          line: 21,
          column: 35
        },
        end: {
          line: 21,
          column: 52
        }
      },
      '4': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 27,
          column: 4
        }
      },
      '5': {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 33,
          column: 2
        }
      },
      '6': {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 41,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 20,
            column: 22
          }
        },
        loc: {
          start: {
            line: 20,
            column: 65
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 20
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 29
          }
        },
        loc: {
          start: {
            line: 21,
            column: 35
          },
          end: {
            line: 21,
            column: 52
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '733a051a4de1f0e57d82747f2282b616f380ce3d'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

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

var ROOT_CSS =
  (cov_177qcjzrez.s[0]++,
  (0, _glamor.css)({
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
  }));
cov_177qcjzrez.s[1]++;

var CroppedImage = function CroppedImage(_ref) {
  var alt = _ref.alt,
    className = _ref.className,
    height = _ref.height,
    src = _ref.src,
    width = _ref.width;
  cov_177qcjzrez.f[0]++;
  var sizeStyle =
    (cov_177qcjzrez.s[2]++,
    (0, _react.useMemo)(
      function() {
        cov_177qcjzrez.f[1]++;
        cov_177qcjzrez.s[3]++;
        return {
          height: height,
          width: width
        };
      },
      [height, width]
    ));
  cov_177qcjzrez.s[4]++;
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

cov_177qcjzrez.s[5]++;
CroppedImage.defaultProps = {
  alt: '',
  className: ''
};
cov_177qcjzrez.s[6]++;
CroppedImage.propTypes = {
  alt: _propTypes.default.string,
  className: _propTypes.default.string,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
};
var _default = CroppedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9Dcm9wcGVkSW1hZ2UuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwiQ3JvcHBlZEltYWdlIiwiYWx0IiwiY2xhc3NOYW1lIiwic3JjIiwic2l6ZVN0eWxlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsMkJBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRSxRQURTO0FBRW5CQyxFQUFBQSxRQUFRLEVBQUUsVUFGUztBQUluQixhQUFXO0FBQ1RDLElBQUFBLE1BQU0sRUFBRSxNQURDO0FBRVRDLElBQUFBLElBQUksRUFBRSxLQUZHO0FBR1RGLElBQUFBLFFBQVEsRUFBRSxVQUhEO0FBSVRHLElBQUFBLEdBQUcsRUFBRSxLQUpJO0FBS1RDLElBQUFBLFNBQVMsRUFBRSx1QkFMRjtBQU1UQyxJQUFBQSxLQUFLLEVBQUU7QUFORTtBQUpRLENBQUosQ0FBSCxDQUFkOzs7QUFjQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE0QztBQUFBLE1BQXpDQyxHQUF5QyxRQUF6Q0EsR0FBeUM7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJQLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCUSxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxNQUFaSixLQUFZLFFBQVpBLEtBQVk7QUFBQTtBQUMvRCxNQUFNSyxTQUFTLDJCQUFHLG9CQUFRLFlBQU87QUFBQTtBQUFBO0FBQUE7QUFBRVQsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVJLE1BQUFBLEtBQUssRUFBTEE7QUFBVjtBQUFpQixHQUFoQyxFQUFtQyxDQUFDSixNQUFELEVBQVNJLEtBQVQsQ0FBbkMsQ0FBSCxDQUFmO0FBRCtEO0FBRy9ELFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBV1AsUUFBUSxHQUFHLEVBQXRCLEVBQTBCVSxTQUFTLEdBQUcsRUFBdEMsQ0FBaEI7QUFBMkQsSUFBQSxLQUFLLEVBQUVFO0FBQWxFLEtBQ0U7QUFBSyxJQUFBLEdBQUcsRUFBRUgsR0FBVjtBQUFlLElBQUEsR0FBRyxFQUFFRTtBQUFwQixJQURGLENBREY7QUFLRCxDQVJEOzs7QUFVQUgsWUFBWSxDQUFDSyxZQUFiLEdBQTRCO0FBQzFCSixFQUFBQSxHQUFHLEVBQUUsRUFEcUI7QUFFMUJDLEVBQUFBLFNBQVMsRUFBRTtBQUZlLENBQTVCOztBQUtBRixZQUFZLENBQUNNLFNBQWIsR0FBeUI7QUFDdkJMLEVBQUFBLEdBQUcsRUFBRU0sbUJBQVVDLE1BRFE7QUFFdkJOLEVBQUFBLFNBQVMsRUFBRUssbUJBQVVDLE1BRkU7QUFHdkJiLEVBQUFBLE1BQU0sRUFBRVksbUJBQVVFLE1BQVYsQ0FBaUJDLFVBSEY7QUFJdkJQLEVBQUFBLEdBQUcsRUFBRUksbUJBQVVDLE1BQVYsQ0FBaUJFLFVBSkM7QUFLdkJYLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osbUJBQVVFLE1BQVgsRUFBbUJGLG1CQUFVQyxNQUE3QixDQUFwQixFQUEwREU7QUFMMUMsQ0FBekI7ZUFRZVYsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICcmID4gaW1nJzoge1xuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH1cbn0pO1xuXG5jb25zdCBDcm9wcGVkSW1hZ2UgPSAoeyBhbHQsIGNsYXNzTmFtZSwgaGVpZ2h0LCBzcmMsIHdpZHRoIH0pID0+IHtcbiAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlTWVtbygoKSA9PiAoeyBoZWlnaHQsIHdpZHRoIH0pLCBbaGVpZ2h0LCB3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgY2xhc3NOYW1lICsgJycpfSBzdHlsZT17c2l6ZVN0eWxlfT5cbiAgICAgIDxpbWcgYWx0PXthbHR9IHNyYz17c3JjfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ3JvcHBlZEltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuQ3JvcHBlZEltYWdlLnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcm9wcGVkSW1hZ2U7XG4iXX0=
