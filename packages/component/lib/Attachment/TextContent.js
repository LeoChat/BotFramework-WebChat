'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// The content rendered here is sanitized.

/* eslint react/no-danger: "off" */

/* eslint react/no-array-index-key: "off" */
var TextContent = function TextContent(_ref) {
  var contentType = _ref.contentType,
    renderMarkdown = _ref.renderMarkdown,
    styleSet = _ref.styleSet,
    text = _ref.text;
  return contentType === 'text/markdown' && renderMarkdown
    ? _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: text
        }),
        _react.default.createElement('div', {
          'aria-hidden': true,
          className: (0, _classnames.default)('markdown', styleSet.textContent + ''),
          dangerouslySetInnerHTML: {
            __html: renderMarkdown(text || '')
          }
        })
      )
    : (text || '').split('\n').map(function(line, index) {
        return _react.default.createElement(
          _react.default.Fragment,
          {
            key: index
          },
          _react.default.createElement(_ScreenReaderText.default, {
            text: text
          }),
          _react.default.createElement(
            'p',
            {
              'aria-hidden': true,
              className: (0, _classnames.default)('plain', styleSet.textContent + '')
            },
            line.trim()
          )
        );
      });
};

TextContent.defaultProps = {
  contentType: 'text/markdown',
  renderMarkdown: function renderMarkdown(text) {
    return text;
  }
};
TextContent.propTypes = {
  contentType: _propTypes.default.string,
  renderMarkdown: _propTypes.default.func,
  styleSet: _propTypes.default.shape({
    textContent: _propTypes.default.any.isRequired
  }).isRequired,
  text: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var renderMarkdown = _ref2.renderMarkdown,
    styleSet = _ref2.styleSet;
  return {
    renderMarkdown: renderMarkdown,
    styleSet: styleSet
  };
})(TextContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1RleHRDb250ZW50LmpzIl0sIm5hbWVzIjpbIlRleHRDb250ZW50IiwiY29udGVudFR5cGUiLCJyZW5kZXJNYXJrZG93biIsInN0eWxlU2V0IiwidGV4dCIsInRleHRDb250ZW50IiwiX19odG1sIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiaW5kZXgiLCJ0cmltIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsInNoYXBlIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBVEE7O0FBQ0E7O0FBQ0E7QUFTQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLE1BQWdCQyxjQUFoQixRQUFnQkEsY0FBaEI7QUFBQSxNQUFnQ0MsUUFBaEMsUUFBZ0NBLFFBQWhDO0FBQUEsTUFBMENDLElBQTFDLFFBQTBDQSxJQUExQztBQUFBLFNBQ2xCSCxXQUFXLEtBQUssZUFBaEIsSUFBbUNDLGNBQW5DLEdBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDRSw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUU7QUFBeEIsSUFERixFQUVFO0FBQ0UsbUJBQWEsSUFEZjtBQUVFLElBQUEsU0FBUyxFQUFFLHlCQUFXLFVBQVgsRUFBdUJELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QixFQUE5QyxDQUZiO0FBR0UsSUFBQSx1QkFBdUIsRUFBRTtBQUFFQyxNQUFBQSxNQUFNLEVBQUVKLGNBQWMsQ0FBQ0UsSUFBSSxJQUFJLEVBQVQ7QUFBeEI7QUFIM0IsSUFGRixDQURGLEdBVUUsQ0FBQ0EsSUFBSSxJQUFJLEVBQVQsRUFBYUcsS0FBYixDQUFtQixJQUFuQixFQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDM0IsNkJBQUMsY0FBRCxDQUFPLFFBQVA7QUFBZ0IsTUFBQSxHQUFHLEVBQUVBO0FBQXJCLE9BQ0UsNkJBQUMseUJBQUQ7QUFBa0IsTUFBQSxJQUFJLEVBQUVOO0FBQXhCLE1BREYsRUFFRTtBQUFHLHFCQUFhLElBQWhCO0FBQXNCLE1BQUEsU0FBUyxFQUFFLHlCQUFXLE9BQVgsRUFBb0JELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QixFQUEzQztBQUFqQyxPQUNHSSxJQUFJLENBQUNFLElBQUwsRUFESCxDQUZGLENBRDJCO0FBQUEsR0FBN0IsQ0FYZ0I7QUFBQSxDQUFwQjs7QUFxQkFYLFdBQVcsQ0FBQ1ksWUFBWixHQUEyQjtBQUN6QlgsRUFBQUEsV0FBVyxFQUFFLGVBRFk7QUFFekJDLEVBQUFBLGNBQWMsRUFBRSx3QkFBQUUsSUFBSTtBQUFBLFdBQUlBLElBQUo7QUFBQTtBQUZLLENBQTNCO0FBS0FKLFdBQVcsQ0FBQ2EsU0FBWixHQUF3QjtBQUN0QlosRUFBQUEsV0FBVyxFQUFFYSxtQkFBVUMsTUFERDtBQUV0QmIsRUFBQUEsY0FBYyxFQUFFWSxtQkFBVUUsSUFGSjtBQUd0QmIsRUFBQUEsUUFBUSxFQUFFVyxtQkFBVUcsS0FBVixDQUFnQjtBQUN4QlosSUFBQUEsV0FBVyxFQUFFUyxtQkFBVUksR0FBVixDQUFjQztBQURILEdBQWhCLEVBRVBBLFVBTG1CO0FBTXRCZixFQUFBQSxJQUFJLEVBQUVVLG1CQUFVQyxNQUFWLENBQWlCSTtBQU5ELENBQXhCOztlQVNlLCtCQUFpQjtBQUFBLE1BQUdqQixjQUFILFNBQUdBLGNBQUg7QUFBQSxNQUFtQkMsUUFBbkIsU0FBbUJBLFFBQW5CO0FBQUEsU0FBbUM7QUFBRUQsSUFBQUEsY0FBYyxFQUFkQSxjQUFGO0FBQWtCQyxJQUFBQSxRQUFRLEVBQVJBO0FBQWxCLEdBQW5DO0FBQUEsQ0FBakIsRUFBbUZILFdBQW5GLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgY29udGVudCByZW5kZXJlZCBoZXJlIGlzIHNhbml0aXplZC5cbi8qIGVzbGludCByZWFjdC9uby1kYW5nZXI6IFwib2ZmXCIgKi9cbi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcblxuY29uc3QgVGV4dENvbnRlbnQgPSAoeyBjb250ZW50VHlwZSwgcmVuZGVyTWFya2Rvd24sIHN0eWxlU2V0LCB0ZXh0IH0pID0+XG4gIGNvbnRlbnRUeXBlID09PSAndGV4dC9tYXJrZG93bicgJiYgcmVuZGVyTWFya2Rvd24gPyAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17dGV4dH0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbWFya2Rvd24nLCBzdHlsZVNldC50ZXh0Q29udGVudCArICcnKX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiByZW5kZXJNYXJrZG93bih0ZXh0IHx8ICcnKSB9fVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApIDogKFxuICAgICh0ZXh0IHx8ICcnKS5zcGxpdCgnXFxuJykubWFwKChsaW5lLCBpbmRleCkgPT4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgICA8cCBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdwbGFpbicsIHN0eWxlU2V0LnRleHRDb250ZW50ICsgJycpfT5cbiAgICAgICAgICB7bGluZS50cmltKCl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSlcbiAgKTtcblxuVGV4dENvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50VHlwZTogJ3RleHQvbWFya2Rvd24nLFxuICByZW5kZXJNYXJrZG93bjogdGV4dCA9PiB0ZXh0XG59O1xuXG5UZXh0Q29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZW5kZXJNYXJrZG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRleHRDb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHJlbmRlck1hcmtkb3duLCBzdHlsZVNldCB9KSA9PiAoeyByZW5kZXJNYXJrZG93biwgc3R5bGVTZXQgfSkpKFRleHRDb250ZW50KTtcbiJdfQ==
