'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = postActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _effects = require('redux-saga/effects');

var _observeOnce = _interopRequireDefault(require('./effects/observeOnce'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _clockSkewAdjustment = _interopRequireDefault(require('../selectors/clockSkewAdjustment'));

var _combineSelectors = _interopRequireDefault(require('../selectors/combineSelectors'));

var _language = _interopRequireDefault(require('../selectors/language'));

var _sendTimeout = _interopRequireDefault(require('../selectors/sendTimeout'));

var _deleteKey = _interopRequireDefault(require('../utils/deleteKey'));

var _sleep = _interopRequireDefault(require('../utils/sleep'));

var _uniqueID = _interopRequireDefault(require('../utils/uniqueID'));

var _postActivity = require('../actions/postActivity');

var _incomingActivity = require('../actions/incomingActivity');

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivity),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivitySaga);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        (0, _defineProperty2['default'])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function getTimestamp() {
  var clockSkewAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Date(Date.now() + clockSkewAdjustment).toISOString();
}

function postActivity(directLine, userID, username, numActivitiesPosted, _ref) {
  var method,
    activity,
    _ref2,
    clockSkewAdjustment,
    locale,
    _activity,
    attachments,
    _activity$channelData,
    _activity$channelData2,
    clientActivityID,
    meta,
    echoBackCall,
    sendTimeout,
    _ref5,
    echoBack;

  return _regenerator['default'].wrap(
    function postActivity$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            (method = _ref.meta.method), (activity = _ref.payload.activity);
            _context2.next = 3;
            return (0, _effects.select)(
              (0, _combineSelectors['default'])({
                clockSkewAdjustment: _clockSkewAdjustment['default'],
                locale: _language['default']
              })
            );

          case 3:
            _ref2 = _context2.sent;
            clockSkewAdjustment = _ref2.clockSkewAdjustment;
            locale = _ref2.locale;
            (_activity = activity),
              (attachments = _activity.attachments),
              (_activity$channelData = _activity.channelData);
            _activity$channelData = _activity$channelData === void 0 ? {} : _activity$channelData;
            (_activity$channelData2 = _activity$channelData.clientActivityID),
              (clientActivityID =
                _activity$channelData2 === void 0 ? (0, _uniqueID['default'])() : _activity$channelData2);
            activity = _objectSpread({}, (0, _deleteKey['default'])(activity, 'id'), {
              attachments:
                attachments &&
                attachments.map(function(_ref3) {
                  var contentType = _ref3.contentType,
                    contentUrl = _ref3.contentUrl,
                    name = _ref3.name;
                  return {
                    contentType: contentType,
                    contentUrl: contentUrl,
                    name: name
                  };
                }),
              channelData: _objectSpread(
                {
                  clientActivityID: clientActivityID,
                  // This is unskewed local timestamp for estimating clock skew.
                  clientTimestamp: getTimestamp()
                },
                (0, _deleteKey['default'])(activity.channelData, 'state')
              ),
              channelId: 'webchat',
              from: {
                id: userID,
                name: username,
                role: 'user'
              },
              locale: locale,
              // This timestamp will be replaced by Direct Line Channel in echoback.
              // We are temporarily adding this timestamp for sorting.
              timestamp: getTimestamp(clockSkewAdjustment)
            });

            if (!numActivitiesPosted) {
              activity.entities = [].concat((0, _toConsumableArray2['default'])(activity.entities || []), [
                {
                  // TODO: [P4] Currently in v3, we send the capabilities although the client might not actually have them
                  //       We need to understand why we need to send these, and only send capabilities the client have
                  requiresBotState: true,
                  supportsListening: true,
                  supportsTts: true,
                  type: 'ClientCapabilities'
                }
              ]);
            }

            meta = {
              clientActivityID: clientActivityID,
              method: method
            };
            _context2.next = 14;
            return (0, _effects.put)({
              type: _postActivity.POST_ACTIVITY_PENDING,
              meta: meta,
              payload: {
                activity: activity
              }
            });

          case 14:
            _context2.prev = 14;
            // Quirks: We might receive INCOMING_ACTIVITY before the postActivity call completed
            //         So, we setup expectation first, then postActivity afterward
            echoBackCall = (0, _effects.call)(
              /*#__PURE__*/
              _regenerator['default'].mark(function _callee() {
                var _ref4, _activity2, _activity2$channelDat, channelData, id;

                return _regenerator['default'].wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return (0, _effects.take)(_incomingActivity.INCOMING_ACTIVITY);

                      case 2:
                        _ref4 = _context.sent;
                        _activity2 = _ref4.payload.activity;
                        (_activity2$channelDat = _activity2.channelData),
                          (channelData = _activity2$channelDat === void 0 ? {} : _activity2$channelDat),
                          (id = _activity2.id);

                        if (!(channelData.clientActivityID === clientActivityID && id)) {
                          _context.next = 7;
                          break;
                        }

                        return _context.abrupt('return', _activity2);

                      case 7:
                        _context.next = 0;
                        break;

                      case 9:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            ); // Timeout could be due to either:
            // - Post activity call may take too long time to complete
            //   - Direct Line service only respond on HTTP after bot respond to Direct Line
            // - Activity may take too long time to echo back

            _context2.next = 18;
            return (0, _effects.select)(_sendTimeout['default']);

          case 18:
            sendTimeout = _context2.sent;
            _context2.next = 21;
            return (0, _effects.race)({
              send: (0, _effects.all)({
                echoBack: echoBackCall,
                postActivity: (0, _observeOnce['default'])(directLine.postActivity(activity))
              }),
              timeout: (0, _effects.call)(function() {
                return (0, _sleep['default'])(sendTimeout).then(function() {
                  return Promise.reject(new Error('timeout'));
                });
              })
            });

          case 21:
            _ref5 = _context2.sent;
            echoBack = _ref5.send.echoBack;
            _context2.next = 25;
            return (0, _effects.put)({
              type: _postActivity.POST_ACTIVITY_FULFILLED,
              meta: meta,
              payload: {
                activity: echoBack
              }
            });

          case 25:
            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2['catch'](14);
            _context2.next = 31;
            return (0, _effects.put)({
              type: _postActivity.POST_ACTIVITY_REJECTED,
              error: true,
              meta: meta,
              payload: _context2.t0
            });

          case 31:
            _context2.prev = 31;
            _context2.next = 34;
            return (0, _effects.cancelled)();

          case 34:
            if (!_context2.sent) {
              _context2.next = 37;
              break;
            }

            _context2.next = 37;
            return (0, _effects.put)({
              type: _postActivity.POST_ACTIVITY_REJECTED,
              error: true,
              meta: meta,
              payload: new Error('cancelled')
            });

          case 37:
            return _context2.finish(31);

          case 38:
          case 'end':
            return _context2.stop();
        }
      }
    },
    _marked,
    null,
    [[14, 27, 31, 38]]
  );
}

