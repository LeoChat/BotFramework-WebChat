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

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _concatMiddleware = _interopRequireDefault(require('./Middleware/concatMiddleware'));

var _Context = _interopRequireDefault(require('./Context'));

var _createCoreMiddleware = _interopRequireDefault(require('./Middleware/CardAction/createCoreMiddleware'));

var _createStyleSet = _interopRequireDefault(require('./Styles/createStyleSet'));

var _defaultSelectVoice = _interopRequireDefault(require('./defaultSelectVoice'));

var _Dictation = _interopRequireDefault(require('./Dictation'));

var _mapMap = _interopRequireDefault(require('./Utils/mapMap'));

var _observableToPromise = _interopRequireDefault(require('./Utils/observableToPromise'));

var _WebChatReduxContext = _interopRequireDefault(require('./WebChatReduxContext'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
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
    dispatch = _ref6.dispatch,
    grammars = _ref6.grammars,
    groupTimestamp = _ref6.groupTimestamp,
    locale = _ref6.locale,
    referenceGrammarID = _ref6.referenceGrammarID,
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
    _Context.default.Provider,
    {
      value: context
    },
    typeof children === 'function' ? children(context) : children,
    _react.default.createElement(_Dictation.default, null)
  );
}; // TODO: [P1] When react-redux support useSelector with custom context, we should move to that architecture to simplify our code.

var ConnectedComposer = (0, _reactRedux.connect)(
  function(_ref7) {
    var referenceGrammarID = _ref7.referenceGrammarID;
    return {
      referenceGrammarID: referenceGrammarID
    };
  },
  null,
  null,
  {
    context: _WebChatReduxContext.default
  }
)(function(props) {
  return _react.default.createElement(
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
  );
}); // We will create a Redux store if it was not passed in

var ConnectedComposerWithStore = function ConnectedComposerWithStore(_ref9) {
  var store = _ref9.store,
    props = _objectWithoutProperties(_ref9, ['store']);

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
    _react.default.createElement(ConnectedComposer, props)
  );
};

