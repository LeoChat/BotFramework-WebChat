import PropTypes from 'prop-types';
import React from 'react';

import { localize } from '../Localization/Localize';
import connectToWebChat from '../connectToWebChat';
import IconButton from './IconButton';
import SendIcon from './Assets/SendIcon';

const connectSendButton = (...selectors) =>
  connectToWebChat(
    ({ direction, disabled, language, submitSendBox }) => ({
      direction,
      disabled,
      language,
      submitSendBox
    }),
    ...selectors
  );

const SendButton = ({ direction, disabled, language, submitSendBox }) => (
  <IconButton alt={localize('Send', language)} direction={direction} disabled={disabled} onClick={submitSendBox}>
    <SendIcon />
  </IconButton>
);

SendButton.defaultProps = {
  direction: 'ltr',
  disabled: false
};

SendButton.propTypes = {
  direction: PropTypes.string,
  disabled: PropTypes.bool,
  language: PropTypes.string.isRequired,
  submitSendBox: PropTypes.func.isRequired
};

export default connectSendButton()(SendButton);

export { connectSendButton };
