'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = _callee;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _botframeworkDirectlinejs = require('botframework-directlinejs');

var _jsonwebtoken = require('jsonwebtoken');

var _connect = require('../actions/connect');

var _createPromiseQueue = _interopRequireDefault(require('../createPromiseQueue'));

var _forkPut = _interopRequireDefault(require('./effects/forkPut'));

var _uniqueID = _interopRequireDefault(require('../utils/uniqueID'));

var _updateConnectionStatus = _interopRequireWildcard(require('../actions/updateConnectionStatus'));

var _disconnect = require('../actions/disconnect');

var _reconnect = require('../actions/reconnect');

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(observeAndPutConnectionStatusUpdate),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(connectSaga),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(reconnectSaga),
  _marked4 =
    /*#__PURE__*/
    _regenerator['default'].mark(runAsyncEffect),
  _marked5 =
    /*#__PURE__*/
    _regenerator['default'].mark(takeDisconnectAsError),
  _marked6 =
    /*#__PURE__*/
    _regenerator['default'].mark(_callee);

var CONNECTING = _botframeworkDirectlinejs.ConnectionStatus.Connecting,
  ONLINE = _botframeworkDirectlinejs.ConnectionStatus.Online,
  UNINITIALIZED = _botframeworkDirectlinejs.ConnectionStatus.Uninitialized;

function randomUserID() {
  return 'r_'.concat((0, _uniqueID['default'])().substr(0, 10));
}

function observeAndPutConnectionStatusUpdate(directLine) {
  var connectionStatusQueue, connectionStatusSubscription, connectionStatus;
  return _regenerator['default'].wrap(
    function observeAndPutConnectionStatusUpdate$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            connectionStatusQueue = (0, _createPromiseQueue['default'])();
            connectionStatusSubscription = directLine.connectionStatus$.subscribe({
              next: connectionStatusQueue.push
            });
            _context.prev = 2;

          case 3:
            _context.next = 5;
            return (0, _effects.call)(connectionStatusQueue.shift);

          case 5:
            connectionStatus = _context.sent;
            _context.next = 8;
            return (0, _effects.put)((0, _updateConnectionStatus['default'])(connectionStatus));

          case 8:
            _context.next = 3;
            break;

          case 10:
            _context.prev = 10;
            connectionStatusSubscription.unsubscribe();
            return _context.finish(10);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    },
    _marked,
    null,
    [[2, , 10, 13]]
  );
}

function rectifyUserID(directLine, userIDFromAction) {
  var token = directLine.token;

  var _ref = (0, _jsonwebtoken.decode)(token) || {},
    userIDFromToken = _ref.user;

  if (userIDFromToken) {
    if (userIDFromAction && userIDFromAction !== userIDFromToken) {
      console.warn(
        'Web Chat: user ID is both specified in the Direct Line token and passed in, will use the user ID from the token.'
      );
    }

    return userIDFromToken;
  } else if (userIDFromAction) {
    if (typeof userIDFromAction !== 'string') {
      console.warn('Web Chat: user ID must be a string.');
      return randomUserID();
    } else if (/^dl_/.test(userIDFromAction)) {
      console.warn(
        'Web Chat: user ID prefixed with "dl_" is reserved and must be embedded into the Direct Line token to prevent forgery.'
      );
      return randomUserID();
    }
  } else {
    return randomUserID();
  }

  return userIDFromAction;
} // We could make this a Promise instead of saga (function generator) to make the code cleaner, if:
// 1. We found a way to cancel Promise
// 2. subscribe() are shared amongst all subscriptions, e.g. turn Observable into events

function connectSaga(directLine) {
  var activitySubscription, unsubscribeActivity, _ref2, connectionStatus;

  return _regenerator['default'].wrap(
    function connectSaga$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            // DirectLineJS starts the connection only after the first subscriber for activity$, not connectionStatus$
            activitySubscription = directLine.activity$.subscribe({
              next: function next() {
                return 0;
              }
            });
            unsubscribeActivity = activitySubscription.unsubscribe.bind(activitySubscription);
            _context2.prev = 2;

          case 3:
            _context2.next = 5;
            return (0, _effects.take)(_updateConnectionStatus.UPDATE_CONNECTION_STATUS);

          case 5:
            _ref2 = _context2.sent;
            connectionStatus = _ref2.payload.connectionStatus;

            if (!(connectionStatus === ONLINE)) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt('return', function() {
              unsubscribeActivity();
              directLine.end();
            });

          case 11:
            if (!(connectionStatus !== UNINITIALIZED && connectionStatus !== CONNECTING)) {
              _context2.next = 13;
              break;
            }

            throw new Error('Failed to connect, DirectLineJS returned '.concat(connectionStatus, '.'));

          case 13:
            _context2.next = 3;
            break;

          case 15:
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2['catch'](2);
            // We will unsubscribe if we failed to connect or got cancelled only.
            // We should not unsubscribe in happy case, because DirectLineJS should relying on the subscription to connect/disconnect.
            unsubscribeActivity();
            throw _context2.t0;

          case 21:
            _context2.prev = 21;
            _context2.next = 24;
            return (0, _effects.cancelled)();

          case 24:
            if (!_context2.sent) {
              _context2.next = 26;
              break;
            }

            unsubscribeActivity();

          case 26:
            return _context2.finish(21);

          case 27:
          case 'end':
            return _context2.stop();
        }
      }
    },
    _marked2,
    null,
    [[2, 17, 21, 27]]
  );
}

