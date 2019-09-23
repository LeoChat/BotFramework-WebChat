'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = setupVersionFamily4;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _createElement = _interopRequireDefault(require('./createElement'));

var _loadAsset = _interopRequireDefault(require('./loadAsset'));

function setupVersionFamily4(_x, _x2, _x3) {
  return _setupVersionFamily.apply(this, arguments);
}

function _setupVersionFamily() {
  _setupVersionFamily = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref, _ref2, _ref3) {
      var assets,
        botIconURL,
        domain,
        userId,
        webSocket,
        language,
        secret,
        token,
        username,
        directLine,
        root,
        webChatVersionMeta;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              assets = _ref.assets;
              (botIconURL = _ref2.botIconURL),
                (domain = _ref2.directLineURL),
                (userId = _ref2.userId),
                (webSocket = _ref2.webSocket);
              (language = _ref3.language), (secret = _ref3.secret), (token = _ref3.token), (username = _ref3.username);
              _context.t0 = assets;

              if (!_context.t0) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return Promise.all(assets.map(_loadAsset.default));

            case 7:
              directLine = window.WebChat.createDirectLine({
                domain: domain,
                secret: secret,
                token: token,
                webSocket: webSocket
              }); // TODO: Should we support Bing Speech in Web Chat v4?

              root = (0, _createElement.default)('div', {
                style: {
                  height: '100%'
                }
              });
              window.WebChat.renderWebChat(
                {
                  directLine: directLine,
                  locale: language,
                  styleOptions: {
                    botAvatarImage: botIconURL
                  },
                  userId: userId,
                  username: username
                },
                root
              );
              document.body.appendChild(root);
              root.children[0].style.height = '100%';
              webChatVersionMeta = document.querySelector('head > meta[name="botframework-webchat:bundle:version"]');
              return _context.abrupt('return', {
                version: webChatVersionMeta && webChatVersionMeta.getAttribute('content')
              });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _setupVersionFamily.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvdmVyc2lvbjQuanMiXSwibmFtZXMiOlsic2V0dXBWZXJzaW9uRmFtaWx5NCIsImFzc2V0cyIsImJvdEljb25VUkwiLCJkb21haW4iLCJkaXJlY3RMaW5lVVJMIiwidXNlcklkIiwid2ViU29ja2V0IiwibGFuZ3VhZ2UiLCJzZWNyZXQiLCJ0b2tlbiIsInVzZXJuYW1lIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImxvYWRBc3NldCIsImRpcmVjdExpbmUiLCJ3aW5kb3ciLCJXZWJDaGF0IiwiY3JlYXRlRGlyZWN0TGluZSIsInJvb3QiLCJzdHlsZSIsImhlaWdodCIsInJlbmRlcldlYkNoYXQiLCJsb2NhbGUiLCJzdHlsZU9wdGlvbnMiLCJib3RBdmF0YXJJbWFnZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJ3ZWJDaGF0VmVyc2lvbk1ldGEiLCJxdWVyeVNlbGVjdG9yIiwidmVyc2lvbiIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztTQUU4QkEsbUI7Ozs7Ozs7NEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLFlBQUFBLE1BRFcsUUFDWEEsTUFEVztBQUVYQyxZQUFBQSxVQUZXLFNBRVhBLFVBRlcsRUFFZ0JDLE1BRmhCLFNBRUNDLGFBRkQsRUFFd0JDLE1BRnhCLFNBRXdCQSxNQUZ4QixFQUVnQ0MsU0FGaEMsU0FFZ0NBLFNBRmhDO0FBR1hDLFlBQUFBLFFBSFcsU0FHWEEsUUFIVyxFQUdEQyxNQUhDLFNBR0RBLE1BSEMsRUFHT0MsS0FIUCxTQUdPQSxLQUhQLEVBR2NDLFFBSGQsU0FHY0EsUUFIZDtBQUFBLDBCQUtiVCxNQUxhOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBS0lVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFNLENBQUNZLEdBQVAsQ0FBV0Msa0JBQVgsQ0FBWixDQUxKOztBQUFBO0FBT1BDLFlBQUFBLFVBUE8sR0FPTUMsTUFBTSxDQUFDQyxPQUFQLENBQWVDLGdCQUFmLENBQWdDO0FBQUVmLGNBQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVSyxjQUFBQSxNQUFNLEVBQU5BLE1BQVY7QUFBa0JDLGNBQUFBLEtBQUssRUFBTEEsS0FBbEI7QUFBeUJILGNBQUFBLFNBQVMsRUFBVEE7QUFBekIsYUFBaEMsQ0FQTixFQVNiOztBQUVNYSxZQUFBQSxJQVhPLEdBV0EsNEJBQWMsS0FBZCxFQUFxQjtBQUNoQ0MsY0FBQUEsS0FBSyxFQUFFO0FBQ0xDLGdCQUFBQSxNQUFNLEVBQUU7QUFESDtBQUR5QixhQUFyQixDQVhBO0FBaUJiTCxZQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUssYUFBZixDQUNFO0FBQ0VQLGNBQUFBLFVBQVUsRUFBVkEsVUFERjtBQUVFUSxjQUFBQSxNQUFNLEVBQUVoQixRQUZWO0FBR0VpQixjQUFBQSxZQUFZLEVBQUU7QUFDWkMsZ0JBQUFBLGNBQWMsRUFBRXZCO0FBREosZUFIaEI7QUFNRUcsY0FBQUEsTUFBTSxFQUFOQSxNQU5GO0FBT0VLLGNBQUFBLFFBQVEsRUFBUkE7QUFQRixhQURGLEVBVUVTLElBVkY7QUFhQU8sWUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEJULElBQTFCO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ1UsUUFBTCxDQUFjLENBQWQsRUFBaUJULEtBQWpCLENBQXVCQyxNQUF2QixHQUFnQyxNQUFoQztBQUVNUyxZQUFBQSxrQkFqQ08sR0FpQ2NKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1Qix5REFBdkIsQ0FqQ2Q7QUFBQSw2Q0FtQ047QUFBRUMsY0FBQUEsT0FBTyxFQUFFRixrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNHLFlBQW5CLENBQWdDLFNBQWhDO0FBQWpDLGFBbkNNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IGxvYWRBc3NldCBmcm9tICcuL2xvYWRBc3NldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNldHVwVmVyc2lvbkZhbWlseTQoXG4gIHsgYXNzZXRzIH0sXG4gIHsgYm90SWNvblVSTCwgZGlyZWN0TGluZVVSTDogZG9tYWluLCB1c2VySWQsIHdlYlNvY2tldCB9LFxuICB7IGxhbmd1YWdlLCBzZWNyZXQsIHRva2VuLCB1c2VybmFtZSB9XG4pIHtcbiAgYXNzZXRzICYmIChhd2FpdCBQcm9taXNlLmFsbChhc3NldHMubWFwKGxvYWRBc3NldCkpKTtcblxuICBjb25zdCBkaXJlY3RMaW5lID0gd2luZG93LldlYkNoYXQuY3JlYXRlRGlyZWN0TGluZSh7IGRvbWFpbiwgc2VjcmV0LCB0b2tlbiwgd2ViU29ja2V0IH0pO1xuXG4gIC8vIFRPRE86IFNob3VsZCB3ZSBzdXBwb3J0IEJpbmcgU3BlZWNoIGluIFdlYiBDaGF0IHY0P1xuXG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuV2ViQ2hhdC5yZW5kZXJXZWJDaGF0KFxuICAgIHtcbiAgICAgIGRpcmVjdExpbmUsXG4gICAgICBsb2NhbGU6IGxhbmd1YWdlLFxuICAgICAgc3R5bGVPcHRpb25zOiB7XG4gICAgICAgIGJvdEF2YXRhckltYWdlOiBib3RJY29uVVJMXG4gICAgICB9LFxuICAgICAgdXNlcklkLFxuICAgICAgdXNlcm5hbWVcbiAgICB9LFxuICAgIHJvb3RcbiAgKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICByb290LmNoaWxkcmVuWzBdLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuICBjb25zdCB3ZWJDaGF0VmVyc2lvbk1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gbWV0YVtuYW1lPVwiYm90ZnJhbWV3b3JrLXdlYmNoYXQ6YnVuZGxlOnZlcnNpb25cIl0nKTtcblxuICByZXR1cm4geyB2ZXJzaW9uOiB3ZWJDaGF0VmVyc2lvbk1ldGEgJiYgd2ViQ2hhdFZlcnNpb25NZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIH07XG59XG4iXX0=
