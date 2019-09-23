export * from './index-minimal';
import createCognitiveServicesBingSpeechPonyfillFactory from './createCognitiveServicesBingSpeechPonyfillFactory';
import createCognitiveServicesSpeechServicesPonyfillFactory from './createCognitiveServicesSpeechServicesPonyfillFactory';
import createStyleSet from './adaptiveCards/Styles/createStyleSetWithAdaptiveCards';
import ReactWebChat from './FullReactWebChat';
import renderMarkdown from './renderMarkdown';
declare const renderWebChat: any;
export declare const createDirectLine: (options: any) => any;
export default ReactWebChat;
export {
  createCognitiveServicesBingSpeechPonyfillFactory,
  createCognitiveServicesSpeechServicesPonyfillFactory,
  createStyleSet,
  renderMarkdown,
  renderWebChat
};
