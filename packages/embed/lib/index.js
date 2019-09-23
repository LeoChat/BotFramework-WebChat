'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.findService = findService;
exports.default = main;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('core-js/modules/es.array.includes');

require('core-js/modules/es.array.iterator');

require('core-js/modules/es.promise');

require('core-js/modules/es.symbol');

require('url-search-params-polyfill');

require('whatwg-fetch');

var _urlBuilder = require('./urlBuilder');

var _logger = require('./logger');

var _locale = require('./locale');

var _fetchJSON = _interopRequireDefault(require('./fetchJSON'));

var _servicingPlan = _interopRequireDefault(require('../servicingPlan.json'));

var _index = _interopRequireDefault(require('./setups/index'));

var _loadIFRAME = _interopRequireDefault(require('./setups/loadIFRAME'));

var MAX_VERSION_REDIRECTIONS = 10;

function execRedirectRules(bot, redirects, version) {
  var featurePattern = /^feature:(.+)/;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (
      var _iterator = redirects[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
        rule = _step$value[0],
        redirectVersion = _step$value[1];

      var featureMatch = featurePattern.exec(rule);
      var found = void 0;

      if (rule === '*') {
        found = true;
      } else if (featureMatch) {
        found = bot.features.includes(featureMatch[1]);
      } else {
        (0, _logger.warn)('Version "'.concat(version, '" has an invalid rule "').concat(rule, '", skipping.'));
        continue;
      }

      if (found) {
        return redirectVersion;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function findService(servicingPlan, bot) {
  var requestedVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  var traversedVersions = [];
  var logs = [];
  var publicOnly = true;
  var versions = servicingPlan.versions;

  if (!versions['default']) {
    throw new Error('There is no default version specified in the servicing plan.');
  }

  for (var hop = MAX_VERSION_REDIRECTIONS; hop >= 0; hop--) {
    var service = versions[requestedVersion];
    traversedVersions.push(requestedVersion);

    if (!service || (publicOnly && service.private)) {
      (0, _logger.warn)(
        'There is no version "'.concat(requestedVersion, '" or it is marked as private; falling back to "default".')
      );
      requestedVersion = 'default';
      publicOnly = true;
      continue;
    }

    var _ref = service || {},
      redirects = _ref.redirects;

    if (redirects) {
      logs.push('Executing redirection rules of version "'.concat(requestedVersion, '".'));
      var actualVersion = execRedirectRules(bot, redirects, requestedVersion) || {};

      if (actualVersion) {
        requestedVersion = actualVersion;
        publicOnly = false;
      } else {
        (0, _logger.warn)(
          'Version "'.concat(requestedVersion, '" did not have a fallback plan; falling back to default version.')
        );
        requestedVersion = 'default';
        publicOnly = true;
      }

      continue;
    }

    (0, _logger.log)(
      [
        'Selecting version ',
        traversedVersions
          .map(function(version) {
            return typeof version === 'undefined' ? '<undefined>' : '"'.concat(version, '"');
          })
          .join(' -> '),
        '.'
      ].join('')
    );
    return service;
  }

  throw new Error('Maximum version redirections exceeded. This is probably problem with our servicing plan.');
}

function parseParams(search) {
  var params = new URLSearchParams(search);
  var botId = params.get('b') || undefined;
  var language = (0, _locale.normalize)(params.get('l') || navigator.language);
  var token = params.get('t') || undefined;
  var userId = params.get('userid') || undefined;
  var username = params.get('username') || undefined;
  var version = params.get('v') || undefined;
  var secret = token ? undefined : params.get('s') || undefined;
  return {
    botId: botId,
    language: language,
    secret: secret,
    token: token,
    userId: userId,
    username: username,
    version: version
  };
}

function main(_x) {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(search) {
      var _dataPoints;

      var params, botId, secret, token, version, bot, service, deprecation, _ref3, actualVersion, dataPoints, res;

      return _regenerator.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                params = parseParams(search);
                (botId = params.botId), (secret = params.secret), (token = params.token), (version = params.version);

                if (!(!secret && !token)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return (0, _loadIFRAME.default)('/404.html');

              case 5:
                throw new Error('You must specify either a secret or a token.');

              case 6:
                _context.prev = 6;
                _context.next = 9;
                return (0, _fetchJSON.default)(
                  (0, _urlBuilder.embedConfigurationURL)(botId, {
                    secret: secret,
                    token: token,
                    userId: params.userId
                  }),
                  {
                    credentials: 'include'
                  }
                );

              case 9:
                bot = _context.sent;
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](6);
                _context.next = 16;
                return (0, _loadIFRAME.default)('/404.html');

              case 16:
                throw _context.t0;

              case 17:
                document.title = bot.botName;
                service = findService(_servicingPlan.default, bot, version);
                deprecation = service.deprecation;
                deprecation && (0, _logger.warn)(deprecation);
                _context.next = 23;
                return (0, _index.default)(service, bot, params);

              case 23:
                _ref3 = _context.sent;
                actualVersion = _ref3.version;
                dataPoints =
                  ((_dataPoints = {}),
                  (0, _defineProperty2.default)(_dataPoints, 'actualversion:'.concat(actualVersion), 1),
                  (0, _defineProperty2.default)(
                    _dataPoints,
                    'expectversion:'.concat((version || '').substr(0, 10)),
                    version
                  ),
                  (0, _defineProperty2.default)(_dataPoints, 'userid:'.concat(bot.userIdSource), 1),
                  (0, _defineProperty2.default)(_dataPoints, 'speech', bot.speech),
                  (0, _defineProperty2.default)(_dataPoints, 'websocket', bot.webSocket),
                  _dataPoints);
                _context.next = 28;
                return fetch(
                  (0, _urlBuilder.embedTelemetryURL)(
                    botId,
                    {
                      secret: secret,
                      token: token
                    },
                    Object.keys(dataPoints).filter(function(name) {
                      return dataPoints[name];
                    })
                  ),
                  {
                    mode: 'no-cors'
                  }
                );

              case 28:
                res = _context.sent;
                res.text();

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[6, 12]]
      );
    })
  );
  return _main.apply(this, arguments);
}

