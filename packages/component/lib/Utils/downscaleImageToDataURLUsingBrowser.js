'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = downscaleImageToDataURLUsingBrowser;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function keepAspectRatio(width, height, maxWidth, maxHeight) {
  if (width < maxWidth && height < maxHeight) {
    // Photo is smaller than both maximum dimensions, take it as-is
    return {
      height: height,
      width: width
    };
  }

  var aspectRatio = width / height;

  if (aspectRatio > maxWidth / maxHeight) {
    // Photo is wider than maximum dimension, downscale it based on maxWidth.
    return {
      height: maxWidth / aspectRatio,
      width: maxWidth
    };
  } // Photo is taller than maximum dimension, downscale it based on maxHeight.

  return {
    height: maxHeight,
    width: maxHeight * aspectRatio
  };
}

function createCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  return canvas;
}

function loadImageFromBlob(blob) {
  var blobURL = URL.createObjectURL(blob);
  return new Promise(function(resolve, reject) {
    var image = document.createElement('img');
    image.addEventListener('error', function(_ref) {
      var error = _ref.error;
      return reject(error);
    });
    image.addEventListener('load', function() {
      return resolve(image);
    });
    image.setAttribute('src', blobURL);
  }).finally(function() {
    URL.revokeObjectURL(blobURL);
  });
}

function downscaleImageToDataURLUsingBrowser(_x, _x2, _x3, _x4, _x5) {
  return _downscaleImageToDataURLUsingBrowser.apply(this, arguments);
}

