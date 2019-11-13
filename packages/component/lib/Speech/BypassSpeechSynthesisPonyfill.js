'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.SpeechSynthesisVoice = exports.SpeechSynthesisUtterance = exports.SpeechSynthesisEvent = exports.speechSynthesis = void 0;

var _eventTargetShim = _interopRequireWildcard(require('../external/event-target-shim'));

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

var SpeechSynthesisEvent =
  /*#__PURE__*/
  (function() {
    function SpeechSynthesisEvent(type, utterance) {
      _classCallCheck(this, SpeechSynthesisEvent);

      this._type = type;
      this._utterance = utterance;
    }

    _createClass(SpeechSynthesisEvent, [
      {
        key: 'charIndex',
        get: function get() {
          return 0;
        }
      },
      {
        key: 'elapsedTime',
        get: function get() {
          return 0;
        }
      },
      {
        key: 'name',
        get: function get() {}
      },
      {
        key: 'type',
        get: function get() {
          return this._type;
        }
      },
      {
        key: 'utterance',
        get: function get() {
          return this._utterance;
        }
      }
    ]);

    return SpeechSynthesisEvent;
  })();

exports.SpeechSynthesisEvent = SpeechSynthesisEvent;

var SpeechSynthesisUtterance =
  /*#__PURE__*/
  (function(_EventTarget) {
    _inherits(SpeechSynthesisUtterance, _EventTarget);

    function SpeechSynthesisUtterance(text) {
      var _this;

      _classCallCheck(this, SpeechSynthesisUtterance);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SpeechSynthesisUtterance).call(this));
      _this._lang = 'en-US';
      _this._pitch = 1;
      _this._rate = 1;
      _this._text = text;
      _this._voice = null;
      _this._volume = 1;
      return _this;
    }

    _createClass(SpeechSynthesisUtterance, [
      {
        key: 'lang',
        get: function get() {
          return this._lang;
        },
        set: function set(value) {
          this._lang = value;
        }
      },
      {
        key: 'pitch',
        get: function get() {
          return this._pitch;
        },
        set: function set(value) {
          this._pitch = value;
        }
      },
      {
        key: 'rate',
        get: function get() {
          return this._rate;
        },
        set: function set(value) {
          this._rate = value;
        }
      },
      {
        key: 'text',
        get: function get() {
          return this._text;
        },
        set: function set(value) {
          this._text = value;
        }
      },
      {
        key: 'voice',
        get: function get() {
          return this._voice;
        },
        set: function set(value) {
          this._voice = value;
        }
      },
      {
        key: 'volume',
        get: function get() {
          return this._volume;
        },
        set: function set(value) {
          this._volume = value;
        }
      }
    ]);

    return SpeechSynthesisUtterance;
  })(_eventTargetShim.default);

exports.SpeechSynthesisUtterance = SpeechSynthesisUtterance;
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'boundary');
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'end');
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'error');
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'mark');
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'pause');
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'resume');
(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesisUtterance.prototype, 'start');

var SpeechSynthesisVoice =
  /*#__PURE__*/
  (function() {
    function SpeechSynthesisVoice() {
      _classCallCheck(this, SpeechSynthesisVoice);
    }

    _createClass(SpeechSynthesisVoice, [
      {
        key: 'default',
        get: function get() {
          return true;
        }
      },
      {
        key: 'lang',
        get: function get() {
          return 'en-US';
        }
      },
      {
        key: 'localService',
        get: function get() {
          return true;
        }
      },
      {
        key: 'name',
        get: function get() {
          return 'English (US)';
        }
      },
      {
        key: 'voiceURI',
        get: function get() {
          return 'English (US)';
        }
      }
    ]);

    return SpeechSynthesisVoice;
  })();

exports.SpeechSynthesisVoice = SpeechSynthesisVoice;

var SpeechSynthesis =
  /*#__PURE__*/
  (function(_EventTarget2) {
    _inherits(SpeechSynthesis, _EventTarget2);

    function SpeechSynthesis() {
      _classCallCheck(this, SpeechSynthesis);

      return _possibleConstructorReturn(this, _getPrototypeOf(SpeechSynthesis).apply(this, arguments));
    }

    _createClass(SpeechSynthesis, [
      {
        key: 'cancel',
        value: function cancel() {}
      },
      {
        key: 'getVoices',
        value: function getVoices() {
          return [new SpeechSynthesisVoice()];
        }
      },
      {
        key: 'pause',
        value: function pause() {
          throw new Error('pause is not implemented.');
        }
      },
      {
        key: 'resume',
        value: function resume() {
          throw new Error('resume is not implemented.');
        }
      },
      {
        key: 'speak',
        value: function speak(utterance) {
          utterance.dispatchEvent(new SpeechSynthesisEvent('start', utterance));
          utterance.dispatchEvent(new SpeechSynthesisEvent('end', utterance));
        }
      },
      {
        key: 'paused',
        get: function get() {
          return false;
        }
      },
      {
        key: 'pending',
        get: function get() {
          return false;
        }
      },
      {
        key: 'speaking',
        get: function get() {
          return false;
        }
      }
    ]);

    return SpeechSynthesis;
  })(_eventTargetShim.default);

