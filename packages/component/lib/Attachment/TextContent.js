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

var TextContent = function TextContent(_ref) {
  var contentType = _ref.contentType,
    renderMarkdown = _ref.renderMarkdown,
    text = _ref.text;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    textContentStyleSet = _useStyleSet2[0].textContent;

  return contentType === 'text/markdown' && renderMarkdown
    ? _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_ScreenReaderText.default, {
          text: text
        }),
        _react.default.createElement('div', {
          'aria-hidden': true,
          className: (0, _classnames.default)('markdown', textContentStyleSet + ''),
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
              className: (0, _classnames.default)('plain', textContentStyleSet + '')
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
  text: _propTypes.default.string.isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var renderMarkdown = _ref2.renderMarkdown;
  return {
    renderMarkdown: renderMarkdown
  };
})(TextContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1RleHRDb250ZW50LmpzIl0sIm5hbWVzIjpbIlRleHRDb250ZW50IiwiY29udGVudFR5cGUiLCJyZW5kZXJNYXJrZG93biIsInRleHQiLCJ0ZXh0Q29udGVudFN0eWxlU2V0IiwidGV4dENvbnRlbnQiLCJfX2h0bWwiLCJzcGxpdCIsIm1hcCIsImxpbmUiLCJpbmRleCIsInRyaW0iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUEyQztBQUFBLE1BQXhDQyxXQUF3QyxRQUF4Q0EsV0FBd0M7QUFBQSxNQUEzQkMsY0FBMkIsUUFBM0JBLGNBQTJCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUNkLDRCQURjO0FBQUE7QUFBQSxNQUN2Q0MsbUJBRHVDLG9CQUNwREMsV0FEb0Q7O0FBRzdELFNBQU9KLFdBQVcsS0FBSyxlQUFoQixJQUFtQ0MsY0FBbkMsR0FDTCw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQztBQUF4QixJQURGLEVBRUU7QUFDRSxtQkFBYSxJQURmO0FBRUUsSUFBQSxTQUFTLEVBQUUseUJBQVcsVUFBWCxFQUF1QkMsbUJBQW1CLEdBQUcsRUFBN0MsQ0FGYjtBQUdFLElBQUEsdUJBQXVCLEVBQUU7QUFBRUUsTUFBQUEsTUFBTSxFQUFFSixjQUFjLENBQUNDLElBQUksSUFBSSxFQUFUO0FBQXhCO0FBSDNCLElBRkYsQ0FESyxHQVVMLENBQUNBLElBQUksSUFBSSxFQUFULEVBQWFJLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJDLEdBQXpCLENBQTZCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQzNCLDZCQUFDLGNBQUQsQ0FBTyxRQUFQO0FBQWdCLE1BQUEsR0FBRyxFQUFFQTtBQUFyQixPQUNFLDZCQUFDLHlCQUFEO0FBQWtCLE1BQUEsSUFBSSxFQUFFUDtBQUF4QixNQURGLEVBRUU7QUFBRyxxQkFBYSxJQUFoQjtBQUFzQixNQUFBLFNBQVMsRUFBRSx5QkFBVyxPQUFYLEVBQW9CQyxtQkFBbUIsR0FBRyxFQUExQztBQUFqQyxPQUNHSyxJQUFJLENBQUNFLElBQUwsRUFESCxDQUZGLENBRDJCO0FBQUEsR0FBN0IsQ0FWRjtBQW1CRCxDQXRCRDs7QUF3QkFYLFdBQVcsQ0FBQ1ksWUFBWixHQUEyQjtBQUN6QlgsRUFBQUEsV0FBVyxFQUFFLGVBRFk7QUFFekJDLEVBQUFBLGNBQWMsRUFBRSx3QkFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUo7QUFBQTtBQUZLLENBQTNCO0FBS0FILFdBQVcsQ0FBQ2EsU0FBWixHQUF3QjtBQUN0QlosRUFBQUEsV0FBVyxFQUFFYSxtQkFBVUMsTUFERDtBQUV0QmIsRUFBQUEsY0FBYyxFQUFFWSxtQkFBVUUsSUFGSjtBQUd0QmIsRUFBQUEsSUFBSSxFQUFFVyxtQkFBVUMsTUFBVixDQUFpQkU7QUFIRCxDQUF4Qjs7ZUFNZSwrQkFBaUI7QUFBQSxNQUFHZixjQUFILFNBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUFFQSxJQUFBQSxjQUFjLEVBQWRBO0FBQUYsR0FBekI7QUFBQSxDQUFqQixFQUErREYsV0FBL0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBjb250ZW50IHJlbmRlcmVkIGhlcmUgaXMgc2FuaXRpemVkLlxuLyogZXNsaW50IHJlYWN0L25vLWRhbmdlcjogXCJvZmZcIiAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgVGV4dENvbnRlbnQgPSAoeyBjb250ZW50VHlwZSwgcmVuZGVyTWFya2Rvd24sIHRleHQgfSkgPT4ge1xuICBjb25zdCBbeyB0ZXh0Q29udGVudDogdGV4dENvbnRlbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIGNvbnRlbnRUeXBlID09PSAndGV4dC9tYXJrZG93bicgJiYgcmVuZGVyTWFya2Rvd24gPyAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17dGV4dH0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbWFya2Rvd24nLCB0ZXh0Q29udGVudFN0eWxlU2V0ICsgJycpfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlbmRlck1hcmtkb3duKHRleHQgfHwgJycpIH19XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICkgOiAoXG4gICAgKHRleHQgfHwgJycpLnNwbGl0KCdcXG4nKS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e3RleHR9IC8+XG4gICAgICAgIDxwIGFyaWEtaGlkZGVuPXt0cnVlfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3BsYWluJywgdGV4dENvbnRlbnRTdHlsZVNldCArICcnKX0+XG4gICAgICAgICAge2xpbmUudHJpbSgpfVxuICAgICAgICA8L3A+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICkpXG4gICk7XG59O1xuXG5UZXh0Q29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnRUeXBlOiAndGV4dC9tYXJrZG93bicsXG4gIHJlbmRlck1hcmtkb3duOiB0ZXh0ID0+IHRleHRcbn07XG5cblRleHRDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY29udGVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlbmRlck1hcmtkb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHJlbmRlck1hcmtkb3duIH0pID0+ICh7IHJlbmRlck1hcmtkb3duIH0pKShUZXh0Q29udGVudCk7XG4iXX0=