function _downscaleImageToDataURLUsingBrowser() {
  _downscaleImageToDataURLUsingBrowser = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(blob, maxWidth, maxHeight, type, quality) {
      var image, _keepAspectRatio, height, width, canvas, context;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return loadImageFromBlob(blob);

            case 2:
              image = _context.sent;
              (_keepAspectRatio = keepAspectRatio(image.width, image.height, maxWidth, maxHeight)),
                (height = _keepAspectRatio.height),
                (width = _keepAspectRatio.width);
              canvas = createCanvas(width, height);
              context = canvas.getContext('2d');
              context.drawImage(image, 0, 0, width, height);
              return _context.abrupt('return', canvas.toDataURL(type, quality));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _downscaleImageToDataURLUsingBrowser.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nQnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJrZWVwQXNwZWN0UmF0aW8iLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJjcmVhdGVDYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsb2FkSW1hZ2VGcm9tQmxvYiIsImJsb2IiLCJibG9iVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvciIsInNldEF0dHJpYnV0ZSIsImZpbmFsbHkiLCJyZXZva2VPYmplY3RVUkwiLCJkb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nQnJvd3NlciIsInR5cGUiLCJxdWFsaXR5IiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLE1BQWhDLEVBQXdDQyxRQUF4QyxFQUFrREMsU0FBbEQsRUFBNkQ7QUFDM0QsTUFBSUgsS0FBSyxHQUFHRSxRQUFSLElBQW9CRCxNQUFNLEdBQUdFLFNBQWpDLEVBQTRDO0FBQzFDO0FBQ0EsV0FBTztBQUNMRixNQUFBQSxNQUFNLEVBQU5BLE1BREs7QUFFTEQsTUFBQUEsS0FBSyxFQUFMQTtBQUZLLEtBQVA7QUFJRDs7QUFFRCxNQUFNSSxXQUFXLEdBQUdKLEtBQUssR0FBR0MsTUFBNUI7O0FBRUEsTUFBSUcsV0FBVyxHQUFHRixRQUFRLEdBQUdDLFNBQTdCLEVBQXdDO0FBQ3RDO0FBQ0EsV0FBTztBQUNMRixNQUFBQSxNQUFNLEVBQUVDLFFBQVEsR0FBR0UsV0FEZDtBQUVMSixNQUFBQSxLQUFLLEVBQUVFO0FBRkYsS0FBUDtBQUlELEdBakIwRCxDQW1CM0Q7OztBQUNBLFNBQU87QUFDTEQsSUFBQUEsTUFBTSxFQUFFRSxTQURIO0FBRUxILElBQUFBLEtBQUssRUFBRUcsU0FBUyxHQUFHQztBQUZkLEdBQVA7QUFJRDs7QUFFRCxTQUFTQyxZQUFULENBQXNCTCxLQUF0QixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDbkMsTUFBTUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUVBRixFQUFBQSxNQUFNLENBQUNMLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FLLEVBQUFBLE1BQU0sQ0FBQ04sS0FBUCxHQUFlQSxLQUFmO0FBRUEsU0FBT00sTUFBUDtBQUNEOztBQUVELFNBQVNHLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUMvQixNQUFNQyxPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkgsSUFBcEIsQ0FBaEI7QUFFQSxTQUFPLElBQUlJLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTUMsS0FBSyxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUVBUyxJQUFBQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsYUFBZUgsTUFBTSxDQUFDRyxLQUFELENBQXJCO0FBQUEsS0FBaEM7QUFDQUYsSUFBQUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QixNQUF2QixFQUErQjtBQUFBLGFBQU1ILE9BQU8sQ0FBQ0UsS0FBRCxDQUFiO0FBQUEsS0FBL0I7QUFDQUEsSUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CLEtBQW5CLEVBQTBCVCxPQUExQjtBQUNELEdBTk0sRUFNSlUsT0FOSSxDQU1JLFlBQU07QUFDZlQsSUFBQUEsR0FBRyxDQUFDVSxlQUFKLENBQW9CWCxPQUFwQjtBQUNELEdBUk0sQ0FBUDtBQVNEOztTQUU2QlksbUM7Ozs7Ozs7MEJBQWYsaUJBQW1EYixJQUFuRCxFQUF5RFIsUUFBekQsRUFBbUVDLFNBQW5FLEVBQThFcUIsSUFBOUUsRUFBb0ZDLE9BQXBGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNPaEIsaUJBQWlCLENBQUNDLElBQUQsQ0FEeEI7O0FBQUE7QUFDUE8sWUFBQUEsS0FETztBQUFBLCtCQUVhbEIsZUFBZSxDQUFDa0IsS0FBSyxDQUFDakIsS0FBUCxFQUFjaUIsS0FBSyxDQUFDaEIsTUFBcEIsRUFBNEJDLFFBQTVCLEVBQXNDQyxTQUF0QyxDQUY1QixFQUVMRixNQUZLLG9CQUVMQSxNQUZLLEVBRUdELEtBRkgsb0JBRUdBLEtBRkg7QUFHUE0sWUFBQUEsTUFITyxHQUdFRCxZQUFZLENBQUNMLEtBQUQsRUFBUUMsTUFBUixDQUhkO0FBSVB5QixZQUFBQSxPQUpPLEdBSUdwQixNQUFNLENBQUNxQixVQUFQLENBQWtCLElBQWxCLENBSkg7QUFNYkQsWUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCWCxLQUFsQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQmpCLEtBQS9CLEVBQXNDQyxNQUF0QztBQU5hLDZDQVFOSyxNQUFNLENBQUN1QixTQUFQLENBQWlCTCxJQUFqQixFQUF1QkMsT0FBdkIsQ0FSTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24ga2VlcEFzcGVjdFJhdGlvKHdpZHRoLCBoZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQpIHtcbiAgaWYgKHdpZHRoIDwgbWF4V2lkdGggJiYgaGVpZ2h0IDwgbWF4SGVpZ2h0KSB7XG4gICAgLy8gUGhvdG8gaXMgc21hbGxlciB0aGFuIGJvdGggbWF4aW11bSBkaW1lbnNpb25zLCB0YWtlIGl0IGFzLWlzXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgaWYgKGFzcGVjdFJhdGlvID4gbWF4V2lkdGggLyBtYXhIZWlnaHQpIHtcbiAgICAvLyBQaG90byBpcyB3aWRlciB0aGFuIG1heGltdW0gZGltZW5zaW9uLCBkb3duc2NhbGUgaXQgYmFzZWQgb24gbWF4V2lkdGguXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogbWF4V2lkdGggLyBhc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoOiBtYXhXaWR0aFxuICAgIH07XG4gIH1cblxuICAvLyBQaG90byBpcyB0YWxsZXIgdGhhbiBtYXhpbXVtIGRpbWVuc2lvbiwgZG93bnNjYWxlIGl0IGJhc2VkIG9uIG1heEhlaWdodC5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IG1heEhlaWdodCxcbiAgICB3aWR0aDogbWF4SGVpZ2h0ICogYXNwZWN0UmF0aW9cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG5cbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuZnVuY3Rpb24gbG9hZEltYWdlRnJvbUJsb2IoYmxvYikge1xuICBjb25zdCBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICh7IGVycm9yIH0pID0+IHJlamVjdChlcnJvcikpO1xuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiByZXNvbHZlKGltYWdlKSk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBibG9iVVJMKTtcbiAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdCcm93c2VyKGJsb2IsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHR5cGUsIHF1YWxpdHkpIHtcbiAgY29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2VGcm9tQmxvYihibG9iKTtcbiAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBrZWVwQXNwZWN0UmF0aW8oaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCk7XG4gIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KTtcbn1cbiJdfQ==
