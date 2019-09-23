'use strict';

var cov_28qg4fk5eb = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/CroppedImage.js';
  var hash = '6ddf7841689d9330de2bd3e8916eb46899a4cdf1';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/CroppedImage.js',
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
    hash: '6ddf7841689d9330de2bd3e8916eb46899a4cdf1'
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

var ROOT_CSS =
  (cov_28qg4fk5eb.s[0]++,
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
cov_28qg4fk5eb.s[1]++;

var CroppedImage = function CroppedImage(_ref) {
  var alt = _ref.alt,
    className = _ref.className,
    height = _ref.height,
    src = _ref.src,
    width = _ref.width;
  cov_28qg4fk5eb.f[0]++;
  var sizeStyle =
    (cov_28qg4fk5eb.s[2]++,
    (0, _react.useMemo)(
      function() {
        cov_28qg4fk5eb.f[1]++;
        cov_28qg4fk5eb.s[3]++;
        return {
          height: height,
          width: width
        };
      },
      [height, width]
    ));
  cov_28qg4fk5eb.s[4]++;
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

cov_28qg4fk5eb.s[5]++;
CroppedImage.defaultProps = {
  alt: '',
  className: ''
};
cov_28qg4fk5eb.s[6]++;
CroppedImage.propTypes = {
  alt: _propTypes.default.string,
  className: _propTypes.default.string,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
};
var _default = CroppedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9Dcm9wcGVkSW1hZ2UuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwiQ3JvcHBlZEltYWdlIiwiYWx0IiwiY2xhc3NOYW1lIiwic3JjIiwic2l6ZVN0eWxlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLDJCQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxRQUFRLEVBQUUsUUFEUztBQUVuQkMsRUFBQUEsUUFBUSxFQUFFLFVBRlM7QUFJbkIsYUFBVztBQUNUQyxJQUFBQSxNQUFNLEVBQUUsTUFEQztBQUVUQyxJQUFBQSxJQUFJLEVBQUUsS0FGRztBQUdURixJQUFBQSxRQUFRLEVBQUUsVUFIRDtBQUlURyxJQUFBQSxHQUFHLEVBQUUsS0FKSTtBQUtUQyxJQUFBQSxTQUFTLEVBQUUsdUJBTEY7QUFNVEMsSUFBQUEsS0FBSyxFQUFFO0FBTkU7QUFKUSxDQUFKLENBQUgsQ0FBZDs7O0FBY0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBNEM7QUFBQSxNQUF6Q0MsR0FBeUMsUUFBekNBLEdBQXlDO0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCUCxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxNQUFqQlEsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsTUFBWkosS0FBWSxRQUFaQSxLQUFZO0FBQUE7QUFDL0QsTUFBTUssU0FBUywyQkFBRyxvQkFBUSxZQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUVULE1BQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVSSxNQUFBQSxLQUFLLEVBQUxBO0FBQVY7QUFBaUIsR0FBaEMsRUFBbUMsQ0FBQ0osTUFBRCxFQUFTSSxLQUFULENBQW5DLENBQUgsQ0FBZjtBQUQrRDtBQUcvRCxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQVdQLFFBQVEsR0FBRyxFQUF0QixFQUEwQlUsU0FBUyxHQUFHLEVBQXRDLENBQWhCO0FBQTJELElBQUEsS0FBSyxFQUFFRTtBQUFsRSxLQUNFO0FBQUssSUFBQSxHQUFHLEVBQUVILEdBQVY7QUFBZSxJQUFBLEdBQUcsRUFBRUU7QUFBcEIsSUFERixDQURGO0FBS0QsQ0FSRDs7O0FBVUFILFlBQVksQ0FBQ0ssWUFBYixHQUE0QjtBQUMxQkosRUFBQUEsR0FBRyxFQUFFLEVBRHFCO0FBRTFCQyxFQUFBQSxTQUFTLEVBQUU7QUFGZSxDQUE1Qjs7QUFLQUYsWUFBWSxDQUFDTSxTQUFiLEdBQXlCO0FBQ3ZCTCxFQUFBQSxHQUFHLEVBQUVNLG1CQUFVQyxNQURRO0FBRXZCTixFQUFBQSxTQUFTLEVBQUVLLG1CQUFVQyxNQUZFO0FBR3ZCYixFQUFBQSxNQUFNLEVBQUVZLG1CQUFVRSxNQUFWLENBQWlCQyxVQUhGO0FBSXZCUCxFQUFBQSxHQUFHLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCRSxVQUpDO0FBS3ZCWCxFQUFBQSxLQUFLLEVBQUVRLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVRSxNQUFYLEVBQW1CRixtQkFBVUMsTUFBN0IsQ0FBcEIsRUFBMERFO0FBTDFDLENBQXpCO2VBUWVWLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAnJiA+IGltZyc6IHtcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59KTtcblxuY29uc3QgQ3JvcHBlZEltYWdlID0gKHsgYWx0LCBjbGFzc05hbWUsIGhlaWdodCwgc3JjLCB3aWR0aCB9KSA9PiB7XG4gIGNvbnN0IHNpemVTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgaGVpZ2h0LCB3aWR0aCB9KSwgW2hlaWdodCwgd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycsIGNsYXNzTmFtZSArICcnKX0gc3R5bGU9e3NpemVTdHlsZX0+XG4gICAgICA8aW1nIGFsdD17YWx0fSBzcmM9e3NyY30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNyb3BwZWRJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbkNyb3BwZWRJbWFnZS5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JvcHBlZEltYWdlO1xuIl19
