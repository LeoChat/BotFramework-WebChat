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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint react/no-array-index-key: "off" */
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
    dictateState = _ref2.dictateState,
    styleSet = _ref2.styleSet;
  return dictateState === STARTING || dictateState === STOPPING
    ? _react.default.createElement(
        'p',
        {
          className: (0, _classnames.default)(styleSet.dictationInterims + '', ROOT_CSS + '', className + '', 'status')
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
                  styleSet.dictationInterims + '',
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
                  styleSet.dictationInterims + '',
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
  dictateState: _propTypes.default.number.isRequired,
  styleSet: _propTypes.default.shape({
    dictationInterims: _propTypes.default.any.isRequired
  }).isRequired
}; // TODO: [P3] After speech started, when clicking on the transcript, it should
//       stop the dictation and allow the user to type-correct the transcript

var _default = connectDictationInterims(function(_ref3) {
  var styleSet = _ref3.styleSet;
  return {
    styleSet: styleSet
  };
})(DictationInterims);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0RpY3RhdGlvbkludGVyaW1zLmpzIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkRpY3RhdGVTdGF0ZSIsIkRJQ1RBVElORyIsIlNUQVJUSU5HIiwiU1RPUFBJTkciLCJST09UX0NTUyIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiY29ubmVjdERpY3RhdGlvbkludGVyaW1zIiwic2VsZWN0b3JzIiwiY29ubmVjdFRvV2ViQ2hhdCIsImRpY3RhdGVJbnRlcmltcyIsImRpY3RhdGVTdGF0ZSIsImxhbmd1YWdlIiwiRGljdGF0aW9uSW50ZXJpbXMiLCJjbGFzc05hbWUiLCJzdHlsZVNldCIsImRpY3RhdGlvbkludGVyaW1zIiwibGVuZ3RoIiwibWFwIiwiaW50ZXJpbSIsImluZGV4IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJzaGFwZSIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOzs7O0FBVkE7NEJBY0lBLGtDLENBREZDLFk7SUFBZ0JDLFMseUJBQUFBLFM7SUFBV0MsUSx5QkFBQUEsUTtJQUFVQyxRLHlCQUFBQSxRO0FBR3ZDLElBQU1DLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsVUFBVSxFQUFFLFFBRE87QUFFbkJDLEVBQUFBLE9BQU8sRUFBRTtBQUZVLENBQUosQ0FBakI7O0FBS0EsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQjtBQUFBLG9DQUFJQyxTQUFKO0FBQUlBLElBQUFBLFNBQUo7QUFBQTs7QUFBQSxTQUMvQkMseUNBQ0U7QUFBQSxRQUFHQyxlQUFILFFBQUdBLGVBQUg7QUFBQSxRQUFvQkMsWUFBcEIsUUFBb0JBLFlBQXBCO0FBQUEsUUFBa0NDLFFBQWxDLFFBQWtDQSxRQUFsQztBQUFBLFdBQWtEO0FBQ2hERixNQUFBQSxlQUFlLEVBQWZBLGVBRGdEO0FBRWhEQyxNQUFBQSxZQUFZLEVBQVpBLFlBRmdEO0FBR2hEQyxNQUFBQSxRQUFRLEVBQVJBO0FBSGdELEtBQWxEO0FBQUEsR0FERixTQU1LSixTQU5MLEVBRCtCO0FBQUEsQ0FBakM7Ozs7QUFVQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsb0NBQWNKLGVBQWQ7QUFBQSxNQUFjQSxlQUFkLHNDQUFnQyxFQUFoQztBQUFBLE1BQW9DQyxZQUFwQyxTQUFvQ0EsWUFBcEM7QUFBQSxNQUFrREksUUFBbEQsU0FBa0RBLFFBQWxEO0FBQUEsU0FDeEJKLFlBQVksS0FBS1QsUUFBakIsSUFBNkJTLFlBQVksS0FBS1IsUUFBOUMsR0FDRTtBQUFHLElBQUEsU0FBUyxFQUFFLHlCQUFXWSxRQUFRLENBQUNDLGlCQUFULEdBQTZCLEVBQXhDLEVBQTRDWixRQUFRLEdBQUcsRUFBdkQsRUFBMkRVLFNBQVMsR0FBRyxFQUF2RSxFQUEyRSxRQUEzRTtBQUFkLEtBQ0dILFlBQVksS0FBS1QsUUFBakIsSUFBNkIsNkJBQUMsaUJBQUQ7QUFBVSxJQUFBLElBQUksRUFBQztBQUFmLElBRGhDLENBREYsR0FLRVMsWUFBWSxLQUFLVixTQUFqQixLQUNDUyxlQUFlLENBQUNPLE1BQWhCLEdBQ0M7QUFBRyxJQUFBLFNBQVMsRUFBRSx5QkFBV0YsUUFBUSxDQUFDQyxpQkFBVCxHQUE2QixFQUF4QyxFQUE0Q1osUUFBUSxHQUFHLEVBQXZELEVBQTJEVSxTQUFTLEdBQUcsRUFBdkUsRUFBMkUsV0FBM0U7QUFBZCxLQUNHSixlQUFlLENBQUNRLEdBQWhCLENBQW9CLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLFdBQ25CO0FBQU0sTUFBQSxHQUFHLEVBQUVBO0FBQVgsT0FDR0QsT0FESCxTQURtQjtBQUFBLEdBQXBCLENBREgsQ0FERCxHQVVDO0FBQUcsSUFBQSxTQUFTLEVBQUUseUJBQVdKLFFBQVEsQ0FBQ0MsaUJBQVQsR0FBNkIsRUFBeEMsRUFBNENaLFFBQVEsR0FBRyxFQUF2RCxFQUEyRFUsU0FBUyxHQUFHLEVBQXZFLEVBQTJFLFFBQTNFO0FBQWQsS0FDRSw2QkFBQyxpQkFBRDtBQUFVLElBQUEsSUFBSSxFQUFDO0FBQWYsSUFERixDQVhGLENBTnNCO0FBQUEsQ0FBMUI7O0FBdUJBRCxpQkFBaUIsQ0FBQ1EsWUFBbEIsR0FBaUM7QUFDL0JQLEVBQUFBLFNBQVMsRUFBRTtBQURvQixDQUFqQztBQUlBRCxpQkFBaUIsQ0FBQ1MsU0FBbEIsR0FBOEI7QUFDNUJSLEVBQUFBLFNBQVMsRUFBRVMsbUJBQVVDLE1BRE87QUFFNUJkLEVBQUFBLGVBQWUsRUFBRWEsbUJBQVVFLE9BQVYsQ0FBa0JGLG1CQUFVQyxNQUE1QixFQUFvQ0UsVUFGekI7QUFHNUJmLEVBQUFBLFlBQVksRUFBRVksbUJBQVVJLE1BQVYsQ0FBaUJELFVBSEg7QUFJNUJYLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDeEJaLElBQUFBLGlCQUFpQixFQUFFTyxtQkFBVU0sR0FBVixDQUFjSDtBQURULEdBQWhCLEVBRVBBO0FBTnlCLENBQTlCLEMsQ0FTQTtBQUNBOztlQUVlbkIsd0JBQXdCLENBQUM7QUFBQSxNQUFHUSxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUFFQSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBbkI7QUFBQSxDQUFELENBQXhCLENBQTJERixpQkFBM0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBMb2NhbGl6ZSBmcm9tICcuLi9Mb2NhbGl6YXRpb24vTG9jYWxpemUnO1xuXG5jb25zdCB7XG4gIERpY3RhdGVTdGF0ZTogeyBESUNUQVRJTkcsIFNUQVJUSU5HLCBTVE9QUElORyB9XG59ID0gQ29uc3RhbnRzO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBkaXNwbGF5OiAnZmxleCdcbn0pO1xuXG5jb25zdCBjb25uZWN0RGljdGF0aW9uSW50ZXJpbXMgPSAoLi4uc2VsZWN0b3JzKSA9PlxuICBjb25uZWN0VG9XZWJDaGF0KFxuICAgICh7IGRpY3RhdGVJbnRlcmltcywgZGljdGF0ZVN0YXRlLCBsYW5ndWFnZSB9KSA9PiAoe1xuICAgICAgZGljdGF0ZUludGVyaW1zLFxuICAgICAgZGljdGF0ZVN0YXRlLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgRGljdGF0aW9uSW50ZXJpbXMgPSAoeyBjbGFzc05hbWUsIGRpY3RhdGVJbnRlcmltcyA9IFtdLCBkaWN0YXRlU3RhdGUsIHN0eWxlU2V0IH0pID0+XG4gIGRpY3RhdGVTdGF0ZSA9PT0gU1RBUlRJTkcgfHwgZGljdGF0ZVN0YXRlID09PSBTVE9QUElORyA/IChcbiAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVTZXQuZGljdGF0aW9uSW50ZXJpbXMgKyAnJywgUk9PVF9DU1MgKyAnJywgY2xhc3NOYW1lICsgJycsICdzdGF0dXMnKX0+XG4gICAgICB7ZGljdGF0ZVN0YXRlID09PSBTVEFSVElORyAmJiA8TG9jYWxpemUgdGV4dD1cIlN0YXJ0aW5nJmhlbGxpcDtcIiAvPn1cbiAgICA8L3A+XG4gICkgOiAoXG4gICAgZGljdGF0ZVN0YXRlID09PSBESUNUQVRJTkcgJiZcbiAgICAoZGljdGF0ZUludGVyaW1zLmxlbmd0aCA/IChcbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5kaWN0YXRpb25JbnRlcmltcyArICcnLCBST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJywgJ2RpY3RhdGluZycpfT5cbiAgICAgICAge2RpY3RhdGVJbnRlcmltcy5tYXAoKGludGVyaW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7aW50ZXJpbX1cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3A+XG4gICAgKSA6IChcbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5kaWN0YXRpb25JbnRlcmltcyArICcnLCBST09UX0NTUyArICcnLCBjbGFzc05hbWUgKyAnJywgJ3N0YXR1cycpfT5cbiAgICAgICAgPExvY2FsaXplIHRleHQ9XCJMaXN0ZW5pbmcmaGVsbGlwO1wiIC8+XG4gICAgICA8L3A+XG4gICAgKSlcbiAgKTtcblxuRGljdGF0aW9uSW50ZXJpbXMuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59O1xuXG5EaWN0YXRpb25JbnRlcmltcy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGljdGF0ZUludGVyaW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBkaWN0YXRlU3RhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGljdGF0aW9uSW50ZXJpbXM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG4vLyBUT0RPOiBbUDNdIEFmdGVyIHNwZWVjaCBzdGFydGVkLCB3aGVuIGNsaWNraW5nIG9uIHRoZSB0cmFuc2NyaXB0LCBpdCBzaG91bGRcbi8vICAgICAgIHN0b3AgdGhlIGRpY3RhdGlvbiBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gdHlwZS1jb3JyZWN0IHRoZSB0cmFuc2NyaXB0XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REaWN0YXRpb25JbnRlcmltcygoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoRGljdGF0aW9uSW50ZXJpbXMpO1xuXG5leHBvcnQgeyBjb25uZWN0RGljdGF0aW9uSW50ZXJpbXMgfTtcbiJdfQ==
