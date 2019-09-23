'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectUploadButton = exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _Localize = require('../Localization/Localize');

var _AttachmentIcon = _interopRequireDefault(require('./Assets/AttachmentIcon'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _downscaleImageToDataURL = _interopRequireDefault(require('../Utils/downscaleImageToDataURL'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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

var ROOT_CSS = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'relative',
  '& > input': {
    height: 0,
    width: 0,
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0
  }
});

function makeThumbnail(_x, _x2, _x3, _x4, _x5) {
  return _makeThumbnail.apply(this, arguments);
}

function _makeThumbnail() {
  _makeThumbnail = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(file, width, height, contentType, quality) {
      return regeneratorRuntime.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                if (!/\.(gif|jpe?g|png)$/i.test(file.name)) {
                  _context3.next = 10;
                  break;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return (0, _downscaleImageToDataURL.default)(file, width, height, contentType, quality);

              case 4:
                return _context3.abrupt('return', _context3.sent);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](1);
                console.warn('Web Chat: Failed to downscale image due to '.concat(_context3.t0, '.'));

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        },
        _callee3,
        null,
        [[1, 7]]
      );
    })
  );
  return _makeThumbnail.apply(this, arguments);
}

var connectUploadButton = function connectUploadButton() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var disabled = _ref.disabled,
          language = _ref.language,
          _sendFiles = _ref.sendFiles,
          _ref$styleSet$options = _ref.styleSet.options,
          enableUploadThumbnail = _ref$styleSet$options.enableUploadThumbnail,
          uploadThumbnailContentType = _ref$styleSet$options.uploadThumbnailContentType,
          uploadThumbnailHeight = _ref$styleSet$options.uploadThumbnailHeight,
          uploadThumbnailQuality = _ref$styleSet$options.uploadThumbnailQuality,
          uploadThumbnailWidth = _ref$styleSet$options.uploadThumbnailWidth;
        return {
          disabled: disabled,
          language: language,
          sendFiles: (function() {
            var _sendFiles2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(files) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        if (!(files && files.length)) {
                          _context2.next = 6;
                          break;
                        }

                        _context2.t0 = _sendFiles;
                        _context2.next = 4;
                        return Promise.all(
                          [].map.call(
                            files,
                            /*#__PURE__*/
                            (function() {
                              var _ref2 = _asyncToGenerator(
                                /*#__PURE__*/
                                regeneratorRuntime.mark(function _callee(file) {
                                  return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch ((_context.prev = _context.next)) {
                                        case 0:
                                          _context.t0 = _objectSpread;
                                          _context.t1 = {
                                            name: file.name,
                                            size: file.size,
                                            url: window.URL.createObjectURL(file)
                                          };
                                          _context.t2 = enableUploadThumbnail;

                                          if (!_context.t2) {
                                            _context.next = 8;
                                            break;
                                          }

                                          _context.next = 6;
                                          return makeThumbnail(
                                            file,
                                            uploadThumbnailWidth,
                                            uploadThumbnailHeight,
                                            uploadThumbnailContentType,
                                            uploadThumbnailQuality
                                          );

                                        case 6:
                                          _context.t3 = _context.sent;
                                          _context.t2 = {
                                            thumbnail: _context.t3
                                          };

                                        case 8:
                                          _context.t4 = _context.t2;
                                          return _context.abrupt('return', (0, _context.t0)(_context.t1, _context.t4));

                                        case 10:
                                        case 'end':
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee);
                                })
                              );

                              return function(_x7) {
                                return _ref2.apply(this, arguments);
                              };
                            })()
                          )
                        );

                      case 4:
                        _context2.t1 = _context2.sent;
                        (0, _context2.t0)(_context2.t1);

                      case 6:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })
            );

            function sendFiles(_x6) {
              return _sendFiles2.apply(this, arguments);
            }

            return sendFiles;
          })()
        };
      }
    ].concat(selectors)
  );
};

exports.connectUploadButton = connectUploadButton;

