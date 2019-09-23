'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = _default;

/* eslint object-shorthand: "off" */

/* eslint prefer-destructuring: "off" */

/* eslint prefer-arrow-callback: "off" */
// This file is the entrypoint of Web Worker and is minimally transpiled through Babel.
// Do not include any dependencies here because they will not be bundled.
// This file will also get loaded by IE11, please make sure you hand-transpile it correctly.
function _default() {
  function blobToDataURL(blob) {
    return new Promise(function(resolve, reject) {
      const reader = new FileReader();

      reader.onerror = function(event) {
        reject(event.error || new Error(event.message));
      };

      reader.onloadend = function() {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  }

  function keepAspectRatio(width, height, maxWidth, maxHeight) {
    if (width < maxWidth && height < maxHeight) {
      // Photo is smaller than both maximum dimensions, take it as-is
      return {
        height: height,
        width: width
      };
    }

    const aspectRatio = width / height;

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

  onmessage = function(event) {
    const data = event.data;
    const arrayBuffer = data.arrayBuffer;
    const maxHeight = data.maxHeight;
    const maxWidth = data.maxWidth;
    const type = data.type;
    const quality = data.quality;
    const port = event.ports[0];
    return Promise.resolve()
      .then(function() {
        return createImageBitmap(
          new Blob([arrayBuffer], {
            resizeQuality: 'high'
          })
        );
      })
      .then(function(imageBitmap) {
        const dimension = keepAspectRatio(imageBitmap.width, imageBitmap.height, maxWidth, maxHeight);
        const height = dimension.height;
        const width = dimension.width;
        const offscreenCanvas = new OffscreenCanvas(width, height);
        const context = offscreenCanvas.getContext('2d');
        context.drawImage(imageBitmap, 0, 0, width, height); // Firefox quirks: 68.0.1 call named OffscreenCanvas.convertToBlob as OffscreenCanvas.toBlob.

        const convertToBlob = (offscreenCanvas.convertToBlob || offscreenCanvas.toBlob).bind(offscreenCanvas);
        return convertToBlob({
          type: type,
          quality: quality
        });
      })
      .then(function(blob) {
        return blobToDataURL(blob);
      })
      .then(function(dataURL) {
        return port.postMessage({
          result: dataURL
        });
      })
      .catch(function(err) {
        console.error(err);
        port.postMessage({
          error: {
            message: err.message,
            stack: err.stack
          }
        });
      });
  };

  postMessage('ready');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9kb3duc2NhbGVJbWFnZVRvRGF0YVVSTFVzaW5nV29ya2VyLndvcmtlci5qcyJdLCJuYW1lcyI6WyJibG9iVG9EYXRhVVJMIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9uZXJyb3IiLCJldmVudCIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImtlZXBBc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJhc3BlY3RSYXRpbyIsIm9ubWVzc2FnZSIsImRhdGEiLCJhcnJheUJ1ZmZlciIsInR5cGUiLCJxdWFsaXR5IiwicG9ydCIsInBvcnRzIiwidGhlbiIsImNyZWF0ZUltYWdlQml0bWFwIiwiQmxvYiIsInJlc2l6ZVF1YWxpdHkiLCJpbWFnZUJpdG1hcCIsImRpbWVuc2lvbiIsIm9mZnNjcmVlbkNhbnZhcyIsIk9mZnNjcmVlbkNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiY29udmVydFRvQmxvYiIsInRvQmxvYiIsImJpbmQiLCJkYXRhVVJMIiwicG9zdE1lc3NhZ2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJzdGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRWUsb0JBQVc7QUFDeEIsV0FBU0EsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDM0MsWUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjs7QUFFQUQsTUFBQUEsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDL0JKLFFBQUFBLE1BQU0sQ0FBQ0ksS0FBSyxD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ZixRQUFBQSxJQUFJLEVBQUVBLElBQVI7QUFBY0MsUUFBQUEsT0FBTyxFQUFFQTtBQUF2QixPQUFELENBQXBCO0FBQ0QsS0FqQkksRUFrQkpHLElBbEJJLENBa0JDLFVBQVMzQixJQUFULEVBQWU7QUFDbkIsYUFBT0QsYUFBYSxDQUFDQyxJQUFELENBQXBCO0FBQ0QsS0FwQkksRUFxQkoyQixJQXJCSSxDQXFCQyxVQUFTYyxPQUFULEVBQWtCO0FBQ3RCLGFBQU9oQixJQUFJLENBQUNpQixXQUFMLENBQWlCO0FBQUU5QixRQUFBQSxNQUFNLEVBQUU2QjtBQUFWLE9BQWpCLENBQVA7QUFDRCxLQXZCSSxFQXdCSkUsS0F4QkksQ0F3QkUsVUFBU0MsR0FBVCxFQUFjO0FBQ25CQyxNQUFBQSxPQUFPLENBQUNyQyxLQUFSLENBQWNvQyxHQUFkO0FBRUFuQixNQUFBQSxJQUFJLENBQUNpQixXQUFMLENBQWlCO0FBQ2ZsQyxRQUFBQSxLQUFLLEVBQUU7QUFDTEUsVUFBQUEsT0FBTyxFQUFFa0MsR0FBRyxDQUFDbEMsT0FEUjtBQUVMb0MsVUFBQUEsS0FBSyxFQUFFRixHQUFHLENBQUNFO0FBRk47QUFEUSxPQUFqQjtBQU1ELEtBakNJLENBQVA7QUFrQ0QsR0EzQ0Q7O0FBNkNBSixFQUFBQSxXQUFXLENBQUMsT0FBRCxDQUFYO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgb2JqZWN0LXNob3J0aGFuZDogXCJvZmZcIiAqL1xuLyogZXNsaW50IHByZWZlci1kZXN0cnVjdHVyaW5nOiBcIm9mZlwiICovXG4vKiBlc2xpbnQgcHJlZmVyLWFycm93LWNhbGxiYWNrOiBcIm9mZlwiICovXG5cbi8vIFRoaXMgZmlsZSBpcyB0aGUgZW50cnlwb2ludCBvZiBXZWIgV29ya2VyIGFuZCBpcyBtaW5pbWFsbHkgdHJhbnNwaWxlZCB0aHJvdWdoIEJhYmVsLlxuLy8gRG8gbm90IGluY2x1ZGUgYW55IGRlcGVuZGVuY2llcyBoZXJlIGJlY2F1c2UgdGhleSB3aWxsIG5vdCBiZSBidW5kbGVkLlxuXG4vLyBUaGlzIGZpbGUgd2lsbCBhbHNvIGdldCBsb2FkZWQgYnkgSUUxMSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGFuZC10cmFuc3BpbGUgaXQgY29ycmVjdGx5LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYmxvYlRvRGF0YVVSTChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICByZWplY3QoZXZlbnQuZXJyb3IgfHwgbmV3IEVycm9yKGV2ZW50Lm1lc3NhZ2UpKTtcbiAgICAgIH07XG5cbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG5cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24ga2VlcEFzcGVjdFJhdGlvKHdpZHRoLCBoZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQpIHtcbiAgICBpZiAod2lkdGggPCBtYXhXaWR0aCAmJiBoZWlnaHQgPCBtYXhIZWlnaHQpIHtcbiAgICAgIC8vIFBob3RvIGlzIHNtYWxsZXIgdGhhbiBib3RoIG1heGltdW0gZGltZW5zaW9ucywgdGFrZSBpdCBhcy1pc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG4gICAgaWYgKGFzcGVjdFJhdGlvID4gbWF4V2lkdGggLyBtYXhIZWlnaHQpIHtcbiAgICAgIC8vIFBob3RvIGlzIHdpZGVyIHRoYW4gbWF4aW11bSBkaW1lbnNpb24sIGRvd25zY2FsZSBpdCBiYXNlZCBvbiBtYXhXaWR0aC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogbWF4V2lkdGggLyBhc3BlY3RSYXRpbyxcbiAgICAgICAgd2lkdGg6IG1heFdpZHRoXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFBob3RvIGlzIHRhbGxlciB0aGFuIG1heGltdW0gZGltZW5zaW9uLCBkb3duc2NhbGUgaXQgYmFzZWQgb24gbWF4SGVpZ2h0LlxuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgIHdpZHRoOiBtYXhIZWlnaHQgKiBhc3BlY3RSYXRpb1xuICAgIH07XG4gIH1cblxuICBvbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhO1xuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gZGF0YS5hcnJheUJ1ZmZlcjtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBkYXRhLm1heEhlaWdodDtcbiAgICBjb25zdCBtYXhXaWR0aCA9IGRhdGEubWF4V2lkdGg7XG4gICAgY29uc3QgdHlwZSA9IGRhdGEudHlwZTtcbiAgICBjb25zdCBxdWFsaXR5ID0gZGF0YS5xdWFsaXR5O1xuICAgIGNvbnN0IHBvcnQgPSBldmVudC5wb3J0c1swXTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChuZXcgQmxvYihbYXJyYXlCdWZmZXJdLCB7IHJlc2l6ZVF1YWxpdHk6ICdoaWdoJyB9KSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24oaW1hZ2VCaXRtYXApIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0ga2VlcEFzcGVjdFJhdGlvKGltYWdlQml0bWFwLndpZHRoLCBpbWFnZUJpdG1hcC5oZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICBjb25zdCB3aWR0aCA9IGRpbWVuc2lvbi53aWR0aDtcbiAgICAgICAgY29uc3Qgb2Zmc2NyZWVuQ2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG9mZnNjcmVlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlQml0bWFwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBGaXJlZm94IHF1aXJrczogNjguMC4xIGNhbGwgbmFtZWQgT2Zmc2NyZWVuQ2FudmFzLmNvbnZlcnRUb0Jsb2IgYXMgT2Zmc2NyZWVuQ2FudmFzLnRvQmxvYi5cbiAgICAgICAgY29uc3QgY29udmVydFRvQmxvYiA9IChvZmZzY3JlZW5DYW52YXMuY29udmVydFRvQmxvYiB8fCBvZmZzY3JlZW5DYW52YXMudG9CbG9iKS5iaW5kKG9mZnNjcmVlbkNhbnZhcyk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0Jsb2IoeyB0eXBlOiB0eXBlLCBxdWFsaXR5OiBxdWFsaXR5IH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgcmV0dXJuIGJsb2JUb0RhdGFVUkwoYmxvYik7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YVVSTCkge1xuICAgICAgICByZXR1cm4gcG9ydC5wb3N0TWVzc2FnZSh7IHJlc3VsdDogZGF0YVVSTCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICBzdGFjazogZXJyLnN0YWNrXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHBvc3RNZXNzYWdlKCdyZWFkeScpO1xufVxuIl19
