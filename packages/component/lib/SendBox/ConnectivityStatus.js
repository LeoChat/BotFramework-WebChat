'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ErrorNotificationIcon = _interopRequireDefault(require('../Attachment/Assets/ErrorNotificationIcon'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _SpinnerAnimation = _interopRequireDefault(require('../Attachment/Assets/SpinnerAnimation'));

var _WarningNotificationIcon = _interopRequireDefault(require('../Attachment/Assets/WarningNotificationIcon'));

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
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

var CONNECTIVITY_STATUS_DEBOUNCE = 400;

var DebouncedConnectivityStatus = function DebouncedConnectivityStatus(_ref) {
  var interval = _ref.interval,
    propsChildren = _ref.children;

  var _useState = (0, _react.useState)(propsChildren),
    _useState2 = _slicedToArray(_useState, 2),
    children = _useState2[0],
    setChildren = _useState2[1];

  var _useState3 = (0, _react.useState)(Date.now()),
    _useState4 = _slicedToArray(_useState3, 2),
    since = _useState4[0],
    setSince = _useState4[1];

  (0, _react.useEffect)(
    function() {
      var timeout = setTimeout(function() {
        setChildren(propsChildren);
        setSince(Date.now());
      }, Math.max(0, interval - Date.now() + since));
      return function() {
        return clearTimeout(timeout);
      };
    },
    [interval, propsChildren, setChildren, setSince, since]
  );
  return typeof children === 'function' ? children() : false;
};

DebouncedConnectivityStatus.defaultProps = {
  children: undefined
};
DebouncedConnectivityStatus.propTypes = {
  children: _propTypes.default.any,
  interval: _propTypes.default.number.isRequired
};

var connectConnectivityStatus = function connectConnectivityStatus() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref2) {
        var connectivityStatus = _ref2.connectivityStatus,
          language = _ref2.language;
        return {
          connectivityStatus: connectivityStatus,
          language: language
        };
      }
    ].concat(selectors)
  );
};

var ConnectivityStatus = function ConnectivityStatus(_ref3) {
  var connectivityStatus = _ref3.connectivityStatus,
    language = _ref3.language,
    styleSet = _ref3.styleSet;
  var renderConnectingSlow = (0, _react.useCallback)(
    function() {
      var localizedText = (0, _Localize.localize)('SLOW_CONNECTION_NOTIFICATION', language);
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: localizedText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: styleSet.warningNotification
          },
          _react.default.createElement(_WarningNotificationIcon.default, null),
          localizedText
        )
      );
    },
    [language, styleSet.warningNotification]
  );
  var renderNotConnected = (0, _react.useCallback)(
    function() {
      var localizedText = (0, _Localize.localize)('FAILED_CONNECTION_NOTIFICATION', language);
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: localizedText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: styleSet.errorNotification
          },
          _react.default.createElement(_ErrorNotificationIcon.default, null),
          localizedText
        )
      );
    },
    [language, styleSet.errorNotification]
  );
  var renderUninitialized = (0, _react.useCallback)(
    function() {
      var localizedText = (0, _Localize.localize)('INITIAL_CONNECTION_NOTIFICATION', language);
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: localizedText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: styleSet.connectivityNotification
          },
          _react.default.createElement(_SpinnerAnimation.default, null),
          localizedText
        )
      );
    },
    [language, styleSet.connectivityNotification]
  );
  var renderReconnecting = (0, _react.useCallback)(
    function() {
      var localizedText = (0, _Localize.localize)('INTERRUPTED_CONNECTION_NOTIFICATION', language);
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: localizedText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: styleSet.connectivityNotification
          },
          _react.default.createElement(_SpinnerAnimation.default, null),
          localizedText
        )
      );
    },
    [language, styleSet.connectivityNotification]
  );
  var renderSagaError = (0, _react.useCallback)(
    function() {
      var localizedText = (0, _Localize.localize)('RENDER_ERROR_NOTIFICATION', language);
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: localizedText
        }),
        _react.default.createElement(
          'div',
          {
            className: styleSet.errorNotification
          },
          _react.default.createElement(_ErrorNotificationIcon.default, null),
          localizedText
        )
      );
    },
    [language, styleSet.errorNotification]
  );
  var renderEmptyStatus = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(_ScreenReaderText.default, {
        text: (0, _Localize.localize)('CONNECTED_NOTIFICATION', language)
      });
    },
    [language]
  );
  var renderStatus = (0, _react.useCallback)(
    function() {
      if (connectivityStatus === 'connectingslow') {
        return renderConnectingSlow;
      } else if (connectivityStatus === 'error' || connectivityStatus === 'notconnected') {
        return renderNotConnected;
      } else if (connectivityStatus === 'uninitialized') {
        return renderUninitialized;
      } else if (connectivityStatus === 'reconnecting') {
        return renderReconnecting;
      } else if (connectivityStatus === 'sagaerror') {
        return renderSagaError;
      }

      return renderEmptyStatus;
    },
    [
      connectivityStatus,
      renderConnectingSlow,
      renderEmptyStatus,
      renderNotConnected,
      renderReconnecting,
      renderSagaError,
      renderUninitialized
    ]
  );
  return _react.default.createElement(
    'div',
    {
      'aria-atomic': 'false',
      'aria-live': 'polite',
      role: 'status'
    },
    _react.default.createElement(
      DebouncedConnectivityStatus,
      {
        interval:
          connectivityStatus === 'uninitialized' || connectivityStatus === 'error' ? 0 : CONNECTIVITY_STATUS_DEBOUNCE
      },
      renderStatus
    )
  );
};