var UploadButton = function UploadButton(_ref3) {
  var disabled = _ref3.disabled,
    language = _ref3.language,
    sendFiles = _ref3.sendFiles,
    styleSet = _ref3.styleSet;
  var inputRef = (0, _react.useRef)();
  var uploadFileString = (0, _Localize.localize)('Upload file', language);
  var current = inputRef.current;
  var handleClick = (0, _react.useCallback)(
    function() {
      current && current.click();
    },
    [current]
  );
  var handleFileChange = (0, _react.useCallback)(
    function(_ref4) {
      var files = _ref4.target.files;
      sendFiles(files);

      if (current) {
        current.value = null;
      }
    },
    [current, sendFiles]
  );
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', styleSet.uploadButton + '')
    },
    _react.default.createElement('input', {
      'aria-hidden': 'true',
      disabled: disabled,
      multiple: true,
      onChange: handleFileChange,
      ref: inputRef,
      role: 'button',
      tabIndex: -1,
      type: 'file'
    }),
    _react.default.createElement(
      _IconButton.default,
      {
        alt: uploadFileString,
        'aria-label': uploadFileString,
        disabled: disabled,
        onClick: handleClick
      },
      _react.default.createElement(_AttachmentIcon.default, null)
    )
  );
};

UploadButton.defaultProps = {
  disabled: false
};
UploadButton.propTypes = {
  disabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  sendFiles: _propTypes.default.func.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      enableUploadThumbnail: _propTypes.default.bool.isRequired,
      uploadThumbnailContentType: _propTypes.default.string.isRequired,
      uploadThumbnailHeight: _propTypes.default.number.isRequired,
      uploadThumbnailQuality: _propTypes.default.number.isRequired,
      uploadThumbnailWidth: _propTypes.default.number.isRequired
    }).isRequired,
    uploadButton: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = connectUploadButton(function(_ref5) {
  var styleSet = _ref5.styleSet;
  return {
    styleSet: styleSet
  };
})(UploadButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1VwbG9hZEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm9wYWNpdHkiLCJsZWZ0IiwidG9wIiwibWFrZVRodW1ibmFpbCIsImZpbGUiLCJjb250ZW50VHlwZSIsInF1YWxpdHkiLCJ0ZXN0IiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiY29ubmVjdFVwbG9hZEJ1dHRvbiIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJkaXNhYmxlZCIsImxhbmd1YWdlIiwic2VuZEZpbGVzIiwic3R5bGVTZXQiLCJvcHRpb25zIiwiZW5hYmxlVXBsb2FkVGh1bWJuYWlsIiwidXBsb2FkVGh1bWJuYWlsQ29udGVudFR5cGUiLCJ1cGxvYWRUaHVtYm5haWxIZWlnaHQiLCJ1cGxvYWRUaHVtYm5haWxRdWFsaXR5IiwidXBsb2FkVGh1bWJuYWlsV2lkdGgiLCJmaWxlcyIsImxlbmd0aCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjYWxsIiwic2l6ZSIsInVybCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInRodW1ibmFpbCIsIlVwbG9hZEJ1dHRvbiIsImlucHV0UmVmIiwidXBsb2FkRmlsZVN0cmluZyIsImN1cnJlbnQiLCJoYW5kbGVDbGljayIsImNsaWNrIiwiaGFuZGxlRmlsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidXBsb2FkQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwic2hhcGUiLCJudW1iZXIiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxpQkFBSTtBQUNuQkMsRUFBQUEsUUFBUSxFQUFFLFFBRFM7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRSxVQUZTO0FBSW5CLGVBQWE7QUFDWEMsSUFBQUEsTUFBTSxFQUFFLENBREc7QUFFWEMsSUFBQUEsS0FBSyxFQUFFLENBRkk7QUFHWEMsSUFBQUEsT0FBTyxFQUFFLENBSEU7QUFJWEgsSUFBQUEsUUFBUSxFQUFFLFVBSkM7QUFLWEksSUFBQUEsSUFBSSxFQUFFLENBTEs7QUFNWEMsSUFBQUEsR0FBRyxFQUFFO0FBTk07QUFKTSxDQUFKLENBQWpCOztTQWNlQyxhOzs7Ozs7OzBCQUFmLGtCQUE2QkMsSUFBN0IsRUFBbUNMLEtBQW5DLEVBQTBDRCxNQUExQyxFQUFrRE8sV0FBbEQsRUFBK0RDLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTSxzQkFBdUJDLElBQXZCLENBQTRCSCxJQUFJLENBQUNJLElBQWpDLENBRE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUdtQixzQ0FBd0JKLElBQXhCLEVBQThCTCxLQUE5QixFQUFxQ0QsTUFBckMsRUFBNkNPLFdBQTdDLEVBQTBEQyxPQUExRCxDQUhuQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtNRyxZQUFBQSxPQUFPLENBQUNDLElBQVI7O0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVVBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxvQ0FBSUMsU0FBSjtBQUFJQSxJQUFBQSxTQUFKO0FBQUE7O0FBQUEsU0FDMUJDLHlDQUNFO0FBQUEsUUFDRUMsUUFERixRQUNFQSxRQURGO0FBQUEsUUFFRUMsUUFGRixRQUVFQSxRQUZGO0FBQUEsUUFHRUMsVUFIRixRQUdFQSxTQUhGO0FBQUEscUNBSUVDLFFBSkYsQ0FLSUMsT0FMSjtBQUFBLFFBTU1DLHFCQU5OLHlCQU1NQSxxQkFOTjtBQUFBLFFBT01DLDBCQVBOLHlCQU9NQSwwQkFQTjtBQUFBLFFBUU1DLHFCQVJOLHlCQVFNQSxxQkFSTjtBQUFBLFFBU01DLHNCQVROLHlCQVNNQSxzQkFUTjtBQUFBLFFBVU1DLG9CQVZOLHlCQVVNQSxvQkFWTjtBQUFBLFdBYU87QUFDTFQsTUFBQUEsUUFBUSxFQUFSQSxRQURLO0FBRUxDLE1BQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxNQUFBQSxTQUFTO0FBQUE7QUFBQTtBQUFBLGdDQUFFLGtCQUFNUSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDTEEsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BRFY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsaUNBS1BULFVBTE87QUFBQTtBQUFBLHlCQU1DVSxPQUFPLENBQUNDLEdBQVIsQ0FDSixHQUFHQyxHQUFILENBQU9DLElBQVAsQ0FBWUwsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBQW1CLGlCQUFNcEIsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkksZ0NBQUFBLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQURNO0FBRWpCc0IsZ0NBQUFBLElBQUksRUFBRTFCLElBQUksQ0FBQzBCLElBRk07QUFHakJDLGdDQUFBQSxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxlQUFYLENBQTJCOUIsSUFBM0I7QUFIWTtBQUFBLDRDQUliZSxxQkFKYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFDQUtFaEIsYUFBYSxDQUM1QkMsSUFENEIsRUFFNUJtQixvQkFGNEIsRUFHNUJGLHFCQUg0QixFQUk1QkQsMEJBSjRCLEVBSzVCRSxzQkFMNEIsQ0FMZjs7QUFBQTtBQUFBO0FBQUE7QUFLZmEsZ0NBQUFBLFNBTGU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW5COztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURJLENBTkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFISixLQWJQO0FBQUEsR0FERixTQTJDS3ZCLFNBM0NMLEVBRDBCO0FBQUEsQ0FBNUI7Ozs7QUErQ0EsSUFBTXdCLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQWlEO0FBQUEsTUFBOUN0QixRQUE4QyxTQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ0MsUUFBb0MsU0FBcENBLFFBQW9DO0FBQUEsTUFBMUJDLFNBQTBCLFNBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNwRSxNQUFNb0IsUUFBUSxHQUFHLG9CQUFqQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLHdCQUFTLGFBQVQsRUFBd0J2QixRQUF4QixDQUF6QjtBQUZvRSxNQUc1RHdCLE9BSDRELEdBR2hERixRQUhnRCxDQUc1REUsT0FINEQ7QUFLcEUsTUFBTUMsV0FBVyxHQUFHLHdCQUFZLFlBQU07QUFDcENELElBQUFBLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxLQUFSLEVBQVg7QUFDRCxHQUZtQixFQUVqQixDQUFDRixPQUFELENBRmlCLENBQXBCO0FBSUEsTUFBTUcsZ0JBQWdCLEdBQUcsd0JBQ3ZCLGlCQUEyQjtBQUFBLFFBQWRsQixLQUFjLFNBQXhCbUIsTUFBd0IsQ0FBZG5CLEtBQWM7QUFDekJSLElBQUFBLFNBQVMsQ0FBQ1EsS0FBRCxDQUFUOztBQUVBLFFBQUllLE9BQUosRUFBYTtBQUNYQSxNQUFBQSxPQUFPLENBQUNLLEtBQVIsR0FBZ0IsSUFBaEI7QUFDRDtBQUNGLEdBUHNCLEVBUXZCLENBQUNMLE9BQUQsRUFBVXZCLFNBQVYsQ0FSdUIsQ0FBekI7QUFXQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQVdyQixRQUFRLEdBQUcsRUFBdEIsRUFBMEJzQixRQUFRLENBQUM0QixZQUFULEdBQXdCLEVBQWxEO0FBQWhCLEtBQ0U7QUFDRSxtQkFBWSxNQURkO0FBRUUsSUFBQSxRQUFRLEVBQUUvQixRQUZaO0FBR0UsSUFBQSxRQUFRLEVBQUUsSUFIWjtBQUlFLElBQUEsUUFBUSxFQUFFNEIsZ0JBSlo7QUFLRSxJQUFBLEdBQUcsRUFBRUwsUUFMUDtBQU1FLElBQUEsSUFBSSxFQUFDLFFBTlA7QUFPRSxJQUFBLFFBQVEsRUFBRSxDQUFDLENBUGI7QUFRRSxJQUFBLElBQUksRUFBQztBQVJQLElBREYsRUFXRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsR0FBRyxFQUFFQyxnQkFBakI7QUFBbUMsa0JBQVlBLGdCQUEvQztBQUFpRSxJQUFBLFFBQVEsRUFBRXhCLFFBQTNFO0FBQXFGLElBQUEsT0FBTyxFQUFFMEI7QUFBOUYsS0FDRSw2QkFBQyx1QkFBRCxPQURGLENBWEYsQ0FERjtBQWlCRCxDQXJDRDs7QUF1Q0FKLFlBQVksQ0FBQ1UsWUFBYixHQUE0QjtBQUMxQmhDLEVBQUFBLFFBQVEsRUFBRTtBQURnQixDQUE1QjtBQUlBc0IsWUFBWSxDQUFDVyxTQUFiLEdBQXlCO0FBQ3ZCakMsRUFBQUEsUUFBUSxFQUFFa0MsbUJBQVVDLElBREc7QUFFdkJsQyxFQUFBQSxRQUFRLEVBQUVpQyxtQkFBVUUsTUFBVixDQUFpQkMsVUFGSjtBQUd2Qm5DLEVBQUFBLFNBQVMsRUFBRWdDLG1CQUFVSSxJQUFWLENBQWVELFVBSEg7QUFJdkJsQyxFQUFBQSxRQUFRLEVBQUUrQixtQkFBVUssS0FBVixDQUFnQjtBQUN4Qm5DLElBQUFBLE9BQU8sRUFBRThCLG1CQUFVSyxLQUFWLENBQWdCO0FBQ3ZCbEMsTUFBQUEscUJBQXFCLEVBQUU2QixtQkFBVUMsSUFBVixDQUFlRSxVQURmO0FBRXZCL0IsTUFBQUEsMEJBQTBCLEVBQUU0QixtQkFBVUUsTUFBVixDQUFpQkMsVUFGdEI7QUFHdkI5QixNQUFBQSxxQkFBcUIsRUFBRTJCLG1CQUFVTSxNQUFWLENBQWlCSCxVQUhqQjtBQUl2QjdCLE1BQUFBLHNCQUFzQixFQUFFMEIsbUJBQVVNLE1BQVYsQ0FBaUJILFVBSmxCO0FBS3ZCNUIsTUFBQUEsb0JBQW9CLEVBQUV5QixtQkFBVU0sTUFBVixDQUFpQkg7QUFMaEIsS0FBaEIsRUFNTkEsVUFQcUI7QUFReEJOLElBQUFBLFlBQVksRUFBRUcsbUJBQVVPLEdBQVYsQ0FBY0o7QUFSSixHQUFoQixFQVNQQTtBQWJvQixDQUF6Qjs7ZUFnQmV4QyxtQkFBbUIsQ0FBQztBQUFBLE1BQUdNLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQUQsQ0FBbkIsQ0FBc0RtQixZQUF0RCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgQXR0YWNobWVudEljb24gZnJvbSAnLi9Bc3NldHMvQXR0YWNobWVudEljb24nO1xuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkwgZnJvbSAnLi4vVXRpbHMvZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkwnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi9JY29uQnV0dG9uJztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICcmID4gaW5wdXQnOiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDBcbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG1ha2VUaHVtYm5haWwoZmlsZSwgd2lkdGgsIGhlaWdodCwgY29udGVudFR5cGUsIHF1YWxpdHkpIHtcbiAgaWYgKC9cXC4oZ2lmfGpwZT9nfHBuZykkL2l1LnRlc3QoZmlsZS5uYW1lKSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkwoZmlsZSwgd2lkdGgsIGhlaWdodCwgY29udGVudFR5cGUsIHF1YWxpdHkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFdlYiBDaGF0OiBGYWlsZWQgdG8gZG93bnNjYWxlIGltYWdlIGR1ZSB0byAke2Vycm9yfS5gKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY29ubmVjdFVwbG9hZEJ1dHRvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzZW5kRmlsZXMsXG4gICAgICBzdHlsZVNldDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZW5hYmxlVXBsb2FkVGh1bWJuYWlsLFxuICAgICAgICAgIHVwbG9hZFRodW1ibmFpbENvbnRlbnRUeXBlLFxuICAgICAgICAgIHVwbG9hZFRodW1ibmFpbEhlaWdodCxcbiAgICAgICAgICB1cGxvYWRUaHVtYm5haWxRdWFsaXR5LFxuICAgICAgICAgIHVwbG9hZFRodW1ibmFpbFdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSA9PiAoe1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYW5ndWFnZSxcbiAgICAgIHNlbmRGaWxlczogYXN5bmMgZmlsZXMgPT4ge1xuICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gVE9ETzogW1AzXSBXZSBuZWVkIHRvIGZpbmQgcmV2b2tlT2JqZWN0VVJMIG9uIHRoZSBVSSBzaWRlXG4gICAgICAgICAgLy8gICAgICAgUmVkdXggc3RvcmUgc2hvdWxkIG5vdCBrbm93IGFib3V0IHRoZSBicm93c2VyIGVudmlyb25tZW50XG4gICAgICAgICAgLy8gICAgICAgT25lIGZpeCBpcyB0byB1c2UgQXJyYXlCdWZmZXIgaW5zdGVhZCBvZiBvYmplY3QgVVJMLCBidXQgdGhhdCB3b3VsZCByZXF1aXJlcyBjaGFuZ2UgdG8gRGlyZWN0TGluZUpTXG4gICAgICAgICAgc2VuZEZpbGVzKFxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIFtdLm1hcC5jYWxsKGZpbGVzLCBhc3luYyBmaWxlID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgICAgIC4uLihlbmFibGVVcGxvYWRUaHVtYm5haWwgJiYge1xuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBhd2FpdCBtYWtlVGh1bWJuYWlsKFxuICAgICAgICAgICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRUaHVtYm5haWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkVGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRUaHVtYm5haWxDb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkVGh1bWJuYWlsUXVhbGl0eVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgVXBsb2FkQnV0dG9uID0gKHsgZGlzYWJsZWQsIGxhbmd1YWdlLCBzZW5kRmlsZXMsIHN0eWxlU2V0IH0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgdXBsb2FkRmlsZVN0cmluZyA9IGxvY2FsaXplKCdVcGxvYWQgZmlsZScsIGxhbmd1YWdlKTtcbiAgY29uc3QgeyBjdXJyZW50IH0gPSBpbnB1dFJlZjtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjdXJyZW50ICYmIGN1cnJlbnQuY2xpY2soKTtcbiAgfSwgW2N1cnJlbnRdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgdGFyZ2V0OiB7IGZpbGVzIH0gfSkgPT4ge1xuICAgICAgc2VuZEZpbGVzKGZpbGVzKTtcblxuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY3VycmVudCwgc2VuZEZpbGVzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgc3R5bGVTZXQudXBsb2FkQnV0dG9uICsgJycpfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgLz5cbiAgICAgIDxJY29uQnV0dG9uIGFsdD17dXBsb2FkRmlsZVN0cmluZ30gYXJpYS1sYWJlbD17dXBsb2FkRmlsZVN0cmluZ30gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxBdHRhY2htZW50SWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVXBsb2FkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5VcGxvYWRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbmRGaWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuYWJsZVVwbG9hZFRodW1ibmFpbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIHVwbG9hZFRodW1ibmFpbENvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB1cGxvYWRUaHVtYm5haWxIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHVwbG9hZFRodW1ibmFpbFF1YWxpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHVwbG9hZFRodW1ibmFpbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHVwbG9hZEJ1dHRvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RVcGxvYWRCdXR0b24oKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFVwbG9hZEJ1dHRvbik7XG5cbmV4cG9ydCB7IGNvbm5lY3RVcGxvYWRCdXR0b24gfTtcbiJdfQ==
