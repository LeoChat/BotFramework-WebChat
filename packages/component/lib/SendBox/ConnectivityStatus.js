'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ErrorNotificationIcon = _interopRequireDefault(require('../Attachment/Assets/ErrorNotificationIcon'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _SpinnerAnimation = _interopRequireDefault(require('../Attachment/Assets/SpinnerAnimation'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

var _WarningNotificationIcon = _interopRequireDefault(require('../Attachment/Assets/WarningNotificationIcon'));

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

var CONNECTIVITY_STATUS_DEBOUNCE = 400;

function setTimeoutSync(fn, interval) {
  if (interval > 0) {
    return setTimeout(fn, interval);
  }

  fn();
}

var DebouncedConnectivityStatus = function DebouncedConnectivityStatus(_ref) {
  var interval = _ref.interval,
    propsChildren = _ref.children;

  var _useState = (0, _react.useState)(function() {
      return propsChildren;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    children = _useState2[0],
    setChildren = _useState2[1];

  var _useState3 = (0, _react.useState)(Date.now()),
    _useState4 = _slicedToArray(_useState3, 2),
    since = _useState4[0],
    setSince = _useState4[1];

  var intervalBeforeSwitch = Math.max(0, interval - Date.now() + since);
  (0, _react.useEffect)(
    function() {
      if (children !== propsChildren) {
        var timeout = setTimeoutSync(function() {
          setChildren(function() {
            return propsChildren;
          });
          setSince(Date.now());
        }, intervalBeforeSwitch);
        return function() {
          return clearTimeout(timeout);
        };
      }
    },
    [children, intervalBeforeSwitch, propsChildren]
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
  var connectivityStatus = _ref3.connectivityStatus;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    _useStyleSet2$ = _useStyleSet2[0],
    connectivityNotificationStyleSet = _useStyleSet2$.connectivityNotification,
    errorNotificationStyleSet = _useStyleSet2$.errorNotification,
    warningNotificationStyleSet = _useStyleSet2$.warningNotification;

  var connectedNotificationText = (0, _useLocalize.default)('CONNECTED_NOTIFICATION');
  var failedConnectionText = (0, _useLocalize.default)('FAILED_CONNECTION_NOTIFICATION');
  var initialConnectionText = (0, _useLocalize.default)('INITIAL_CONNECTION_NOTIFICATION');
  var interruptedConnectionText = (0, _useLocalize.default)('INTERRUPTED_CONNECTION_NOTIFICATION');
  var renderErrorNotificationText = (0, _useLocalize.default)('RENDER_ERROR_NOTIFICATION');
  var slowConnectionText = (0, _useLocalize.default)('SLOW_CONNECTION_NOTIFICATION');
  var renderConnectingSlow = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: slowConnectionText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: warningNotificationStyleSet
          },
          _react.default.createElement(_WarningNotificationIcon.default, null),
          slowConnectionText
        )
      );
    },
    [slowConnectionText, warningNotificationStyleSet]
  );
  var renderNotConnected = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: failedConnectionText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: errorNotificationStyleSet
          },
          _react.default.createElement(_ErrorNotificationIcon.default, null),
          failedConnectionText
        )
      );
    },
    [errorNotificationStyleSet, failedConnectionText]
  );
  var renderUninitialized = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: initialConnectionText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: connectivityNotificationStyleSet
          },
          _react.default.createElement(_SpinnerAnimation.default, null),
          initialConnectionText
        )
      );
    },
    [connectivityNotificationStyleSet, initialConnectionText]
  );
  var renderReconnecting = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: interruptedConnectionText
        }),
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: connectivityNotificationStyleSet
          },
          _react.default.createElement(_SpinnerAnimation.default, null),
          interruptedConnectionText
        )
      );
    },
    [connectivityNotificationStyleSet, interruptedConnectionText]
  );
  var renderSagaError = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: renderErrorNotificationText
        }),
        _react.default.createElement(
          'div',
          {
            className: errorNotificationStyleSet
          },
          _react.default.createElement(_ErrorNotificationIcon.default, null),
          renderErrorNotificationText
        )
      );
    },
    [errorNotificationStyleSet, renderErrorNotificationText]
  );
  var renderEmptyStatus = (0, _react.useCallback)(
    function() {
      return _react.default.createElement(_ScreenReaderText.default, {
        text: connectedNotificationText
      });
    },
    [connectedNotificationText]
  );
  var renderStatus = (0, _react.useCallback)(
    function() {
      if (connectivityStatus === 'connectingslow') {
        return renderConnectingSlow();
      } else if (connectivityStatus === 'error' || connectivityStatus === 'notconnected') {
        return renderNotConnected();
      } else if (connectivityStatus === 'uninitialized') {
        return renderUninitialized();
      } else if (connectivityStatus === 'reconnecting') {
        return renderReconnecting();
      } else if (connectivityStatus === 'sagaerror') {
        return renderSagaError();
      }

      return renderEmptyStatus();
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
  connectivityStatus: _propTypes.default.string.isRequired
};

var _default = connectConnectivityStatus()(ConnectivityStatus);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0Nvbm5lY3Rpdml0eVN0YXR1cy5qcyJdLCJuYW1lcyI6WyJDT05ORUNUSVZJVFlfU1RBVFVTX0RFQk9VTkNFIiwic2V0VGltZW91dFN5bmMiLCJmbiIsImludGVydmFsIiwic2V0VGltZW91dCIsIkRlYm91bmNlZENvbm5lY3Rpdml0eVN0YXR1cyIsInByb3BzQ2hpbGRyZW4iLCJjaGlsZHJlbiIsInNldENoaWxkcmVuIiwiRGF0ZSIsIm5vdyIsInNpbmNlIiwic2V0U2luY2UiLCJpbnRlcnZhbEJlZm9yZVN3aXRjaCIsIk1hdGgiLCJtYXgiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImNvbm5lY3RDb25uZWN0aXZpdHlTdGF0dXMiLCJzZWxlY3RvcnMiLCJjb25uZWN0VG9XZWJDaGF0IiwiY29ubmVjdGl2aXR5U3RhdHVzIiwibGFuZ3VhZ2UiLCJDb25uZWN0aXZpdHlTdGF0dXMiLCJjb25uZWN0aXZpdHlOb3RpZmljYXRpb25TdHlsZVNldCIsImNvbm5lY3Rpdml0eU5vdGlmaWNhdGlvbiIsImVycm9yTm90aWZpY2F0aW9uU3R5bGVTZXQiLCJlcnJvck5vdGlmaWNhdGlvbiIsIndhcm5pbmdOb3RpZmljYXRpb25TdHlsZVNldCIsIndhcm5pbmdOb3RpZmljYXRpb24iLCJjb25uZWN0ZWROb3RpZmljYXRpb25UZXh0IiwiZmFpbGVkQ29ubmVjdGlvblRleHQiLCJpbml0aWFsQ29ubmVjdGlvblRleHQiLCJpbnRlcnJ1cHRlZENvbm5lY3Rpb25UZXh0IiwicmVuZGVyRXJyb3JOb3RpZmljYXRpb25UZXh0Iiwic2xvd0Nvbm5lY3Rpb25UZXh0IiwicmVuZGVyQ29ubmVjdGluZ1Nsb3ciLCJyZW5kZXJOb3RDb25uZWN0ZWQiLCJyZW5kZXJVbmluaXRpYWxpemVkIiwicmVuZGVyUmVjb25uZWN0aW5nIiwicmVuZGVyU2FnYUVycm9yIiwicmVuZGVyRW1wdHlTdGF0dXMiLCJyZW5kZXJTdGF0dXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLDRCQUE0QixHQUFHLEdBQXJDOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLEVBQXhCLEVBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxNQUFJQSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixXQUFPQyxVQUFVLENBQUNGLEVBQUQsRUFBS0MsUUFBTCxDQUFqQjtBQUNEOztBQUVERCxFQUFBQSxFQUFFO0FBQ0g7O0FBRUQsSUFBTUcsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixPQUEyQztBQUFBLE1BQXhDRixRQUF3QyxRQUF4Q0EsUUFBd0M7QUFBQSxNQUFwQkcsYUFBb0IsUUFBOUJDLFFBQThCOztBQUFBLGtCQUM3QyxxQkFBUztBQUFBLFdBQU1ELGFBQU47QUFBQSxHQUFULENBRDZDO0FBQUE7QUFBQSxNQUN0RUMsUUFEc0U7QUFBQSxNQUM1REMsV0FENEQ7O0FBQUEsbUJBRW5ELHFCQUFTQyxJQUFJLENBQUNDLEdBQUwsRUFBVCxDQUZtRDtBQUFBO0FBQUEsTUFFdEVDLEtBRnNFO0FBQUEsTUFFL0RDLFFBRitEOztBQUk3RSxNQUFNQyxvQkFBb0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZWixRQUFRLEdBQUdNLElBQUksQ0FBQ0MsR0FBTCxFQUFYLEdBQXdCQyxLQUFwQyxDQUE3QjtBQUVBLHdCQUFVLFlBQU07QUFDZCxRQUFJSixRQUFRLEtBQUtELGFBQWpCLEVBQWdDO0FBQzlCLFVBQU1VLE9BQU8sR0FBR2YsY0FBYyxDQUFDLFlBQU07QUFDbkNPLFFBQUFBLFdBQVcsQ0FBQztBQUFBLGlCQUFNRixhQUFOO0FBQUEsU0FBRCxDQUFYO0FBQ0FNLFFBQUFBLFFBQVEs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a0JBQWtCLEtBQUssT0FBdkIsSUFBa0NBLGtCQUFrQixLQUFLLGNBQTdELEVBQTZFO0FBQ2xGLGFBQU9nQixrQkFBa0IsRUFBekI7QUFDRCxLQUZNLE1BRUEsSUFBSWhCLGtCQUFrQixLQUFLLGVBQTNCLEVBQTRDO0FBQ2pELGFBQU9pQixtQkFBbUIsRUFBMUI7QUFDRCxLQUZNLE1BRUEsSUFBSWpCLGtCQUFrQixLQUFLLGNBQTNCLEVBQTJDO0FBQ2hELGFBQU9rQixrQkFBa0IsRUFBekI7QUFDRCxLQUZNLE1BRUEsSUFBSWxCLGtCQUFrQixLQUFLLFdBQTNCLEVBQXdDO0FBQzdDLGFBQU9tQixlQUFlLEVBQXRCO0FBQ0Q7O0FBRUQsV0FBT0MsaUJBQWlCLEVBQXhCO0FBQ0QsR0Fkb0IsRUFjbEIsQ0FDRHBCLGtCQURDLEVBRURlLG9CQUZDLEVBR0RLLGlCQUhDLEVBSURKLGtCQUpDLEVBS0RFLGtCQUxDLEVBTURDLGVBTkMsRUFPREYsbUJBUEMsQ0Fka0IsQ0FBckI7QUF3QkEsU0FDRTtBQUFLLG1CQUFZLE9BQWpCO0FBQXlCLGlCQUFVLFFBQW5DO0FBQTRDLElBQUEsSUFBSSxFQUFDO0FBQWpELEtBQ0UsNkJBQUMsMkJBQUQ7QUFDRSxJQUFBLFFBQVEsRUFDTmpCLGtCQUFrQixLQUFLLGVBQXZCLElBQTBDQSxrQkFBa0IsS0FBSyxPQUFqRSxHQUEyRSxDQUEzRSxHQUErRTVCO0FBRm5GLEtBS0dpRCxZQUxILENBREYsQ0FERjtBQVdELENBeEhEOztBQTBIQW5CLGtCQUFrQixDQUFDVixTQUFuQixHQUErQjtBQUM3QlEsRUFBQUEsa0JBQWtCLEVBQUVQLG1CQUFVNkIsTUFBVixDQUFpQjFCO0FBRFIsQ0FBL0I7O2VBSWVDLHlCQUF5QixHQUFHSyxrQkFBSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgRXJyb3JOb3RpZmljYXRpb25JY29uIGZyb20gJy4uL0F0dGFjaG1lbnQvQXNzZXRzL0Vycm9yTm90aWZpY2F0aW9uSWNvbic7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcbmltcG9ydCBTcGlubmVyQW5pbWF0aW9uIGZyb20gJy4uL0F0dGFjaG1lbnQvQXNzZXRzL1NwaW5uZXJBbmltYXRpb24nO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5pbXBvcnQgV2FybmluZ05vdGlmaWNhdGlvbkljb24gZnJvbSAnLi4vQXR0YWNobWVudC9Bc3NldHMvV2FybmluZ05vdGlmaWNhdGlvbkljb24nO1xuXG5jb25zdCBDT05ORUNUSVZJVFlfU1RBVFVTX0RFQk9VTkNFID0gNDAwO1xuXG5mdW5jdGlvbiBzZXRUaW1lb3V0U3luYyhmbiwgaW50ZXJ2YWwpIHtcbiAgaWYgKGludGVydmFsID4gMCkge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCBpbnRlcnZhbCk7XG4gIH1cblxuICBmbigpO1xufVxuXG5jb25zdCBEZWJvdW5jZWRDb25uZWN0aXZpdHlTdGF0dXMgPSAoeyBpbnRlcnZhbCwgY2hpbGRyZW46IHByb3BzQ2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY2hpbGRyZW4sIHNldENoaWxkcmVuXSA9IHVzZVN0YXRlKCgpID0+IHByb3BzQ2hpbGRyZW4pO1xuICBjb25zdCBbc2luY2UsIHNldFNpbmNlXSA9IHVzZVN0YXRlKERhdGUubm93KCkpO1xuXG4gIGNvbnN0IGludGVydmFsQmVmb3JlU3dpdGNoID0gTWF0aC5tYXgoMCwgaW50ZXJ2YWwgLSBEYXRlLm5vdygpICsgc2luY2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoaWxkcmVuICE9PSBwcm9wc0NoaWxkcmVuKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dFN5bmMoKCkgPT4ge1xuICAgICAgICBzZXRDaGlsZHJlbigoKSA9PiBwcm9wc0NoaWxkcmVuKTtcbiAgICAgICAgc2V0U2luY2UoRGF0ZS5ub3coKSk7XG4gICAgICB9LCBpbnRlcnZhbEJlZm9yZVN3aXRjaCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfVxuICB9LCBbY2hpbGRyZW4sIGludGVydmFsQmVmb3JlU3dpdGNoLCBwcm9wc0NoaWxkcmVuXSk7XG5cbiAgcmV0dXJuIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKCkgOiBmYWxzZTtcbn07XG5cbkRlYm91bmNlZENvbm5lY3Rpdml0eVN0YXR1cy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWRcbn07XG5cbkRlYm91bmNlZENvbm5lY3Rpdml0eVN0YXR1cy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBpbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBjb25uZWN0Q29ubmVjdGl2aXR5U3RhdHVzID0gKC4uLnNlbGVjdG9ycykgPT5cbiAgY29ubmVjdFRvV2ViQ2hhdCgoeyBjb25uZWN0aXZpdHlTdGF0dXMsIGxhbmd1YWdlIH0pID0+ICh7IGNvbm5lY3Rpdml0eVN0YXR1cywgbGFuZ3VhZ2UgfSksIC4uLnNlbGVjdG9ycyk7XG5cbmNvbnN0IENvbm5lY3Rpdml0eVN0YXR1cyA9ICh7IGNvbm5lY3Rpdml0eVN0YXR1cyB9KSA9PiB7XG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBjb25uZWN0aXZpdHlOb3RpZmljYXRpb246IGNvbm5lY3Rpdml0eU5vdGlmaWNhdGlvblN0eWxlU2V0LFxuICAgICAgZXJyb3JOb3RpZmljYXRpb246IGVycm9yTm90aWZpY2F0aW9uU3R5bGVTZXQsXG4gICAgICB3YXJuaW5nTm90aWZpY2F0aW9uOiB3YXJuaW5nTm90aWZpY2F0aW9uU3R5bGVTZXRcbiAgICB9XG4gIF0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIGNvbnN0IGNvbm5lY3RlZE5vdGlmaWNhdGlvblRleHQgPSB1c2VMb2NhbGl6ZSgnQ09OTkVDVEVEX05PVElGSUNBVElPTicpO1xuICBjb25zdCBmYWlsZWRDb25uZWN0aW9uVGV4dCA9IHVzZUxvY2FsaXplKCdGQUlMRURfQ09OTkVDVElPTl9OT1RJRklDQVRJT04nKTtcbiAgY29uc3QgaW5pdGlhbENvbm5lY3Rpb25UZXh0ID0gdXNlTG9jYWxpemUoJ0lOSVRJQUxfQ09OTkVDVElPTl9OT1RJRklDQVRJT04nKTtcbiAgY29uc3QgaW50ZXJydXB0ZWRDb25uZWN0aW9uVGV4dCA9IHVzZUxvY2FsaXplKCdJTlRFUlJVUFRFRF9DT05ORUNUSU9OX05PVElGSUNBVElPTicpO1xuICBjb25zdCByZW5kZXJFcnJvck5vdGlmaWNhdGlvblRleHQgPSB1c2VMb2NhbGl6ZSgnUkVOREVSX0VSUk9SX05PVElGSUNBVElPTicpO1xuICBjb25zdCBzbG93Q29ubmVjdGlvblRleHQgPSB1c2VMb2NhbGl6ZSgnU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTicpO1xuXG4gIGNvbnN0IHJlbmRlckNvbm5lY3RpbmdTbG93ID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtzbG93Q29ubmVjdGlvblRleHR9IC8+XG4gICAgICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17d2FybmluZ05vdGlmaWNhdGlvblN0eWxlU2V0fT5cbiAgICAgICAgICA8V2FybmluZ05vdGlmaWNhdGlvbkljb24gLz5cbiAgICAgICAgICB7c2xvd0Nvbm5lY3Rpb25UZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSxcbiAgICBbc2xvd0Nvbm5lY3Rpb25UZXh0LCB3YXJuaW5nTm90aWZpY2F0aW9uU3R5bGVTZXRdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyTm90Q29ubmVjdGVkID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtmYWlsZWRDb25uZWN0aW9uVGV4dH0gLz5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtlcnJvck5vdGlmaWNhdGlvblN0eWxlU2V0fT5cbiAgICAgICAgICA8RXJyb3JOb3RpZmljYXRpb25JY29uIC8+XG4gICAgICAgICAge2ZhaWxlZENvbm5lY3Rpb25UZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSxcbiAgICBbZXJyb3JOb3RpZmljYXRpb25TdHlsZVNldCwgZmFpbGVkQ29ubmVjdGlvblRleHRdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyVW5pbml0aWFsaXplZCA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17aW5pdGlhbENvbm5lY3Rpb25UZXh0fSAvPlxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPXt0cnVlfSBjbGFzc05hbWU9e2Nvbm5lY3Rpdml0eU5vdGlmaWNhdGlvblN0eWxlU2V0fT5cbiAgICAgICAgICA8U3Bpbm5lckFuaW1hdGlvbiAvPlxuICAgICAgICAgIHtpbml0aWFsQ29ubmVjdGlvblRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApLFxuICAgIFtjb25uZWN0aXZpdHlOb3RpZmljYXRpb25TdHlsZVNldCwgaW5pdGlhbENvbm5lY3Rpb25UZXh0XVxuICApO1xuXG4gIGNvbnN0IHJlbmRlclJlY29ubmVjdGluZyA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17aW50ZXJydXB0ZWRDb25uZWN0aW9uVGV4dH0gLz5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtjb25uZWN0aXZpdHlOb3RpZmljYXRpb25TdHlsZVNldH0+XG4gICAgICAgICAgPFNwaW5uZXJBbmltYXRpb24gLz5cbiAgICAgICAgICB7aW50ZXJydXB0ZWRDb25uZWN0aW9uVGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICksXG4gICAgW2Nvbm5lY3Rpdml0eU5vdGlmaWNhdGlvblN0eWxlU2V0LCBpbnRlcnJ1cHRlZENvbm5lY3Rpb25UZXh0XVxuICApO1xuXG4gIGNvbnN0IHJlbmRlclNhZ2FFcnJvciA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17cmVuZGVyRXJyb3JOb3RpZmljYXRpb25UZXh0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXJyb3JOb3RpZmljYXRpb25TdHlsZVNldH0+XG4gICAgICAgICAgPEVycm9yTm90aWZpY2F0aW9uSWNvbiAvPlxuICAgICAgICAgIHtyZW5kZXJFcnJvck5vdGlmaWNhdGlvblRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApLFxuICAgIFtlcnJvck5vdGlmaWNhdGlvblN0eWxlU2V0LCByZW5kZXJFcnJvck5vdGlmaWNhdGlvblRleHRdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyRW1wdHlTdGF0dXMgPSB1c2VDYWxsYmFjaygoKSA9PiA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtjb25uZWN0ZWROb3RpZmljYXRpb25UZXh0fSAvPiwgW1xuICAgIGNvbm5lY3RlZE5vdGlmaWNhdGlvblRleHRcbiAgXSk7XG5cbiAgY29uc3QgcmVuZGVyU3RhdHVzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChjb25uZWN0aXZpdHlTdGF0dXMgPT09ICdjb25uZWN0aW5nc2xvdycpIHtcbiAgICAgIHJldHVybiByZW5kZXJDb25uZWN0aW5nU2xvdygpO1xuICAgIH0gZWxzZSBpZiAoY29ubmVjdGl2aXR5U3RhdHVzID09PSAnZXJyb3InIHx8IGNvbm5lY3Rpdml0eVN0YXR1cyA9PT0gJ25vdGNvbm5lY3RlZCcpIHtcbiAgICAgIHJldHVybiByZW5kZXJOb3RDb25uZWN0ZWQoKTtcbiAgICB9IGVsc2UgaWYgKGNvbm5lY3Rpdml0eVN0YXR1cyA9PT0gJ3VuaW5pdGlhbGl6ZWQnKSB7XG4gICAgICByZXR1cm4gcmVuZGVyVW5pbml0aWFsaXplZCgpO1xuICAgIH0gZWxzZSBpZiAoY29ubmVjdGl2aXR5U3RhdHVzID09PSAncmVjb25uZWN0aW5nJykge1xuICAgICAgcmV0dXJuIHJlbmRlclJlY29ubmVjdGluZygpO1xuICAgIH0gZWxzZSBpZiAoY29ubmVjdGl2aXR5U3RhdHVzID09PSAnc2FnYWVycm9yJykge1xuICAgICAgcmV0dXJuIHJlbmRlclNhZ2FFcnJvcigpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJFbXB0eVN0YXR1cygpO1xuICB9LCBbXG4gICAgY29ubmVjdGl2aXR5U3RhdHVzLFxuICAgIHJlbmRlckNvbm5lY3RpbmdTbG93LFxuICAgIHJlbmRlckVtcHR5U3RhdHVzLFxuICAgIHJlbmRlck5vdENvbm5lY3RlZCxcbiAgICByZW5kZXJSZWNvbm5lY3RpbmcsXG4gICAgcmVuZGVyU2FnYUVycm9yLFxuICAgIHJlbmRlclVuaW5pdGlhbGl6ZWRcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGFyaWEtYXRvbWljPVwiZmFsc2VcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICA8RGVib3VuY2VkQ29ubmVjdGl2aXR5U3RhdHVzXG4gICAgICAgIGludGVydmFsPXtcbiAgICAgICAgICBjb25uZWN0aXZpdHlTdGF0dXMgPT09ICd1bmluaXRpYWxpemVkJyB8fCBjb25uZWN0aXZpdHlTdGF0dXMgPT09ICdlcnJvcicgPyAwIDogQ09OTkVDVElWSVRZX1NUQVRVU19ERUJPVU5DRVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJTdGF0dXN9XG4gICAgICA8L0RlYm91bmNlZENvbm5lY3Rpdml0eVN0YXR1cz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbm5lY3Rpdml0eVN0YXR1cy5wcm9wVHlwZXMgPSB7XG4gIGNvbm5lY3Rpdml0eVN0YXR1czogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0Q29ubmVjdGl2aXR5U3RhdHVzKCkoQ29ubmVjdGl2aXR5U3RhdHVzKTtcbiJdfQ==
