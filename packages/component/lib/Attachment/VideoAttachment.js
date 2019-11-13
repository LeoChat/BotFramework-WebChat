'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

var _VideoContent = _interopRequireDefault(require('./VideoContent'));

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

var ROOT_CSS = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column'
});

var VideoAttachment = function VideoAttachment(_ref) {
  var attachment = _ref.attachment;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    videoAttachmentStyleSet = _useStyleSet2[0].videoAttachment;

  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', videoAttachmentStyleSet + '')
    },
    _react.default.createElement(_VideoContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

VideoAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired
};
var _default = VideoAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpZGVvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiVmlkZW9BdHRhY2htZW50IiwiYXR0YWNobWVudCIsInZpZGVvQXR0YWNobWVudFN0eWxlU2V0IiwidmlkZW9BdHRhY2htZW50IiwibmFtZSIsImNvbnRlbnRVcmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGlCQUFJO0FBQ25CQyxFQUFBQSxPQUFPLEVBQUUsTUFEVTtBQUVuQkMsRUFBQUEsYUFBYSxFQUFFO0FBRkksQ0FBSixDQUFqQjs7QUFLQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxxQkFDYSw0QkFEYjtBQUFBO0FBQUEsTUFDaEJDLHVCQURnQixvQkFDakNDLGVBRGlDOztBQUcxQyxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQVdOLFFBQVEsR0FBRyxFQUF0QixFQUEwQkssdUJBQXVCLEdBQUcsRUFBcEQ7QUFBaEIsS0FDRSw2QkFBQyxxQkFBRDtBQUFjLElBQUEsR0FBRyxFQUFFRCxVQUFVLENBQUNHLElBQTlCO0FBQW9DLElBQUEsR0FBRyxFQUFFSCxVQUFVLENBQUNJO0FBQXBELElBREYsQ0FERjtBQUtELENBUkQ7O0FBVUFMLGVBQWUsQ0FBQ00sU0FBaEIsR0FBNEI7QUFDMUJMLEVBQUFBLFVBQVUsRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJILElBQUFBLFVBQVUsRUFBRUUsbUJBQVVFLE1BQVYsQ0FBaUJDLFVBREg7QUFFMUJOLElBQUFBLElBQUksRUFBRUcsbUJBQVVFO0FBRlUsR0FBaEIsRUFHVEM7QUFKdUIsQ0FBNUI7ZUFPZVYsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuaW1wb3J0IFZpZGVvQ29udGVudCBmcm9tICcuL1ZpZGVvQ29udGVudCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufSk7XG5cbmNvbnN0IFZpZGVvQXR0YWNobWVudCA9ICh7IGF0dGFjaG1lbnQgfSkgPT4ge1xuICBjb25zdCBbeyB2aWRlb0F0dGFjaG1lbnQ6IHZpZGVvQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycsIHZpZGVvQXR0YWNobWVudFN0eWxlU2V0ICsgJycpfT5cbiAgICAgIDxWaWRlb0NvbnRlbnQgYWx0PXthdHRhY2htZW50Lm5hbWV9IHNyYz17YXR0YWNobWVudC5jb250ZW50VXJsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVmlkZW9BdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0F0dGFjaG1lbnQ7XG4iXX0=
