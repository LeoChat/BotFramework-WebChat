'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _CommonCard = _interopRequireDefault(require('./CommonCard'));

/* eslint react/no-array-index-key: "off" */
var AudioContent = _botframeworkWebchatComponent.Components.AudioContent;

var AudioCardAttachment = function AudioCardAttachment(_ref) {
  var adaptiveCardHostConfig = _ref.adaptiveCardHostConfig,
    adaptiveCards = _ref.adaptiveCards,
    attachment = _ref.attachment,
    _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content;
  _ref$attachment$conte = _ref$attachment$conte === void 0 ? {} : _ref$attachment$conte;
  var _ref$attachment$conte2 = _ref$attachment$conte.autostart,
    autostart = _ref$attachment$conte2 === void 0 ? false : _ref$attachment$conte2,
    _ref$attachment$conte3 = _ref$attachment$conte.autoloop,
    autoloop = _ref$attachment$conte3 === void 0 ? false : _ref$attachment$conte3,
    _ref$attachment$conte4 = _ref$attachment$conte.image;
  _ref$attachment$conte4 = _ref$attachment$conte4 === void 0 ? {} : _ref$attachment$conte4;
  var _ref$attachment$conte5 = _ref$attachment$conte4.url,
    imageURL = _ref$attachment$conte5 === void 0 ? '' : _ref$attachment$conte5,
    _ref$attachment$conte6 = _ref$attachment$conte.media,
    media = _ref$attachment$conte6 === void 0 ? [] : _ref$attachment$conte6,
    styleSet = _ref.styleSet;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.audioCardAttachment
    },
    _react.default.createElement(
      'ul',
      {
        className: 'media-list'
      },
      media.map(function(_ref2, index) {
        var url = _ref2.url;
        return _react.default.createElement(
          'li',
          {
            key: index
          },
          _react.default.createElement(AudioContent, {
            autoPlay: autostart,
            loop: autoloop,
            poster: imageURL,
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

AudioCardAttachment.propTypes = {
  adaptiveCardHostConfig: _propTypes.default.any.isRequired,
  adaptiveCards: _propTypes.default.any.isRequired,
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autostart: _propTypes.default.bool,
      autoloop: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string.isRequired
      }),
      media: _propTypes.default.arrayOf(
        _propTypes.default.shape({
          url: _propTypes.default.string.isRequired
        }).isRequired
      ).isRequired
    })
  }).isRequired,
  styleSet: _propTypes.default.shape({
    audioCardAttachment: _propTypes.default.any.isRequired,
    options: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _botframeworkWebchatComponent.connectToWebChat)(function(_ref3) {
  var styleSet = _ref3.styleSet;
  return {
    styleSet: styleSet
  };
})(AudioCardAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJDb21wb25lbnRzIiwiQXVkaW9DYXJkQXR0YWNobWVudCIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzIiwiYXR0YWNobWVudCIsImNvbnRlbnQiLCJhdXRvc3RhcnQiLCJhdXRvbG9vcCIsImltYWdlIiwidXJsIiwiaW1hZ2VVUkwiLCJtZWRpYSIsInN0eWxlU2V0IiwiYXVkaW9DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYm9vbCIsInN0cmluZyIsImFycmF5T2YiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFOQTtJQVFRQSxZLEdBQWlCQyx3QyxDQUFqQkQsWTs7QUFFUixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCO0FBQUEsTUFDMUJDLHNCQUQwQixRQUMxQkEsc0JBRDBCO0FBQUEsTUFFMUJDLGFBRjBCLFFBRTFCQSxhQUYwQjtBQUFBLE1BRzFCQyxVQUgwQixRQUcxQkEsVUFIMEI7QUFBQSw2QkFJMUJBLFVBSjBCO0FBQUEsaURBTXRCLEVBTnNCO0FBQUEsOENBS3hCQyxPQUx3QjtBQUFBLDZEQUsyRSxFQUwzRTtBQUFBLHFEQUtiQyxTQUxhO0FBQUEsTUFLYkEsU0FMYSx1Q0FLRCxLQUxDO0FBQUEscURBS01DLFFBTE47QUFBQSxNQUtNQSxRQUxOLHVDQUtpQixLQUxqQjtBQUFBLHFEQUt3QkMsS0FMeEI7QUFBQSwrREFLd0QsRUFMeEQ7QUFBQSxzREFLaUNDLEdBTGpDO0FBQUEsTUFLc0NDLFFBTHRDLHVDQUtpRCxFQUxqRDtBQUFBLHFEQUs0REMsS0FMNUQ7QUFBQSxNQUs0REEsS0FMNUQsdUNBS29FLEVBTHBFO0FBQUEsTUFPMUJDLFFBUDBCLFFBTzFCQSxRQVAwQjtBQUFBLFNBUzFCO0FBQUssSUFBQSxTQUFTLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBekIsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsaUJBQVVDLEtBQVY7QUFBQSxRQUFHTixHQUFILFNBQUdBLEdBQUg7QUFBQSxXQUNUO0FBQUksTUFBQSxHQUFHLEVBQUVNO0FBQVQsT0FDRSw2QkFBQyxZQUFEO0FBQWMsTUFBQSxRQUFRLEVBQUVULFNBQXhCO0FBQW1DLE1BQUEsSUFBSSxFQUFFQyxRQUF6QztBQUFtRCxNQUFBLE1BQU0sRUFBRUcsUUFBM0Q7QUFBcUUsTUFBQSxHQUFHLEVBQUVEO0FBQTFFLE1BREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGLEVBUUUsNkJBQUMsbUJBQUQ7QUFBWSxJQUFBLHNCQUFzQixFQUFFUCxzQkFBcEM7QUFBNEQsSUFBQSxhQUFhLEVBQUVDLGFBQTNFO0FBQTBGLElBQUEsVUFBVSxFQUFFQztBQUF0RyxJQVJGLENBVDBCO0FBQUEsQ0FBNUI7O0FBcUJBSCxtQkFBbUIsQ0FBQ2UsU0FBcEIsR0FBZ0M7QUFDOUJkLEVBQUFBLHNCQUFzQixFQUFFZSxtQkFBVUMsR0FBVixDQUFjQyxVQURSO0FBRTlCaEIsRUFBQUEsYUFBYSxFQUFFYyxtQkFBVUMsR0FBVixDQUFjQyxVQUZDO0FBRzlCZixFQUFBQSxVQUFVLEVBQUVhLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCZixJQUFBQSxPQUFPLEVBQUVZLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCZCxNQUFBQSxTQUFTLEVBQUVXLG1CQUFVSSxJQURFO0FBRXZCZCxNQUFBQSxRQUFRLEVBQUVVLG1CQUFVSSxJQUZHO0FBR3ZCYixNQUFBQSxLQUFLLEVBQUVTLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3JCWCxRQUFBQSxHQUFHLEVBQUVRLG1CQUFVSyxNQUFWLENBQWlCSDtBQURELE9BQWhCLENBSGdCO0FBTXZCUixNQUFBQSxLQUFLLEVBQUVNLG1CQUFVTSxPQUFWLENBQ0xOLG1CQUFVRyxLQUFWLENBQWdCO0FBQ2RYLFFBQUFBLEdBQUcsRUFBRVEsbUJBQVVLLE1BQVYsQ0FBaUJIO0FBRFIsT0FBaEIsRUFFR0EsVUFIRSxFQUlMQTtBQVZxQixLQUFoQjtBQURpQixHQUFoQixFQWFUQSxVQWhCMkI7QUFpQjlCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCUCxJQUFBQSxtQkFBbUIsRUFBRUksbUJBQVVDLEdBQVYsQ0FBY0MsVUFEWDtBQUV4QkssSUFBQUEsT0FBTyxFQUFFUCxtQkFBVUMsR0FBVixDQUFjQztBQUZDLEdBQWhCLEVBR1BBO0FBcEIyQixDQUFoQzs7ZUF1QmUsb0RBQWlCO0FBQUEsTUFBR1AsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQW5CO0FBQUEsQ0FBakIsRUFBbURYLG1CQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBjb25uZWN0VG9XZWJDaGF0IH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29tbW9uQ2FyZCBmcm9tICcuL0NvbW1vbkNhcmQnO1xuXG5jb25zdCB7IEF1ZGlvQ29udGVudCB9ID0gQ29tcG9uZW50cztcblxuY29uc3QgQXVkaW9DYXJkQXR0YWNobWVudCA9ICh7XG4gIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcsXG4gIGFkYXB0aXZlQ2FyZHMsXG4gIGF0dGFjaG1lbnQsXG4gIGF0dGFjaG1lbnQ6IHtcbiAgICBjb250ZW50OiB7IGF1dG9zdGFydCA9IGZhbHNlLCBhdXRvbG9vcCA9IGZhbHNlLCBpbWFnZTogeyB1cmw6IGltYWdlVVJMID0gJycgfSA9IHt9LCBtZWRpYSA9IFtdIH0gPSB7fVxuICB9ID0ge30sXG4gIHN0eWxlU2V0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVNldC5hdWRpb0NhcmRBdHRhY2htZW50fT5cbiAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxuICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxBdWRpb0NvbnRlbnQgYXV0b1BsYXk9e2F1dG9zdGFydH0gbG9vcD17YXV0b2xvb3B9IHBvc3Rlcj17aW1hZ2VVUkx9IHNyYz17dXJsfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8Q29tbW9uQ2FyZCBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnfSBhZGFwdGl2ZUNhcmRzPXthZGFwdGl2ZUNhcmRzfSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxuICA8L2Rpdj5cbik7XG5cbkF1ZGlvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGFkYXB0aXZlQ2FyZHM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGF1dG9sb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSksXG4gICAgICBtZWRpYTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICAgKS5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXVkaW9DYXJkQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShBdWRpb0NhcmRBdHRhY2htZW50KTtcbiJdfQ==
