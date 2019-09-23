'use strict';

var cov_ss0oabgpv = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageAttachment.js';
  var hash = 'e248931971fb7cfcbb39ac7cba6a929e657806d3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 18,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 7,
          column: 61
        }
      },
      '2': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      '3': {
        start: {
          line: 10,
          column: 32
        },
        end: {
          line: 10,
          column: 94
        }
      },
      '4': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      '5': {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 78
        }
      },
      '6': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 76
        }
      },
      '7': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 28,
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
            column: 24
          },
          end: {
            line: 6,
            column: 25
          }
        },
        loc: {
          start: {
            line: 6,
            column: 54
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 7,
            column: 61
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 7,
              column: 35
            },
            end: {
              line: 7,
              column: 55
            }
          },
          {
            start: {
              line: 7,
              column: 59
            },
            end: {
              line: 7,
              column: 61
            }
          }
        ],
        line: 7
      },
      '1': {
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 9,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          {
            start: {
              line: 9,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          }
        ],
        line: 9
      },
      '2': {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 12,
              column: 4
            },
            end: {
              line: 14,
              column: 5
            }
          },
          {
            start: {
              line: 12,
              column: 4
            },
            end: {
              line: 14,
              column: 5
            }
          }
        ],
        line: 12
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e248931971fb7cfcbb39ac7cba6a929e657806d3'
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

var _ImageContent = _interopRequireDefault(require('./ImageContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_ss0oabgpv.s[0]++;

var ImageAttachment = function ImageAttachment(_ref) {
  var activity = _ref.activity,
    attachment = _ref.attachment;
  cov_ss0oabgpv.f[0]++;

  var _ref2 = (cov_ss0oabgpv.s[1]++, (cov_ss0oabgpv.b[0][0]++, activity.channelData) || (cov_ss0oabgpv.b[0][1]++, {})),
    attachmentThumbnails = _ref2.attachmentThumbnails;

  cov_ss0oabgpv.s[2]++;

  if (attachmentThumbnails) {
    cov_ss0oabgpv.b[1][0]++;
    var attachmentThumbnail = (cov_ss0oabgpv.s[3]++, attachmentThumbnails[activity.attachments.indexOf(attachment)]);
    cov_ss0oabgpv.s[4]++;

    if (attachmentThumbnail) {
      cov_ss0oabgpv.b[2][0]++;
      cov_ss0oabgpv.s[5]++;
      return _react.default.createElement(_ImageContent.default, {
        alt: attachment.name,
        src: attachmentThumbnail
      });
    } else {
      cov_ss0oabgpv.b[2][1]++;
    }
  } else {
    cov_ss0oabgpv.b[1][1]++;
  }

  cov_ss0oabgpv.s[6]++;
  return _react.default.createElement(_ImageContent.default, {
    alt: attachment.name,
    src: attachment.contentUrl
  });
};

cov_ss0oabgpv.s[7]++;
ImageAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachments: _propTypes.default.array.isRequired
  }).isRequired,
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired
};
var _default = ImageAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnQiLCJjaGFubmVsRGF0YSIsImF0dGFjaG1lbnRUaHVtYm5haWxzIiwiYXR0YWNobWVudFRodW1ibmFpbCIsImF0dGFjaG1lbnRzIiwiaW5kZXhPZiIsIm5hbWUiLCJjb250ZW50VXJsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUE4QjtBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQUE7O0FBQUEscUNBQ25CLDBCQUFBRCxRQUFRLENBQUNFLFdBQVQsK0JBQXdCLEVBQXhCLENBRG1CO0FBQUEsTUFDNUNDLG9CQUQ0QyxTQUM1Q0Esb0JBRDRDOztBQUFBOztBQUdwRCxNQUFJQSxvQkFBSixFQUEwQjtBQUFBO0FBQ3hCLFFBQU1DLG1CQUFtQiwwQkFBR0Qsb0JBQW9CLENBQUNILFFBQVEsQ0FBQ0ssV0FBVCxDQUFxQkMsT0FBckIsQ0FBNkJMLFVBQTdCLENBQUQsQ0FBdkIsQ0FBekI7QUFEd0I7O0FBR3hCLFFBQUlHLG1CQUFKLEVBQXlCO0FBQUE7QUFBQTtBQUN2QixhQUFPLDZCQUFDLHFCQUFEO0FBQWMsUUFBQSxHQUFHLEVBQUVILFVBQVUsQ0FBQ00sSUFBOUI7QUFBb0MsUUFBQSxHQUFHLEVBQUVIO0FBQXpDLFFBQVA7QUFDRCxLQUZEO0FBQUE7QUFBQTtBQUdELEdBTkQ7QUFBQTtBQUFBOztBQUhvRDtBQVdwRCxTQUFPLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxHQUFHLEVBQUVILFVBQVUsQ0FBQ00sSUFBOUI7QUFBb0MsSUFBQSxHQUFHLEVBQUVOLFVBQVUsQ0FBQ087QUFBcEQsSUFBUDtBQUNELENBWkQ7OztBQWNBVCxlQUFlLENBQUNVLFNBQWhCLEdBQTRCO0FBQzFCVCxFQUFBQSxRQUFRLEVBQUVVLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCTixJQUFBQSxXQUFXLEVBQUVLLG1CQUFVRSxLQUFWLENBQWdCQztBQURMLEdBQWhCLEVBRVBBLFVBSHVCO0FBSTFCWixFQUFBQSxVQUFVLEVBQUVTLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCSCxJQUFBQSxVQUFVLEVBQUVFLG1CQUFVSSxNQUFWLENBQWlCRCxVQURIO0FBRTFCTixJQUFBQSxJQUFJLEVBQUVHLG1CQUFVSTtBQUZVLEdBQWhCLEVBR1REO0FBUHVCLENBQTVCO2VBVWVkLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEltYWdlQ29udGVudCBmcm9tICcuL0ltYWdlQ29udGVudCc7XG5cbmNvbnN0IEltYWdlQXR0YWNobWVudCA9ICh7IGFjdGl2aXR5LCBhdHRhY2htZW50IH0pID0+IHtcbiAgY29uc3QgeyBhdHRhY2htZW50VGh1bWJuYWlscyB9ID0gYWN0aXZpdHkuY2hhbm5lbERhdGEgfHwge307XG5cbiAgaWYgKGF0dGFjaG1lbnRUaHVtYm5haWxzKSB7XG4gICAgY29uc3QgYXR0YWNobWVudFRodW1ibmFpbCA9IGF0dGFjaG1lbnRUaHVtYm5haWxzW2FjdGl2aXR5LmF0dGFjaG1lbnRzLmluZGV4T2YoYXR0YWNobWVudCldO1xuXG4gICAgaWYgKGF0dGFjaG1lbnRUaHVtYm5haWwpIHtcbiAgICAgIHJldHVybiA8SW1hZ2VDb250ZW50IGFsdD17YXR0YWNobWVudC5uYW1lfSBzcmM9e2F0dGFjaG1lbnRUaHVtYm5haWx9IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8SW1hZ2VDb250ZW50IGFsdD17YXR0YWNobWVudC5uYW1lfSBzcmM9e2F0dGFjaG1lbnQuY29udGVudFVybH0gLz47XG59O1xuXG5JbWFnZUF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpdml0eTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdHRhY2htZW50czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUF0dGFjaG1lbnQ7XG4iXX0=
