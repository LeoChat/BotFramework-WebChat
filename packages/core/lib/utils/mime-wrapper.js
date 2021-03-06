'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _Mime = _interopRequireDefault(require('mime/Mime'));

/* eslint global-require: "off" */
// We adopted the work from mime-wrapper, at https://github.com/marlon360/mime-wrapper.
// This file wraps the mime library constructor to include '.json' types. This is needed
// to support Angular CLI web projects, in which the webpack.config files are hidden away
// from the user, and do not support .json file extension module resolutions.
//
// Refer to issue https://github.com/jshttp/mime-types/issues/50#issuecomment-390932678
// and issue https://github.com/broofa/node-mime/issues/208.
//
// This file may need to change if the mime library is bumped a major that may cause a
// breaking change, as it relies on the internal library file placement.
// MIT License
//
// Copyright (c) 2018 Marlon Lückert
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
var _default = new _Mime['default'](require('mime/types/standard'), require('mime/types/other'));

exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9taW1lLXdyYXBwZXIuanMiXSwibmFtZXMiOlsiTWltZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9DQTs7QUFwQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUllLElBQUlBLGdCQUFKLENBQVNDLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQixFQUF5Q0EsT0FBTyxDQUFDLGtCQUFELENBQWhELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgZ2xvYmFsLXJlcXVpcmU6IFwib2ZmXCIgKi9cblxuLy8gV2UgYWRvcHRlZCB0aGUgd29yayBmcm9tIG1pbWUtd3JhcHBlciwgYXQgaHR0cHM6Ly9naXRodWIuY29tL21hcmxvbjM2MC9taW1lLXdyYXBwZXIuXG5cbi8vIFRoaXMgZmlsZSB3cmFwcyB0aGUgbWltZSBsaWJyYXJ5IGNvbnN0cnVjdG9yIHRvIGluY2x1ZGUgJy5qc29uJyB0eXBlcy4gVGhpcyBpcyBuZWVkZWRcbi8vIHRvIHN1cHBvcnQgQW5ndWxhciBDTEkgd2ViIHByb2plY3RzLCBpbiB3aGljaCB0aGUgd2VicGFjay5jb25maWcgZmlsZXMgYXJlIGhpZGRlbiBhd2F5XG4vLyBmcm9tIHRoZSB1c2VyLCBhbmQgZG8gbm90IHN1cHBvcnQgLmpzb24gZmlsZSBleHRlbnNpb24gbW9kdWxlIHJlc29sdXRpb25zLlxuLy9cbi8vIFJlZmVyIHRvIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qc2h0dHAvbWltZS10eXBlcy9pc3N1ZXMvNTAjaXNzdWVjb21tZW50LTM5MDkzMjY3OFxuLy8gYW5kIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS1taW1lL2lzc3Vlcy8yMDguXG4vL1xuLy8gVGhpcyBmaWxlIG1heSBuZWVkIHRvIGNoYW5nZSBpZiB0aGUgbWltZSBsaWJyYXJ5IGlzIGJ1bXBlZCBhIG1ham9yIHRoYXQgbWF5IGNhdXNlIGFcbi8vIGJyZWFraW5nIGNoYW5nZSwgYXMgaXQgcmVsaWVzIG9uIHRoZSBpbnRlcm5hbCBsaWJyYXJ5IGZpbGUgcGxhY2VtZW50LlxuXG4vLyBNSVQgTGljZW5zZVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxOCBNYXJsb24gTMO8Y2tlcnRcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuXG5pbXBvcnQgTWltZSBmcm9tICdtaW1lL01pbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgTWltZShyZXF1aXJlKCdtaW1lL3R5cGVzL3N0YW5kYXJkJyksIHJlcXVpcmUoJ21pbWUvdHlwZXMvb3RoZXInKSk7XG4iXX0=
