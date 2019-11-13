'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _AudioContent = _interopRequireDefault(require('./AudioContent'));

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

var AudioAttachment = function AudioAttachment(_ref) {
  var attachment = _ref.attachment;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    audioAttachmentStyleSet = _useStyleSet2[0].audioAttachment;

  return _react.default.createElement(
    'div',
    {
      className: audioAttachmentStyleSet
    },
    _react.default.createElement(_AudioContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

AudioAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired
};
var _default = AudioAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0F0dGFjaG1lbnQiLCJhdHRhY2htZW50IiwiYXVkaW9BdHRhY2htZW50U3R5bGVTZXQiLCJhdWRpb0F0dGFjaG1lbnQiLCJuYW1lIiwiY29udGVudFVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxxQkFDYSw0QkFEYjtBQUFBO0FBQUEsTUFDaEJDLHVCQURnQixvQkFDakNDLGVBRGlDOztBQUcxQyxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0UsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEdBQUcsRUFBRUQsVUFBVSxDQUFDRyxJQUE5QjtBQUFvQyxJQUFBLEdBQUcsRUFBRUgsVUFBVSxDQUFDSTtBQUFwRCxJQURGLENBREY7QUFLRCxDQVJEOztBQVVBTCxlQUFlLENBQUNNLFNBQWhCLEdBQTRCO0FBQzFCTCxFQUFBQSxVQUFVLEVBQUVNLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCSCxJQUFBQSxVQUFVLEVBQUVFLG1CQUFVRSxNQUFWLENBQWlCQyxVQURIO0FBRTFCTixJQUFBQSxJQUFJLEVBQUVHLG1CQUFVRTtBQUZVLEdBQWhCLEVBR1RDO0FBSnVCLENBQTVCO2VBT2VWLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEF1ZGlvQ29udGVudCBmcm9tICcuL0F1ZGlvQ29udGVudCc7XG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBBdWRpb0F0dGFjaG1lbnQgPSAoeyBhdHRhY2htZW50IH0pID0+IHtcbiAgY29uc3QgW3sgYXVkaW9BdHRhY2htZW50OiBhdWRpb0F0dGFjaG1lbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXVkaW9BdHRhY2htZW50U3R5bGVTZXR9PlxuICAgICAgPEF1ZGlvQ29udGVudCBhbHQ9e2F0dGFjaG1lbnQubmFtZX0gc3JjPXthdHRhY2htZW50LmNvbnRlbnRVcmx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BdWRpb0F0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQXR0YWNobWVudDtcbiJdfQ==
