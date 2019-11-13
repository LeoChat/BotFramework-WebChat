'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _BasicSendBox = _interopRequireDefault(require('./BasicSendBox'));

var _BasicTranscript = _interopRequireDefault(require('./BasicTranscript'));

var _Composer = _interopRequireDefault(require('./Composer'));

var _concatMiddleware = _interopRequireDefault(require('./Middleware/concatMiddleware'));

var _createCoreMiddleware = _interopRequireDefault(require('./Middleware/Activity/createCoreMiddleware'));

var _createCoreMiddleware2 = _interopRequireDefault(require('./Middleware/Attachment/createCoreMiddleware'));

var _ErrorBox = _interopRequireDefault(require('./ErrorBox'));

var _TypeFocusSink = _interopRequireDefault(require('./Utils/TypeFocusSink'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column'
});
var TRANSCRIPT_CSS = (0, _glamor.css)({
  flex: 1
});
var SEND_BOX_CSS = (0, _glamor.css)({
  flexShrink: 0
});

function createActivityRenderer(additionalMiddleware) {
  var activityMiddleware = (0, _concatMiddleware.default)(additionalMiddleware, (0, _createCoreMiddleware.default)())(
    {}
  );
  return function() {
    try {
      return activityMiddleware(function(_ref) {
        var activity = _ref.activity;
        return function() {
          console.warn('No activity found for type "'.concat(activity.type, '".'));
        };
      }).apply(void 0, arguments);
    } catch (err) {
      var FailedRenderActivity = function FailedRenderActivity() {
        return _react.default.createElement(
          _ErrorBox.default,
          {
            message: 'Failed to render activity'
          },
          _react.default.createElement('pre', null, JSON.stringify(err, null, 2))
        );
      };

      return FailedRenderActivity;
    }
  };
}

function createAttachmentRenderer(additionalMiddleware) {
  var attachmentMiddleware = (0, _concatMiddleware.default)(
    additionalMiddleware,
    (0, _createCoreMiddleware2.default)()
  )({});
  return function() {
    try {
      return attachmentMiddleware(function(_ref2) {
        var attachment = _ref2.attachment;
        return _react.default.createElement(
          _ErrorBox.default,
          {
            message: 'No renderer for this attachment'
          },
          _react.default.createElement('pre', null, JSON.stringify(attachment, null, 2))
        );
      }).apply(void 0, arguments);
    } catch (err) {
      return _react.default.createElement(
        _ErrorBox.default,
        {
          message: 'Failed to render attachment'
        },
        _react.default.createElement('pre', null, JSON.stringify(err, null, 2))
      );
    }
  };
}

var BasicWebChat =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(BasicWebChat, _React$Component);

    function BasicWebChat(props) {
      var _this;

      _classCallCheck(this, BasicWebChat);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicWebChat).call(this, props));
      _this.sendBoxRef = _react.default.createRef();
      _this.state = {
        activityRenderer: createActivityRenderer(props.activityMiddleware),
        attachmentRenderer: createAttachmentRenderer(props.attachmentMiddleware)
      };
      return _this;
    } // TODO: [P2] Move to React 16 APIs

    _createClass(BasicWebChat, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(_ref3) {
          var nextActivityMiddleware = _ref3.activityMiddleware,
            nextAttachmentMiddleware = _ref3.attachmentMiddleware;
          var _this$props = this.props,
            activityMiddleware = _this$props.activityMiddleware,
            attachmentMiddleware = _this$props.attachmentMiddleware;

          if (activityMiddleware !== nextActivityMiddleware || attachmentMiddleware !== nextAttachmentMiddleware) {
            this.setState(function() {
              return {
                activityRenderer: createActivityRenderer(nextActivityMiddleware),
                attachmentRenderer: createAttachmentRenderer(nextAttachmentMiddleware)
              };
            });
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            className = _this$props2.className,
            otherProps = _objectWithoutProperties(_this$props2, ['className']),
            sendBoxRef = this.sendBoxRef,
            _this$state = this.state,
            activityRenderer = _this$state.activityRenderer,
            attachmentRenderer = _this$state.attachmentRenderer; // TODO: [P2] Implement "scrollToBottom" feature

          return _react.default.createElement(
            _Composer.default,
            _extends(
              {
                activityRenderer: activityRenderer,
                attachmentRenderer: attachmentRenderer,
                sendBoxRef: sendBoxRef
              },
              otherProps
            ),
            function(_ref4) {
              var styleSet = _ref4.styleSet;
              return _react.default.createElement(
                _TypeFocusSink.default,
                {
                  className: (0, _classnames.default)(ROOT_CSS + '', styleSet.root + '', className + ''),
                  role: 'complementary',
                  sendFocusRef: sendBoxRef
                },
                _react.default.createElement(_BasicTranscript.default, {
                  className: TRANSCRIPT_CSS + ''
                }),
                !styleSet.options.hideSendBox &&
                  _react.default.createElement(_BasicSendBox.default, {
                    className: SEND_BOX_CSS + ''
                  })
              );
            }
          );
        }
      }
    ]);

    return BasicWebChat;
  })(_react.default.Component);