main(location.search).catch(function(_ref2) {
  var _ref2$stack = _ref2.stack,
    stack = _ref2$stack === void 0 ? '' : _ref2$stack;
  return (0,
  _logger.error)(['Unhandled exception caught when loading.', ''].concat((0, _toConsumableArray2.default)(stack.split('\n'))).join('\n'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNQVhfVkVSU0lPTl9SRURJUkVDVElPTlMiLCJleGVjUmVkaXJlY3RSdWxlcyIsImJvdCIsInJlZGlyZWN0cyIsInZlcnNpb24iLCJmZWF0dXJlUGF0dGVybiIsInJ1bGUiLCJyZWRpcmVjdFZlcnNpb24iLCJmZWF0dXJlTWF0Y2giLCJleGVjIiwiZm91bmQiLCJmZWF0dXJlcyIsImluY2x1ZGVzIiwiZmluZFNlcnZpY2UiLCJzZXJ2aWNpbmdQbGFuIiwicmVxdWVzdGVkVmVyc2lvbiIsInRyYXZlcnNlZFZlcnNpb25zIiwibG9ncyIsInB1YmxpY09ubHkiLCJ2ZXJzaW9ucyIsIkVycm9yIiwiaG9wIiwic2VydmljZSIsInB1c2giLCJwcml2YXRlIiwiYWN0dWFsVmVyc2lvbiIsIm1hcCIsImpvaW4iLCJwYXJzZVBhcmFtcyIsInNlYXJjaCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImJvdElkIiwiZ2V0IiwidW5kZWZpbmVkIiwibGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJ0b2tlbiIsInVzZXJJZCIsInVzZXJuYW1lIiwic2VjcmV0IiwibWFpbiIsImNyZWRlbnRpYWxzIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImJvdE5hbWUiLCJkZXByZWNhdGlvbiIsImRhdGFQb2ludHMiLCJzdWJzdHIiLCJ1c2VySWRTb3VyY2UiLCJzcGVlY2giLCJ3ZWJTb2NrZXQiLCJmZXRjaCIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJuYW1lIiwibW9kZSIsInJlcyIsInRleHQiLCJsb2NhdGlvbiIsImNhdGNoIiwic3RhY2siLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSx3QkFBd0IsR0FBRyxFQUFqQzs7QUFFQSxTQUFTQyxpQkFB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RDBCO0FBQUEsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcyc7XG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcic7XG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlJztcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbCc7XG5pbXBvcnQgJ3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsJztcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcblxuaW1wb3J0IHsgZW1iZWRDb25maWd1cmF0aW9uVVJMLCBlbWJlZFRlbGVtZXRyeVVSTCB9IGZyb20gJy4vdXJsQnVpbGRlcic7XG5pbXBvcnQgeyBlcnJvciwgbG9nLCB3YXJuIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgbm9ybWFsaXplIGFzIG5vcm1hbGl6ZUxvY2FsZSB9IGZyb20gJy4vbG9jYWxlJztcbmltcG9ydCBmZXRjaEpTT04gZnJvbSAnLi9mZXRjaEpTT04nO1xuaW1wb3J0IHNlcnZpY2luZ1BsYW4gZnJvbSAnLi4vc2VydmljaW5nUGxhbi5qc29uJztcbmltcG9ydCBzZXR1cCBmcm9tICcuL3NldHVwcy9pbmRleCc7XG5pbXBvcnQgbG9hZElGUkFNRSBmcm9tICcuL3NldHVwcy9sb2FkSUZSQU1FJztcblxuY29uc3QgTUFYX1ZFUlNJT05fUkVESVJFQ1RJT05TID0gMTA7XG5cbmZ1bmN0aW9uIGV4ZWNSZWRpcmVjdFJ1bGVzKGJvdCwgcmVkaXJlY3RzLCB2ZXJzaW9uKSB7XG4gIGNvbnN0IGZlYXR1cmVQYXR0ZXJuID0gL15mZWF0dXJlOiguKykvO1xuXG4gIGZvciAobGV0IFtydWxlLCByZWRpcmVjdFZlcnNpb25dIG9mIHJlZGlyZWN0cykge1xuICAgIGNvbnN0IGZlYXR1cmVNYXRjaCA9IGZlYXR1cmVQYXR0ZXJuLmV4ZWMocnVsZSk7XG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKHJ1bGUgPT09ICcqJykge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZmVhdHVyZU1hdGNoKSB7XG4gICAgICBmb3VuZCA9IGJvdC5mZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlTWF0Y2hbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGBWZXJzaW9uIFwiJHt2ZXJzaW9ufVwiIGhhcyBhbiBpbnZhbGlkIHJ1bGUgXCIke3J1bGV9XCIsIHNraXBwaW5nLmApO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdFZlcnNpb247XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU2VydmljZShzZXJ2aWNpbmdQbGFuLCBib3QsIHJlcXVlc3RlZFZlcnNpb24gPSAnZGVmYXVsdCcpIHtcbiAgY29uc3QgdHJhdmVyc2VkVmVyc2lvbnMgPSBbXTtcbiAgY29uc3QgbG9ncyA9IFtdO1xuICBsZXQgcHVibGljT25seSA9IHRydWU7XG4gIGNvbnN0IHsgdmVyc2lvbnMgfSA9IHNlcnZpY2luZ1BsYW47XG5cbiAgaWYgKCF2ZXJzaW9uc1snZGVmYXVsdCddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBkZWZhdWx0IHZlcnNpb24gc3BlY2lmaWVkIGluIHRoZSBzZXJ2aWNpbmcgcGxhbi5gKTtcbiAgfVxuXG4gIGZvciAobGV0IGhvcCA9IE1BWF9WRVJTSU9OX1JFRElSRUNUSU9OUzsgaG9wID49IDA7IGhvcC0tKSB7XG4gICAgbGV0IHNlcnZpY2UgPSB2ZXJzaW9uc1tyZXF1ZXN0ZWRWZXJzaW9uXTtcblxuICAgIHRyYXZlcnNlZFZlcnNpb25zLnB1c2gocmVxdWVzdGVkVmVyc2lvbik7XG5cbiAgICBpZiAoIXNlcnZpY2UgfHwgKHB1YmxpY09ubHkgJiYgc2VydmljZS5wcml2YXRlKSkge1xuICAgICAgd2FybihgVGhlcmUgaXMgbm8gdmVyc2lvbiBcIiR7cmVxdWVzdGVkVmVyc2lvbn1cIiBvciBpdCBpcyBtYXJrZWQgYXMgcHJpdmF0ZTsgZmFsbGluZyBiYWNrIHRvIFwiZGVmYXVsdFwiLmApO1xuXG4gICAgICByZXF1ZXN0ZWRWZXJzaW9uID0gJ2RlZmF1bHQnO1xuICAgICAgcHVibGljT25seSA9IHRydWU7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcmVkaXJlY3RzIH0gPSBzZXJ2aWNlIHx8IHt9O1xuXG4gICAgaWYgKHJlZGlyZWN0cykge1xuICAgICAgbG9ncy5wdXNoKGBFeGVjdXRpbmcgcmVkaXJlY3Rpb24gcnVsZXMgb2YgdmVyc2lvbiBcIiR7cmVxdWVzdGVkVmVyc2lvbn1cIi5gKTtcblxuICAgICAgY29uc3QgYWN0dWFsVmVyc2lvbiA9IGV4ZWNSZWRpcmVjdFJ1bGVzKGJvdCwgcmVkaXJlY3RzLCByZXF1ZXN0ZWRWZXJzaW9uKSB8fCB7fTtcblxuICAgICAgaWYgKGFjdHVhbFZlcnNpb24pIHtcbiAgICAgICAgcmVxdWVzdGVkVmVyc2lvbiA9IGFjdHVhbFZlcnNpb247XG4gICAgICAgIHB1YmxpY09ubHkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oYFZlcnNpb24gXCIke3JlcXVlc3RlZFZlcnNpb259XCIgZGlkIG5vdCBoYXZlIGEgZmFsbGJhY2sgcGxhbjsgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHQgdmVyc2lvbi5gKTtcblxuICAgICAgICByZXF1ZXN0ZWRWZXJzaW9uID0gJ2RlZmF1bHQnO1xuICAgICAgICBwdWJsaWNPbmx5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbG9nKFxuICAgICAgW1xuICAgICAgICAnU2VsZWN0aW5nIHZlcnNpb24gJyxcbiAgICAgICAgdHJhdmVyc2VkVmVyc2lvbnNcbiAgICAgICAgICAubWFwKHZlcnNpb24gPT4gKHR5cGVvZiB2ZXJzaW9uID09PSAndW5kZWZpbmVkJyA/ICc8dW5kZWZpbmVkPicgOiBgXCIke3ZlcnNpb259XCJgKSlcbiAgICAgICAgICAuam9pbignIC0+ICcpLFxuICAgICAgICAnLidcbiAgICAgIF0uam9pbignJylcbiAgICApO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE1heGltdW0gdmVyc2lvbiByZWRpcmVjdGlvbnMgZXhjZWVkZWQuIFRoaXMgaXMgcHJvYmFibHkgcHJvYmxlbSB3aXRoIG91ciBzZXJ2aWNpbmcgcGxhbi5gKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbXMoc2VhcmNoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcblxuICBjb25zdCBib3RJZCA9IHBhcmFtcy5nZXQoJ2InKSB8fCB1bmRlZmluZWQ7XG4gIGNvbnN0IGxhbmd1YWdlID0gbm9ybWFsaXplTG9jYWxlKHBhcmFtcy5nZXQoJ2wnKSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UpO1xuICBjb25zdCB0b2tlbiA9IHBhcmFtcy5nZXQoJ3QnKSB8fCB1bmRlZmluZWQ7XG4gIGNvbnN0IHVzZXJJZCA9IHBhcmFtcy5nZXQoJ3VzZXJpZCcpIHx8IHVuZGVmaW5lZDtcbiAgY29uc3QgdXNlcm5hbWUgPSBwYXJhbXMuZ2V0KCd1c2VybmFtZScpIHx8IHVuZGVmaW5lZDtcbiAgY29uc3QgdmVyc2lvbiA9IHBhcmFtcy5nZXQoJ3YnKSB8fCB1bmRlZmluZWQ7XG5cbiAgY29uc3Qgc2VjcmV0ID0gdG9rZW4gPyB1bmRlZmluZWQgOiBwYXJhbXMuZ2V0KCdzJykgfHwgdW5kZWZpbmVkO1xuXG4gIHJldHVybiB7XG4gICAgYm90SWQsXG4gICAgbGFuZ3VhZ2UsXG4gICAgc2VjcmV0LFxuICAgIHRva2VuLFxuICAgIHVzZXJJZCxcbiAgICB1c2VybmFtZSxcbiAgICB2ZXJzaW9uXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1haW4oc2VhcmNoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHBhcnNlUGFyYW1zKHNlYXJjaCk7XG4gIGNvbnN0IHsgYm90SWQsIHNlY3JldCwgdG9rZW4sIHZlcnNpb24gfSA9IHBhcmFtcztcblxuICBpZiAoIXNlY3JldCAmJiAhdG9rZW4pIHtcbiAgICBhd2FpdCBsb2FkSUZSQU1FKCcvNDA0Lmh0bWwnKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgYSBzZWNyZXQgb3IgYSB0b2tlbi5gKTtcbiAgfVxuXG4gIGxldCBib3Q7XG5cbiAgdHJ5IHtcbiAgICBib3QgPSBhd2FpdCBmZXRjaEpTT04oXG4gICAgICBlbWJlZENvbmZpZ3VyYXRpb25VUkwoYm90SWQsIHtcbiAgICAgICAgc2VjcmV0LFxuICAgICAgICB0b2tlbixcbiAgICAgICAgdXNlcklkOiBwYXJhbXMudXNlcklkXG4gICAgICB9KSxcbiAgICAgIHsgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYXdhaXQgbG9hZElGUkFNRSgnLzQwNC5odG1sJyk7XG5cbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICBkb2N1bWVudC50aXRsZSA9IGJvdC5ib3ROYW1lO1xuXG4gIGNvbnN0IHNlcnZpY2UgPSBmaW5kU2VydmljZShzZXJ2aWNpbmdQbGFuLCBib3QsIHZlcnNpb24pO1xuICBjb25zdCB7IGRlcHJlY2F0aW9uIH0gPSBzZXJ2aWNlO1xuXG4gIGRlcHJlY2F0aW9uICYmIHdhcm4oZGVwcmVjYXRpb24pO1xuXG4gIGNvbnN0IHsgdmVyc2lvbjogYWN0dWFsVmVyc2lvbiB9ID0gYXdhaXQgc2V0dXAoc2VydmljZSwgYm90LCBwYXJhbXMpO1xuICBjb25zdCBkYXRhUG9pbnRzID0ge1xuICAgIFtgYWN0dWFsdmVyc2lvbjoke2FjdHVhbFZlcnNpb259YF06IDEsXG4gICAgW2BleHBlY3R2ZXJzaW9uOiR7KHZlcnNpb24gfHwgJycpLnN1YnN0cigwLCAxMCl9YF06IHZlcnNpb24sXG4gICAgW2B1c2VyaWQ6JHtib3QudXNlcklkU291cmNlfWBdOiAxLFxuICAgIHNwZWVjaDogYm90LnNwZWVjaCxcbiAgICB3ZWJzb2NrZXQ6IGJvdC53ZWJTb2NrZXRcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBlbWJlZFRlbGVtZXRyeVVSTChib3RJZCwgeyBzZWNyZXQsIHRva2VuIH0sIE9iamVjdC5rZXlzKGRhdGFQb2ludHMpLmZpbHRlcihuYW1lID0+IGRhdGFQb2ludHNbbmFtZV0pKSxcbiAgICB7IG1vZGU6ICduby1jb3JzJyB9XG4gICk7XG5cbiAgcmVzLnRleHQoKTtcbn1cblxubWFpbihsb2NhdGlvbi5zZWFyY2gpLmNhdGNoKCh7IHN0YWNrID0gJycgfSkgPT5cbiAgZXJyb3IoWydVbmhhbmRsZWQgZXhjZXB0aW9uIGNhdWdodCB3aGVuIGxvYWRpbmcuJywgJycsIC4uLnN0YWNrLnNwbGl0KCdcXG4nKV0uam9pbignXFxuJykpXG4pO1xuIl19
