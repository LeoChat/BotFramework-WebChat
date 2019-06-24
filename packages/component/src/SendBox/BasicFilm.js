import React from 'react';
import { css } from 'glamor';

import connectToWebChat from '../connectToWebChat';
import { Composer, Dots, FilmStrip, ScrollBar } from 'react-film';
import Flipper from './Flipper';

const BASIC_FILM_CSS = css({});
const FILM_STRIP_CSS = css({
    marginLeft: 20,
    marginRight: 20
});

const FLIPPERS_CONTAINER_CSS = css({
    width: '100%',
    position: 'relative'
});

export default connectToWebChat(
  ({ styleSet }) => ({ styleSet })
)(({ children, showDots }) =>
  <Composer>
    <div className={ BASIC_FILM_CSS }>
      <div className={ FILM_STRIP_CSS }>
          <FilmStrip>
              { children }
          </FilmStrip>
      </div>
      <ScrollBar />
      <div className={ FLIPPERS_CONTAINER_CSS }>
        <Flipper mode="left" />
        <Flipper mode="right" />
      </div>
    </div>
    { showDots &&
    <Dots>
      { () => '.' }
    </Dots>
  }
  </Composer>
)
