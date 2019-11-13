'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var adaptiveCards = _interopRequireWildcard(require('adaptivecards'));

var _botframeworkWebchatComponent = _interopRequireWildcard(require('botframework-webchat-component'));

var _memoizeOne = _interopRequireDefault(require('memoize-one'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _createAdaptiveCardMiddleware = _interopRequireDefault(require('./adaptiveCards/createAdaptiveCardMiddleware'));

var _createStyleSetWithAdaptiveCards = _interopRequireDefault(
  require('./adaptiveCards/Styles/createStyleSetWithAdaptiveCards')
);

var _adaptiveCardHostConfig = _interopRequireDefault(require('./adaptiveCards/Styles/adaptiveCardHostConfig'));

var _renderMarkdown = _interopRequireDefault(require('./renderMarkdown'));

// Add additional props to <WebChat>, so it support additional features
var FullReactWebChat =
  /*#__PURE__*/
  (function(_React$Component) {
    (0, _inherits2.default)(FullReactWebChat, _React$Component);

    function FullReactWebChat(props) {
      var _this;

      (0, _classCallCheck2.default)(this, FullReactWebChat);
      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(FullReactWebChat).call(this, props)
      );
      _this.createAttachmentMiddleware = (0, _memoizeOne.default)(function(
        adaptiveCardHostConfig,
        middlewareFromProps,
        styleOptions,
        renderMarkdown
      ) {
        return (0, _botframeworkWebchatComponent.concatMiddleware)(
          middlewareFromProps,
          (0, _createAdaptiveCardMiddleware.default)({
            adaptiveCardHostConfig: adaptiveCardHostConfig || (0, _adaptiveCardHostConfig.default)(styleOptions),
            adaptiveCards: adaptiveCards,
            renderMarkdown: renderMarkdown
          })
        );
      });
      _this.memoizeStyleSet = (0, _memoizeOne.default)(function(styleSet, styleOptions) {
        return styleSet || (0, _createStyleSetWithAdaptiveCards.default)(styleOptions);
      });
      _this.memoizeRenderMarkdown = (0, _memoizeOne.default)(function(renderMarkdown, _ref) {
        var options = _ref.options;
        return function(markdown) {
          return renderMarkdown(markdown, options);
        };
      });
      return _this;
    }

    (0, _createClass2.default)(FullReactWebChat, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            adaptiveCardHostConfig = _this$props.adaptiveCardHostConfig,
            attachmentMiddleware = _this$props.attachmentMiddleware,
            renderMarkdown = _this$props.renderMarkdown,
            styleOptions = _this$props.styleOptions,
            styleSet = _this$props.styleSet,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, [
              'adaptiveCardHostConfig',
              'attachmentMiddleware',
              'renderMarkdown',
              'styleOptions',
              'styleSet'
            ]);
          var memoizedStyleSet = this.memoizeStyleSet(styleSet, styleOptions);
          var memoizedRenderMarkdown =
            renderMarkdown || this.memoizeRenderMarkdown(_renderMarkdown.default, memoizedStyleSet);
          return _react.default.createElement(
            _botframeworkWebchatComponent.default,
            (0, _extends2.default)(
              {
                attachmentMiddleware: this.createAttachmentMiddleware(
                  adaptiveCardHostConfig,
                  attachmentMiddleware,
                  memoizedStyleSet.options,
                  memoizedRenderMarkdown
                ),
                renderMarkdown: memoizedRenderMarkdown,
                styleOptions: styleOptions,
                styleSet: memoizedStyleSet
              },
              otherProps
            )
          );
        }
      }
    ]);
    return FullReactWebChat;
  })(_react.default.Component);

