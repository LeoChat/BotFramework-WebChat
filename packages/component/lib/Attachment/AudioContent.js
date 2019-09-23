'use strict';

var cov_2kd5yh34oa = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioContent.js';
  var hash = '60c35a312e8a06086345cce357dc0ad07153b305';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 16,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      '2': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      '3': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 34,
          column: 2
        }
      },
      '4': {
        start: {
          line: 36,
          column: 51
        },
        end: {
          line: 36,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 22
          }
        },
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 15,
            column: 4
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 36,
            column: 33
          }
        },
        loc: {
          start: {
            line: 36,
            column: 51
          },
          end: {
            line: 36,
            column: 63
          }
        },
        line: 36
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '60c35a312e8a06086345cce357dc0ad07153b305'
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

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_2kd5yh34oa.s[0]++;

var AudioContent = function AudioContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    loop = _ref.loop,
    poster = _ref.poster,
    src = _ref.src,
    styleSet = _ref.styleSet;
  cov_2kd5yh34oa.f[0]++;
  cov_2kd5yh34oa.s[1]++;
  return _react.default.createElement('audio', {
    'aria-label': alt,
    autoPlay: autoPlay,
    className: styleSet.audioContent,
    controls: true,
    loop: loop,
    poster: poster,
    src: src
  });
};

cov_2kd5yh34oa.s[2]++;
AudioContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false,
  poster: ''
};
cov_2kd5yh34oa.s[3]++;
AudioContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  poster: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    audioContent: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_2kd5yh34oa.f[1]++;
  cov_2kd5yh34oa.s[4]++;
  return {
    styleSet: styleSet
  };
})(AudioContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQ29udGVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJhbHQiLCJhdXRvUGxheSIsImxvb3AiLCJwb3N0ZXIiLCJzcmMiLCJzdHlsZVNldCIsImF1ZGlvQ29udGVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUNuQjtBQUFBLE1BRHNCQyxHQUN0QixRQURzQkEsR0FDdEI7QUFBQSxNQUQyQkMsUUFDM0IsUUFEMkJBLFFBQzNCO0FBQUEsTUFEcUNDLElBQ3JDLFFBRHFDQSxJQUNyQztBQUFBLE1BRDJDQyxNQUMzQyxRQUQyQ0EsTUFDM0M7QUFBQSxNQURtREMsR0FDbkQsUUFEbURBLEdBQ25EO0FBQUEsTUFEd0RDLFFBQ3hELFFBRHdEQSxRQUN4RDtBQUFBO0FBQUE7QUFBQTtBQUNFLGtCQUFZTCxHQURkO0FBRUUsSUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxJQUFBLFNBQVMsRUFBRUksUUFBUSxDQUFDQyxZQUh0QjtBQUlFLElBQUEsUUFBUSxFQUFFLElBSlo7QUFLRSxJQUFBLElBQUksRUFBRUosSUFMUjtBQU1FLElBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsSUFBQSxHQUFHLEVBQUVDO0FBUFA7QUFRRSxDQVRKOzs7QUFZQUwsWUFBWSxDQUFDUSxZQUFiLEdBQTRCO0FBQzFCUCxFQUFBQSxHQUFHLEVBQUUsRUFEcUI7QUFFMUJDLEVBQUFBLFFBQVEsRUFBRSxLQUZnQjtBQUcxQkMsRUFBQUEsSUFBSSxFQUFFLEtBSG9CO0FBSTFCQyxFQUFBQSxNQUFNLEVBQUU7QUFKa0IsQ0FBNUI7O0FBT0FKLFlBQVksQ0FBQ1MsU0FBYixHQUF5QjtBQUN2QlIsRUFBQUEsR0FBRyxFQUFFUyxtQkFBVUMsTUFEUTtBQUV2QlQsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUUsSUFGRztBQUd2QlQsRUFBQUEsSUFBSSxFQUFFTyxtQkFBVUUsSUFITztBQUl2QlIsRUFBQUEsTUFBTSxFQUFFTSxtQkFBVUMsTUFKSztBQUt2Qk4sRUFBQUEsR0FBRyxFQUFFSyxtQkFBVUMsTUFBVixDQUFpQkUsVUFMQztBQU12QlAsRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUksS0FBVixDQUFnQjtBQUN4QlAsSUFBQUEsWUFBWSxFQUFFRyxtQkFBVUssR0FBVixDQUFjRjtBQURKLEdBQWhCLEVBRVBBO0FBUm9CLENBQXpCOztlQVdlLCtCQUFpQixpQkFBbUI7QUFBQSxNQUFoQlAsUUFBZ0IsU0FBaEJBLFFBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUFZLENBQWhELEVBQW1ETixZQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuXG5jb25zdCBBdWRpb0NvbnRlbnQgPSAoeyBhbHQsIGF1dG9QbGF5LCBsb29wLCBwb3N0ZXIsIHNyYywgc3R5bGVTZXQgfSkgPT4gKFxuICA8YXVkaW9cbiAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgYXV0b1BsYXk9e2F1dG9QbGF5fVxuICAgIGNsYXNzTmFtZT17c3R5bGVTZXQuYXVkaW9Db250ZW50fVxuICAgIGNvbnRyb2xzPXt0cnVlfVxuICAgIGxvb3A9e2xvb3B9XG4gICAgcG9zdGVyPXtwb3N0ZXJ9XG4gICAgc3JjPXtzcmN9XG4gIC8+XG4pO1xuXG5BdWRpb0NvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBhdXRvUGxheTogZmFsc2UsXG4gIGxvb3A6IGZhbHNlLFxuICBwb3N0ZXI6ICcnXG59O1xuXG5BdWRpb0NvbnRlbnQucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF1dG9QbGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9vcDogUHJvcFR5cGVzLmJvb2wsXG4gIHBvc3RlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF1ZGlvQ29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKEF1ZGlvQ29udGVudCk7XG4iXX0=
