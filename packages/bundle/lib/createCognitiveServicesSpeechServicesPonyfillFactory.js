'use strict';

var cov_2bcmb75eaa = (function() {
  var path =
    '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/createCognitiveServicesSpeechServicesPonyfillFactory.js';
  var hash = 'e641d79d81d2e52259412d75e4cd5eb8719a9a03';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/home/guy/leo/BotFramework-WebChat/packages/bundle/src/createCognitiveServicesSpeechServicesPonyfillFactory.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      '1': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 59
        }
      },
      '2': {
        start: {
          line: 21,
          column: 19
        },
        end: {
          line: 21,
          column: 41
        }
      },
      '3': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 32,
          column: 6
        }
      },
      '4': {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 28,
          column: 7
        }
      },
      '5': {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 15
        }
      },
      '6': {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 68
        }
      },
      '7': {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 77
        }
      },
      '8': {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 57,
          column: 4
        }
      },
      '9': {
        start: {
          line: 36,
          column: 21
        },
        end: {
          line: 47,
          column: 6
        }
      },
      '10': {
        start: {
          line: 49,
          column: 96
        },
        end: {
          line: 49,
          column: 104
        }
      },
      '11': {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 56,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createCognitiveServicesSpeechServicesPonyfillFactory',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 76
          }
        },
        loc: {
          start: {
            line: 14,
            column: 3
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 34
          }
        },
        loc: {
          start: {
            line: 25,
            column: 39
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 25
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 35,
            column: 10
          }
        },
        loc: {
          start: {
            line: 35,
            column: 37
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 35
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 18,
              column: 2
            },
            end: {
              line: 33,
              column: 3
            }
          },
          {
            start: {
              line: 18,
              column: 2
            },
            end: {
              line: 33,
              column: 3
            }
          }
        ],
        line: 18
      },
      '1': {
        loc: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 28,
            column: 7
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 26,
              column: 6
            },
            end: {
              line: 28,
              column: 7
            }
          },
          {
            start: {
              line: 26,
              column: 6
            },
            end: {
              line: 28,
              column: 7
            }
          }
        ],
        line: 26
      },
      '2': {
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 76
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 31,
              column: 44
            }
          },
          {
            start: {
              line: 31,
              column: 48
            },
            end: {
              line: 31,
              column: 76
            }
          }
        ],
        line: 31
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'e641d79d81d2e52259412d75e4cd5eb8719a9a03'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createCognitiveServicesSpeechServicesPonyfillFactory;

var _AudioConfig = require('microsoft-cognitiveservices-speech-sdk/distrib/lib/src/sdk/Audio/AudioConfig');

var _SpeechServices = _interopRequireDefault(require('web-speech-cognitive-services/lib/SpeechServices'));

