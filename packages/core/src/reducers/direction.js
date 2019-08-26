import { SET_LANGUAGE } from '../actions/setLanguage';

// eslint-disable-next-line no-unused-vars
const DEFAULT_STATE = 'ltr';

export default function(state = 'ltr', { payload, type }) {
  switch (type) {
    case SET_LANGUAGE:
      // eslint-disable-next-line require-unicode-regexp
      state = /^he(-IL)?$/i.test(payload.language) ? 'rtl' : 'ltr';
      break;

    default:
      break;
  }

  return state;
}