ConnectedComposerWithStore.defaultProps = {
  store: undefined
};
ConnectedComposerWithStore.propTypes = {
  store: _propTypes.default.any
};
var _default = ConnectedComposerWithStore; // TODO: [P3] We should consider moving some data from Redux store to props
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
  referenceGrammarID: '',
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
  dispatch: _propTypes.default.func.isRequired,
  grammars: _propTypes.default.arrayOf(_propTypes.default.string),
  groupTimestamp: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  locale: _propTypes.default.string,
  referenceGrammarID: _propTypes.default.string,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb3Nlci5qcyJdLCJuYW1lcyI6WyJESVNQQVRDSEVSUyIsImNsZWFyU3VnZ2VzdGVkQWN0aW9ucyIsIm1hcmtBY3Rpdml0eSIsInBvc3RBY3Rpdml0eSIsInNlbmRFdmVudCIsInNlbmRGaWxlcyIsInNlbmRNZXNzYWdlIiwic2VuZE1lc3NhZ2VCYWNrIiwic2VuZFBvc3RCYWNrIiwic2V0RGljdGF0ZUludGVyaW1zIiwic2V0RGljdGF0ZVN0YXRlIiwic2V0U2VuZEJveCIsInNldFNlbmRUaW1lb3V0Iiwic3RhcnREaWN0YXRlIiwic3RhcnRTcGVha2luZ0FjdGl2aXR5Iiwic3RvcERpY3RhdGUiLCJzdG9wU3BlYWtpbmdBY3Rpdml0eSIsInN1Ym1pdFNlbmRCb3giLCJzdHlsZVNldFRvQ2xhc3NOYW1lcyIsInN0eWxlU2V0Iiwic3R5bGUiLCJrZXkiLCJjcmVhdGVDYXJkQWN0aW9uQ29udGV4dCIsImNhcmRBY3Rpb25NaWRkbGV3YXJlIiwiZGlyZWN0TGluZSIsImRpc3BhdGNoIiwicnVuTWlkZGxld2FyZSIsIm9uQ2FyZEFjdGlvbiIsImNhcmRBY3Rpb24iLCJ0eXBlIiwiRXJyb3IiLCJnZXRTaWduSW5VcmwiLCJ2YWx1ZSIsImdldFNlc3Npb25JZCIsInRoZW4iLCJzZXNzaW9uSWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjcmVhdGVGb2N1c1NlbmRCb3hDb250ZXh0Iiwic2VuZEJveFJlZiIsImZvY3VzU2VuZEJveCIsImN1cnJlbnQiLCJmb2N1cyIsInBhdGNoUHJvcHNGb3JBdmF0YXJJbml0aWFscyIsImJvdEF2YXRhckluaXRpYWxzIiwidXNlckF2YXRhckluaXRpYWxzIiwicHJvcHMiLCJzdHlsZU9wdGlvbnMiLCJjb25zb2xlIiwid2FybiIsIkNvbXBvc2VyIiwiYWN0aXZpdHlSZW5kZXJlciIsImF0dGFjaG1lbnRSZW5kZXJlciIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJncmFtbWFycyIsImdyb3VwVGltZXN0YW1wIiwibG9jYWxlIiwicmVmZXJlbmNlR3JhbW1hcklEIiwicmVuZGVyTWFya2Rvd24iLCJzY3JvbGxUb0VuZCIsInNlbGVjdFZvaWNlIiwic2VuZFRpbWVvdXQiLCJzZW5kVHlwaW5nIiwic2VuZFR5cGluZ0luZGljYXRvciIsInVzZXJJRCIsInVzZXJuYW1lIiwid2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IiwicGF0Y2hlZEdyYW1tYXJzIiwicGF0Y2hlZFNlbmRUeXBpbmdJbmRpY2F0b3IiLCJwYXRjaGVkU3R5bGVPcHRpb25zIiwiY2FyZEFjdGlvbkNvbnRleHQiLCJwYXRjaGVkU2VsZWN0Vm9pY2UiLCJkZWZhdWx0U2VsZWN0Vm9pY2UiLCJiaW5kIiwibGFuZ3VhZ2UiLCJmb2N1c1NlbmRCb3hDb250ZXh0IiwicGF0Y2hlZFN0eWxlU2V0IiwiaG9pc3RlZERpc3BhdGNoZXJzIiwiZGlzcGF0Y2hlciIsIndlYlNwZWVjaFBvbnlmaWxsIiwiY29udGV4dCIsIkNvbm5lY3RlZENvbXBvc2VyIiwiV2ViQ2hhdFJlZHV4Q29udGV4dCIsIkNvbm5lY3RlZENvbXBvc2VyV2l0aFN0b3JlIiwic3RvcmUiLCJtZW1vaXplZFN0b3JlIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwid2luZG93IiwibmF2aWdhdG9yIiwidGV4dCIsImZ1bmMiLCJzdHJpbmciLCJzaGFwZSIsImFjdGl2aXR5JCIsInN1YnNjcmliZSIsImlzUmVxdWlyZWQiLCJjb25uZWN0aW9uU3RhdHVzJCIsImVuZCIsInRva2VuIiwiYm9vbCIsImFycmF5T2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUF5QkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxFQUFB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QSxXQUFXLEVBQUU4QixtQkFBVUssSUFBVixDQUFlSyxVQTFCVDtBQTJCbkJ2QyxFQUFBQSxXQUFXLEVBQUU2QixtQkFBVUssSUEzQko7QUE0Qm5CeEQsRUFBQUEsVUFBVSxFQUFFbUQsbUJBQVVPLEtBQVYsQ0FBZ0I7QUFDMUJ4RCxJQUFBQSxPQUFPLEVBQUVpRCxtQkFBVUM7QUFETyxHQUFoQixDQTVCTztBQStCbkI3QixFQUFBQSxXQUFXLEVBQUU0QixtQkFBVWlCLE1BL0JKO0FBZ0NuQjVDLEVBQUFBLFVBQVUsRUFBRTJCLG1CQUFVYyxJQWhDSDtBQWlDbkJ4QyxFQUFBQSxtQkFBbUIsRUFBRTBCLG1CQUFVYyxJQWpDWjtBQWtDbkJ6RCxFQUFBQSxZQUFZLEVBQUUyQyxtQkFBVUMsR0FsQ0w7QUFtQ25CdkUsRUFBQUEsUUFBUSxFQUFFc0UsbUJBQVVDLEdBbkNEO0FBb0NuQjlDLEVBQUFBLGtCQUFrQixFQUFFNkMsbUJBQVVNLE1BcENYO0FBcUNuQi9CLEVBQUFBLE1BQU0sRUFBRXlCLG1CQUFVTSxNQXJDQztBQXNDbkI5QixFQUFBQSxRQUFRLEVBQUV3QixtQkFBVU0sTUF0Q0Q7QUF1Q25CN0IsRUFBQUEsd0JBQXdCLEVBQUV1QixtQkFBVUs7QUF2Q2pCLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9zZXIgYXMgU2Nyb2xsVG9Cb3R0b21Db21wb3NlcixcbiAgRnVuY3Rpb25Db250ZXh0IGFzIFNjcm9sbFRvQm90dG9tRnVuY3Rpb25Db250ZXh0XG59IGZyb20gJ3JlYWN0LXNjcm9sbC10by1ib3R0b20nO1xuXG5pbXBvcnQgeyBjb25uZWN0LCBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIGNsZWFyU3VnZ2VzdGVkQWN0aW9ucyxcbiAgY29ubmVjdCBhcyBjcmVhdGVDb25uZWN0QWN0aW9uLFxuICBjcmVhdGVTdG9yZSxcbiAgZGlzY29ubmVjdCxcbiAgbWFya0FjdGl2aXR5LFxuICBwb3N0QWN0aXZpdHksXG4gIHNlbmRFdmVudCxcbiAgc2VuZEZpbGVzLFxuICBzZW5kTWVzc2FnZSxcbiAgc2VuZE1lc3NhZ2VCYWNrLFxuICBzZW5kUG9zdEJhY2ssXG4gIHNldERpY3RhdGVJbnRlcmltcyxcbiAgc2V0RGljdGF0ZVN0YXRlLFxuICBzZXRMYW5ndWFnZSxcbiAgc2V0U2VuZEJveCxcbiAgc2V0U2VuZFRpbWVvdXQsXG4gIHNldFNlbmRUeXBpbmdJbmRpY2F0b3IsXG4gIHN0YXJ0RGljdGF0ZSxcbiAgc3RhcnRTcGVha2luZ0FjdGl2aXR5LFxuICBzdG9wRGljdGF0ZSxcbiAgc3RvcFNwZWFraW5nQWN0aXZpdHksXG4gIHN1Ym1pdFNlbmRCb3hcbn0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5cbmltcG9ydCBjb25jYXRNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9jb25jYXRNaWRkbGV3YXJlJztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgY3JlYXRlQ29yZUNhcmRBY3Rpb25NaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9DYXJkQWN0aW9uL2NyZWF0ZUNvcmVNaWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVTdHlsZVNldCBmcm9tICcuL1N0eWxlcy9jcmVhdGVTdHlsZVNldCc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdFZvaWNlIGZyb20gJy4vZGVmYXVsdFNlbGVjdFZvaWNlJztcbmltcG9ydCBEaWN0YXRpb24gZnJvbSAnLi9EaWN0YXRpb24nO1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuL1V0aWxzL21hcE1hcCc7XG5pbXBvcnQgb2JzZXJ2YWJsZVRvUHJvbWlzZSBmcm9tICcuL1V0aWxzL29ic2VydmFibGVUb1Byb21pc2UnO1xuaW1wb3J0IFdlYkNoYXRSZWR1eENvbnRleHQgZnJvbSAnLi9XZWJDaGF0UmVkdXhDb250ZXh0JztcblxuLy8gTGlzdCBvZiBSZWR1eCBhY3Rpb25zIGZhY3Rvcnkgd2UgYXJlIGhvaXN0aW5nIGFzIFdlYiBDaGF0IGZ1bmN0aW9uc1xuY29uc3QgRElTUEFUQ0hFUlMgPSB7XG4gIGNsZWFyU3VnZ2VzdGVkQWN0aW9ucyxcbiAgbWFya0FjdGl2aXR5LFxuICBwb3N0QWN0aXZpdHksXG4gIHNlbmRFdmVudCxcbiAgc2VuZEZpbGVzLFxuICBzZW5kTWVzc2FnZSxcbiAgc2VuZE1lc3NhZ2VCYWNrLFxuICBzZW5kUG9zdEJhY2ssXG4gIHNldERpY3RhdGVJbnRlcmltcyxcbiAgc2V0RGljdGF0ZVN0YXRlLFxuICBzZXRTZW5kQm94LFxuICBzZXRTZW5kVGltZW91dCxcbiAgc3RhcnREaWN0YXRlLFxuICBzdGFydFNwZWFraW5nQWN0aXZpdHksXG4gIHN0b3BEaWN0YXRlLFxuICBzdG9wU3BlYWtpbmdBY3Rpdml0eSxcbiAgc3VibWl0U2VuZEJveFxufTtcblxuZnVuY3Rpb24gc3R5bGVTZXRUb0NsYXNzTmFtZXMoc3R5bGVTZXQpIHtcbiAgcmV0dXJuIG1hcE1hcChzdHlsZVNldCwgKHN0eWxlLCBrZXkpID0+IChrZXkgPT09ICdvcHRpb25zJyA/IHN0eWxlIDogY3NzKHN0eWxlKSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkQWN0aW9uQ29udGV4dCh7IGNhcmRBY3Rpb25NaWRkbGV3YXJlLCBkaXJlY3RMaW5lLCBkaXNwYXRjaCB9KSB7XG4gIGNvbnN0IHJ1bk1pZGRsZXdhcmUgPSBjb25jYXRNaWRkbGV3YXJlKGNhcmRBY3Rpb25NaWRkbGV3YXJlLCBjcmVhdGVDb3JlQ2FyZEFjdGlvbk1pZGRsZXdhcmUoKSkoeyBkaXNwYXRjaCB9KTtcblxuICByZXR1cm4ge1xuICAgIG9uQ2FyZEFjdGlvbjogY2FyZEFjdGlvbiA9PlxuICAgICAgcnVuTWlkZGxld2FyZSgoeyBjYXJkQWN0aW9uOiB7IHR5cGUgfSB9KSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV2ViIENoYXQ6IHJlY2VpdmVkIHVua25vd24gY2FyZCBhY3Rpb24gXCIke3R5cGV9XCJgKTtcbiAgICAgIH0pKHtcbiAgICAgICAgY2FyZEFjdGlvbixcbiAgICAgICAgZ2V0U2lnbkluVXJsOlxuICAgICAgICAgIGNhcmRBY3Rpb24udHlwZSA9PT0gJ3NpZ25pbidcbiAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNhcmRBY3Rpb247XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0TGluZS5nZXRTZXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFtQM10gV2Ugc2hvdWxkIGNoYW5nZSB0aGlzIG9uZSB0byBhc3luYy9hd2FpdC5cbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIFRoaXMgaXMgdGhlIGZpcnN0IHBsYWNlIGluIHRoaXMgcHJvamVjdCB0byB1c2UgYXN5bmMuXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBUaHVzLCB3ZSBuZWVkIHRvIGFkZCBAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lIGFuZCBAYmFiZWwvcnVudGltZS5cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUb1Byb21pc2UoZGlyZWN0TGluZS5nZXRTZXNzaW9uSWQoKSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkID0+IGAke3ZhbHVlfSR7ZW5jb2RlVVJJQ29tcG9uZW50KGAmY29kZV9jaGFsbGVuZ2U9JHtzZXNzaW9uSWR9YCl9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgfSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9jdXNTZW5kQm94Q29udGV4dCh7IHNlbmRCb3hSZWYgfSkge1xuICByZXR1cm4ge1xuICAgIGZvY3VzU2VuZEJveDogKCkgPT4ge1xuICAgICAgY29uc3QgeyBjdXJyZW50IH0gPSBzZW5kQm94UmVmIHx8IHt9O1xuXG4gICAgICBjdXJyZW50ICYmIGN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIFRPRE86IFtQM10gVGFrZSB0aGlzIGRlcHJlY2F0aW9uIGNvZGUgb3V0IHdoZW4gcmVsZWFzaW5nIG9uIG9yIGFmdGVyIDIwMTkgRGVjZW1iZXIgMTFcbmZ1bmN0aW9uIHBhdGNoUHJvcHNGb3JBdmF0YXJJbml0aWFscyh7IGJvdEF2YXRhckluaXRpYWxzLCB1c2VyQXZhdGFySW5pdGlhbHMsIC4uLnByb3BzIH0pIHtcbiAgLy8gVGhpcyBjb2RlIHdpbGwgdGFrZSBvdXQgXCJib3RBdmF0YXJJbml0aWFsc1wiIGFuZCBcInVzZXJBdmF0YXJJbml0aWFsc1wiIGZyb20gcHJvcHNcblxuICBsZXQgeyBzdHlsZU9wdGlvbnMgfSA9IHByb3BzO1xuXG4gIGlmIChib3RBdmF0YXJJbml0aWFscykge1xuICAgIHN0eWxlT3B0aW9ucyA9IHsgLi4uc3R5bGVPcHRpb25zLCBib3RBdmF0YXJJbml0aWFscyB9O1xuXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBcImJvdEF2YXRhckluaXRpYWxzXCIgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBcInN0eWxlT3B0aW9ucy5ib3RBdmF0YXJJbml0aWFsc1wiIGluc3RlYWQuIFwiYm90QXZhdGFySW5pdGlhbHNcIiB3aWxsIGJlIHJlbW92ZWQgb24gb3IgYWZ0ZXIgRGVjZW1iZXIgMTEgMjAxOSAuJ1xuICAgICk7XG4gIH1cblxuICBpZiAodXNlckF2YXRhckluaXRpYWxzKSB7XG4gICAgc3R5bGVPcHRpb25zID0geyAuLi5zdHlsZU9wdGlvbnMsIHVzZXJBdmF0YXJJbml0aWFscyB9O1xuXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBcImJvdEF2YXRhckluaXRpYWxzXCIgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBcInN0eWxlT3B0aW9ucy5ib3RBdmF0YXJJbml0aWFsc1wiIGluc3RlYWQuIFwiYm90QXZhdGFySW5pdGlhbHNcIiB3aWxsIGJlIHJlbW92ZWQgb24gb3IgYWZ0ZXIgRGVjZW1iZXIgMTEgMjAxOSAuJ1xuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnByb3BzLFxuICAgIHN0eWxlT3B0aW9uc1xuICB9O1xufVxuXG5jb25zdCBDb21wb3NlciA9ICh7XG4gIGFjdGl2aXR5UmVuZGVyZXIsXG4gIGF0dGFjaG1lbnRSZW5kZXJlcixcbiAgYm90QXZhdGFySW5pdGlhbHMsXG4gIGNhcmRBY3Rpb25NaWRkbGV3YXJlLFxuICBjaGlsZHJlbixcbiAgZGlyZWN0TGluZSxcbiAgZGlzYWJsZWQsXG4gIGRpc3BhdGNoLFxuICBncmFtbWFycyxcbiAgZ3JvdXBUaW1lc3RhbXAsXG4gIGxvY2FsZSxcbiAgcmVmZXJlbmNlR3JhbW1hcklELFxuICByZW5kZXJNYXJrZG93bixcbiAgc2Nyb2xsVG9FbmQsXG4gIHNlbGVjdFZvaWNlLFxuICBzZW5kQm94UmVmLFxuICBzZW5kVGltZW91dCxcbiAgc2VuZFR5cGluZyxcbiAgc2VuZFR5cGluZ0luZGljYXRvcixcbiAgc3R5bGVPcHRpb25zLFxuICBzdHlsZVNldCxcbiAgdXNlckF2YXRhckluaXRpYWxzLFxuICB1c2VySUQsXG4gIHVzZXJuYW1lLFxuICB3ZWJTcGVlY2hQb255ZmlsbEZhY3Rvcnlcbn0pID0+IHtcbiAgY29uc3QgcGF0Y2hlZEdyYW1tYXJzID0gdXNlTWVtbygoKSA9PiBncmFtbWFycyB8fCBbXSwgW2dyYW1tYXJzXSk7XG4gIGNvbnN0IHBhdGNoZWRTZW5kVHlwaW5nSW5kaWNhdG9yID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzZW5kVHlwaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNlbmRUeXBpbmdJbmRpY2F0b3I7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogW1AzXSBUYWtlIHRoaXMgZGVwcmVjYXRpb24gY29kZSBvdXQgd2hlbiByZWxlYXNpbmcgb24gb3IgYWZ0ZXIgSmFudWFyeSAxMyAyMDIwXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBcInNlbmRUeXBpbmdcIiBoYXMgYmVlbiByZW5hbWVkIHRvIFwic2VuZFR5cGluZ0luZGljYXRvclwiLiBQbGVhc2UgdXNlIFwic2VuZFR5cGluZ0luZGljYXRvclwiIGluc3RlYWQuIFRoaXMgZGVwcmVjYXRpb24gbWlncmF0aW9uIHdpbGwgYmUgcmVtb3ZlZCBvbiBvciBhZnRlciBKYW51YXJ5IDEzIDIwMjAuJ1xuICAgICk7XG5cbiAgICByZXR1cm4gc2VuZFR5cGluZztcbiAgfSwgW3NlbmRUeXBpbmcsIHNlbmRUeXBpbmdJbmRpY2F0b3JdKTtcblxuICBjb25zdCBwYXRjaGVkU3R5bGVPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBwYXRjaFByb3BzRm9yQXZhdGFySW5pdGlhbHMoeyBib3RBdmF0YXJJbml0aWFscywgc3R5bGVPcHRpb25zLCB1c2VyQXZhdGFySW5pdGlhbHMgfSksXG4gICAgW2JvdEF2YXRhckluaXRpYWxzLCBzdHlsZU9wdGlvbnMsIHVzZXJBdmF0YXJJbml0aWFsc11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExhbmd1YWdlKGxvY2FsZSkpO1xuICB9LCBbZGlzcGF0Y2gsIGxvY2FsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0U2VuZFRpbWVvdXQoc2VuZFRpbWVvdXQpKTtcbiAgfSwgW2Rpc3BhdGNoLCBzZW5kVGltZW91dF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0U2VuZFR5cGluZ0luZGljYXRvcighIXBhdGNoZWRTZW5kVHlwaW5nSW5kaWNhdG9yKSk7XG4gIH0sIFtkaXNwYXRjaCwgcGF0Y2hlZFNlbmRUeXBpbmdJbmRpY2F0b3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGNyZWF0ZUNvbm5lY3RBY3Rpb24oeyBkaXJlY3RMaW5lLCB1c2VySUQsIHVzZXJuYW1lIH0pKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBbUDNdIGRpc2Nvbm5lY3QoKSBpcyBhbiBhc3luYyBjYWxsIChwZW5kaW5nIC0+IGZ1bGZpbGxlZCksIHdlIG5lZWQgdG8gd2FpdCwgb3IgY2hhbmdlIGl0IHRvIHJlY29ubmVjdCgpXG4gICAgICBkaXNwYXRjaChkaXNjb25uZWN0KCkpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaCwgZGlyZWN0TGluZSwgdXNlcklELCB1c2VybmFtZV0pO1xuXG4gIGNvbnN0IGNhcmRBY3Rpb25Db250ZXh0ID0gdXNlTWVtbygoKSA9PiBjcmVhdGVDYXJkQWN0aW9uQ29udGV4dCh7IGNhcmRBY3Rpb25NaWRkbGV3YXJlLCBkaXJlY3RMaW5lLCBkaXNwYXRjaCB9KSwgW1xuICAgIGNhcmRBY3Rpb25NaWRkbGV3YXJlLFxuICAgIGRpcmVjdExpbmUsXG4gICAgZGlzcGF0Y2hcbiAgXSk7XG5cbiAgY29uc3QgcGF0Y2hlZFNlbGVjdFZvaWNlID0gdXNlQ2FsbGJhY2soc2VsZWN0Vm9pY2UgfHwgZGVmYXVsdFNlbGVjdFZvaWNlLmJpbmQobnVsbCwgeyBsYW5ndWFnZTogbG9jYWxlIH0pLCBbXG4gICAgc2VsZWN0Vm9pY2VcbiAgXSk7XG5cbiAgY29uc3QgZm9jdXNTZW5kQm94Q29udGV4dCA9IHVzZU1lbW8oKCkgPT4gY3JlYXRlRm9jdXNTZW5kQm94Q29udGV4dCh7IHNlbmRCb3hSZWYgfSksIFtzZW5kQm94UmVmXSk7XG5cbiAgY29uc3QgcGF0Y2hlZFN0eWxlU2V0ID0gdXNlTWVtbygoKSA9PiBzdHlsZVNldFRvQ2xhc3NOYW1lcyhzdHlsZVNldCB8fCBjcmVhdGVTdHlsZVNldChwYXRjaGVkU3R5bGVPcHRpb25zKSksIFtcbiAgICBwYXRjaGVkU3R5bGVPcHRpb25zLFxuICAgIHN0eWxlU2V0XG4gIF0pO1xuXG4gIGNvbnN0IGhvaXN0ZWREaXNwYXRjaGVycyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbWFwTWFwKERJU1BBVENIRVJTLCBkaXNwYXRjaGVyID0+ICguLi5hcmdzKSA9PiBkaXNwYXRjaChkaXNwYXRjaGVyKC4uLmFyZ3MpKSksXG4gICAgW2Rpc3BhdGNoXVxuICApO1xuXG4gIGNvbnN0IHdlYlNwZWVjaFBvbnlmaWxsID0gdXNlTWVtbyhcbiAgICAoKSA9PiB3ZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkgJiYgd2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5KHsgcmVmZXJlbmNlR3JhbW1hcklEIH0pLFxuICAgIFtyZWZlcmVuY2VHcmFtbWFySUQsIHdlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeV1cbiAgKTtcblxuICAvLyBUaGlzIGlzIGEgaGVhdnkgZnVuY3Rpb24sIGFuZCBpdCBpcyBleHBlY3RlZCB0byBiZSBvbmx5IGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byByZWNyZWF0ZSBidXNpbmVzcyBsb2dpYywgZS5nLlxuICAvLyAtIFVzZXIgSUQgY2hhbmdlZCwgY2F1c2luZyBhbGwgc2VuZCogZnVuY3Rpb25zIHRvIGJlIHVwZGF0ZWRcbiAgLy8gLSBzZW5kXG5cbiAgLy8gVE9ETzogW1AzXSBXZSBzaG91bGQgdGhpbmsgYWJvdXQgaWYgd2UgYWxsb3cgdGhlIHVzZXIgdG8gY2hhbmdlIG9uU2VuZEJveFZhbHVlQ2hhbmdlZC9zZW5kQm94VmFsdWUsIGUuZy5cbiAgLy8gMS4gVHVybnMgdGV4dCBpbnRvIFVQUEVSQ0FTRVxuICAvLyAyLiBGaWx0ZXIgb3V0IHByb2Zhbml0eVxuXG4gIC8vIFRPRE86IFtQNF0gUmV2aXNpdCBhbGwgbWVtYmVycyBvZiBjb250ZXh0XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICAuLi5jYXJkQWN0aW9uQ29udGV4dCxcbiAgICAgIC4uLmZvY3VzU2VuZEJveENvbnRleHQsXG4gICAgICAuLi5ob2lzdGVkRGlzcGF0Y2hlcnMsXG4gICAgICBhY3Rpdml0eVJlbmRlcmVyLFxuICAgICAgYXR0YWNobWVudFJlbmRlcmVyLFxuICAgICAgZGlyZWN0TGluZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZ3JhbW1hcnM6IHBhdGNoZWRHcmFtbWFycyxcbiAgICAgIGdyb3VwVGltZXN0YW1wLFxuICAgICAgcmVuZGVyTWFya2Rvd24sXG4gICAgICBzY3JvbGxUb0VuZCxcbiAgICAgIHNlbGVjdFZvaWNlOiBwYXRjaGVkU2VsZWN0Vm9pY2UsXG4gICAgICBzZW5kQm94UmVmLFxuICAgICAgc2VuZFRpbWVvdXQsXG4gICAgICBzZW5kVHlwaW5nSW5kaWNhdG9yOiBwYXRjaGVkU2VuZFR5cGluZ0luZGljYXRvcixcbiAgICAgIHN0eWxlT3B0aW9uczogcGF0Y2hlZFN0eWxlT3B0aW9ucyxcbiAgICAgIHN0eWxlU2V0OiBwYXRjaGVkU3R5bGVTZXQsXG4gICAgICB1c2VySUQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIHdlYlNwZWVjaFBvbnlmaWxsXG4gICAgfSksXG4gICAgW1xuICAgICAgYWN0aXZpdHlSZW5kZXJlcixcbiAgICAgIGF0dGFjaG1lbnRSZW5kZXJlcixcbiAgICAgIGNhcmRBY3Rpb25Db250ZXh0LFxuICAgICAgZGlyZWN0TGluZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZm9jdXNTZW5kQm94Q29udGV4dCxcbiAgICAgIGdyb3VwVGltZXN0YW1wLFxuICAgICAgaG9pc3RlZERpc3BhdGNoZXJzLFxuICAgICAgcGF0Y2hlZEdyYW1tYXJzLFxuICAgICAgcGF0Y2hlZFNlbGVjdFZvaWNlLFxuICAgICAgcGF0Y2hlZFNlbmRUeXBpbmdJbmRpY2F0b3IsXG4gICAgICBwYXRjaGVkU3R5bGVPcHRpb25zLFxuICAgICAgcGF0Y2hlZFN0eWxlU2V0LFxuICAgICAgcmVuZGVyTWFya2Rvd24sXG4gICAgICBzY3JvbGxUb0VuZCxcbiAgICAgIHNlbmRCb3hSZWYsXG4gICAgICBzZW5kVGltZW91dCxcbiAgICAgIHVzZXJJRCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgd2ViU3BlZWNoUG9ueWZpbGxcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oY29udGV4dCkgOiBjaGlsZHJlbn1cbiAgICAgIDxEaWN0YXRpb24gLz5cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyBUT0RPOiBbUDFdIFdoZW4gcmVhY3QtcmVkdXggc3VwcG9ydCB1c2VTZWxlY3RvciB3aXRoIGN1c3RvbSBjb250ZXh0LCB3ZSBzaG91bGQgbW92ZSB0byB0aGF0IGFyY2hpdGVjdHVyZSB0byBzaW1wbGlmeSBvdXIgY29kZS5cbmNvbnN0IENvbm5lY3RlZENvbXBvc2VyID0gY29ubmVjdChcbiAgKHsgcmVmZXJlbmNlR3JhbW1hcklEIH0pID0+ICh7IHJlZmVyZW5jZUdyYW1tYXJJRCB9KSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgeyBjb250ZXh0OiBXZWJDaGF0UmVkdXhDb250ZXh0IH1cbikocHJvcHMgPT4gKFxuICA8U2Nyb2xsVG9Cb3R0b21Db21wb3Nlcj5cbiAgICA8U2Nyb2xsVG9Cb3R0b21GdW5jdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KHsgc2Nyb2xsVG9FbmQgfSkgPT4gPENvbXBvc2VyIHNjcm9sbFRvRW5kPXtzY3JvbGxUb0VuZH0gey4uLnByb3BzfSAvPn1cbiAgICA8L1Njcm9sbFRvQm90dG9tRnVuY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICA8L1Njcm9sbFRvQm90dG9tQ29tcG9zZXI+XG4pKTtcblxuLy8gV2Ugd2lsbCBjcmVhdGUgYSBSZWR1eCBzdG9yZSBpZiBpdCB3YXMgbm90IHBhc3NlZCBpblxuY29uc3QgQ29ubmVjdGVkQ29tcG9zZXJXaXRoU3RvcmUgPSAoeyBzdG9yZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBtZW1vaXplZFN0b3JlID0gdXNlTWVtbygoKSA9PiBzdG9yZSB8fCBjcmVhdGVTdG9yZSgpLCBbc3RvcmVdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBjb250ZXh0PXtXZWJDaGF0UmVkdXhDb250ZXh0fSBzdG9yZT17bWVtb2l6ZWRTdG9yZX0+XG4gICAgICA8Q29ubmVjdGVkQ29tcG9zZXIgey4uLnByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5Db25uZWN0ZWRDb21wb3NlcldpdGhTdG9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0b3JlOiB1bmRlZmluZWRcbn07XG5cbkNvbm5lY3RlZENvbXBvc2VyV2l0aFN0b3JlLnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5hbnlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZENvbXBvc2VyV2l0aFN0b3JlO1xuXG4vLyBUT0RPOiBbUDNdIFdlIHNob3VsZCBjb25zaWRlciBtb3Zpbmcgc29tZSBkYXRhIGZyb20gUmVkdXggc3RvcmUgdG8gcHJvcHNcbi8vICAgICAgIEFsdGhvdWdoIHdlIHVzZSBgY29ubmVjdFRvV2ViQ2hhdGAgdG8gaGlkZSB0aGUgZGV0YWlscyBvZiBhY2Nlc3NvciBvZiBSZWR1eCBzdG9yZSxcbi8vICAgICAgIHdlIHNob3VsZCBjbGVhbiB1cCB0aGUgcmVzcG9uc2liaWxpdHkgYmV0d2VlbiBDb250ZXh0IGFuZCBSZWR1eCBzdG9yZVxuLy8gICAgICAgV2Ugc2hvdWxkIGRlY2lkZSB3aGljaCBkYXRhIGlzIG5lZWRlZCBmb3IgUmVhY3QgYnV0IG5vdCBpbiBvdGhlciBlbnZpcm9ubWVudCBzdWNoIGFzIENMSS9WU0NvZGVcblxuQ29tcG9zZXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3Rpdml0eVJlbmRlcmVyOiB1bmRlZmluZWQsXG4gIGF0dGFjaG1lbnRSZW5kZXJlcjogdW5kZWZpbmVkLFxuICBib3RBdmF0YXJJbml0aWFsczogdW5kZWZpbmVkLFxuICBjYXJkQWN0aW9uTWlkZGxld2FyZTogdW5kZWZpbmVkLFxuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGdyYW1tYXJzOiBbXSxcbiAgZ3JvdXBUaW1lc3RhbXA6IHRydWUsXG4gIGxvY2FsZTogd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCAnZW4tVVMnLFxuICByZWZlcmVuY2VHcmFtbWFySUQ6ICcnLFxuICByZW5kZXJNYXJrZG93bjogdGV4dCA9PiB0ZXh0LFxuICBzZWxlY3RWb2ljZTogdW5kZWZpbmVkLFxuICBzZW5kQm94UmVmOiB1bmRlZmluZWQsXG4gIHNlbmRUaW1lb3V0OiAyMDAwMCxcbiAgc2VuZFR5cGluZzogdW5kZWZpbmVkLFxuICBzZW5kVHlwaW5nSW5kaWNhdG9yOiBmYWxzZSxcbiAgc3R5bGVPcHRpb25zOiB7fSxcbiAgc3R5bGVTZXQ6IHVuZGVmaW5lZCxcbiAgdXNlckF2YXRhckluaXRpYWxzOiB1bmRlZmluZWQsXG4gIHVzZXJJRDogJycsXG4gIHVzZXJuYW1lOiAnJyxcbiAgd2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5OiB1bmRlZmluZWRcbn07XG5cbkNvbXBvc2VyLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHlSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGF0dGFjaG1lbnRSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGJvdEF2YXRhckluaXRpYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXJkQWN0aW9uTWlkZGxld2FyZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBkaXJlY3RMaW5lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjdGl2aXR5JDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgY29ubmVjdGlvblN0YXR1cyQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0U2Vzc2lvbklkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBvc3RBY3Rpdml0eTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZWZlcmVuY2VHcmFtbWFySUQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9rZW46IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ3JhbW1hcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBncm91cFRpbWVzdGFtcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZWZlcmVuY2VHcmFtbWFySUQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlbmRlck1hcmtkb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2Nyb2xsVG9FbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdFZvaWNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VuZEJveFJlZjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pLFxuICBzZW5kVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VuZFR5cGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbmRUeXBpbmdJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZU9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuYW55LFxuICB1c2VyQXZhdGFySW5pdGlhbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJJRDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeTogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXX0=
