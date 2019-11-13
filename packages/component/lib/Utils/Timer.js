'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

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

var Timer =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Timer, _React$Component);

    function Timer() {
      _classCallCheck(this, Timer);

      return _possibleConstructorReturn(this, _getPrototypeOf(Timer).apply(this, arguments));
    }

    _createClass(Timer, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var at = this.props.at;
          this.schedule(at);
        }
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(_ref) {
          var nextAt = _ref.at;
          var at = this.props.at;

          if (at !== nextAt) {
            this.schedule(nextAt);
          }
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.timeout);
        }
      },
      {
        key: 'schedule',
        value: function schedule(at) {
          var _this = this;

          clearTimeout(this.timeout);

          if (!isNaN(at)) {
            this.timeout = setTimeout(function() {
              var onInterval = _this.props.onInterval;
              onInterval && onInterval();
            }, Math.max(0, at - Date.now()));
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          return false;
        }
      }
    ]);

    return Timer;
  })(_react.default.Component);

exports.default = Timer;
Timer.defaultProps = {
  onInterval: undefined
};
Timer.propTypes = {
  at: _propTypes.default.number.isRequired,
  onInterval: _propTypes.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9UaW1lci5qcyJdLCJuYW1lcyI6WyJUaW1lciIsImF0IiwicHJvcHMiLCJzY2hlZHVsZSIsIm5leHRBdCIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJpc05hTiIsInNldFRpbWVvdXQiLCJvbkludGVydmFsIiwiTWF0aCIsIm1heCIsIkRhdGUiLCJub3ciLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7d0NBQ0M7QUFBQSxVQUNWQyxFQURVLEdBQ0gsS0FBS0MsS0FERixDQUNWRCxFQURVO0FBR2xCLFdBQUtFLFFBQUwsQ0FBY0YsRUFBZDtBQUNEOzs7MkRBRWdEO0FBQUEsVUFBVkcsTUFBVSxRQUFkSCxFQUFjO0FBQUEsVUFDdkNBLEVBRHVDLEdBQ2hDLEtBQUtDLEtBRDJCLENBQ3ZDRCxFQUR1Qzs7QUFHL0MsVUFBSUEsRUFBRSxLQUFLRyxNQUFYLEVBQW1CO0FBQ2pCLGFBQUtELFFBQUwsQ0FBY0MsTUFBZDtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDckJDLE1BQUFBLFlBQVksQ0FBQyxLQUFLQyxPQUFOLENBQVo7QUFDRDs7OzZCQUVRTCxFLEVBQUk7QUFBQTs7QUFDWEksTUFBQUEsWUFBWSxDQUFDLEtBQUtDLE9BQU4sQ0FBWjs7QUFFQSxVQUFJLENBQUNDLEtBQUssQ0FBQ04sRUFBRCxDQUFWLEVBQWdCO0FBQ2QsYUFBS0ssT0FBTCxHQUFlRSxVQUFVLENBQUMsWUFBTTtBQUFBLGNBQ3RCQyxVQURzQixHQUNQLEtBQUksQ0FBQ1AsS0FERSxDQUN0Qk8sVUFEc0I7QUFHOUJBLFVBQUFBLFVBQVUsSUFBSUEsVUFBVSxFQUF4QjtBQUNELFNBSndCLEVBSXRCQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlWLEVBQUUsR0FBR1csSUFBSSxDQUFDQyxHQUFMLEVBQWpCLENBSnNCLENBQXpCO0FBS0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUFqQ2dDQyxlQUFNQyxTOzs7QUFvQ3pDZixLQUFLLENBQUNnQixZQUFOLEdBQXFCO0FBQ25CUCxFQUFBQSxVQUFVLEVBQUVRO0FBRE8sQ0FBckI7QUFJQWpCLEtBQUssQ0FBQ2tCLFNBQU4sR0FBa0I7QUFDaEJqQixFQUFBQSxFQUFFLEVBQUVrQixtQkFBVUMsTUFBVixDQUFpQkMsVUFETDtBQUVoQlosRUFBQUEsVUFBVSxFQUFFVSxtQkFBVUc7QUFGTixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby11bnNhZmU6IG9mZiAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGF0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zY2hlZHVsZShhdCk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGF0OiBuZXh0QXQgfSkge1xuICAgIGNvbnN0IHsgYXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoYXQgIT09IG5leHRBdCkge1xuICAgICAgdGhpcy5zY2hlZHVsZShuZXh0QXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgc2NoZWR1bGUoYXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIGlmICghaXNOYU4oYXQpKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBvbkludGVydmFsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIG9uSW50ZXJ2YWwgJiYgb25JbnRlcnZhbCgpO1xuICAgICAgfSwgTWF0aC5tYXgoMCwgYXQgLSBEYXRlLm5vdygpKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5UaW1lci5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uSW50ZXJ2YWw6IHVuZGVmaW5lZFxufTtcblxuVGltZXIucHJvcFR5cGVzID0ge1xuICBhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkludGVydmFsOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdfQ==