function reconnectSaga() {
  var _ref3, connectionStatus;

  return _regenerator['default'].wrap(function reconnectSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _effects.take)(_updateConnectionStatus.UPDATE_CONNECTION_STATUS);

        case 2:
          _ref3 = _context3.sent;
          connectionStatus = _ref3.payload.connectionStatus;

          if (!(connectionStatus === ONLINE)) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt('break', 12);

        case 8:
          if (!(connectionStatus !== CONNECTING)) {
            _context3.next = 10;
            break;
          }

          throw new Error('Failed to reconnect. DirectLineJS returned '.concat(connectionStatus, '.'));

        case 10:
          _context3.next = 0;
          break;

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
} // This is similar to behavior of redux-promise-middleware, but using saga instead of Promise.
// We guarantee PENDING -> FULFILLING -> FULFILLED, or PENDING -> REJECTED. This will help us simplify logic in other part of code.
// Note that after the saga is cancelled, subsequent call to put() will be ignored silently.

function runAsyncEffect(_ref4, callEffectFactory) {
  var type, meta, payload, result;
  return _regenerator['default'].wrap(
    function runAsyncEffect$(_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            (type = _ref4.type), (meta = _ref4.meta), (payload = _ref4.payload);
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _forkPut['default'])({
              type: ''.concat(type, '_PENDING'),
              meta: meta,
              payload: payload
            });

          case 4:
            _context4.next = 6;
            return callEffectFactory();

          case 6:
            result = _context4.sent;
            _context4.next = 9;
            return (0, _forkPut['default'])(
              {
                type: ''.concat(type, '_FULFILLING'),
                meta: meta,
                payload: payload
              },
              {
                type: ''.concat(type, '_FULFILLED'),
                meta: meta,
                payload: payload
              }
            );

          case 9:
            return _context4.abrupt('return', result);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4['catch'](1);
            _context4.next = 16;
            return (0, _forkPut['default'])({
              type: ''.concat(type, '_REJECTED'),
              error: true,
              meta: meta,
              payload: _context4.t0
            });

          case 16:
            throw _context4.t0;

          case 17:
          case 'end':
            return _context4.stop();
        }
      }
    },
    _marked4,
    null,
    [[1, 12]]
  );
}