FullReactWebChat.defaultProps = {
  adaptiveCardHostConfig: undefined,
  attachmentMiddleware: undefined,
  renderMarkdown: undefined,
  styleOptions: undefined,
  styleSet: undefined
};
FullReactWebChat.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any,
  attachmentMiddleware: _propTypes.default.func,
  renderMarkdown: _propTypes.default.func,
  styleOptions: _propTypes.default.any,
  styleSet: _propTypes.default.any
};
var _default = FullReactWebChat;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GdWxsUmVhY3RXZWJDaGF0LmpzIl0sIm5hbWVzIjpbIkZ1bGxSZWFjdFdlYkNoYXQiLCJwcm9wcyIsImNyZWF0ZUF0dGFjaG1lbnRNaWRkbGV3YXJlIiwiYWRhcHRpdmVDYXJkSG9zdENvbmZpZyIsIm1pZGRsZXdhcmVGcm9tUHJvcHMiLCJzdHlsZU9wdGlvbnMiLCJyZW5kZXJNYXJrZG93biIsImFkYXB0aXZlQ2FyZHMiLCJtZW1vaXplU3R5bGVTZXQiLCJzdHlsZVNldCIsIm1lbW9pemVSZW5kZXJNYXJrZG93biIsIm9wdGlvbnMiLCJtYXJrZG93biIsImF0dGFjaG1lbnRNaWRkbGV3YXJlIiwib3RoZXJQcm9wcyIsIm1lbW9pemVkU3R5bGVTZXQiLCJtZW1vaXplZFJlbmRlck1hcmtkb3duIiwiZGVmYXVsdFJlbmRlck1hcmtkb3duIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7SUFDTUEsZ0I7Ozs7O0FBQ0osNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixzSEFBTUEsS0FBTjtBQUVBLFVBQUtDLDBCQUFMLEdBQWtDLHlCQUNoQyxVQUFDQyxzQkFBRCxFQUF5QkMsbUJBQXpCLEVBQThDQyxZQUE5QyxFQUE0REMsY0FBNUQ7QUFBQSxhQUNFLG9EQUNFRixtQkFERixFQUVFLDJDQUF3QztBQUN0Q0QsUUFBQUEsc0JBQXNCLEVBQUVBLHNCQUFzQixJQUFJLHFDQUE4QkUsWUFBOUIsQ0FEWjtBQUV0Q0UsUUFBQUEsYUFBYSxFQUFiQSxhQUZzQztBQUd0Q0QsUUFBQUEsY0FBYyxFQUFkQTtBQUhzQyxPQUF4QyxDQUZGLENBREY7QUFBQSxLQURnQyxDQUFsQztBQVlBLFVBQUtFLGVBQUwsR0FBdUIseUJBQVEsVUFBQ0MsUUFBRCxFQUFXSixZQUFYO0FBQUEsYUFBNEJJLFFBQVEsSUFBSSw4Q0FBZUosWUFBZixDQUF4QztBQUFBLEtBQVIsQ0FBdkI7QUFDQSxVQUFLSyxxQkFBTCxHQUE2Qix5QkFBUSxVQUFDSixjQUFEO0FBQUEsVUFBbUJLLE9BQW5CLFFBQW1CQSxPQUFuQjtBQUFBLGFBQWlDLFVBQUFDLFFBQVE7QUFBQSxlQUM1RU4sY0FBYyxDQUFDTSxRQUFELEVBQVdELE9BQVgsQ0FEOEQ7QUFBQSxPQUF6QztBQUFBLEtBQVIsQ0FBN0I7QUFoQmlCO0FBbUJsQjs7Ozs2QkFFUTtBQUFBLHdCQVFILEtBQUtWLEtBUkY7QUFBQSxVQUVMRSxzQkFGSyxlQUVMQSxzQkFGSztBQUFBLFVBR0xVLG9CQUhLLGVBR0xBLG9CQUhLO0FBQUEsVUFJTFAsY0FKSyxlQUlMQSxjQUpLO0FBQUEsVUFLTEQsWUFMSyxlQUtMQSxZQUxLO0FBQUEsVUFNTEksUUFOSyxlQU1MQSxRQU5LO0FBQUEsVUFPRkssVUFQRTtBQVVQLFVBQU1DLGdCQUFnQixHQUFHLEtBQUtQLGVBQUwsQ0FBcUJDLFFBQXJCLEVBQStCSixZQUEvQixDQUF6QjtBQUNBLFVBQU1XLHNCQUFzQixHQUMxQlYsY0FBYyxJQUFJLEtBQUtJLHFCQUFMLENBQTJCTyx1QkFBM0IsRUFBa0RGLGdCQUFsRCxDQURwQjtBQUdBLGFBQ0UsNkJBQUMscUNBQUQ7QUFDRSxRQUFBLG9CQUFvQixFQUFFLEtBQUtiLDBCQUFMLENBQ3BCQyxzQkFEb0IsRUFFcEJVLG9CQUZvQixFQUdwQkUsZ0JBQWdCLENBQUNKLE9BSEcsRUFJcEJLLHNCQUpvQixDQUR4QjtBQU9FLFFBQUEsY0FBYyxFQUFFQSxzQkFQbEI7QUFRRSxRQUFBLFlBQVksRUFBRVgsWUFSaEI7QUFTRSxRQUFBLFFBQVEsRUFBRVU7QUFUWixTQVVNRCxVQVZOLEVBREY7QUFjRDs7O0VBbEQ0QkksZUFBTUMsUzs7QUFxRHJDbkIsZ0JBQWdCLENBQUNvQixZQUFqQixHQUFnQztBQUM5QmpCLEVBQUFBLHNCQUFzQixFQUFFa0IsU0FETTtBQUU5QlIsRUFBQUEsb0JBQW9CLEVBQUVRLFNBRlE7QUFHOUJmLEVBQUFBLGNBQWMsRUFBRWUsU0FIYztBQUk5QmhCLEVBQUFBLFlBQVksRUFBRWdCLFNBSmdCO0FBSzlCWixFQUFBQSxRQUFRLEVBQUVZO0FBTG9CLENBQWhDO0FBUUFyQixnQkFBZ0IsQ0FBQ3NCLFNBQWpCLEdBQTZCO0FBQzNCbkIsRUFBQUEsc0JBQXNCLEVBQUVvQixtQkFBVUMsR0FEUDtBQUUzQlgsRUFBQUEsb0JBQW9CLEVBQUVVLG1CQUFVRSxJQUZMO0FBRzNCbkIsRUFBQUEsY0FBYyxFQUFFaUIsbUJBQVVFLElBSEM7QUFJM0JwQixFQUFBQSxZQUFZLEVBQUVrQixtQkFBVUMsR0FKRztBQUszQmYsRUFBQUEsUUFBUSxFQUFFYyxtQkFBVUM7QUFMTyxDQUE3QjtlQVFleEIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhZGFwdGl2ZUNhcmRzIGZyb20gJ2FkYXB0aXZlY2FyZHMnO1xuaW1wb3J0IEJhc2ljV2ViQ2hhdCwgeyBjb25jYXRNaWRkbGV3YXJlIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY3JlYXRlQWRhcHRpdmVDYXJkc0F0dGFjaG1lbnRNaWRkbGV3YXJlIGZyb20gJy4vYWRhcHRpdmVDYXJkcy9jcmVhdGVBZGFwdGl2ZUNhcmRNaWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVTdHlsZVNldCBmcm9tICcuL2FkYXB0aXZlQ2FyZHMvU3R5bGVzL2NyZWF0ZVN0eWxlU2V0V2l0aEFkYXB0aXZlQ2FyZHMnO1xuaW1wb3J0IGRlZmF1bHRBZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIGZyb20gJy4vYWRhcHRpdmVDYXJkcy9TdHlsZXMvYWRhcHRpdmVDYXJkSG9zdENvbmZpZyc7XG5pbXBvcnQgZGVmYXVsdFJlbmRlck1hcmtkb3duIGZyb20gJy4vcmVuZGVyTWFya2Rvd24nO1xuXG4vLyBBZGQgYWRkaXRpb25hbCBwcm9wcyB0byA8V2ViQ2hhdD4sIHNvIGl0IHN1cHBvcnQgYWRkaXRpb25hbCBmZWF0dXJlc1xuY2xhc3MgRnVsbFJlYWN0V2ViQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jcmVhdGVBdHRhY2htZW50TWlkZGxld2FyZSA9IG1lbW9pemUoXG4gICAgICAoYWRhcHRpdmVDYXJkSG9zdENvbmZpZywgbWlkZGxld2FyZUZyb21Qcm9wcywgc3R5bGVPcHRpb25zLCByZW5kZXJNYXJrZG93bikgPT5cbiAgICAgICAgY29uY2F0TWlkZGxld2FyZShcbiAgICAgICAgICBtaWRkbGV3YXJlRnJvbVByb3BzLFxuICAgICAgICAgIGNyZWF0ZUFkYXB0aXZlQ2FyZHNBdHRhY2htZW50TWlkZGxld2FyZSh7XG4gICAgICAgICAgICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnIHx8IGRlZmF1bHRBZGFwdGl2ZUNhcmRIb3N0Q29uZmlnKHN0eWxlT3B0aW9ucyksXG4gICAgICAgICAgICBhZGFwdGl2ZUNhcmRzLFxuICAgICAgICAgICAgcmVuZGVyTWFya2Rvd25cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcblxuICAgIHRoaXMubWVtb2l6ZVN0eWxlU2V0ID0gbWVtb2l6ZSgoc3R5bGVTZXQsIHN0eWxlT3B0aW9ucykgPT4gc3R5bGVTZXQgfHwgY3JlYXRlU3R5bGVTZXQoc3R5bGVPcHRpb25zKSk7XG4gICAgdGhpcy5tZW1vaXplUmVuZGVyTWFya2Rvd24gPSBtZW1vaXplKChyZW5kZXJNYXJrZG93biwgeyBvcHRpb25zIH0pID0+IG1hcmtkb3duID0+XG4gICAgICByZW5kZXJNYXJrZG93bihtYXJrZG93biwgb3B0aW9ucylcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gICAgICBhdHRhY2htZW50TWlkZGxld2FyZSxcbiAgICAgIHJlbmRlck1hcmtkb3duLFxuICAgICAgc3R5bGVPcHRpb25zLFxuICAgICAgc3R5bGVTZXQsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBtZW1vaXplZFN0eWxlU2V0ID0gdGhpcy5tZW1vaXplU3R5bGVTZXQoc3R5bGVTZXQsIHN0eWxlT3B0aW9ucyk7XG4gICAgY29uc3QgbWVtb2l6ZWRSZW5kZXJNYXJrZG93biA9XG4gICAgICByZW5kZXJNYXJrZG93biB8fCB0aGlzLm1lbW9pemVSZW5kZXJNYXJrZG93bihkZWZhdWx0UmVuZGVyTWFya2Rvd24sIG1lbW9pemVkU3R5bGVTZXQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNpY1dlYkNoYXRcbiAgICAgICAgYXR0YWNobWVudE1pZGRsZXdhcmU9e3RoaXMuY3JlYXRlQXR0YWNobWVudE1pZGRsZXdhcmUoXG4gICAgICAgICAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZyxcbiAgICAgICAgICBhdHRhY2htZW50TWlkZGxld2FyZSxcbiAgICAgICAgICBtZW1vaXplZFN0eWxlU2V0Lm9wdGlvbnMsXG4gICAgICAgICAgbWVtb2l6ZWRSZW5kZXJNYXJrZG93blxuICAgICAgICApfVxuICAgICAgICByZW5kZXJNYXJrZG93bj17bWVtb2l6ZWRSZW5kZXJNYXJrZG93bn1cbiAgICAgICAgc3R5bGVPcHRpb25zPXtzdHlsZU9wdGlvbnN9XG4gICAgICAgIHN0eWxlU2V0PXttZW1vaXplZFN0eWxlU2V0fVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5GdWxsUmVhY3RXZWJDaGF0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZzogdW5kZWZpbmVkLFxuICBhdHRhY2htZW50TWlkZGxld2FyZTogdW5kZWZpbmVkLFxuICByZW5kZXJNYXJrZG93bjogdW5kZWZpbmVkLFxuICBzdHlsZU9wdGlvbnM6IHVuZGVmaW5lZCxcbiAgc3R5bGVTZXQ6IHVuZGVmaW5lZFxufTtcblxuRnVsbFJlYWN0V2ViQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc6IFByb3BUeXBlcy5hbnksXG4gIGF0dGFjaG1lbnRNaWRkbGV3YXJlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVuZGVyTWFya2Rvd246IFByb3BUeXBlcy5mdW5jLFxuICBzdHlsZU9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuYW55XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGdWxsUmVhY3RXZWJDaGF0O1xuIl19
