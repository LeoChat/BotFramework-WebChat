'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = downscaleImageToDataURLUsingWorker;
exports.checkSupport = void 0;

var _blobToArrayBuffer = _interopRequireDefault(require('./blobToArrayBuffer'));

var _memoizeOne = _interopRequireDefault(require('memoize-one'));

var _downscaleImageToDataURLUsingWorker = _interopRequireDefault(
  require('./downscaleImageToDataURLUsingWorker.worker')
);

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

function createWorker() {
  var blob = new Blob(['('.concat(_downscaleImageToDataURLUsingWorker.default, ')()')], {
    type: 'text/javascript'
  });
  var url = window.URL.createObjectURL(blob);
  return new Promise(function(resolve, reject) {
    var worker = new Worker(url);

    worker.onerror = function(_ref) {
      var error = _ref.error,
        message = _ref.message;
      return reject(error || new Error(message));
    };

    worker.onmessage = function(_ref2) {
      var data = _ref2.data;
      return data === 'ready' && resolve(worker);
    };
  }).finally(function() {
    window.URL.revokeObjectURL(url);
  });
}

var workerPromise;

function getWorker() {
  return _getWorker.apply(this, arguments);
} // We are using a lazy-check because:
// 1. OffscreenCanvas.getContext has a toll
// 2. Developers could bring polyfills

function _getWorker() {
  _getWorker = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var worker;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              if (!workerPromise) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return workerPromise;

            case 3:
              worker = _context.sent;
              _context.next = 11;
              break;

            case 6:
              workerPromise = createWorker();
              _context.next = 9;
              return workerPromise;

            case 9:
              worker = _context.sent;
              worker.addEventListener('error', function() {
                // Current worker errored out, will create a new worker next time.
                workerPromise = null;
                worker.terminate();
              });

            case 11:
              return _context.abrupt('return', worker);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _getWorker.apply(this, arguments);
}

var checkSupport = (0, _memoizeOne.default)(function() {
  var hasOffscreenCanvas =
    typeof window.OffscreenCanvas !== 'undefined' &&
    (typeof window.OffscreenCanvas.prototype.convertToBlob !== 'undefined' ||
      typeof window.OffscreenCanvas.prototype.toBlob !== 'undefined');
  var isOffscreenCanvasSupportGetContext2D;

  if (hasOffscreenCanvas) {
    try {
      new OffscreenCanvas(1, 1).getContext('2d');
      isOffscreenCanvasSupportGetContext2D = true;
    } catch (err) {
      isOffscreenCanvasSupportGetContext2D = false;
    }
  }

  return (
    typeof window.createImageBitmap !== 'undefined' &&
    typeof window.MessageChannel !== 'undefined' &&
    hasOffscreenCanvas &&
    isOffscreenCanvasSupportGetContext2D &&
    typeof window.Worker !== 'undefined'
  );
});
exports.checkSupport = checkSupport;