function takeDisconnectAsError() {
  return _regenerator['default'].wrap(function takeDisconnectAsError$(_context5) {
    while (1) {
      switch ((_context5.prev = _context5.next)) {
        case 0:
          _context5.next = 2;
          return (0, _effects.take)(_disconnect.DISCONNECT);

        case 2:
          throw new Error('disconnected');

        case 3:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5);
}

function runAsyncEffectUntilDisconnect(baseAction, callEffectFactory) {
  // We cannot use saga cancel() here, because cancelling saga will prohibit us from sending *_REJECTED.
  // Without REJECTED, it impacts our assumptions around PENDING/FULFILLED/REJECTED.
  return runAsyncEffect(
    baseAction,
    /*#__PURE__*/
    _regenerator['default'].mark(function runUntilDisconnect() {
      var _ref5, result;

      return _regenerator['default'].wrap(function runUntilDisconnect$(_context6) {
        while (1) {
          switch ((_context6.prev = _context6.next)) {
            case 0:
              _context6.next = 2;
              return (0, _effects.race)({
                _: takeDisconnectAsError(),
                result: callEffectFactory()
              });

            case 2:
              _ref5 = _context6.sent;
              result = _ref5.result;
              return _context6.abrupt('return', result);

            case 5:
            case 'end':
              return _context6.stop();
          }
        }
      }, runUntilDisconnect);
    })
  );
}

function _callee() {
  var _loop;

  return _regenerator['default'].wrap(function _callee$(_context8) {
    while (1) {
      switch ((_context8.prev = _context8.next)) {
        case 0:
          _loop =
            /*#__PURE__*/
            _regenerator['default'].mark(function _loop() {
              var _ref6,
                _ref6$payload,
                directLine,
                userIDFromAction,
                username,
                updateConnectionStatusTask,
                disconnectMeta,
                meta,
                endDirectLine,
                _ref7,
                _ref7$updateConnectio,
                _ref7$updateConnectio2,
                connectionStatus;

              return _regenerator['default'].wrap(
                function _loop$(_context7) {
                  while (1) {
                    switch ((_context7.prev = _context7.next)) {
                      case 0:
                        _context7.next = 2;
                        return (0, _effects.take)(_connect.CONNECT);

                      case 2:
                        _ref6 = _context7.sent;
                        _ref6$payload = _ref6.payload;
                        directLine = _ref6$payload.directLine;
                        userIDFromAction = _ref6$payload.userID;
                        username = _ref6$payload.username;
                        _context7.next = 9;
                        return (0, _effects.fork)(observeAndPutConnectionStatusUpdate, directLine);

                      case 9:
                        updateConnectionStatusTask = _context7.sent;
                        disconnectMeta = void 0; // TODO: [P2] Checks if this attached subtask will get killed if the parent task is complete (peacefully), errored out, or cancelled.

                        meta = {
                          userID: rectifyUserID(directLine, userIDFromAction),
                          username: username
                        }; // We will dispatch CONNECT_PENDING, wait for connect completed, errored, or cancelled (thru disconnect).
                        // Then dispatch CONNECT_FULFILLED/CONNECT_REJECTED as needed.

                        _context7.prev = 12;
                        _context7.next = 15;
                        return runAsyncEffectUntilDisconnect(
                          {
                            type: _connect.CONNECT,
                            meta: meta,
                            payload: {
                              directLine: directLine
                            }
                          },
                          function() {
                            return (0, _effects.call)(connectSaga, directLine);
                          }
                        );

                      case 15:
                        endDirectLine = _context7.sent;
                        _context7.prev = 16;

                      case 17:
                        _context7.next = 19;
                        return (0, _effects.race)({
                          _: (0, _effects.take)(_disconnect.DISCONNECT),
                          updateConnectionStatusAction: (0, _effects.take)(
                            _updateConnectionStatus.UPDATE_CONNECTION_STATUS
                          )
                        });

                      case 19:
                        _ref7 = _context7.sent;
                        _ref7$updateConnectio = _ref7.updateConnectionStatusAction;
                        _ref7$updateConnectio = _ref7$updateConnectio === void 0 ? {} : _ref7$updateConnectio;
                        _ref7$updateConnectio2 = _ref7$updateConnectio.payload;
                        _ref7$updateConnectio2 = _ref7$updateConnectio2 === void 0 ? {} : _ref7$updateConnectio2;
                        connectionStatus = _ref7$updateConnectio2.connectionStatus; // If it is not disconnect action, connectionStatus will not be undefined.

                        if (!(connectionStatus === CONNECTING)) {
                          _context7.next = 30;
                          break;
                        }

                        _context7.next = 28;
                        return runAsyncEffectUntilDisconnect(
                          {
                            type: _reconnect.RECONNECT,
                            meta: meta,
                            payload: {
                              directLine: directLine
                            }
                          },
                          function() {
                            return (0, _effects.call)(reconnectSaga);
                          }
                        );

                      case 28:
                        _context7.next = 36;
                        break;

                      case 30:
                        if (!(connectionStatus !== ONLINE)) {
                          _context7.next = 36;
                          break;
                        }

                        if (!(typeof connectionStatus !== 'undefined')) {
                          _context7.next = 35;
                          break;
                        }

                        throw new Error('Connection status changed to '.concat(connectionStatus));

                      case 35:
                        return _context7.abrupt('break', 38);

                      case 36:
                        _context7.next = 17;
                        break;

                      case 38:
                        _context7.prev = 38;
                        endDirectLine();
                        return _context7.finish(38);

                      case 41:
                        _context7.next = 46;
                        break;

                      case 43:
                        _context7.prev = 43;
                        _context7.t0 = _context7['catch'](12);
                        disconnectMeta = {
                          error: _context7.t0
                        };

                      case 46:
                        _context7.prev = 46;
                        _context7.next = 49;
                        return (0, _effects.cancel)(updateConnectionStatusTask);

                      case 49:
                        _context7.next = 51;
                        return (0, _forkPut['default'])(
                          {
                            type: _disconnect.DISCONNECT_PENDING,
                            meta: disconnectMeta,
                            payload: {
                              directLine: directLine
                            }
                          },
                          {
                            type: _disconnect.DISCONNECT_FULFILLED,
                            meta: disconnectMeta,
                            payload: {
                              directLine: directLine
                            }
                          }
                        );

                      case 51:
                        return _context7.finish(46);

                      case 52:
                      case 'end':
                        return _context7.stop();
                    }
                  }
                },
                _loop,
                null,
                [[12, 43, 46, 52], [16, , 38, 41]]
              );
            });

        case 1:
          return _context8.delegateYield(_loop(), 't0', 2);

        case 2:
          _context8.next = 1;
          break;

        case 4:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked6);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jb25uZWN0U2FnYS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZlQW5kUHV0Q29ubmVjdGlvblN0YXR1c1VwZGF0ZSIsImNvbm5lY3RTYWdhIiwicmVjb25uZWN0U2FnYSIsInJ1bkFzeW5jRWZmZWN0IiwidGFrZURpc2Nvbm5lY3RBc0Vycm9yIiwiQ09OTkVDVElORyIsIkNvbm5lY3Rpb25TdGF0dXMiLCJDb25uZWN0aW5nIiwiT05MSU5FIiwiT25saW5lIiwiVU5JTklUSUFMSVpFRCIsIlVuaW5pdGlhbGl6ZWQiLCJyYW5kb21Vc2VySUQiLCJzdWJzdHIiLCJkaXJlY3RMaW5lIiwiY29ubmVjdGlvblN0YXR1c1F1ZXVlIiwiY29ubmVjdGlvblN0YXR1c1N1YnNjcmlwdGlvbiIsImNvbm5lY3Rpb25TdGF0dXMkIiwic3Vic2NyaWJlIiwibmV4dCIsInB1c2giLCJzaGlmdCIsImNvbm5lY3Rpb25TdGF0dXMiLCJ1bnN1YnNjcmliZSIsInJlY3RpZnlVc2VySUQiLCJ1c2VySURGcm9tQWN0aW9uIiwidG9rZW4iLCJ1c2VySURGcm9tVG9rZW4iLCJ1c2VyIiwiY29uc29sZSIsIndhcm4iLCJ0ZXN0IiwiYWN0aXZpdHlTdWJzY3JpcHRpb24iLCJhY3Rpdml0eSQiLCJ1bnN1YnNjcmliZUFjdGl2aXR5IiwiYmluZCIsIlVQREFURV9DT05ORUNUSU9OX1NUQVRVUyIsInBheWxvYWQiLCJlbmQiLCJFcnJvciIsImNhbGxFZmZlY3RGYWN0b3J5IiwidHlwZSIsIm1ldGEiLCJyZXN1bHQiLCJlcnJvciIsIkRJU0NPTk5FQ1QiLCJydW5Bc3luY0VmZmVjdFVudGlsRGlzY29ubmVjdCIsImJhc2VBY3Rpb24iLCJydW5VbnRpbERpc2Nvbm5lY3QiLCJfIiwiQ09OTkVDVCIsInVzZXJJRCIsInVzZXJuYW1lIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1c1Rhc2siLCJkaXNjb25uZWN0TWV0YSIsImVuZERpcmVjdExpbmUiLCJ1cGRhdGVDb25uZWN0aW9uU3RhdHVzQWN0aW9uIiwiUkVDT05ORUNUIiwiRElTQ09OTkVDVF9QRU5ESU5HIiwiRElTQ09OTkVDVF9GVUxGSUxMRUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs2QkFRVUEsbUM7Ozs2QkFpREFDLFc7Ozs2QkFxQ0FDLGE7Ozs2QkFpQkFDLGM7Ozs2QkFnQkFDLHFCOzs7OztJQTdIVUMsVSxHQUE2REMsMEMsQ0FBekVDLFU7SUFBZ0NDLE0sR0FBeUNGLDBDLENBQWpERyxNO0lBQStCQyxhLEdBQWtCSiwwQyxDQUFqQ0ssYTs7QUFFaEQsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QixxQkFBWSw0QkFBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQixFQUFyQixDQUFaO0FBQ0Q7O0FBRUQsU0FBVWIsbUNBQVYsQ0FBOENjLFVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxVQUFBQSxxQkFEUixHQUNnQyxxQ0FEaEM7QUFFUUMsVUFBQUEsNEJBRlIsR0FFdUNGLFVBQVUsQ0FBQ0csaUJBQVgsQ0FBNkJDLFNBQTdCLENBQXVDO0FBQUVDLFlBQUFBLElBQUksRUFBRUoscUJBQXFCLENBQUNLO0FBQTlCLFdBQXZDLENBRnZDO0FBQUE7O0FBQUE7QUFBQTtBQU0rQixpQkFBTSxtQkFBS0wscUJBQXFCLENBQUNNLEtBQTNCLENBQU47O0FBTi9CO0FBTVlDLFVBQUFBLGdCQU5aO0FBQUE7QUFRTSxpQkFBTSxrQkFBSSx3Q0FBdUJBLGdCQUF2QixDQUFKLENBQU47O0FBUk47QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFXSU4sVUFBQUEsNEJBQTRCLENBQUNPLFdBQTdCO0FBWEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBU0MsYUFBVCxDQUF1QlYsVUFBdkIsRUFBbUNXLGdCQUFuQyxFQUFxRDtBQUFBLE1BQzNDQyxLQUQyQyxHQUNqQ1osVUFEaUMs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RUFqREw7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXlEUGlDLG9CQUFBQSxhQUFhO0FBekROOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0RFRELG9CQUFBQSxjQUFjLEdBQUc7QUFBRVYsc0JBQUFBLEtBQUs7QUFBUCxxQkFBakI7O0FBNURTO0FBQUE7QUFBQTtBQThEVCwyQkFBTSxxQkFBT1MsMEJBQVAsQ0FBTjs7QUE5RFM7QUFBQTtBQWtFVCwyQkFBTSx5QkFDSjtBQUFFWixzQkFBQUEsSUFBSSxFQUFFaUIsOEJBQVI7QUFBNEJoQixzQkFBQUEsSUFBSSxFQUFFWSxjQUFsQztBQUFrRGpCLHNCQUFBQSxPQUFPLEVBQUU7QUFBRXZCLHdCQUFBQSxVQUFVLEVBQVZBO0FBQUY7QUFBM0QscUJBREksRUFFSjtBQUFFMkIsc0JBQUFBLElBQUksRUFBRWtCLGdDQUFSO0FBQThCakIsc0JBQUFBLElBQUksRUFBRVksY0FBcEM7QUFBb0RqQixzQkFBQUEsT0FBTyxFQUFFO0FBQUV2Qix3QkFBQUEsVUFBVSxFQUFWQTtBQUFGO0FBQTdELHFCQUZJLENBQU47O0FBbEVTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMCwgMTBdIH1dICovXG5cbmltcG9ydCB7IGNhbGwsIGNhbmNlbCwgY2FuY2VsbGVkLCBmb3JrLCBwdXQsIHJhY2UsIHRha2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uU3RhdHVzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLWRpcmVjdGxpbmVqcyc7XG5pbXBvcnQgeyBkZWNvZGUgfSBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5pbXBvcnQgeyBDT05ORUNUIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25uZWN0JztcbmltcG9ydCBjcmVhdGVQcm9taXNlUXVldWUgZnJvbSAnLi4vY3JlYXRlUHJvbWlzZVF1ZXVlJztcbmltcG9ydCBmb3JrUHV0IGZyb20gJy4vZWZmZWN0cy9mb3JrUHV0JztcbmltcG9ydCB1bmlxdWVJRCBmcm9tICcuLi91dGlscy91bmlxdWVJRCc7XG5pbXBvcnQgdXBkYXRlQ29ubmVjdGlvblN0YXR1cywgeyBVUERBVEVfQ09OTkVDVElPTl9TVEFUVVMgfSBmcm9tICcuLi9hY3Rpb25zL3VwZGF0ZUNvbm5lY3Rpb25TdGF0dXMnO1xuXG5pbXBvcnQgeyBESVNDT05ORUNULCBESVNDT05ORUNUX1BFTkRJTkcsIERJU0NPTk5FQ1RfRlVMRklMTEVEIH0gZnJvbSAnLi4vYWN0aW9ucy9kaXNjb25uZWN0JztcblxuaW1wb3J0IHsgUkVDT05ORUNUIH0gZnJvbSAnLi4vYWN0aW9ucy9yZWNvbm5lY3QnO1xuXG5jb25zdCB7IENvbm5lY3Rpbmc6IENPTk5FQ1RJTkcsIE9ubGluZTogT05MSU5FLCBVbmluaXRpYWxpemVkOiBVTklOSVRJQUxJWkVEIH0gPSBDb25uZWN0aW9uU3RhdHVzO1xuXG5mdW5jdGlvbiByYW5kb21Vc2VySUQoKSB7XG4gIHJldHVybiBgcl8ke3VuaXF1ZUlEKCkuc3Vic3RyKDAsIDEwKX1gO1xufVxuXG5mdW5jdGlvbiogb2JzZXJ2ZUFuZFB1dENvbm5lY3Rpb25TdGF0dXNVcGRhdGUoZGlyZWN0TGluZSkge1xuICBjb25zdCBjb25uZWN0aW9uU3RhdHVzUXVldWUgPSBjcmVhdGVQcm9taXNlUXVldWUoKTtcbiAgY29uc3QgY29ubmVjdGlvblN0YXR1c1N1YnNjcmlwdGlvbiA9IGRpcmVjdExpbmUuY29ubmVjdGlvblN0YXR1cyQuc3Vic2NyaWJlKHsgbmV4dDogY29ubmVjdGlvblN0YXR1c1F1ZXVlLnB1c2ggfSk7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uU3RhdHVzID0geWllbGQgY2FsbChjb25uZWN0aW9uU3RhdHVzUXVldWUuc2hpZnQpO1xuXG4gICAgICB5aWVsZCBwdXQodXBkYXRlQ29ubmVjdGlvblN0YXR1cyhjb25uZWN0aW9uU3RhdHVzKSk7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGNvbm5lY3Rpb25TdGF0dXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN0aWZ5VXNlcklEKGRpcmVjdExpbmUsIHVzZXJJREZyb21BY3Rpb24pIHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gZGlyZWN0TGluZTtcbiAgY29uc3QgeyB1c2VyOiB1c2VySURGcm9tVG9rZW4gfSA9IGRlY29kZSh0b2tlbikgfHwge307XG5cbiAgaWYgKHVzZXJJREZyb21Ub2tlbikge1xuICAgIGlmICh1c2VySURGcm9tQWN0aW9uICYmIHVzZXJJREZyb21BY3Rpb24gIT09IHVzZXJJREZyb21Ub2tlbikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnV2ViIENoYXQ6IHVzZXIgSUQgaXMgYm90aCBzcGVjaWZpZWQgaW4gdGhlIERpcmVjdCBMaW5lIHRva2VuIGFuZCBwYXNzZWQgaW4sIHdpbGwgdXNlIHRoZSB1c2VyIElEIGZyb20gdGhlIHRva2VuLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzZXJJREZyb21Ub2tlbjtcbiAgfSBlbHNlIGlmICh1c2VySURGcm9tQWN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB1c2VySURGcm9tQWN0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS53YXJuKCdXZWIgQ2hhdDogdXNlciBJRCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuXG4gICAgICByZXR1cm4gcmFuZG9tVXNlcklEKCk7XG4gICAgfSBlbHNlIGlmICgvXmRsXy91LnRlc3QodXNlcklERnJvbUFjdGlvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1dlYiBDaGF0OiB1c2VyIElEIHByZWZpeGVkIHdpdGggXCJkbF9cIiBpcyByZXNlcnZlZCBhbmQgbXVzdCBiZSBlbWJlZGRlZCBpbnRvIHRoZSBEaXJlY3QgTGluZSB0b2tlbiB0byBwcmV2ZW50IGZvcmdlcnkuJ1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHJhbmRvbVVzZXJJRCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuZG9tVXNlcklEKCk7XG4gIH1cblxuICByZXR1cm4gdXNlcklERnJvbUFjdGlvbjtcbn1cblxuLy8gV2UgY291bGQgbWFrZSB0aGlzIGEgUHJvbWlzZSBpbnN0ZWFkIG9mIHNhZ2EgKGZ1bmN0aW9uIGdlbmVyYXRvcikgdG8gbWFrZSB0aGUgY29kZSBjbGVhbmVyLCBpZjpcbi8vIDEuIFdlIGZvdW5kIGEgd2F5IHRvIGNhbmNlbCBQcm9taXNlXG4vLyAyLiBzdWJzY3JpYmUoKSBhcmUgc2hhcmVkIGFtb25nc3QgYWxsIHN1YnNjcmlwdGlvbnMsIGUuZy4gdHVybiBPYnNlcnZhYmxlIGludG8gZXZlbnRzXG5mdW5jdGlvbiogY29ubmVjdFNhZ2EoZGlyZWN0TGluZSkge1xuICAvLyBEaXJlY3RMaW5lSlMgc3RhcnRzIHRoZSBjb25uZWN0aW9uIG9ubHkgYWZ0ZXIgdGhlIGZpcnN0IHN1YnNjcmliZXIgZm9yIGFjdGl2aXR5JCwgbm90IGNvbm5lY3Rpb25TdGF0dXMkXG4gIGNvbnN0IGFjdGl2aXR5U3Vic2NyaXB0aW9uID0gZGlyZWN0TGluZS5hY3Rpdml0eSQuc3Vic2NyaWJlKHsgbmV4dDogKCkgPT4gMCB9KTtcbiAgY29uc3QgdW5zdWJzY3JpYmVBY3Rpdml0eSA9IGFjdGl2aXR5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlLmJpbmQoYWN0aXZpdHlTdWJzY3JpcHRpb24pO1xuXG4gIHRyeSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3Qge1xuICAgICAgICBwYXlsb2FkOiB7IGNvbm5lY3Rpb25TdGF0dXMgfVxuICAgICAgfSA9IHlpZWxkIHRha2UoVVBEQVRFX0NPTk5FQ1RJT05fU1RBVFVTKTtcblxuICAgICAgaWYgKGNvbm5lY3Rpb25TdGF0dXMgPT09IE9OTElORSkge1xuICAgICAgICAvLyBUT0RPOiBbUDJdIERpcmVjdExpbmVKUyBzaG91bGQga2lsbCB0aGUgY29ubmVjdGlvbiB3aGVuIHdlIHVuc3Vic2NyaWJlXG4gICAgICAgIC8vICAgICAgIEJ1dCBjdXJyZW50bHkgaW4gdjMsIERpcmVjdExpbmVKUyBkb2VzIG5vdCBoYXZlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAgICAvLyAgICAgICBUaHVzLCB3ZSBuZWVkIHRvIGNhbGwgXCJlbmQoKVwiIGV4cGxpY2l0bHlcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlQWN0aXZpdHkoKTtcbiAgICAgICAgICBkaXJlY3RMaW5lLmVuZCgpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChjb25uZWN0aW9uU3RhdHVzICE9PSBVTklOSVRJQUxJWkVEICYmIGNvbm5lY3Rpb25TdGF0dXMgIT09IENPTk5FQ1RJTkcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCwgRGlyZWN0TGluZUpTIHJldHVybmVkICR7Y29ubmVjdGlvblN0YXR1c30uYCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBXZSB3aWxsIHVuc3Vic2NyaWJlIGlmIHdlIGZhaWxlZCB0byBjb25uZWN0IG9yIGdvdCBjYW5jZWxsZWQgb25seS5cbiAgICAvLyBXZSBzaG91bGQgbm90IHVuc3Vic2NyaWJlIGluIGhhcHB5IGNhc2UsIGJlY2F1c2UgRGlyZWN0TGluZUpTIHNob3VsZCByZWx5aW5nIG9uIHRoZSBzdWJzY3JpcHRpb24gdG8gY29ubmVjdC9kaXNjb25uZWN0LlxuICAgIHVuc3Vic2NyaWJlQWN0aXZpdHkoKTtcblxuICAgIHRocm93IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoeWllbGQgY2FuY2VsbGVkKCkpIHtcbiAgICAgIHVuc3Vic2NyaWJlQWN0aXZpdHkoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24qIHJlY29ubmVjdFNhZ2EoKSB7XG4gIGZvciAoOzspIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXlsb2FkOiB7IGNvbm5lY3Rpb25TdGF0dXMgfVxuICAgIH0gPSB5aWVsZCB0YWtlKFVQREFURV9DT05ORUNUSU9OX1NUQVRVUyk7XG5cbiAgICBpZiAoY29ubmVjdGlvblN0YXR1cyA9PT0gT05MSU5FKSB7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKGNvbm5lY3Rpb25TdGF0dXMgIT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHJlY29ubmVjdC4gRGlyZWN0TGluZUpTIHJldHVybmVkICR7Y29ubmVjdGlvblN0YXR1c30uYCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgaXMgc2ltaWxhciB0byBiZWhhdmlvciBvZiByZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUsIGJ1dCB1c2luZyBzYWdhIGluc3RlYWQgb2YgUHJvbWlzZS5cbi8vIFdlIGd1YXJhbnRlZSBQRU5ESU5HIC0+IEZVTEZJTExJTkcgLT4gRlVMRklMTEVELCBvciBQRU5ESU5HIC0+IFJFSkVDVEVELiBUaGlzIHdpbGwgaGVscCB1cyBzaW1wbGlmeSBsb2dpYyBpbiBvdGhlciBwYXJ0IG9mIGNvZGUuXG4vLyBOb3RlIHRoYXQgYWZ0ZXIgdGhlIHNhZ2EgaXMgY2FuY2VsbGVkLCBzdWJzZXF1ZW50IGNhbGwgdG8gcHV0KCkgd2lsbCBiZSBpZ25vcmVkIHNpbGVudGx5LlxuZnVuY3Rpb24qIHJ1bkFzeW5jRWZmZWN0KHsgdHlwZSwgbWV0YSwgcGF5bG9hZCB9LCBjYWxsRWZmZWN0RmFjdG9yeSkge1xuICB0cnkge1xuICAgIHlpZWxkIGZvcmtQdXQoeyB0eXBlOiBgJHt0eXBlfV9QRU5ESU5HYCwgbWV0YSwgcGF5bG9hZCB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGxFZmZlY3RGYWN0b3J5KCk7XG5cbiAgICB5aWVsZCBmb3JrUHV0KHsgdHlwZTogYCR7dHlwZX1fRlVMRklMTElOR2AsIG1ldGEsIHBheWxvYWQgfSwgeyB0eXBlOiBgJHt0eXBlfV9GVUxGSUxMRURgLCBtZXRhLCBwYXlsb2FkIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAocGF5bG9hZCkge1xuICAgIHlpZWxkIGZvcmtQdXQoeyB0eXBlOiBgJHt0eXBlfV9SRUpFQ1RFRGAsIGVycm9yOiB0cnVlLCBtZXRhLCBwYXlsb2FkIH0pO1xuXG4gICAgdGhyb3cgcGF5bG9hZDtcbiAgfVxufVxuXG5mdW5jdGlvbiogdGFrZURpc2Nvbm5lY3RBc0Vycm9yKCkge1xuICB5aWVsZCB0YWtlKERJU0NPTk5FQ1QpO1xuXG4gIHRocm93IG5ldyBFcnJvcignZGlzY29ubmVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIHJ1bkFzeW5jRWZmZWN0VW50aWxEaXNjb25uZWN0KGJhc2VBY3Rpb24sIGNhbGxFZmZlY3RGYWN0b3J5KSB7XG4gIC8vIFdlIGNhbm5vdCB1c2Ugc2FnYSBjYW5jZWwoKSBoZXJlLCBiZWNhdXNlIGNhbmNlbGxpbmcgc2FnYSB3aWxsIHByb2hpYml0IHVzIGZyb20gc2VuZGluZyAqX1JFSkVDVEVELlxuICAvLyBXaXRob3V0IFJFSkVDVEVELCBpdCBpbXBhY3RzIG91ciBhc3N1bXB0aW9ucyBhcm91bmQgUEVORElORy9GVUxGSUxMRUQvUkVKRUNURUQuXG4gIHJldHVybiBydW5Bc3luY0VmZmVjdChiYXNlQWN0aW9uLCBmdW5jdGlvbiogcnVuVW50aWxEaXNjb25uZWN0KCkge1xuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSB5aWVsZCByYWNlKHtcbiAgICAgIF86IHRha2VEaXNjb25uZWN0QXNFcnJvcigpLFxuICAgICAgcmVzdWx0OiBjYWxsRWZmZWN0RmFjdG9yeSgpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICBmb3IgKDs7KSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF5bG9hZDogeyBkaXJlY3RMaW5lLCB1c2VySUQ6IHVzZXJJREZyb21BY3Rpb24sIHVzZXJuYW1lIH1cbiAgICB9ID0geWllbGQgdGFrZShDT05ORUNUKTtcblxuICAgIGNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXNUYXNrID0geWllbGQgZm9yayhvYnNlcnZlQW5kUHV0Q29ubmVjdGlvblN0YXR1c1VwZGF0ZSwgZGlyZWN0TGluZSk7XG4gICAgbGV0IGRpc2Nvbm5lY3RNZXRhO1xuXG4gICAgLy8gVE9ETzogW1AyXSBDaGVja3MgaWYgdGhpcyBhdHRhY2hlZCBzdWJ0YXNrIHdpbGwgZ2V0IGtpbGxlZCBpZiB0aGUgcGFyZW50IHRhc2sgaXMgY29tcGxldGUgKHBlYWNlZnVsbHkpLCBlcnJvcmVkIG91dCwgb3IgY2FuY2VsbGVkLlxuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICB1c2VySUQ6IHJlY3RpZnlVc2VySUQoZGlyZWN0TGluZSwgdXNlcklERnJvbUFjdGlvbiksXG4gICAgICB1c2VybmFtZVxuICAgIH07XG5cbiAgICAvLyBXZSB3aWxsIGRpc3BhdGNoIENPTk5FQ1RfUEVORElORywgd2FpdCBmb3IgY29ubmVjdCBjb21wbGV0ZWQsIGVycm9yZWQsIG9yIGNhbmNlbGxlZCAodGhydSBkaXNjb25uZWN0KS5cbiAgICAvLyBUaGVuIGRpc3BhdGNoIENPTk5FQ1RfRlVMRklMTEVEL0NPTk5FQ1RfUkVKRUNURUQgYXMgbmVlZGVkLlxuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbmREaXJlY3RMaW5lID0geWllbGQgcnVuQXN5bmNFZmZlY3RVbnRpbERpc2Nvbm5lY3QoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBDT05ORUNULFxuICAgICAgICAgIG1ldGEsXG4gICAgICAgICAgcGF5bG9hZDogeyBkaXJlY3RMaW5lIH1cbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gY2FsbChjb25uZWN0U2FnYSwgZGlyZWN0TGluZSlcbiAgICAgICk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAvLyBXZSBhcmUgd2FpdGluZyBmb3IgY29ubmVjdGlvbiBzdGF0dXMgY2hhbmdlIG9yIGRpc2Nvbm5lY3QgYWN0aW9uLlxuICAgICAgICAgIGNvbnN0IHsgdXBkYXRlQ29ubmVjdGlvblN0YXR1c0FjdGlvbjogeyBwYXlsb2FkOiB7IGNvbm5lY3Rpb25TdGF0dXMgfSA9IHt9IH0gPSB7fSB9ID0geWllbGQgcmFjZSh7XG4gICAgICAgICAgICBfOiB0YWtlKERJU0NPTk5FQ1QpLFxuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdGlvblN0YXR1c0FjdGlvbjogdGFrZShVUERBVEVfQ09OTkVDVElPTl9TVEFUVVMpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBJZiBpdCBpcyBub3QgZGlzY29ubmVjdCBhY3Rpb24sIGNvbm5lY3Rpb25TdGF0dXMgd2lsbCBub3QgYmUgdW5kZWZpbmVkLlxuICAgICAgICAgIGlmIChjb25uZWN0aW9uU3RhdHVzID09PSBDT05ORUNUSU5HKSB7XG4gICAgICAgICAgICAvLyBJZiBEaXJlY3RMaW5lSlMgY2hhbmdlZCBjb25uZWN0aW9uU3RhdHVzIHRvIENPTk5FQ1RJTkcsIHdlIHdpbGwgdHJlYXQgaXQgYXMgcmVjb25uZWN0IHN0YXR1cy5cbiAgICAgICAgICAgIHlpZWxkIHJ1bkFzeW5jRWZmZWN0VW50aWxEaXNjb25uZWN0KFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVDT05ORUNULFxuICAgICAgICAgICAgICAgIG1ldGEsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBkaXJlY3RMaW5lIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKCkgPT4gY2FsbChyZWNvbm5lY3RTYWdhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbm5lY3Rpb25TdGF0dXMgIT09IE9OTElORSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25uZWN0aW9uU3RhdHVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGtpbGwgdGhlIGNvbm5lY3Rpb24gYmVjYXVzZSBEaXJlY3RMaW5lSlMgd2FudCB0byBjbG9zZSBpdC5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb25uZWN0aW9uIHN0YXR1cyBjaGFuZ2VkIHRvICR7Y29ubmVjdGlvblN0YXR1c31gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFNvbWVvbmUgZGlzcGF0Y2hlZCBkaXNjb25uZWN0IGFjdGlvbi5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBlbmREaXJlY3RMaW5lKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc2Nvbm5lY3RNZXRhID0geyBlcnJvciB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB5aWVsZCBjYW5jZWwodXBkYXRlQ29ubmVjdGlvblN0YXR1c1Rhc2spO1xuXG4gICAgICAvLyBFdmVuIGlmIHRoZSBjb25uZWN0aW9uIGlzIGludGVycnVwdGVkLCB3ZSB3aWxsIHN0aWxsIGVtaXQgRElTQ09OTkVDVF9QRU5ESU5HLlxuICAgICAgLy8gVGhpcyB3aWxsIG1ha2VzIGhhbmRsaW5nIGxvZ2ljIGVhc2llci4gSWYgQ09OTkVDVF9GVUxGSUxMRUQsIHdlIGd1YXJhbnRlZSBESVNDT05ORUNUX1BFTkRJTkcuXG4gICAgICB5aWVsZCBmb3JrUHV0KFxuICAgICAgICB7IHR5cGU6IERJU0NPTk5FQ1RfUEVORElORywgbWV0YTogZGlzY29ubmVjdE1ldGEsIHBheWxvYWQ6IHsgZGlyZWN0TGluZSB9IH0sXG4gICAgICAgIHsgdHlwZTogRElTQ09OTkVDVF9GVUxGSUxMRUQsIG1ldGE6IGRpc2Nvbm5lY3RNZXRhLCBwYXlsb2FkOiB7IGRpcmVjdExpbmUgfSB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