function createCognitiveServicesSpeechServicesPonyfillFactory(_ref) {
  var audioConfig = _ref.audioConfig,
    authorizationToken = _ref.authorizationToken,
    enableTelemetry = _ref.enableTelemetry,
    region = _ref.region,
    speechRecognitionEndpointId = _ref.speechRecognitionEndpointId,
    speechSynthesisDeploymentId = _ref.speechSynthesisDeploymentId,
    speechSynthesisOutputFormat = _ref.speechSynthesisOutputFormat,
    subscriptionKey = _ref.subscriptionKey,
    textNormalization = _ref.textNormalization;
  cov_2bcmb75eaa.f[0]++;
  cov_2bcmb75eaa.s[0]++;

  // HACK: We should prevent AudioContext object from being recreated because they may be blessed and UX-wise expensive to recreate.
  //       In Cognitive Services SDK, if they detect the "end" function is falsy, they will not call "end" but "suspend" instead.
  //       And on next recognition, they will re-use the AudioContext object.
  if (!audioConfig) {
    cov_2bcmb75eaa.b[0][0]++;
    cov_2bcmb75eaa.s[1]++;
    audioConfig = _AudioConfig.AudioConfig.fromDefaultMicrophoneInput();
    var source = (cov_2bcmb75eaa.s[2]++, audioConfig.privSource); // This piece of code is adopted from microsoft-cognitiveservices-speech-sdk/common.browser/MicAudioSource.ts.
    // Instead of closing the AudioContext, it will just suspend it. And the next time it is needed, it will be resumed (by the original code).

    cov_2bcmb75eaa.s[3]++;

    source.destroyAudioContext = function() {
      cov_2bcmb75eaa.f[1]++;
      cov_2bcmb75eaa.s[4]++;

      if (!source.privContext) {
        cov_2bcmb75eaa.b[1][0]++;
        cov_2bcmb75eaa.s[5]++;
        return;
      } else {
        cov_2bcmb75eaa.b[1][1]++;
      }

      cov_2bcmb75eaa.s[6]++;
      source.privRecorder.releaseMediaResources(source.privContext);
      cov_2bcmb75eaa.s[7]++;
      (cov_2bcmb75eaa.b[2][0]++, source.privContext.state === 'running') &&
        (cov_2bcmb75eaa.b[2][1]++, source.privContext.suspend());
    };
  } else {
    cov_2bcmb75eaa.b[0][1]++;
  }

  cov_2bcmb75eaa.s[8]++;
  return function(_ref2) {
    var referenceGrammarID = _ref2.referenceGrammarID;
    cov_2bcmb75eaa.f[2]++;
    var ponyfill =
      (cov_2bcmb75eaa.s[9]++,
      (0, _SpeechServices.default)({
        audioConfig: audioConfig,
        authorizationToken: authorizationToken,
        enableTelemetry: enableTelemetry,
        referenceGrammars: ['luis/'.concat(referenceGrammarID, '-PRODUCTION')],
        region: region,
        speechRecognitionEndpointId: speechRecognitionEndpointId,
        speechSynthesisDeploymentId: speechSynthesisDeploymentId,
        speechSynthesisOutputFormat: speechSynthesisOutputFormat,
        subscriptionKey: subscriptionKey,
        textNormalization: textNormalization
      }));

    var _ref3 = (cov_2bcmb75eaa.s[10]++, ponyfill),
      SpeechGrammarList = _ref3.SpeechGrammarList,
      SpeechRecognition = _ref3.SpeechRecognition,
      speechSynthesis = _ref3.speechSynthesis,
      SpeechSynthesisUtterance = _ref3.SpeechSynthesisUtterance;

    cov_2bcmb75eaa.s[11]++;
    return {
      SpeechGrammarList: SpeechGrammarList,
      SpeechRecognition: SpeechRecognition,
      speechSynthesis: speechSynthesis,
      SpeechSynthesisUtterance: SpeechSynthesisUtterance
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnkiLCJhdWRpb0NvbmZpZyIsImF1dGhvcml6YXRpb25Ub2tlbiIsImVuYWJsZVRlbGVtZXRyeSIsInJlZ2lvbiIsInNwZWVjaFJlY29nbml0aW9uRW5kcG9pbnRJZCIsInNwZWVjaFN5bnRoZXNpc0RlcGxveW1lbnRJZCIsInNwZWVjaFN5bnRoZXNpc091dHB1dEZvcm1hdCIsInN1YnNjcmlwdGlvbktleSIsInRleHROb3JtYWxpemF0aW9uIiwiQXVkaW9Db25maWciLCJmcm9tRGVmYXVsdE1pY3JvcGhvbmVJbnB1dCIsInNvdXJjZSIsInByaXZTb3VyY2UiLCJkZXN0cm95QXVkaW9Db250ZXh0IiwicHJpdkNvbnRleHQiLCJwcml2UmVjb3JkZXIiLCJyZWxlYXNlTWVkaWFSZXNvdXJjZXMiLCJzdGF0ZSIsInN1c3BlbmQiLCJyZWZlcmVuY2VHcmFtbWFySUQiLCJwb255ZmlsbCIsInJlZmVyZW5jZUdyYW1tYXJzIiwiU3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbiIsInNwZWVjaFN5bnRoZXNpcyIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVlLFNBQVNBLG9EQUFULE9BVVo7QUFBQSxNQVREQyxXQVNDLFFBVERBLFdBU0M7QUFBQSxNQVJEQyxrQkFRQyxRQVJEQSxrQkFRQztBQUFBLE1BUERDLGVBT0MsUUFQREEsZUFPQztBQUFBLE1BTkRDLE1BTUMsUUFOREEsTUFNQztBQUFBLE1BTERDLDJCQUtDLFFBTERBLDJCQUtDO0FBQUEsTUFKREMsMkJBSUMsUUFKREEsMkJBSUM7QUFBQSxNQUhEQywyQkFHQyxRQUhEQSwyQkFHQztBQUFBLE1BRkRDLGVBRUMsUUFGREEsZUFFQztBQUFBLE1BRERDLGlCQUNDLFFBRERBLGlCQUNDO0FBQUE7QUFBQTs7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFJLENBQUNSLFdBQUwsRUFBa0I7QUFBQTtBQUFBO0FBQ2hCQSxJQUFBQSxXQUFXLEdBQUdTLHlCQUFZQywwQkFBWixFQUFkO0FBRUEsUUFBTUMsTUFBTSwyQkFBR1gsV0FBVyxDQUFDWSxVQUFmLENBQVosQ0FIZ0IsQ0FLaEI7QUFDQTs7QUFOZ0I7O0FBT2hCRCxJQUFBQSxNQUFNLENBQUNFLG1CQUFQLEdBQTZCLFlBQU07QUFBQTtBQUFBOztBQUNqQyxVQUFJLENBQUNGLE1BQU0sQ0FBQ0csV0FBWixFQUF5QjtBQUFBO0FBQUE7QUFDdkI7QUFDRCxPQUZEO0FBQUE7QUFBQTs7QUFEaUM7QUFLakNILE1BQUFBLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQkMscUJBQXBCLENBQTBDTCxNQUFNLENBQUNHLFdBQWpEO0FBTGlDO0FBTWpDLGlDQUFBSCxNQUFNLENBQUNHLFdBQVAsQ0FBbUJHLEtBQW5CLEtBQTZCLFNBQTdCLGdDQUEwQ04sTUFBTSxDQUFDRyxXQUFQLENBQW1CSSxPQUFuQixFQUExQztBQUNELEtBUEQ7QUFRRCxHQWZEO0FBQUE7QUFBQTs7QUFKQztBQXFCRCxTQUFPLGlCQUE0QjtBQUFBLFFBQXpCQyxrQkFBeUIsU0FBekJBLGtCQUF5QjtBQUFBO0FBQ2pDLFFBQU1DLFFBQVEsMkJBQUcsNkJBQWU7QUFDOUJwQixNQUFBQSxXQUFXLEVBQVhBLFdBRDhCO0FBRTlCQyxNQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUY4QjtBQUc5QkMsTUFBQUEsZUFBZSxFQUFmQSxlQUg4QjtBQUk5Qm1CLE1BQUFBLGlCQUFpQixFQUFFLGdCQUFTRixrQkFBVCxpQkFKVztBQUs5QmhCLE1BQUFBLE1BQU0sRUFBTkEsTUFMOEI7QUFNOUJDLE1BQUFBLDJCQUEyQixFQUEzQkEsMkJBTjhCO0FBTzlCQyxNQUFBQSwyQkFBMkIsRUFBM0JBLDJCQVA4QjtBQVE5QkMsTUFBQUEsMkJBQTJCLEVBQTNCQSwyQkFSOEI7QUFTOUJDLE1BQUFBLGVBQWUsRUFBZkEsZUFUOEI7QUFVOUJDLE1BQUFBLGlCQUFpQixFQUFqQkE7QUFWOEIsS0FBZixDQUFILENBQWQ7O0FBRGlDLHlDQWMyRFksUUFkM0Q7QUFBQSxRQWN6QkUsaUJBZHlCLFNBY3pCQSxpQkFkeUI7QUFBQSxRQWNOQyxpQkFkTSxTQWNOQSxpQkFkTTtBQUFBLFFBY2FDLGVBZGIsU0FjYUEsZUFkYjtBQUFBLFFBYzhCQyx3QkFkOUIsU0FjOEJBLHdCQWQ5Qjs7QUFBQTtBQWdCakMsV0FBTztBQUNMSCxNQUFBQSxpQkFBaUIsRUFBakJBLGlCQURLO0FBRUxDLE1BQUFBLGlCQUFpQixFQUFqQkEsaUJBRks7QUFHTEMsTUFBQUEsZUFBZSxFQUFmQSxlQUhLO0FBSUxDLE1BQUFBLHdCQUF3QixFQUF4QkE7QUFKSyxLQUFQO0FBTUQsR0F0QkQ7QUF1QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb0NvbmZpZyB9IGZyb20gJ21pY3Jvc29mdC1jb2duaXRpdmVzZXJ2aWNlcy1zcGVlY2gtc2RrL2Rpc3RyaWIvbGliL3NyYy9zZGsvQXVkaW8vQXVkaW9Db25maWcnO1xuaW1wb3J0IGNyZWF0ZVBvbnlmaWxsIGZyb20gJ3dlYi1zcGVlY2gtY29nbml0aXZlLXNlcnZpY2VzL2xpYi9TcGVlY2hTZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3Rvcnkoe1xuICBhdWRpb0NvbmZpZyxcbiAgYXV0aG9yaXphdGlvblRva2VuLFxuICBlbmFibGVUZWxlbWV0cnksXG4gIHJlZ2lvbixcbiAgc3BlZWNoUmVjb2duaXRpb25FbmRwb2ludElkLFxuICBzcGVlY2hTeW50aGVzaXNEZXBsb3ltZW50SWQsXG4gIHNwZWVjaFN5bnRoZXNpc091dHB1dEZvcm1hdCxcbiAgc3Vic2NyaXB0aW9uS2V5LFxuICB0ZXh0Tm9ybWFsaXphdGlvblxufSkge1xuICAvLyBIQUNLOiBXZSBzaG91bGQgcHJldmVudCBBdWRpb0NvbnRleHQgb2JqZWN0IGZyb20gYmVpbmcgcmVjcmVhdGVkIGJlY2F1c2UgdGhleSBtYXkgYmUgYmxlc3NlZCBhbmQgVVgtd2lzZSBleHBlbnNpdmUgdG8gcmVjcmVhdGUuXG4gIC8vICAgICAgIEluIENvZ25pdGl2ZSBTZXJ2aWNlcyBTREssIGlmIHRoZXkgZGV0ZWN0IHRoZSBcImVuZFwiIGZ1bmN0aW9uIGlzIGZhbHN5LCB0aGV5IHdpbGwgbm90IGNhbGwgXCJlbmRcIiBidXQgXCJzdXNwZW5kXCIgaW5zdGVhZC5cbiAgLy8gICAgICAgQW5kIG9uIG5leHQgcmVjb2duaXRpb24sIHRoZXkgd2lsbCByZS11c2UgdGhlIEF1ZGlvQ29udGV4dCBvYmplY3QuXG4gIGlmICghYXVkaW9Db25maWcpIHtcbiAgICBhdWRpb0NvbmZpZyA9IEF1ZGlvQ29uZmlnLmZyb21EZWZhdWx0TWljcm9waG9uZUlucHV0KCk7XG5cbiAgICBjb25zdCBzb3VyY2UgPSBhdWRpb0NvbmZpZy5wcml2U291cmNlO1xuXG4gICAgLy8gVGhpcyBwaWVjZSBvZiBjb2RlIGlzIGFkb3B0ZWQgZnJvbSBtaWNyb3NvZnQtY29nbml0aXZlc2VydmljZXMtc3BlZWNoLXNkay9jb21tb24uYnJvd3Nlci9NaWNBdWRpb1NvdXJjZS50cy5cbiAgICAvLyBJbnN0ZWFkIG9mIGNsb3NpbmcgdGhlIEF1ZGlvQ29udGV4dCwgaXQgd2lsbCBqdXN0IHN1c3BlbmQgaXQuIEFuZCB0aGUgbmV4dCB0aW1lIGl0IGlzIG5lZWRlZCwgaXQgd2lsbCBiZSByZXN1bWVkIChieSB0aGUgb3JpZ2luYWwgY29kZSkuXG4gICAgc291cmNlLmRlc3Ryb3lBdWRpb0NvbnRleHQgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNvdXJjZS5wcml2Q29udGV4dCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNvdXJjZS5wcml2UmVjb3JkZXIucmVsZWFzZU1lZGlhUmVzb3VyY2VzKHNvdXJjZS5wcml2Q29udGV4dCk7XG4gICAgICBzb3VyY2UucHJpdkNvbnRleHQuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBzb3VyY2UucHJpdkNvbnRleHQuc3VzcGVuZCgpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gKHsgcmVmZXJlbmNlR3JhbW1hcklEIH0pID0+IHtcbiAgICBjb25zdCBwb255ZmlsbCA9IGNyZWF0ZVBvbnlmaWxsKHtcbiAgICAgIGF1ZGlvQ29uZmlnLFxuICAgICAgYXV0aG9yaXphdGlvblRva2VuLFxuICAgICAgZW5hYmxlVGVsZW1ldHJ5LFxuICAgICAgcmVmZXJlbmNlR3JhbW1hcnM6IFtgbHVpcy8ke3JlZmVyZW5jZUdyYW1tYXJJRH0tUFJPRFVDVElPTmBdLFxuICAgICAgcmVnaW9uLFxuICAgICAgc3BlZWNoUmVjb2duaXRpb25FbmRwb2ludElkLFxuICAgICAgc3BlZWNoU3ludGhlc2lzRGVwbG95bWVudElkLFxuICAgICAgc3BlZWNoU3ludGhlc2lzT3V0cHV0Rm9ybWF0LFxuICAgICAgc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgdGV4dE5vcm1hbGl6YXRpb25cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgU3BlZWNoR3JhbW1hckxpc3QsIFNwZWVjaFJlY29nbml0aW9uLCBzcGVlY2hTeW50aGVzaXMsIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSB9ID0gcG9ueWZpbGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgU3BlZWNoR3JhbW1hckxpc3QsXG4gICAgICBTcGVlY2hSZWNvZ25pdGlvbixcbiAgICAgIHNwZWVjaFN5bnRoZXNpcyxcbiAgICAgIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZVxuICAgIH07XG4gIH07XG59XG4iXX0=
