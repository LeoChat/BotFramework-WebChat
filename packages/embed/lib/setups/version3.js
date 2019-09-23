'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getBingSpeechToken = getBingSpeechToken;
exports.default = setupVersionFamily3;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _loadAsset = _interopRequireDefault(require('./loadAsset'));

function getBingSpeechToken(_x, _x2) {
  return _getBingSpeechToken.apply(this, arguments);
}

function _getBingSpeechToken() {
  _getBingSpeechToken = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(directLineToken, bingSpeechTokenURL) {
      var res, _ref4, accessToken;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return fetch(''.concat(bingSpeechTokenURL, '?goodForInMinutes=10'), {
                headers: {
                  Authorization: 'Bearer '.concat(directLineToken)
                }
              });

            case 2:
              res = _context.sent;

              if (res.ok) {
                _context.next = 5;
                break;
              }

              throw new Error('Failed to get Bing Speech token');

            case 5:
              _context.next = 7;
              return res.json();

            case 7:
              _ref4 = _context.sent;
              accessToken = _ref4.access_Token;
              return _context.abrupt('return', accessToken);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _getBingSpeechToken.apply(this, arguments);
}

function setupVersionFamily3(_x3, _x4, _x5) {
  return _setupVersionFamily.apply(this, arguments);
}

function _setupVersionFamily() {
  _setupVersionFamily = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref, _ref2, _ref3) {
      var assets,
        botId,
        domain,
        speechTokenURL,
        userId,
        webSocket,
        language,
        secret,
        token,
        username,
        speechOptions,
        root;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              assets = _ref.assets;
              (botId = _ref2.botId),
                (domain = _ref2.directLineURL),
                (speechTokenURL = _ref2.speechTokenURL),
                (userId = _ref2.userId),
                (webSocket = _ref2.webSocket);
              (language = _ref3.language), (secret = _ref3.secret), (token = _ref3.token), (username = _ref3.username);
              _context2.t0 = assets;

              if (!_context2.t0) {
                _context2.next = 7;
                break;
              }

              _context2.next = 7;
              return Promise.all(assets.map(_loadAsset.default));

            case 7:
              if (speechTokenURL && speechTokenURL.bingSpeech && token) {
                speechOptions = {
                  speechRecognizer: new CognitiveServices.SpeechRecognizer({
                    fetchCallback: function fetchCallback() {
                      return getBingSpeechToken(token, speechTokenURL.bingSpeech);
                    },
                    fetchOnExpiryCallback: function fetchOnExpiryCallback() {
                      return getBingSpeechToken(token, speechTokenURL.bingSpeech);
                    }
                  }),
                  speechSynthesizer: new BotChat.Speech.BrowserSpeechSynthesizer()
                };
              }

              root = document.createElement('div', {
                style: {
                  height: '100%'
                }
              });
              window.BotChat.App(
                {
                  directLine: {
                    domain: domain,
                    secret: secret,
                    token: token,
                    webSocket: webSocket
                  },
                  bot: {
                    id: botId
                  },
                  locale: language,
                  resize: 'window',
                  speechOptions: speechOptions,
                  user: {
                    id: userId,
                    name: username || 'You'
                  }
                },
                root
              );
              document.body.append(root);
              return _context2.abrupt('return', {
                version: '3'
              });

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return _setupVersionFamily.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvdmVyc2lvbjMuanMiXSwibmFtZXMiOlsiZ2V0QmluZ1NwZWVjaFRva2VuIiwiZGlyZWN0TGluZVRva2VuIiwiYmluZ1NwZWVjaFRva2VuVVJMIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfVG9rZW4iLCJzZXR1cFZlcnNpb25GYW1pbHkzIiwiYXNzZXRzIiwiYm90SWQiLCJkb21haW4iLCJkaXJlY3RMaW5lVVJMIiwic3BlZWNoVG9rZW5VUkwiLCJ1c2VySWQiLCJ3ZWJTb2NrZXQiLCJsYW5ndWFnZSIsInNlY3JldCIsInRva2VuIiwidXNlcm5hbWUiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwibG9hZEFzc2V0IiwiYmluZ1NwZWVjaCIsInNwZWVjaE9wdGlvbnMiLCJzcGVlY2hSZWNvZ25pemVyIiwiQ29nbml0aXZlU2VydmljZXMiLCJTcGVlY2hSZWNvZ25pemVyIiwiZmV0Y2hDYWxsYmFjayIsImZldGNoT25FeHBpcnlDYWxsYmFjayIsInNwZWVjaFN5bnRoZXNpemVyIiwiQm90Q2hhdCIsIlNwZWVjaCIsIkJyb3dzZXJTcGVlY2hTeW50aGVzaXplciIsInJvb3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsIndpbmRvdyIsIkFwcCIsImRpcmVjdExpbmUiLCJib3QiLCJpZCIsImxvY2FsZSIsInJlc2l6ZSIsInVzZXIiLCJuYW1lIiwiYm9keSIsImFwcGVuZCIsInZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBRXNCQSxrQjs7Ozs7Ozs0QkFBZixpQkFBa0NDLGVBQWxDLEVBQW1EQyxrQkFBbkQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FDLEtBQUssV0FBSUQsa0JBQUosMkJBQThDO0FBQ25FRSxjQUFBQSxPQUFPLEVB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Z0IsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUExQ007O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkQXNzZXQgZnJvbSAnLi9sb2FkQXNzZXQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmluZ1NwZWVjaFRva2VuKGRpcmVjdExpbmVUb2tlbiwgYmluZ1NwZWVjaFRva2VuVVJMKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2JpbmdTcGVlY2hUb2tlblVSTH0/Z29vZEZvckluTWludXRlcz0xMGAsIHtcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtkaXJlY3RMaW5lVG9rZW59YCB9XG4gIH0pO1xuXG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IEJpbmcgU3BlZWNoIHRva2VuJyk7XG4gIH1cblxuICBjb25zdCB7IGFjY2Vzc19Ub2tlbjogYWNjZXNzVG9rZW4gfSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZXR1cFZlcnNpb25GYW1pbHkzKFxuICB7IGFzc2V0cyB9LFxuICB7IGJvdElkLCBkaXJlY3RMaW5lVVJMOiBkb21haW4sIHNwZWVjaFRva2VuVVJMLCB1c2VySWQsIHdlYlNvY2tldCB9LFxuICB7IGxhbmd1YWdlLCBzZWNyZXQsIHRva2VuLCB1c2VybmFtZSB9XG4pIHtcbiAgYXNzZXRzICYmIChhd2FpdCBQcm9taXNlLmFsbChhc3NldHMubWFwKGxvYWRBc3NldCkpKTtcblxuICBsZXQgc3BlZWNoT3B0aW9ucztcblxuICBpZiAoc3BlZWNoVG9rZW5VUkwgJiYgc3BlZWNoVG9rZW5VUkwuYmluZ1NwZWVjaCAmJiB0b2tlbikge1xuICAgIHNwZWVjaE9wdGlvbnMgPSB7XG4gICAgICBzcGVlY2hSZWNvZ25pemVyOiBuZXcgQ29nbml0aXZlU2VydmljZXMuU3BlZWNoUmVjb2duaXplcih7XG4gICAgICAgIGZldGNoQ2FsbGJhY2s6ICgpID0+IGdldEJpbmdTcGVlY2hUb2tlbih0b2tlbiwgc3BlZWNoVG9rZW5VUkwuYmluZ1NwZWVjaCksXG4gICAgICAgIGZldGNoT25FeHBpcnlDYWxsYmFjazogKCkgPT4gZ2V0QmluZ1NwZWVjaFRva2VuKHRva2VuLCBzcGVlY2hUb2tlblVSTC5iaW5nU3BlZWNoKVxuICAgICAgfSksXG4gICAgICBzcGVlY2hTeW50aGVzaXplcjogbmV3IEJvdENoYXQuU3BlZWNoLkJyb3dzZXJTcGVlY2hTeW50aGVzaXplcigpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuQm90Q2hhdC5BcHAoXG4gICAge1xuICAgICAgZGlyZWN0TGluZTogeyBkb21haW4sIHNlY3JldCwgdG9rZW4sIHdlYlNvY2tldCB9LFxuICAgICAgYm90OiB7IGlkOiBib3RJZCB9LFxuICAgICAgbG9jYWxlOiBsYW5ndWFnZSxcbiAgICAgIHJlc2l6ZTogJ3dpbmRvdycsXG4gICAgICBzcGVlY2hPcHRpb25zLFxuICAgICAgdXNlcjoge1xuICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICBuYW1lOiB1c2VybmFtZSB8fCAnWW91J1xuICAgICAgfVxuICAgIH0sXG4gICAgcm9vdFxuICApO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG4gIHJldHVybiB7IHZlcnNpb246ICczJyB9O1xufVxuIl19
