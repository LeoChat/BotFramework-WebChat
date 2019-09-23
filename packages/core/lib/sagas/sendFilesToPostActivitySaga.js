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
                  url = _ref2.url;
                return {
                  contentType: getType(name) || 'application/octet-stream',
                  contentUrl: url,
                  name: name
                };
              }),
              channelData: {
                attachmentSizes: [].map.call(files, function(_ref3) {
                  var size = _ref3.size;
                  return size;
                }),
                attachmentThumbnails: [].map.call(files, function(_ref4) {
                  var thumbnail = _ref4.thumbnail;
                  return thumbnail;
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
          return (0, _effects.takeEvery)(function(_ref5) {
            var payload = _ref5.payload,
              type = _ref5.type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aEZpbGVzIiwic2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHkiLCJzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJnZXRUeXBlIiwibWltZSIsImJpbmQiLCJmaWxlcyIsInBheWxvYWQiLCJhdHRhY2htZW50cyIsIm1hcCIsImNhbGwiLCJuYW1lIiwidXJsIiwiY29udGVudFR5cGUiLCJjb250ZW50VXJsIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJzaXplIiwiYXR0YWNobWVudFRodW1ibmFpbHMiLCJ0aHVtYm5haWwiLCJ0eXBlIiwiU0VORF9GSUxFUyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs2QkFJVUEscUI7Ozs2QkFpQkFDLHVCOzs7NkJBSWVDLDJCOztBQXZCekIsSUFBTUMsT0FBTyxHQUFHQyx3QkFBS0QsT0FBTCxDQUFhRSxJQUFiLENBQWtCRCx1QkFBbEIsQ0FBaEI7O0FBRUEsU0FBVUoscUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDTSxVQUFBQSxLQUE3QyxRQUFrQ0MsT0FBbEMsQ0FBNkNELEtBQTdDO0FBQUE7QUFDRSxpQkFBTSxrQkFDSiw4QkFBYTtBQUNYRSxZQUFBQSxXQUFXLEVBQUUsR0FBR0MsR0FBSCxDQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUI7QUFBQSxrQkFBR0ssSUFBSCxTQUFHQSxJQUFIO0FBQUEsa0JBQVNDLEdBQVQsU0FBU0EsR0FBVDtBQUFBLHFCQUFvQjtBQUNsREMsZ0JBQUFBLFdBQVcsRUFBRVYsT0FBTyxDQUFDUSxJQUFELENBQVAsSUFBaUIsMEJBRG9CO0FBRWxERyxnQkFBQUEsVUFBVSxFQUFFRixHQUZzQztBQUdsREQsZ0JBQUFBLElBQUksRUFBSkE7QUFIa0QsZUFBcEI7QUFBQSxhQUFuQixDQURGO0FBTVhJLFlBQUFBLFdBQVcsRUFBRTtBQUNYQyxjQUFBQSxlQUFlLEVBQUUsR0FBR1AsR0FBSCxDQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUI7QUFBQSxvQkFBR1csSUFBSCxTQUFHQSxJQUFIO0FBQUEsdUJBQWNBLElBQWQ7QUFBQSxlQUFuQixDQUROO0FBRVhDLGNBQUFBLG9CQUFvQixFQUFFLEdBQUdULEdBQUgsQ0FBT0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CO0FBQUEsb0JBQUdhLFNBQUgsU0FBR0EsU0FBSDtBQUFBLHVCQUFtQkEsU0FBbkI7QUFBQSxlQUFuQjtBQUZYLGFBTkY7QUFVWEMsWUFBQUEsSUFBSSxFQUFFO0FBVkssV0FBYixDQURJLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVVuQix1QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFBVTtBQUFBLGdCQUFHTSxPQUFILFNBQUdBLE9BQUg7QUFBQSxnQkFBWWEsSUFBWixTQUFZQSxJQUFaO0FBQUEsbUJBQXVCQSxJQUFJLEtBQUtDLHFCQUFULElBQXVCZCxPQUFPLENBQUNELEtBQVIsQ0FBY2dCLE1BQTVEO0FBQUEsV0FBVixFQUE4RXRCLHFCQUE5RSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLDJCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCx1QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRU5EX0ZJTEVTIH0gZnJvbSAnLi4vYWN0aW9ucy9zZW5kRmlsZXMnO1xuaW1wb3J0IG1pbWUgZnJvbSAnLi4vdXRpbHMvbWltZS13cmFwcGVyJztcbmltcG9ydCBwb3N0QWN0aXZpdHkgZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmNvbnN0IGdldFR5cGUgPSBtaW1lLmdldFR5cGUuYmluZChtaW1lKTtcblxuZnVuY3Rpb24qIHBvc3RBY3Rpdml0eVdpdGhGaWxlcyh7IHBheWxvYWQ6IHsgZmlsZXMgfSB9KSB7XG4gIHlpZWxkIHB1dChcbiAgICBwb3N0QWN0aXZpdHkoe1xuICAgICAgYXR0YWNobWVudHM6IFtdLm1hcC5jYWxsKGZpbGVzLCAoeyBuYW1lLCB1cmwgfSkgPT4gKHtcbiAgICAgICAgY29udGVudFR5cGU6IGdldFR5cGUobmFtZSkgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICAgIGNvbnRlbnRVcmw6IHVybCxcbiAgICAgICAgbmFtZVxuICAgICAgfSkpLFxuICAgICAgY2hhbm5lbERhdGE6IHtcbiAgICAgICAgYXR0YWNobWVudFNpemVzOiBbXS5tYXAuY2FsbChmaWxlcywgKHsgc2l6ZSB9KSA9PiBzaXplKSxcbiAgICAgICAgYXR0YWNobWVudFRodW1ibmFpbHM6IFtdLm1hcC5jYWxsKGZpbGVzLCAoeyB0aHVtYm5haWwgfSkgPT4gdGh1bWJuYWlsKVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdtZXNzYWdlJ1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gU0VORF9GSUxFUyAmJiBwYXlsb2FkLmZpbGVzLmxlbmd0aCwgcG9zdEFjdGl2aXR5V2l0aEZpbGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlbmRGaWxlc1RvUG9zdEFjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHkpO1xufVxuIl19
