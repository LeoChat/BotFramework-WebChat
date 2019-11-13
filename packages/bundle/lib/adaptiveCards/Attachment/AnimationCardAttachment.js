'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

/* eslint react/no-array-index-key: "off" */
var ImageContent = _botframeworkWebchatComponent.Components.ImageContent,
  VideoContent = _botframeworkWebchatComponent.Components.VideoContent;
var useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;

var AnimationCardAttachment = function AnimationCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    attachment = _ref.attachment,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content.media,
    media = _ref$attachment$conte === void 0 ? [] : _ref$attachment$conte;

  var _useStyleSet = useStyleSet(),
    _useStyleSet2 = (0, _slicedToArray2.default)(_useStyleSet, 1),
    animationCardAttachmentStyleSet = _useStyleSet2[0].animationCardAttachment;

  return _react.default.createElement(
    'div',
    {
      className: animationCardAttachmentStyleSet
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref2, index) {
        var _ref2$profile = _ref2.profile,
          profile = _ref2$profile === void 0 ? '' : _ref2$profile,
          url = _ref2.url;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          /\.gif$/i.test(url)
            ? _react.default.createElement(ImageContent, {
                alt: profile,
                src: url
              })
            : _react.default.createElement(VideoContent, {
                alt: profile,
                src: url
              })
        );
      })
    ),
    _react.default.createElement(_CommonCard.default, {
      adaptiveCardHostConfig: adaptiveCardHostConfig,
      adaptiveCards: adaptiveCards,
      attachment: attachment
    })
  );
};

AnimationCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          profile: _propTypes.default.string,
          url: _propTypes.default.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};
var _default = AnimationCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiSW1hZ2VDb250ZW50IiwiQ29tcG9uZW50cyIsIlZpZGVvQ29udGVudCIsInVzZVN0eWxlU2V0IiwiaG9va3MiLCJBbmltYXRpb25DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJtZWRpYSIsImFuaW1hdGlvbkNhcmRBdHRhY2htZW50U3R5bGVTZXQiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvZmlsZSIsInVybCIsInRlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQU5BO0lBUVFBLFksR0FBK0JDLHdDLENBQS9CRCxZO0lBQWNFLFksR0FBaUJELHdDLENBQWpCQyxZO0lBQ2RDLFcsR0FBZ0JDLG1DLENBQWhCRCxXOztBQUVSLElBQU1FLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsT0FLMUI7QUFBQSxNQUpKQyxzQkFJSSxRQUpKQSxzQkFJSTtBQUFBLE1BSEpDLGFBR0ksUUFISkEsYUFHSTtBQUFBLE1BRkpDLFVBRUksUUFGSkEsVUFFSTtBQUFBLDZCQURKQSxVQUNJO0FBQUEsaURBRHNDLEVBQ3RDO0FBQUEsOENBRFVDLE9BQ1YsQ0FEcUJDLEtBQ3JCO0FBQUEsTUFEcUJBLEtBQ3JCLHNDQUQ2QixFQUM3Qjs7QUFBQSxxQkFDbUVQLFdBQVcsRUFEOUU7QUFBQTtBQUFBLE1BQzhCUSwrQkFEOUIsb0JBQ0tDLHVCQURMOztBQUdKLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUQ7QUFBaEIsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0QsS0FBSyxDQUFDRyxHQUFOLENBQVUsaUJBQXdCQyxLQUF4QjtBQUFBLDhCQUFHQyxPQUFIO0FBQUEsUUFBR0EsT0FBSCw4QkFBYSxFQUFiO0FBQUEsUUFBaUJDLEdBQWpCLFNBQWlCQSxHQUFqQjtBQUFBLFdBQ1Q7QUFBSSxNQUFBLEdBQUcsRUFBRUY7QUFBVCxPQUNHLFVBQVdHLElBQVgsQ0FBZ0JELEdBQWhCLElBQXVCLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEdBQUcsRUFBRUQsT0FBbkI7QUFBNEIsTUFBQSxHQUFHLEVBQUVDO0FBQWpDLE1BQXZCLEdBQWtFLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEdBQUcsRUFBRUQsT0FBbkI7QUFBNEIsTUFBQSxHQUFHLEVBQUVDO0FBQWpDLE1BRHJFLENBRFM7QUFBQSxHQUFWLENBREgsQ0FERixFQVFFLDZCQUFDLG1CQUFEO0FBQ0UsSUFBQSxzQkFBc0IsRUFBRVYsc0JBRDFCO0FBRUUsSUFBQSxhQUFhLEVBQUVDLGFBRmpCO0FBR0UsSUFBQSxVQUFVLEVBQUVDO0FBSGQsSUFSRixDQURGO0FBZ0JELENBeEJEOztBQTBCQUgsdUJBQXVCLENBQUNhLFNBQXhCLEdBQW9DO0FBQ2xDWixFQUFBQSxzQkFBc0IsRUFBRWEsbUJBQVVDLEdBQVYsQ0FBY0MsVUFESjtBQUVsQ2QsRUFBQUEsYUFBYSxFQUFFWSxtQkFBVUMsR0FBVixDQUFjQyxVQUZLO0FBR2xDYixFQUFBQSxVQUFVLEVBQUVXLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVVLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCWixNQUFBQSxLQUFLLEVBQUVTLG1CQUFVSSxPQUFWLENBQ0xKLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RQLFFBQUFBLE9BQU8sRUFBRUksbUJBQVVLLE1BREw7QUFFZFIsUUFBQUEsR0FBRyxFQUFFRyxtQkFBVUssTUFBVixDQUFpQkg7QUFGUixPQUFoQixDQURLLEVBS0xBO0FBTnFCLEtBQWhCLEVBT05BO0FBUnVCLEdBQWhCLEVBU1RBO0FBWitCLENBQXBDO2VBZWVoQix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50cywgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tb25DYXJkIGZyb20gJy4vQ29tbW9uQ2FyZCc7XG5cbmNvbnN0IHsgSW1hZ2VDb250ZW50LCBWaWRlb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XG5jb25zdCB7IHVzZVN0eWxlU2V0IH0gPSBob29rcztcblxuY29uc3QgQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQgPSAoe1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnLFxuICBhZGFwdGl2ZUNhcmRzLFxuICBhdHRhY2htZW50LFxuICBhdHRhY2htZW50OiB7IGNvbnRlbnQ6IHsgbWVkaWEgPSBbXSB9IH0gPSB7fVxufSkgPT4ge1xuICBjb25zdCBbeyBhbmltYXRpb25DYXJkQXR0YWNobWVudDogYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZVNldH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxuICAgICAgICB7bWVkaWEubWFwKCh7IHByb2ZpbGUgPSAnJywgdXJsIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgey9cXC5naWYkL2l1LnRlc3QodXJsKSA/IDxJbWFnZUNvbnRlbnQgYWx0PXtwcm9maWxlfSBzcmM9e3VybH0gLz4gOiA8VmlkZW9Db250ZW50IGFsdD17cHJvZmlsZX0gc3JjPXt1cmx9IC8+fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxDb21tb25DYXJkXG4gICAgICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWd9XG4gICAgICAgIGFkYXB0aXZlQ2FyZHM9e2FkYXB0aXZlQ2FyZHN9XG4gICAgICAgIGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHByb2ZpbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSlcbiAgICAgICkuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQ7XG4iXX0=