ConnectivityStatus.propTypes = {
  connectivityStatus: _propTypes.default.string.isRequired,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    connectivityNotification: _propTypes.default.any.isRequired,
    errorNotification: _propTypes.default.any.isRequired,
    warningNotification: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = connectConnectivityStatus(function(_ref4) {
  var styleSet = _ref4.styleSet;
  return {
    styleSet: styleSet
  };
})(ConnectivityStatus);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0Nvbm5lY3Rpdml0eVN0YXR1cy5qcyJdLCJuYW1lcyI6WyJDT05ORUNUSVZJVFlfU1RBVFVTX0RFQk9VTkNFIiwiRGVib3VuY2VkQ29ubmVjdGl2aXR5U3RhdHVzIiwiaW50ZXJ2YWwiLCJwcm9wc0NoaWxkcmVuIiwiY2hpbGRyZW4iLCJzZXRDaGlsZHJlbiIsIkRhdGUiLCJub3ciLCJzaW5jZSIsInNldFNpbmNlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJNYXRoIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImNvbm5lY3RDb25uZWN0aXZpdHlTdGF0dXMiLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwiY29ubmVjdGl2aXR5U3RhdHVzIiwibGFuZ3VhZ2UiLCJDb25uZWN0aXZpdHlTdGF0dXMiLCJzdHlsZVNldCIsInJlbmRlckNvbm5lY3RpbmdTbG93IiwibG9jYWxpemVkVGV4dCIsIndhcm5pbmdOb3RpZmljYXRpb24iLCJyZW5kZXJOb3RDb25uZWN0ZWQiLCJlcnJvck5vdGlmaWNhdGlvbiIsInJlbmRlclVuaW5pdGlhbGl6ZWQiLCJjb25uZWN0aXZpdHlOb3RpZmljYXRpb24iLCJyZW5kZXJSZWNvbm5lY3RpbmciLCJyZW5kZXJTYWdhRXJyb3IiLCJyZW5kZXJFbXB0eVN0YXR1cyIsInJlbmRlclN0YXR1cyIsInN0cmluZyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsNEJBQTRCLEdBQUcsR0FBckM7O0FBRUEsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixPQUEyQztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7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bkM7QUFBNEMsSUFBQSxJQUFJLEVBQUM7QUFBakQsS0FDRSw2QkFBQywyQkFBRDtBQUNFLElBQUEsUUFBUSxFQUNOVCxrQkFBa0IsS0FBSyxlQUF2QixJQUEwQ0Esa0JBQWtCLEtBQUssT0FBakUsR0FBMkUsQ0FBM0UsR0FBK0V6QjtBQUZuRixLQUtHdUMsWUFMSCxDQURGLENBREY7QUFXRCxDQTlHRDs7QUFnSEFaLGtCQUFrQixDQUFDVixTQUFuQixHQUErQjtBQUM3QlEsRUFBQUEsa0JBQWtCLEVBQUVQLG1CQUFVc0IsTUFBVixDQUFpQm5CLFVBRFI7QUFFN0JLLEVBQUFBLFFBQVEsRUFBRVIsbUJBQVVzQixNQUFWLENBQWlCbkIsVUFGRTtBQUc3Qk8sRUFBQUEsUUFBUSxFQUFFVixtQkFBVXVCLEtBQVYsQ0FBZ0I7QUFDeEJOLElBQUFBLHdCQUF3QixFQUFFakIsbUJBQVVDLEdBQVYsQ0FBY0UsVUFEaEI7QUFFeEJZLElBQUFBLGlCQUFpQixFQUFFZixtQkFBVUMsR0FBVixDQUFjRSxVQUZUO0FBR3hCVSxJQUFBQSxtQkFBbUIsRUFBRWIsbUJBQVVDLEdBQVYsQ0FBY0U7QUFIWCxHQUFoQixFQUlQQTtBQVAwQixDQUEvQjs7ZUFVZUMseUJBQXlCLENBQUM7QUFBQSxNQUFHTSxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFELENBQXpCLENBQTRERCxrQkFBNUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnLi4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IEVycm9yTm90aWZpY2F0aW9uSWNvbiBmcm9tICcuLi9BdHRhY2htZW50L0Fzc2V0cy9FcnJvck5vdGlmaWNhdGlvbkljb24nO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5pbXBvcnQgU3Bpbm5lckFuaW1hdGlvbiBmcm9tICcuLi9BdHRhY2htZW50L0Fzc2V0cy9TcGlubmVyQW5pbWF0aW9uJztcbmltcG9ydCBXYXJuaW5nTm90aWZpY2F0aW9uSWNvbiBmcm9tICcuLi9BdHRhY2htZW50L0Fzc2V0cy9XYXJuaW5nTm90aWZpY2F0aW9uSWNvbic7XG5cbmNvbnN0IENPTk5FQ1RJVklUWV9TVEFUVVNfREVCT1VOQ0UgPSA0MDA7XG5cbmNvbnN0IERlYm91bmNlZENvbm5lY3Rpdml0eVN0YXR1cyA9ICh7IGludGVydmFsLCBjaGlsZHJlbjogcHJvcHNDaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtjaGlsZHJlbiwgc2V0Q2hpbGRyZW5dID0gdXNlU3RhdGUocHJvcHNDaGlsZHJlbik7XG4gIGNvbnN0IFtzaW5jZSwgc2V0U2luY2VdID0gdXNlU3RhdGUoRGF0ZS5ub3coKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDaGlsZHJlbihwcm9wc0NoaWxkcmVuKTtcbiAgICAgIHNldFNpbmNlKERhdGUubm93KCkpO1xuICAgIH0sIE1hdGgubWF4KDAsIGludGVydmFsIC0gRGF0ZS5ub3coKSArIHNpbmNlKSk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LCBbaW50ZXJ2YWwsIHByb3BzQ2hpbGRyZW4sIHNldENoaWxkcmVuLCBzZXRTaW5jZSwgc2luY2VdKTtcblxuICByZXR1cm4gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oKSA6IGZhbHNlO1xufTtcblxuRGVib3VuY2VkQ29ubmVjdGl2aXR5U3RhdHVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZFxufTtcblxuRGVib3VuY2VkQ29ubmVjdGl2aXR5U3RhdHVzLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IGNvbm5lY3RDb25uZWN0aXZpdHlTdGF0dXMgPSAoLi4uc2VsZWN0b3JzKSA9PlxuICBjb25uZWN0VG9XZWJDaGF0KCh7IGNvbm5lY3Rpdml0eVN0YXR1cywgbGFuZ3VhZ2UgfSkgPT4gKHsgY29ubmVjdGl2aXR5U3RhdHVzLCBsYW5ndWFnZSB9KSwgLi4uc2VsZWN0b3JzKTtcblxuY29uc3QgQ29ubmVjdGl2aXR5U3RhdHVzID0gKHsgY29ubmVjdGl2aXR5U3RhdHVzLCBsYW5ndWFnZSwgc3R5bGVTZXQgfSkgPT4ge1xuICBjb25zdCByZW5kZXJDb25uZWN0aW5nU2xvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBsb2NhbGl6ZWRUZXh0ID0gbG9jYWxpemUoJ1NMT1dfQ09OTkVDVElPTl9OT1RJRklDQVRJT04nLCBsYW5ndWFnZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtsb2NhbGl6ZWRUZXh0fSAvPlxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlU2V0Lndhcm5pbmdOb3RpZmljYXRpb259PlxuICAgICAgICAgIDxXYXJuaW5nTm90aWZpY2F0aW9uSWNvbiAvPlxuICAgICAgICAgIHtsb2NhbGl6ZWRUZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfSwgW2xhbmd1YWdlLCBzdHlsZVNldC53YXJuaW5nTm90aWZpY2F0aW9uXSk7XG5cbiAgY29uc3QgcmVuZGVyTm90Q29ubmVjdGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsaXplZFRleHQgPSBsb2NhbGl6ZSgnRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OJywgbGFuZ3VhZ2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemVkVGV4dH0gLz5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZVNldC5lcnJvck5vdGlmaWNhdGlvbn0+XG4gICAgICAgICAgPEVycm9yTm90aWZpY2F0aW9uSWNvbiAvPlxuICAgICAgICAgIHtsb2NhbGl6ZWRUZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfSwgW2xhbmd1YWdlLCBzdHlsZVNldC5lcnJvck5vdGlmaWNhdGlvbl0pO1xuXG4gIGNvbnN0IHJlbmRlclVuaW5pdGlhbGl6ZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbG9jYWxpemVkVGV4dCA9IGxvY2FsaXplKCdJTklUSUFMX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OJywgbGFuZ3VhZ2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemVkVGV4dH0gLz5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZVNldC5jb25uZWN0aXZpdHlOb3RpZmljYXRpb259PlxuICAgICAgICAgIDxTcGlubmVyQW5pbWF0aW9uIC8+XG4gICAgICAgICAge2xvY2FsaXplZFRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9LCBbbGFuZ3VhZ2UsIHN0eWxlU2V0LmNvbm5lY3Rpdml0eU5vdGlmaWNhdGlvbl0pO1xuXG4gIGNvbnN0IHJlbmRlclJlY29ubmVjdGluZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBsb2NhbGl6ZWRUZXh0ID0gbG9jYWxpemUoJ0lOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OJywgbGFuZ3VhZ2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17bG9jYWxpemVkVGV4dH0gLz5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZVNldC5jb25uZWN0aXZpdHlOb3RpZmljYXRpb259PlxuICAgICAgICAgIDxTcGlubmVyQW5pbWF0aW9uIC8+XG4gICAgICAgICAge2xvY2FsaXplZFRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9LCBbbGFuZ3VhZ2UsIHN0eWxlU2V0LmNvbm5lY3Rpdml0eU5vdGlmaWNhdGlvbl0pO1xuXG4gIGNvbnN0IHJlbmRlclNhZ2FFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBsb2NhbGl6ZWRUZXh0ID0gbG9jYWxpemUoJ1JFTkRFUl9FUlJPUl9OT1RJRklDQVRJT04nLCBsYW5ndWFnZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtsb2NhbGl6ZWRUZXh0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVTZXQuZXJyb3JOb3RpZmljYXRpb259PlxuICAgICAgICAgIDxFcnJvck5vdGlmaWNhdGlvbkljb24gLz5cbiAgICAgICAgICB7bG9jYWxpemVkVGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH0sIFtsYW5ndWFnZSwgc3R5bGVTZXQuZXJyb3JOb3RpZmljYXRpb25dKTtcblxuICBjb25zdCByZW5kZXJFbXB0eVN0YXR1cyA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2xvY2FsaXplKCdDT05ORUNURURfTk9USUZJQ0FUSU9OJywgbGFuZ3VhZ2UpfSAvPixcbiAgICBbbGFuZ3VhZ2VdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyU3RhdHVzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChjb25uZWN0aXZpdHlTdGF0dXMgPT09ICdjb25uZWN0aW5nc2xvdycpIHtcbiAgICAgIHJldHVybiByZW5kZXJDb25uZWN0aW5nU2xvdztcbiAgICB9IGVsc2UgaWYgKGNvbm5lY3Rpdml0eVN0YXR1cyA9PT0gJ2Vycm9yJyB8fCBjb25uZWN0aXZpdHlTdGF0dXMgPT09ICdub3Rjb25uZWN0ZWQnKSB7XG4gICAgICByZXR1cm4gcmVuZGVyTm90Q29ubmVjdGVkO1xuICAgIH0gZWxzZSBpZiAoY29ubmVjdGl2aXR5U3RhdHVzID09PSAndW5pbml0aWFsaXplZCcpIHtcbiAgICAgIHJldHVybiByZW5kZXJVbmluaXRpYWxpemVkO1xuICAgIH0gZWxzZSBpZiAoY29ubmVjdGl2aXR5U3RhdHVzID09PSAncmVjb25uZWN0aW5nJykge1xuICAgICAgcmV0dXJuIHJlbmRlclJlY29ubmVjdGluZztcbiAgICB9IGVsc2UgaWYgKGNvbm5lY3Rpdml0eVN0YXR1cyA9PT0gJ3NhZ2FlcnJvcicpIHtcbiAgICAgIHJldHVybiByZW5kZXJTYWdhRXJyb3I7XG4gICAgfVxuICAgIHJldHVybiByZW5kZXJFbXB0eVN0YXR1cztcbiAgfSwgW1xuICAgIGNvbm5lY3Rpdml0eVN0YXR1cyxcbiAgICByZW5kZXJDb25uZWN0aW5nU2xvdyxcbiAgICByZW5kZXJFbXB0eVN0YXR1cyxcbiAgICByZW5kZXJOb3RDb25uZWN0ZWQsXG4gICAgcmVuZGVyUmVjb25uZWN0aW5nLFxuICAgIHJlbmRlclNhZ2FFcnJvcixcbiAgICByZW5kZXJVbmluaXRpYWxpemVkXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBhcmlhLWF0b21pYz1cImZhbHNlXCIgYXJpYS1saXZlPVwicG9saXRlXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPERlYm91bmNlZENvbm5lY3Rpdml0eVN0YXR1c1xuICAgICAgICBpbnRlcnZhbD17XG4gICAgICAgICAgY29ubmVjdGl2aXR5U3RhdHVzID09PSAndW5pbml0aWFsaXplZCcgfHwgY29ubmVjdGl2aXR5U3RhdHVzID09PSAnZXJyb3InID8gMCA6IENPTk5FQ1RJVklUWV9TVEFUVVNfREVCT1VOQ0VcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVyU3RhdHVzfVxuICAgICAgPC9EZWJvdW5jZWRDb25uZWN0aXZpdHlTdGF0dXM+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db25uZWN0aXZpdHlTdGF0dXMucHJvcFR5cGVzID0ge1xuICBjb25uZWN0aXZpdHlTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29ubmVjdGl2aXR5Tm90aWZpY2F0aW9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgZXJyb3JOb3RpZmljYXRpb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICB3YXJuaW5nTm90aWZpY2F0aW9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdENvbm5lY3Rpdml0eVN0YXR1cygoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoQ29ubmVjdGl2aXR5U3RhdHVzKTtcbiJdfQ==
