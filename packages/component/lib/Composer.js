'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _reactScrollToBottom = require('react-scroll-to-bottom');

var _reactRedux = require('react-redux');

var _glamor = require('glamor');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _useReferenceGrammarID = _interopRequireDefault(require('./hooks/useReferenceGrammarID'));

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _concatMiddleware = _interopRequireDefault(require('./Middleware/concatMiddleware'));

var _createCoreMiddleware = _interopRequireDefault(require('./Middleware/CardAction/createCoreMiddleware'));

var _createStyleSet = _interopRequireDefault(require('./Styles/createStyleSet'));

var _defaultSelectVoice = _interopRequireDefault(require('./defaultSelectVoice'));

var _Dictation = _interopRequireDefault(require('./Dictation'));

var _mapMap = _interopRequireDefault(require('./Utils/mapMap'));

var _observableToPromise = _interopRequireDefault(require('./Utils/observableToPromise'));

var _WebChatReduxContext = _interopRequireWildcard(require('./WebChatReduxContext'));

var _WebChatUIContext = _interopRequireDefault(require('./WebChatUIContext'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// List of Redux actions factory we are hoisting as Web Chat functions
var DISPATCHERS = {
  clearSuggestedActions: _botframeworkWebchatCore.clearSuggestedActions,
  emitTypingIndicator: _botframeworkWebchatCore.emitTypingIndicator,
  markActivity: _botframeworkWebchatCore.markActivity,
  postActivity: _botframeworkWebchatCore.postActivity,
  sendEvent: _botframeworkWebchatCore.sendEvent,
  sendFiles: _botframeworkWebchatCore.sendFiles,
  sendMessage: _botframeworkWebchatCore.sendMessage,
  sendMessageBack: _botframeworkWebchatCore.sendMessageBack,
  sendPostBack: _botframeworkWebchatCore.sendPostBack,
  setDictateInterims: _botframeworkWebchatCore.setDictateInterims,
  setDictateState: _botframeworkWebchatCore.setDictateState,
  setSendBox: _botframeworkWebchatCore.setSendBox,
  setSendTimeout: _botframeworkWebchatCore.setSendTimeout,
  startDictate: _botframeworkWebchatCore.startDictate,
  startSpeakingActivity: _botframeworkWebchatCore.startSpeakingActivity,
  stopDictate: _botframeworkWebchatCore.stopDictate,
  stopSpeakingActivity: _botframeworkWebchatCore.stopSpeakingActivity,
  submitSendBox: _botframeworkWebchatCore.submitSendBox
};

function styleSetToClassNames(styleSet) {
  return (0, _mapMap.default)(styleSet, function(style, key) {
    return key === 'options' ? style : (0, _glamor.css)(style);
  });
}

function createCardActionContext(_ref) {
  var cardActionMiddleware = _ref.cardActionMiddleware,
    directLine = _ref.directLine,
    dispatch = _ref.dispatch;
  var runMiddleware = (0, _concatMiddleware.default)(cardActionMiddleware, (0, _createCoreMiddleware.default)())({
    dispatch: dispatch
  });
  return {
    onCardAction: function onCardAction(cardAction) {
      return runMiddleware(function(_ref2) {
        var type = _ref2.cardAction.type;
        throw new Error('Web Chat: received unknown card action "'.concat(type, '"'));
      })({
        cardAction: cardAction,
        getSignInUrl:
          cardAction.type === 'signin'
            ? function() {
                var value = cardAction.value;

                if (directLine.getSessionId) {
                  // TODO: [P3] We should change this one to async/await.
                  //       This is the first place in this project to use async.
                  //       Thus, we need to add @babel/plugin-transform-runtime and @babel/runtime.
                  return (0, _observableToPromise.default)(directLine.getSessionId()).then(function(sessionId) {
                    return ''.concat(value).concat(encodeURIComponent('&code_challenge='.concat(sessionId)));
                  });
                }

                return value;
              }
            : null
      });
    }
  };
}

function createFocusSendBoxContext(_ref3) {
  var sendBoxRef = _ref3.sendBoxRef;
  return {
    focusSendBox: function focusSendBox() {
      var _ref4 = sendBoxRef || {},
        current = _ref4.current;

      current && current.focus();
    }
  };
} // TODO: [P3] Take this deprecation code out when releasing on or after 2019 December 11

function patchPropsForAvatarInitials(_ref5) {
  var botAvatarInitials = _ref5.botAvatarInitials,
    userAvatarInitials = _ref5.userAvatarInitials,
    props = _objectWithoutProperties(_ref5, ['botAvatarInitials', 'userAvatarInitials']);

  // This code will take out "botAvatarInitials" and "userAvatarInitials" from props
  var styleOptions = props.styleOptions;

  if (botAvatarInitials) {
    styleOptions = _objectSpread({}, styleOptions, {
      botAvatarInitials: botAvatarInitials
    });
    console.warn(
      'Web Chat: "botAvatarInitials" is deprecated. Please use "styleOptions.botAvatarInitials" instead. "botAvatarInitials" will be removed on or after December 11 2019 .'
    );
  }

  if (userAvatarInitials) {
    styleOptions = _objectSpread({}, styleOptions, {
      userAvatarInitials: userAvatarInitials
    });
    console.warn(
      'Web Chat: "botAvatarInitials" is deprecated. Please use "styleOptions.botAvatarInitials" instead. "botAvatarInitials" will be removed on or after December 11 2019 .'
    );
  }

  return _objectSpread({}, props, {
    styleOptions: styleOptions
  });
}

var Composer = function Composer(_ref6) {
  var activityRenderer = _ref6.activityRenderer,
    attachmentRenderer = _ref6.attachmentRenderer,
    botAvatarInitials = _ref6.botAvatarInitials,
    cardActionMiddleware = _ref6.cardActionMiddleware,
    children = _ref6.children,
    directLine = _ref6.directLine,
    disabled = _ref6.disabled,
    grammars = _ref6.grammars,
    groupTimestamp = _ref6.groupTimestamp,
    locale = _ref6.locale,
    renderMarkdown = _ref6.renderMarkdown,
    scrollToEnd = _ref6.scrollToEnd,
    selectVoice = _ref6.selectVoice,
    sendBoxRef = _ref6.sendBoxRef,
    sendTimeout = _ref6.sendTimeout,
    sendTyping = _ref6.sendTyping,
    sendTypingIndicator = _ref6.sendTypingIndicator,
    styleOptions = _ref6.styleOptions,
    styleSet = _ref6.styleSet,
    userAvatarInitials = _ref6.userAvatarInitials,
    userID = _ref6.userID,
    username = _ref6.username,
    webSpeechPonyfillFactory = _ref6.webSpeechPonyfillFactory;
  var dispatch = (0, _WebChatReduxContext.useDispatch)();

  var _useReferenceGrammarI = (0, _useReferenceGrammarID.default)(),
    _useReferenceGrammarI2 = _slicedToArray(_useReferenceGrammarI, 1),
    referenceGrammarID = _useReferenceGrammarI2[0];

  var patchedGrammars = (0, _react.useMemo)(
    function() {
      return grammars || [];
    },
    [grammars]
  );
  var patchedSendTypingIndicator = (0, _react.useMemo)(
    function() {
      if (typeof sendTyping === 'undefined') {
        return sendTypingIndicator;
      } // TODO: [P3] Take this deprecation code out when releasing on or after January 13 2020

      console.warn(
        'Web Chat: "sendTyping" has been renamed to "sendTypingIndicator". Please use "sendTypingIndicator" instead. This deprecation migration will be removed on or after January 13 2020.'
      );
      return sendTyping;
    },
    [sendTyping, sendTypingIndicator]
  );
  var patchedStyleOptions = (0, _react.useMemo)(
    function() {
      return patchPropsForAvatarInitials({
        botAvatarInitials: botAvatarInitials,
        styleOptions: styleOptions,
        userAvatarInitials: userAvatarInitials
      });
    },
    [botAvatarInitials, styleOptions, userAvatarInitials]
  );
  (0, _react.useEffect)(
    function() {
      dispatch((0, _botframeworkWebchatCore.setLanguage)(locale));
    },
    [dispatch, locale]
  );
  (0, _react.useEffect)(
    function() {
      dispatch((0, _botframeworkWebchatCore.setSendTimeout)(sendTimeout));
    },
    [dispatch, sendTimeout]
  );
  (0, _react.useEffect)(
    function() {
      dispatch((0, _botframeworkWebchatCore.setSendTypingIndicator)(!!patchedSendTypingIndicator));
    },
    [dispatch, patchedSendTypingIndicator]
  );
  (0, _react.useEffect)(
    function() {
      dispatch(
        (0, _botframeworkWebchatCore.connect)({
          directLine: directLine,
          userID: userID,
          username: username
        })
      );
      return function() {
        // TODO: [P3] disconnect() is an async call (pending -> fulfilled), we need to wait, or change it to reconnect()
        dispatch((0, _botframeworkWebchatCore.disconnect)());
      };
    },
    [dispatch, directLine, userID, username]
  );
  var cardActionContext = (0, _react.useMemo)(
    function() {
      return createCardActionContext({
        cardActionMiddleware: cardActionMiddleware,
        directLine: directLine,
        dispatch: dispatch
      });
    },
    [cardActionMiddleware, directLine, dispatch]
  );
  var patchedSelectVoice = (0, _react.useCallback)(
    selectVoice ||
      _defaultSelectVoice.default.bind(null, {
        language: locale
      }),
    [selectVoice]
  );
  var focusSendBoxContext = (0, _react.useMemo)(
    function() {
      return createFocusSendBoxContext({
        sendBoxRef: sendBoxRef
      });
    },
    [sendBoxRef]
  );
  var patchedStyleSet = (0, _react.useMemo)(
    function() {
      return styleSetToClassNames(styleSet || (0, _createStyleSet.default)(patchedStyleOptions));
    },
    [patchedStyleOptions, styleSet]
  );
  var hoistedDispatchers = (0, _react.useMemo)(
    function() {
      return (0, _mapMap.default)(DISPATCHERS, function(dispatcher) {
        return function() {
          return dispatch(dispatcher.apply(void 0, arguments));
        };
      });
    },
    [dispatch]
  );
  var webSpeechPonyfill = (0, _react.useMemo)(
    function() {
      return (
        webSpeechPonyfillFactory &&
        webSpeechPonyfillFactory({
          referenceGrammarID: referenceGrammarID
        })
      );
    },
    [referenceGrammarID, webSpeechPonyfillFactory]
  ); // This is a heavy function, and it is expected to be only called when there is a need to recreate business logic, e.g.
  // - User ID changed, causing all send* functions to be updated
  // - send
  // TODO: [P3] We should think about if we allow the user to change onSendBoxValueChanged/sendBoxValue, e.g.
  // 1. Turns text into UPPERCASE
  // 2. Filter out profanity
  // TODO: [P4] Revisit all members of context
  //       This context should consist of members that are not in the Redux store
  //       i.e. members that are not interested in other types of UIs

  var context = (0, _react.useMemo)(
    function() {
      return _objectSpread({}, cardActionContext, {}, focusSendBoxContext, {}, hoistedDispatchers, {
        activityRenderer: activityRenderer,
        attachmentRenderer: attachmentRenderer,
        directLine: directLine,
        disabled: disabled,
        grammars: patchedGrammars,
        groupTimestamp: groupTimestamp,
        renderMarkdown: renderMarkdown,
        scrollToEnd: scrollToEnd,
        selectVoice: patchedSelectVoice,
        sendBoxRef: sendBoxRef,
        sendTimeout: sendTimeout,
        sendTypingIndicator: patchedSendTypingIndicator,
        styleOptions: patchedStyleOptions,
        styleSet: patchedStyleSet,
        userID: userID,
        username: username,
        webSpeechPonyfill: webSpeechPonyfill
      });
    },
    [
      activityRenderer,
      attachmentRenderer,
      cardActionContext,
      directLine,
      disabled,
      focusSendBoxContext,
      groupTimestamp,
      hoistedDispatchers,
      patchedGrammars,
      patchedSelectVoice,
      patchedSendTypingIndicator,
      patchedStyleOptions,
      patchedStyleSet,
      renderMarkdown,
      scrollToEnd,
      sendBoxRef,
      sendTimeout,
      userID,
      username,
      webSpeechPonyfill
    ]
  );
  return _react.default.createElement(
    _WebChatUIContext.default.Provider,
    {
      value: context
    },
    typeof children === 'function' ? children(context) : children,
    _react.default.createElement(_Dictation.default, null)
  );
}; // We will create a Redux store if it was not passed in

var ComposeWithStore = function ComposeWithStore(_ref7) {
  var store = _ref7.store,
    props = _objectWithoutProperties(_ref7, ['store']);

  var memoizedStore = (0, _react.useMemo)(
    function() {
      return store || (0, _botframeworkWebchatCore.createStore)();
    },
    [store]
  );
  return _react.default.createElement(
    _reactRedux.Provider,
    {
      context: _WebChatReduxContext.default,
      store: memoizedStore
    },
    _react.default.createElement(
      _reactScrollToBottom.Composer,
      null,
      _react.default.createElement(_reactScrollToBottom.FunctionContext.Consumer, null, function(_ref8) {
        var scrollToEnd = _ref8.scrollToEnd;
        return _react.default.createElement(
          Composer,
          _extends(
            {
              scrollToEnd: scrollToEnd
            },
            props
          )
        );
      })
    )
  );
};

ComposeWithStore.defaultProps = {
  store: undefined
};
ComposeWithStore.propTypes = {
  store: _propTypes.default.any
};
var _default = ComposeWithStore; // TODO: [P3] We should consider moving some data from Redux store to props
//       Although we use `connectToWebChat` to hide the details of accessor of Redux store,
//       we should clean up the responsibility between Context and Redux store
//       We should decide which data is needed for React but not in other environment such as CLI/VSCode

exports.default = _default;
Composer.defaultProps = {
  activityRenderer: undefined,
  attachmentRenderer: undefined,
  botAvatarInitials: undefined,
  cardActionMiddleware: undefined,
  children: undefined,
  disabled: false,
  grammars: [],
  groupTimestamp: true,
  locale: window.navigator.language || 'en-US',
  renderMarkdown: function renderMarkdown(text) {
    return text;
  },
  selectVoice: undefined,
  sendBoxRef: undefined,
  sendTimeout: 20000,
  sendTyping: undefined,
  sendTypingIndicator: false,
  styleOptions: {},
  styleSet: undefined,
  userAvatarInitials: undefined,
  userID: '',
  username: '',
  webSpeechPonyfillFactory: undefined
};
Composer.propTypes = {
  activityRenderer: _propTypes.default.func,
  attachmentRenderer: _propTypes.default.func,
  botAvatarInitials: _propTypes.default.string,
  cardActionMiddleware: _propTypes.default.func,
  children: _propTypes.default.any,
  directLine: _propTypes.default.shape({
    activity$: _propTypes.default.shape({
      subscribe: _propTypes.default.func.isRequired
    }).isRequired,
    connectionStatus$: _propTypes.default.shape({
      subscribe: _propTypes.default.func.isRequired
    }).isRequired,
    end: _propTypes.default.func,
    getSessionId: _propTypes.default.func.isRequired,
    postActivity: _propTypes.default.func.isRequired,
    referenceGrammarID: _propTypes.default.string,
    token: _propTypes.default.string
  }).isRequired,
  disabled: _propTypes.default.bool,
  grammars: _propTypes.default.arrayOf(_propTypes.default.string),
  groupTimestamp: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  locale: _propTypes.default.string,
  renderMarkdown: _propTypes.default.func,
  scrollToEnd: _propTypes.default.func.isRequired,
  selectVoice: _propTypes.default.func,
  sendBoxRef: _propTypes.default.shape({
    current: _propTypes.default.any
  }),
  sendTimeout: _propTypes.default.number,
  sendTyping: _propTypes.default.bool,
  sendTypingIndicator: _propTypes.default.bool,
  styleOptions: _propTypes.default.any,
  styleSet: _propTypes.default.any,
  userAvatarInitials: _propTypes.default.string,
  userID: _propTypes.default.string,
  username: _propTypes.default.string,
  webSpeechPonyfillFactory: _propTypes.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb3Nlci5qcyJdLCJuYW1lcyI6WyJESVNQQVRDSEVSUyIsImNsZWFyU3VnZ2VzdGVkQWN0aW9ucyIsImVtaXRUeXBpbmdJbmRpY2F0b3IiLCJtYXJrQWN0aXZpdHkiLCJwb3N0QWN0aXZpdHkiLCJzZW5kRXZlbnQiLCJzZW5kRmlsZXMiLCJzZW5kTWVzc2FnZSIsInNlbmRNZXNzYWdlQmFjayIsInNlbmRQb3N0QmFjayIsInNldERpY3RhdGVJbnRlcmltcyIsInNldERpY3RhdGVTdGF0ZSIsInNldFNlbmRCb3giLCJzZXRTZW5kVGltZW91dCIsInN0YXJ0RGljdGF0ZSIsInN0YXJ0U3BlYWtpbmdBY3Rpdml0eSIsInN0b3BEaWN0YXRlIiwic3RvcFNwZWFraW5nQWN0aXZpdHkiLCJzdWJtaXRTZW5kQm94Iiwic3R5bGVTZXRUb0NsYXNzTmFtZXMiLCJzdHlsZVNldCIsInN0eWxlIiwia2V5IiwiY3JlYXRlQ2FyZEFjdGlvbkNvbnRleHQiLCJjYXJkQWN0aW9uTWlkZGxld2FyZSIsImRpcmVjdExpbmUiLCJkaXNwYXRjaCIsInJ1bk1pZGRsZXdhcmUiLCJvbkNhcmRBY3Rpb24iLCJjYXJkQWN0aW9uIiwidHlwZSIsIkVycm9yIiwiZ2V0U2lnbkluVXJsIiwidmFsdWUiLCJnZXRTZXNzaW9uSWQiLCJ0aGVuIiwic2Vzc2lvbklkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY3JlYXRlRm9jdXNTZW5kQm94Q29udGV4dCIsInNlbmRCb3hSZWYiLCJmb2N1c1NlbmRCb3giLCJjdXJyZW50IiwiZm9jdXMiLCJwYXRjaFByb3BzRm9yQXZhdGFySW5pdGlhbHMiLCJib3RBdmF0YXJJbml0aWFscyIsInVzZXJBdmF0YXJJbml0aWFscyIsInByb3BzIiwic3R5bGVPcHRpb25zIiwiY29uc29sZSIsIndhcm4iLCJDb21wb3NlciIsImFjdGl2aXR5UmVuZGVyZXIiLCJhdHRhY2htZW50UmVuZGVyZXIiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiZ3JhbW1hcnMiLCJncm91cFRpbWVzdGFtcCIsImxvY2FsZSIsInJlbmRlck1hcmtkb3duIiwic2Nyb2xsVG9FbmQiLCJzZWxlY3RWb2ljZSIsInNlbmRUaW1lb3V0Iiwic2VuZFR5cGluZyIsInNlbmRUeXBpbmdJbmRpY2F0b3IiLCJ1c2VySUQiLCJ1c2VybmFtZSIsIndlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSIsInJlZmVyZW5jZUdyYW1tYXJJRCIsInBhdGNoZWRHcmFtbWFycyIsInBhdGNoZWRTZW5kVHlwaW5nSW5kaWNhdG9yIiwicGF0Y2hlZFN0eWxlT3B0aW9ucyIsImNhcmRBY3Rpb25Db250ZXh0IiwicGF0Y2hlZFNlbGVjdFZvaWNlIiwiZGVmYXVsdFNlbGVjdFZvaWNlIiwiYmluZCIsImxhbmd1YWdlIiwiZm9jdXNTZW5kQm94Q29udGV4dCIsInBhdGNoZWRTdHlsZVNldCIsImhvaXN0ZWREaXNwYXRjaGVycyIsImRpc3BhdGNoZXIiLCJ3ZWJTcGVlY2hQb255ZmlsbCIsImNvbnRleHQiLCJDb21wb3NlV2l0aFN0b3JlIiwic3RvcmUiLCJtZW1vaXplZFN0b3JlIiwiV2ViQ2hhdFJlZHV4Q29udGV4dCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInRleHQiLCJmdW5jIiwic3RyaW5nIiwic2hhcGUiLCJhY3Rpdml0eSQiLCJzdWJzY3JpYmUiLCJpc1JlcXVpcmVkIiwiY29ubmVjdGlvblN0YXR1cyQiLCJlbmQiLCJ0b2tlbiIsImJvb2wiLCJhcnJheU9mIiwib25lT2ZUeXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBMEJBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxXQUFXLEdBQUc7QUFD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VUMsR0FoQ0w7QUFpQ25CdEUsRUFBQUEsUUFBUSxFQUFFcUUsbUJBQVVDLEdBakNEO0FBa0NuQjdDLEVBQUFBLGtCQUFrQixFQUFFNEMsbUJBQVVNLE1BbENYO0FBbUNuQi9CLEVBQUFBLE1BQU0sRUFBRXlCLG1CQUFVTSxNQW5DQztBQW9DbkI5QixFQUFBQSxRQUFRLEVBQUV3QixtQkFBVU0sTUFwQ0Q7QUFxQ25CN0IsRUFBQUEsd0JBQXdCLEVBQUV1QixtQkFBVUs7QUFyQ2pCLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9zZXIgYXMgU2Nyb2xsVG9Cb3R0b21Db21wb3NlcixcbiAgRnVuY3Rpb25Db250ZXh0IGFzIFNjcm9sbFRvQm90dG9tRnVuY3Rpb25Db250ZXh0XG59IGZyb20gJ3JlYWN0LXNjcm9sbC10by1ib3R0b20nO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUmVmZXJlbmNlR3JhbW1hcklEIGZyb20gJy4vaG9va3MvdXNlUmVmZXJlbmNlR3JhbW1hcklEJztcblxuaW1wb3J0IHtcbiAgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zLFxuICBjb25uZWN0IGFzIGNyZWF0ZUNvbm5lY3RBY3Rpb24sXG4gIGNyZWF0ZVN0b3JlLFxuICBkaXNjb25uZWN0LFxuICBlbWl0VHlwaW5nSW5kaWNhdG9yLFxuICBtYXJrQWN0aXZpdHksXG4gIHBvc3RBY3Rpdml0eSxcbiAgc2VuZEV2ZW50LFxuICBzZW5kRmlsZXMsXG4gIHNlbmRNZXNzYWdlLFxuICBzZW5kTWVzc2FnZUJhY2ssXG4gIHNlbmRQb3N0QmFjayxcbiAgc2V0RGljdGF0ZUludGVyaW1zLFxuICBzZXREaWN0YXRlU3RhdGUsXG4gIHNldExhbmd1YWdlLFxuICBzZXRTZW5kQm94LFxuICBzZXRTZW5kVGltZW91dCxcbiAgc2V0U2VuZFR5cGluZ0luZGljYXRvcixcbiAgc3RhcnREaWN0YXRlLFxuICBzdGFydFNwZWFraW5nQWN0aXZpdHksXG4gIHN0b3BEaWN0YXRlLFxuICBzdG9wU3BlYWtpbmdBY3Rpdml0eSxcbiAgc3VibWl0U2VuZEJveFxufSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcblxuaW1wb3J0IGNvbmNhdE1pZGRsZXdhcmUgZnJvbSAnLi9NaWRkbGV3YXJlL2NvbmNhdE1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZUNvcmVDYXJkQWN0aW9uTWlkZGxld2FyZSBmcm9tICcuL01pZGRsZXdhcmUvQ2FyZEFjdGlvbi9jcmVhdGVDb3JlTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlU3R5bGVTZXQgZnJvbSAnLi9TdHlsZXMvY3JlYXRlU3R5bGVTZXQnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RWb2ljZSBmcm9tICcuL2RlZmF1bHRTZWxlY3RWb2ljZSc7XG5pbXBvcnQgRGljdGF0aW9uIGZyb20gJy4vRGljdGF0aW9uJztcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi9VdGlscy9tYXBNYXAnO1xuaW1wb3J0IG9ic2VydmFibGVUb1Byb21pc2UgZnJvbSAnLi9VdGlscy9vYnNlcnZhYmxlVG9Qcm9taXNlJztcbmltcG9ydCBXZWJDaGF0UmVkdXhDb250ZXh0LCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi9XZWJDaGF0UmVkdXhDb250ZXh0JztcbmltcG9ydCBXZWJDaGF0VUlDb250ZXh0IGZyb20gJy4vV2ViQ2hhdFVJQ29udGV4dCc7XG5cbi8vIExpc3Qgb2YgUmVkdXggYWN0aW9ucyBmYWN0b3J5IHdlIGFyZSBob2lzdGluZyBhcyBXZWIgQ2hhdCBmdW5jdGlvbnNcbmNvbnN0IERJU1BBVENIRVJTID0ge1xuICBjbGVhclN1Z2dlc3RlZEFjdGlvbnMsXG4gIGVtaXRUeXBpbmdJbmRpY2F0b3IsXG4gIG1hcmtBY3Rpdml0eSxcbiAgcG9zdEFjdGl2aXR5LFxuICBzZW5kRXZlbnQsXG4gIHNlbmRGaWxlcyxcbiAgc2VuZE1lc3NhZ2UsXG4gIHNlbmRNZXNzYWdlQmFjayxcbiAgc2VuZFBvc3RCYWNrLFxuICBzZXREaWN0YXRlSW50ZXJpbXMsXG4gIHNldERpY3RhdGVTdGF0ZSxcbiAgc2V0U2VuZEJveCxcbiAgc2V0U2VuZFRpbWVvdXQsXG4gIHN0YXJ0RGljdGF0ZSxcbiAgc3RhcnRTcGVha2luZ0FjdGl2aXR5LFxuICBzdG9wRGljdGF0ZSxcbiAgc3RvcFNwZWFraW5nQWN0aXZpdHksXG4gIHN1Ym1pdFNlbmRCb3hcbn07XG5cbmZ1bmN0aW9uIHN0eWxlU2V0VG9DbGFzc05hbWVzKHN0eWxlU2V0KSB7XG4gIHJldHVybiBtYXBNYXAoc3R5bGVTZXQsIChzdHlsZSwga2V5KSA9PiAoa2V5ID09PSAnb3B0aW9ucycgPyBzdHlsZSA6IGNzcyhzdHlsZSkpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZEFjdGlvbkNvbnRleHQoeyBjYXJkQWN0aW9uTWlkZGxld2FyZSwgZGlyZWN0TGluZSwgZGlzcGF0Y2ggfSkge1xuICBjb25zdCBydW5NaWRkbGV3YXJlID0gY29uY2F0TWlkZGxld2FyZShjYXJkQWN0aW9uTWlkZGxld2FyZSwgY3JlYXRlQ29yZUNhcmRBY3Rpb25NaWRkbGV3YXJlKCkpKHsgZGlzcGF0Y2ggfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBvbkNhcmRBY3Rpb246IGNhcmRBY3Rpb24gPT5cbiAgICAgIHJ1bk1pZGRsZXdhcmUoKHsgY2FyZEFjdGlvbjogeyB0eXBlIH0gfSkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdlYiBDaGF0OiByZWNlaXZlZCB1bmtub3duIGNhcmQgYWN0aW9uIFwiJHt0eXBlfVwiYCk7XG4gICAgICB9KSh7XG4gICAgICAgIGNhcmRBY3Rpb24sXG4gICAgICAgIGdldFNpZ25JblVybDpcbiAgICAgICAgICBjYXJkQWN0aW9uLnR5cGUgPT09ICdzaWduaW4nXG4gICAgICAgICAgICA/ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBjYXJkQWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdExpbmUuZ2V0U2Vzc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUT0RPOiBbUDNdIFdlIHNob3VsZCBjaGFuZ2UgdGhpcyBvbmUgdG8gYXN5bmMvYXdhaXQuXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBUaGlzIGlzIHRoZSBmaXJzdCBwbGFjZSBpbiB0aGlzIHByb2plY3QgdG8gdXNlIGFzeW5jLlxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgVGh1cywgd2UgbmVlZCB0byBhZGQgQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcnVudGltZSBhbmQgQGJhYmVsL3J1bnRpbWUuXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVG9Qcm9taXNlKGRpcmVjdExpbmUuZ2V0U2Vzc2lvbklkKCkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZCA9PiBgJHt2YWx1ZX0ke2VuY29kZVVSSUNvbXBvbmVudChgJmNvZGVfY2hhbGxlbmdlPSR7c2Vzc2lvbklkfWApfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgIH0pXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvY3VzU2VuZEJveENvbnRleHQoeyBzZW5kQm94UmVmIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBmb2N1c1NlbmRCb3g6ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY3VycmVudCB9ID0gc2VuZEJveFJlZiB8fCB7fTtcblxuICAgICAgY3VycmVudCAmJiBjdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBUT0RPOiBbUDNdIFRha2UgdGhpcyBkZXByZWNhdGlvbiBjb2RlIG91dCB3aGVuIHJlbGVhc2luZyBvbiBvciBhZnRlciAyMDE5IERlY2VtYmVyIDExXG5mdW5jdGlvbiBwYXRjaFByb3BzRm9yQXZhdGFySW5pdGlhbHMoeyBib3RBdmF0YXJJbml0aWFscywgdXNlckF2YXRhckluaXRpYWxzLCAuLi5wcm9wcyB9KSB7XG4gIC8vIFRoaXMgY29kZSB3aWxsIHRha2Ugb3V0IFwiYm90QXZhdGFySW5pdGlhbHNcIiBhbmQgXCJ1c2VyQXZhdGFySW5pdGlhbHNcIiBmcm9tIHByb3BzXG5cbiAgbGV0IHsgc3R5bGVPcHRpb25zIH0gPSBwcm9wcztcblxuICBpZiAoYm90QXZhdGFySW5pdGlhbHMpIHtcbiAgICBzdHlsZU9wdGlvbnMgPSB7IC4uLnN0eWxlT3B0aW9ucywgYm90QXZhdGFySW5pdGlhbHMgfTtcblxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXZWIgQ2hhdDogXCJib3RBdmF0YXJJbml0aWFsc1wiIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJzdHlsZU9wdGlvbnMuYm90QXZhdGFySW5pdGlhbHNcIiBpbnN0ZWFkLiBcImJvdEF2YXRhckluaXRpYWxzXCIgd2lsbCBiZSByZW1vdmVkIG9uIG9yIGFmdGVyIERlY2VtYmVyIDExIDIwMTkgLidcbiAgICApO1xuICB9XG5cbiAgaWYgKHVzZXJBdmF0YXJJbml0aWFscykge1xuICAgIHN0eWxlT3B0aW9ucyA9IHsgLi4uc3R5bGVPcHRpb25zLCB1c2VyQXZhdGFySW5pdGlhbHMgfTtcblxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXZWIgQ2hhdDogXCJib3RBdmF0YXJJbml0aWFsc1wiIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJzdHlsZU9wdGlvbnMuYm90QXZhdGFySW5pdGlhbHNcIiBpbnN0ZWFkLiBcImJvdEF2YXRhckluaXRpYWxzXCIgd2lsbCBiZSByZW1vdmVkIG9uIG9yIGFmdGVyIERlY2VtYmVyIDExIDIwMTkgLidcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICBzdHlsZU9wdGlvbnNcbiAgfTtcbn1cblxuY29uc3QgQ29tcG9zZXIgPSAoe1xuICBhY3Rpdml0eVJlbmRlcmVyLFxuICBhdHRhY2htZW50UmVuZGVyZXIsXG4gIGJvdEF2YXRhckluaXRpYWxzLFxuICBjYXJkQWN0aW9uTWlkZGxld2FyZSxcbiAgY2hpbGRyZW4sXG4gIGRpcmVjdExpbmUsXG4gIGRpc2FibGVkLFxuICBncmFtbWFycyxcbiAgZ3JvdXBUaW1lc3RhbXAsXG4gIGxvY2FsZSxcbiAgcmVuZGVyTWFya2Rvd24sXG4gIHNjcm9sbFRvRW5kLFxuICBzZWxlY3RWb2ljZSxcbiAgc2VuZEJveFJlZixcbiAgc2VuZFRpbWVvdXQsXG4gIHNlbmRUeXBpbmcsXG4gIHNlbmRUeXBpbmdJbmRpY2F0b3IsXG4gIHN0eWxlT3B0aW9ucyxcbiAgc3R5bGVTZXQsXG4gIHVzZXJBdmF0YXJJbml0aWFscyxcbiAgdXNlcklELFxuICB1c2VybmFtZSxcbiAgd2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5XG59KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3JlZmVyZW5jZUdyYW1tYXJJRF0gPSB1c2VSZWZlcmVuY2VHcmFtbWFySUQoKTtcblxuICBjb25zdCBwYXRjaGVkR3JhbW1hcnMgPSB1c2VNZW1vKCgpID0+IGdyYW1tYXJzIHx8IFtdLCBbZ3JhbW1hcnNdKTtcbiAgY29uc3QgcGF0Y2hlZFNlbmRUeXBpbmdJbmRpY2F0b3IgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHNlbmRUeXBpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gc2VuZFR5cGluZ0luZGljYXRvcjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBbUDNdIFRha2UgdGhpcyBkZXByZWNhdGlvbiBjb2RlIG91dCB3aGVuIHJlbGVhc2luZyBvbiBvciBhZnRlciBKYW51YXJ5IDEzIDIwMjBcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnV2ViIENoYXQ6IFwic2VuZFR5cGluZ1wiIGhhcyBiZWVuIHJlbmFtZWQgdG8gXCJzZW5kVHlwaW5nSW5kaWNhdG9yXCIuIFBsZWFzZSB1c2UgXCJzZW5kVHlwaW5nSW5kaWNhdG9yXCIgaW5zdGVhZC4gVGhpcyBkZXByZWNhdGlvbiBtaWdyYXRpb24gd2lsbCBiZSByZW1vdmVkIG9uIG9yIGFmdGVyIEphbnVhcnkgMTMgMjAyMC4nXG4gICAgKTtcblxuICAgIHJldHVybiBzZW5kVHlwaW5nO1xuICB9LCBbc2VuZFR5cGluZywgc2VuZFR5cGluZ0luZGljYXRvcl0pO1xuXG4gIGNvbnN0IHBhdGNoZWRTdHlsZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IHBhdGNoUHJvcHNGb3JBdmF0YXJJbml0aWFscyh7IGJvdEF2YXRhckluaXRpYWxzLCBzdHlsZU9wdGlvbnMsIHVzZXJBdmF0YXJJbml0aWFscyB9KSxcbiAgICBbYm90QXZhdGFySW5pdGlhbHMsIHN0eWxlT3B0aW9ucywgdXNlckF2YXRhckluaXRpYWxzXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TGFuZ3VhZ2UobG9jYWxlKSk7XG4gIH0sIFtkaXNwYXRjaCwgbG9jYWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRTZW5kVGltZW91dChzZW5kVGltZW91dCkpO1xuICB9LCBbZGlzcGF0Y2gsIHNlbmRUaW1lb3V0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRTZW5kVHlwaW5nSW5kaWNhdG9yKCEhcGF0Y2hlZFNlbmRUeXBpbmdJbmRpY2F0b3IpKTtcbiAgfSwgW2Rpc3BhdGNoLCBwYXRjaGVkU2VuZFR5cGluZ0luZGljYXRvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBjcmVhdGVDb25uZWN0QWN0aW9uKHtcbiAgICAgICAgZGlyZWN0TGluZSxcbiAgICAgICAgdXNlcklELFxuICAgICAgICB1c2VybmFtZVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIFRPRE86IFtQM10gZGlzY29ubmVjdCgpIGlzIGFuIGFzeW5jIGNhbGwgKHBlbmRpbmcgLT4gZnVsZmlsbGVkKSwgd2UgbmVlZCB0byB3YWl0LCBvciBjaGFuZ2UgaXQgdG8gcmVjb25uZWN0KClcbiAgICAgIGRpc3BhdGNoKGRpc2Nvbm5lY3QoKSk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoLCBkaXJlY3RMaW5lLCB1c2VySUQsIHVzZXJuYW1lXSk7XG5cbiAgY29uc3QgY2FyZEFjdGlvbkNvbnRleHQgPSB1c2VNZW1vKCgpID0+IGNyZWF0ZUNhcmRBY3Rpb25Db250ZXh0KHsgY2FyZEFjdGlvbk1pZGRsZXdhcmUsIGRpcmVjdExpbmUsIGRpc3BhdGNoIH0pLCBbXG4gICAgY2FyZEFjdGlvbk1pZGRsZXdhcmUsXG4gICAgZGlyZWN0TGluZSxcbiAgICBkaXNwYXRjaFxuICBdKTtcblxuICBjb25zdCBwYXRjaGVkU2VsZWN0Vm9pY2UgPSB1c2VDYWxsYmFjayhzZWxlY3RWb2ljZSB8fCBkZWZhdWx0U2VsZWN0Vm9pY2UuYmluZChudWxsLCB7IGxhbmd1YWdlOiBsb2NhbGUgfSksIFtcbiAgICBzZWxlY3RWb2ljZVxuICBdKTtcblxuICBjb25zdCBmb2N1c1NlbmRCb3hDb250ZXh0ID0gdXNlTWVtbygoKSA9PiBjcmVhdGVGb2N1c1NlbmRCb3hDb250ZXh0KHsgc2VuZEJveFJlZiB9KSwgW3NlbmRCb3hSZWZdKTtcblxuICBjb25zdCBwYXRjaGVkU3R5bGVTZXQgPSB1c2VNZW1vKCgpID0+IHN0eWxlU2V0VG9DbGFzc05hbWVzKHN0eWxlU2V0IHx8IGNyZWF0ZVN0eWxlU2V0KHBhdGNoZWRTdHlsZU9wdGlvbnMpKSwgW1xuICAgIHBhdGNoZWRTdHlsZU9wdGlvbnMsXG4gICAgc3R5bGVTZXRcbiAgXSk7XG5cbiAgY29uc3QgaG9pc3RlZERpc3BhdGNoZXJzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBtYXBNYXAoRElTUEFUQ0hFUlMsIGRpc3BhdGNoZXIgPT4gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGRpc3BhdGNoZXIoLi4uYXJncykpKSxcbiAgICBbZGlzcGF0Y2hdXG4gICk7XG5cbiAgY29uc3Qgd2ViU3BlZWNoUG9ueWZpbGwgPSB1c2VNZW1vKFxuICAgICgpID0+IHdlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSAmJiB3ZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkoeyByZWZlcmVuY2VHcmFtbWFySUQgfSksXG4gICAgW3JlZmVyZW5jZUdyYW1tYXJJRCwgd2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5XVxuICApO1xuXG4gIC8vIFRoaXMgaXMgYSBoZWF2eSBmdW5jdGlvbiwgYW5kIGl0IGlzIGV4cGVjdGVkIHRvIGJlIG9ubHkgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHJlY3JlYXRlIGJ1c2luZXNzIGxvZ2ljLCBlLmcuXG4gIC8vIC0gVXNlciBJRCBjaGFuZ2VkLCBjYXVzaW5nIGFsbCBzZW5kKiBmdW5jdGlvbnMgdG8gYmUgdXBkYXRlZFxuICAvLyAtIHNlbmRcblxuICAvLyBUT0RPOiBbUDNdIFdlIHNob3VsZCB0aGluayBhYm91dCBpZiB3ZSBhbGxvdyB0aGUgdXNlciB0byBjaGFuZ2Ugb25TZW5kQm94VmFsdWVDaGFuZ2VkL3NlbmRCb3hWYWx1ZSwgZS5nLlxuICAvLyAxLiBUdXJucyB0ZXh0IGludG8gVVBQRVJDQVNFXG4gIC8vIDIuIEZpbHRlciBvdXQgcHJvZmFuaXR5XG5cbiAgLy8gVE9ETzogW1A0XSBSZXZpc2l0IGFsbCBtZW1iZXJzIG9mIGNvbnRleHRcbiAgLy8gICAgICAgVGhpcyBjb250ZXh0IHNob3VsZCBjb25zaXN0IG9mIG1lbWJlcnMgdGhhdCBhcmUgbm90IGluIHRoZSBSZWR1eCBzdG9yZVxuICAvLyAgICAgICBpLmUuIG1lbWJlcnMgdGhhdCBhcmUgbm90IGludGVyZXN0ZWQgaW4gb3RoZXIgdHlwZXMgb2YgVUlzXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICAuLi5jYXJkQWN0aW9uQ29udGV4dCxcbiAgICAgIC4uLmZvY3VzU2VuZEJveENvbnRleHQsXG4gICAgICAuLi5ob2lzdGVkRGlzcGF0Y2hlcnMsXG4gICAgICBhY3Rpdml0eVJlbmRlcmVyLFxuICAgICAgYXR0YWNobWVudFJlbmRlcmVyLFxuICAgICAgZGlyZWN0TGluZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZ3JhbW1hcnM6IHBhdGNoZWRHcmFtbWFycyxcbiAgICAgIGdyb3VwVGltZXN0YW1wLFxuICAgICAgcmVuZGVyTWFya2Rvd24sXG4gICAgICBzY3JvbGxUb0VuZCxcbiAgICAgIHNlbGVjdFZvaWNlOiBwYXRjaGVkU2VsZWN0Vm9pY2UsXG4gICAgICBzZW5kQm94UmVmLFxuICAgICAgc2VuZFRpbWVvdXQsXG4gICAgICBzZW5kVHlwaW5nSW5kaWNhdG9yOiBwYXRjaGVkU2VuZFR5cGluZ0luZGljYXRvcixcbiAgICAgIHN0eWxlT3B0aW9uczogcGF0Y2hlZFN0eWxlT3B0aW9ucyxcbiAgICAgIHN0eWxlU2V0OiBwYXRjaGVkU3R5bGVTZXQsXG4gICAgICB1c2VySUQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIHdlYlNwZWVjaFBvbnlmaWxsXG4gICAgfSksXG4gICAgW1xuICAgICAgYWN0aXZpdHlSZW5kZXJlcixcbiAgICAgIGF0dGFjaG1lbnRSZW5kZXJlcixcbiAgICAgIGNhcmRBY3Rpb25Db250ZXh0LFxuICAgICAgZGlyZWN0TGluZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZm9jdXNTZW5kQm94Q29udGV4dCxcbiAgICAgIGdyb3VwVGltZXN0YW1wLFxuICAgICAgaG9pc3RlZERpc3BhdGNoZXJzLFxuICAgICAgcGF0Y2hlZEdyYW1tYXJzLFxuICAgICAgcGF0Y2hlZFNlbGVjdFZvaWNlLFxuICAgICAgcGF0Y2hlZFNlbmRUeXBpbmdJbmRpY2F0b3IsXG4gICAgICBwYXRjaGVkU3R5bGVPcHRpb25zLFxuICAgICAgcGF0Y2hlZFN0eWxlU2V0LFxuICAgICAgcmVuZGVyTWFya2Rvd24sXG4gICAgICBzY3JvbGxUb0VuZCxcbiAgICAgIHNlbmRCb3hSZWYsXG4gICAgICBzZW5kVGltZW91dCxcbiAgICAgIHVzZXJJRCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgd2ViU3BlZWNoUG9ueWZpbGxcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2ViQ2hhdFVJQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oY29udGV4dCkgOiBjaGlsZHJlbn1cbiAgICAgIDxEaWN0YXRpb24gLz5cbiAgICA8L1dlYkNoYXRVSUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyBXZSB3aWxsIGNyZWF0ZSBhIFJlZHV4IHN0b3JlIGlmIGl0IHdhcyBub3QgcGFzc2VkIGluXG5jb25zdCBDb21wb3NlV2l0aFN0b3JlID0gKHsgc3RvcmUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgbWVtb2l6ZWRTdG9yZSA9IHVzZU1lbW8oKCkgPT4gc3RvcmUgfHwgY3JlYXRlU3RvcmUoKSwgW3N0b3JlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgY29udGV4dD17V2ViQ2hhdFJlZHV4Q29udGV4dH0gc3RvcmU9e21lbW9pemVkU3RvcmV9PlxuICAgICAgPFNjcm9sbFRvQm90dG9tQ29tcG9zZXI+XG4gICAgICAgIDxTY3JvbGxUb0JvdHRvbUZ1bmN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICB7KHsgc2Nyb2xsVG9FbmQgfSkgPT4gPENvbXBvc2VyIHNjcm9sbFRvRW5kPXtzY3JvbGxUb0VuZH0gey4uLnByb3BzfSAvPn1cbiAgICAgICAgPC9TY3JvbGxUb0JvdHRvbUZ1bmN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIDwvU2Nyb2xsVG9Cb3R0b21Db21wb3Nlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuQ29tcG9zZVdpdGhTdG9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0b3JlOiB1bmRlZmluZWRcbn07XG5cbkNvbXBvc2VXaXRoU3RvcmUucHJvcFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLmFueVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZVdpdGhTdG9yZTtcblxuLy8gVE9ETzogW1AzXSBXZSBzaG91bGQgY29uc2lkZXIgbW92aW5nIHNvbWUgZGF0YSBmcm9tIFJlZHV4IHN0b3JlIHRvIHByb3BzXG4vLyAgICAgICBBbHRob3VnaCB3ZSB1c2UgYGNvbm5lY3RUb1dlYkNoYXRgIHRvIGhpZGUgdGhlIGRldGFpbHMgb2YgYWNjZXNzb3Igb2YgUmVkdXggc3RvcmUsXG4vLyAgICAgICB3ZSBzaG91bGQgY2xlYW4gdXAgdGhlIHJlc3BvbnNpYmlsaXR5IGJldHdlZW4gQ29udGV4dCBhbmQgUmVkdXggc3RvcmVcbi8vICAgICAgIFdlIHNob3VsZCBkZWNpZGUgd2hpY2ggZGF0YSBpcyBuZWVkZWQgZm9yIFJlYWN0IGJ1dCBub3QgaW4gb3RoZXIgZW52aXJvbm1lbnQgc3VjaCBhcyBDTEkvVlNDb2RlXG5cbkNvbXBvc2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZpdHlSZW5kZXJlcjogdW5kZWZpbmVkLFxuICBhdHRhY2htZW50UmVuZGVyZXI6IHVuZGVmaW5lZCxcbiAgYm90QXZhdGFySW5pdGlhbHM6IHVuZGVmaW5lZCxcbiAgY2FyZEFjdGlvbk1pZGRsZXdhcmU6IHVuZGVmaW5lZCxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBncmFtbWFyczogW10sXG4gIGdyb3VwVGltZXN0YW1wOiB0cnVlLFxuICBsb2NhbGU6IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgJ2VuLVVTJyxcbiAgcmVuZGVyTWFya2Rvd246IHRleHQgPT4gdGV4dCxcbiAgc2VsZWN0Vm9pY2U6IHVuZGVmaW5lZCxcbiAgc2VuZEJveFJlZjogdW5kZWZpbmVkLFxuICBzZW5kVGltZW91dDogMjAwMDAsXG4gIHNlbmRUeXBpbmc6IHVuZGVmaW5lZCxcbiAgc2VuZFR5cGluZ0luZGljYXRvcjogZmFsc2UsXG4gIHN0eWxlT3B0aW9uczoge30sXG4gIHN0eWxlU2V0OiB1bmRlZmluZWQsXG4gIHVzZXJBdmF0YXJJbml0aWFsczogdW5kZWZpbmVkLFxuICB1c2VySUQ6ICcnLFxuICB1c2VybmFtZTogJycsXG4gIHdlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeTogdW5kZWZpbmVkXG59O1xuXG5Db21wb3Nlci5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICBhdHRhY2htZW50UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICBib3RBdmF0YXJJbml0aWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2FyZEFjdGlvbk1pZGRsZXdhcmU6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZGlyZWN0TGluZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3Rpdml0eSQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGNvbm5lY3Rpb25TdGF0dXMkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBlbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGdldFNlc3Npb25JZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwb3N0QWN0aXZpdHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVmZXJlbmNlR3JhbW1hcklEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ3JhbW1hcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBncm91cFRpbWVzdGFtcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZW5kZXJNYXJrZG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNjcm9sbFRvRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RWb2ljZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbmRCb3hSZWY6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLmFueVxuICB9KSxcbiAgc2VuZFRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlbmRUeXBpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzZW5kVHlwaW5nSW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGVPcHRpb25zOiBQcm9wVHlwZXMuYW55LFxuICBzdHlsZVNldDogUHJvcFR5cGVzLmFueSxcbiAgdXNlckF2YXRhckluaXRpYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1c2VySUQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3ZWJTcGVlY2hQb255ZmlsbEZhY3Rvcnk6IFByb3BUeXBlcy5mdW5jXG59O1xuIl19