function downscaleImageToDataURLUsingWorker(blob, maxWidth, maxHeight, type, quality) {
  return new Promise(function(resolve, reject) {
    var _ref3 = new MessageChannel(),
      port1 = _ref3.port1,
      port2 = _ref3.port2;

    port1.onmessage = function(_ref4) {
      var _ref4$data = _ref4.data,
        error = _ref4$data.error,
        result = _ref4$data.result;

      if (error) {
        var err = new Error(error.message);
        err.stack = error.stack;
        reject(err);
      } else {
        resolve(result);
      }

      port1.close();
      port2.close();
    };

    Promise.all([(0, _blobToArrayBuffer.default)(blob), getWorker()]).then(function(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        arrayBuffer = _ref6[0],
        worker = _ref6[1];

      return worker.postMessage(
        {
          arrayBuffer: arrayBuffer,
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          quality: quality,
          type: type
        },
        [arrayBuffer, port2]
      );
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVdvcmtlciIsImJsb2IiLCJCbG9iIiwid29ya2VyIiwidHlwZSIsInVybCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiV29ya2VyIiwib25lcnJvciIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwib25tZXNzYWdlIiwiZGF0YSIsImZpbmFsbHkiLCJyZXZva2VPYmplY3RVUkwiLCJ3b3JrZXJQcm9taXNlIiwiZ2V0V29ya2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0ZSIsImNoZWNrU3VwcG9ydCIsImhhc09mZnNjcmVlbkNhbnZhcyIsIk9mZnNjcmVlbkNhbnZhcyIsInByb3RvdHlwZSIsImNvbnZlcnRUb0Jsb2IiLCJ0b0Jsb2IiLCJpc09mZnNjcmVlbkNhbnZhc1N1cHBvcnRHZXRDb250ZXh0MkQiLCJnZXRDb250ZXh0IiwiZXJyIiwiY3JlYXRlSW1hZ2VCaXRtYXAiLCJNZXNzYWdlQ2hhbm5lbCIsImRvd25zY2FsZUltYWdlVG9EYXRhVVJMVXNpbmdXb3JrZXIiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInF1YWxpdHkiLCJwb3J0MSIsInBvcnQyIiwicmVzdWx0Iiwic3RhY2siLCJjbG9zZSIsImFsbCIsInRoZW4iLCJhcnJheUJ1ZmZlciIsInBvc3RNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTLFlBQUtDLDJDQUFMLFNBQVQsRUFBNEI7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBNUIsQ0FBYjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxH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ImltcG9ydCBibG9iVG9BcnJheUJ1ZmZlciBmcm9tICcuL2Jsb2JUb0FycmF5QnVmZmVyJztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB3b3JrZXIgZnJvbSAnLi9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyLndvcmtlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmtlcigpIHtcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtgKCR7d29ya2VyfSkoKWBdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIodXJsKTtcblxuICAgIHdvcmtlci5vbmVycm9yID0gKHsgZXJyb3IsIG1lc3NhZ2UgfSkgPT4gcmVqZWN0KGVycm9yIHx8IG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgd29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4gZGF0YSA9PT0gJ3JlYWR5JyAmJiByZXNvbHZlKHdvcmtlcik7XG4gIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gIH0pO1xufVxuXG5sZXQgd29ya2VyUHJvbWlzZTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V29ya2VyKCkge1xuICBsZXQgd29ya2VyO1xuXG4gIGlmICh3b3JrZXJQcm9taXNlKSB7XG4gICAgd29ya2VyID0gYXdhaXQgd29ya2VyUHJvbWlzZTtcbiAgfSBlbHNlIHtcbiAgICB3b3JrZXJQcm9taXNlID0gY3JlYXRlV29ya2VyKCk7XG5cbiAgICB3b3JrZXIgPSBhd2FpdCB3b3JrZXJQcm9taXNlO1xuICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIC8vIEN1cnJlbnQgd29ya2VyIGVycm9yZWQgb3V0LCB3aWxsIGNyZWF0ZSBhIG5ldyB3b3JrZXIgbmV4dCB0aW1lLlxuICAgICAgd29ya2VyUHJvbWlzZSA9IG51bGw7XG4gICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gd29ya2VyO1xufVxuXG4vLyBXZSBhcmUgdXNpbmcgYSBsYXp5LWNoZWNrIGJlY2F1c2U6XG4vLyAxLiBPZmZzY3JlZW5DYW52YXMuZ2V0Q29udGV4dCBoYXMgYSB0b2xsXG4vLyAyLiBEZXZlbG9wZXJzIGNvdWxkIGJyaW5nIHBvbHlmaWxsc1xuXG5jb25zdCBjaGVja1N1cHBvcnQgPSBtZW1vaXplT25lKCgpID0+IHtcbiAgY29uc3QgaGFzT2Zmc2NyZWVuQ2FudmFzID1cbiAgICB0eXBlb2Ygd2luZG93Lk9mZnNjcmVlbkNhbnZhcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAodHlwZW9mIHdpbmRvdy5PZmZzY3JlZW5DYW52YXMucHJvdG90eXBlLmNvbnZlcnRUb0Jsb2IgIT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0eXBlb2Ygd2luZG93Lk9mZnNjcmVlbkNhbnZhcy5wcm90b3R5cGUudG9CbG9iICE9PSAndW5kZWZpbmVkJyk7XG4gIGxldCBpc09mZnNjcmVlbkNhbnZhc1N1cHBvcnRHZXRDb250ZXh0MkQ7XG5cbiAgaWYgKGhhc09mZnNjcmVlbkNhbnZhcykge1xuICAgIHRyeSB7XG4gICAgICBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpc09mZnNjcmVlbkNhbnZhc1N1cHBvcnRHZXRDb250ZXh0MkQgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaXNPZmZzY3JlZW5DYW52YXNTdXBwb3J0R2V0Q29udGV4dDJEID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93LmNyZWF0ZUltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiB3aW5kb3cuTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnICYmXG4gICAgaGFzT2Zmc2NyZWVuQ2FudmFzICYmXG4gICAgaXNPZmZzY3JlZW5DYW52YXNTdXBwb3J0R2V0Q29udGV4dDJEICYmXG4gICAgdHlwZW9mIHdpbmRvdy5Xb3JrZXIgIT09ICd1bmRlZmluZWQnXG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkxVc2luZ1dvcmtlcihibG9iLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCB0eXBlLCBxdWFsaXR5KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeyBwb3J0MSwgcG9ydDIgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuXG4gICAgcG9ydDEub25tZXNzYWdlID0gKHsgZGF0YTogeyBlcnJvciwgcmVzdWx0IH0gfSkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcblxuICAgICAgICBlcnIuc3RhY2sgPSBlcnJvci5zdGFjaztcblxuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcG9ydDEuY2xvc2UoKTtcbiAgICAgIHBvcnQyLmNsb3NlKCk7XG4gICAgfTtcblxuICAgIFByb21pc2UuYWxsKFtibG9iVG9BcnJheUJ1ZmZlcihibG9iKSwgZ2V0V29ya2VyKCldKS50aGVuKChbYXJyYXlCdWZmZXIsIHdvcmtlcl0pID0+XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBhcnJheUJ1ZmZlciwgbWF4SGVpZ2h0LCBtYXhXaWR0aCwgcXVhbGl0eSwgdHlwZSB9LCBbYXJyYXlCdWZmZXIsIHBvcnQyXSlcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY2hlY2tTdXBwb3J0IH07XG4iXX0=