function postActivitySaga() {
  return _regenerator['default'].wrap(function postActivitySaga$(_context5) {
    while (1) {
      switch ((_context5.prev = _context5.next)) {
        case 0:
          _context5.next = 2;
          return (0, _whileConnected['default'])(
            /*#__PURE__*/
            _regenerator['default'].mark(function postActivityWhileConnected(_ref6) {
              var directLine, userID, username, numActivitiesPosted;
              return _regenerator['default'].wrap(function postActivityWhileConnected$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      (directLine = _ref6.directLine), (userID = _ref6.userID), (username = _ref6.username);
                      numActivitiesPosted = 0;
                      _context4.next = 4;
                      return (0, _effects.takeEvery)(
                        _postActivity.POST_ACTIVITY,
                        /*#__PURE__*/
                        _regenerator['default'].mark(function postActivityWrapper(action) {
                          return _regenerator['default'].wrap(function postActivityWrapper$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  return _context3.delegateYield(
                                    postActivity(directLine, userID, username, numActivitiesPosted++, action),
                                    't0',
                                    1
                                  );

                                case 1:
                                case 'end':
                                  return _context3.stop();
                              }
                            }
                          }, postActivityWrapper);
                        })
                      );

                    case 4:
                    case 'end':
                      return _context4.stop();
                  }
                }
              }, postActivityWhileConnected);
            })
          );

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9wb3N0QWN0aXZpdHlTYWdhLmpzIl0sIm5hbWVzIjpbInBvc3RBY3Rpdml0eSIsInBvc3RBY3Rpdml0eVNhZ2EiLCJnZXRUaW1lc3RhbXAiLCJjbG9ja1NrZXdBZGp1c3RtZW50IiwiRGF0ZSIsIm5vdyIsInRvSVNPU3RyaW5nIiwiZGlyZWN0TGluZSIsInVzZXJJRCIsInVzZXJuYW1lIiwibnVtQWN0aXZpdGllc1Bvc3RlZCIsIm1ldGhvZCIsIm1ldGEiLCJhY3Rpdml0eSIsInBheWxvYWQiLCJjbG9ja1NrZXdBZGp1c3RtZW50U2VsZWN0b3IiLCJsb2NhbGUiLCJsYW5ndWFnZVNlbGVjdG9yIiwiYXR0YWNobWVudHMiLCJjaGFubmVsRGF0YSIsImNsaWVudEFjdGl2aXR5SUQiLCJtYXAiLCJjb250ZW50VHlwZSIsImNvbnRlbnRVcmwiLCJuYW1lIiwiY2xpZW50VGltZXN0YW1wIiwiY2hhbm5lbElkIiwiZnJvbSIsImlkIiwicm9sZSIsInRpbWVzdGFtcCIsImVudGl0aWVzIiwicmVxdWlyZXNCb3RTdGF0ZSIsInN1cHBvcnRzTGlzdGVuaW5nIiwic3VwcG9ydHNUdHMiLCJ0eXBlIiwiUE9TVF9BQ1RJVklUWV9QRU5ESU5HIiwiZWNob0JhY2tDYWxsIiwiSU5DT01JTkdfQUNUSVZJVFkiLCJzZW5kVGltZW91dFNlbGVjdG9yIiwic2VuZFRpbWVvdXQiLCJzZW5kIiwiZWNob0JhY2siLCJ0aW1lb3V0IiwidGhlbiIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsIlBPU1RfQUNUSVZJVFlfRlVMRklMTEVEIiwiUE9TVF9BQ1RJVklUWV9SRUpFQ1RFRCIsImVycm9yIiwicG9zdEFjdGl2aXR5V2hpbGVDb25uZWN0ZWQiLCJQT1NUX0FDVElWSVRZIiwicG9zdEFjdGl2aXR5V3JhcHBlciIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7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O0FBQUE7QUFHbkIsMkJBQU0sd0JBQVUwQywyQkFBVjtBQUFBO0FBQUEsaURBQXlCLFNBQVVDLG1CQUFWLENBQThCQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCLDZEQUFPdEQsWUFBWSxDQUFDTyxVQUFELEVBQWFDLE1BQWIsRUFBcUJDLFFBQXJCLEVBQStCQyxtQkFBbUIsRUFBbEQsRUFBc0Q0QyxNQUF0RCxDQUFuQjs7QUFENkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFVRCxtQkFBVjtBQUFBLHFCQUF6QixFQUFOOztBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVUYsMEJBQVY7QUFBQSxXQUFmLEVBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIGNhbmNlbGxlZCwgcHV0LCByYWNlLCBzZWxlY3QsIHRha2UsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBvYnNlcnZlT25jZSBmcm9tICcuL2VmZmVjdHMvb2JzZXJ2ZU9uY2UnO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmltcG9ydCBjbG9ja1NrZXdBZGp1c3RtZW50U2VsZWN0b3IgZnJvbSAnLi4vc2VsZWN0b3JzL2Nsb2NrU2tld0FkanVzdG1lbnQnO1xuaW1wb3J0IGNvbWJpbmVTZWxlY3RvcnMgZnJvbSAnLi4vc2VsZWN0b3JzL2NvbWJpbmVTZWxlY3RvcnMnO1xuaW1wb3J0IGxhbmd1YWdlU2VsZWN0b3IgZnJvbSAnLi4vc2VsZWN0b3JzL2xhbmd1YWdlJztcbmltcG9ydCBzZW5kVGltZW91dFNlbGVjdG9yIGZyb20gJy4uL3NlbGVjdG9ycy9zZW5kVGltZW91dCc7XG5cbmltcG9ydCBkZWxldGVLZXkgZnJvbSAnLi4vdXRpbHMvZGVsZXRlS2V5JztcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XG5pbXBvcnQgdW5pcXVlSUQgZnJvbSAnLi4vdXRpbHMvdW5pcXVlSUQnO1xuXG5pbXBvcnQge1xuICBQT1NUX0FDVElWSVRZLFxuICBQT1NUX0FDVElWSVRZX0ZVTEZJTExFRCxcbiAgUE9TVF9BQ1RJVklUWV9QRU5ESU5HLFxuICBQT1NUX0FDVElWSVRZX1JFSkVDVEVEXG59IGZyb20gJy4uL2FjdGlvbnMvcG9zdEFjdGl2aXR5JztcblxuaW1wb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAoY2xvY2tTa2V3QWRqdXN0bWVudCA9IDApIHtcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUubm93KCkgKyBjbG9ja1NrZXdBZGp1c3RtZW50KS50b0lTT1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiogcG9zdEFjdGl2aXR5KGRpcmVjdExpbmUsIHVzZXJJRCwgdXNlcm5hbWUsIG51bUFjdGl2aXRpZXNQb3N0ZWQsIHsgbWV0YTogeyBtZXRob2QgfSwgcGF5bG9hZDogeyBhY3Rpdml0eSB9IH0pIHtcbiAgY29uc3QgeyBjbG9ja1NrZXdBZGp1c3RtZW50LCBsb2NhbGUgfSA9IHlpZWxkIHNlbGVjdChcbiAgICBjb21iaW5lU2VsZWN0b3JzKHsgY2xvY2tTa2V3QWRqdXN0bWVudDogY2xvY2tTa2V3QWRqdXN0bWVudFNlbGVjdG9yLCBsb2NhbGU6IGxhbmd1YWdlU2VsZWN0b3IgfSlcbiAgKTtcbiAgY29uc3QgeyBhdHRhY2htZW50cywgY2hhbm5lbERhdGE6IHsgY2xpZW50QWN0aXZpdHlJRCA9IHVuaXF1ZUlEKCkgfSA9IHt9IH0gPSBhY3Rpdml0eTtcblxuICBhY3Rpdml0eSA9IHtcbiAgICAuLi5kZWxldGVLZXkoYWN0aXZpdHksICdpZCcpLFxuICAgIGF0dGFjaG1lbnRzOlxuICAgICAgYXR0YWNobWVudHMgJiZcbiAgICAgIGF0dGFjaG1lbnRzLm1hcCgoeyBjb250ZW50VHlwZSwgY29udGVudFVybCwgbmFtZSB9KSA9PiAoe1xuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgY29udGVudFVybCxcbiAgICAgICAgbmFtZVxuICAgICAgfSkpLFxuICAgIGNoYW5uZWxEYXRhOiB7XG4gICAgICBjbGllbnRBY3Rpdml0eUlELFxuICAgICAgLy8gVGhpcyBpcyB1bnNrZXdlZCBsb2NhbCB0aW1lc3RhbXAgZm9yIGVzdGltYXRpbmcgY2xvY2sgc2tldy5cbiAgICAgIGNsaWVudFRpbWVzdGFtcDogZ2V0VGltZXN0YW1wKCksXG4gICAgICAuLi5kZWxldGVLZXkoYWN0aXZpdHkuY2hhbm5lbERhdGEsICdzdGF0ZScpXG4gICAgfSxcbiAgICBjaGFubmVsSWQ6ICd3ZWJjaGF0JyxcbiAgICBmcm9tOiB7XG4gICAgICBpZDogdXNlcklELFxuICAgICAgbmFtZTogdXNlcm5hbWUsXG4gICAgICByb2xlOiAndXNlcidcbiAgICB9LFxuICAgIGxvY2FsZSxcbiAgICAvLyBUaGlzIHRpbWVzdGFtcCB3aWxsIGJlIHJlcGxhY2VkIGJ5IERpcmVjdCBMaW5lIENoYW5uZWwgaW4gZWNob2JhY2suXG4gICAgLy8gV2UgYXJlIHRlbXBvcmFyaWx5IGFkZGluZyB0aGlzIHRpbWVzdGFtcCBmb3Igc29ydGluZy5cbiAgICB0aW1lc3RhbXA6IGdldFRpbWVzdGFtcChjbG9ja1NrZXdBZGp1c3RtZW50KVxuICB9O1xuXG4gIGlmICghbnVtQWN0aXZpdGllc1Bvc3RlZCkge1xuICAgIGFjdGl2aXR5LmVudGl0aWVzID0gW1xuICAgICAgLi4uKGFjdGl2aXR5LmVudGl0aWVzIHx8IFtdKSxcbiAgICAgIHtcbiAgICAgICAgLy8gVE9ETzogW1A0XSBDdXJyZW50bHkgaW4gdjMsIHdlIHNlbmQgdGhlIGNhcGFiaWxpdGllcyBhbHRob3VnaCB0aGUgY2xpZW50IG1pZ2h0IG5vdCBhY3R1YWxseSBoYXZlIHRoZW1cbiAgICAgICAgLy8gICAgICAgV2UgbmVlZCB0byB1bmRlcnN0YW5kIHdoeSB3ZSBuZWVkIHRvIHNlbmQgdGhlc2UsIGFuZCBvbmx5IHNlbmQgY2FwYWJpbGl0aWVzIHRoZSBjbGllbnQgaGF2ZVxuICAgICAgICByZXF1aXJlc0JvdFN0YXRlOiB0cnVlLFxuICAgICAgICBzdXBwb3J0c0xpc3RlbmluZzogdHJ1ZSxcbiAgICAgICAgc3VwcG9ydHNUdHM6IHRydWUsXG4gICAgICAgIHR5cGU6ICdDbGllbnRDYXBhYmlsaXRpZXMnXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0IG1ldGEgPSB7IGNsaWVudEFjdGl2aXR5SUQsIG1ldGhvZCB9O1xuXG4gIHlpZWxkIHB1dCh7IHR5cGU6IFBPU1RfQUNUSVZJVFlfUEVORElORywgbWV0YSwgcGF5bG9hZDogeyBhY3Rpdml0eSB9IH0pO1xuXG4gIHRyeSB7XG4gICAgLy8gUXVpcmtzOiBXZSBtaWdodCByZWNlaXZlIElOQ09NSU5HX0FDVElWSVRZIGJlZm9yZSB0aGUgcG9zdEFjdGl2aXR5IGNhbGwgY29tcGxldGVkXG4gICAgLy8gICAgICAgICBTbywgd2Ugc2V0dXAgZXhwZWN0YXRpb24gZmlyc3QsIHRoZW4gcG9zdEFjdGl2aXR5IGFmdGVyd2FyZFxuXG4gICAgY29uc3QgZWNob0JhY2tDYWxsID0gY2FsbChmdW5jdGlvbiooKSB7XG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBwYXlsb2FkOiB7IGFjdGl2aXR5IH1cbiAgICAgICAgfSA9IHlpZWxkIHRha2UoSU5DT01JTkdfQUNUSVZJVFkpO1xuICAgICAgICBjb25zdCB7IGNoYW5uZWxEYXRhID0ge30sIGlkIH0gPSBhY3Rpdml0eTtcblxuICAgICAgICBpZiAoY2hhbm5lbERhdGEuY2xpZW50QWN0aXZpdHlJRCA9PT0gY2xpZW50QWN0aXZpdHlJRCAmJiBpZCkge1xuICAgICAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGltZW91dCBjb3VsZCBiZSBkdWUgdG8gZWl0aGVyOlxuICAgIC8vIC0gUG9zdCBhY3Rpdml0eSBjYWxsIG1heSB0YWtlIHRvbyBsb25nIHRpbWUgdG8gY29tcGxldGVcbiAgICAvLyAgIC0gRGlyZWN0IExpbmUgc2VydmljZSBvbmx5IHJlc3BvbmQgb24gSFRUUCBhZnRlciBib3QgcmVzcG9uZCB0byBEaXJlY3QgTGluZVxuICAgIC8vIC0gQWN0aXZpdHkgbWF5IHRha2UgdG9vIGxvbmcgdGltZSB0byBlY2hvIGJhY2tcblxuICAgIGNvbnN0IHNlbmRUaW1lb3V0ID0geWllbGQgc2VsZWN0KHNlbmRUaW1lb3V0U2VsZWN0b3IpO1xuXG4gICAgY29uc3Qge1xuICAgICAgc2VuZDogeyBlY2hvQmFjayB9XG4gICAgfSA9IHlpZWxkIHJhY2Uoe1xuICAgICAgc2VuZDogYWxsKHtcbiAgICAgICAgZWNob0JhY2s6IGVjaG9CYWNrQ2FsbCxcbiAgICAgICAgcG9zdEFjdGl2aXR5OiBvYnNlcnZlT25jZShkaXJlY3RMaW5lLnBvc3RBY3Rpdml0eShhY3Rpdml0eSkpXG4gICAgICB9KSxcbiAgICAgIHRpbWVvdXQ6IGNhbGwoKCkgPT4gc2xlZXAoc2VuZFRpbWVvdXQpLnRoZW4oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCd0aW1lb3V0JykpKSlcbiAgICB9KTtcblxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFBPU1RfQUNUSVZJVFlfRlVMRklMTEVELCBtZXRhLCBwYXlsb2FkOiB7IGFjdGl2aXR5OiBlY2hvQmFjayB9IH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBQT1NUX0FDVElWSVRZX1JFSkVDVEVELCBlcnJvcjogdHJ1ZSwgbWV0YSwgcGF5bG9hZDogZXJyIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGlmICh5aWVsZCBjYW5jZWxsZWQoKSkge1xuICAgICAgeWllbGQgcHV0KHsgdHlwZTogUE9TVF9BQ1RJVklUWV9SRUpFQ1RFRCwgZXJyb3I6IHRydWUsIG1ldGEsIHBheWxvYWQ6IG5ldyBFcnJvcignY2FuY2VsbGVkJykgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0QWN0aXZpdHlTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChmdW5jdGlvbiogcG9zdEFjdGl2aXR5V2hpbGVDb25uZWN0ZWQoeyBkaXJlY3RMaW5lLCB1c2VySUQsIHVzZXJuYW1lIH0pIHtcbiAgICBsZXQgbnVtQWN0aXZpdGllc1Bvc3RlZCA9IDA7XG5cbiAgICB5aWVsZCB0YWtlRXZlcnkoUE9TVF9BQ1RJVklUWSwgZnVuY3Rpb24qIHBvc3RBY3Rpdml0eVdyYXBwZXIoYWN0aW9uKSB7XG4gICAgICB5aWVsZCogcG9zdEFjdGl2aXR5KGRpcmVjdExpbmUsIHVzZXJJRCwgdXNlcm5hbWUsIG51bUFjdGl2aXRpZXNQb3N0ZWQrKywgYWN0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=
