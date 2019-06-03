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
    borderRadius: 10,
    marginTop: -54,
    border: '0px solid #dcdcdc',
    // boxShadow: '1px 1px 2px 0 #999',
    overflow: 'hidden',
    padding: 6,
    height: 45,
    fontSize: 17,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '& svg path': {
        fill: '#454545'
    },

    '&:focus, &:hover': {
        textDecoration: 'none',
        outline: 0,
        border: 0,
        backgroundColor: 'transparent',
        borderColor: '#dcdcdc',
        color: '#fff'
    },

    '&:active': {
        backgroundColor: 'transparent',
        // boxShadow: 'inset 1px 1px 2px 0 #999',
        color: '#fff'
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

const connectFlipper = (...selectors) => connectToWebChat(
  ({
      direction
   }) => ({
      direction
  }),
  ...selectors
);

export default connectFlipper(
  ({ styleSet }) => ({ styleSet })
)(({ direction, mode }) =>
  <Context.Consumer>
    { context =>
      <button
        className={ [FLIPPER_CSS, direction, mode].join(' ') }
        data-direction={ mode }
        onClick={ mode === 'left' ? context.scrollOneLeft : context.scrollOneRight }
        type='button'
      >
        { mode === 'left' ?
          <ArrowLeft /> :
          <ArrowRight />
        }
      </button>
    }
  </Context.Consumer>
);

export { connectFlipper }
