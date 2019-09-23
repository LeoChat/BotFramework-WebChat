'use strict';

var cov_19veea8q1q = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/ScreenReaderText.js';
  var hash = '1fd64861248f495123e2a2296e5e160f20e039af';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/ScreenReaderText.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
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
          column: 25
        },
        end: {
          line: 25,
          column: 1
        }
      },
      '2': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 24,
          column: 9
        }
      },
      '3': {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 29,
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
            column: 25
          },
          end: {
            line: 20,
            column: 26
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
            column: 9
          }
        },
        line: 22
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
    hash: '1fd64861248f495123e2a2296e5e160f20e039af'
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

var _connectToWebChat = _interopRequireDefault(require('./connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS =
  (cov_19veea8q1q.s[0]++,
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
cov_19veea8q1q.s[1]++;

var ScreenReaderText = function ScreenReaderText(_ref) {
  var text = _ref.text;
  cov_19veea8q1q.f[0]++;
  cov_19veea8q1q.s[2]++;
  return (
    /* Because of differences in browser implementations, <span aria-label> is used to make the screen reader perform the same on different browsers. This workaround was made to accommodate Edge v44 */
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

cov_19veea8q1q.s[3]++;
ScreenReaderText.propTypes = {
  text: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)()(ScreenReaderText);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TY3JlZW5SZWFkZXJUZXh0LmpzIl0sIm5hbWVzIjpbIlJPT1RfQ1NTIiwiY29sb3IiLCJoZWlnaHQiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsIlNjcmVlblJlYWRlclRleHQiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxRQUFRLDJCQUFHLGlCQUFJO0FBQ25CO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxhQUZZO0FBR25CQyxFQUFBQSxNQUFNLEVBQUUsQ0FIVztBQUluQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsS0FKWTtBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLFFBTFM7QUFNbkJDLEVBQUFBLFFBQVEsRUFBRSxVQU5TO0FBT25CQyxFQUFBQSxHQUFHLEVBQUUsQ0FQYztBQVFuQkMsRUFBQUEsVUFBVSxFQUFFLFFBUk87QUFTbkJDLEVBQUFBLEtBQUssRUFBRTtBQVRZLENBQUosQ0FBSCxDQUFkOzs7QUFZQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BRXZCO0FBQUEsTUFGMEJDLElBRTFCLFFBRjBCQSxJQUUxQjtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBTSxvQkFBWUEsSUFBbEI7QUFBd0IsTUFBQSxTQUFTLEVBQUUseUJBQVdWLFFBQVEsR0FBRyxFQUF0QjtBQUFuQyxPQUNHVSxJQURIO0FBQUE7QUFFTyxDQUpUOzs7QUFPQUQsZ0JBQWdCLENBQUNFLFNBQWpCLEdBQTZCO0FBQzNCRCxFQUFBQSxJQUFJLEVBQUVFLG1CQUFVQyxNQUFWLENBQWlCQztBQURJLENBQTdCOztlQUllLGlDQUFtQkwsZ0JBQW5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICAvLyAuc3Itb25seSAtIFRoaXMgY29tcG9uZW50IGlzIGludGVuZGVkIHRvIGJlIGludmlzaWJsZSB0byB0aGUgdmlzdWFsIFdlYiBDaGF0IHVzZXIsIGJ1dCByZWFkIGJ5IHRoZSBBVCB3aGVuIHVzaW5nIGEgc2NyZWVuIHJlYWRlclxuICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgaGVpZ2h0OiAxLFxuICBsZWZ0OiAtMTAwMDAsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogMCxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHdpZHRoOiAxXG59KTtcblxuY29uc3QgU2NyZWVuUmVhZGVyVGV4dCA9ICh7IHRleHQgfSkgPT4gKFxuICAvKiBCZWNhdXNlIG9mIGRpZmZlcmVuY2VzIGluIGJyb3dzZXIgaW1wbGVtZW50YXRpb25zLCA8c3BhbiBhcmlhLWxhYmVsPiBpcyB1c2VkIHRvIG1ha2UgdGhlIHNjcmVlbiByZWFkZXIgcGVyZm9ybSB0aGUgc2FtZSBvbiBkaWZmZXJlbnQgYnJvd3NlcnMuIFRoaXMgd29ya2Fyb3VuZCB3YXMgbWFkZSB0byBhY2NvbW1vZGF0ZSBFZGdlIHY0NCAqL1xuICA8c3BhbiBhcmlhLWxhYmVsPXt0ZXh0fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJyl9PlxuICAgIHt0ZXh0fVxuICA8L3NwYW4+XG4pO1xuXG5TY3JlZW5SZWFkZXJUZXh0LnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCkoU2NyZWVuUmVhZGVyVGV4dCk7XG4iXX0=