exports.default = BasicWebChat;
BasicWebChat.defaultProps = {
  activityMiddleware: undefined,
  attachmentMiddleware: undefined,
  className: ''
};
BasicWebChat.propTypes = {
  activityMiddleware: _propTypes.default.func,
  attachmentMiddleware: _propTypes.default.func,
  className: _propTypes.default.string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNpY1dlYkNoYXQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIlRSQU5TQ1JJUFRfQ1NTIiwiZmxleCIsIlNFTkRfQk9YX0NTUyIsImZsZXhTaHJpbmsiLCJjcmVhdGVBY3Rpdml0eVJlbmRlcmVyIiwiYWRkaXRpb25hbE1pZGRsZXdhcmUiLCJhY3Rpdml0eU1pZGRsZXdhcmUiLCJhY3Rpdml0eSIsImNvbnNvbGUiLCJ3YXJuIiwidHlwZSIsImVyciIsIkZhaWxlZFJlbmRlckFjdGl2aXR5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZUF0dGFjaG1lbnRSZW5kZXJlciIsImF0dGFjaG1lbnRNaWRkbGV3YXJlIiwiYXR0YWNobWVudCIsIkJhc2ljV2ViQ2hhdCIsInByb3BzIiwic2VuZEJveFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic3RhdGUiLCJhY3Rpdml0eVJlbmRlcmVyIiwiYXR0YWNobWVudFJlbmRlcmVyIiwibmV4dEFjdGl2aXR5TWlkZGxld2FyZSIsIm5leHRBdHRhY2htZW50TWlkZGxld2FyZSIsInNldFN0YXRlIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsInN0eWxlU2V0Iiwicm9vdCIsIm9wdGlvbnMiLCJoaWRlU2VuZEJveCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsT0FBTyxFQUFFLE1BRFU7QUFFbkJDLEVBQUFBLGFBQWEsRUFBRTtBQUZJLENBQUosQ0FBakI7QUFLQSxJQUFNQyxj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QUFTLEVBQUU7QUFIZSxDQUE1QjtBQU1BWCxZQUFZLENBQUNvQixTQUFiLEdBQXlCO0FBQ3ZCaEMsRUFBQUEsa0JBQWtCLEVBQUVpQyxtQkFBVUMsSUFEUDtBQUV2QnhCLEVBQUFBLG9CQUFvQixFQUFFdUIsbUJBQVVDLElBRlQ7QUFHdkJYLEVBQUFBLFNBQVMsRUFBRVUsbUJBQVVFO0FBSEUsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMCwgMSwgMl0gfV0gKi9cbi8qIGVzbGludCByZWFjdC9uby11bnNhZmU6IG9mZiAqL1xuXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJhc2ljU2VuZEJveCBmcm9tICcuL0Jhc2ljU2VuZEJveCc7XG5pbXBvcnQgQmFzaWNUcmFuc2NyaXB0IGZyb20gJy4vQmFzaWNUcmFuc2NyaXB0JztcbmltcG9ydCBDb21wb3NlciBmcm9tICcuL0NvbXBvc2VyJztcbmltcG9ydCBjb25jYXRNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9jb25jYXRNaWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVDb3JlQWN0aXZpdHlNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9BY3Rpdml0eS9jcmVhdGVDb3JlTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlQ29yZUF0dGFjaG1lbnRNaWRkbGV3YXJlIGZyb20gJy4vTWlkZGxld2FyZS9BdHRhY2htZW50L2NyZWF0ZUNvcmVNaWRkbGV3YXJlJztcbmltcG9ydCBFcnJvckJveCBmcm9tICcuL0Vycm9yQm94JztcbmltcG9ydCBUeXBlRm9jdXNTaW5rQm94IGZyb20gJy4vVXRpbHMvVHlwZUZvY3VzU2luayc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufSk7XG5cbmNvbnN0IFRSQU5TQ1JJUFRfQ1NTID0gY3NzKHtcbiAgZmxleDogMVxufSk7XG5cbmNvbnN0IFNFTkRfQk9YX0NTUyA9IGNzcyh7XG4gIGZsZXhTaHJpbms6IDBcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpdml0eVJlbmRlcmVyKGFkZGl0aW9uYWxNaWRkbGV3YXJlKSB7XG4gIGNvbnN0IGFjdGl2aXR5TWlkZGxld2FyZSA9IGNvbmNhdE1pZGRsZXdhcmUoYWRkaXRpb25hbE1pZGRsZXdhcmUsIGNyZWF0ZUNvcmVBY3Rpdml0eU1pZGRsZXdhcmUoKSkoe30pO1xuXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYWN0aXZpdHlNaWRkbGV3YXJlKCh7IGFjdGl2aXR5IH0pID0+ICgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGBObyBhY3Rpdml0eSBmb3VuZCBmb3IgdHlwZSBcIiR7YWN0aXZpdHkudHlwZX1cIi5gKTtcbiAgICAgIH0pKC4uLmFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgRmFpbGVkUmVuZGVyQWN0aXZpdHkgPSAoKSA9PiAoXG4gICAgICAgIDxFcnJvckJveCBtZXNzYWdlPVwiRmFpbGVkIHRvIHJlbmRlciBhY3Rpdml0eVwiPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGVyciwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvRXJyb3JCb3g+XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gRmFpbGVkUmVuZGVyQWN0aXZpdHk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBdHRhY2htZW50UmVuZGVyZXIoYWRkaXRpb25hbE1pZGRsZXdhcmUpIHtcbiAgY29uc3QgYXR0YWNobWVudE1pZGRsZXdhcmUgPSBjb25jYXRNaWRkbGV3YXJlKGFkZGl0aW9uYWxNaWRkbGV3YXJlLCBjcmVhdGVDb3JlQXR0YWNobWVudE1pZGRsZXdhcmUoKSkoe30pO1xuXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXR0YWNobWVudE1pZGRsZXdhcmUoKHsgYXR0YWNobWVudCB9KSA9PiAoXG4gICAgICAgIDxFcnJvckJveCBtZXNzYWdlPVwiTm8gcmVuZGVyZXIgZm9yIHRoaXMgYXR0YWNobWVudFwiPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGF0dGFjaG1lbnQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L0Vycm9yQm94PlxuICAgICAgKSkoLi4uYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RXJyb3JCb3ggbWVzc2FnZT1cIkZhaWxlZCB0byByZW5kZXIgYXR0YWNobWVudFwiPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGVyciwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvRXJyb3JCb3g+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNXZWJDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlbmRCb3hSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3Rpdml0eVJlbmRlcmVyOiBjcmVhdGVBY3Rpdml0eVJlbmRlcmVyKHByb3BzLmFjdGl2aXR5TWlkZGxld2FyZSksXG4gICAgICBhdHRhY2htZW50UmVuZGVyZXI6IGNyZWF0ZUF0dGFjaG1lbnRSZW5kZXJlcihwcm9wcy5hdHRhY2htZW50TWlkZGxld2FyZSlcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETzogW1AyXSBNb3ZlIHRvIFJlYWN0IDE2IEFQSXNcbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoe1xuICAgIGFjdGl2aXR5TWlkZGxld2FyZTogbmV4dEFjdGl2aXR5TWlkZGxld2FyZSxcbiAgICBhdHRhY2htZW50TWlkZGxld2FyZTogbmV4dEF0dGFjaG1lbnRNaWRkbGV3YXJlXG4gIH0pIHtcbiAgICBjb25zdCB7IGFjdGl2aXR5TWlkZGxld2FyZSwgYXR0YWNobWVudE1pZGRsZXdhcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoYWN0aXZpdHlNaWRkbGV3YXJlICE9PSBuZXh0QWN0aXZpdHlNaWRkbGV3YXJlIHx8IGF0dGFjaG1lbnRNaWRkbGV3YXJlICE9PSBuZXh0QXR0YWNobWVudE1pZGRsZXdhcmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgYWN0aXZpdHlSZW5kZXJlcjogY3JlYXRlQWN0aXZpdHlSZW5kZXJlcihuZXh0QWN0aXZpdHlNaWRkbGV3YXJlKSxcbiAgICAgICAgYXR0YWNobWVudFJlbmRlcmVyOiBjcmVhdGVBdHRhY2htZW50UmVuZGVyZXIobmV4dEF0dGFjaG1lbnRNaWRkbGV3YXJlKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9wczogeyBjbGFzc05hbWUsIC4uLm90aGVyUHJvcHMgfSxcbiAgICAgIHNlbmRCb3hSZWYsXG4gICAgICBzdGF0ZTogeyBhY3Rpdml0eVJlbmRlcmVyLCBhdHRhY2htZW50UmVuZGVyZXIgfVxuICAgIH0gPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogW1AyXSBJbXBsZW1lbnQgXCJzY3JvbGxUb0JvdHRvbVwiIGZlYXR1cmVcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9zZXJcbiAgICAgICAgYWN0aXZpdHlSZW5kZXJlcj17YWN0aXZpdHlSZW5kZXJlcn1cbiAgICAgICAgYXR0YWNobWVudFJlbmRlcmVyPXthdHRhY2htZW50UmVuZGVyZXJ9XG4gICAgICAgIHNlbmRCb3hSZWY9e3NlbmRCb3hSZWZ9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7KHsgc3R5bGVTZXQgfSkgPT4gKFxuICAgICAgICAgIDxUeXBlRm9jdXNTaW5rQm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgc3R5bGVTZXQucm9vdCArICcnLCBjbGFzc05hbWUgKyAnJyl9XG4gICAgICAgICAgICByb2xlPVwiY29tcGxlbWVudGFyeVwiXG4gICAgICAgICAgICBzZW5kRm9jdXNSZWY9e3NlbmRCb3hSZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJhc2ljVHJhbnNjcmlwdCBjbGFzc05hbWU9e1RSQU5TQ1JJUFRfQ1NTICsgJyd9IC8+XG4gICAgICAgICAgICB7IXN0eWxlU2V0Lm9wdGlvbnMuaGlkZVNlbmRCb3ggJiYgPEJhc2ljU2VuZEJveCBjbGFzc05hbWU9e1NFTkRfQk9YX0NTUyArICcnfSAvPn1cbiAgICAgICAgICA8L1R5cGVGb2N1c1NpbmtCb3g+XG4gICAgICAgICl9XG4gICAgICA8L0NvbXBvc2VyPlxuICAgICk7XG4gIH1cbn1cblxuQmFzaWNXZWJDaGF0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZpdHlNaWRkbGV3YXJlOiB1bmRlZmluZWQsXG4gIGF0dGFjaG1lbnRNaWRkbGV3YXJlOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbkJhc2ljV2ViQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5TWlkZGxld2FyZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGF0dGFjaG1lbnRNaWRkbGV3YXJlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuIl19
