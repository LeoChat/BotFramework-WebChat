'use strict';

var cov_1jbj78nw63 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/TextAttachment.js';
  var hash = 'e2a43b4a7952a6f6529ca0fb643c7cc660ca2136';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/TextAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 7,
          column: 71
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 71
        }
      },
      '2': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 14,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 71
          }
        },
        line: 7
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 6,
            column: 67
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 6,
              column: 65
            },
            end: {
              line: 6,
              column: 67
            }
          }
        ],
        line: 6
      },
      '1': {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 71
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 7,
              column: 11
            }
          },
          {
            start: {
              line: 7,
              column: 15
            },
            end: {
              line: 7,
              column: 71
            }
          }
        ],
        line: 7
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e2a43b4a7952a6f6529ca0fb643c7cc660ca2136'
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

var _TextContent = _interopRequireDefault(require('./TextContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_1jbj78nw63.s[0]++;

var TextAttachment = function TextAttachment(_ref) {
  var _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? (cov_1jbj78nw63.b[0][0]++, {}) : _ref$attachment;
  var content = _ref$attachment.content,
    contentType = _ref$attachment.contentType;
  cov_1jbj78nw63.f[0]++;
  cov_1jbj78nw63.s[1]++;
  return (
    (cov_1jbj78nw63.b[1][0]++, !!content) &&
    (cov_1jbj78nw63.b[1][1]++,
    _react.default.createElement(_TextContent.default, {
      contentType: contentType,
      text: content
    }))
  );
};

cov_1jbj78nw63.s[2]++;
TextAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.string.isRequired,
    contentType: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = TextAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1RleHRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbIlRleHRBdHRhY2htZW50IiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJjb250ZW50VHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUNyQjtBQUFBLDZCQUR3QkMsVUFDeEI7QUFBQSw0RUFEK0QsRUFDL0Q7QUFBQSxNQURzQ0MsT0FDdEMsbUJBRHNDQSxPQUN0QztBQUFBLE1BRCtDQyxXQUMvQyxtQkFEK0NBLFdBQy9DO0FBQUE7QUFBQTtBQUFBLHFDQUFDLENBQUNELE9BQUYsZ0NBQWEsNkJBQUMsb0JBQUQ7QUFBYSxJQUFBLFdBQVcsRUFBRUMsV0FBMUI7QUFBdUMsSUFBQSxJQUFJLEVBQUVEO0FBQTdDLElBQWI7QUFBcUUsQ0FEdkU7OztBQUdBRixjQUFjLENBQUNJLFNBQWYsR0FBMkI7QUFDekJILEVBQUFBLFVBQVUsRUFBRUksbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJKLElBQUFBLE9BQU8sRUFBRUcsbUJBQVVFLE1BQVYsQ0FBaUJDLFVBREE7QUFFMUJMLElBQUFBLFdBQVcsRUFBRUUsbUJBQVVFLE1BQVYsQ0FBaUJDO0FBRkosR0FBaEIsRUFHVEE7QUFKc0IsQ0FBM0I7ZUFPZVIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVGV4dENvbnRlbnQgZnJvbSAnLi9UZXh0Q29udGVudCc7XG5cbmNvbnN0IFRleHRBdHRhY2htZW50ID0gKHsgYXR0YWNobWVudDogeyBjb250ZW50LCBjb250ZW50VHlwZSB9ID0ge30gfSkgPT5cbiAgISFjb250ZW50ICYmIDxUZXh0Q29udGVudCBjb250ZW50VHlwZT17Y29udGVudFR5cGV9IHRleHQ9e2NvbnRlbnR9IC8+O1xuXG5UZXh0QXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEF0dGFjaG1lbnQ7XG4iXX0=
