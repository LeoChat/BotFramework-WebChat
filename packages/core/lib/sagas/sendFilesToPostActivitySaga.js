'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendFilesToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendFiles = require('../actions/sendFiles');

var _mimeWrapper = _interopRequireDefault(require('../utils/mime-wrapper'));

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithFiles),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendFilesToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendFilesToPostActivitySaga);

var getType = _mimeWrapper['default'].getType.bind(_mimeWrapper['default']);

function postActivityWithFiles(_ref) {
  var files;
  return _regenerator['default'].wrap(function postActivityWithFiles$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          files = _ref.payload.files;
          _context.next = 3;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              attachments: [].map.call(files, function(_ref2) {
                var name = _ref2.name,
                  thumbnail = _ref2.thumbnail,
                  url = _ref2.url;
                return {
                  contentType: getType(name) || 'application/octet-stream',
                  contentUrl: url,
                  name: name,
                  thumbnailUrl: thumbnail
                };
              }),
              channelData: {
                attachmentSizes: [].map.call(files, function(_ref3) {
                  var size = _ref3.size;
                  return size;
                })
              },
              type: 'message'
            })
          );

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendFilesToPostActivity() {
  return _regenerator['default'].wrap(function sendFilesToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref4) {
            var payload = _ref4.payload,
              type = _ref4.type;
            return type === _sendFiles.SEND_FILES && payload.files.length;
          }, postActivityWithFiles);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendFilesToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendFilesToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(sendFilesToPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aEZpbGVzIiwic2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHkiLCJzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJnZXRUeXBlIiwibWltZSIsImJpbmQiLCJmaWxlcyIsInBheWxvYWQiLCJhdHRhY2htZW50cyIsIm1hcCIsImNhbGwiLCJuYW1lIiwidGh1bWJuYWlsIiwidXJsIiwiY29udGVudFR5cGUiLCJjb250ZW50VXJsIiwidGh1bWJuYWlsVXJsIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJzaXplIiwidHlwZSIsIlNFTkRfRklMRVMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBSVVBLHFCOzs7NkJBaUJBQyx1Qjs7OzZCQUllQywyQjs7QUF2QnpCLElBQU1DLE9BQU8sR0FBR0Msd0JBQUtELE9BQUwsQ0FBYUUsSUFBYixDQUFrQkQsdUJBQWxCLENBQWhCOztBQUVBLFNBQVVKLHFCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Q00sVUFBQUEsS0FBN0MsUUFBa0NDLE9BQWxDLENBQTZDRCxLQUE3QztBQUFBO0FBQ0UsaUJBQU0sa0JBQ0osOEJBQWE7QUFDWEUsWUFBQUEsV0FBVyxFQUFFLEdBQUdDLEdBQUgsQ0FBT0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CO0FBQUEsa0JBQUdLLElBQUgsU0FBR0EsSUFBSDtBQUFBLGtCQUFTQyxTQUFULFNBQVNBLFNBQVQ7QUFBQSxrQkFBb0JDLEdBQXBCLFNBQW9CQSxHQUFwQjtBQUFBLHFCQUErQjtBQUM3REMsZ0JBQUFBLFdBQVcsRUFBRVgsT0FBTyxDQUFDUSxJQUFELENBQVAsSUFBaUIsMEJBRCtCO0FBRTdESSxnQkFBQUEsVUFBVSxFQUFFRixHQUZpRDtBQUc3REYsZ0JBQUFBLElBQUksRUFBSkEsSUFINkQ7QUFJN0RLLGdCQUFBQSxZQUFZLEVBQUVKO0FBSitDLGVBQS9CO0FBQUEsYUFBbkIsQ0FERjtBQU9YSyxZQUFBQSxXQUFXLEVBQUU7QUFDWEMsY0FBQUEsZUFBZSxFQUFFLEdBQUdULEdBQUgsQ0FBT0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CO0FBQUEsb0JBQUdhLElBQUgsU0FBR0EsSUFBSDtBQUFBLHVCQUFjQSxJQUFkO0FBQUEsZUFBbkI7QUFETixhQVBGO0FBVVhDLFlBQUFBLElBQUksRUFBRTtBQVZLLFdBQWIsQ0FESSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCQSxTQUFVbkIsdUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sd0JBQVU7QUFBQSxnQkFBR00sT0FBSCxTQUFHQSxPQUFIO0FBQUEsZ0JBQVlhLElBQVosU0FBWUEsSUFBWjtBQUFBLG1CQUF1QkEsSUFBSSxLQUFLQyxxQkFBVCxJQUF1QmQsT0FBTyxDQUFDRCxLQUFSLENBQWNnQixNQUE1RDtBQUFBLFdBQVYsRUFBOEV0QixxQkFBOUUsQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSwyQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSxnQ0FBZUQsdUJBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgU0VORF9GSUxFUyB9IGZyb20gJy4uL2FjdGlvbnMvc2VuZEZpbGVzJztcbmltcG9ydCBtaW1lIGZyb20gJy4uL3V0aWxzL21pbWUtd3JhcHBlcic7XG5pbXBvcnQgcG9zdEFjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvcG9zdEFjdGl2aXR5JztcbmltcG9ydCB3aGlsZUNvbm5lY3RlZCBmcm9tICcuL2VmZmVjdHMvd2hpbGVDb25uZWN0ZWQnO1xuXG5jb25zdCBnZXRUeXBlID0gbWltZS5nZXRUeXBlLmJpbmQobWltZSk7XG5cbmZ1bmN0aW9uKiBwb3N0QWN0aXZpdHlXaXRoRmlsZXMoeyBwYXlsb2FkOiB7IGZpbGVzIH0gfSkge1xuICB5aWVsZCBwdXQoXG4gICAgcG9zdEFjdGl2aXR5KHtcbiAgICAgIGF0dGFjaG1lbnRzOiBbXS5tYXAuY2FsbChmaWxlcywgKHsgbmFtZSwgdGh1bWJuYWlsLCB1cmwgfSkgPT4gKHtcbiAgICAgICAgY29udGVudFR5cGU6IGdldFR5cGUobmFtZSkgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICAgIGNvbnRlbnRVcmw6IHVybCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdGh1bWJuYWlsVXJsOiB0aHVtYm5haWxcbiAgICAgIH0pKSxcbiAgICAgIGNoYW5uZWxEYXRhOiB7XG4gICAgICAgIGF0dGFjaG1lbnRTaXplczogW10ubWFwLmNhbGwoZmlsZXMsICh7IHNpemUgfSkgPT4gc2l6ZSlcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnbWVzc2FnZSdcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiogc2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHkoKSB7XG4gIHlpZWxkIHRha2VFdmVyeSgoeyBwYXlsb2FkLCB0eXBlIH0pID0+IHR5cGUgPT09IFNFTkRfRklMRVMgJiYgcGF5bG9hZC5maWxlcy5sZW5ndGgsIHBvc3RBY3Rpdml0eVdpdGhGaWxlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHNlbmRGaWxlc1RvUG9zdEFjdGl2aXR5KTtcbn1cbiJdfQ==
