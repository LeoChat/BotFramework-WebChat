'use strict';

var cov_1of8qrgazw = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createDirectLine.js';
  var hash = '6a3b418c8ff92d13e734201669e58523f3c4c48a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createDirectLine.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 35,
          column: 5
        }
      },
      '1': {
        start: {
          line: 27,
          column: 23
        },
        end: {
          line: 27,
          column: 37
        }
      },
      '2': {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 31,
          column: 9
        }
      },
      '3': {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 73
        }
      },
      '4': {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 22
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createDirectLine',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 40
          }
        },
        loc: {
          start: {
            line: 14,
            column: 3
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 26,
            column: 20
          },
          end: {
            line: 26,
            column: 21
          }
        },
        loc: {
          start: {
            line: 26,
            column: 35
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 26
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 29,
            column: 26
          },
          end: {
            line: 29,
            column: 27
          }
        },
        loc: {
          start: {
            line: 29,
            column: 69
          },
          end: {
            line: 31,
            column: 7
          }
        },
        line: 29
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
      '1': 0,
      '2': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '6a3b418c8ff92d13e734201669e58523f3c4c48a'
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
exports.default = createDirectLine;

var _botframeworkDirectlinejs = require('botframework-directlinejs');

function createDirectLine(_ref) {
  var botAgent = _ref.botAgent,
    conversationId = _ref.conversationId,
    domain = _ref.domain,
    fetch = _ref.fetch,
    pollingInterval = _ref.pollingInterval,
    secret = _ref.secret,
    streamUrl = _ref.streamUrl,
    token = _ref.token,
    watermark = _ref.watermark,
    webSocket = _ref.webSocket;
  cov_1of8qrgazw.f[0]++;
  cov_1of8qrgazw.s[0]++;
  return new _botframeworkDirectlinejs.DirectLine({
    botAgent: botAgent,
    conversationId: conversationId,
    domain: domain,
    fetch: fetch,
    pollingInterval: pollingInterval,
    secret: secret,
    streamUrl: streamUrl,
    token: token,
    watermark: watermark,
    webSocket: webSocket,
    createFormData: function createFormData(attachments) {
      cov_1of8qrgazw.f[1]++;
      var formData = (cov_1of8qrgazw.s[1]++, new FormData());
      cov_1of8qrgazw.s[2]++;
      attachments.forEach(function(_ref2) {
        var contentType = _ref2.contentType,
          data = _ref2.data,
          filename = _ref2.filename,
          name = _ref2.name;
        cov_1of8qrgazw.f[2]++;
        cov_1of8qrgazw.s[3]++;
        formData.append(
          name,
          new Blob(data, {
            contentType: contentType
          }),
          filename
        );
      });
      cov_1of8qrgazw.s[4]++;
      return formData;
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXJlY3RMaW5lLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURpcmVjdExpbmUiLCJib3RBZ2VudCIsImNvbnZlcnNhdGlvbklkIiwiZG9tYWluIiwiZmV0Y2giLCJwb2xsaW5nSW50ZXJ2YWwiLCJzZWNyZXQiLCJzdHJlYW1VcmwiLCJ0b2tlbiIsIndhdGVybWFyayIsIndlYlNvY2tldCIsIkRpcmVjdExpbmUiLCJjcmVhdGVGb3JtRGF0YSIsImF0dGFjaG1lbnRzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjb250ZW50VHlwZSIsImRhdGEiLCJmaWxlbmFtZSIsIm5hbWUiLCJhcHBlbmQiLCJCbG9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FXWjtBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLGNBU0MsUUFUREEsY0FTQztBQUFBLE1BUkRDLE1BUUMsUUFSREEsTUFRQztBQUFBLE1BUERDLEtBT0MsUUFQREEsS0FPQztBQUFBLE1BTkRDLGVBTUMsUUFOREEsZUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLFNBRUMsUUFGREEsU0FFQztBQUFBLE1BRERDLFNBQ0MsUUFEREEsU0FDQztBQUFBO0FBQUE7QUFDRCxTQUFPLElBQUlDLG9DQUFKLENBQWU7QUFDcEJWLElBQUFBLFFBQVEsRUFBUkEsUUFEb0I7QUFFcEJDLElBQUFBLGNBQWMsRUFBZEEsY0FGb0I7QUFHcEJDLElBQUFBLE1BQU0sRUFBTkEsTUFIb0I7QUFJcEJDLElBQUFBLEtBQUssRUFBTEEsS0FKb0I7QUFLcEJDLElBQUFBLGVBQWUsRUFBZkEsZUFMb0I7QUFNcEJDLElBQUFBLE1BQU0sRUFBTkEsTUFOb0I7QUFPcEJDLElBQUFBLFNBQVMsRUFBVEEsU0FQb0I7QUFRcEJDLElBQUFBLEtBQUssRUFBTEEsS0FSb0I7QUFTcEJDLElBQUFBLFNBQVMsRUFBVEEsU0FUb0I7QUFVcEJDLElBQUFBLFNBQVMsRUFBVEEsU0FWb0I7QUFXcEJFLElBQUFBLGNBQWMsRUFBRSx3QkFBQUMsV0FBVyxFQUFJO0FBQUE7QUFDN0IsVUFBTUMsUUFBUSwyQkFBRyxJQUFJQyxRQUFKLEVBQUgsQ0FBZDtBQUQ2QjtBQUc3QkYsTUFBQUEsV0FBVyxDQUFDRyxPQUFaLENBQW9CLGlCQUEyQztBQUFBLFlBQXhDQyxXQUF3QyxTQUF4Q0EsV0FBd0M7QUFBQSxZQUEzQkMsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsWUFBckJDLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLFlBQVhDLElBQVcsU0FBWEEsSUFBVztBQUFBO0FBQUE7QUFDN0ROLFFBQUFBLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQkQsSUFBaEIsRUFBc0IsSUFBSUUsSUFBSixDQUFTSixJQUFULEVBQWU7QUFBRUQsVUFBQUEsV0FBVyxFQUFYQTtBQUFGLFNBQWYsQ0FBdEIsRUFBdURFLFFBQXZEO0FBQ0QsT0FGRDtBQUg2QjtBQU83QixhQUFPTCxRQUFQO0FBQ0Q7QUFuQm1CLEdBQWYsQ0FBUDtBQXFCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdExpbmUgfSBmcm9tICdib3RmcmFtZXdvcmstZGlyZWN0bGluZWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0TGluZSh7XG4gIGJvdEFnZW50LFxuICBjb252ZXJzYXRpb25JZCxcbiAgZG9tYWluLFxuICBmZXRjaCxcbiAgcG9sbGluZ0ludGVydmFsLFxuICBzZWNyZXQsXG4gIHN0cmVhbVVybCxcbiAgdG9rZW4sXG4gIHdhdGVybWFyayxcbiAgd2ViU29ja2V0XG59KSB7XG4gIHJldHVybiBuZXcgRGlyZWN0TGluZSh7XG4gICAgYm90QWdlbnQsXG4gICAgY29udmVyc2F0aW9uSWQsXG4gICAgZG9tYWluLFxuICAgIGZldGNoLFxuICAgIHBvbGxpbmdJbnRlcnZhbCxcbiAgICBzZWNyZXQsXG4gICAgc3RyZWFtVXJsLFxuICAgIHRva2VuLFxuICAgIHdhdGVybWFyayxcbiAgICB3ZWJTb2NrZXQsXG4gICAgY3JlYXRlRm9ybURhdGE6IGF0dGFjaG1lbnRzID0+IHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGF0dGFjaG1lbnRzLmZvckVhY2goKHsgY29udGVudFR5cGUsIGRhdGEsIGZpbGVuYW1lLCBuYW1lIH0pID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIG5ldyBCbG9iKGRhdGEsIHsgY29udGVudFR5cGUgfSksIGZpbGVuYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
