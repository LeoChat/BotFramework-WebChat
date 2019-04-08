export * from './index-minimal';

import addVersion from './addVersion';
import coreRenderWebChat from './renderWebChat';
import ReactWebChat from './FullReactWebChat';
import renderMarkdown from './renderMarkdown';

const renderWebChat = coreRenderWebChat.bind(null, ReactWebChat);

export default ReactWebChat

export {
  renderMarkdown,
  renderWebChat,
  ReactWebChat
}

window['WebChat'] = {
  ...window['WebChat'],
  ReactWebChat,
  renderMarkdown,
  renderWebChat
};

addVersion('full');
