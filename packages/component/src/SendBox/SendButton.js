import PropTypes from 'prop-types';
import React from 'react';

import { localize } from '../Localization/Localize';
import connectToWebChat from '../connectToWebChat';
import IconButton from './IconButton';
import SendIcon from './Assets/SendIcon';

const connectSendButton = (...selectors) => connectToWebChat (
  ({
    disabled,
    focusSendBox,
    language,
    direction,
    sendBoxValue,
    setSendBox,
    submitSendBox
  }) => ({
    click: () => {
      setSendBox(sendBoxValue.trim());
      submitSendBox();
      focusSendBox();
    },
    direction,
    disabled,
    language
  }),
  ...selectors
)

const SendButton = ({ click, disabled, language, direction }) =>
  <IconButton
    alt={ localize('Send', language) }
    direction={ direction }
    disabled={ disabled }
    onClick={ click }
  >
    <SendIcon />
  </IconButton>;

SendButton.defaultProps = {
  direction: 'ltr',
  disabled: false
};

SendButton.propTypes = {
  click: PropTypes.func.isRequired,
  direction: PropTypes.bool,
  disabled: PropTypes.bool,
  language: PropTypes.string.isRequired
};

export default connectSendButton()(SendButton)

export { connectSendButton }
