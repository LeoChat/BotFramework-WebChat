'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectDictationInterims = exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _botframeworkWebchatCore = require('botframework-webchat-core');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _Localize = _interopRequireDefault(require('../Localization/Localize'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

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

var _Constants$DictateSta = _botframeworkWebchatCore.Constants.DictateState,
  DICTATING = _Constants$DictateSta.DICTATING,
  STARTING = _Constants$DictateSta.STARTING,
  STOPPING = _Constants$DictateSta.STOPPING;
var ROOT_CSS = (0, _glamor.css)({
  alignItems: 'center',
  display: 'flex'
});

var connectDictationInterims = function connectDictationInterims() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var dictateInterims = _ref.dictateInterims,
          dictateState = _ref.dictateState,
          language = _ref.language;
        return {
          dictateInterims: dictateInterims,
          dictateState: dictateState,
          language: language
        };
      }
    ].concat(selectors)
  );
};

exports.connectDictationInterims = connectDictationInterims;

var DictationInterims = function DictationInterims(_ref2) {
  var className = _ref2.className,
    _ref2$dictateInterims = _ref2.dictateInterims,
    dictateInterims = _ref2$dictateInterims === void 0 ? [] : _ref2$dictateInterims,
    dictateState = _ref2.dictateState;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    dictationInterimsStyleSet = _useStyleSet2[0].dictationInterims;

  return dictateState === STARTING || dictateState === STOPPING
    ? _react.default.createElement(
        'p',
        {
          className: (0, _classnames.default)(dictationInterimsStyleSet + '', ROOT_CSS + '', className + '', 'status')
        },
        dictateState === STARTING &&
          _react.default.createElement(_Localize.default, {
            text: 'Starting\u2026'
          })
      )
    : dictateState === DICTATING &&
        (dictateInterims.length
          ? _react.default.createElement(
              'p',
              {
                className: (0, _classnames.default)(
                  dictationInterimsStyleSet + '',
                  ROOT_CSS + '',
                  className + '',
                  'dictating'
                )
              },
              dictateInterims.map(function(interim, index) {
                return _react.default.createElement(
                  'span',
                  {
                    key: index
                  },
                  interim,
                  '\xA0'
                );
              })
            )
          : _react.default.createElement(
              'p',
              {
                className: (0, _classnames.default)(
                  dictationInterimsStyleSet + '',
                  ROOT_CSS + '',
                  className + '',
                  'status'
                )
              },
              _react.default.createElement(_Localize.default, {
                text: 'Listening\u2026'
              })
            ));
};

DictationInterims.defaultProps = {
  className: ''
};
DictationInterims.propTypes = {
  className: _propTypes.default.string,
  dictateInterims: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  dictateState: _propTypes.default.number.isRequired
}; // TODO: [P3] After speech started, when clicking on the transcript, it should
//       stop the dictation and allow the user to type-correct the transcript