(0, _eventTargetShim.defineEventAttribute)(SpeechSynthesis.prototype, 'voiceschanged');
var speechSynthesis = new SpeechSynthesis();
exports.speechSynthesis = speechSynthesis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TcGVlY2gvQnlwYXNzU3BlZWNoU3ludGhlc2lzUG9ueWZpbGwuanMiXSwibmFtZXMiOlsiU3BlZWNoU3ludGhlc2lzRXZlbnQiLCJ0eXBlIiwidXR0ZXJhbmNlIiwiX3R5cGUiLCJfdXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwidGV4dCIsIl9sYW5nIiwiX3BpdGNoIiwiX3JhdGUiLCJfdGV4dCIsIl92b2ljZSIsIl92b2x1bWUiLCJ2YWx1ZSIsIkV2ZW50VGFyZ2V0IiwicHJvdG90eXBlIiwiU3BlZWNoU3ludGhlc2lzVm9pY2UiLCJTcGVlY2hTeW50aGVzaXMiLCJFcnJvciIsImRpc3BhdGNoRXZlbnQiLCJzcGVlY2hTeW50aGVzaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLG9COzs7QUFDSixnQ0FBWUMsSUFBWixFQUFrQkMsU0FBbEIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0MsS0FBTCxHQUFhRixJQUFiO0FBQ0EsU0FBS0csVUFBTCxHQUFrQkYsU0FBbEI7QUFDRDs7Ozt3QkFFZTtBQUNkLGFBQU8sQ0FBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sQ0FBUDtBQUNEOzs7d0JBRVUsQ0FBRTs7O3dCQUVGO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7Ozs7OztJQUdHQyx3Qjs7Ozs7QUFDSixvQ0FBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQjtBQUVBLFVBQUtDLEtBQUwsR0FBYSxPQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYUosSUFBYjtBQUNBLFVBQUtLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLENBQWY7QUFSZ0I7QUFTakI7Ozs7d0JBRVU7QUFDVCxhQUFPLEtBQUtMLEtBQVo7QUFDRCxLO3NCQUVRTSxLLEVBQU87QUFDZCxXQUFLTixLQUFMLEdBQWFNLEtBQWI7QUFDRDs7O3dCQUVXO0FBQ1YsYUFBTyxLQUFLTCxNQUFaO0FBQ0QsSztzQkFFU0ssSyxFQUFPO0FBQ2YsV0FBS0wsTUFBTCxHQUFjSyxLQUFkO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBS0osS0FBWjtBQUNELEs7c0JBRVFJLEssRUFBTztBQUNkLFdBQUtKLEtBQUwsR0FBYUksS0FBYjtBQUNEOzs7d0JBRVU7QUFDVCxhQUFPLEtBQUtILEtBQVo7QUFDRCxLO3NCQUVRRyxLLEVBQU87QUFDZCxXQUFLSCxLQUFMLEdBQWFHLEtBQWI7QUFDRDs7O3dCQUVXO0FBQ1YsYUFBTyxLQUFLRixNQUFaO0FBQ0QsSztzQkFFU0UsSyxFQUFPO0FBQ2YsV0FBS0YsTUFBTCxHQUFjRSxLQUFkO0FBQ0Q7Ozt3QkFFWTtBQUNYLGFBQU8sS0FBS0QsT0FBWjtBQUNELEs7c0JBRVVDLEssRUFBTztBQUNoQixXQUFLRCxPQUFMLEdBQWVDLEtBQWY7QUFDRDs7OztFQTFEb0NDLHdCOzs7QUE2RHZDLDJDQUFxQlQsd0JBQXdCLENBQUNVLFNBQTlDLEVBQXlELFVBQXpEO0FBQ0EsMkNBQXFCVix3QkFBd0IsQ0FBQ1UsU0FBOUMsRUFBeUQsS0FBekQ7QUFDQSwyQ0FBcUJWLHdCQUF3QixDQUFDVSxTQUE5QyxFQUF5RCxPQUF6RDtBQUNBLDJDQUFxQlYsd0JBQXdCLENBQUNVLFNBQTlDLEVBQXlELE1BQXpEO0FBQ0EsMkNBQXFCVix3QkFBd0IsQ0FBQ1UsU0FBOUMsRUFBeUQsT0FBekQ7QUFDQSwyQ0FBcUJWLHdCQUF3QixDQUFDVSxTQUE5QyxFQUF5RCxRQUF6RDtBQUNBLDJDQUFxQlYsd0JBQXdCLENBQUNVLFNBQTlDLEVBQXlELE9BQXpEOztJQUVNQyxvQjs7Ozs7Ozs7O3dCQUNVO0FBQ1osYUFBTyxJQUFQO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sT0FBUDtBQUNEOzs7d0JBRWtCO0FBQ2pCLGFBQU8sSUFBUDtBQUNEOzs7d0JBRVU7QUFDVCxhQUFPLGNBQVA7QUFDRDs7O3dCQUVjO0FBQ2IsYUFBTyxjQUFQO0FBQ0Q7Ozs7Ozs7O0lBR0dDLGU7Ozs7Ozs7Ozs7Ozs7NkJBYUssQ0FBRTs7O2dDQUVDO0FBQ1YsYUFBTyxDQUFDLElBQUlELG9CQUFKLEVBQUQsQ0FBUDtBQUNEOzs7NEJBRU87QUFDTixZQUFNLElBQUlFLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0Q7Ozs2QkFFUTtBQUNQLFlBQU0sSUFBSUEsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7OzBCQUVLaEIsUyxFQUFXO0FBQ2ZBLE1BQUFBLFNBQVMsQ0FBQ2lCLGFBQVYsQ0FBd0IsSUFBSW5CLG9CQUFKLENBQXlCLE9BQXpCLEVBQWtDRSxTQUFsQyxDQUF4QjtBQUNBQSxNQUFBQSxTQUFTLENBQUNpQixhQUFWLENBQXdCLElBQUluQixvQkFBSixDQUF5QixLQUF6QixFQUFnQ0UsU0FBaEMsQ0FBeEI7QUFDRDs7O3dCQTdCWTtBQUNYLGFBQU8sS0FBUDtBQUNEOzs7d0JBRWE7QUFDWixhQUFPLEtBQVA7QUFDRDs7O3dCQUVjO0FBQ2IsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUFYMkJZLHdCOztBQWlDOUIsMkNBQXFCRyxlQUFlLENBQUNGLFNBQXJDLEVBQWdELGVBQWhEO0FBRUEsSUFBTUssZUFBZSxHQUFHLElBQUlILGVBQUosRUFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW5jZSB0aGlzIGlzIGEgYnlwYXNzLCB3ZSB3aWxsIHJlbGF4IHNvbWUgRVNMaW50IHJ1bGVzLlxuLy8gQWxsIGNsYXNzZXMvcHJvcGVydGllcyBkZWZpbmVkIGhlcmUgYXJlIGluIFczQyBXZWIgU3BlZWNoIEFQSS5cblxuLyogZXNsaW50IGNsYXNzLW1ldGhvZHMtdXNlLXRoaXM6IFwib2ZmXCIgKi9cbi8qIGVzbGludCBnZXR0ZXItcmV0dXJuOiBcIm9mZlwiICovXG4vKiBlc2xpbnQgbWF4LWNsYXNzZXMtcGVyLWZpbGU6IFtcImVycm9yXCIsIDRdICovXG4vKiBlc2xpbnQgbm8tZW1wdHktZnVuY3Rpb246IFwib2ZmXCIgKi9cblxuaW1wb3J0IEV2ZW50VGFyZ2V0LCB7IGRlZmluZUV2ZW50QXR0cmlidXRlIH0gZnJvbSAnLi4vZXh0ZXJuYWwvZXZlbnQtdGFyZ2V0LXNoaW0nO1xuXG5jbGFzcyBTcGVlY2hTeW50aGVzaXNFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHV0dGVyYW5jZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX3V0dGVyYW5jZSA9IHV0dGVyYW5jZTtcbiAgfVxuXG4gIGdldCBjaGFySW5kZXgoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgZWxhcHNlZFRpbWUoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgbmFtZSgpIHt9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBnZXQgdXR0ZXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl91dHRlcmFuY2U7XG4gIH1cbn1cblxuY2xhc3MgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2xhbmcgPSAnZW4tVVMnO1xuICAgIHRoaXMuX3BpdGNoID0gMTtcbiAgICB0aGlzLl9yYXRlID0gMTtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB0aGlzLl92b2ljZSA9IG51bGw7XG4gICAgdGhpcy5fdm9sdW1lID0gMTtcbiAgfVxuXG4gIGdldCBsYW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW5nO1xuICB9XG5cbiAgc2V0IGxhbmcodmFsdWUpIHtcbiAgICB0aGlzLl9sYW5nID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGl0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BpdGNoO1xuICB9XG5cbiAgc2V0IHBpdGNoKHZhbHVlKSB7XG4gICAgdGhpcy5fcGl0Y2ggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCByYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRlO1xuICB9XG5cbiAgc2V0IHJhdGUodmFsdWUpIHtcbiAgICB0aGlzLl9yYXRlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuXG4gIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZvaWNlKCkge1xuICAgIHJldHVybiB0aGlzLl92b2ljZTtcbiAgfVxuXG4gIHNldCB2b2ljZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZvaWNlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdm9sdW1lKCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWU7XG4gIH1cblxuICBzZXQgdm9sdW1lKHZhbHVlKSB7XG4gICAgdGhpcy5fdm9sdW1lID0gdmFsdWU7XG4gIH1cbn1cblxuZGVmaW5lRXZlbnRBdHRyaWJ1dGUoU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlLnByb3RvdHlwZSwgJ2JvdW5kYXJ5Jyk7XG5kZWZpbmVFdmVudEF0dHJpYnV0ZShTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UucHJvdG90eXBlLCAnZW5kJyk7XG5kZWZpbmVFdmVudEF0dHJpYnV0ZShTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UucHJvdG90eXBlLCAnZXJyb3InKTtcbmRlZmluZUV2ZW50QXR0cmlidXRlKFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZS5wcm90b3R5cGUsICdtYXJrJyk7XG5kZWZpbmVFdmVudEF0dHJpYnV0ZShTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UucHJvdG90eXBlLCAncGF1c2UnKTtcbmRlZmluZUV2ZW50QXR0cmlidXRlKFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZS5wcm90b3R5cGUsICdyZXN1bWUnKTtcbmRlZmluZUV2ZW50QXR0cmlidXRlKFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZS5wcm90b3R5cGUsICdzdGFydCcpO1xuXG5jbGFzcyBTcGVlY2hTeW50aGVzaXNWb2ljZSB7XG4gIGdldCBkZWZhdWx0KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IGxhbmcoKSB7XG4gICAgcmV0dXJuICdlbi1VUyc7XG4gIH1cblxuICBnZXQgbG9jYWxTZXJ2aWNlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuICdFbmdsaXNoIChVUyknO1xuICB9XG5cbiAgZ2V0IHZvaWNlVVJJKCkge1xuICAgIHJldHVybiAnRW5nbGlzaCAoVVMpJztcbiAgfVxufVxuXG5jbGFzcyBTcGVlY2hTeW50aGVzaXMgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIGdldCBwYXVzZWQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHNwZWFraW5nKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNhbmNlbCgpIHt9XG5cbiAgZ2V0Vm9pY2VzKCkge1xuICAgIHJldHVybiBbbmV3IFNwZWVjaFN5bnRoZXNpc1ZvaWNlKCldO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwYXVzZSBpcyBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZXN1bWUgaXMgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc3BlYWsodXR0ZXJhbmNlKSB7XG4gICAgdXR0ZXJhbmNlLmRpc3BhdGNoRXZlbnQobmV3IFNwZWVjaFN5bnRoZXNpc0V2ZW50KCdzdGFydCcsIHV0dGVyYW5jZSkpO1xuICAgIHV0dGVyYW5jZS5kaXNwYXRjaEV2ZW50KG5ldyBTcGVlY2hTeW50aGVzaXNFdmVudCgnZW5kJywgdXR0ZXJhbmNlKSk7XG4gIH1cbn1cblxuZGVmaW5lRXZlbnRBdHRyaWJ1dGUoU3BlZWNoU3ludGhlc2lzLnByb3RvdHlwZSwgJ3ZvaWNlc2NoYW5nZWQnKTtcblxuY29uc3Qgc3BlZWNoU3ludGhlc2lzID0gbmV3IFNwZWVjaFN5bnRoZXNpcygpO1xuXG5leHBvcnQgeyBzcGVlY2hTeW50aGVzaXMsIFNwZWVjaFN5bnRoZXNpc0V2ZW50LCBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UsIFNwZWVjaFN5bnRoZXNpc1ZvaWNlIH07XG4iXX0=
