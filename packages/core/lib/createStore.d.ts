export default function createWebChatStore(
  initialState: any,
  ...middlewares: any[]
): import('redux').Store<
  {
    activities: unknown;
    clockSkewAdjustment: unknown;
    connectivityStatus: unknown;
    dictateInterims: unknown;
    dictateState: unknown;
    direction: unknown;
    language: unknown;
    lastTypingAt: unknown;
    readyState: unknown;
    referenceGrammarID: unknown;
    sendBoxValue: unknown;
    sendTimeout: unknown;
    sendTypingIndicator: unknown;
    shouldSpeakIncomingActivity: unknown;
    suggestedActions: unknown;
    sendTyping: unknown;
  },
  import('redux').AnyAction
> & {
  dispatch: unknown;
};