var _default = connectDictationInterims()(DictationInterims);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0RpY3RhdGlvbkludGVyaW1zLmpzIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkRpY3RhdGVTdGF0ZSIsIkRJQ1RBVElORyIsIlNUQVJUSU5HIiwiU1RPUFBJTkciLCJST09UX0NTUyIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiY29ubmVjdERpY3RhdGlvbkludGVyaW1zIiwic2VsZWN0b3JzIiwiY29ubmVjdFRvV2ViQ2hhdCIsImRpY3RhdGVJbnRlcmltcyIsImRpY3RhdGVTdGF0ZSIsImxhbmd1YWdlIiwiRGljdGF0aW9uSW50ZXJpbXMiLCJjbGFzc05hbWUiLCJkaWN0YXRpb25JbnRlcmltc1N0eWxlU2V0IiwiZGljdGF0aW9uSW50ZXJpbXMiLCJsZW5ndGgiLCJtYXAiLCJpbnRlcmltIiwiaW5kZXgiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7NEJBSUlBLGtDLENBREZDLFk7SUFBZ0JDLFMseUJBQUFBLFM7SUFBV0MsUSx5QkFBQUEsUTtJQUFVQyxRLHlCQUFBQSxRO0FBR3ZDLElBQU1DLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsVUFBVSxFQUFFLFFBRE87QUFFbkJDLEVBQUFBLE9BQU8sRUFBRTtBQUZVLENBQUosQ0FBakI7O0FBS0EsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUMvQkMseUNBQ0U7QUFBQSxRQUFHQyxlQUFILFFBQUdBLGVBQUg7QUFBQSxRQUFvQkMsWUFBcEIsUUFBb0JBLFlBQXBCO0FBQUEsUUFBa0NDLFFBQWxDLFFBQWtDQSxRQUFsQztBQUFBLFdBQWtEO0FBQ2hERixNQUFBQSxlQUFlLEVBQWZBLGVBRGdEO0FBRWhEQyxNQUFBQSxZQUFZLEVBQVpBLFlBRmdEO0FBR2hEQyxNQUFBQSxRQUFRLEVBQVJBO0FBSGdELEtBQWxEO0FBQUEsR0FERixTQU1LSixTQU5MLEVBRCtCO0FBQUEsQ0FBakM7Ozs7QUFVQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBQXVEO0FBQUEsTUFBcERDLFNBQW9ELFNBQXBEQSxTQUFvRDtBQUFBLG9DQUF6Q0osZUFBeUM7QUFBQSxNQUF6Q0EsZUFBeUMsc0NBQXZCLEVBQXVCO0FBQUEsTUFBbkJDLFlBQW1CLFNBQW5CQSxZQUFtQjs7QUFBQSxxQkFDcEIsNEJBRG9CO0FBQUE7QUFBQSxNQUNuREkseUJBRG1ELG9CQUN0RUMsaUJBRHNFOztBQUcvRSxTQUFPTCxZQUFZLEtBQUtULFFBQWpCLElBQTZCUyxZQUFZLEtBQUtSLFFBQTlDLEdBQ0w7QUFBRyxJQUFBLFNBQVMsRUFBRSx5QkFBV1kseUJBQXlCLEdBQUcsRUFBdkMsRUFBMkNYLFFBQVEsR0FBRyxFQUF0RCxFQUEwRFUsU0FBUyxHQUFHLEVBQXRFLEVBQTBFLFFBQTFFO0FBQWQsS0FDR0gsWUFBWSxLQUFLVCxRQUFqQixJQUE2Qiw2QkFBQyxpQkFBRDtBQUFVLElBQUEsSUFBSSxFQUFDO0FBQWYsSUFEaEMsQ0FESyxHQUtMUyxZQUFZLEtBQUtWLFNBQWpCLEtBQ0dTLGVBQWUsQ0FBQ08sTUFBaEIsR0FDQztBQUFHLElBQUEsU0FBUyxFQUFFLHlCQUFXRix5QkFBeUIsR0FBRyxFQUF2QyxFQUEyQ1gsUUFBUSxHQUFHLEVBQXRELEVBQTBEVSxTQUFTLEdBQUcsRUFBdEUsRUFBMEUsV0FBMUU7QUFBZCxLQUNHSixlQUFlLENBQUNRLEdBQWhCLENBQW9CLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLFdBQ25CO0FBQU0sTUFBQSxHQUFHLEVBQUVBO0FBQVgsT0FDR0QsT0FESCxTQURtQjtBQUFBLEdBQXBCLENBREgsQ0FERCxHQVVDO0FBQUcsSUFBQSxTQUFTLEVBQUUseUJBQVdKLHlCQUF5QixHQUFHLEVBQXZDLEVBQTJDWCxRQUFRLEdBQUcsRUFBdEQsRUFBMERVLFNBQVMsR0FBRyxFQUF0RSxFQUEwRSxRQUExRTtBQUFkLEtBQ0UsNkJBQUMsaUJBQUQ7QUFBVSxJQUFBLElBQUksRUFBQztBQUFmLElBREYsQ0FYSixDQUxGO0FBcUJELENBeEJEOztBQTBCQUQsaUJBQWlCLENBQUNRLFlBQWxCLEdBQWlDO0FBQy9CUCxFQUFBQSxTQUFTLEVBQUU7QUFEb0IsQ0FBakM7QUFJQUQsaUJBQWlCLENBQUNTLFNBQWxCLEdBQThCO0FBQzVCUixFQUFBQSxTQUFTLEVBQUVTLG1CQUFVQyxNQURPO0FBRTVCZCxFQUFBQSxlQUFlLEVBQUVhLG1CQUFVRSxPQUFWLENBQWtCRixtQkFBVUMsTUFBNUIsRUFBb0NFLFVBRnpCO0FBRzVCZixFQUFBQSxZQUFZLEVBQUVZLG1CQUFVSSxNQUFWLENBQWlCRDtBQUhILENBQTlCLEMsQ0FNQTtBQUNBOztlQUVlbkIsd0JBQXdCLEdBQUdNLGlCQUFILEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXG5cbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb3JlJztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgTG9jYWxpemUgZnJvbSAnLi4vTG9jYWxpemF0aW9uL0xvY2FsaXplJztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IHtcbiAgRGljdGF0ZVN0YXRlOiB7IERJQ1RBVElORywgU1RBUlRJTkcsIFNUT1BQSU5HIH1cbn0gPSBDb25zdGFudHM7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4J1xufSk7XG5cbmNvbnN0IGNvbm5lY3REaWN0YXRpb25JbnRlcmltcyA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgZGljdGF0ZUludGVyaW1zLCBkaWN0YXRlU3RhdGUsIGxhbmd1YWdlIH0pID0+ICh7XG4gICAgICBkaWN0YXRlSW50ZXJpbXMsXG4gICAgICBkaWN0YXRlU3RhdGUsXG4gICAgICBsYW5ndWFnZVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBEaWN0YXRpb25JbnRlcmltcyA9ICh7IGNsYXNzTmFtZSwgZGljdGF0ZUludGVyaW1zID0gW10sIGRpY3RhdGVTdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFt7IGRpY3RhdGlvbkludGVyaW1zOiBkaWN0YXRpb25JbnRlcmltc1N0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gZGljdGF0ZVN0YXRlID09PSBTVEFSVElORyB8fCBkaWN0YXRlU3RhdGUgPT09IFNUT1BQSU5HID8gKFxuICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhkaWN0YXRpb25JbnRlcmltc1N0eWxlU2V0ICsgJycsIFJPT1RfQ1NTICsgJycsIGNsYXNzTmFtZSArICcnLCAnc3RhdHVzJyl9PlxuICAgICAge2RpY3RhdGVTdGF0ZSA9PT0gU1RBUlRJTkcgJiYgPExvY2FsaXplIHRleHQ9XCJTdGFydGluZyZoZWxsaXA7XCIgLz59XG4gICAgPC9wPlxuICApIDogKFxuICAgIGRpY3RhdGVTdGF0ZSA9PT0gRElDVEFUSU5HICYmXG4gICAgICAoZGljdGF0ZUludGVyaW1zLmxlbmd0aCA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGRpY3RhdGlvbkludGVyaW1zU3R5bGVTZXQgKyAnJywgUk9PVF9DU1MgKyAnJywgY2xhc3NOYW1lICsgJycsICdkaWN0YXRpbmcnKX0+XG4gICAgICAgICAge2RpY3RhdGVJbnRlcmltcy5tYXAoKGludGVyaW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge2ludGVyaW19XG4gICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZGljdGF0aW9uSW50ZXJpbXNTdHlsZVNldCArICcnLCBST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJywgJ3N0YXR1cycpfT5cbiAgICAgICAgICA8TG9jYWxpemUgdGV4dD1cIkxpc3RlbmluZyZoZWxsaXA7XCIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgKSlcbiAgKTtcbn07XG5cbkRpY3RhdGlvbkludGVyaW1zLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuRGljdGF0aW9uSW50ZXJpbXMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpY3RhdGVJbnRlcmltczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykuaXNSZXF1aXJlZCxcbiAgZGljdGF0ZVN0YXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbi8vIFRPRE86IFtQM10gQWZ0ZXIgc3BlZWNoIHN0YXJ0ZWQsIHdoZW4gY2xpY2tpbmcgb24gdGhlIHRyYW5zY3JpcHQsIGl0IHNob3VsZFxuLy8gICAgICAgc3RvcCB0aGUgZGljdGF0aW9uIGFuZCBhbGxvdyB0aGUgdXNlciB0byB0eXBlLWNvcnJlY3QgdGhlIHRyYW5zY3JpcHRcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERpY3RhdGlvbkludGVyaW1zKCkoRGljdGF0aW9uSW50ZXJpbXMpO1xuXG5leHBvcnQgeyBjb25uZWN0RGljdGF0aW9uSW50ZXJpbXMgfTtcbiJdfQ==
