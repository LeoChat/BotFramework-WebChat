import BasicWebChat from './BasicWebChat';
import { localize } from './Localization/Localize';
import concatMiddleware from './Middleware/concatMiddleware';
import connectToWebChat from './connectToWebChat';
import Context from './WebChatUIContext';
import createCoreActivityMiddleware from './Middleware/Activity/createCoreMiddleware';
import createCoreAttachmentMiddleware from './Middleware/Attachment/createCoreMiddleware';
import createStyleSet from './Styles/createStyleSet';
import defaultStyleOptions from './Styles/defaultStyleOptions';
import getTabIndex from './Utils/TypeFocusSink/getTabIndex';
import * as hooks from './hooks/index';
declare const version: string;
declare const Components: {
  Composer: any;
  Localize: any;
  AudioContent: any;
  HTMLVideoContent: any;
  ImageContent: any;
  TextContent: any;
  VideoContent: any;
  VimeoContent: any;
  YouTubeContent: any;
  Avatar: any;
  Bubble: any;
  CarouselLayout: any;
  ErrorBox: any;
  SendStatus: any;
  SpeakActivity: any;
  StackedLayout: any;
  Timestamp: any;
  connectSendStatus: any;
  connectSpeakActivity: any;
  connectStackedLayout: any;
  DictationInterims: any;
  MicrophoneButton: any;
  SendButton: any;
  SendTextBox: any;
  SuggestedActions: any;
  UploadButton: any;
  connectDictationInterims: any;
  connectMicrophoneButton: any;
  connectSendButton: any;
  connectSendTextBox: any;
  connectSuggestedActions: any;
  connectUploadButton: any;
};
export default BasicWebChat;
export {
  Components,
  concatMiddleware,
  connectToWebChat,
  Context,
  createCoreActivityMiddleware,
  createCoreAttachmentMiddleware,
  createStyleSet,
  defaultStyleOptions,
  getTabIndex,
  hooks,
  localize,
  version
};
