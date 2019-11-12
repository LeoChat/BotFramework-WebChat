'use strict';

var cov_20dkpi78l2 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/ScreenReaderText.js';
  var hash = '2173f1e7c7e76b09dbd233509f49420be301da3b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/ScreenReaderText.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 16,
          column: 2
        }
      },
      '1': {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 23,
          column: 1
        }
      },
      '2': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 9
        }
      },
      '3': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 26
          }
        },
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 9
          }
        },
        line: 20
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '2173f1e7c7e76b09dbd233509f49420be301da3b'
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

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS =
  (cov_20dkpi78l2.s[0]++,
  (0, _glamor.css)({
    // .sr-only - This component is intended to be invisible to the visual Web Chat user, but read by the AT when using a screen reader
    color: 'transparent',
    height: 1,
    left: -10000,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    width: 1
  }));
cov_20dkpi78l2.s[1]++;

var ScreenReaderText = function ScreenReaderText(_ref) {
  var text = _ref.text;
  cov_20dkpi78l2.f[0]++;
  cov_20dkpi78l2.s[2]++;
  return (
    // Because of differences in browser implementations, <span aria-label> is used to make the screen reader perform the same on different browsers. This workaround was made to accommodate Edge v44
    _react.default.createElement(
      'span',
      {
        'aria-label': text,
        className: (0, _classnames.default)(ROOT_CSS + '')
      },
      text
    )
  );
};

cov_20dkpi78l2.s[3]++;
ScreenReaderText.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = ScreenReaderText;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TY3JlZW5SZWFkZXJUZXh0LmpzIl0sIm5hbWVzIjpbIlJPT1RfQ1NTIiwiY29sb3IiLCJoZWlnaHQiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsIlNjcmVlblJlYWRlclRleHQiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLDJCQUFHLGlCQUFJO0FBQ25CO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxhQUZZO0FBR25CQyxFQUFBQSxNQUFNLEVBQUUsQ0FIVztBQUluQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsS0FKWTtBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLFFBTFM7QUFNbkJDLEVBQUFBLFFBQVEsRUFBRSxVQU5TO0FBT25CQyxFQUFBQSxHQUFHLEVBQUUsQ0FQYztBQVFuQkMsRUFBQUEsVUFBVSxFQUFFLFFBUk87QUFTbkJDLEVBQUFBLEtBQUssRUFBRTtBQVRZLENBQUosQ0FBSCxDQUFkOzs7QUFZQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BRXZCO0FBQUEsTUFGMEJDLElBRTFCLFFBRjBCQSxJQUUxQjtBQUFBO0FBQUE7QUFBQSxTQURBO0FBQ0E7QUFBTSxvQkFBWUEsSUFBbEI7QUFBd0IsTUFBQSxTQUFTLEVBQUUseUJBQVdWLFFBQVEsR0FBRyxFQUF0QjtBQUFuQyxPQUNHVSxJQURIO0FBQUE7QUFFTyxDQUpUOzs7QUFPQUQsZ0JBQWdCLENBQUNFLFNBQWpCLEdBQTZCO0FBQzNCRCxFQUFBQSxJQUFJLEVBQUVFLG1CQUFVQyxNQUFWLENBQWlCQztBQURJLENBQTdCO2VBSWVMLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgLy8gLnNyLW9ubHkgLSBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSBpbnZpc2libGUgdG8gdGhlIHZpc3VhbCBXZWIgQ2hhdCB1c2VyLCBidXQgcmVhZCBieSB0aGUgQVQgd2hlbiB1c2luZyBhIHNjcmVlbiByZWFkZXJcbiAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIGhlaWdodDogMSxcbiAgbGVmdDogLTEwMDAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IDAsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB3aWR0aDogMVxufSk7XG5cbmNvbnN0IFNjcmVlblJlYWRlclRleHQgPSAoeyB0ZXh0IH0pID0+IChcbiAgLy8gQmVjYXVzZSBvZiBkaWZmZXJlbmNlcyBpbiBicm93c2VyIGltcGxlbWVudGF0aW9ucywgPHNwYW4gYXJpYS1sYWJlbD4gaXMgdXNlZCB0byBtYWtlIHRoZSBzY3JlZW4gcmVhZGVyIHBlcmZvcm0gdGhlIHNhbWUgb24gZGlmZmVyZW50IGJyb3dzZXJzLiBUaGlzIHdvcmthcm91bmQgd2FzIG1hZGUgdG8gYWNjb21tb2RhdGUgRWRnZSB2NDRcbiAgPHNwYW4gYXJpYS1sYWJlbD17dGV4dH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycpfT5cbiAgICB7dGV4dH1cbiAgPC9zcGFuPlxuKTtcblxuU2NyZWVuUmVhZGVyVGV4dC5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuUmVhZGVyVGV4dDtcbiJdfQ==
