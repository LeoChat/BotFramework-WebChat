import React from 'react';
import { Context } from 'react-film';
import ArrowRight from './Assets/ArrowRight';
import ArrowLeft from './Assets/ArrowLeft';
import { css } from 'glamor';

import connectToWebChat from '../connectToWebChat';

const FLIPPER_CSS = css({
  position: 'absolute',
  backgroundColor: 'transparent',
  color: '#dcdcdc',
  borderRadius: 30,
  marginTop: -50,
  border: '1px solid #dcdcdc',
  opacity: 0.1,
  boxShadow: '1px 1px 1px 0 rgba(155,155,155, 0.3)',
  overflow: 'hidden',
  fontSize: 17,
  padding: 3,
  cursor: 'pointer',

  '& svg path': {
    fill: '#454545'
  },

  '&:focus, &:hover': {
    outline: 0,
    border: '1px solid #bcbcbc',
    opacity: 0.9,
    boxShadow: '1px 1px 1px 0 rgba(155,155,155, 0.3)'
  },

  '&:active': {
    outline: 0,
    border: 0,
    opacity: 0.9
  },

  '&.right.ltr': {
    right: 0
  },

  '&.left.ltr': {
    left: 0
  },

  '&.rtl': {
    transform: 'scaleX(-1)',
    filter: 'FlipH'
  },

  '&.right.rtl': {
    left: 0
  },

  '&.left.rtl': {
    right: 0
  }
});

const connectFlipper = (...selectors) =>
  connectToWebChat(
    ({ direction }) => ({
      direction
    }),
    ...selectors
  );

export default connectFlipper(({ styleSet }) => ({ styleSet }))(({ direction, mode }) => (
  <Context.Consumer>
    {context => (
      <button
        className={[FLIPPER_CSS, direction, mode].join(' ')}
        data-direction={mode}
        onClick={mode === 'left' ? context.scrollOneLeft : context.scrollOneRight}
        type="button"
      >
        {mode === 'left' ? <ArrowLeft /> : <ArrowRight />}
      </button>
    )}
  </Context.Consumer>
));

export { connectFlipper };
