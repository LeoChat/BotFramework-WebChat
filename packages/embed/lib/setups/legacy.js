'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = setupLegacyVersionFamily;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _urlBuilder = require('../urlBuilder');

var _loadIFRAME = _interopRequireDefault(require('./loadIFRAME'));

var JAVASCRIPT_LOCALE_PATTERN = /^([a-z]{2})(-([A-Za-z]{2}))?$/;

function toAzureLocale(language) {
  var match = JAVASCRIPT_LOCALE_PATTERN.exec(language);

  if (match) {
    if (match[2]) {
      return ''
        .concat(match[1], '.')
        .concat(match[1], '-')
        .concat(match[3].toLowerCase());
    } else {
      return match[1];
    }
  }
}

function setupLegacyVersionFamily(_x, _x2, _x3) {
  return _setupLegacyVersionFamily.apply(this, arguments);
}

function _setupLegacyVersionFamily() {
  _setupLegacyVersionFamily = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_, _ref, _ref2) {
      var botId,
        userId,
        language,
        secret,
        token,
        username,
        features,
        params,
        azureLocale,
        _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (botId = _ref.botId), (userId = _ref.userId);
              (language = _ref2.language), (secret = _ref2.secret), (token = _ref2.token), (username = _ref2.username);
              features = _args.length > 3 && _args[3] !== undefined ? _args[3] : [];
              // Version 1 also depends on your token.
              // If you are using a token on Aries, you get Aries (v1).
              // If you are using a token on Scorpio, you get Scorpio (v3).
              params = new URLSearchParams();
              azureLocale = language && toAzureLocale(language);
              features.length && params.set('features', features.join(','));
              azureLocale && params.set('l', azureLocale);
              secret && params.set('s', secret);
              token && params.set('t', token);
              userId && params.set('userid', userId);
              username && params.set('username', username);
              _context.next = 13;
              return (0, _loadIFRAME.default)((0, _urlBuilder.legacyEmbedURL)(botId, params));

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _setupLegacyVersionFamily.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvbGVnYWN5LmpzIl0sIm5hbWVzIjpbIkpBVkFTQ1JJUFRfTE9DQUxFX1BBVFRFUk4iLCJ0b0F6dXJlTG9jYWxlIiwibGFuZ3VhZ2UiLCJtYXRjaCIsImV4ZWMiLCJ0b0xvd2VyQ2FzZSIsInNldHVwTGVnYWN5VmVyc2lvbkZhbWlseSIsIl8iLCJib3RJZCIsInVzZXJJZCIsInNlY3JldCIsInRva2VuIiwidXNlcm5hbWUiLCJmZWF0dXJlcyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImF6dXJlTG9jYWxlIiwibGVuZ3RoIiwic2V0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLHlCQUF5QixHQUFHLCtCQUFsQzs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxRQUF2QixFQUFpQztBQUMvQixNQUFNQyxLQUFLLEdBQUdILHlCQUF5QixDQUFDSSxJQUExQixDQUErQkYsUUFBL0IsQ0FBZDs7QUFFQSxNQUFJQyxLQUFKLEVBQVc7QUFDVCxRQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWM7QUFDWix1QkFBVUEsS0FBSyxDQUFDLENBQUQsQ0FBZixjQUFzQkEsS0FBSyxDQUFDLENBQUQsQ0FBM0IsY0FBa0NBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0UsV0FBVCxFQUFsQztBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9GLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDRDtBQUNGO0FBQ0Y7O1NBRTZCRyx3Qjs7Ozs7Ozs0QkFBZixpQkFDYkMsQ0FEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEMsWUFBQUEsS0FGVyxRQUVYQSxLQUZXLEVBRUpDLE1BRkksUUFFSkEsTUFGSTtBQUdYUCxZQUFBQSxRQUhXLFNBR1hBLFFBSFcsRUFHRFEsTUFIQyxTQUdEQSxNQUhDLEVBR09DLEtBSFAsU0FHT0EsS0FIUCxFQUdjQyxRQUhkLFNBR2NBLFFBSGQ7QUFJYkMsWUFBQUEsUUFKYSwyREFJRixFQUpFO0FBTWI7QUFDQTtBQUNBO0FBRU1DLFlBQUFBLE1BVk8sR0FVRSxJQUFJQyxlQUFKLEVBVkY7QUFXUEMsWUFBQUEsV0FYTyxHQVdPZCxRQUFRLElBQUlELGFBQWEsQ0FBQ0MsUUFBRCxDQVhoQztBQWFiVyxZQUFBQSxRQUFRLENBQUNJLE1BQVQsSUFBbUJILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQVgsRUFBdUJMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLEdBQWQsQ0FBdkIsQ0FBbkI7QUFDQUgsWUFBQUEsV0FBVyxJQUFJRixNQUFNLENBQUNJLEdBQVAsQ0FBVyxHQUFYLEVBQWdCRixXQUFoQixDQUFmO0FBQ0FOLFlBQUFBLE1BQU0sSUFBSUksTUFBTSxDQUFDSSxHQUFQLENBQVcsR0FBWCxFQUFnQlIsTUFBaEIsQ0FBVjtBQUNBQyxZQUFBQSxLQUFLLElBQUlHLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLEdBQVgsRUFBZ0JQLEtBQWhCLENBQVQ7QUFDQUYsWUFBQUEsTUFBTSxJQUFJSyxNQUFNLENBQUNJLEdBQVAsQ0FBVyxRQUFYLEVBQXFCVCxNQUFyQixDQUFWO0FBQ0FHLFlBQUFBLFFBQVEsSUFBSUUsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBWCxFQUF1Qk4sUUFBdkIsQ0FBWjtBQWxCYTtBQUFBLG1CQW9CUCx5QkFBVyxnQ0FBZUosS0FBZixFQUFzQk0sTUFBdEIsQ0FBWCxDQXBCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGVnYWN5RW1iZWRVUkwgfSBmcm9tICcuLi91cmxCdWlsZGVyJztcbmltcG9ydCBsb2FkSUZSQU1FIGZyb20gJy4vbG9hZElGUkFNRSc7XG5cbmNvbnN0IEpBVkFTQ1JJUFRfTE9DQUxFX1BBVFRFUk4gPSAvXihbYS16XXsyfSkoLShbQS1aYS16XXsyfSkpPyQvO1xuXG5mdW5jdGlvbiB0b0F6dXJlTG9jYWxlKGxhbmd1YWdlKSB7XG4gIGNvbnN0IG1hdGNoID0gSkFWQVNDUklQVF9MT0NBTEVfUEFUVEVSTi5leGVjKGxhbmd1YWdlKTtcblxuICBpZiAobWF0Y2gpIHtcbiAgICBpZiAobWF0Y2hbMl0pIHtcbiAgICAgIHJldHVybiBgJHttYXRjaFsxXX0uJHttYXRjaFsxXX0tJHttYXRjaFszXS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2V0dXBMZWdhY3lWZXJzaW9uRmFtaWx5KFxuICBfLFxuICB7IGJvdElkLCB1c2VySWQgfSxcbiAgeyBsYW5ndWFnZSwgc2VjcmV0LCB0b2tlbiwgdXNlcm5hbWUgfSxcbiAgZmVhdHVyZXMgPSBbXVxuKSB7XG4gIC8vIFZlcnNpb24gMSBhbHNvIGRlcGVuZHMgb24geW91ciB0b2tlbi5cbiAgLy8gSWYgeW91IGFyZSB1c2luZyBhIHRva2VuIG9uIEFyaWVzLCB5b3UgZ2V0IEFyaWVzICh2MSkuXG4gIC8vIElmIHlvdSBhcmUgdXNpbmcgYSB0b2tlbiBvbiBTY29ycGlvLCB5b3UgZ2V0IFNjb3JwaW8gKHYzKS5cblxuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IGF6dXJlTG9jYWxlID0gbGFuZ3VhZ2UgJiYgdG9BenVyZUxvY2FsZShsYW5ndWFnZSk7XG5cbiAgZmVhdHVyZXMubGVuZ3RoICYmIHBhcmFtcy5zZXQoJ2ZlYXR1cmVzJywgZmVhdHVyZXMuam9pbignLCcpKTtcbiAgYXp1cmVMb2NhbGUgJiYgcGFyYW1zLnNldCgnbCcsIGF6dXJlTG9jYWxlKTtcbiAgc2VjcmV0ICYmIHBhcmFtcy5zZXQoJ3MnLCBzZWNyZXQpO1xuICB0b2tlbiAmJiBwYXJhbXMuc2V0KCd0JywgdG9rZW4pO1xuICB1c2VySWQgJiYgcGFyYW1zLnNldCgndXNlcmlkJywgdXNlcklkKTtcbiAgdXNlcm5hbWUgJiYgcGFyYW1zLnNldCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG5cbiAgYXdhaXQgbG9hZElGUkFNRShsZWdhY3lFbWJlZFVSTChib3RJZCwgcGFyYW1zKSk7XG59XG4iXX0=
